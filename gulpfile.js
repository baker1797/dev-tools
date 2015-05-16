/** Gulp Dev Tasker.
 *  Framework: http://gulpjs.com/
 *  Author:    Kyle Baker
 *  Date:      5/15/15
 */


/* Packages */
var gulp         = require('gulp'),
    uglify       = require('gulp-uglify'),
    stylus       = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer');
    //livereload  = require('gulp-livereload'); //http://leveluptuts.com/tutorials/learning-gulp/learning-gulp-8-livereload-gulp
    //gulp-imagemin
    //var concat = require('gulp-concat');


/* Variables */
var //jsSrcPath   = 'app/public/src-js/*.js',
    //jsDestPath  = 'app/public/js',
    cssSrcPath   = 'css/*',
    cssDestPath  = '../';


// Styles Task.
// Modifies the css files.
// https://www.npmjs.com/package/gulp-stylus
gulp.task( 'styles', function(){
    //console.log( 'styles task start' );
    gulp.src( cssSrcPath )
        .pipe( stylus({
            compress: true
        }) )    // check out the options for stylus to pass function.
        //.pipe( minifyCss({
        //    compatibility: 'ie8'
        //}) )
        .pipe( autoprefixer( 'live 2 versions' ) )
        .pipe( gulp.dest( cssDestPath ) );
        //.pipe( livereload() );
});


// Watch Task.
gulp.task( 'watch', function(){
    //var server = livereload();

    // gulp.watch( '**/*.js' ) // any js anywhere.
    //gulp.watch( jsSrcPath, [ 'scripts' ] ); //path, tasks to run
    gulp.watch( cssSrcPath, [ 'styles' ] ); //path, tasks to run
});


// Default Tasker.
gulp.task( 'default', [ 'styles' ] );









// Styles Task.
// Modifies the javascript files.
/*
gulp.task( 'scripts', function(){
    //console.log( 'scripts task start' );
    gulp.src( jsSrcPath )
        .pipe( uglify() )
        .pipe( gulp.dest( jsDestPath ) )    //pipe runs a command.
        .pipe( livereload() );
});
*/

