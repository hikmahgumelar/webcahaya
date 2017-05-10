var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */
var Product = new keystone.List('Product');
var myStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: keystone.expandPath('./public/uploads/files'), // required; path where the files should be stored
        publicPath: '/public/uploads/files', // path where files will be served
    }
	});
Product.add({
	name: { type: Types.Text, required: true, index: true },
	harga: { type: Types.Number},
	deskripsi: { type: String, wysiwyg: true },
});

/**
 * Relationships
 */


/**
 * Registration
 */
Product.defaultColumns = 'name, harga, deskripsi';
Product.register();
