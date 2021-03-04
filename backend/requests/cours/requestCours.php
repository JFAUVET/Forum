<?php
  require_once($_SERVER["DOCUMENT_ROOT"] . '/Forum/backend/mysqlConnect.php');

  function requestCours($userID)
  {
    global $PDO,$coursTable,$cours_suiviTable;
    
    $query = "SELECT * FROM $coursTable WHERE ID_cours IN (SELECT ID_cours FROM $cours_suiviTable WHERE ID_auth = ?)";
    $data = array ($userID);

    $statement = $PDO->prepare($query); // preparation
    $exec = $statement->execute($data); // execution

    $resultat = $statement->fetchAll ( PDO::FETCH_ASSOC );
    if ( empty($resultat) ) return false;
    return $resultat;
  }
?>