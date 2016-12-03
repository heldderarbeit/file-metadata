'use strict';

function FileHandler () {
    this.evaluate = function (req, res) {
        res.json({
            'mimetype': req.file.mimetype,
            'encoding': req.file.encoding,
            'bytesize': req.file.size
        });
    };
}

module.exports = FileHandler;
