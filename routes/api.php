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

Route::get('meetings', 'MeetingController@index')->middleware('auth:api');
Route::post('meeting', 'MeetingController@store')->middleware('auth:api');
Route::put('meeting/{id}', 'MeetingController@update')->middleware('auth:api');
Route::delete('meeting/{id}', 'MeetingController@delete')->middleware('auth:api');

Route::get('related_meetings/{user_id}', 'MeetingUserController@getRelatedMeetings')->middleware('auth:api');
Route::get('pending_meetings/{user_id}', 'MeetingUserController@getPendingMeetings')->middleware('auth:api');
Route::get('past_meetings/{user_id}', 'MeetingUserController@getPastMeetings')->middleware('auth:api');
Route::get('registered_meetings/{user_id}', 'MeetingUserController@getRegisteredMeetings')->middleware('auth:api');