function display(d){
	
	var hour = d.getHours();
	/*document.write("hour:"+d.getHours());
	document.write('<br/>');*/
	
	if(hour<12)
		document.write("Good Morning!!");
	else if(hour>=12 && hour<=17)
		document.write("Good Afternoon!!");
	else
		document.write("Good Evening!!");
	
}