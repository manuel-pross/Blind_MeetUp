<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request) {
        try {
            if(Auth::attempt($request->only('hfu_user_name', 'password'))) {
                /** @var User $user */
                $user = Auth::user();
                $userRole = $user->role;

                if ($userRole) {
                    $this->scope = $userRole;
                }

                $token = $user->createToken('app', [$this->scope])->accessToken;
    
                return response([
                    'message' => 'success',
                    'token' => $token,
                    'user' => $user
                ]);
            }
        } catch(\Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }

        return response([
            'message' => 'invalid username/password'
        ], 401);
    }

    public function user() {
        return Auth::user();
    }
}
