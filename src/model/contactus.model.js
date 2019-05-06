var mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    phoneNumber: String,
    emailId: String,
    address: String,


});

const Contact = mongoose.model('contact', ContactSchema);
module.exports = Contact;