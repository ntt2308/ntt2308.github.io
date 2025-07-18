<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Kết quả: </h1>
  <?php
  $num =  $_POST["number"];
  $i = 1;
  $sum = 0;
  while($i < $num){
    $sum  += $i;
    $i++;

  }
  echo $sum;
  ?>
</body>
</html>
