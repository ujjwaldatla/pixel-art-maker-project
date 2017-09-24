
//Listening to the click on the submit button
$('#submit_button').on('click',function(){

	//Getting the number of rows and columns provided as input by the user
	const rows = $('#input_height').val();
	const columns = $('#input_width').val();

	//calling the makeGrid function that will create the grid of N*M (rows*columns)
	makeGrid(rows,columns);

	//Storing the current background color for the 'dblclick' event listener
	let currentColor = $('td').css('background-color');

	//Listening for the user's click on the grid and coloring the appropriate cell
	$('td').on('click',function(){
		let color = $('#colorPicker').val();
		$(this).css('background-color',color);
	});

	//This is an additional functionality provided for a better user experience. It allows users to revert the color of the cell to the original state in case of a mistake
	$('td').on('dblclick',function(){
			$(this).css('background-color',currentColor);
		});

	});

//function that builds the grid based on the height and width provided
function makeGrid(height, width) {

	//Clearing the grid at the beginning to ensure that we start with a clean slate
	$('#pixel_canvas').replaceWith('<table id="pixel_canvas"></table>');

	//Adding rows based on height provided by the user
	let rowIndex = 0;
	while(rowIndex < height){
		$('#pixel_canvas').append('<tr class="row"></tr>');
		rowIndex++;
	}

	//Adding columns based on the width provided by the user
	$('tr').each(function(){
		for(let columnIndex = 0;columnIndex < width; columnIndex++){
			$(this).append('<td class="column"></td>');
		}
	});

}




