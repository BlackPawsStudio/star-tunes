<?php
  header("Access-Control-Allow-Origin: * ");  
  header('Content-Type: application/json');
  
  $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
  $cleardb_server = $cleardb_url["host"];
  $cleardb_username = $cleardb_url["user"];
  $cleardb_password = $cleardb_url["pass"];
  $cleardb_db = substr($cleardb_url["path"],1);
  $active_group = 'default';
  $query_builder = TRUE;

  $conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
  if ($conn -> connect_error) {
    echo json_encode('died from cringe  ');
    die("Connection failed: " . $conn -> connect_error);
  }
  
  function sendColor() {
    $sql = "SELECT * FROM colordata";
    $result = mysqli_query($GLOBALS[$conn], $sql);
    $colors = mysqli_fetch_all($result);
    echo json_encode($colors);
  }

  function sendWaves() {
    $sql = "SELECT * FROM wavetype";
    $result = mysqli_query($GLOBALS[$conn], $sql);
    $waves = mysqli_fetch_all($result);
    echo json_encode($waves);
  }

  function sendUsers() {
    $sql = "SELECT * FROM users";
    $result = mysqli_query($GLOBALS[$conn], $sql);
    $users = mysqli_fetch_all($result);
    echo json_encode($users);
  }

  switch (htmlspecialchars($_GET["request"])) {
    case "color":
       sendColor();
       break;
    case "waves":
      sendWaves();
      break;
    case "users": 
      sendUsers();
      break;
  }

  $conn->close();
?>