<?php
  header("Access-Control-Allow-Origin: * ");  
  
  $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
  $cleardb_server = $cleardb_url["host"];
  $cleardb_username = $cleardb_url["user"];
  $cleardb_password = $cleardb_url["pass"];
  $cleardb_db = substr($cleardb_url["path"],1);
  $active_group = 'default';
  $query_builder = TRUE;
  // Connect to DB
  $conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
  if ($conn -> connect_error) {
    echo json_encode('died from cringe');
    die("Connection failed: " . $conn -> connect_error);
  }
  

  $sql = "SELECT * FROM colordata WHERE id = 2";
  $result = mysqli_query($conn, $sql);
  $user = mysqli_fetch_assoc($result);
  // mysqli_free_result($result);
  echo json_encode($user);

  $conn->close();

  // echo json_encode('Привет, ' . htmlspecialchars($_GET["name"]) . '!');
?>