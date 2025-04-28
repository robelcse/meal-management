<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Illuminate\Database\Eloquent\Builder;
use Carbon\Carbon;

use App\Models\User;
use App\Models\Meal;

class MealController extends Controller
{
    public function mealCount()
    {

        //SQL ROW QUERY

        /*
        $users =  DB::select("SELECT users.id, users.name, users.email, users.phone, (SELECT SUM(deposit_amount) FROM deposits WHERE deposits.user_id=users.id AND deposits.deposit_month LIKE '2025-04-01') AS deposit_sum, (SELECT SUM(meal_number) FROM meals WHERE meals.user_id=users.id AND meals.meal_month LIKE '2025-04-01') AS meal_sum FROM users");


        return $users;

        */

        //LARAVEL DB QUERY

        $month = '2025-04-01';

        $users = User::select('id', 'name', 'email', 'phone')
            ->withSum(['deposits as deposit_sum' => function (Builder $query) use ($month) {
                $query->where('deposit_month', 'like', $month);
            }], 'deposit_amount')

            ->withSum(['meals as meal_sum' => function (Builder $query) use ($month) {
                $query->where('meal_month', 'like', $month);
            }], 'meal_number')
            ->with(['meals'])
            ->get();



        // Generate array of all dates of the month
        $startDate = Carbon::parse($month);
        $endDate   = $startDate->copy()->endOfMonth();
        $dateRange = [];

        while ($startDate <= $endDate) {
            $dateRange[] = $startDate->format('Y-m-d');
            $startDate->addDay();
        }


        // Now, prepare data for each user
        foreach ($users as $user) {
            $userMeals = [];

            foreach ($dateRange as $date) {
                // Find meal for the specific date
                $meal = $user->meals->firstWhere('meal_date', $date);
                $userMeals[$date] = $meal ? $meal->meal_number : 0; // 0 if no meal found
            }

            $user->userMeals = $userMeals;
        }


        return response()->json([
            'success' => true,
            'message' => 'Success',
            'data' => $users,
            'status_code' => 200
        ], 200);
    }
}
