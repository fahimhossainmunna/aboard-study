import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── FIX: Build error theke bachar jonno condition ──
// Direct 'new Resend' na likhe agey check kora hochhe key ache kina
const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

const ADMIN_EMAIL = process.env.CONTACT_EMAIL ?? "info@aboardstudy.com";

export async function POST(req: NextRequest) {
  try {
    // ── FIX: API Key missing thakle error handle kora ──
    if (!resend) {
      console.error("Critical Error: RESEND_API_KEY is not defined in Environment Variables.");
      return NextResponse.json(
        { success: false, error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const {
      fullName, dob, email, phone, city, gender,
      qualification, gpa, institution, completionYear,
      englishTest, englishScore,
      preferredUniversity, preferredCourse,
      preferredIntake, budget, scholarship, notes,
    } = body;

    // Basic Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Full name, email and phone are required." },
        { status: 400 }
      );
    }

    const applicationId = `APP-${Date.now()}`;

    // ── 1. Notify admin ──
    await resend.emails.send({
      from: "Aboard Study <onboarding@resend.dev>",
      to: ADMIN_EMAIL,
      subject: `New Application: ${fullName} → ${preferredUniversity || "Not specified"} [${applicationId}]`,
      html: `
        <div style="font-family: sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px;">
          <h2 style="color: #1e40af;">New Student Application</h2>
          <p style="color:#64748b;">Application ID: <strong>${applicationId}</strong></p>

          <h3 style="color:#334155; border-bottom:1px solid #e2e8f0; padding-bottom:8px;">Personal Info</h3>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:8px; font-weight:bold; width: 150px;">Full Name</td><td>${fullName}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Email</td><td>${email}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Phone</td><td>${phone}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Date of Birth</td><td>${dob || "—"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">City</td><td>${city || "—"}</td></tr>
          </table>

          <h3 style="color:#334155; border-bottom:1px solid #e2e8f0; padding-bottom:8px; margin-top:20px;">Education</h3>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:8px; font-weight:bold; width: 150px;">Qualification</td><td>${qualification || "—"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">GPA / Result</td><td>${gpa || "—"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Institution</td><td>${institution || "—"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">English Score</td><td>${englishScore || "—"}</td></tr>
          </table>

          <h3 style="color:#334155; border-bottom:1px solid #e2e8f0; padding-bottom:8px; margin-top:20px;">Preferences</h3>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:8px; font-weight:bold; width: 150px;">University</td><td>${preferredUniversity || "—"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Course</td><td>${preferredCourse || "—"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Intake</td><td>${preferredIntake || "—"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold; vertical-align:top;">Notes</td><td>${notes || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    // ── 2. Confirm to student ──
    await resend.emails.send({
      from: "Aboard Study <onboarding@resend.dev>",
      to: email,
      subject: `Application Received — ${applicationId} | Aboard Study`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px;">
          <h2 style="color: #1e40af;">Hi ${fullName}, your application is received! 🎓</h2>
          <p>Application ID: <strong>${applicationId}</strong></p>
          <p>Our advisor will contact you within <strong>24 hours</strong> to discuss your study abroad plans.</p>

          <div style="background:#f0f9ff; border-left:4px solid #1e40af; padding:16px; margin:20px 0; border-radius:4px;">
            <p style="margin:0; font-weight:bold;">Summary</p>
            <p style="margin:8px 0 0;">🎓 Uni: ${preferredUniversity || "To be advised"}</p>
            <p style="margin:4px 0 0;">📚 Course: ${preferredCourse || "To be advised"}</p>
          </div>

          <p>WhatsApp Us: <strong>+60 16-749 5926</strong></p>
          <p style="color:#64748b; font-size: 12px; margin-top: 30px;">— Aboard Study Team</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
      applicationId,
    });

  } catch (error) {
    console.error("Apply email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit. Please try again later." },
      { status: 500 }
    );
  }
}