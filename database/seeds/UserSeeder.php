<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 5)->create()
            ->each(function ($user){
                $meeting_ids = range(1, 5);
                $connections = array_slice($meeting_ids, 0, 5);
                foreach ($connections as $value) {
                    DB::table('meeting_user')
                        ->insert(
                            [
                                'user_id' => $user->id,
                                'meeting_id' => $value,
                                'status' => 'pending',
                                'created_at' => Now(),
                                'updated_at' => Now()
                            ]
                        );
                }
            });
    }
}
