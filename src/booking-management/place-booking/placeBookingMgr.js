var placeBookingDA = require('./placeBookingDA');
var Booking = require('../../model/booking.model');
var zeroFill = require('zero-fill');

exports.placeBooking = function (req, res) {
    try {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var date = day + "/" + month + "/" + year;
    
    
        var oYear = year.toString();
        var orderYear = oYear.slice(-2);
        var order = "BOK";
        var locale = "en-us";
        var result = currentDate.toLocaleString(locale, {
          month: "long"
        });
        var orderMonth = result.substr(0, 3).toUpperCase();

        Booking.find().select().exec(function (err, details) {
            if(err) {
              res.status(500).send({
                message: "Some error occurred while retrieving notes."
              });
            } else{
               if (details[0] == null) {
                var bookingID = order + orderYear + orderMonth + "0001";
                placeBookingDA.placeBooking(req, res,  bookingID);
              } else {
                var arrayLength = details.length - 1;
              var maxID =details[arrayLength].bookingId.substr(10,3);
                var incOrder = maxID.slice(-4);
                var addZero = zeroFill(4, 1);
                var result = parseInt(incOrder) + parseInt(addZero);
                var results = zeroFill(4, result);
                var bookingID = order + orderYear + orderMonth + results;
                placeBookingDA.placeBooking(req, res,  bookingID);
              }
            }
            
          })

    } catch (error) {
        console.log(error);
    }

}