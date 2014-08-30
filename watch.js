var watch = require('metalsmith-watch');

require('./buildTools')(__dirname)
    .use(watch({
        pattern: ['**/*','../templates/**/*']
    }))
    .build(function() {
        console.log('Fini !');
    });