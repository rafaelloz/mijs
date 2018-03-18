/*global require, console*/
var gulp = require("gulp"),
    webserver = require("gulp-webserver"),
    jsHint = require("gulp-jshint"),
    jsLint = require("gulp-jslint");
   // gjsLint = require("gulp-gjslint");


//1 Servidor web de desarrollo 
gulp.task("dev-server", function () {
    "use strict";
    gulp.src("./app")
            .pipe(webserver({
            open: true,
            liverload: true,
            port: 80
        }));
});

//2 Busca errores de JavaScript de acuerdo con JsHint
gulp.task("jsHint", function () {
    "use strict";

    return gulp.src(["./app/js/**/*.js"])
        .pipe(jsHint(".jshintrc"))
        .pipe(jsHint.reporter("default"));
});
////////////////////////////////////////////////////////////////
// 3 Busca errores de JavaScript de acuerdo con Google JsLinter
// gulp.task("jsGoogleLint", function () {
//    "use strict";
//
//    return gulp.src(["./app/js/**/*.js"])
//        .pipe(gjsLint())
//        .pipe(gjsLint.reporter("console"), {
//            fail: true
//        });
//});
//////////////////////////////////////////////////////////////


// 4 Busca errores de JavaScript de acuerdo con JsLint
gulp.task("jsLint", function () {
    "use strict";

    return gulp.src(["./app/js/**/*.js"])
        .pipe(jsLint())
        .on('error', function (error) {
            console.error(String(error));
        });
});


//gulp.task("default", ["jsLint", "jsHint", "jsGoogleLint", "dev-server"]);
gulp.task("default", ["jsLint", "jsHint", "dev-server"]);
 