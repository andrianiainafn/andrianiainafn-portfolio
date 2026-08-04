import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer relies on Node.js APIs (net/tls) and can't run on the Edge runtime.
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { name: 120, email: 200, message: 5000 };

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  if (name.length > MAX_LEN.name || email.length > MAX_LEN.email || message.length > MAX_LEN.message) {
    return NextResponse.json({ ok: false, error: "too_long" }, { status: 400 });
  }

  const user = process.env.MY_EMAIL;
  const pass = process.env.MY_PASSWORD;
  if (!user || !pass) {
    console.error("contact route: MY_EMAIL / MY_PASSWORD env vars are not set");
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio — ${name}" <${user}>`,
      to: user,
      replyTo: email,
      subject: `Nouveau message de ${name} (portfolio)`,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact route: sendMail failed", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
