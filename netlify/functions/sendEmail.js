// Create serverless function to handle emails sent to personal Gmail with netlify functions
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  // Set up nodemailer to send email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "launchstem.org@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  // Format email
  const mailOptions = {
    from: email,
    to: "launchstem.org@gmail.com",
    subject: "New LaunchSTEM Online Contact Form Submission",
    text: `From: ${name},\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: "Email sent successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: "Error sending email",
    };
  }
};
