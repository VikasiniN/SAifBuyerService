var Booking = require('../../model/booking.model');


exports.customerBooking = function (req, res) {
    Booking.find({
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
