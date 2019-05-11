var faqDA = require('./faqDA');




exports.getFAQ = function (req, res) {
    try {
        faqDA.getFAQ(req, res);

    } catch (error) {
        console.log(error);
    }
}
