import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Resend uses this domain during testing
      to: [process.env.USER_EMAIL], // Your Gmail address here
      replyTo: email,
      subject: `New Message from ${name} on your Portfolio!`,
      html: `
        <h3>Message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json(data);
  } catch (error) {
    console.error('Resend API Error:', error);
    res.status(500).json({ error: 'Failed to send the email.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
