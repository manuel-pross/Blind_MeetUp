<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PendingMeeting;

class PendingMeetingController extends Controller
{
    public function index() {
        return PendingMeeting::all();
    }

    public function store(Request $request) {
        return PendingMeeting::create($request->all());
    }

    public function update(Request $request, $id) {
        $pendingMeeting = PendingMeeting::findOrFail($id);
        $pendingMeeting->update($request->all());
        return $pendingMeeting;
    }

    public function delete($id) {
        $pendingMeeting = PendingMeeting::findOrFail($id);
        $pendingMeeting->delete();
        return 204;
    }
}