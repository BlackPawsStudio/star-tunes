<?php
  header("Access-Control-Allow-Origin: * ");  
  
  $db_url = parse_url(getenv('https://@eu-cdbr-west-01.cleardb.com'));

  $servername = $db_url["host"];
  $username = $db_url["user"];
  $password = $db_url["pass"];
  $dbname = substr($db_url["path"], 1);

  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn -> connect_error) {
    echo json_encode('died from cringe');
    die("Connection failed: " . $conn -> connect_error);
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