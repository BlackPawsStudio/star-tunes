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