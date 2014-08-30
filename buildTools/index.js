var Metalsmith = require('metalsmith'),
    sass = require('metalsmith-sass'),
    markdown = require('metalsmith-markdown'),
    templates = require('metalsmith-templates');


module.exports = function(dirname) {
    return Metalsmith(dirname)
        .source("src")
        .destination("out")
        .use(sass({
            outputStyle: "compressed"
        }))
        .use(markdown())
        .use(templates({
            engine: "jade"
        }))
}