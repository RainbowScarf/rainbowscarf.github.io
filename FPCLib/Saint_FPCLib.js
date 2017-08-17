/*
	Alex Saint
	Saint_FPCLib.js
*/

$(document).ready(function()
	{
		// Without a defined width in CSS, this mouseover will last the entire width of the page.

		$("#infotext").mouseover(function()
		{
			$(this).css("font-weight", "bold");
			$(this).css("font-style", "");
		})

		$("#infotext").mouseout(function() 
		{
			$(this).css("font-style", "italic");
			$(this).css("font-weight", "");
		})

	})