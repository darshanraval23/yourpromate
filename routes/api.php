<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\UserController;
use Laravel\Sanctum\Sanctum; 
use App\Http\Controllers\ProjectController;
use App\Models\project;

//public routs
//user ragistration rout
Route::post("user/ragister",[UserController::class ,"ragister"]);

//user login 
Route::post("user/login",[UserController::class ,"login"]);

//project routs
Route::post("/project",[projectController::class ,"index"]);

Route::post("/project/add",[projectController::class ,"addproject"]);

Route::get("/project/{id}",[projectController::class ,"getprojectbyid"]);

Route::get("/users",[UserController::class ,"getusers"]);

Route::post("/assign",[ProjectController::class ,"assignproject"]);

Route::post("/searchproject",[ProjectController::class ,"getprojectsbyname"]);

//fall back routs
// Route::fallback(function(){
//     return response()->json([
//         'message' => 'Page Not Found. If error persists, contact info@website.com'], 404);
// });

