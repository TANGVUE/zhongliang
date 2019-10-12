<?php

    include 'connect.php';

    $userid = $_REQUEST['userid'];

    $sql ="SELECT *FROM userdb WHERE u_id=$userid";

    $res=$cnt->query($sql);

    $arr= $res->fetch_all(MYSQLI_ASSOC);

    if($res->num_rows != 0){
        $data = array(
            'code' => 0,
            'username' => $arr[0]['username']
        );
    }else{
        $data = array(
            'code' => 0,
            'username' => null
        );
    }

    echo json_encode($data);

?>