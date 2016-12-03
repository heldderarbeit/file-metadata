'use strict';

var path = process.cwd();
var FileHandler = require(path + '/app/controllers/fileHandler.server.js');

var multer  = require('multer');
var upload = multer({});

module.exports = function (app) {

    var fileHandler = new FileHandler();

    app.route('/')
        .get(function (req, res) {
            res.render('index.pug');
        });
        
    app.route('/uploads')
	.get(function (req, res) {
            res.redirect('/');
        })
	.post(upload.single('upload'), fileHandler.evaluate);
};
