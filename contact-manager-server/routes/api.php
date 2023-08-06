<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


Route::get('display', [ContactController::class, 'display']);
Route::post('add', [ContactController::class, 'add']);
