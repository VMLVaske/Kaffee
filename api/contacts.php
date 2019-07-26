<?php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "reactdb";
$id = '';

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));

if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

switch($method) {
  case 'GET':
    $id = $_GET['id'];
    $sql = "select * from contacts" . ($id? "where id=$id" : '');
    break;
  case 'POST':
    $m_id = $_POST["m_id"];
    $email = $POST["email"];

    $sql = "insert into contacts (m_id, email) values ('$m_id', '$email')";
    break;
}

// run sql statement
$result = mysqli_query($con, $sql);

// die if sql statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {
  if (!$id) echo '[';
  for ($i=0; $i<mysqli_num_rows($result); $i++) {
    echo ($i>0 ? ' , ' : '').json_encode(mysqli_fetch_object($result));
  }
  if(!$id) echo ']';
} elseif ($method == 'POST') {
  echo json_encode($result);
} else {
  echo mysqli_affected_rows($con);
}

$con->close(); 
