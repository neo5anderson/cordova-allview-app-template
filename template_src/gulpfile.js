var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower', function () {
    return bower({
        directory: './bower'
    });
});

gulp.task('default', ['bower'], function () {
    gulp.src([
                'bower/dcloud-mui/dist/*/*'
            ],
            { base: 'bower/dcloud-mui/dist' })
        .pipe(gulp.dest('www/vender'));  

    gulp.src(
            [
                'bower/echarts/dist/echarts.js',
                'bower/echarts/dist/echarts.min.js'
            ],
            { base: 'bower/echarts/dist' })
        .pipe(gulp.dest('www/vender/js'));  

    gulp.src([
                'bower/jquery/dist/jquery.js',
                'bower/jquery/dist/jquery.min.js'
            ],
            { base: 'bower/jquery/dist' })
        .pipe(gulp.dest('www/vender/js'));  
});
