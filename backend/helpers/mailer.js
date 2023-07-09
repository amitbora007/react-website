const nodemailer = require('nodemailer');
const dotenv  = require('dotenv');
dotenv.config();

// Function to send an email
const sendEmail = async (mailOptions) => {
  try {
    // Create a transporter using Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.mailer_service,
      port: process.env.mailer_port,
      auth: {
        user: process.env.mailer_user,
        pass: process.env.mailer_pass,
      },
    });


    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

module.exports = { sendEmail };
