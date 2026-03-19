// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.CONTACT_EMAIL ?? "info@aboardstudy.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // ── 1. Send notification email to admin ──
    await resend.emails.send({
      from: "Aboard Study <onboarding@resend.dev>", // change after domain verify
      to: ADMIN_EMAIL,
      subject: `New Contact: ${subject || "General Inquiry"} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:8px; font-weight:bold;">Name</td><td style="padding:8px;">${name}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Phone</td><td style="padding:8px;">${phone || "—"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Subject</td><td style="padding:8px;">${subject || "—"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold; vertical-align:top;">Message</td><td style="padding:8px;">${message}</td></tr>
          </table>
        </div>
      `,
    });

    // ── 2. Send confirmation email to user ──
    await resend.emails.send({
      from: "Aboard Study <onboarding@resend.dev>",
      to: email,
      subject: "We received your message — Aboard Study",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Hi ${name}, thank you for reaching out!</h2>
          <p>We've received your message and will get back to you within <strong>24 hours</strong>.</p>
          <p>In the meantime, feel free to WhatsApp us at <strong>+60 16-749 5926</strong> for urgent queries.</p>
          <br/>
          <p style="color: #64748b;">— Aboard Study Team</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We'll respond within 24 hours.",
    });

  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}