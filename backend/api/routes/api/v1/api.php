<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('home', [App\Http\Controllers\Api\HomeController::class, 'home']);
Route::resource('members', App\Http\Controllers\Api\MemberController::class);
Route::resource('deposits', App\Http\Controllers\Api\DepositController::class);
