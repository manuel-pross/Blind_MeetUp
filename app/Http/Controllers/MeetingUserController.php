<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meeting;
use App\User;

class MeetingUserController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function getRelatedMeetings($user_id) {
        $user = new User();
        $relatedMeetings = $user::findOrFail($user_id)
            ->meetings()
            ->get();
        return $relatedMeetings;
    }

    public function getPendingMeetings($user_id) {
        $user = new User();
        $pendingMeetings = $user::findOrFail($user_id)
            ->pendingMeetings()
            ->get();
        return $pendingMeetings;
    }

    public function getPastMeetings($user_id) {
        $user = new User();
        $pastMeetings = $user::findOrFail($user_id)
            ->pastMeetings()
            ->get();
        return $pastMeetings;
    }

    public function getRegisteredMeetings($user_id) {
        $user = new User();
        $registeredMeetings = $user::findOrFail($user_id)
            ->registeredMeetings()
            ->get();
        return $registeredMeetings;
    }

    public function registerUser($meeting_id, $user_id) {
        $user = new User();

        $registeredMeetings = $this->getRegisteredMeetings($user_id);

        echo(count($registeredMeetings));

        if(count($registeredMeetings) == 0) {
            $specific_meeting = $user::findOrFail($user_id)
            ->pendingMeetings()
            ->updateExistingPivot($meeting_id, [
                'status' => 'registered',
            ]);
        }
    }
}
