<?php
$money = 15000;
$condition = $money >= 20000;
if ($condition) {
    $food = '피자';
    echo '오늘은 피자 먹어야지<br>';
} else {
    $food = '치킨';
    echo '오늘은 치킨 먹어야지<br>';
}
echo $food;