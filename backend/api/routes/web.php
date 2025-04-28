<?php

use App\Models\Meal;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\Builder;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {

    $userList = User::all();
    return view('welcome');
});



Route::get("meals/count", [\App\Http\Controllers\Api\MealController::class, "mealCount"]);
