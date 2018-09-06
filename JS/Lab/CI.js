function calcCI(P,N,R){
	var result=0;
	
	var s1=1+(R/100);
	var pow = powerN(s1,N);
	
	var s2 = P*pow;
	res = s2-P;
	document.write("<center><hr/>CALCULATE COMPOUND INTEREST<hr/>")
	
	document.write("Principal:"+P);
	document.write("<br>Period:"+N);
	document.write("<br>Rate of Interest:"+R+"<center>");
	
	document.write("<h3><center>Compound Interest:"+res+"</center></h3>");
	
}

function powerN(a,n){
	var p=1;
	for(var i=0; i<n; i++){
		p = p*a;
	}
	return p;
}