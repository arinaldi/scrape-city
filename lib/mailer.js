const nodemailer = require('nodemailer');

const getTextResults = (results) => {
  let text = '';

  results.forEach(({ title, link }, index) => {
    const newLine = index > 0 ? '\n' : '';
    text = `${text}${newLine}• ${title}: ${link}`;
  });

  return text;
};

const getHtmlResults = (results) => {
  let html = '<ul>';

  results.forEach(({ title, link }) => {
    html = `${html}<li><a href="${link}">${title}</a></li>`;
  });

  return `${html}</ul>`;
};

const sendMail = async (results) => {
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
