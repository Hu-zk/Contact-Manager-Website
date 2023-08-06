<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


Route::get('display', [ContactController::class, 'display']);
Route::post('update', [ContactController::class, 'update']);
Route::post('add', [ContactController::class, 'add']);
Route::post('delete', [ContactController::class, 'delete']);
