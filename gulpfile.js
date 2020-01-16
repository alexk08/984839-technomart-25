"use strict";

var gulp = require("gulp");
const ghPages = require('gh-pages');
const path = require('path');

gulp.task("copy", function() {
  return gulp.src([
    "source/css/*.css",
    "source/*.html",
    "source/img/*.{png,jpg,svg}",
    "source/js/*.js"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series(
  "copy"
));

gulp.task("start", gulp.series(
  "build"
));

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './build'), cb);
}
exports.deploy = deploy;
