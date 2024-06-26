pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 10038;
pubcoder.page.title = pubcoder.page.title || "46";
pubcoder.page.number = pubcoder.page.number || 46;
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
var obj70883_onTap_activeActionGroupIndex = -1;
var obj70883_onTap_runningActionsCount = 0;
var obj70883_onTap_loopCount = 0;
var obj70880_onTap_activeActionGroupIndex = -1;
var obj70880_onTap_runningActionsCount = 0;
var obj70880_onTap_loopCount = 0;
var obj70876_onTap_activeActionGroupIndex = -1;
var obj70876_onTap_runningActionsCount = 0;
var obj70876_onTap_loopCount = 0;
var obj70858_onTap_activeActionGroupIndex = -1;
var obj70858_onTap_runningActionsCount = 0;
var obj70858_onTap_loopCount = 0;
var obj70850_onTap_activeActionGroupIndex = -1;
var obj70850_onTap_runningActionsCount = 0;
var obj70850_onTap_loopCount = 0;
var obj70842_onTap_activeActionGroupIndex = -1;
var obj70842_onTap_runningActionsCount = 0;
var obj70842_onTap_loopCount = 0;
var obj70834_onTap_activeActionGroupIndex = -1;
var obj70834_onTap_runningActionsCount = 0;
var obj70834_onTap_loopCount = 0;
var obj70826_onTap_activeActionGroupIndex = -1;
var obj70826_onTap_runningActionsCount = 0;
var obj70826_onTap_loopCount = 0;
var obj70820_onTap_activeActionGroupIndex = -1;
var obj70820_onTap_runningActionsCount = 0;
var obj70820_onTap_loopCount = 0;
var obj70812_onTap_activeActionGroupIndex = -1;
var obj70812_onTap_runningActionsCount = 0;
var obj70812_onTap_loopCount = 0;
var obj70804_onTap_activeActionGroupIndex = -1;
var obj70804_onTap_runningActionsCount = 0;
var obj70804_onTap_loopCount = 0;
var obj70798_onTap_activeActionGroupIndex = -1;
var obj70798_onTap_runningActionsCount = 0;
var obj70798_onTap_loopCount = 0;
var obj70790_onTap_activeActionGroupIndex = -1;
var obj70790_onTap_runningActionsCount = 0;
var obj70790_onTap_loopCount = 0;
var obj70784_onTap_activeActionGroupIndex = -1;
var obj70784_onTap_runningActionsCount = 0;
var obj70784_onTap_loopCount = 0;
var obj70776_onTap_activeActionGroupIndex = -1;
var obj70776_onTap_runningActionsCount = 0;
var obj70776_onTap_loopCount = 0;
var obj70768_onTap_activeActionGroupIndex = -1;
var obj70768_onTap_runningActionsCount = 0;
var obj70768_onTap_loopCount = 0;
var obj70762_onTap_activeActionGroupIndex = -1;
var obj70762_onTap_runningActionsCount = 0;
var obj70762_onTap_loopCount = 0;
var obj70754_onTap_activeActionGroupIndex = -1;
var obj70754_onTap_runningActionsCount = 0;
var obj70754_onTap_loopCount = 0;
var obj70746_onTap_activeActionGroupIndex = -1;
var obj70746_onTap_runningActionsCount = 0;
var obj70746_onTap_loopCount = 0;
var obj70738_onTap_activeActionGroupIndex = -1;
var obj70738_onTap_runningActionsCount = 0;
var obj70738_onTap_loopCount = 0;
var obj70732_onTap_activeActionGroupIndex = -1;
var obj70732_onTap_runningActionsCount = 0;
var obj70732_onTap_loopCount = 0;
var obj70724_onTap_activeActionGroupIndex = -1;
var obj70724_onTap_runningActionsCount = 0;
var obj70724_onTap_loopCount = 0;
var obj70718_onTap_activeActionGroupIndex = -1;
var obj70718_onTap_runningActionsCount = 0;
var obj70718_onTap_loopCount = 0;
var obj70696_onTap_activeActionGroupIndex = -1;
var obj70696_onTap_runningActionsCount = 0;
var obj70696_onTap_loopCount = 0;
var obj70688_onTap_activeActionGroupIndex = -1;
var obj70688_onTap_runningActionsCount = 0;
var obj70688_onTap_loopCount = 0;
var obj87292_onTap_activeActionGroupIndex = -1;
var obj87292_onTap_runningActionsCount = 0;
var obj87292_onTap_loopCount = 0;
var obj87287_onTap_activeActionGroupIndex = -1;
var obj87287_onTap_runningActionsCount = 0;
var obj87287_onTap_loopCount = 0;
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
		
obj70883_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70883_onTap_activeActionGroupIndex = -1;
		$("#obj70883").trigger("obj70883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70883) {
				console.warn("de-queueing event obj70883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70883_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70885();
function goToPage_70885() {
	window.obj70883_onTap_runningActionsCount = obj70883_onTap_runningActionsCount + 1;
	$("#anchor279")[0].click();
	window.obj70883_onTap_runningActionsCount = window.obj70883_onTap_runningActionsCount - 1;
if (window.obj70883_onTap_runningActionsCount < 0) {
	window.obj70883_onTap_runningActionsCount = 0;
} else if (window.obj70883_onTap_runningActionsCount == 0) {
	obj70883_onTap_actionGroup1();
}
}





















};
obj70883_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70883_onTap_activeActionGroupIndex = -1;
		$("#obj70883").trigger("obj70883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70883) {
				console.warn("de-queueing event obj70883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70883_onTap_activeActionGroupIndex = 1;
	





















};
obj70880_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70880_onTap_activeActionGroupIndex = -1;
		$("#obj70880").trigger("obj70880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70880) {
				console.warn("de-queueing event obj70880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70880_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70882();
function goToPage_70882() {
	window.obj70880_onTap_runningActionsCount = obj70880_onTap_runningActionsCount + 1;
	$("#anchor280")[0].click();
	window.obj70880_onTap_runningActionsCount = window.obj70880_onTap_runningActionsCount - 1;
if (window.obj70880_onTap_runningActionsCount < 0) {
	window.obj70880_onTap_runningActionsCount = 0;
} else if (window.obj70880_onTap_runningActionsCount == 0) {
	obj70880_onTap_actionGroup1();
}
}





















};
obj70880_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70880_onTap_activeActionGroupIndex = -1;
		$("#obj70880").trigger("obj70880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70880) {
				console.warn("de-queueing event obj70880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70880_onTap_activeActionGroupIndex = 1;
	





















};
obj70876_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70876_onTap_activeActionGroupIndex = -1;
		$("#obj70876").trigger("obj70876_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70876) {
				console.warn("de-queueing event obj70876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70876_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70878();
function goToPage_70878() {
	window.obj70876_onTap_runningActionsCount = obj70876_onTap_runningActionsCount + 1;
	$("#anchor281")[0].click();
	window.obj70876_onTap_runningActionsCount = window.obj70876_onTap_runningActionsCount - 1;
if (window.obj70876_onTap_runningActionsCount < 0) {
	window.obj70876_onTap_runningActionsCount = 0;
} else if (window.obj70876_onTap_runningActionsCount == 0) {
	obj70876_onTap_actionGroup1();
}
}





















};
obj70876_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70876_onTap_activeActionGroupIndex = -1;
		$("#obj70876").trigger("obj70876_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70876) {
				console.warn("de-queueing event obj70876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70876_onTap_activeActionGroupIndex = 1;
	





















};
obj70858_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70858_onTap_activeActionGroupIndex = -1;
		$("#obj70858").trigger("obj70858_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70858) {
				console.warn("de-queueing event obj70858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70858_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70860();
function runjs_70860() {
	window.obj70858_onTap_runningActionsCount = obj70858_onTap_runningActionsCount + 1;

	$("#obj70858").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70858_onTap_runningActionsCount = window.obj70858_onTap_runningActionsCount - 1;
if (window.obj70858_onTap_runningActionsCount < 0) {
	window.obj70858_onTap_runningActionsCount = 0;
} else if (window.obj70858_onTap_runningActionsCount == 0) {
	obj70858_onTap_actionGroup1();
}
	}, 1);
}







};
obj70858_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70858_onTap_activeActionGroupIndex = -1;
		$("#obj70858").trigger("obj70858_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70858) {
				console.warn("de-queueing event obj70858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70858_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70861();
function switchText_70861() {
	window.obj70858_onTap_runningActionsCount = obj70858_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70858_onTap_runningActionsCount = window.obj70858_onTap_runningActionsCount - 1;
if (window.obj70858_onTap_runningActionsCount < 0) {
	window.obj70858_onTap_runningActionsCount = 0;
} else if (window.obj70858_onTap_runningActionsCount == 0) {
	obj70858_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70858_onTap_runningActionsCount = window.obj70858_onTap_runningActionsCount - 1;
if (window.obj70858_onTap_runningActionsCount < 0) {
	window.obj70858_onTap_runningActionsCount = 0;
} else if (window.obj70858_onTap_runningActionsCount == 0) {
	obj70858_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70858_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70858_onTap_activeActionGroupIndex = -1;
		$("#obj70858").trigger("obj70858_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70858) {
				console.warn("de-queueing event obj70858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70858_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70716 
playAudio_70862();
function playAudio_70862() {
	window.obj70858_onTap_runningActionsCount = obj70858_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70716")[0];
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
		    window.obj70858_onTap_runningActionsCount = window.obj70858_onTap_runningActionsCount - 1;
if (window.obj70858_onTap_runningActionsCount < 0) {
	window.obj70858_onTap_runningActionsCount = 0;
} else if (window.obj70858_onTap_runningActionsCount == 0) {
	obj70858_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70858_onTap_runningActionsCount = window.obj70858_onTap_runningActionsCount - 1;
if (window.obj70858_onTap_runningActionsCount < 0) {
	window.obj70858_onTap_runningActionsCount = 0;
} else if (window.obj70858_onTap_runningActionsCount == 0) {
	obj70858_onTap_actionGroup3();
}
	}
}









};
obj70858_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70858_onTap_activeActionGroupIndex = -1;
		$("#obj70858").trigger("obj70858_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70858) {
				console.warn("de-queueing event obj70858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70858_onTap_activeActionGroupIndex = 3;
	





















};
obj70850_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70850_onTap_activeActionGroupIndex = -1;
		$("#obj70850").trigger("obj70850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70850) {
				console.warn("de-queueing event obj70850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70850_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70852();
function runjs_70852() {
	window.obj70850_onTap_runningActionsCount = obj70850_onTap_runningActionsCount + 1;

	$("#obj70850").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70850_onTap_runningActionsCount = window.obj70850_onTap_runningActionsCount - 1;
if (window.obj70850_onTap_runningActionsCount < 0) {
	window.obj70850_onTap_runningActionsCount = 0;
} else if (window.obj70850_onTap_runningActionsCount == 0) {
	obj70850_onTap_actionGroup1();
}
	}, 1);
}







};
obj70850_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70850_onTap_activeActionGroupIndex = -1;
		$("#obj70850").trigger("obj70850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70850) {
				console.warn("de-queueing event obj70850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70850_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70853();
function switchText_70853() {
	window.obj70850_onTap_runningActionsCount = obj70850_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70850_onTap_runningActionsCount = window.obj70850_onTap_runningActionsCount - 1;
if (window.obj70850_onTap_runningActionsCount < 0) {
	window.obj70850_onTap_runningActionsCount = 0;
} else if (window.obj70850_onTap_runningActionsCount == 0) {
	obj70850_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70850_onTap_runningActionsCount = window.obj70850_onTap_runningActionsCount - 1;
if (window.obj70850_onTap_runningActionsCount < 0) {
	window.obj70850_onTap_runningActionsCount = 0;
} else if (window.obj70850_onTap_runningActionsCount == 0) {
	obj70850_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70850_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70850_onTap_activeActionGroupIndex = -1;
		$("#obj70850").trigger("obj70850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70850) {
				console.warn("de-queueing event obj70850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70850_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70854();
function playAudio_70854() {
	window.obj70850_onTap_runningActionsCount = obj70850_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70850_onTap_runningActionsCount = window.obj70850_onTap_runningActionsCount - 1;
if (window.obj70850_onTap_runningActionsCount < 0) {
	window.obj70850_onTap_runningActionsCount = 0;
} else if (window.obj70850_onTap_runningActionsCount == 0) {
	obj70850_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70850_onTap_runningActionsCount = window.obj70850_onTap_runningActionsCount - 1;
if (window.obj70850_onTap_runningActionsCount < 0) {
	window.obj70850_onTap_runningActionsCount = 0;
} else if (window.obj70850_onTap_runningActionsCount == 0) {
	obj70850_onTap_actionGroup3();
}
	}
}









};
obj70850_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70850_onTap_activeActionGroupIndex = -1;
		$("#obj70850").trigger("obj70850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70850) {
				console.warn("de-queueing event obj70850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70850_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70855();
function switchText_70855() {
	window.obj70850_onTap_runningActionsCount = obj70850_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70850_onTap_runningActionsCount = window.obj70850_onTap_runningActionsCount - 1;
if (window.obj70850_onTap_runningActionsCount < 0) {
	window.obj70850_onTap_runningActionsCount = 0;
} else if (window.obj70850_onTap_runningActionsCount == 0) {
	obj70850_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70850_onTap_runningActionsCount = window.obj70850_onTap_runningActionsCount - 1;
if (window.obj70850_onTap_runningActionsCount < 0) {
	window.obj70850_onTap_runningActionsCount = 0;
} else if (window.obj70850_onTap_runningActionsCount == 0) {
	obj70850_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70850_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70850_onTap_activeActionGroupIndex = -1;
		$("#obj70850").trigger("obj70850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70850) {
				console.warn("de-queueing event obj70850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70850_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70856();
function runjs_70856() {
	window.obj70850_onTap_runningActionsCount = obj70850_onTap_runningActionsCount + 1;

	$("#obj70850").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70850_onTap_runningActionsCount = window.obj70850_onTap_runningActionsCount - 1;
if (window.obj70850_onTap_runningActionsCount < 0) {
	window.obj70850_onTap_runningActionsCount = 0;
} else if (window.obj70850_onTap_runningActionsCount == 0) {
	obj70850_onTap_actionGroup5();
}
	}, 1);
}







};
obj70850_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70850_onTap_activeActionGroupIndex = -1;
		$("#obj70850").trigger("obj70850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70850) {
				console.warn("de-queueing event obj70850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70850_onTap_activeActionGroupIndex = 5;
	





















};
obj70842_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70842_onTap_activeActionGroupIndex = -1;
		$("#obj70842").trigger("obj70842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70842) {
				console.warn("de-queueing event obj70842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70842_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70844();
function runjs_70844() {
	window.obj70842_onTap_runningActionsCount = obj70842_onTap_runningActionsCount + 1;

	$("#obj70842").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70842_onTap_runningActionsCount = window.obj70842_onTap_runningActionsCount - 1;
if (window.obj70842_onTap_runningActionsCount < 0) {
	window.obj70842_onTap_runningActionsCount = 0;
} else if (window.obj70842_onTap_runningActionsCount == 0) {
	obj70842_onTap_actionGroup1();
}
	}, 1);
}







};
obj70842_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70842_onTap_activeActionGroupIndex = -1;
		$("#obj70842").trigger("obj70842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70842) {
				console.warn("de-queueing event obj70842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70842_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70845();
function switchText_70845() {
	window.obj70842_onTap_runningActionsCount = obj70842_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70842_onTap_runningActionsCount = window.obj70842_onTap_runningActionsCount - 1;
if (window.obj70842_onTap_runningActionsCount < 0) {
	window.obj70842_onTap_runningActionsCount = 0;
} else if (window.obj70842_onTap_runningActionsCount == 0) {
	obj70842_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70842_onTap_runningActionsCount = window.obj70842_onTap_runningActionsCount - 1;
if (window.obj70842_onTap_runningActionsCount < 0) {
	window.obj70842_onTap_runningActionsCount = 0;
} else if (window.obj70842_onTap_runningActionsCount == 0) {
	obj70842_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70842_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70842_onTap_activeActionGroupIndex = -1;
		$("#obj70842").trigger("obj70842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70842) {
				console.warn("de-queueing event obj70842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70842_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70846();
function playAudio_70846() {
	window.obj70842_onTap_runningActionsCount = obj70842_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70842_onTap_runningActionsCount = window.obj70842_onTap_runningActionsCount - 1;
if (window.obj70842_onTap_runningActionsCount < 0) {
	window.obj70842_onTap_runningActionsCount = 0;
} else if (window.obj70842_onTap_runningActionsCount == 0) {
	obj70842_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70842_onTap_runningActionsCount = window.obj70842_onTap_runningActionsCount - 1;
if (window.obj70842_onTap_runningActionsCount < 0) {
	window.obj70842_onTap_runningActionsCount = 0;
} else if (window.obj70842_onTap_runningActionsCount == 0) {
	obj70842_onTap_actionGroup3();
}
	}
}









};
obj70842_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70842_onTap_activeActionGroupIndex = -1;
		$("#obj70842").trigger("obj70842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70842) {
				console.warn("de-queueing event obj70842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70842_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70847();
function switchText_70847() {
	window.obj70842_onTap_runningActionsCount = obj70842_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70842_onTap_runningActionsCount = window.obj70842_onTap_runningActionsCount - 1;
if (window.obj70842_onTap_runningActionsCount < 0) {
	window.obj70842_onTap_runningActionsCount = 0;
} else if (window.obj70842_onTap_runningActionsCount == 0) {
	obj70842_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70842_onTap_runningActionsCount = window.obj70842_onTap_runningActionsCount - 1;
if (window.obj70842_onTap_runningActionsCount < 0) {
	window.obj70842_onTap_runningActionsCount = 0;
} else if (window.obj70842_onTap_runningActionsCount == 0) {
	obj70842_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70842_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70842_onTap_activeActionGroupIndex = -1;
		$("#obj70842").trigger("obj70842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70842) {
				console.warn("de-queueing event obj70842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70842_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70848();
function runjs_70848() {
	window.obj70842_onTap_runningActionsCount = obj70842_onTap_runningActionsCount + 1;

	$("#obj70842").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70842_onTap_runningActionsCount = window.obj70842_onTap_runningActionsCount - 1;
if (window.obj70842_onTap_runningActionsCount < 0) {
	window.obj70842_onTap_runningActionsCount = 0;
} else if (window.obj70842_onTap_runningActionsCount == 0) {
	obj70842_onTap_actionGroup5();
}
	}, 1);
}







};
obj70842_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70842_onTap_activeActionGroupIndex = -1;
		$("#obj70842").trigger("obj70842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70842) {
				console.warn("de-queueing event obj70842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70842_onTap_activeActionGroupIndex = 5;
	





















};
obj70834_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70834_onTap_activeActionGroupIndex = -1;
		$("#obj70834").trigger("obj70834_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70834) {
				console.warn("de-queueing event obj70834." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70834").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70834_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70836();
function runjs_70836() {
	window.obj70834_onTap_runningActionsCount = obj70834_onTap_runningActionsCount + 1;

	$("#obj70834").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70834_onTap_runningActionsCount = window.obj70834_onTap_runningActionsCount - 1;
if (window.obj70834_onTap_runningActionsCount < 0) {
	window.obj70834_onTap_runningActionsCount = 0;
} else if (window.obj70834_onTap_runningActionsCount == 0) {
	obj70834_onTap_actionGroup1();
}
	}, 1);
}







};
obj70834_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70834_onTap_activeActionGroupIndex = -1;
		$("#obj70834").trigger("obj70834_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70834) {
				console.warn("de-queueing event obj70834." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70834").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70834_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70837();
function switchText_70837() {
	window.obj70834_onTap_runningActionsCount = obj70834_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70834_onTap_runningActionsCount = window.obj70834_onTap_runningActionsCount - 1;
if (window.obj70834_onTap_runningActionsCount < 0) {
	window.obj70834_onTap_runningActionsCount = 0;
} else if (window.obj70834_onTap_runningActionsCount == 0) {
	obj70834_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70834_onTap_runningActionsCount = window.obj70834_onTap_runningActionsCount - 1;
if (window.obj70834_onTap_runningActionsCount < 0) {
	window.obj70834_onTap_runningActionsCount = 0;
} else if (window.obj70834_onTap_runningActionsCount == 0) {
	obj70834_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70834_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70834_onTap_activeActionGroupIndex = -1;
		$("#obj70834").trigger("obj70834_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70834) {
				console.warn("de-queueing event obj70834." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70834").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70834_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70838();
function playAudio_70838() {
	window.obj70834_onTap_runningActionsCount = obj70834_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70834_onTap_runningActionsCount = window.obj70834_onTap_runningActionsCount - 1;
if (window.obj70834_onTap_runningActionsCount < 0) {
	window.obj70834_onTap_runningActionsCount = 0;
} else if (window.obj70834_onTap_runningActionsCount == 0) {
	obj70834_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70834_onTap_runningActionsCount = window.obj70834_onTap_runningActionsCount - 1;
if (window.obj70834_onTap_runningActionsCount < 0) {
	window.obj70834_onTap_runningActionsCount = 0;
} else if (window.obj70834_onTap_runningActionsCount == 0) {
	obj70834_onTap_actionGroup3();
}
	}
}









};
obj70834_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70834_onTap_activeActionGroupIndex = -1;
		$("#obj70834").trigger("obj70834_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70834) {
				console.warn("de-queueing event obj70834." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70834").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70834_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70839();
function switchText_70839() {
	window.obj70834_onTap_runningActionsCount = obj70834_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70834_onTap_runningActionsCount = window.obj70834_onTap_runningActionsCount - 1;
if (window.obj70834_onTap_runningActionsCount < 0) {
	window.obj70834_onTap_runningActionsCount = 0;
} else if (window.obj70834_onTap_runningActionsCount == 0) {
	obj70834_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70834_onTap_runningActionsCount = window.obj70834_onTap_runningActionsCount - 1;
if (window.obj70834_onTap_runningActionsCount < 0) {
	window.obj70834_onTap_runningActionsCount = 0;
} else if (window.obj70834_onTap_runningActionsCount == 0) {
	obj70834_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70834_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70834_onTap_activeActionGroupIndex = -1;
		$("#obj70834").trigger("obj70834_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70834) {
				console.warn("de-queueing event obj70834." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70834").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70834_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70840();
function runjs_70840() {
	window.obj70834_onTap_runningActionsCount = obj70834_onTap_runningActionsCount + 1;

	$("#obj70834").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70834_onTap_runningActionsCount = window.obj70834_onTap_runningActionsCount - 1;
if (window.obj70834_onTap_runningActionsCount < 0) {
	window.obj70834_onTap_runningActionsCount = 0;
} else if (window.obj70834_onTap_runningActionsCount == 0) {
	obj70834_onTap_actionGroup5();
}
	}, 1);
}







};
obj70834_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70834_onTap_activeActionGroupIndex = -1;
		$("#obj70834").trigger("obj70834_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70834) {
				console.warn("de-queueing event obj70834." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70834").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70834_onTap_activeActionGroupIndex = 5;
	





















};
obj70826_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70826_onTap_activeActionGroupIndex = -1;
		$("#obj70826").trigger("obj70826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70826) {
				console.warn("de-queueing event obj70826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70826_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70828();
function runjs_70828() {
	window.obj70826_onTap_runningActionsCount = obj70826_onTap_runningActionsCount + 1;

	$("#obj70826").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70826_onTap_runningActionsCount = window.obj70826_onTap_runningActionsCount - 1;
if (window.obj70826_onTap_runningActionsCount < 0) {
	window.obj70826_onTap_runningActionsCount = 0;
} else if (window.obj70826_onTap_runningActionsCount == 0) {
	obj70826_onTap_actionGroup1();
}
	}, 1);
}







};
obj70826_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70826_onTap_activeActionGroupIndex = -1;
		$("#obj70826").trigger("obj70826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70826) {
				console.warn("de-queueing event obj70826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70826_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70829();
function switchText_70829() {
	window.obj70826_onTap_runningActionsCount = obj70826_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70826_onTap_runningActionsCount = window.obj70826_onTap_runningActionsCount - 1;
if (window.obj70826_onTap_runningActionsCount < 0) {
	window.obj70826_onTap_runningActionsCount = 0;
} else if (window.obj70826_onTap_runningActionsCount == 0) {
	obj70826_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70826_onTap_runningActionsCount = window.obj70826_onTap_runningActionsCount - 1;
if (window.obj70826_onTap_runningActionsCount < 0) {
	window.obj70826_onTap_runningActionsCount = 0;
} else if (window.obj70826_onTap_runningActionsCount == 0) {
	obj70826_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70826_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70826_onTap_activeActionGroupIndex = -1;
		$("#obj70826").trigger("obj70826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70826) {
				console.warn("de-queueing event obj70826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70826_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70830();
function playAudio_70830() {
	window.obj70826_onTap_runningActionsCount = obj70826_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70826_onTap_runningActionsCount = window.obj70826_onTap_runningActionsCount - 1;
if (window.obj70826_onTap_runningActionsCount < 0) {
	window.obj70826_onTap_runningActionsCount = 0;
} else if (window.obj70826_onTap_runningActionsCount == 0) {
	obj70826_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70826_onTap_runningActionsCount = window.obj70826_onTap_runningActionsCount - 1;
if (window.obj70826_onTap_runningActionsCount < 0) {
	window.obj70826_onTap_runningActionsCount = 0;
} else if (window.obj70826_onTap_runningActionsCount == 0) {
	obj70826_onTap_actionGroup3();
}
	}
}









};
obj70826_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70826_onTap_activeActionGroupIndex = -1;
		$("#obj70826").trigger("obj70826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70826) {
				console.warn("de-queueing event obj70826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70826_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70831();
function switchText_70831() {
	window.obj70826_onTap_runningActionsCount = obj70826_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70826_onTap_runningActionsCount = window.obj70826_onTap_runningActionsCount - 1;
if (window.obj70826_onTap_runningActionsCount < 0) {
	window.obj70826_onTap_runningActionsCount = 0;
} else if (window.obj70826_onTap_runningActionsCount == 0) {
	obj70826_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70826_onTap_runningActionsCount = window.obj70826_onTap_runningActionsCount - 1;
if (window.obj70826_onTap_runningActionsCount < 0) {
	window.obj70826_onTap_runningActionsCount = 0;
} else if (window.obj70826_onTap_runningActionsCount == 0) {
	obj70826_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70826_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70826_onTap_activeActionGroupIndex = -1;
		$("#obj70826").trigger("obj70826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70826) {
				console.warn("de-queueing event obj70826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70826_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70832();
function runjs_70832() {
	window.obj70826_onTap_runningActionsCount = obj70826_onTap_runningActionsCount + 1;

	$("#obj70826").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70826_onTap_runningActionsCount = window.obj70826_onTap_runningActionsCount - 1;
if (window.obj70826_onTap_runningActionsCount < 0) {
	window.obj70826_onTap_runningActionsCount = 0;
} else if (window.obj70826_onTap_runningActionsCount == 0) {
	obj70826_onTap_actionGroup5();
}
	}, 1);
}







};
obj70826_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70826_onTap_activeActionGroupIndex = -1;
		$("#obj70826").trigger("obj70826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70826) {
				console.warn("de-queueing event obj70826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70826_onTap_activeActionGroupIndex = 5;
	





















};
obj70820_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70820_onTap_activeActionGroupIndex = -1;
		$("#obj70820").trigger("obj70820_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70820) {
				console.warn("de-queueing event obj70820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70820_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70822();
function runjs_70822() {
	window.obj70820_onTap_runningActionsCount = obj70820_onTap_runningActionsCount + 1;

	$("#obj70820").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70820_onTap_runningActionsCount = window.obj70820_onTap_runningActionsCount - 1;
if (window.obj70820_onTap_runningActionsCount < 0) {
	window.obj70820_onTap_runningActionsCount = 0;
} else if (window.obj70820_onTap_runningActionsCount == 0) {
	obj70820_onTap_actionGroup1();
}
	}, 1);
}







};
obj70820_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70820_onTap_activeActionGroupIndex = -1;
		$("#obj70820").trigger("obj70820_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70820) {
				console.warn("de-queueing event obj70820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70820_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70823();
function switchText_70823() {
	window.obj70820_onTap_runningActionsCount = obj70820_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70820_onTap_runningActionsCount = window.obj70820_onTap_runningActionsCount - 1;
if (window.obj70820_onTap_runningActionsCount < 0) {
	window.obj70820_onTap_runningActionsCount = 0;
} else if (window.obj70820_onTap_runningActionsCount == 0) {
	obj70820_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70820_onTap_runningActionsCount = window.obj70820_onTap_runningActionsCount - 1;
if (window.obj70820_onTap_runningActionsCount < 0) {
	window.obj70820_onTap_runningActionsCount = 0;
} else if (window.obj70820_onTap_runningActionsCount == 0) {
	obj70820_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70820_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70820_onTap_activeActionGroupIndex = -1;
		$("#obj70820").trigger("obj70820_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70820) {
				console.warn("de-queueing event obj70820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70820_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70716 
playAudio_70824();
function playAudio_70824() {
	window.obj70820_onTap_runningActionsCount = obj70820_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70716")[0];
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
		    window.obj70820_onTap_runningActionsCount = window.obj70820_onTap_runningActionsCount - 1;
if (window.obj70820_onTap_runningActionsCount < 0) {
	window.obj70820_onTap_runningActionsCount = 0;
} else if (window.obj70820_onTap_runningActionsCount == 0) {
	obj70820_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70820_onTap_runningActionsCount = window.obj70820_onTap_runningActionsCount - 1;
if (window.obj70820_onTap_runningActionsCount < 0) {
	window.obj70820_onTap_runningActionsCount = 0;
} else if (window.obj70820_onTap_runningActionsCount == 0) {
	obj70820_onTap_actionGroup3();
}
	}
}









};
obj70820_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70820_onTap_activeActionGroupIndex = -1;
		$("#obj70820").trigger("obj70820_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70820) {
				console.warn("de-queueing event obj70820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70820_onTap_activeActionGroupIndex = 3;
	





















};
obj70812_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70812_onTap_activeActionGroupIndex = -1;
		$("#obj70812").trigger("obj70812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70812) {
				console.warn("de-queueing event obj70812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70812_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70814();
function runjs_70814() {
	window.obj70812_onTap_runningActionsCount = obj70812_onTap_runningActionsCount + 1;

	$("#obj70812").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70812_onTap_runningActionsCount = window.obj70812_onTap_runningActionsCount - 1;
if (window.obj70812_onTap_runningActionsCount < 0) {
	window.obj70812_onTap_runningActionsCount = 0;
} else if (window.obj70812_onTap_runningActionsCount == 0) {
	obj70812_onTap_actionGroup1();
}
	}, 1);
}







};
obj70812_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70812_onTap_activeActionGroupIndex = -1;
		$("#obj70812").trigger("obj70812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70812) {
				console.warn("de-queueing event obj70812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70812_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70815();
function switchText_70815() {
	window.obj70812_onTap_runningActionsCount = obj70812_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70812_onTap_runningActionsCount = window.obj70812_onTap_runningActionsCount - 1;
if (window.obj70812_onTap_runningActionsCount < 0) {
	window.obj70812_onTap_runningActionsCount = 0;
} else if (window.obj70812_onTap_runningActionsCount == 0) {
	obj70812_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70812_onTap_runningActionsCount = window.obj70812_onTap_runningActionsCount - 1;
if (window.obj70812_onTap_runningActionsCount < 0) {
	window.obj70812_onTap_runningActionsCount = 0;
} else if (window.obj70812_onTap_runningActionsCount == 0) {
	obj70812_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70812_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70812_onTap_activeActionGroupIndex = -1;
		$("#obj70812").trigger("obj70812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70812) {
				console.warn("de-queueing event obj70812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70812_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70816();
function playAudio_70816() {
	window.obj70812_onTap_runningActionsCount = obj70812_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70812_onTap_runningActionsCount = window.obj70812_onTap_runningActionsCount - 1;
if (window.obj70812_onTap_runningActionsCount < 0) {
	window.obj70812_onTap_runningActionsCount = 0;
} else if (window.obj70812_onTap_runningActionsCount == 0) {
	obj70812_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70812_onTap_runningActionsCount = window.obj70812_onTap_runningActionsCount - 1;
if (window.obj70812_onTap_runningActionsCount < 0) {
	window.obj70812_onTap_runningActionsCount = 0;
} else if (window.obj70812_onTap_runningActionsCount == 0) {
	obj70812_onTap_actionGroup3();
}
	}
}









};
obj70812_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70812_onTap_activeActionGroupIndex = -1;
		$("#obj70812").trigger("obj70812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70812) {
				console.warn("de-queueing event obj70812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70812_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70817();
function switchText_70817() {
	window.obj70812_onTap_runningActionsCount = obj70812_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70812_onTap_runningActionsCount = window.obj70812_onTap_runningActionsCount - 1;
if (window.obj70812_onTap_runningActionsCount < 0) {
	window.obj70812_onTap_runningActionsCount = 0;
} else if (window.obj70812_onTap_runningActionsCount == 0) {
	obj70812_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70812_onTap_runningActionsCount = window.obj70812_onTap_runningActionsCount - 1;
if (window.obj70812_onTap_runningActionsCount < 0) {
	window.obj70812_onTap_runningActionsCount = 0;
} else if (window.obj70812_onTap_runningActionsCount == 0) {
	obj70812_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70812_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70812_onTap_activeActionGroupIndex = -1;
		$("#obj70812").trigger("obj70812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70812) {
				console.warn("de-queueing event obj70812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70812_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70818();
function runjs_70818() {
	window.obj70812_onTap_runningActionsCount = obj70812_onTap_runningActionsCount + 1;

	$("#obj70812").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70812_onTap_runningActionsCount = window.obj70812_onTap_runningActionsCount - 1;
if (window.obj70812_onTap_runningActionsCount < 0) {
	window.obj70812_onTap_runningActionsCount = 0;
} else if (window.obj70812_onTap_runningActionsCount == 0) {
	obj70812_onTap_actionGroup5();
}
	}, 1);
}







};
obj70812_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70812_onTap_activeActionGroupIndex = -1;
		$("#obj70812").trigger("obj70812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70812) {
				console.warn("de-queueing event obj70812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70812_onTap_activeActionGroupIndex = 5;
	





















};
obj70804_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70804_onTap_activeActionGroupIndex = -1;
		$("#obj70804").trigger("obj70804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70804) {
				console.warn("de-queueing event obj70804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70804_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70806();
function runjs_70806() {
	window.obj70804_onTap_runningActionsCount = obj70804_onTap_runningActionsCount + 1;

	$("#obj70804").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70804_onTap_runningActionsCount = window.obj70804_onTap_runningActionsCount - 1;
if (window.obj70804_onTap_runningActionsCount < 0) {
	window.obj70804_onTap_runningActionsCount = 0;
} else if (window.obj70804_onTap_runningActionsCount == 0) {
	obj70804_onTap_actionGroup1();
}
	}, 1);
}







};
obj70804_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70804_onTap_activeActionGroupIndex = -1;
		$("#obj70804").trigger("obj70804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70804) {
				console.warn("de-queueing event obj70804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70804_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70807();
function switchText_70807() {
	window.obj70804_onTap_runningActionsCount = obj70804_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70804_onTap_runningActionsCount = window.obj70804_onTap_runningActionsCount - 1;
if (window.obj70804_onTap_runningActionsCount < 0) {
	window.obj70804_onTap_runningActionsCount = 0;
} else if (window.obj70804_onTap_runningActionsCount == 0) {
	obj70804_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70804_onTap_runningActionsCount = window.obj70804_onTap_runningActionsCount - 1;
if (window.obj70804_onTap_runningActionsCount < 0) {
	window.obj70804_onTap_runningActionsCount = 0;
} else if (window.obj70804_onTap_runningActionsCount == 0) {
	obj70804_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70804_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70804_onTap_activeActionGroupIndex = -1;
		$("#obj70804").trigger("obj70804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70804) {
				console.warn("de-queueing event obj70804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70804_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70808();
function playAudio_70808() {
	window.obj70804_onTap_runningActionsCount = obj70804_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70804_onTap_runningActionsCount = window.obj70804_onTap_runningActionsCount - 1;
if (window.obj70804_onTap_runningActionsCount < 0) {
	window.obj70804_onTap_runningActionsCount = 0;
} else if (window.obj70804_onTap_runningActionsCount == 0) {
	obj70804_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70804_onTap_runningActionsCount = window.obj70804_onTap_runningActionsCount - 1;
if (window.obj70804_onTap_runningActionsCount < 0) {
	window.obj70804_onTap_runningActionsCount = 0;
} else if (window.obj70804_onTap_runningActionsCount == 0) {
	obj70804_onTap_actionGroup3();
}
	}
}









};
obj70804_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70804_onTap_activeActionGroupIndex = -1;
		$("#obj70804").trigger("obj70804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70804) {
				console.warn("de-queueing event obj70804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70804_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70809();
function switchText_70809() {
	window.obj70804_onTap_runningActionsCount = obj70804_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70804_onTap_runningActionsCount = window.obj70804_onTap_runningActionsCount - 1;
if (window.obj70804_onTap_runningActionsCount < 0) {
	window.obj70804_onTap_runningActionsCount = 0;
} else if (window.obj70804_onTap_runningActionsCount == 0) {
	obj70804_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70804_onTap_runningActionsCount = window.obj70804_onTap_runningActionsCount - 1;
if (window.obj70804_onTap_runningActionsCount < 0) {
	window.obj70804_onTap_runningActionsCount = 0;
} else if (window.obj70804_onTap_runningActionsCount == 0) {
	obj70804_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70804_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70804_onTap_activeActionGroupIndex = -1;
		$("#obj70804").trigger("obj70804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70804) {
				console.warn("de-queueing event obj70804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70804_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70810();
function runjs_70810() {
	window.obj70804_onTap_runningActionsCount = obj70804_onTap_runningActionsCount + 1;

	$("#obj70804").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70804_onTap_runningActionsCount = window.obj70804_onTap_runningActionsCount - 1;
if (window.obj70804_onTap_runningActionsCount < 0) {
	window.obj70804_onTap_runningActionsCount = 0;
} else if (window.obj70804_onTap_runningActionsCount == 0) {
	obj70804_onTap_actionGroup5();
}
	}, 1);
}







};
obj70804_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70804_onTap_activeActionGroupIndex = -1;
		$("#obj70804").trigger("obj70804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70804) {
				console.warn("de-queueing event obj70804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70804_onTap_activeActionGroupIndex = 5;
	





















};
obj70798_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70798_onTap_activeActionGroupIndex = -1;
		$("#obj70798").trigger("obj70798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70798) {
				console.warn("de-queueing event obj70798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70798_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70800();
function runjs_70800() {
	window.obj70798_onTap_runningActionsCount = obj70798_onTap_runningActionsCount + 1;

	$("#obj70798").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70798_onTap_runningActionsCount = window.obj70798_onTap_runningActionsCount - 1;
if (window.obj70798_onTap_runningActionsCount < 0) {
	window.obj70798_onTap_runningActionsCount = 0;
} else if (window.obj70798_onTap_runningActionsCount == 0) {
	obj70798_onTap_actionGroup1();
}
	}, 1);
}







};
obj70798_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70798_onTap_activeActionGroupIndex = -1;
		$("#obj70798").trigger("obj70798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70798) {
				console.warn("de-queueing event obj70798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70798_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70801();
function switchText_70801() {
	window.obj70798_onTap_runningActionsCount = obj70798_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70798_onTap_runningActionsCount = window.obj70798_onTap_runningActionsCount - 1;
if (window.obj70798_onTap_runningActionsCount < 0) {
	window.obj70798_onTap_runningActionsCount = 0;
} else if (window.obj70798_onTap_runningActionsCount == 0) {
	obj70798_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70798_onTap_runningActionsCount = window.obj70798_onTap_runningActionsCount - 1;
if (window.obj70798_onTap_runningActionsCount < 0) {
	window.obj70798_onTap_runningActionsCount = 0;
} else if (window.obj70798_onTap_runningActionsCount == 0) {
	obj70798_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70798_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70798_onTap_activeActionGroupIndex = -1;
		$("#obj70798").trigger("obj70798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70798) {
				console.warn("de-queueing event obj70798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70798_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70716 
playAudio_70802();
function playAudio_70802() {
	window.obj70798_onTap_runningActionsCount = obj70798_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70716")[0];
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
		    window.obj70798_onTap_runningActionsCount = window.obj70798_onTap_runningActionsCount - 1;
if (window.obj70798_onTap_runningActionsCount < 0) {
	window.obj70798_onTap_runningActionsCount = 0;
} else if (window.obj70798_onTap_runningActionsCount == 0) {
	obj70798_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70798_onTap_runningActionsCount = window.obj70798_onTap_runningActionsCount - 1;
if (window.obj70798_onTap_runningActionsCount < 0) {
	window.obj70798_onTap_runningActionsCount = 0;
} else if (window.obj70798_onTap_runningActionsCount == 0) {
	obj70798_onTap_actionGroup3();
}
	}
}









};
obj70798_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70798_onTap_activeActionGroupIndex = -1;
		$("#obj70798").trigger("obj70798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70798) {
				console.warn("de-queueing event obj70798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70798_onTap_activeActionGroupIndex = 3;
	





















};
obj70790_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70790_onTap_activeActionGroupIndex = -1;
		$("#obj70790").trigger("obj70790_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70790) {
				console.warn("de-queueing event obj70790." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70790").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70790_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70792();
function runjs_70792() {
	window.obj70790_onTap_runningActionsCount = obj70790_onTap_runningActionsCount + 1;

	$("#obj70790").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70790_onTap_runningActionsCount = window.obj70790_onTap_runningActionsCount - 1;
if (window.obj70790_onTap_runningActionsCount < 0) {
	window.obj70790_onTap_runningActionsCount = 0;
} else if (window.obj70790_onTap_runningActionsCount == 0) {
	obj70790_onTap_actionGroup1();
}
	}, 1);
}







};
obj70790_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70790_onTap_activeActionGroupIndex = -1;
		$("#obj70790").trigger("obj70790_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70790) {
				console.warn("de-queueing event obj70790." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70790").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70790_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70793();
function switchText_70793() {
	window.obj70790_onTap_runningActionsCount = obj70790_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70790_onTap_runningActionsCount = window.obj70790_onTap_runningActionsCount - 1;
if (window.obj70790_onTap_runningActionsCount < 0) {
	window.obj70790_onTap_runningActionsCount = 0;
} else if (window.obj70790_onTap_runningActionsCount == 0) {
	obj70790_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70790_onTap_runningActionsCount = window.obj70790_onTap_runningActionsCount - 1;
if (window.obj70790_onTap_runningActionsCount < 0) {
	window.obj70790_onTap_runningActionsCount = 0;
} else if (window.obj70790_onTap_runningActionsCount == 0) {
	obj70790_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70790_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70790_onTap_activeActionGroupIndex = -1;
		$("#obj70790").trigger("obj70790_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70790) {
				console.warn("de-queueing event obj70790." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70790").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70790_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70794();
function playAudio_70794() {
	window.obj70790_onTap_runningActionsCount = obj70790_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70790_onTap_runningActionsCount = window.obj70790_onTap_runningActionsCount - 1;
if (window.obj70790_onTap_runningActionsCount < 0) {
	window.obj70790_onTap_runningActionsCount = 0;
} else if (window.obj70790_onTap_runningActionsCount == 0) {
	obj70790_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70790_onTap_runningActionsCount = window.obj70790_onTap_runningActionsCount - 1;
if (window.obj70790_onTap_runningActionsCount < 0) {
	window.obj70790_onTap_runningActionsCount = 0;
} else if (window.obj70790_onTap_runningActionsCount == 0) {
	obj70790_onTap_actionGroup3();
}
	}
}









};
obj70790_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70790_onTap_activeActionGroupIndex = -1;
		$("#obj70790").trigger("obj70790_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70790) {
				console.warn("de-queueing event obj70790." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70790").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70790_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70795();
function switchText_70795() {
	window.obj70790_onTap_runningActionsCount = obj70790_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70790_onTap_runningActionsCount = window.obj70790_onTap_runningActionsCount - 1;
if (window.obj70790_onTap_runningActionsCount < 0) {
	window.obj70790_onTap_runningActionsCount = 0;
} else if (window.obj70790_onTap_runningActionsCount == 0) {
	obj70790_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70790_onTap_runningActionsCount = window.obj70790_onTap_runningActionsCount - 1;
if (window.obj70790_onTap_runningActionsCount < 0) {
	window.obj70790_onTap_runningActionsCount = 0;
} else if (window.obj70790_onTap_runningActionsCount == 0) {
	obj70790_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70790_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70790_onTap_activeActionGroupIndex = -1;
		$("#obj70790").trigger("obj70790_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70790) {
				console.warn("de-queueing event obj70790." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70790").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70790_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70796();
function runjs_70796() {
	window.obj70790_onTap_runningActionsCount = obj70790_onTap_runningActionsCount + 1;

	$("#obj70790").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70790_onTap_runningActionsCount = window.obj70790_onTap_runningActionsCount - 1;
if (window.obj70790_onTap_runningActionsCount < 0) {
	window.obj70790_onTap_runningActionsCount = 0;
} else if (window.obj70790_onTap_runningActionsCount == 0) {
	obj70790_onTap_actionGroup5();
}
	}, 1);
}







};
obj70790_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70790_onTap_activeActionGroupIndex = -1;
		$("#obj70790").trigger("obj70790_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70790) {
				console.warn("de-queueing event obj70790." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70790").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70790_onTap_activeActionGroupIndex = 5;
	





















};
obj70784_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70784_onTap_activeActionGroupIndex = -1;
		$("#obj70784").trigger("obj70784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70784) {
				console.warn("de-queueing event obj70784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70784_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70786();
function runjs_70786() {
	window.obj70784_onTap_runningActionsCount = obj70784_onTap_runningActionsCount + 1;

	$("#obj70784").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70784_onTap_runningActionsCount = window.obj70784_onTap_runningActionsCount - 1;
if (window.obj70784_onTap_runningActionsCount < 0) {
	window.obj70784_onTap_runningActionsCount = 0;
} else if (window.obj70784_onTap_runningActionsCount == 0) {
	obj70784_onTap_actionGroup1();
}
	}, 1);
}







};
obj70784_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70784_onTap_activeActionGroupIndex = -1;
		$("#obj70784").trigger("obj70784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70784) {
				console.warn("de-queueing event obj70784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70784_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70787();
function switchText_70787() {
	window.obj70784_onTap_runningActionsCount = obj70784_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70784_onTap_runningActionsCount = window.obj70784_onTap_runningActionsCount - 1;
if (window.obj70784_onTap_runningActionsCount < 0) {
	window.obj70784_onTap_runningActionsCount = 0;
} else if (window.obj70784_onTap_runningActionsCount == 0) {
	obj70784_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70784_onTap_runningActionsCount = window.obj70784_onTap_runningActionsCount - 1;
if (window.obj70784_onTap_runningActionsCount < 0) {
	window.obj70784_onTap_runningActionsCount = 0;
} else if (window.obj70784_onTap_runningActionsCount == 0) {
	obj70784_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70784_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70784_onTap_activeActionGroupIndex = -1;
		$("#obj70784").trigger("obj70784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70784) {
				console.warn("de-queueing event obj70784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70784_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70716 
playAudio_70788();
function playAudio_70788() {
	window.obj70784_onTap_runningActionsCount = obj70784_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70716")[0];
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
		    window.obj70784_onTap_runningActionsCount = window.obj70784_onTap_runningActionsCount - 1;
if (window.obj70784_onTap_runningActionsCount < 0) {
	window.obj70784_onTap_runningActionsCount = 0;
} else if (window.obj70784_onTap_runningActionsCount == 0) {
	obj70784_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70784_onTap_runningActionsCount = window.obj70784_onTap_runningActionsCount - 1;
if (window.obj70784_onTap_runningActionsCount < 0) {
	window.obj70784_onTap_runningActionsCount = 0;
} else if (window.obj70784_onTap_runningActionsCount == 0) {
	obj70784_onTap_actionGroup3();
}
	}
}









};
obj70784_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70784_onTap_activeActionGroupIndex = -1;
		$("#obj70784").trigger("obj70784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70784) {
				console.warn("de-queueing event obj70784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70784_onTap_activeActionGroupIndex = 3;
	





















};
obj70776_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70776_onTap_activeActionGroupIndex = -1;
		$("#obj70776").trigger("obj70776_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70776) {
				console.warn("de-queueing event obj70776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70776_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70778();
function runjs_70778() {
	window.obj70776_onTap_runningActionsCount = obj70776_onTap_runningActionsCount + 1;

	$("#obj70776").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70776_onTap_runningActionsCount = window.obj70776_onTap_runningActionsCount - 1;
if (window.obj70776_onTap_runningActionsCount < 0) {
	window.obj70776_onTap_runningActionsCount = 0;
} else if (window.obj70776_onTap_runningActionsCount == 0) {
	obj70776_onTap_actionGroup1();
}
	}, 1);
}







};
obj70776_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70776_onTap_activeActionGroupIndex = -1;
		$("#obj70776").trigger("obj70776_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70776) {
				console.warn("de-queueing event obj70776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70776_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70779();
function switchText_70779() {
	window.obj70776_onTap_runningActionsCount = obj70776_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70776_onTap_runningActionsCount = window.obj70776_onTap_runningActionsCount - 1;
if (window.obj70776_onTap_runningActionsCount < 0) {
	window.obj70776_onTap_runningActionsCount = 0;
} else if (window.obj70776_onTap_runningActionsCount == 0) {
	obj70776_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70776_onTap_runningActionsCount = window.obj70776_onTap_runningActionsCount - 1;
if (window.obj70776_onTap_runningActionsCount < 0) {
	window.obj70776_onTap_runningActionsCount = 0;
} else if (window.obj70776_onTap_runningActionsCount == 0) {
	obj70776_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70776_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70776_onTap_activeActionGroupIndex = -1;
		$("#obj70776").trigger("obj70776_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70776) {
				console.warn("de-queueing event obj70776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70776_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70780();
function playAudio_70780() {
	window.obj70776_onTap_runningActionsCount = obj70776_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70776_onTap_runningActionsCount = window.obj70776_onTap_runningActionsCount - 1;
if (window.obj70776_onTap_runningActionsCount < 0) {
	window.obj70776_onTap_runningActionsCount = 0;
} else if (window.obj70776_onTap_runningActionsCount == 0) {
	obj70776_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70776_onTap_runningActionsCount = window.obj70776_onTap_runningActionsCount - 1;
if (window.obj70776_onTap_runningActionsCount < 0) {
	window.obj70776_onTap_runningActionsCount = 0;
} else if (window.obj70776_onTap_runningActionsCount == 0) {
	obj70776_onTap_actionGroup3();
}
	}
}









};
obj70776_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70776_onTap_activeActionGroupIndex = -1;
		$("#obj70776").trigger("obj70776_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70776) {
				console.warn("de-queueing event obj70776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70776_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70781();
function switchText_70781() {
	window.obj70776_onTap_runningActionsCount = obj70776_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70776_onTap_runningActionsCount = window.obj70776_onTap_runningActionsCount - 1;
if (window.obj70776_onTap_runningActionsCount < 0) {
	window.obj70776_onTap_runningActionsCount = 0;
} else if (window.obj70776_onTap_runningActionsCount == 0) {
	obj70776_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70776_onTap_runningActionsCount = window.obj70776_onTap_runningActionsCount - 1;
if (window.obj70776_onTap_runningActionsCount < 0) {
	window.obj70776_onTap_runningActionsCount = 0;
} else if (window.obj70776_onTap_runningActionsCount == 0) {
	obj70776_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70776_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70776_onTap_activeActionGroupIndex = -1;
		$("#obj70776").trigger("obj70776_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70776) {
				console.warn("de-queueing event obj70776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70776_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70782();
function runjs_70782() {
	window.obj70776_onTap_runningActionsCount = obj70776_onTap_runningActionsCount + 1;

	$("#obj70776").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70776_onTap_runningActionsCount = window.obj70776_onTap_runningActionsCount - 1;
if (window.obj70776_onTap_runningActionsCount < 0) {
	window.obj70776_onTap_runningActionsCount = 0;
} else if (window.obj70776_onTap_runningActionsCount == 0) {
	obj70776_onTap_actionGroup5();
}
	}, 1);
}







};
obj70776_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70776_onTap_activeActionGroupIndex = -1;
		$("#obj70776").trigger("obj70776_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70776) {
				console.warn("de-queueing event obj70776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70776_onTap_activeActionGroupIndex = 5;
	





















};
obj70768_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70768_onTap_activeActionGroupIndex = -1;
		$("#obj70768").trigger("obj70768_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70768) {
				console.warn("de-queueing event obj70768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70768_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70770();
function runjs_70770() {
	window.obj70768_onTap_runningActionsCount = obj70768_onTap_runningActionsCount + 1;

	$("#obj70768").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70768_onTap_runningActionsCount = window.obj70768_onTap_runningActionsCount - 1;
if (window.obj70768_onTap_runningActionsCount < 0) {
	window.obj70768_onTap_runningActionsCount = 0;
} else if (window.obj70768_onTap_runningActionsCount == 0) {
	obj70768_onTap_actionGroup1();
}
	}, 1);
}







};
obj70768_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70768_onTap_activeActionGroupIndex = -1;
		$("#obj70768").trigger("obj70768_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70768) {
				console.warn("de-queueing event obj70768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70768_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70771();
function switchText_70771() {
	window.obj70768_onTap_runningActionsCount = obj70768_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70768_onTap_runningActionsCount = window.obj70768_onTap_runningActionsCount - 1;
if (window.obj70768_onTap_runningActionsCount < 0) {
	window.obj70768_onTap_runningActionsCount = 0;
} else if (window.obj70768_onTap_runningActionsCount == 0) {
	obj70768_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70768_onTap_runningActionsCount = window.obj70768_onTap_runningActionsCount - 1;
if (window.obj70768_onTap_runningActionsCount < 0) {
	window.obj70768_onTap_runningActionsCount = 0;
} else if (window.obj70768_onTap_runningActionsCount == 0) {
	obj70768_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70768_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70768_onTap_activeActionGroupIndex = -1;
		$("#obj70768").trigger("obj70768_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70768) {
				console.warn("de-queueing event obj70768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70768_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70772();
function playAudio_70772() {
	window.obj70768_onTap_runningActionsCount = obj70768_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70768_onTap_runningActionsCount = window.obj70768_onTap_runningActionsCount - 1;
if (window.obj70768_onTap_runningActionsCount < 0) {
	window.obj70768_onTap_runningActionsCount = 0;
} else if (window.obj70768_onTap_runningActionsCount == 0) {
	obj70768_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70768_onTap_runningActionsCount = window.obj70768_onTap_runningActionsCount - 1;
if (window.obj70768_onTap_runningActionsCount < 0) {
	window.obj70768_onTap_runningActionsCount = 0;
} else if (window.obj70768_onTap_runningActionsCount == 0) {
	obj70768_onTap_actionGroup3();
}
	}
}









};
obj70768_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70768_onTap_activeActionGroupIndex = -1;
		$("#obj70768").trigger("obj70768_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70768) {
				console.warn("de-queueing event obj70768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70768_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70773();
function switchText_70773() {
	window.obj70768_onTap_runningActionsCount = obj70768_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70768_onTap_runningActionsCount = window.obj70768_onTap_runningActionsCount - 1;
if (window.obj70768_onTap_runningActionsCount < 0) {
	window.obj70768_onTap_runningActionsCount = 0;
} else if (window.obj70768_onTap_runningActionsCount == 0) {
	obj70768_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70768_onTap_runningActionsCount = window.obj70768_onTap_runningActionsCount - 1;
if (window.obj70768_onTap_runningActionsCount < 0) {
	window.obj70768_onTap_runningActionsCount = 0;
} else if (window.obj70768_onTap_runningActionsCount == 0) {
	obj70768_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70768_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70768_onTap_activeActionGroupIndex = -1;
		$("#obj70768").trigger("obj70768_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70768) {
				console.warn("de-queueing event obj70768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70768_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70774();
function runjs_70774() {
	window.obj70768_onTap_runningActionsCount = obj70768_onTap_runningActionsCount + 1;

	$("#obj70768").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70768_onTap_runningActionsCount = window.obj70768_onTap_runningActionsCount - 1;
if (window.obj70768_onTap_runningActionsCount < 0) {
	window.obj70768_onTap_runningActionsCount = 0;
} else if (window.obj70768_onTap_runningActionsCount == 0) {
	obj70768_onTap_actionGroup5();
}
	}, 1);
}







};
obj70768_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70768_onTap_activeActionGroupIndex = -1;
		$("#obj70768").trigger("obj70768_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70768) {
				console.warn("de-queueing event obj70768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70768_onTap_activeActionGroupIndex = 5;
	





















};
obj70762_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70762_onTap_activeActionGroupIndex = -1;
		$("#obj70762").trigger("obj70762_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70762) {
				console.warn("de-queueing event obj70762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70762_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70764();
function runjs_70764() {
	window.obj70762_onTap_runningActionsCount = obj70762_onTap_runningActionsCount + 1;

	$("#obj70762").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70762_onTap_runningActionsCount = window.obj70762_onTap_runningActionsCount - 1;
if (window.obj70762_onTap_runningActionsCount < 0) {
	window.obj70762_onTap_runningActionsCount = 0;
} else if (window.obj70762_onTap_runningActionsCount == 0) {
	obj70762_onTap_actionGroup1();
}
	}, 1);
}







};
obj70762_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70762_onTap_activeActionGroupIndex = -1;
		$("#obj70762").trigger("obj70762_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70762) {
				console.warn("de-queueing event obj70762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70762_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70765();
function switchText_70765() {
	window.obj70762_onTap_runningActionsCount = obj70762_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70762_onTap_runningActionsCount = window.obj70762_onTap_runningActionsCount - 1;
if (window.obj70762_onTap_runningActionsCount < 0) {
	window.obj70762_onTap_runningActionsCount = 0;
} else if (window.obj70762_onTap_runningActionsCount == 0) {
	obj70762_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70762_onTap_runningActionsCount = window.obj70762_onTap_runningActionsCount - 1;
if (window.obj70762_onTap_runningActionsCount < 0) {
	window.obj70762_onTap_runningActionsCount = 0;
} else if (window.obj70762_onTap_runningActionsCount == 0) {
	obj70762_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70762_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70762_onTap_activeActionGroupIndex = -1;
		$("#obj70762").trigger("obj70762_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70762) {
				console.warn("de-queueing event obj70762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70762_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70716 
playAudio_70766();
function playAudio_70766() {
	window.obj70762_onTap_runningActionsCount = obj70762_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70716")[0];
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
		    window.obj70762_onTap_runningActionsCount = window.obj70762_onTap_runningActionsCount - 1;
if (window.obj70762_onTap_runningActionsCount < 0) {
	window.obj70762_onTap_runningActionsCount = 0;
} else if (window.obj70762_onTap_runningActionsCount == 0) {
	obj70762_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70762_onTap_runningActionsCount = window.obj70762_onTap_runningActionsCount - 1;
if (window.obj70762_onTap_runningActionsCount < 0) {
	window.obj70762_onTap_runningActionsCount = 0;
} else if (window.obj70762_onTap_runningActionsCount == 0) {
	obj70762_onTap_actionGroup3();
}
	}
}









};
obj70762_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70762_onTap_activeActionGroupIndex = -1;
		$("#obj70762").trigger("obj70762_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70762) {
				console.warn("de-queueing event obj70762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70762_onTap_activeActionGroupIndex = 3;
	





















};
obj70754_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70754_onTap_activeActionGroupIndex = -1;
		$("#obj70754").trigger("obj70754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70754) {
				console.warn("de-queueing event obj70754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70754_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70756();
function runjs_70756() {
	window.obj70754_onTap_runningActionsCount = obj70754_onTap_runningActionsCount + 1;

	$("#obj70754").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70754_onTap_runningActionsCount = window.obj70754_onTap_runningActionsCount - 1;
if (window.obj70754_onTap_runningActionsCount < 0) {
	window.obj70754_onTap_runningActionsCount = 0;
} else if (window.obj70754_onTap_runningActionsCount == 0) {
	obj70754_onTap_actionGroup1();
}
	}, 1);
}







};
obj70754_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70754_onTap_activeActionGroupIndex = -1;
		$("#obj70754").trigger("obj70754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70754) {
				console.warn("de-queueing event obj70754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70754_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70757();
function switchText_70757() {
	window.obj70754_onTap_runningActionsCount = obj70754_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70754_onTap_runningActionsCount = window.obj70754_onTap_runningActionsCount - 1;
if (window.obj70754_onTap_runningActionsCount < 0) {
	window.obj70754_onTap_runningActionsCount = 0;
} else if (window.obj70754_onTap_runningActionsCount == 0) {
	obj70754_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70754_onTap_runningActionsCount = window.obj70754_onTap_runningActionsCount - 1;
if (window.obj70754_onTap_runningActionsCount < 0) {
	window.obj70754_onTap_runningActionsCount = 0;
} else if (window.obj70754_onTap_runningActionsCount == 0) {
	obj70754_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70754_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70754_onTap_activeActionGroupIndex = -1;
		$("#obj70754").trigger("obj70754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70754) {
				console.warn("de-queueing event obj70754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70754_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70758();
function playAudio_70758() {
	window.obj70754_onTap_runningActionsCount = obj70754_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70754_onTap_runningActionsCount = window.obj70754_onTap_runningActionsCount - 1;
if (window.obj70754_onTap_runningActionsCount < 0) {
	window.obj70754_onTap_runningActionsCount = 0;
} else if (window.obj70754_onTap_runningActionsCount == 0) {
	obj70754_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70754_onTap_runningActionsCount = window.obj70754_onTap_runningActionsCount - 1;
if (window.obj70754_onTap_runningActionsCount < 0) {
	window.obj70754_onTap_runningActionsCount = 0;
} else if (window.obj70754_onTap_runningActionsCount == 0) {
	obj70754_onTap_actionGroup3();
}
	}
}









};
obj70754_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70754_onTap_activeActionGroupIndex = -1;
		$("#obj70754").trigger("obj70754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70754) {
				console.warn("de-queueing event obj70754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70754_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70759();
function switchText_70759() {
	window.obj70754_onTap_runningActionsCount = obj70754_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70754_onTap_runningActionsCount = window.obj70754_onTap_runningActionsCount - 1;
if (window.obj70754_onTap_runningActionsCount < 0) {
	window.obj70754_onTap_runningActionsCount = 0;
} else if (window.obj70754_onTap_runningActionsCount == 0) {
	obj70754_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70754_onTap_runningActionsCount = window.obj70754_onTap_runningActionsCount - 1;
if (window.obj70754_onTap_runningActionsCount < 0) {
	window.obj70754_onTap_runningActionsCount = 0;
} else if (window.obj70754_onTap_runningActionsCount == 0) {
	obj70754_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70754_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70754_onTap_activeActionGroupIndex = -1;
		$("#obj70754").trigger("obj70754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70754) {
				console.warn("de-queueing event obj70754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70754_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70760();
function runjs_70760() {
	window.obj70754_onTap_runningActionsCount = obj70754_onTap_runningActionsCount + 1;

	$("#obj70754").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70754_onTap_runningActionsCount = window.obj70754_onTap_runningActionsCount - 1;
if (window.obj70754_onTap_runningActionsCount < 0) {
	window.obj70754_onTap_runningActionsCount = 0;
} else if (window.obj70754_onTap_runningActionsCount == 0) {
	obj70754_onTap_actionGroup5();
}
	}, 1);
}







};
obj70754_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70754_onTap_activeActionGroupIndex = -1;
		$("#obj70754").trigger("obj70754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70754) {
				console.warn("de-queueing event obj70754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70754_onTap_activeActionGroupIndex = 5;
	





















};
obj70746_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70746_onTap_activeActionGroupIndex = -1;
		$("#obj70746").trigger("obj70746_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70746) {
				console.warn("de-queueing event obj70746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70746_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70748();
function runjs_70748() {
	window.obj70746_onTap_runningActionsCount = obj70746_onTap_runningActionsCount + 1;

	$("#obj70746").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70746_onTap_runningActionsCount = window.obj70746_onTap_runningActionsCount - 1;
if (window.obj70746_onTap_runningActionsCount < 0) {
	window.obj70746_onTap_runningActionsCount = 0;
} else if (window.obj70746_onTap_runningActionsCount == 0) {
	obj70746_onTap_actionGroup1();
}
	}, 1);
}







};
obj70746_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70746_onTap_activeActionGroupIndex = -1;
		$("#obj70746").trigger("obj70746_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70746) {
				console.warn("de-queueing event obj70746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70746_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70749();
function switchText_70749() {
	window.obj70746_onTap_runningActionsCount = obj70746_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70746_onTap_runningActionsCount = window.obj70746_onTap_runningActionsCount - 1;
if (window.obj70746_onTap_runningActionsCount < 0) {
	window.obj70746_onTap_runningActionsCount = 0;
} else if (window.obj70746_onTap_runningActionsCount == 0) {
	obj70746_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70746_onTap_runningActionsCount = window.obj70746_onTap_runningActionsCount - 1;
if (window.obj70746_onTap_runningActionsCount < 0) {
	window.obj70746_onTap_runningActionsCount = 0;
} else if (window.obj70746_onTap_runningActionsCount == 0) {
	obj70746_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70746_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70746_onTap_activeActionGroupIndex = -1;
		$("#obj70746").trigger("obj70746_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70746) {
				console.warn("de-queueing event obj70746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70746_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70750();
function playAudio_70750() {
	window.obj70746_onTap_runningActionsCount = obj70746_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70746_onTap_runningActionsCount = window.obj70746_onTap_runningActionsCount - 1;
if (window.obj70746_onTap_runningActionsCount < 0) {
	window.obj70746_onTap_runningActionsCount = 0;
} else if (window.obj70746_onTap_runningActionsCount == 0) {
	obj70746_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70746_onTap_runningActionsCount = window.obj70746_onTap_runningActionsCount - 1;
if (window.obj70746_onTap_runningActionsCount < 0) {
	window.obj70746_onTap_runningActionsCount = 0;
} else if (window.obj70746_onTap_runningActionsCount == 0) {
	obj70746_onTap_actionGroup3();
}
	}
}









};
obj70746_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70746_onTap_activeActionGroupIndex = -1;
		$("#obj70746").trigger("obj70746_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70746) {
				console.warn("de-queueing event obj70746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70746_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70751();
function switchText_70751() {
	window.obj70746_onTap_runningActionsCount = obj70746_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70746_onTap_runningActionsCount = window.obj70746_onTap_runningActionsCount - 1;
if (window.obj70746_onTap_runningActionsCount < 0) {
	window.obj70746_onTap_runningActionsCount = 0;
} else if (window.obj70746_onTap_runningActionsCount == 0) {
	obj70746_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70746_onTap_runningActionsCount = window.obj70746_onTap_runningActionsCount - 1;
if (window.obj70746_onTap_runningActionsCount < 0) {
	window.obj70746_onTap_runningActionsCount = 0;
} else if (window.obj70746_onTap_runningActionsCount == 0) {
	obj70746_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70746_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70746_onTap_activeActionGroupIndex = -1;
		$("#obj70746").trigger("obj70746_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70746) {
				console.warn("de-queueing event obj70746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70746_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70752();
function runjs_70752() {
	window.obj70746_onTap_runningActionsCount = obj70746_onTap_runningActionsCount + 1;

	$("#obj70746").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70746_onTap_runningActionsCount = window.obj70746_onTap_runningActionsCount - 1;
if (window.obj70746_onTap_runningActionsCount < 0) {
	window.obj70746_onTap_runningActionsCount = 0;
} else if (window.obj70746_onTap_runningActionsCount == 0) {
	obj70746_onTap_actionGroup5();
}
	}, 1);
}







};
obj70746_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70746_onTap_activeActionGroupIndex = -1;
		$("#obj70746").trigger("obj70746_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70746) {
				console.warn("de-queueing event obj70746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70746_onTap_activeActionGroupIndex = 5;
	





















};
obj70738_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70738_onTap_activeActionGroupIndex = -1;
		$("#obj70738").trigger("obj70738_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70738) {
				console.warn("de-queueing event obj70738." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70738").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70738_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70740();
function runjs_70740() {
	window.obj70738_onTap_runningActionsCount = obj70738_onTap_runningActionsCount + 1;

	$("#obj70738").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70738_onTap_runningActionsCount = window.obj70738_onTap_runningActionsCount - 1;
if (window.obj70738_onTap_runningActionsCount < 0) {
	window.obj70738_onTap_runningActionsCount = 0;
} else if (window.obj70738_onTap_runningActionsCount == 0) {
	obj70738_onTap_actionGroup1();
}
	}, 1);
}







};
obj70738_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70738_onTap_activeActionGroupIndex = -1;
		$("#obj70738").trigger("obj70738_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70738) {
				console.warn("de-queueing event obj70738." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70738").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70738_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70741();
function switchText_70741() {
	window.obj70738_onTap_runningActionsCount = obj70738_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70738_onTap_runningActionsCount = window.obj70738_onTap_runningActionsCount - 1;
if (window.obj70738_onTap_runningActionsCount < 0) {
	window.obj70738_onTap_runningActionsCount = 0;
} else if (window.obj70738_onTap_runningActionsCount == 0) {
	obj70738_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70738_onTap_runningActionsCount = window.obj70738_onTap_runningActionsCount - 1;
if (window.obj70738_onTap_runningActionsCount < 0) {
	window.obj70738_onTap_runningActionsCount = 0;
} else if (window.obj70738_onTap_runningActionsCount == 0) {
	obj70738_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70738_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70738_onTap_activeActionGroupIndex = -1;
		$("#obj70738").trigger("obj70738_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70738) {
				console.warn("de-queueing event obj70738." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70738").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70738_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70742();
function playAudio_70742() {
	window.obj70738_onTap_runningActionsCount = obj70738_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70738_onTap_runningActionsCount = window.obj70738_onTap_runningActionsCount - 1;
if (window.obj70738_onTap_runningActionsCount < 0) {
	window.obj70738_onTap_runningActionsCount = 0;
} else if (window.obj70738_onTap_runningActionsCount == 0) {
	obj70738_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70738_onTap_runningActionsCount = window.obj70738_onTap_runningActionsCount - 1;
if (window.obj70738_onTap_runningActionsCount < 0) {
	window.obj70738_onTap_runningActionsCount = 0;
} else if (window.obj70738_onTap_runningActionsCount == 0) {
	obj70738_onTap_actionGroup3();
}
	}
}









};
obj70738_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70738_onTap_activeActionGroupIndex = -1;
		$("#obj70738").trigger("obj70738_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70738) {
				console.warn("de-queueing event obj70738." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70738").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70738_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70743();
function switchText_70743() {
	window.obj70738_onTap_runningActionsCount = obj70738_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70738_onTap_runningActionsCount = window.obj70738_onTap_runningActionsCount - 1;
if (window.obj70738_onTap_runningActionsCount < 0) {
	window.obj70738_onTap_runningActionsCount = 0;
} else if (window.obj70738_onTap_runningActionsCount == 0) {
	obj70738_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70738_onTap_runningActionsCount = window.obj70738_onTap_runningActionsCount - 1;
if (window.obj70738_onTap_runningActionsCount < 0) {
	window.obj70738_onTap_runningActionsCount = 0;
} else if (window.obj70738_onTap_runningActionsCount == 0) {
	obj70738_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70738_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70738_onTap_activeActionGroupIndex = -1;
		$("#obj70738").trigger("obj70738_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70738) {
				console.warn("de-queueing event obj70738." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70738").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70738_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70744();
function runjs_70744() {
	window.obj70738_onTap_runningActionsCount = obj70738_onTap_runningActionsCount + 1;

	$("#obj70738").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70738_onTap_runningActionsCount = window.obj70738_onTap_runningActionsCount - 1;
if (window.obj70738_onTap_runningActionsCount < 0) {
	window.obj70738_onTap_runningActionsCount = 0;
} else if (window.obj70738_onTap_runningActionsCount == 0) {
	obj70738_onTap_actionGroup5();
}
	}, 1);
}







};
obj70738_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70738_onTap_activeActionGroupIndex = -1;
		$("#obj70738").trigger("obj70738_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70738) {
				console.warn("de-queueing event obj70738." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70738").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70738_onTap_activeActionGroupIndex = 5;
	





















};
obj70732_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70732_onTap_activeActionGroupIndex = -1;
		$("#obj70732").trigger("obj70732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70732) {
				console.warn("de-queueing event obj70732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70732_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70734();
function runjs_70734() {
	window.obj70732_onTap_runningActionsCount = obj70732_onTap_runningActionsCount + 1;

	$("#obj70732").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70732_onTap_runningActionsCount = window.obj70732_onTap_runningActionsCount - 1;
if (window.obj70732_onTap_runningActionsCount < 0) {
	window.obj70732_onTap_runningActionsCount = 0;
} else if (window.obj70732_onTap_runningActionsCount == 0) {
	obj70732_onTap_actionGroup1();
}
	}, 1);
}







};
obj70732_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70732_onTap_activeActionGroupIndex = -1;
		$("#obj70732").trigger("obj70732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70732) {
				console.warn("de-queueing event obj70732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70732_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70735();
function switchText_70735() {
	window.obj70732_onTap_runningActionsCount = obj70732_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70732_onTap_runningActionsCount = window.obj70732_onTap_runningActionsCount - 1;
if (window.obj70732_onTap_runningActionsCount < 0) {
	window.obj70732_onTap_runningActionsCount = 0;
} else if (window.obj70732_onTap_runningActionsCount == 0) {
	obj70732_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70732_onTap_runningActionsCount = window.obj70732_onTap_runningActionsCount - 1;
if (window.obj70732_onTap_runningActionsCount < 0) {
	window.obj70732_onTap_runningActionsCount = 0;
} else if (window.obj70732_onTap_runningActionsCount == 0) {
	obj70732_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70732_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70732_onTap_activeActionGroupIndex = -1;
		$("#obj70732").trigger("obj70732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70732) {
				console.warn("de-queueing event obj70732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70732_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70716 
playAudio_70736();
function playAudio_70736() {
	window.obj70732_onTap_runningActionsCount = obj70732_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70716")[0];
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
		    window.obj70732_onTap_runningActionsCount = window.obj70732_onTap_runningActionsCount - 1;
if (window.obj70732_onTap_runningActionsCount < 0) {
	window.obj70732_onTap_runningActionsCount = 0;
} else if (window.obj70732_onTap_runningActionsCount == 0) {
	obj70732_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70732_onTap_runningActionsCount = window.obj70732_onTap_runningActionsCount - 1;
if (window.obj70732_onTap_runningActionsCount < 0) {
	window.obj70732_onTap_runningActionsCount = 0;
} else if (window.obj70732_onTap_runningActionsCount == 0) {
	obj70732_onTap_actionGroup3();
}
	}
}









};
obj70732_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70732_onTap_activeActionGroupIndex = -1;
		$("#obj70732").trigger("obj70732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70732) {
				console.warn("de-queueing event obj70732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70732_onTap_activeActionGroupIndex = 3;
	





















};
obj70724_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70724_onTap_activeActionGroupIndex = -1;
		$("#obj70724").trigger("obj70724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70724) {
				console.warn("de-queueing event obj70724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70724_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70726();
function runjs_70726() {
	window.obj70724_onTap_runningActionsCount = obj70724_onTap_runningActionsCount + 1;

	$("#obj70724").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70724_onTap_runningActionsCount = window.obj70724_onTap_runningActionsCount - 1;
if (window.obj70724_onTap_runningActionsCount < 0) {
	window.obj70724_onTap_runningActionsCount = 0;
} else if (window.obj70724_onTap_runningActionsCount == 0) {
	obj70724_onTap_actionGroup1();
}
	}, 1);
}







};
obj70724_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70724_onTap_activeActionGroupIndex = -1;
		$("#obj70724").trigger("obj70724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70724) {
				console.warn("de-queueing event obj70724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70724_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70727();
function switchText_70727() {
	window.obj70724_onTap_runningActionsCount = obj70724_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70724_onTap_runningActionsCount = window.obj70724_onTap_runningActionsCount - 1;
if (window.obj70724_onTap_runningActionsCount < 0) {
	window.obj70724_onTap_runningActionsCount = 0;
} else if (window.obj70724_onTap_runningActionsCount == 0) {
	obj70724_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70724_onTap_runningActionsCount = window.obj70724_onTap_runningActionsCount - 1;
if (window.obj70724_onTap_runningActionsCount < 0) {
	window.obj70724_onTap_runningActionsCount = 0;
} else if (window.obj70724_onTap_runningActionsCount == 0) {
	obj70724_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70724_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70724_onTap_activeActionGroupIndex = -1;
		$("#obj70724").trigger("obj70724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70724) {
				console.warn("de-queueing event obj70724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70724_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70714 
playAudio_70728();
function playAudio_70728() {
	window.obj70724_onTap_runningActionsCount = obj70724_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70714")[0];
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
		    window.obj70724_onTap_runningActionsCount = window.obj70724_onTap_runningActionsCount - 1;
if (window.obj70724_onTap_runningActionsCount < 0) {
	window.obj70724_onTap_runningActionsCount = 0;
} else if (window.obj70724_onTap_runningActionsCount == 0) {
	obj70724_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70724_onTap_runningActionsCount = window.obj70724_onTap_runningActionsCount - 1;
if (window.obj70724_onTap_runningActionsCount < 0) {
	window.obj70724_onTap_runningActionsCount = 0;
} else if (window.obj70724_onTap_runningActionsCount == 0) {
	obj70724_onTap_actionGroup3();
}
	}
}









};
obj70724_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70724_onTap_activeActionGroupIndex = -1;
		$("#obj70724").trigger("obj70724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70724) {
				console.warn("de-queueing event obj70724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70724_onTap_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_70729();
function switchText_70729() {
	window.obj70724_onTap_runningActionsCount = obj70724_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70724_onTap_runningActionsCount = window.obj70724_onTap_runningActionsCount - 1;
if (window.obj70724_onTap_runningActionsCount < 0) {
	window.obj70724_onTap_runningActionsCount = 0;
} else if (window.obj70724_onTap_runningActionsCount == 0) {
	obj70724_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70724_onTap_runningActionsCount = window.obj70724_onTap_runningActionsCount - 1;
if (window.obj70724_onTap_runningActionsCount < 0) {
	window.obj70724_onTap_runningActionsCount = 0;
} else if (window.obj70724_onTap_runningActionsCount == 0) {
	obj70724_onTap_actionGroup4();
}
		}, 1);
	}
}






};
obj70724_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70724_onTap_activeActionGroupIndex = -1;
		$("#obj70724").trigger("obj70724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70724) {
				console.warn("de-queueing event obj70724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70724_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70730();
function runjs_70730() {
	window.obj70724_onTap_runningActionsCount = obj70724_onTap_runningActionsCount + 1;

	$("#obj70724").css("background-color", "#2E75B6");
	
	setTimeout(function() {
		window.obj70724_onTap_runningActionsCount = window.obj70724_onTap_runningActionsCount - 1;
if (window.obj70724_onTap_runningActionsCount < 0) {
	window.obj70724_onTap_runningActionsCount = 0;
} else if (window.obj70724_onTap_runningActionsCount == 0) {
	obj70724_onTap_actionGroup5();
}
	}, 1);
}







};
obj70724_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70724_onTap_activeActionGroupIndex = -1;
		$("#obj70724").trigger("obj70724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70724) {
				console.warn("de-queueing event obj70724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70724_onTap_activeActionGroupIndex = 5;
	





















};
obj70718_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70718_onTap_activeActionGroupIndex = -1;
		$("#obj70718").trigger("obj70718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70718) {
				console.warn("de-queueing event obj70718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70718_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70720();
function runjs_70720() {
	window.obj70718_onTap_runningActionsCount = obj70718_onTap_runningActionsCount + 1;

	$("#obj70718").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70718_onTap_runningActionsCount = window.obj70718_onTap_runningActionsCount - 1;
if (window.obj70718_onTap_runningActionsCount < 0) {
	window.obj70718_onTap_runningActionsCount = 0;
} else if (window.obj70718_onTap_runningActionsCount == 0) {
	obj70718_onTap_actionGroup1();
}
	}, 1);
}







};
obj70718_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70718_onTap_activeActionGroupIndex = -1;
		$("#obj70718").trigger("obj70718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70718) {
				console.warn("de-queueing event obj70718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70718_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70721();
function switchText_70721() {
	window.obj70718_onTap_runningActionsCount = obj70718_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70866_content");
			setTimeout(function () {
				window.obj70718_onTap_runningActionsCount = window.obj70718_onTap_runningActionsCount - 1;
if (window.obj70718_onTap_runningActionsCount < 0) {
	window.obj70718_onTap_runningActionsCount = 0;
} else if (window.obj70718_onTap_runningActionsCount == 0) {
	obj70718_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70718_onTap_runningActionsCount = window.obj70718_onTap_runningActionsCount - 1;
if (window.obj70718_onTap_runningActionsCount < 0) {
	window.obj70718_onTap_runningActionsCount = 0;
} else if (window.obj70718_onTap_runningActionsCount == 0) {
	obj70718_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70718_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70718_onTap_activeActionGroupIndex = -1;
		$("#obj70718").trigger("obj70718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70718) {
				console.warn("de-queueing event obj70718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70718_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj70716 
playAudio_70722();
function playAudio_70722() {
	window.obj70718_onTap_runningActionsCount = obj70718_onTap_runningActionsCount + 1;
	var myAudio = $("#obj70716")[0];
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
		    window.obj70718_onTap_runningActionsCount = window.obj70718_onTap_runningActionsCount - 1;
if (window.obj70718_onTap_runningActionsCount < 0) {
	window.obj70718_onTap_runningActionsCount = 0;
} else if (window.obj70718_onTap_runningActionsCount == 0) {
	obj70718_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70718_onTap_runningActionsCount = window.obj70718_onTap_runningActionsCount - 1;
if (window.obj70718_onTap_runningActionsCount < 0) {
	window.obj70718_onTap_runningActionsCount = 0;
} else if (window.obj70718_onTap_runningActionsCount == 0) {
	obj70718_onTap_actionGroup3();
}
	}
}









};
obj70718_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70718_onTap_activeActionGroupIndex = -1;
		$("#obj70718").trigger("obj70718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70718) {
				console.warn("de-queueing event obj70718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70718_onTap_activeActionGroupIndex = 3;
	





















};
obj70696_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70696_onTap_activeActionGroupIndex = -1;
		$("#obj70696").trigger("obj70696_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70696) {
				console.warn("de-queueing event obj70696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70696_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj70696 
hide_70699();
function hide_70699() {
	var selector = "#obj70696";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70696_onTap_runningActionsCount = obj70696_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70696_onTap_runningActionsCount = window.obj70696_onTap_runningActionsCount - 1;
if (window.obj70696_onTap_runningActionsCount < 0) {
	window.obj70696_onTap_runningActionsCount = 0;
} else if (window.obj70696_onTap_runningActionsCount == 0) {
	obj70696_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70699(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70696_onTap_runningActionsCount = window.obj70696_onTap_runningActionsCount - 1;
if (window.obj70696_onTap_runningActionsCount < 0) {
	window.obj70696_onTap_runningActionsCount = 0;
} else if (window.obj70696_onTap_runningActionsCount == 0) {
	obj70696_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj70686 
stopMovie_70698();
function stopMovie_70698() {
	window.obj70696_onTap_runningActionsCount = obj70696_onTap_runningActionsCount + 1;
	var myVideo = $("#obj70686")[0];
	myVideo.pause();
	window.obj70696_onTap_runningActionsCount = window.obj70696_onTap_runningActionsCount - 1;
if (window.obj70696_onTap_runningActionsCount < 0) {
	window.obj70696_onTap_runningActionsCount = 0;
} else if (window.obj70696_onTap_runningActionsCount == 0) {
	obj70696_onTap_actionGroup1();
}
}
















};
obj70696_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70696_onTap_activeActionGroupIndex = -1;
		$("#obj70696").trigger("obj70696_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70696) {
				console.warn("de-queueing event obj70696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70696_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj70688
(function(){
	window.obj70696_onTap_runningActionsCount = obj70696_onTap_runningActionsCount + 1;

	var selector = "#obj70688";
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
					window.obj70696_onTap_runningActionsCount = window.obj70696_onTap_runningActionsCount - 1;
if (window.obj70696_onTap_runningActionsCount < 0) {
	window.obj70696_onTap_runningActionsCount = 0;
} else if (window.obj70696_onTap_runningActionsCount == 0) {
	obj70696_onTap_actionGroup2();
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
				window.obj70696_onTap_runningActionsCount = window.obj70696_onTap_runningActionsCount - 1;
if (window.obj70696_onTap_runningActionsCount < 0) {
	window.obj70696_onTap_runningActionsCount = 0;
} else if (window.obj70696_onTap_runningActionsCount == 0) {
	obj70696_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70696_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70696_onTap_activeActionGroupIndex = -1;
		$("#obj70696").trigger("obj70696_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70696) {
				console.warn("de-queueing event obj70696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70696_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj70686 
move_70701();
function move_70701() {
	window.obj70696_onTap_runningActionsCount = obj70696_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj70686");
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
			window.obj70696_onTap_runningActionsCount = window.obj70696_onTap_runningActionsCount - 1;
if (window.obj70696_onTap_runningActionsCount < 0) {
	window.obj70696_onTap_runningActionsCount = 0;
} else if (window.obj70696_onTap_runningActionsCount == 0) {
	obj70696_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj70696_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70696_onTap_activeActionGroupIndex = -1;
		$("#obj70696").trigger("obj70696_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70696) {
				console.warn("de-queueing event obj70696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70696_onTap_activeActionGroupIndex = 3;
	





















};
obj70688_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70688_onTap_activeActionGroupIndex = -1;
		$("#obj70688").trigger("obj70688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70688) {
				console.warn("de-queueing event obj70688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70688_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj70688 
hide_70691();
function hide_70691() {
	var selector = "#obj70688";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70688_onTap_runningActionsCount = obj70688_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70688_onTap_runningActionsCount = window.obj70688_onTap_runningActionsCount - 1;
if (window.obj70688_onTap_runningActionsCount < 0) {
	window.obj70688_onTap_runningActionsCount = 0;
} else if (window.obj70688_onTap_runningActionsCount == 0) {
	obj70688_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70691(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70688_onTap_runningActionsCount = window.obj70688_onTap_runningActionsCount - 1;
if (window.obj70688_onTap_runningActionsCount < 0) {
	window.obj70688_onTap_runningActionsCount = 0;
} else if (window.obj70688_onTap_runningActionsCount == 0) {
	obj70688_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj70686 
playPauseMovie_70690();
function playPauseMovie_70690() {
	window.obj70688_onTap_runningActionsCount = obj70688_onTap_runningActionsCount + 1;
	var myVideo = $("#obj70686")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj70688_onTap_runningActionsCount = window.obj70688_onTap_runningActionsCount - 1;
if (window.obj70688_onTap_runningActionsCount < 0) {
	window.obj70688_onTap_runningActionsCount = 0;
} else if (window.obj70688_onTap_runningActionsCount == 0) {
	obj70688_onTap_actionGroup1();
}
}

















};
obj70688_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70688_onTap_activeActionGroupIndex = -1;
		$("#obj70688").trigger("obj70688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70688) {
				console.warn("de-queueing event obj70688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70688_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj70696
(function(){
	window.obj70688_onTap_runningActionsCount = obj70688_onTap_runningActionsCount + 1;

	var selector = "#obj70696";
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
					window.obj70688_onTap_runningActionsCount = window.obj70688_onTap_runningActionsCount - 1;
if (window.obj70688_onTap_runningActionsCount < 0) {
	window.obj70688_onTap_runningActionsCount = 0;
} else if (window.obj70688_onTap_runningActionsCount == 0) {
	obj70688_onTap_actionGroup2();
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
				window.obj70688_onTap_runningActionsCount = window.obj70688_onTap_runningActionsCount - 1;
if (window.obj70688_onTap_runningActionsCount < 0) {
	window.obj70688_onTap_runningActionsCount = 0;
} else if (window.obj70688_onTap_runningActionsCount == 0) {
	obj70688_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70688_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70688_onTap_activeActionGroupIndex = -1;
		$("#obj70688").trigger("obj70688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70688) {
				console.warn("de-queueing event obj70688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70688_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj70686 
move_70693();
function move_70693() {
	window.obj70688_onTap_runningActionsCount = obj70688_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj70686");
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
			window.obj70688_onTap_runningActionsCount = window.obj70688_onTap_runningActionsCount - 1;
if (window.obj70688_onTap_runningActionsCount < 0) {
	window.obj70688_onTap_runningActionsCount = 0;
} else if (window.obj70688_onTap_runningActionsCount == 0) {
	obj70688_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj70688_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70688_onTap_activeActionGroupIndex = -1;
		$("#obj70688").trigger("obj70688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70688) {
				console.warn("de-queueing event obj70688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70688_onTap_activeActionGroupIndex = 3;
	





















};
obj87292_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87292_onTap_activeActionGroupIndex = -1;
		$("#obj87292").trigger("obj87292_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87292) {
				console.warn("de-queueing event obj87292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87292_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87297 
stopAudio_87294();
function stopAudio_87294() {
	window.obj87292_onTap_runningActionsCount = obj87292_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87297")[0];
	myAudio.pause();
	window.obj87292_onTap_runningActionsCount = window.obj87292_onTap_runningActionsCount - 1;
if (window.obj87292_onTap_runningActionsCount < 0) {
	window.obj87292_onTap_runningActionsCount = 0;
} else if (window.obj87292_onTap_runningActionsCount == 0) {
	obj87292_onTap_actionGroup1();
}
}








};
obj87292_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87292_onTap_activeActionGroupIndex = -1;
		$("#obj87292").trigger("obj87292_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87292) {
				console.warn("de-queueing event obj87292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87292_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87292 
hide_87295();
function hide_87295() {
	var selector = "#obj87292";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87292_onTap_runningActionsCount = obj87292_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87292_onTap_runningActionsCount = window.obj87292_onTap_runningActionsCount - 1;
if (window.obj87292_onTap_runningActionsCount < 0) {
	window.obj87292_onTap_runningActionsCount = 0;
} else if (window.obj87292_onTap_runningActionsCount == 0) {
	obj87292_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87295(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87292_onTap_runningActionsCount = window.obj87292_onTap_runningActionsCount - 1;
if (window.obj87292_onTap_runningActionsCount < 0) {
	window.obj87292_onTap_runningActionsCount = 0;
} else if (window.obj87292_onTap_runningActionsCount == 0) {
	obj87292_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87292_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87292_onTap_activeActionGroupIndex = -1;
		$("#obj87292").trigger("obj87292_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87292) {
				console.warn("de-queueing event obj87292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87292_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87287
(function(){
	window.obj87292_onTap_runningActionsCount = obj87292_onTap_runningActionsCount + 1;

	var selector = "#obj87287";
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
					window.obj87292_onTap_runningActionsCount = window.obj87292_onTap_runningActionsCount - 1;
if (window.obj87292_onTap_runningActionsCount < 0) {
	window.obj87292_onTap_runningActionsCount = 0;
} else if (window.obj87292_onTap_runningActionsCount == 0) {
	obj87292_onTap_actionGroup3();
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
				window.obj87292_onTap_runningActionsCount = window.obj87292_onTap_runningActionsCount - 1;
if (window.obj87292_onTap_runningActionsCount < 0) {
	window.obj87292_onTap_runningActionsCount = 0;
} else if (window.obj87292_onTap_runningActionsCount == 0) {
	obj87292_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87292_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87292_onTap_activeActionGroupIndex = -1;
		$("#obj87292").trigger("obj87292_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87292) {
				console.warn("de-queueing event obj87292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87292_onTap_activeActionGroupIndex = 3;
	





















};
obj87287_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87287_onTap_activeActionGroupIndex = -1;
		$("#obj87287").trigger("obj87287_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87287) {
				console.warn("de-queueing event obj87287." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87287").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87287_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87287 
hide_87289();
function hide_87289() {
	var selector = "#obj87287";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87287_onTap_runningActionsCount = obj87287_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87287_onTap_runningActionsCount = window.obj87287_onTap_runningActionsCount - 1;
if (window.obj87287_onTap_runningActionsCount < 0) {
	window.obj87287_onTap_runningActionsCount = 0;
} else if (window.obj87287_onTap_runningActionsCount == 0) {
	obj87287_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87289(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87287_onTap_runningActionsCount = window.obj87287_onTap_runningActionsCount - 1;
if (window.obj87287_onTap_runningActionsCount < 0) {
	window.obj87287_onTap_runningActionsCount = 0;
} else if (window.obj87287_onTap_runningActionsCount == 0) {
	obj87287_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87287_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87287_onTap_activeActionGroupIndex = -1;
		$("#obj87287").trigger("obj87287_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87287) {
				console.warn("de-queueing event obj87287." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87287").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87287_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87292
(function(){
	window.obj87287_onTap_runningActionsCount = obj87287_onTap_runningActionsCount + 1;

	var selector = "#obj87292";
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
					window.obj87287_onTap_runningActionsCount = window.obj87287_onTap_runningActionsCount - 1;
if (window.obj87287_onTap_runningActionsCount < 0) {
	window.obj87287_onTap_runningActionsCount = 0;
} else if (window.obj87287_onTap_runningActionsCount == 0) {
	obj87287_onTap_actionGroup2();
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
				window.obj87287_onTap_runningActionsCount = window.obj87287_onTap_runningActionsCount - 1;
if (window.obj87287_onTap_runningActionsCount < 0) {
	window.obj87287_onTap_runningActionsCount = 0;
} else if (window.obj87287_onTap_runningActionsCount == 0) {
	obj87287_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87287_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87287_onTap_activeActionGroupIndex = -1;
		$("#obj87287").trigger("obj87287_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87287) {
				console.warn("de-queueing event obj87287." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87287").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87287_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87297 
playAudio_87291();
function playAudio_87291() {
	window.obj87287_onTap_runningActionsCount = obj87287_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87297")[0];
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
		    window.obj87287_onTap_runningActionsCount = window.obj87287_onTap_runningActionsCount - 1;
if (window.obj87287_onTap_runningActionsCount < 0) {
	window.obj87287_onTap_runningActionsCount = 0;
} else if (window.obj87287_onTap_runningActionsCount == 0) {
	obj87287_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87287_onTap_runningActionsCount = window.obj87287_onTap_runningActionsCount - 1;
if (window.obj87287_onTap_runningActionsCount < 0) {
	window.obj87287_onTap_runningActionsCount = 0;
} else if (window.obj87287_onTap_runningActionsCount == 0) {
	obj87287_onTap_actionGroup3();
}
	}
}









};
obj87287_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87287_onTap_activeActionGroupIndex = -1;
		$("#obj87287").trigger("obj87287_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87287) {
				console.warn("de-queueing event obj87287." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87287").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87287_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj70883: Event Touch Down
 *
 */
$("#obj70883").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70883_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70883_onTap is still running");
	return;
}
var obj70883_onTap_runningActionsCount = 0;
var obj70883_onTap_loopCount = 0;
obj70883_onTap_actionGroup0();
});










/*
 *
 *   obj70880: Event Touch Down
 *
 */
$("#obj70880").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70880_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70880_onTap is still running");
	return;
}
var obj70880_onTap_runningActionsCount = 0;
var obj70880_onTap_loopCount = 0;
obj70880_onTap_actionGroup0();
});










/*
 *
 *   obj70876: Event Touch Down
 *
 */
$("#obj70876").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70876_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70876_onTap is still running");
	return;
}
var obj70876_onTap_runningActionsCount = 0;
var obj70876_onTap_loopCount = 0;
obj70876_onTap_actionGroup0();
});






































































/*
 *
 *   obj70858: Event Touch Down
 *
 */
$("#obj70858").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70858_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70858_onTap is still running");
	return;
}
var obj70858_onTap_runningActionsCount = 0;
var obj70858_onTap_loopCount = 0;
obj70858_onTap_actionGroup0();
});










/*
 *
 *   obj70850: Event Touch Down
 *
 */
$("#obj70850").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70850_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70850_onTap is still running");
	return;
}
var obj70850_onTap_runningActionsCount = 0;
var obj70850_onTap_loopCount = 0;
obj70850_onTap_actionGroup0();
});










/*
 *
 *   obj70842: Event Touch Down
 *
 */
$("#obj70842").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70842_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70842_onTap is still running");
	return;
}
var obj70842_onTap_runningActionsCount = 0;
var obj70842_onTap_loopCount = 0;
obj70842_onTap_actionGroup0();
});










/*
 *
 *   obj70834: Event Touch Down
 *
 */
$("#obj70834").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70834_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70834_onTap is still running");
	return;
}
var obj70834_onTap_runningActionsCount = 0;
var obj70834_onTap_loopCount = 0;
obj70834_onTap_actionGroup0();
});










/*
 *
 *   obj70826: Event Touch Down
 *
 */
$("#obj70826").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70826_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70826_onTap is still running");
	return;
}
var obj70826_onTap_runningActionsCount = 0;
var obj70826_onTap_loopCount = 0;
obj70826_onTap_actionGroup0();
});










/*
 *
 *   obj70820: Event Touch Down
 *
 */
$("#obj70820").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70820_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70820_onTap is still running");
	return;
}
var obj70820_onTap_runningActionsCount = 0;
var obj70820_onTap_loopCount = 0;
obj70820_onTap_actionGroup0();
});










/*
 *
 *   obj70812: Event Touch Down
 *
 */
$("#obj70812").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70812_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70812_onTap is still running");
	return;
}
var obj70812_onTap_runningActionsCount = 0;
var obj70812_onTap_loopCount = 0;
obj70812_onTap_actionGroup0();
});










/*
 *
 *   obj70804: Event Touch Down
 *
 */
$("#obj70804").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70804_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70804_onTap is still running");
	return;
}
var obj70804_onTap_runningActionsCount = 0;
var obj70804_onTap_loopCount = 0;
obj70804_onTap_actionGroup0();
});










/*
 *
 *   obj70798: Event Touch Down
 *
 */
$("#obj70798").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70798_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70798_onTap is still running");
	return;
}
var obj70798_onTap_runningActionsCount = 0;
var obj70798_onTap_loopCount = 0;
obj70798_onTap_actionGroup0();
});










/*
 *
 *   obj70790: Event Touch Down
 *
 */
$("#obj70790").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70790_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70790_onTap is still running");
	return;
}
var obj70790_onTap_runningActionsCount = 0;
var obj70790_onTap_loopCount = 0;
obj70790_onTap_actionGroup0();
});










/*
 *
 *   obj70784: Event Touch Down
 *
 */
$("#obj70784").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70784_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70784_onTap is still running");
	return;
}
var obj70784_onTap_runningActionsCount = 0;
var obj70784_onTap_loopCount = 0;
obj70784_onTap_actionGroup0();
});










/*
 *
 *   obj70776: Event Touch Down
 *
 */
$("#obj70776").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70776_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70776_onTap is still running");
	return;
}
var obj70776_onTap_runningActionsCount = 0;
var obj70776_onTap_loopCount = 0;
obj70776_onTap_actionGroup0();
});










/*
 *
 *   obj70768: Event Touch Down
 *
 */
$("#obj70768").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70768_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70768_onTap is still running");
	return;
}
var obj70768_onTap_runningActionsCount = 0;
var obj70768_onTap_loopCount = 0;
obj70768_onTap_actionGroup0();
});










/*
 *
 *   obj70762: Event Touch Down
 *
 */
$("#obj70762").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70762_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70762_onTap is still running");
	return;
}
var obj70762_onTap_runningActionsCount = 0;
var obj70762_onTap_loopCount = 0;
obj70762_onTap_actionGroup0();
});










/*
 *
 *   obj70754: Event Touch Down
 *
 */
$("#obj70754").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70754_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70754_onTap is still running");
	return;
}
var obj70754_onTap_runningActionsCount = 0;
var obj70754_onTap_loopCount = 0;
obj70754_onTap_actionGroup0();
});










/*
 *
 *   obj70746: Event Touch Down
 *
 */
$("#obj70746").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70746_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70746_onTap is still running");
	return;
}
var obj70746_onTap_runningActionsCount = 0;
var obj70746_onTap_loopCount = 0;
obj70746_onTap_actionGroup0();
});










/*
 *
 *   obj70738: Event Touch Down
 *
 */
$("#obj70738").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70738_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70738_onTap is still running");
	return;
}
var obj70738_onTap_runningActionsCount = 0;
var obj70738_onTap_loopCount = 0;
obj70738_onTap_actionGroup0();
});










/*
 *
 *   obj70732: Event Touch Down
 *
 */
$("#obj70732").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70732_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70732_onTap is still running");
	return;
}
var obj70732_onTap_runningActionsCount = 0;
var obj70732_onTap_loopCount = 0;
obj70732_onTap_actionGroup0();
});










/*
 *
 *   obj70724: Event Touch Down
 *
 */
$("#obj70724").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70724_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70724_onTap is still running");
	return;
}
var obj70724_onTap_runningActionsCount = 0;
var obj70724_onTap_loopCount = 0;
obj70724_onTap_actionGroup0();
});










/*
 *
 *   obj70718: Event Touch Down
 *
 */
$("#obj70718").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70718_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70718_onTap is still running");
	return;
}
var obj70718_onTap_runningActionsCount = 0;
var obj70718_onTap_loopCount = 0;
obj70718_onTap_actionGroup0();
});






























/*
 *
 *   obj70696: Event Touch Down
 *
 */
$("#obj70696").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70696_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70696_onTap is still running");
	return;
}
var obj70696_onTap_runningActionsCount = 0;
var obj70696_onTap_loopCount = 0;
obj70696_onTap_actionGroup0();
});










/*
 *
 *   obj70688: Event Touch Down
 *
 */
$("#obj70688").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70688_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70688_onTap is still running");
	return;
}
var obj70688_onTap_runningActionsCount = 0;
var obj70688_onTap_loopCount = 0;
obj70688_onTap_actionGroup0();
});










/*
 *
 *   obj87292: Event Touch Down
 *
 */
$("#obj87292").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87292_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87292_onTap is still running");
	return;
}
var obj87292_onTap_runningActionsCount = 0;
var obj87292_onTap_loopCount = 0;
obj87292_onTap_actionGroup0();
});










/*
 *
 *   obj87287: Event Touch Down
 *
 */
$("#obj87287").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87287_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87287_onTap is still running");
	return;
}
var obj87287_onTap_runningActionsCount = 0;
var obj87287_onTap_loopCount = 0;
obj87287_onTap_actionGroup0();
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
	
$("#obj70886").trigger('SCEventShow');
$("#obj70883").trigger('SCEventShow');
$("#obj70880").trigger('SCEventShow');
$("#obj70876").trigger('SCEventShow');
$("#obj70874").trigger('SCEventShow');
$("#obj70872").trigger('SCEventShow');
$("#obj70870").trigger('SCEventShow');
$("#obj70868").trigger('SCEventShow');
$("#obj70866").trigger('SCEventShow');
$("#obj70864").trigger('SCEventShow');
$("#obj70858").trigger('SCEventShow');
$("#obj70850").trigger('SCEventShow');
$("#obj70842").trigger('SCEventShow');
$("#obj70834").trigger('SCEventShow');
$("#obj70826").trigger('SCEventShow');
$("#obj70820").trigger('SCEventShow');
$("#obj70812").trigger('SCEventShow');
$("#obj70804").trigger('SCEventShow');
$("#obj70798").trigger('SCEventShow');
$("#obj70790").trigger('SCEventShow');
$("#obj70784").trigger('SCEventShow');
$("#obj70776").trigger('SCEventShow');
$("#obj70768").trigger('SCEventShow');
$("#obj70762").trigger('SCEventShow');
$("#obj70754").trigger('SCEventShow');
$("#obj70746").trigger('SCEventShow');
$("#obj70738").trigger('SCEventShow');
$("#obj70732").trigger('SCEventShow');
$("#obj70724").trigger('SCEventShow');
$("#obj70718").trigger('SCEventShow');
$("#obj70716").trigger('SCEventShow');
$("#obj70714").trigger('SCEventShow');
$("#obj70696").trigger('SCEventShow');
$("#obj70688").trigger('SCEventShow');
$("#obj87292").trigger('SCEventShow');
$("#obj87287").trigger('SCEventShow');
$("#obj87297").trigger('SCEventShow');
$("#obj94721").trigger('SCEventShow');
$("#obj70686").trigger('SCEventShow');
	
});