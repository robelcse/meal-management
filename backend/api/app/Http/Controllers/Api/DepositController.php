<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DepositStoreRequest;
use App\Models\Deposit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class DepositController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $depositList = Deposit::orderByDesc('id')->get();

        return Response::json([
            'success'     => true,
            'data'        => $depositList,
            'status_code' => 200,
            'message'     => 'Deposit List'
        ]);
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
    public function store(DepositStoreRequest $request)
    {
        $deposit =  Deposit::create([
            'user_id' => $request->memberName,
            'deposit_amount' => $request->depositAmount,
            'deposit_month' => $request->depositMonth . "-01"
        ]);

        return Response::json([
            'success' => true,
            'data' => $deposit,
            'status_code' => 200,
            'message' => 'Deposit has been created successfully.'
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
