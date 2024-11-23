const { Router } = require('express');

// helpers
const { verifyAccessToken } = require('../helpers/jwt');

// routes
const auth = require('./auth');
const product = require('./product');
const order = require('./order');

const router = Router();

router.get('/', (req, res) => {
  res.end('hey');
});

router.use('/auth', auth);
router.use('/product', product);
router.use('/order', verifyAccessToken, order);

module.exports = router;
