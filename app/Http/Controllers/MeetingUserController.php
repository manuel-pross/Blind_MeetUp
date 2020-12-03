<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meeting;
use App\User;

class MeetingUserController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    public function getJoinedMeetings($user_id) {
        // $meetings = auth()->id();
        // return $meetings;
        $user = new User();
        $joinedMeetings = $user::findOrFail($user_id)
            ->joinedMeetings()
            ->get();
        return $joinedMeetings;
    }

    public function getPastMeetings($user_id) {
        // $meetings = auth()->id();
        // return $meetings;
        $user = new User();
        $pastMeetings = $user::findOrFail($user_id)
            ->pastMeetings()
            ->get();
        return $pastMeetings;
    }
}
