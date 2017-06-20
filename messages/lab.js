// Your JavaScript goes here...
function parse(){
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "data.json", true)

	xmlhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			var data = JSON.parse(this.responseText);
			newData = "";
			for (i = 0; i < data.length; i++){
				newData += data[i].content + ' ' + data[i].username 
	      					+ '<br>';
					}
			document.getElementById("messages").innerHTML = newData;
		}
	};

	xmlhttp.send();
}
