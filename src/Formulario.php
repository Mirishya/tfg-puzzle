<!DOCTYPE html>
<html>
    <head>
        <title>Pruebas</title>
    </head>
    <body>
    <?php
        if(isset($_POST["filas"]) && isset($_POST["col"])){
            $x = $_POST["filas"];
            $y = $_POST["col"];
            echo "Has seleccionado " . $x . " filas".'<br>';
            echo "Has seleccionado " . $y . " columnas".'<br>';
        }else{
            echo "Ingrese cosas";
            echo "<form action='#' method='POST'>";
                echo "<label>Filas</label>";
                echo "<input type='text' name='filas'>";
                echo "<label>Columnas</label>";
                echo "<input type='text' name='col'>";
                echo "<input type='submit' name='Enviar'>";
            echo "</form>";
        }
    ?>
    </body>
</html>
