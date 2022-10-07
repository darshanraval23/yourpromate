<?php

namespace App\Http\Controllers;
use App\Models\project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ProjectController extends Controller
{
     /**
     * Home page of User.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employess = project::select(
            DB::raw('projects.*'),
            DB::raw('(CASE 
            WHEN status = 1 THEN "PendingAllocation"
            WHEN status = 2 THEN "In Progress"
            WHEN status = 3 THEN "Allocated"
            WHEN status = 4 THEN "Camplited"
            ELSE "In Progress"
            END) AS status'),
            DB::raw('(CASE 
            WHEN deadline < now() THEN "Missing Deadline"
            ELSE deadline
            END) AS deadlinestatus'))
        ->get();
        return response()->json($employess, 200);
    }
    public function addproject(Request $req)
    {
        $model_obj = new project;
        $model_obj->name = $req->name;
        $model_obj->deadline = $req->deadline;
        $model_obj->project_categories = $req->categories;
        $model_obj->details = $req->details;
        $model_obj->save();
        
        return response()->json([
            'message' => ['The project has been successfully added!']
         ], 200);
    }
}
