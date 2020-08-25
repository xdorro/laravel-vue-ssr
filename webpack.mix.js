const mix = require("laravel-mix");
const webpack = require('webpack');
const path = require('path');

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

mix.sass("resources/sass/app.scss", "public/css")
    .js("resources/js/entry-client.js", "public/js")
    .js("resources/js/entry-server.js", "public/js");

mix.webpackConfig({
    // entry: "public/js/entry-server.js",

    resolve: {
        alias: {
            vue$: "vue/dist/vue.runtime.common.js"
        }
    },
    // output: {
    //     path: path.join(__dirname, "./public"),
    //     filename: "[name].bundle.js"
    // },
});
