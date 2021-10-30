<?php
  header("Access-Control-Allow-Origin: * ");  
  
  $servername = 'https://@eu-cdbr-west-01.cleardb.com';
  $username = 'b3c3aff8b732c2';
  $password = '732bc427';
  $dbname = 'heroku_01d49df919a24e7';

  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn -> connect_error) {
    die("Connection failed: " . $conn -> connect_error);
    echo json_encode('died from cringe');
  }
  
  $sql = "SELECT * FROM colordata";

  $result = $conn->query($sql);
  
  if ($result -> num_rows > 0) {
    // output data of each row
    echo json_encode($sql);
  } else {
    echo "0 results";
  }
  $conn->close();

  // echo json_encode('Привет, ' . htmlspecialchars($_GET["name"]) . '!');
?>