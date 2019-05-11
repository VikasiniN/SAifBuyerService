
var Terms = require('../../model/termsuse.model');





exports.getTerms = function (req, res) {
    Terms.find({}).select().exec(function (err, termsData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(termsData);
        }
    })
}

