pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 41776;
pubcoder.page.title = pubcoder.page.title || "142";
pubcoder.page.number = pubcoder.page.number || 142;
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
var obj41782_onTap_activeActionGroupIndex = -1;
var obj41782_onTap_runningActionsCount = 0;
var obj41782_onTap_loopCount = 0;
var obj41779_onTap_activeActionGroupIndex = -1;
var obj41779_onTap_runningActionsCount = 0;
var obj41779_onTap_loopCount = 0;
var obj41785_onTap_activeActionGroupIndex = -1;
var obj41785_onTap_runningActionsCount = 0;
var obj41785_onTap_loopCount = 0;
var obj41823_onTap_activeActionGroupIndex = -1;
var obj41823_onTap_runningActionsCount = 0;
var obj41823_onTap_loopCount = 0;
var obj41825_onTap_activeActionGroupIndex = -1;
var obj41825_onTap_runningActionsCount = 0;
var obj41825_onTap_loopCount = 0;
var obj41827_onTap_activeActionGroupIndex = -1;
var obj41827_onTap_runningActionsCount = 0;
var obj41827_onTap_loopCount = 0;
var obj41829_onTap_activeActionGroupIndex = -1;
var obj41829_onTap_runningActionsCount = 0;
var obj41829_onTap_loopCount = 0;
var obj41831_onTap_activeActionGroupIndex = -1;
var obj41831_onTap_runningActionsCount = 0;
var obj41831_onTap_loopCount = 0;
var obj41833_onTap_activeActionGroupIndex = -1;
var obj41833_onTap_runningActionsCount = 0;
var obj41833_onTap_loopCount = 0;
var obj41837_onTap_activeActionGroupIndex = -1;
var obj41837_onTap_runningActionsCount = 0;
var obj41837_onTap_loopCount = 0;
var obj41839_onTap_activeActionGroupIndex = -1;
var obj41839_onTap_runningActionsCount = 0;
var obj41839_onTap_loopCount = 0;
var obj41841_onTap_activeActionGroupIndex = -1;
var obj41841_onTap_runningActionsCount = 0;
var obj41841_onTap_loopCount = 0;
var obj41835_onTap_activeActionGroupIndex = -1;
var obj41835_onTap_runningActionsCount = 0;
var obj41835_onTap_loopCount = 0;
var obj41845_onTap_activeActionGroupIndex = -1;
var obj41845_onTap_runningActionsCount = 0;
var obj41845_onTap_loopCount = 0;
var obj41843_onTap_activeActionGroupIndex = -1;
var obj41843_onTap_runningActionsCount = 0;
var obj41843_onTap_loopCount = 0;
var obj41847_onTap_activeActionGroupIndex = -1;
var obj41847_onTap_runningActionsCount = 0;
var obj41847_onTap_loopCount = 0;
var obj41849_onTap_activeActionGroupIndex = -1;
var obj41849_onTap_runningActionsCount = 0;
var obj41849_onTap_loopCount = 0;
var obj41851_onTap_activeActionGroupIndex = -1;
var obj41851_onTap_runningActionsCount = 0;
var obj41851_onTap_loopCount = 0;
var obj41853_onTap_activeActionGroupIndex = -1;
var obj41853_onTap_runningActionsCount = 0;
var obj41853_onTap_loopCount = 0;
var obj41855_onTap_activeActionGroupIndex = -1;
var obj41855_onTap_runningActionsCount = 0;
var obj41855_onTap_loopCount = 0;
var obj41857_onTap_activeActionGroupIndex = -1;
var obj41857_onTap_runningActionsCount = 0;
var obj41857_onTap_loopCount = 0;
var obj41859_onTap_activeActionGroupIndex = -1;
var obj41859_onTap_runningActionsCount = 0;
var obj41859_onTap_loopCount = 0;
var obj41861_onTap_activeActionGroupIndex = -1;
var obj41861_onTap_runningActionsCount = 0;
var obj41861_onTap_loopCount = 0;
var obj41863_onTap_activeActionGroupIndex = -1;
var obj41863_onTap_runningActionsCount = 0;
var obj41863_onTap_loopCount = 0;
var obj41865_onTap_activeActionGroupIndex = -1;
var obj41865_onTap_runningActionsCount = 0;
var obj41865_onTap_loopCount = 0;
var obj41867_onTap_activeActionGroupIndex = -1;
var obj41867_onTap_runningActionsCount = 0;
var obj41867_onTap_loopCount = 0;
var obj41869_onTap_activeActionGroupIndex = -1;
var obj41869_onTap_runningActionsCount = 0;
var obj41869_onTap_loopCount = 0;
var obj67278_onTap_activeActionGroupIndex = -1;
var obj67278_onTap_runningActionsCount = 0;
var obj67278_onTap_loopCount = 0;
var obj67270_onTap_activeActionGroupIndex = -1;
var obj67270_onTap_runningActionsCount = 0;
var obj67270_onTap_loopCount = 0;
var obj88573_onTap_activeActionGroupIndex = -1;
var obj88573_onTap_runningActionsCount = 0;
var obj88573_onTap_loopCount = 0;
var obj88568_onTap_activeActionGroupIndex = -1;
var obj88568_onTap_runningActionsCount = 0;
var obj88568_onTap_loopCount = 0;
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
		
obj41782_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41782_onTap_activeActionGroupIndex = -1;
		$("#obj41782").trigger("obj41782_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41782) {
				console.warn("de-queueing event obj41782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41782_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41784();
function goToPage_41784() {
	window.obj41782_onTap_runningActionsCount = obj41782_onTap_runningActionsCount + 1;
	$("#anchor842")[0].click();
	window.obj41782_onTap_runningActionsCount = window.obj41782_onTap_runningActionsCount - 1;
if (window.obj41782_onTap_runningActionsCount < 0) {
	window.obj41782_onTap_runningActionsCount = 0;
} else if (window.obj41782_onTap_runningActionsCount == 0) {
	obj41782_onTap_actionGroup1();
}
}





















};
obj41782_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41782_onTap_activeActionGroupIndex = -1;
		$("#obj41782").trigger("obj41782_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41782) {
				console.warn("de-queueing event obj41782." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41782").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41782_onTap_activeActionGroupIndex = 1;
	





















};
obj41779_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41779_onTap_activeActionGroupIndex = -1;
		$("#obj41779").trigger("obj41779_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41779) {
				console.warn("de-queueing event obj41779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41779_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41781();
function goToPage_41781() {
	window.obj41779_onTap_runningActionsCount = obj41779_onTap_runningActionsCount + 1;
	$("#anchor843")[0].click();
	window.obj41779_onTap_runningActionsCount = window.obj41779_onTap_runningActionsCount - 1;
if (window.obj41779_onTap_runningActionsCount < 0) {
	window.obj41779_onTap_runningActionsCount = 0;
} else if (window.obj41779_onTap_runningActionsCount == 0) {
	obj41779_onTap_actionGroup1();
}
}





















};
obj41779_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41779_onTap_activeActionGroupIndex = -1;
		$("#obj41779").trigger("obj41779_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41779) {
				console.warn("de-queueing event obj41779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41779_onTap_activeActionGroupIndex = 1;
	





















};
obj41785_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41785_onTap_activeActionGroupIndex = -1;
		$("#obj41785").trigger("obj41785_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41785) {
				console.warn("de-queueing event obj41785." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41785").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41785_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41787();
function goToPage_41787() {
	window.obj41785_onTap_runningActionsCount = obj41785_onTap_runningActionsCount + 1;
	$("#anchor844")[0].click();
	window.obj41785_onTap_runningActionsCount = window.obj41785_onTap_runningActionsCount - 1;
if (window.obj41785_onTap_runningActionsCount < 0) {
	window.obj41785_onTap_runningActionsCount = 0;
} else if (window.obj41785_onTap_runningActionsCount == 0) {
	obj41785_onTap_actionGroup1();
}
}





















};
obj41785_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41785_onTap_activeActionGroupIndex = -1;
		$("#obj41785").trigger("obj41785_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41785) {
				console.warn("de-queueing event obj41785." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41785").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41785_onTap_activeActionGroupIndex = 1;
	





















};
obj41823_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41823_onTap_activeActionGroupIndex = -1;
		$("#obj41823").trigger("obj41823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41823) {
				console.warn("de-queueing event obj41823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41823_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_41877();
function switchText_41877() {
	window.obj41823_onTap_runningActionsCount = obj41823_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41823_onTap_runningActionsCount = window.obj41823_onTap_runningActionsCount - 1;
if (window.obj41823_onTap_runningActionsCount < 0) {
	window.obj41823_onTap_runningActionsCount = 0;
} else if (window.obj41823_onTap_runningActionsCount == 0) {
	obj41823_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41823_onTap_runningActionsCount = window.obj41823_onTap_runningActionsCount - 1;
if (window.obj41823_onTap_runningActionsCount < 0) {
	window.obj41823_onTap_runningActionsCount = 0;
} else if (window.obj41823_onTap_runningActionsCount == 0) {
	obj41823_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj41823_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41823_onTap_activeActionGroupIndex = -1;
		$("#obj41823").trigger("obj41823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41823) {
				console.warn("de-queueing event obj41823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41823_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41876();
function runjs_41876() {
	window.obj41823_onTap_runningActionsCount = obj41823_onTap_runningActionsCount + 1;

	$("#obj41823").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj41823_onTap_runningActionsCount = window.obj41823_onTap_runningActionsCount - 1;
if (window.obj41823_onTap_runningActionsCount < 0) {
	window.obj41823_onTap_runningActionsCount = 0;
} else if (window.obj41823_onTap_runningActionsCount == 0) {
	obj41823_onTap_actionGroup2();
}
	}, 1);
}







};
obj41823_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41823_onTap_activeActionGroupIndex = -1;
		$("#obj41823").trigger("obj41823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41823) {
				console.warn("de-queueing event obj41823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41823_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41874 
playAudio_41878();
function playAudio_41878() {
	window.obj41823_onTap_runningActionsCount = obj41823_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41874")[0];
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
		    window.obj41823_onTap_runningActionsCount = window.obj41823_onTap_runningActionsCount - 1;
if (window.obj41823_onTap_runningActionsCount < 0) {
	window.obj41823_onTap_runningActionsCount = 0;
} else if (window.obj41823_onTap_runningActionsCount == 0) {
	obj41823_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41823_onTap_runningActionsCount = window.obj41823_onTap_runningActionsCount - 1;
if (window.obj41823_onTap_runningActionsCount < 0) {
	window.obj41823_onTap_runningActionsCount = 0;
} else if (window.obj41823_onTap_runningActionsCount == 0) {
	obj41823_onTap_actionGroup3();
}
	}
}









};
obj41823_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41823_onTap_activeActionGroupIndex = -1;
		$("#obj41823").trigger("obj41823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41823) {
				console.warn("de-queueing event obj41823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41823_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90505();
function switchText_90505() {
	window.obj41823_onTap_runningActionsCount = obj41823_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41823_onTap_runningActionsCount = window.obj41823_onTap_runningActionsCount - 1;
if (window.obj41823_onTap_runningActionsCount < 0) {
	window.obj41823_onTap_runningActionsCount = 0;
} else if (window.obj41823_onTap_runningActionsCount == 0) {
	obj41823_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41823_onTap_runningActionsCount = window.obj41823_onTap_runningActionsCount - 1;
if (window.obj41823_onTap_runningActionsCount < 0) {
	window.obj41823_onTap_runningActionsCount = 0;
} else if (window.obj41823_onTap_runningActionsCount == 0) {
	obj41823_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj41823_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41823_onTap_activeActionGroupIndex = -1;
		$("#obj41823").trigger("obj41823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41823) {
				console.warn("de-queueing event obj41823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41823_onTap_activeActionGroupIndex = 4;
	





















};
obj41825_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41825_onTap_activeActionGroupIndex = -1;
		$("#obj41825").trigger("obj41825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41825) {
				console.warn("de-queueing event obj41825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41825_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_41872();
function switchText_41872() {
	window.obj41825_onTap_runningActionsCount = obj41825_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41825_onTap_runningActionsCount = window.obj41825_onTap_runningActionsCount - 1;
if (window.obj41825_onTap_runningActionsCount < 0) {
	window.obj41825_onTap_runningActionsCount = 0;
} else if (window.obj41825_onTap_runningActionsCount == 0) {
	obj41825_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41825_onTap_runningActionsCount = window.obj41825_onTap_runningActionsCount - 1;
if (window.obj41825_onTap_runningActionsCount < 0) {
	window.obj41825_onTap_runningActionsCount = 0;
} else if (window.obj41825_onTap_runningActionsCount == 0) {
	obj41825_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj41825_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41825_onTap_activeActionGroupIndex = -1;
		$("#obj41825").trigger("obj41825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41825) {
				console.warn("de-queueing event obj41825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41825_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41871();
function runjs_41871() {
	window.obj41825_onTap_runningActionsCount = obj41825_onTap_runningActionsCount + 1;

	$("#obj41825").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj41825_onTap_runningActionsCount = window.obj41825_onTap_runningActionsCount - 1;
if (window.obj41825_onTap_runningActionsCount < 0) {
	window.obj41825_onTap_runningActionsCount = 0;
} else if (window.obj41825_onTap_runningActionsCount == 0) {
	obj41825_onTap_actionGroup2();
}
	}, 1);
}







};
obj41825_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41825_onTap_activeActionGroupIndex = -1;
		$("#obj41825").trigger("obj41825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41825) {
				console.warn("de-queueing event obj41825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41825_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41874 
playAudio_41873();
function playAudio_41873() {
	window.obj41825_onTap_runningActionsCount = obj41825_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41874")[0];
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
		    window.obj41825_onTap_runningActionsCount = window.obj41825_onTap_runningActionsCount - 1;
if (window.obj41825_onTap_runningActionsCount < 0) {
	window.obj41825_onTap_runningActionsCount = 0;
} else if (window.obj41825_onTap_runningActionsCount == 0) {
	obj41825_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41825_onTap_runningActionsCount = window.obj41825_onTap_runningActionsCount - 1;
if (window.obj41825_onTap_runningActionsCount < 0) {
	window.obj41825_onTap_runningActionsCount = 0;
} else if (window.obj41825_onTap_runningActionsCount == 0) {
	obj41825_onTap_actionGroup3();
}
	}
}









};
obj41825_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41825_onTap_activeActionGroupIndex = -1;
		$("#obj41825").trigger("obj41825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41825) {
				console.warn("de-queueing event obj41825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41825_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90507();
function switchText_90507() {
	window.obj41825_onTap_runningActionsCount = obj41825_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41825_onTap_runningActionsCount = window.obj41825_onTap_runningActionsCount - 1;
if (window.obj41825_onTap_runningActionsCount < 0) {
	window.obj41825_onTap_runningActionsCount = 0;
} else if (window.obj41825_onTap_runningActionsCount == 0) {
	obj41825_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41825_onTap_runningActionsCount = window.obj41825_onTap_runningActionsCount - 1;
if (window.obj41825_onTap_runningActionsCount < 0) {
	window.obj41825_onTap_runningActionsCount = 0;
} else if (window.obj41825_onTap_runningActionsCount == 0) {
	obj41825_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj41825_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41825_onTap_activeActionGroupIndex = -1;
		$("#obj41825").trigger("obj41825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41825) {
				console.warn("de-queueing event obj41825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41825_onTap_activeActionGroupIndex = 4;
	





















};
obj41827_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41827_onTap_activeActionGroupIndex = -1;
		$("#obj41827").trigger("obj41827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41827) {
				console.warn("de-queueing event obj41827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41827_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41903();
function runjs_41903() {
	window.obj41827_onTap_runningActionsCount = obj41827_onTap_runningActionsCount + 1;

	$("#obj41827").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41827_onTap_runningActionsCount = window.obj41827_onTap_runningActionsCount - 1;
if (window.obj41827_onTap_runningActionsCount < 0) {
	window.obj41827_onTap_runningActionsCount = 0;
} else if (window.obj41827_onTap_runningActionsCount == 0) {
	obj41827_onTap_actionGroup1();
}
	}, 1);
}







};
obj41827_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41827_onTap_activeActionGroupIndex = -1;
		$("#obj41827").trigger("obj41827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41827) {
				console.warn("de-queueing event obj41827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41827_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41904();
function switchText_41904() {
	window.obj41827_onTap_runningActionsCount = obj41827_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41827_onTap_runningActionsCount = window.obj41827_onTap_runningActionsCount - 1;
if (window.obj41827_onTap_runningActionsCount < 0) {
	window.obj41827_onTap_runningActionsCount = 0;
} else if (window.obj41827_onTap_runningActionsCount == 0) {
	obj41827_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41827_onTap_runningActionsCount = window.obj41827_onTap_runningActionsCount - 1;
if (window.obj41827_onTap_runningActionsCount < 0) {
	window.obj41827_onTap_runningActionsCount = 0;
} else if (window.obj41827_onTap_runningActionsCount == 0) {
	obj41827_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41827_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41827_onTap_activeActionGroupIndex = -1;
		$("#obj41827").trigger("obj41827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41827) {
				console.warn("de-queueing event obj41827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41827_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41906();
function playAudio_41906() {
	window.obj41827_onTap_runningActionsCount = obj41827_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41827_onTap_runningActionsCount = window.obj41827_onTap_runningActionsCount - 1;
if (window.obj41827_onTap_runningActionsCount < 0) {
	window.obj41827_onTap_runningActionsCount = 0;
} else if (window.obj41827_onTap_runningActionsCount == 0) {
	obj41827_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41827_onTap_runningActionsCount = window.obj41827_onTap_runningActionsCount - 1;
if (window.obj41827_onTap_runningActionsCount < 0) {
	window.obj41827_onTap_runningActionsCount = 0;
} else if (window.obj41827_onTap_runningActionsCount == 0) {
	obj41827_onTap_actionGroup3();
}
	}
}









};
obj41827_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41827_onTap_activeActionGroupIndex = -1;
		$("#obj41827").trigger("obj41827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41827) {
				console.warn("de-queueing event obj41827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41827_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41907();
function runjs_41907() {
	window.obj41827_onTap_runningActionsCount = obj41827_onTap_runningActionsCount + 1;

	$("#obj41827").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41827_onTap_runningActionsCount = window.obj41827_onTap_runningActionsCount - 1;
if (window.obj41827_onTap_runningActionsCount < 0) {
	window.obj41827_onTap_runningActionsCount = 0;
} else if (window.obj41827_onTap_runningActionsCount == 0) {
	obj41827_onTap_actionGroup4();
}
	}, 1);
}







};
obj41827_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41827_onTap_activeActionGroupIndex = -1;
		$("#obj41827").trigger("obj41827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41827) {
				console.warn("de-queueing event obj41827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41827_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41908();
function switchText_41908() {
	window.obj41827_onTap_runningActionsCount = obj41827_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41827_onTap_runningActionsCount = window.obj41827_onTap_runningActionsCount - 1;
if (window.obj41827_onTap_runningActionsCount < 0) {
	window.obj41827_onTap_runningActionsCount = 0;
} else if (window.obj41827_onTap_runningActionsCount == 0) {
	obj41827_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41827_onTap_runningActionsCount = window.obj41827_onTap_runningActionsCount - 1;
if (window.obj41827_onTap_runningActionsCount < 0) {
	window.obj41827_onTap_runningActionsCount = 0;
} else if (window.obj41827_onTap_runningActionsCount == 0) {
	obj41827_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41827_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41827_onTap_activeActionGroupIndex = -1;
		$("#obj41827").trigger("obj41827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41827) {
				console.warn("de-queueing event obj41827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41827_onTap_activeActionGroupIndex = 5;
	





















};
obj41829_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41829_onTap_activeActionGroupIndex = -1;
		$("#obj41829").trigger("obj41829_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41829) {
				console.warn("de-queueing event obj41829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41829_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41914();
function runjs_41914() {
	window.obj41829_onTap_runningActionsCount = obj41829_onTap_runningActionsCount + 1;

	$("#obj41829").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41829_onTap_runningActionsCount = window.obj41829_onTap_runningActionsCount - 1;
if (window.obj41829_onTap_runningActionsCount < 0) {
	window.obj41829_onTap_runningActionsCount = 0;
} else if (window.obj41829_onTap_runningActionsCount == 0) {
	obj41829_onTap_actionGroup1();
}
	}, 1);
}







};
obj41829_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41829_onTap_activeActionGroupIndex = -1;
		$("#obj41829").trigger("obj41829_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41829) {
				console.warn("de-queueing event obj41829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41829_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41915();
function switchText_41915() {
	window.obj41829_onTap_runningActionsCount = obj41829_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41829_onTap_runningActionsCount = window.obj41829_onTap_runningActionsCount - 1;
if (window.obj41829_onTap_runningActionsCount < 0) {
	window.obj41829_onTap_runningActionsCount = 0;
} else if (window.obj41829_onTap_runningActionsCount == 0) {
	obj41829_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41829_onTap_runningActionsCount = window.obj41829_onTap_runningActionsCount - 1;
if (window.obj41829_onTap_runningActionsCount < 0) {
	window.obj41829_onTap_runningActionsCount = 0;
} else if (window.obj41829_onTap_runningActionsCount == 0) {
	obj41829_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41829_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41829_onTap_activeActionGroupIndex = -1;
		$("#obj41829").trigger("obj41829_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41829) {
				console.warn("de-queueing event obj41829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41829_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41916();
function playAudio_41916() {
	window.obj41829_onTap_runningActionsCount = obj41829_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41829_onTap_runningActionsCount = window.obj41829_onTap_runningActionsCount - 1;
if (window.obj41829_onTap_runningActionsCount < 0) {
	window.obj41829_onTap_runningActionsCount = 0;
} else if (window.obj41829_onTap_runningActionsCount == 0) {
	obj41829_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41829_onTap_runningActionsCount = window.obj41829_onTap_runningActionsCount - 1;
if (window.obj41829_onTap_runningActionsCount < 0) {
	window.obj41829_onTap_runningActionsCount = 0;
} else if (window.obj41829_onTap_runningActionsCount == 0) {
	obj41829_onTap_actionGroup3();
}
	}
}









};
obj41829_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41829_onTap_activeActionGroupIndex = -1;
		$("#obj41829").trigger("obj41829_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41829) {
				console.warn("de-queueing event obj41829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41829_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41917();
function runjs_41917() {
	window.obj41829_onTap_runningActionsCount = obj41829_onTap_runningActionsCount + 1;

	$("#obj41829").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41829_onTap_runningActionsCount = window.obj41829_onTap_runningActionsCount - 1;
if (window.obj41829_onTap_runningActionsCount < 0) {
	window.obj41829_onTap_runningActionsCount = 0;
} else if (window.obj41829_onTap_runningActionsCount == 0) {
	obj41829_onTap_actionGroup4();
}
	}, 1);
}







};
obj41829_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41829_onTap_activeActionGroupIndex = -1;
		$("#obj41829").trigger("obj41829_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41829) {
				console.warn("de-queueing event obj41829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41829_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41918();
function switchText_41918() {
	window.obj41829_onTap_runningActionsCount = obj41829_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41829_onTap_runningActionsCount = window.obj41829_onTap_runningActionsCount - 1;
if (window.obj41829_onTap_runningActionsCount < 0) {
	window.obj41829_onTap_runningActionsCount = 0;
} else if (window.obj41829_onTap_runningActionsCount == 0) {
	obj41829_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41829_onTap_runningActionsCount = window.obj41829_onTap_runningActionsCount - 1;
if (window.obj41829_onTap_runningActionsCount < 0) {
	window.obj41829_onTap_runningActionsCount = 0;
} else if (window.obj41829_onTap_runningActionsCount == 0) {
	obj41829_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41829_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41829_onTap_activeActionGroupIndex = -1;
		$("#obj41829").trigger("obj41829_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41829) {
				console.warn("de-queueing event obj41829." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41829").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41829_onTap_activeActionGroupIndex = 5;
	





















};
obj41831_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41831_onTap_activeActionGroupIndex = -1;
		$("#obj41831").trigger("obj41831_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41831) {
				console.warn("de-queueing event obj41831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41831_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_41880();
function switchText_41880() {
	window.obj41831_onTap_runningActionsCount = obj41831_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41831_onTap_runningActionsCount = window.obj41831_onTap_runningActionsCount - 1;
if (window.obj41831_onTap_runningActionsCount < 0) {
	window.obj41831_onTap_runningActionsCount = 0;
} else if (window.obj41831_onTap_runningActionsCount == 0) {
	obj41831_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41831_onTap_runningActionsCount = window.obj41831_onTap_runningActionsCount - 1;
if (window.obj41831_onTap_runningActionsCount < 0) {
	window.obj41831_onTap_runningActionsCount = 0;
} else if (window.obj41831_onTap_runningActionsCount == 0) {
	obj41831_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj41831_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41831_onTap_activeActionGroupIndex = -1;
		$("#obj41831").trigger("obj41831_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41831) {
				console.warn("de-queueing event obj41831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41831_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41879();
function runjs_41879() {
	window.obj41831_onTap_runningActionsCount = obj41831_onTap_runningActionsCount + 1;

	$("#obj41831").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj41831_onTap_runningActionsCount = window.obj41831_onTap_runningActionsCount - 1;
if (window.obj41831_onTap_runningActionsCount < 0) {
	window.obj41831_onTap_runningActionsCount = 0;
} else if (window.obj41831_onTap_runningActionsCount == 0) {
	obj41831_onTap_actionGroup2();
}
	}, 1);
}







};
obj41831_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41831_onTap_activeActionGroupIndex = -1;
		$("#obj41831").trigger("obj41831_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41831) {
				console.warn("de-queueing event obj41831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41831_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41874 
playAudio_41881();
function playAudio_41881() {
	window.obj41831_onTap_runningActionsCount = obj41831_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41874")[0];
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
		    window.obj41831_onTap_runningActionsCount = window.obj41831_onTap_runningActionsCount - 1;
if (window.obj41831_onTap_runningActionsCount < 0) {
	window.obj41831_onTap_runningActionsCount = 0;
} else if (window.obj41831_onTap_runningActionsCount == 0) {
	obj41831_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41831_onTap_runningActionsCount = window.obj41831_onTap_runningActionsCount - 1;
if (window.obj41831_onTap_runningActionsCount < 0) {
	window.obj41831_onTap_runningActionsCount = 0;
} else if (window.obj41831_onTap_runningActionsCount == 0) {
	obj41831_onTap_actionGroup3();
}
	}
}









};
obj41831_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41831_onTap_activeActionGroupIndex = -1;
		$("#obj41831").trigger("obj41831_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41831) {
				console.warn("de-queueing event obj41831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41831_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90509();
function switchText_90509() {
	window.obj41831_onTap_runningActionsCount = obj41831_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41831_onTap_runningActionsCount = window.obj41831_onTap_runningActionsCount - 1;
if (window.obj41831_onTap_runningActionsCount < 0) {
	window.obj41831_onTap_runningActionsCount = 0;
} else if (window.obj41831_onTap_runningActionsCount == 0) {
	obj41831_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41831_onTap_runningActionsCount = window.obj41831_onTap_runningActionsCount - 1;
if (window.obj41831_onTap_runningActionsCount < 0) {
	window.obj41831_onTap_runningActionsCount = 0;
} else if (window.obj41831_onTap_runningActionsCount == 0) {
	obj41831_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj41831_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41831_onTap_activeActionGroupIndex = -1;
		$("#obj41831").trigger("obj41831_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41831) {
				console.warn("de-queueing event obj41831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41831_onTap_activeActionGroupIndex = 4;
	





















};
obj41833_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41833_onTap_activeActionGroupIndex = -1;
		$("#obj41833").trigger("obj41833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41833) {
				console.warn("de-queueing event obj41833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41833_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_41883();
function switchText_41883() {
	window.obj41833_onTap_runningActionsCount = obj41833_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41833_onTap_runningActionsCount = window.obj41833_onTap_runningActionsCount - 1;
if (window.obj41833_onTap_runningActionsCount < 0) {
	window.obj41833_onTap_runningActionsCount = 0;
} else if (window.obj41833_onTap_runningActionsCount == 0) {
	obj41833_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41833_onTap_runningActionsCount = window.obj41833_onTap_runningActionsCount - 1;
if (window.obj41833_onTap_runningActionsCount < 0) {
	window.obj41833_onTap_runningActionsCount = 0;
} else if (window.obj41833_onTap_runningActionsCount == 0) {
	obj41833_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj41833_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41833_onTap_activeActionGroupIndex = -1;
		$("#obj41833").trigger("obj41833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41833) {
				console.warn("de-queueing event obj41833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41833_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41882();
function runjs_41882() {
	window.obj41833_onTap_runningActionsCount = obj41833_onTap_runningActionsCount + 1;

	$("#obj41833").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj41833_onTap_runningActionsCount = window.obj41833_onTap_runningActionsCount - 1;
if (window.obj41833_onTap_runningActionsCount < 0) {
	window.obj41833_onTap_runningActionsCount = 0;
} else if (window.obj41833_onTap_runningActionsCount == 0) {
	obj41833_onTap_actionGroup2();
}
	}, 1);
}







};
obj41833_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41833_onTap_activeActionGroupIndex = -1;
		$("#obj41833").trigger("obj41833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41833) {
				console.warn("de-queueing event obj41833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41833_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41874 
playAudio_41884();
function playAudio_41884() {
	window.obj41833_onTap_runningActionsCount = obj41833_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41874")[0];
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
		    window.obj41833_onTap_runningActionsCount = window.obj41833_onTap_runningActionsCount - 1;
if (window.obj41833_onTap_runningActionsCount < 0) {
	window.obj41833_onTap_runningActionsCount = 0;
} else if (window.obj41833_onTap_runningActionsCount == 0) {
	obj41833_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41833_onTap_runningActionsCount = window.obj41833_onTap_runningActionsCount - 1;
if (window.obj41833_onTap_runningActionsCount < 0) {
	window.obj41833_onTap_runningActionsCount = 0;
} else if (window.obj41833_onTap_runningActionsCount == 0) {
	obj41833_onTap_actionGroup3();
}
	}
}









};
obj41833_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41833_onTap_activeActionGroupIndex = -1;
		$("#obj41833").trigger("obj41833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41833) {
				console.warn("de-queueing event obj41833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41833_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90511();
function switchText_90511() {
	window.obj41833_onTap_runningActionsCount = obj41833_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41833_onTap_runningActionsCount = window.obj41833_onTap_runningActionsCount - 1;
if (window.obj41833_onTap_runningActionsCount < 0) {
	window.obj41833_onTap_runningActionsCount = 0;
} else if (window.obj41833_onTap_runningActionsCount == 0) {
	obj41833_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41833_onTap_runningActionsCount = window.obj41833_onTap_runningActionsCount - 1;
if (window.obj41833_onTap_runningActionsCount < 0) {
	window.obj41833_onTap_runningActionsCount = 0;
} else if (window.obj41833_onTap_runningActionsCount == 0) {
	obj41833_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj41833_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41833_onTap_activeActionGroupIndex = -1;
		$("#obj41833").trigger("obj41833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41833) {
				console.warn("de-queueing event obj41833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41833_onTap_activeActionGroupIndex = 4;
	





















};
obj41837_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41837_onTap_activeActionGroupIndex = -1;
		$("#obj41837").trigger("obj41837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41837) {
				console.warn("de-queueing event obj41837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41837_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41924();
function runjs_41924() {
	window.obj41837_onTap_runningActionsCount = obj41837_onTap_runningActionsCount + 1;

	$("#obj41837").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41837_onTap_runningActionsCount = window.obj41837_onTap_runningActionsCount - 1;
if (window.obj41837_onTap_runningActionsCount < 0) {
	window.obj41837_onTap_runningActionsCount = 0;
} else if (window.obj41837_onTap_runningActionsCount == 0) {
	obj41837_onTap_actionGroup1();
}
	}, 1);
}







};
obj41837_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41837_onTap_activeActionGroupIndex = -1;
		$("#obj41837").trigger("obj41837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41837) {
				console.warn("de-queueing event obj41837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41837_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41925();
function switchText_41925() {
	window.obj41837_onTap_runningActionsCount = obj41837_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41837_onTap_runningActionsCount = window.obj41837_onTap_runningActionsCount - 1;
if (window.obj41837_onTap_runningActionsCount < 0) {
	window.obj41837_onTap_runningActionsCount = 0;
} else if (window.obj41837_onTap_runningActionsCount == 0) {
	obj41837_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41837_onTap_runningActionsCount = window.obj41837_onTap_runningActionsCount - 1;
if (window.obj41837_onTap_runningActionsCount < 0) {
	window.obj41837_onTap_runningActionsCount = 0;
} else if (window.obj41837_onTap_runningActionsCount == 0) {
	obj41837_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41837_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41837_onTap_activeActionGroupIndex = -1;
		$("#obj41837").trigger("obj41837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41837) {
				console.warn("de-queueing event obj41837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41837_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41926();
function playAudio_41926() {
	window.obj41837_onTap_runningActionsCount = obj41837_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41837_onTap_runningActionsCount = window.obj41837_onTap_runningActionsCount - 1;
if (window.obj41837_onTap_runningActionsCount < 0) {
	window.obj41837_onTap_runningActionsCount = 0;
} else if (window.obj41837_onTap_runningActionsCount == 0) {
	obj41837_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41837_onTap_runningActionsCount = window.obj41837_onTap_runningActionsCount - 1;
if (window.obj41837_onTap_runningActionsCount < 0) {
	window.obj41837_onTap_runningActionsCount = 0;
} else if (window.obj41837_onTap_runningActionsCount == 0) {
	obj41837_onTap_actionGroup3();
}
	}
}









};
obj41837_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41837_onTap_activeActionGroupIndex = -1;
		$("#obj41837").trigger("obj41837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41837) {
				console.warn("de-queueing event obj41837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41837_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41927();
function runjs_41927() {
	window.obj41837_onTap_runningActionsCount = obj41837_onTap_runningActionsCount + 1;

	$("#obj41837").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41837_onTap_runningActionsCount = window.obj41837_onTap_runningActionsCount - 1;
if (window.obj41837_onTap_runningActionsCount < 0) {
	window.obj41837_onTap_runningActionsCount = 0;
} else if (window.obj41837_onTap_runningActionsCount == 0) {
	obj41837_onTap_actionGroup4();
}
	}, 1);
}







};
obj41837_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41837_onTap_activeActionGroupIndex = -1;
		$("#obj41837").trigger("obj41837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41837) {
				console.warn("de-queueing event obj41837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41837_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41928();
function switchText_41928() {
	window.obj41837_onTap_runningActionsCount = obj41837_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41837_onTap_runningActionsCount = window.obj41837_onTap_runningActionsCount - 1;
if (window.obj41837_onTap_runningActionsCount < 0) {
	window.obj41837_onTap_runningActionsCount = 0;
} else if (window.obj41837_onTap_runningActionsCount == 0) {
	obj41837_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41837_onTap_runningActionsCount = window.obj41837_onTap_runningActionsCount - 1;
if (window.obj41837_onTap_runningActionsCount < 0) {
	window.obj41837_onTap_runningActionsCount = 0;
} else if (window.obj41837_onTap_runningActionsCount == 0) {
	obj41837_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41837_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41837_onTap_activeActionGroupIndex = -1;
		$("#obj41837").trigger("obj41837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41837) {
				console.warn("de-queueing event obj41837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41837_onTap_activeActionGroupIndex = 5;
	





















};
obj41839_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41839_onTap_activeActionGroupIndex = -1;
		$("#obj41839").trigger("obj41839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41839) {
				console.warn("de-queueing event obj41839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41839_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41934();
function runjs_41934() {
	window.obj41839_onTap_runningActionsCount = obj41839_onTap_runningActionsCount + 1;

	$("#obj41839").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41839_onTap_runningActionsCount = window.obj41839_onTap_runningActionsCount - 1;
if (window.obj41839_onTap_runningActionsCount < 0) {
	window.obj41839_onTap_runningActionsCount = 0;
} else if (window.obj41839_onTap_runningActionsCount == 0) {
	obj41839_onTap_actionGroup1();
}
	}, 1);
}







};
obj41839_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41839_onTap_activeActionGroupIndex = -1;
		$("#obj41839").trigger("obj41839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41839) {
				console.warn("de-queueing event obj41839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41839_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41935();
function switchText_41935() {
	window.obj41839_onTap_runningActionsCount = obj41839_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41839_onTap_runningActionsCount = window.obj41839_onTap_runningActionsCount - 1;
if (window.obj41839_onTap_runningActionsCount < 0) {
	window.obj41839_onTap_runningActionsCount = 0;
} else if (window.obj41839_onTap_runningActionsCount == 0) {
	obj41839_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41839_onTap_runningActionsCount = window.obj41839_onTap_runningActionsCount - 1;
if (window.obj41839_onTap_runningActionsCount < 0) {
	window.obj41839_onTap_runningActionsCount = 0;
} else if (window.obj41839_onTap_runningActionsCount == 0) {
	obj41839_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41839_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41839_onTap_activeActionGroupIndex = -1;
		$("#obj41839").trigger("obj41839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41839) {
				console.warn("de-queueing event obj41839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41839_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41936();
function playAudio_41936() {
	window.obj41839_onTap_runningActionsCount = obj41839_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41839_onTap_runningActionsCount = window.obj41839_onTap_runningActionsCount - 1;
if (window.obj41839_onTap_runningActionsCount < 0) {
	window.obj41839_onTap_runningActionsCount = 0;
} else if (window.obj41839_onTap_runningActionsCount == 0) {
	obj41839_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41839_onTap_runningActionsCount = window.obj41839_onTap_runningActionsCount - 1;
if (window.obj41839_onTap_runningActionsCount < 0) {
	window.obj41839_onTap_runningActionsCount = 0;
} else if (window.obj41839_onTap_runningActionsCount == 0) {
	obj41839_onTap_actionGroup3();
}
	}
}









};
obj41839_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41839_onTap_activeActionGroupIndex = -1;
		$("#obj41839").trigger("obj41839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41839) {
				console.warn("de-queueing event obj41839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41839_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41937();
function runjs_41937() {
	window.obj41839_onTap_runningActionsCount = obj41839_onTap_runningActionsCount + 1;

	$("#obj41839").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41839_onTap_runningActionsCount = window.obj41839_onTap_runningActionsCount - 1;
if (window.obj41839_onTap_runningActionsCount < 0) {
	window.obj41839_onTap_runningActionsCount = 0;
} else if (window.obj41839_onTap_runningActionsCount == 0) {
	obj41839_onTap_actionGroup4();
}
	}, 1);
}







};
obj41839_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41839_onTap_activeActionGroupIndex = -1;
		$("#obj41839").trigger("obj41839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41839) {
				console.warn("de-queueing event obj41839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41839_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41938();
function switchText_41938() {
	window.obj41839_onTap_runningActionsCount = obj41839_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41839_onTap_runningActionsCount = window.obj41839_onTap_runningActionsCount - 1;
if (window.obj41839_onTap_runningActionsCount < 0) {
	window.obj41839_onTap_runningActionsCount = 0;
} else if (window.obj41839_onTap_runningActionsCount == 0) {
	obj41839_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41839_onTap_runningActionsCount = window.obj41839_onTap_runningActionsCount - 1;
if (window.obj41839_onTap_runningActionsCount < 0) {
	window.obj41839_onTap_runningActionsCount = 0;
} else if (window.obj41839_onTap_runningActionsCount == 0) {
	obj41839_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41839_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41839_onTap_activeActionGroupIndex = -1;
		$("#obj41839").trigger("obj41839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41839) {
				console.warn("de-queueing event obj41839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41839_onTap_activeActionGroupIndex = 5;
	





















};
obj41841_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41841_onTap_activeActionGroupIndex = -1;
		$("#obj41841").trigger("obj41841_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41841) {
				console.warn("de-queueing event obj41841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41841_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_41886();
function switchText_41886() {
	window.obj41841_onTap_runningActionsCount = obj41841_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41841_onTap_runningActionsCount = window.obj41841_onTap_runningActionsCount - 1;
if (window.obj41841_onTap_runningActionsCount < 0) {
	window.obj41841_onTap_runningActionsCount = 0;
} else if (window.obj41841_onTap_runningActionsCount == 0) {
	obj41841_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41841_onTap_runningActionsCount = window.obj41841_onTap_runningActionsCount - 1;
if (window.obj41841_onTap_runningActionsCount < 0) {
	window.obj41841_onTap_runningActionsCount = 0;
} else if (window.obj41841_onTap_runningActionsCount == 0) {
	obj41841_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj41841_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41841_onTap_activeActionGroupIndex = -1;
		$("#obj41841").trigger("obj41841_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41841) {
				console.warn("de-queueing event obj41841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41841_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41885();
function runjs_41885() {
	window.obj41841_onTap_runningActionsCount = obj41841_onTap_runningActionsCount + 1;

	$("#obj41841").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj41841_onTap_runningActionsCount = window.obj41841_onTap_runningActionsCount - 1;
if (window.obj41841_onTap_runningActionsCount < 0) {
	window.obj41841_onTap_runningActionsCount = 0;
} else if (window.obj41841_onTap_runningActionsCount == 0) {
	obj41841_onTap_actionGroup2();
}
	}, 1);
}







};
obj41841_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41841_onTap_activeActionGroupIndex = -1;
		$("#obj41841").trigger("obj41841_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41841) {
				console.warn("de-queueing event obj41841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41841_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41874 
playAudio_41887();
function playAudio_41887() {
	window.obj41841_onTap_runningActionsCount = obj41841_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41874")[0];
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
		    window.obj41841_onTap_runningActionsCount = window.obj41841_onTap_runningActionsCount - 1;
if (window.obj41841_onTap_runningActionsCount < 0) {
	window.obj41841_onTap_runningActionsCount = 0;
} else if (window.obj41841_onTap_runningActionsCount == 0) {
	obj41841_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41841_onTap_runningActionsCount = window.obj41841_onTap_runningActionsCount - 1;
if (window.obj41841_onTap_runningActionsCount < 0) {
	window.obj41841_onTap_runningActionsCount = 0;
} else if (window.obj41841_onTap_runningActionsCount == 0) {
	obj41841_onTap_actionGroup3();
}
	}
}









};
obj41841_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41841_onTap_activeActionGroupIndex = -1;
		$("#obj41841").trigger("obj41841_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41841) {
				console.warn("de-queueing event obj41841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41841_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90512();
function switchText_90512() {
	window.obj41841_onTap_runningActionsCount = obj41841_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41841_onTap_runningActionsCount = window.obj41841_onTap_runningActionsCount - 1;
if (window.obj41841_onTap_runningActionsCount < 0) {
	window.obj41841_onTap_runningActionsCount = 0;
} else if (window.obj41841_onTap_runningActionsCount == 0) {
	obj41841_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41841_onTap_runningActionsCount = window.obj41841_onTap_runningActionsCount - 1;
if (window.obj41841_onTap_runningActionsCount < 0) {
	window.obj41841_onTap_runningActionsCount = 0;
} else if (window.obj41841_onTap_runningActionsCount == 0) {
	obj41841_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj41841_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41841_onTap_activeActionGroupIndex = -1;
		$("#obj41841").trigger("obj41841_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41841) {
				console.warn("de-queueing event obj41841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41841_onTap_activeActionGroupIndex = 4;
	





















};
obj41835_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41835_onTap_activeActionGroupIndex = -1;
		$("#obj41835").trigger("obj41835_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41835) {
				console.warn("de-queueing event obj41835." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41835").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41835_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41944();
function runjs_41944() {
	window.obj41835_onTap_runningActionsCount = obj41835_onTap_runningActionsCount + 1;

	$("#obj41835").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41835_onTap_runningActionsCount = window.obj41835_onTap_runningActionsCount - 1;
if (window.obj41835_onTap_runningActionsCount < 0) {
	window.obj41835_onTap_runningActionsCount = 0;
} else if (window.obj41835_onTap_runningActionsCount == 0) {
	obj41835_onTap_actionGroup1();
}
	}, 1);
}







};
obj41835_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41835_onTap_activeActionGroupIndex = -1;
		$("#obj41835").trigger("obj41835_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41835) {
				console.warn("de-queueing event obj41835." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41835").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41835_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41945();
function switchText_41945() {
	window.obj41835_onTap_runningActionsCount = obj41835_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41835_onTap_runningActionsCount = window.obj41835_onTap_runningActionsCount - 1;
if (window.obj41835_onTap_runningActionsCount < 0) {
	window.obj41835_onTap_runningActionsCount = 0;
} else if (window.obj41835_onTap_runningActionsCount == 0) {
	obj41835_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41835_onTap_runningActionsCount = window.obj41835_onTap_runningActionsCount - 1;
if (window.obj41835_onTap_runningActionsCount < 0) {
	window.obj41835_onTap_runningActionsCount = 0;
} else if (window.obj41835_onTap_runningActionsCount == 0) {
	obj41835_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41835_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41835_onTap_activeActionGroupIndex = -1;
		$("#obj41835").trigger("obj41835_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41835) {
				console.warn("de-queueing event obj41835." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41835").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41835_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41946();
function playAudio_41946() {
	window.obj41835_onTap_runningActionsCount = obj41835_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41835_onTap_runningActionsCount = window.obj41835_onTap_runningActionsCount - 1;
if (window.obj41835_onTap_runningActionsCount < 0) {
	window.obj41835_onTap_runningActionsCount = 0;
} else if (window.obj41835_onTap_runningActionsCount == 0) {
	obj41835_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41835_onTap_runningActionsCount = window.obj41835_onTap_runningActionsCount - 1;
if (window.obj41835_onTap_runningActionsCount < 0) {
	window.obj41835_onTap_runningActionsCount = 0;
} else if (window.obj41835_onTap_runningActionsCount == 0) {
	obj41835_onTap_actionGroup3();
}
	}
}









};
obj41835_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41835_onTap_activeActionGroupIndex = -1;
		$("#obj41835").trigger("obj41835_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41835) {
				console.warn("de-queueing event obj41835." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41835").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41835_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41947();
function runjs_41947() {
	window.obj41835_onTap_runningActionsCount = obj41835_onTap_runningActionsCount + 1;

	$("#obj41835").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41835_onTap_runningActionsCount = window.obj41835_onTap_runningActionsCount - 1;
if (window.obj41835_onTap_runningActionsCount < 0) {
	window.obj41835_onTap_runningActionsCount = 0;
} else if (window.obj41835_onTap_runningActionsCount == 0) {
	obj41835_onTap_actionGroup4();
}
	}, 1);
}







};
obj41835_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41835_onTap_activeActionGroupIndex = -1;
		$("#obj41835").trigger("obj41835_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41835) {
				console.warn("de-queueing event obj41835." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41835").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41835_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41948();
function switchText_41948() {
	window.obj41835_onTap_runningActionsCount = obj41835_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41835_onTap_runningActionsCount = window.obj41835_onTap_runningActionsCount - 1;
if (window.obj41835_onTap_runningActionsCount < 0) {
	window.obj41835_onTap_runningActionsCount = 0;
} else if (window.obj41835_onTap_runningActionsCount == 0) {
	obj41835_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41835_onTap_runningActionsCount = window.obj41835_onTap_runningActionsCount - 1;
if (window.obj41835_onTap_runningActionsCount < 0) {
	window.obj41835_onTap_runningActionsCount = 0;
} else if (window.obj41835_onTap_runningActionsCount == 0) {
	obj41835_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41835_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41835_onTap_activeActionGroupIndex = -1;
		$("#obj41835").trigger("obj41835_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41835) {
				console.warn("de-queueing event obj41835." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41835").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41835_onTap_activeActionGroupIndex = 5;
	





















};
obj41845_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41845_onTap_activeActionGroupIndex = -1;
		$("#obj41845").trigger("obj41845_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41845) {
				console.warn("de-queueing event obj41845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41845_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41954();
function runjs_41954() {
	window.obj41845_onTap_runningActionsCount = obj41845_onTap_runningActionsCount + 1;

	$("#obj41845").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41845_onTap_runningActionsCount = window.obj41845_onTap_runningActionsCount - 1;
if (window.obj41845_onTap_runningActionsCount < 0) {
	window.obj41845_onTap_runningActionsCount = 0;
} else if (window.obj41845_onTap_runningActionsCount == 0) {
	obj41845_onTap_actionGroup1();
}
	}, 1);
}







};
obj41845_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41845_onTap_activeActionGroupIndex = -1;
		$("#obj41845").trigger("obj41845_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41845) {
				console.warn("de-queueing event obj41845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41845_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41955();
function switchText_41955() {
	window.obj41845_onTap_runningActionsCount = obj41845_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41845_onTap_runningActionsCount = window.obj41845_onTap_runningActionsCount - 1;
if (window.obj41845_onTap_runningActionsCount < 0) {
	window.obj41845_onTap_runningActionsCount = 0;
} else if (window.obj41845_onTap_runningActionsCount == 0) {
	obj41845_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41845_onTap_runningActionsCount = window.obj41845_onTap_runningActionsCount - 1;
if (window.obj41845_onTap_runningActionsCount < 0) {
	window.obj41845_onTap_runningActionsCount = 0;
} else if (window.obj41845_onTap_runningActionsCount == 0) {
	obj41845_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41845_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41845_onTap_activeActionGroupIndex = -1;
		$("#obj41845").trigger("obj41845_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41845) {
				console.warn("de-queueing event obj41845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41845_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41956();
function playAudio_41956() {
	window.obj41845_onTap_runningActionsCount = obj41845_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41845_onTap_runningActionsCount = window.obj41845_onTap_runningActionsCount - 1;
if (window.obj41845_onTap_runningActionsCount < 0) {
	window.obj41845_onTap_runningActionsCount = 0;
} else if (window.obj41845_onTap_runningActionsCount == 0) {
	obj41845_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41845_onTap_runningActionsCount = window.obj41845_onTap_runningActionsCount - 1;
if (window.obj41845_onTap_runningActionsCount < 0) {
	window.obj41845_onTap_runningActionsCount = 0;
} else if (window.obj41845_onTap_runningActionsCount == 0) {
	obj41845_onTap_actionGroup3();
}
	}
}









};
obj41845_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41845_onTap_activeActionGroupIndex = -1;
		$("#obj41845").trigger("obj41845_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41845) {
				console.warn("de-queueing event obj41845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41845_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41957();
function runjs_41957() {
	window.obj41845_onTap_runningActionsCount = obj41845_onTap_runningActionsCount + 1;

	$("#obj41845").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41845_onTap_runningActionsCount = window.obj41845_onTap_runningActionsCount - 1;
if (window.obj41845_onTap_runningActionsCount < 0) {
	window.obj41845_onTap_runningActionsCount = 0;
} else if (window.obj41845_onTap_runningActionsCount == 0) {
	obj41845_onTap_actionGroup4();
}
	}, 1);
}







};
obj41845_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41845_onTap_activeActionGroupIndex = -1;
		$("#obj41845").trigger("obj41845_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41845) {
				console.warn("de-queueing event obj41845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41845_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41958();
function switchText_41958() {
	window.obj41845_onTap_runningActionsCount = obj41845_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41845_onTap_runningActionsCount = window.obj41845_onTap_runningActionsCount - 1;
if (window.obj41845_onTap_runningActionsCount < 0) {
	window.obj41845_onTap_runningActionsCount = 0;
} else if (window.obj41845_onTap_runningActionsCount == 0) {
	obj41845_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41845_onTap_runningActionsCount = window.obj41845_onTap_runningActionsCount - 1;
if (window.obj41845_onTap_runningActionsCount < 0) {
	window.obj41845_onTap_runningActionsCount = 0;
} else if (window.obj41845_onTap_runningActionsCount == 0) {
	obj41845_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41845_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41845_onTap_activeActionGroupIndex = -1;
		$("#obj41845").trigger("obj41845_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41845) {
				console.warn("de-queueing event obj41845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41845_onTap_activeActionGroupIndex = 5;
	





















};
obj41843_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41843_onTap_activeActionGroupIndex = -1;
		$("#obj41843").trigger("obj41843_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41843) {
				console.warn("de-queueing event obj41843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41843_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41979();
function runjs_41979() {
	window.obj41843_onTap_runningActionsCount = obj41843_onTap_runningActionsCount + 1;

	$("#obj41843").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41843_onTap_runningActionsCount = window.obj41843_onTap_runningActionsCount - 1;
if (window.obj41843_onTap_runningActionsCount < 0) {
	window.obj41843_onTap_runningActionsCount = 0;
} else if (window.obj41843_onTap_runningActionsCount == 0) {
	obj41843_onTap_actionGroup1();
}
	}, 1);
}







};
obj41843_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41843_onTap_activeActionGroupIndex = -1;
		$("#obj41843").trigger("obj41843_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41843) {
				console.warn("de-queueing event obj41843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41843_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41980();
function switchText_41980() {
	window.obj41843_onTap_runningActionsCount = obj41843_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41843_onTap_runningActionsCount = window.obj41843_onTap_runningActionsCount - 1;
if (window.obj41843_onTap_runningActionsCount < 0) {
	window.obj41843_onTap_runningActionsCount = 0;
} else if (window.obj41843_onTap_runningActionsCount == 0) {
	obj41843_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41843_onTap_runningActionsCount = window.obj41843_onTap_runningActionsCount - 1;
if (window.obj41843_onTap_runningActionsCount < 0) {
	window.obj41843_onTap_runningActionsCount = 0;
} else if (window.obj41843_onTap_runningActionsCount == 0) {
	obj41843_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41843_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41843_onTap_activeActionGroupIndex = -1;
		$("#obj41843").trigger("obj41843_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41843) {
				console.warn("de-queueing event obj41843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41843_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41981();
function playAudio_41981() {
	window.obj41843_onTap_runningActionsCount = obj41843_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41843_onTap_runningActionsCount = window.obj41843_onTap_runningActionsCount - 1;
if (window.obj41843_onTap_runningActionsCount < 0) {
	window.obj41843_onTap_runningActionsCount = 0;
} else if (window.obj41843_onTap_runningActionsCount == 0) {
	obj41843_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41843_onTap_runningActionsCount = window.obj41843_onTap_runningActionsCount - 1;
if (window.obj41843_onTap_runningActionsCount < 0) {
	window.obj41843_onTap_runningActionsCount = 0;
} else if (window.obj41843_onTap_runningActionsCount == 0) {
	obj41843_onTap_actionGroup3();
}
	}
}









};
obj41843_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41843_onTap_activeActionGroupIndex = -1;
		$("#obj41843").trigger("obj41843_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41843) {
				console.warn("de-queueing event obj41843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41843_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41982();
function runjs_41982() {
	window.obj41843_onTap_runningActionsCount = obj41843_onTap_runningActionsCount + 1;

	$("#obj41843").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41843_onTap_runningActionsCount = window.obj41843_onTap_runningActionsCount - 1;
if (window.obj41843_onTap_runningActionsCount < 0) {
	window.obj41843_onTap_runningActionsCount = 0;
} else if (window.obj41843_onTap_runningActionsCount == 0) {
	obj41843_onTap_actionGroup4();
}
	}, 1);
}







};
obj41843_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41843_onTap_activeActionGroupIndex = -1;
		$("#obj41843").trigger("obj41843_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41843) {
				console.warn("de-queueing event obj41843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41843_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41983();
function switchText_41983() {
	window.obj41843_onTap_runningActionsCount = obj41843_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41843_onTap_runningActionsCount = window.obj41843_onTap_runningActionsCount - 1;
if (window.obj41843_onTap_runningActionsCount < 0) {
	window.obj41843_onTap_runningActionsCount = 0;
} else if (window.obj41843_onTap_runningActionsCount == 0) {
	obj41843_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41843_onTap_runningActionsCount = window.obj41843_onTap_runningActionsCount - 1;
if (window.obj41843_onTap_runningActionsCount < 0) {
	window.obj41843_onTap_runningActionsCount = 0;
} else if (window.obj41843_onTap_runningActionsCount == 0) {
	obj41843_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41843_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41843_onTap_activeActionGroupIndex = -1;
		$("#obj41843").trigger("obj41843_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41843) {
				console.warn("de-queueing event obj41843." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41843").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41843_onTap_activeActionGroupIndex = 5;
	





















};
obj41847_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41847_onTap_activeActionGroupIndex = -1;
		$("#obj41847").trigger("obj41847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41847) {
				console.warn("de-queueing event obj41847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41847_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_41889();
function switchText_41889() {
	window.obj41847_onTap_runningActionsCount = obj41847_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41847_onTap_runningActionsCount = window.obj41847_onTap_runningActionsCount - 1;
if (window.obj41847_onTap_runningActionsCount < 0) {
	window.obj41847_onTap_runningActionsCount = 0;
} else if (window.obj41847_onTap_runningActionsCount == 0) {
	obj41847_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41847_onTap_runningActionsCount = window.obj41847_onTap_runningActionsCount - 1;
if (window.obj41847_onTap_runningActionsCount < 0) {
	window.obj41847_onTap_runningActionsCount = 0;
} else if (window.obj41847_onTap_runningActionsCount == 0) {
	obj41847_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj41847_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41847_onTap_activeActionGroupIndex = -1;
		$("#obj41847").trigger("obj41847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41847) {
				console.warn("de-queueing event obj41847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41847_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41888();
function runjs_41888() {
	window.obj41847_onTap_runningActionsCount = obj41847_onTap_runningActionsCount + 1;

	$("#obj41823").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj41847_onTap_runningActionsCount = window.obj41847_onTap_runningActionsCount - 1;
if (window.obj41847_onTap_runningActionsCount < 0) {
	window.obj41847_onTap_runningActionsCount = 0;
} else if (window.obj41847_onTap_runningActionsCount == 0) {
	obj41847_onTap_actionGroup2();
}
	}, 1);
}







};
obj41847_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41847_onTap_activeActionGroupIndex = -1;
		$("#obj41847").trigger("obj41847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41847) {
				console.warn("de-queueing event obj41847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41847_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41874 
playAudio_41890();
function playAudio_41890() {
	window.obj41847_onTap_runningActionsCount = obj41847_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41874")[0];
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
		    window.obj41847_onTap_runningActionsCount = window.obj41847_onTap_runningActionsCount - 1;
if (window.obj41847_onTap_runningActionsCount < 0) {
	window.obj41847_onTap_runningActionsCount = 0;
} else if (window.obj41847_onTap_runningActionsCount == 0) {
	obj41847_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41847_onTap_runningActionsCount = window.obj41847_onTap_runningActionsCount - 1;
if (window.obj41847_onTap_runningActionsCount < 0) {
	window.obj41847_onTap_runningActionsCount = 0;
} else if (window.obj41847_onTap_runningActionsCount == 0) {
	obj41847_onTap_actionGroup3();
}
	}
}









};
obj41847_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41847_onTap_activeActionGroupIndex = -1;
		$("#obj41847").trigger("obj41847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41847) {
				console.warn("de-queueing event obj41847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41847_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90506();
function switchText_90506() {
	window.obj41847_onTap_runningActionsCount = obj41847_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41847_onTap_runningActionsCount = window.obj41847_onTap_runningActionsCount - 1;
if (window.obj41847_onTap_runningActionsCount < 0) {
	window.obj41847_onTap_runningActionsCount = 0;
} else if (window.obj41847_onTap_runningActionsCount == 0) {
	obj41847_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41847_onTap_runningActionsCount = window.obj41847_onTap_runningActionsCount - 1;
if (window.obj41847_onTap_runningActionsCount < 0) {
	window.obj41847_onTap_runningActionsCount = 0;
} else if (window.obj41847_onTap_runningActionsCount == 0) {
	obj41847_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj41847_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41847_onTap_activeActionGroupIndex = -1;
		$("#obj41847").trigger("obj41847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41847) {
				console.warn("de-queueing event obj41847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41847_onTap_activeActionGroupIndex = 4;
	





















};
obj41849_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41849_onTap_activeActionGroupIndex = -1;
		$("#obj41849").trigger("obj41849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41849) {
				console.warn("de-queueing event obj41849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41849_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_41892();
function switchText_41892() {
	window.obj41849_onTap_runningActionsCount = obj41849_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41849_onTap_runningActionsCount = window.obj41849_onTap_runningActionsCount - 1;
if (window.obj41849_onTap_runningActionsCount < 0) {
	window.obj41849_onTap_runningActionsCount = 0;
} else if (window.obj41849_onTap_runningActionsCount == 0) {
	obj41849_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41849_onTap_runningActionsCount = window.obj41849_onTap_runningActionsCount - 1;
if (window.obj41849_onTap_runningActionsCount < 0) {
	window.obj41849_onTap_runningActionsCount = 0;
} else if (window.obj41849_onTap_runningActionsCount == 0) {
	obj41849_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj41849_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41849_onTap_activeActionGroupIndex = -1;
		$("#obj41849").trigger("obj41849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41849) {
				console.warn("de-queueing event obj41849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41849_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41891();
function runjs_41891() {
	window.obj41849_onTap_runningActionsCount = obj41849_onTap_runningActionsCount + 1;

	$("#obj41825").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj41849_onTap_runningActionsCount = window.obj41849_onTap_runningActionsCount - 1;
if (window.obj41849_onTap_runningActionsCount < 0) {
	window.obj41849_onTap_runningActionsCount = 0;
} else if (window.obj41849_onTap_runningActionsCount == 0) {
	obj41849_onTap_actionGroup2();
}
	}, 1);
}







};
obj41849_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41849_onTap_activeActionGroupIndex = -1;
		$("#obj41849").trigger("obj41849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41849) {
				console.warn("de-queueing event obj41849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41849_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41874 
playAudio_41893();
function playAudio_41893() {
	window.obj41849_onTap_runningActionsCount = obj41849_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41874")[0];
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
		    window.obj41849_onTap_runningActionsCount = window.obj41849_onTap_runningActionsCount - 1;
if (window.obj41849_onTap_runningActionsCount < 0) {
	window.obj41849_onTap_runningActionsCount = 0;
} else if (window.obj41849_onTap_runningActionsCount == 0) {
	obj41849_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41849_onTap_runningActionsCount = window.obj41849_onTap_runningActionsCount - 1;
if (window.obj41849_onTap_runningActionsCount < 0) {
	window.obj41849_onTap_runningActionsCount = 0;
} else if (window.obj41849_onTap_runningActionsCount == 0) {
	obj41849_onTap_actionGroup3();
}
	}
}









};
obj41849_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41849_onTap_activeActionGroupIndex = -1;
		$("#obj41849").trigger("obj41849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41849) {
				console.warn("de-queueing event obj41849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41849_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90508();
function switchText_90508() {
	window.obj41849_onTap_runningActionsCount = obj41849_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41849_onTap_runningActionsCount = window.obj41849_onTap_runningActionsCount - 1;
if (window.obj41849_onTap_runningActionsCount < 0) {
	window.obj41849_onTap_runningActionsCount = 0;
} else if (window.obj41849_onTap_runningActionsCount == 0) {
	obj41849_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41849_onTap_runningActionsCount = window.obj41849_onTap_runningActionsCount - 1;
if (window.obj41849_onTap_runningActionsCount < 0) {
	window.obj41849_onTap_runningActionsCount = 0;
} else if (window.obj41849_onTap_runningActionsCount == 0) {
	obj41849_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj41849_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41849_onTap_activeActionGroupIndex = -1;
		$("#obj41849").trigger("obj41849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41849) {
				console.warn("de-queueing event obj41849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41849_onTap_activeActionGroupIndex = 4;
	





















};
obj41851_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41851_onTap_activeActionGroupIndex = -1;
		$("#obj41851").trigger("obj41851_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41851) {
				console.warn("de-queueing event obj41851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41851_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41909();
function runjs_41909() {
	window.obj41851_onTap_runningActionsCount = obj41851_onTap_runningActionsCount + 1;

	$("#obj41827").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41851_onTap_runningActionsCount = window.obj41851_onTap_runningActionsCount - 1;
if (window.obj41851_onTap_runningActionsCount < 0) {
	window.obj41851_onTap_runningActionsCount = 0;
} else if (window.obj41851_onTap_runningActionsCount == 0) {
	obj41851_onTap_actionGroup1();
}
	}, 1);
}







};
obj41851_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41851_onTap_activeActionGroupIndex = -1;
		$("#obj41851").trigger("obj41851_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41851) {
				console.warn("de-queueing event obj41851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41851_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41910();
function switchText_41910() {
	window.obj41851_onTap_runningActionsCount = obj41851_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41851_onTap_runningActionsCount = window.obj41851_onTap_runningActionsCount - 1;
if (window.obj41851_onTap_runningActionsCount < 0) {
	window.obj41851_onTap_runningActionsCount = 0;
} else if (window.obj41851_onTap_runningActionsCount == 0) {
	obj41851_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41851_onTap_runningActionsCount = window.obj41851_onTap_runningActionsCount - 1;
if (window.obj41851_onTap_runningActionsCount < 0) {
	window.obj41851_onTap_runningActionsCount = 0;
} else if (window.obj41851_onTap_runningActionsCount == 0) {
	obj41851_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41851_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41851_onTap_activeActionGroupIndex = -1;
		$("#obj41851").trigger("obj41851_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41851) {
				console.warn("de-queueing event obj41851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41851_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41911();
function playAudio_41911() {
	window.obj41851_onTap_runningActionsCount = obj41851_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41851_onTap_runningActionsCount = window.obj41851_onTap_runningActionsCount - 1;
if (window.obj41851_onTap_runningActionsCount < 0) {
	window.obj41851_onTap_runningActionsCount = 0;
} else if (window.obj41851_onTap_runningActionsCount == 0) {
	obj41851_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41851_onTap_runningActionsCount = window.obj41851_onTap_runningActionsCount - 1;
if (window.obj41851_onTap_runningActionsCount < 0) {
	window.obj41851_onTap_runningActionsCount = 0;
} else if (window.obj41851_onTap_runningActionsCount == 0) {
	obj41851_onTap_actionGroup3();
}
	}
}









};
obj41851_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41851_onTap_activeActionGroupIndex = -1;
		$("#obj41851").trigger("obj41851_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41851) {
				console.warn("de-queueing event obj41851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41851_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41984();
function runjs_41984() {
	window.obj41851_onTap_runningActionsCount = obj41851_onTap_runningActionsCount + 1;

	$("#obj41827").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41851_onTap_runningActionsCount = window.obj41851_onTap_runningActionsCount - 1;
if (window.obj41851_onTap_runningActionsCount < 0) {
	window.obj41851_onTap_runningActionsCount = 0;
} else if (window.obj41851_onTap_runningActionsCount == 0) {
	obj41851_onTap_actionGroup4();
}
	}, 1);
}







};
obj41851_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41851_onTap_activeActionGroupIndex = -1;
		$("#obj41851").trigger("obj41851_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41851) {
				console.warn("de-queueing event obj41851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41851_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41913();
function switchText_41913() {
	window.obj41851_onTap_runningActionsCount = obj41851_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41851_onTap_runningActionsCount = window.obj41851_onTap_runningActionsCount - 1;
if (window.obj41851_onTap_runningActionsCount < 0) {
	window.obj41851_onTap_runningActionsCount = 0;
} else if (window.obj41851_onTap_runningActionsCount == 0) {
	obj41851_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41851_onTap_runningActionsCount = window.obj41851_onTap_runningActionsCount - 1;
if (window.obj41851_onTap_runningActionsCount < 0) {
	window.obj41851_onTap_runningActionsCount = 0;
} else if (window.obj41851_onTap_runningActionsCount == 0) {
	obj41851_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41851_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41851_onTap_activeActionGroupIndex = -1;
		$("#obj41851").trigger("obj41851_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41851) {
				console.warn("de-queueing event obj41851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41851_onTap_activeActionGroupIndex = 5;
	





















};
obj41853_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41853_onTap_activeActionGroupIndex = -1;
		$("#obj41853").trigger("obj41853_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41853) {
				console.warn("de-queueing event obj41853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41853_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41919();
function runjs_41919() {
	window.obj41853_onTap_runningActionsCount = obj41853_onTap_runningActionsCount + 1;

	$("#obj41829").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41853_onTap_runningActionsCount = window.obj41853_onTap_runningActionsCount - 1;
if (window.obj41853_onTap_runningActionsCount < 0) {
	window.obj41853_onTap_runningActionsCount = 0;
} else if (window.obj41853_onTap_runningActionsCount == 0) {
	obj41853_onTap_actionGroup1();
}
	}, 1);
}







};
obj41853_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41853_onTap_activeActionGroupIndex = -1;
		$("#obj41853").trigger("obj41853_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41853) {
				console.warn("de-queueing event obj41853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41853_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41920();
function switchText_41920() {
	window.obj41853_onTap_runningActionsCount = obj41853_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41853_onTap_runningActionsCount = window.obj41853_onTap_runningActionsCount - 1;
if (window.obj41853_onTap_runningActionsCount < 0) {
	window.obj41853_onTap_runningActionsCount = 0;
} else if (window.obj41853_onTap_runningActionsCount == 0) {
	obj41853_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41853_onTap_runningActionsCount = window.obj41853_onTap_runningActionsCount - 1;
if (window.obj41853_onTap_runningActionsCount < 0) {
	window.obj41853_onTap_runningActionsCount = 0;
} else if (window.obj41853_onTap_runningActionsCount == 0) {
	obj41853_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41853_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41853_onTap_activeActionGroupIndex = -1;
		$("#obj41853").trigger("obj41853_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41853) {
				console.warn("de-queueing event obj41853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41853_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41921();
function playAudio_41921() {
	window.obj41853_onTap_runningActionsCount = obj41853_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41853_onTap_runningActionsCount = window.obj41853_onTap_runningActionsCount - 1;
if (window.obj41853_onTap_runningActionsCount < 0) {
	window.obj41853_onTap_runningActionsCount = 0;
} else if (window.obj41853_onTap_runningActionsCount == 0) {
	obj41853_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41853_onTap_runningActionsCount = window.obj41853_onTap_runningActionsCount - 1;
if (window.obj41853_onTap_runningActionsCount < 0) {
	window.obj41853_onTap_runningActionsCount = 0;
} else if (window.obj41853_onTap_runningActionsCount == 0) {
	obj41853_onTap_actionGroup3();
}
	}
}









};
obj41853_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41853_onTap_activeActionGroupIndex = -1;
		$("#obj41853").trigger("obj41853_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41853) {
				console.warn("de-queueing event obj41853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41853_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41922();
function runjs_41922() {
	window.obj41853_onTap_runningActionsCount = obj41853_onTap_runningActionsCount + 1;

	$("#obj41829").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41853_onTap_runningActionsCount = window.obj41853_onTap_runningActionsCount - 1;
if (window.obj41853_onTap_runningActionsCount < 0) {
	window.obj41853_onTap_runningActionsCount = 0;
} else if (window.obj41853_onTap_runningActionsCount == 0) {
	obj41853_onTap_actionGroup4();
}
	}, 1);
}







};
obj41853_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41853_onTap_activeActionGroupIndex = -1;
		$("#obj41853").trigger("obj41853_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41853) {
				console.warn("de-queueing event obj41853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41853_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41923();
function switchText_41923() {
	window.obj41853_onTap_runningActionsCount = obj41853_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41853_onTap_runningActionsCount = window.obj41853_onTap_runningActionsCount - 1;
if (window.obj41853_onTap_runningActionsCount < 0) {
	window.obj41853_onTap_runningActionsCount = 0;
} else if (window.obj41853_onTap_runningActionsCount == 0) {
	obj41853_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41853_onTap_runningActionsCount = window.obj41853_onTap_runningActionsCount - 1;
if (window.obj41853_onTap_runningActionsCount < 0) {
	window.obj41853_onTap_runningActionsCount = 0;
} else if (window.obj41853_onTap_runningActionsCount == 0) {
	obj41853_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41853_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41853_onTap_activeActionGroupIndex = -1;
		$("#obj41853").trigger("obj41853_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41853) {
				console.warn("de-queueing event obj41853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41853_onTap_activeActionGroupIndex = 5;
	





















};
obj41855_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41855_onTap_activeActionGroupIndex = -1;
		$("#obj41855").trigger("obj41855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41855) {
				console.warn("de-queueing event obj41855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41855_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_41895();
function switchText_41895() {
	window.obj41855_onTap_runningActionsCount = obj41855_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41855_onTap_runningActionsCount = window.obj41855_onTap_runningActionsCount - 1;
if (window.obj41855_onTap_runningActionsCount < 0) {
	window.obj41855_onTap_runningActionsCount = 0;
} else if (window.obj41855_onTap_runningActionsCount == 0) {
	obj41855_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41855_onTap_runningActionsCount = window.obj41855_onTap_runningActionsCount - 1;
if (window.obj41855_onTap_runningActionsCount < 0) {
	window.obj41855_onTap_runningActionsCount = 0;
} else if (window.obj41855_onTap_runningActionsCount == 0) {
	obj41855_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj41855_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41855_onTap_activeActionGroupIndex = -1;
		$("#obj41855").trigger("obj41855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41855) {
				console.warn("de-queueing event obj41855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41855_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41894();
function runjs_41894() {
	window.obj41855_onTap_runningActionsCount = obj41855_onTap_runningActionsCount + 1;

	$("#obj41831").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj41855_onTap_runningActionsCount = window.obj41855_onTap_runningActionsCount - 1;
if (window.obj41855_onTap_runningActionsCount < 0) {
	window.obj41855_onTap_runningActionsCount = 0;
} else if (window.obj41855_onTap_runningActionsCount == 0) {
	obj41855_onTap_actionGroup2();
}
	}, 1);
}







};
obj41855_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41855_onTap_activeActionGroupIndex = -1;
		$("#obj41855").trigger("obj41855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41855) {
				console.warn("de-queueing event obj41855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41855_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41874 
playAudio_41896();
function playAudio_41896() {
	window.obj41855_onTap_runningActionsCount = obj41855_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41874")[0];
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
		    window.obj41855_onTap_runningActionsCount = window.obj41855_onTap_runningActionsCount - 1;
if (window.obj41855_onTap_runningActionsCount < 0) {
	window.obj41855_onTap_runningActionsCount = 0;
} else if (window.obj41855_onTap_runningActionsCount == 0) {
	obj41855_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41855_onTap_runningActionsCount = window.obj41855_onTap_runningActionsCount - 1;
if (window.obj41855_onTap_runningActionsCount < 0) {
	window.obj41855_onTap_runningActionsCount = 0;
} else if (window.obj41855_onTap_runningActionsCount == 0) {
	obj41855_onTap_actionGroup3();
}
	}
}









};
obj41855_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41855_onTap_activeActionGroupIndex = -1;
		$("#obj41855").trigger("obj41855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41855) {
				console.warn("de-queueing event obj41855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41855_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90510();
function switchText_90510() {
	window.obj41855_onTap_runningActionsCount = obj41855_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41855_onTap_runningActionsCount = window.obj41855_onTap_runningActionsCount - 1;
if (window.obj41855_onTap_runningActionsCount < 0) {
	window.obj41855_onTap_runningActionsCount = 0;
} else if (window.obj41855_onTap_runningActionsCount == 0) {
	obj41855_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41855_onTap_runningActionsCount = window.obj41855_onTap_runningActionsCount - 1;
if (window.obj41855_onTap_runningActionsCount < 0) {
	window.obj41855_onTap_runningActionsCount = 0;
} else if (window.obj41855_onTap_runningActionsCount == 0) {
	obj41855_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj41855_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41855_onTap_activeActionGroupIndex = -1;
		$("#obj41855").trigger("obj41855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41855) {
				console.warn("de-queueing event obj41855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41855_onTap_activeActionGroupIndex = 4;
	





















};
obj41857_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41857_onTap_activeActionGroupIndex = -1;
		$("#obj41857").trigger("obj41857_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41857) {
				console.warn("de-queueing event obj41857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41857_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41897();
function runjs_41897() {
	window.obj41857_onTap_runningActionsCount = obj41857_onTap_runningActionsCount + 1;

	$("#obj41833").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj41857_onTap_runningActionsCount = window.obj41857_onTap_runningActionsCount - 1;
if (window.obj41857_onTap_runningActionsCount < 0) {
	window.obj41857_onTap_runningActionsCount = 0;
} else if (window.obj41857_onTap_runningActionsCount == 0) {
	obj41857_onTap_actionGroup1();
}
	}, 1);
}







};
obj41857_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41857_onTap_activeActionGroupIndex = -1;
		$("#obj41857").trigger("obj41857_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41857) {
				console.warn("de-queueing event obj41857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41857_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41898();
function switchText_41898() {
	window.obj41857_onTap_runningActionsCount = obj41857_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41857_onTap_runningActionsCount = window.obj41857_onTap_runningActionsCount - 1;
if (window.obj41857_onTap_runningActionsCount < 0) {
	window.obj41857_onTap_runningActionsCount = 0;
} else if (window.obj41857_onTap_runningActionsCount == 0) {
	obj41857_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41857_onTap_runningActionsCount = window.obj41857_onTap_runningActionsCount - 1;
if (window.obj41857_onTap_runningActionsCount < 0) {
	window.obj41857_onTap_runningActionsCount = 0;
} else if (window.obj41857_onTap_runningActionsCount == 0) {
	obj41857_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41857_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41857_onTap_activeActionGroupIndex = -1;
		$("#obj41857").trigger("obj41857_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41857) {
				console.warn("de-queueing event obj41857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41857_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41874 
playAudio_41899();
function playAudio_41899() {
	window.obj41857_onTap_runningActionsCount = obj41857_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41874")[0];
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
		    window.obj41857_onTap_runningActionsCount = window.obj41857_onTap_runningActionsCount - 1;
if (window.obj41857_onTap_runningActionsCount < 0) {
	window.obj41857_onTap_runningActionsCount = 0;
} else if (window.obj41857_onTap_runningActionsCount == 0) {
	obj41857_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41857_onTap_runningActionsCount = window.obj41857_onTap_runningActionsCount - 1;
if (window.obj41857_onTap_runningActionsCount < 0) {
	window.obj41857_onTap_runningActionsCount = 0;
} else if (window.obj41857_onTap_runningActionsCount == 0) {
	obj41857_onTap_actionGroup3();
}
	}
}









};
obj41857_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41857_onTap_activeActionGroupIndex = -1;
		$("#obj41857").trigger("obj41857_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41857) {
				console.warn("de-queueing event obj41857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41857_onTap_activeActionGroupIndex = 3;
	





















};
obj41859_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41859_onTap_activeActionGroupIndex = -1;
		$("#obj41859").trigger("obj41859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41859) {
				console.warn("de-queueing event obj41859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41859_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41929();
function runjs_41929() {
	window.obj41859_onTap_runningActionsCount = obj41859_onTap_runningActionsCount + 1;

	$("#obj41837").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41859_onTap_runningActionsCount = window.obj41859_onTap_runningActionsCount - 1;
if (window.obj41859_onTap_runningActionsCount < 0) {
	window.obj41859_onTap_runningActionsCount = 0;
} else if (window.obj41859_onTap_runningActionsCount == 0) {
	obj41859_onTap_actionGroup1();
}
	}, 1);
}







};
obj41859_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41859_onTap_activeActionGroupIndex = -1;
		$("#obj41859").trigger("obj41859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41859) {
				console.warn("de-queueing event obj41859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41859_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41930();
function switchText_41930() {
	window.obj41859_onTap_runningActionsCount = obj41859_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41859_onTap_runningActionsCount = window.obj41859_onTap_runningActionsCount - 1;
if (window.obj41859_onTap_runningActionsCount < 0) {
	window.obj41859_onTap_runningActionsCount = 0;
} else if (window.obj41859_onTap_runningActionsCount == 0) {
	obj41859_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41859_onTap_runningActionsCount = window.obj41859_onTap_runningActionsCount - 1;
if (window.obj41859_onTap_runningActionsCount < 0) {
	window.obj41859_onTap_runningActionsCount = 0;
} else if (window.obj41859_onTap_runningActionsCount == 0) {
	obj41859_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41859_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41859_onTap_activeActionGroupIndex = -1;
		$("#obj41859").trigger("obj41859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41859) {
				console.warn("de-queueing event obj41859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41859_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41931();
function playAudio_41931() {
	window.obj41859_onTap_runningActionsCount = obj41859_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41859_onTap_runningActionsCount = window.obj41859_onTap_runningActionsCount - 1;
if (window.obj41859_onTap_runningActionsCount < 0) {
	window.obj41859_onTap_runningActionsCount = 0;
} else if (window.obj41859_onTap_runningActionsCount == 0) {
	obj41859_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41859_onTap_runningActionsCount = window.obj41859_onTap_runningActionsCount - 1;
if (window.obj41859_onTap_runningActionsCount < 0) {
	window.obj41859_onTap_runningActionsCount = 0;
} else if (window.obj41859_onTap_runningActionsCount == 0) {
	obj41859_onTap_actionGroup3();
}
	}
}









};
obj41859_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41859_onTap_activeActionGroupIndex = -1;
		$("#obj41859").trigger("obj41859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41859) {
				console.warn("de-queueing event obj41859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41859_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41932();
function runjs_41932() {
	window.obj41859_onTap_runningActionsCount = obj41859_onTap_runningActionsCount + 1;

	$("#obj41837").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41859_onTap_runningActionsCount = window.obj41859_onTap_runningActionsCount - 1;
if (window.obj41859_onTap_runningActionsCount < 0) {
	window.obj41859_onTap_runningActionsCount = 0;
} else if (window.obj41859_onTap_runningActionsCount == 0) {
	obj41859_onTap_actionGroup4();
}
	}, 1);
}







};
obj41859_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41859_onTap_activeActionGroupIndex = -1;
		$("#obj41859").trigger("obj41859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41859) {
				console.warn("de-queueing event obj41859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41859_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41933();
function switchText_41933() {
	window.obj41859_onTap_runningActionsCount = obj41859_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41859_onTap_runningActionsCount = window.obj41859_onTap_runningActionsCount - 1;
if (window.obj41859_onTap_runningActionsCount < 0) {
	window.obj41859_onTap_runningActionsCount = 0;
} else if (window.obj41859_onTap_runningActionsCount == 0) {
	obj41859_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41859_onTap_runningActionsCount = window.obj41859_onTap_runningActionsCount - 1;
if (window.obj41859_onTap_runningActionsCount < 0) {
	window.obj41859_onTap_runningActionsCount = 0;
} else if (window.obj41859_onTap_runningActionsCount == 0) {
	obj41859_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41859_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41859_onTap_activeActionGroupIndex = -1;
		$("#obj41859").trigger("obj41859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41859) {
				console.warn("de-queueing event obj41859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41859_onTap_activeActionGroupIndex = 5;
	





















};
obj41861_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41861_onTap_activeActionGroupIndex = -1;
		$("#obj41861").trigger("obj41861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41861) {
				console.warn("de-queueing event obj41861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41861_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41939();
function runjs_41939() {
	window.obj41861_onTap_runningActionsCount = obj41861_onTap_runningActionsCount + 1;

	$("#obj41839").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41861_onTap_runningActionsCount = window.obj41861_onTap_runningActionsCount - 1;
if (window.obj41861_onTap_runningActionsCount < 0) {
	window.obj41861_onTap_runningActionsCount = 0;
} else if (window.obj41861_onTap_runningActionsCount == 0) {
	obj41861_onTap_actionGroup1();
}
	}, 1);
}







};
obj41861_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41861_onTap_activeActionGroupIndex = -1;
		$("#obj41861").trigger("obj41861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41861) {
				console.warn("de-queueing event obj41861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41861_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41940();
function switchText_41940() {
	window.obj41861_onTap_runningActionsCount = obj41861_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41861_onTap_runningActionsCount = window.obj41861_onTap_runningActionsCount - 1;
if (window.obj41861_onTap_runningActionsCount < 0) {
	window.obj41861_onTap_runningActionsCount = 0;
} else if (window.obj41861_onTap_runningActionsCount == 0) {
	obj41861_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41861_onTap_runningActionsCount = window.obj41861_onTap_runningActionsCount - 1;
if (window.obj41861_onTap_runningActionsCount < 0) {
	window.obj41861_onTap_runningActionsCount = 0;
} else if (window.obj41861_onTap_runningActionsCount == 0) {
	obj41861_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41861_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41861_onTap_activeActionGroupIndex = -1;
		$("#obj41861").trigger("obj41861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41861) {
				console.warn("de-queueing event obj41861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41861_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41941();
function playAudio_41941() {
	window.obj41861_onTap_runningActionsCount = obj41861_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41861_onTap_runningActionsCount = window.obj41861_onTap_runningActionsCount - 1;
if (window.obj41861_onTap_runningActionsCount < 0) {
	window.obj41861_onTap_runningActionsCount = 0;
} else if (window.obj41861_onTap_runningActionsCount == 0) {
	obj41861_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41861_onTap_runningActionsCount = window.obj41861_onTap_runningActionsCount - 1;
if (window.obj41861_onTap_runningActionsCount < 0) {
	window.obj41861_onTap_runningActionsCount = 0;
} else if (window.obj41861_onTap_runningActionsCount == 0) {
	obj41861_onTap_actionGroup3();
}
	}
}









};
obj41861_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41861_onTap_activeActionGroupIndex = -1;
		$("#obj41861").trigger("obj41861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41861) {
				console.warn("de-queueing event obj41861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41861_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41942();
function runjs_41942() {
	window.obj41861_onTap_runningActionsCount = obj41861_onTap_runningActionsCount + 1;

	$("#obj41839").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41861_onTap_runningActionsCount = window.obj41861_onTap_runningActionsCount - 1;
if (window.obj41861_onTap_runningActionsCount < 0) {
	window.obj41861_onTap_runningActionsCount = 0;
} else if (window.obj41861_onTap_runningActionsCount == 0) {
	obj41861_onTap_actionGroup4();
}
	}, 1);
}







};
obj41861_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41861_onTap_activeActionGroupIndex = -1;
		$("#obj41861").trigger("obj41861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41861) {
				console.warn("de-queueing event obj41861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41861_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41943();
function switchText_41943() {
	window.obj41861_onTap_runningActionsCount = obj41861_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41861_onTap_runningActionsCount = window.obj41861_onTap_runningActionsCount - 1;
if (window.obj41861_onTap_runningActionsCount < 0) {
	window.obj41861_onTap_runningActionsCount = 0;
} else if (window.obj41861_onTap_runningActionsCount == 0) {
	obj41861_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41861_onTap_runningActionsCount = window.obj41861_onTap_runningActionsCount - 1;
if (window.obj41861_onTap_runningActionsCount < 0) {
	window.obj41861_onTap_runningActionsCount = 0;
} else if (window.obj41861_onTap_runningActionsCount == 0) {
	obj41861_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41861_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41861_onTap_activeActionGroupIndex = -1;
		$("#obj41861").trigger("obj41861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41861) {
				console.warn("de-queueing event obj41861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41861_onTap_activeActionGroupIndex = 5;
	





















};
obj41863_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41863_onTap_activeActionGroupIndex = -1;
		$("#obj41863").trigger("obj41863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41863) {
				console.warn("de-queueing event obj41863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41863_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_41901();
function switchText_41901() {
	window.obj41863_onTap_runningActionsCount = obj41863_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41863_onTap_runningActionsCount = window.obj41863_onTap_runningActionsCount - 1;
if (window.obj41863_onTap_runningActionsCount < 0) {
	window.obj41863_onTap_runningActionsCount = 0;
} else if (window.obj41863_onTap_runningActionsCount == 0) {
	obj41863_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41863_onTap_runningActionsCount = window.obj41863_onTap_runningActionsCount - 1;
if (window.obj41863_onTap_runningActionsCount < 0) {
	window.obj41863_onTap_runningActionsCount = 0;
} else if (window.obj41863_onTap_runningActionsCount == 0) {
	obj41863_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj41863_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41863_onTap_activeActionGroupIndex = -1;
		$("#obj41863").trigger("obj41863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41863) {
				console.warn("de-queueing event obj41863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41863_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41900();
function runjs_41900() {
	window.obj41863_onTap_runningActionsCount = obj41863_onTap_runningActionsCount + 1;

	$("#obj41841").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj41863_onTap_runningActionsCount = window.obj41863_onTap_runningActionsCount - 1;
if (window.obj41863_onTap_runningActionsCount < 0) {
	window.obj41863_onTap_runningActionsCount = 0;
} else if (window.obj41863_onTap_runningActionsCount == 0) {
	obj41863_onTap_actionGroup2();
}
	}, 1);
}







};
obj41863_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41863_onTap_activeActionGroupIndex = -1;
		$("#obj41863").trigger("obj41863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41863) {
				console.warn("de-queueing event obj41863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41863_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41874 
playAudio_41902();
function playAudio_41902() {
	window.obj41863_onTap_runningActionsCount = obj41863_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41874")[0];
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
		    window.obj41863_onTap_runningActionsCount = window.obj41863_onTap_runningActionsCount - 1;
if (window.obj41863_onTap_runningActionsCount < 0) {
	window.obj41863_onTap_runningActionsCount = 0;
} else if (window.obj41863_onTap_runningActionsCount == 0) {
	obj41863_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41863_onTap_runningActionsCount = window.obj41863_onTap_runningActionsCount - 1;
if (window.obj41863_onTap_runningActionsCount < 0) {
	window.obj41863_onTap_runningActionsCount = 0;
} else if (window.obj41863_onTap_runningActionsCount == 0) {
	obj41863_onTap_actionGroup3();
}
	}
}









};
obj41863_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41863_onTap_activeActionGroupIndex = -1;
		$("#obj41863").trigger("obj41863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41863) {
				console.warn("de-queueing event obj41863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41863_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_90513();
function switchText_90513() {
	window.obj41863_onTap_runningActionsCount = obj41863_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41863_onTap_runningActionsCount = window.obj41863_onTap_runningActionsCount - 1;
if (window.obj41863_onTap_runningActionsCount < 0) {
	window.obj41863_onTap_runningActionsCount = 0;
} else if (window.obj41863_onTap_runningActionsCount == 0) {
	obj41863_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41863_onTap_runningActionsCount = window.obj41863_onTap_runningActionsCount - 1;
if (window.obj41863_onTap_runningActionsCount < 0) {
	window.obj41863_onTap_runningActionsCount = 0;
} else if (window.obj41863_onTap_runningActionsCount == 0) {
	obj41863_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj41863_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41863_onTap_activeActionGroupIndex = -1;
		$("#obj41863").trigger("obj41863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41863) {
				console.warn("de-queueing event obj41863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41863_onTap_activeActionGroupIndex = 4;
	





















};
obj41865_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41865_onTap_activeActionGroupIndex = -1;
		$("#obj41865").trigger("obj41865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41865) {
				console.warn("de-queueing event obj41865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41865_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41949();
function runjs_41949() {
	window.obj41865_onTap_runningActionsCount = obj41865_onTap_runningActionsCount + 1;

	$("#obj41835").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41865_onTap_runningActionsCount = window.obj41865_onTap_runningActionsCount - 1;
if (window.obj41865_onTap_runningActionsCount < 0) {
	window.obj41865_onTap_runningActionsCount = 0;
} else if (window.obj41865_onTap_runningActionsCount == 0) {
	obj41865_onTap_actionGroup1();
}
	}, 1);
}







};
obj41865_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41865_onTap_activeActionGroupIndex = -1;
		$("#obj41865").trigger("obj41865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41865) {
				console.warn("de-queueing event obj41865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41865_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41950();
function switchText_41950() {
	window.obj41865_onTap_runningActionsCount = obj41865_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41865_onTap_runningActionsCount = window.obj41865_onTap_runningActionsCount - 1;
if (window.obj41865_onTap_runningActionsCount < 0) {
	window.obj41865_onTap_runningActionsCount = 0;
} else if (window.obj41865_onTap_runningActionsCount == 0) {
	obj41865_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41865_onTap_runningActionsCount = window.obj41865_onTap_runningActionsCount - 1;
if (window.obj41865_onTap_runningActionsCount < 0) {
	window.obj41865_onTap_runningActionsCount = 0;
} else if (window.obj41865_onTap_runningActionsCount == 0) {
	obj41865_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41865_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41865_onTap_activeActionGroupIndex = -1;
		$("#obj41865").trigger("obj41865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41865) {
				console.warn("de-queueing event obj41865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41865_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41951();
function playAudio_41951() {
	window.obj41865_onTap_runningActionsCount = obj41865_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41865_onTap_runningActionsCount = window.obj41865_onTap_runningActionsCount - 1;
if (window.obj41865_onTap_runningActionsCount < 0) {
	window.obj41865_onTap_runningActionsCount = 0;
} else if (window.obj41865_onTap_runningActionsCount == 0) {
	obj41865_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41865_onTap_runningActionsCount = window.obj41865_onTap_runningActionsCount - 1;
if (window.obj41865_onTap_runningActionsCount < 0) {
	window.obj41865_onTap_runningActionsCount = 0;
} else if (window.obj41865_onTap_runningActionsCount == 0) {
	obj41865_onTap_actionGroup3();
}
	}
}









};
obj41865_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41865_onTap_activeActionGroupIndex = -1;
		$("#obj41865").trigger("obj41865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41865) {
				console.warn("de-queueing event obj41865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41865_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41952();
function runjs_41952() {
	window.obj41865_onTap_runningActionsCount = obj41865_onTap_runningActionsCount + 1;

	$("#obj41835").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41865_onTap_runningActionsCount = window.obj41865_onTap_runningActionsCount - 1;
if (window.obj41865_onTap_runningActionsCount < 0) {
	window.obj41865_onTap_runningActionsCount = 0;
} else if (window.obj41865_onTap_runningActionsCount == 0) {
	obj41865_onTap_actionGroup4();
}
	}, 1);
}







};
obj41865_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41865_onTap_activeActionGroupIndex = -1;
		$("#obj41865").trigger("obj41865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41865) {
				console.warn("de-queueing event obj41865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41865_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41953();
function switchText_41953() {
	window.obj41865_onTap_runningActionsCount = obj41865_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41865_onTap_runningActionsCount = window.obj41865_onTap_runningActionsCount - 1;
if (window.obj41865_onTap_runningActionsCount < 0) {
	window.obj41865_onTap_runningActionsCount = 0;
} else if (window.obj41865_onTap_runningActionsCount == 0) {
	obj41865_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41865_onTap_runningActionsCount = window.obj41865_onTap_runningActionsCount - 1;
if (window.obj41865_onTap_runningActionsCount < 0) {
	window.obj41865_onTap_runningActionsCount = 0;
} else if (window.obj41865_onTap_runningActionsCount == 0) {
	obj41865_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41865_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41865_onTap_activeActionGroupIndex = -1;
		$("#obj41865").trigger("obj41865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41865) {
				console.warn("de-queueing event obj41865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41865_onTap_activeActionGroupIndex = 5;
	





















};
obj41867_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41867_onTap_activeActionGroupIndex = -1;
		$("#obj41867").trigger("obj41867_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41867) {
				console.warn("de-queueing event obj41867." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41867").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41867_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41959();
function runjs_41959() {
	window.obj41867_onTap_runningActionsCount = obj41867_onTap_runningActionsCount + 1;

	$("#obj41845").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41867_onTap_runningActionsCount = window.obj41867_onTap_runningActionsCount - 1;
if (window.obj41867_onTap_runningActionsCount < 0) {
	window.obj41867_onTap_runningActionsCount = 0;
} else if (window.obj41867_onTap_runningActionsCount == 0) {
	obj41867_onTap_actionGroup1();
}
	}, 1);
}







};
obj41867_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41867_onTap_activeActionGroupIndex = -1;
		$("#obj41867").trigger("obj41867_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41867) {
				console.warn("de-queueing event obj41867." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41867").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41867_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41960();
function switchText_41960() {
	window.obj41867_onTap_runningActionsCount = obj41867_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41867_onTap_runningActionsCount = window.obj41867_onTap_runningActionsCount - 1;
if (window.obj41867_onTap_runningActionsCount < 0) {
	window.obj41867_onTap_runningActionsCount = 0;
} else if (window.obj41867_onTap_runningActionsCount == 0) {
	obj41867_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41867_onTap_runningActionsCount = window.obj41867_onTap_runningActionsCount - 1;
if (window.obj41867_onTap_runningActionsCount < 0) {
	window.obj41867_onTap_runningActionsCount = 0;
} else if (window.obj41867_onTap_runningActionsCount == 0) {
	obj41867_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41867_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41867_onTap_activeActionGroupIndex = -1;
		$("#obj41867").trigger("obj41867_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41867) {
				console.warn("de-queueing event obj41867." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41867").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41867_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41961();
function playAudio_41961() {
	window.obj41867_onTap_runningActionsCount = obj41867_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41867_onTap_runningActionsCount = window.obj41867_onTap_runningActionsCount - 1;
if (window.obj41867_onTap_runningActionsCount < 0) {
	window.obj41867_onTap_runningActionsCount = 0;
} else if (window.obj41867_onTap_runningActionsCount == 0) {
	obj41867_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41867_onTap_runningActionsCount = window.obj41867_onTap_runningActionsCount - 1;
if (window.obj41867_onTap_runningActionsCount < 0) {
	window.obj41867_onTap_runningActionsCount = 0;
} else if (window.obj41867_onTap_runningActionsCount == 0) {
	obj41867_onTap_actionGroup3();
}
	}
}









};
obj41867_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41867_onTap_activeActionGroupIndex = -1;
		$("#obj41867").trigger("obj41867_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41867) {
				console.warn("de-queueing event obj41867." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41867").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41867_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41962();
function runjs_41962() {
	window.obj41867_onTap_runningActionsCount = obj41867_onTap_runningActionsCount + 1;

	$("#obj41845").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41867_onTap_runningActionsCount = window.obj41867_onTap_runningActionsCount - 1;
if (window.obj41867_onTap_runningActionsCount < 0) {
	window.obj41867_onTap_runningActionsCount = 0;
} else if (window.obj41867_onTap_runningActionsCount == 0) {
	obj41867_onTap_actionGroup4();
}
	}, 1);
}







};
obj41867_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41867_onTap_activeActionGroupIndex = -1;
		$("#obj41867").trigger("obj41867_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41867) {
				console.warn("de-queueing event obj41867." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41867").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41867_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41963();
function switchText_41963() {
	window.obj41867_onTap_runningActionsCount = obj41867_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41867_onTap_runningActionsCount = window.obj41867_onTap_runningActionsCount - 1;
if (window.obj41867_onTap_runningActionsCount < 0) {
	window.obj41867_onTap_runningActionsCount = 0;
} else if (window.obj41867_onTap_runningActionsCount == 0) {
	obj41867_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41867_onTap_runningActionsCount = window.obj41867_onTap_runningActionsCount - 1;
if (window.obj41867_onTap_runningActionsCount < 0) {
	window.obj41867_onTap_runningActionsCount = 0;
} else if (window.obj41867_onTap_runningActionsCount == 0) {
	obj41867_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41867_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41867_onTap_activeActionGroupIndex = -1;
		$("#obj41867").trigger("obj41867_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41867) {
				console.warn("de-queueing event obj41867." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41867").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41867_onTap_activeActionGroupIndex = 5;
	





















};
obj41869_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41869_onTap_activeActionGroupIndex = -1;
		$("#obj41869").trigger("obj41869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41869) {
				console.warn("de-queueing event obj41869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41869_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41974();
function runjs_41974() {
	window.obj41869_onTap_runningActionsCount = obj41869_onTap_runningActionsCount + 1;

	$("#obj41843").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj41869_onTap_runningActionsCount = window.obj41869_onTap_runningActionsCount - 1;
if (window.obj41869_onTap_runningActionsCount < 0) {
	window.obj41869_onTap_runningActionsCount = 0;
} else if (window.obj41869_onTap_runningActionsCount == 0) {
	obj41869_onTap_actionGroup1();
}
	}, 1);
}







};
obj41869_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41869_onTap_activeActionGroupIndex = -1;
		$("#obj41869").trigger("obj41869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41869) {
				console.warn("de-queueing event obj41869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41869_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41975();
function switchText_41975() {
	window.obj41869_onTap_runningActionsCount = obj41869_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41869_onTap_runningActionsCount = window.obj41869_onTap_runningActionsCount - 1;
if (window.obj41869_onTap_runningActionsCount < 0) {
	window.obj41869_onTap_runningActionsCount = 0;
} else if (window.obj41869_onTap_runningActionsCount == 0) {
	obj41869_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41869_onTap_runningActionsCount = window.obj41869_onTap_runningActionsCount - 1;
if (window.obj41869_onTap_runningActionsCount < 0) {
	window.obj41869_onTap_runningActionsCount = 0;
} else if (window.obj41869_onTap_runningActionsCount == 0) {
	obj41869_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj41869_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41869_onTap_activeActionGroupIndex = -1;
		$("#obj41869").trigger("obj41869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41869) {
				console.warn("de-queueing event obj41869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41869_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj41875 
playAudio_41976();
function playAudio_41976() {
	window.obj41869_onTap_runningActionsCount = obj41869_onTap_runningActionsCount + 1;
	var myAudio = $("#obj41875")[0];
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
		    window.obj41869_onTap_runningActionsCount = window.obj41869_onTap_runningActionsCount - 1;
if (window.obj41869_onTap_runningActionsCount < 0) {
	window.obj41869_onTap_runningActionsCount = 0;
} else if (window.obj41869_onTap_runningActionsCount == 0) {
	obj41869_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41869_onTap_runningActionsCount = window.obj41869_onTap_runningActionsCount - 1;
if (window.obj41869_onTap_runningActionsCount < 0) {
	window.obj41869_onTap_runningActionsCount = 0;
} else if (window.obj41869_onTap_runningActionsCount == 0) {
	obj41869_onTap_actionGroup3();
}
	}
}









};
obj41869_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41869_onTap_activeActionGroupIndex = -1;
		$("#obj41869").trigger("obj41869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41869) {
				console.warn("de-queueing event obj41869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41869_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41977();
function runjs_41977() {
	window.obj41869_onTap_runningActionsCount = obj41869_onTap_runningActionsCount + 1;

	$("#obj41843").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj41869_onTap_runningActionsCount = window.obj41869_onTap_runningActionsCount - 1;
if (window.obj41869_onTap_runningActionsCount < 0) {
	window.obj41869_onTap_runningActionsCount = 0;
} else if (window.obj41869_onTap_runningActionsCount == 0) {
	obj41869_onTap_actionGroup4();
}
	}, 1);
}







};
obj41869_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41869_onTap_activeActionGroupIndex = -1;
		$("#obj41869").trigger("obj41869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41869) {
				console.warn("de-queueing event obj41869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41869_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41978();
function switchText_41978() {
	window.obj41869_onTap_runningActionsCount = obj41869_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41804_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41804_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41804").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41804_content");
			setTimeout(function () {
				window.obj41869_onTap_runningActionsCount = window.obj41869_onTap_runningActionsCount - 1;
if (window.obj41869_onTap_runningActionsCount < 0) {
	window.obj41869_onTap_runningActionsCount = 0;
} else if (window.obj41869_onTap_runningActionsCount == 0) {
	obj41869_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41804 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41869_onTap_runningActionsCount = window.obj41869_onTap_runningActionsCount - 1;
if (window.obj41869_onTap_runningActionsCount < 0) {
	window.obj41869_onTap_runningActionsCount = 0;
} else if (window.obj41869_onTap_runningActionsCount == 0) {
	obj41869_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj41869_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41869_onTap_activeActionGroupIndex = -1;
		$("#obj41869").trigger("obj41869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41869) {
				console.warn("de-queueing event obj41869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41869_onTap_activeActionGroupIndex = 5;
	





















};
obj67278_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67278_onTap_activeActionGroupIndex = -1;
		$("#obj67278").trigger("obj67278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67278) {
				console.warn("de-queueing event obj67278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67278_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67278 
hide_67281();
function hide_67281() {
	var selector = "#obj67278";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67278_onTap_runningActionsCount = obj67278_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67278_onTap_runningActionsCount = window.obj67278_onTap_runningActionsCount - 1;
if (window.obj67278_onTap_runningActionsCount < 0) {
	window.obj67278_onTap_runningActionsCount = 0;
} else if (window.obj67278_onTap_runningActionsCount == 0) {
	obj67278_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67281(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67278_onTap_runningActionsCount = window.obj67278_onTap_runningActionsCount - 1;
if (window.obj67278_onTap_runningActionsCount < 0) {
	window.obj67278_onTap_runningActionsCount = 0;
} else if (window.obj67278_onTap_runningActionsCount == 0) {
	obj67278_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67284 
stopMovie_67280();
function stopMovie_67280() {
	window.obj67278_onTap_runningActionsCount = obj67278_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67284")[0];
	myVideo.pause();
	window.obj67278_onTap_runningActionsCount = window.obj67278_onTap_runningActionsCount - 1;
if (window.obj67278_onTap_runningActionsCount < 0) {
	window.obj67278_onTap_runningActionsCount = 0;
} else if (window.obj67278_onTap_runningActionsCount == 0) {
	obj67278_onTap_actionGroup1();
}
}
















};
obj67278_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67278_onTap_activeActionGroupIndex = -1;
		$("#obj67278").trigger("obj67278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67278) {
				console.warn("de-queueing event obj67278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67278_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67270
(function(){
	window.obj67278_onTap_runningActionsCount = obj67278_onTap_runningActionsCount + 1;

	var selector = "#obj67270";
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
					window.obj67278_onTap_runningActionsCount = window.obj67278_onTap_runningActionsCount - 1;
if (window.obj67278_onTap_runningActionsCount < 0) {
	window.obj67278_onTap_runningActionsCount = 0;
} else if (window.obj67278_onTap_runningActionsCount == 0) {
	obj67278_onTap_actionGroup2();
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
				window.obj67278_onTap_runningActionsCount = window.obj67278_onTap_runningActionsCount - 1;
if (window.obj67278_onTap_runningActionsCount < 0) {
	window.obj67278_onTap_runningActionsCount = 0;
} else if (window.obj67278_onTap_runningActionsCount == 0) {
	obj67278_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67278_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67278_onTap_activeActionGroupIndex = -1;
		$("#obj67278").trigger("obj67278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67278) {
				console.warn("de-queueing event obj67278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67278_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67284 
move_67283();
function move_67283() {
	window.obj67278_onTap_runningActionsCount = obj67278_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67284");
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
			window.obj67278_onTap_runningActionsCount = window.obj67278_onTap_runningActionsCount - 1;
if (window.obj67278_onTap_runningActionsCount < 0) {
	window.obj67278_onTap_runningActionsCount = 0;
} else if (window.obj67278_onTap_runningActionsCount == 0) {
	obj67278_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67278_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67278_onTap_activeActionGroupIndex = -1;
		$("#obj67278").trigger("obj67278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67278) {
				console.warn("de-queueing event obj67278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67278_onTap_activeActionGroupIndex = 3;
	





















};
obj67270_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67270_onTap_activeActionGroupIndex = -1;
		$("#obj67270").trigger("obj67270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67270) {
				console.warn("de-queueing event obj67270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67270_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67270 
hide_67273();
function hide_67273() {
	var selector = "#obj67270";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67270_onTap_runningActionsCount = obj67270_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67270_onTap_runningActionsCount = window.obj67270_onTap_runningActionsCount - 1;
if (window.obj67270_onTap_runningActionsCount < 0) {
	window.obj67270_onTap_runningActionsCount = 0;
} else if (window.obj67270_onTap_runningActionsCount == 0) {
	obj67270_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67273(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67270_onTap_runningActionsCount = window.obj67270_onTap_runningActionsCount - 1;
if (window.obj67270_onTap_runningActionsCount < 0) {
	window.obj67270_onTap_runningActionsCount = 0;
} else if (window.obj67270_onTap_runningActionsCount == 0) {
	obj67270_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67284 
playPauseMovie_67272();
function playPauseMovie_67272() {
	window.obj67270_onTap_runningActionsCount = obj67270_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67284")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67270_onTap_runningActionsCount = window.obj67270_onTap_runningActionsCount - 1;
if (window.obj67270_onTap_runningActionsCount < 0) {
	window.obj67270_onTap_runningActionsCount = 0;
} else if (window.obj67270_onTap_runningActionsCount == 0) {
	obj67270_onTap_actionGroup1();
}
}

















};
obj67270_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67270_onTap_activeActionGroupIndex = -1;
		$("#obj67270").trigger("obj67270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67270) {
				console.warn("de-queueing event obj67270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67270_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67278
(function(){
	window.obj67270_onTap_runningActionsCount = obj67270_onTap_runningActionsCount + 1;

	var selector = "#obj67278";
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
					window.obj67270_onTap_runningActionsCount = window.obj67270_onTap_runningActionsCount - 1;
if (window.obj67270_onTap_runningActionsCount < 0) {
	window.obj67270_onTap_runningActionsCount = 0;
} else if (window.obj67270_onTap_runningActionsCount == 0) {
	obj67270_onTap_actionGroup2();
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
				window.obj67270_onTap_runningActionsCount = window.obj67270_onTap_runningActionsCount - 1;
if (window.obj67270_onTap_runningActionsCount < 0) {
	window.obj67270_onTap_runningActionsCount = 0;
} else if (window.obj67270_onTap_runningActionsCount == 0) {
	obj67270_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67270_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67270_onTap_activeActionGroupIndex = -1;
		$("#obj67270").trigger("obj67270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67270) {
				console.warn("de-queueing event obj67270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67270_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67284 
move_67275();
function move_67275() {
	window.obj67270_onTap_runningActionsCount = obj67270_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67284");
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
			window.obj67270_onTap_runningActionsCount = window.obj67270_onTap_runningActionsCount - 1;
if (window.obj67270_onTap_runningActionsCount < 0) {
	window.obj67270_onTap_runningActionsCount = 0;
} else if (window.obj67270_onTap_runningActionsCount == 0) {
	obj67270_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67270_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67270_onTap_activeActionGroupIndex = -1;
		$("#obj67270").trigger("obj67270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67270) {
				console.warn("de-queueing event obj67270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67270_onTap_activeActionGroupIndex = 3;
	





















};
obj88573_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88573_onTap_activeActionGroupIndex = -1;
		$("#obj88573").trigger("obj88573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88573) {
				console.warn("de-queueing event obj88573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88573_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88578 
stopAudio_88575();
function stopAudio_88575() {
	window.obj88573_onTap_runningActionsCount = obj88573_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88578")[0];
	myAudio.pause();
	window.obj88573_onTap_runningActionsCount = window.obj88573_onTap_runningActionsCount - 1;
if (window.obj88573_onTap_runningActionsCount < 0) {
	window.obj88573_onTap_runningActionsCount = 0;
} else if (window.obj88573_onTap_runningActionsCount == 0) {
	obj88573_onTap_actionGroup1();
}
}








};
obj88573_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88573_onTap_activeActionGroupIndex = -1;
		$("#obj88573").trigger("obj88573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88573) {
				console.warn("de-queueing event obj88573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88573_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88573 
hide_88576();
function hide_88576() {
	var selector = "#obj88573";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88573_onTap_runningActionsCount = obj88573_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88573_onTap_runningActionsCount = window.obj88573_onTap_runningActionsCount - 1;
if (window.obj88573_onTap_runningActionsCount < 0) {
	window.obj88573_onTap_runningActionsCount = 0;
} else if (window.obj88573_onTap_runningActionsCount == 0) {
	obj88573_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88576(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88573_onTap_runningActionsCount = window.obj88573_onTap_runningActionsCount - 1;
if (window.obj88573_onTap_runningActionsCount < 0) {
	window.obj88573_onTap_runningActionsCount = 0;
} else if (window.obj88573_onTap_runningActionsCount == 0) {
	obj88573_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88573_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88573_onTap_activeActionGroupIndex = -1;
		$("#obj88573").trigger("obj88573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88573) {
				console.warn("de-queueing event obj88573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88573_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88568
(function(){
	window.obj88573_onTap_runningActionsCount = obj88573_onTap_runningActionsCount + 1;

	var selector = "#obj88568";
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
					window.obj88573_onTap_runningActionsCount = window.obj88573_onTap_runningActionsCount - 1;
if (window.obj88573_onTap_runningActionsCount < 0) {
	window.obj88573_onTap_runningActionsCount = 0;
} else if (window.obj88573_onTap_runningActionsCount == 0) {
	obj88573_onTap_actionGroup3();
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
				window.obj88573_onTap_runningActionsCount = window.obj88573_onTap_runningActionsCount - 1;
if (window.obj88573_onTap_runningActionsCount < 0) {
	window.obj88573_onTap_runningActionsCount = 0;
} else if (window.obj88573_onTap_runningActionsCount == 0) {
	obj88573_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88573_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88573_onTap_activeActionGroupIndex = -1;
		$("#obj88573").trigger("obj88573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88573) {
				console.warn("de-queueing event obj88573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88573_onTap_activeActionGroupIndex = 3;
	





















};
obj88568_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88568_onTap_activeActionGroupIndex = -1;
		$("#obj88568").trigger("obj88568_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88568) {
				console.warn("de-queueing event obj88568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88568_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88568 
hide_88570();
function hide_88570() {
	var selector = "#obj88568";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88568_onTap_runningActionsCount = obj88568_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88568_onTap_runningActionsCount = window.obj88568_onTap_runningActionsCount - 1;
if (window.obj88568_onTap_runningActionsCount < 0) {
	window.obj88568_onTap_runningActionsCount = 0;
} else if (window.obj88568_onTap_runningActionsCount == 0) {
	obj88568_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88570(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88568_onTap_runningActionsCount = window.obj88568_onTap_runningActionsCount - 1;
if (window.obj88568_onTap_runningActionsCount < 0) {
	window.obj88568_onTap_runningActionsCount = 0;
} else if (window.obj88568_onTap_runningActionsCount == 0) {
	obj88568_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88568_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88568_onTap_activeActionGroupIndex = -1;
		$("#obj88568").trigger("obj88568_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88568) {
				console.warn("de-queueing event obj88568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88568_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88573
(function(){
	window.obj88568_onTap_runningActionsCount = obj88568_onTap_runningActionsCount + 1;

	var selector = "#obj88573";
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
					window.obj88568_onTap_runningActionsCount = window.obj88568_onTap_runningActionsCount - 1;
if (window.obj88568_onTap_runningActionsCount < 0) {
	window.obj88568_onTap_runningActionsCount = 0;
} else if (window.obj88568_onTap_runningActionsCount == 0) {
	obj88568_onTap_actionGroup2();
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
				window.obj88568_onTap_runningActionsCount = window.obj88568_onTap_runningActionsCount - 1;
if (window.obj88568_onTap_runningActionsCount < 0) {
	window.obj88568_onTap_runningActionsCount = 0;
} else if (window.obj88568_onTap_runningActionsCount == 0) {
	obj88568_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88568_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88568_onTap_activeActionGroupIndex = -1;
		$("#obj88568").trigger("obj88568_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88568) {
				console.warn("de-queueing event obj88568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88568_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88578 
playAudio_88572();
function playAudio_88572() {
	window.obj88568_onTap_runningActionsCount = obj88568_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88578")[0];
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
		    window.obj88568_onTap_runningActionsCount = window.obj88568_onTap_runningActionsCount - 1;
if (window.obj88568_onTap_runningActionsCount < 0) {
	window.obj88568_onTap_runningActionsCount = 0;
} else if (window.obj88568_onTap_runningActionsCount == 0) {
	obj88568_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88568_onTap_runningActionsCount = window.obj88568_onTap_runningActionsCount - 1;
if (window.obj88568_onTap_runningActionsCount < 0) {
	window.obj88568_onTap_runningActionsCount = 0;
} else if (window.obj88568_onTap_runningActionsCount == 0) {
	obj88568_onTap_actionGroup3();
}
	}
}









};
obj88568_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88568_onTap_activeActionGroupIndex = -1;
		$("#obj88568").trigger("obj88568_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88568) {
				console.warn("de-queueing event obj88568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88568_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj41782: Event Touch Down
 *
 */
$("#obj41782").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41782_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41782_onTap is still running");
	return;
}
var obj41782_onTap_runningActionsCount = 0;
var obj41782_onTap_loopCount = 0;
obj41782_onTap_actionGroup0();
});










/*
 *
 *   obj41779: Event Touch Down
 *
 */
$("#obj41779").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41779_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41779_onTap is still running");
	return;
}
var obj41779_onTap_runningActionsCount = 0;
var obj41779_onTap_loopCount = 0;
obj41779_onTap_actionGroup0();
});










/*
 *
 *   obj41785: Event Touch Down
 *
 */
$("#obj41785").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41785_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41785_onTap is still running");
	return;
}
var obj41785_onTap_runningActionsCount = 0;
var obj41785_onTap_loopCount = 0;
obj41785_onTap_actionGroup0();
});
















































































/*
 *
 *   obj41823: Event Touch Down
 *
 */
$("#obj41823").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41823_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41823_onTap is still running");
	return;
}
var obj41823_onTap_runningActionsCount = 0;
var obj41823_onTap_loopCount = 0;
obj41823_onTap_actionGroup0();
});










/*
 *
 *   obj41825: Event Touch Down
 *
 */
$("#obj41825").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41825_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41825_onTap is still running");
	return;
}
var obj41825_onTap_runningActionsCount = 0;
var obj41825_onTap_loopCount = 0;
obj41825_onTap_actionGroup0();
});










/*
 *
 *   obj41827: Event Touch Down
 *
 */
$("#obj41827").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41827_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41827_onTap is still running");
	return;
}
var obj41827_onTap_runningActionsCount = 0;
var obj41827_onTap_loopCount = 0;
obj41827_onTap_actionGroup0();
});










/*
 *
 *   obj41829: Event Touch Down
 *
 */
$("#obj41829").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41829_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41829_onTap is still running");
	return;
}
var obj41829_onTap_runningActionsCount = 0;
var obj41829_onTap_loopCount = 0;
obj41829_onTap_actionGroup0();
});










/*
 *
 *   obj41831: Event Touch Down
 *
 */
$("#obj41831").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41831_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41831_onTap is still running");
	return;
}
var obj41831_onTap_runningActionsCount = 0;
var obj41831_onTap_loopCount = 0;
obj41831_onTap_actionGroup0();
});










/*
 *
 *   obj41833: Event Touch Down
 *
 */
$("#obj41833").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41833_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41833_onTap is still running");
	return;
}
var obj41833_onTap_runningActionsCount = 0;
var obj41833_onTap_loopCount = 0;
obj41833_onTap_actionGroup0();
});










/*
 *
 *   obj41837: Event Touch Down
 *
 */
$("#obj41837").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41837_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41837_onTap is still running");
	return;
}
var obj41837_onTap_runningActionsCount = 0;
var obj41837_onTap_loopCount = 0;
obj41837_onTap_actionGroup0();
});










/*
 *
 *   obj41839: Event Touch Down
 *
 */
$("#obj41839").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41839_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41839_onTap is still running");
	return;
}
var obj41839_onTap_runningActionsCount = 0;
var obj41839_onTap_loopCount = 0;
obj41839_onTap_actionGroup0();
});










/*
 *
 *   obj41841: Event Touch Down
 *
 */
$("#obj41841").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41841_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41841_onTap is still running");
	return;
}
var obj41841_onTap_runningActionsCount = 0;
var obj41841_onTap_loopCount = 0;
obj41841_onTap_actionGroup0();
});










/*
 *
 *   obj41835: Event Touch Down
 *
 */
$("#obj41835").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41835_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41835_onTap is still running");
	return;
}
var obj41835_onTap_runningActionsCount = 0;
var obj41835_onTap_loopCount = 0;
obj41835_onTap_actionGroup0();
});










/*
 *
 *   obj41845: Event Touch Down
 *
 */
$("#obj41845").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41845_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41845_onTap is still running");
	return;
}
var obj41845_onTap_runningActionsCount = 0;
var obj41845_onTap_loopCount = 0;
obj41845_onTap_actionGroup0();
});










/*
 *
 *   obj41843: Event Touch Down
 *
 */
$("#obj41843").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41843_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41843_onTap is still running");
	return;
}
var obj41843_onTap_runningActionsCount = 0;
var obj41843_onTap_loopCount = 0;
obj41843_onTap_actionGroup0();
});










/*
 *
 *   obj41847: Event Touch Down
 *
 */
$("#obj41847").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41847_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41847_onTap is still running");
	return;
}
var obj41847_onTap_runningActionsCount = 0;
var obj41847_onTap_loopCount = 0;
obj41847_onTap_actionGroup0();
});










/*
 *
 *   obj41849: Event Touch Down
 *
 */
$("#obj41849").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41849_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41849_onTap is still running");
	return;
}
var obj41849_onTap_runningActionsCount = 0;
var obj41849_onTap_loopCount = 0;
obj41849_onTap_actionGroup0();
});










/*
 *
 *   obj41851: Event Touch Down
 *
 */
$("#obj41851").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41851_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41851_onTap is still running");
	return;
}
var obj41851_onTap_runningActionsCount = 0;
var obj41851_onTap_loopCount = 0;
obj41851_onTap_actionGroup0();
});










/*
 *
 *   obj41853: Event Touch Down
 *
 */
$("#obj41853").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41853_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41853_onTap is still running");
	return;
}
var obj41853_onTap_runningActionsCount = 0;
var obj41853_onTap_loopCount = 0;
obj41853_onTap_actionGroup0();
});










/*
 *
 *   obj41855: Event Touch Down
 *
 */
$("#obj41855").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41855_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41855_onTap is still running");
	return;
}
var obj41855_onTap_runningActionsCount = 0;
var obj41855_onTap_loopCount = 0;
obj41855_onTap_actionGroup0();
});










/*
 *
 *   obj41857: Event Touch Down
 *
 */
$("#obj41857").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41857_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41857_onTap is still running");
	return;
}
var obj41857_onTap_runningActionsCount = 0;
var obj41857_onTap_loopCount = 0;
obj41857_onTap_actionGroup0();
});










/*
 *
 *   obj41859: Event Touch Down
 *
 */
$("#obj41859").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41859_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41859_onTap is still running");
	return;
}
var obj41859_onTap_runningActionsCount = 0;
var obj41859_onTap_loopCount = 0;
obj41859_onTap_actionGroup0();
});










/*
 *
 *   obj41861: Event Touch Down
 *
 */
$("#obj41861").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41861_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41861_onTap is still running");
	return;
}
var obj41861_onTap_runningActionsCount = 0;
var obj41861_onTap_loopCount = 0;
obj41861_onTap_actionGroup0();
});










/*
 *
 *   obj41863: Event Touch Down
 *
 */
$("#obj41863").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41863_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41863_onTap is still running");
	return;
}
var obj41863_onTap_runningActionsCount = 0;
var obj41863_onTap_loopCount = 0;
obj41863_onTap_actionGroup0();
});










/*
 *
 *   obj41865: Event Touch Down
 *
 */
$("#obj41865").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41865_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41865_onTap is still running");
	return;
}
var obj41865_onTap_runningActionsCount = 0;
var obj41865_onTap_loopCount = 0;
obj41865_onTap_actionGroup0();
});










/*
 *
 *   obj41867: Event Touch Down
 *
 */
$("#obj41867").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41867_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41867_onTap is still running");
	return;
}
var obj41867_onTap_runningActionsCount = 0;
var obj41867_onTap_loopCount = 0;
obj41867_onTap_actionGroup0();
});










/*
 *
 *   obj41869: Event Touch Down
 *
 */
$("#obj41869").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41869_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41869_onTap is still running");
	return;
}
var obj41869_onTap_runningActionsCount = 0;
var obj41869_onTap_loopCount = 0;
obj41869_onTap_actionGroup0();
});






























/*
 *
 *   obj67278: Event Touch Down
 *
 */
$("#obj67278").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67278_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67278_onTap is still running");
	return;
}
var obj67278_onTap_runningActionsCount = 0;
var obj67278_onTap_loopCount = 0;
obj67278_onTap_actionGroup0();
});










/*
 *
 *   obj67270: Event Touch Down
 *
 */
$("#obj67270").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67270_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67270_onTap is still running");
	return;
}
var obj67270_onTap_runningActionsCount = 0;
var obj67270_onTap_loopCount = 0;
obj67270_onTap_actionGroup0();
});










/*
 *
 *   obj88573: Event Touch Down
 *
 */
$("#obj88573").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88573_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88573_onTap is still running");
	return;
}
var obj88573_onTap_runningActionsCount = 0;
var obj88573_onTap_loopCount = 0;
obj88573_onTap_actionGroup0();
});










/*
 *
 *   obj88568: Event Touch Down
 *
 */
$("#obj88568").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88568_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88568_onTap is still running");
	return;
}
var obj88568_onTap_runningActionsCount = 0;
var obj88568_onTap_loopCount = 0;
obj88568_onTap_actionGroup0();
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
	
$("#obj41777").trigger('SCEventShow');
$("#obj41782").trigger('SCEventShow');
$("#obj41779").trigger('SCEventShow');
$("#obj41785").trigger('SCEventShow');
$("#obj41806").trigger('SCEventShow');
$("#obj41810").trigger('SCEventShow');
$("#obj41808").trigger('SCEventShow');
$("#obj41802").trigger('SCEventShow');
$("#obj41804").trigger('SCEventShow');
$("#obj41814").trigger('SCEventShow');
$("#obj41812").trigger('SCEventShow');
$("#obj41823").trigger('SCEventShow');
$("#obj41825").trigger('SCEventShow');
$("#obj41827").trigger('SCEventShow');
$("#obj41829").trigger('SCEventShow');
$("#obj41831").trigger('SCEventShow');
$("#obj41833").trigger('SCEventShow');
$("#obj41837").trigger('SCEventShow');
$("#obj41839").trigger('SCEventShow');
$("#obj41841").trigger('SCEventShow');
$("#obj41835").trigger('SCEventShow');
$("#obj41845").trigger('SCEventShow');
$("#obj41843").trigger('SCEventShow');
$("#obj41847").trigger('SCEventShow');
$("#obj41849").trigger('SCEventShow');
$("#obj41851").trigger('SCEventShow');
$("#obj41853").trigger('SCEventShow');
$("#obj41855").trigger('SCEventShow');
$("#obj41857").trigger('SCEventShow');
$("#obj41859").trigger('SCEventShow');
$("#obj41861").trigger('SCEventShow');
$("#obj41863").trigger('SCEventShow');
$("#obj41865").trigger('SCEventShow');
$("#obj41867").trigger('SCEventShow');
$("#obj41869").trigger('SCEventShow');
$("#obj41875").trigger('SCEventShow');
$("#obj41874").trigger('SCEventShow');
$("#obj67278").trigger('SCEventShow');
$("#obj67270").trigger('SCEventShow');
$("#obj88573").trigger('SCEventShow');
$("#obj88568").trigger('SCEventShow');
$("#obj88578").trigger('SCEventShow');
$("#obj94913").trigger('SCEventShow');
$("#obj67284").trigger('SCEventShow');
	
});