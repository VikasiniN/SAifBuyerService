var contactDA = require('./contactUsDA');




exports.getContactDetails = function (req, res) {
    try {
        contactDA.getContactDetails(req, res);

    } catch (error) {
        console.log(error);
    }
}




