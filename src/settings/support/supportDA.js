var Support = require('../../model/support.model');



exports.getSupportDetails = function (req, res) {
    Support.find({}).select().exec(function (err, supportData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(supportData);
        }
    })
}
