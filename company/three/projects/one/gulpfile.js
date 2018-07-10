var gulp = require("gulp");// 主依赖gulp
	gulp_less = require("gulp-less");// less
	concat = require("gulp-concat")
	gulp_connect = require("gulp-connect");// 实时刷新
	

	minifycss = require("gulp-minify-css");// 压缩css
	webserver = require("gulp-webserver");// 本地服务器

// 启动服务
gulp.task("webserver",function(){
	gulp.src("./") //跟路径
	.pipe(webserver({
		livereload:true,
		port:8080,
		host:"localhost",
		//设置访问的路径是否显示
		directoryListing:{
			enable:true,
			path:"./"
		},
		open:true
	})) 
	// 动态监听任务 有变化就执行 
	gulp.watch("./css/*.less",["less"])

})
// 编译less 
gulp.task("less",function(){
	gulp.src("./css/*.less")
	.pipe(gulp_less())
	.pipe(minifycss())
	.pipe(gulp.dest("./css/"))
})


gulp.task("default",["webserver","less"])













