const Product = require('../models/product');

getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

getIndex = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Title',
    path: '/cart',
  });
};

getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders',
  });
};

getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  })
}

module.exports = {
  getProducts,
  getIndex,
  getCart,
  getOrders,
  getCheckout,
}