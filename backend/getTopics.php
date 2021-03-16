<?php
  require_once "helper.php";
  require_once($_SERVER["DOCUMENT_ROOT"] . '/Forum/backend/requests/topics/requestTopics.php');
  
  function getTopics()
  {
    $resultat=requestTopics($_POST["id_cours"]);
    sendMessage($resultat);
  }

  getTopics();
?>