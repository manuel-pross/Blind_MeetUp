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

Route::get('meetings', 'MeetingController@index')->middleware(['auth:api', 'scope:admin']);
Route::post('meeting', 'MeetingController@store')->middleware(['auth:api', 'scope:admin']);
Route::put('meeting/{id}', 'MeetingController@update')->middleware(['auth:api', 'scope:admin']);
Route::delete('meeting/{id}', 'MeetingController@delete')->middleware(['auth:api', 'scope:admin']);

Route::get('related_meetings/{user_id}', 'MeetingUserController@getRelatedMeetings')->middleware(['auth:api', 'scope:admin,user']);
Route::get('pending_meetings/{user_id}', 'MeetingUserController@getPendingMeetings')->middleware(['auth:api', 'scope:admin,user']);
Route::get('past_meetings/{user_id}', 'MeetingUserController@getPastMeetings')->middleware(['auth:api', 'scope:admin,user']);
Route::get('registered_meetings/{user_id}', 'MeetingUserController@getRegisteredMeetings')->middleware(['auth:api', 'scope:admin,user']);

Route::put('register_user/{user_id}_{meeting_id}', 'MeetingUserController@registerUser')->middleware(['auth:api', 'scope:admin,user']);
Route::put('unregister_user/{user_id}_{meeting_id}', 'MeetingUserController@unregisterUser')->middleware(['auth:api', 'scope:admin,user']);

Route::put('rate_meeting/{meeting_id}', 'MeetingController@rateMeeting')->middleware(['auth:api', 'scope:admin,user']);
