/*******************************
    Set-up for Semantic UI
*******************************/

const SEMANTIC_TASKS_PATH = "./node_modules/semantic-ui/tasks";

var
    gulp = require('gulp-help')(require('gulp')),

    // watch changes
    watch = require(SEMANTIC_TASKS_PATH + '/watch'),

    // build all files
    build = require(SEMANTIC_TASKS_PATH + '/build'),
    buildJS = require(SEMANTIC_TASKS_PATH + '/build/javascript'),
    buildCSS = require(SEMANTIC_TASKS_PATH + '/build/css'),
    buildAssets = require(SEMANTIC_TASKS_PATH + '/build/assets'),

    // utility
    clean = require(SEMANTIC_TASKS_PATH + '/clean')
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
