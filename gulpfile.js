var gulp=require('gulp');


//less框架
var less=require('gulp-less');
//文件合并
var concat=require('gulp-concat');
//代码压缩
var uglify=require('gulp-uglify');
//自动刷新页面
var livereload=require('gulp-livereload');

gulp.task('testless',function(){
	gulp.src('src/less/index.less')   //任务目标文件夹
	.pipe(less())                     //任务调用模块
	.pipe(gulp.dest('src/style'));      //生成目录
});

gulp.task('testConcat',function(){
	gulp.src('src/js/*.js')
	    .pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});
// 匹配符 ！ *  ** {}
gulp.task('testUglify',function(){
	gulp.src('dist/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
gulp.task('watch',function(){
	livereload.listen();
	gulp.watch('src/less/**/*.less',['testless']);
});


gulp.task('default',['testless','testConcat','watch']);