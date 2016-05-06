var gulp=require('gulp');


//less���
var less=require('gulp-less');
//�ļ��ϲ�
var concat=require('gulp-concat');
//����ѹ��
var uglify=require('gulp-uglify');
//�Զ�ˢ��ҳ��
var livereload=require('gulp-livereload');

gulp.task('testless',function(){
	gulp.src('src/less/index.less')   //����Ŀ���ļ���
	.pipe(less())                     //�������ģ��
	.pipe(gulp.dest('src/style'));      //����Ŀ¼
});

gulp.task('testConcat',function(){
	gulp.src('src/js/*.js')
	    .pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});
// ƥ��� �� *  ** {}
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