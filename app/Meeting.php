<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    protected $fillable = [
        'date', 'place', 'specific_place', 'members', 'max_members', 'overall_rating', 'ratings', 'average_rating', 'img_link'
    ];

    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    public function relatedUsers() {
        return $this->belongsToMany('App\User')
        ->withPivot(['status']);
    }
}
