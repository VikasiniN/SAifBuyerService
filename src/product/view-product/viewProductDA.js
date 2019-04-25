var Product = require('../../model/product.model');
var appSetting = require('../../config/appSetting');

exports.viewProducts = function (req, res) {
    Product.find({
        'mainCategory': req.params.maincategoryid

    }, function (err, product) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving products."
            });
        } else {
            var productLength = product.length - 1;
            for (var i = 0; i <= productLength; i++) {
                var productImages = product[i].productImageName.sort();
                var productImageLength = productImages.length - 1;
                for (var j = 0; j <= productImageLength; j++) {
                    product[i].productImageName[j] = appSetting.productServerPath + product[i].skuCode + '/' + product[i].productImageName[j];
                }
            }
            res.status(200).json(product);
        }
    })
}


exports.viewSingleProducts = function (req, res) {
    Product.findById(req.params.productId

        ,
        function (err, product) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving products."
                });
            } else {

                var productImages = product.productImageName.sort();
                var productImageLength = productImages.length - 1;
                for (var j = 0; j <= productImageLength; j++) {
                    product.productImageName[j] = appSetting.productServerPath + product.skuCode + '/' + product.productImageName[j];

                }
                res.status(200).json(product);
            }
        })
}
exports.viewCategoryProducts = function (req, res) {
    Product.find({
        'superCategory': req.params.supercategoryid

    }, function (err, product) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving products."
            });
        } else {
            var productLength = product.length - 1;
            for (var i = 0; i <= productLength; i++) {
                var productImages = product[i].productImageName.sort();
                var productImageLength = productImages.length - 1;
                for (var j = 0; j <= productImageLength; j++) {
                    product[i].productImageName[j] = appSetting.productServerPath + product[i].skuCode + '/' + product[i].productImageName[j];
                }
            }
            res.status(200).json(product);
        }
    })
}
exports.allProducts = function (req, res) {
    Product.find({
    }, function (err, product) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving products."
            });
        } else {
            var productLength = product.length - 1;
            for (var i = 0; i <= productLength; i++) {
                var productImages = product[i].productImageName.sort();
                var productImageLength = productImages.length - 1;
                for (var j = 0; j <= productImageLength; j++) {
                    product[i].productImageName[j] = appSetting.productServerPath + product[i].skuCode + '/' + product[i].productImageName[j];
                }
            }
            res.status(200).json(product);
        }
    })
}