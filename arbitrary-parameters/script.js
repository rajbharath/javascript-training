function addAll() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum = sum + arguments[i];
	};
	alert(sum);
}