pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 53396;
pubcoder.page.title = pubcoder.page.title || "189";
pubcoder.page.number = pubcoder.page.number || 189;
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
var obj53410_onTap_activeActionGroupIndex = -1;
var obj53410_onTap_runningActionsCount = 0;
var obj53410_onTap_loopCount = 0;
var obj53407_onTap_activeActionGroupIndex = -1;
var obj53407_onTap_runningActionsCount = 0;
var obj53407_onTap_loopCount = 0;
var obj68046_onTap_activeActionGroupIndex = -1;
var obj68046_onTap_runningActionsCount = 0;
var obj68046_onTap_loopCount = 0;
var obj68038_onTap_activeActionGroupIndex = -1;
var obj68038_onTap_runningActionsCount = 0;
var obj68038_onTap_loopCount = 0;
var obj89149_onTap_activeActionGroupIndex = -1;
var obj89149_onTap_runningActionsCount = 0;
var obj89149_onTap_loopCount = 0;
var obj89144_onTap_activeActionGroupIndex = -1;
var obj89144_onTap_runningActionsCount = 0;
var obj89144_onTap_loopCount = 0;
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
		
obj53410_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53410_onTap_activeActionGroupIndex = -1;
		$("#obj53410").trigger("obj53410_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53410) {
				console.warn("de-queueing event obj53410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53410_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53412();
function goToPage_53412() {
	window.obj53410_onTap_runningActionsCount = obj53410_onTap_runningActionsCount + 1;
	$("#anchor1114")[0].click();
	window.obj53410_onTap_runningActionsCount = window.obj53410_onTap_runningActionsCount - 1;
if (window.obj53410_onTap_runningActionsCount < 0) {
	window.obj53410_onTap_runningActionsCount = 0;
} else if (window.obj53410_onTap_runningActionsCount == 0) {
	obj53410_onTap_actionGroup1();
}
}





















};
obj53410_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53410_onTap_activeActionGroupIndex = -1;
		$("#obj53410").trigger("obj53410_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53410) {
				console.warn("de-queueing event obj53410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53410_onTap_activeActionGroupIndex = 1;
	





















};
obj53407_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53407_onTap_activeActionGroupIndex = -1;
		$("#obj53407").trigger("obj53407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53407) {
				console.warn("de-queueing event obj53407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53407_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53409();
function goToPage_53409() {
	window.obj53407_onTap_runningActionsCount = obj53407_onTap_runningActionsCount + 1;
	$("#anchor1115")[0].click();
	window.obj53407_onTap_runningActionsCount = window.obj53407_onTap_runningActionsCount - 1;
if (window.obj53407_onTap_runningActionsCount < 0) {
	window.obj53407_onTap_runningActionsCount = 0;
} else if (window.obj53407_onTap_runningActionsCount == 0) {
	obj53407_onTap_actionGroup1();
}
}





















};
obj53407_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53407_onTap_activeActionGroupIndex = -1;
		$("#obj53407").trigger("obj53407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53407) {
				console.warn("de-queueing event obj53407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53407_onTap_activeActionGroupIndex = 1;
	





















};
obj68046_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68046_onTap_activeActionGroupIndex = -1;
		$("#obj68046").trigger("obj68046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68046) {
				console.warn("de-queueing event obj68046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68046_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68046 
hide_68049();
function hide_68049() {
	var selector = "#obj68046";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68046_onTap_runningActionsCount = obj68046_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68046_onTap_runningActionsCount = window.obj68046_onTap_runningActionsCount - 1;
if (window.obj68046_onTap_runningActionsCount < 0) {
	window.obj68046_onTap_runningActionsCount = 0;
} else if (window.obj68046_onTap_runningActionsCount == 0) {
	obj68046_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68049(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68046_onTap_runningActionsCount = window.obj68046_onTap_runningActionsCount - 1;
if (window.obj68046_onTap_runningActionsCount < 0) {
	window.obj68046_onTap_runningActionsCount = 0;
} else if (window.obj68046_onTap_runningActionsCount == 0) {
	obj68046_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68052 
stopMovie_68048();
function stopMovie_68048() {
	window.obj68046_onTap_runningActionsCount = obj68046_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68052")[0];
	myVideo.pause();
	window.obj68046_onTap_runningActionsCount = window.obj68046_onTap_runningActionsCount - 1;
if (window.obj68046_onTap_runningActionsCount < 0) {
	window.obj68046_onTap_runningActionsCount = 0;
} else if (window.obj68046_onTap_runningActionsCount == 0) {
	obj68046_onTap_actionGroup1();
}
}
















};
obj68046_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68046_onTap_activeActionGroupIndex = -1;
		$("#obj68046").trigger("obj68046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68046) {
				console.warn("de-queueing event obj68046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68046_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68038
(function(){
	window.obj68046_onTap_runningActionsCount = obj68046_onTap_runningActionsCount + 1;

	var selector = "#obj68038";
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
					window.obj68046_onTap_runningActionsCount = window.obj68046_onTap_runningActionsCount - 1;
if (window.obj68046_onTap_runningActionsCount < 0) {
	window.obj68046_onTap_runningActionsCount = 0;
} else if (window.obj68046_onTap_runningActionsCount == 0) {
	obj68046_onTap_actionGroup2();
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
				window.obj68046_onTap_runningActionsCount = window.obj68046_onTap_runningActionsCount - 1;
if (window.obj68046_onTap_runningActionsCount < 0) {
	window.obj68046_onTap_runningActionsCount = 0;
} else if (window.obj68046_onTap_runningActionsCount == 0) {
	obj68046_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68046_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68046_onTap_activeActionGroupIndex = -1;
		$("#obj68046").trigger("obj68046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68046) {
				console.warn("de-queueing event obj68046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68046_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68052 
move_68051();
function move_68051() {
	window.obj68046_onTap_runningActionsCount = obj68046_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68052");
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
			window.obj68046_onTap_runningActionsCount = window.obj68046_onTap_runningActionsCount - 1;
if (window.obj68046_onTap_runningActionsCount < 0) {
	window.obj68046_onTap_runningActionsCount = 0;
} else if (window.obj68046_onTap_runningActionsCount == 0) {
	obj68046_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68046_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68046_onTap_activeActionGroupIndex = -1;
		$("#obj68046").trigger("obj68046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68046) {
				console.warn("de-queueing event obj68046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68046_onTap_activeActionGroupIndex = 3;
	





















};
obj68038_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68038_onTap_activeActionGroupIndex = -1;
		$("#obj68038").trigger("obj68038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68038) {
				console.warn("de-queueing event obj68038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68038_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68038 
hide_68041();
function hide_68041() {
	var selector = "#obj68038";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68038_onTap_runningActionsCount = obj68038_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68038_onTap_runningActionsCount = window.obj68038_onTap_runningActionsCount - 1;
if (window.obj68038_onTap_runningActionsCount < 0) {
	window.obj68038_onTap_runningActionsCount = 0;
} else if (window.obj68038_onTap_runningActionsCount == 0) {
	obj68038_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68041(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68038_onTap_runningActionsCount = window.obj68038_onTap_runningActionsCount - 1;
if (window.obj68038_onTap_runningActionsCount < 0) {
	window.obj68038_onTap_runningActionsCount = 0;
} else if (window.obj68038_onTap_runningActionsCount == 0) {
	obj68038_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68052 
playPauseMovie_68040();
function playPauseMovie_68040() {
	window.obj68038_onTap_runningActionsCount = obj68038_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68052")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68038_onTap_runningActionsCount = window.obj68038_onTap_runningActionsCount - 1;
if (window.obj68038_onTap_runningActionsCount < 0) {
	window.obj68038_onTap_runningActionsCount = 0;
} else if (window.obj68038_onTap_runningActionsCount == 0) {
	obj68038_onTap_actionGroup1();
}
}

















};
obj68038_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68038_onTap_activeActionGroupIndex = -1;
		$("#obj68038").trigger("obj68038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68038) {
				console.warn("de-queueing event obj68038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68038_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68046
(function(){
	window.obj68038_onTap_runningActionsCount = obj68038_onTap_runningActionsCount + 1;

	var selector = "#obj68046";
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
					window.obj68038_onTap_runningActionsCount = window.obj68038_onTap_runningActionsCount - 1;
if (window.obj68038_onTap_runningActionsCount < 0) {
	window.obj68038_onTap_runningActionsCount = 0;
} else if (window.obj68038_onTap_runningActionsCount == 0) {
	obj68038_onTap_actionGroup2();
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
				window.obj68038_onTap_runningActionsCount = window.obj68038_onTap_runningActionsCount - 1;
if (window.obj68038_onTap_runningActionsCount < 0) {
	window.obj68038_onTap_runningActionsCount = 0;
} else if (window.obj68038_onTap_runningActionsCount == 0) {
	obj68038_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68038_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68038_onTap_activeActionGroupIndex = -1;
		$("#obj68038").trigger("obj68038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68038) {
				console.warn("de-queueing event obj68038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68038_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68052 
move_68043();
function move_68043() {
	window.obj68038_onTap_runningActionsCount = obj68038_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68052");
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
			window.obj68038_onTap_runningActionsCount = window.obj68038_onTap_runningActionsCount - 1;
if (window.obj68038_onTap_runningActionsCount < 0) {
	window.obj68038_onTap_runningActionsCount = 0;
} else if (window.obj68038_onTap_runningActionsCount == 0) {
	obj68038_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68038_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68038_onTap_activeActionGroupIndex = -1;
		$("#obj68038").trigger("obj68038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68038) {
				console.warn("de-queueing event obj68038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68038_onTap_activeActionGroupIndex = 3;
	





















};
obj89149_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89149_onTap_activeActionGroupIndex = -1;
		$("#obj89149").trigger("obj89149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89149) {
				console.warn("de-queueing event obj89149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89149_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89154 
stopAudio_89151();
function stopAudio_89151() {
	window.obj89149_onTap_runningActionsCount = obj89149_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89154")[0];
	myAudio.pause();
	window.obj89149_onTap_runningActionsCount = window.obj89149_onTap_runningActionsCount - 1;
if (window.obj89149_onTap_runningActionsCount < 0) {
	window.obj89149_onTap_runningActionsCount = 0;
} else if (window.obj89149_onTap_runningActionsCount == 0) {
	obj89149_onTap_actionGroup1();
}
}








};
obj89149_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89149_onTap_activeActionGroupIndex = -1;
		$("#obj89149").trigger("obj89149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89149) {
				console.warn("de-queueing event obj89149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89149_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89149 
hide_89152();
function hide_89152() {
	var selector = "#obj89149";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89149_onTap_runningActionsCount = obj89149_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89149_onTap_runningActionsCount = window.obj89149_onTap_runningActionsCount - 1;
if (window.obj89149_onTap_runningActionsCount < 0) {
	window.obj89149_onTap_runningActionsCount = 0;
} else if (window.obj89149_onTap_runningActionsCount == 0) {
	obj89149_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89152(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89149_onTap_runningActionsCount = window.obj89149_onTap_runningActionsCount - 1;
if (window.obj89149_onTap_runningActionsCount < 0) {
	window.obj89149_onTap_runningActionsCount = 0;
} else if (window.obj89149_onTap_runningActionsCount == 0) {
	obj89149_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89149_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89149_onTap_activeActionGroupIndex = -1;
		$("#obj89149").trigger("obj89149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89149) {
				console.warn("de-queueing event obj89149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89149_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89144
(function(){
	window.obj89149_onTap_runningActionsCount = obj89149_onTap_runningActionsCount + 1;

	var selector = "#obj89144";
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
					window.obj89149_onTap_runningActionsCount = window.obj89149_onTap_runningActionsCount - 1;
if (window.obj89149_onTap_runningActionsCount < 0) {
	window.obj89149_onTap_runningActionsCount = 0;
} else if (window.obj89149_onTap_runningActionsCount == 0) {
	obj89149_onTap_actionGroup3();
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
				window.obj89149_onTap_runningActionsCount = window.obj89149_onTap_runningActionsCount - 1;
if (window.obj89149_onTap_runningActionsCount < 0) {
	window.obj89149_onTap_runningActionsCount = 0;
} else if (window.obj89149_onTap_runningActionsCount == 0) {
	obj89149_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89149_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89149_onTap_activeActionGroupIndex = -1;
		$("#obj89149").trigger("obj89149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89149) {
				console.warn("de-queueing event obj89149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89149_onTap_activeActionGroupIndex = 3;
	





















};
obj89144_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89144_onTap_activeActionGroupIndex = -1;
		$("#obj89144").trigger("obj89144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89144) {
				console.warn("de-queueing event obj89144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89144_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89144 
hide_89146();
function hide_89146() {
	var selector = "#obj89144";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89144_onTap_runningActionsCount = obj89144_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89144_onTap_runningActionsCount = window.obj89144_onTap_runningActionsCount - 1;
if (window.obj89144_onTap_runningActionsCount < 0) {
	window.obj89144_onTap_runningActionsCount = 0;
} else if (window.obj89144_onTap_runningActionsCount == 0) {
	obj89144_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89146(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89144_onTap_runningActionsCount = window.obj89144_onTap_runningActionsCount - 1;
if (window.obj89144_onTap_runningActionsCount < 0) {
	window.obj89144_onTap_runningActionsCount = 0;
} else if (window.obj89144_onTap_runningActionsCount == 0) {
	obj89144_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89144_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89144_onTap_activeActionGroupIndex = -1;
		$("#obj89144").trigger("obj89144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89144) {
				console.warn("de-queueing event obj89144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89144_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89149
(function(){
	window.obj89144_onTap_runningActionsCount = obj89144_onTap_runningActionsCount + 1;

	var selector = "#obj89149";
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
					window.obj89144_onTap_runningActionsCount = window.obj89144_onTap_runningActionsCount - 1;
if (window.obj89144_onTap_runningActionsCount < 0) {
	window.obj89144_onTap_runningActionsCount = 0;
} else if (window.obj89144_onTap_runningActionsCount == 0) {
	obj89144_onTap_actionGroup2();
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
				window.obj89144_onTap_runningActionsCount = window.obj89144_onTap_runningActionsCount - 1;
if (window.obj89144_onTap_runningActionsCount < 0) {
	window.obj89144_onTap_runningActionsCount = 0;
} else if (window.obj89144_onTap_runningActionsCount == 0) {
	obj89144_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89144_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89144_onTap_activeActionGroupIndex = -1;
		$("#obj89144").trigger("obj89144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89144) {
				console.warn("de-queueing event obj89144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89144_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89154 
playAudio_89148();
function playAudio_89148() {
	window.obj89144_onTap_runningActionsCount = obj89144_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89154")[0];
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
		    window.obj89144_onTap_runningActionsCount = window.obj89144_onTap_runningActionsCount - 1;
if (window.obj89144_onTap_runningActionsCount < 0) {
	window.obj89144_onTap_runningActionsCount = 0;
} else if (window.obj89144_onTap_runningActionsCount == 0) {
	obj89144_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89144_onTap_runningActionsCount = window.obj89144_onTap_runningActionsCount - 1;
if (window.obj89144_onTap_runningActionsCount < 0) {
	window.obj89144_onTap_runningActionsCount = 0;
} else if (window.obj89144_onTap_runningActionsCount == 0) {
	obj89144_onTap_actionGroup3();
}
	}
}









};
obj89144_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89144_onTap_activeActionGroupIndex = -1;
		$("#obj89144").trigger("obj89144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89144) {
				console.warn("de-queueing event obj89144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89144_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj53410: Event Touch Down
 *
 */
$("#obj53410").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53410_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53410_onTap is still running");
	return;
}
var obj53410_onTap_runningActionsCount = 0;
var obj53410_onTap_loopCount = 0;
obj53410_onTap_actionGroup0();
});










/*
 *
 *   obj53407: Event Touch Down
 *
 */
$("#obj53407").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53407_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53407_onTap is still running");
	return;
}
var obj53407_onTap_runningActionsCount = 0;
var obj53407_onTap_loopCount = 0;
obj53407_onTap_actionGroup0();
});




























































/*
 *
 *   obj68046: Event Touch Down
 *
 */
$("#obj68046").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68046_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68046_onTap is still running");
	return;
}
var obj68046_onTap_runningActionsCount = 0;
var obj68046_onTap_loopCount = 0;
obj68046_onTap_actionGroup0();
});










/*
 *
 *   obj68038: Event Touch Down
 *
 */
$("#obj68038").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68038_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68038_onTap is still running");
	return;
}
var obj68038_onTap_runningActionsCount = 0;
var obj68038_onTap_loopCount = 0;
obj68038_onTap_actionGroup0();
});










/*
 *
 *   obj89149: Event Touch Down
 *
 */
$("#obj89149").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89149_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89149_onTap is still running");
	return;
}
var obj89149_onTap_runningActionsCount = 0;
var obj89149_onTap_loopCount = 0;
obj89149_onTap_actionGroup0();
});










/*
 *
 *   obj89144: Event Touch Down
 *
 */
$("#obj89144").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89144_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89144_onTap is still running");
	return;
}
var obj89144_onTap_runningActionsCount = 0;
var obj89144_onTap_loopCount = 0;
obj89144_onTap_actionGroup0();
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
	
$("#obj53426").trigger('SCEventShow');
$("#obj53410").trigger('SCEventShow');
$("#obj53407").trigger('SCEventShow');
$("#obj53405").trigger('SCEventShow');
$("#obj53403").trigger('SCEventShow');
$("#obj53401").trigger('SCEventShow');
$("#obj53399").trigger('SCEventShow');
$("#obj53431").trigger('SCEventShow');
$("#obj68046").trigger('SCEventShow');
$("#obj68038").trigger('SCEventShow');
$("#obj89149").trigger('SCEventShow');
$("#obj89144").trigger('SCEventShow');
$("#obj89154").trigger('SCEventShow');
$("#obj95007").trigger('SCEventShow');
$("#obj68052").trigger('SCEventShow');
	
});