import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phoneNumber, service, message } = body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Message validation
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission
============================

From: ${firstName} ${lastName}
Email: ${email}
Phone: ${phoneNumber || "Not provided"}
Service: ${service || "Not specified"}

Message:
${message}

============================
This email was sent from your portfolio website contact form.
    `.trim();

    // TODO: Integrate with email service
    // Options:
    // 1. SendGrid - https://sendgrid.com/
    // 2. Mailgun - https://www.mailgun.com/
    // 3. Brevo (Sendinblue) - https://www.brevo.com/
    // 4. Gmail via Nodemailer - https://nodemailer.com/

    // For now, log to console (in production, integrate with email service)
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // Store in in-memory log (in production, use database)
    // This is a placeholder - in real implementation, save to database or send email
    const submissions = global.contactSubmissions || [];
    submissions.push({
      firstName,
      lastName,
      email,
      phoneNumber,
      service,
      message,
      timestamp: new Date().toISOString(),
    });
    global.contactSubmissions = submissions;

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out! I'll get back to you as soon as possible.",
        data: {
          email,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form. Please try again later." },
      { status: 500 }
    );
  }
}

// GET endpoint for testing
export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint", method: "POST" },
    { status: 200 }
  );
}
