<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    protected $fillable = [
        'date', 'place', 'specific_place', 'members', 'max_members', 'overall_rating', 'ratings', 'average_rating', 'img_link' //TODO members und rating rausnehmen, da sie nur per funktion und nicht per request geändert werden können
    ];

    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
