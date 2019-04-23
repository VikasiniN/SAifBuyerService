var viewBookingDA = require('./viewBookingDA')


exports.customerBooking = function (req, res) {
    try {
        viewBookingDA.customerBooking(req, res);
    } catch (error) {
        console.log(error);
    }
}