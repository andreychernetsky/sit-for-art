var gulp       = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function(){ 
	return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() { 
	browserSync({
		server: { 
			baseDir: 'app'
		},
		notify: false 
	});
});


gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload); 
});

gulp.task('default', ['watch']);
