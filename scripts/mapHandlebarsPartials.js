'use strict';

const fs = require('fs');
const path = require('path');


/**
 * Map handlebars partials as { $partialName: $partialPath/$partialName }
 */
module.exports = function mapHandlebarsPartials (metalsmith, layoutPath, partialPath) {

    const fullPath = metalsmith.path(layoutPath, partialPath);
    let partials = {};

    fs.readdirSync(fullPath).forEach(function (file) {

        if ( path.extname(file) !== '.hbs') { return; }
        const partialName = path.basename(file, '.hbs');
        partials[partialName] = path.join(partialPath, partialName);
    });

    return partials;
};