import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

const ADMIN_EMAIL = process.env.CONTACT_EMAIL ?? "info@aboardstudy.com";

export async function POST(req: NextRequest) {
  try {
    if (!resend) {
      console.error("Resend API Key is missing in environment variables.");
      return NextResponse.json(
        { success: false, error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // ── 1. Send notification email to admin ──
    await resend.emails.send({
      from: "Aboard Study <onboarding@resend.dev>", 
      to: ADMIN_EMAIL,
      subject: `New Contact: ${subject || "General Inquiry"} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">New Contact Form Submission</h2>
          <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding:10px; font-weight:bold; color: #475569; width: 120px;">Name</td><td style="padding:10px; color: #1e293b;">${name}</td></tr>
            <tr><td style="padding:10px; font-weight:bold; color: #475569;">Email</td><td style="padding:10px; color: #1e293b;">${email}</td></tr>
            <tr><td style="padding:10px; font-weight:bold; color: #475569;">Phone</td><td style="padding:10px; color: #1e293b;">${phone || "—"}</td></tr>
            <tr><td style="padding:10px; font-weight:bold; color: #475569;">Subject</td><td style="padding:10px; color: #1e293b;">${subject || "—"}</td></tr>
            <tr><td style="padding:10px; font-weight:bold; color: #475569; vertical-align:top;">Message</td><td style="padding:10px; color: #1e293b; line-height: 1.6;">${message}</td></tr>
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
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
          <h2 style="color: #1e40af;">Hi ${name}, thank you for reaching out!</h2>
          <p style="color: #475569; font-size: 16px; line-height: 1.6;">We've received your message regarding "<strong>${subject || "General Inquiry"}</strong>" and will get back to you within <strong>24 hours</strong>.</p>
          
          <div style="background: #f0f9ff; border-left: 4px solid #1e40af; padding: 16px; margin: 24px 0; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #1e40af;">Need urgent help?</p>
            <p style="margin: 8px 0 0; color: #1e3a8a;">WhatsApp us at: <strong>+60 16-749 5926</strong></p>
          </div>
          
          <p style="color: #64748b; font-size: 14px; margin-top: 32px;">Best Regards,<br/><strong>Aboard Study Team</strong></p>
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