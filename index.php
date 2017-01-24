<!DOCTYPE html>
<html>
  <head>
    <title>Project Plouf</title>
    <?php
      importAll("./assets/libs"); //import all libraries
      //importAll("./assets/images"); //import all images
      //importAll("./assets/sprites"); //import all images
      importAll("./js/states"); //import all game states
      importAll("./js/models"); //import all game objects
    ?>
    <script src="js/Game.js"></script>
  </head>
  <body>
    <div class="gameCanvas"></div>
  </body>
</html>

<?php
  function importAll($path)
  {
    $files = scandir($path);
    foreach($files as $key => $value)
      if(substr($value, 0, 1) != ".")
        echo "<script src='$path/$value'></script>";
  }
?>
