/** Add modules */
const gulp = require("gulp");
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify-es").default;

/** Function to compile CSS and add prefixer */
function css() {
    return gulp
        .src("app/css/app.css")
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false
        }))
        .pipe(gulp.dest("dist/css/"))
        .pipe(browserSync.stream())
}

/** Task to function "CSS" */
exports.css = css;

/** Function to concat JS */
function js() {
    return gulp
        .src([
            "app/js/general.js",
            "app/js/header.js",
            "app/js/introduction.js",
            "app/js/about.js",
            "app/js/projects.js"
        ])
        .pipe(concat("app.js"))
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream())
}

/** Task to function "JS" */
exports.js = js;

/** Function to add JS plugins */
function pluginsJS() {
    return gulp
        .src([
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/bootstrap/dist/js/bootstrap.min.js",
            "node_modules/pace-js/pace.min.js"
        ])
        .pipe(concat("plugins.js"))
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream())
}

/** Task to function "pluginsJS" */
exports.pluginsJS = pluginsJS;

/** Function to init browser */
function browser() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    })
}

/** Task to function "Browser" */
exports.browser = browser;

/** Function to watch files */
function watch() {
    gulp.watch("app/css/*.css", css);
    gulp.watch("app/js/*.js", js);
    gulp.watch("dist/*.html").on("change", browserSync.reload)
}

/** Task to function "Watch" */
exports.watch = watch;

/** Default task to functions "Watch" and "Browser" */
exports.default = gulp.parallel(watch, browser, css, js, pluginsJS);