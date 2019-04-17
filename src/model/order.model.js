var mongoose = require('mongoose');

const OrderSchema  = new mongoose.Schema({
    customerId: String,
   orderId: String,
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
orderStatus: String,
orderDate: Date
});


const Order = mongoose.model('orders', OrderSchema);
module.exports = Order;