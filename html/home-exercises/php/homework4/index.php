<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Homework 4</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <style>
        @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

        body {
            font-family: Inter, sans-serif;
        }
    </style>
</head>

<body>
    <main class="container mt-5">
        <h1>PHP Homework 4</h1>
        <p class="lead">
            Please fill in all the fields.
        </p>

        <form action="index.php" method="POST">
            <div class="form-group my-2">
                <h2>Choose colour</h2>
                Please choose a background colour for the file:
                <div class="row row-cols-lg-auto g-3 align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="White" name="colors" id="white" checked>
                        <label class="form-check-label" for="white">
                            White
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Blue" name="colors" id="blue">
                        <label class="form-check-label" for="blue">
                            Blue
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Green" name="colors" id="green">
                        <label class="form-check-label" for="green">
                            Green
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Red" name="colors" id="red">
                        <label class="form-check-label" for="red">
                            Red
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </div>
        </form>
    </main>

    <style>
        <?php
        $color = $_POST["colors"];
        echo "background-color: " . $color . ";";
        ?>
    </style>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>

</html>