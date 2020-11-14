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
    return view('startpage');
});

Route::get('/impressum', function () {
    return view('startpage');
});

Route::get('/richtlinien', function () {
    return view('startpage');
});

Route::get('/datenschutz', function () {
    return view('startpage');
});

Route::get('/feedback', function () {
    return view('startpage');
});

Route::get('/kontakt', function () {
    return view('startpage');
});

Auth::routes();


// Login Routes
Route::get('/home', 'HomeController@index')->name('home');


Route::get('/home/anmelden', function () {
    return view('home');
});

Route::get('/home/anstehend', function () {
    return view('home');
});

Route::get('/home/vergangen', function () {
    return view('home');
});
