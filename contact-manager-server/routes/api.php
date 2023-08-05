<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::get('unautharized', 'unautharized')->name("unautharized");
});

Route::middleware('auth:api')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('display', [ContactController::class, 'display']);
    Route::post('update', [ContactController::class, 'update']);
    Route::post('add', [ContactController::class, 'add']);
    Route::post('delete', [ContactController::class, 'delete']);
});
