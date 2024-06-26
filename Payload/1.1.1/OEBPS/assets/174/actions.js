pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 48788;
pubcoder.page.title = pubcoder.page.title || "174";
pubcoder.page.number = pubcoder.page.number || 174;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj48874_onTap_activeActionGroupIndex = -1;
var obj48874_onTap_runningActionsCount = 0;
var obj48874_onTap_loopCount = 0;
var obj48871_onTap_activeActionGroupIndex = -1;
var obj48871_onTap_runningActionsCount = 0;
var obj48871_onTap_loopCount = 0;
var obj48867_onTap_activeActionGroupIndex = -1;
var obj48867_onTap_runningActionsCount = 0;
var obj48867_onTap_loopCount = 0;
var obj48840_onTap_activeActionGroupIndex = -1;
var obj48840_onTap_runningActionsCount = 0;
var obj48840_onTap_loopCount = 0;
var obj48833_onTap_activeActionGroupIndex = -1;
var obj48833_onTap_runningActionsCount = 0;
var obj48833_onTap_loopCount = 0;
var obj48826_onTap_activeActionGroupIndex = -1;
var obj48826_onTap_runningActionsCount = 0;
var obj48826_onTap_loopCount = 0;
var obj48819_onTap_activeActionGroupIndex = -1;
var obj48819_onTap_runningActionsCount = 0;
var obj48819_onTap_loopCount = 0;
var obj48810_onTap_activeActionGroupIndex = -1;
var obj48810_onTap_runningActionsCount = 0;
var obj48810_onTap_loopCount = 0;
var obj48805_onTap_activeActionGroupIndex = -1;
var obj48805_onTap_runningActionsCount = 0;
var obj48805_onTap_loopCount = 0;
var obj48796_onTap_activeActionGroupIndex = -1;
var obj48796_onTap_runningActionsCount = 0;
var obj48796_onTap_loopCount = 0;
var obj48789_onTap_activeActionGroupIndex = -1;
var obj48789_onTap_runningActionsCount = 0;
var obj48789_onTap_loopCount = 0;
var obj48908_onTap_activeActionGroupIndex = -1;
var obj48908_onTap_runningActionsCount = 0;
var obj48908_onTap_loopCount = 0;
var obj48913_onTap_activeActionGroupIndex = -1;
var obj48913_onTap_runningActionsCount = 0;
var obj48913_onTap_loopCount = 0;
var obj67790_onTap_activeActionGroupIndex = -1;
var obj67790_onTap_runningActionsCount = 0;
var obj67790_onTap_loopCount = 0;
var obj67782_onTap_activeActionGroupIndex = -1;
var obj67782_onTap_runningActionsCount = 0;
var obj67782_onTap_loopCount = 0;
var obj88969_onTap_activeActionGroupIndex = -1;
var obj88969_onTap_runningActionsCount = 0;
var obj88969_onTap_loopCount = 0;
var obj88964_onTap_activeActionGroupIndex = -1;
var obj88964_onTap_runningActionsCount = 0;
var obj88964_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj48874_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48874_onTap_activeActionGroupIndex = -1;
		$("#obj48874").trigger("obj48874_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48874) {
				console.warn("de-queueing event obj48874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48874_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_48876();
function goToPage_48876() {
	window.obj48874_onTap_runningActionsCount = obj48874_onTap_runningActionsCount + 1;
	$("#anchor1021")[0].click();
	window.obj48874_onTap_runningActionsCount = window.obj48874_onTap_runningActionsCount - 1;
if (window.obj48874_onTap_runningActionsCount < 0) {
	window.obj48874_onTap_runningActionsCount = 0;
} else if (window.obj48874_onTap_runningActionsCount == 0) {
	obj48874_onTap_actionGroup1();
}
}





















};
obj48874_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48874_onTap_activeActionGroupIndex = -1;
		$("#obj48874").trigger("obj48874_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48874) {
				console.warn("de-queueing event obj48874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48874_onTap_activeActionGroupIndex = 1;
	





















};
obj48871_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48871_onTap_activeActionGroupIndex = -1;
		$("#obj48871").trigger("obj48871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48871) {
				console.warn("de-queueing event obj48871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48871_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_48873();
function goToPage_48873() {
	window.obj48871_onTap_runningActionsCount = obj48871_onTap_runningActionsCount + 1;
	$("#anchor1022")[0].click();
	window.obj48871_onTap_runningActionsCount = window.obj48871_onTap_runningActionsCount - 1;
if (window.obj48871_onTap_runningActionsCount < 0) {
	window.obj48871_onTap_runningActionsCount = 0;
} else if (window.obj48871_onTap_runningActionsCount == 0) {
	obj48871_onTap_actionGroup1();
}
}





















};
obj48871_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48871_onTap_activeActionGroupIndex = -1;
		$("#obj48871").trigger("obj48871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48871) {
				console.warn("de-queueing event obj48871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48871_onTap_activeActionGroupIndex = 1;
	





















};
obj48867_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48867_onTap_activeActionGroupIndex = -1;
		$("#obj48867").trigger("obj48867_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48867) {
				console.warn("de-queueing event obj48867." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48867").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48867_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_48869();
function goToPage_48869() {
	window.obj48867_onTap_runningActionsCount = obj48867_onTap_runningActionsCount + 1;
	$("#anchor1023")[0].click();
	window.obj48867_onTap_runningActionsCount = window.obj48867_onTap_runningActionsCount - 1;
if (window.obj48867_onTap_runningActionsCount < 0) {
	window.obj48867_onTap_runningActionsCount = 0;
} else if (window.obj48867_onTap_runningActionsCount == 0) {
	obj48867_onTap_actionGroup1();
}
}





















};
obj48867_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48867_onTap_activeActionGroupIndex = -1;
		$("#obj48867").trigger("obj48867_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48867) {
				console.warn("de-queueing event obj48867." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48867").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48867_onTap_activeActionGroupIndex = 1;
	





















};
obj48840_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48840_onTap_activeActionGroupIndex = -1;
		$("#obj48840").trigger("obj48840_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48840) {
				console.warn("de-queueing event obj48840." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48840").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48840_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48842();
function runjs_48842() {
	window.obj48840_onTap_runningActionsCount = obj48840_onTap_runningActionsCount + 1;

	$("#obj48840").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj48840_onTap_runningActionsCount = window.obj48840_onTap_runningActionsCount - 1;
if (window.obj48840_onTap_runningActionsCount < 0) {
	window.obj48840_onTap_runningActionsCount = 0;
} else if (window.obj48840_onTap_runningActionsCount == 0) {
	obj48840_onTap_actionGroup1();
}
	}, 1);
}







};
obj48840_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48840_onTap_activeActionGroupIndex = -1;
		$("#obj48840").trigger("obj48840_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48840) {
				console.warn("de-queueing event obj48840." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48840").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48840_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_48843();
function switchText_48843() {
	window.obj48840_onTap_runningActionsCount = obj48840_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48840_onTap_runningActionsCount = window.obj48840_onTap_runningActionsCount - 1;
if (window.obj48840_onTap_runningActionsCount < 0) {
	window.obj48840_onTap_runningActionsCount = 0;
} else if (window.obj48840_onTap_runningActionsCount == 0) {
	obj48840_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48840_onTap_runningActionsCount = window.obj48840_onTap_runningActionsCount - 1;
if (window.obj48840_onTap_runningActionsCount < 0) {
	window.obj48840_onTap_runningActionsCount = 0;
} else if (window.obj48840_onTap_runningActionsCount == 0) {
	obj48840_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj48840_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48840_onTap_activeActionGroupIndex = -1;
		$("#obj48840").trigger("obj48840_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48840) {
				console.warn("de-queueing event obj48840." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48840").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48840_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj48853 
playAudio_48844();
function playAudio_48844() {
	window.obj48840_onTap_runningActionsCount = obj48840_onTap_runningActionsCount + 1;
	var myAudio = $("#obj48853")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48840_onTap_runningActionsCount = window.obj48840_onTap_runningActionsCount - 1;
if (window.obj48840_onTap_runningActionsCount < 0) {
	window.obj48840_onTap_runningActionsCount = 0;
} else if (window.obj48840_onTap_runningActionsCount == 0) {
	obj48840_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48840_onTap_runningActionsCount = window.obj48840_onTap_runningActionsCount - 1;
if (window.obj48840_onTap_runningActionsCount < 0) {
	window.obj48840_onTap_runningActionsCount = 0;
} else if (window.obj48840_onTap_runningActionsCount == 0) {
	obj48840_onTap_actionGroup3();
}
	}
}









};
obj48840_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48840_onTap_activeActionGroupIndex = -1;
		$("#obj48840").trigger("obj48840_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48840) {
				console.warn("de-queueing event obj48840." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48840").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48840_onTap_activeActionGroupIndex = 3;
	





















};
obj48833_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48833_onTap_activeActionGroupIndex = -1;
		$("#obj48833").trigger("obj48833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48833) {
				console.warn("de-queueing event obj48833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48833_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48835();
function runjs_48835() {
	window.obj48833_onTap_runningActionsCount = obj48833_onTap_runningActionsCount + 1;

	$("#obj48833").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj48833_onTap_runningActionsCount = window.obj48833_onTap_runningActionsCount - 1;
if (window.obj48833_onTap_runningActionsCount < 0) {
	window.obj48833_onTap_runningActionsCount = 0;
} else if (window.obj48833_onTap_runningActionsCount == 0) {
	obj48833_onTap_actionGroup1();
}
	}, 1);
}







};
obj48833_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48833_onTap_activeActionGroupIndex = -1;
		$("#obj48833").trigger("obj48833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48833) {
				console.warn("de-queueing event obj48833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48833_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_48836();
function switchText_48836() {
	window.obj48833_onTap_runningActionsCount = obj48833_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48833_onTap_runningActionsCount = window.obj48833_onTap_runningActionsCount - 1;
if (window.obj48833_onTap_runningActionsCount < 0) {
	window.obj48833_onTap_runningActionsCount = 0;
} else if (window.obj48833_onTap_runningActionsCount == 0) {
	obj48833_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48833_onTap_runningActionsCount = window.obj48833_onTap_runningActionsCount - 1;
if (window.obj48833_onTap_runningActionsCount < 0) {
	window.obj48833_onTap_runningActionsCount = 0;
} else if (window.obj48833_onTap_runningActionsCount == 0) {
	obj48833_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj48833_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48833_onTap_activeActionGroupIndex = -1;
		$("#obj48833").trigger("obj48833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48833) {
				console.warn("de-queueing event obj48833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48833_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj48854 
playAudio_48837();
function playAudio_48837() {
	window.obj48833_onTap_runningActionsCount = obj48833_onTap_runningActionsCount + 1;
	var myAudio = $("#obj48854")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48833_onTap_runningActionsCount = window.obj48833_onTap_runningActionsCount - 1;
if (window.obj48833_onTap_runningActionsCount < 0) {
	window.obj48833_onTap_runningActionsCount = 0;
} else if (window.obj48833_onTap_runningActionsCount == 0) {
	obj48833_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48833_onTap_runningActionsCount = window.obj48833_onTap_runningActionsCount - 1;
if (window.obj48833_onTap_runningActionsCount < 0) {
	window.obj48833_onTap_runningActionsCount = 0;
} else if (window.obj48833_onTap_runningActionsCount == 0) {
	obj48833_onTap_actionGroup3();
}
	}
}









};
obj48833_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48833_onTap_activeActionGroupIndex = -1;
		$("#obj48833").trigger("obj48833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48833) {
				console.warn("de-queueing event obj48833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48833_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48838();
function runjs_48838() {
	window.obj48833_onTap_runningActionsCount = obj48833_onTap_runningActionsCount + 1;

	$("#obj48833").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj48833_onTap_runningActionsCount = window.obj48833_onTap_runningActionsCount - 1;
if (window.obj48833_onTap_runningActionsCount < 0) {
	window.obj48833_onTap_runningActionsCount = 0;
} else if (window.obj48833_onTap_runningActionsCount == 0) {
	obj48833_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_48839();
function switchText_48839() {
	window.obj48833_onTap_runningActionsCount = obj48833_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48833_onTap_runningActionsCount = window.obj48833_onTap_runningActionsCount - 1;
if (window.obj48833_onTap_runningActionsCount < 0) {
	window.obj48833_onTap_runningActionsCount = 0;
} else if (window.obj48833_onTap_runningActionsCount == 0) {
	obj48833_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48833_onTap_runningActionsCount = window.obj48833_onTap_runningActionsCount - 1;
if (window.obj48833_onTap_runningActionsCount < 0) {
	window.obj48833_onTap_runningActionsCount = 0;
} else if (window.obj48833_onTap_runningActionsCount == 0) {
	obj48833_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj48833_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48833_onTap_activeActionGroupIndex = -1;
		$("#obj48833").trigger("obj48833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48833) {
				console.warn("de-queueing event obj48833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48833_onTap_activeActionGroupIndex = 4;
	





















};
obj48826_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48826_onTap_activeActionGroupIndex = -1;
		$("#obj48826").trigger("obj48826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48826) {
				console.warn("de-queueing event obj48826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48826_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48828();
function runjs_48828() {
	window.obj48826_onTap_runningActionsCount = obj48826_onTap_runningActionsCount + 1;

	$("#obj48826").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj48826_onTap_runningActionsCount = window.obj48826_onTap_runningActionsCount - 1;
if (window.obj48826_onTap_runningActionsCount < 0) {
	window.obj48826_onTap_runningActionsCount = 0;
} else if (window.obj48826_onTap_runningActionsCount == 0) {
	obj48826_onTap_actionGroup1();
}
	}, 1);
}







};
obj48826_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48826_onTap_activeActionGroupIndex = -1;
		$("#obj48826").trigger("obj48826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48826) {
				console.warn("de-queueing event obj48826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48826_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_48829();
function switchText_48829() {
	window.obj48826_onTap_runningActionsCount = obj48826_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48826_onTap_runningActionsCount = window.obj48826_onTap_runningActionsCount - 1;
if (window.obj48826_onTap_runningActionsCount < 0) {
	window.obj48826_onTap_runningActionsCount = 0;
} else if (window.obj48826_onTap_runningActionsCount == 0) {
	obj48826_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48826_onTap_runningActionsCount = window.obj48826_onTap_runningActionsCount - 1;
if (window.obj48826_onTap_runningActionsCount < 0) {
	window.obj48826_onTap_runningActionsCount = 0;
} else if (window.obj48826_onTap_runningActionsCount == 0) {
	obj48826_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj48826_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48826_onTap_activeActionGroupIndex = -1;
		$("#obj48826").trigger("obj48826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48826) {
				console.warn("de-queueing event obj48826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48826_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj48853 
playAudio_48830();
function playAudio_48830() {
	window.obj48826_onTap_runningActionsCount = obj48826_onTap_runningActionsCount + 1;
	var myAudio = $("#obj48853")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48826_onTap_runningActionsCount = window.obj48826_onTap_runningActionsCount - 1;
if (window.obj48826_onTap_runningActionsCount < 0) {
	window.obj48826_onTap_runningActionsCount = 0;
} else if (window.obj48826_onTap_runningActionsCount == 0) {
	obj48826_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48826_onTap_runningActionsCount = window.obj48826_onTap_runningActionsCount - 1;
if (window.obj48826_onTap_runningActionsCount < 0) {
	window.obj48826_onTap_runningActionsCount = 0;
} else if (window.obj48826_onTap_runningActionsCount == 0) {
	obj48826_onTap_actionGroup3();
}
	}
}









};
obj48826_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48826_onTap_activeActionGroupIndex = -1;
		$("#obj48826").trigger("obj48826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48826) {
				console.warn("de-queueing event obj48826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48826_onTap_activeActionGroupIndex = 3;
	





















};
obj48819_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48819_onTap_activeActionGroupIndex = -1;
		$("#obj48819").trigger("obj48819_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48819) {
				console.warn("de-queueing event obj48819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48819_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48821();
function runjs_48821() {
	window.obj48819_onTap_runningActionsCount = obj48819_onTap_runningActionsCount + 1;

	$("#obj48819").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj48819_onTap_runningActionsCount = window.obj48819_onTap_runningActionsCount - 1;
if (window.obj48819_onTap_runningActionsCount < 0) {
	window.obj48819_onTap_runningActionsCount = 0;
} else if (window.obj48819_onTap_runningActionsCount == 0) {
	obj48819_onTap_actionGroup1();
}
	}, 1);
}







};
obj48819_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48819_onTap_activeActionGroupIndex = -1;
		$("#obj48819").trigger("obj48819_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48819) {
				console.warn("de-queueing event obj48819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48819_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_48822();
function switchText_48822() {
	window.obj48819_onTap_runningActionsCount = obj48819_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48819_onTap_runningActionsCount = window.obj48819_onTap_runningActionsCount - 1;
if (window.obj48819_onTap_runningActionsCount < 0) {
	window.obj48819_onTap_runningActionsCount = 0;
} else if (window.obj48819_onTap_runningActionsCount == 0) {
	obj48819_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48819_onTap_runningActionsCount = window.obj48819_onTap_runningActionsCount - 1;
if (window.obj48819_onTap_runningActionsCount < 0) {
	window.obj48819_onTap_runningActionsCount = 0;
} else if (window.obj48819_onTap_runningActionsCount == 0) {
	obj48819_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj48819_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48819_onTap_activeActionGroupIndex = -1;
		$("#obj48819").trigger("obj48819_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48819) {
				console.warn("de-queueing event obj48819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48819_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj48854 
playAudio_48823();
function playAudio_48823() {
	window.obj48819_onTap_runningActionsCount = obj48819_onTap_runningActionsCount + 1;
	var myAudio = $("#obj48854")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48819_onTap_runningActionsCount = window.obj48819_onTap_runningActionsCount - 1;
if (window.obj48819_onTap_runningActionsCount < 0) {
	window.obj48819_onTap_runningActionsCount = 0;
} else if (window.obj48819_onTap_runningActionsCount == 0) {
	obj48819_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48819_onTap_runningActionsCount = window.obj48819_onTap_runningActionsCount - 1;
if (window.obj48819_onTap_runningActionsCount < 0) {
	window.obj48819_onTap_runningActionsCount = 0;
} else if (window.obj48819_onTap_runningActionsCount == 0) {
	obj48819_onTap_actionGroup3();
}
	}
}









};
obj48819_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48819_onTap_activeActionGroupIndex = -1;
		$("#obj48819").trigger("obj48819_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48819) {
				console.warn("de-queueing event obj48819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48819_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48824();
function runjs_48824() {
	window.obj48819_onTap_runningActionsCount = obj48819_onTap_runningActionsCount + 1;

	$("#obj48819").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj48819_onTap_runningActionsCount = window.obj48819_onTap_runningActionsCount - 1;
if (window.obj48819_onTap_runningActionsCount < 0) {
	window.obj48819_onTap_runningActionsCount = 0;
} else if (window.obj48819_onTap_runningActionsCount == 0) {
	obj48819_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_48825();
function switchText_48825() {
	window.obj48819_onTap_runningActionsCount = obj48819_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48819_onTap_runningActionsCount = window.obj48819_onTap_runningActionsCount - 1;
if (window.obj48819_onTap_runningActionsCount < 0) {
	window.obj48819_onTap_runningActionsCount = 0;
} else if (window.obj48819_onTap_runningActionsCount == 0) {
	obj48819_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48819_onTap_runningActionsCount = window.obj48819_onTap_runningActionsCount - 1;
if (window.obj48819_onTap_runningActionsCount < 0) {
	window.obj48819_onTap_runningActionsCount = 0;
} else if (window.obj48819_onTap_runningActionsCount == 0) {
	obj48819_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj48819_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48819_onTap_activeActionGroupIndex = -1;
		$("#obj48819").trigger("obj48819_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48819) {
				console.warn("de-queueing event obj48819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48819_onTap_activeActionGroupIndex = 4;
	





















};
obj48810_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48810_onTap_activeActionGroupIndex = -1;
		$("#obj48810").trigger("obj48810_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48810) {
				console.warn("de-queueing event obj48810." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48810").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48810_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48812();
function runjs_48812() {
	window.obj48810_onTap_runningActionsCount = obj48810_onTap_runningActionsCount + 1;

	$("#obj48810").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj48810_onTap_runningActionsCount = window.obj48810_onTap_runningActionsCount - 1;
if (window.obj48810_onTap_runningActionsCount < 0) {
	window.obj48810_onTap_runningActionsCount = 0;
} else if (window.obj48810_onTap_runningActionsCount == 0) {
	obj48810_onTap_actionGroup1();
}
	}, 1);
}







};
obj48810_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48810_onTap_activeActionGroupIndex = -1;
		$("#obj48810").trigger("obj48810_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48810) {
				console.warn("de-queueing event obj48810." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48810").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48810_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_48813();
function switchText_48813() {
	window.obj48810_onTap_runningActionsCount = obj48810_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48810_onTap_runningActionsCount = window.obj48810_onTap_runningActionsCount - 1;
if (window.obj48810_onTap_runningActionsCount < 0) {
	window.obj48810_onTap_runningActionsCount = 0;
} else if (window.obj48810_onTap_runningActionsCount == 0) {
	obj48810_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48810_onTap_runningActionsCount = window.obj48810_onTap_runningActionsCount - 1;
if (window.obj48810_onTap_runningActionsCount < 0) {
	window.obj48810_onTap_runningActionsCount = 0;
} else if (window.obj48810_onTap_runningActionsCount == 0) {
	obj48810_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj48810_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48810_onTap_activeActionGroupIndex = -1;
		$("#obj48810").trigger("obj48810_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48810) {
				console.warn("de-queueing event obj48810." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48810").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48810_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj48854 
playAudio_48814();
function playAudio_48814() {
	window.obj48810_onTap_runningActionsCount = obj48810_onTap_runningActionsCount + 1;
	var myAudio = $("#obj48854")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48810_onTap_runningActionsCount = window.obj48810_onTap_runningActionsCount - 1;
if (window.obj48810_onTap_runningActionsCount < 0) {
	window.obj48810_onTap_runningActionsCount = 0;
} else if (window.obj48810_onTap_runningActionsCount == 0) {
	obj48810_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48810_onTap_runningActionsCount = window.obj48810_onTap_runningActionsCount - 1;
if (window.obj48810_onTap_runningActionsCount < 0) {
	window.obj48810_onTap_runningActionsCount = 0;
} else if (window.obj48810_onTap_runningActionsCount == 0) {
	obj48810_onTap_actionGroup3();
}
	}
}









};
obj48810_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48810_onTap_activeActionGroupIndex = -1;
		$("#obj48810").trigger("obj48810_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48810) {
				console.warn("de-queueing event obj48810." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48810").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48810_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48815();
function runjs_48815() {
	window.obj48810_onTap_runningActionsCount = obj48810_onTap_runningActionsCount + 1;

	$("#obj48810").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj48810_onTap_runningActionsCount = window.obj48810_onTap_runningActionsCount - 1;
if (window.obj48810_onTap_runningActionsCount < 0) {
	window.obj48810_onTap_runningActionsCount = 0;
} else if (window.obj48810_onTap_runningActionsCount == 0) {
	obj48810_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_48816();
function switchText_48816() {
	window.obj48810_onTap_runningActionsCount = obj48810_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48810_onTap_runningActionsCount = window.obj48810_onTap_runningActionsCount - 1;
if (window.obj48810_onTap_runningActionsCount < 0) {
	window.obj48810_onTap_runningActionsCount = 0;
} else if (window.obj48810_onTap_runningActionsCount == 0) {
	obj48810_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48810_onTap_runningActionsCount = window.obj48810_onTap_runningActionsCount - 1;
if (window.obj48810_onTap_runningActionsCount < 0) {
	window.obj48810_onTap_runningActionsCount = 0;
} else if (window.obj48810_onTap_runningActionsCount == 0) {
	obj48810_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj48810_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48810_onTap_activeActionGroupIndex = -1;
		$("#obj48810").trigger("obj48810_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48810) {
				console.warn("de-queueing event obj48810." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48810").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48810_onTap_activeActionGroupIndex = 4;
	





















};
obj48805_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48805_onTap_activeActionGroupIndex = -1;
		$("#obj48805").trigger("obj48805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48805) {
				console.warn("de-queueing event obj48805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48805_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48807();
function runjs_48807() {
	window.obj48805_onTap_runningActionsCount = obj48805_onTap_runningActionsCount + 1;

	$("#obj48805").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj48805_onTap_runningActionsCount = window.obj48805_onTap_runningActionsCount - 1;
if (window.obj48805_onTap_runningActionsCount < 0) {
	window.obj48805_onTap_runningActionsCount = 0;
} else if (window.obj48805_onTap_runningActionsCount == 0) {
	obj48805_onTap_actionGroup1();
}
	}, 1);
}







};
obj48805_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48805_onTap_activeActionGroupIndex = -1;
		$("#obj48805").trigger("obj48805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48805) {
				console.warn("de-queueing event obj48805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48805_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_48808();
function switchText_48808() {
	window.obj48805_onTap_runningActionsCount = obj48805_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48805_onTap_runningActionsCount = window.obj48805_onTap_runningActionsCount - 1;
if (window.obj48805_onTap_runningActionsCount < 0) {
	window.obj48805_onTap_runningActionsCount = 0;
} else if (window.obj48805_onTap_runningActionsCount == 0) {
	obj48805_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48805_onTap_runningActionsCount = window.obj48805_onTap_runningActionsCount - 1;
if (window.obj48805_onTap_runningActionsCount < 0) {
	window.obj48805_onTap_runningActionsCount = 0;
} else if (window.obj48805_onTap_runningActionsCount == 0) {
	obj48805_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj48805_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48805_onTap_activeActionGroupIndex = -1;
		$("#obj48805").trigger("obj48805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48805) {
				console.warn("de-queueing event obj48805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48805_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj48853 
playAudio_48809();
function playAudio_48809() {
	window.obj48805_onTap_runningActionsCount = obj48805_onTap_runningActionsCount + 1;
	var myAudio = $("#obj48853")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48805_onTap_runningActionsCount = window.obj48805_onTap_runningActionsCount - 1;
if (window.obj48805_onTap_runningActionsCount < 0) {
	window.obj48805_onTap_runningActionsCount = 0;
} else if (window.obj48805_onTap_runningActionsCount == 0) {
	obj48805_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48805_onTap_runningActionsCount = window.obj48805_onTap_runningActionsCount - 1;
if (window.obj48805_onTap_runningActionsCount < 0) {
	window.obj48805_onTap_runningActionsCount = 0;
} else if (window.obj48805_onTap_runningActionsCount == 0) {
	obj48805_onTap_actionGroup3();
}
	}
}









};
obj48805_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48805_onTap_activeActionGroupIndex = -1;
		$("#obj48805").trigger("obj48805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48805) {
				console.warn("de-queueing event obj48805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48805_onTap_activeActionGroupIndex = 3;
	





















};
obj48796_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48796_onTap_activeActionGroupIndex = -1;
		$("#obj48796").trigger("obj48796_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48796) {
				console.warn("de-queueing event obj48796." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48796").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48796_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48798();
function runjs_48798() {
	window.obj48796_onTap_runningActionsCount = obj48796_onTap_runningActionsCount + 1;

	$("#obj48796").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj48796_onTap_runningActionsCount = window.obj48796_onTap_runningActionsCount - 1;
if (window.obj48796_onTap_runningActionsCount < 0) {
	window.obj48796_onTap_runningActionsCount = 0;
} else if (window.obj48796_onTap_runningActionsCount == 0) {
	obj48796_onTap_actionGroup1();
}
	}, 1);
}







};
obj48796_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48796_onTap_activeActionGroupIndex = -1;
		$("#obj48796").trigger("obj48796_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48796) {
				console.warn("de-queueing event obj48796." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48796").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48796_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_48799();
function switchText_48799() {
	window.obj48796_onTap_runningActionsCount = obj48796_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48796_onTap_runningActionsCount = window.obj48796_onTap_runningActionsCount - 1;
if (window.obj48796_onTap_runningActionsCount < 0) {
	window.obj48796_onTap_runningActionsCount = 0;
} else if (window.obj48796_onTap_runningActionsCount == 0) {
	obj48796_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48796_onTap_runningActionsCount = window.obj48796_onTap_runningActionsCount - 1;
if (window.obj48796_onTap_runningActionsCount < 0) {
	window.obj48796_onTap_runningActionsCount = 0;
} else if (window.obj48796_onTap_runningActionsCount == 0) {
	obj48796_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj48796_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48796_onTap_activeActionGroupIndex = -1;
		$("#obj48796").trigger("obj48796_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48796) {
				console.warn("de-queueing event obj48796." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48796").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48796_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj48853 
playAudio_48800();
function playAudio_48800() {
	window.obj48796_onTap_runningActionsCount = obj48796_onTap_runningActionsCount + 1;
	var myAudio = $("#obj48853")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48796_onTap_runningActionsCount = window.obj48796_onTap_runningActionsCount - 1;
if (window.obj48796_onTap_runningActionsCount < 0) {
	window.obj48796_onTap_runningActionsCount = 0;
} else if (window.obj48796_onTap_runningActionsCount == 0) {
	obj48796_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48796_onTap_runningActionsCount = window.obj48796_onTap_runningActionsCount - 1;
if (window.obj48796_onTap_runningActionsCount < 0) {
	window.obj48796_onTap_runningActionsCount = 0;
} else if (window.obj48796_onTap_runningActionsCount == 0) {
	obj48796_onTap_actionGroup3();
}
	}
}









};
obj48796_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48796_onTap_activeActionGroupIndex = -1;
		$("#obj48796").trigger("obj48796_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48796) {
				console.warn("de-queueing event obj48796." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48796").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48796_onTap_activeActionGroupIndex = 3;
	





















};
obj48789_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48789_onTap_activeActionGroupIndex = -1;
		$("#obj48789").trigger("obj48789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48789) {
				console.warn("de-queueing event obj48789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48789_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48791();
function runjs_48791() {
	window.obj48789_onTap_runningActionsCount = obj48789_onTap_runningActionsCount + 1;

	$("#obj48789").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj48789_onTap_runningActionsCount = window.obj48789_onTap_runningActionsCount - 1;
if (window.obj48789_onTap_runningActionsCount < 0) {
	window.obj48789_onTap_runningActionsCount = 0;
} else if (window.obj48789_onTap_runningActionsCount == 0) {
	obj48789_onTap_actionGroup1();
}
	}, 1);
}







};
obj48789_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48789_onTap_activeActionGroupIndex = -1;
		$("#obj48789").trigger("obj48789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48789) {
				console.warn("de-queueing event obj48789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48789_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_48792();
function switchText_48792() {
	window.obj48789_onTap_runningActionsCount = obj48789_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48789_onTap_runningActionsCount = window.obj48789_onTap_runningActionsCount - 1;
if (window.obj48789_onTap_runningActionsCount < 0) {
	window.obj48789_onTap_runningActionsCount = 0;
} else if (window.obj48789_onTap_runningActionsCount == 0) {
	obj48789_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48789_onTap_runningActionsCount = window.obj48789_onTap_runningActionsCount - 1;
if (window.obj48789_onTap_runningActionsCount < 0) {
	window.obj48789_onTap_runningActionsCount = 0;
} else if (window.obj48789_onTap_runningActionsCount == 0) {
	obj48789_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj48789_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48789_onTap_activeActionGroupIndex = -1;
		$("#obj48789").trigger("obj48789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48789) {
				console.warn("de-queueing event obj48789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48789_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj48854 
playAudio_48793();
function playAudio_48793() {
	window.obj48789_onTap_runningActionsCount = obj48789_onTap_runningActionsCount + 1;
	var myAudio = $("#obj48854")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48789_onTap_runningActionsCount = window.obj48789_onTap_runningActionsCount - 1;
if (window.obj48789_onTap_runningActionsCount < 0) {
	window.obj48789_onTap_runningActionsCount = 0;
} else if (window.obj48789_onTap_runningActionsCount == 0) {
	obj48789_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48789_onTap_runningActionsCount = window.obj48789_onTap_runningActionsCount - 1;
if (window.obj48789_onTap_runningActionsCount < 0) {
	window.obj48789_onTap_runningActionsCount = 0;
} else if (window.obj48789_onTap_runningActionsCount == 0) {
	obj48789_onTap_actionGroup3();
}
	}
}









};
obj48789_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48789_onTap_activeActionGroupIndex = -1;
		$("#obj48789").trigger("obj48789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48789) {
				console.warn("de-queueing event obj48789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48789_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48794();
function runjs_48794() {
	window.obj48789_onTap_runningActionsCount = obj48789_onTap_runningActionsCount + 1;

	$("#obj48789").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj48789_onTap_runningActionsCount = window.obj48789_onTap_runningActionsCount - 1;
if (window.obj48789_onTap_runningActionsCount < 0) {
	window.obj48789_onTap_runningActionsCount = 0;
} else if (window.obj48789_onTap_runningActionsCount == 0) {
	obj48789_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_48795();
function switchText_48795() {
	window.obj48789_onTap_runningActionsCount = obj48789_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48789_onTap_runningActionsCount = window.obj48789_onTap_runningActionsCount - 1;
if (window.obj48789_onTap_runningActionsCount < 0) {
	window.obj48789_onTap_runningActionsCount = 0;
} else if (window.obj48789_onTap_runningActionsCount == 0) {
	obj48789_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48789_onTap_runningActionsCount = window.obj48789_onTap_runningActionsCount - 1;
if (window.obj48789_onTap_runningActionsCount < 0) {
	window.obj48789_onTap_runningActionsCount = 0;
} else if (window.obj48789_onTap_runningActionsCount == 0) {
	obj48789_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj48789_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48789_onTap_activeActionGroupIndex = -1;
		$("#obj48789").trigger("obj48789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48789) {
				console.warn("de-queueing event obj48789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48789_onTap_activeActionGroupIndex = 4;
	





















};
obj48908_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48908_onTap_activeActionGroupIndex = -1;
		$("#obj48908").trigger("obj48908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48908) {
				console.warn("de-queueing event obj48908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48908_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48910();
function runjs_48910() {
	window.obj48908_onTap_runningActionsCount = obj48908_onTap_runningActionsCount + 1;

	$("#obj48908").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj48908_onTap_runningActionsCount = window.obj48908_onTap_runningActionsCount - 1;
if (window.obj48908_onTap_runningActionsCount < 0) {
	window.obj48908_onTap_runningActionsCount = 0;
} else if (window.obj48908_onTap_runningActionsCount == 0) {
	obj48908_onTap_actionGroup1();
}
	}, 1);
}







};
obj48908_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48908_onTap_activeActionGroupIndex = -1;
		$("#obj48908").trigger("obj48908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48908) {
				console.warn("de-queueing event obj48908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48908_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_48911();
function switchText_48911() {
	window.obj48908_onTap_runningActionsCount = obj48908_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48908_onTap_runningActionsCount = window.obj48908_onTap_runningActionsCount - 1;
if (window.obj48908_onTap_runningActionsCount < 0) {
	window.obj48908_onTap_runningActionsCount = 0;
} else if (window.obj48908_onTap_runningActionsCount == 0) {
	obj48908_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48908_onTap_runningActionsCount = window.obj48908_onTap_runningActionsCount - 1;
if (window.obj48908_onTap_runningActionsCount < 0) {
	window.obj48908_onTap_runningActionsCount = 0;
} else if (window.obj48908_onTap_runningActionsCount == 0) {
	obj48908_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj48908_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48908_onTap_activeActionGroupIndex = -1;
		$("#obj48908").trigger("obj48908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48908) {
				console.warn("de-queueing event obj48908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48908_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj48853 
playAudio_48912();
function playAudio_48912() {
	window.obj48908_onTap_runningActionsCount = obj48908_onTap_runningActionsCount + 1;
	var myAudio = $("#obj48853")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48908_onTap_runningActionsCount = window.obj48908_onTap_runningActionsCount - 1;
if (window.obj48908_onTap_runningActionsCount < 0) {
	window.obj48908_onTap_runningActionsCount = 0;
} else if (window.obj48908_onTap_runningActionsCount == 0) {
	obj48908_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48908_onTap_runningActionsCount = window.obj48908_onTap_runningActionsCount - 1;
if (window.obj48908_onTap_runningActionsCount < 0) {
	window.obj48908_onTap_runningActionsCount = 0;
} else if (window.obj48908_onTap_runningActionsCount == 0) {
	obj48908_onTap_actionGroup3();
}
	}
}









};
obj48908_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48908_onTap_activeActionGroupIndex = -1;
		$("#obj48908").trigger("obj48908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48908) {
				console.warn("de-queueing event obj48908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48908_onTap_activeActionGroupIndex = 3;
	





















};
obj48913_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48913_onTap_activeActionGroupIndex = -1;
		$("#obj48913").trigger("obj48913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48913) {
				console.warn("de-queueing event obj48913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48913_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48915();
function runjs_48915() {
	window.obj48913_onTap_runningActionsCount = obj48913_onTap_runningActionsCount + 1;

	$("#obj48913").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj48913_onTap_runningActionsCount = window.obj48913_onTap_runningActionsCount - 1;
if (window.obj48913_onTap_runningActionsCount < 0) {
	window.obj48913_onTap_runningActionsCount = 0;
} else if (window.obj48913_onTap_runningActionsCount == 0) {
	obj48913_onTap_actionGroup1();
}
	}, 1);
}







};
obj48913_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48913_onTap_activeActionGroupIndex = -1;
		$("#obj48913").trigger("obj48913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48913) {
				console.warn("de-queueing event obj48913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48913_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_48916();
function switchText_48916() {
	window.obj48913_onTap_runningActionsCount = obj48913_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48913_onTap_runningActionsCount = window.obj48913_onTap_runningActionsCount - 1;
if (window.obj48913_onTap_runningActionsCount < 0) {
	window.obj48913_onTap_runningActionsCount = 0;
} else if (window.obj48913_onTap_runningActionsCount == 0) {
	obj48913_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48913_onTap_runningActionsCount = window.obj48913_onTap_runningActionsCount - 1;
if (window.obj48913_onTap_runningActionsCount < 0) {
	window.obj48913_onTap_runningActionsCount = 0;
} else if (window.obj48913_onTap_runningActionsCount == 0) {
	obj48913_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj48913_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48913_onTap_activeActionGroupIndex = -1;
		$("#obj48913").trigger("obj48913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48913) {
				console.warn("de-queueing event obj48913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48913_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj48854 
playAudio_48917();
function playAudio_48917() {
	window.obj48913_onTap_runningActionsCount = obj48913_onTap_runningActionsCount + 1;
	var myAudio = $("#obj48854")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48913_onTap_runningActionsCount = window.obj48913_onTap_runningActionsCount - 1;
if (window.obj48913_onTap_runningActionsCount < 0) {
	window.obj48913_onTap_runningActionsCount = 0;
} else if (window.obj48913_onTap_runningActionsCount == 0) {
	obj48913_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48913_onTap_runningActionsCount = window.obj48913_onTap_runningActionsCount - 1;
if (window.obj48913_onTap_runningActionsCount < 0) {
	window.obj48913_onTap_runningActionsCount = 0;
} else if (window.obj48913_onTap_runningActionsCount == 0) {
	obj48913_onTap_actionGroup3();
}
	}
}









};
obj48913_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48913_onTap_activeActionGroupIndex = -1;
		$("#obj48913").trigger("obj48913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48913) {
				console.warn("de-queueing event obj48913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48913_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48918();
function runjs_48918() {
	window.obj48913_onTap_runningActionsCount = obj48913_onTap_runningActionsCount + 1;

	$("#obj48913").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj48913_onTap_runningActionsCount = window.obj48913_onTap_runningActionsCount - 1;
if (window.obj48913_onTap_runningActionsCount < 0) {
	window.obj48913_onTap_runningActionsCount = 0;
} else if (window.obj48913_onTap_runningActionsCount == 0) {
	obj48913_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_48919();
function switchText_48919() {
	window.obj48913_onTap_runningActionsCount = obj48913_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj48855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj48855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj48855").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj48855_content");
			setTimeout(function () {
				window.obj48913_onTap_runningActionsCount = window.obj48913_onTap_runningActionsCount - 1;
if (window.obj48913_onTap_runningActionsCount < 0) {
	window.obj48913_onTap_runningActionsCount = 0;
} else if (window.obj48913_onTap_runningActionsCount == 0) {
	obj48913_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj48855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48913_onTap_runningActionsCount = window.obj48913_onTap_runningActionsCount - 1;
if (window.obj48913_onTap_runningActionsCount < 0) {
	window.obj48913_onTap_runningActionsCount = 0;
} else if (window.obj48913_onTap_runningActionsCount == 0) {
	obj48913_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj48913_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48913_onTap_activeActionGroupIndex = -1;
		$("#obj48913").trigger("obj48913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48913) {
				console.warn("de-queueing event obj48913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48913_onTap_activeActionGroupIndex = 4;
	





















};
obj67790_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67790_onTap_activeActionGroupIndex = -1;
		$("#obj67790").trigger("obj67790_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67790) {
				console.warn("de-queueing event obj67790." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67790").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67790_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67790 
hide_67793();
function hide_67793() {
	var selector = "#obj67790";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67790_onTap_runningActionsCount = obj67790_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67790_onTap_runningActionsCount = window.obj67790_onTap_runningActionsCount - 1;
if (window.obj67790_onTap_runningActionsCount < 0) {
	window.obj67790_onTap_runningActionsCount = 0;
} else if (window.obj67790_onTap_runningActionsCount == 0) {
	obj67790_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67793(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67790_onTap_runningActionsCount = window.obj67790_onTap_runningActionsCount - 1;
if (window.obj67790_onTap_runningActionsCount < 0) {
	window.obj67790_onTap_runningActionsCount = 0;
} else if (window.obj67790_onTap_runningActionsCount == 0) {
	obj67790_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67796 
stopMovie_67792();
function stopMovie_67792() {
	window.obj67790_onTap_runningActionsCount = obj67790_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67796")[0];
	myVideo.pause();
	window.obj67790_onTap_runningActionsCount = window.obj67790_onTap_runningActionsCount - 1;
if (window.obj67790_onTap_runningActionsCount < 0) {
	window.obj67790_onTap_runningActionsCount = 0;
} else if (window.obj67790_onTap_runningActionsCount == 0) {
	obj67790_onTap_actionGroup1();
}
}
















};
obj67790_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67790_onTap_activeActionGroupIndex = -1;
		$("#obj67790").trigger("obj67790_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67790) {
				console.warn("de-queueing event obj67790." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67790").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67790_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67782
(function(){
	window.obj67790_onTap_runningActionsCount = obj67790_onTap_runningActionsCount + 1;

	var selector = "#obj67782";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj67790_onTap_runningActionsCount = window.obj67790_onTap_runningActionsCount - 1;
if (window.obj67790_onTap_runningActionsCount < 0) {
	window.obj67790_onTap_runningActionsCount = 0;
} else if (window.obj67790_onTap_runningActionsCount == 0) {
	obj67790_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj67790_onTap_runningActionsCount = window.obj67790_onTap_runningActionsCount - 1;
if (window.obj67790_onTap_runningActionsCount < 0) {
	window.obj67790_onTap_runningActionsCount = 0;
} else if (window.obj67790_onTap_runningActionsCount == 0) {
	obj67790_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67790_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67790_onTap_activeActionGroupIndex = -1;
		$("#obj67790").trigger("obj67790_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67790) {
				console.warn("de-queueing event obj67790." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67790").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67790_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67796 
move_67795();
function move_67795() {
	window.obj67790_onTap_runningActionsCount = obj67790_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj67796");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 608;
	var moveY = 537;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj67790_onTap_runningActionsCount = window.obj67790_onTap_runningActionsCount - 1;
if (window.obj67790_onTap_runningActionsCount < 0) {
	window.obj67790_onTap_runningActionsCount = 0;
} else if (window.obj67790_onTap_runningActionsCount == 0) {
	obj67790_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67790_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67790_onTap_activeActionGroupIndex = -1;
		$("#obj67790").trigger("obj67790_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67790) {
				console.warn("de-queueing event obj67790." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67790").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67790_onTap_activeActionGroupIndex = 3;
	





















};
obj67782_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67782_onTap_activeActionGroupIndex = -1;
		$("#obj67782").trigger("obj67782_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67782) {
				console.warn("de-queueing event obj67782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67782_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67782 
hide_67785();
function hide_67785() {
	var selector = "#obj67782";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67782_onTap_runningActionsCount = obj67782_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67782_onTap_runningActionsCount = window.obj67782_onTap_runningActionsCount - 1;
if (window.obj67782_onTap_runningActionsCount < 0) {
	window.obj67782_onTap_runningActionsCount = 0;
} else if (window.obj67782_onTap_runningActionsCount == 0) {
	obj67782_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67785(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67782_onTap_runningActionsCount = window.obj67782_onTap_runningActionsCount - 1;
if (window.obj67782_onTap_runningActionsCount < 0) {
	window.obj67782_onTap_runningActionsCount = 0;
} else if (window.obj67782_onTap_runningActionsCount == 0) {
	obj67782_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67796 
playPauseMovie_67784();
function playPauseMovie_67784() {
	window.obj67782_onTap_runningActionsCount = obj67782_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67796")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67782_onTap_runningActionsCount = window.obj67782_onTap_runningActionsCount - 1;
if (window.obj67782_onTap_runningActionsCount < 0) {
	window.obj67782_onTap_runningActionsCount = 0;
} else if (window.obj67782_onTap_runningActionsCount == 0) {
	obj67782_onTap_actionGroup1();
}
}

















};
obj67782_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67782_onTap_activeActionGroupIndex = -1;
		$("#obj67782").trigger("obj67782_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67782) {
				console.warn("de-queueing event obj67782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67782_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67790
(function(){
	window.obj67782_onTap_runningActionsCount = obj67782_onTap_runningActionsCount + 1;

	var selector = "#obj67790";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj67782_onTap_runningActionsCount = window.obj67782_onTap_runningActionsCount - 1;
if (window.obj67782_onTap_runningActionsCount < 0) {
	window.obj67782_onTap_runningActionsCount = 0;
} else if (window.obj67782_onTap_runningActionsCount == 0) {
	obj67782_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj67782_onTap_runningActionsCount = window.obj67782_onTap_runningActionsCount - 1;
if (window.obj67782_onTap_runningActionsCount < 0) {
	window.obj67782_onTap_runningActionsCount = 0;
} else if (window.obj67782_onTap_runningActionsCount == 0) {
	obj67782_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67782_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67782_onTap_activeActionGroupIndex = -1;
		$("#obj67782").trigger("obj67782_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67782) {
				console.warn("de-queueing event obj67782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67782_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67796 
move_67787();
function move_67787() {
	window.obj67782_onTap_runningActionsCount = obj67782_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj67796");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-288";
	var moveY = "+=-1";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj67782_onTap_runningActionsCount = window.obj67782_onTap_runningActionsCount - 1;
if (window.obj67782_onTap_runningActionsCount < 0) {
	window.obj67782_onTap_runningActionsCount = 0;
} else if (window.obj67782_onTap_runningActionsCount == 0) {
	obj67782_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67782_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67782_onTap_activeActionGroupIndex = -1;
		$("#obj67782").trigger("obj67782_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67782) {
				console.warn("de-queueing event obj67782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67782_onTap_activeActionGroupIndex = 3;
	





















};
obj88969_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88969_onTap_activeActionGroupIndex = -1;
		$("#obj88969").trigger("obj88969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88969) {
				console.warn("de-queueing event obj88969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88969_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88974 
stopAudio_88971();
function stopAudio_88971() {
	window.obj88969_onTap_runningActionsCount = obj88969_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88974")[0];
	myAudio.pause();
	window.obj88969_onTap_runningActionsCount = window.obj88969_onTap_runningActionsCount - 1;
if (window.obj88969_onTap_runningActionsCount < 0) {
	window.obj88969_onTap_runningActionsCount = 0;
} else if (window.obj88969_onTap_runningActionsCount == 0) {
	obj88969_onTap_actionGroup1();
}
}








};
obj88969_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88969_onTap_activeActionGroupIndex = -1;
		$("#obj88969").trigger("obj88969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88969) {
				console.warn("de-queueing event obj88969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88969_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88969 
hide_88972();
function hide_88972() {
	var selector = "#obj88969";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88969_onTap_runningActionsCount = obj88969_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88969_onTap_runningActionsCount = window.obj88969_onTap_runningActionsCount - 1;
if (window.obj88969_onTap_runningActionsCount < 0) {
	window.obj88969_onTap_runningActionsCount = 0;
} else if (window.obj88969_onTap_runningActionsCount == 0) {
	obj88969_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88972(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88969_onTap_runningActionsCount = window.obj88969_onTap_runningActionsCount - 1;
if (window.obj88969_onTap_runningActionsCount < 0) {
	window.obj88969_onTap_runningActionsCount = 0;
} else if (window.obj88969_onTap_runningActionsCount == 0) {
	obj88969_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88969_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88969_onTap_activeActionGroupIndex = -1;
		$("#obj88969").trigger("obj88969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88969) {
				console.warn("de-queueing event obj88969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88969_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88964
(function(){
	window.obj88969_onTap_runningActionsCount = obj88969_onTap_runningActionsCount + 1;

	var selector = "#obj88964";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj88969_onTap_runningActionsCount = window.obj88969_onTap_runningActionsCount - 1;
if (window.obj88969_onTap_runningActionsCount < 0) {
	window.obj88969_onTap_runningActionsCount = 0;
} else if (window.obj88969_onTap_runningActionsCount == 0) {
	obj88969_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj88969_onTap_runningActionsCount = window.obj88969_onTap_runningActionsCount - 1;
if (window.obj88969_onTap_runningActionsCount < 0) {
	window.obj88969_onTap_runningActionsCount = 0;
} else if (window.obj88969_onTap_runningActionsCount == 0) {
	obj88969_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88969_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88969_onTap_activeActionGroupIndex = -1;
		$("#obj88969").trigger("obj88969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88969) {
				console.warn("de-queueing event obj88969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88969_onTap_activeActionGroupIndex = 3;
	





















};
obj88964_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88964_onTap_activeActionGroupIndex = -1;
		$("#obj88964").trigger("obj88964_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88964) {
				console.warn("de-queueing event obj88964." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88964").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88964_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88964 
hide_88966();
function hide_88966() {
	var selector = "#obj88964";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88964_onTap_runningActionsCount = obj88964_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88964_onTap_runningActionsCount = window.obj88964_onTap_runningActionsCount - 1;
if (window.obj88964_onTap_runningActionsCount < 0) {
	window.obj88964_onTap_runningActionsCount = 0;
} else if (window.obj88964_onTap_runningActionsCount == 0) {
	obj88964_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88966(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88964_onTap_runningActionsCount = window.obj88964_onTap_runningActionsCount - 1;
if (window.obj88964_onTap_runningActionsCount < 0) {
	window.obj88964_onTap_runningActionsCount = 0;
} else if (window.obj88964_onTap_runningActionsCount == 0) {
	obj88964_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88964_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88964_onTap_activeActionGroupIndex = -1;
		$("#obj88964").trigger("obj88964_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88964) {
				console.warn("de-queueing event obj88964." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88964").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88964_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88969
(function(){
	window.obj88964_onTap_runningActionsCount = obj88964_onTap_runningActionsCount + 1;

	var selector = "#obj88969";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj88964_onTap_runningActionsCount = window.obj88964_onTap_runningActionsCount - 1;
if (window.obj88964_onTap_runningActionsCount < 0) {
	window.obj88964_onTap_runningActionsCount = 0;
} else if (window.obj88964_onTap_runningActionsCount == 0) {
	obj88964_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj88964_onTap_runningActionsCount = window.obj88964_onTap_runningActionsCount - 1;
if (window.obj88964_onTap_runningActionsCount < 0) {
	window.obj88964_onTap_runningActionsCount = 0;
} else if (window.obj88964_onTap_runningActionsCount == 0) {
	obj88964_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88964_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88964_onTap_activeActionGroupIndex = -1;
		$("#obj88964").trigger("obj88964_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88964) {
				console.warn("de-queueing event obj88964." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88964").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88964_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88974 
playAudio_88968();
function playAudio_88968() {
	window.obj88964_onTap_runningActionsCount = obj88964_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88974")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj88964_onTap_runningActionsCount = window.obj88964_onTap_runningActionsCount - 1;
if (window.obj88964_onTap_runningActionsCount < 0) {
	window.obj88964_onTap_runningActionsCount = 0;
} else if (window.obj88964_onTap_runningActionsCount == 0) {
	obj88964_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88964_onTap_runningActionsCount = window.obj88964_onTap_runningActionsCount - 1;
if (window.obj88964_onTap_runningActionsCount < 0) {
	window.obj88964_onTap_runningActionsCount = 0;
} else if (window.obj88964_onTap_runningActionsCount == 0) {
	obj88964_onTap_actionGroup3();
}
	}
}









};
obj88964_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88964_onTap_activeActionGroupIndex = -1;
		$("#obj88964").trigger("obj88964_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88964) {
				console.warn("de-queueing event obj88964." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88964").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88964_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj48874: Event Touch Down
 *
 */
$("#obj48874").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48874_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48874_onTap is still running");
	return;
}
var obj48874_onTap_runningActionsCount = 0;
var obj48874_onTap_loopCount = 0;
obj48874_onTap_actionGroup0();
});










/*
 *
 *   obj48871: Event Touch Down
 *
 */
$("#obj48871").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48871_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48871_onTap is still running");
	return;
}
var obj48871_onTap_runningActionsCount = 0;
var obj48871_onTap_loopCount = 0;
obj48871_onTap_actionGroup0();
});










/*
 *
 *   obj48867: Event Touch Down
 *
 */
$("#obj48867").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48867_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48867_onTap is still running");
	return;
}
var obj48867_onTap_runningActionsCount = 0;
var obj48867_onTap_loopCount = 0;
obj48867_onTap_actionGroup0();
});


































































































































/*
 *
 *   obj48840: Event Touch Down
 *
 */
$("#obj48840").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48840_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48840_onTap is still running");
	return;
}
var obj48840_onTap_runningActionsCount = 0;
var obj48840_onTap_loopCount = 0;
obj48840_onTap_actionGroup0();
});










/*
 *
 *   obj48833: Event Touch Down
 *
 */
$("#obj48833").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48833_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48833_onTap is still running");
	return;
}
var obj48833_onTap_runningActionsCount = 0;
var obj48833_onTap_loopCount = 0;
obj48833_onTap_actionGroup0();
});




















/*
 *
 *   obj48826: Event Touch Down
 *
 */
$("#obj48826").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48826_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48826_onTap is still running");
	return;
}
var obj48826_onTap_runningActionsCount = 0;
var obj48826_onTap_loopCount = 0;
obj48826_onTap_actionGroup0();
});










/*
 *
 *   obj48819: Event Touch Down
 *
 */
$("#obj48819").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48819_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48819_onTap is still running");
	return;
}
var obj48819_onTap_runningActionsCount = 0;
var obj48819_onTap_loopCount = 0;
obj48819_onTap_actionGroup0();
});




















/*
 *
 *   obj48810: Event Touch Down
 *
 */
$("#obj48810").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48810_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48810_onTap is still running");
	return;
}
var obj48810_onTap_runningActionsCount = 0;
var obj48810_onTap_loopCount = 0;
obj48810_onTap_actionGroup0();
});










/*
 *
 *   obj48805: Event Touch Down
 *
 */
$("#obj48805").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48805_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48805_onTap is still running");
	return;
}
var obj48805_onTap_runningActionsCount = 0;
var obj48805_onTap_loopCount = 0;
obj48805_onTap_actionGroup0();
});






























/*
 *
 *   obj48796: Event Touch Down
 *
 */
$("#obj48796").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48796_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48796_onTap is still running");
	return;
}
var obj48796_onTap_runningActionsCount = 0;
var obj48796_onTap_loopCount = 0;
obj48796_onTap_actionGroup0();
});










/*
 *
 *   obj48789: Event Touch Down
 *
 */
$("#obj48789").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48789_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48789_onTap is still running");
	return;
}
var obj48789_onTap_runningActionsCount = 0;
var obj48789_onTap_loopCount = 0;
obj48789_onTap_actionGroup0();
});






























/*
 *
 *   obj48908: Event Touch Down
 *
 */
$("#obj48908").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48908_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48908_onTap is still running");
	return;
}
var obj48908_onTap_runningActionsCount = 0;
var obj48908_onTap_loopCount = 0;
obj48908_onTap_actionGroup0();
});










/*
 *
 *   obj48913: Event Touch Down
 *
 */
$("#obj48913").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48913_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48913_onTap is still running");
	return;
}
var obj48913_onTap_runningActionsCount = 0;
var obj48913_onTap_loopCount = 0;
obj48913_onTap_actionGroup0();
});










/*
 *
 *   obj67790: Event Touch Down
 *
 */
$("#obj67790").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67790_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67790_onTap is still running");
	return;
}
var obj67790_onTap_runningActionsCount = 0;
var obj67790_onTap_loopCount = 0;
obj67790_onTap_actionGroup0();
});










/*
 *
 *   obj67782: Event Touch Down
 *
 */
$("#obj67782").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67782_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67782_onTap is still running");
	return;
}
var obj67782_onTap_runningActionsCount = 0;
var obj67782_onTap_loopCount = 0;
obj67782_onTap_actionGroup0();
});










/*
 *
 *   obj88969: Event Touch Down
 *
 */
$("#obj88969").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88969_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88969_onTap is still running");
	return;
}
var obj88969_onTap_runningActionsCount = 0;
var obj88969_onTap_loopCount = 0;
obj88969_onTap_actionGroup0();
});










/*
 *
 *   obj88964: Event Touch Down
 *
 */
$("#obj88964").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88964_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88964_onTap is still running");
	return;
}
var obj88964_onTap_runningActionsCount = 0;
var obj88964_onTap_loopCount = 0;
obj88964_onTap_actionGroup0();
});





































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj48890").trigger('SCEventShow');
$("#obj48874").trigger('SCEventShow');
$("#obj48871").trigger('SCEventShow');
$("#obj48867").trigger('SCEventShow');
$("#obj48865").trigger('SCEventShow');
$("#obj48863").trigger('SCEventShow');
$("#obj48861").trigger('SCEventShow');
$("#obj48859").trigger('SCEventShow');
$("#obj48857").trigger('SCEventShow');
$("#obj48855").trigger('SCEventShow');
$("#obj48854").trigger('SCEventShow');
$("#obj48853").trigger('SCEventShow');
$("#obj48851").trigger('SCEventShow');
$("#obj48849").trigger('SCEventShow');
$("#obj48847").trigger('SCEventShow');
$("#obj48845").trigger('SCEventShow');
$("#obj48840").trigger('SCEventShow');
$("#obj48833").trigger('SCEventShow');
$("#obj48831").trigger('SCEventShow');
$("#obj48826").trigger('SCEventShow');
$("#obj48819").trigger('SCEventShow');
$("#obj48817").trigger('SCEventShow');
$("#obj48810").trigger('SCEventShow');
$("#obj48805").trigger('SCEventShow');
$("#obj48803").trigger('SCEventShow');
$("#obj48801").trigger('SCEventShow');
$("#obj48796").trigger('SCEventShow');
$("#obj48789").trigger('SCEventShow');
$("#obj48892").trigger('SCEventShow');
$("#obj48906").trigger('SCEventShow');
$("#obj48908").trigger('SCEventShow');
$("#obj48913").trigger('SCEventShow');
$("#obj67790").trigger('SCEventShow');
$("#obj67782").trigger('SCEventShow');
$("#obj88969").trigger('SCEventShow');
$("#obj88964").trigger('SCEventShow');
$("#obj88974").trigger('SCEventShow');
$("#obj94977").trigger('SCEventShow');
$("#obj67796").trigger('SCEventShow');
	
});