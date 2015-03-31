function addAll() {
	var sum = 0;
	var arguments_converted_to_real_array = [].slice.call(arguments);
	for (var i = 0; i < arguments_converted_to_real_array.length; i++) {
		sum = sum + arguments_converted_to_real_array[i];
	};
	alert(sum);
}