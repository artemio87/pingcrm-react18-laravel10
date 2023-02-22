<!DOCTYPE html>
<html class="h-full bg-gray-200">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @vite(['resources/css/app.css', 'resources/js/manifest.js', 'resources/js/vendor.js', 'resources/js/app.js'])
    @routes
</head>
<body class="font-sans antialiased leading-none text-gray-800">

@inertia

</body>
</html>
