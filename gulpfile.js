/*******************************
        General Set-up
*******************************/

const PROJECT_ROOT = '.';
const SITE_ROOT = 'public';
const TEMPLATES_ROOT = 'views';
const SEMANTIC_ROOT = 'semantic';

var
    gulp = require('gulp'),
    gulpWebpack = require('webpack-stream'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    browserSync = require('browser-sync').create()
    ;


/*******************************
    Set-up for Semantic UI
*******************************/

const SEMANTIC_TASKS_PATH = './node_modules/semantic-ui/tasks';

var
    // watch changes
    watch = require(SEMANTIC_TASKS_PATH + '/watch'),

    // build all files
    semanticBuild = require(SEMANTIC_TASKS_PATH + '/build'),
    semanticBuildJS = require(SEMANTIC_TASKS_PATH + '/build/javascript'),
    semanticBuildCSS = require(SEMANTIC_TASKS_PATH + '/build/css'),
    semanticBuildAssets = require(SEMANTIC_TASKS_PATH + '/build/assets'),

    // utility
    clean = require(SEMANTIC_TASKS_PATH + '/clean')
    ;


/*******************************
             Tasks
*******************************/

gulp.task('default', false, [
    'prod'
]);

// Doesn't work atm
// TODO(#35) Fix browser-sync config
gulp.task('browser-sync', function() {
    browserSync.init({
        files: [SITE_ROOT + '/**', TEMPLATES_ROOT + '/**', SEMANTIC_ROOT + '/dist/**'],
        proxy: 'localhost:3000'
    });
});

function build() {
    return gulpWebpack(webpackConfig, webpack)
        .pipe(gulp.dest(webpackConfig.output.path));
}

// Build main site assets
gulp.task('build', build);

// Watch for site/theme changes
gulp.task('watch', watch);

// Builds all files from source
gulp.task('semantic-build', semanticBuild);
// Builds all javascript from source
gulp.task('semantic-build-javascript', semanticBuildJS);
// Builds all css from source
gulp.task('semantic-build-css', semanticBuildCSS);
// Copies all assets from source
gulp.task('semantic-build-assets', semanticBuildAssets);

// Builds site and runs in dev mode
gulp.task('dev', gulp.series('build', 'semantic-build', 'browser-sync'), function() {
    gulp.watch([
        PROJECT_ROOT + '/assets/**/*.*',
        PROJECT_ROOT + '/lib/*.*'
    ], ['build']);
    gulp.watch([
        SEMANTIC_ROOT + '/src/themes/**/assets/**/*.*'
    ], ['semantic-build-assets']);
    gulp.watch([
        SEMANTIC_ROOT + '/src/definitions/**/*.less',
        SEMANTIC_ROOT + '/src/site/**/*.*'
    ], ['semantic-build-css']);
    gulp.watch([
        SEMANTIC_ROOT + '/src/definitions/**/*.js'
    ], ['semantic-build-javascript']);
});

// Builds site for production
gulp.task('prod', gulp.series('build', 'semantic-build'));

// Clean dist folder
gulp.task('clean', clean);
