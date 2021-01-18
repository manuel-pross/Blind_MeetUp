<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meeting;
use App\User;

class MeetingUserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
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

    public function getRatedMeetings($user_id) {
        $user = new User();
        $ratedMeetings = $user::findOrFail($user_id)
            ->ratedMeetings()
            ->get();
        return $ratedMeetings;
    }

    public function registerUser($user_id, $meeting_id) {

        if(auth()->guest()) {
            abort(403);
        }

        if(auth('api')->user()->id != $user_id)
            abort(403, 'Falsche id');
            
        $user = new User();
        $desired_meeting = Meeting::findOrFail($meeting_id);
        $registeredMeetings = $this->getRegisteredMeetings($user_id);

        if($desired_meeting->members < $desired_meeting->max_members) {
            if(count($registeredMeetings) == 0) {
                $specific_meeting = $user::findOrFail($user_id)
                ->pendingMeetings()
                ->updateExistingPivot($meeting_id, [
                    'status' => 'registered',
                ]);
                $desired_meeting->update(array('members' => $desired_meeting->members + 1));
            } else {
                abort(500, 'a'); //Du hast dich bereits für ein Treffen registriert.
            }
        } else {
            abort(500, 'b'); //Die Maximalzahl an Teilnehmern für dieses Meetings ist bereits erreicht.
        }
    }

    public function unregisterUser($user_id, $meeting_id) {
        $user = new User();
        $desired_meeting = Meeting::findOrFail($meeting_id);
        $registeredMeetings = $this->getRegisteredMeetings($user_id);

        if(count($registeredMeetings) == 1) {
            $specific_meeting = $user::findOrFail($user_id)
            ->pendingMeetings()
            ->updateExistingPivot($meeting_id, [
                'status' => 'pending',
            ]);
            $desired_meeting->update(array('members' => $desired_meeting->members - 1));
        } else {
            abort(500, 'Du hast dich für kein Treffen registriert'); //Hier erfolgt leider eine Weiterleitung, versuch mal obs damit im Frontentfunktioniert
        }
    }

    public function rateMeeting($user_id, $meeting_id) {
        $rated_meeting = $user::findOrFail($user_id)
        ->ratedMeeting($meeting_id);

        if($rated_meeting >= 1)
            abort(500, 'Du hast dieses Treffen bereits bewertet');
        else {
            $user::findOrFail($user_id)
            ->pendingMeetings()
            ->updateExistingPivot($meeting_id, [
                'status' => 'rated',
            ]);
        }
    }
}
