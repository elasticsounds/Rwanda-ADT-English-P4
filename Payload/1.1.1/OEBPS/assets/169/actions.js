pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 47548;
pubcoder.page.title = pubcoder.page.title || "169";
pubcoder.page.number = pubcoder.page.number || 169;
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
var obj47634_onTap_activeActionGroupIndex = -1;
var obj47634_onTap_runningActionsCount = 0;
var obj47634_onTap_loopCount = 0;
var obj47631_onTap_activeActionGroupIndex = -1;
var obj47631_onTap_runningActionsCount = 0;
var obj47631_onTap_loopCount = 0;
var obj47627_onTap_activeActionGroupIndex = -1;
var obj47627_onTap_runningActionsCount = 0;
var obj47627_onTap_loopCount = 0;
var obj47600_onTap_activeActionGroupIndex = -1;
var obj47600_onTap_runningActionsCount = 0;
var obj47600_onTap_loopCount = 0;
var obj47593_onTap_activeActionGroupIndex = -1;
var obj47593_onTap_runningActionsCount = 0;
var obj47593_onTap_loopCount = 0;
var obj47586_onTap_activeActionGroupIndex = -1;
var obj47586_onTap_runningActionsCount = 0;
var obj47586_onTap_loopCount = 0;
var obj47579_onTap_activeActionGroupIndex = -1;
var obj47579_onTap_runningActionsCount = 0;
var obj47579_onTap_loopCount = 0;
var obj47570_onTap_activeActionGroupIndex = -1;
var obj47570_onTap_runningActionsCount = 0;
var obj47570_onTap_loopCount = 0;
var obj47565_onTap_activeActionGroupIndex = -1;
var obj47565_onTap_runningActionsCount = 0;
var obj47565_onTap_loopCount = 0;
var obj47556_onTap_activeActionGroupIndex = -1;
var obj47556_onTap_runningActionsCount = 0;
var obj47556_onTap_loopCount = 0;
var obj47549_onTap_activeActionGroupIndex = -1;
var obj47549_onTap_runningActionsCount = 0;
var obj47549_onTap_loopCount = 0;
var obj67710_onTap_activeActionGroupIndex = -1;
var obj67710_onTap_runningActionsCount = 0;
var obj67710_onTap_loopCount = 0;
var obj67702_onTap_activeActionGroupIndex = -1;
var obj67702_onTap_runningActionsCount = 0;
var obj67702_onTap_loopCount = 0;
var obj88909_onTap_activeActionGroupIndex = -1;
var obj88909_onTap_runningActionsCount = 0;
var obj88909_onTap_loopCount = 0;
var obj88904_onTap_activeActionGroupIndex = -1;
var obj88904_onTap_runningActionsCount = 0;
var obj88904_onTap_loopCount = 0;
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
		
obj47634_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47634_onTap_activeActionGroupIndex = -1;
		$("#obj47634").trigger("obj47634_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47634) {
				console.warn("de-queueing event obj47634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47634_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47636();
function goToPage_47636() {
	window.obj47634_onTap_runningActionsCount = obj47634_onTap_runningActionsCount + 1;
	$("#anchor992")[0].click();
	window.obj47634_onTap_runningActionsCount = window.obj47634_onTap_runningActionsCount - 1;
if (window.obj47634_onTap_runningActionsCount < 0) {
	window.obj47634_onTap_runningActionsCount = 0;
} else if (window.obj47634_onTap_runningActionsCount == 0) {
	obj47634_onTap_actionGroup1();
}
}





















};
obj47634_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47634_onTap_activeActionGroupIndex = -1;
		$("#obj47634").trigger("obj47634_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47634) {
				console.warn("de-queueing event obj47634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47634_onTap_activeActionGroupIndex = 1;
	





















};
obj47631_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47631_onTap_activeActionGroupIndex = -1;
		$("#obj47631").trigger("obj47631_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47631) {
				console.warn("de-queueing event obj47631." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47631").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47631_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47633();
function goToPage_47633() {
	window.obj47631_onTap_runningActionsCount = obj47631_onTap_runningActionsCount + 1;
	$("#anchor993")[0].click();
	window.obj47631_onTap_runningActionsCount = window.obj47631_onTap_runningActionsCount - 1;
if (window.obj47631_onTap_runningActionsCount < 0) {
	window.obj47631_onTap_runningActionsCount = 0;
} else if (window.obj47631_onTap_runningActionsCount == 0) {
	obj47631_onTap_actionGroup1();
}
}





















};
obj47631_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47631_onTap_activeActionGroupIndex = -1;
		$("#obj47631").trigger("obj47631_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47631) {
				console.warn("de-queueing event obj47631." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47631").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47631_onTap_activeActionGroupIndex = 1;
	





















};
obj47627_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47627_onTap_activeActionGroupIndex = -1;
		$("#obj47627").trigger("obj47627_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47627) {
				console.warn("de-queueing event obj47627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47627_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47629();
function goToPage_47629() {
	window.obj47627_onTap_runningActionsCount = obj47627_onTap_runningActionsCount + 1;
	$("#anchor994")[0].click();
	window.obj47627_onTap_runningActionsCount = window.obj47627_onTap_runningActionsCount - 1;
if (window.obj47627_onTap_runningActionsCount < 0) {
	window.obj47627_onTap_runningActionsCount = 0;
} else if (window.obj47627_onTap_runningActionsCount == 0) {
	obj47627_onTap_actionGroup1();
}
}





















};
obj47627_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47627_onTap_activeActionGroupIndex = -1;
		$("#obj47627").trigger("obj47627_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47627) {
				console.warn("de-queueing event obj47627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47627_onTap_activeActionGroupIndex = 1;
	





















};
obj47600_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47600_onTap_activeActionGroupIndex = -1;
		$("#obj47600").trigger("obj47600_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47600) {
				console.warn("de-queueing event obj47600." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47600").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47600_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47602();
function runjs_47602() {
	window.obj47600_onTap_runningActionsCount = obj47600_onTap_runningActionsCount + 1;

	$("#obj47600").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47600_onTap_runningActionsCount = window.obj47600_onTap_runningActionsCount - 1;
if (window.obj47600_onTap_runningActionsCount < 0) {
	window.obj47600_onTap_runningActionsCount = 0;
} else if (window.obj47600_onTap_runningActionsCount == 0) {
	obj47600_onTap_actionGroup1();
}
	}, 1);
}







};
obj47600_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47600_onTap_activeActionGroupIndex = -1;
		$("#obj47600").trigger("obj47600_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47600) {
				console.warn("de-queueing event obj47600." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47600").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47600_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_47603();
function switchText_47603() {
	window.obj47600_onTap_runningActionsCount = obj47600_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47600_onTap_runningActionsCount = window.obj47600_onTap_runningActionsCount - 1;
if (window.obj47600_onTap_runningActionsCount < 0) {
	window.obj47600_onTap_runningActionsCount = 0;
} else if (window.obj47600_onTap_runningActionsCount == 0) {
	obj47600_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47600_onTap_runningActionsCount = window.obj47600_onTap_runningActionsCount - 1;
if (window.obj47600_onTap_runningActionsCount < 0) {
	window.obj47600_onTap_runningActionsCount = 0;
} else if (window.obj47600_onTap_runningActionsCount == 0) {
	obj47600_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj47600_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47600_onTap_activeActionGroupIndex = -1;
		$("#obj47600").trigger("obj47600_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47600) {
				console.warn("de-queueing event obj47600." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47600").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47600_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj47613 
playAudio_47604();
function playAudio_47604() {
	window.obj47600_onTap_runningActionsCount = obj47600_onTap_runningActionsCount + 1;
	var myAudio = $("#obj47613")[0];
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
		    window.obj47600_onTap_runningActionsCount = window.obj47600_onTap_runningActionsCount - 1;
if (window.obj47600_onTap_runningActionsCount < 0) {
	window.obj47600_onTap_runningActionsCount = 0;
} else if (window.obj47600_onTap_runningActionsCount == 0) {
	obj47600_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47600_onTap_runningActionsCount = window.obj47600_onTap_runningActionsCount - 1;
if (window.obj47600_onTap_runningActionsCount < 0) {
	window.obj47600_onTap_runningActionsCount = 0;
} else if (window.obj47600_onTap_runningActionsCount == 0) {
	obj47600_onTap_actionGroup3();
}
	}
}









};
obj47600_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47600_onTap_activeActionGroupIndex = -1;
		$("#obj47600").trigger("obj47600_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47600) {
				console.warn("de-queueing event obj47600." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47600").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47600_onTap_activeActionGroupIndex = 3;
	





















};
obj47593_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47593_onTap_activeActionGroupIndex = -1;
		$("#obj47593").trigger("obj47593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47593) {
				console.warn("de-queueing event obj47593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47593_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47595();
function runjs_47595() {
	window.obj47593_onTap_runningActionsCount = obj47593_onTap_runningActionsCount + 1;

	$("#obj47593").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47593_onTap_runningActionsCount = window.obj47593_onTap_runningActionsCount - 1;
if (window.obj47593_onTap_runningActionsCount < 0) {
	window.obj47593_onTap_runningActionsCount = 0;
} else if (window.obj47593_onTap_runningActionsCount == 0) {
	obj47593_onTap_actionGroup1();
}
	}, 1);
}







};
obj47593_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47593_onTap_activeActionGroupIndex = -1;
		$("#obj47593").trigger("obj47593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47593) {
				console.warn("de-queueing event obj47593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47593_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_47596();
function switchText_47596() {
	window.obj47593_onTap_runningActionsCount = obj47593_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47593_onTap_runningActionsCount = window.obj47593_onTap_runningActionsCount - 1;
if (window.obj47593_onTap_runningActionsCount < 0) {
	window.obj47593_onTap_runningActionsCount = 0;
} else if (window.obj47593_onTap_runningActionsCount == 0) {
	obj47593_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47593_onTap_runningActionsCount = window.obj47593_onTap_runningActionsCount - 1;
if (window.obj47593_onTap_runningActionsCount < 0) {
	window.obj47593_onTap_runningActionsCount = 0;
} else if (window.obj47593_onTap_runningActionsCount == 0) {
	obj47593_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj47593_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47593_onTap_activeActionGroupIndex = -1;
		$("#obj47593").trigger("obj47593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47593) {
				console.warn("de-queueing event obj47593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47593_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj47614 
playAudio_47597();
function playAudio_47597() {
	window.obj47593_onTap_runningActionsCount = obj47593_onTap_runningActionsCount + 1;
	var myAudio = $("#obj47614")[0];
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
		    window.obj47593_onTap_runningActionsCount = window.obj47593_onTap_runningActionsCount - 1;
if (window.obj47593_onTap_runningActionsCount < 0) {
	window.obj47593_onTap_runningActionsCount = 0;
} else if (window.obj47593_onTap_runningActionsCount == 0) {
	obj47593_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47593_onTap_runningActionsCount = window.obj47593_onTap_runningActionsCount - 1;
if (window.obj47593_onTap_runningActionsCount < 0) {
	window.obj47593_onTap_runningActionsCount = 0;
} else if (window.obj47593_onTap_runningActionsCount == 0) {
	obj47593_onTap_actionGroup3();
}
	}
}









};
obj47593_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47593_onTap_activeActionGroupIndex = -1;
		$("#obj47593").trigger("obj47593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47593) {
				console.warn("de-queueing event obj47593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47593_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47598();
function runjs_47598() {
	window.obj47593_onTap_runningActionsCount = obj47593_onTap_runningActionsCount + 1;

	$("#obj47593").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj47593_onTap_runningActionsCount = window.obj47593_onTap_runningActionsCount - 1;
if (window.obj47593_onTap_runningActionsCount < 0) {
	window.obj47593_onTap_runningActionsCount = 0;
} else if (window.obj47593_onTap_runningActionsCount == 0) {
	obj47593_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_47599();
function switchText_47599() {
	window.obj47593_onTap_runningActionsCount = obj47593_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47593_onTap_runningActionsCount = window.obj47593_onTap_runningActionsCount - 1;
if (window.obj47593_onTap_runningActionsCount < 0) {
	window.obj47593_onTap_runningActionsCount = 0;
} else if (window.obj47593_onTap_runningActionsCount == 0) {
	obj47593_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47593_onTap_runningActionsCount = window.obj47593_onTap_runningActionsCount - 1;
if (window.obj47593_onTap_runningActionsCount < 0) {
	window.obj47593_onTap_runningActionsCount = 0;
} else if (window.obj47593_onTap_runningActionsCount == 0) {
	obj47593_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj47593_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47593_onTap_activeActionGroupIndex = -1;
		$("#obj47593").trigger("obj47593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47593) {
				console.warn("de-queueing event obj47593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47593_onTap_activeActionGroupIndex = 4;
	





















};
obj47586_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47586_onTap_activeActionGroupIndex = -1;
		$("#obj47586").trigger("obj47586_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47586) {
				console.warn("de-queueing event obj47586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47586_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47588();
function runjs_47588() {
	window.obj47586_onTap_runningActionsCount = obj47586_onTap_runningActionsCount + 1;

	$("#obj47586").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47586_onTap_runningActionsCount = window.obj47586_onTap_runningActionsCount - 1;
if (window.obj47586_onTap_runningActionsCount < 0) {
	window.obj47586_onTap_runningActionsCount = 0;
} else if (window.obj47586_onTap_runningActionsCount == 0) {
	obj47586_onTap_actionGroup1();
}
	}, 1);
}







};
obj47586_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47586_onTap_activeActionGroupIndex = -1;
		$("#obj47586").trigger("obj47586_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47586) {
				console.warn("de-queueing event obj47586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47586_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_47589();
function switchText_47589() {
	window.obj47586_onTap_runningActionsCount = obj47586_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47586_onTap_runningActionsCount = window.obj47586_onTap_runningActionsCount - 1;
if (window.obj47586_onTap_runningActionsCount < 0) {
	window.obj47586_onTap_runningActionsCount = 0;
} else if (window.obj47586_onTap_runningActionsCount == 0) {
	obj47586_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47586_onTap_runningActionsCount = window.obj47586_onTap_runningActionsCount - 1;
if (window.obj47586_onTap_runningActionsCount < 0) {
	window.obj47586_onTap_runningActionsCount = 0;
} else if (window.obj47586_onTap_runningActionsCount == 0) {
	obj47586_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj47586_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47586_onTap_activeActionGroupIndex = -1;
		$("#obj47586").trigger("obj47586_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47586) {
				console.warn("de-queueing event obj47586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47586_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj47613 
playAudio_47590();
function playAudio_47590() {
	window.obj47586_onTap_runningActionsCount = obj47586_onTap_runningActionsCount + 1;
	var myAudio = $("#obj47613")[0];
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
		    window.obj47586_onTap_runningActionsCount = window.obj47586_onTap_runningActionsCount - 1;
if (window.obj47586_onTap_runningActionsCount < 0) {
	window.obj47586_onTap_runningActionsCount = 0;
} else if (window.obj47586_onTap_runningActionsCount == 0) {
	obj47586_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47586_onTap_runningActionsCount = window.obj47586_onTap_runningActionsCount - 1;
if (window.obj47586_onTap_runningActionsCount < 0) {
	window.obj47586_onTap_runningActionsCount = 0;
} else if (window.obj47586_onTap_runningActionsCount == 0) {
	obj47586_onTap_actionGroup3();
}
	}
}









};
obj47586_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47586_onTap_activeActionGroupIndex = -1;
		$("#obj47586").trigger("obj47586_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47586) {
				console.warn("de-queueing event obj47586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47586_onTap_activeActionGroupIndex = 3;
	





















};
obj47579_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47579_onTap_activeActionGroupIndex = -1;
		$("#obj47579").trigger("obj47579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47579) {
				console.warn("de-queueing event obj47579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47579_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47581();
function runjs_47581() {
	window.obj47579_onTap_runningActionsCount = obj47579_onTap_runningActionsCount + 1;

	$("#obj47579").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47579_onTap_runningActionsCount = window.obj47579_onTap_runningActionsCount - 1;
if (window.obj47579_onTap_runningActionsCount < 0) {
	window.obj47579_onTap_runningActionsCount = 0;
} else if (window.obj47579_onTap_runningActionsCount == 0) {
	obj47579_onTap_actionGroup1();
}
	}, 1);
}







};
obj47579_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47579_onTap_activeActionGroupIndex = -1;
		$("#obj47579").trigger("obj47579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47579) {
				console.warn("de-queueing event obj47579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47579_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_47582();
function switchText_47582() {
	window.obj47579_onTap_runningActionsCount = obj47579_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47579_onTap_runningActionsCount = window.obj47579_onTap_runningActionsCount - 1;
if (window.obj47579_onTap_runningActionsCount < 0) {
	window.obj47579_onTap_runningActionsCount = 0;
} else if (window.obj47579_onTap_runningActionsCount == 0) {
	obj47579_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47579_onTap_runningActionsCount = window.obj47579_onTap_runningActionsCount - 1;
if (window.obj47579_onTap_runningActionsCount < 0) {
	window.obj47579_onTap_runningActionsCount = 0;
} else if (window.obj47579_onTap_runningActionsCount == 0) {
	obj47579_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj47579_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47579_onTap_activeActionGroupIndex = -1;
		$("#obj47579").trigger("obj47579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47579) {
				console.warn("de-queueing event obj47579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47579_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj47614 
playAudio_47583();
function playAudio_47583() {
	window.obj47579_onTap_runningActionsCount = obj47579_onTap_runningActionsCount + 1;
	var myAudio = $("#obj47614")[0];
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
		    window.obj47579_onTap_runningActionsCount = window.obj47579_onTap_runningActionsCount - 1;
if (window.obj47579_onTap_runningActionsCount < 0) {
	window.obj47579_onTap_runningActionsCount = 0;
} else if (window.obj47579_onTap_runningActionsCount == 0) {
	obj47579_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47579_onTap_runningActionsCount = window.obj47579_onTap_runningActionsCount - 1;
if (window.obj47579_onTap_runningActionsCount < 0) {
	window.obj47579_onTap_runningActionsCount = 0;
} else if (window.obj47579_onTap_runningActionsCount == 0) {
	obj47579_onTap_actionGroup3();
}
	}
}









};
obj47579_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47579_onTap_activeActionGroupIndex = -1;
		$("#obj47579").trigger("obj47579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47579) {
				console.warn("de-queueing event obj47579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47579_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47584();
function runjs_47584() {
	window.obj47579_onTap_runningActionsCount = obj47579_onTap_runningActionsCount + 1;

	$("#obj47579").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj47579_onTap_runningActionsCount = window.obj47579_onTap_runningActionsCount - 1;
if (window.obj47579_onTap_runningActionsCount < 0) {
	window.obj47579_onTap_runningActionsCount = 0;
} else if (window.obj47579_onTap_runningActionsCount == 0) {
	obj47579_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_47585();
function switchText_47585() {
	window.obj47579_onTap_runningActionsCount = obj47579_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47579_onTap_runningActionsCount = window.obj47579_onTap_runningActionsCount - 1;
if (window.obj47579_onTap_runningActionsCount < 0) {
	window.obj47579_onTap_runningActionsCount = 0;
} else if (window.obj47579_onTap_runningActionsCount == 0) {
	obj47579_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47579_onTap_runningActionsCount = window.obj47579_onTap_runningActionsCount - 1;
if (window.obj47579_onTap_runningActionsCount < 0) {
	window.obj47579_onTap_runningActionsCount = 0;
} else if (window.obj47579_onTap_runningActionsCount == 0) {
	obj47579_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj47579_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47579_onTap_activeActionGroupIndex = -1;
		$("#obj47579").trigger("obj47579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47579) {
				console.warn("de-queueing event obj47579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47579_onTap_activeActionGroupIndex = 4;
	





















};
obj47570_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47570_onTap_activeActionGroupIndex = -1;
		$("#obj47570").trigger("obj47570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47570) {
				console.warn("de-queueing event obj47570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47570_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47572();
function runjs_47572() {
	window.obj47570_onTap_runningActionsCount = obj47570_onTap_runningActionsCount + 1;

	$("#obj47570").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47570_onTap_runningActionsCount = window.obj47570_onTap_runningActionsCount - 1;
if (window.obj47570_onTap_runningActionsCount < 0) {
	window.obj47570_onTap_runningActionsCount = 0;
} else if (window.obj47570_onTap_runningActionsCount == 0) {
	obj47570_onTap_actionGroup1();
}
	}, 1);
}







};
obj47570_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47570_onTap_activeActionGroupIndex = -1;
		$("#obj47570").trigger("obj47570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47570) {
				console.warn("de-queueing event obj47570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47570_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_47573();
function switchText_47573() {
	window.obj47570_onTap_runningActionsCount = obj47570_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47570_onTap_runningActionsCount = window.obj47570_onTap_runningActionsCount - 1;
if (window.obj47570_onTap_runningActionsCount < 0) {
	window.obj47570_onTap_runningActionsCount = 0;
} else if (window.obj47570_onTap_runningActionsCount == 0) {
	obj47570_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47570_onTap_runningActionsCount = window.obj47570_onTap_runningActionsCount - 1;
if (window.obj47570_onTap_runningActionsCount < 0) {
	window.obj47570_onTap_runningActionsCount = 0;
} else if (window.obj47570_onTap_runningActionsCount == 0) {
	obj47570_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj47570_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47570_onTap_activeActionGroupIndex = -1;
		$("#obj47570").trigger("obj47570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47570) {
				console.warn("de-queueing event obj47570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47570_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj47614 
playAudio_47574();
function playAudio_47574() {
	window.obj47570_onTap_runningActionsCount = obj47570_onTap_runningActionsCount + 1;
	var myAudio = $("#obj47614")[0];
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
		    window.obj47570_onTap_runningActionsCount = window.obj47570_onTap_runningActionsCount - 1;
if (window.obj47570_onTap_runningActionsCount < 0) {
	window.obj47570_onTap_runningActionsCount = 0;
} else if (window.obj47570_onTap_runningActionsCount == 0) {
	obj47570_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47570_onTap_runningActionsCount = window.obj47570_onTap_runningActionsCount - 1;
if (window.obj47570_onTap_runningActionsCount < 0) {
	window.obj47570_onTap_runningActionsCount = 0;
} else if (window.obj47570_onTap_runningActionsCount == 0) {
	obj47570_onTap_actionGroup3();
}
	}
}









};
obj47570_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47570_onTap_activeActionGroupIndex = -1;
		$("#obj47570").trigger("obj47570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47570) {
				console.warn("de-queueing event obj47570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47570_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47575();
function runjs_47575() {
	window.obj47570_onTap_runningActionsCount = obj47570_onTap_runningActionsCount + 1;

	$("#obj47570").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj47570_onTap_runningActionsCount = window.obj47570_onTap_runningActionsCount - 1;
if (window.obj47570_onTap_runningActionsCount < 0) {
	window.obj47570_onTap_runningActionsCount = 0;
} else if (window.obj47570_onTap_runningActionsCount == 0) {
	obj47570_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_47576();
function switchText_47576() {
	window.obj47570_onTap_runningActionsCount = obj47570_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47570_onTap_runningActionsCount = window.obj47570_onTap_runningActionsCount - 1;
if (window.obj47570_onTap_runningActionsCount < 0) {
	window.obj47570_onTap_runningActionsCount = 0;
} else if (window.obj47570_onTap_runningActionsCount == 0) {
	obj47570_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47570_onTap_runningActionsCount = window.obj47570_onTap_runningActionsCount - 1;
if (window.obj47570_onTap_runningActionsCount < 0) {
	window.obj47570_onTap_runningActionsCount = 0;
} else if (window.obj47570_onTap_runningActionsCount == 0) {
	obj47570_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj47570_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47570_onTap_activeActionGroupIndex = -1;
		$("#obj47570").trigger("obj47570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47570) {
				console.warn("de-queueing event obj47570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47570_onTap_activeActionGroupIndex = 4;
	





















};
obj47565_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47565_onTap_activeActionGroupIndex = -1;
		$("#obj47565").trigger("obj47565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47565) {
				console.warn("de-queueing event obj47565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47565_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47567();
function runjs_47567() {
	window.obj47565_onTap_runningActionsCount = obj47565_onTap_runningActionsCount + 1;

	$("#obj47565").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47565_onTap_runningActionsCount = window.obj47565_onTap_runningActionsCount - 1;
if (window.obj47565_onTap_runningActionsCount < 0) {
	window.obj47565_onTap_runningActionsCount = 0;
} else if (window.obj47565_onTap_runningActionsCount == 0) {
	obj47565_onTap_actionGroup1();
}
	}, 1);
}







};
obj47565_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47565_onTap_activeActionGroupIndex = -1;
		$("#obj47565").trigger("obj47565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47565) {
				console.warn("de-queueing event obj47565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47565_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_47568();
function switchText_47568() {
	window.obj47565_onTap_runningActionsCount = obj47565_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47565_onTap_runningActionsCount = window.obj47565_onTap_runningActionsCount - 1;
if (window.obj47565_onTap_runningActionsCount < 0) {
	window.obj47565_onTap_runningActionsCount = 0;
} else if (window.obj47565_onTap_runningActionsCount == 0) {
	obj47565_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47565_onTap_runningActionsCount = window.obj47565_onTap_runningActionsCount - 1;
if (window.obj47565_onTap_runningActionsCount < 0) {
	window.obj47565_onTap_runningActionsCount = 0;
} else if (window.obj47565_onTap_runningActionsCount == 0) {
	obj47565_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj47565_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47565_onTap_activeActionGroupIndex = -1;
		$("#obj47565").trigger("obj47565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47565) {
				console.warn("de-queueing event obj47565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47565_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj47613 
playAudio_47569();
function playAudio_47569() {
	window.obj47565_onTap_runningActionsCount = obj47565_onTap_runningActionsCount + 1;
	var myAudio = $("#obj47613")[0];
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
		    window.obj47565_onTap_runningActionsCount = window.obj47565_onTap_runningActionsCount - 1;
if (window.obj47565_onTap_runningActionsCount < 0) {
	window.obj47565_onTap_runningActionsCount = 0;
} else if (window.obj47565_onTap_runningActionsCount == 0) {
	obj47565_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47565_onTap_runningActionsCount = window.obj47565_onTap_runningActionsCount - 1;
if (window.obj47565_onTap_runningActionsCount < 0) {
	window.obj47565_onTap_runningActionsCount = 0;
} else if (window.obj47565_onTap_runningActionsCount == 0) {
	obj47565_onTap_actionGroup3();
}
	}
}









};
obj47565_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47565_onTap_activeActionGroupIndex = -1;
		$("#obj47565").trigger("obj47565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47565) {
				console.warn("de-queueing event obj47565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47565_onTap_activeActionGroupIndex = 3;
	





















};
obj47556_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47556_onTap_activeActionGroupIndex = -1;
		$("#obj47556").trigger("obj47556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47556) {
				console.warn("de-queueing event obj47556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47556_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47558();
function runjs_47558() {
	window.obj47556_onTap_runningActionsCount = obj47556_onTap_runningActionsCount + 1;

	$("#obj47556").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47556_onTap_runningActionsCount = window.obj47556_onTap_runningActionsCount - 1;
if (window.obj47556_onTap_runningActionsCount < 0) {
	window.obj47556_onTap_runningActionsCount = 0;
} else if (window.obj47556_onTap_runningActionsCount == 0) {
	obj47556_onTap_actionGroup1();
}
	}, 1);
}







};
obj47556_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47556_onTap_activeActionGroupIndex = -1;
		$("#obj47556").trigger("obj47556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47556) {
				console.warn("de-queueing event obj47556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47556_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_47559();
function switchText_47559() {
	window.obj47556_onTap_runningActionsCount = obj47556_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47556_onTap_runningActionsCount = window.obj47556_onTap_runningActionsCount - 1;
if (window.obj47556_onTap_runningActionsCount < 0) {
	window.obj47556_onTap_runningActionsCount = 0;
} else if (window.obj47556_onTap_runningActionsCount == 0) {
	obj47556_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47556_onTap_runningActionsCount = window.obj47556_onTap_runningActionsCount - 1;
if (window.obj47556_onTap_runningActionsCount < 0) {
	window.obj47556_onTap_runningActionsCount = 0;
} else if (window.obj47556_onTap_runningActionsCount == 0) {
	obj47556_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj47556_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47556_onTap_activeActionGroupIndex = -1;
		$("#obj47556").trigger("obj47556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47556) {
				console.warn("de-queueing event obj47556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47556_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj47613 
playAudio_47560();
function playAudio_47560() {
	window.obj47556_onTap_runningActionsCount = obj47556_onTap_runningActionsCount + 1;
	var myAudio = $("#obj47613")[0];
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
		    window.obj47556_onTap_runningActionsCount = window.obj47556_onTap_runningActionsCount - 1;
if (window.obj47556_onTap_runningActionsCount < 0) {
	window.obj47556_onTap_runningActionsCount = 0;
} else if (window.obj47556_onTap_runningActionsCount == 0) {
	obj47556_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47556_onTap_runningActionsCount = window.obj47556_onTap_runningActionsCount - 1;
if (window.obj47556_onTap_runningActionsCount < 0) {
	window.obj47556_onTap_runningActionsCount = 0;
} else if (window.obj47556_onTap_runningActionsCount == 0) {
	obj47556_onTap_actionGroup3();
}
	}
}









};
obj47556_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47556_onTap_activeActionGroupIndex = -1;
		$("#obj47556").trigger("obj47556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47556) {
				console.warn("de-queueing event obj47556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47556_onTap_activeActionGroupIndex = 3;
	





















};
obj47549_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47549_onTap_activeActionGroupIndex = -1;
		$("#obj47549").trigger("obj47549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47549) {
				console.warn("de-queueing event obj47549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47549_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47551();
function runjs_47551() {
	window.obj47549_onTap_runningActionsCount = obj47549_onTap_runningActionsCount + 1;

	$("#obj47549").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47549_onTap_runningActionsCount = window.obj47549_onTap_runningActionsCount - 1;
if (window.obj47549_onTap_runningActionsCount < 0) {
	window.obj47549_onTap_runningActionsCount = 0;
} else if (window.obj47549_onTap_runningActionsCount == 0) {
	obj47549_onTap_actionGroup1();
}
	}, 1);
}







};
obj47549_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47549_onTap_activeActionGroupIndex = -1;
		$("#obj47549").trigger("obj47549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47549) {
				console.warn("de-queueing event obj47549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47549_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_47552();
function switchText_47552() {
	window.obj47549_onTap_runningActionsCount = obj47549_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47549_onTap_runningActionsCount = window.obj47549_onTap_runningActionsCount - 1;
if (window.obj47549_onTap_runningActionsCount < 0) {
	window.obj47549_onTap_runningActionsCount = 0;
} else if (window.obj47549_onTap_runningActionsCount == 0) {
	obj47549_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47549_onTap_runningActionsCount = window.obj47549_onTap_runningActionsCount - 1;
if (window.obj47549_onTap_runningActionsCount < 0) {
	window.obj47549_onTap_runningActionsCount = 0;
} else if (window.obj47549_onTap_runningActionsCount == 0) {
	obj47549_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj47549_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47549_onTap_activeActionGroupIndex = -1;
		$("#obj47549").trigger("obj47549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47549) {
				console.warn("de-queueing event obj47549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47549_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj47614 
playAudio_47553();
function playAudio_47553() {
	window.obj47549_onTap_runningActionsCount = obj47549_onTap_runningActionsCount + 1;
	var myAudio = $("#obj47614")[0];
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
		    window.obj47549_onTap_runningActionsCount = window.obj47549_onTap_runningActionsCount - 1;
if (window.obj47549_onTap_runningActionsCount < 0) {
	window.obj47549_onTap_runningActionsCount = 0;
} else if (window.obj47549_onTap_runningActionsCount == 0) {
	obj47549_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47549_onTap_runningActionsCount = window.obj47549_onTap_runningActionsCount - 1;
if (window.obj47549_onTap_runningActionsCount < 0) {
	window.obj47549_onTap_runningActionsCount = 0;
} else if (window.obj47549_onTap_runningActionsCount == 0) {
	obj47549_onTap_actionGroup3();
}
	}
}









};
obj47549_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47549_onTap_activeActionGroupIndex = -1;
		$("#obj47549").trigger("obj47549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47549) {
				console.warn("de-queueing event obj47549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47549_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47554();
function runjs_47554() {
	window.obj47549_onTap_runningActionsCount = obj47549_onTap_runningActionsCount + 1;

	$("#obj47549").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj47549_onTap_runningActionsCount = window.obj47549_onTap_runningActionsCount - 1;
if (window.obj47549_onTap_runningActionsCount < 0) {
	window.obj47549_onTap_runningActionsCount = 0;
} else if (window.obj47549_onTap_runningActionsCount == 0) {
	obj47549_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_47555();
function switchText_47555() {
	window.obj47549_onTap_runningActionsCount = obj47549_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47615").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47615_content");
			setTimeout(function () {
				window.obj47549_onTap_runningActionsCount = window.obj47549_onTap_runningActionsCount - 1;
if (window.obj47549_onTap_runningActionsCount < 0) {
	window.obj47549_onTap_runningActionsCount = 0;
} else if (window.obj47549_onTap_runningActionsCount == 0) {
	obj47549_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj47615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47549_onTap_runningActionsCount = window.obj47549_onTap_runningActionsCount - 1;
if (window.obj47549_onTap_runningActionsCount < 0) {
	window.obj47549_onTap_runningActionsCount = 0;
} else if (window.obj47549_onTap_runningActionsCount == 0) {
	obj47549_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj47549_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47549_onTap_activeActionGroupIndex = -1;
		$("#obj47549").trigger("obj47549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47549) {
				console.warn("de-queueing event obj47549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47549_onTap_activeActionGroupIndex = 4;
	





















};
obj67710_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67710_onTap_activeActionGroupIndex = -1;
		$("#obj67710").trigger("obj67710_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67710) {
				console.warn("de-queueing event obj67710." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67710").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67710_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67710 
hide_67713();
function hide_67713() {
	var selector = "#obj67710";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67710_onTap_runningActionsCount = obj67710_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67710_onTap_runningActionsCount = window.obj67710_onTap_runningActionsCount - 1;
if (window.obj67710_onTap_runningActionsCount < 0) {
	window.obj67710_onTap_runningActionsCount = 0;
} else if (window.obj67710_onTap_runningActionsCount == 0) {
	obj67710_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67713(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67710_onTap_runningActionsCount = window.obj67710_onTap_runningActionsCount - 1;
if (window.obj67710_onTap_runningActionsCount < 0) {
	window.obj67710_onTap_runningActionsCount = 0;
} else if (window.obj67710_onTap_runningActionsCount == 0) {
	obj67710_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67716 
stopMovie_67712();
function stopMovie_67712() {
	window.obj67710_onTap_runningActionsCount = obj67710_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67716")[0];
	myVideo.pause();
	window.obj67710_onTap_runningActionsCount = window.obj67710_onTap_runningActionsCount - 1;
if (window.obj67710_onTap_runningActionsCount < 0) {
	window.obj67710_onTap_runningActionsCount = 0;
} else if (window.obj67710_onTap_runningActionsCount == 0) {
	obj67710_onTap_actionGroup1();
}
}
















};
obj67710_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67710_onTap_activeActionGroupIndex = -1;
		$("#obj67710").trigger("obj67710_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67710) {
				console.warn("de-queueing event obj67710." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67710").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67710_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67702
(function(){
	window.obj67710_onTap_runningActionsCount = obj67710_onTap_runningActionsCount + 1;

	var selector = "#obj67702";
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
					window.obj67710_onTap_runningActionsCount = window.obj67710_onTap_runningActionsCount - 1;
if (window.obj67710_onTap_runningActionsCount < 0) {
	window.obj67710_onTap_runningActionsCount = 0;
} else if (window.obj67710_onTap_runningActionsCount == 0) {
	obj67710_onTap_actionGroup2();
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
				window.obj67710_onTap_runningActionsCount = window.obj67710_onTap_runningActionsCount - 1;
if (window.obj67710_onTap_runningActionsCount < 0) {
	window.obj67710_onTap_runningActionsCount = 0;
} else if (window.obj67710_onTap_runningActionsCount == 0) {
	obj67710_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67710_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67710_onTap_activeActionGroupIndex = -1;
		$("#obj67710").trigger("obj67710_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67710) {
				console.warn("de-queueing event obj67710." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67710").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67710_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67716 
move_67715();
function move_67715() {
	window.obj67710_onTap_runningActionsCount = obj67710_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67716");
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
			window.obj67710_onTap_runningActionsCount = window.obj67710_onTap_runningActionsCount - 1;
if (window.obj67710_onTap_runningActionsCount < 0) {
	window.obj67710_onTap_runningActionsCount = 0;
} else if (window.obj67710_onTap_runningActionsCount == 0) {
	obj67710_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67710_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67710_onTap_activeActionGroupIndex = -1;
		$("#obj67710").trigger("obj67710_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67710) {
				console.warn("de-queueing event obj67710." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67710").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67710_onTap_activeActionGroupIndex = 3;
	





















};
obj67702_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67702_onTap_activeActionGroupIndex = -1;
		$("#obj67702").trigger("obj67702_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67702) {
				console.warn("de-queueing event obj67702." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67702").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67702_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67702 
hide_67705();
function hide_67705() {
	var selector = "#obj67702";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67702_onTap_runningActionsCount = obj67702_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67702_onTap_runningActionsCount = window.obj67702_onTap_runningActionsCount - 1;
if (window.obj67702_onTap_runningActionsCount < 0) {
	window.obj67702_onTap_runningActionsCount = 0;
} else if (window.obj67702_onTap_runningActionsCount == 0) {
	obj67702_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67705(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67702_onTap_runningActionsCount = window.obj67702_onTap_runningActionsCount - 1;
if (window.obj67702_onTap_runningActionsCount < 0) {
	window.obj67702_onTap_runningActionsCount = 0;
} else if (window.obj67702_onTap_runningActionsCount == 0) {
	obj67702_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67716 
playPauseMovie_67704();
function playPauseMovie_67704() {
	window.obj67702_onTap_runningActionsCount = obj67702_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67716")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67702_onTap_runningActionsCount = window.obj67702_onTap_runningActionsCount - 1;
if (window.obj67702_onTap_runningActionsCount < 0) {
	window.obj67702_onTap_runningActionsCount = 0;
} else if (window.obj67702_onTap_runningActionsCount == 0) {
	obj67702_onTap_actionGroup1();
}
}

















};
obj67702_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67702_onTap_activeActionGroupIndex = -1;
		$("#obj67702").trigger("obj67702_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67702) {
				console.warn("de-queueing event obj67702." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67702").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67702_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67710
(function(){
	window.obj67702_onTap_runningActionsCount = obj67702_onTap_runningActionsCount + 1;

	var selector = "#obj67710";
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
					window.obj67702_onTap_runningActionsCount = window.obj67702_onTap_runningActionsCount - 1;
if (window.obj67702_onTap_runningActionsCount < 0) {
	window.obj67702_onTap_runningActionsCount = 0;
} else if (window.obj67702_onTap_runningActionsCount == 0) {
	obj67702_onTap_actionGroup2();
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
				window.obj67702_onTap_runningActionsCount = window.obj67702_onTap_runningActionsCount - 1;
if (window.obj67702_onTap_runningActionsCount < 0) {
	window.obj67702_onTap_runningActionsCount = 0;
} else if (window.obj67702_onTap_runningActionsCount == 0) {
	obj67702_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67702_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67702_onTap_activeActionGroupIndex = -1;
		$("#obj67702").trigger("obj67702_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67702) {
				console.warn("de-queueing event obj67702." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67702").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67702_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67716 
move_67707();
function move_67707() {
	window.obj67702_onTap_runningActionsCount = obj67702_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67716");
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
			window.obj67702_onTap_runningActionsCount = window.obj67702_onTap_runningActionsCount - 1;
if (window.obj67702_onTap_runningActionsCount < 0) {
	window.obj67702_onTap_runningActionsCount = 0;
} else if (window.obj67702_onTap_runningActionsCount == 0) {
	obj67702_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67702_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67702_onTap_activeActionGroupIndex = -1;
		$("#obj67702").trigger("obj67702_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67702) {
				console.warn("de-queueing event obj67702." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67702").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67702_onTap_activeActionGroupIndex = 3;
	





















};
obj88909_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88909_onTap_activeActionGroupIndex = -1;
		$("#obj88909").trigger("obj88909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88909) {
				console.warn("de-queueing event obj88909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88909_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88914 
stopAudio_88911();
function stopAudio_88911() {
	window.obj88909_onTap_runningActionsCount = obj88909_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88914")[0];
	myAudio.pause();
	window.obj88909_onTap_runningActionsCount = window.obj88909_onTap_runningActionsCount - 1;
if (window.obj88909_onTap_runningActionsCount < 0) {
	window.obj88909_onTap_runningActionsCount = 0;
} else if (window.obj88909_onTap_runningActionsCount == 0) {
	obj88909_onTap_actionGroup1();
}
}








};
obj88909_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88909_onTap_activeActionGroupIndex = -1;
		$("#obj88909").trigger("obj88909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88909) {
				console.warn("de-queueing event obj88909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88909_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88909 
hide_88912();
function hide_88912() {
	var selector = "#obj88909";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88909_onTap_runningActionsCount = obj88909_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88909_onTap_runningActionsCount = window.obj88909_onTap_runningActionsCount - 1;
if (window.obj88909_onTap_runningActionsCount < 0) {
	window.obj88909_onTap_runningActionsCount = 0;
} else if (window.obj88909_onTap_runningActionsCount == 0) {
	obj88909_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88912(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88909_onTap_runningActionsCount = window.obj88909_onTap_runningActionsCount - 1;
if (window.obj88909_onTap_runningActionsCount < 0) {
	window.obj88909_onTap_runningActionsCount = 0;
} else if (window.obj88909_onTap_runningActionsCount == 0) {
	obj88909_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88909_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88909_onTap_activeActionGroupIndex = -1;
		$("#obj88909").trigger("obj88909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88909) {
				console.warn("de-queueing event obj88909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88909_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88904
(function(){
	window.obj88909_onTap_runningActionsCount = obj88909_onTap_runningActionsCount + 1;

	var selector = "#obj88904";
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
					window.obj88909_onTap_runningActionsCount = window.obj88909_onTap_runningActionsCount - 1;
if (window.obj88909_onTap_runningActionsCount < 0) {
	window.obj88909_onTap_runningActionsCount = 0;
} else if (window.obj88909_onTap_runningActionsCount == 0) {
	obj88909_onTap_actionGroup3();
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
				window.obj88909_onTap_runningActionsCount = window.obj88909_onTap_runningActionsCount - 1;
if (window.obj88909_onTap_runningActionsCount < 0) {
	window.obj88909_onTap_runningActionsCount = 0;
} else if (window.obj88909_onTap_runningActionsCount == 0) {
	obj88909_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88909_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88909_onTap_activeActionGroupIndex = -1;
		$("#obj88909").trigger("obj88909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88909) {
				console.warn("de-queueing event obj88909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88909_onTap_activeActionGroupIndex = 3;
	





















};
obj88904_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88904_onTap_activeActionGroupIndex = -1;
		$("#obj88904").trigger("obj88904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88904) {
				console.warn("de-queueing event obj88904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88904_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88904 
hide_88906();
function hide_88906() {
	var selector = "#obj88904";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88904_onTap_runningActionsCount = obj88904_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88904_onTap_runningActionsCount = window.obj88904_onTap_runningActionsCount - 1;
if (window.obj88904_onTap_runningActionsCount < 0) {
	window.obj88904_onTap_runningActionsCount = 0;
} else if (window.obj88904_onTap_runningActionsCount == 0) {
	obj88904_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88906(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88904_onTap_runningActionsCount = window.obj88904_onTap_runningActionsCount - 1;
if (window.obj88904_onTap_runningActionsCount < 0) {
	window.obj88904_onTap_runningActionsCount = 0;
} else if (window.obj88904_onTap_runningActionsCount == 0) {
	obj88904_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88904_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88904_onTap_activeActionGroupIndex = -1;
		$("#obj88904").trigger("obj88904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88904) {
				console.warn("de-queueing event obj88904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88904_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88909
(function(){
	window.obj88904_onTap_runningActionsCount = obj88904_onTap_runningActionsCount + 1;

	var selector = "#obj88909";
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
					window.obj88904_onTap_runningActionsCount = window.obj88904_onTap_runningActionsCount - 1;
if (window.obj88904_onTap_runningActionsCount < 0) {
	window.obj88904_onTap_runningActionsCount = 0;
} else if (window.obj88904_onTap_runningActionsCount == 0) {
	obj88904_onTap_actionGroup2();
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
				window.obj88904_onTap_runningActionsCount = window.obj88904_onTap_runningActionsCount - 1;
if (window.obj88904_onTap_runningActionsCount < 0) {
	window.obj88904_onTap_runningActionsCount = 0;
} else if (window.obj88904_onTap_runningActionsCount == 0) {
	obj88904_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88904_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88904_onTap_activeActionGroupIndex = -1;
		$("#obj88904").trigger("obj88904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88904) {
				console.warn("de-queueing event obj88904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88904_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88914 
playAudio_88908();
function playAudio_88908() {
	window.obj88904_onTap_runningActionsCount = obj88904_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88914")[0];
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
		    window.obj88904_onTap_runningActionsCount = window.obj88904_onTap_runningActionsCount - 1;
if (window.obj88904_onTap_runningActionsCount < 0) {
	window.obj88904_onTap_runningActionsCount = 0;
} else if (window.obj88904_onTap_runningActionsCount == 0) {
	obj88904_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88904_onTap_runningActionsCount = window.obj88904_onTap_runningActionsCount - 1;
if (window.obj88904_onTap_runningActionsCount < 0) {
	window.obj88904_onTap_runningActionsCount = 0;
} else if (window.obj88904_onTap_runningActionsCount == 0) {
	obj88904_onTap_actionGroup3();
}
	}
}









};
obj88904_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88904_onTap_activeActionGroupIndex = -1;
		$("#obj88904").trigger("obj88904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88904) {
				console.warn("de-queueing event obj88904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88904_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj47634: Event Touch Down
 *
 */
$("#obj47634").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47634_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47634_onTap is still running");
	return;
}
var obj47634_onTap_runningActionsCount = 0;
var obj47634_onTap_loopCount = 0;
obj47634_onTap_actionGroup0();
});










/*
 *
 *   obj47631: Event Touch Down
 *
 */
$("#obj47631").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47631_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47631_onTap is still running");
	return;
}
var obj47631_onTap_runningActionsCount = 0;
var obj47631_onTap_loopCount = 0;
obj47631_onTap_actionGroup0();
});










/*
 *
 *   obj47627: Event Touch Down
 *
 */
$("#obj47627").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47627_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47627_onTap is still running");
	return;
}
var obj47627_onTap_runningActionsCount = 0;
var obj47627_onTap_loopCount = 0;
obj47627_onTap_actionGroup0();
});


































































































































/*
 *
 *   obj47600: Event Touch Down
 *
 */
$("#obj47600").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47600_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47600_onTap is still running");
	return;
}
var obj47600_onTap_runningActionsCount = 0;
var obj47600_onTap_loopCount = 0;
obj47600_onTap_actionGroup0();
});










/*
 *
 *   obj47593: Event Touch Down
 *
 */
$("#obj47593").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47593_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47593_onTap is still running");
	return;
}
var obj47593_onTap_runningActionsCount = 0;
var obj47593_onTap_loopCount = 0;
obj47593_onTap_actionGroup0();
});




















/*
 *
 *   obj47586: Event Touch Down
 *
 */
$("#obj47586").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47586_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47586_onTap is still running");
	return;
}
var obj47586_onTap_runningActionsCount = 0;
var obj47586_onTap_loopCount = 0;
obj47586_onTap_actionGroup0();
});










/*
 *
 *   obj47579: Event Touch Down
 *
 */
$("#obj47579").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47579_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47579_onTap is still running");
	return;
}
var obj47579_onTap_runningActionsCount = 0;
var obj47579_onTap_loopCount = 0;
obj47579_onTap_actionGroup0();
});




















/*
 *
 *   obj47570: Event Touch Down
 *
 */
$("#obj47570").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47570_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47570_onTap is still running");
	return;
}
var obj47570_onTap_runningActionsCount = 0;
var obj47570_onTap_loopCount = 0;
obj47570_onTap_actionGroup0();
});










/*
 *
 *   obj47565: Event Touch Down
 *
 */
$("#obj47565").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47565_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47565_onTap is still running");
	return;
}
var obj47565_onTap_runningActionsCount = 0;
var obj47565_onTap_loopCount = 0;
obj47565_onTap_actionGroup0();
});






























/*
 *
 *   obj47556: Event Touch Down
 *
 */
$("#obj47556").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47556_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47556_onTap is still running");
	return;
}
var obj47556_onTap_runningActionsCount = 0;
var obj47556_onTap_loopCount = 0;
obj47556_onTap_actionGroup0();
});










/*
 *
 *   obj47549: Event Touch Down
 *
 */
$("#obj47549").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47549_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47549_onTap is still running");
	return;
}
var obj47549_onTap_runningActionsCount = 0;
var obj47549_onTap_loopCount = 0;
obj47549_onTap_actionGroup0();
});










/*
 *
 *   obj67710: Event Touch Down
 *
 */
$("#obj67710").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67710_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67710_onTap is still running");
	return;
}
var obj67710_onTap_runningActionsCount = 0;
var obj67710_onTap_loopCount = 0;
obj67710_onTap_actionGroup0();
});










/*
 *
 *   obj67702: Event Touch Down
 *
 */
$("#obj67702").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67702_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67702_onTap is still running");
	return;
}
var obj67702_onTap_runningActionsCount = 0;
var obj67702_onTap_loopCount = 0;
obj67702_onTap_actionGroup0();
});










/*
 *
 *   obj88909: Event Touch Down
 *
 */
$("#obj88909").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88909_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88909_onTap is still running");
	return;
}
var obj88909_onTap_runningActionsCount = 0;
var obj88909_onTap_loopCount = 0;
obj88909_onTap_actionGroup0();
});










/*
 *
 *   obj88904: Event Touch Down
 *
 */
$("#obj88904").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88904_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88904_onTap is still running");
	return;
}
var obj88904_onTap_runningActionsCount = 0;
var obj88904_onTap_loopCount = 0;
obj88904_onTap_actionGroup0();
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
	
$("#obj47650").trigger('SCEventShow');
$("#obj47634").trigger('SCEventShow');
$("#obj47631").trigger('SCEventShow');
$("#obj47627").trigger('SCEventShow');
$("#obj47625").trigger('SCEventShow');
$("#obj47623").trigger('SCEventShow');
$("#obj47621").trigger('SCEventShow');
$("#obj47619").trigger('SCEventShow');
$("#obj47617").trigger('SCEventShow');
$("#obj47615").trigger('SCEventShow');
$("#obj47614").trigger('SCEventShow');
$("#obj47613").trigger('SCEventShow');
$("#obj47611").trigger('SCEventShow');
$("#obj47609").trigger('SCEventShow');
$("#obj47607").trigger('SCEventShow');
$("#obj47605").trigger('SCEventShow');
$("#obj47600").trigger('SCEventShow');
$("#obj47593").trigger('SCEventShow');
$("#obj47591").trigger('SCEventShow');
$("#obj47586").trigger('SCEventShow');
$("#obj47579").trigger('SCEventShow');
$("#obj47577").trigger('SCEventShow');
$("#obj47570").trigger('SCEventShow');
$("#obj47565").trigger('SCEventShow');
$("#obj47563").trigger('SCEventShow');
$("#obj47561").trigger('SCEventShow');
$("#obj47556").trigger('SCEventShow');
$("#obj47549").trigger('SCEventShow');
$("#obj67710").trigger('SCEventShow');
$("#obj67702").trigger('SCEventShow');
$("#obj88909").trigger('SCEventShow');
$("#obj88904").trigger('SCEventShow');
$("#obj88914").trigger('SCEventShow');
$("#obj94967").trigger('SCEventShow');
$("#obj67716").trigger('SCEventShow');
	
});