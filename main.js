$(document).ready(function() {
	
	$('#codeField').keyup(function(e) {
		
		$.post('process.php', {
			code: $(e.target).val()
		}, function(result) {
			$('#results').text(result);
		});
		
	});
	
});