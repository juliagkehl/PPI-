<h1> <?php echo "hello world"; ?> </h1>

<?php $valor=50; 
echo "<p>".$valor."</p>";

$nome="Julia";
echo $nome;


$array=""; //Declarando array como String
$array=array(); //como array
$array=["pera", "maça", "bananao"];//como array
echo"<br>";

print_r($array);

echo "<ul>";
for($i=0; $i<=count($array);$i++){
    echo "<li> $i </li>";
}

echo "</ul>";

?>