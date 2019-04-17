var orderDA = require('./orderDA');

exports.getCustomerOrderDetails = function (req, res) {
    try {
        orderDA.getCustomerOrderDetails(req, res);
    } catch (error) {
        console.log(error)
    }
  }

  exports.getSingleOrder = function (req, res) {
    try {
        orderDA.getSingleOrder(req, res);
    } catch (error) {
        console.log(error)
    }
  }
  