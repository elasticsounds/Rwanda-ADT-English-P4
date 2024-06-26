pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 96054;
pubcoder.page.title = pubcoder.page.title || "3";
pubcoder.page.number = pubcoder.page.number || 3;
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
var obj96118_onTap_activeActionGroupIndex = -1;
var obj96118_onTap_runningActionsCount = 0;
var obj96118_onTap_loopCount = 0;
var obj96115_onTap_activeActionGroupIndex = -1;
var obj96115_onTap_runningActionsCount = 0;
var obj96115_onTap_loopCount = 0;
var obj96109_onTap_activeActionGroupIndex = -1;
var obj96109_onTap_runningActionsCount = 0;
var obj96109_onTap_loopCount = 0;
var obj96101_onTap_activeActionGroupIndex = -1;
var obj96101_onTap_runningActionsCount = 0;
var obj96101_onTap_loopCount = 0;
var obj96096_onTap_activeActionGroupIndex = -1;
var obj96096_onTap_runningActionsCount = 0;
var obj96096_onTap_loopCount = 0;
var obj96091_onTap_activeActionGroupIndex = -1;
var obj96091_onTap_runningActionsCount = 0;
var obj96091_onTap_loopCount = 0;
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
		
obj96118_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96118_onTap_activeActionGroupIndex = -1;
		$("#obj96118").trigger("obj96118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96118) {
				console.warn("de-queueing event obj96118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96118_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_96120();
function goToPage_96120() {
	window.obj96118_onTap_runningActionsCount = obj96118_onTap_runningActionsCount + 1;
	$("#anchor23")[0].click();
	window.obj96118_onTap_runningActionsCount = window.obj96118_onTap_runningActionsCount - 1;
if (window.obj96118_onTap_runningActionsCount < 0) {
	window.obj96118_onTap_runningActionsCount = 0;
} else if (window.obj96118_onTap_runningActionsCount == 0) {
	obj96118_onTap_actionGroup1();
}
}





















};
obj96118_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96118_onTap_activeActionGroupIndex = -1;
		$("#obj96118").trigger("obj96118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96118) {
				console.warn("de-queueing event obj96118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96118_onTap_activeActionGroupIndex = 1;
	





















};
obj96115_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96115_onTap_activeActionGroupIndex = -1;
		$("#obj96115").trigger("obj96115_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96115) {
				console.warn("de-queueing event obj96115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96115_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_96117();
function goToPage_96117() {
	window.obj96115_onTap_runningActionsCount = obj96115_onTap_runningActionsCount + 1;
	$("#anchor24")[0].click();
	window.obj96115_onTap_runningActionsCount = window.obj96115_onTap_runningActionsCount - 1;
if (window.obj96115_onTap_runningActionsCount < 0) {
	window.obj96115_onTap_runningActionsCount = 0;
} else if (window.obj96115_onTap_runningActionsCount == 0) {
	obj96115_onTap_actionGroup1();
}
}





















};
obj96115_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96115_onTap_activeActionGroupIndex = -1;
		$("#obj96115").trigger("obj96115_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96115) {
				console.warn("de-queueing event obj96115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96115_onTap_activeActionGroupIndex = 1;
	





















};
obj96109_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96109_onTap_activeActionGroupIndex = -1;
		$("#obj96109").trigger("obj96109_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96109) {
				console.warn("de-queueing event obj96109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96109_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj96109 
hide_96112();
function hide_96112() {
	var selector = "#obj96109";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96109_onTap_runningActionsCount = obj96109_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96109_onTap_runningActionsCount = window.obj96109_onTap_runningActionsCount - 1;
if (window.obj96109_onTap_runningActionsCount < 0) {
	window.obj96109_onTap_runningActionsCount = 0;
} else if (window.obj96109_onTap_runningActionsCount == 0) {
	obj96109_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96112(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96109_onTap_runningActionsCount = window.obj96109_onTap_runningActionsCount - 1;
if (window.obj96109_onTap_runningActionsCount < 0) {
	window.obj96109_onTap_runningActionsCount = 0;
} else if (window.obj96109_onTap_runningActionsCount == 0) {
	obj96109_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj96617 
stopMovie_96111();
function stopMovie_96111() {
	window.obj96109_onTap_runningActionsCount = obj96109_onTap_runningActionsCount + 1;
	var myVideo = $("#obj96617")[0];
	myVideo.pause();
	window.obj96109_onTap_runningActionsCount = window.obj96109_onTap_runningActionsCount - 1;
if (window.obj96109_onTap_runningActionsCount < 0) {
	window.obj96109_onTap_runningActionsCount = 0;
} else if (window.obj96109_onTap_runningActionsCount == 0) {
	obj96109_onTap_actionGroup1();
}
}
















};
obj96109_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96109_onTap_activeActionGroupIndex = -1;
		$("#obj96109").trigger("obj96109_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96109) {
				console.warn("de-queueing event obj96109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96109_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj96101
(function(){
	window.obj96109_onTap_runningActionsCount = obj96109_onTap_runningActionsCount + 1;

	var selector = "#obj96101";
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
					window.obj96109_onTap_runningActionsCount = window.obj96109_onTap_runningActionsCount - 1;
if (window.obj96109_onTap_runningActionsCount < 0) {
	window.obj96109_onTap_runningActionsCount = 0;
} else if (window.obj96109_onTap_runningActionsCount == 0) {
	obj96109_onTap_actionGroup2();
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
				window.obj96109_onTap_runningActionsCount = window.obj96109_onTap_runningActionsCount - 1;
if (window.obj96109_onTap_runningActionsCount < 0) {
	window.obj96109_onTap_runningActionsCount = 0;
} else if (window.obj96109_onTap_runningActionsCount == 0) {
	obj96109_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96109_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96109_onTap_activeActionGroupIndex = -1;
		$("#obj96109").trigger("obj96109_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96109) {
				console.warn("de-queueing event obj96109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96109_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj96617 
move_96114();
function move_96114() {
	window.obj96109_onTap_runningActionsCount = obj96109_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj96617");
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
			window.obj96109_onTap_runningActionsCount = window.obj96109_onTap_runningActionsCount - 1;
if (window.obj96109_onTap_runningActionsCount < 0) {
	window.obj96109_onTap_runningActionsCount = 0;
} else if (window.obj96109_onTap_runningActionsCount == 0) {
	obj96109_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj96109_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96109_onTap_activeActionGroupIndex = -1;
		$("#obj96109").trigger("obj96109_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96109) {
				console.warn("de-queueing event obj96109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96109_onTap_activeActionGroupIndex = 3;
	





















};
obj96101_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96101_onTap_activeActionGroupIndex = -1;
		$("#obj96101").trigger("obj96101_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96101) {
				console.warn("de-queueing event obj96101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96101_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj96101 
hide_96104();
function hide_96104() {
	var selector = "#obj96101";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96101_onTap_runningActionsCount = obj96101_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96101_onTap_runningActionsCount = window.obj96101_onTap_runningActionsCount - 1;
if (window.obj96101_onTap_runningActionsCount < 0) {
	window.obj96101_onTap_runningActionsCount = 0;
} else if (window.obj96101_onTap_runningActionsCount == 0) {
	obj96101_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96104(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96101_onTap_runningActionsCount = window.obj96101_onTap_runningActionsCount - 1;
if (window.obj96101_onTap_runningActionsCount < 0) {
	window.obj96101_onTap_runningActionsCount = 0;
} else if (window.obj96101_onTap_runningActionsCount == 0) {
	obj96101_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj96617 
playPauseMovie_96103();
function playPauseMovie_96103() {
	window.obj96101_onTap_runningActionsCount = obj96101_onTap_runningActionsCount + 1;
	var myVideo = $("#obj96617")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj96101_onTap_runningActionsCount = window.obj96101_onTap_runningActionsCount - 1;
if (window.obj96101_onTap_runningActionsCount < 0) {
	window.obj96101_onTap_runningActionsCount = 0;
} else if (window.obj96101_onTap_runningActionsCount == 0) {
	obj96101_onTap_actionGroup1();
}
}

















};
obj96101_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96101_onTap_activeActionGroupIndex = -1;
		$("#obj96101").trigger("obj96101_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96101) {
				console.warn("de-queueing event obj96101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96101_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj96109
(function(){
	window.obj96101_onTap_runningActionsCount = obj96101_onTap_runningActionsCount + 1;

	var selector = "#obj96109";
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
					window.obj96101_onTap_runningActionsCount = window.obj96101_onTap_runningActionsCount - 1;
if (window.obj96101_onTap_runningActionsCount < 0) {
	window.obj96101_onTap_runningActionsCount = 0;
} else if (window.obj96101_onTap_runningActionsCount == 0) {
	obj96101_onTap_actionGroup2();
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
				window.obj96101_onTap_runningActionsCount = window.obj96101_onTap_runningActionsCount - 1;
if (window.obj96101_onTap_runningActionsCount < 0) {
	window.obj96101_onTap_runningActionsCount = 0;
} else if (window.obj96101_onTap_runningActionsCount == 0) {
	obj96101_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96101_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96101_onTap_activeActionGroupIndex = -1;
		$("#obj96101").trigger("obj96101_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96101) {
				console.warn("de-queueing event obj96101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96101_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj96617 
move_96106();
function move_96106() {
	window.obj96101_onTap_runningActionsCount = obj96101_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj96617");
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
			window.obj96101_onTap_runningActionsCount = window.obj96101_onTap_runningActionsCount - 1;
if (window.obj96101_onTap_runningActionsCount < 0) {
	window.obj96101_onTap_runningActionsCount = 0;
} else if (window.obj96101_onTap_runningActionsCount == 0) {
	obj96101_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj96101_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96101_onTap_activeActionGroupIndex = -1;
		$("#obj96101").trigger("obj96101_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96101) {
				console.warn("de-queueing event obj96101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96101_onTap_activeActionGroupIndex = 3;
	





















};
obj96096_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96096_onTap_activeActionGroupIndex = -1;
		$("#obj96096").trigger("obj96096_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96096) {
				console.warn("de-queueing event obj96096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96096_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj96615 
stopAudio_96098();
function stopAudio_96098() {
	window.obj96096_onTap_runningActionsCount = obj96096_onTap_runningActionsCount + 1;
	var myAudio = $("#obj96615")[0];
	myAudio.pause();
	window.obj96096_onTap_runningActionsCount = window.obj96096_onTap_runningActionsCount - 1;
if (window.obj96096_onTap_runningActionsCount < 0) {
	window.obj96096_onTap_runningActionsCount = 0;
} else if (window.obj96096_onTap_runningActionsCount == 0) {
	obj96096_onTap_actionGroup1();
}
}








};
obj96096_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96096_onTap_activeActionGroupIndex = -1;
		$("#obj96096").trigger("obj96096_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96096) {
				console.warn("de-queueing event obj96096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96096_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj96096 
hide_96099();
function hide_96099() {
	var selector = "#obj96096";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96096_onTap_runningActionsCount = obj96096_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96096_onTap_runningActionsCount = window.obj96096_onTap_runningActionsCount - 1;
if (window.obj96096_onTap_runningActionsCount < 0) {
	window.obj96096_onTap_runningActionsCount = 0;
} else if (window.obj96096_onTap_runningActionsCount == 0) {
	obj96096_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96099(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96096_onTap_runningActionsCount = window.obj96096_onTap_runningActionsCount - 1;
if (window.obj96096_onTap_runningActionsCount < 0) {
	window.obj96096_onTap_runningActionsCount = 0;
} else if (window.obj96096_onTap_runningActionsCount == 0) {
	obj96096_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj96096_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96096_onTap_activeActionGroupIndex = -1;
		$("#obj96096").trigger("obj96096_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96096) {
				console.warn("de-queueing event obj96096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96096_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj96091
(function(){
	window.obj96096_onTap_runningActionsCount = obj96096_onTap_runningActionsCount + 1;

	var selector = "#obj96091";
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
					window.obj96096_onTap_runningActionsCount = window.obj96096_onTap_runningActionsCount - 1;
if (window.obj96096_onTap_runningActionsCount < 0) {
	window.obj96096_onTap_runningActionsCount = 0;
} else if (window.obj96096_onTap_runningActionsCount == 0) {
	obj96096_onTap_actionGroup3();
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
				window.obj96096_onTap_runningActionsCount = window.obj96096_onTap_runningActionsCount - 1;
if (window.obj96096_onTap_runningActionsCount < 0) {
	window.obj96096_onTap_runningActionsCount = 0;
} else if (window.obj96096_onTap_runningActionsCount == 0) {
	obj96096_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96096_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96096_onTap_activeActionGroupIndex = -1;
		$("#obj96096").trigger("obj96096_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96096) {
				console.warn("de-queueing event obj96096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96096_onTap_activeActionGroupIndex = 3;
	





















};
obj96091_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96091_onTap_activeActionGroupIndex = -1;
		$("#obj96091").trigger("obj96091_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96091) {
				console.warn("de-queueing event obj96091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96091_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj96091 
hide_96093();
function hide_96093() {
	var selector = "#obj96091";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96091_onTap_runningActionsCount = obj96091_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96091_onTap_runningActionsCount = window.obj96091_onTap_runningActionsCount - 1;
if (window.obj96091_onTap_runningActionsCount < 0) {
	window.obj96091_onTap_runningActionsCount = 0;
} else if (window.obj96091_onTap_runningActionsCount == 0) {
	obj96091_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96093(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96091_onTap_runningActionsCount = window.obj96091_onTap_runningActionsCount - 1;
if (window.obj96091_onTap_runningActionsCount < 0) {
	window.obj96091_onTap_runningActionsCount = 0;
} else if (window.obj96091_onTap_runningActionsCount == 0) {
	obj96091_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj96091_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96091_onTap_activeActionGroupIndex = -1;
		$("#obj96091").trigger("obj96091_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96091) {
				console.warn("de-queueing event obj96091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96091_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj96096
(function(){
	window.obj96091_onTap_runningActionsCount = obj96091_onTap_runningActionsCount + 1;

	var selector = "#obj96096";
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
					window.obj96091_onTap_runningActionsCount = window.obj96091_onTap_runningActionsCount - 1;
if (window.obj96091_onTap_runningActionsCount < 0) {
	window.obj96091_onTap_runningActionsCount = 0;
} else if (window.obj96091_onTap_runningActionsCount == 0) {
	obj96091_onTap_actionGroup2();
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
				window.obj96091_onTap_runningActionsCount = window.obj96091_onTap_runningActionsCount - 1;
if (window.obj96091_onTap_runningActionsCount < 0) {
	window.obj96091_onTap_runningActionsCount = 0;
} else if (window.obj96091_onTap_runningActionsCount == 0) {
	obj96091_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96091_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96091_onTap_activeActionGroupIndex = -1;
		$("#obj96091").trigger("obj96091_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96091) {
				console.warn("de-queueing event obj96091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96091_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj96615 
playAudio_96095();
function playAudio_96095() {
	window.obj96091_onTap_runningActionsCount = obj96091_onTap_runningActionsCount + 1;
	var myAudio = $("#obj96615")[0];
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
		    window.obj96091_onTap_runningActionsCount = window.obj96091_onTap_runningActionsCount - 1;
if (window.obj96091_onTap_runningActionsCount < 0) {
	window.obj96091_onTap_runningActionsCount = 0;
} else if (window.obj96091_onTap_runningActionsCount == 0) {
	obj96091_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj96091_onTap_runningActionsCount = window.obj96091_onTap_runningActionsCount - 1;
if (window.obj96091_onTap_runningActionsCount < 0) {
	window.obj96091_onTap_runningActionsCount = 0;
} else if (window.obj96091_onTap_runningActionsCount == 0) {
	obj96091_onTap_actionGroup3();
}
	}
}









};
obj96091_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96091_onTap_activeActionGroupIndex = -1;
		$("#obj96091").trigger("obj96091_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96091) {
				console.warn("de-queueing event obj96091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96091_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj96118: Event Touch Down
 *
 */
$("#obj96118").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96118_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96118_onTap is still running");
	return;
}
var obj96118_onTap_runningActionsCount = 0;
var obj96118_onTap_loopCount = 0;
obj96118_onTap_actionGroup0();
});










/*
 *
 *   obj96115: Event Touch Down
 *
 */
$("#obj96115").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96115_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96115_onTap is still running");
	return;
}
var obj96115_onTap_runningActionsCount = 0;
var obj96115_onTap_loopCount = 0;
obj96115_onTap_actionGroup0();
});










/*
 *
 *   obj96109: Event Touch Down
 *
 */
$("#obj96109").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96109_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96109_onTap is still running");
	return;
}
var obj96109_onTap_runningActionsCount = 0;
var obj96109_onTap_loopCount = 0;
obj96109_onTap_actionGroup0();
});










/*
 *
 *   obj96101: Event Touch Down
 *
 */
$("#obj96101").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96101_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96101_onTap is still running");
	return;
}
var obj96101_onTap_runningActionsCount = 0;
var obj96101_onTap_loopCount = 0;
obj96101_onTap_actionGroup0();
});










/*
 *
 *   obj96096: Event Touch Down
 *
 */
$("#obj96096").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96096_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96096_onTap is still running");
	return;
}
var obj96096_onTap_runningActionsCount = 0;
var obj96096_onTap_loopCount = 0;
obj96096_onTap_actionGroup0();
});










/*
 *
 *   obj96091: Event Touch Down
 *
 */
$("#obj96091").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96091_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96091_onTap is still running");
	return;
}
var obj96091_onTap_runningActionsCount = 0;
var obj96091_onTap_loopCount = 0;
obj96091_onTap_actionGroup0();
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
	
$("#obj96121").trigger('SCEventShow');
$("#obj96118").trigger('SCEventShow');
$("#obj96115").trigger('SCEventShow');
$("#obj96109").trigger('SCEventShow');
$("#obj96101").trigger('SCEventShow');
$("#obj96096").trigger('SCEventShow');
$("#obj96091").trigger('SCEventShow');
$("#obj96123").trigger('SCEventShow');
$("#obj96089").trigger('SCEventShow');
$("#obj96615").trigger('SCEventShow');
$("#obj96617").trigger('SCEventShow');
	
});