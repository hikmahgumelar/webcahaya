var keystone = require('keystone');
var Product = keystone.list('Product');
exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'products';
	locals.title = 'products';
	//locals.data = {
		//products: [],
//};


	view.on('init', function(next) {
	Product.paginate({
		page: req.query.page || 1,
		perPage: 2,
		maxPages: 10
	}).exec(function(err, res) {
		locals.products = res;
		//console.log("==---="+JSON.stringify(res));
		next(err);
	});
	});
	// Render the view
	view.render('product');

};
