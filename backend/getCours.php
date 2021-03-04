<?php
  require_once "helper.php";
  require_once($_SERVER["DOCUMENT_ROOT"] . '/Forum/backend/requests/cours/requestCours.php');
  
  function getCours()
  {
    $resultat=requestCours($_SESSION["ID"]);
    // print_r($resultat);
    sendMessage($resultat);
  }

  getCours();
?>