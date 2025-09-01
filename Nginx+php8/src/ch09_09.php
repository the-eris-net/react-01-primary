<?php
$year = 2023;
if ($year % 400 == 0) {
    echo '윤년입니다.';
} else if ($year % 100 == 0) {
    echo '평년입니다.';
} else if ($year % 4 == 0) {
    echo '윤년입니다';
} else {
    echo '평년입니다.';
}