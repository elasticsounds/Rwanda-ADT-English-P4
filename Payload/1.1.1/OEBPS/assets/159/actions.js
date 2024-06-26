pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 46110;
pubcoder.page.title = pubcoder.page.title || "159";
pubcoder.page.number = pubcoder.page.number || 159;
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
var obj46116_onTap_activeActionGroupIndex = -1;
var obj46116_onTap_runningActionsCount = 0;
var obj46116_onTap_loopCount = 0;
var obj46113_onTap_activeActionGroupIndex = -1;
var obj46113_onTap_runningActionsCount = 0;
var obj46113_onTap_loopCount = 0;
var obj67550_onTap_activeActionGroupIndex = -1;
var obj67550_onTap_runningActionsCount = 0;
var obj67550_onTap_loopCount = 0;
var obj67542_onTap_activeActionGroupIndex = -1;
var obj67542_onTap_runningActionsCount = 0;
var obj67542_onTap_loopCount = 0;
var obj88789_onTap_activeActionGroupIndex = -1;
var obj88789_onTap_runningActionsCount = 0;
var obj88789_onTap_loopCount = 0;
var obj88784_onTap_activeActionGroupIndex = -1;
var obj88784_onTap_runningActionsCount = 0;
var obj88784_onTap_loopCount = 0;
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
		
obj46116_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46116_onTap_activeActionGroupIndex = -1;
		$("#obj46116").trigger("obj46116_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46116) {
				console.warn("de-queueing event obj46116." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46116").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46116_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46118();
function goToPage_46118() {
	window.obj46116_onTap_runningActionsCount = obj46116_onTap_runningActionsCount + 1;
	$("#anchor940")[0].click();
	window.obj46116_onTap_runningActionsCount = window.obj46116_onTap_runningActionsCount - 1;
if (window.obj46116_onTap_runningActionsCount < 0) {
	window.obj46116_onTap_runningActionsCount = 0;
} else if (window.obj46116_onTap_runningActionsCount == 0) {
	obj46116_onTap_actionGroup1();
}
}





















};
obj46116_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46116_onTap_activeActionGroupIndex = -1;
		$("#obj46116").trigger("obj46116_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46116) {
				console.warn("de-queueing event obj46116." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46116").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46116_onTap_activeActionGroupIndex = 1;
	





















};
obj46113_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46113_onTap_activeActionGroupIndex = -1;
		$("#obj46113").trigger("obj46113_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46113) {
				console.warn("de-queueing event obj46113." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46113").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46113_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46115();
function goToPage_46115() {
	window.obj46113_onTap_runningActionsCount = obj46113_onTap_runningActionsCount + 1;
	$("#anchor941")[0].click();
	window.obj46113_onTap_runningActionsCount = window.obj46113_onTap_runningActionsCount - 1;
if (window.obj46113_onTap_runningActionsCount < 0) {
	window.obj46113_onTap_runningActionsCount = 0;
} else if (window.obj46113_onTap_runningActionsCount == 0) {
	obj46113_onTap_actionGroup1();
}
}





















};
obj46113_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46113_onTap_activeActionGroupIndex = -1;
		$("#obj46113").trigger("obj46113_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46113) {
				console.warn("de-queueing event obj46113." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46113").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46113_onTap_activeActionGroupIndex = 1;
	





















};
obj67550_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67550_onTap_activeActionGroupIndex = -1;
		$("#obj67550").trigger("obj67550_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67550) {
				console.warn("de-queueing event obj67550." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67550").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67550_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67550 
hide_67553();
function hide_67553() {
	var selector = "#obj67550";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67550_onTap_runningActionsCount = obj67550_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67550_onTap_runningActionsCount = window.obj67550_onTap_runningActionsCount - 1;
if (window.obj67550_onTap_runningActionsCount < 0) {
	window.obj67550_onTap_runningActionsCount = 0;
} else if (window.obj67550_onTap_runningActionsCount == 0) {
	obj67550_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67553(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67550_onTap_runningActionsCount = window.obj67550_onTap_runningActionsCount - 1;
if (window.obj67550_onTap_runningActionsCount < 0) {
	window.obj67550_onTap_runningActionsCount = 0;
} else if (window.obj67550_onTap_runningActionsCount == 0) {
	obj67550_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67556 
stopMovie_67552();
function stopMovie_67552() {
	window.obj67550_onTap_runningActionsCount = obj67550_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67556")[0];
	myVideo.pause();
	window.obj67550_onTap_runningActionsCount = window.obj67550_onTap_runningActionsCount - 1;
if (window.obj67550_onTap_runningActionsCount < 0) {
	window.obj67550_onTap_runningActionsCount = 0;
} else if (window.obj67550_onTap_runningActionsCount == 0) {
	obj67550_onTap_actionGroup1();
}
}
















};
obj67550_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67550_onTap_activeActionGroupIndex = -1;
		$("#obj67550").trigger("obj67550_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67550) {
				console.warn("de-queueing event obj67550." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67550").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67550_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67542
(function(){
	window.obj67550_onTap_runningActionsCount = obj67550_onTap_runningActionsCount + 1;

	var selector = "#obj67542";
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
					window.obj67550_onTap_runningActionsCount = window.obj67550_onTap_runningActionsCount - 1;
if (window.obj67550_onTap_runningActionsCount < 0) {
	window.obj67550_onTap_runningActionsCount = 0;
} else if (window.obj67550_onTap_runningActionsCount == 0) {
	obj67550_onTap_actionGroup2();
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
				window.obj67550_onTap_runningActionsCount = window.obj67550_onTap_runningActionsCount - 1;
if (window.obj67550_onTap_runningActionsCount < 0) {
	window.obj67550_onTap_runningActionsCount = 0;
} else if (window.obj67550_onTap_runningActionsCount == 0) {
	obj67550_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67550_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67550_onTap_activeActionGroupIndex = -1;
		$("#obj67550").trigger("obj67550_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67550) {
				console.warn("de-queueing event obj67550." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67550").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67550_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67556 
move_67555();
function move_67555() {
	window.obj67550_onTap_runningActionsCount = obj67550_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67556");
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
			window.obj67550_onTap_runningActionsCount = window.obj67550_onTap_runningActionsCount - 1;
if (window.obj67550_onTap_runningActionsCount < 0) {
	window.obj67550_onTap_runningActionsCount = 0;
} else if (window.obj67550_onTap_runningActionsCount == 0) {
	obj67550_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67550_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67550_onTap_activeActionGroupIndex = -1;
		$("#obj67550").trigger("obj67550_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67550) {
				console.warn("de-queueing event obj67550." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67550").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67550_onTap_activeActionGroupIndex = 3;
	





















};
obj67542_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67542_onTap_activeActionGroupIndex = -1;
		$("#obj67542").trigger("obj67542_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67542) {
				console.warn("de-queueing event obj67542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67542_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67542 
hide_67545();
function hide_67545() {
	var selector = "#obj67542";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67542_onTap_runningActionsCount = obj67542_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67542_onTap_runningActionsCount = window.obj67542_onTap_runningActionsCount - 1;
if (window.obj67542_onTap_runningActionsCount < 0) {
	window.obj67542_onTap_runningActionsCount = 0;
} else if (window.obj67542_onTap_runningActionsCount == 0) {
	obj67542_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67545(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67542_onTap_runningActionsCount = window.obj67542_onTap_runningActionsCount - 1;
if (window.obj67542_onTap_runningActionsCount < 0) {
	window.obj67542_onTap_runningActionsCount = 0;
} else if (window.obj67542_onTap_runningActionsCount == 0) {
	obj67542_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67556 
playPauseMovie_67544();
function playPauseMovie_67544() {
	window.obj67542_onTap_runningActionsCount = obj67542_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67556")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67542_onTap_runningActionsCount = window.obj67542_onTap_runningActionsCount - 1;
if (window.obj67542_onTap_runningActionsCount < 0) {
	window.obj67542_onTap_runningActionsCount = 0;
} else if (window.obj67542_onTap_runningActionsCount == 0) {
	obj67542_onTap_actionGroup1();
}
}

















};
obj67542_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67542_onTap_activeActionGroupIndex = -1;
		$("#obj67542").trigger("obj67542_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67542) {
				console.warn("de-queueing event obj67542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67542_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67550
(function(){
	window.obj67542_onTap_runningActionsCount = obj67542_onTap_runningActionsCount + 1;

	var selector = "#obj67550";
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
					window.obj67542_onTap_runningActionsCount = window.obj67542_onTap_runningActionsCount - 1;
if (window.obj67542_onTap_runningActionsCount < 0) {
	window.obj67542_onTap_runningActionsCount = 0;
} else if (window.obj67542_onTap_runningActionsCount == 0) {
	obj67542_onTap_actionGroup2();
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
				window.obj67542_onTap_runningActionsCount = window.obj67542_onTap_runningActionsCount - 1;
if (window.obj67542_onTap_runningActionsCount < 0) {
	window.obj67542_onTap_runningActionsCount = 0;
} else if (window.obj67542_onTap_runningActionsCount == 0) {
	obj67542_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67542_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67542_onTap_activeActionGroupIndex = -1;
		$("#obj67542").trigger("obj67542_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67542) {
				console.warn("de-queueing event obj67542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67542_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67556 
move_67547();
function move_67547() {
	window.obj67542_onTap_runningActionsCount = obj67542_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67556");
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
			window.obj67542_onTap_runningActionsCount = window.obj67542_onTap_runningActionsCount - 1;
if (window.obj67542_onTap_runningActionsCount < 0) {
	window.obj67542_onTap_runningActionsCount = 0;
} else if (window.obj67542_onTap_runningActionsCount == 0) {
	obj67542_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67542_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67542_onTap_activeActionGroupIndex = -1;
		$("#obj67542").trigger("obj67542_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67542) {
				console.warn("de-queueing event obj67542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67542_onTap_activeActionGroupIndex = 3;
	





















};
obj88789_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88789_onTap_activeActionGroupIndex = -1;
		$("#obj88789").trigger("obj88789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88789) {
				console.warn("de-queueing event obj88789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88789_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88794 
stopAudio_88791();
function stopAudio_88791() {
	window.obj88789_onTap_runningActionsCount = obj88789_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88794")[0];
	myAudio.pause();
	window.obj88789_onTap_runningActionsCount = window.obj88789_onTap_runningActionsCount - 1;
if (window.obj88789_onTap_runningActionsCount < 0) {
	window.obj88789_onTap_runningActionsCount = 0;
} else if (window.obj88789_onTap_runningActionsCount == 0) {
	obj88789_onTap_actionGroup1();
}
}








};
obj88789_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88789_onTap_activeActionGroupIndex = -1;
		$("#obj88789").trigger("obj88789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88789) {
				console.warn("de-queueing event obj88789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88789_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88789 
hide_88792();
function hide_88792() {
	var selector = "#obj88789";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88789_onTap_runningActionsCount = obj88789_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88789_onTap_runningActionsCount = window.obj88789_onTap_runningActionsCount - 1;
if (window.obj88789_onTap_runningActionsCount < 0) {
	window.obj88789_onTap_runningActionsCount = 0;
} else if (window.obj88789_onTap_runningActionsCount == 0) {
	obj88789_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88792(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88789_onTap_runningActionsCount = window.obj88789_onTap_runningActionsCount - 1;
if (window.obj88789_onTap_runningActionsCount < 0) {
	window.obj88789_onTap_runningActionsCount = 0;
} else if (window.obj88789_onTap_runningActionsCount == 0) {
	obj88789_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88789_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88789_onTap_activeActionGroupIndex = -1;
		$("#obj88789").trigger("obj88789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88789) {
				console.warn("de-queueing event obj88789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88789_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88784
(function(){
	window.obj88789_onTap_runningActionsCount = obj88789_onTap_runningActionsCount + 1;

	var selector = "#obj88784";
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
					window.obj88789_onTap_runningActionsCount = window.obj88789_onTap_runningActionsCount - 1;
if (window.obj88789_onTap_runningActionsCount < 0) {
	window.obj88789_onTap_runningActionsCount = 0;
} else if (window.obj88789_onTap_runningActionsCount == 0) {
	obj88789_onTap_actionGroup3();
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
				window.obj88789_onTap_runningActionsCount = window.obj88789_onTap_runningActionsCount - 1;
if (window.obj88789_onTap_runningActionsCount < 0) {
	window.obj88789_onTap_runningActionsCount = 0;
} else if (window.obj88789_onTap_runningActionsCount == 0) {
	obj88789_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88789_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88789_onTap_activeActionGroupIndex = -1;
		$("#obj88789").trigger("obj88789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88789) {
				console.warn("de-queueing event obj88789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88789_onTap_activeActionGroupIndex = 3;
	





















};
obj88784_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88784_onTap_activeActionGroupIndex = -1;
		$("#obj88784").trigger("obj88784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88784) {
				console.warn("de-queueing event obj88784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88784_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88784 
hide_88786();
function hide_88786() {
	var selector = "#obj88784";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88784_onTap_runningActionsCount = obj88784_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88784_onTap_runningActionsCount = window.obj88784_onTap_runningActionsCount - 1;
if (window.obj88784_onTap_runningActionsCount < 0) {
	window.obj88784_onTap_runningActionsCount = 0;
} else if (window.obj88784_onTap_runningActionsCount == 0) {
	obj88784_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88786(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88784_onTap_runningActionsCount = window.obj88784_onTap_runningActionsCount - 1;
if (window.obj88784_onTap_runningActionsCount < 0) {
	window.obj88784_onTap_runningActionsCount = 0;
} else if (window.obj88784_onTap_runningActionsCount == 0) {
	obj88784_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88784_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88784_onTap_activeActionGroupIndex = -1;
		$("#obj88784").trigger("obj88784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88784) {
				console.warn("de-queueing event obj88784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88784_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88789
(function(){
	window.obj88784_onTap_runningActionsCount = obj88784_onTap_runningActionsCount + 1;

	var selector = "#obj88789";
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
					window.obj88784_onTap_runningActionsCount = window.obj88784_onTap_runningActionsCount - 1;
if (window.obj88784_onTap_runningActionsCount < 0) {
	window.obj88784_onTap_runningActionsCount = 0;
} else if (window.obj88784_onTap_runningActionsCount == 0) {
	obj88784_onTap_actionGroup2();
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
				window.obj88784_onTap_runningActionsCount = window.obj88784_onTap_runningActionsCount - 1;
if (window.obj88784_onTap_runningActionsCount < 0) {
	window.obj88784_onTap_runningActionsCount = 0;
} else if (window.obj88784_onTap_runningActionsCount == 0) {
	obj88784_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88784_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88784_onTap_activeActionGroupIndex = -1;
		$("#obj88784").trigger("obj88784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88784) {
				console.warn("de-queueing event obj88784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88784_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88794 
playAudio_88788();
function playAudio_88788() {
	window.obj88784_onTap_runningActionsCount = obj88784_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88794")[0];
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
		    window.obj88784_onTap_runningActionsCount = window.obj88784_onTap_runningActionsCount - 1;
if (window.obj88784_onTap_runningActionsCount < 0) {
	window.obj88784_onTap_runningActionsCount = 0;
} else if (window.obj88784_onTap_runningActionsCount == 0) {
	obj88784_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88784_onTap_runningActionsCount = window.obj88784_onTap_runningActionsCount - 1;
if (window.obj88784_onTap_runningActionsCount < 0) {
	window.obj88784_onTap_runningActionsCount = 0;
} else if (window.obj88784_onTap_runningActionsCount == 0) {
	obj88784_onTap_actionGroup3();
}
	}
}









};
obj88784_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88784_onTap_activeActionGroupIndex = -1;
		$("#obj88784").trigger("obj88784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88784) {
				console.warn("de-queueing event obj88784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88784_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj46116: Event Touch Down
 *
 */
$("#obj46116").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46116_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46116_onTap is still running");
	return;
}
var obj46116_onTap_runningActionsCount = 0;
var obj46116_onTap_loopCount = 0;
obj46116_onTap_actionGroup0();
});










/*
 *
 *   obj46113: Event Touch Down
 *
 */
$("#obj46113").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46113_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46113_onTap is still running");
	return;
}
var obj46113_onTap_runningActionsCount = 0;
var obj46113_onTap_loopCount = 0;
obj46113_onTap_actionGroup0();
});
















































































/*
 *
 *   obj67550: Event Touch Down
 *
 */
$("#obj67550").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67550_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67550_onTap is still running");
	return;
}
var obj67550_onTap_runningActionsCount = 0;
var obj67550_onTap_loopCount = 0;
obj67550_onTap_actionGroup0();
});










/*
 *
 *   obj67542: Event Touch Down
 *
 */
$("#obj67542").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67542_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67542_onTap is still running");
	return;
}
var obj67542_onTap_runningActionsCount = 0;
var obj67542_onTap_loopCount = 0;
obj67542_onTap_actionGroup0();
});










/*
 *
 *   obj88789: Event Touch Down
 *
 */
$("#obj88789").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88789_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88789_onTap is still running");
	return;
}
var obj88789_onTap_runningActionsCount = 0;
var obj88789_onTap_loopCount = 0;
obj88789_onTap_actionGroup0();
});










/*
 *
 *   obj88784: Event Touch Down
 *
 */
$("#obj88784").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88784_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88784_onTap is still running");
	return;
}
var obj88784_onTap_runningActionsCount = 0;
var obj88784_onTap_loopCount = 0;
obj88784_onTap_actionGroup0();
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
	
$("#obj46111").trigger('SCEventShow');
$("#obj46116").trigger('SCEventShow');
$("#obj46113").trigger('SCEventShow');
$("#obj46132").trigger('SCEventShow');
$("#obj46135").trigger('SCEventShow');
$("#obj46138").trigger('SCEventShow');
$("#obj46141").trigger('SCEventShow');
$("#obj46143").trigger('SCEventShow');
$("#obj46145").trigger('SCEventShow');
$("#obj46147").trigger('SCEventShow');
$("#obj67550").trigger('SCEventShow');
$("#obj67542").trigger('SCEventShow');
$("#obj88789").trigger('SCEventShow');
$("#obj88784").trigger('SCEventShow');
$("#obj88794").trigger('SCEventShow');
$("#obj94947").trigger('SCEventShow');
$("#obj67556").trigger('SCEventShow');
	
});