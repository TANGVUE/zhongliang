<?php

    include 'connect.php';

    $o_id = $_REQUEST['oid'];
    $count = $_REQUEST['count'];

    $sql ="UPDATE orders SET count=$count WHERE o_id = $o_id";

    $res=$cnt->query($sql);

    if($res){
        $data = array(
            'code' => 0
        );
    }else {
        $data = array(
            'code' => 1
        );
    }

    echo json_encode($data);

?>