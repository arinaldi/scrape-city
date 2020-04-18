const nodemailer = require('nodemailer');

const getTextResults = (results) => {
  let text = '';

  results.forEach(({ title, link }) => {
    text = `${text}\n${title}: ${link}`;
  });

  return text;
};

const getHtmlResults = (results) => {
  let html = '';

  results.forEach(({ title, link }) => {
    html = `${html}<br /><a href="${link}">${title}</a>`;
  });

  return html;
};

async function sendMail(results) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_FROM_PASSWORD,
    },
  });
  const text = getTextResults(results);
  const html = getHtmlResults(results);

  try {
    await transporter.sendMail({
      from: `"Scrape City" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `NAR results for ${(new Date().toLocaleString())}`,
      text,
      html,
    });
    console.log('Mail sent successfully');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = sendMail;
