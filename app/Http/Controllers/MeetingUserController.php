<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meeting;
use App\User;

class MeetingUserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getRelatedMeetings($user_id) {
        $user = new User();
        $relatedMeetings = $user::findOrFail($user_id)
            ->meetings()
            ->get();
        return $relatedMeetings;
    }

    public function getPendingMeetings($user_id) {
        $user = new User();
        $relatedMeetings = $user::findOrFail($user_id)
            ->pendingMeetings()
            ->get();
        return $relatedMeetings;
    }

    public function getPastMeetings($user_id) {
        $user = new User();
        $relatedMeetings = $user::findOrFail($user_id)
            ->pastMeetings()
            ->get();
        return $relatedMeetings;
    }
}
