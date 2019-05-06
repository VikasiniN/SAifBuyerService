var ContactUs = require('./../../model/contactus.model');


exports.getContactDetails = function (req, res) {
    ContactUs.find({}).select().exec(function (err, contactData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(contactData);
        }
    })
}

