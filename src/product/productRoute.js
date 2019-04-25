'use strict';
var viewProductMgr  = require('./view-product/viewProductMgr');


module.exports = function(app) {
    app.route('/viewproduct/:maincategoryid')
    .get(viewProductMgr.viewProducts);

    app.route('/singleproduct/:productId')
    .get(viewProductMgr.viewSingleProducts);

    app.route('/category/:supercategoryid')
    .get(viewProductMgr.viewCategoryProducts);

    app.route('/allproducts')
    .get(viewProductMgr.allProducts);
   
}