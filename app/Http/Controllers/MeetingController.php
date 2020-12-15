<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meeting;
use App\User;
use Illuminate\Support\Facades\DB;

class MeetingController extends Controller
{

    public function index() {
        return Meeting::all();
    }

    public function store(Request $request) {
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
}
