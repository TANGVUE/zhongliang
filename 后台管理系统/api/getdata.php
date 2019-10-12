<?php

    include 'connect.php';

    $db = $_REQUEST['db'];
    if($db == 'orders'){
        $sql ="SELECT orders.o_id,orders.g_id,orders.u_id,orders.count,goods.g_name,goods.g_price,goods.g_url,g_shop FROM orders,goods WHERE goods.g_id = orders.g_id";
    }else {
        $sql = "SELECT * FROM $db";
    }
    $cnt->set_charset('utf8');
    $res=$cnt->query($sql);

    if($res->num_rows!=0){
        $data = array(
            'code' => 0,
            'list' => $res->fetch_all(MYSQLI_ASSOC)
        );
    }else{
        $data = array(
            'code' => 1
        );
    }

    echo json_encode($data);

?>