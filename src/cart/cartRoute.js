'use strict';
var cartMgr = require('./cartMgr');


module.exports = function (app) {
    /* app.route('/cart/:userId/product/:productId')
        .post(cartMgr.addCartData); */
        app.route('/cart')
        .post(cartMgr.addCartData);
        app.route('/cart/:userId/decproduct/:productId')
        .put(cartMgr.addToDecrementCartData);
        app.route('/cart/:userId/deleteproduct/:id')
        .delete(cartMgr.cartProductDelete);
        app.route('/cart/:userId')
        .get(cartMgr.cartFindUser);
        app.route('/cart/:userId')
        .delete(cartMgr.clearCart);
    /*     app.route('/cart/:userId/mayproduct/:productId')
        .put(cartMgr.cartManyItem); */
/* 
     app.route('/cart/:userId/product/:productId')
        .get(cartMgr.cartUser); */
  /*      
        app.route('/pwdChange/:emailId')
        .get(pwdChangeMgr.pwdChangeRequest);
        
    
    app.route('/pwdChange/reset')
        .post(pwdChangeMgr.pwdChangeReset);   */
}