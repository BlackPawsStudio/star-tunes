<?php
  header("Access-Control-Allow-Origin: * ");  
  echo json_encode('Привет, ' . htmlspecialchars($_GET["name"]) . '!');
?>