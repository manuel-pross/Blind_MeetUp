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


// Gibt für jede Route die startpage view zurueck
Route::get('{reactRoutes}', function () {
    return view('startpage'); // your start view
})->where('reactRoutes', '^((?!api).)*$'); // except 'api' word



Route::get('/home', 'HomeController@index')->name('home');
