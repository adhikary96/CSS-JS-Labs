function invoice(){
	var b = parseInt(document.getElementById("doll").value);
	var c = parseInt(document.getElementById("calc").value);
	var m = parseInt(document.getElementById("phone").value);
	var l = parseInt(document.getElementById("lg").value);
	
	barbTot = b * 20;
	display();
	
}

function display(){
	
	document.write("<html><body>"
	+"<table>"
	+"<tr>"
	+"<th>Product</th><th>Quantity</th><th>Price</th><th>Total</th>"
	+"</tr>"
	+"<tr>"
	+"<th>Barbie Doll</th><th>"+b+"</th><th>20</th><th>"+barbTot+"</th>"
	+"</tr></table></body></html>");
}