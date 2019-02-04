var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('reload', [], function() {
  browserSync.reload();
});

gulp.task('watch', [], function() {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });
  gulp.watch(['**/*.js', '**/*.html', '**/*.css'], ['reload']);
});

gulp.task('default', ['watch'], function() {

});
