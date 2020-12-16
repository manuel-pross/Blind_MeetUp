<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMeetingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meetings', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date');
            $table->string('place');
            $table->string('specific_place');
            $table->unsignedSmallInteger('members')->default(0);
            $table->unsignedSmallInteger('max_members');
            $table->unsignedSmallInteger('rating')->nullable()->default(0);
            $table->string('img_link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('meetings');
    }
}