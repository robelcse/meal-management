<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class HomeController extends Controller
{
    public function home(): JsonResponse
    {
        return Response::json([
            'success'     => true,
            'status_code' => 200,
            'message'     => 'Home Page'
        ]);
    }
}
