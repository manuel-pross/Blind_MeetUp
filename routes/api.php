<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', 'AuthController@login');

Route::get('user', 'AuthController@user')->middleware('auth:api');

Route::get('meetings', 'MeetingController@index');
Route::post('meeting', 'MeetingController@store');
Route::put('meeting/{id}', 'MeetingController@update');
Route::delete('meeting/{id}', 'MeetingController@delete');
