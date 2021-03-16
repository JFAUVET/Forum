<?php
  require_once($_SERVER["DOCUMENT_ROOT"] . '/Forum/backend/mysqlConnect.php');

  function requestTopics($IDcours)
  {
    global $PDO,$sujetTable;
    
    $query = "SELECT * FROM $sujetTable WHERE ID_cours=?";
    $data = array ($IDcours);

    $statement = $PDO->prepare($query); // preparation
    $exec = $statement->execute($data); // execution

    $resultat = $statement->fetchAll ( PDO::FETCH_ASSOC );
    if ( empty($resultat) ) return false;
    return $resultat;
  }
?>