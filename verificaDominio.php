<?php
	/**
	* 14/10/2012
	* Script para verificar disponibilidade do domνnio via AJAX
	* verifica.php - V.1
	* Autor: Thiago Pereira Rosa - www.thiago.cjb.net
	**/

	// Configurando ENCODE, recuperando os dados passados via URL
	header('Content-Type: text/plain; charset=iso-8859-1');
	$url = $_GET['url'];
	$dominio = $_GET['link'];
	$status = (@get_headers($url) ? 'linkOn' : 'linkOff');

	// Exibindo o Link para alterar seu Estilo
	print("document.getElementsByTagName('a')['$dominio'].className = '$status'");
	// Verificando se existe mais links para prosseguir
	// A formataηγo abaixo ι importante para ser interpretada corretamente
	printf('
if('.$dominio.' < (linksMax - 1)){
	verificaDominio('.$dominio.' + 1);
}');
?>