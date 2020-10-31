<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    protected $fillable = [
        'type', 'date', 'place', 'members', 'max_members', 'rating', 'img_link'
    ];

    public function users() {
        return $this->belongsToMany('App\User');
    }

    public function getPastMeetings() {
        return $this->where('type', 'past');
    } 
}
