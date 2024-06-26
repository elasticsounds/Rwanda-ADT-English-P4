pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 48723;
pubcoder.page.title = pubcoder.page.title || "172";
pubcoder.page.number = pubcoder.page.number || 172;
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
var obj48739_onTap_activeActionGroupIndex = -1;
var obj48739_onTap_runningActionsCount = 0;
var obj48739_onTap_loopCount = 0;
var obj48736_onTap_activeActionGroupIndex = -1;
var obj48736_onTap_runningActionsCount = 0;
var obj48736_onTap_loopCount = 0;
var obj67758_onTap_activeActionGroupIndex = -1;
var obj67758_onTap_runningActionsCount = 0;
var obj67758_onTap_loopCount = 0;
var obj67750_onTap_activeActionGroupIndex = -1;
var obj67750_onTap_runningActionsCount = 0;
var obj67750_onTap_loopCount = 0;
var obj88945_onTap_activeActionGroupIndex = -1;
var obj88945_onTap_runningActionsCount = 0;
var obj88945_onTap_loopCount = 0;
var obj88940_onTap_activeActionGroupIndex = -1;
var obj88940_onTap_runningActionsCount = 0;
var obj88940_onTap_loopCount = 0;
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
		
obj48739_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48739_onTap_activeActionGroupIndex = -1;
		$("#obj48739").trigger("obj48739_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48739) {
				console.warn("de-queueing event obj48739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48739_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_48741();
function goToPage_48741() {
	window.obj48739_onTap_runningActionsCount = obj48739_onTap_runningActionsCount + 1;
	$("#anchor1013")[0].click();
	window.obj48739_onTap_runningActionsCount = window.obj48739_onTap_runningActionsCount - 1;
if (window.obj48739_onTap_runningActionsCount < 0) {
	window.obj48739_onTap_runningActionsCount = 0;
} else if (window.obj48739_onTap_runningActionsCount == 0) {
	obj48739_onTap_actionGroup1();
}
}





















};
obj48739_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48739_onTap_activeActionGroupIndex = -1;
		$("#obj48739").trigger("obj48739_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48739) {
				console.warn("de-queueing event obj48739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48739_onTap_activeActionGroupIndex = 1;
	





















};
obj48736_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48736_onTap_activeActionGroupIndex = -1;
		$("#obj48736").trigger("obj48736_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48736) {
				console.warn("de-queueing event obj48736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48736_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_48738();
function goToPage_48738() {
	window.obj48736_onTap_runningActionsCount = obj48736_onTap_runningActionsCount + 1;
	$("#anchor1014")[0].click();
	window.obj48736_onTap_runningActionsCount = window.obj48736_onTap_runningActionsCount - 1;
if (window.obj48736_onTap_runningActionsCount < 0) {
	window.obj48736_onTap_runningActionsCount = 0;
} else if (window.obj48736_onTap_runningActionsCount == 0) {
	obj48736_onTap_actionGroup1();
}
}





















};
obj48736_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48736_onTap_activeActionGroupIndex = -1;
		$("#obj48736").trigger("obj48736_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48736) {
				console.warn("de-queueing event obj48736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48736_onTap_activeActionGroupIndex = 1;
	





















};
obj67758_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67758_onTap_activeActionGroupIndex = -1;
		$("#obj67758").trigger("obj67758_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67758) {
				console.warn("de-queueing event obj67758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67758_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67758 
hide_67761();
function hide_67761() {
	var selector = "#obj67758";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67758_onTap_runningActionsCount = obj67758_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67758_onTap_runningActionsCount = window.obj67758_onTap_runningActionsCount - 1;
if (window.obj67758_onTap_runningActionsCount < 0) {
	window.obj67758_onTap_runningActionsCount = 0;
} else if (window.obj67758_onTap_runningActionsCount == 0) {
	obj67758_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67761(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67758_onTap_runningActionsCount = window.obj67758_onTap_runningActionsCount - 1;
if (window.obj67758_onTap_runningActionsCount < 0) {
	window.obj67758_onTap_runningActionsCount = 0;
} else if (window.obj67758_onTap_runningActionsCount == 0) {
	obj67758_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67764 
stopMovie_67760();
function stopMovie_67760() {
	window.obj67758_onTap_runningActionsCount = obj67758_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67764")[0];
	myVideo.pause();
	window.obj67758_onTap_runningActionsCount = window.obj67758_onTap_runningActionsCount - 1;
if (window.obj67758_onTap_runningActionsCount < 0) {
	window.obj67758_onTap_runningActionsCount = 0;
} else if (window.obj67758_onTap_runningActionsCount == 0) {
	obj67758_onTap_actionGroup1();
}
}
















};
obj67758_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67758_onTap_activeActionGroupIndex = -1;
		$("#obj67758").trigger("obj67758_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67758) {
				console.warn("de-queueing event obj67758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67758_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67750
(function(){
	window.obj67758_onTap_runningActionsCount = obj67758_onTap_runningActionsCount + 1;

	var selector = "#obj67750";
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
					window.obj67758_onTap_runningActionsCount = window.obj67758_onTap_runningActionsCount - 1;
if (window.obj67758_onTap_runningActionsCount < 0) {
	window.obj67758_onTap_runningActionsCount = 0;
} else if (window.obj67758_onTap_runningActionsCount == 0) {
	obj67758_onTap_actionGroup2();
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
				window.obj67758_onTap_runningActionsCount = window.obj67758_onTap_runningActionsCount - 1;
if (window.obj67758_onTap_runningActionsCount < 0) {
	window.obj67758_onTap_runningActionsCount = 0;
} else if (window.obj67758_onTap_runningActionsCount == 0) {
	obj67758_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67758_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67758_onTap_activeActionGroupIndex = -1;
		$("#obj67758").trigger("obj67758_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67758) {
				console.warn("de-queueing event obj67758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67758_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67764 
move_67763();
function move_67763() {
	window.obj67758_onTap_runningActionsCount = obj67758_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67764");
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
			window.obj67758_onTap_runningActionsCount = window.obj67758_onTap_runningActionsCount - 1;
if (window.obj67758_onTap_runningActionsCount < 0) {
	window.obj67758_onTap_runningActionsCount = 0;
} else if (window.obj67758_onTap_runningActionsCount == 0) {
	obj67758_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67758_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67758_onTap_activeActionGroupIndex = -1;
		$("#obj67758").trigger("obj67758_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67758) {
				console.warn("de-queueing event obj67758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67758_onTap_activeActionGroupIndex = 3;
	





















};
obj67750_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67750_onTap_activeActionGroupIndex = -1;
		$("#obj67750").trigger("obj67750_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67750) {
				console.warn("de-queueing event obj67750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67750_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67750 
hide_67753();
function hide_67753() {
	var selector = "#obj67750";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67750_onTap_runningActionsCount = obj67750_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67750_onTap_runningActionsCount = window.obj67750_onTap_runningActionsCount - 1;
if (window.obj67750_onTap_runningActionsCount < 0) {
	window.obj67750_onTap_runningActionsCount = 0;
} else if (window.obj67750_onTap_runningActionsCount == 0) {
	obj67750_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67753(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67750_onTap_runningActionsCount = window.obj67750_onTap_runningActionsCount - 1;
if (window.obj67750_onTap_runningActionsCount < 0) {
	window.obj67750_onTap_runningActionsCount = 0;
} else if (window.obj67750_onTap_runningActionsCount == 0) {
	obj67750_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67764 
playPauseMovie_67752();
function playPauseMovie_67752() {
	window.obj67750_onTap_runningActionsCount = obj67750_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67764")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67750_onTap_runningActionsCount = window.obj67750_onTap_runningActionsCount - 1;
if (window.obj67750_onTap_runningActionsCount < 0) {
	window.obj67750_onTap_runningActionsCount = 0;
} else if (window.obj67750_onTap_runningActionsCount == 0) {
	obj67750_onTap_actionGroup1();
}
}

















};
obj67750_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67750_onTap_activeActionGroupIndex = -1;
		$("#obj67750").trigger("obj67750_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67750) {
				console.warn("de-queueing event obj67750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67750_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67758
(function(){
	window.obj67750_onTap_runningActionsCount = obj67750_onTap_runningActionsCount + 1;

	var selector = "#obj67758";
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
					window.obj67750_onTap_runningActionsCount = window.obj67750_onTap_runningActionsCount - 1;
if (window.obj67750_onTap_runningActionsCount < 0) {
	window.obj67750_onTap_runningActionsCount = 0;
} else if (window.obj67750_onTap_runningActionsCount == 0) {
	obj67750_onTap_actionGroup2();
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
				window.obj67750_onTap_runningActionsCount = window.obj67750_onTap_runningActionsCount - 1;
if (window.obj67750_onTap_runningActionsCount < 0) {
	window.obj67750_onTap_runningActionsCount = 0;
} else if (window.obj67750_onTap_runningActionsCount == 0) {
	obj67750_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67750_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67750_onTap_activeActionGroupIndex = -1;
		$("#obj67750").trigger("obj67750_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67750) {
				console.warn("de-queueing event obj67750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67750_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67764 
move_67755();
function move_67755() {
	window.obj67750_onTap_runningActionsCount = obj67750_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67764");
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
			window.obj67750_onTap_runningActionsCount = window.obj67750_onTap_runningActionsCount - 1;
if (window.obj67750_onTap_runningActionsCount < 0) {
	window.obj67750_onTap_runningActionsCount = 0;
} else if (window.obj67750_onTap_runningActionsCount == 0) {
	obj67750_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67750_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67750_onTap_activeActionGroupIndex = -1;
		$("#obj67750").trigger("obj67750_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67750) {
				console.warn("de-queueing event obj67750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67750_onTap_activeActionGroupIndex = 3;
	





















};
obj88945_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88945_onTap_activeActionGroupIndex = -1;
		$("#obj88945").trigger("obj88945_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88945) {
				console.warn("de-queueing event obj88945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88945_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88950 
stopAudio_88947();
function stopAudio_88947() {
	window.obj88945_onTap_runningActionsCount = obj88945_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88950")[0];
	myAudio.pause();
	window.obj88945_onTap_runningActionsCount = window.obj88945_onTap_runningActionsCount - 1;
if (window.obj88945_onTap_runningActionsCount < 0) {
	window.obj88945_onTap_runningActionsCount = 0;
} else if (window.obj88945_onTap_runningActionsCount == 0) {
	obj88945_onTap_actionGroup1();
}
}








};
obj88945_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88945_onTap_activeActionGroupIndex = -1;
		$("#obj88945").trigger("obj88945_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88945) {
				console.warn("de-queueing event obj88945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88945_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88945 
hide_88948();
function hide_88948() {
	var selector = "#obj88945";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88945_onTap_runningActionsCount = obj88945_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88945_onTap_runningActionsCount = window.obj88945_onTap_runningActionsCount - 1;
if (window.obj88945_onTap_runningActionsCount < 0) {
	window.obj88945_onTap_runningActionsCount = 0;
} else if (window.obj88945_onTap_runningActionsCount == 0) {
	obj88945_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88948(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88945_onTap_runningActionsCount = window.obj88945_onTap_runningActionsCount - 1;
if (window.obj88945_onTap_runningActionsCount < 0) {
	window.obj88945_onTap_runningActionsCount = 0;
} else if (window.obj88945_onTap_runningActionsCount == 0) {
	obj88945_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88945_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88945_onTap_activeActionGroupIndex = -1;
		$("#obj88945").trigger("obj88945_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88945) {
				console.warn("de-queueing event obj88945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88945_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88940
(function(){
	window.obj88945_onTap_runningActionsCount = obj88945_onTap_runningActionsCount + 1;

	var selector = "#obj88940";
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
					window.obj88945_onTap_runningActionsCount = window.obj88945_onTap_runningActionsCount - 1;
if (window.obj88945_onTap_runningActionsCount < 0) {
	window.obj88945_onTap_runningActionsCount = 0;
} else if (window.obj88945_onTap_runningActionsCount == 0) {
	obj88945_onTap_actionGroup3();
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
				window.obj88945_onTap_runningActionsCount = window.obj88945_onTap_runningActionsCount - 1;
if (window.obj88945_onTap_runningActionsCount < 0) {
	window.obj88945_onTap_runningActionsCount = 0;
} else if (window.obj88945_onTap_runningActionsCount == 0) {
	obj88945_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88945_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88945_onTap_activeActionGroupIndex = -1;
		$("#obj88945").trigger("obj88945_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88945) {
				console.warn("de-queueing event obj88945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88945_onTap_activeActionGroupIndex = 3;
	





















};
obj88940_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88940_onTap_activeActionGroupIndex = -1;
		$("#obj88940").trigger("obj88940_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88940) {
				console.warn("de-queueing event obj88940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88940_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88940 
hide_88942();
function hide_88942() {
	var selector = "#obj88940";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88940_onTap_runningActionsCount = obj88940_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88940_onTap_runningActionsCount = window.obj88940_onTap_runningActionsCount - 1;
if (window.obj88940_onTap_runningActionsCount < 0) {
	window.obj88940_onTap_runningActionsCount = 0;
} else if (window.obj88940_onTap_runningActionsCount == 0) {
	obj88940_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88942(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88940_onTap_runningActionsCount = window.obj88940_onTap_runningActionsCount - 1;
if (window.obj88940_onTap_runningActionsCount < 0) {
	window.obj88940_onTap_runningActionsCount = 0;
} else if (window.obj88940_onTap_runningActionsCount == 0) {
	obj88940_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88940_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88940_onTap_activeActionGroupIndex = -1;
		$("#obj88940").trigger("obj88940_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88940) {
				console.warn("de-queueing event obj88940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88940_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88945
(function(){
	window.obj88940_onTap_runningActionsCount = obj88940_onTap_runningActionsCount + 1;

	var selector = "#obj88945";
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
					window.obj88940_onTap_runningActionsCount = window.obj88940_onTap_runningActionsCount - 1;
if (window.obj88940_onTap_runningActionsCount < 0) {
	window.obj88940_onTap_runningActionsCount = 0;
} else if (window.obj88940_onTap_runningActionsCount == 0) {
	obj88940_onTap_actionGroup2();
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
				window.obj88940_onTap_runningActionsCount = window.obj88940_onTap_runningActionsCount - 1;
if (window.obj88940_onTap_runningActionsCount < 0) {
	window.obj88940_onTap_runningActionsCount = 0;
} else if (window.obj88940_onTap_runningActionsCount == 0) {
	obj88940_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88940_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88940_onTap_activeActionGroupIndex = -1;
		$("#obj88940").trigger("obj88940_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88940) {
				console.warn("de-queueing event obj88940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88940_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88950 
playAudio_88944();
function playAudio_88944() {
	window.obj88940_onTap_runningActionsCount = obj88940_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88950")[0];
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
		    window.obj88940_onTap_runningActionsCount = window.obj88940_onTap_runningActionsCount - 1;
if (window.obj88940_onTap_runningActionsCount < 0) {
	window.obj88940_onTap_runningActionsCount = 0;
} else if (window.obj88940_onTap_runningActionsCount == 0) {
	obj88940_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88940_onTap_runningActionsCount = window.obj88940_onTap_runningActionsCount - 1;
if (window.obj88940_onTap_runningActionsCount < 0) {
	window.obj88940_onTap_runningActionsCount = 0;
} else if (window.obj88940_onTap_runningActionsCount == 0) {
	obj88940_onTap_actionGroup3();
}
	}
}









};
obj88940_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88940_onTap_activeActionGroupIndex = -1;
		$("#obj88940").trigger("obj88940_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88940) {
				console.warn("de-queueing event obj88940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88940_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj48739: Event Touch Down
 *
 */
$("#obj48739").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48739_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48739_onTap is still running");
	return;
}
var obj48739_onTap_runningActionsCount = 0;
var obj48739_onTap_loopCount = 0;
obj48739_onTap_actionGroup0();
});










/*
 *
 *   obj48736: Event Touch Down
 *
 */
$("#obj48736").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48736_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48736_onTap is still running");
	return;
}
var obj48736_onTap_runningActionsCount = 0;
var obj48736_onTap_loopCount = 0;
obj48736_onTap_actionGroup0();
});




























































/*
 *
 *   obj67758: Event Touch Down
 *
 */
$("#obj67758").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67758_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67758_onTap is still running");
	return;
}
var obj67758_onTap_runningActionsCount = 0;
var obj67758_onTap_loopCount = 0;
obj67758_onTap_actionGroup0();
});










/*
 *
 *   obj67750: Event Touch Down
 *
 */
$("#obj67750").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67750_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67750_onTap is still running");
	return;
}
var obj67750_onTap_runningActionsCount = 0;
var obj67750_onTap_loopCount = 0;
obj67750_onTap_actionGroup0();
});










/*
 *
 *   obj88945: Event Touch Down
 *
 */
$("#obj88945").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88945_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88945_onTap is still running");
	return;
}
var obj88945_onTap_runningActionsCount = 0;
var obj88945_onTap_loopCount = 0;
obj88945_onTap_actionGroup0();
});










/*
 *
 *   obj88940: Event Touch Down
 *
 */
$("#obj88940").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88940_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88940_onTap is still running");
	return;
}
var obj88940_onTap_runningActionsCount = 0;
var obj88940_onTap_loopCount = 0;
obj88940_onTap_actionGroup0();
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
	
$("#obj48755").trigger('SCEventShow');
$("#obj48739").trigger('SCEventShow');
$("#obj48736").trigger('SCEventShow');
$("#obj48734").trigger('SCEventShow');
$("#obj48732").trigger('SCEventShow');
$("#obj48730").trigger('SCEventShow');
$("#obj48726").trigger('SCEventShow');
$("#obj48757").trigger('SCEventShow');
$("#obj67758").trigger('SCEventShow');
$("#obj67750").trigger('SCEventShow');
$("#obj88945").trigger('SCEventShow');
$("#obj88940").trigger('SCEventShow');
$("#obj88950").trigger('SCEventShow');
$("#obj94973").trigger('SCEventShow');
$("#obj67764").trigger('SCEventShow');
	
});