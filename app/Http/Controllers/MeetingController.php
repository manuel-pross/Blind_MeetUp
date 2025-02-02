<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meeting;
use App\User;
use Illuminate\Support\Facades\DB;

class MeetingController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index() {
        return Meeting::all();
    }

    /**
     * Store a new meeting.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $request->validate(
            [
                'date' => 'required|date|after:today',
                'place' => 'required',
                'specific_place' => 'required',
                'max_members' => 'required'
            ]
        );

        $meeting =  Meeting::create($request->all());

        $meeting_id = $meeting->id;
        $users = User::all();
        foreach ($users as $user) {
            DB::table('meeting_user')
            ->insert(
                [
                    'user_id' => $user->id,
                    'meeting_id' => $meeting_id,
                    'status' => 'pending',
                    'created_at' => Now(),
                    'updated_at' => Now()
                ]
            );
        }
    }

    public function update(Request $request, $id) {
        $meeting = Meeting::findOrFail($id);
        $meeting->update($request->all());
        return $meeting;
    }

    public function delete($id) {
        $meeting = Meeting::findOrFail($id);
        $meeting->delete();
        return 204;
    }

    public function rateMeeting(Request $request, $id) {
        $meeting = Meeting::findOrFail($id);

        //TODO: Validierung für den Request hinzufügen. Rating muss zwischen ?0? und 5 liegen

        $meeting->update([
            'ratings' => ++$meeting->ratings,
            'overall_rating' => $meeting->overall_rating + $request->overall_rating
        ]);
        // Muss das iwi in zwei Schritten machen weil ers sonst falsch ausrechnet...
        $meeting->update([
            'average_rating' => $meeting->overall_rating / $meeting->ratings
        ]);

        return $meeting;
    }
}
