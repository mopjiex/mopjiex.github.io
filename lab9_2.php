<?php
	if (!$_POST['name'] || !$_POST['email']) {
		print "<html><head><meta charset=utf-8></head><body><p>Поля, помеченные [*], являются обязательными для заполнения!</p></body></html>";
	} else {
		$link = mysqli_connect("localhost", "root", "", "sample");
		if (mysqli_connect_errno()) {
			printf("Не удалось подключиться: %s\n", mysqli_connect_error());
    		exit();
    	}	
		
	$name = [$_POST['name'], $_POST['city'], $_POST['address'], $_POST['dob'], $_POST['email']];
	for ($i =0; $i<sizeof($name); $i++){
		$name[$i]=((!$name[$i])?'NULL':"'".$name[$i]."'");
	}
	$sql = "INSERT INTO notebook_br08 (name, city, address, birthday, mail) VALUES ($name[0], $name[1], $name[2], $name[3], $name[4])";
	if (mysqli_query($link, $sql)) {
		echo "Новая запись добавлена успешно";
	} else {
		echo "Ошибка: " . $sql . "<br>" . mysqli_error($link);
	}
	mysqli_close($link);
}
?>