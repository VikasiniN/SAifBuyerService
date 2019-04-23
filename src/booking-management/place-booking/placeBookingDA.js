var Booking = require('../../model/booking.model');




exports.placeBooking = function (req, res, bookingID) {
var bookingData = new Booking(req.body);
bookingData.bookingId = bookingID;
bookingData.total = req.body.total;
bookingData.products = req.body.products,
bookingData.addressDetails = req.body.addressDetails
bookingData.bookingStatus = 'New',
bookingData.bookingDate = new Date();
bookingData.save(
  function (err, productDetails) {
    if (err) { // if it contains error return 0
      res.status(500).send({
        "result": 0
      });
    } else {
      res.status(200).json(productDetails); 
      
    }
  });
}