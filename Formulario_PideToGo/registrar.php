<?php 

include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['name']) >= 1 && strlen($_POST['apellido']) >= 1 && strlen($_POST['cedula']) >= 1 && strlen($_POST['nacimiento']) >= 1 && strlen($_POST['telefono']) >= 1 && strlen($_POST['correo']) >=1 && strlen($_POST['direccion']) >= 1) {
		$name = trim($_POST['name']);
	    $apellido = trim($_POST['apellido']);
		$cedula = trim($_POST['cedula']);
        $nacimiento = trim($_POST['nacimiento']);
		$telefono = trim($_POST['telefono']);
        $correo = trim($_POST['correo']);
		$codigo = trim($_POST['codigo']);
		$direccion = trim($_POST['direccion']);
	    $fecha = date("d/m/y");
	    $consulta = "INSERT INTO datos(nombre,apellido,cedula,nacimiento,telefono,correo,Codigo,Direccion,fecha) VALUES ('$name','$apellido','$cedula','$nacimiento','$telefono','$correo','$codigo','$direccion','$fecha')";
	    $resultado = mysqli_query($conex,$consulta);
	    if ($resultado) {


	    	?> 
	    	
            
           <?php

           if($resultado){
            print("Bienvenido, $name");
               
           }


	    } else {
	    	?> 
	    	<h3 class="bad">¡Ups ha ocurrido un error!</h3>
           <?php
	    }
    }   else {
	    	?> 
	    	<h3 class="bad">¡Por favor complete los campos!</h3>
           <?php
    }
}

?>