const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


/*
   --- Top Level Functions ---

    gulp.task   -   define tasks
    gulp.src    -   Point to files to use
    gulp.dest   -   Points to folder to output
    gulp.watch  -   Watch files and folders for changes

*/

// Copy all html files
gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});


// minify and concat all custom js files
gulp.task('scripts', function() {
    gulp.src('src/js/custom/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/custom'));
});

gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minjs', function() {
    gulp.src('src/js/*.min.js')
        .pipe(gulp.dest('dist/js'));
});

// minify and concat all custom js files
gulp.task('css', function() {
    gulp.src('src/css/custom/*.css')
        .pipe(concat('main.css'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/css/custom'));
});
gulp.task('default_css', function() {
    gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css'));
});
gulp.task('mincss', function() {
    gulp.src('src/css/*.min.css')
        .pipe(gulp.dest('dist/css'));
});

//optimize and copy bg images to production/images
gulp.task('bgImage', () =>
	gulp.src('src/images/bg/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
	.pipe(gulp.dest('dist/images/bg'))
);


//optimize and copy logo images to production/images
gulp.task('logo', () =>
	gulp.src('src/images/logo/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
	.pipe(gulp.dest('dist/images/logo'))
);


//optimize and copy overlays images to production/images
gulp.task('overlays', () =>
	gulp.src('src/images/overlays/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
	.pipe(gulp.dest('dist/images/overlays'))
);


//copy portfolio images to production/images
gulp.task('portfolio', () =>
	gulp.src('src/images/portfolio/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
	.pipe(gulp.dest('dist/images/portfolio'))
);


//optimize and copy prettyPhoto images to production/images
gulp.task('prettyPhoto', () =>
	gulp.src('src/images/prettyPhoto/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
	.pipe(gulp.dest('dist/images/prettyPhoto'))
);


//optimize and copy team images to production/images
gulp.task('team', () =>
	gulp.src('src/images/team/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
	.pipe(gulp.dest('dist/images/team'))
);


//optimize and copy images to production/images
gulp.task('img', () =>
	gulp.src('src/images/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
	.pipe(gulp.dest('dist/images'))
);


//watch for the above functions when files are saved
gulp.task('watch', function() {
    gulp.watch('src/js/custom/*.js', ['scripts']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/js/*.min.js', ['minjs']);
    gulp.watch('src/css/custom/*.css', ['css']);
    gulp.watch('src/css/*.css', ['default_css']);
    gulp.watch('src/css/*.min.css', ['mincss']);
    gulp.watch('src/images/bg/*', ['bgImage']);
    gulp.watch('src/images/logo/*', ['logo']);
    gulp.watch('src/images/overlays/*', ['overlays']);
    gulp.watch('src/images/portfolio/*', ['portfolio']);
    gulp.watch('src/images/team/*', ['team']);
    gulp.watch('src/images/prettyPhoto/*', ['prettyPhoto']);
    gulp.watch('src/images/*', ['img']);
    gulp.watch('src/*.html', ['copyHtml']);
});


gulp.task('default', ['scripts','js','minjs','css','default_css','mincss','bgImage','logo','overlays','portfolio','team','prettyPhoto','img','copyHtml']);