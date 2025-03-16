const Contact = require('../models/Contact');

exports.Index = (req, res) => {
  res.render('index', { title: 'Welcome to My Node.js Portfolio' });
};

exports.About = (req, res) => {
  res.render('about', { title: 'About Me' });
};

exports.Contact = (req, res) => {
  res.render('contact', { title: 'Contact' });
};

// Handle POST request for contact form
exports.SubmitContact = async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).send('All fields are required!');
  }
  const newContact = new Contact({ name, message });
  await newContact.save();
  res.send('<h1>Thank you for reaching out!</h1>');
};
