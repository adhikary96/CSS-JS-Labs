var dollPrice = 20;
var calcPrice = 30;
var phonePrice = 40;
var lgPrice = 50;

var b1;
var c1;
var m1;
var l1;

function order(){
	var b = parseInt(document.getElementById("doll").value);
	var c = parseInt(document.getElementById("calc").value);
	var m = parseInt(document.getElementById("phone").value);
	var l = parseInt(document.getElementById("lg").value);
	
	b1 = b;
	c1 = c;
	m1 = m;
	l1 = l;
	
	window.location.href = "invoice.html?b1="+b1;
	
	console.log("b1:"+b1+" b:"+b);
	console.log("c1:"+c1+" c:"+c);
	console.log("m1:"+m1+" m:"+m);
	console.log("l1:"+l1+" l:"+l);
	//console.log("all:   "+(isNaN(b)||isNaN(c)||isNaN(m)||isNaN(l)));
		
	if(isNaN(b)||isNaN(c)||isNaN(m)||isNaN(l)){
		alert("no items selected");
	}
	else{
		window.open("invoice.html?b1="+b1,"_blank","width=400, height=400");
	}
	
}

function returnValue(b1){
	
	
	console.log("b1:"+b1);
	console.log("dollPrice:"+dollPrice);
	
	dollTotal = dollPrice * b1;
	calcTotal = calcPrice * c1;
	phoneTotal = phonePrice * m1;
	lgTotal = lgPrice * l1;
	
	console.log("total:" +dollTotal);
	var res = new Array();
	res[0] = dollTotal;
	res[1] = calcTotal;
	res[2] = phoneTotal;
	res[3] = lgTotal;
	
	console.log(res);
	
	return (res);
}