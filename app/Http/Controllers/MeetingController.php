<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meeting;

class MeetingController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function index() {
        return Meeting::all();
    }

    public function store(Request $request) {
        return Meeting::create($request->all());
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
