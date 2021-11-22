  <?php
  header('Access-Control-Allow-Origin: * ');  
  header('Content-Type: application/json');
  
  $cleardb_url = parse_url(getenv('CLEARDB_DATABASE_URL'));
  $cleardb_server = $cleardb_url['host'];
  $cleardb_username = $cleardb_url['user'];
  $cleardb_password = $cleardb_url['pass'];
  $cleardb_db = substr($cleardb_url['path'],1);
  $active_group = 'default';
  $query_builder = TRUE;

  $conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
  if ($conn -> connect_error) {
    echo json_encode('died from cringe  ');
    die('Connection failed: ' . $conn -> connect_error);
  }

  switch ($_GET['request']) {
    case 'color':
      $sql = 'SELECT * FROM colordata';
      $result = mysqli_query($conn, $sql);
      $colors = mysqli_fetch_all($result);
      echo json_encode($colors);
      break;
    case 'waves':
      $sql = 'SELECT * FROM wavetype';
      $result = mysqli_query($conn, $sql);
      $waves = mysqli_fetch_all($result);
      echo json_encode($waves);
      break;
    case 'users': 
      $sql = 'SELECT * FROM users';
      $result = mysqli_query($conn, $sql);
      $users = mysqli_fetch_all($result);
      echo json_encode($users);
      break;
    case 'songs':
      $sql = 'SELECT * FROM songs WHERE author = "aboba"';
      $result = mysqli_query($conn, $sql);
      $songs = mysqli_fetch_all($result);
      echo json_encode($songs);
      break;
    case 'octaves':
      $sql = 'SELECT * FROM octaves';
      $result = mysqli_query($conn, $sql);
      $octaves = mysqli_fetch_all($result);
      for ($i = 0; $i < count($octaves); $i++) {
        $sql = 'SELECT * FROM ' . $octaves[$i][2] . '';
        $octResult = mysqli_query($conn, $sql);
        $octave = mysqli_fetch_all($octResult);
        $octaves[$i][2] = $octave;
      }
      echo json_encode($octaves);
      break;
  }

  switch ($_GET['create']) {
    case 'user':
      $sql = 'INSERT INTO users (id, name, password, rating, marked, pfp) VALUES ('.$_GET['id'].', \''.$_GET['name'].'\', \''.$_GET['password'].'\','.$_GET['rating'].', '.$_GET['marked'].', '.$_GET['pfp'].')';
      if ($conn->query($sql) === TRUE) {
        echo json_encode('New record created successfully');
      } else {
        echo json_encode('Error: ' . $sql . '\n' . $conn->error);
      }
      break;
    case 'song':
      $sql = 'INSERT INTO songs (id, name, url, genre, marks, reviews, author) VALUES ('.$_GET['id'].', \''.$_GET['name'].'\', \''.$_GET['url'].'\', \'' . $_GET['genre'] . '\', '.$_GET['mark'].', '.$_GET['reviews'].', \''.$_GET['author'].'\')';
      if ($conn->query($sql) === TRUE) {
        echo json_encode('New record created successfully');
      } else {
        echo json_encode('Error: ' . $sql . '\n' . $conn->error);
      }
      break;
  }

  switch ($_GET['delete']) {
    case 'user':
      $sql = 'DELETE FROM users WHERE id = '. $_GET['id'] .'';
      if ($conn->query($sql) === TRUE) {
        echo json_encode('User deleted successfully');
      } else {
        echo json_encode('Error: ' . $sql . '\n' . $conn->error);
      }
      break;
    case 'songs':
      $sql = 'DELETE FROM songs WHERE author = \'' . $_GET['author'] . '\'';
      if ($conn->query($sql) === TRUE) {
        echo json_encode('Songs deleted successfully');
      } else {
        echo json_encode('Error: ' . $sql . '\n' . $conn->error);
      }
      break;
    case 'song':
      $sql = 'DELETE FROM songs WHERE id = ' . $_GET['id'] . '';
      if ($conn->query($sql) === TRUE) {
        echo json_encode('Song deleted successfully');
      } else {
        echo json_encode('Error: ' . $sql . '\n' . $conn->error);
      }
  }

  switch ($_GET['update']) {
    case 'user':
      $sql = 'UPDATE users SET pfp=' .$_GET['pfp']. ' WHERE id = ' .$_GET['id'].'';
      if ($conn->query($sql) === TRUE) {
        echo json_encode('Updated successfully');
      } else {
        echo json_encode('Error: ' . $sql . '\n' . $conn->error);
      }
      break;
    case 'song':
      $sql = 'UPDATE songs SET name=\'' .$_GET['name']. '\', url=\'' . $_GET['url'] . '\' WHERE id = ' .$_GET['id'].'';
      if ($conn->query($sql) === TRUE) {
        echo json_encode('Updated successfully');
      } else {
        echo json_encode('Error: ' . $sql . '\n' . $conn->error);
      }
      break;
  }

  switch ($_GET['filter']) {
    case 'songs': 
      if ($_GET['author'] != '' && $_get['genre'] != '') {
        $sql = 'SELECT * FROM genres WHERE author = \'' . $_GET['author'] . '\' AND genre = \'' . $_GET['genre'] . '\'';
        $result = mysqli_query($conn, $sql);
        $songs = mysqli_fetch_all($result);
        echo json_encode($songs);
      }
      else {
        if ($_GET['author'] != '') {
          $sql = 'SELECT * FROM songs WHERE author = \'' . $_GET['author'] . '\'';
          $result = mysqli_query($conn, $sql);
          $songs = mysqli_fetch_all($result);
          echo json_encode($songs);
        }
        else {
          if ($_GET['genre'] != '') {
            $sql = 'SELECT * FROM songs WHERE genre = \'' . $_GET['genre'] . '\'';
            $result = mysqli_query($conn, $sql);
            $songs = mysqli_fetch_all($result);
            echo json_encode($songs);
          }
          else {
            $sql = 'SELECT * FROM songs';
            $result = mysqli_query($conn, $sql);
            $songs = mysqli_fetch_all($result);
            echo json_encode($songs);
          }
        }
      }
      break;
  }

  $conn->close();
?>