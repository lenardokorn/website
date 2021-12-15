<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Exercise 2</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <style>
        @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>

<body>
    <div class="container">
        <code>echo $a .$b .$c;</code>
        <p>Output: 730 Euro!</p>
    </div>
    <div class="container">
        <code>echo ""Text"";</code>
        <p>Double quotation marks don't work.</p>
    </div>
    <div class="container">
        <code>echo "Text" .$a;</code>
        <p>Output: Text7</p>
    </div>
    <div class="container">
        <code>echo "Text" $a .$b;</code>
        <p>There's a period (.) missing in between "Text" and $a.</p>
    </div>
    <div class="container">
        <code>echo $a + $b + $c;</code>
        <p>Output: 37</p>
    </div>
    <div class="container">
        <code>echo $a * $b / $b;</code>
        <p>Output: 7</p>
    </div>
    <div class="container">
        <code>echo ('<b>\'Text\'</b>' .$a ." Text " .$b);</code>
        <p>Output: <b>'Text'</b>7 Text 30 Euro</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
    </script>
</body>

</html>