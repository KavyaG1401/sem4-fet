<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loop Programs</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #eef2f7;
            padding: 30px;
        }

        .container {
            width: 700px;
            margin: auto;
            background-color: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px gray;
        }

        h1 {
            text-align: center;
            color: darkblue;
        }

        .box {
            margin-top: 20px;
            padding: 20px;
            background-color: #f8f8f8;
            border-left: 5px solid steelblue;
            border-radius: 8px;
        }

        button {
            padding: 10px 16px;
            background-color: darkblue;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: royalblue;
        }

        p {
            font-size: 18px;
        }

        .home {
            margin-top: 30px;
            text-align: center;
        }

        .home a {
            text-decoration: none;
        }
    </style>

    <!-- External JavaScript File -->
    <script src="script.js"></script>

</head>

<body>

    <div class="container">

        <h1>While Loop and Do While Loop</h1>

        <!-- While Loop Section -->
        <div class="box">

            <h2>While Loop</h2>

            <button onclick="showWhile()">Run While Loop</button>

            <p id="whileResult"></p>

        </div>

        <!-- Do While Loop Section -->
        <div class="box">

            <h2>Do While Loop</h2>

            <button onclick="showDoWhile()">Run Do While Loop</button>

            <p id="doResult"></p>

        </div>

        <!-- Homepage Link -->
        <div class="home">

            <a href="https://KavyaG1401.github.io/sem4-fet/">
                <button>Back to Homepage</button>
            </a>

        </div>

    </div>

</body>

</html>
