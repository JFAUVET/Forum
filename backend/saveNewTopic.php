<?php

require_once 'requests/topics/requestTopics.php';
require_once 'requests/cours/requestCours.php';
require_once 'helper.php';

// $_POST['id_cours'] = 2;
// $_POST['newTopic'] = 'Je suis le nouveau topic';
// $_POST['newTopic'] = '';

$test = isCoursSuivi($_SESSION['id'], $_POST['id_cours']);

if( $test != -1 && ! empty($test) )
{
    if( isset($_POST['newTopic']) && $_POST['newTopic'] != '' )
    {
        $dejaExistant = getTopic( $_POST['newTopic'] );

        if( $dejaExistant != -1 && ! empty($dejaExistant) )
        {
            sendError("Ce topic existe déjà");
        }
        else
        {
            $id_newTopic = createTopic( $_POST['id_cours'], $_POST['newTopic'] );
            if( $id_newTopic != -1 && ! empty($id_newTopic) )
            {
                sendMessage($id_newTopic);
            }
            else
            {
                sendError($id_newTopic);
            }
        }
    }
    else
    {
        sendError("Le nom du sujet que vous souhaitez créer est vide !");
    }
}
else
{
    sendError("Vous ne suivez pas ce cours !");
}


?>