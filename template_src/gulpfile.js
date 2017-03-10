var gulp = require('gulp');
var shell = require('gulp-shell');
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

gulp.task('refresh', shell.task([
    'cordova build browser && cordova serve'
]));

gulp.task('patch', shell.task([
    // diff -uN org new
    // patch -p0 < diff-file
    'patch -p0 < patch/android-gradle.patch',
    'patch -p0 < patch/cordovalib-gradle.patch'
]));

gulp.task('android', shell.task([
    'mkdir -p build',
    'cordova build android && mv platforms/android/build/outputs/apk/android-debug.apk build && echo "move into \"build/android-debug.apk\""'
]));

gulp.task('release', shell.task([
    'mkdir -p build',
    'cordova build android --release && mv platforms/android/build/outputs/apk/android-release.apk build && echo "move into \"build/android-release.apk\""'
    // TODO iOS
]));

