﻿document.getElementById("color").focus();

$(document).keydown((evt)->
	if evt.keyCode ==13
		colr = $("#color").val().toUpperCase()
		cL = colr.match(/./g)
		for i in cL
			if cL[i] !='#' &&(cL[i] <'0'|| cL[i] >'9'&& cL[i] <'A'|| cL[i] >'F') #найден не hex-символ
				break
		document.body.style.backgroundColor = (colr.charAt(0) !='#' && i >= cL.length &&'#'||'') + colr
);
