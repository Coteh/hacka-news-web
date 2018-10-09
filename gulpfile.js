/*******************************
    Set-up for Semantic UI
*******************************/

var
    gulp = require('gulp-help')(require('gulp')),

    // watch changes
    watch = require('./semantic/tasks/watch'),

    // build all files
    build = require('./semantic/tasks/build'),
    buildJS = require('./semantic/tasks/build/javascript'),
    buildCSS = require('./semantic/tasks/build/css'),
    buildAssets = require('./semantic/tasks/build/assets'),

    // utility
    clean = require('./semantic/tasks/clean')
    ;


/*******************************
             Tasks
*******************************/

gulp.task('default', false, [
    'watch'
]);

gulp.task('watch', 'Watch for site/theme changes', watch);

gulp.task('build', 'Builds all files from source', build);
gulp.task('build-javascript', 'Builds all javascript from source', buildJS);
gulp.task('build-css', 'Builds all css from source', buildCSS);
gulp.task('build-assets', 'Copies all assets from source', buildAssets);

gulp.task('clean', 'Clean dist folder', clean);
