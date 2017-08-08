var gulp = require('gulp');
var ngrok = require('ngrok');
var del = require('del');
var jsHint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var graphics = require('gulp-gm');
var browserSync = require('browser-sync').create();
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var minifyhtml = require('gulp-minify-html');
var Compress = require('gulp-compress');
var cps = Compress(gulp);
var imageResponsive = require('gulp-responsive');

var bases = {
    dist: 'dist/',
    app: 'app/'
};

var path = {
    scripts: ['js/permatters.js', 'views/js/main.js'],
    libs: [],
    fonts: ['fonts/Open_Sans'],
    css: ['css/style.css', 'css/print.css', 'views/css/style.css', 'views/css/bootstrap-grid.css'],
    html: ['index.html', 'project-2048.html', 'project-mobile.html', 'project-webperf.html', 'views/pizza.html'],
    images: ['img/2048.png', 'img/cam_be_like.jpg', 'img/mobilewebdev.jpg', 'img/profilepic.jpg', 'views/pizza.png', 'pizzeria.jpg', ]
};

// Set up browsersync server
gulp.task('browserSync', ['markup', 'scripts', 'styles'], function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
});

// remove dist directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// minify scripts and move to dist
gulp.task('scripts', ['clean'], function () {
    return gulp.src('app/**/*.js')
        .pipe(jsHint())
        .pipe(jsHint.reporter('default'))
        .pipe(uglify())
        // .pipe(concat("main.min.js"))
        .pipe(gulp.dest('dist/'))
});

// minify styles and move to dist
gulp.task('styles', ['clean'], function () {
    return gulp.src('app/**/*.css')
        .pipe(cleanCss())
        // .pipe(concat('main.min.css'))
        .pipe(Compress.minifyCss())
        .pipe(gulp.dest('dist/'))
});
// minify html and move to dist
gulp.task('markup', ['clean'], function () {
    return gulp.src('app/**/*.html')
        .pipe(minifyhtml())
        .pipe(gulp.dest('dist/'))
});
// optimize images and move to dist
gulp.task('images', ['clean'], function() {
    return gulp.src('app/**/*.{jpg,png}')
    .pipe(imagemin({verbose: true}))
    .pipe(imageResponsive({
        // Unique photos
        '**/profilepic.jpg' : {
            rename: { suffix: '-small'}
        },
        '**/*pizza.png' : {
            rename: {
                suffix: '-small',
                // extname: '.webp'
            }
        },
        '**/*2048.png' : {
            rename: {
                suffix: '-small',
                // extname: '.webp'
            }
        },
        '**/*.{jpg, png}' : [{
            // small images; 200px, 60 quality
            width: 200,
            skipOnEnlargement: true,
            rename: {
                suffix: '-small',
                extname: '.jpg'
            }
        },
        {
            // small at 2x
            width: 200 * 2,
            skipOnEnlargement: true,
            rename: {
                suffix: '-small@2x',
                extname: '.jpg'
            }
        },
        {
            // large at 480px, 60q
            width: 480,
            skipOnEnlargement: true,
            rename: {
                suffix: '-large',
                extname: '.jpg'
            }
        },
        {
            // large at 2x, 60q
            width: 480 * 2,
            skipOnEnlargement: true,
            rename: {
                suffix: '-large@2x',
                extname: '.jpg'
            }
        },
        {
            // extralarge at 1280, 60q
            width: 1024,
            skipOnEnlargement: true,
            rename: {
                suffix: '-extralarge',
                extname: '.jpg'
            }
        },
        {
            // extralarge at 2560, 60q
            width: 1024 * 2,
            skipOnEnlargement: true,
            rename: {
                suffix: '-extralarge@2x',
                extname: '.jpg'
            }
        }]
    },
    // Options
    {
        errorOnEnlargement: false,
        quality: 50
    }
    ))
    .pipe(gulp.dest('dist/'))
});
// move font to dist
gulp.task('fonts', ['clean'], () => {
    return gulp.src('app/fonts/**/*.ttf')
    .pipe(gulp.dest('dist/fonts'))
});
gulp.task('default', ['clean', 'scripts', 'styles', 'markup', 'images', 'fonts', 'browserSync']);