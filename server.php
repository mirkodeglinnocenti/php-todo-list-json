<?php

// $todo_list = [
//     "studiare",
//     "allenarsi",
//     "lavorare"
// ];

$todo_list = file_get_contents('./todo.json');

$todo_list_decode = json_decode($todo_list, true);

$todo_list_true = json_encode($todo_list_decode);

header('Content-Type: application/json');

echo $todo_list_true;

?>