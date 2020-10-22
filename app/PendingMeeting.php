<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PendingMeeting extends Model
{
    protected $fillable = ['date', 'place', 'numberOfMembers', 'maxMembers'];
}
