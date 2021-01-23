<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Projektgruppe Blindlunch i.A. Fakultät DM, Hochschule Furtwangen"/>
    <meta name="publisher" content="Hochschule Furtwangen"/>
    <meta name="description" content="Wir connecten dich mit unserer Web-Anwendung mit anderen Studierenden aus den Fakultäten der HFU – unkompliziert und anonym."/>
    <meta name="keywords" content="Blind, MeetUp, blind, meetup, blindmeetup, BMU, HFU, Hochschule, Furtwangen, Blind, MeetUp, HFU, Blind, MeetUp, Furtwangen, Fuwa, Treffen, HFU, Networking, Networking, Treffen, Treffen, Furtwangen, Meetup, Semesterprojekt, Digitale, Medien, HFU, DM, Digitale, Medien"/>
    <meta name="page-topic" content="Bildung"/>
    <meta name="audience" content="Studenten"/>
    <meta http-equiv="content-language" content="de"/>
    <meta name="robots" content="index, follow"/>
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <main>
        @yield('content')
    </main>
</body>
</html>
