'use strict';
var Cart = require('./../model/cartModel.model');

exports.addCartData = function (req, res) {
  Cart.findOne({
    userId: req.body.userId
  }).select().exec(function (err, cart) {
    if (err) {
      res.status(500).json({
        "result": 0
      })
    } else {

      if (cart !== null) {
        var existingCartFromDb = cart.product;
        var existingCartFromSession = req.body.product;
        const results = existingCartFromSession.filter(({
          productId: id1
        }) => !existingCartFromDb.some(({
          productId: id2
        }) => id2 === id1));
       /*  console.log('difference btwn arrays', results); */
        if (results.length != 0) {
          Cart.findOneAndUpdate({
            userId: req.body.userId
          }, {
              $push: {
                product: results
              },
            }, function (err, cartData) {
              if (err) {
                res.status(500).send({
                  "result": 'existing product add to cart'
                });
              } else {
                Cart.find({ 'userId': req.body.userId }).select().exec(function (err, cartUser) {
                  if (err) {
                    res.status(500).json({
                      "result": 0
                    })
                  } else {
                    if (cartUser.length === 0) {
                      res.status(200).json(cartUser)
                    } else {
                      res.status(200).json(cartUser[0].product)
                    }
                  }
                });
              }
            });
        } else if (results.length === 0) {
          const results1 = existingCartFromSession.filter(({
            productId: id1
          }) => existingCartFromDb.some(({
            productId: id2
          }) => id2 === id1));
       /*    console.log('matched arrays', results1); */
          if (results1.length !== 0) {

            for (var i = 0; i < existingCartFromDb.length; i++) {
              if (existingCartFromDb[i].productId === results1[0].productId) {
                existingCartFromDb[i].set = results1[0].set + existingCartFromDb[i].set;
              }
            }
          }
          cart.save(function (err, newCart) {
            if (err) {
              res.status(201).send({
                "result": 0
              });
            } else {
              Cart.find({ 'userId': req.body.userId }).select().exec(function (err, cartUser) {
                if (err) {
                  res.status(500).json({
                    "result": 0
                  })
                } else {
                  if (cartUser.length === 0) {
                    res.status(200).json(cartUser)
                  } else {
                    res.status(200).json(cartUser[0].product)
                  }
                }
              });
            }
          });
        }


      } else {
        var cart = new Cart();
        cart.userId = req.body.userId;
        cart.product = req.body.product;
        cart.save(function (err, newCart) {
          if (err) {
            res.status(201).send({
              "result": 0
            });
          } else {
            Cart.find({ 'userId': req.body.userId }).select().exec(function (err, cartUser) {
              if (err) {
                res.status(500).json({
                  "result": 0
                })
              } else {
                if (cartUser.length === 0) {
                  res.status(200).json(cartUser)
                } else {
                  res.status(200).json(cartUser[0].product)
                }
              }
            });
          }
        });
      }
    }
  });
}
exports.addToDecrementCartData = function (req, res) {

  const item = {
    product: req.body.product
  };

  Cart.findOne({
    'userId': req.params.userId
  }, function (err, cart) {
    if (err) {
      res.status(500).send({
        "result": 0
      });
    } else {
      if (cart === null) {
        var cart = new Cart();
        cart.userId = req.params.userId;
        cart.product = item.product;
        cart.save(function (err, newCart) {
          if (err) {
            res.status(201).send({
              "result": 0
            });
          } else {
            Cart.find({ 'userId': req.params.userId }).select().exec(function (err, cartUser) {
              if (err) {
                res.status(500).json({
                  "result": 0
                })
              } else {
                if (cartUser.length === 0) {
                  res.status(200).json(cartUser)
                } else {
                  res.status(200).json(cartUser[0].product)
                }
              }
            });
          }
        });
      } else {
        Cart.findOneAndUpdate({
          'userId': req.params.userId, 'product.productId': req.params.productId
        }, {
            $inc: { 'product.$.set': -1 }
          }, function (err, qtyCart) {
            if (err) {
              res.status(500).send({
                "result": 'existing product add to cart'
              });
            } else {
              if (!qtyCart) {
                Cart.findOneAndUpdate({
                  'userId': req.params.userId
                }, {
                    $push: {
                      product: item.product
                    }
                  }, function (err, newqtyCart) {
                    if (err) {
                      res.status(500).send({
                        "result": 'new product add to cart'
                      });
                    } else {
                      Cart.find({ 'userId': req.params.userId }).select().exec(function (err, cartUser) {
                        if (err) {
                          res.status(500).json({
                            "result": 0
                          })
                        } else {
                          if (cartUser.length === 0) {
                            res.status(200).json(cartUser)
                          } else {
                            res.status(200).json(cartUser[0].product)
                          }
                        }
                      });
                    }
                  });
              } else {
                Cart.find({ 'userId': req.params.userId }).select().exec(function (err, cartUser) {
                  if (err) {
                    res.status(500).json({
                      "result": 0
                    })
                  } else {
                    if (cartUser.length === 0) {
                      res.status(200).json(cartUser)
                    } else {
                      res.status(200).json(cartUser[0].product)
                    }
                  }
                });
              }
            }
          });
      }
    }
  });
};

exports.cartProductDelete = function (req, res) {
  Cart.findOne({ 'userId': req.params.userId },
    function (err, userData) {
      if (err) {
        res.status(500).send({
          "result": 0
        });
      } else {
        userData.product.id(req.params.id).remove();
        userData.save(function (err) {
          if (err) {
            res.status(201).send({
              "result": 0
            });
          } else {
            Cart.find({ 'userId': req.params.userId }).select().exec(function (err, cartUser) {
              if (err) {
                res.status(500).json({
                  "result": 0
                })
              } else {
                if (cartUser.length === 0) {
                  res.status(200).json(cartUser)
                } else {
                  res.status(200).json(cartUser[0].product)
                }
              }
            })
          }
        });
      }
    });
}
exports.cartFindUser = function (req, res) {
  Cart.find({ 'userId': req.params.userId }).select().exec(function (err, cartUser) {
    if (err) {
      res.status(500).json({
        "result": 0
      })
    } else {
      if (cartUser.length === 0) {
        res.status(200).json(cartUser)
      } else {
        res.status(200).json(cartUser[0].product)
      }
    }
  });
}
exports.cartManyItem = function (req, res) {

  const item = {
    product: req.body.product
  };
  Cart.findOneAndUpdate({
    'userId': req.params.userId, 'product.productId': req.params.productId
  }, {
      $inc: { 'product.$.qty': 1 }
    }).select().exec(function (err, cartUser) {
      if (err) {
        res.status(500).json({
          "result": 0
        })
      } else {
        if (cartUser === null) {
          Cart.findOneAndUpdate({
            'userId': req.params.userId
          }, {
              $push: {
                product: item.product
              }
            }, function (err, newqtyCart) {
              if (err) {
                res.status(500).send({
                  "result": 'new product add to cart'
                });
              } else {
                if (newqtyCart === null) {
                  var cart = new Cart();
                  cart.userId = req.params.userId;
                  cart.product = item.product;
                  cart.save(function (err, newCart) {
                    if (err) {
                      res.status(201).send({
                        "result": 0
                      });
                    } else {
                      res.status(200).json(newCart);
                    }
                  });
                } else {

                }
              }
            });
        }
        /*   var allProductId = [];
          for (var i = 0; i < req.body.length; i++) {
            allProductId.push(req.body[i].productId);
          }
          Cart.update({
            'userId': req.params.userId
          , elemMatch: { 'product.productId': {
            '$in': allProductId
          }}, 
            $inc: {
              'product.$.qty': 'XX'
            }
        },  function (err, duplicateData) {
            if (err) {
              res.status(500).send({
                message: "Some error occurred while retrieving notes."
              });
            } else {
              console.log('duplicateDetails: ', duplicateData);
              res.status(200).json(duplicateData)
            }
          }); */
        res.status(200).json(cartUser);

      }
    });
}

/*
exports.cartUser = function (req, res) {
  Cart.aggregate([{
      "$unwind": "$product"
    },
    {
      "$match": {
        "userId": req.params.userId
      }
    },     {
      $group: {
        _id: {
          id: "$product.id",
          productDescription: "$product.productDescription",
          productImageName: "$product.productImageName"
        },
        sumQty: {
          $sum: '$product.qty'
        },
        sumPrice: {"$sum" : {
          "$multiply": ["$product.price", "$product.qty"]
        }
      }},
    }
  ], function (err, data) {
    console.log(data);
  })
};
 */

/*
var Cart = require('../model/cart.model');
var Account = require('../model/account.model');
var Product = require('../model/product.model');
var appSetting = require('../config/appSetting');

exports.cartUser = function (req, res) {
 userId = req.params.userId;
 productId = req.params.productId;
 var cart = new Cart(req.session.cart ? req.session.cart : {}, req.session.user ? req.session.user : {});

 Product.findById(productId, function (err, product) {
   if (err) {
     res.status(500).json({
       "result": 0
     })
   } else {
     var productImageLength = product.productImageName.length - 1;
     for (var j = 0; j <= productImageLength; j++) {
       product.productImageName[j] = appSetting.productServerPath + product.skuCode + '/' + product.productImageName[j];
     }
     Account.findById(userId, function (err, userdetails) {
       if (err) {
         res.status(500).json({
           "result": 0
         })
       } else {
         cart.add(userdetails, userdetails.id, product, product.id);
         req.session.cart = cart;
         res.status(200).json({
           products: cart.generateArray(),
           totalPrice: cart.totalPrice,
           totalQty: cart.totalQty
         });
       }
     });

   }
 });
} */

exports.clearCart = function (req, res) {
  Cart.findOneAndRemove({'userId': req.params.userId }, function (err, data) {
    if (err) {
        res.status(500).send({
            "result": 0
        });
    } else {
      /* data.remove(); */
      
    }
});
};