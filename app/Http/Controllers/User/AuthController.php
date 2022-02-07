<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'email|required|unique:users,email',
            'password' => 'required|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'type' => 'error',
                'message' => 'Validation error'
            ], 422);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        return response()->json($user);
    }
    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'password' => 'required|min:6',
            'email' => 'email|required'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'type' => 'error',
                'message' => 'Validation error'
            ], 422);
        }
        $cradintial = request(['email', 'password']);
        if (!Auth::attempt($cradintial)) {
            return response()->json([
                'type' => 'error',
                'message' => 'Phone Number Or Password Not Match'
            ], 500);
        }
        $user = User::where('email', $request->email)->first();
        $token = $user->createToken('AuthToken');
        return response()->json(['token' => $token->plainTextToken]);
        // 123456
    }
    public function logout(Request $request) {
        // if (!Auth::check()) {
        //     return response()->json([
        //         'type' => 'error',
        //         'message' => 'Unauthenticate'
        //     ], 401);
        // }
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'type' => 'success',
            'message' => 'Logout Successfully'
        ], 200);
    }
}
