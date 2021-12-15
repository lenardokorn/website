<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Homework 2</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main class="container mt-5">
        <h1>PHP Homework 2</h1>

        <?php
        // Read in data from form
        // * http://192.168.8.131:5500/html/home-exercises/php/homework2/actfion.php?first-name=test&last-name=fas&city=fdas+fas&radios=Flat&documentaries=on&news=on&movies=on&anything-else=helo

        $firstName = $_GET["first-name"];
        $lastName = $_GET["last-name"];
        $city = $_GET["city"];
        if (!empty($_GET["radios"])) {
            $apartment = $_GET["radios"];
        }
        $documentaries = $_GET["documentaries"];
        $sport = $_GET["sport"];
        $news = $_GET["news"];
        $movies = $_GET["movies"];
        $anythingElse = $_GET["anything-else"];
        ?>

        <p class="lead">
            Thank you!
        </p>

        <table class="table table-striped">
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>City</th>
                <th>Type of building</th>
                <th>Favourite TV Programmes</th>
                <th>Anything else?</th>
            </tr>
            <tr>
                <td>
                    <?php
                    echo $firstName;
                    ?>
                </td>
                <td>
                    <?php
                    echo $lastName;
                    ?>
                </td>
                <td>
                    <?php
                    echo $city;
                    ?>
                </td>
                <td>
                    <?php
                    echo $apartment;
                    ?>
                </td>
                <td>
                    <?php
                    if ($documentaries == "on") {
                        echo "Documentaries<br>";
                    }
                    if ($sport == "on") {
                        echo "Sport<br>";
                    }
                    if ($news == "on") {
                        echo "News<br>";
                    }
                    if ($movies == "on") {
                        echo "Movies<br>";
                    }
                    ?>
                </td>
                <td>
                    <?php
                    echo $anythingElse;
                    ?>
                </td>
            </tr>
        </table>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>

</html>