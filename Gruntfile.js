module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       watch: {
         scripts: {
           files: ['client/*.js'],
           tasks: ['uglify'],
           options: {
             spawn: false
           }
         }
       },
       uglify: {
           options: {
               banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
           },
           build: {
               src: 'client/client.js',
               dest: 'server/public/assets/scripts/client.min.js'
           }
       },
       copy: {
           main: {
               expand: true,
               cwd: "node_modules/",
               src: [
                   "angular/angular.min.js",
                   "angular/angular.min.js.map",
                   "angular-route/angular-route.min.js",
                   "angular-route/angular-route.min.js.map",
                   "angular-animate/angular-animate.min.js",
                   "angular-aria/angular-aria.min.js",
                   "angular-messages/angular-messages.min.js",
                   "angular-material/angular-material.min.js",
                   "angular-material/angular-material.min.css",
                   "font-awesome/css/font-awesome.min.css",
                   "jquery/dist/jquery.min.js"
               ],
               "dest": "server/public/vendors/"
           }
       }
   });

   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');

   // Default task(s).
   grunt.registerTask('default', ['copy', 'uglify']);

};
