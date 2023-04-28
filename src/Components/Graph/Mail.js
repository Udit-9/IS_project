const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

// configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password'
  }
});

// check if a certain value has dropped below a level
function checkValue(value) {
  const level = 10;
  if (value < level) {
    // send email
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: 'recipient_email@gmail.com',
      subject: 'Value Dropped Below Level',
      text: `The value has dropped below the level. Current value: ${value}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}

// call checkValue function with a sample value
checkValue(5);

// start server
app.listen(3000, () => console.log('Server started on port 3000'));
