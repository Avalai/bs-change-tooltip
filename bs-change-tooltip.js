$(document).ready(function(){
	// Initialize the tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// On mousedown, do the calculation
	$("#checkButt").mousedown(function(){
		var button = $(this);

		if((Math.random()) > (Math.random())){
    		button.attr("data-original-title", "Number 1!");
		}else{
			button.attr("data-original-title", "Number 2!");
		}
	});

	// On mouseup, show the tooltip
	$("#checkButt").mouseup(function(){
		$("#checkButt").tooltip("show");
	});

	// When the tooltip fades out, change the 'title' so that when the user 
	// hovers over it, it displays a generic phrase
	$("#checkButt").on('hidden.bs.tooltip', function(){
		$("#checkButt").attr("data-original-title", "Are you gonna check that?");
	});

	// Note: this code won't work unles you are using it in a Bootstrap-based website.
	// It can also be done with JS instead of jQuery, of course.
});