<?php
  require_once "helper.php";
  
  function checkLogin()
  {
    if ( authenticate($_POST["login"],$_POST["mdp"]) )
      sendMessage("");
    else
      sendError("ACCESS DENIED");
  }

  checkLogin();
?>