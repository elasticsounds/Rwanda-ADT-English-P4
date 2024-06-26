pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 25281;
pubcoder.page.title = pubcoder.page.title || "98";
pubcoder.page.number = pubcoder.page.number || 98;
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
var obj80448_onTap_activeActionGroupIndex = -1;
var obj80448_onTap_runningActionsCount = 0;
var obj80448_onTap_loopCount = 0;
var obj80445_onTap_activeActionGroupIndex = -1;
var obj80445_onTap_runningActionsCount = 0;
var obj80445_onTap_loopCount = 0;
var obj80441_onTap_activeActionGroupIndex = -1;
var obj80441_onTap_runningActionsCount = 0;
var obj80441_onTap_loopCount = 0;
var obj80414_onTap_activeActionGroupIndex = -1;
var obj80414_onTap_runningActionsCount = 0;
var obj80414_onTap_loopCount = 0;
var obj80407_onTap_activeActionGroupIndex = -1;
var obj80407_onTap_runningActionsCount = 0;
var obj80407_onTap_loopCount = 0;
var obj80400_onTap_activeActionGroupIndex = -1;
var obj80400_onTap_runningActionsCount = 0;
var obj80400_onTap_loopCount = 0;
var obj80393_onTap_activeActionGroupIndex = -1;
var obj80393_onTap_runningActionsCount = 0;
var obj80393_onTap_loopCount = 0;
var obj80384_onTap_activeActionGroupIndex = -1;
var obj80384_onTap_runningActionsCount = 0;
var obj80384_onTap_loopCount = 0;
var obj80379_onTap_activeActionGroupIndex = -1;
var obj80379_onTap_runningActionsCount = 0;
var obj80379_onTap_loopCount = 0;
var obj80370_onTap_activeActionGroupIndex = -1;
var obj80370_onTap_runningActionsCount = 0;
var obj80370_onTap_loopCount = 0;
var obj80363_onTap_activeActionGroupIndex = -1;
var obj80363_onTap_runningActionsCount = 0;
var obj80363_onTap_loopCount = 0;
var obj80345_onTap_activeActionGroupIndex = -1;
var obj80345_onTap_runningActionsCount = 0;
var obj80345_onTap_loopCount = 0;
var obj80337_onTap_activeActionGroupIndex = -1;
var obj80337_onTap_runningActionsCount = 0;
var obj80337_onTap_loopCount = 0;
var obj88045_onTap_activeActionGroupIndex = -1;
var obj88045_onTap_runningActionsCount = 0;
var obj88045_onTap_loopCount = 0;
var obj88040_onTap_activeActionGroupIndex = -1;
var obj88040_onTap_runningActionsCount = 0;
var obj88040_onTap_loopCount = 0;
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
		
obj80448_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80448_onTap_activeActionGroupIndex = -1;
		$("#obj80448").trigger("obj80448_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80448) {
				console.warn("de-queueing event obj80448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80448_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80450();
function goToPage_80450() {
	window.obj80448_onTap_runningActionsCount = obj80448_onTap_runningActionsCount + 1;
	$("#anchor578")[0].click();
	window.obj80448_onTap_runningActionsCount = window.obj80448_onTap_runningActionsCount - 1;
if (window.obj80448_onTap_runningActionsCount < 0) {
	window.obj80448_onTap_runningActionsCount = 0;
} else if (window.obj80448_onTap_runningActionsCount == 0) {
	obj80448_onTap_actionGroup1();
}
}





















};
obj80448_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80448_onTap_activeActionGroupIndex = -1;
		$("#obj80448").trigger("obj80448_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80448) {
				console.warn("de-queueing event obj80448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80448_onTap_activeActionGroupIndex = 1;
	





















};
obj80445_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80445_onTap_activeActionGroupIndex = -1;
		$("#obj80445").trigger("obj80445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80445) {
				console.warn("de-queueing event obj80445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80445_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80447();
function goToPage_80447() {
	window.obj80445_onTap_runningActionsCount = obj80445_onTap_runningActionsCount + 1;
	$("#anchor579")[0].click();
	window.obj80445_onTap_runningActionsCount = window.obj80445_onTap_runningActionsCount - 1;
if (window.obj80445_onTap_runningActionsCount < 0) {
	window.obj80445_onTap_runningActionsCount = 0;
} else if (window.obj80445_onTap_runningActionsCount == 0) {
	obj80445_onTap_actionGroup1();
}
}





















};
obj80445_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80445_onTap_activeActionGroupIndex = -1;
		$("#obj80445").trigger("obj80445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80445) {
				console.warn("de-queueing event obj80445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80445_onTap_activeActionGroupIndex = 1;
	





















};
obj80441_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80441_onTap_activeActionGroupIndex = -1;
		$("#obj80441").trigger("obj80441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80441) {
				console.warn("de-queueing event obj80441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80441_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80443();
function goToPage_80443() {
	window.obj80441_onTap_runningActionsCount = obj80441_onTap_runningActionsCount + 1;
	$("#anchor580")[0].click();
	window.obj80441_onTap_runningActionsCount = window.obj80441_onTap_runningActionsCount - 1;
if (window.obj80441_onTap_runningActionsCount < 0) {
	window.obj80441_onTap_runningActionsCount = 0;
} else if (window.obj80441_onTap_runningActionsCount == 0) {
	obj80441_onTap_actionGroup1();
}
}





















};
obj80441_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80441_onTap_activeActionGroupIndex = -1;
		$("#obj80441").trigger("obj80441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80441) {
				console.warn("de-queueing event obj80441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80441_onTap_activeActionGroupIndex = 1;
	





















};
obj80414_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80414_onTap_activeActionGroupIndex = -1;
		$("#obj80414").trigger("obj80414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80414) {
				console.warn("de-queueing event obj80414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80414_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80416();
function runjs_80416() {
	window.obj80414_onTap_runningActionsCount = obj80414_onTap_runningActionsCount + 1;

	$("#obj80414").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj80414_onTap_runningActionsCount = window.obj80414_onTap_runningActionsCount - 1;
if (window.obj80414_onTap_runningActionsCount < 0) {
	window.obj80414_onTap_runningActionsCount = 0;
} else if (window.obj80414_onTap_runningActionsCount == 0) {
	obj80414_onTap_actionGroup1();
}
	}, 1);
}







};
obj80414_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80414_onTap_activeActionGroupIndex = -1;
		$("#obj80414").trigger("obj80414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80414) {
				console.warn("de-queueing event obj80414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80414_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80417();
function switchText_80417() {
	window.obj80414_onTap_runningActionsCount = obj80414_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80414_onTap_runningActionsCount = window.obj80414_onTap_runningActionsCount - 1;
if (window.obj80414_onTap_runningActionsCount < 0) {
	window.obj80414_onTap_runningActionsCount = 0;
} else if (window.obj80414_onTap_runningActionsCount == 0) {
	obj80414_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80414_onTap_runningActionsCount = window.obj80414_onTap_runningActionsCount - 1;
if (window.obj80414_onTap_runningActionsCount < 0) {
	window.obj80414_onTap_runningActionsCount = 0;
} else if (window.obj80414_onTap_runningActionsCount == 0) {
	obj80414_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj80414_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80414_onTap_activeActionGroupIndex = -1;
		$("#obj80414").trigger("obj80414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80414) {
				console.warn("de-queueing event obj80414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80414_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj80427 
playAudio_80418();
function playAudio_80418() {
	window.obj80414_onTap_runningActionsCount = obj80414_onTap_runningActionsCount + 1;
	var myAudio = $("#obj80427")[0];
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
		    window.obj80414_onTap_runningActionsCount = window.obj80414_onTap_runningActionsCount - 1;
if (window.obj80414_onTap_runningActionsCount < 0) {
	window.obj80414_onTap_runningActionsCount = 0;
} else if (window.obj80414_onTap_runningActionsCount == 0) {
	obj80414_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80414_onTap_runningActionsCount = window.obj80414_onTap_runningActionsCount - 1;
if (window.obj80414_onTap_runningActionsCount < 0) {
	window.obj80414_onTap_runningActionsCount = 0;
} else if (window.obj80414_onTap_runningActionsCount == 0) {
	obj80414_onTap_actionGroup3();
}
	}
}









};
obj80414_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80414_onTap_activeActionGroupIndex = -1;
		$("#obj80414").trigger("obj80414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80414) {
				console.warn("de-queueing event obj80414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80414_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90326();
function switchText_90326() {
	window.obj80414_onTap_runningActionsCount = obj80414_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80414_onTap_runningActionsCount = window.obj80414_onTap_runningActionsCount - 1;
if (window.obj80414_onTap_runningActionsCount < 0) {
	window.obj80414_onTap_runningActionsCount = 0;
} else if (window.obj80414_onTap_runningActionsCount == 0) {
	obj80414_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80414_onTap_runningActionsCount = window.obj80414_onTap_runningActionsCount - 1;
if (window.obj80414_onTap_runningActionsCount < 0) {
	window.obj80414_onTap_runningActionsCount = 0;
} else if (window.obj80414_onTap_runningActionsCount == 0) {
	obj80414_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj80414_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80414_onTap_activeActionGroupIndex = -1;
		$("#obj80414").trigger("obj80414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80414) {
				console.warn("de-queueing event obj80414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80414_onTap_activeActionGroupIndex = 4;
	





















};
obj80407_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80407_onTap_activeActionGroupIndex = -1;
		$("#obj80407").trigger("obj80407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80407) {
				console.warn("de-queueing event obj80407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80407_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80409();
function runjs_80409() {
	window.obj80407_onTap_runningActionsCount = obj80407_onTap_runningActionsCount + 1;

	$("#obj80407").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj80407_onTap_runningActionsCount = window.obj80407_onTap_runningActionsCount - 1;
if (window.obj80407_onTap_runningActionsCount < 0) {
	window.obj80407_onTap_runningActionsCount = 0;
} else if (window.obj80407_onTap_runningActionsCount == 0) {
	obj80407_onTap_actionGroup1();
}
	}, 1);
}







};
obj80407_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80407_onTap_activeActionGroupIndex = -1;
		$("#obj80407").trigger("obj80407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80407) {
				console.warn("de-queueing event obj80407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80407_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80410();
function switchText_80410() {
	window.obj80407_onTap_runningActionsCount = obj80407_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80407_onTap_runningActionsCount = window.obj80407_onTap_runningActionsCount - 1;
if (window.obj80407_onTap_runningActionsCount < 0) {
	window.obj80407_onTap_runningActionsCount = 0;
} else if (window.obj80407_onTap_runningActionsCount == 0) {
	obj80407_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80407_onTap_runningActionsCount = window.obj80407_onTap_runningActionsCount - 1;
if (window.obj80407_onTap_runningActionsCount < 0) {
	window.obj80407_onTap_runningActionsCount = 0;
} else if (window.obj80407_onTap_runningActionsCount == 0) {
	obj80407_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj80407_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80407_onTap_activeActionGroupIndex = -1;
		$("#obj80407").trigger("obj80407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80407) {
				console.warn("de-queueing event obj80407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80407_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj80428 
playAudio_80411();
function playAudio_80411() {
	window.obj80407_onTap_runningActionsCount = obj80407_onTap_runningActionsCount + 1;
	var myAudio = $("#obj80428")[0];
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
		    window.obj80407_onTap_runningActionsCount = window.obj80407_onTap_runningActionsCount - 1;
if (window.obj80407_onTap_runningActionsCount < 0) {
	window.obj80407_onTap_runningActionsCount = 0;
} else if (window.obj80407_onTap_runningActionsCount == 0) {
	obj80407_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80407_onTap_runningActionsCount = window.obj80407_onTap_runningActionsCount - 1;
if (window.obj80407_onTap_runningActionsCount < 0) {
	window.obj80407_onTap_runningActionsCount = 0;
} else if (window.obj80407_onTap_runningActionsCount == 0) {
	obj80407_onTap_actionGroup3();
}
	}
}









};
obj80407_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80407_onTap_activeActionGroupIndex = -1;
		$("#obj80407").trigger("obj80407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80407) {
				console.warn("de-queueing event obj80407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80407_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80412();
function runjs_80412() {
	window.obj80407_onTap_runningActionsCount = obj80407_onTap_runningActionsCount + 1;

	$("#obj80407").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj80407_onTap_runningActionsCount = window.obj80407_onTap_runningActionsCount - 1;
if (window.obj80407_onTap_runningActionsCount < 0) {
	window.obj80407_onTap_runningActionsCount = 0;
} else if (window.obj80407_onTap_runningActionsCount == 0) {
	obj80407_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_80413();
function switchText_80413() {
	window.obj80407_onTap_runningActionsCount = obj80407_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80407_onTap_runningActionsCount = window.obj80407_onTap_runningActionsCount - 1;
if (window.obj80407_onTap_runningActionsCount < 0) {
	window.obj80407_onTap_runningActionsCount = 0;
} else if (window.obj80407_onTap_runningActionsCount == 0) {
	obj80407_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80407_onTap_runningActionsCount = window.obj80407_onTap_runningActionsCount - 1;
if (window.obj80407_onTap_runningActionsCount < 0) {
	window.obj80407_onTap_runningActionsCount = 0;
} else if (window.obj80407_onTap_runningActionsCount == 0) {
	obj80407_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj80407_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80407_onTap_activeActionGroupIndex = -1;
		$("#obj80407").trigger("obj80407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80407) {
				console.warn("de-queueing event obj80407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80407_onTap_activeActionGroupIndex = 4;
	





















};
obj80400_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80400_onTap_activeActionGroupIndex = -1;
		$("#obj80400").trigger("obj80400_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80400) {
				console.warn("de-queueing event obj80400." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80400").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80400_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80402();
function runjs_80402() {
	window.obj80400_onTap_runningActionsCount = obj80400_onTap_runningActionsCount + 1;

	$("#obj80400").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj80400_onTap_runningActionsCount = window.obj80400_onTap_runningActionsCount - 1;
if (window.obj80400_onTap_runningActionsCount < 0) {
	window.obj80400_onTap_runningActionsCount = 0;
} else if (window.obj80400_onTap_runningActionsCount == 0) {
	obj80400_onTap_actionGroup1();
}
	}, 1);
}







};
obj80400_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80400_onTap_activeActionGroupIndex = -1;
		$("#obj80400").trigger("obj80400_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80400) {
				console.warn("de-queueing event obj80400." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80400").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80400_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80403();
function switchText_80403() {
	window.obj80400_onTap_runningActionsCount = obj80400_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80400_onTap_runningActionsCount = window.obj80400_onTap_runningActionsCount - 1;
if (window.obj80400_onTap_runningActionsCount < 0) {
	window.obj80400_onTap_runningActionsCount = 0;
} else if (window.obj80400_onTap_runningActionsCount == 0) {
	obj80400_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80400_onTap_runningActionsCount = window.obj80400_onTap_runningActionsCount - 1;
if (window.obj80400_onTap_runningActionsCount < 0) {
	window.obj80400_onTap_runningActionsCount = 0;
} else if (window.obj80400_onTap_runningActionsCount == 0) {
	obj80400_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj80400_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80400_onTap_activeActionGroupIndex = -1;
		$("#obj80400").trigger("obj80400_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80400) {
				console.warn("de-queueing event obj80400." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80400").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80400_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj80427 
playAudio_80404();
function playAudio_80404() {
	window.obj80400_onTap_runningActionsCount = obj80400_onTap_runningActionsCount + 1;
	var myAudio = $("#obj80427")[0];
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
		    window.obj80400_onTap_runningActionsCount = window.obj80400_onTap_runningActionsCount - 1;
if (window.obj80400_onTap_runningActionsCount < 0) {
	window.obj80400_onTap_runningActionsCount = 0;
} else if (window.obj80400_onTap_runningActionsCount == 0) {
	obj80400_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80400_onTap_runningActionsCount = window.obj80400_onTap_runningActionsCount - 1;
if (window.obj80400_onTap_runningActionsCount < 0) {
	window.obj80400_onTap_runningActionsCount = 0;
} else if (window.obj80400_onTap_runningActionsCount == 0) {
	obj80400_onTap_actionGroup3();
}
	}
}









};
obj80400_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80400_onTap_activeActionGroupIndex = -1;
		$("#obj80400").trigger("obj80400_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80400) {
				console.warn("de-queueing event obj80400." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80400").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80400_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90327();
function switchText_90327() {
	window.obj80400_onTap_runningActionsCount = obj80400_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80400_onTap_runningActionsCount = window.obj80400_onTap_runningActionsCount - 1;
if (window.obj80400_onTap_runningActionsCount < 0) {
	window.obj80400_onTap_runningActionsCount = 0;
} else if (window.obj80400_onTap_runningActionsCount == 0) {
	obj80400_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80400_onTap_runningActionsCount = window.obj80400_onTap_runningActionsCount - 1;
if (window.obj80400_onTap_runningActionsCount < 0) {
	window.obj80400_onTap_runningActionsCount = 0;
} else if (window.obj80400_onTap_runningActionsCount == 0) {
	obj80400_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj80400_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80400_onTap_activeActionGroupIndex = -1;
		$("#obj80400").trigger("obj80400_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80400) {
				console.warn("de-queueing event obj80400." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80400").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80400_onTap_activeActionGroupIndex = 4;
	





















};
obj80393_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80393_onTap_activeActionGroupIndex = -1;
		$("#obj80393").trigger("obj80393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80393) {
				console.warn("de-queueing event obj80393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80393_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80395();
function runjs_80395() {
	window.obj80393_onTap_runningActionsCount = obj80393_onTap_runningActionsCount + 1;

	$("#obj80393").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj80393_onTap_runningActionsCount = window.obj80393_onTap_runningActionsCount - 1;
if (window.obj80393_onTap_runningActionsCount < 0) {
	window.obj80393_onTap_runningActionsCount = 0;
} else if (window.obj80393_onTap_runningActionsCount == 0) {
	obj80393_onTap_actionGroup1();
}
	}, 1);
}







};
obj80393_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80393_onTap_activeActionGroupIndex = -1;
		$("#obj80393").trigger("obj80393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80393) {
				console.warn("de-queueing event obj80393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80393_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80396();
function switchText_80396() {
	window.obj80393_onTap_runningActionsCount = obj80393_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80393_onTap_runningActionsCount = window.obj80393_onTap_runningActionsCount - 1;
if (window.obj80393_onTap_runningActionsCount < 0) {
	window.obj80393_onTap_runningActionsCount = 0;
} else if (window.obj80393_onTap_runningActionsCount == 0) {
	obj80393_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80393_onTap_runningActionsCount = window.obj80393_onTap_runningActionsCount - 1;
if (window.obj80393_onTap_runningActionsCount < 0) {
	window.obj80393_onTap_runningActionsCount = 0;
} else if (window.obj80393_onTap_runningActionsCount == 0) {
	obj80393_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj80393_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80393_onTap_activeActionGroupIndex = -1;
		$("#obj80393").trigger("obj80393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80393) {
				console.warn("de-queueing event obj80393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80393_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj80428 
playAudio_80397();
function playAudio_80397() {
	window.obj80393_onTap_runningActionsCount = obj80393_onTap_runningActionsCount + 1;
	var myAudio = $("#obj80428")[0];
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
		    window.obj80393_onTap_runningActionsCount = window.obj80393_onTap_runningActionsCount - 1;
if (window.obj80393_onTap_runningActionsCount < 0) {
	window.obj80393_onTap_runningActionsCount = 0;
} else if (window.obj80393_onTap_runningActionsCount == 0) {
	obj80393_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80393_onTap_runningActionsCount = window.obj80393_onTap_runningActionsCount - 1;
if (window.obj80393_onTap_runningActionsCount < 0) {
	window.obj80393_onTap_runningActionsCount = 0;
} else if (window.obj80393_onTap_runningActionsCount == 0) {
	obj80393_onTap_actionGroup3();
}
	}
}









};
obj80393_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80393_onTap_activeActionGroupIndex = -1;
		$("#obj80393").trigger("obj80393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80393) {
				console.warn("de-queueing event obj80393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80393_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80398();
function runjs_80398() {
	window.obj80393_onTap_runningActionsCount = obj80393_onTap_runningActionsCount + 1;

	$("#obj80393").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj80393_onTap_runningActionsCount = window.obj80393_onTap_runningActionsCount - 1;
if (window.obj80393_onTap_runningActionsCount < 0) {
	window.obj80393_onTap_runningActionsCount = 0;
} else if (window.obj80393_onTap_runningActionsCount == 0) {
	obj80393_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_80399();
function switchText_80399() {
	window.obj80393_onTap_runningActionsCount = obj80393_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80393_onTap_runningActionsCount = window.obj80393_onTap_runningActionsCount - 1;
if (window.obj80393_onTap_runningActionsCount < 0) {
	window.obj80393_onTap_runningActionsCount = 0;
} else if (window.obj80393_onTap_runningActionsCount == 0) {
	obj80393_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80393_onTap_runningActionsCount = window.obj80393_onTap_runningActionsCount - 1;
if (window.obj80393_onTap_runningActionsCount < 0) {
	window.obj80393_onTap_runningActionsCount = 0;
} else if (window.obj80393_onTap_runningActionsCount == 0) {
	obj80393_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj80393_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80393_onTap_activeActionGroupIndex = -1;
		$("#obj80393").trigger("obj80393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80393) {
				console.warn("de-queueing event obj80393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80393_onTap_activeActionGroupIndex = 4;
	





















};
obj80384_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80384_onTap_activeActionGroupIndex = -1;
		$("#obj80384").trigger("obj80384_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80384) {
				console.warn("de-queueing event obj80384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80384_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80386();
function runjs_80386() {
	window.obj80384_onTap_runningActionsCount = obj80384_onTap_runningActionsCount + 1;

	$("#obj80384").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj80384_onTap_runningActionsCount = window.obj80384_onTap_runningActionsCount - 1;
if (window.obj80384_onTap_runningActionsCount < 0) {
	window.obj80384_onTap_runningActionsCount = 0;
} else if (window.obj80384_onTap_runningActionsCount == 0) {
	obj80384_onTap_actionGroup1();
}
	}, 1);
}







};
obj80384_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80384_onTap_activeActionGroupIndex = -1;
		$("#obj80384").trigger("obj80384_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80384) {
				console.warn("de-queueing event obj80384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80384_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80387();
function switchText_80387() {
	window.obj80384_onTap_runningActionsCount = obj80384_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80384_onTap_runningActionsCount = window.obj80384_onTap_runningActionsCount - 1;
if (window.obj80384_onTap_runningActionsCount < 0) {
	window.obj80384_onTap_runningActionsCount = 0;
} else if (window.obj80384_onTap_runningActionsCount == 0) {
	obj80384_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80384_onTap_runningActionsCount = window.obj80384_onTap_runningActionsCount - 1;
if (window.obj80384_onTap_runningActionsCount < 0) {
	window.obj80384_onTap_runningActionsCount = 0;
} else if (window.obj80384_onTap_runningActionsCount == 0) {
	obj80384_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj80384_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80384_onTap_activeActionGroupIndex = -1;
		$("#obj80384").trigger("obj80384_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80384) {
				console.warn("de-queueing event obj80384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80384_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj80428 
playAudio_80388();
function playAudio_80388() {
	window.obj80384_onTap_runningActionsCount = obj80384_onTap_runningActionsCount + 1;
	var myAudio = $("#obj80428")[0];
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
		    window.obj80384_onTap_runningActionsCount = window.obj80384_onTap_runningActionsCount - 1;
if (window.obj80384_onTap_runningActionsCount < 0) {
	window.obj80384_onTap_runningActionsCount = 0;
} else if (window.obj80384_onTap_runningActionsCount == 0) {
	obj80384_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80384_onTap_runningActionsCount = window.obj80384_onTap_runningActionsCount - 1;
if (window.obj80384_onTap_runningActionsCount < 0) {
	window.obj80384_onTap_runningActionsCount = 0;
} else if (window.obj80384_onTap_runningActionsCount == 0) {
	obj80384_onTap_actionGroup3();
}
	}
}









};
obj80384_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80384_onTap_activeActionGroupIndex = -1;
		$("#obj80384").trigger("obj80384_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80384) {
				console.warn("de-queueing event obj80384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80384_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80389();
function runjs_80389() {
	window.obj80384_onTap_runningActionsCount = obj80384_onTap_runningActionsCount + 1;

	$("#obj80384").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj80384_onTap_runningActionsCount = window.obj80384_onTap_runningActionsCount - 1;
if (window.obj80384_onTap_runningActionsCount < 0) {
	window.obj80384_onTap_runningActionsCount = 0;
} else if (window.obj80384_onTap_runningActionsCount == 0) {
	obj80384_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_80390();
function switchText_80390() {
	window.obj80384_onTap_runningActionsCount = obj80384_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80384_onTap_runningActionsCount = window.obj80384_onTap_runningActionsCount - 1;
if (window.obj80384_onTap_runningActionsCount < 0) {
	window.obj80384_onTap_runningActionsCount = 0;
} else if (window.obj80384_onTap_runningActionsCount == 0) {
	obj80384_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80384_onTap_runningActionsCount = window.obj80384_onTap_runningActionsCount - 1;
if (window.obj80384_onTap_runningActionsCount < 0) {
	window.obj80384_onTap_runningActionsCount = 0;
} else if (window.obj80384_onTap_runningActionsCount == 0) {
	obj80384_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj80384_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80384_onTap_activeActionGroupIndex = -1;
		$("#obj80384").trigger("obj80384_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80384) {
				console.warn("de-queueing event obj80384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80384_onTap_activeActionGroupIndex = 4;
	





















};
obj80379_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80379_onTap_activeActionGroupIndex = -1;
		$("#obj80379").trigger("obj80379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80379) {
				console.warn("de-queueing event obj80379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80379_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80381();
function runjs_80381() {
	window.obj80379_onTap_runningActionsCount = obj80379_onTap_runningActionsCount + 1;

	$("#obj80379").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj80379_onTap_runningActionsCount = window.obj80379_onTap_runningActionsCount - 1;
if (window.obj80379_onTap_runningActionsCount < 0) {
	window.obj80379_onTap_runningActionsCount = 0;
} else if (window.obj80379_onTap_runningActionsCount == 0) {
	obj80379_onTap_actionGroup1();
}
	}, 1);
}







};
obj80379_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80379_onTap_activeActionGroupIndex = -1;
		$("#obj80379").trigger("obj80379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80379) {
				console.warn("de-queueing event obj80379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80379_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80382();
function switchText_80382() {
	window.obj80379_onTap_runningActionsCount = obj80379_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80379_onTap_runningActionsCount = window.obj80379_onTap_runningActionsCount - 1;
if (window.obj80379_onTap_runningActionsCount < 0) {
	window.obj80379_onTap_runningActionsCount = 0;
} else if (window.obj80379_onTap_runningActionsCount == 0) {
	obj80379_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80379_onTap_runningActionsCount = window.obj80379_onTap_runningActionsCount - 1;
if (window.obj80379_onTap_runningActionsCount < 0) {
	window.obj80379_onTap_runningActionsCount = 0;
} else if (window.obj80379_onTap_runningActionsCount == 0) {
	obj80379_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj80379_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80379_onTap_activeActionGroupIndex = -1;
		$("#obj80379").trigger("obj80379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80379) {
				console.warn("de-queueing event obj80379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80379_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj80427 
playAudio_80383();
function playAudio_80383() {
	window.obj80379_onTap_runningActionsCount = obj80379_onTap_runningActionsCount + 1;
	var myAudio = $("#obj80427")[0];
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
		    window.obj80379_onTap_runningActionsCount = window.obj80379_onTap_runningActionsCount - 1;
if (window.obj80379_onTap_runningActionsCount < 0) {
	window.obj80379_onTap_runningActionsCount = 0;
} else if (window.obj80379_onTap_runningActionsCount == 0) {
	obj80379_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80379_onTap_runningActionsCount = window.obj80379_onTap_runningActionsCount - 1;
if (window.obj80379_onTap_runningActionsCount < 0) {
	window.obj80379_onTap_runningActionsCount = 0;
} else if (window.obj80379_onTap_runningActionsCount == 0) {
	obj80379_onTap_actionGroup3();
}
	}
}









};
obj80379_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80379_onTap_activeActionGroupIndex = -1;
		$("#obj80379").trigger("obj80379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80379) {
				console.warn("de-queueing event obj80379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80379_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90328();
function switchText_90328() {
	window.obj80379_onTap_runningActionsCount = obj80379_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80379_onTap_runningActionsCount = window.obj80379_onTap_runningActionsCount - 1;
if (window.obj80379_onTap_runningActionsCount < 0) {
	window.obj80379_onTap_runningActionsCount = 0;
} else if (window.obj80379_onTap_runningActionsCount == 0) {
	obj80379_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80379_onTap_runningActionsCount = window.obj80379_onTap_runningActionsCount - 1;
if (window.obj80379_onTap_runningActionsCount < 0) {
	window.obj80379_onTap_runningActionsCount = 0;
} else if (window.obj80379_onTap_runningActionsCount == 0) {
	obj80379_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj80379_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80379_onTap_activeActionGroupIndex = -1;
		$("#obj80379").trigger("obj80379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80379) {
				console.warn("de-queueing event obj80379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80379_onTap_activeActionGroupIndex = 4;
	





















};
obj80370_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80370_onTap_activeActionGroupIndex = -1;
		$("#obj80370").trigger("obj80370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80370) {
				console.warn("de-queueing event obj80370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80370_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80372();
function runjs_80372() {
	window.obj80370_onTap_runningActionsCount = obj80370_onTap_runningActionsCount + 1;

	$("#obj80370").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj80370_onTap_runningActionsCount = window.obj80370_onTap_runningActionsCount - 1;
if (window.obj80370_onTap_runningActionsCount < 0) {
	window.obj80370_onTap_runningActionsCount = 0;
} else if (window.obj80370_onTap_runningActionsCount == 0) {
	obj80370_onTap_actionGroup1();
}
	}, 1);
}







};
obj80370_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80370_onTap_activeActionGroupIndex = -1;
		$("#obj80370").trigger("obj80370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80370) {
				console.warn("de-queueing event obj80370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80370_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80373();
function switchText_80373() {
	window.obj80370_onTap_runningActionsCount = obj80370_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80370_onTap_runningActionsCount = window.obj80370_onTap_runningActionsCount - 1;
if (window.obj80370_onTap_runningActionsCount < 0) {
	window.obj80370_onTap_runningActionsCount = 0;
} else if (window.obj80370_onTap_runningActionsCount == 0) {
	obj80370_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80370_onTap_runningActionsCount = window.obj80370_onTap_runningActionsCount - 1;
if (window.obj80370_onTap_runningActionsCount < 0) {
	window.obj80370_onTap_runningActionsCount = 0;
} else if (window.obj80370_onTap_runningActionsCount == 0) {
	obj80370_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj80370_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80370_onTap_activeActionGroupIndex = -1;
		$("#obj80370").trigger("obj80370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80370) {
				console.warn("de-queueing event obj80370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80370_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj80427 
playAudio_80374();
function playAudio_80374() {
	window.obj80370_onTap_runningActionsCount = obj80370_onTap_runningActionsCount + 1;
	var myAudio = $("#obj80427")[0];
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
		    window.obj80370_onTap_runningActionsCount = window.obj80370_onTap_runningActionsCount - 1;
if (window.obj80370_onTap_runningActionsCount < 0) {
	window.obj80370_onTap_runningActionsCount = 0;
} else if (window.obj80370_onTap_runningActionsCount == 0) {
	obj80370_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80370_onTap_runningActionsCount = window.obj80370_onTap_runningActionsCount - 1;
if (window.obj80370_onTap_runningActionsCount < 0) {
	window.obj80370_onTap_runningActionsCount = 0;
} else if (window.obj80370_onTap_runningActionsCount == 0) {
	obj80370_onTap_actionGroup3();
}
	}
}









};
obj80370_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80370_onTap_activeActionGroupIndex = -1;
		$("#obj80370").trigger("obj80370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80370) {
				console.warn("de-queueing event obj80370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80370_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90329();
function switchText_90329() {
	window.obj80370_onTap_runningActionsCount = obj80370_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80370_onTap_runningActionsCount = window.obj80370_onTap_runningActionsCount - 1;
if (window.obj80370_onTap_runningActionsCount < 0) {
	window.obj80370_onTap_runningActionsCount = 0;
} else if (window.obj80370_onTap_runningActionsCount == 0) {
	obj80370_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80370_onTap_runningActionsCount = window.obj80370_onTap_runningActionsCount - 1;
if (window.obj80370_onTap_runningActionsCount < 0) {
	window.obj80370_onTap_runningActionsCount = 0;
} else if (window.obj80370_onTap_runningActionsCount == 0) {
	obj80370_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj80370_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80370_onTap_activeActionGroupIndex = -1;
		$("#obj80370").trigger("obj80370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80370) {
				console.warn("de-queueing event obj80370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80370_onTap_activeActionGroupIndex = 4;
	





















};
obj80363_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80363_onTap_activeActionGroupIndex = -1;
		$("#obj80363").trigger("obj80363_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80363) {
				console.warn("de-queueing event obj80363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80363_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80365();
function runjs_80365() {
	window.obj80363_onTap_runningActionsCount = obj80363_onTap_runningActionsCount + 1;

	$("#obj80363").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj80363_onTap_runningActionsCount = window.obj80363_onTap_runningActionsCount - 1;
if (window.obj80363_onTap_runningActionsCount < 0) {
	window.obj80363_onTap_runningActionsCount = 0;
} else if (window.obj80363_onTap_runningActionsCount == 0) {
	obj80363_onTap_actionGroup1();
}
	}, 1);
}







};
obj80363_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80363_onTap_activeActionGroupIndex = -1;
		$("#obj80363").trigger("obj80363_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80363) {
				console.warn("de-queueing event obj80363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80363_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80366();
function switchText_80366() {
	window.obj80363_onTap_runningActionsCount = obj80363_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80363_onTap_runningActionsCount = window.obj80363_onTap_runningActionsCount - 1;
if (window.obj80363_onTap_runningActionsCount < 0) {
	window.obj80363_onTap_runningActionsCount = 0;
} else if (window.obj80363_onTap_runningActionsCount == 0) {
	obj80363_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80363_onTap_runningActionsCount = window.obj80363_onTap_runningActionsCount - 1;
if (window.obj80363_onTap_runningActionsCount < 0) {
	window.obj80363_onTap_runningActionsCount = 0;
} else if (window.obj80363_onTap_runningActionsCount == 0) {
	obj80363_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj80363_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80363_onTap_activeActionGroupIndex = -1;
		$("#obj80363").trigger("obj80363_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80363) {
				console.warn("de-queueing event obj80363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80363_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj80428 
playAudio_80367();
function playAudio_80367() {
	window.obj80363_onTap_runningActionsCount = obj80363_onTap_runningActionsCount + 1;
	var myAudio = $("#obj80428")[0];
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
		    window.obj80363_onTap_runningActionsCount = window.obj80363_onTap_runningActionsCount - 1;
if (window.obj80363_onTap_runningActionsCount < 0) {
	window.obj80363_onTap_runningActionsCount = 0;
} else if (window.obj80363_onTap_runningActionsCount == 0) {
	obj80363_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80363_onTap_runningActionsCount = window.obj80363_onTap_runningActionsCount - 1;
if (window.obj80363_onTap_runningActionsCount < 0) {
	window.obj80363_onTap_runningActionsCount = 0;
} else if (window.obj80363_onTap_runningActionsCount == 0) {
	obj80363_onTap_actionGroup3();
}
	}
}









};
obj80363_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80363_onTap_activeActionGroupIndex = -1;
		$("#obj80363").trigger("obj80363_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80363) {
				console.warn("de-queueing event obj80363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80363_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80368();
function runjs_80368() {
	window.obj80363_onTap_runningActionsCount = obj80363_onTap_runningActionsCount + 1;

	$("#obj80363").css("background-color", "#0A4D7F");
	
	setTimeout(function() {
		window.obj80363_onTap_runningActionsCount = window.obj80363_onTap_runningActionsCount - 1;
if (window.obj80363_onTap_runningActionsCount < 0) {
	window.obj80363_onTap_runningActionsCount = 0;
} else if (window.obj80363_onTap_runningActionsCount == 0) {
	obj80363_onTap_actionGroup4();
}
	}, 1);
}

//	action: Switch Text
switchText_80369();
function switchText_80369() {
	window.obj80363_onTap_runningActionsCount = obj80363_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80429_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80429_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80429").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80429_content");
			setTimeout(function () {
				window.obj80363_onTap_runningActionsCount = window.obj80363_onTap_runningActionsCount - 1;
if (window.obj80363_onTap_runningActionsCount < 0) {
	window.obj80363_onTap_runningActionsCount = 0;
} else if (window.obj80363_onTap_runningActionsCount == 0) {
	obj80363_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj80429 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80363_onTap_runningActionsCount = window.obj80363_onTap_runningActionsCount - 1;
if (window.obj80363_onTap_runningActionsCount < 0) {
	window.obj80363_onTap_runningActionsCount = 0;
} else if (window.obj80363_onTap_runningActionsCount == 0) {
	obj80363_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj80363_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80363_onTap_activeActionGroupIndex = -1;
		$("#obj80363").trigger("obj80363_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80363) {
				console.warn("de-queueing event obj80363." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80363").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80363_onTap_activeActionGroupIndex = 4;
	





















};
obj80345_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80345_onTap_activeActionGroupIndex = -1;
		$("#obj80345").trigger("obj80345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80345) {
				console.warn("de-queueing event obj80345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80345_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80345 
hide_80348();
function hide_80348() {
	var selector = "#obj80345";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80345_onTap_runningActionsCount = obj80345_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80345_onTap_runningActionsCount = window.obj80345_onTap_runningActionsCount - 1;
if (window.obj80345_onTap_runningActionsCount < 0) {
	window.obj80345_onTap_runningActionsCount = 0;
} else if (window.obj80345_onTap_runningActionsCount == 0) {
	obj80345_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80348(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80345_onTap_runningActionsCount = window.obj80345_onTap_runningActionsCount - 1;
if (window.obj80345_onTap_runningActionsCount < 0) {
	window.obj80345_onTap_runningActionsCount = 0;
} else if (window.obj80345_onTap_runningActionsCount == 0) {
	obj80345_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj80335 
stopMovie_80347();
function stopMovie_80347() {
	window.obj80345_onTap_runningActionsCount = obj80345_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80335")[0];
	myVideo.pause();
	window.obj80345_onTap_runningActionsCount = window.obj80345_onTap_runningActionsCount - 1;
if (window.obj80345_onTap_runningActionsCount < 0) {
	window.obj80345_onTap_runningActionsCount = 0;
} else if (window.obj80345_onTap_runningActionsCount == 0) {
	obj80345_onTap_actionGroup1();
}
}
















};
obj80345_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80345_onTap_activeActionGroupIndex = -1;
		$("#obj80345").trigger("obj80345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80345) {
				console.warn("de-queueing event obj80345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80345_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80337
(function(){
	window.obj80345_onTap_runningActionsCount = obj80345_onTap_runningActionsCount + 1;

	var selector = "#obj80337";
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
					window.obj80345_onTap_runningActionsCount = window.obj80345_onTap_runningActionsCount - 1;
if (window.obj80345_onTap_runningActionsCount < 0) {
	window.obj80345_onTap_runningActionsCount = 0;
} else if (window.obj80345_onTap_runningActionsCount == 0) {
	obj80345_onTap_actionGroup2();
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
				window.obj80345_onTap_runningActionsCount = window.obj80345_onTap_runningActionsCount - 1;
if (window.obj80345_onTap_runningActionsCount < 0) {
	window.obj80345_onTap_runningActionsCount = 0;
} else if (window.obj80345_onTap_runningActionsCount == 0) {
	obj80345_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80345_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80345_onTap_activeActionGroupIndex = -1;
		$("#obj80345").trigger("obj80345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80345) {
				console.warn("de-queueing event obj80345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80345_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80335 
move_80350();
function move_80350() {
	window.obj80345_onTap_runningActionsCount = obj80345_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80335");
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
			window.obj80345_onTap_runningActionsCount = window.obj80345_onTap_runningActionsCount - 1;
if (window.obj80345_onTap_runningActionsCount < 0) {
	window.obj80345_onTap_runningActionsCount = 0;
} else if (window.obj80345_onTap_runningActionsCount == 0) {
	obj80345_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80345_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80345_onTap_activeActionGroupIndex = -1;
		$("#obj80345").trigger("obj80345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80345) {
				console.warn("de-queueing event obj80345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80345_onTap_activeActionGroupIndex = 3;
	





















};
obj80337_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80337_onTap_activeActionGroupIndex = -1;
		$("#obj80337").trigger("obj80337_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80337) {
				console.warn("de-queueing event obj80337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80337_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80337 
hide_80340();
function hide_80340() {
	var selector = "#obj80337";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80337_onTap_runningActionsCount = obj80337_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80337_onTap_runningActionsCount = window.obj80337_onTap_runningActionsCount - 1;
if (window.obj80337_onTap_runningActionsCount < 0) {
	window.obj80337_onTap_runningActionsCount = 0;
} else if (window.obj80337_onTap_runningActionsCount == 0) {
	obj80337_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80340(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80337_onTap_runningActionsCount = window.obj80337_onTap_runningActionsCount - 1;
if (window.obj80337_onTap_runningActionsCount < 0) {
	window.obj80337_onTap_runningActionsCount = 0;
} else if (window.obj80337_onTap_runningActionsCount == 0) {
	obj80337_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj80335 
playPauseMovie_80339();
function playPauseMovie_80339() {
	window.obj80337_onTap_runningActionsCount = obj80337_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80335")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj80337_onTap_runningActionsCount = window.obj80337_onTap_runningActionsCount - 1;
if (window.obj80337_onTap_runningActionsCount < 0) {
	window.obj80337_onTap_runningActionsCount = 0;
} else if (window.obj80337_onTap_runningActionsCount == 0) {
	obj80337_onTap_actionGroup1();
}
}

















};
obj80337_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80337_onTap_activeActionGroupIndex = -1;
		$("#obj80337").trigger("obj80337_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80337) {
				console.warn("de-queueing event obj80337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80337_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80345
(function(){
	window.obj80337_onTap_runningActionsCount = obj80337_onTap_runningActionsCount + 1;

	var selector = "#obj80345";
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
					window.obj80337_onTap_runningActionsCount = window.obj80337_onTap_runningActionsCount - 1;
if (window.obj80337_onTap_runningActionsCount < 0) {
	window.obj80337_onTap_runningActionsCount = 0;
} else if (window.obj80337_onTap_runningActionsCount == 0) {
	obj80337_onTap_actionGroup2();
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
				window.obj80337_onTap_runningActionsCount = window.obj80337_onTap_runningActionsCount - 1;
if (window.obj80337_onTap_runningActionsCount < 0) {
	window.obj80337_onTap_runningActionsCount = 0;
} else if (window.obj80337_onTap_runningActionsCount == 0) {
	obj80337_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80337_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80337_onTap_activeActionGroupIndex = -1;
		$("#obj80337").trigger("obj80337_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80337) {
				console.warn("de-queueing event obj80337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80337_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80335 
move_80342();
function move_80342() {
	window.obj80337_onTap_runningActionsCount = obj80337_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80335");
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
			window.obj80337_onTap_runningActionsCount = window.obj80337_onTap_runningActionsCount - 1;
if (window.obj80337_onTap_runningActionsCount < 0) {
	window.obj80337_onTap_runningActionsCount = 0;
} else if (window.obj80337_onTap_runningActionsCount == 0) {
	obj80337_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80337_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80337_onTap_activeActionGroupIndex = -1;
		$("#obj80337").trigger("obj80337_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80337) {
				console.warn("de-queueing event obj80337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80337_onTap_activeActionGroupIndex = 3;
	





















};
obj88045_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88045_onTap_activeActionGroupIndex = -1;
		$("#obj88045").trigger("obj88045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88045) {
				console.warn("de-queueing event obj88045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88045_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88050 
stopAudio_88047();
function stopAudio_88047() {
	window.obj88045_onTap_runningActionsCount = obj88045_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88050")[0];
	myAudio.pause();
	window.obj88045_onTap_runningActionsCount = window.obj88045_onTap_runningActionsCount - 1;
if (window.obj88045_onTap_runningActionsCount < 0) {
	window.obj88045_onTap_runningActionsCount = 0;
} else if (window.obj88045_onTap_runningActionsCount == 0) {
	obj88045_onTap_actionGroup1();
}
}








};
obj88045_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88045_onTap_activeActionGroupIndex = -1;
		$("#obj88045").trigger("obj88045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88045) {
				console.warn("de-queueing event obj88045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88045_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88045 
hide_88048();
function hide_88048() {
	var selector = "#obj88045";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88045_onTap_runningActionsCount = obj88045_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88045_onTap_runningActionsCount = window.obj88045_onTap_runningActionsCount - 1;
if (window.obj88045_onTap_runningActionsCount < 0) {
	window.obj88045_onTap_runningActionsCount = 0;
} else if (window.obj88045_onTap_runningActionsCount == 0) {
	obj88045_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88048(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88045_onTap_runningActionsCount = window.obj88045_onTap_runningActionsCount - 1;
if (window.obj88045_onTap_runningActionsCount < 0) {
	window.obj88045_onTap_runningActionsCount = 0;
} else if (window.obj88045_onTap_runningActionsCount == 0) {
	obj88045_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88045_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88045_onTap_activeActionGroupIndex = -1;
		$("#obj88045").trigger("obj88045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88045) {
				console.warn("de-queueing event obj88045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88045_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88040
(function(){
	window.obj88045_onTap_runningActionsCount = obj88045_onTap_runningActionsCount + 1;

	var selector = "#obj88040";
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
					window.obj88045_onTap_runningActionsCount = window.obj88045_onTap_runningActionsCount - 1;
if (window.obj88045_onTap_runningActionsCount < 0) {
	window.obj88045_onTap_runningActionsCount = 0;
} else if (window.obj88045_onTap_runningActionsCount == 0) {
	obj88045_onTap_actionGroup3();
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
				window.obj88045_onTap_runningActionsCount = window.obj88045_onTap_runningActionsCount - 1;
if (window.obj88045_onTap_runningActionsCount < 0) {
	window.obj88045_onTap_runningActionsCount = 0;
} else if (window.obj88045_onTap_runningActionsCount == 0) {
	obj88045_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88045_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88045_onTap_activeActionGroupIndex = -1;
		$("#obj88045").trigger("obj88045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88045) {
				console.warn("de-queueing event obj88045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88045_onTap_activeActionGroupIndex = 3;
	





















};
obj88040_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88040_onTap_activeActionGroupIndex = -1;
		$("#obj88040").trigger("obj88040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88040) {
				console.warn("de-queueing event obj88040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88040_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88040 
hide_88042();
function hide_88042() {
	var selector = "#obj88040";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88040_onTap_runningActionsCount = obj88040_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88040_onTap_runningActionsCount = window.obj88040_onTap_runningActionsCount - 1;
if (window.obj88040_onTap_runningActionsCount < 0) {
	window.obj88040_onTap_runningActionsCount = 0;
} else if (window.obj88040_onTap_runningActionsCount == 0) {
	obj88040_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88042(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88040_onTap_runningActionsCount = window.obj88040_onTap_runningActionsCount - 1;
if (window.obj88040_onTap_runningActionsCount < 0) {
	window.obj88040_onTap_runningActionsCount = 0;
} else if (window.obj88040_onTap_runningActionsCount == 0) {
	obj88040_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88040_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88040_onTap_activeActionGroupIndex = -1;
		$("#obj88040").trigger("obj88040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88040) {
				console.warn("de-queueing event obj88040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88040_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88045
(function(){
	window.obj88040_onTap_runningActionsCount = obj88040_onTap_runningActionsCount + 1;

	var selector = "#obj88045";
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
					window.obj88040_onTap_runningActionsCount = window.obj88040_onTap_runningActionsCount - 1;
if (window.obj88040_onTap_runningActionsCount < 0) {
	window.obj88040_onTap_runningActionsCount = 0;
} else if (window.obj88040_onTap_runningActionsCount == 0) {
	obj88040_onTap_actionGroup2();
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
				window.obj88040_onTap_runningActionsCount = window.obj88040_onTap_runningActionsCount - 1;
if (window.obj88040_onTap_runningActionsCount < 0) {
	window.obj88040_onTap_runningActionsCount = 0;
} else if (window.obj88040_onTap_runningActionsCount == 0) {
	obj88040_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88040_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88040_onTap_activeActionGroupIndex = -1;
		$("#obj88040").trigger("obj88040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88040) {
				console.warn("de-queueing event obj88040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88040_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88050 
playAudio_88044();
function playAudio_88044() {
	window.obj88040_onTap_runningActionsCount = obj88040_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88050")[0];
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
		    window.obj88040_onTap_runningActionsCount = window.obj88040_onTap_runningActionsCount - 1;
if (window.obj88040_onTap_runningActionsCount < 0) {
	window.obj88040_onTap_runningActionsCount = 0;
} else if (window.obj88040_onTap_runningActionsCount == 0) {
	obj88040_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88040_onTap_runningActionsCount = window.obj88040_onTap_runningActionsCount - 1;
if (window.obj88040_onTap_runningActionsCount < 0) {
	window.obj88040_onTap_runningActionsCount = 0;
} else if (window.obj88040_onTap_runningActionsCount == 0) {
	obj88040_onTap_actionGroup3();
}
	}
}









};
obj88040_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88040_onTap_activeActionGroupIndex = -1;
		$("#obj88040").trigger("obj88040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88040) {
				console.warn("de-queueing event obj88040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88040_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj80448: Event Touch Down
 *
 */
$("#obj80448").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80448_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80448_onTap is still running");
	return;
}
var obj80448_onTap_runningActionsCount = 0;
var obj80448_onTap_loopCount = 0;
obj80448_onTap_actionGroup0();
});










/*
 *
 *   obj80445: Event Touch Down
 *
 */
$("#obj80445").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80445_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80445_onTap is still running");
	return;
}
var obj80445_onTap_runningActionsCount = 0;
var obj80445_onTap_loopCount = 0;
obj80445_onTap_actionGroup0();
});










/*
 *
 *   obj80441: Event Touch Down
 *
 */
$("#obj80441").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80441_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80441_onTap is still running");
	return;
}
var obj80441_onTap_runningActionsCount = 0;
var obj80441_onTap_loopCount = 0;
obj80441_onTap_actionGroup0();
});


































































































































/*
 *
 *   obj80414: Event Touch Down
 *
 */
$("#obj80414").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80414_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80414_onTap is still running");
	return;
}
var obj80414_onTap_runningActionsCount = 0;
var obj80414_onTap_loopCount = 0;
obj80414_onTap_actionGroup0();
});










/*
 *
 *   obj80407: Event Touch Down
 *
 */
$("#obj80407").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80407_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80407_onTap is still running");
	return;
}
var obj80407_onTap_runningActionsCount = 0;
var obj80407_onTap_loopCount = 0;
obj80407_onTap_actionGroup0();
});




















/*
 *
 *   obj80400: Event Touch Down
 *
 */
$("#obj80400").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80400_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80400_onTap is still running");
	return;
}
var obj80400_onTap_runningActionsCount = 0;
var obj80400_onTap_loopCount = 0;
obj80400_onTap_actionGroup0();
});










/*
 *
 *   obj80393: Event Touch Down
 *
 */
$("#obj80393").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80393_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80393_onTap is still running");
	return;
}
var obj80393_onTap_runningActionsCount = 0;
var obj80393_onTap_loopCount = 0;
obj80393_onTap_actionGroup0();
});




















/*
 *
 *   obj80384: Event Touch Down
 *
 */
$("#obj80384").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80384_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80384_onTap is still running");
	return;
}
var obj80384_onTap_runningActionsCount = 0;
var obj80384_onTap_loopCount = 0;
obj80384_onTap_actionGroup0();
});










/*
 *
 *   obj80379: Event Touch Down
 *
 */
$("#obj80379").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80379_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80379_onTap is still running");
	return;
}
var obj80379_onTap_runningActionsCount = 0;
var obj80379_onTap_loopCount = 0;
obj80379_onTap_actionGroup0();
});






























/*
 *
 *   obj80370: Event Touch Down
 *
 */
$("#obj80370").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80370_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80370_onTap is still running");
	return;
}
var obj80370_onTap_runningActionsCount = 0;
var obj80370_onTap_loopCount = 0;
obj80370_onTap_actionGroup0();
});










/*
 *
 *   obj80363: Event Touch Down
 *
 */
$("#obj80363").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80363_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80363_onTap is still running");
	return;
}
var obj80363_onTap_runningActionsCount = 0;
var obj80363_onTap_loopCount = 0;
obj80363_onTap_actionGroup0();
});










/*
 *
 *   obj80345: Event Touch Down
 *
 */
$("#obj80345").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80345_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80345_onTap is still running");
	return;
}
var obj80345_onTap_runningActionsCount = 0;
var obj80345_onTap_loopCount = 0;
obj80345_onTap_actionGroup0();
});










/*
 *
 *   obj80337: Event Touch Down
 *
 */
$("#obj80337").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80337_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80337_onTap is still running");
	return;
}
var obj80337_onTap_runningActionsCount = 0;
var obj80337_onTap_loopCount = 0;
obj80337_onTap_actionGroup0();
});










/*
 *
 *   obj88045: Event Touch Down
 *
 */
$("#obj88045").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88045_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88045_onTap is still running");
	return;
}
var obj88045_onTap_runningActionsCount = 0;
var obj88045_onTap_loopCount = 0;
obj88045_onTap_actionGroup0();
});










/*
 *
 *   obj88040: Event Touch Down
 *
 */
$("#obj88040").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88040_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88040_onTap is still running");
	return;
}
var obj88040_onTap_runningActionsCount = 0;
var obj88040_onTap_loopCount = 0;
obj88040_onTap_actionGroup0();
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
	
$("#obj80451").trigger('SCEventShow');
$("#obj80448").trigger('SCEventShow');
$("#obj80445").trigger('SCEventShow');
$("#obj80441").trigger('SCEventShow');
$("#obj80439").trigger('SCEventShow');
$("#obj80437").trigger('SCEventShow');
$("#obj80435").trigger('SCEventShow');
$("#obj80433").trigger('SCEventShow');
$("#obj80431").trigger('SCEventShow');
$("#obj80429").trigger('SCEventShow');
$("#obj80428").trigger('SCEventShow');
$("#obj80427").trigger('SCEventShow');
$("#obj80425").trigger('SCEventShow');
$("#obj80423").trigger('SCEventShow');
$("#obj80421").trigger('SCEventShow');
$("#obj80419").trigger('SCEventShow');
$("#obj80414").trigger('SCEventShow');
$("#obj80407").trigger('SCEventShow');
$("#obj80405").trigger('SCEventShow');
$("#obj80400").trigger('SCEventShow');
$("#obj80393").trigger('SCEventShow');
$("#obj80391").trigger('SCEventShow');
$("#obj80384").trigger('SCEventShow');
$("#obj80379").trigger('SCEventShow');
$("#obj80377").trigger('SCEventShow');
$("#obj80375").trigger('SCEventShow');
$("#obj80370").trigger('SCEventShow');
$("#obj80363").trigger('SCEventShow');
$("#obj80345").trigger('SCEventShow');
$("#obj80337").trigger('SCEventShow');
$("#obj88045").trigger('SCEventShow');
$("#obj88040").trigger('SCEventShow');
$("#obj88050").trigger('SCEventShow');
$("#obj94825").trigger('SCEventShow');
$("#obj80335").trigger('SCEventShow');
	
});