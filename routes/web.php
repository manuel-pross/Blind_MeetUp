<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('startpage');
});

Route::get('/styleguide', function () {
    return view('styleguide');
});

Route::get('/impressum', function () {
    return view('styleguide');
});

Route::get('/richtlinien', function () {
    return view('styleguide');
});

Route::get('/datenschutz', function () {
    return view('styleguide');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
