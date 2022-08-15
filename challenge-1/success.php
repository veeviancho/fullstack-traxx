<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
  <link rel="stylesheet" href="style.css">
  <title>Page 2</title>
</head>

<body>
  <div id="root" class="center">
    <div>
      <div class="center"><a href="index.php"><button class="nav-item">Back</button></a></div>
      <div>
        <?php 
          if (isset($_SESSION["success"])) {
            $msg = $_SESSION["success"];
            $fName = $_SESSION['fName'];
            $lName = $_SESSION['lName'];
            $code = $_SESSION['code'];
            $contact = $_SESSION['contact'];
            $email = $_SESSION['$email'];
            $websiteURL = $_SESSION['websiteURL'] == '' ? "No information entered." : $_SESSION['websiteURL'];

            echo "<h2 class='heading'>$msg</h2>
              <div class='content'>
                <div class='underline'>Your Information</div>
                <p><b>First Name:</b> $fName </p>
                <p><b>Last Name:</b> $lName</p>
                <p><b>Contact Number:</b> $code $contact</p>
                <p><b>Email Address:</b> $email</p>
                <p><b>Website URL:</b> $websiteURL</p>
              </div>";

            unset($_SESSION["success"]);
          }
        ?>
      </div>
    </div>
  </div>
</body>

</html>