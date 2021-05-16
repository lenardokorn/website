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
        <?php
        $nameTable = "Table";
        $nameChair = "Office chair";
        $nameLamp = "Lamp";
        $namePCDesk = "PC desk";
        $priceTable = 1999.0;
        $priceChair = 589.0;
        $priceLamp = 29.0;
        $pricePCDesk = 999.0;

        const EUR = " €";

        $netTotal = $priceTable + $priceChair + $priceLamp + $pricePCDesk;

        echo "Net total: " . $netTotal . EUR . ".<br>";

        const TAX = 19.0;

        $grossTotal = $netTotal + $netTotal * (TAX / 100);

        echo "Gross total: " . $grossTotal . EUR . ".<br>";
        ?>

        <table class="table table-striped">
            <tr>
                <th>Name</th>
                <th>Gross price</th>
            </tr>
            <tr>
                <td>
                    <?php
                    echo $nameTable;
                    ?>
                </td>
                <td>
                    <?php
                    echo $priceTable + $priceTable * (TAX / 100) . EUR . ".";
                    ?>
                </td>
            </tr>
            <tr>
                <td>
                    <?php
                    echo $nameChair;
                    ?>
                </td>
                <td>
                    <?php
                    echo $priceChair + $priceChair * (TAX / 100) . EUR . ".";
                    ?>
                </td>
            </tr>
            <tr>
                <td>
                    <?php
                    echo $nameLamp;
                    ?>
                </td>
                <td>
                    <?php
                    echo $priceLamp + $priceLamp * (TAX / 100) . EUR . ".";
                    ?>
                </td>
            </tr>
            <tr>
                <td>
                    <?php
                    echo $namePCDesk;
                    ?>
                </td>
                <td>
                    <?php
                    echo $pricePCDesk + $pricePCDesk * (TAX / 100) . EUR . ".";
                    ?>
                </td>
            </tr>
        </table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
    </script>
</body>

</html>