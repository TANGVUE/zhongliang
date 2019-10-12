<?php

    include 'connect.php';

    $g_id = $_REQUEST['gid'];
    $g_type = $_REQUEST['type'];

    $sql = "SELECT * FROM goods WHERE g_id =$g_id";
    $sql1 = "SELECT * FROM goods WHERE g_type ='$g_type' LIMIT 0,4";

    $cnt->set_charset('utf8');

    $res=$cnt->query($sql);
    $res1=$cnt->query($sql1);

    if(1){
        $data =array(
            'code' =>0,
            'goods'=>$res->fetch_all(MYSQLI_ASSOC),
            'list'=>$res1->fetch_all(MYSQLI_ASSOC)
        );
    } else {
        $data =array(
            'code' =>1,
            'goods' =>'',
            'list' =>''
        );
    }

    echo json_encode($data);

?>