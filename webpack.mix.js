const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/landing/app.js', 'public/js/landing')
    .react('resources/js/dashboard/app.js', 'public/js/dashboard')
    .sass('resources/sass/app.scss', 'public/css');
