<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class,'index'])->name('index');
Route::post('/createuser', [UserController::class,'store'])->name('store');
Route::get('/users/{user}', [UserController::class,'show'])->name('show');
Route::put('/users/{user}', [UserController::class,'update'])->name('update');
Route::delete('/users/{user}', [UserController::class,'destroy'])->name('destroy');

