import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, services } = await request.json();

    // Validate request data
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Name, email, phone, and message are required." },
        { status: 400 }
      );
    }

    // Configure the transporter with environment variables
    const host = process.env.SMTP_HOST || "";
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER || "";
    const pass = process.env.SMTP_PASS || "";
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || "sales@cueserve.com";

    // If SMTP details are not configured, log it and return a placeholder success or error
    if (!host || !user || !pass) {
      console.warn("SMTP configuration is missing. Printing submission to console:");
      console.log({ name, email, phone, message, services });
      
      // We return success to the client for preview/dev mode, but notify that it was logged to console
      return NextResponse.json({
        success: true,
        message: "Message received! (Dev mode: logged to server console as SMTP is not configured).",
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const servicesStr = Array.isArray(services) && services.length > 0 
      ? services.join(", ") 
      : "None selected";

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: receiver,
      subject: `New Lead: ${name} is interested in ${servicesStr}`,
      text: `
New Lead from Cueserve Website:
--------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Services: ${servicesStr}

Message:
${message}
      `,
      html: `
        <div style="background-color: #F4F8FF; padding: 40px 20px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0C1E43;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 54, 162, 0.05); border: 1px solid #D1E0FF;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #0136A2 0%, #266DFB 100%); padding: 35px 40px; text-align: left;">
              <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">New Project Inquiry</h2>
              <p style="margin: 6px 0 0 0; color: #EBF3FF; font-size: 14px; opacity: 0.9;">Submission from <span style="color: #FFFFFF; font-weight: 600; text-decoration: none;">cueserve.com</span></p>
            </div>
            
            <!-- Body -->
            <div style="padding: 40px;">
              <p style="margin-top: 0; font-size: 16px; line-height: 1.6; color: #4A5B7D;">
                You have received a new contact submission from your website portfolio. Here are the client's requirements:
              </p>
              
              <!-- Lead Card -->
              <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #64748B; width: 35%;">Client Name:</td>
                    <td style="padding: 8px 0; font-size: 15px; font-weight: 500; color: #0C1E43;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #64748B;">Email Address:</td>
                    <td style="padding: 8px 0; font-size: 15px; font-weight: 500; color: #266DFB;"><a href="mailto:${email}" style="color: #266DFB; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #64748B;">Phone Number:</td>
                    <td style="padding: 8px 0; font-size: 15px; font-weight: 500; color: #0C1E43;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #64748B; vertical-align: top;">Services:</td>
                    <td style="padding: 8px 0; font-size: 14px; font-weight: 500; color: #0136A2; line-height: 1.4;">
                      <span style="background-color: #EBF3FF; border: 1px solid #D1E0FF; padding: 4px 10px; border-radius: 20px; display: inline-block;">${servicesStr}</span>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Message Box -->
              <div>
                <h4 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">Message Details</h4>
                <div style="background-color: #FFFFFF; border-left: 4px solid #266DFB; padding: 16px 20px; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.02); font-size: 15px; line-height: 1.6; color: #0C1E43; white-space: pre-wrap;">${message}</div>
              </div>
              
              <!-- Action Button -->
              <div style="margin-top: 35px; text-align: center;">
                <a href="mailto:${email}" style="background: linear-gradient(135deg, #0136A2 0%, #266DFB 100%); color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 50px; font-size: 15px; font-weight: 600; display: inline-block; box-shadow: 0 4px 12px rgba(38, 109, 251, 0.25);">Reply to Client</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #F8FAFC; border-t: 1px solid #E2E8F0; padding: 20px; text-align: center; font-size: 12px; color: #94A3B8;">
              © ${new Date().getFullYear()} Cueserve. All rights reserved.
            </div>
            
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
