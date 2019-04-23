var mongoose = require('mongoose');

const BookingSchema  = new mongoose.Schema({
    customerId: String,
    bookingId: String,
   products: [{
    productId: String,
    set: String,
    price: String,
    moq: String
}],
total: String,
addressDetails: [{
    streetAddress: String,
    building: String,
    landmark: String,
    city: String,
    state: String,
    pincode: String,
    name: String,
    mobileNumber: String
}],
paymentStatus: String,
bookingStatus: String,
bookingDate: Date
});


const Booking = mongoose.model('bookings', BookingSchema);
module.exports = Booking;