pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 96127;
pubcoder.page.title = pubcoder.page.title || "209";
pubcoder.page.number = pubcoder.page.number || 209;
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
var obj96173_onTap_activeActionGroupIndex = -1;
var obj96173_onTap_runningActionsCount = 0;
var obj96173_onTap_loopCount = 0;
var obj96211_onTap_activeActionGroupIndex = -1;
var obj96211_onTap_runningActionsCount = 0;
var obj96211_onTap_loopCount = 0;
var obj96201_onTap_activeActionGroupIndex = -1;
var obj96201_onTap_runningActionsCount = 0;
var obj96201_onTap_loopCount = 0;
var obj96193_onTap_activeActionGroupIndex = -1;
var obj96193_onTap_runningActionsCount = 0;
var obj96193_onTap_loopCount = 0;
var obj96188_onTap_activeActionGroupIndex = -1;
var obj96188_onTap_runningActionsCount = 0;
var obj96188_onTap_loopCount = 0;
var obj96183_onTap_activeActionGroupIndex = -1;
var obj96183_onTap_runningActionsCount = 0;
var obj96183_onTap_loopCount = 0;
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
		
obj96173_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96173_onTap_activeActionGroupIndex = -1;
		$("#obj96173").trigger("obj96173_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96173) {
				console.warn("de-queueing event obj96173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96173_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_96175();
function goToPage_96175() {
	window.obj96173_onTap_runningActionsCount = obj96173_onTap_runningActionsCount + 1;
	$("#anchor1230")[0].click();
	window.obj96173_onTap_runningActionsCount = window.obj96173_onTap_runningActionsCount - 1;
if (window.obj96173_onTap_runningActionsCount < 0) {
	window.obj96173_onTap_runningActionsCount = 0;
} else if (window.obj96173_onTap_runningActionsCount == 0) {
	obj96173_onTap_actionGroup1();
}
}





















};
obj96173_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96173_onTap_activeActionGroupIndex = -1;
		$("#obj96173").trigger("obj96173_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96173) {
				console.warn("de-queueing event obj96173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96173_onTap_activeActionGroupIndex = 1;
	





















};
obj96211_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96211_onTap_activeActionGroupIndex = -1;
		$("#obj96211").trigger("obj96211_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96211) {
				console.warn("de-queueing event obj96211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96211_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_96213();
function goToPage_96213() {
	window.obj96211_onTap_runningActionsCount = obj96211_onTap_runningActionsCount + 1;
	$("#anchor1231")[0].click();
	window.obj96211_onTap_runningActionsCount = window.obj96211_onTap_runningActionsCount - 1;
if (window.obj96211_onTap_runningActionsCount < 0) {
	window.obj96211_onTap_runningActionsCount = 0;
} else if (window.obj96211_onTap_runningActionsCount == 0) {
	obj96211_onTap_actionGroup1();
}
}





















};
obj96211_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96211_onTap_activeActionGroupIndex = -1;
		$("#obj96211").trigger("obj96211_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96211) {
				console.warn("de-queueing event obj96211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96211_onTap_activeActionGroupIndex = 1;
	





















};
obj96201_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96201_onTap_activeActionGroupIndex = -1;
		$("#obj96201").trigger("obj96201_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96201) {
				console.warn("de-queueing event obj96201." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96201").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96201_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj96201 
hide_96204();
function hide_96204() {
	var selector = "#obj96201";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96201_onTap_runningActionsCount = obj96201_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96201_onTap_runningActionsCount = window.obj96201_onTap_runningActionsCount - 1;
if (window.obj96201_onTap_runningActionsCount < 0) {
	window.obj96201_onTap_runningActionsCount = 0;
} else if (window.obj96201_onTap_runningActionsCount == 0) {
	obj96201_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96204(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96201_onTap_runningActionsCount = window.obj96201_onTap_runningActionsCount - 1;
if (window.obj96201_onTap_runningActionsCount < 0) {
	window.obj96201_onTap_runningActionsCount = 0;
} else if (window.obj96201_onTap_runningActionsCount == 0) {
	obj96201_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj96150 
stopMovie_96203();
function stopMovie_96203() {
	window.obj96201_onTap_runningActionsCount = obj96201_onTap_runningActionsCount + 1;
	var myVideo = $("#obj96150")[0];
	myVideo.pause();
	window.obj96201_onTap_runningActionsCount = window.obj96201_onTap_runningActionsCount - 1;
if (window.obj96201_onTap_runningActionsCount < 0) {
	window.obj96201_onTap_runningActionsCount = 0;
} else if (window.obj96201_onTap_runningActionsCount == 0) {
	obj96201_onTap_actionGroup1();
}
}
















};
obj96201_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96201_onTap_activeActionGroupIndex = -1;
		$("#obj96201").trigger("obj96201_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96201) {
				console.warn("de-queueing event obj96201." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96201").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96201_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj96193
(function(){
	window.obj96201_onTap_runningActionsCount = obj96201_onTap_runningActionsCount + 1;

	var selector = "#obj96193";
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
					window.obj96201_onTap_runningActionsCount = window.obj96201_onTap_runningActionsCount - 1;
if (window.obj96201_onTap_runningActionsCount < 0) {
	window.obj96201_onTap_runningActionsCount = 0;
} else if (window.obj96201_onTap_runningActionsCount == 0) {
	obj96201_onTap_actionGroup2();
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
				window.obj96201_onTap_runningActionsCount = window.obj96201_onTap_runningActionsCount - 1;
if (window.obj96201_onTap_runningActionsCount < 0) {
	window.obj96201_onTap_runningActionsCount = 0;
} else if (window.obj96201_onTap_runningActionsCount == 0) {
	obj96201_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96201_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96201_onTap_activeActionGroupIndex = -1;
		$("#obj96201").trigger("obj96201_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96201) {
				console.warn("de-queueing event obj96201." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96201").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96201_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj96150 
move_96206();
function move_96206() {
	window.obj96201_onTap_runningActionsCount = obj96201_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj96150");
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
			window.obj96201_onTap_runningActionsCount = window.obj96201_onTap_runningActionsCount - 1;
if (window.obj96201_onTap_runningActionsCount < 0) {
	window.obj96201_onTap_runningActionsCount = 0;
} else if (window.obj96201_onTap_runningActionsCount == 0) {
	obj96201_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj96201_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96201_onTap_activeActionGroupIndex = -1;
		$("#obj96201").trigger("obj96201_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96201) {
				console.warn("de-queueing event obj96201." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96201").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96201_onTap_activeActionGroupIndex = 3;
	





















};
obj96193_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96193_onTap_activeActionGroupIndex = -1;
		$("#obj96193").trigger("obj96193_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96193) {
				console.warn("de-queueing event obj96193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96193_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj96193 
hide_96196();
function hide_96196() {
	var selector = "#obj96193";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96193_onTap_runningActionsCount = obj96193_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96193_onTap_runningActionsCount = window.obj96193_onTap_runningActionsCount - 1;
if (window.obj96193_onTap_runningActionsCount < 0) {
	window.obj96193_onTap_runningActionsCount = 0;
} else if (window.obj96193_onTap_runningActionsCount == 0) {
	obj96193_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96196(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96193_onTap_runningActionsCount = window.obj96193_onTap_runningActionsCount - 1;
if (window.obj96193_onTap_runningActionsCount < 0) {
	window.obj96193_onTap_runningActionsCount = 0;
} else if (window.obj96193_onTap_runningActionsCount == 0) {
	obj96193_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj96150 
playPauseMovie_96195();
function playPauseMovie_96195() {
	window.obj96193_onTap_runningActionsCount = obj96193_onTap_runningActionsCount + 1;
	var myVideo = $("#obj96150")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj96193_onTap_runningActionsCount = window.obj96193_onTap_runningActionsCount - 1;
if (window.obj96193_onTap_runningActionsCount < 0) {
	window.obj96193_onTap_runningActionsCount = 0;
} else if (window.obj96193_onTap_runningActionsCount == 0) {
	obj96193_onTap_actionGroup1();
}
}

















};
obj96193_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96193_onTap_activeActionGroupIndex = -1;
		$("#obj96193").trigger("obj96193_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96193) {
				console.warn("de-queueing event obj96193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96193_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj96201
(function(){
	window.obj96193_onTap_runningActionsCount = obj96193_onTap_runningActionsCount + 1;

	var selector = "#obj96201";
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
					window.obj96193_onTap_runningActionsCount = window.obj96193_onTap_runningActionsCount - 1;
if (window.obj96193_onTap_runningActionsCount < 0) {
	window.obj96193_onTap_runningActionsCount = 0;
} else if (window.obj96193_onTap_runningActionsCount == 0) {
	obj96193_onTap_actionGroup2();
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
				window.obj96193_onTap_runningActionsCount = window.obj96193_onTap_runningActionsCount - 1;
if (window.obj96193_onTap_runningActionsCount < 0) {
	window.obj96193_onTap_runningActionsCount = 0;
} else if (window.obj96193_onTap_runningActionsCount == 0) {
	obj96193_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96193_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96193_onTap_activeActionGroupIndex = -1;
		$("#obj96193").trigger("obj96193_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96193) {
				console.warn("de-queueing event obj96193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96193_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj96150 
move_96198();
function move_96198() {
	window.obj96193_onTap_runningActionsCount = obj96193_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj96150");
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
			window.obj96193_onTap_runningActionsCount = window.obj96193_onTap_runningActionsCount - 1;
if (window.obj96193_onTap_runningActionsCount < 0) {
	window.obj96193_onTap_runningActionsCount = 0;
} else if (window.obj96193_onTap_runningActionsCount == 0) {
	obj96193_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj96193_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96193_onTap_activeActionGroupIndex = -1;
		$("#obj96193").trigger("obj96193_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96193) {
				console.warn("de-queueing event obj96193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96193_onTap_activeActionGroupIndex = 3;
	





















};
obj96188_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96188_onTap_activeActionGroupIndex = -1;
		$("#obj96188").trigger("obj96188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96188) {
				console.warn("de-queueing event obj96188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96188_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj96152 
stopAudio_96190();
function stopAudio_96190() {
	window.obj96188_onTap_runningActionsCount = obj96188_onTap_runningActionsCount + 1;
	var myAudio = $("#obj96152")[0];
	myAudio.pause();
	window.obj96188_onTap_runningActionsCount = window.obj96188_onTap_runningActionsCount - 1;
if (window.obj96188_onTap_runningActionsCount < 0) {
	window.obj96188_onTap_runningActionsCount = 0;
} else if (window.obj96188_onTap_runningActionsCount == 0) {
	obj96188_onTap_actionGroup1();
}
}








};
obj96188_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96188_onTap_activeActionGroupIndex = -1;
		$("#obj96188").trigger("obj96188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96188) {
				console.warn("de-queueing event obj96188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96188_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj96188 
hide_96191();
function hide_96191() {
	var selector = "#obj96188";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96188_onTap_runningActionsCount = obj96188_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96188_onTap_runningActionsCount = window.obj96188_onTap_runningActionsCount - 1;
if (window.obj96188_onTap_runningActionsCount < 0) {
	window.obj96188_onTap_runningActionsCount = 0;
} else if (window.obj96188_onTap_runningActionsCount == 0) {
	obj96188_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96191(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96188_onTap_runningActionsCount = window.obj96188_onTap_runningActionsCount - 1;
if (window.obj96188_onTap_runningActionsCount < 0) {
	window.obj96188_onTap_runningActionsCount = 0;
} else if (window.obj96188_onTap_runningActionsCount == 0) {
	obj96188_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj96188_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96188_onTap_activeActionGroupIndex = -1;
		$("#obj96188").trigger("obj96188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96188) {
				console.warn("de-queueing event obj96188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96188_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj96183
(function(){
	window.obj96188_onTap_runningActionsCount = obj96188_onTap_runningActionsCount + 1;

	var selector = "#obj96183";
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
					window.obj96188_onTap_runningActionsCount = window.obj96188_onTap_runningActionsCount - 1;
if (window.obj96188_onTap_runningActionsCount < 0) {
	window.obj96188_onTap_runningActionsCount = 0;
} else if (window.obj96188_onTap_runningActionsCount == 0) {
	obj96188_onTap_actionGroup3();
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
				window.obj96188_onTap_runningActionsCount = window.obj96188_onTap_runningActionsCount - 1;
if (window.obj96188_onTap_runningActionsCount < 0) {
	window.obj96188_onTap_runningActionsCount = 0;
} else if (window.obj96188_onTap_runningActionsCount == 0) {
	obj96188_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96188_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96188_onTap_activeActionGroupIndex = -1;
		$("#obj96188").trigger("obj96188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96188) {
				console.warn("de-queueing event obj96188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96188_onTap_activeActionGroupIndex = 3;
	





















};
obj96183_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96183_onTap_activeActionGroupIndex = -1;
		$("#obj96183").trigger("obj96183_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96183) {
				console.warn("de-queueing event obj96183." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96183").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96183_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj96183 
hide_96185();
function hide_96185() {
	var selector = "#obj96183";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96183_onTap_runningActionsCount = obj96183_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96183_onTap_runningActionsCount = window.obj96183_onTap_runningActionsCount - 1;
if (window.obj96183_onTap_runningActionsCount < 0) {
	window.obj96183_onTap_runningActionsCount = 0;
} else if (window.obj96183_onTap_runningActionsCount == 0) {
	obj96183_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96185(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96183_onTap_runningActionsCount = window.obj96183_onTap_runningActionsCount - 1;
if (window.obj96183_onTap_runningActionsCount < 0) {
	window.obj96183_onTap_runningActionsCount = 0;
} else if (window.obj96183_onTap_runningActionsCount == 0) {
	obj96183_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj96183_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96183_onTap_activeActionGroupIndex = -1;
		$("#obj96183").trigger("obj96183_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96183) {
				console.warn("de-queueing event obj96183." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96183").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96183_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj96188
(function(){
	window.obj96183_onTap_runningActionsCount = obj96183_onTap_runningActionsCount + 1;

	var selector = "#obj96188";
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
					window.obj96183_onTap_runningActionsCount = window.obj96183_onTap_runningActionsCount - 1;
if (window.obj96183_onTap_runningActionsCount < 0) {
	window.obj96183_onTap_runningActionsCount = 0;
} else if (window.obj96183_onTap_runningActionsCount == 0) {
	obj96183_onTap_actionGroup2();
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
				window.obj96183_onTap_runningActionsCount = window.obj96183_onTap_runningActionsCount - 1;
if (window.obj96183_onTap_runningActionsCount < 0) {
	window.obj96183_onTap_runningActionsCount = 0;
} else if (window.obj96183_onTap_runningActionsCount == 0) {
	obj96183_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96183_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96183_onTap_activeActionGroupIndex = -1;
		$("#obj96183").trigger("obj96183_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96183) {
				console.warn("de-queueing event obj96183." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96183").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96183_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj96152 
playAudio_96187();
function playAudio_96187() {
	window.obj96183_onTap_runningActionsCount = obj96183_onTap_runningActionsCount + 1;
	var myAudio = $("#obj96152")[0];
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
		    window.obj96183_onTap_runningActionsCount = window.obj96183_onTap_runningActionsCount - 1;
if (window.obj96183_onTap_runningActionsCount < 0) {
	window.obj96183_onTap_runningActionsCount = 0;
} else if (window.obj96183_onTap_runningActionsCount == 0) {
	obj96183_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj96183_onTap_runningActionsCount = window.obj96183_onTap_runningActionsCount - 1;
if (window.obj96183_onTap_runningActionsCount < 0) {
	window.obj96183_onTap_runningActionsCount = 0;
} else if (window.obj96183_onTap_runningActionsCount == 0) {
	obj96183_onTap_actionGroup3();
}
	}
}









};
obj96183_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96183_onTap_activeActionGroupIndex = -1;
		$("#obj96183").trigger("obj96183_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96183) {
				console.warn("de-queueing event obj96183." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96183").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96183_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj96173: Event Touch Down
 *
 */
$("#obj96173").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96173_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96173_onTap is still running");
	return;
}
var obj96173_onTap_runningActionsCount = 0;
var obj96173_onTap_loopCount = 0;
obj96173_onTap_actionGroup0();
});




















/*
 *
 *   obj96211: Event Touch Down
 *
 */
$("#obj96211").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96211_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96211_onTap is still running");
	return;
}
var obj96211_onTap_runningActionsCount = 0;
var obj96211_onTap_loopCount = 0;
obj96211_onTap_actionGroup0();
});










/*
 *
 *   obj96201: Event Touch Down
 *
 */
$("#obj96201").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96201_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96201_onTap is still running");
	return;
}
var obj96201_onTap_runningActionsCount = 0;
var obj96201_onTap_loopCount = 0;
obj96201_onTap_actionGroup0();
});










/*
 *
 *   obj96193: Event Touch Down
 *
 */
$("#obj96193").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96193_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96193_onTap is still running");
	return;
}
var obj96193_onTap_runningActionsCount = 0;
var obj96193_onTap_loopCount = 0;
obj96193_onTap_actionGroup0();
});










/*
 *
 *   obj96188: Event Touch Down
 *
 */
$("#obj96188").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96188_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96188_onTap is still running");
	return;
}
var obj96188_onTap_runningActionsCount = 0;
var obj96188_onTap_loopCount = 0;
obj96188_onTap_actionGroup0();
});










/*
 *
 *   obj96183: Event Touch Down
 *
 */
$("#obj96183").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96183_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96183_onTap is still running");
	return;
}
var obj96183_onTap_runningActionsCount = 0;
var obj96183_onTap_loopCount = 0;
obj96183_onTap_actionGroup0();
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
	
$("#obj96128").trigger('SCEventShow');
$("#obj96130").trigger('SCEventShow');
$("#obj96152").trigger('SCEventShow');
$("#obj96173").trigger('SCEventShow');
$("#obj96181").trigger('SCEventShow');
$("#obj96211").trigger('SCEventShow');
$("#obj96201").trigger('SCEventShow');
$("#obj96193").trigger('SCEventShow');
$("#obj96188").trigger('SCEventShow');
$("#obj96183").trigger('SCEventShow');
$("#obj96150").trigger('SCEventShow');
	
});