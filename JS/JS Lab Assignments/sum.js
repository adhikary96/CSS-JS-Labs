function sum(p,n,r){
	var result=0;
	
	var s1=1+(r/100);
	var pow = powerN(s1,n);
	
	var s2 = p*pow;
	result = s2-p;
	
	return result;
	
}

function powerN(a,n){
	var p=1;
	for(var i=0; i<n; i++){
		p = p*a;
	}
	return p;
}