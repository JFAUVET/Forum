<?php
  require_once($_SERVER["DOCUMENT_ROOT"] . '/Forum/backend/mysqlConnect.php');

  function requestUser($login,$mdp)
  {
    global $PDO,$authentificationTable;
    
    $query = "SELECT * FROM $authentificationTable WHERE login=? AND hash_mdp=?";
    $data = array ($login,$mdp);

    $statement = $PDO->prepare( $query ); // preparation
    $exec = $statement->execute( $data ); // execution

    $resultat = $statement->fetch ( PDO::FETCH_ASSOC );
    if ( empty($resultat) ) return false;
    $user=$resultat["ID_auth"];
    return $user;
  }

  requestUser("dssfd","sdqsd");
?>