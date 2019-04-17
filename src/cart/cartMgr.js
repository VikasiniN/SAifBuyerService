'use strict';
var cartDA = require('./cartDA');
exports.addCartData = function (req, res) {
    cartDA.addCartData(req, res);
};
exports.addToDecrementCartData = function (req, res) {
    cartDA.addToDecrementCartData(req, res);
};
exports.cartProductDelete = function (req, res) {
    cartDA.cartProductDelete(req, res);
};
exports.cartFindUser = function (req, res) {
    cartDA.cartFindUser(req, res);
};
exports.clearCart = function (req, res) {
    cartDA.clearCart(req, res);
};

exports.cartManyItem = function (req, res) {
    console.log(req.body);
    cartDA.cartManyItem(req, res);
};


/* exports.cartUser = function (req, res) {
    cartDA.cartUser(req, res);
}; */


/* 'use strict';
var cartDA = require('./cartDA');
exports.addCartData = function (req, res) {
   cartDA.addCartData(req, res);
};

exports.cartUser = function (req, res) {
   cartDA.cartUser(req, res);
};
*/