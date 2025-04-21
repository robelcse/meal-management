<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cost;
use App\Models\CostDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //return $request->all();

        $cost = new Cost();
        $cost->user_id = $request->user;
        $cost->cost_amount = $request->totalCost;
        $cost->cost_month = "2025-04-01";
        $cost->cost_date = $request->dateOfCost;
        $cost->save();


        foreach ($request->itemList as $item) {

            $costDetails = new CostDetails();
            $costDetails->cost_id = $cost->id;
            $costDetails->item_description = $item['itemDescription'];
            $costDetails->item_price =  $item['itemPrice'];
            $costDetails->save();
        }


        return Response::json([
            'success' => true,
            'data' => $cost,
            'status_code' => 200,
            'message' => 'Cost has been created successfully.'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
