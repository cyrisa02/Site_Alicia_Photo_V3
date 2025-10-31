// api/contact/index.ts

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, phone, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Vous pouvez changer cela après vérification de domaine
      to: ['alica.gpt.02@gmail.com'], // 👈 VOTRE ADRESSE EMAIL ICI
      subject: `Nouveau message de ${name} (${company})`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Entreprise :</strong> ${company}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Message :</strong></p>
        <pre>${message}</pre>
        <hr />
        <p>Envoyé depuis votre site web.</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}