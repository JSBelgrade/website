#!/usr/bin/env node

'use strict';
console.time('build finished');
const path = require('path');
const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');
const mapHandlebarsPartials = require('../scripts/mapHandlebarsPartials');
const siteInfo = require('../siteInfo');
const ncp = require('ncp');
const dir = path.join(__dirname, '..');

function build(done) {

    const metalsmith = Metalsmith(dir);

    metalsmith.metadata({site: siteInfo});

     metalsmith
        .source(path.join(dir, 'content'))
        .use(collections({
            blog : {
                pattern: 'blog/**/*.md',
                sortBy: 'date',
                reverse: true,
                refer: false
            },
        }))
        .use(markdown())
        .use(permalinks({
            relative: false
        }))
        .use(layouts({
            engine: 'handlebars',
            pattern: '**/*.html',
            partials: mapHandlebarsPartials(metalsmith, 'layouts', 'partials'),
            helpers: {
                excerpt: require('../scripts/helpers/excerpt'),
                moment: require('../scripts/helpers/moment'),
            }
        }))
        .destination(path.join(dir, 'dist'));

        metalsmith.build(function (err) {
            if (err) { throw err; }
            done && done();
        });
}


function copyStatic(done) {
    ncp(path.join(dir, 'static'), path.join(dir, 'dist', 'static'), function(err) {
        if (err) {
            throw err
        }
        done && done();
    })
}

build(function(){
    copyStatic(function() { console.log('done!') })
});
