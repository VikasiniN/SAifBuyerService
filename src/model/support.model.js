var mongoose = require('mongoose');

const SupportSchema = new mongoose.Schema({
    whatsappNumber: String,
    emailId: String,
    openTimings: String,


});

const Support = mongoose.model('support', SupportSchema);
module.exports = Support;