require('dotenv').config();
const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL;
const emailPass = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: emailUser,
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log('Error:', error);
    } else {
      console.log('✅ Email sent: ' + info.response);
    }
  });
};

module.exports = sendMail;
