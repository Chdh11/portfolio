const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(cors()); 
app.use(bodyParser.json()); 

app.post('/send-email', (req, res) => {
  const { fullName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'chhavidhankhar07@gmail.com', 
      pass: 'ljfn babo xmzv qvse', 
    },
  });

  const mailOptions = {
    from: email,
    to: 'chhavidhankhar07@gmail.com', 
    subject: `New message from ${fullName}`, 
    text: `You received a message from ${fullName} (${email}):\n\n${message}`, 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
