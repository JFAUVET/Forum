<?php 
  require_once 'config.php';
  $dsn = "mysql:host=$mysqlHost;"."dbname=$mysqlDatabase;"."charset=$charset";
  $opt = array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false
  );
  $PDO = new PDO($dsn, $mysqlLogin, $mysqlPassword, $opt);

  /* --- test requete --- */

  // // definition de la requête
  // $query = "SELECT * FROM $coursTable";
  // // $data = array ( 'f1', 3, 5 );
  // // envoi et execution de la requête à la base
  // $statement = $PDO->prepare( $query ); // preparation
  // $exec = $statement->execute(); // execution
  // // recupération du résultat
  // $resultats = $statement->fetchAll ( PDO::FETCH_ASSOC );
  // print_r( $resultats );


  /* --- test requete --- */
?>