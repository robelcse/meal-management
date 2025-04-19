<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cost_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cost_id');
            $table->string('item_description');
            $table->unsignedDouble('item_price');
            $table->timestamps();
            $table->foreign('cost_id')->references('id')->on('costs');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cost_details');
    }
};
