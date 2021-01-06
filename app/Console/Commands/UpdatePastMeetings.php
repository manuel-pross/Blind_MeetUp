<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Meeting;

class UpdatePastMeetings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:pastMeetings';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set status of past pivots to past, remove unsigned past meetings';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        date_default_timezone_set('Europe/Berlin');
        $currentDate = strtotime(date('Y-m-d h:i:s', time()));

        $joins = DB::table('meeting_user')
            ->get();
        
        foreach($joins as $join) {
            $meeting = Meeting::findOrFail($join->meeting_id);
            $meetingDate = strtotime($meeting->date);

            if($currentDate > $meetingDate) {
                DB::table('meeting_user')
                ->where('user_id', $join->user_id)
                ->where('meeting_id', $join->meeting_id)
                ->update(
                    [
                        'status' => 'past',
                    ]
                );
            }
        }

        $meetings = Meeting::all();

        foreach($meetings as $meeting) {
            $meetingDate = strtotime($meeting->date);

            if($currentDate > $meetingDate)
                if($meeting->members <= 1 || $meeting->members == null)
                    $meeting->delete();
        }

        $this->info('All past meetings and their joins to users have been updated');
    }
}
