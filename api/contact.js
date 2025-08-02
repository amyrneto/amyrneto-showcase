const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  console.log('API called with method:', req.method);
  console.log('Request body:', req.body);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;
  console.log('Extracted fields:', { name, email, subject, message });

  if (!name || !email || !subject || !message) {
    console.log('Missing required fields');
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    console.log('Creating nodemailer transporter...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
    console.log('EMAIL_TO:', process.env.EMAIL_TO);
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Transporter created, preparing mail options...');
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n===================\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr style="margin: 20px 0; border: none; border-top: 2px solid #ccc;">
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in API:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
};