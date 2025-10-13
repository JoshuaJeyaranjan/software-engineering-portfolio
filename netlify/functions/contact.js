import nodemailer from "nodemailer";

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: "All fields are required" }) };
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email message
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New message from ${name}: ${subject}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return { statusCode: 200, body: JSON.stringify({ message: "Message sent successfully!" }) };
  } catch (error) {
    console.error("Email send error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send message" }) };
  }
}