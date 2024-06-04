<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ResepController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/reseps', [ResepController::class, 'index']);
Route::post('/reseps', [ResepController::class, 'store']);
Route::get('/reseps/{resep}', [ResepController::class, 'show']);
Route::put('/reseps/{resep}', [ResepController::class, 'update']);
Route::delete('/reseps/{resep}', [ResepController::class, 'destroy']);
