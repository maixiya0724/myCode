var gulp = require("gulp"), // 主依赖gulp
	gulp_less = require("gulp-less"),// less
	gulp_connect = require("gulp-connect"),// 实时刷新
	babel = require("gulp-babel"),// es6 转码
	nsg_notify = require("gulp-notify"),// 提示信息
	js_uglify = require("gulp-uglify"),//js压缩
	minifycss = require("gulp-minify-css");// 压缩css
	webserver = require("gulp-webserver")// 本地服务器



gulp.task("webserver",function(){
	gulp.src("./webRoot/view") //跟路径
	.pipe(webserver({
		livereload:true,
		port:8080,
		host:"localhost",
		//设置访问的路径是否显示
		directoryListing:{
			enable:true,
			path:"./webRoot/view"
			
		},
		open:true

	})) 
})

gulp.task("default",["webserver"])







