/**
* 14/10/2012
* Script para verificar disponibilidade do domínio via AJAX
* processamento.js - V.1
* Autor: Thiago Pereira Rosa - www.thiago.cjb.net
**/
var xmlhttp = false;
var linksMax = -1;
var links = null;
function createXMLHttpRequestObject() {
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		try {
			xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e) {
			try {
				xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e) {
				xmlhttp = false;
			}
		}
	}
}

window.onload = function() {
	createXMLHttpRequestObject();
	if (xmlhttp && document.getElementsByTagName) {
		document.getElementsByTagName('html')[0].className = 'xmlhttp';
		links = document.getElementById('checarLinks').getElementsByTagName('a');
		linksMax = links.length;
		if (linksMax > -1) {
			verificaDominio(0);
		}
	}
}

function verificaDominio(link) {
	createXMLHttpRequestObject();
	xmlhttp.open('get', 'verificaDominio.php?url='+ links[link].getAttribute('href') +'&link='+ link, true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			eval(xmlhttp.responseText);
		}
	}
	xmlhttp.send(null);
}