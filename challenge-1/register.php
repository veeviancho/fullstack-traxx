<?php 

// Start session
session_start();

// Call function to register user after submission of form
if (isset($_POST['submit'])) {
  registerUser();
}

function registerUser() {

  // Connect to database
  include "dbconnect.php";

  // Variable assignment
  $fName = !empty($_POST['fName']) ? $_POST['fName'] : '';
  $lName = !empty($_POST['lName']) ? $_POST['lName'] : '';
  $code = !empty($_POST['code']) ? strval($_POST['code']) : '';
  $contact = !empty($_POST['contact']) ? strval($_POST['contact']) : '';
  $email = !empty($_POST['email']) ? $_POST['email'] : '';
  $websiteURL = !empty($_POST['websiteURL']) ? $_POST['websiteURL'] : '';

  // Check database to see if email has been taken
  $sql = "SELECT * FROM users WHERE email='$email'";
  $result = $db -> query($sql);
  if ($result -> num_rows > 0) {
    $_SESSION['error'] = "Email has already been taken.";
    redirect();
  }

  // Add user information to database
  $sql = "INSERT INTO users (fName, lName, code, contact, email, websiteURL) VALUES ('$fName', '$lName', '$code', '$contact', '$email', '$websiteURL');";
  $result = $db -> query($sql);

  // Successful registration
  if ($result) {
    $_SESSION['success'] = 'Thank you for you registration.';
    $_SESSION['fName'] = $fName;
    $_SESSION['lName'] = $lName;
    $_SESSION['code'] = $code;
    $_SESSION['contact'] = $contact;
    $_SESSION['$email'] = $email;
    $_SESSION['websiteURL'] = $websiteURL;
    successRedirect();
  } else {
    $_SESSION['error'] = "Unable to register user. Please try again.";
    redirect();
  }
  
  // Close database connection
  $db -> close();
}

function redirect() {
  // Send user back to the registration form
  header("Location: index.php");
  // Terminate execution of script
  exit;
}

function successRedirect() {
  // Send user to the success page
  header("Location: success.php");
  // Terminate execution of script
  exit;
}

?>