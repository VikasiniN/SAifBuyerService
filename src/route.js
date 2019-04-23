var settingRoutes = require('./settings/settingsRoute');
var productRoutes = require('./product/productRoute');
var categoryRoutes = require('./category/categoryRoute');
var accountRoutes = require('./account/accountRoute');
var cartRoutes = require('./cart/cartRoute');
var bookingRoutes = require('./booking-management/bookingManagementRoute');

exports.loadRoutes = function (app) {
    settingRoutes(app);
    productRoutes(app);
    categoryRoutes(app);
    accountRoutes(app);
    cartRoutes(app);
    bookingRoutes(app);
};

