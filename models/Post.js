var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});
var myStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: keystone.expandPath('./public/uploads/files'), // required; path where the files should be stored
        publicPath: '/public/uploads/files', // path where files will be served
    }
});
Post.add({
	title: { type: Types.Text, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.File, storage: myStorage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();