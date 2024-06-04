<?php

namespace App\Http\Controllers;

use App\Models\Resep;
use Illuminate\Http\Request;

class ResepController extends Controller
{
    public function index()
    {
        $reseps = Resep::all();
        return response()->json($reseps);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama_resep' => 'required|string',
            'deskripsi_resep' => 'required|string',
        ]);

        $resep = Resep::create($validatedData);
        return response()->json($resep, 201);
    }

    public function show(Resep $resep)
    {
        return response()->json($resep);
    }

    public function update(Request $request, Resep $resep)
    {
        $validatedData = $request->validate([
            'nama_resep' => 'required|string',
            'deskripsi_resep' => 'required|string',
        ]);

        $resep->update($validatedData);
        return response()->json($resep, 200);
    }

    public function destroy(Resep $resep)
    {
        $resep->delete();
        return response()->json(null, 204);
    }
}
