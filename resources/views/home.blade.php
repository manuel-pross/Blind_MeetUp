@extends('layouts.app')
@section('title', 'Blind MeetUp')
@section('content')
<!-- Scripts -->
<script src="{{ asset('js/dashboard/app.js') }}" defer></script>

<div id="dashboard"></div>

    {{-- <h1>Dashboard</h1>

    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="{{ route('logout') }}"
           onclick="event.preventDefault();
                         document.getElementById('logout-form').submit();">
            {{ __('Logout') }}
        </a>

        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>
    </div>

    <p>{{ Auth::user()->first_name }} </p> --}}
@endsection