var gulp = require('gulp')
var apidoc = require('gulp-apidoc')
var path = require('path')

var sources = path.resolve("../../platform/")

gulp.task('apidoc', function () {
  var destDir = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + "/idea-rest-api";
  console.info("generating docs from " + sources + " to " + destDir)
  apidoc.exec({src: sources, dest: destDir, debug: true})
})

gulp.task('default', ['apidoc'])

gulp.task('watch', function() {
  gulp.watch(sources + "/**/*.{clj,coffee,cs,dart,erl,go,java,js,php,py,rb,ts,pm}", ['apidoc'])
})