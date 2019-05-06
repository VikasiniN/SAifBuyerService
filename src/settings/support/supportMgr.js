var supportDA = require('./supportDA');



exports.getSupportDetails = function (req, res) {
    try {
        supportDA.getSupportDetails(req, res);

    } catch (error) {
        console.log(error);
    }
}



