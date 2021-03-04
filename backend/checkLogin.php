<?php
  require_once "helper.php";
  
  function checkLogin()
  {
    if ( authenticate() )
      sendMessage("");
    else
      sendError("ACCESS DENIED");
  }

  checkLogin();
?>