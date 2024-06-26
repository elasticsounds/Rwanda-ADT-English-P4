pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 22649;
pubcoder.page.title = pubcoder.page.title || "87";
pubcoder.page.number = pubcoder.page.number || 87;
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
var obj78765_onTap_activeActionGroupIndex = -1;
var obj78765_onTap_runningActionsCount = 0;
var obj78765_onTap_loopCount = 0;
var obj78762_onTap_activeActionGroupIndex = -1;
var obj78762_onTap_runningActionsCount = 0;
var obj78762_onTap_loopCount = 0;
var obj78758_onTap_activeActionGroupIndex = -1;
var obj78758_onTap_runningActionsCount = 0;
var obj78758_onTap_loopCount = 0;
var obj78741_onTap_activeActionGroupIndex = -1;
var obj78741_onTap_runningActionsCount = 0;
var obj78741_onTap_loopCount = 0;
var obj78734_onTap_activeActionGroupIndex = -1;
var obj78734_onTap_runningActionsCount = 0;
var obj78734_onTap_loopCount = 0;
var obj78727_onTap_activeActionGroupIndex = -1;
var obj78727_onTap_runningActionsCount = 0;
var obj78727_onTap_loopCount = 0;
var obj78724_onTap_activeActionGroupIndex = -1;
var obj78724_onTap_runningActionsCount = 0;
var obj78724_onTap_loopCount = 0;
var obj78721_onTap_activeActionGroupIndex = -1;
var obj78721_onTap_runningActionsCount = 0;
var obj78721_onTap_loopCount = 0;
var obj78714_onTap_activeActionGroupIndex = -1;
var obj78714_onTap_runningActionsCount = 0;
var obj78714_onTap_loopCount = 0;
var obj78707_onTap_activeActionGroupIndex = -1;
var obj78707_onTap_runningActionsCount = 0;
var obj78707_onTap_loopCount = 0;
var obj78700_onTap_activeActionGroupIndex = -1;
var obj78700_onTap_runningActionsCount = 0;
var obj78700_onTap_loopCount = 0;
var obj78690_onTap_activeActionGroupIndex = -1;
var obj78690_onTap_runningActionsCount = 0;
var obj78690_onTap_loopCount = 0;
var obj78683_onTap_activeActionGroupIndex = -1;
var obj78683_onTap_runningActionsCount = 0;
var obj78683_onTap_loopCount = 0;
var obj78676_onTap_activeActionGroupIndex = -1;
var obj78676_onTap_runningActionsCount = 0;
var obj78676_onTap_loopCount = 0;
var obj78667_onTap_activeActionGroupIndex = -1;
var obj78667_onTap_runningActionsCount = 0;
var obj78667_onTap_loopCount = 0;
var obj78658_onTap_activeActionGroupIndex = -1;
var obj78658_onTap_runningActionsCount = 0;
var obj78658_onTap_loopCount = 0;
var obj78655_onTap_activeActionGroupIndex = -1;
var obj78655_onTap_runningActionsCount = 0;
var obj78655_onTap_loopCount = 0;
var obj78648_onTap_activeActionGroupIndex = -1;
var obj78648_onTap_runningActionsCount = 0;
var obj78648_onTap_loopCount = 0;
var obj78641_onTap_activeActionGroupIndex = -1;
var obj78641_onTap_runningActionsCount = 0;
var obj78641_onTap_loopCount = 0;
var obj78632_onTap_activeActionGroupIndex = -1;
var obj78632_onTap_runningActionsCount = 0;
var obj78632_onTap_loopCount = 0;
var obj78625_onTap_activeActionGroupIndex = -1;
var obj78625_onTap_runningActionsCount = 0;
var obj78625_onTap_loopCount = 0;
var obj78612_onTap_activeActionGroupIndex = -1;
var obj78612_onTap_runningActionsCount = 0;
var obj78612_onTap_loopCount = 0;
var obj78607_onTap_activeActionGroupIndex = -1;
var obj78607_onTap_runningActionsCount = 0;
var obj78607_onTap_loopCount = 0;
var obj78598_onTap_activeActionGroupIndex = -1;
var obj78598_onTap_runningActionsCount = 0;
var obj78598_onTap_loopCount = 0;
var obj78591_onTap_activeActionGroupIndex = -1;
var obj78591_onTap_runningActionsCount = 0;
var obj78591_onTap_loopCount = 0;
var obj78573_onTap_activeActionGroupIndex = -1;
var obj78573_onTap_runningActionsCount = 0;
var obj78573_onTap_loopCount = 0;
var obj78570_onTap_activeActionGroupIndex = -1;
var obj78570_onTap_runningActionsCount = 0;
var obj78570_onTap_loopCount = 0;
var obj78563_onTap_activeActionGroupIndex = -1;
var obj78563_onTap_runningActionsCount = 0;
var obj78563_onTap_loopCount = 0;
var obj78556_onTap_activeActionGroupIndex = -1;
var obj78556_onTap_runningActionsCount = 0;
var obj78556_onTap_loopCount = 0;
var obj78530_onTap_activeActionGroupIndex = -1;
var obj78530_onTap_runningActionsCount = 0;
var obj78530_onTap_loopCount = 0;
var obj78523_onTap_activeActionGroupIndex = -1;
var obj78523_onTap_runningActionsCount = 0;
var obj78523_onTap_loopCount = 0;
var obj78516_onTap_activeActionGroupIndex = -1;
var obj78516_onTap_runningActionsCount = 0;
var obj78516_onTap_loopCount = 0;
var obj78509_onTap_activeActionGroupIndex = -1;
var obj78509_onTap_runningActionsCount = 0;
var obj78509_onTap_loopCount = 0;
var obj78500_onTap_activeActionGroupIndex = -1;
var obj78500_onTap_runningActionsCount = 0;
var obj78500_onTap_loopCount = 0;
var obj78491_onTap_activeActionGroupIndex = -1;
var obj78491_onTap_runningActionsCount = 0;
var obj78491_onTap_loopCount = 0;
var obj78484_onTap_activeActionGroupIndex = -1;
var obj78484_onTap_runningActionsCount = 0;
var obj78484_onTap_loopCount = 0;
var obj78477_onTap_activeActionGroupIndex = -1;
var obj78477_onTap_runningActionsCount = 0;
var obj78477_onTap_loopCount = 0;
var obj78470_onTap_activeActionGroupIndex = -1;
var obj78470_onTap_runningActionsCount = 0;
var obj78470_onTap_loopCount = 0;
var obj78463_onTap_activeActionGroupIndex = -1;
var obj78463_onTap_runningActionsCount = 0;
var obj78463_onTap_loopCount = 0;
var obj78456_onTap_activeActionGroupIndex = -1;
var obj78456_onTap_runningActionsCount = 0;
var obj78456_onTap_loopCount = 0;
var obj78449_onTap_activeActionGroupIndex = -1;
var obj78449_onTap_runningActionsCount = 0;
var obj78449_onTap_loopCount = 0;
var obj78444_onTap_activeActionGroupIndex = -1;
var obj78444_onTap_runningActionsCount = 0;
var obj78444_onTap_loopCount = 0;
var obj78436_onTap_activeActionGroupIndex = -1;
var obj78436_onTap_runningActionsCount = 0;
var obj78436_onTap_loopCount = 0;
var obj78380_onTap_activeActionGroupIndex = -1;
var obj78380_onTap_runningActionsCount = 0;
var obj78380_onTap_loopCount = 0;
var obj78372_onTap_activeActionGroupIndex = -1;
var obj78372_onTap_runningActionsCount = 0;
var obj78372_onTap_loopCount = 0;
var obj87913_onTap_activeActionGroupIndex = -1;
var obj87913_onTap_runningActionsCount = 0;
var obj87913_onTap_loopCount = 0;
var obj87908_onTap_activeActionGroupIndex = -1;
var obj87908_onTap_runningActionsCount = 0;
var obj87908_onTap_loopCount = 0;
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
		
obj78765_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78765_onTap_activeActionGroupIndex = -1;
		$("#obj78765").trigger("obj78765_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78765) {
				console.warn("de-queueing event obj78765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78765_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78767();
function goToPage_78767() {
	window.obj78765_onTap_runningActionsCount = obj78765_onTap_runningActionsCount + 1;
	$("#anchor510")[0].click();
	window.obj78765_onTap_runningActionsCount = window.obj78765_onTap_runningActionsCount - 1;
if (window.obj78765_onTap_runningActionsCount < 0) {
	window.obj78765_onTap_runningActionsCount = 0;
} else if (window.obj78765_onTap_runningActionsCount == 0) {
	obj78765_onTap_actionGroup1();
}
}





















};
obj78765_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78765_onTap_activeActionGroupIndex = -1;
		$("#obj78765").trigger("obj78765_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78765) {
				console.warn("de-queueing event obj78765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78765_onTap_activeActionGroupIndex = 1;
	





















};
obj78762_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78762_onTap_activeActionGroupIndex = -1;
		$("#obj78762").trigger("obj78762_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78762) {
				console.warn("de-queueing event obj78762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78762_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78764();
function goToPage_78764() {
	window.obj78762_onTap_runningActionsCount = obj78762_onTap_runningActionsCount + 1;
	$("#anchor511")[0].click();
	window.obj78762_onTap_runningActionsCount = window.obj78762_onTap_runningActionsCount - 1;
if (window.obj78762_onTap_runningActionsCount < 0) {
	window.obj78762_onTap_runningActionsCount = 0;
} else if (window.obj78762_onTap_runningActionsCount == 0) {
	obj78762_onTap_actionGroup1();
}
}





















};
obj78762_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78762_onTap_activeActionGroupIndex = -1;
		$("#obj78762").trigger("obj78762_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78762) {
				console.warn("de-queueing event obj78762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78762_onTap_activeActionGroupIndex = 1;
	





















};
obj78758_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78758_onTap_activeActionGroupIndex = -1;
		$("#obj78758").trigger("obj78758_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78758) {
				console.warn("de-queueing event obj78758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78758_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78760();
function goToPage_78760() {
	window.obj78758_onTap_runningActionsCount = obj78758_onTap_runningActionsCount + 1;
	$("#anchor512")[0].click();
	window.obj78758_onTap_runningActionsCount = window.obj78758_onTap_runningActionsCount - 1;
if (window.obj78758_onTap_runningActionsCount < 0) {
	window.obj78758_onTap_runningActionsCount = 0;
} else if (window.obj78758_onTap_runningActionsCount == 0) {
	obj78758_onTap_actionGroup1();
}
}





















};
obj78758_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78758_onTap_activeActionGroupIndex = -1;
		$("#obj78758").trigger("obj78758_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78758) {
				console.warn("de-queueing event obj78758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78758_onTap_activeActionGroupIndex = 1;
	





















};
obj78741_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78741_onTap_activeActionGroupIndex = -1;
		$("#obj78741").trigger("obj78741_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78741) {
				console.warn("de-queueing event obj78741." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78741").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78741_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78743();
function runjs_78743() {
	window.obj78741_onTap_runningActionsCount = obj78741_onTap_runningActionsCount + 1;

	$("#obj78741").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78741_onTap_runningActionsCount = window.obj78741_onTap_runningActionsCount - 1;
if (window.obj78741_onTap_runningActionsCount < 0) {
	window.obj78741_onTap_runningActionsCount = 0;
} else if (window.obj78741_onTap_runningActionsCount == 0) {
	obj78741_onTap_actionGroup1();
}
	}, 1);
}







};
obj78741_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78741_onTap_activeActionGroupIndex = -1;
		$("#obj78741").trigger("obj78741_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78741) {
				console.warn("de-queueing event obj78741." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78741").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78741_onTap_activeActionGroupIndex = 1;
	





















};
obj78734_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78734_onTap_activeActionGroupIndex = -1;
		$("#obj78734").trigger("obj78734_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78734) {
				console.warn("de-queueing event obj78734." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78734").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78734_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78736();
function switchText_78736() {
	window.obj78734_onTap_runningActionsCount = obj78734_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78734_onTap_runningActionsCount = window.obj78734_onTap_runningActionsCount - 1;
if (window.obj78734_onTap_runningActionsCount < 0) {
	window.obj78734_onTap_runningActionsCount = 0;
} else if (window.obj78734_onTap_runningActionsCount == 0) {
	obj78734_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78734_onTap_runningActionsCount = window.obj78734_onTap_runningActionsCount - 1;
if (window.obj78734_onTap_runningActionsCount < 0) {
	window.obj78734_onTap_runningActionsCount = 0;
} else if (window.obj78734_onTap_runningActionsCount == 0) {
	obj78734_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78734_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78734_onTap_activeActionGroupIndex = -1;
		$("#obj78734").trigger("obj78734_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78734) {
				console.warn("de-queueing event obj78734." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78734").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78734_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78737();
function runjs_78737() {
	window.obj78734_onTap_runningActionsCount = obj78734_onTap_runningActionsCount + 1;

	$("#obj78734").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78734_onTap_runningActionsCount = window.obj78734_onTap_runningActionsCount - 1;
if (window.obj78734_onTap_runningActionsCount < 0) {
	window.obj78734_onTap_runningActionsCount = 0;
} else if (window.obj78734_onTap_runningActionsCount == 0) {
	obj78734_onTap_actionGroup2();
}
	}, 1);
}







};
obj78734_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78734_onTap_activeActionGroupIndex = -1;
		$("#obj78734").trigger("obj78734_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78734) {
				console.warn("de-queueing event obj78734." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78734").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78734_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78738();
function playAudio_78738() {
	window.obj78734_onTap_runningActionsCount = obj78734_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78734_onTap_runningActionsCount = window.obj78734_onTap_runningActionsCount - 1;
if (window.obj78734_onTap_runningActionsCount < 0) {
	window.obj78734_onTap_runningActionsCount = 0;
} else if (window.obj78734_onTap_runningActionsCount == 0) {
	obj78734_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78734_onTap_runningActionsCount = window.obj78734_onTap_runningActionsCount - 1;
if (window.obj78734_onTap_runningActionsCount < 0) {
	window.obj78734_onTap_runningActionsCount = 0;
} else if (window.obj78734_onTap_runningActionsCount == 0) {
	obj78734_onTap_actionGroup3();
}
	}
}









};
obj78734_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78734_onTap_activeActionGroupIndex = -1;
		$("#obj78734").trigger("obj78734_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78734) {
				console.warn("de-queueing event obj78734." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78734").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78734_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78739();
function runjs_78739() {
	window.obj78734_onTap_runningActionsCount = obj78734_onTap_runningActionsCount + 1;

	$("#obj78734").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78734_onTap_runningActionsCount = window.obj78734_onTap_runningActionsCount - 1;
if (window.obj78734_onTap_runningActionsCount < 0) {
	window.obj78734_onTap_runningActionsCount = 0;
} else if (window.obj78734_onTap_runningActionsCount == 0) {
	obj78734_onTap_actionGroup4();
}
	}, 1);
}







};
obj78734_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78734_onTap_activeActionGroupIndex = -1;
		$("#obj78734").trigger("obj78734_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78734) {
				console.warn("de-queueing event obj78734." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78734").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78734_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78740();
function switchText_78740() {
	window.obj78734_onTap_runningActionsCount = obj78734_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78734_onTap_runningActionsCount = window.obj78734_onTap_runningActionsCount - 1;
if (window.obj78734_onTap_runningActionsCount < 0) {
	window.obj78734_onTap_runningActionsCount = 0;
} else if (window.obj78734_onTap_runningActionsCount == 0) {
	obj78734_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78734_onTap_runningActionsCount = window.obj78734_onTap_runningActionsCount - 1;
if (window.obj78734_onTap_runningActionsCount < 0) {
	window.obj78734_onTap_runningActionsCount = 0;
} else if (window.obj78734_onTap_runningActionsCount == 0) {
	obj78734_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78734_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78734_onTap_activeActionGroupIndex = -1;
		$("#obj78734").trigger("obj78734_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78734) {
				console.warn("de-queueing event obj78734." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78734").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78734_onTap_activeActionGroupIndex = 5;
	





















};
obj78727_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78727_onTap_activeActionGroupIndex = -1;
		$("#obj78727").trigger("obj78727_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78727) {
				console.warn("de-queueing event obj78727." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78727").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78727_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78729();
function switchText_78729() {
	window.obj78727_onTap_runningActionsCount = obj78727_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78727_onTap_runningActionsCount = window.obj78727_onTap_runningActionsCount - 1;
if (window.obj78727_onTap_runningActionsCount < 0) {
	window.obj78727_onTap_runningActionsCount = 0;
} else if (window.obj78727_onTap_runningActionsCount == 0) {
	obj78727_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78727_onTap_runningActionsCount = window.obj78727_onTap_runningActionsCount - 1;
if (window.obj78727_onTap_runningActionsCount < 0) {
	window.obj78727_onTap_runningActionsCount = 0;
} else if (window.obj78727_onTap_runningActionsCount == 0) {
	obj78727_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78727_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78727_onTap_activeActionGroupIndex = -1;
		$("#obj78727").trigger("obj78727_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78727) {
				console.warn("de-queueing event obj78727." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78727").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78727_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78730();
function runjs_78730() {
	window.obj78727_onTap_runningActionsCount = obj78727_onTap_runningActionsCount + 1;

	$("#obj78727").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78727_onTap_runningActionsCount = window.obj78727_onTap_runningActionsCount - 1;
if (window.obj78727_onTap_runningActionsCount < 0) {
	window.obj78727_onTap_runningActionsCount = 0;
} else if (window.obj78727_onTap_runningActionsCount == 0) {
	obj78727_onTap_actionGroup2();
}
	}, 1);
}







};
obj78727_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78727_onTap_activeActionGroupIndex = -1;
		$("#obj78727").trigger("obj78727_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78727) {
				console.warn("de-queueing event obj78727." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78727").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78727_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78731();
function playAudio_78731() {
	window.obj78727_onTap_runningActionsCount = obj78727_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78727_onTap_runningActionsCount = window.obj78727_onTap_runningActionsCount - 1;
if (window.obj78727_onTap_runningActionsCount < 0) {
	window.obj78727_onTap_runningActionsCount = 0;
} else if (window.obj78727_onTap_runningActionsCount == 0) {
	obj78727_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78727_onTap_runningActionsCount = window.obj78727_onTap_runningActionsCount - 1;
if (window.obj78727_onTap_runningActionsCount < 0) {
	window.obj78727_onTap_runningActionsCount = 0;
} else if (window.obj78727_onTap_runningActionsCount == 0) {
	obj78727_onTap_actionGroup3();
}
	}
}









};
obj78727_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78727_onTap_activeActionGroupIndex = -1;
		$("#obj78727").trigger("obj78727_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78727) {
				console.warn("de-queueing event obj78727." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78727").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78727_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78732();
function runjs_78732() {
	window.obj78727_onTap_runningActionsCount = obj78727_onTap_runningActionsCount + 1;

	$("#obj78727").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78727_onTap_runningActionsCount = window.obj78727_onTap_runningActionsCount - 1;
if (window.obj78727_onTap_runningActionsCount < 0) {
	window.obj78727_onTap_runningActionsCount = 0;
} else if (window.obj78727_onTap_runningActionsCount == 0) {
	obj78727_onTap_actionGroup4();
}
	}, 1);
}







};
obj78727_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78727_onTap_activeActionGroupIndex = -1;
		$("#obj78727").trigger("obj78727_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78727) {
				console.warn("de-queueing event obj78727." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78727").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78727_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78733();
function switchText_78733() {
	window.obj78727_onTap_runningActionsCount = obj78727_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78727_onTap_runningActionsCount = window.obj78727_onTap_runningActionsCount - 1;
if (window.obj78727_onTap_runningActionsCount < 0) {
	window.obj78727_onTap_runningActionsCount = 0;
} else if (window.obj78727_onTap_runningActionsCount == 0) {
	obj78727_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78727_onTap_runningActionsCount = window.obj78727_onTap_runningActionsCount - 1;
if (window.obj78727_onTap_runningActionsCount < 0) {
	window.obj78727_onTap_runningActionsCount = 0;
} else if (window.obj78727_onTap_runningActionsCount == 0) {
	obj78727_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78727_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78727_onTap_activeActionGroupIndex = -1;
		$("#obj78727").trigger("obj78727_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78727) {
				console.warn("de-queueing event obj78727." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78727").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78727_onTap_activeActionGroupIndex = 5;
	





















};
obj78724_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78724_onTap_activeActionGroupIndex = -1;
		$("#obj78724").trigger("obj78724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78724) {
				console.warn("de-queueing event obj78724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78724_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78726();
function runjs_78726() {
	window.obj78724_onTap_runningActionsCount = obj78724_onTap_runningActionsCount + 1;

	$("#obj78724").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78724_onTap_runningActionsCount = window.obj78724_onTap_runningActionsCount - 1;
if (window.obj78724_onTap_runningActionsCount < 0) {
	window.obj78724_onTap_runningActionsCount = 0;
} else if (window.obj78724_onTap_runningActionsCount == 0) {
	obj78724_onTap_actionGroup1();
}
	}, 1);
}







};
obj78724_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78724_onTap_activeActionGroupIndex = -1;
		$("#obj78724").trigger("obj78724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78724) {
				console.warn("de-queueing event obj78724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78724_onTap_activeActionGroupIndex = 1;
	





















};
obj78721_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78721_onTap_activeActionGroupIndex = -1;
		$("#obj78721").trigger("obj78721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78721) {
				console.warn("de-queueing event obj78721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78721_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78723();
function runjs_78723() {
	window.obj78721_onTap_runningActionsCount = obj78721_onTap_runningActionsCount + 1;

	$("#obj78721").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78721_onTap_runningActionsCount = window.obj78721_onTap_runningActionsCount - 1;
if (window.obj78721_onTap_runningActionsCount < 0) {
	window.obj78721_onTap_runningActionsCount = 0;
} else if (window.obj78721_onTap_runningActionsCount == 0) {
	obj78721_onTap_actionGroup1();
}
	}, 1);
}







};
obj78721_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78721_onTap_activeActionGroupIndex = -1;
		$("#obj78721").trigger("obj78721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78721) {
				console.warn("de-queueing event obj78721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78721_onTap_activeActionGroupIndex = 1;
	





















};
obj78714_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78714_onTap_activeActionGroupIndex = -1;
		$("#obj78714").trigger("obj78714_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78714) {
				console.warn("de-queueing event obj78714." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78714").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78714_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78716();
function switchText_78716() {
	window.obj78714_onTap_runningActionsCount = obj78714_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78714_onTap_runningActionsCount = window.obj78714_onTap_runningActionsCount - 1;
if (window.obj78714_onTap_runningActionsCount < 0) {
	window.obj78714_onTap_runningActionsCount = 0;
} else if (window.obj78714_onTap_runningActionsCount == 0) {
	obj78714_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78714_onTap_runningActionsCount = window.obj78714_onTap_runningActionsCount - 1;
if (window.obj78714_onTap_runningActionsCount < 0) {
	window.obj78714_onTap_runningActionsCount = 0;
} else if (window.obj78714_onTap_runningActionsCount == 0) {
	obj78714_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78714_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78714_onTap_activeActionGroupIndex = -1;
		$("#obj78714").trigger("obj78714_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78714) {
				console.warn("de-queueing event obj78714." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78714").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78714_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78717();
function runjs_78717() {
	window.obj78714_onTap_runningActionsCount = obj78714_onTap_runningActionsCount + 1;

	$("#obj78714").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78714_onTap_runningActionsCount = window.obj78714_onTap_runningActionsCount - 1;
if (window.obj78714_onTap_runningActionsCount < 0) {
	window.obj78714_onTap_runningActionsCount = 0;
} else if (window.obj78714_onTap_runningActionsCount == 0) {
	obj78714_onTap_actionGroup2();
}
	}, 1);
}







};
obj78714_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78714_onTap_activeActionGroupIndex = -1;
		$("#obj78714").trigger("obj78714_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78714) {
				console.warn("de-queueing event obj78714." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78714").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78714_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78718();
function playAudio_78718() {
	window.obj78714_onTap_runningActionsCount = obj78714_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78714_onTap_runningActionsCount = window.obj78714_onTap_runningActionsCount - 1;
if (window.obj78714_onTap_runningActionsCount < 0) {
	window.obj78714_onTap_runningActionsCount = 0;
} else if (window.obj78714_onTap_runningActionsCount == 0) {
	obj78714_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78714_onTap_runningActionsCount = window.obj78714_onTap_runningActionsCount - 1;
if (window.obj78714_onTap_runningActionsCount < 0) {
	window.obj78714_onTap_runningActionsCount = 0;
} else if (window.obj78714_onTap_runningActionsCount == 0) {
	obj78714_onTap_actionGroup3();
}
	}
}









};
obj78714_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78714_onTap_activeActionGroupIndex = -1;
		$("#obj78714").trigger("obj78714_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78714) {
				console.warn("de-queueing event obj78714." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78714").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78714_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78719();
function runjs_78719() {
	window.obj78714_onTap_runningActionsCount = obj78714_onTap_runningActionsCount + 1;

	$("#obj78714").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78714_onTap_runningActionsCount = window.obj78714_onTap_runningActionsCount - 1;
if (window.obj78714_onTap_runningActionsCount < 0) {
	window.obj78714_onTap_runningActionsCount = 0;
} else if (window.obj78714_onTap_runningActionsCount == 0) {
	obj78714_onTap_actionGroup4();
}
	}, 1);
}







};
obj78714_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78714_onTap_activeActionGroupIndex = -1;
		$("#obj78714").trigger("obj78714_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78714) {
				console.warn("de-queueing event obj78714." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78714").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78714_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78720();
function switchText_78720() {
	window.obj78714_onTap_runningActionsCount = obj78714_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78714_onTap_runningActionsCount = window.obj78714_onTap_runningActionsCount - 1;
if (window.obj78714_onTap_runningActionsCount < 0) {
	window.obj78714_onTap_runningActionsCount = 0;
} else if (window.obj78714_onTap_runningActionsCount == 0) {
	obj78714_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78714_onTap_runningActionsCount = window.obj78714_onTap_runningActionsCount - 1;
if (window.obj78714_onTap_runningActionsCount < 0) {
	window.obj78714_onTap_runningActionsCount = 0;
} else if (window.obj78714_onTap_runningActionsCount == 0) {
	obj78714_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78714_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78714_onTap_activeActionGroupIndex = -1;
		$("#obj78714").trigger("obj78714_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78714) {
				console.warn("de-queueing event obj78714." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78714").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78714_onTap_activeActionGroupIndex = 5;
	





















};
obj78707_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78707_onTap_activeActionGroupIndex = -1;
		$("#obj78707").trigger("obj78707_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78707) {
				console.warn("de-queueing event obj78707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78707_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78709();
function switchText_78709() {
	window.obj78707_onTap_runningActionsCount = obj78707_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78707_onTap_runningActionsCount = window.obj78707_onTap_runningActionsCount - 1;
if (window.obj78707_onTap_runningActionsCount < 0) {
	window.obj78707_onTap_runningActionsCount = 0;
} else if (window.obj78707_onTap_runningActionsCount == 0) {
	obj78707_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78707_onTap_runningActionsCount = window.obj78707_onTap_runningActionsCount - 1;
if (window.obj78707_onTap_runningActionsCount < 0) {
	window.obj78707_onTap_runningActionsCount = 0;
} else if (window.obj78707_onTap_runningActionsCount == 0) {
	obj78707_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78707_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78707_onTap_activeActionGroupIndex = -1;
		$("#obj78707").trigger("obj78707_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78707) {
				console.warn("de-queueing event obj78707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78707_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78710();
function runjs_78710() {
	window.obj78707_onTap_runningActionsCount = obj78707_onTap_runningActionsCount + 1;

	$("#obj78707").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78707_onTap_runningActionsCount = window.obj78707_onTap_runningActionsCount - 1;
if (window.obj78707_onTap_runningActionsCount < 0) {
	window.obj78707_onTap_runningActionsCount = 0;
} else if (window.obj78707_onTap_runningActionsCount == 0) {
	obj78707_onTap_actionGroup2();
}
	}, 1);
}







};
obj78707_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78707_onTap_activeActionGroupIndex = -1;
		$("#obj78707").trigger("obj78707_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78707) {
				console.warn("de-queueing event obj78707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78707_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78711();
function playAudio_78711() {
	window.obj78707_onTap_runningActionsCount = obj78707_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78707_onTap_runningActionsCount = window.obj78707_onTap_runningActionsCount - 1;
if (window.obj78707_onTap_runningActionsCount < 0) {
	window.obj78707_onTap_runningActionsCount = 0;
} else if (window.obj78707_onTap_runningActionsCount == 0) {
	obj78707_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78707_onTap_runningActionsCount = window.obj78707_onTap_runningActionsCount - 1;
if (window.obj78707_onTap_runningActionsCount < 0) {
	window.obj78707_onTap_runningActionsCount = 0;
} else if (window.obj78707_onTap_runningActionsCount == 0) {
	obj78707_onTap_actionGroup3();
}
	}
}









};
obj78707_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78707_onTap_activeActionGroupIndex = -1;
		$("#obj78707").trigger("obj78707_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78707) {
				console.warn("de-queueing event obj78707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78707_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78712();
function runjs_78712() {
	window.obj78707_onTap_runningActionsCount = obj78707_onTap_runningActionsCount + 1;

	$("#obj78707").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78707_onTap_runningActionsCount = window.obj78707_onTap_runningActionsCount - 1;
if (window.obj78707_onTap_runningActionsCount < 0) {
	window.obj78707_onTap_runningActionsCount = 0;
} else if (window.obj78707_onTap_runningActionsCount == 0) {
	obj78707_onTap_actionGroup4();
}
	}, 1);
}







};
obj78707_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78707_onTap_activeActionGroupIndex = -1;
		$("#obj78707").trigger("obj78707_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78707) {
				console.warn("de-queueing event obj78707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78707_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78713();
function switchText_78713() {
	window.obj78707_onTap_runningActionsCount = obj78707_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78707_onTap_runningActionsCount = window.obj78707_onTap_runningActionsCount - 1;
if (window.obj78707_onTap_runningActionsCount < 0) {
	window.obj78707_onTap_runningActionsCount = 0;
} else if (window.obj78707_onTap_runningActionsCount == 0) {
	obj78707_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78707_onTap_runningActionsCount = window.obj78707_onTap_runningActionsCount - 1;
if (window.obj78707_onTap_runningActionsCount < 0) {
	window.obj78707_onTap_runningActionsCount = 0;
} else if (window.obj78707_onTap_runningActionsCount == 0) {
	obj78707_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78707_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78707_onTap_activeActionGroupIndex = -1;
		$("#obj78707").trigger("obj78707_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78707) {
				console.warn("de-queueing event obj78707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78707_onTap_activeActionGroupIndex = 5;
	





















};
obj78700_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78700_onTap_activeActionGroupIndex = -1;
		$("#obj78700").trigger("obj78700_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78700) {
				console.warn("de-queueing event obj78700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78700_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78702();
function switchText_78702() {
	window.obj78700_onTap_runningActionsCount = obj78700_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78700_onTap_runningActionsCount = window.obj78700_onTap_runningActionsCount - 1;
if (window.obj78700_onTap_runningActionsCount < 0) {
	window.obj78700_onTap_runningActionsCount = 0;
} else if (window.obj78700_onTap_runningActionsCount == 0) {
	obj78700_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78700_onTap_runningActionsCount = window.obj78700_onTap_runningActionsCount - 1;
if (window.obj78700_onTap_runningActionsCount < 0) {
	window.obj78700_onTap_runningActionsCount = 0;
} else if (window.obj78700_onTap_runningActionsCount == 0) {
	obj78700_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78700_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78700_onTap_activeActionGroupIndex = -1;
		$("#obj78700").trigger("obj78700_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78700) {
				console.warn("de-queueing event obj78700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78700_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78703();
function runjs_78703() {
	window.obj78700_onTap_runningActionsCount = obj78700_onTap_runningActionsCount + 1;

	$("#obj78700").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78700_onTap_runningActionsCount = window.obj78700_onTap_runningActionsCount - 1;
if (window.obj78700_onTap_runningActionsCount < 0) {
	window.obj78700_onTap_runningActionsCount = 0;
} else if (window.obj78700_onTap_runningActionsCount == 0) {
	obj78700_onTap_actionGroup2();
}
	}, 1);
}







};
obj78700_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78700_onTap_activeActionGroupIndex = -1;
		$("#obj78700").trigger("obj78700_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78700) {
				console.warn("de-queueing event obj78700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78700_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78704();
function playAudio_78704() {
	window.obj78700_onTap_runningActionsCount = obj78700_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78700_onTap_runningActionsCount = window.obj78700_onTap_runningActionsCount - 1;
if (window.obj78700_onTap_runningActionsCount < 0) {
	window.obj78700_onTap_runningActionsCount = 0;
} else if (window.obj78700_onTap_runningActionsCount == 0) {
	obj78700_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78700_onTap_runningActionsCount = window.obj78700_onTap_runningActionsCount - 1;
if (window.obj78700_onTap_runningActionsCount < 0) {
	window.obj78700_onTap_runningActionsCount = 0;
} else if (window.obj78700_onTap_runningActionsCount == 0) {
	obj78700_onTap_actionGroup3();
}
	}
}









};
obj78700_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78700_onTap_activeActionGroupIndex = -1;
		$("#obj78700").trigger("obj78700_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78700) {
				console.warn("de-queueing event obj78700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78700_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78705();
function runjs_78705() {
	window.obj78700_onTap_runningActionsCount = obj78700_onTap_runningActionsCount + 1;

	$("#obj78700").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78700_onTap_runningActionsCount = window.obj78700_onTap_runningActionsCount - 1;
if (window.obj78700_onTap_runningActionsCount < 0) {
	window.obj78700_onTap_runningActionsCount = 0;
} else if (window.obj78700_onTap_runningActionsCount == 0) {
	obj78700_onTap_actionGroup4();
}
	}, 1);
}







};
obj78700_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78700_onTap_activeActionGroupIndex = -1;
		$("#obj78700").trigger("obj78700_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78700) {
				console.warn("de-queueing event obj78700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78700_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78706();
function switchText_78706() {
	window.obj78700_onTap_runningActionsCount = obj78700_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78700_onTap_runningActionsCount = window.obj78700_onTap_runningActionsCount - 1;
if (window.obj78700_onTap_runningActionsCount < 0) {
	window.obj78700_onTap_runningActionsCount = 0;
} else if (window.obj78700_onTap_runningActionsCount == 0) {
	obj78700_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78700_onTap_runningActionsCount = window.obj78700_onTap_runningActionsCount - 1;
if (window.obj78700_onTap_runningActionsCount < 0) {
	window.obj78700_onTap_runningActionsCount = 0;
} else if (window.obj78700_onTap_runningActionsCount == 0) {
	obj78700_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78700_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78700_onTap_activeActionGroupIndex = -1;
		$("#obj78700").trigger("obj78700_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78700) {
				console.warn("de-queueing event obj78700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78700_onTap_activeActionGroupIndex = 5;
	





















};
obj78690_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78690_onTap_activeActionGroupIndex = -1;
		$("#obj78690").trigger("obj78690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78690) {
				console.warn("de-queueing event obj78690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78690_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78692();
function runjs_78692() {
	window.obj78690_onTap_runningActionsCount = obj78690_onTap_runningActionsCount + 1;

	$("#obj78690").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup1();
}
	}, 1);
}







};
obj78690_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78690_onTap_activeActionGroupIndex = -1;
		$("#obj78690").trigger("obj78690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78690) {
				console.warn("de-queueing event obj78690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78690_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78698();
function switchText_78698() {
	window.obj78690_onTap_runningActionsCount = obj78690_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj78690_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78690_onTap_activeActionGroupIndex = -1;
		$("#obj78690").trigger("obj78690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78690) {
				console.warn("de-queueing event obj78690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78690_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78693();
function runjs_78693() {
	window.obj78690_onTap_runningActionsCount = obj78690_onTap_runningActionsCount + 1;

	$("#obj78639").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup3();
}
	}, 1);
}







};
obj78690_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78690_onTap_activeActionGroupIndex = -1;
		$("#obj78690").trigger("obj78690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78690) {
				console.warn("de-queueing event obj78690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78690_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78694();
function runjs_78694() {
	window.obj78690_onTap_runningActionsCount = obj78690_onTap_runningActionsCount + 1;

	$("#obj78605").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup4();
}
	}, 1);
}







};
obj78690_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78690_onTap_activeActionGroupIndex = -1;
		$("#obj78690").trigger("obj78690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78690) {
				console.warn("de-queueing event obj78690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78690_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78695();
function runjs_78695() {
	window.obj78690_onTap_runningActionsCount = obj78690_onTap_runningActionsCount + 1;

	$("#obj78570").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup5();
}
	}, 1);
}







};
obj78690_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78690_onTap_activeActionGroupIndex = -1;
		$("#obj78690").trigger("obj78690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78690) {
				console.warn("de-queueing event obj78690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78690_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78696();
function runjs_78696() {
	window.obj78690_onTap_runningActionsCount = obj78690_onTap_runningActionsCount + 1;

	$("#obj78537").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup6();
}
	}, 1);
}







};
obj78690_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78690_onTap_activeActionGroupIndex = -1;
		$("#obj78690").trigger("obj78690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78690) {
				console.warn("de-queueing event obj78690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78690_onTap_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78697();
function runjs_78697() {
	window.obj78690_onTap_runningActionsCount = obj78690_onTap_runningActionsCount + 1;

	$("#obj78420").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup7();
}
	}, 1);
}







};
obj78690_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78690_onTap_activeActionGroupIndex = -1;
		$("#obj78690").trigger("obj78690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78690) {
				console.warn("de-queueing event obj78690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78690_onTap_activeActionGroupIndex = 7;
	












//	action: playAudio
//	target: obj78422 
playAudio_78699();
function playAudio_78699() {
	window.obj78690_onTap_runningActionsCount = obj78690_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78422")[0];
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
		    window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup8();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup8();
}
	}
}









};
obj78690_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78690_onTap_activeActionGroupIndex = -1;
		$("#obj78690").trigger("obj78690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78690) {
				console.warn("de-queueing event obj78690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78690_onTap_activeActionGroupIndex = 8;
	















//	action: Switch Text
switchText_90302();
function switchText_90302() {
	window.obj78690_onTap_runningActionsCount = obj78690_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup9();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78690_onTap_runningActionsCount = window.obj78690_onTap_runningActionsCount - 1;
if (window.obj78690_onTap_runningActionsCount < 0) {
	window.obj78690_onTap_runningActionsCount = 0;
} else if (window.obj78690_onTap_runningActionsCount == 0) {
	obj78690_onTap_actionGroup9();
}
		}, 1);
	}
}






};
obj78690_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78690_onTap_activeActionGroupIndex = -1;
		$("#obj78690").trigger("obj78690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78690) {
				console.warn("de-queueing event obj78690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78690_onTap_activeActionGroupIndex = 9;
	





















};
obj78683_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78683_onTap_activeActionGroupIndex = -1;
		$("#obj78683").trigger("obj78683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78683) {
				console.warn("de-queueing event obj78683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78683_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78685();
function switchText_78685() {
	window.obj78683_onTap_runningActionsCount = obj78683_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78683_onTap_runningActionsCount = window.obj78683_onTap_runningActionsCount - 1;
if (window.obj78683_onTap_runningActionsCount < 0) {
	window.obj78683_onTap_runningActionsCount = 0;
} else if (window.obj78683_onTap_runningActionsCount == 0) {
	obj78683_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78683_onTap_runningActionsCount = window.obj78683_onTap_runningActionsCount - 1;
if (window.obj78683_onTap_runningActionsCount < 0) {
	window.obj78683_onTap_runningActionsCount = 0;
} else if (window.obj78683_onTap_runningActionsCount == 0) {
	obj78683_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78683_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78683_onTap_activeActionGroupIndex = -1;
		$("#obj78683").trigger("obj78683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78683) {
				console.warn("de-queueing event obj78683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78683_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78686();
function runjs_78686() {
	window.obj78683_onTap_runningActionsCount = obj78683_onTap_runningActionsCount + 1;

	$("#obj78683").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78683_onTap_runningActionsCount = window.obj78683_onTap_runningActionsCount - 1;
if (window.obj78683_onTap_runningActionsCount < 0) {
	window.obj78683_onTap_runningActionsCount = 0;
} else if (window.obj78683_onTap_runningActionsCount == 0) {
	obj78683_onTap_actionGroup2();
}
	}, 1);
}







};
obj78683_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78683_onTap_activeActionGroupIndex = -1;
		$("#obj78683").trigger("obj78683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78683) {
				console.warn("de-queueing event obj78683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78683_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78687();
function playAudio_78687() {
	window.obj78683_onTap_runningActionsCount = obj78683_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78683_onTap_runningActionsCount = window.obj78683_onTap_runningActionsCount - 1;
if (window.obj78683_onTap_runningActionsCount < 0) {
	window.obj78683_onTap_runningActionsCount = 0;
} else if (window.obj78683_onTap_runningActionsCount == 0) {
	obj78683_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78683_onTap_runningActionsCount = window.obj78683_onTap_runningActionsCount - 1;
if (window.obj78683_onTap_runningActionsCount < 0) {
	window.obj78683_onTap_runningActionsCount = 0;
} else if (window.obj78683_onTap_runningActionsCount == 0) {
	obj78683_onTap_actionGroup3();
}
	}
}









};
obj78683_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78683_onTap_activeActionGroupIndex = -1;
		$("#obj78683").trigger("obj78683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78683) {
				console.warn("de-queueing event obj78683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78683_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78688();
function runjs_78688() {
	window.obj78683_onTap_runningActionsCount = obj78683_onTap_runningActionsCount + 1;

	$("#obj78683").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78683_onTap_runningActionsCount = window.obj78683_onTap_runningActionsCount - 1;
if (window.obj78683_onTap_runningActionsCount < 0) {
	window.obj78683_onTap_runningActionsCount = 0;
} else if (window.obj78683_onTap_runningActionsCount == 0) {
	obj78683_onTap_actionGroup4();
}
	}, 1);
}







};
obj78683_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78683_onTap_activeActionGroupIndex = -1;
		$("#obj78683").trigger("obj78683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78683) {
				console.warn("de-queueing event obj78683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78683_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78689();
function switchText_78689() {
	window.obj78683_onTap_runningActionsCount = obj78683_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78683_onTap_runningActionsCount = window.obj78683_onTap_runningActionsCount - 1;
if (window.obj78683_onTap_runningActionsCount < 0) {
	window.obj78683_onTap_runningActionsCount = 0;
} else if (window.obj78683_onTap_runningActionsCount == 0) {
	obj78683_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78683_onTap_runningActionsCount = window.obj78683_onTap_runningActionsCount - 1;
if (window.obj78683_onTap_runningActionsCount < 0) {
	window.obj78683_onTap_runningActionsCount = 0;
} else if (window.obj78683_onTap_runningActionsCount == 0) {
	obj78683_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78683_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78683_onTap_activeActionGroupIndex = -1;
		$("#obj78683").trigger("obj78683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78683) {
				console.warn("de-queueing event obj78683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78683_onTap_activeActionGroupIndex = 5;
	





















};
obj78676_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78676_onTap_activeActionGroupIndex = -1;
		$("#obj78676").trigger("obj78676_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78676) {
				console.warn("de-queueing event obj78676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78676_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78678();
function switchText_78678() {
	window.obj78676_onTap_runningActionsCount = obj78676_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78676_onTap_runningActionsCount = window.obj78676_onTap_runningActionsCount - 1;
if (window.obj78676_onTap_runningActionsCount < 0) {
	window.obj78676_onTap_runningActionsCount = 0;
} else if (window.obj78676_onTap_runningActionsCount == 0) {
	obj78676_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78676_onTap_runningActionsCount = window.obj78676_onTap_runningActionsCount - 1;
if (window.obj78676_onTap_runningActionsCount < 0) {
	window.obj78676_onTap_runningActionsCount = 0;
} else if (window.obj78676_onTap_runningActionsCount == 0) {
	obj78676_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78676_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78676_onTap_activeActionGroupIndex = -1;
		$("#obj78676").trigger("obj78676_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78676) {
				console.warn("de-queueing event obj78676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78676_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78679();
function runjs_78679() {
	window.obj78676_onTap_runningActionsCount = obj78676_onTap_runningActionsCount + 1;

	$("#obj78676").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78676_onTap_runningActionsCount = window.obj78676_onTap_runningActionsCount - 1;
if (window.obj78676_onTap_runningActionsCount < 0) {
	window.obj78676_onTap_runningActionsCount = 0;
} else if (window.obj78676_onTap_runningActionsCount == 0) {
	obj78676_onTap_actionGroup2();
}
	}, 1);
}







};
obj78676_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78676_onTap_activeActionGroupIndex = -1;
		$("#obj78676").trigger("obj78676_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78676) {
				console.warn("de-queueing event obj78676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78676_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78680();
function playAudio_78680() {
	window.obj78676_onTap_runningActionsCount = obj78676_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78676_onTap_runningActionsCount = window.obj78676_onTap_runningActionsCount - 1;
if (window.obj78676_onTap_runningActionsCount < 0) {
	window.obj78676_onTap_runningActionsCount = 0;
} else if (window.obj78676_onTap_runningActionsCount == 0) {
	obj78676_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78676_onTap_runningActionsCount = window.obj78676_onTap_runningActionsCount - 1;
if (window.obj78676_onTap_runningActionsCount < 0) {
	window.obj78676_onTap_runningActionsCount = 0;
} else if (window.obj78676_onTap_runningActionsCount == 0) {
	obj78676_onTap_actionGroup3();
}
	}
}









};
obj78676_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78676_onTap_activeActionGroupIndex = -1;
		$("#obj78676").trigger("obj78676_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78676) {
				console.warn("de-queueing event obj78676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78676_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78681();
function runjs_78681() {
	window.obj78676_onTap_runningActionsCount = obj78676_onTap_runningActionsCount + 1;

	$("#obj78676").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78676_onTap_runningActionsCount = window.obj78676_onTap_runningActionsCount - 1;
if (window.obj78676_onTap_runningActionsCount < 0) {
	window.obj78676_onTap_runningActionsCount = 0;
} else if (window.obj78676_onTap_runningActionsCount == 0) {
	obj78676_onTap_actionGroup4();
}
	}, 1);
}







};
obj78676_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78676_onTap_activeActionGroupIndex = -1;
		$("#obj78676").trigger("obj78676_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78676) {
				console.warn("de-queueing event obj78676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78676_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78682();
function switchText_78682() {
	window.obj78676_onTap_runningActionsCount = obj78676_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78676_onTap_runningActionsCount = window.obj78676_onTap_runningActionsCount - 1;
if (window.obj78676_onTap_runningActionsCount < 0) {
	window.obj78676_onTap_runningActionsCount = 0;
} else if (window.obj78676_onTap_runningActionsCount == 0) {
	obj78676_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78676_onTap_runningActionsCount = window.obj78676_onTap_runningActionsCount - 1;
if (window.obj78676_onTap_runningActionsCount < 0) {
	window.obj78676_onTap_runningActionsCount = 0;
} else if (window.obj78676_onTap_runningActionsCount == 0) {
	obj78676_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78676_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78676_onTap_activeActionGroupIndex = -1;
		$("#obj78676").trigger("obj78676_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78676) {
				console.warn("de-queueing event obj78676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78676_onTap_activeActionGroupIndex = 5;
	





















};
obj78667_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78667_onTap_activeActionGroupIndex = -1;
		$("#obj78667").trigger("obj78667_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78667) {
				console.warn("de-queueing event obj78667." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78667").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78667_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78669();
function runjs_78669() {
	window.obj78667_onTap_runningActionsCount = obj78667_onTap_runningActionsCount + 1;

	$("#obj78667").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup1();
}
	}, 1);
}







};
obj78667_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78667_onTap_activeActionGroupIndex = -1;
		$("#obj78667").trigger("obj78667_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78667) {
				console.warn("de-queueing event obj78667." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78667").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78667_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78674();
function switchText_78674() {
	window.obj78667_onTap_runningActionsCount = obj78667_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj78667_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78667_onTap_activeActionGroupIndex = -1;
		$("#obj78667").trigger("obj78667_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78667) {
				console.warn("de-queueing event obj78667." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78667").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78667_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78670();
function runjs_78670() {
	window.obj78667_onTap_runningActionsCount = obj78667_onTap_runningActionsCount + 1;

	$("#obj78623").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup3();
}
	}, 1);
}







};
obj78667_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78667_onTap_activeActionGroupIndex = -1;
		$("#obj78667").trigger("obj78667_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78667) {
				console.warn("de-queueing event obj78667." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78667").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78667_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78671();
function runjs_78671() {
	window.obj78667_onTap_runningActionsCount = obj78667_onTap_runningActionsCount + 1;

	$("#obj78589").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup4();
}
	}, 1);
}







};
obj78667_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78667_onTap_activeActionGroupIndex = -1;
		$("#obj78667").trigger("obj78667_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78667) {
				console.warn("de-queueing event obj78667." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78667").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78667_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78672();
function runjs_78672() {
	window.obj78667_onTap_runningActionsCount = obj78667_onTap_runningActionsCount + 1;

	$("#obj78554").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup5();
}
	}, 1);
}







};
obj78667_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78667_onTap_activeActionGroupIndex = -1;
		$("#obj78667").trigger("obj78667_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78667) {
				console.warn("de-queueing event obj78667." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78667").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78667_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78673();
function runjs_78673() {
	window.obj78667_onTap_runningActionsCount = obj78667_onTap_runningActionsCount + 1;

	$("#obj78412").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup6();
}
	}, 1);
}







};
obj78667_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78667_onTap_activeActionGroupIndex = -1;
		$("#obj78667").trigger("obj78667_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78667) {
				console.warn("de-queueing event obj78667." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78667").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78667_onTap_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj78422 
playAudio_78675();
function playAudio_78675() {
	window.obj78667_onTap_runningActionsCount = obj78667_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78422")[0];
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
		    window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup7();
}
	}
}









};
obj78667_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78667_onTap_activeActionGroupIndex = -1;
		$("#obj78667").trigger("obj78667_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78667) {
				console.warn("de-queueing event obj78667." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78667").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78667_onTap_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_90307();
function switchText_90307() {
	window.obj78667_onTap_runningActionsCount = obj78667_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78667_onTap_runningActionsCount = window.obj78667_onTap_runningActionsCount - 1;
if (window.obj78667_onTap_runningActionsCount < 0) {
	window.obj78667_onTap_runningActionsCount = 0;
} else if (window.obj78667_onTap_runningActionsCount == 0) {
	obj78667_onTap_actionGroup8();
}
		}, 1);
	}
}






};
obj78667_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78667_onTap_activeActionGroupIndex = -1;
		$("#obj78667").trigger("obj78667_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78667) {
				console.warn("de-queueing event obj78667." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78667").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78667_onTap_activeActionGroupIndex = 8;
	





















};
obj78658_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78658_onTap_activeActionGroupIndex = -1;
		$("#obj78658").trigger("obj78658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78658) {
				console.warn("de-queueing event obj78658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78658_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78660();
function runjs_78660() {
	window.obj78658_onTap_runningActionsCount = obj78658_onTap_runningActionsCount + 1;

	$("#obj78658").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup1();
}
	}, 1);
}







};
obj78658_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78658_onTap_activeActionGroupIndex = -1;
		$("#obj78658").trigger("obj78658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78658) {
				console.warn("de-queueing event obj78658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78658_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78665();
function switchText_78665() {
	window.obj78658_onTap_runningActionsCount = obj78658_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj78658_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78658_onTap_activeActionGroupIndex = -1;
		$("#obj78658").trigger("obj78658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78658) {
				console.warn("de-queueing event obj78658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78658_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78661();
function runjs_78661() {
	window.obj78658_onTap_runningActionsCount = obj78658_onTap_runningActionsCount + 1;

	$("#obj78621").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup3();
}
	}, 1);
}







};
obj78658_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78658_onTap_activeActionGroupIndex = -1;
		$("#obj78658").trigger("obj78658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78658) {
				console.warn("de-queueing event obj78658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78658_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78662();
function runjs_78662() {
	window.obj78658_onTap_runningActionsCount = obj78658_onTap_runningActionsCount + 1;

	$("#obj78587").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup4();
}
	}, 1);
}







};
obj78658_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78658_onTap_activeActionGroupIndex = -1;
		$("#obj78658").trigger("obj78658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78658) {
				console.warn("de-queueing event obj78658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78658_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78663();
function runjs_78663() {
	window.obj78658_onTap_runningActionsCount = obj78658_onTap_runningActionsCount + 1;

	$("#obj78552").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup5();
}
	}, 1);
}







};
obj78658_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78658_onTap_activeActionGroupIndex = -1;
		$("#obj78658").trigger("obj78658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78658) {
				console.warn("de-queueing event obj78658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78658_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78664();
function runjs_78664() {
	window.obj78658_onTap_runningActionsCount = obj78658_onTap_runningActionsCount + 1;

	$("#obj78414").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup6();
}
	}, 1);
}







};
obj78658_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78658_onTap_activeActionGroupIndex = -1;
		$("#obj78658").trigger("obj78658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78658) {
				console.warn("de-queueing event obj78658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78658_onTap_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj78422 
playAudio_78666();
function playAudio_78666() {
	window.obj78658_onTap_runningActionsCount = obj78658_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78422")[0];
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
		    window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup7();
}
	}
}









};
obj78658_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78658_onTap_activeActionGroupIndex = -1;
		$("#obj78658").trigger("obj78658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78658) {
				console.warn("de-queueing event obj78658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78658_onTap_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_90306();
function switchText_90306() {
	window.obj78658_onTap_runningActionsCount = obj78658_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78658_onTap_runningActionsCount = window.obj78658_onTap_runningActionsCount - 1;
if (window.obj78658_onTap_runningActionsCount < 0) {
	window.obj78658_onTap_runningActionsCount = 0;
} else if (window.obj78658_onTap_runningActionsCount == 0) {
	obj78658_onTap_actionGroup8();
}
		}, 1);
	}
}






};
obj78658_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78658_onTap_activeActionGroupIndex = -1;
		$("#obj78658").trigger("obj78658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78658) {
				console.warn("de-queueing event obj78658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78658_onTap_activeActionGroupIndex = 8;
	





















};
obj78655_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78655_onTap_activeActionGroupIndex = -1;
		$("#obj78655").trigger("obj78655_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78655) {
				console.warn("de-queueing event obj78655." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78655").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78655_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78657();
function runjs_78657() {
	window.obj78655_onTap_runningActionsCount = obj78655_onTap_runningActionsCount + 1;

	$("#obj78655").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78655_onTap_runningActionsCount = window.obj78655_onTap_runningActionsCount - 1;
if (window.obj78655_onTap_runningActionsCount < 0) {
	window.obj78655_onTap_runningActionsCount = 0;
} else if (window.obj78655_onTap_runningActionsCount == 0) {
	obj78655_onTap_actionGroup1();
}
	}, 1);
}







};
obj78655_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78655_onTap_activeActionGroupIndex = -1;
		$("#obj78655").trigger("obj78655_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78655) {
				console.warn("de-queueing event obj78655." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78655").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78655_onTap_activeActionGroupIndex = 1;
	





















};
obj78648_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78648_onTap_activeActionGroupIndex = -1;
		$("#obj78648").trigger("obj78648_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78648) {
				console.warn("de-queueing event obj78648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78648_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78650();
function switchText_78650() {
	window.obj78648_onTap_runningActionsCount = obj78648_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78648_onTap_runningActionsCount = window.obj78648_onTap_runningActionsCount - 1;
if (window.obj78648_onTap_runningActionsCount < 0) {
	window.obj78648_onTap_runningActionsCount = 0;
} else if (window.obj78648_onTap_runningActionsCount == 0) {
	obj78648_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78648_onTap_runningActionsCount = window.obj78648_onTap_runningActionsCount - 1;
if (window.obj78648_onTap_runningActionsCount < 0) {
	window.obj78648_onTap_runningActionsCount = 0;
} else if (window.obj78648_onTap_runningActionsCount == 0) {
	obj78648_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78648_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78648_onTap_activeActionGroupIndex = -1;
		$("#obj78648").trigger("obj78648_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78648) {
				console.warn("de-queueing event obj78648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78648_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78651();
function runjs_78651() {
	window.obj78648_onTap_runningActionsCount = obj78648_onTap_runningActionsCount + 1;

	$("#obj78648").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78648_onTap_runningActionsCount = window.obj78648_onTap_runningActionsCount - 1;
if (window.obj78648_onTap_runningActionsCount < 0) {
	window.obj78648_onTap_runningActionsCount = 0;
} else if (window.obj78648_onTap_runningActionsCount == 0) {
	obj78648_onTap_actionGroup2();
}
	}, 1);
}







};
obj78648_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78648_onTap_activeActionGroupIndex = -1;
		$("#obj78648").trigger("obj78648_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78648) {
				console.warn("de-queueing event obj78648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78648_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78652();
function playAudio_78652() {
	window.obj78648_onTap_runningActionsCount = obj78648_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78648_onTap_runningActionsCount = window.obj78648_onTap_runningActionsCount - 1;
if (window.obj78648_onTap_runningActionsCount < 0) {
	window.obj78648_onTap_runningActionsCount = 0;
} else if (window.obj78648_onTap_runningActionsCount == 0) {
	obj78648_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78648_onTap_runningActionsCount = window.obj78648_onTap_runningActionsCount - 1;
if (window.obj78648_onTap_runningActionsCount < 0) {
	window.obj78648_onTap_runningActionsCount = 0;
} else if (window.obj78648_onTap_runningActionsCount == 0) {
	obj78648_onTap_actionGroup3();
}
	}
}









};
obj78648_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78648_onTap_activeActionGroupIndex = -1;
		$("#obj78648").trigger("obj78648_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78648) {
				console.warn("de-queueing event obj78648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78648_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78653();
function runjs_78653() {
	window.obj78648_onTap_runningActionsCount = obj78648_onTap_runningActionsCount + 1;

	$("#obj78648").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78648_onTap_runningActionsCount = window.obj78648_onTap_runningActionsCount - 1;
if (window.obj78648_onTap_runningActionsCount < 0) {
	window.obj78648_onTap_runningActionsCount = 0;
} else if (window.obj78648_onTap_runningActionsCount == 0) {
	obj78648_onTap_actionGroup4();
}
	}, 1);
}







};
obj78648_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78648_onTap_activeActionGroupIndex = -1;
		$("#obj78648").trigger("obj78648_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78648) {
				console.warn("de-queueing event obj78648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78648_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78654();
function switchText_78654() {
	window.obj78648_onTap_runningActionsCount = obj78648_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78648_onTap_runningActionsCount = window.obj78648_onTap_runningActionsCount - 1;
if (window.obj78648_onTap_runningActionsCount < 0) {
	window.obj78648_onTap_runningActionsCount = 0;
} else if (window.obj78648_onTap_runningActionsCount == 0) {
	obj78648_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78648_onTap_runningActionsCount = window.obj78648_onTap_runningActionsCount - 1;
if (window.obj78648_onTap_runningActionsCount < 0) {
	window.obj78648_onTap_runningActionsCount = 0;
} else if (window.obj78648_onTap_runningActionsCount == 0) {
	obj78648_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78648_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78648_onTap_activeActionGroupIndex = -1;
		$("#obj78648").trigger("obj78648_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78648) {
				console.warn("de-queueing event obj78648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78648_onTap_activeActionGroupIndex = 5;
	





















};
obj78641_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78641_onTap_activeActionGroupIndex = -1;
		$("#obj78641").trigger("obj78641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78641) {
				console.warn("de-queueing event obj78641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78641_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78643();
function switchText_78643() {
	window.obj78641_onTap_runningActionsCount = obj78641_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78641_onTap_runningActionsCount = window.obj78641_onTap_runningActionsCount - 1;
if (window.obj78641_onTap_runningActionsCount < 0) {
	window.obj78641_onTap_runningActionsCount = 0;
} else if (window.obj78641_onTap_runningActionsCount == 0) {
	obj78641_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78641_onTap_runningActionsCount = window.obj78641_onTap_runningActionsCount - 1;
if (window.obj78641_onTap_runningActionsCount < 0) {
	window.obj78641_onTap_runningActionsCount = 0;
} else if (window.obj78641_onTap_runningActionsCount == 0) {
	obj78641_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78641_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78641_onTap_activeActionGroupIndex = -1;
		$("#obj78641").trigger("obj78641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78641) {
				console.warn("de-queueing event obj78641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78641_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78644();
function runjs_78644() {
	window.obj78641_onTap_runningActionsCount = obj78641_onTap_runningActionsCount + 1;

	$("#obj78641").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78641_onTap_runningActionsCount = window.obj78641_onTap_runningActionsCount - 1;
if (window.obj78641_onTap_runningActionsCount < 0) {
	window.obj78641_onTap_runningActionsCount = 0;
} else if (window.obj78641_onTap_runningActionsCount == 0) {
	obj78641_onTap_actionGroup2();
}
	}, 1);
}







};
obj78641_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78641_onTap_activeActionGroupIndex = -1;
		$("#obj78641").trigger("obj78641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78641) {
				console.warn("de-queueing event obj78641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78641_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78645();
function playAudio_78645() {
	window.obj78641_onTap_runningActionsCount = obj78641_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78641_onTap_runningActionsCount = window.obj78641_onTap_runningActionsCount - 1;
if (window.obj78641_onTap_runningActionsCount < 0) {
	window.obj78641_onTap_runningActionsCount = 0;
} else if (window.obj78641_onTap_runningActionsCount == 0) {
	obj78641_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78641_onTap_runningActionsCount = window.obj78641_onTap_runningActionsCount - 1;
if (window.obj78641_onTap_runningActionsCount < 0) {
	window.obj78641_onTap_runningActionsCount = 0;
} else if (window.obj78641_onTap_runningActionsCount == 0) {
	obj78641_onTap_actionGroup3();
}
	}
}









};
obj78641_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78641_onTap_activeActionGroupIndex = -1;
		$("#obj78641").trigger("obj78641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78641) {
				console.warn("de-queueing event obj78641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78641_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78646();
function runjs_78646() {
	window.obj78641_onTap_runningActionsCount = obj78641_onTap_runningActionsCount + 1;

	$("#obj78641").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78641_onTap_runningActionsCount = window.obj78641_onTap_runningActionsCount - 1;
if (window.obj78641_onTap_runningActionsCount < 0) {
	window.obj78641_onTap_runningActionsCount = 0;
} else if (window.obj78641_onTap_runningActionsCount == 0) {
	obj78641_onTap_actionGroup4();
}
	}, 1);
}







};
obj78641_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78641_onTap_activeActionGroupIndex = -1;
		$("#obj78641").trigger("obj78641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78641) {
				console.warn("de-queueing event obj78641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78641_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78647();
function switchText_78647() {
	window.obj78641_onTap_runningActionsCount = obj78641_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78641_onTap_runningActionsCount = window.obj78641_onTap_runningActionsCount - 1;
if (window.obj78641_onTap_runningActionsCount < 0) {
	window.obj78641_onTap_runningActionsCount = 0;
} else if (window.obj78641_onTap_runningActionsCount == 0) {
	obj78641_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78641_onTap_runningActionsCount = window.obj78641_onTap_runningActionsCount - 1;
if (window.obj78641_onTap_runningActionsCount < 0) {
	window.obj78641_onTap_runningActionsCount = 0;
} else if (window.obj78641_onTap_runningActionsCount == 0) {
	obj78641_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78641_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78641_onTap_activeActionGroupIndex = -1;
		$("#obj78641").trigger("obj78641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78641) {
				console.warn("de-queueing event obj78641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78641_onTap_activeActionGroupIndex = 5;
	





















};
obj78632_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78632_onTap_activeActionGroupIndex = -1;
		$("#obj78632").trigger("obj78632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78632) {
				console.warn("de-queueing event obj78632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78632_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78634();
function switchText_78634() {
	window.obj78632_onTap_runningActionsCount = obj78632_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78632_onTap_runningActionsCount = window.obj78632_onTap_runningActionsCount - 1;
if (window.obj78632_onTap_runningActionsCount < 0) {
	window.obj78632_onTap_runningActionsCount = 0;
} else if (window.obj78632_onTap_runningActionsCount == 0) {
	obj78632_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78632_onTap_runningActionsCount = window.obj78632_onTap_runningActionsCount - 1;
if (window.obj78632_onTap_runningActionsCount < 0) {
	window.obj78632_onTap_runningActionsCount = 0;
} else if (window.obj78632_onTap_runningActionsCount == 0) {
	obj78632_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78632_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78632_onTap_activeActionGroupIndex = -1;
		$("#obj78632").trigger("obj78632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78632) {
				console.warn("de-queueing event obj78632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78632_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78635();
function runjs_78635() {
	window.obj78632_onTap_runningActionsCount = obj78632_onTap_runningActionsCount + 1;

	$("#obj78632").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78632_onTap_runningActionsCount = window.obj78632_onTap_runningActionsCount - 1;
if (window.obj78632_onTap_runningActionsCount < 0) {
	window.obj78632_onTap_runningActionsCount = 0;
} else if (window.obj78632_onTap_runningActionsCount == 0) {
	obj78632_onTap_actionGroup2();
}
	}, 1);
}







};
obj78632_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78632_onTap_activeActionGroupIndex = -1;
		$("#obj78632").trigger("obj78632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78632) {
				console.warn("de-queueing event obj78632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78632_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78636();
function playAudio_78636() {
	window.obj78632_onTap_runningActionsCount = obj78632_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78632_onTap_runningActionsCount = window.obj78632_onTap_runningActionsCount - 1;
if (window.obj78632_onTap_runningActionsCount < 0) {
	window.obj78632_onTap_runningActionsCount = 0;
} else if (window.obj78632_onTap_runningActionsCount == 0) {
	obj78632_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78632_onTap_runningActionsCount = window.obj78632_onTap_runningActionsCount - 1;
if (window.obj78632_onTap_runningActionsCount < 0) {
	window.obj78632_onTap_runningActionsCount = 0;
} else if (window.obj78632_onTap_runningActionsCount == 0) {
	obj78632_onTap_actionGroup3();
}
	}
}









};
obj78632_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78632_onTap_activeActionGroupIndex = -1;
		$("#obj78632").trigger("obj78632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78632) {
				console.warn("de-queueing event obj78632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78632_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78637();
function runjs_78637() {
	window.obj78632_onTap_runningActionsCount = obj78632_onTap_runningActionsCount + 1;

	$("#obj78632").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78632_onTap_runningActionsCount = window.obj78632_onTap_runningActionsCount - 1;
if (window.obj78632_onTap_runningActionsCount < 0) {
	window.obj78632_onTap_runningActionsCount = 0;
} else if (window.obj78632_onTap_runningActionsCount == 0) {
	obj78632_onTap_actionGroup4();
}
	}, 1);
}







};
obj78632_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78632_onTap_activeActionGroupIndex = -1;
		$("#obj78632").trigger("obj78632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78632) {
				console.warn("de-queueing event obj78632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78632_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78638();
function switchText_78638() {
	window.obj78632_onTap_runningActionsCount = obj78632_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78632_onTap_runningActionsCount = window.obj78632_onTap_runningActionsCount - 1;
if (window.obj78632_onTap_runningActionsCount < 0) {
	window.obj78632_onTap_runningActionsCount = 0;
} else if (window.obj78632_onTap_runningActionsCount == 0) {
	obj78632_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78632_onTap_runningActionsCount = window.obj78632_onTap_runningActionsCount - 1;
if (window.obj78632_onTap_runningActionsCount < 0) {
	window.obj78632_onTap_runningActionsCount = 0;
} else if (window.obj78632_onTap_runningActionsCount == 0) {
	obj78632_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78632_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78632_onTap_activeActionGroupIndex = -1;
		$("#obj78632").trigger("obj78632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78632) {
				console.warn("de-queueing event obj78632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78632_onTap_activeActionGroupIndex = 5;
	





















};
obj78625_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78625_onTap_activeActionGroupIndex = -1;
		$("#obj78625").trigger("obj78625_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78625) {
				console.warn("de-queueing event obj78625." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78625").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78625_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78627();
function switchText_78627() {
	window.obj78625_onTap_runningActionsCount = obj78625_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78625_onTap_runningActionsCount = window.obj78625_onTap_runningActionsCount - 1;
if (window.obj78625_onTap_runningActionsCount < 0) {
	window.obj78625_onTap_runningActionsCount = 0;
} else if (window.obj78625_onTap_runningActionsCount == 0) {
	obj78625_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78625_onTap_runningActionsCount = window.obj78625_onTap_runningActionsCount - 1;
if (window.obj78625_onTap_runningActionsCount < 0) {
	window.obj78625_onTap_runningActionsCount = 0;
} else if (window.obj78625_onTap_runningActionsCount == 0) {
	obj78625_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78625_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78625_onTap_activeActionGroupIndex = -1;
		$("#obj78625").trigger("obj78625_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78625) {
				console.warn("de-queueing event obj78625." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78625").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78625_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78628();
function runjs_78628() {
	window.obj78625_onTap_runningActionsCount = obj78625_onTap_runningActionsCount + 1;

	$("#obj78625").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78625_onTap_runningActionsCount = window.obj78625_onTap_runningActionsCount - 1;
if (window.obj78625_onTap_runningActionsCount < 0) {
	window.obj78625_onTap_runningActionsCount = 0;
} else if (window.obj78625_onTap_runningActionsCount == 0) {
	obj78625_onTap_actionGroup2();
}
	}, 1);
}







};
obj78625_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78625_onTap_activeActionGroupIndex = -1;
		$("#obj78625").trigger("obj78625_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78625) {
				console.warn("de-queueing event obj78625." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78625").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78625_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78629();
function playAudio_78629() {
	window.obj78625_onTap_runningActionsCount = obj78625_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78625_onTap_runningActionsCount = window.obj78625_onTap_runningActionsCount - 1;
if (window.obj78625_onTap_runningActionsCount < 0) {
	window.obj78625_onTap_runningActionsCount = 0;
} else if (window.obj78625_onTap_runningActionsCount == 0) {
	obj78625_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78625_onTap_runningActionsCount = window.obj78625_onTap_runningActionsCount - 1;
if (window.obj78625_onTap_runningActionsCount < 0) {
	window.obj78625_onTap_runningActionsCount = 0;
} else if (window.obj78625_onTap_runningActionsCount == 0) {
	obj78625_onTap_actionGroup3();
}
	}
}









};
obj78625_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78625_onTap_activeActionGroupIndex = -1;
		$("#obj78625").trigger("obj78625_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78625) {
				console.warn("de-queueing event obj78625." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78625").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78625_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78630();
function runjs_78630() {
	window.obj78625_onTap_runningActionsCount = obj78625_onTap_runningActionsCount + 1;

	$("#obj78625").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78625_onTap_runningActionsCount = window.obj78625_onTap_runningActionsCount - 1;
if (window.obj78625_onTap_runningActionsCount < 0) {
	window.obj78625_onTap_runningActionsCount = 0;
} else if (window.obj78625_onTap_runningActionsCount == 0) {
	obj78625_onTap_actionGroup4();
}
	}, 1);
}







};
obj78625_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78625_onTap_activeActionGroupIndex = -1;
		$("#obj78625").trigger("obj78625_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78625) {
				console.warn("de-queueing event obj78625." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78625").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78625_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78631();
function switchText_78631() {
	window.obj78625_onTap_runningActionsCount = obj78625_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78625_onTap_runningActionsCount = window.obj78625_onTap_runningActionsCount - 1;
if (window.obj78625_onTap_runningActionsCount < 0) {
	window.obj78625_onTap_runningActionsCount = 0;
} else if (window.obj78625_onTap_runningActionsCount == 0) {
	obj78625_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78625_onTap_runningActionsCount = window.obj78625_onTap_runningActionsCount - 1;
if (window.obj78625_onTap_runningActionsCount < 0) {
	window.obj78625_onTap_runningActionsCount = 0;
} else if (window.obj78625_onTap_runningActionsCount == 0) {
	obj78625_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78625_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78625_onTap_activeActionGroupIndex = -1;
		$("#obj78625").trigger("obj78625_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78625) {
				console.warn("de-queueing event obj78625." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78625").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78625_onTap_activeActionGroupIndex = 5;
	





















};
obj78612_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78612_onTap_activeActionGroupIndex = -1;
		$("#obj78612").trigger("obj78612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78612) {
				console.warn("de-queueing event obj78612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78612_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78614();
function runjs_78614() {
	window.obj78612_onTap_runningActionsCount = obj78612_onTap_runningActionsCount + 1;

	$("#obj78612").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup1();
}
	}, 1);
}







};
obj78612_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78612_onTap_activeActionGroupIndex = -1;
		$("#obj78612").trigger("obj78612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78612) {
				console.warn("de-queueing event obj78612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78612_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78619();
function switchText_78619() {
	window.obj78612_onTap_runningActionsCount = obj78612_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj78612_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78612_onTap_activeActionGroupIndex = -1;
		$("#obj78612").trigger("obj78612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78612) {
				console.warn("de-queueing event obj78612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78612_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78615();
function runjs_78615() {
	window.obj78612_onTap_runningActionsCount = obj78612_onTap_runningActionsCount + 1;

	$("#obj78585").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup3();
}
	}, 1);
}







};
obj78612_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78612_onTap_activeActionGroupIndex = -1;
		$("#obj78612").trigger("obj78612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78612) {
				console.warn("de-queueing event obj78612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78612_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78616();
function runjs_78616() {
	window.obj78612_onTap_runningActionsCount = obj78612_onTap_runningActionsCount + 1;

	$("#obj78550").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup4();
}
	}, 1);
}







};
obj78612_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78612_onTap_activeActionGroupIndex = -1;
		$("#obj78612").trigger("obj78612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78612) {
				console.warn("de-queueing event obj78612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78612_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78617();
function runjs_78617() {
	window.obj78612_onTap_runningActionsCount = obj78612_onTap_runningActionsCount + 1;

	$("#obj78507").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup5();
}
	}, 1);
}







};
obj78612_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78612_onTap_activeActionGroupIndex = -1;
		$("#obj78612").trigger("obj78612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78612) {
				console.warn("de-queueing event obj78612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78612_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78618();
function runjs_78618() {
	window.obj78612_onTap_runningActionsCount = obj78612_onTap_runningActionsCount + 1;

	$("#obj78418").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup6();
}
	}, 1);
}







};
obj78612_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78612_onTap_activeActionGroupIndex = -1;
		$("#obj78612").trigger("obj78612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78612) {
				console.warn("de-queueing event obj78612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78612_onTap_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj78422 
playAudio_78620();
function playAudio_78620() {
	window.obj78612_onTap_runningActionsCount = obj78612_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78422")[0];
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
		    window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup7();
}
	}
}









};
obj78612_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78612_onTap_activeActionGroupIndex = -1;
		$("#obj78612").trigger("obj78612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78612) {
				console.warn("de-queueing event obj78612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78612_onTap_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_90303();
function switchText_90303() {
	window.obj78612_onTap_runningActionsCount = obj78612_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78612_onTap_runningActionsCount = window.obj78612_onTap_runningActionsCount - 1;
if (window.obj78612_onTap_runningActionsCount < 0) {
	window.obj78612_onTap_runningActionsCount = 0;
} else if (window.obj78612_onTap_runningActionsCount == 0) {
	obj78612_onTap_actionGroup8();
}
		}, 1);
	}
}






};
obj78612_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78612_onTap_activeActionGroupIndex = -1;
		$("#obj78612").trigger("obj78612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78612) {
				console.warn("de-queueing event obj78612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78612_onTap_activeActionGroupIndex = 8;
	





















};
obj78607_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78607_onTap_activeActionGroupIndex = -1;
		$("#obj78607").trigger("obj78607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78607) {
				console.warn("de-queueing event obj78607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78607_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78609();
function runjs_78609() {
	window.obj78607_onTap_runningActionsCount = obj78607_onTap_runningActionsCount + 1;

	$("#obj78607").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78607_onTap_runningActionsCount = window.obj78607_onTap_runningActionsCount - 1;
if (window.obj78607_onTap_runningActionsCount < 0) {
	window.obj78607_onTap_runningActionsCount = 0;
} else if (window.obj78607_onTap_runningActionsCount == 0) {
	obj78607_onTap_actionGroup1();
}
	}, 1);
}







};
obj78607_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78607_onTap_activeActionGroupIndex = -1;
		$("#obj78607").trigger("obj78607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78607) {
				console.warn("de-queueing event obj78607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78607_onTap_activeActionGroupIndex = 1;
	





















};
obj78598_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78598_onTap_activeActionGroupIndex = -1;
		$("#obj78598").trigger("obj78598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78598) {
				console.warn("de-queueing event obj78598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78598_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78600();
function switchText_78600() {
	window.obj78598_onTap_runningActionsCount = obj78598_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78598_onTap_runningActionsCount = window.obj78598_onTap_runningActionsCount - 1;
if (window.obj78598_onTap_runningActionsCount < 0) {
	window.obj78598_onTap_runningActionsCount = 0;
} else if (window.obj78598_onTap_runningActionsCount == 0) {
	obj78598_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78598_onTap_runningActionsCount = window.obj78598_onTap_runningActionsCount - 1;
if (window.obj78598_onTap_runningActionsCount < 0) {
	window.obj78598_onTap_runningActionsCount = 0;
} else if (window.obj78598_onTap_runningActionsCount == 0) {
	obj78598_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78598_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78598_onTap_activeActionGroupIndex = -1;
		$("#obj78598").trigger("obj78598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78598) {
				console.warn("de-queueing event obj78598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78598_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78601();
function runjs_78601() {
	window.obj78598_onTap_runningActionsCount = obj78598_onTap_runningActionsCount + 1;

	$("#obj78598").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78598_onTap_runningActionsCount = window.obj78598_onTap_runningActionsCount - 1;
if (window.obj78598_onTap_runningActionsCount < 0) {
	window.obj78598_onTap_runningActionsCount = 0;
} else if (window.obj78598_onTap_runningActionsCount == 0) {
	obj78598_onTap_actionGroup2();
}
	}, 1);
}







};
obj78598_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78598_onTap_activeActionGroupIndex = -1;
		$("#obj78598").trigger("obj78598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78598) {
				console.warn("de-queueing event obj78598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78598_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78602();
function playAudio_78602() {
	window.obj78598_onTap_runningActionsCount = obj78598_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78598_onTap_runningActionsCount = window.obj78598_onTap_runningActionsCount - 1;
if (window.obj78598_onTap_runningActionsCount < 0) {
	window.obj78598_onTap_runningActionsCount = 0;
} else if (window.obj78598_onTap_runningActionsCount == 0) {
	obj78598_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78598_onTap_runningActionsCount = window.obj78598_onTap_runningActionsCount - 1;
if (window.obj78598_onTap_runningActionsCount < 0) {
	window.obj78598_onTap_runningActionsCount = 0;
} else if (window.obj78598_onTap_runningActionsCount == 0) {
	obj78598_onTap_actionGroup3();
}
	}
}









};
obj78598_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78598_onTap_activeActionGroupIndex = -1;
		$("#obj78598").trigger("obj78598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78598) {
				console.warn("de-queueing event obj78598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78598_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78603();
function runjs_78603() {
	window.obj78598_onTap_runningActionsCount = obj78598_onTap_runningActionsCount + 1;

	$("#obj78598").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78598_onTap_runningActionsCount = window.obj78598_onTap_runningActionsCount - 1;
if (window.obj78598_onTap_runningActionsCount < 0) {
	window.obj78598_onTap_runningActionsCount = 0;
} else if (window.obj78598_onTap_runningActionsCount == 0) {
	obj78598_onTap_actionGroup4();
}
	}, 1);
}







};
obj78598_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78598_onTap_activeActionGroupIndex = -1;
		$("#obj78598").trigger("obj78598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78598) {
				console.warn("de-queueing event obj78598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78598_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78604();
function switchText_78604() {
	window.obj78598_onTap_runningActionsCount = obj78598_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78598_onTap_runningActionsCount = window.obj78598_onTap_runningActionsCount - 1;
if (window.obj78598_onTap_runningActionsCount < 0) {
	window.obj78598_onTap_runningActionsCount = 0;
} else if (window.obj78598_onTap_runningActionsCount == 0) {
	obj78598_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78598_onTap_runningActionsCount = window.obj78598_onTap_runningActionsCount - 1;
if (window.obj78598_onTap_runningActionsCount < 0) {
	window.obj78598_onTap_runningActionsCount = 0;
} else if (window.obj78598_onTap_runningActionsCount == 0) {
	obj78598_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78598_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78598_onTap_activeActionGroupIndex = -1;
		$("#obj78598").trigger("obj78598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78598) {
				console.warn("de-queueing event obj78598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78598_onTap_activeActionGroupIndex = 5;
	





















};
obj78591_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78591_onTap_activeActionGroupIndex = -1;
		$("#obj78591").trigger("obj78591_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78591) {
				console.warn("de-queueing event obj78591." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78591").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78591_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78593();
function switchText_78593() {
	window.obj78591_onTap_runningActionsCount = obj78591_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78591_onTap_runningActionsCount = window.obj78591_onTap_runningActionsCount - 1;
if (window.obj78591_onTap_runningActionsCount < 0) {
	window.obj78591_onTap_runningActionsCount = 0;
} else if (window.obj78591_onTap_runningActionsCount == 0) {
	obj78591_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78591_onTap_runningActionsCount = window.obj78591_onTap_runningActionsCount - 1;
if (window.obj78591_onTap_runningActionsCount < 0) {
	window.obj78591_onTap_runningActionsCount = 0;
} else if (window.obj78591_onTap_runningActionsCount == 0) {
	obj78591_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78591_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78591_onTap_activeActionGroupIndex = -1;
		$("#obj78591").trigger("obj78591_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78591) {
				console.warn("de-queueing event obj78591." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78591").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78591_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78594();
function runjs_78594() {
	window.obj78591_onTap_runningActionsCount = obj78591_onTap_runningActionsCount + 1;

	$("#obj78591").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78591_onTap_runningActionsCount = window.obj78591_onTap_runningActionsCount - 1;
if (window.obj78591_onTap_runningActionsCount < 0) {
	window.obj78591_onTap_runningActionsCount = 0;
} else if (window.obj78591_onTap_runningActionsCount == 0) {
	obj78591_onTap_actionGroup2();
}
	}, 1);
}







};
obj78591_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78591_onTap_activeActionGroupIndex = -1;
		$("#obj78591").trigger("obj78591_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78591) {
				console.warn("de-queueing event obj78591." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78591").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78591_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78595();
function playAudio_78595() {
	window.obj78591_onTap_runningActionsCount = obj78591_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78591_onTap_runningActionsCount = window.obj78591_onTap_runningActionsCount - 1;
if (window.obj78591_onTap_runningActionsCount < 0) {
	window.obj78591_onTap_runningActionsCount = 0;
} else if (window.obj78591_onTap_runningActionsCount == 0) {
	obj78591_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78591_onTap_runningActionsCount = window.obj78591_onTap_runningActionsCount - 1;
if (window.obj78591_onTap_runningActionsCount < 0) {
	window.obj78591_onTap_runningActionsCount = 0;
} else if (window.obj78591_onTap_runningActionsCount == 0) {
	obj78591_onTap_actionGroup3();
}
	}
}









};
obj78591_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78591_onTap_activeActionGroupIndex = -1;
		$("#obj78591").trigger("obj78591_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78591) {
				console.warn("de-queueing event obj78591." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78591").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78591_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78596();
function runjs_78596() {
	window.obj78591_onTap_runningActionsCount = obj78591_onTap_runningActionsCount + 1;

	$("#obj78591").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78591_onTap_runningActionsCount = window.obj78591_onTap_runningActionsCount - 1;
if (window.obj78591_onTap_runningActionsCount < 0) {
	window.obj78591_onTap_runningActionsCount = 0;
} else if (window.obj78591_onTap_runningActionsCount == 0) {
	obj78591_onTap_actionGroup4();
}
	}, 1);
}







};
obj78591_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78591_onTap_activeActionGroupIndex = -1;
		$("#obj78591").trigger("obj78591_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78591) {
				console.warn("de-queueing event obj78591." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78591").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78591_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78597();
function switchText_78597() {
	window.obj78591_onTap_runningActionsCount = obj78591_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78591_onTap_runningActionsCount = window.obj78591_onTap_runningActionsCount - 1;
if (window.obj78591_onTap_runningActionsCount < 0) {
	window.obj78591_onTap_runningActionsCount = 0;
} else if (window.obj78591_onTap_runningActionsCount == 0) {
	obj78591_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78591_onTap_runningActionsCount = window.obj78591_onTap_runningActionsCount - 1;
if (window.obj78591_onTap_runningActionsCount < 0) {
	window.obj78591_onTap_runningActionsCount = 0;
} else if (window.obj78591_onTap_runningActionsCount == 0) {
	obj78591_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78591_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78591_onTap_activeActionGroupIndex = -1;
		$("#obj78591").trigger("obj78591_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78591) {
				console.warn("de-queueing event obj78591." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78591").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78591_onTap_activeActionGroupIndex = 5;
	





















};
obj78573_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78573_onTap_activeActionGroupIndex = -1;
		$("#obj78573").trigger("obj78573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78573) {
				console.warn("de-queueing event obj78573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78573_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78575();
function runjs_78575() {
	window.obj78573_onTap_runningActionsCount = obj78573_onTap_runningActionsCount + 1;

	$("#obj78573").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup1();
}
	}, 1);
}







};
obj78573_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78573_onTap_activeActionGroupIndex = -1;
		$("#obj78573").trigger("obj78573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78573) {
				console.warn("de-queueing event obj78573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78573_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78581();
function switchText_78581() {
	window.obj78573_onTap_runningActionsCount = obj78573_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj78573_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78573_onTap_activeActionGroupIndex = -1;
		$("#obj78573").trigger("obj78573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78573) {
				console.warn("de-queueing event obj78573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78573_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78576();
function runjs_78576() {
	window.obj78573_onTap_runningActionsCount = obj78573_onTap_runningActionsCount + 1;

	$("#obj78546").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup3();
}
	}, 1);
}







};
obj78573_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78573_onTap_activeActionGroupIndex = -1;
		$("#obj78573").trigger("obj78573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78573) {
				console.warn("de-queueing event obj78573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78573_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78577();
function runjs_78577() {
	window.obj78573_onTap_runningActionsCount = obj78573_onTap_runningActionsCount + 1;

	$("#obj78498").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup4();
}
	}, 1);
}







};
obj78573_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78573_onTap_activeActionGroupIndex = -1;
		$("#obj78573").trigger("obj78573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78573) {
				console.warn("de-queueing event obj78573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78573_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78578();
function runjs_78578() {
	window.obj78573_onTap_runningActionsCount = obj78573_onTap_runningActionsCount + 1;

	$("#obj78447").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup5();
}
	}, 1);
}







};
obj78573_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78573_onTap_activeActionGroupIndex = -1;
		$("#obj78573").trigger("obj78573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78573) {
				console.warn("de-queueing event obj78573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78573_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78579();
function runjs_78579() {
	window.obj78573_onTap_runningActionsCount = obj78573_onTap_runningActionsCount + 1;

	$("#obj78424").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup6();
}
	}, 1);
}







};
obj78573_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78573_onTap_activeActionGroupIndex = -1;
		$("#obj78573").trigger("obj78573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78573) {
				console.warn("de-queueing event obj78573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78573_onTap_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78580();
function runjs_78580() {
	window.obj78573_onTap_runningActionsCount = obj78573_onTap_runningActionsCount + 1;

	$("#obj78416").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup7();
}
	}, 1);
}







};
obj78573_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78573_onTap_activeActionGroupIndex = -1;
		$("#obj78573").trigger("obj78573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78573) {
				console.warn("de-queueing event obj78573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78573_onTap_activeActionGroupIndex = 7;
	












//	action: playAudio
//	target: obj78422 
playAudio_78582();
function playAudio_78582() {
	window.obj78573_onTap_runningActionsCount = obj78573_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78422")[0];
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
		    window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup8();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup8();
}
	}
}









};
obj78573_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78573_onTap_activeActionGroupIndex = -1;
		$("#obj78573").trigger("obj78573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78573) {
				console.warn("de-queueing event obj78573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78573_onTap_activeActionGroupIndex = 8;
	















//	action: Switch Text
switchText_90304();
function switchText_90304() {
	window.obj78573_onTap_runningActionsCount = obj78573_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup9();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78573_onTap_runningActionsCount = window.obj78573_onTap_runningActionsCount - 1;
if (window.obj78573_onTap_runningActionsCount < 0) {
	window.obj78573_onTap_runningActionsCount = 0;
} else if (window.obj78573_onTap_runningActionsCount == 0) {
	obj78573_onTap_actionGroup9();
}
		}, 1);
	}
}






};
obj78573_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78573_onTap_activeActionGroupIndex = -1;
		$("#obj78573").trigger("obj78573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78573) {
				console.warn("de-queueing event obj78573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78573_onTap_activeActionGroupIndex = 9;
	





















};
obj78570_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78570_onTap_activeActionGroupIndex = -1;
		$("#obj78570").trigger("obj78570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78570) {
				console.warn("de-queueing event obj78570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78570_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78572();
function runjs_78572() {
	window.obj78570_onTap_runningActionsCount = obj78570_onTap_runningActionsCount + 1;

	$("#obj78570").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78570_onTap_runningActionsCount = window.obj78570_onTap_runningActionsCount - 1;
if (window.obj78570_onTap_runningActionsCount < 0) {
	window.obj78570_onTap_runningActionsCount = 0;
} else if (window.obj78570_onTap_runningActionsCount == 0) {
	obj78570_onTap_actionGroup1();
}
	}, 1);
}







};
obj78570_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78570_onTap_activeActionGroupIndex = -1;
		$("#obj78570").trigger("obj78570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78570) {
				console.warn("de-queueing event obj78570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78570_onTap_activeActionGroupIndex = 1;
	





















};
obj78563_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78563_onTap_activeActionGroupIndex = -1;
		$("#obj78563").trigger("obj78563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78563) {
				console.warn("de-queueing event obj78563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78563_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78565();
function switchText_78565() {
	window.obj78563_onTap_runningActionsCount = obj78563_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78563_onTap_runningActionsCount = window.obj78563_onTap_runningActionsCount - 1;
if (window.obj78563_onTap_runningActionsCount < 0) {
	window.obj78563_onTap_runningActionsCount = 0;
} else if (window.obj78563_onTap_runningActionsCount == 0) {
	obj78563_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78563_onTap_runningActionsCount = window.obj78563_onTap_runningActionsCount - 1;
if (window.obj78563_onTap_runningActionsCount < 0) {
	window.obj78563_onTap_runningActionsCount = 0;
} else if (window.obj78563_onTap_runningActionsCount == 0) {
	obj78563_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78563_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78563_onTap_activeActionGroupIndex = -1;
		$("#obj78563").trigger("obj78563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78563) {
				console.warn("de-queueing event obj78563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78563_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78566();
function runjs_78566() {
	window.obj78563_onTap_runningActionsCount = obj78563_onTap_runningActionsCount + 1;

	$("#obj78563").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78563_onTap_runningActionsCount = window.obj78563_onTap_runningActionsCount - 1;
if (window.obj78563_onTap_runningActionsCount < 0) {
	window.obj78563_onTap_runningActionsCount = 0;
} else if (window.obj78563_onTap_runningActionsCount == 0) {
	obj78563_onTap_actionGroup2();
}
	}, 1);
}







};
obj78563_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78563_onTap_activeActionGroupIndex = -1;
		$("#obj78563").trigger("obj78563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78563) {
				console.warn("de-queueing event obj78563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78563_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78567();
function playAudio_78567() {
	window.obj78563_onTap_runningActionsCount = obj78563_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78563_onTap_runningActionsCount = window.obj78563_onTap_runningActionsCount - 1;
if (window.obj78563_onTap_runningActionsCount < 0) {
	window.obj78563_onTap_runningActionsCount = 0;
} else if (window.obj78563_onTap_runningActionsCount == 0) {
	obj78563_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78563_onTap_runningActionsCount = window.obj78563_onTap_runningActionsCount - 1;
if (window.obj78563_onTap_runningActionsCount < 0) {
	window.obj78563_onTap_runningActionsCount = 0;
} else if (window.obj78563_onTap_runningActionsCount == 0) {
	obj78563_onTap_actionGroup3();
}
	}
}









};
obj78563_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78563_onTap_activeActionGroupIndex = -1;
		$("#obj78563").trigger("obj78563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78563) {
				console.warn("de-queueing event obj78563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78563_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78568();
function runjs_78568() {
	window.obj78563_onTap_runningActionsCount = obj78563_onTap_runningActionsCount + 1;

	$("#obj78563").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78563_onTap_runningActionsCount = window.obj78563_onTap_runningActionsCount - 1;
if (window.obj78563_onTap_runningActionsCount < 0) {
	window.obj78563_onTap_runningActionsCount = 0;
} else if (window.obj78563_onTap_runningActionsCount == 0) {
	obj78563_onTap_actionGroup4();
}
	}, 1);
}







};
obj78563_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78563_onTap_activeActionGroupIndex = -1;
		$("#obj78563").trigger("obj78563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78563) {
				console.warn("de-queueing event obj78563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78563_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78569();
function switchText_78569() {
	window.obj78563_onTap_runningActionsCount = obj78563_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78563_onTap_runningActionsCount = window.obj78563_onTap_runningActionsCount - 1;
if (window.obj78563_onTap_runningActionsCount < 0) {
	window.obj78563_onTap_runningActionsCount = 0;
} else if (window.obj78563_onTap_runningActionsCount == 0) {
	obj78563_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78563_onTap_runningActionsCount = window.obj78563_onTap_runningActionsCount - 1;
if (window.obj78563_onTap_runningActionsCount < 0) {
	window.obj78563_onTap_runningActionsCount = 0;
} else if (window.obj78563_onTap_runningActionsCount == 0) {
	obj78563_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78563_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78563_onTap_activeActionGroupIndex = -1;
		$("#obj78563").trigger("obj78563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78563) {
				console.warn("de-queueing event obj78563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78563_onTap_activeActionGroupIndex = 5;
	





















};
obj78556_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78556_onTap_activeActionGroupIndex = -1;
		$("#obj78556").trigger("obj78556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78556) {
				console.warn("de-queueing event obj78556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78556_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78558();
function switchText_78558() {
	window.obj78556_onTap_runningActionsCount = obj78556_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78556_onTap_runningActionsCount = window.obj78556_onTap_runningActionsCount - 1;
if (window.obj78556_onTap_runningActionsCount < 0) {
	window.obj78556_onTap_runningActionsCount = 0;
} else if (window.obj78556_onTap_runningActionsCount == 0) {
	obj78556_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78556_onTap_runningActionsCount = window.obj78556_onTap_runningActionsCount - 1;
if (window.obj78556_onTap_runningActionsCount < 0) {
	window.obj78556_onTap_runningActionsCount = 0;
} else if (window.obj78556_onTap_runningActionsCount == 0) {
	obj78556_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78556_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78556_onTap_activeActionGroupIndex = -1;
		$("#obj78556").trigger("obj78556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78556) {
				console.warn("de-queueing event obj78556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78556_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78559();
function runjs_78559() {
	window.obj78556_onTap_runningActionsCount = obj78556_onTap_runningActionsCount + 1;

	$("#obj78556").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78556_onTap_runningActionsCount = window.obj78556_onTap_runningActionsCount - 1;
if (window.obj78556_onTap_runningActionsCount < 0) {
	window.obj78556_onTap_runningActionsCount = 0;
} else if (window.obj78556_onTap_runningActionsCount == 0) {
	obj78556_onTap_actionGroup2();
}
	}, 1);
}







};
obj78556_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78556_onTap_activeActionGroupIndex = -1;
		$("#obj78556").trigger("obj78556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78556) {
				console.warn("de-queueing event obj78556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78556_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78560();
function playAudio_78560() {
	window.obj78556_onTap_runningActionsCount = obj78556_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78556_onTap_runningActionsCount = window.obj78556_onTap_runningActionsCount - 1;
if (window.obj78556_onTap_runningActionsCount < 0) {
	window.obj78556_onTap_runningActionsCount = 0;
} else if (window.obj78556_onTap_runningActionsCount == 0) {
	obj78556_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78556_onTap_runningActionsCount = window.obj78556_onTap_runningActionsCount - 1;
if (window.obj78556_onTap_runningActionsCount < 0) {
	window.obj78556_onTap_runningActionsCount = 0;
} else if (window.obj78556_onTap_runningActionsCount == 0) {
	obj78556_onTap_actionGroup3();
}
	}
}









};
obj78556_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78556_onTap_activeActionGroupIndex = -1;
		$("#obj78556").trigger("obj78556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78556) {
				console.warn("de-queueing event obj78556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78556_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78561();
function runjs_78561() {
	window.obj78556_onTap_runningActionsCount = obj78556_onTap_runningActionsCount + 1;

	$("#obj78556").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78556_onTap_runningActionsCount = window.obj78556_onTap_runningActionsCount - 1;
if (window.obj78556_onTap_runningActionsCount < 0) {
	window.obj78556_onTap_runningActionsCount = 0;
} else if (window.obj78556_onTap_runningActionsCount == 0) {
	obj78556_onTap_actionGroup4();
}
	}, 1);
}







};
obj78556_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78556_onTap_activeActionGroupIndex = -1;
		$("#obj78556").trigger("obj78556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78556) {
				console.warn("de-queueing event obj78556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78556_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78562();
function switchText_78562() {
	window.obj78556_onTap_runningActionsCount = obj78556_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78556_onTap_runningActionsCount = window.obj78556_onTap_runningActionsCount - 1;
if (window.obj78556_onTap_runningActionsCount < 0) {
	window.obj78556_onTap_runningActionsCount = 0;
} else if (window.obj78556_onTap_runningActionsCount == 0) {
	obj78556_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78556_onTap_runningActionsCount = window.obj78556_onTap_runningActionsCount - 1;
if (window.obj78556_onTap_runningActionsCount < 0) {
	window.obj78556_onTap_runningActionsCount = 0;
} else if (window.obj78556_onTap_runningActionsCount == 0) {
	obj78556_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78556_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78556_onTap_activeActionGroupIndex = -1;
		$("#obj78556").trigger("obj78556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78556) {
				console.warn("de-queueing event obj78556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78556_onTap_activeActionGroupIndex = 5;
	





















};
obj78530_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78530_onTap_activeActionGroupIndex = -1;
		$("#obj78530").trigger("obj78530_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78530) {
				console.warn("de-queueing event obj78530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78530_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78532();
function switchText_78532() {
	window.obj78530_onTap_runningActionsCount = obj78530_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78530_onTap_runningActionsCount = window.obj78530_onTap_runningActionsCount - 1;
if (window.obj78530_onTap_runningActionsCount < 0) {
	window.obj78530_onTap_runningActionsCount = 0;
} else if (window.obj78530_onTap_runningActionsCount == 0) {
	obj78530_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78530_onTap_runningActionsCount = window.obj78530_onTap_runningActionsCount - 1;
if (window.obj78530_onTap_runningActionsCount < 0) {
	window.obj78530_onTap_runningActionsCount = 0;
} else if (window.obj78530_onTap_runningActionsCount == 0) {
	obj78530_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78530_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78530_onTap_activeActionGroupIndex = -1;
		$("#obj78530").trigger("obj78530_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78530) {
				console.warn("de-queueing event obj78530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78530_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78533();
function runjs_78533() {
	window.obj78530_onTap_runningActionsCount = obj78530_onTap_runningActionsCount + 1;

	$("#obj78530").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78530_onTap_runningActionsCount = window.obj78530_onTap_runningActionsCount - 1;
if (window.obj78530_onTap_runningActionsCount < 0) {
	window.obj78530_onTap_runningActionsCount = 0;
} else if (window.obj78530_onTap_runningActionsCount == 0) {
	obj78530_onTap_actionGroup2();
}
	}, 1);
}







};
obj78530_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78530_onTap_activeActionGroupIndex = -1;
		$("#obj78530").trigger("obj78530_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78530) {
				console.warn("de-queueing event obj78530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78530_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78534();
function playAudio_78534() {
	window.obj78530_onTap_runningActionsCount = obj78530_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78530_onTap_runningActionsCount = window.obj78530_onTap_runningActionsCount - 1;
if (window.obj78530_onTap_runningActionsCount < 0) {
	window.obj78530_onTap_runningActionsCount = 0;
} else if (window.obj78530_onTap_runningActionsCount == 0) {
	obj78530_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78530_onTap_runningActionsCount = window.obj78530_onTap_runningActionsCount - 1;
if (window.obj78530_onTap_runningActionsCount < 0) {
	window.obj78530_onTap_runningActionsCount = 0;
} else if (window.obj78530_onTap_runningActionsCount == 0) {
	obj78530_onTap_actionGroup3();
}
	}
}









};
obj78530_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78530_onTap_activeActionGroupIndex = -1;
		$("#obj78530").trigger("obj78530_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78530) {
				console.warn("de-queueing event obj78530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78530_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78535();
function runjs_78535() {
	window.obj78530_onTap_runningActionsCount = obj78530_onTap_runningActionsCount + 1;

	$("#obj78530").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78530_onTap_runningActionsCount = window.obj78530_onTap_runningActionsCount - 1;
if (window.obj78530_onTap_runningActionsCount < 0) {
	window.obj78530_onTap_runningActionsCount = 0;
} else if (window.obj78530_onTap_runningActionsCount == 0) {
	obj78530_onTap_actionGroup4();
}
	}, 1);
}







};
obj78530_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78530_onTap_activeActionGroupIndex = -1;
		$("#obj78530").trigger("obj78530_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78530) {
				console.warn("de-queueing event obj78530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78530_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78536();
function switchText_78536() {
	window.obj78530_onTap_runningActionsCount = obj78530_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78530_onTap_runningActionsCount = window.obj78530_onTap_runningActionsCount - 1;
if (window.obj78530_onTap_runningActionsCount < 0) {
	window.obj78530_onTap_runningActionsCount = 0;
} else if (window.obj78530_onTap_runningActionsCount == 0) {
	obj78530_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78530_onTap_runningActionsCount = window.obj78530_onTap_runningActionsCount - 1;
if (window.obj78530_onTap_runningActionsCount < 0) {
	window.obj78530_onTap_runningActionsCount = 0;
} else if (window.obj78530_onTap_runningActionsCount == 0) {
	obj78530_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78530_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78530_onTap_activeActionGroupIndex = -1;
		$("#obj78530").trigger("obj78530_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78530) {
				console.warn("de-queueing event obj78530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78530_onTap_activeActionGroupIndex = 5;
	





















};
obj78523_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78523_onTap_activeActionGroupIndex = -1;
		$("#obj78523").trigger("obj78523_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78523) {
				console.warn("de-queueing event obj78523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78523_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78525();
function switchText_78525() {
	window.obj78523_onTap_runningActionsCount = obj78523_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78523_onTap_runningActionsCount = window.obj78523_onTap_runningActionsCount - 1;
if (window.obj78523_onTap_runningActionsCount < 0) {
	window.obj78523_onTap_runningActionsCount = 0;
} else if (window.obj78523_onTap_runningActionsCount == 0) {
	obj78523_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78523_onTap_runningActionsCount = window.obj78523_onTap_runningActionsCount - 1;
if (window.obj78523_onTap_runningActionsCount < 0) {
	window.obj78523_onTap_runningActionsCount = 0;
} else if (window.obj78523_onTap_runningActionsCount == 0) {
	obj78523_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78523_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78523_onTap_activeActionGroupIndex = -1;
		$("#obj78523").trigger("obj78523_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78523) {
				console.warn("de-queueing event obj78523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78523_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78526();
function runjs_78526() {
	window.obj78523_onTap_runningActionsCount = obj78523_onTap_runningActionsCount + 1;

	$("#obj78523").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78523_onTap_runningActionsCount = window.obj78523_onTap_runningActionsCount - 1;
if (window.obj78523_onTap_runningActionsCount < 0) {
	window.obj78523_onTap_runningActionsCount = 0;
} else if (window.obj78523_onTap_runningActionsCount == 0) {
	obj78523_onTap_actionGroup2();
}
	}, 1);
}







};
obj78523_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78523_onTap_activeActionGroupIndex = -1;
		$("#obj78523").trigger("obj78523_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78523) {
				console.warn("de-queueing event obj78523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78523_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78527();
function playAudio_78527() {
	window.obj78523_onTap_runningActionsCount = obj78523_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78523_onTap_runningActionsCount = window.obj78523_onTap_runningActionsCount - 1;
if (window.obj78523_onTap_runningActionsCount < 0) {
	window.obj78523_onTap_runningActionsCount = 0;
} else if (window.obj78523_onTap_runningActionsCount == 0) {
	obj78523_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78523_onTap_runningActionsCount = window.obj78523_onTap_runningActionsCount - 1;
if (window.obj78523_onTap_runningActionsCount < 0) {
	window.obj78523_onTap_runningActionsCount = 0;
} else if (window.obj78523_onTap_runningActionsCount == 0) {
	obj78523_onTap_actionGroup3();
}
	}
}









};
obj78523_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78523_onTap_activeActionGroupIndex = -1;
		$("#obj78523").trigger("obj78523_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78523) {
				console.warn("de-queueing event obj78523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78523_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78528();
function runjs_78528() {
	window.obj78523_onTap_runningActionsCount = obj78523_onTap_runningActionsCount + 1;

	$("#obj78523").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78523_onTap_runningActionsCount = window.obj78523_onTap_runningActionsCount - 1;
if (window.obj78523_onTap_runningActionsCount < 0) {
	window.obj78523_onTap_runningActionsCount = 0;
} else if (window.obj78523_onTap_runningActionsCount == 0) {
	obj78523_onTap_actionGroup4();
}
	}, 1);
}







};
obj78523_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78523_onTap_activeActionGroupIndex = -1;
		$("#obj78523").trigger("obj78523_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78523) {
				console.warn("de-queueing event obj78523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78523_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78529();
function switchText_78529() {
	window.obj78523_onTap_runningActionsCount = obj78523_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78523_onTap_runningActionsCount = window.obj78523_onTap_runningActionsCount - 1;
if (window.obj78523_onTap_runningActionsCount < 0) {
	window.obj78523_onTap_runningActionsCount = 0;
} else if (window.obj78523_onTap_runningActionsCount == 0) {
	obj78523_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78523_onTap_runningActionsCount = window.obj78523_onTap_runningActionsCount - 1;
if (window.obj78523_onTap_runningActionsCount < 0) {
	window.obj78523_onTap_runningActionsCount = 0;
} else if (window.obj78523_onTap_runningActionsCount == 0) {
	obj78523_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78523_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78523_onTap_activeActionGroupIndex = -1;
		$("#obj78523").trigger("obj78523_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78523) {
				console.warn("de-queueing event obj78523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78523_onTap_activeActionGroupIndex = 5;
	





















};
obj78516_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78516_onTap_activeActionGroupIndex = -1;
		$("#obj78516").trigger("obj78516_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78516) {
				console.warn("de-queueing event obj78516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78516_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78518();
function switchText_78518() {
	window.obj78516_onTap_runningActionsCount = obj78516_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78516_onTap_runningActionsCount = window.obj78516_onTap_runningActionsCount - 1;
if (window.obj78516_onTap_runningActionsCount < 0) {
	window.obj78516_onTap_runningActionsCount = 0;
} else if (window.obj78516_onTap_runningActionsCount == 0) {
	obj78516_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78516_onTap_runningActionsCount = window.obj78516_onTap_runningActionsCount - 1;
if (window.obj78516_onTap_runningActionsCount < 0) {
	window.obj78516_onTap_runningActionsCount = 0;
} else if (window.obj78516_onTap_runningActionsCount == 0) {
	obj78516_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78516_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78516_onTap_activeActionGroupIndex = -1;
		$("#obj78516").trigger("obj78516_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78516) {
				console.warn("de-queueing event obj78516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78516_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78519();
function runjs_78519() {
	window.obj78516_onTap_runningActionsCount = obj78516_onTap_runningActionsCount + 1;

	$("#obj78516").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78516_onTap_runningActionsCount = window.obj78516_onTap_runningActionsCount - 1;
if (window.obj78516_onTap_runningActionsCount < 0) {
	window.obj78516_onTap_runningActionsCount = 0;
} else if (window.obj78516_onTap_runningActionsCount == 0) {
	obj78516_onTap_actionGroup2();
}
	}, 1);
}







};
obj78516_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78516_onTap_activeActionGroupIndex = -1;
		$("#obj78516").trigger("obj78516_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78516) {
				console.warn("de-queueing event obj78516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78516_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78520();
function playAudio_78520() {
	window.obj78516_onTap_runningActionsCount = obj78516_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78516_onTap_runningActionsCount = window.obj78516_onTap_runningActionsCount - 1;
if (window.obj78516_onTap_runningActionsCount < 0) {
	window.obj78516_onTap_runningActionsCount = 0;
} else if (window.obj78516_onTap_runningActionsCount == 0) {
	obj78516_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78516_onTap_runningActionsCount = window.obj78516_onTap_runningActionsCount - 1;
if (window.obj78516_onTap_runningActionsCount < 0) {
	window.obj78516_onTap_runningActionsCount = 0;
} else if (window.obj78516_onTap_runningActionsCount == 0) {
	obj78516_onTap_actionGroup3();
}
	}
}









};
obj78516_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78516_onTap_activeActionGroupIndex = -1;
		$("#obj78516").trigger("obj78516_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78516) {
				console.warn("de-queueing event obj78516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78516_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78521();
function runjs_78521() {
	window.obj78516_onTap_runningActionsCount = obj78516_onTap_runningActionsCount + 1;

	$("#obj78516").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78516_onTap_runningActionsCount = window.obj78516_onTap_runningActionsCount - 1;
if (window.obj78516_onTap_runningActionsCount < 0) {
	window.obj78516_onTap_runningActionsCount = 0;
} else if (window.obj78516_onTap_runningActionsCount == 0) {
	obj78516_onTap_actionGroup4();
}
	}, 1);
}







};
obj78516_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78516_onTap_activeActionGroupIndex = -1;
		$("#obj78516").trigger("obj78516_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78516) {
				console.warn("de-queueing event obj78516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78516_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78522();
function switchText_78522() {
	window.obj78516_onTap_runningActionsCount = obj78516_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78516_onTap_runningActionsCount = window.obj78516_onTap_runningActionsCount - 1;
if (window.obj78516_onTap_runningActionsCount < 0) {
	window.obj78516_onTap_runningActionsCount = 0;
} else if (window.obj78516_onTap_runningActionsCount == 0) {
	obj78516_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78516_onTap_runningActionsCount = window.obj78516_onTap_runningActionsCount - 1;
if (window.obj78516_onTap_runningActionsCount < 0) {
	window.obj78516_onTap_runningActionsCount = 0;
} else if (window.obj78516_onTap_runningActionsCount == 0) {
	obj78516_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78516_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78516_onTap_activeActionGroupIndex = -1;
		$("#obj78516").trigger("obj78516_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78516) {
				console.warn("de-queueing event obj78516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78516_onTap_activeActionGroupIndex = 5;
	





















};
obj78509_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78509_onTap_activeActionGroupIndex = -1;
		$("#obj78509").trigger("obj78509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78509) {
				console.warn("de-queueing event obj78509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78509_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78511();
function switchText_78511() {
	window.obj78509_onTap_runningActionsCount = obj78509_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78509_onTap_runningActionsCount = window.obj78509_onTap_runningActionsCount - 1;
if (window.obj78509_onTap_runningActionsCount < 0) {
	window.obj78509_onTap_runningActionsCount = 0;
} else if (window.obj78509_onTap_runningActionsCount == 0) {
	obj78509_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78509_onTap_runningActionsCount = window.obj78509_onTap_runningActionsCount - 1;
if (window.obj78509_onTap_runningActionsCount < 0) {
	window.obj78509_onTap_runningActionsCount = 0;
} else if (window.obj78509_onTap_runningActionsCount == 0) {
	obj78509_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78509_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78509_onTap_activeActionGroupIndex = -1;
		$("#obj78509").trigger("obj78509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78509) {
				console.warn("de-queueing event obj78509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78509_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78512();
function runjs_78512() {
	window.obj78509_onTap_runningActionsCount = obj78509_onTap_runningActionsCount + 1;

	$("#obj78509").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78509_onTap_runningActionsCount = window.obj78509_onTap_runningActionsCount - 1;
if (window.obj78509_onTap_runningActionsCount < 0) {
	window.obj78509_onTap_runningActionsCount = 0;
} else if (window.obj78509_onTap_runningActionsCount == 0) {
	obj78509_onTap_actionGroup2();
}
	}, 1);
}







};
obj78509_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78509_onTap_activeActionGroupIndex = -1;
		$("#obj78509").trigger("obj78509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78509) {
				console.warn("de-queueing event obj78509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78509_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78513();
function playAudio_78513() {
	window.obj78509_onTap_runningActionsCount = obj78509_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78509_onTap_runningActionsCount = window.obj78509_onTap_runningActionsCount - 1;
if (window.obj78509_onTap_runningActionsCount < 0) {
	window.obj78509_onTap_runningActionsCount = 0;
} else if (window.obj78509_onTap_runningActionsCount == 0) {
	obj78509_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78509_onTap_runningActionsCount = window.obj78509_onTap_runningActionsCount - 1;
if (window.obj78509_onTap_runningActionsCount < 0) {
	window.obj78509_onTap_runningActionsCount = 0;
} else if (window.obj78509_onTap_runningActionsCount == 0) {
	obj78509_onTap_actionGroup3();
}
	}
}









};
obj78509_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78509_onTap_activeActionGroupIndex = -1;
		$("#obj78509").trigger("obj78509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78509) {
				console.warn("de-queueing event obj78509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78509_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78514();
function runjs_78514() {
	window.obj78509_onTap_runningActionsCount = obj78509_onTap_runningActionsCount + 1;

	$("#obj78509").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78509_onTap_runningActionsCount = window.obj78509_onTap_runningActionsCount - 1;
if (window.obj78509_onTap_runningActionsCount < 0) {
	window.obj78509_onTap_runningActionsCount = 0;
} else if (window.obj78509_onTap_runningActionsCount == 0) {
	obj78509_onTap_actionGroup4();
}
	}, 1);
}







};
obj78509_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78509_onTap_activeActionGroupIndex = -1;
		$("#obj78509").trigger("obj78509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78509) {
				console.warn("de-queueing event obj78509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78509_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78515();
function switchText_78515() {
	window.obj78509_onTap_runningActionsCount = obj78509_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78509_onTap_runningActionsCount = window.obj78509_onTap_runningActionsCount - 1;
if (window.obj78509_onTap_runningActionsCount < 0) {
	window.obj78509_onTap_runningActionsCount = 0;
} else if (window.obj78509_onTap_runningActionsCount == 0) {
	obj78509_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78509_onTap_runningActionsCount = window.obj78509_onTap_runningActionsCount - 1;
if (window.obj78509_onTap_runningActionsCount < 0) {
	window.obj78509_onTap_runningActionsCount = 0;
} else if (window.obj78509_onTap_runningActionsCount == 0) {
	obj78509_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78509_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78509_onTap_activeActionGroupIndex = -1;
		$("#obj78509").trigger("obj78509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78509) {
				console.warn("de-queueing event obj78509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78509_onTap_activeActionGroupIndex = 5;
	





















};
obj78500_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78500_onTap_activeActionGroupIndex = -1;
		$("#obj78500").trigger("obj78500_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78500) {
				console.warn("de-queueing event obj78500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78500_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78502();
function switchText_78502() {
	window.obj78500_onTap_runningActionsCount = obj78500_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78500_onTap_runningActionsCount = window.obj78500_onTap_runningActionsCount - 1;
if (window.obj78500_onTap_runningActionsCount < 0) {
	window.obj78500_onTap_runningActionsCount = 0;
} else if (window.obj78500_onTap_runningActionsCount == 0) {
	obj78500_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78500_onTap_runningActionsCount = window.obj78500_onTap_runningActionsCount - 1;
if (window.obj78500_onTap_runningActionsCount < 0) {
	window.obj78500_onTap_runningActionsCount = 0;
} else if (window.obj78500_onTap_runningActionsCount == 0) {
	obj78500_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78500_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78500_onTap_activeActionGroupIndex = -1;
		$("#obj78500").trigger("obj78500_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78500) {
				console.warn("de-queueing event obj78500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78500_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78503();
function runjs_78503() {
	window.obj78500_onTap_runningActionsCount = obj78500_onTap_runningActionsCount + 1;

	$("#obj78500").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78500_onTap_runningActionsCount = window.obj78500_onTap_runningActionsCount - 1;
if (window.obj78500_onTap_runningActionsCount < 0) {
	window.obj78500_onTap_runningActionsCount = 0;
} else if (window.obj78500_onTap_runningActionsCount == 0) {
	obj78500_onTap_actionGroup2();
}
	}, 1);
}







};
obj78500_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78500_onTap_activeActionGroupIndex = -1;
		$("#obj78500").trigger("obj78500_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78500) {
				console.warn("de-queueing event obj78500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78500_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78504();
function playAudio_78504() {
	window.obj78500_onTap_runningActionsCount = obj78500_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78500_onTap_runningActionsCount = window.obj78500_onTap_runningActionsCount - 1;
if (window.obj78500_onTap_runningActionsCount < 0) {
	window.obj78500_onTap_runningActionsCount = 0;
} else if (window.obj78500_onTap_runningActionsCount == 0) {
	obj78500_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78500_onTap_runningActionsCount = window.obj78500_onTap_runningActionsCount - 1;
if (window.obj78500_onTap_runningActionsCount < 0) {
	window.obj78500_onTap_runningActionsCount = 0;
} else if (window.obj78500_onTap_runningActionsCount == 0) {
	obj78500_onTap_actionGroup3();
}
	}
}









};
obj78500_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78500_onTap_activeActionGroupIndex = -1;
		$("#obj78500").trigger("obj78500_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78500) {
				console.warn("de-queueing event obj78500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78500_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78505();
function runjs_78505() {
	window.obj78500_onTap_runningActionsCount = obj78500_onTap_runningActionsCount + 1;

	$("#obj78500").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78500_onTap_runningActionsCount = window.obj78500_onTap_runningActionsCount - 1;
if (window.obj78500_onTap_runningActionsCount < 0) {
	window.obj78500_onTap_runningActionsCount = 0;
} else if (window.obj78500_onTap_runningActionsCount == 0) {
	obj78500_onTap_actionGroup4();
}
	}, 1);
}







};
obj78500_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78500_onTap_activeActionGroupIndex = -1;
		$("#obj78500").trigger("obj78500_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78500) {
				console.warn("de-queueing event obj78500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78500_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78506();
function switchText_78506() {
	window.obj78500_onTap_runningActionsCount = obj78500_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78500_onTap_runningActionsCount = window.obj78500_onTap_runningActionsCount - 1;
if (window.obj78500_onTap_runningActionsCount < 0) {
	window.obj78500_onTap_runningActionsCount = 0;
} else if (window.obj78500_onTap_runningActionsCount == 0) {
	obj78500_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78500_onTap_runningActionsCount = window.obj78500_onTap_runningActionsCount - 1;
if (window.obj78500_onTap_runningActionsCount < 0) {
	window.obj78500_onTap_runningActionsCount = 0;
} else if (window.obj78500_onTap_runningActionsCount == 0) {
	obj78500_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78500_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78500_onTap_activeActionGroupIndex = -1;
		$("#obj78500").trigger("obj78500_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78500) {
				console.warn("de-queueing event obj78500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78500_onTap_activeActionGroupIndex = 5;
	





















};
obj78491_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78491_onTap_activeActionGroupIndex = -1;
		$("#obj78491").trigger("obj78491_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78491) {
				console.warn("de-queueing event obj78491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78491_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78493();
function switchText_78493() {
	window.obj78491_onTap_runningActionsCount = obj78491_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78491_onTap_runningActionsCount = window.obj78491_onTap_runningActionsCount - 1;
if (window.obj78491_onTap_runningActionsCount < 0) {
	window.obj78491_onTap_runningActionsCount = 0;
} else if (window.obj78491_onTap_runningActionsCount == 0) {
	obj78491_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78491_onTap_runningActionsCount = window.obj78491_onTap_runningActionsCount - 1;
if (window.obj78491_onTap_runningActionsCount < 0) {
	window.obj78491_onTap_runningActionsCount = 0;
} else if (window.obj78491_onTap_runningActionsCount == 0) {
	obj78491_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78491_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78491_onTap_activeActionGroupIndex = -1;
		$("#obj78491").trigger("obj78491_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78491) {
				console.warn("de-queueing event obj78491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78491_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78494();
function runjs_78494() {
	window.obj78491_onTap_runningActionsCount = obj78491_onTap_runningActionsCount + 1;

	$("#obj78491").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78491_onTap_runningActionsCount = window.obj78491_onTap_runningActionsCount - 1;
if (window.obj78491_onTap_runningActionsCount < 0) {
	window.obj78491_onTap_runningActionsCount = 0;
} else if (window.obj78491_onTap_runningActionsCount == 0) {
	obj78491_onTap_actionGroup2();
}
	}, 1);
}







};
obj78491_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78491_onTap_activeActionGroupIndex = -1;
		$("#obj78491").trigger("obj78491_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78491) {
				console.warn("de-queueing event obj78491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78491_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78495();
function playAudio_78495() {
	window.obj78491_onTap_runningActionsCount = obj78491_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78491_onTap_runningActionsCount = window.obj78491_onTap_runningActionsCount - 1;
if (window.obj78491_onTap_runningActionsCount < 0) {
	window.obj78491_onTap_runningActionsCount = 0;
} else if (window.obj78491_onTap_runningActionsCount == 0) {
	obj78491_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78491_onTap_runningActionsCount = window.obj78491_onTap_runningActionsCount - 1;
if (window.obj78491_onTap_runningActionsCount < 0) {
	window.obj78491_onTap_runningActionsCount = 0;
} else if (window.obj78491_onTap_runningActionsCount == 0) {
	obj78491_onTap_actionGroup3();
}
	}
}









};
obj78491_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78491_onTap_activeActionGroupIndex = -1;
		$("#obj78491").trigger("obj78491_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78491) {
				console.warn("de-queueing event obj78491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78491_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78496();
function runjs_78496() {
	window.obj78491_onTap_runningActionsCount = obj78491_onTap_runningActionsCount + 1;

	$("#obj78491").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78491_onTap_runningActionsCount = window.obj78491_onTap_runningActionsCount - 1;
if (window.obj78491_onTap_runningActionsCount < 0) {
	window.obj78491_onTap_runningActionsCount = 0;
} else if (window.obj78491_onTap_runningActionsCount == 0) {
	obj78491_onTap_actionGroup4();
}
	}, 1);
}







};
obj78491_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78491_onTap_activeActionGroupIndex = -1;
		$("#obj78491").trigger("obj78491_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78491) {
				console.warn("de-queueing event obj78491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78491_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78497();
function switchText_78497() {
	window.obj78491_onTap_runningActionsCount = obj78491_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78491_onTap_runningActionsCount = window.obj78491_onTap_runningActionsCount - 1;
if (window.obj78491_onTap_runningActionsCount < 0) {
	window.obj78491_onTap_runningActionsCount = 0;
} else if (window.obj78491_onTap_runningActionsCount == 0) {
	obj78491_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78491_onTap_runningActionsCount = window.obj78491_onTap_runningActionsCount - 1;
if (window.obj78491_onTap_runningActionsCount < 0) {
	window.obj78491_onTap_runningActionsCount = 0;
} else if (window.obj78491_onTap_runningActionsCount == 0) {
	obj78491_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78491_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78491_onTap_activeActionGroupIndex = -1;
		$("#obj78491").trigger("obj78491_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78491) {
				console.warn("de-queueing event obj78491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78491_onTap_activeActionGroupIndex = 5;
	





















};
obj78484_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78484_onTap_activeActionGroupIndex = -1;
		$("#obj78484").trigger("obj78484_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78484) {
				console.warn("de-queueing event obj78484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78484_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78486();
function switchText_78486() {
	window.obj78484_onTap_runningActionsCount = obj78484_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78484_onTap_runningActionsCount = window.obj78484_onTap_runningActionsCount - 1;
if (window.obj78484_onTap_runningActionsCount < 0) {
	window.obj78484_onTap_runningActionsCount = 0;
} else if (window.obj78484_onTap_runningActionsCount == 0) {
	obj78484_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78484_onTap_runningActionsCount = window.obj78484_onTap_runningActionsCount - 1;
if (window.obj78484_onTap_runningActionsCount < 0) {
	window.obj78484_onTap_runningActionsCount = 0;
} else if (window.obj78484_onTap_runningActionsCount == 0) {
	obj78484_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78484_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78484_onTap_activeActionGroupIndex = -1;
		$("#obj78484").trigger("obj78484_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78484) {
				console.warn("de-queueing event obj78484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78484_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78487();
function runjs_78487() {
	window.obj78484_onTap_runningActionsCount = obj78484_onTap_runningActionsCount + 1;

	$("#obj78484").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78484_onTap_runningActionsCount = window.obj78484_onTap_runningActionsCount - 1;
if (window.obj78484_onTap_runningActionsCount < 0) {
	window.obj78484_onTap_runningActionsCount = 0;
} else if (window.obj78484_onTap_runningActionsCount == 0) {
	obj78484_onTap_actionGroup2();
}
	}, 1);
}







};
obj78484_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78484_onTap_activeActionGroupIndex = -1;
		$("#obj78484").trigger("obj78484_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78484) {
				console.warn("de-queueing event obj78484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78484_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78488();
function playAudio_78488() {
	window.obj78484_onTap_runningActionsCount = obj78484_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78484_onTap_runningActionsCount = window.obj78484_onTap_runningActionsCount - 1;
if (window.obj78484_onTap_runningActionsCount < 0) {
	window.obj78484_onTap_runningActionsCount = 0;
} else if (window.obj78484_onTap_runningActionsCount == 0) {
	obj78484_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78484_onTap_runningActionsCount = window.obj78484_onTap_runningActionsCount - 1;
if (window.obj78484_onTap_runningActionsCount < 0) {
	window.obj78484_onTap_runningActionsCount = 0;
} else if (window.obj78484_onTap_runningActionsCount == 0) {
	obj78484_onTap_actionGroup3();
}
	}
}









};
obj78484_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78484_onTap_activeActionGroupIndex = -1;
		$("#obj78484").trigger("obj78484_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78484) {
				console.warn("de-queueing event obj78484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78484_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78489();
function runjs_78489() {
	window.obj78484_onTap_runningActionsCount = obj78484_onTap_runningActionsCount + 1;

	$("#obj78484").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78484_onTap_runningActionsCount = window.obj78484_onTap_runningActionsCount - 1;
if (window.obj78484_onTap_runningActionsCount < 0) {
	window.obj78484_onTap_runningActionsCount = 0;
} else if (window.obj78484_onTap_runningActionsCount == 0) {
	obj78484_onTap_actionGroup4();
}
	}, 1);
}







};
obj78484_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78484_onTap_activeActionGroupIndex = -1;
		$("#obj78484").trigger("obj78484_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78484) {
				console.warn("de-queueing event obj78484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78484_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78490();
function switchText_78490() {
	window.obj78484_onTap_runningActionsCount = obj78484_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78484_onTap_runningActionsCount = window.obj78484_onTap_runningActionsCount - 1;
if (window.obj78484_onTap_runningActionsCount < 0) {
	window.obj78484_onTap_runningActionsCount = 0;
} else if (window.obj78484_onTap_runningActionsCount == 0) {
	obj78484_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78484_onTap_runningActionsCount = window.obj78484_onTap_runningActionsCount - 1;
if (window.obj78484_onTap_runningActionsCount < 0) {
	window.obj78484_onTap_runningActionsCount = 0;
} else if (window.obj78484_onTap_runningActionsCount == 0) {
	obj78484_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78484_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78484_onTap_activeActionGroupIndex = -1;
		$("#obj78484").trigger("obj78484_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78484) {
				console.warn("de-queueing event obj78484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78484_onTap_activeActionGroupIndex = 5;
	





















};
obj78477_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78477_onTap_activeActionGroupIndex = -1;
		$("#obj78477").trigger("obj78477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78477) {
				console.warn("de-queueing event obj78477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78477_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78479();
function switchText_78479() {
	window.obj78477_onTap_runningActionsCount = obj78477_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78477_onTap_runningActionsCount = window.obj78477_onTap_runningActionsCount - 1;
if (window.obj78477_onTap_runningActionsCount < 0) {
	window.obj78477_onTap_runningActionsCount = 0;
} else if (window.obj78477_onTap_runningActionsCount == 0) {
	obj78477_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78477_onTap_runningActionsCount = window.obj78477_onTap_runningActionsCount - 1;
if (window.obj78477_onTap_runningActionsCount < 0) {
	window.obj78477_onTap_runningActionsCount = 0;
} else if (window.obj78477_onTap_runningActionsCount == 0) {
	obj78477_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78477_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78477_onTap_activeActionGroupIndex = -1;
		$("#obj78477").trigger("obj78477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78477) {
				console.warn("de-queueing event obj78477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78477_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78480();
function runjs_78480() {
	window.obj78477_onTap_runningActionsCount = obj78477_onTap_runningActionsCount + 1;

	$("#obj78477").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78477_onTap_runningActionsCount = window.obj78477_onTap_runningActionsCount - 1;
if (window.obj78477_onTap_runningActionsCount < 0) {
	window.obj78477_onTap_runningActionsCount = 0;
} else if (window.obj78477_onTap_runningActionsCount == 0) {
	obj78477_onTap_actionGroup2();
}
	}, 1);
}







};
obj78477_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78477_onTap_activeActionGroupIndex = -1;
		$("#obj78477").trigger("obj78477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78477) {
				console.warn("de-queueing event obj78477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78477_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78481();
function playAudio_78481() {
	window.obj78477_onTap_runningActionsCount = obj78477_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78477_onTap_runningActionsCount = window.obj78477_onTap_runningActionsCount - 1;
if (window.obj78477_onTap_runningActionsCount < 0) {
	window.obj78477_onTap_runningActionsCount = 0;
} else if (window.obj78477_onTap_runningActionsCount == 0) {
	obj78477_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78477_onTap_runningActionsCount = window.obj78477_onTap_runningActionsCount - 1;
if (window.obj78477_onTap_runningActionsCount < 0) {
	window.obj78477_onTap_runningActionsCount = 0;
} else if (window.obj78477_onTap_runningActionsCount == 0) {
	obj78477_onTap_actionGroup3();
}
	}
}









};
obj78477_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78477_onTap_activeActionGroupIndex = -1;
		$("#obj78477").trigger("obj78477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78477) {
				console.warn("de-queueing event obj78477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78477_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78482();
function runjs_78482() {
	window.obj78477_onTap_runningActionsCount = obj78477_onTap_runningActionsCount + 1;

	$("#obj78477").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78477_onTap_runningActionsCount = window.obj78477_onTap_runningActionsCount - 1;
if (window.obj78477_onTap_runningActionsCount < 0) {
	window.obj78477_onTap_runningActionsCount = 0;
} else if (window.obj78477_onTap_runningActionsCount == 0) {
	obj78477_onTap_actionGroup4();
}
	}, 1);
}







};
obj78477_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78477_onTap_activeActionGroupIndex = -1;
		$("#obj78477").trigger("obj78477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78477) {
				console.warn("de-queueing event obj78477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78477_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78483();
function switchText_78483() {
	window.obj78477_onTap_runningActionsCount = obj78477_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78477_onTap_runningActionsCount = window.obj78477_onTap_runningActionsCount - 1;
if (window.obj78477_onTap_runningActionsCount < 0) {
	window.obj78477_onTap_runningActionsCount = 0;
} else if (window.obj78477_onTap_runningActionsCount == 0) {
	obj78477_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78477_onTap_runningActionsCount = window.obj78477_onTap_runningActionsCount - 1;
if (window.obj78477_onTap_runningActionsCount < 0) {
	window.obj78477_onTap_runningActionsCount = 0;
} else if (window.obj78477_onTap_runningActionsCount == 0) {
	obj78477_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78477_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78477_onTap_activeActionGroupIndex = -1;
		$("#obj78477").trigger("obj78477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78477) {
				console.warn("de-queueing event obj78477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78477_onTap_activeActionGroupIndex = 5;
	





















};
obj78470_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78470_onTap_activeActionGroupIndex = -1;
		$("#obj78470").trigger("obj78470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78470) {
				console.warn("de-queueing event obj78470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78470_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78472();
function switchText_78472() {
	window.obj78470_onTap_runningActionsCount = obj78470_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78470_onTap_runningActionsCount = window.obj78470_onTap_runningActionsCount - 1;
if (window.obj78470_onTap_runningActionsCount < 0) {
	window.obj78470_onTap_runningActionsCount = 0;
} else if (window.obj78470_onTap_runningActionsCount == 0) {
	obj78470_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78470_onTap_runningActionsCount = window.obj78470_onTap_runningActionsCount - 1;
if (window.obj78470_onTap_runningActionsCount < 0) {
	window.obj78470_onTap_runningActionsCount = 0;
} else if (window.obj78470_onTap_runningActionsCount == 0) {
	obj78470_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78470_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78470_onTap_activeActionGroupIndex = -1;
		$("#obj78470").trigger("obj78470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78470) {
				console.warn("de-queueing event obj78470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78470_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78473();
function runjs_78473() {
	window.obj78470_onTap_runningActionsCount = obj78470_onTap_runningActionsCount + 1;

	$("#obj78470").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78470_onTap_runningActionsCount = window.obj78470_onTap_runningActionsCount - 1;
if (window.obj78470_onTap_runningActionsCount < 0) {
	window.obj78470_onTap_runningActionsCount = 0;
} else if (window.obj78470_onTap_runningActionsCount == 0) {
	obj78470_onTap_actionGroup2();
}
	}, 1);
}







};
obj78470_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78470_onTap_activeActionGroupIndex = -1;
		$("#obj78470").trigger("obj78470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78470) {
				console.warn("de-queueing event obj78470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78470_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78474();
function playAudio_78474() {
	window.obj78470_onTap_runningActionsCount = obj78470_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78470_onTap_runningActionsCount = window.obj78470_onTap_runningActionsCount - 1;
if (window.obj78470_onTap_runningActionsCount < 0) {
	window.obj78470_onTap_runningActionsCount = 0;
} else if (window.obj78470_onTap_runningActionsCount == 0) {
	obj78470_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78470_onTap_runningActionsCount = window.obj78470_onTap_runningActionsCount - 1;
if (window.obj78470_onTap_runningActionsCount < 0) {
	window.obj78470_onTap_runningActionsCount = 0;
} else if (window.obj78470_onTap_runningActionsCount == 0) {
	obj78470_onTap_actionGroup3();
}
	}
}









};
obj78470_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78470_onTap_activeActionGroupIndex = -1;
		$("#obj78470").trigger("obj78470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78470) {
				console.warn("de-queueing event obj78470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78470_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78475();
function runjs_78475() {
	window.obj78470_onTap_runningActionsCount = obj78470_onTap_runningActionsCount + 1;

	$("#obj78470").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78470_onTap_runningActionsCount = window.obj78470_onTap_runningActionsCount - 1;
if (window.obj78470_onTap_runningActionsCount < 0) {
	window.obj78470_onTap_runningActionsCount = 0;
} else if (window.obj78470_onTap_runningActionsCount == 0) {
	obj78470_onTap_actionGroup4();
}
	}, 1);
}







};
obj78470_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78470_onTap_activeActionGroupIndex = -1;
		$("#obj78470").trigger("obj78470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78470) {
				console.warn("de-queueing event obj78470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78470_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78476();
function switchText_78476() {
	window.obj78470_onTap_runningActionsCount = obj78470_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78470_onTap_runningActionsCount = window.obj78470_onTap_runningActionsCount - 1;
if (window.obj78470_onTap_runningActionsCount < 0) {
	window.obj78470_onTap_runningActionsCount = 0;
} else if (window.obj78470_onTap_runningActionsCount == 0) {
	obj78470_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78470_onTap_runningActionsCount = window.obj78470_onTap_runningActionsCount - 1;
if (window.obj78470_onTap_runningActionsCount < 0) {
	window.obj78470_onTap_runningActionsCount = 0;
} else if (window.obj78470_onTap_runningActionsCount == 0) {
	obj78470_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78470_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78470_onTap_activeActionGroupIndex = -1;
		$("#obj78470").trigger("obj78470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78470) {
				console.warn("de-queueing event obj78470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78470_onTap_activeActionGroupIndex = 5;
	





















};
obj78463_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78463_onTap_activeActionGroupIndex = -1;
		$("#obj78463").trigger("obj78463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78463) {
				console.warn("de-queueing event obj78463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78463_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78465();
function switchText_78465() {
	window.obj78463_onTap_runningActionsCount = obj78463_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78463_onTap_runningActionsCount = window.obj78463_onTap_runningActionsCount - 1;
if (window.obj78463_onTap_runningActionsCount < 0) {
	window.obj78463_onTap_runningActionsCount = 0;
} else if (window.obj78463_onTap_runningActionsCount == 0) {
	obj78463_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78463_onTap_runningActionsCount = window.obj78463_onTap_runningActionsCount - 1;
if (window.obj78463_onTap_runningActionsCount < 0) {
	window.obj78463_onTap_runningActionsCount = 0;
} else if (window.obj78463_onTap_runningActionsCount == 0) {
	obj78463_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78463_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78463_onTap_activeActionGroupIndex = -1;
		$("#obj78463").trigger("obj78463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78463) {
				console.warn("de-queueing event obj78463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78463_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78466();
function runjs_78466() {
	window.obj78463_onTap_runningActionsCount = obj78463_onTap_runningActionsCount + 1;

	$("#obj78463").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78463_onTap_runningActionsCount = window.obj78463_onTap_runningActionsCount - 1;
if (window.obj78463_onTap_runningActionsCount < 0) {
	window.obj78463_onTap_runningActionsCount = 0;
} else if (window.obj78463_onTap_runningActionsCount == 0) {
	obj78463_onTap_actionGroup2();
}
	}, 1);
}







};
obj78463_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78463_onTap_activeActionGroupIndex = -1;
		$("#obj78463").trigger("obj78463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78463) {
				console.warn("de-queueing event obj78463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78463_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78467();
function playAudio_78467() {
	window.obj78463_onTap_runningActionsCount = obj78463_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78463_onTap_runningActionsCount = window.obj78463_onTap_runningActionsCount - 1;
if (window.obj78463_onTap_runningActionsCount < 0) {
	window.obj78463_onTap_runningActionsCount = 0;
} else if (window.obj78463_onTap_runningActionsCount == 0) {
	obj78463_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78463_onTap_runningActionsCount = window.obj78463_onTap_runningActionsCount - 1;
if (window.obj78463_onTap_runningActionsCount < 0) {
	window.obj78463_onTap_runningActionsCount = 0;
} else if (window.obj78463_onTap_runningActionsCount == 0) {
	obj78463_onTap_actionGroup3();
}
	}
}









};
obj78463_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78463_onTap_activeActionGroupIndex = -1;
		$("#obj78463").trigger("obj78463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78463) {
				console.warn("de-queueing event obj78463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78463_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78468();
function runjs_78468() {
	window.obj78463_onTap_runningActionsCount = obj78463_onTap_runningActionsCount + 1;

	$("#obj78463").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78463_onTap_runningActionsCount = window.obj78463_onTap_runningActionsCount - 1;
if (window.obj78463_onTap_runningActionsCount < 0) {
	window.obj78463_onTap_runningActionsCount = 0;
} else if (window.obj78463_onTap_runningActionsCount == 0) {
	obj78463_onTap_actionGroup4();
}
	}, 1);
}







};
obj78463_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78463_onTap_activeActionGroupIndex = -1;
		$("#obj78463").trigger("obj78463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78463) {
				console.warn("de-queueing event obj78463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78463_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78469();
function switchText_78469() {
	window.obj78463_onTap_runningActionsCount = obj78463_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78463_onTap_runningActionsCount = window.obj78463_onTap_runningActionsCount - 1;
if (window.obj78463_onTap_runningActionsCount < 0) {
	window.obj78463_onTap_runningActionsCount = 0;
} else if (window.obj78463_onTap_runningActionsCount == 0) {
	obj78463_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78463_onTap_runningActionsCount = window.obj78463_onTap_runningActionsCount - 1;
if (window.obj78463_onTap_runningActionsCount < 0) {
	window.obj78463_onTap_runningActionsCount = 0;
} else if (window.obj78463_onTap_runningActionsCount == 0) {
	obj78463_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78463_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78463_onTap_activeActionGroupIndex = -1;
		$("#obj78463").trigger("obj78463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78463) {
				console.warn("de-queueing event obj78463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78463_onTap_activeActionGroupIndex = 5;
	





















};
obj78456_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78456_onTap_activeActionGroupIndex = -1;
		$("#obj78456").trigger("obj78456_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78456) {
				console.warn("de-queueing event obj78456." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78456").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78456_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78458();
function switchText_78458() {
	window.obj78456_onTap_runningActionsCount = obj78456_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78456_onTap_runningActionsCount = window.obj78456_onTap_runningActionsCount - 1;
if (window.obj78456_onTap_runningActionsCount < 0) {
	window.obj78456_onTap_runningActionsCount = 0;
} else if (window.obj78456_onTap_runningActionsCount == 0) {
	obj78456_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78456_onTap_runningActionsCount = window.obj78456_onTap_runningActionsCount - 1;
if (window.obj78456_onTap_runningActionsCount < 0) {
	window.obj78456_onTap_runningActionsCount = 0;
} else if (window.obj78456_onTap_runningActionsCount == 0) {
	obj78456_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78456_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78456_onTap_activeActionGroupIndex = -1;
		$("#obj78456").trigger("obj78456_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78456) {
				console.warn("de-queueing event obj78456." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78456").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78456_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78459();
function runjs_78459() {
	window.obj78456_onTap_runningActionsCount = obj78456_onTap_runningActionsCount + 1;

	$("#obj78456").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78456_onTap_runningActionsCount = window.obj78456_onTap_runningActionsCount - 1;
if (window.obj78456_onTap_runningActionsCount < 0) {
	window.obj78456_onTap_runningActionsCount = 0;
} else if (window.obj78456_onTap_runningActionsCount == 0) {
	obj78456_onTap_actionGroup2();
}
	}, 1);
}







};
obj78456_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78456_onTap_activeActionGroupIndex = -1;
		$("#obj78456").trigger("obj78456_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78456) {
				console.warn("de-queueing event obj78456." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78456").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78456_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78460();
function playAudio_78460() {
	window.obj78456_onTap_runningActionsCount = obj78456_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78456_onTap_runningActionsCount = window.obj78456_onTap_runningActionsCount - 1;
if (window.obj78456_onTap_runningActionsCount < 0) {
	window.obj78456_onTap_runningActionsCount = 0;
} else if (window.obj78456_onTap_runningActionsCount == 0) {
	obj78456_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78456_onTap_runningActionsCount = window.obj78456_onTap_runningActionsCount - 1;
if (window.obj78456_onTap_runningActionsCount < 0) {
	window.obj78456_onTap_runningActionsCount = 0;
} else if (window.obj78456_onTap_runningActionsCount == 0) {
	obj78456_onTap_actionGroup3();
}
	}
}









};
obj78456_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78456_onTap_activeActionGroupIndex = -1;
		$("#obj78456").trigger("obj78456_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78456) {
				console.warn("de-queueing event obj78456." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78456").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78456_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78461();
function runjs_78461() {
	window.obj78456_onTap_runningActionsCount = obj78456_onTap_runningActionsCount + 1;

	$("#obj78456").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78456_onTap_runningActionsCount = window.obj78456_onTap_runningActionsCount - 1;
if (window.obj78456_onTap_runningActionsCount < 0) {
	window.obj78456_onTap_runningActionsCount = 0;
} else if (window.obj78456_onTap_runningActionsCount == 0) {
	obj78456_onTap_actionGroup4();
}
	}, 1);
}







};
obj78456_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78456_onTap_activeActionGroupIndex = -1;
		$("#obj78456").trigger("obj78456_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78456) {
				console.warn("de-queueing event obj78456." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78456").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78456_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78462();
function switchText_78462() {
	window.obj78456_onTap_runningActionsCount = obj78456_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78456_onTap_runningActionsCount = window.obj78456_onTap_runningActionsCount - 1;
if (window.obj78456_onTap_runningActionsCount < 0) {
	window.obj78456_onTap_runningActionsCount = 0;
} else if (window.obj78456_onTap_runningActionsCount == 0) {
	obj78456_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78456_onTap_runningActionsCount = window.obj78456_onTap_runningActionsCount - 1;
if (window.obj78456_onTap_runningActionsCount < 0) {
	window.obj78456_onTap_runningActionsCount = 0;
} else if (window.obj78456_onTap_runningActionsCount == 0) {
	obj78456_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78456_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78456_onTap_activeActionGroupIndex = -1;
		$("#obj78456").trigger("obj78456_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78456) {
				console.warn("de-queueing event obj78456." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78456").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78456_onTap_activeActionGroupIndex = 5;
	





















};
obj78449_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78449_onTap_activeActionGroupIndex = -1;
		$("#obj78449").trigger("obj78449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78449) {
				console.warn("de-queueing event obj78449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78449_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_78451();
function switchText_78451() {
	window.obj78449_onTap_runningActionsCount = obj78449_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78449_onTap_runningActionsCount = window.obj78449_onTap_runningActionsCount - 1;
if (window.obj78449_onTap_runningActionsCount < 0) {
	window.obj78449_onTap_runningActionsCount = 0;
} else if (window.obj78449_onTap_runningActionsCount == 0) {
	obj78449_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78449_onTap_runningActionsCount = window.obj78449_onTap_runningActionsCount - 1;
if (window.obj78449_onTap_runningActionsCount < 0) {
	window.obj78449_onTap_runningActionsCount = 0;
} else if (window.obj78449_onTap_runningActionsCount == 0) {
	obj78449_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj78449_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78449_onTap_activeActionGroupIndex = -1;
		$("#obj78449").trigger("obj78449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78449) {
				console.warn("de-queueing event obj78449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78449_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78452();
function runjs_78452() {
	window.obj78449_onTap_runningActionsCount = obj78449_onTap_runningActionsCount + 1;

	$("#obj78449").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj78449_onTap_runningActionsCount = window.obj78449_onTap_runningActionsCount - 1;
if (window.obj78449_onTap_runningActionsCount < 0) {
	window.obj78449_onTap_runningActionsCount = 0;
} else if (window.obj78449_onTap_runningActionsCount == 0) {
	obj78449_onTap_actionGroup2();
}
	}, 1);
}







};
obj78449_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78449_onTap_activeActionGroupIndex = -1;
		$("#obj78449").trigger("obj78449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78449) {
				console.warn("de-queueing event obj78449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78449_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj78423 
playAudio_78453();
function playAudio_78453() {
	window.obj78449_onTap_runningActionsCount = obj78449_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78423")[0];
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
		    window.obj78449_onTap_runningActionsCount = window.obj78449_onTap_runningActionsCount - 1;
if (window.obj78449_onTap_runningActionsCount < 0) {
	window.obj78449_onTap_runningActionsCount = 0;
} else if (window.obj78449_onTap_runningActionsCount == 0) {
	obj78449_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78449_onTap_runningActionsCount = window.obj78449_onTap_runningActionsCount - 1;
if (window.obj78449_onTap_runningActionsCount < 0) {
	window.obj78449_onTap_runningActionsCount = 0;
} else if (window.obj78449_onTap_runningActionsCount == 0) {
	obj78449_onTap_actionGroup3();
}
	}
}









};
obj78449_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78449_onTap_activeActionGroupIndex = -1;
		$("#obj78449").trigger("obj78449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78449) {
				console.warn("de-queueing event obj78449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78449_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78454();
function runjs_78454() {
	window.obj78449_onTap_runningActionsCount = obj78449_onTap_runningActionsCount + 1;

	$("#obj78449").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj78449_onTap_runningActionsCount = window.obj78449_onTap_runningActionsCount - 1;
if (window.obj78449_onTap_runningActionsCount < 0) {
	window.obj78449_onTap_runningActionsCount = 0;
} else if (window.obj78449_onTap_runningActionsCount == 0) {
	obj78449_onTap_actionGroup4();
}
	}, 1);
}







};
obj78449_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78449_onTap_activeActionGroupIndex = -1;
		$("#obj78449").trigger("obj78449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78449) {
				console.warn("de-queueing event obj78449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78449_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_78455();
function switchText_78455() {
	window.obj78449_onTap_runningActionsCount = obj78449_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78449_onTap_runningActionsCount = window.obj78449_onTap_runningActionsCount - 1;
if (window.obj78449_onTap_runningActionsCount < 0) {
	window.obj78449_onTap_runningActionsCount = 0;
} else if (window.obj78449_onTap_runningActionsCount == 0) {
	obj78449_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78449_onTap_runningActionsCount = window.obj78449_onTap_runningActionsCount - 1;
if (window.obj78449_onTap_runningActionsCount < 0) {
	window.obj78449_onTap_runningActionsCount = 0;
} else if (window.obj78449_onTap_runningActionsCount == 0) {
	obj78449_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj78449_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78449_onTap_activeActionGroupIndex = -1;
		$("#obj78449").trigger("obj78449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78449) {
				console.warn("de-queueing event obj78449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78449_onTap_activeActionGroupIndex = 5;
	





















};
obj78444_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78444_onTap_activeActionGroupIndex = -1;
		$("#obj78444").trigger("obj78444_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78444) {
				console.warn("de-queueing event obj78444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78444_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78446();
function runjs_78446() {
	window.obj78444_onTap_runningActionsCount = obj78444_onTap_runningActionsCount + 1;

	$("#obj78444").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78444_onTap_runningActionsCount = window.obj78444_onTap_runningActionsCount - 1;
if (window.obj78444_onTap_runningActionsCount < 0) {
	window.obj78444_onTap_runningActionsCount = 0;
} else if (window.obj78444_onTap_runningActionsCount == 0) {
	obj78444_onTap_actionGroup1();
}
	}, 1);
}







};
obj78444_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78444_onTap_activeActionGroupIndex = -1;
		$("#obj78444").trigger("obj78444_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78444) {
				console.warn("de-queueing event obj78444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78444_onTap_activeActionGroupIndex = 1;
	





















};
obj78436_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78436_onTap_activeActionGroupIndex = -1;
		$("#obj78436").trigger("obj78436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78436) {
				console.warn("de-queueing event obj78436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78436_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78438();
function runjs_78438() {
	window.obj78436_onTap_runningActionsCount = obj78436_onTap_runningActionsCount + 1;

	$("#obj78436").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78436_onTap_runningActionsCount = window.obj78436_onTap_runningActionsCount - 1;
if (window.obj78436_onTap_runningActionsCount < 0) {
	window.obj78436_onTap_runningActionsCount = 0;
} else if (window.obj78436_onTap_runningActionsCount == 0) {
	obj78436_onTap_actionGroup1();
}
	}, 1);
}







};
obj78436_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78436_onTap_activeActionGroupIndex = -1;
		$("#obj78436").trigger("obj78436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78436) {
				console.warn("de-queueing event obj78436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78436_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78442();
function switchText_78442() {
	window.obj78436_onTap_runningActionsCount = obj78436_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78436_onTap_runningActionsCount = window.obj78436_onTap_runningActionsCount - 1;
if (window.obj78436_onTap_runningActionsCount < 0) {
	window.obj78436_onTap_runningActionsCount = 0;
} else if (window.obj78436_onTap_runningActionsCount == 0) {
	obj78436_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78436_onTap_runningActionsCount = window.obj78436_onTap_runningActionsCount - 1;
if (window.obj78436_onTap_runningActionsCount < 0) {
	window.obj78436_onTap_runningActionsCount = 0;
} else if (window.obj78436_onTap_runningActionsCount == 0) {
	obj78436_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj78436_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78436_onTap_activeActionGroupIndex = -1;
		$("#obj78436").trigger("obj78436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78436) {
				console.warn("de-queueing event obj78436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78436_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78439();
function runjs_78439() {
	window.obj78436_onTap_runningActionsCount = obj78436_onTap_runningActionsCount + 1;

	$("#obj78434").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78436_onTap_runningActionsCount = window.obj78436_onTap_runningActionsCount - 1;
if (window.obj78436_onTap_runningActionsCount < 0) {
	window.obj78436_onTap_runningActionsCount = 0;
} else if (window.obj78436_onTap_runningActionsCount == 0) {
	obj78436_onTap_actionGroup3();
}
	}, 1);
}







};
obj78436_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78436_onTap_activeActionGroupIndex = -1;
		$("#obj78436").trigger("obj78436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78436) {
				console.warn("de-queueing event obj78436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78436_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_78440();
function runjs_78440() {
	window.obj78436_onTap_runningActionsCount = obj78436_onTap_runningActionsCount + 1;

	$("#obj78432").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78436_onTap_runningActionsCount = window.obj78436_onTap_runningActionsCount - 1;
if (window.obj78436_onTap_runningActionsCount < 0) {
	window.obj78436_onTap_runningActionsCount = 0;
} else if (window.obj78436_onTap_runningActionsCount == 0) {
	obj78436_onTap_actionGroup4();
}
	}, 1);
}







};
obj78436_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78436_onTap_activeActionGroupIndex = -1;
		$("#obj78436").trigger("obj78436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78436) {
				console.warn("de-queueing event obj78436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78436_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78441();
function runjs_78441() {
	window.obj78436_onTap_runningActionsCount = obj78436_onTap_runningActionsCount + 1;

	$("#obj78410").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj78436_onTap_runningActionsCount = window.obj78436_onTap_runningActionsCount - 1;
if (window.obj78436_onTap_runningActionsCount < 0) {
	window.obj78436_onTap_runningActionsCount = 0;
} else if (window.obj78436_onTap_runningActionsCount == 0) {
	obj78436_onTap_actionGroup5();
}
	}, 1);
}







};
obj78436_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78436_onTap_activeActionGroupIndex = -1;
		$("#obj78436").trigger("obj78436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78436) {
				console.warn("de-queueing event obj78436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78436_onTap_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj78422 
playAudio_78443();
function playAudio_78443() {
	window.obj78436_onTap_runningActionsCount = obj78436_onTap_runningActionsCount + 1;
	var myAudio = $("#obj78422")[0];
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
		    window.obj78436_onTap_runningActionsCount = window.obj78436_onTap_runningActionsCount - 1;
if (window.obj78436_onTap_runningActionsCount < 0) {
	window.obj78436_onTap_runningActionsCount = 0;
} else if (window.obj78436_onTap_runningActionsCount == 0) {
	obj78436_onTap_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78436_onTap_runningActionsCount = window.obj78436_onTap_runningActionsCount - 1;
if (window.obj78436_onTap_runningActionsCount < 0) {
	window.obj78436_onTap_runningActionsCount = 0;
} else if (window.obj78436_onTap_runningActionsCount == 0) {
	obj78436_onTap_actionGroup6();
}
	}
}









};
obj78436_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78436_onTap_activeActionGroupIndex = -1;
		$("#obj78436").trigger("obj78436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78436) {
				console.warn("de-queueing event obj78436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78436_onTap_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90305();
function switchText_90305() {
	window.obj78436_onTap_runningActionsCount = obj78436_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78744_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78744_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78744").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78744_content");
			setTimeout(function () {
				window.obj78436_onTap_runningActionsCount = window.obj78436_onTap_runningActionsCount - 1;
if (window.obj78436_onTap_runningActionsCount < 0) {
	window.obj78436_onTap_runningActionsCount = 0;
} else if (window.obj78436_onTap_runningActionsCount == 0) {
	obj78436_onTap_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj78744 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78436_onTap_runningActionsCount = window.obj78436_onTap_runningActionsCount - 1;
if (window.obj78436_onTap_runningActionsCount < 0) {
	window.obj78436_onTap_runningActionsCount = 0;
} else if (window.obj78436_onTap_runningActionsCount == 0) {
	obj78436_onTap_actionGroup7();
}
		}, 1);
	}
}






};
obj78436_onTap_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78436_onTap_activeActionGroupIndex = -1;
		$("#obj78436").trigger("obj78436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78436) {
				console.warn("de-queueing event obj78436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78436_onTap_activeActionGroupIndex = 7;
	





















};
obj78380_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78380_onTap_activeActionGroupIndex = -1;
		$("#obj78380").trigger("obj78380_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78380) {
				console.warn("de-queueing event obj78380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78380_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78380 
hide_78383();
function hide_78383() {
	var selector = "#obj78380";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78380_onTap_runningActionsCount = obj78380_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78380_onTap_runningActionsCount = window.obj78380_onTap_runningActionsCount - 1;
if (window.obj78380_onTap_runningActionsCount < 0) {
	window.obj78380_onTap_runningActionsCount = 0;
} else if (window.obj78380_onTap_runningActionsCount == 0) {
	obj78380_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78383(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78380_onTap_runningActionsCount = window.obj78380_onTap_runningActionsCount - 1;
if (window.obj78380_onTap_runningActionsCount < 0) {
	window.obj78380_onTap_runningActionsCount = 0;
} else if (window.obj78380_onTap_runningActionsCount == 0) {
	obj78380_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj78370 
stopMovie_78382();
function stopMovie_78382() {
	window.obj78380_onTap_runningActionsCount = obj78380_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78370")[0];
	myVideo.pause();
	window.obj78380_onTap_runningActionsCount = window.obj78380_onTap_runningActionsCount - 1;
if (window.obj78380_onTap_runningActionsCount < 0) {
	window.obj78380_onTap_runningActionsCount = 0;
} else if (window.obj78380_onTap_runningActionsCount == 0) {
	obj78380_onTap_actionGroup1();
}
}
















};
obj78380_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78380_onTap_activeActionGroupIndex = -1;
		$("#obj78380").trigger("obj78380_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78380) {
				console.warn("de-queueing event obj78380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78380_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78372
(function(){
	window.obj78380_onTap_runningActionsCount = obj78380_onTap_runningActionsCount + 1;

	var selector = "#obj78372";
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
					window.obj78380_onTap_runningActionsCount = window.obj78380_onTap_runningActionsCount - 1;
if (window.obj78380_onTap_runningActionsCount < 0) {
	window.obj78380_onTap_runningActionsCount = 0;
} else if (window.obj78380_onTap_runningActionsCount == 0) {
	obj78380_onTap_actionGroup2();
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
				window.obj78380_onTap_runningActionsCount = window.obj78380_onTap_runningActionsCount - 1;
if (window.obj78380_onTap_runningActionsCount < 0) {
	window.obj78380_onTap_runningActionsCount = 0;
} else if (window.obj78380_onTap_runningActionsCount == 0) {
	obj78380_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78380_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78380_onTap_activeActionGroupIndex = -1;
		$("#obj78380").trigger("obj78380_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78380) {
				console.warn("de-queueing event obj78380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78380_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78370 
move_78385();
function move_78385() {
	window.obj78380_onTap_runningActionsCount = obj78380_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78370");
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
			window.obj78380_onTap_runningActionsCount = window.obj78380_onTap_runningActionsCount - 1;
if (window.obj78380_onTap_runningActionsCount < 0) {
	window.obj78380_onTap_runningActionsCount = 0;
} else if (window.obj78380_onTap_runningActionsCount == 0) {
	obj78380_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78380_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78380_onTap_activeActionGroupIndex = -1;
		$("#obj78380").trigger("obj78380_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78380) {
				console.warn("de-queueing event obj78380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78380_onTap_activeActionGroupIndex = 3;
	





















};
obj78372_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78372_onTap_activeActionGroupIndex = -1;
		$("#obj78372").trigger("obj78372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78372) {
				console.warn("de-queueing event obj78372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78372_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78372 
hide_78375();
function hide_78375() {
	var selector = "#obj78372";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78372_onTap_runningActionsCount = obj78372_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78372_onTap_runningActionsCount = window.obj78372_onTap_runningActionsCount - 1;
if (window.obj78372_onTap_runningActionsCount < 0) {
	window.obj78372_onTap_runningActionsCount = 0;
} else if (window.obj78372_onTap_runningActionsCount == 0) {
	obj78372_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78375(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78372_onTap_runningActionsCount = window.obj78372_onTap_runningActionsCount - 1;
if (window.obj78372_onTap_runningActionsCount < 0) {
	window.obj78372_onTap_runningActionsCount = 0;
} else if (window.obj78372_onTap_runningActionsCount == 0) {
	obj78372_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj78370 
playPauseMovie_78374();
function playPauseMovie_78374() {
	window.obj78372_onTap_runningActionsCount = obj78372_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78370")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj78372_onTap_runningActionsCount = window.obj78372_onTap_runningActionsCount - 1;
if (window.obj78372_onTap_runningActionsCount < 0) {
	window.obj78372_onTap_runningActionsCount = 0;
} else if (window.obj78372_onTap_runningActionsCount == 0) {
	obj78372_onTap_actionGroup1();
}
}

















};
obj78372_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78372_onTap_activeActionGroupIndex = -1;
		$("#obj78372").trigger("obj78372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78372) {
				console.warn("de-queueing event obj78372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78372_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78380
(function(){
	window.obj78372_onTap_runningActionsCount = obj78372_onTap_runningActionsCount + 1;

	var selector = "#obj78380";
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
					window.obj78372_onTap_runningActionsCount = window.obj78372_onTap_runningActionsCount - 1;
if (window.obj78372_onTap_runningActionsCount < 0) {
	window.obj78372_onTap_runningActionsCount = 0;
} else if (window.obj78372_onTap_runningActionsCount == 0) {
	obj78372_onTap_actionGroup2();
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
				window.obj78372_onTap_runningActionsCount = window.obj78372_onTap_runningActionsCount - 1;
if (window.obj78372_onTap_runningActionsCount < 0) {
	window.obj78372_onTap_runningActionsCount = 0;
} else if (window.obj78372_onTap_runningActionsCount == 0) {
	obj78372_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78372_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78372_onTap_activeActionGroupIndex = -1;
		$("#obj78372").trigger("obj78372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78372) {
				console.warn("de-queueing event obj78372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78372_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78370 
move_78377();
function move_78377() {
	window.obj78372_onTap_runningActionsCount = obj78372_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78370");
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
			window.obj78372_onTap_runningActionsCount = window.obj78372_onTap_runningActionsCount - 1;
if (window.obj78372_onTap_runningActionsCount < 0) {
	window.obj78372_onTap_runningActionsCount = 0;
} else if (window.obj78372_onTap_runningActionsCount == 0) {
	obj78372_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78372_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78372_onTap_activeActionGroupIndex = -1;
		$("#obj78372").trigger("obj78372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78372) {
				console.warn("de-queueing event obj78372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78372_onTap_activeActionGroupIndex = 3;
	





















};
obj87913_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87913_onTap_activeActionGroupIndex = -1;
		$("#obj87913").trigger("obj87913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87913) {
				console.warn("de-queueing event obj87913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87913_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87918 
stopAudio_87915();
function stopAudio_87915() {
	window.obj87913_onTap_runningActionsCount = obj87913_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87918")[0];
	myAudio.pause();
	window.obj87913_onTap_runningActionsCount = window.obj87913_onTap_runningActionsCount - 1;
if (window.obj87913_onTap_runningActionsCount < 0) {
	window.obj87913_onTap_runningActionsCount = 0;
} else if (window.obj87913_onTap_runningActionsCount == 0) {
	obj87913_onTap_actionGroup1();
}
}








};
obj87913_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87913_onTap_activeActionGroupIndex = -1;
		$("#obj87913").trigger("obj87913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87913) {
				console.warn("de-queueing event obj87913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87913_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87913 
hide_87916();
function hide_87916() {
	var selector = "#obj87913";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87913_onTap_runningActionsCount = obj87913_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87913_onTap_runningActionsCount = window.obj87913_onTap_runningActionsCount - 1;
if (window.obj87913_onTap_runningActionsCount < 0) {
	window.obj87913_onTap_runningActionsCount = 0;
} else if (window.obj87913_onTap_runningActionsCount == 0) {
	obj87913_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87916(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87913_onTap_runningActionsCount = window.obj87913_onTap_runningActionsCount - 1;
if (window.obj87913_onTap_runningActionsCount < 0) {
	window.obj87913_onTap_runningActionsCount = 0;
} else if (window.obj87913_onTap_runningActionsCount == 0) {
	obj87913_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87913_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87913_onTap_activeActionGroupIndex = -1;
		$("#obj87913").trigger("obj87913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87913) {
				console.warn("de-queueing event obj87913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87913_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87908
(function(){
	window.obj87913_onTap_runningActionsCount = obj87913_onTap_runningActionsCount + 1;

	var selector = "#obj87908";
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
					window.obj87913_onTap_runningActionsCount = window.obj87913_onTap_runningActionsCount - 1;
if (window.obj87913_onTap_runningActionsCount < 0) {
	window.obj87913_onTap_runningActionsCount = 0;
} else if (window.obj87913_onTap_runningActionsCount == 0) {
	obj87913_onTap_actionGroup3();
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
				window.obj87913_onTap_runningActionsCount = window.obj87913_onTap_runningActionsCount - 1;
if (window.obj87913_onTap_runningActionsCount < 0) {
	window.obj87913_onTap_runningActionsCount = 0;
} else if (window.obj87913_onTap_runningActionsCount == 0) {
	obj87913_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87913_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87913_onTap_activeActionGroupIndex = -1;
		$("#obj87913").trigger("obj87913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87913) {
				console.warn("de-queueing event obj87913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87913_onTap_activeActionGroupIndex = 3;
	





















};
obj87908_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87908_onTap_activeActionGroupIndex = -1;
		$("#obj87908").trigger("obj87908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87908) {
				console.warn("de-queueing event obj87908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87908_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87908 
hide_87910();
function hide_87910() {
	var selector = "#obj87908";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87908_onTap_runningActionsCount = obj87908_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87908_onTap_runningActionsCount = window.obj87908_onTap_runningActionsCount - 1;
if (window.obj87908_onTap_runningActionsCount < 0) {
	window.obj87908_onTap_runningActionsCount = 0;
} else if (window.obj87908_onTap_runningActionsCount == 0) {
	obj87908_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87910(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87908_onTap_runningActionsCount = window.obj87908_onTap_runningActionsCount - 1;
if (window.obj87908_onTap_runningActionsCount < 0) {
	window.obj87908_onTap_runningActionsCount = 0;
} else if (window.obj87908_onTap_runningActionsCount == 0) {
	obj87908_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87908_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87908_onTap_activeActionGroupIndex = -1;
		$("#obj87908").trigger("obj87908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87908) {
				console.warn("de-queueing event obj87908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87908_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87913
(function(){
	window.obj87908_onTap_runningActionsCount = obj87908_onTap_runningActionsCount + 1;

	var selector = "#obj87913";
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
					window.obj87908_onTap_runningActionsCount = window.obj87908_onTap_runningActionsCount - 1;
if (window.obj87908_onTap_runningActionsCount < 0) {
	window.obj87908_onTap_runningActionsCount = 0;
} else if (window.obj87908_onTap_runningActionsCount == 0) {
	obj87908_onTap_actionGroup2();
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
				window.obj87908_onTap_runningActionsCount = window.obj87908_onTap_runningActionsCount - 1;
if (window.obj87908_onTap_runningActionsCount < 0) {
	window.obj87908_onTap_runningActionsCount = 0;
} else if (window.obj87908_onTap_runningActionsCount == 0) {
	obj87908_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87908_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87908_onTap_activeActionGroupIndex = -1;
		$("#obj87908").trigger("obj87908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87908) {
				console.warn("de-queueing event obj87908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87908_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87918 
playAudio_87912();
function playAudio_87912() {
	window.obj87908_onTap_runningActionsCount = obj87908_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87918")[0];
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
		    window.obj87908_onTap_runningActionsCount = window.obj87908_onTap_runningActionsCount - 1;
if (window.obj87908_onTap_runningActionsCount < 0) {
	window.obj87908_onTap_runningActionsCount = 0;
} else if (window.obj87908_onTap_runningActionsCount == 0) {
	obj87908_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87908_onTap_runningActionsCount = window.obj87908_onTap_runningActionsCount - 1;
if (window.obj87908_onTap_runningActionsCount < 0) {
	window.obj87908_onTap_runningActionsCount = 0;
} else if (window.obj87908_onTap_runningActionsCount == 0) {
	obj87908_onTap_actionGroup3();
}
	}
}









};
obj87908_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87908_onTap_activeActionGroupIndex = -1;
		$("#obj87908").trigger("obj87908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87908) {
				console.warn("de-queueing event obj87908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87908_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj78765: Event Touch Down
 *
 */
$("#obj78765").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78765_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78765_onTap is still running");
	return;
}
var obj78765_onTap_runningActionsCount = 0;
var obj78765_onTap_loopCount = 0;
obj78765_onTap_actionGroup0();
});










/*
 *
 *   obj78762: Event Touch Down
 *
 */
$("#obj78762").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78762_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78762_onTap is still running");
	return;
}
var obj78762_onTap_runningActionsCount = 0;
var obj78762_onTap_loopCount = 0;
obj78762_onTap_actionGroup0();
});










/*
 *
 *   obj78758: Event Touch Down
 *
 */
$("#obj78758").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78758_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78758_onTap is still running");
	return;
}
var obj78758_onTap_runningActionsCount = 0;
var obj78758_onTap_loopCount = 0;
obj78758_onTap_actionGroup0();
});






































































/*
 *
 *   obj78741: Event Touch Down
 *
 */
$("#obj78741").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78741_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78741_onTap is still running");
	return;
}
var obj78741_onTap_runningActionsCount = 0;
var obj78741_onTap_loopCount = 0;
obj78741_onTap_actionGroup0();
});










/*
 *
 *   obj78734: Event Touch Down
 *
 */
$("#obj78734").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78734_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78734_onTap is still running");
	return;
}
var obj78734_onTap_runningActionsCount = 0;
var obj78734_onTap_loopCount = 0;
obj78734_onTap_actionGroup0();
});










/*
 *
 *   obj78727: Event Touch Down
 *
 */
$("#obj78727").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78727_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78727_onTap is still running");
	return;
}
var obj78727_onTap_runningActionsCount = 0;
var obj78727_onTap_loopCount = 0;
obj78727_onTap_actionGroup0();
});










/*
 *
 *   obj78724: Event Touch Down
 *
 */
$("#obj78724").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78724_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78724_onTap is still running");
	return;
}
var obj78724_onTap_runningActionsCount = 0;
var obj78724_onTap_loopCount = 0;
obj78724_onTap_actionGroup0();
});










/*
 *
 *   obj78721: Event Touch Down
 *
 */
$("#obj78721").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78721_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78721_onTap is still running");
	return;
}
var obj78721_onTap_runningActionsCount = 0;
var obj78721_onTap_loopCount = 0;
obj78721_onTap_actionGroup0();
});










/*
 *
 *   obj78714: Event Touch Down
 *
 */
$("#obj78714").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78714_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78714_onTap is still running");
	return;
}
var obj78714_onTap_runningActionsCount = 0;
var obj78714_onTap_loopCount = 0;
obj78714_onTap_actionGroup0();
});










/*
 *
 *   obj78707: Event Touch Down
 *
 */
$("#obj78707").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78707_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78707_onTap is still running");
	return;
}
var obj78707_onTap_runningActionsCount = 0;
var obj78707_onTap_loopCount = 0;
obj78707_onTap_actionGroup0();
});










/*
 *
 *   obj78700: Event Touch Down
 *
 */
$("#obj78700").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78700_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78700_onTap is still running");
	return;
}
var obj78700_onTap_runningActionsCount = 0;
var obj78700_onTap_loopCount = 0;
obj78700_onTap_actionGroup0();
});










/*
 *
 *   obj78690: Event Touch Down
 *
 */
$("#obj78690").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78690_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78690_onTap is still running");
	return;
}
var obj78690_onTap_runningActionsCount = 0;
var obj78690_onTap_loopCount = 0;
obj78690_onTap_actionGroup0();
});










/*
 *
 *   obj78683: Event Touch Down
 *
 */
$("#obj78683").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78683_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78683_onTap is still running");
	return;
}
var obj78683_onTap_runningActionsCount = 0;
var obj78683_onTap_loopCount = 0;
obj78683_onTap_actionGroup0();
});










/*
 *
 *   obj78676: Event Touch Down
 *
 */
$("#obj78676").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78676_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78676_onTap is still running");
	return;
}
var obj78676_onTap_runningActionsCount = 0;
var obj78676_onTap_loopCount = 0;
obj78676_onTap_actionGroup0();
});










/*
 *
 *   obj78667: Event Touch Down
 *
 */
$("#obj78667").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78667_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78667_onTap is still running");
	return;
}
var obj78667_onTap_runningActionsCount = 0;
var obj78667_onTap_loopCount = 0;
obj78667_onTap_actionGroup0();
});










/*
 *
 *   obj78658: Event Touch Down
 *
 */
$("#obj78658").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78658_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78658_onTap is still running");
	return;
}
var obj78658_onTap_runningActionsCount = 0;
var obj78658_onTap_loopCount = 0;
obj78658_onTap_actionGroup0();
});










/*
 *
 *   obj78655: Event Touch Down
 *
 */
$("#obj78655").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78655_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78655_onTap is still running");
	return;
}
var obj78655_onTap_runningActionsCount = 0;
var obj78655_onTap_loopCount = 0;
obj78655_onTap_actionGroup0();
});










/*
 *
 *   obj78648: Event Touch Down
 *
 */
$("#obj78648").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78648_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78648_onTap is still running");
	return;
}
var obj78648_onTap_runningActionsCount = 0;
var obj78648_onTap_loopCount = 0;
obj78648_onTap_actionGroup0();
});










/*
 *
 *   obj78641: Event Touch Down
 *
 */
$("#obj78641").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78641_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78641_onTap is still running");
	return;
}
var obj78641_onTap_runningActionsCount = 0;
var obj78641_onTap_loopCount = 0;
obj78641_onTap_actionGroup0();
});




















/*
 *
 *   obj78632: Event Touch Down
 *
 */
$("#obj78632").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78632_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78632_onTap is still running");
	return;
}
var obj78632_onTap_runningActionsCount = 0;
var obj78632_onTap_loopCount = 0;
obj78632_onTap_actionGroup0();
});










/*
 *
 *   obj78625: Event Touch Down
 *
 */
$("#obj78625").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78625_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78625_onTap is still running");
	return;
}
var obj78625_onTap_runningActionsCount = 0;
var obj78625_onTap_loopCount = 0;
obj78625_onTap_actionGroup0();
});






























/*
 *
 *   obj78612: Event Touch Down
 *
 */
$("#obj78612").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78612_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78612_onTap is still running");
	return;
}
var obj78612_onTap_runningActionsCount = 0;
var obj78612_onTap_loopCount = 0;
obj78612_onTap_actionGroup0();
});




















/*
 *
 *   obj78607: Event Touch Down
 *
 */
$("#obj78607").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78607_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78607_onTap is still running");
	return;
}
var obj78607_onTap_runningActionsCount = 0;
var obj78607_onTap_loopCount = 0;
obj78607_onTap_actionGroup0();
});




















/*
 *
 *   obj78598: Event Touch Down
 *
 */
$("#obj78598").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78598_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78598_onTap is still running");
	return;
}
var obj78598_onTap_runningActionsCount = 0;
var obj78598_onTap_loopCount = 0;
obj78598_onTap_actionGroup0();
});










/*
 *
 *   obj78591: Event Touch Down
 *
 */
$("#obj78591").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78591_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78591_onTap is still running");
	return;
}
var obj78591_onTap_runningActionsCount = 0;
var obj78591_onTap_loopCount = 0;
obj78591_onTap_actionGroup0();
});


















































/*
 *
 *   obj78573: Event Touch Down
 *
 */
$("#obj78573").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78573_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78573_onTap is still running");
	return;
}
var obj78573_onTap_runningActionsCount = 0;
var obj78573_onTap_loopCount = 0;
obj78573_onTap_actionGroup0();
});










/*
 *
 *   obj78570: Event Touch Down
 *
 */
$("#obj78570").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78570_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78570_onTap is still running");
	return;
}
var obj78570_onTap_runningActionsCount = 0;
var obj78570_onTap_loopCount = 0;
obj78570_onTap_actionGroup0();
});










/*
 *
 *   obj78563: Event Touch Down
 *
 */
$("#obj78563").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78563_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78563_onTap is still running");
	return;
}
var obj78563_onTap_runningActionsCount = 0;
var obj78563_onTap_loopCount = 0;
obj78563_onTap_actionGroup0();
});










/*
 *
 *   obj78556: Event Touch Down
 *
 */
$("#obj78556").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78556_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78556_onTap is still running");
	return;
}
var obj78556_onTap_runningActionsCount = 0;
var obj78556_onTap_loopCount = 0;
obj78556_onTap_actionGroup0();
});






































































/*
 *
 *   obj78530: Event Touch Down
 *
 */
$("#obj78530").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78530_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78530_onTap is still running");
	return;
}
var obj78530_onTap_runningActionsCount = 0;
var obj78530_onTap_loopCount = 0;
obj78530_onTap_actionGroup0();
});










/*
 *
 *   obj78523: Event Touch Down
 *
 */
$("#obj78523").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78523_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78523_onTap is still running");
	return;
}
var obj78523_onTap_runningActionsCount = 0;
var obj78523_onTap_loopCount = 0;
obj78523_onTap_actionGroup0();
});










/*
 *
 *   obj78516: Event Touch Down
 *
 */
$("#obj78516").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78516_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78516_onTap is still running");
	return;
}
var obj78516_onTap_runningActionsCount = 0;
var obj78516_onTap_loopCount = 0;
obj78516_onTap_actionGroup0();
});










/*
 *
 *   obj78509: Event Touch Down
 *
 */
$("#obj78509").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78509_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78509_onTap is still running");
	return;
}
var obj78509_onTap_runningActionsCount = 0;
var obj78509_onTap_loopCount = 0;
obj78509_onTap_actionGroup0();
});




















/*
 *
 *   obj78500: Event Touch Down
 *
 */
$("#obj78500").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78500_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78500_onTap is still running");
	return;
}
var obj78500_onTap_runningActionsCount = 0;
var obj78500_onTap_loopCount = 0;
obj78500_onTap_actionGroup0();
});




















/*
 *
 *   obj78491: Event Touch Down
 *
 */
$("#obj78491").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78491_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78491_onTap is still running");
	return;
}
var obj78491_onTap_runningActionsCount = 0;
var obj78491_onTap_loopCount = 0;
obj78491_onTap_actionGroup0();
});










/*
 *
 *   obj78484: Event Touch Down
 *
 */
$("#obj78484").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78484_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78484_onTap is still running");
	return;
}
var obj78484_onTap_runningActionsCount = 0;
var obj78484_onTap_loopCount = 0;
obj78484_onTap_actionGroup0();
});










/*
 *
 *   obj78477: Event Touch Down
 *
 */
$("#obj78477").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78477_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78477_onTap is still running");
	return;
}
var obj78477_onTap_runningActionsCount = 0;
var obj78477_onTap_loopCount = 0;
obj78477_onTap_actionGroup0();
});










/*
 *
 *   obj78470: Event Touch Down
 *
 */
$("#obj78470").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78470_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78470_onTap is still running");
	return;
}
var obj78470_onTap_runningActionsCount = 0;
var obj78470_onTap_loopCount = 0;
obj78470_onTap_actionGroup0();
});










/*
 *
 *   obj78463: Event Touch Down
 *
 */
$("#obj78463").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78463_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78463_onTap is still running");
	return;
}
var obj78463_onTap_runningActionsCount = 0;
var obj78463_onTap_loopCount = 0;
obj78463_onTap_actionGroup0();
});










/*
 *
 *   obj78456: Event Touch Down
 *
 */
$("#obj78456").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78456_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78456_onTap is still running");
	return;
}
var obj78456_onTap_runningActionsCount = 0;
var obj78456_onTap_loopCount = 0;
obj78456_onTap_actionGroup0();
});










/*
 *
 *   obj78449: Event Touch Down
 *
 */
$("#obj78449").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78449_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78449_onTap is still running");
	return;
}
var obj78449_onTap_runningActionsCount = 0;
var obj78449_onTap_loopCount = 0;
obj78449_onTap_actionGroup0();
});




















/*
 *
 *   obj78444: Event Touch Down
 *
 */
$("#obj78444").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78444_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78444_onTap is still running");
	return;
}
var obj78444_onTap_runningActionsCount = 0;
var obj78444_onTap_loopCount = 0;
obj78444_onTap_actionGroup0();
});










/*
 *
 *   obj78436: Event Touch Down
 *
 */
$("#obj78436").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78436_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78436_onTap is still running");
	return;
}
var obj78436_onTap_runningActionsCount = 0;
var obj78436_onTap_loopCount = 0;
obj78436_onTap_actionGroup0();
});


















































































































































































































/*
 *
 *   obj78380: Event Touch Down
 *
 */
$("#obj78380").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78380_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78380_onTap is still running");
	return;
}
var obj78380_onTap_runningActionsCount = 0;
var obj78380_onTap_loopCount = 0;
obj78380_onTap_actionGroup0();
});










/*
 *
 *   obj78372: Event Touch Down
 *
 */
$("#obj78372").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78372_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78372_onTap is still running");
	return;
}
var obj78372_onTap_runningActionsCount = 0;
var obj78372_onTap_loopCount = 0;
obj78372_onTap_actionGroup0();
});










/*
 *
 *   obj87913: Event Touch Down
 *
 */
$("#obj87913").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87913_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87913_onTap is still running");
	return;
}
var obj87913_onTap_runningActionsCount = 0;
var obj87913_onTap_loopCount = 0;
obj87913_onTap_actionGroup0();
});










/*
 *
 *   obj87908: Event Touch Down
 *
 */
$("#obj87908").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87908_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87908_onTap is still running");
	return;
}
var obj87908_onTap_runningActionsCount = 0;
var obj87908_onTap_loopCount = 0;
obj87908_onTap_actionGroup0();
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
	
$("#obj78768").trigger('SCEventShow');
$("#obj78765").trigger('SCEventShow');
$("#obj78762").trigger('SCEventShow');
$("#obj78758").trigger('SCEventShow');
$("#obj78756").trigger('SCEventShow');
$("#obj78754").trigger('SCEventShow');
$("#obj78752").trigger('SCEventShow');
$("#obj78750").trigger('SCEventShow');
$("#obj78746").trigger('SCEventShow');
$("#obj78744").trigger('SCEventShow');
$("#obj78741").trigger('SCEventShow');
$("#obj78734").trigger('SCEventShow');
$("#obj78727").trigger('SCEventShow');
$("#obj78724").trigger('SCEventShow');
$("#obj78721").trigger('SCEventShow');
$("#obj78714").trigger('SCEventShow');
$("#obj78707").trigger('SCEventShow');
$("#obj78700").trigger('SCEventShow');
$("#obj78690").trigger('SCEventShow');
$("#obj78683").trigger('SCEventShow');
$("#obj78676").trigger('SCEventShow');
$("#obj78667").trigger('SCEventShow');
$("#obj78658").trigger('SCEventShow');
$("#obj78655").trigger('SCEventShow');
$("#obj78648").trigger('SCEventShow');
$("#obj78641").trigger('SCEventShow');
$("#obj78639").trigger('SCEventShow');
$("#obj78632").trigger('SCEventShow');
$("#obj78625").trigger('SCEventShow');
$("#obj78623").trigger('SCEventShow');
$("#obj78621").trigger('SCEventShow');
$("#obj78612").trigger('SCEventShow');
$("#obj78610").trigger('SCEventShow');
$("#obj78607").trigger('SCEventShow');
$("#obj78605").trigger('SCEventShow');
$("#obj78598").trigger('SCEventShow');
$("#obj78591").trigger('SCEventShow');
$("#obj78589").trigger('SCEventShow');
$("#obj78587").trigger('SCEventShow');
$("#obj78585").trigger('SCEventShow');
$("#obj78583").trigger('SCEventShow');
$("#obj78573").trigger('SCEventShow');
$("#obj78570").trigger('SCEventShow');
$("#obj78563").trigger('SCEventShow');
$("#obj78556").trigger('SCEventShow');
$("#obj78554").trigger('SCEventShow');
$("#obj78552").trigger('SCEventShow');
$("#obj78550").trigger('SCEventShow');
$("#obj78548").trigger('SCEventShow');
$("#obj78546").trigger('SCEventShow');
$("#obj78537").trigger('SCEventShow');
$("#obj78530").trigger('SCEventShow');
$("#obj78523").trigger('SCEventShow');
$("#obj78516").trigger('SCEventShow');
$("#obj78509").trigger('SCEventShow');
$("#obj78507").trigger('SCEventShow');
$("#obj78500").trigger('SCEventShow');
$("#obj78498").trigger('SCEventShow');
$("#obj78491").trigger('SCEventShow');
$("#obj78484").trigger('SCEventShow');
$("#obj78477").trigger('SCEventShow');
$("#obj78470").trigger('SCEventShow');
$("#obj78463").trigger('SCEventShow');
$("#obj78456").trigger('SCEventShow');
$("#obj78449").trigger('SCEventShow');
$("#obj78447").trigger('SCEventShow');
$("#obj78444").trigger('SCEventShow');
$("#obj78436").trigger('SCEventShow');
$("#obj78434").trigger('SCEventShow');
$("#obj78432").trigger('SCEventShow');
$("#obj78430").trigger('SCEventShow');
$("#obj78428").trigger('SCEventShow');
$("#obj78426").trigger('SCEventShow');
$("#obj78424").trigger('SCEventShow');
$("#obj78423").trigger('SCEventShow');
$("#obj78422").trigger('SCEventShow');
$("#obj78420").trigger('SCEventShow');
$("#obj78418").trigger('SCEventShow');
$("#obj78416").trigger('SCEventShow');
$("#obj78414").trigger('SCEventShow');
$("#obj78412").trigger('SCEventShow');
$("#obj78410").trigger('SCEventShow');
$("#obj78408").trigger('SCEventShow');
$("#obj78406").trigger('SCEventShow');
$("#obj78404").trigger('SCEventShow');
$("#obj78402").trigger('SCEventShow');
$("#obj78400").trigger('SCEventShow');
$("#obj78398").trigger('SCEventShow');
$("#obj78380").trigger('SCEventShow');
$("#obj78372").trigger('SCEventShow');
$("#obj87913").trigger('SCEventShow');
$("#obj87908").trigger('SCEventShow');
$("#obj87918").trigger('SCEventShow');
$("#obj94803").trigger('SCEventShow');
$("#obj78370").trigger('SCEventShow');
	
});