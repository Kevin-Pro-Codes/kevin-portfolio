import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // 1. Pegamos todos os possíveis campos de ambos os formulários
  const { 
    name, 
    email, 
    message, 
    projectInterest, 
    preferredDate, 
    preferredTime, 
    subject 
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      // 2. Se vier um subject específico (da Demo), usamos ele. Se não, usamos o padrão.
      subject: subject || `New Message from ${name}`, 
      // 3. Montamos o texto de forma inteligente
      text: `
        Nome: ${name}
        Email: ${email}
        ${projectInterest ? `Interesse: ${projectInterest}` : ''}
        ${preferredDate ? `Data Sugerida: ${preferredDate}` : ''}
        ${preferredTime ? `Horário Sugerido: ${preferredTime}` : ''}

        Mensagem:
        ${message || 'Sem mensagem adicional.'}
      `.trim(), // O .trim() limpa espaços vazios se os campos de demo não existirem
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}