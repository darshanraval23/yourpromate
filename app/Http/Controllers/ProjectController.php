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

        // $employess = DB::table('projects')
        // ->whereRaw('(CASE
        // WHEN p.status==1 THEN PendingAllocation 
        // WHEN p.status==2 THEN In Progress 
        // WHEN p.status==3 THEN allocated 
        // WHEN P.status==4 THEN camplited
        // END) AS status')
        // ->get();
        
        // return response()->json($employess, 200);
    }
}
