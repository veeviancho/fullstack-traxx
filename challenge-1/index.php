<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
  <link rel="stylesheet" href="style.css">
  <title>Page 1</title>
</head>

<body>
  <div id="root" class="center">
    <?php 
      echo "<div>";
      initialise();
      if (isset($_SESSION["error"])) {
        $msg = $_SESSION["error"];
        echo "<div class='center'><p id='error-msg' class='msg'>$msg</p></div>";
        unset($_SESSION["error"]);
      }
      echo "</div>";
    ?>
  </div>
  <script src="index.js"></script>
</body>

</html>

<?php 

function initialise() {
  $content = '
    <div class="center">
      <h1 class="heading">Registration Form</h1>
    </div>
    <form class="content" id="form" action="register.php" method="post">
      <p id="error-msg" class="msg">&nbsp;</p>
      
      <input 
        type="text" 
        id="fName"
        name="fName" 
        value="" 
        class="input input-all" 
        placeholder="First Name" 
        onkeyup="validateInput(this.name, this.value)" 
        required
      />

      <input 
        type="text" 
        id="lName"
        name="lName" 
        value="" 
        class="input input-all" 
        placeholder="Last Name" 
        onkeyup="validateInput(this.name, this.value)" 
        required
      />
      
      <div>
        <input 
          type="number"
          id="code"
          name="code" 
          value="" 
          class="input input-code" 
          placeholder="Country Code" 
          onkeyup="validateInput(this.name, this.value)" 
        /><input 
          type="number" 
          id="contact"
          name="contact" 
          value="" 
          class="input input-contact" 
          placeholder="Contact Number" 
          onkeyup="validateInput(this.name, this.value)" 
          required
        />
      </div>

      <input 
        type="email" 
        id="email"
        name="email" 
        value=""
        class="input input-all" 
        placeholder="Email" 
        onkeyup="validateInput(this.name, this.value)" 
        required
      />

      <input 
        type="text" 
        id="websiteURL"
        name="websiteURL" 
        value=""
        class="input input-all" 
        placeholder="Website/LinkedIn Profile URL" 
        onkeyup="validateInput(this.name, this.value)" 
      />

      <button class="btn" name="submit" type="submit">SUBMIT</button>
    </form>
  ';
  echo $content;
}

?>