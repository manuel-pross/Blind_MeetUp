<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\DB;
use App\Meeting;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\UpdatePastMeetings::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
        $schedule->command('update:pastMeetings')->everyMinute();

        //$schedule->call(function () {
        //     date_default_timezone_set('Europe/Berlin');
        //     $currentDate = strtotime(date('Y-m-d h:i:s', time()));
    
        //     $joins = DB::table('meeting_user')
        //         ->get();
            
        //     foreach($joins as $join) {
        //         $meeting = Meeting::findOrFail($join->meeting_id);
        //         $meetingDate = strtotime($meeting->date);
    
        //         if($currentDate > $meetingDate) {
        //             DB::table('meeting_user')
        //             ->where('user_id', $join->user_id)
        //             ->where('meeting_id', $join->meeting_id)
        //             ->update(
        //                 [
        //                     'status' => 'past',
        //                 ]
        //             );
        //         }
        //     }

        //     $meetings = Meeting::all();

        //     foreach($meetings as $meeting) {
        //         $meetingDate = strtotime($meeting->date);
    
        //         if($currentDate > $meetingDate)
        //             if($meeting->members <= 1 || $meeting->members == null)
        //                 $meeting->delete();
        //     }

        // })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
