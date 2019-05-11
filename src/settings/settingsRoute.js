'use strict';
var adsMgr  = require('./ads/adsMgr');
var bannersMgr = require('./banner/bannerMgr');
var promotionsMgr = require('./promotions/promotionsMgr');
var footerMgr = require('./footer/footerMgr');
var supportMgr = require('./support/supportMgr');
var contactUsMgr = require('./contact-us/contactUsMgr');
var faqMgr = require('./faqs/faqMgr');
var privacyMgr = require('./privacy-policy/privacyPolicyMgr');
var termsMgr = require('./terms-use/termsAndUseMgr');

module.exports = function(app) {
    app.route('/ads')
    .get(adsMgr.getAds);   // used to display hot products
    app.route('/banners')
    .get(bannersMgr.getBanners);
    app.route('/promotions')
    .get(promotionsMgr.getPromotions);

    app.route('/footerDetails')
    .get(footerMgr.getFooterDetails);

    app.route('/supportDetails')
    .get(supportMgr.getSupportDetails);

    app.route('/contactDetails')
    .get(contactUsMgr.getContactDetails);

    app.route('/privacypolicy')
    .get(privacyMgr.getPrivacyPolicy);

    app.route('/faq')
    .get(faqMgr.getFAQ);

    app.route('/termsanduse')
    .get(termsMgr.getTerms);
}