var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    return gulp.src('/assets/js/').pipe(jshint());
});

gulp.task('default', [
    'jshint'
]);