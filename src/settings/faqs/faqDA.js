var FAQ = require('../../model/faq.model');



exports.getFAQ = function (req, res) {
    FAQ.find({}).select().exec(function (err, faqData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(faqData);
        }
    })
}

