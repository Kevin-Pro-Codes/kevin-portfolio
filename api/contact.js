import nodemailer from 'nodemailer';

// Memória temporária para guardar os IPs (Funciona bem no vercel dev local)
// Nota: Em produção (Vercel online), isso reseta quando a função dorme.
const rateLimitMap = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // --- LÓGICA DE RATE LIMIT (20 MINUTOS) ---
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();
  const WINDOW_MS = 20 * 60 * 1000; // 20 minutos em milissegundos
  const MAX_REQUESTS = 2; // Limite de 3 envios

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
  } else {
    const userData = rateLimitMap.get(ip);

    // Se passou mais de 20 min, reseta o contador do cara
    if (now - userData.lastReset > WINDOW_MS) {
      userData.count = 1;
      userData.lastReset = now;
    } else {
      userData.count++;
    }

    // Se for a 4ª tentativa em menos de 20 min, bloqueia
    if (userData.count > MAX_REQUESTS) {
      const timeLeft = Math.ceil((WINDOW_MS - (now - userData.lastReset)) / 1000 / 60);
      return res.status(429).json({ 
        message: `Muitas tentativas. Por favor, aguarde ${timeLeft} minutos antes de tentar novamente.` 
      });
    }
  }
  // --- FIM DA LÓGICA DE SEGURANÇA ---

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
      subject: subject || `New Message from ${name}`, 
      text: `
        Nome: ${name}
        Email: ${email}
        ${projectInterest ? `Interesse: ${projectInterest}` : ''}
        ${preferredDate ? `Data Sugerida: ${preferredDate}` : ''}
        ${preferredTime ? `Horário Sugerido: ${preferredTime}` : ''}

        Mensagem:
        ${message || 'Sem mensagem adicional.'}
      `.trim(),
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}