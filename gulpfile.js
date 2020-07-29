/*******************************
        General Set-up
*******************************/

const PROJECT_ROOT = '.';
const SITE_ROOT = 'public';
const TEMPLATES_ROOT = 'views';
const SEMANTIC_ROOT = 'semantic';

var
    gulp = require('gulp-help')(require('gulp')),
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

gulp.task('build', 'Build main site assets', function() {
    return gulpWebpack(webpackConfig, webpack)
        .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('watch', 'Watch for site/theme changes', watch);

gulp.task('semantic-build', 'Builds all files from source', semanticBuild);
gulp.task('semantic-build-javascript', 'Builds all javascript from source', semanticBuildJS);
gulp.task('semantic-build-css', 'Builds all css from source', semanticBuildCSS);
gulp.task('semantic-build-assets', 'Copies all assets from source', semanticBuildAssets);

gulp.task('dev', 'Builds site and runs in dev mode', ['build', 'semantic-build', 'browser-sync'], function() {
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

gulp.task('prod', 'Builds site for production', ['build', 'semantic-build']);

gulp.task('clean', 'Clean dist folder', clean);
