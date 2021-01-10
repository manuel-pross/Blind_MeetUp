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
                    'date' => ("2021-3-2" . $i . " 08:15:00"),
                    'place' => 'Mensa',
                    'specific_place' => 'Klo',
                    'max_members' => $i + 2
                ]
            );
            $meeting->save();
        }
    }
}
