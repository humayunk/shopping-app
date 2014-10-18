$(document).ready( function() {

	

	//Adding item to list

	$('#add-button').click(function() {
		if ($('input#add-todo').val().trim().length == 0 ) {
				alert("put something here");
				$('input#add-todo').val("");
		} 

		else {
				$('#list').append('<li class="new">' + $('input#add-todo').val() + '<button class="done">Got It</button>' + '<button class="remove">Trash</button>' + '</li>');
				$('input#add-todo').val("");
		
		}
	});

	//Crossing Item Off

	$('#list').on('click', '.done', function(){
		$(this).closest('li').toggleClass("new cross");
	});

	//Removing Item

	$('#list').on('click', '.remove', function(){
		$(this).closest('li').remove();
	});

});

	// Validate text box, then add value in text box to list
