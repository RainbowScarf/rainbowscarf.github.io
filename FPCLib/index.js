/*
	rainbowscarf.github.io
	index.js
*/

$(document).ready(function()
	{

		$("#linktext").mouseover(function()
			{
				$(this).css("font-weight", "bold");
				$(this).css("font-style", "");
			})

		$("#linktext").mouseout(function() 
			{
				$(this).css("font-style", "italic");
				$(this).css("font-weight", "");
			})


	})