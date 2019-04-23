'use strict';

 var placeBookingMgr = require('./place-booking/placeBookingMgr');
 var viewBookingMgr = require('./view-booking/viewBookingMgr');

 module.exports = function (app) {
    // place booking
   

    app.route('/booking')
        .post(placeBookingMgr.placeBooking);

        app.route('/booking/:id')
        .get(viewBookingMgr.customerBooking);
 }