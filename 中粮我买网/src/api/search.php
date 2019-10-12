<?php

    include 'connect.php';

    $type = $_REQUEST['type'];
    $page = $_REQUEST['page'];
    $sort = $_REQUEST['sort'];
    $section =$_REQUEST['section'];
    $pageCount =$_REQUEST['pageCount'];
    $index = $pageCount*($page-1);
    $cnt->set_charset('utf8');

    $sql1 ="SELECT * FROM goods WHERE $section g_name LIKE '%$type%' ORDER BY g_price $sort LIMIT $index,$pageCount";
    $sql2 = "SELECT * FROM goods WHERE $section g_name LIKE '%$type%' ORDER BY g_price $sort";


    $res1 = $cnt->query($sql1);
    $res2 = $cnt->query($sql2);

    if($res1->num_rows !=0 && $res2->num_rows !=0){
        $data =array(
            'code' => 0,
            'list'=>$res1->fetch_all(MYSQLI_ASSOC),
            'count' =>$res2->num_rows,
        );
    }else{
        $data =array(
            'code' => 1
        );
    }

    echo json_encode($data);
?>