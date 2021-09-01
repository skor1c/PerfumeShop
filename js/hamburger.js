jQuery(document).ready(function(){
	
	$( ".cross" ).hide();
	$( ".hamburgermenu" ).hide();
	$( ".hamburger" ).click(function() {
		$( ".hamburgermenu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".hamburgermenu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});


});