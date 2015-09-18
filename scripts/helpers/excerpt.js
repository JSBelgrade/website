'use strict';

const downsize = require('downsize');
const handlebars = require('handlebars');

module.exports = function(html, limit, options) {

    if (!options) {
        limit = 26;
    }
    html = html.toString();
    // strip html tags
    html = html.replace(/<\/?[^>]+>/gi, '');
    html = html.replace(/(\r\n|\n|\r)+/gm, ' ');

    return new handlebars.SafeString(downsize(html, {words: limit, append: "..."}));
};