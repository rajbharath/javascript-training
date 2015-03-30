function sayHello(username){
	
	username  = username || 'guest';
	
	alert('hello ' + username);

}

function showName(names){
	var defaultParams = {
		first_name : 'Dear',
		last_name : 'Customer'
	}

	var final_names  = defaultParams;
	for(var name in names){
		if(names.hasOwnProperty(name)){
			if(names[name] !== undefined)
			{
				final_names[name] = names[name];
			}
		}
	}

	alert(final_names.first_name + ' ' + final_names.last_name);
}


function showNameUsesjQuery(event) {
		var defaultParams = {
			first_name : 'Dear',
			last_name : 'Customer'
		}
		var final_names = $.extend({},defaultParams,event.data.names);
		alert(final_names.first_name + ' ' + final_names.last_name);
}

$(document).ready(function () {
	data =  {names: {last_name : "raj"} };
	$("#jQueryButton").click(data,showNameUsesjQuery);
 });
