<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'hfu_id', 'hfu_user_name', 'first_name', 'last_name', 'hfu_mail', 'role', 'password', 
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function meetings() {
        return $this->belongsToMany('App\Meeting');
    } 

    public function getPendingMeeting() {
        return $this->belongsToMany('App\Meeting')
        ->wherePivot('user_id', $this->id)
        ->where('type', 'pending');
    }
}
