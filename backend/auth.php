<?php
  session_start();
  require_once "mysqlConnect.php";
  require_once "requests/authentification/requestUser.php";

  function isAuthenticated()
  {
    return ( isset($_SESSION["username"]) && isset($_SESSION["ID"]) );
  }

  function authenticate()
  {
    if (isset($_POST["login"]) && isset($_POST["mdp"]))
    {
      $user=requestUser($_POST["login"],$_POST["mdp"]);
      if ($user== false)
      {
        return false;
      }
      $_SESSION["username"]=$_POST["login"];
      $_SESSION["ID"]=$user;
      return true;
    }
    else
    {
      return false;
    }
  }
?>