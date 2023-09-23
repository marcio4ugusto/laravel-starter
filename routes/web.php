<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn () => inertia('Welcome'));
Route::get('/control-panel', fn () => inertia('ControlPanel'));
