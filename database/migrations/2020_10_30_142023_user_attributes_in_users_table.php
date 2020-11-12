<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserAttributesInUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('hfu_id')->after('id');
            $table->string('hfu_user_name')->unique()->after('hfu_id');
            $table->renameColumn('name', 'first_name');
            $table->string('last_name')->after('name');
            $table->renameColumn('email', 'hfu_mail');
            $table->string('role')->default('user')->after('email_verified_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('hfu_id');
            $table->dropColumn('hfu_user_name');
            $table->renameColumn('first_name', 'name');
            $table->dropColumn('last_name');
            $table->renameColumn('hfu_mail', 'email');
            $table->dropColumn('role');
        });
    }
}