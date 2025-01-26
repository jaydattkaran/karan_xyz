import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const emailStyles = {
  container:
    "font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;",
  header: "color: #2D3748; margin-bottom: 10px;",
  messageBox:
    "background-color: #F7FAFC; padding: 10px; border-radius: 8px; margin: 10px 0; border: 1px solid #E2E8F0;",
  message:
    "white-space: pre-line; background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px; border: 1px solid #E2E8F0;",
  metadata: "color: #4A5568; margin: 5px 0;",
  footer: "color: #718096; font-size: 1rem; margin-top: 10px;",
  divider: "border: 1px solid #E2E8F0; margin: 10px 0;",
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASS || "",
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Send email notifications
  const formattedMessage = `
        Dear Jaydatt,
  
        I hope this message finds you well.
  
        ${message}
  
        Best regards,
        ${name}
        ${email}
        `;

  //   const mailOptions = {
  //     from: process.env.EMAIL_USER,
  //     to: "thekaran.abc@gmail.com",
  //     subject: `New Message from ${name}`,
  //     html: `
  //           <div style="${emailStyles.container}">
  //           <div style="${emailStyles.header}">
  //           <h2>You've received a new message!</h2>
  //           </div>

  //           <div style="${emailStyles.messageBox}">
  //           <div style="${emailStyles.metadata}">
  //           <strong>From:</strong> ${name} (${email})
  //           </div>

  //           <div style="${emailStyles.message}">
  //           ${formattedMessage}
  //           </div>
  //           </div>

  //           <div style="${emailStyles.footer}">
  //           <p>This message was sent via X-Mailer</p>
  //           </div>
  //           </div>
  //           `,
  //   };
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "thekaran.abc@gmail.com",
      subject: `New Message from ${name}`,
      html: `
          <div style="${emailStyles.container}">
          <div style="${emailStyles.header}">
          <h2>You've received a new message!</h2>
          </div>
          
          <div style="${emailStyles.messageBox}">
          <div style="${emailStyles.metadata}">
          <strong>From:</strong> ${name} (${email})
          </div>
          
          <div style="${emailStyles.message}">
          ${formattedMessage}
          </div>
          </div>
          
          <div style="${emailStyles.footer}">
          <p>This message was sent via Nodemailer</p>
          </div>
          </div>
          `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
