<?php

    include 'connect.php';

    $o_id = $_REQUEST['oid'];

    $sql ="DELETE FROM orders WHERE o_id =$o_id";

    $res=$cnt->query($sql);

    if($res){
        $data = array(
            'code' => 0,
            'mesg' => '删除成功！'
        );
    }else {
        $data = array(
            'code' => 1,
            'mesg' => '删除失败!'
        );
    }

    echo json_encode($data);

?>