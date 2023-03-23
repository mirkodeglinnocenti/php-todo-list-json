<?php

// $todo_list = [
//     "studiare",
//     "allenarsi",
//     "lavorare"
// ];

$todo_list = file_get_contents('./todo.json');

$todo_list_decode = json_decode($todo_list, true);

$new_task = isset($_POST['todo']) ? $_POST['todo'] : null ;

if($new_task) {

    $new_task_array = [
    'text' => $new_task,
    'done' => false
    ];

    $todo_list_decode[] = $new_task_array;

    file_put_contents('./todo.json', json_encode($todo_list_decode));
}



// var_dump($todo_list_true);

header('Content-Type: application/json');
$todo_list_true = json_encode($todo_list_decode);


echo $todo_list_true;

?>