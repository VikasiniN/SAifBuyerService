var termsDA = require('./termsAndUseDA');



exports.getTerms = function (req, res) {
    try {
        termsDA.getTerms(req, res);

    } catch (error) {
        console.log(error);
    }
}



