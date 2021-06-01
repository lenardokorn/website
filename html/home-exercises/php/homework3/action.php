<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Homework 3</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main class="container mt-5">
        <h1>PHP Homework 3</h1>
        <p class="lead">
            By Nina Moritz and Lenard Okorn
        </p>

        <?php
        // Read in data from form
        $rows = $_GET["rows"];
        $cols = $_GET["cols"];
        $search = $_GET["search"];

        $images = array("city.jpg", "shore.jpg", "beach.jpg", "lake.jpg", "mountain.jpg");
        ?>

        <h2>Output</h2>
        <?php
        echo "<p>Hello from PHP! 😌💅</p>";
        ?>

        <h2>Table 2x4</h2>
        <?php
        echo "<table class=\"table table-striped table-bordered table-hover my-4\">";
        for ($i = 0; $i < 2; $i++) {
            echo "<tr>";
            for ($j = 0; $j < 4; $j++) {
                echo "<td></td>";
            }
            echo "</tr>";
        }
        echo "</table>";
        ?>

        <h2>Custom table</h2>
        <?php
        echo "<table class=\"table table-striped table-bordered table-hover my-4\">";
        for ($i = 0; $i < $rows; $i++) {
            echo "<tr>";
            for ($j = 0; $j < $cols; $j++) {
                echo "<td></td>";
            }
            echo "</tr>";
        }
        echo "</table>";
        ?>

        <h2>Image search</h2>
        <?php
        echo "<img src=\"./images/" . $search . "\" alt=\"Not found 😳\" class=\"img-fluid rounded\">";
        ?>

        <h2>Random images in table</h2>
        <?php
        echo "<table class=\"table table-striped table-bordered table-hover my-4\">";
        for ($i = 0; $i < $rows; $i++) {
            echo "<tr>";
            for ($j = 0; $j < $cols; $j++) {
                echo "<td><img src=\"./images/" . $images[random_int(0, count($images) - 1)] . "\" alt=\"Not found 😳\" class=\"img-fluid rounded\"></td>";
            }
            echo "</tr>";
        }
        echo "</table>";
        ?>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>

</html>