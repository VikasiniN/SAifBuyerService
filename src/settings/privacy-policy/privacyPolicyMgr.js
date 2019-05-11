var privacyPolicyDA = require('./privacyPolicyDA');




exports.getPrivacyPolicy = function (req, res) {
    try {
        privacyPolicyDA.getPrivacyPolicy(req, res);

    } catch (error) {
        console.log(error);
    }
}


