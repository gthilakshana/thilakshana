import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `🚀 New Lead: ${subject || 'Contact from ' + name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container {
              background-color: #0a0a0a;
              color: #ffffff;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              padding: 40px;
              border-radius: 24px;
              border: 1px solid #222;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
            }
            .logo {
              font-size: 24px;
              font-weight: 800;
              letter-spacing: 4px;
              color: #3b82f6;
              text-transform: uppercase;
              margin-bottom: 10px;
            }
            .badge {
              display: inline-block;
              padding: 6px 12px;
              background: rgba(59, 130, 246, 0.1);
              border: 1px solid rgba(59, 130, 246, 0.2);
              border-radius: 100px;
              color: #3b82f6;
              font-size: 10px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            .content {
              background: rgba(255, 255, 255, 0.03);
              padding: 30px;
              border-radius: 20px;
              border: 1px solid rgba(255, 255, 255, 0.05);
            }
            .field {
              margin-bottom: 25px;
            }
            .label {
              font-size: 10px;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: #666;
              margin-bottom: 8px;
            }
            .value {
              font-size: 16px;
              color: #ddd;
              line-height: 1.6;
            }
            .message-box {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid rgba(255, 255, 255, 0.05);
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              font-size: 11px;
              color: #444;
              letter-spacing: 1px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Thilakshana</div>
              <div class="badge">New Contact Inquiry</div>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">From</div>
                <div class="value"><strong>${name}</strong> (${email})</div>
              </div>
              
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject || 'General Inquiry'}</div>
              </div>
              
              <div class="message-box">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              &copy; 2026 Thilakshana Portfolio Admin Terminal. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}
