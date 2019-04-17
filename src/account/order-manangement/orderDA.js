
var orderDetails = require('./../../model/order.model');


exports.getCustomerOrderDetails = function (req, res) {
  orderDetails.find({
    'customerId': req.params.id
   }).sort({
       orderId: -1
   }).exec(function (err, details) {
       if (err) {
           res.status(500).send({
               message: "Some error occurred while retrieving notes."
           });
       } else {
           res.status(200).json(details);
       }
   });
  }

  exports.getSingleOrder = function (req, res) {
    orderDetails.find({
      'customerId': req.params.id,
      'orderId': req.params.orderid,
    }, function (err, data) {
      if (err) {
        res.status(500).send({
          "result": 0
        });
      } else {
        res.status(200).json(data);
      }
    });
  }