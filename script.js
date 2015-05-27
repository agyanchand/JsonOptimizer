$(document).ready(function () {
	$.get('data.js', function (data) {
		$('#origContent').html(data);
	});
});