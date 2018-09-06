function myConcat(sep){
	var res="";
	for(var i=0; i<arguments.length; i++){
		res += arguments[i] + sep;
	}
	alert(res);
}