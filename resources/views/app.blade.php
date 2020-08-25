<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vue/Laravel SSR App</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script defer src="{{ mix('js/entry-client.js') }}"></script>
</head>

<body>
    {!!
    ssr()
    ->entry(mix('js/entry-server.js'))
    ->fallback('<div id="app"></div>')
    ->render()
    !!}
</body>

</html>