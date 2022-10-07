<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->char('name',250);
            $table->integer('status')->comment('1=PendingAllocation, 2 =In Progress , 3= allocated, 4= camplited');
            $table->date('deadline')->nullable($value = true);
            $table->char('details',250);
            $table->char('project_categories',250);
            $table->char('allocated',250)->nullable($value = true);
            $table->date('ProjectStart')->nullable($value = true);
            $table->date('ProjectProgress')->nullable($value = true);
            $table->date('ProjectDelivered')->nullable($value = true);
            $table->date('ProjectLaunch')->nullable($value = true);
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
        Schema::dropIfExists('projects');
    }
};
