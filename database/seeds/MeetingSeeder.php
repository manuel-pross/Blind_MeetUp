<?php

use Illuminate\Database\Seeder;

use App\Meeting;

class MeetingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        for ($i = 0; $i < 5; $i++) {
            $meeting = new Meeting(
                [
                    'type' => 'pending',
                    'date' => ("2020-12-2" . $i . " 08:15:00"),
                    'place' => 'Mensa',
                    'members' => $i + 1,
                    'max_members' => $i + 2,
                    'rating' => $i + 1
                ]
            );
            $meeting->save();
        }
    }
}
