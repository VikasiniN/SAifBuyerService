var PrivacyPolicy = require('../../model/privacyPolicy.model');


exports.getPrivacyPolicy = function (req, res) {
    PrivacyPolicy.find({}).select().exec(function (err, policyData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(policyData);
        }
    })
}
