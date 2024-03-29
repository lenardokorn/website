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
    <?php
    function counter()
    {
        $fileName = "counter.txt";
        $count = 0;
        $handle = fopen($fileName, "r+");
        flock($handle, LOCK_EX);
        $count = fgets($handle, 10);
        fseek($handle, 0);
        echo "" . ++$count;
        fputs($handle, $count);
        fclose($handle);
    }
    ?>

    <main class="container mt-5">
        <h1>PHP Homework 3</h1>
        <p class="lead">
            By Nina Moritz and Lenard Okorn <span class="badge bg-dark">
                <?php counter(); ?> Visits
            </span>
        </p>

        <form action="action.php" method="GET">
            <div class="form-group">
                <label for="rows" class="form-label">Rows</label>
                <input class="form-control mb-2" type="number" name="rows" id="rows">
                <label for="cols" class="form-label">Columns</label>
                <input class="form-control mb-2" type="number" name="cols" id="cols">
                <label for="search" class="form-label">Search</label>
                <input class="form-control mb-2" type="text" name="search" id="search">
            </div>

            <div class="form-group mt-4">
                <button class="btn btn-dark" type="submit" name="table">Table</button>
                <button class="btn btn-dark" type="submit" name="image-search">Image search</button>
                <button class="btn btn-outline-dark" type="reset">Reset</button>
            </div>
        </form>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>

</html>