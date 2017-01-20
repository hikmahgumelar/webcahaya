var express = require('express');
var router = express.Router();

/* GET produk page. */
router.get('/produk.html', function(req, res, next) {
  res.render('produk', { title: 'gugum' });
});

module.exports = router;
