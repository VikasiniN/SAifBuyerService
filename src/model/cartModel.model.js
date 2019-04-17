
const mongoose = require("mongoose");
// sample user schema
const CartSchema = new mongoose.Schema({
  userId: String,
  product: [{
    ID: String,
    productId: String,
    productName: String,
    productDescription: String,
    productImageName: String,
    price: Number,
    qty: Number,
    subTotal: Number,
    cartStatus: 0,
    moq: Number,
    set: Number
  }]
});
module.exports = mongoose.model('Cart', CartSchema);
