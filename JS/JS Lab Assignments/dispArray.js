function dispArray(a){
	document.write("List of Employees:")
	document.write("<br/>  - - - - - - - - - - - - - - - <br/>");
	for(var i=0; i<a.length; i++){
		document.write((i+1)+"."+" "+a[i]+"<br/>");
	}
}