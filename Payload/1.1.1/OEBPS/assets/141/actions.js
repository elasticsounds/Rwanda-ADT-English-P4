pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 41748;
pubcoder.page.title = pubcoder.page.title || "141";
pubcoder.page.number = pubcoder.page.number || 141;
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
var obj41754_onTap_activeActionGroupIndex = -1;
var obj41754_onTap_runningActionsCount = 0;
var obj41754_onTap_loopCount = 0;
var obj41751_onTap_activeActionGroupIndex = -1;
var obj41751_onTap_runningActionsCount = 0;
var obj41751_onTap_loopCount = 0;
var obj67262_onTap_activeActionGroupIndex = -1;
var obj67262_onTap_runningActionsCount = 0;
var obj67262_onTap_loopCount = 0;
var obj67254_onTap_activeActionGroupIndex = -1;
var obj67254_onTap_runningActionsCount = 0;
var obj67254_onTap_loopCount = 0;
var obj88561_onTap_activeActionGroupIndex = -1;
var obj88561_onTap_runningActionsCount = 0;
var obj88561_onTap_loopCount = 0;
var obj88556_onTap_activeActionGroupIndex = -1;
var obj88556_onTap_runningActionsCount = 0;
var obj88556_onTap_loopCount = 0;
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
		
obj41754_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41754_onTap_activeActionGroupIndex = -1;
		$("#obj41754").trigger("obj41754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41754) {
				console.warn("de-queueing event obj41754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41754_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41756();
function goToPage_41756() {
	window.obj41754_onTap_runningActionsCount = obj41754_onTap_runningActionsCount + 1;
	$("#anchor838")[0].click();
	window.obj41754_onTap_runningActionsCount = window.obj41754_onTap_runningActionsCount - 1;
if (window.obj41754_onTap_runningActionsCount < 0) {
	window.obj41754_onTap_runningActionsCount = 0;
} else if (window.obj41754_onTap_runningActionsCount == 0) {
	obj41754_onTap_actionGroup1();
}
}





















};
obj41754_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41754_onTap_activeActionGroupIndex = -1;
		$("#obj41754").trigger("obj41754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41754) {
				console.warn("de-queueing event obj41754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41754_onTap_activeActionGroupIndex = 1;
	





















};
obj41751_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41751_onTap_activeActionGroupIndex = -1;
		$("#obj41751").trigger("obj41751_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41751) {
				console.warn("de-queueing event obj41751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41751_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41753();
function goToPage_41753() {
	window.obj41751_onTap_runningActionsCount = obj41751_onTap_runningActionsCount + 1;
	$("#anchor839")[0].click();
	window.obj41751_onTap_runningActionsCount = window.obj41751_onTap_runningActionsCount - 1;
if (window.obj41751_onTap_runningActionsCount < 0) {
	window.obj41751_onTap_runningActionsCount = 0;
} else if (window.obj41751_onTap_runningActionsCount == 0) {
	obj41751_onTap_actionGroup1();
}
}





















};
obj41751_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41751_onTap_activeActionGroupIndex = -1;
		$("#obj41751").trigger("obj41751_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41751) {
				console.warn("de-queueing event obj41751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41751_onTap_activeActionGroupIndex = 1;
	





















};
obj67262_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67262_onTap_activeActionGroupIndex = -1;
		$("#obj67262").trigger("obj67262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67262) {
				console.warn("de-queueing event obj67262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67262_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67262 
hide_67265();
function hide_67265() {
	var selector = "#obj67262";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67262_onTap_runningActionsCount = obj67262_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67262_onTap_runningActionsCount = window.obj67262_onTap_runningActionsCount - 1;
if (window.obj67262_onTap_runningActionsCount < 0) {
	window.obj67262_onTap_runningActionsCount = 0;
} else if (window.obj67262_onTap_runningActionsCount == 0) {
	obj67262_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67265(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67262_onTap_runningActionsCount = window.obj67262_onTap_runningActionsCount - 1;
if (window.obj67262_onTap_runningActionsCount < 0) {
	window.obj67262_onTap_runningActionsCount = 0;
} else if (window.obj67262_onTap_runningActionsCount == 0) {
	obj67262_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67268 
stopMovie_67264();
function stopMovie_67264() {
	window.obj67262_onTap_runningActionsCount = obj67262_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67268")[0];
	myVideo.pause();
	window.obj67262_onTap_runningActionsCount = window.obj67262_onTap_runningActionsCount - 1;
if (window.obj67262_onTap_runningActionsCount < 0) {
	window.obj67262_onTap_runningActionsCount = 0;
} else if (window.obj67262_onTap_runningActionsCount == 0) {
	obj67262_onTap_actionGroup1();
}
}
















};
obj67262_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67262_onTap_activeActionGroupIndex = -1;
		$("#obj67262").trigger("obj67262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67262) {
				console.warn("de-queueing event obj67262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67262_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67254
(function(){
	window.obj67262_onTap_runningActionsCount = obj67262_onTap_runningActionsCount + 1;

	var selector = "#obj67254";
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
					window.obj67262_onTap_runningActionsCount = window.obj67262_onTap_runningActionsCount - 1;
if (window.obj67262_onTap_runningActionsCount < 0) {
	window.obj67262_onTap_runningActionsCount = 0;
} else if (window.obj67262_onTap_runningActionsCount == 0) {
	obj67262_onTap_actionGroup2();
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
				window.obj67262_onTap_runningActionsCount = window.obj67262_onTap_runningActionsCount - 1;
if (window.obj67262_onTap_runningActionsCount < 0) {
	window.obj67262_onTap_runningActionsCount = 0;
} else if (window.obj67262_onTap_runningActionsCount == 0) {
	obj67262_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67262_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67262_onTap_activeActionGroupIndex = -1;
		$("#obj67262").trigger("obj67262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67262) {
				console.warn("de-queueing event obj67262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67262_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67268 
move_67267();
function move_67267() {
	window.obj67262_onTap_runningActionsCount = obj67262_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67268");
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
			window.obj67262_onTap_runningActionsCount = window.obj67262_onTap_runningActionsCount - 1;
if (window.obj67262_onTap_runningActionsCount < 0) {
	window.obj67262_onTap_runningActionsCount = 0;
} else if (window.obj67262_onTap_runningActionsCount == 0) {
	obj67262_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67262_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67262_onTap_activeActionGroupIndex = -1;
		$("#obj67262").trigger("obj67262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67262) {
				console.warn("de-queueing event obj67262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67262_onTap_activeActionGroupIndex = 3;
	





















};
obj67254_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67254_onTap_activeActionGroupIndex = -1;
		$("#obj67254").trigger("obj67254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67254) {
				console.warn("de-queueing event obj67254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67254_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67254 
hide_67257();
function hide_67257() {
	var selector = "#obj67254";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67254_onTap_runningActionsCount = obj67254_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67254_onTap_runningActionsCount = window.obj67254_onTap_runningActionsCount - 1;
if (window.obj67254_onTap_runningActionsCount < 0) {
	window.obj67254_onTap_runningActionsCount = 0;
} else if (window.obj67254_onTap_runningActionsCount == 0) {
	obj67254_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67257(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67254_onTap_runningActionsCount = window.obj67254_onTap_runningActionsCount - 1;
if (window.obj67254_onTap_runningActionsCount < 0) {
	window.obj67254_onTap_runningActionsCount = 0;
} else if (window.obj67254_onTap_runningActionsCount == 0) {
	obj67254_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67268 
playPauseMovie_67256();
function playPauseMovie_67256() {
	window.obj67254_onTap_runningActionsCount = obj67254_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67268")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67254_onTap_runningActionsCount = window.obj67254_onTap_runningActionsCount - 1;
if (window.obj67254_onTap_runningActionsCount < 0) {
	window.obj67254_onTap_runningActionsCount = 0;
} else if (window.obj67254_onTap_runningActionsCount == 0) {
	obj67254_onTap_actionGroup1();
}
}

















};
obj67254_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67254_onTap_activeActionGroupIndex = -1;
		$("#obj67254").trigger("obj67254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67254) {
				console.warn("de-queueing event obj67254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67254_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67262
(function(){
	window.obj67254_onTap_runningActionsCount = obj67254_onTap_runningActionsCount + 1;

	var selector = "#obj67262";
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
					window.obj67254_onTap_runningActionsCount = window.obj67254_onTap_runningActionsCount - 1;
if (window.obj67254_onTap_runningActionsCount < 0) {
	window.obj67254_onTap_runningActionsCount = 0;
} else if (window.obj67254_onTap_runningActionsCount == 0) {
	obj67254_onTap_actionGroup2();
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
				window.obj67254_onTap_runningActionsCount = window.obj67254_onTap_runningActionsCount - 1;
if (window.obj67254_onTap_runningActionsCount < 0) {
	window.obj67254_onTap_runningActionsCount = 0;
} else if (window.obj67254_onTap_runningActionsCount == 0) {
	obj67254_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67254_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67254_onTap_activeActionGroupIndex = -1;
		$("#obj67254").trigger("obj67254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67254) {
				console.warn("de-queueing event obj67254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67254_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67268 
move_67259();
function move_67259() {
	window.obj67254_onTap_runningActionsCount = obj67254_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67268");
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
			window.obj67254_onTap_runningActionsCount = window.obj67254_onTap_runningActionsCount - 1;
if (window.obj67254_onTap_runningActionsCount < 0) {
	window.obj67254_onTap_runningActionsCount = 0;
} else if (window.obj67254_onTap_runningActionsCount == 0) {
	obj67254_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67254_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67254_onTap_activeActionGroupIndex = -1;
		$("#obj67254").trigger("obj67254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67254) {
				console.warn("de-queueing event obj67254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67254_onTap_activeActionGroupIndex = 3;
	





















};
obj88561_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88561_onTap_activeActionGroupIndex = -1;
		$("#obj88561").trigger("obj88561_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88561) {
				console.warn("de-queueing event obj88561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88561_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88566 
stopAudio_88563();
function stopAudio_88563() {
	window.obj88561_onTap_runningActionsCount = obj88561_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88566")[0];
	myAudio.pause();
	window.obj88561_onTap_runningActionsCount = window.obj88561_onTap_runningActionsCount - 1;
if (window.obj88561_onTap_runningActionsCount < 0) {
	window.obj88561_onTap_runningActionsCount = 0;
} else if (window.obj88561_onTap_runningActionsCount == 0) {
	obj88561_onTap_actionGroup1();
}
}








};
obj88561_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88561_onTap_activeActionGroupIndex = -1;
		$("#obj88561").trigger("obj88561_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88561) {
				console.warn("de-queueing event obj88561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88561_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88561 
hide_88564();
function hide_88564() {
	var selector = "#obj88561";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88561_onTap_runningActionsCount = obj88561_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88561_onTap_runningActionsCount = window.obj88561_onTap_runningActionsCount - 1;
if (window.obj88561_onTap_runningActionsCount < 0) {
	window.obj88561_onTap_runningActionsCount = 0;
} else if (window.obj88561_onTap_runningActionsCount == 0) {
	obj88561_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88564(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88561_onTap_runningActionsCount = window.obj88561_onTap_runningActionsCount - 1;
if (window.obj88561_onTap_runningActionsCount < 0) {
	window.obj88561_onTap_runningActionsCount = 0;
} else if (window.obj88561_onTap_runningActionsCount == 0) {
	obj88561_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88561_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88561_onTap_activeActionGroupIndex = -1;
		$("#obj88561").trigger("obj88561_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88561) {
				console.warn("de-queueing event obj88561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88561_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88556
(function(){
	window.obj88561_onTap_runningActionsCount = obj88561_onTap_runningActionsCount + 1;

	var selector = "#obj88556";
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
					window.obj88561_onTap_runningActionsCount = window.obj88561_onTap_runningActionsCount - 1;
if (window.obj88561_onTap_runningActionsCount < 0) {
	window.obj88561_onTap_runningActionsCount = 0;
} else if (window.obj88561_onTap_runningActionsCount == 0) {
	obj88561_onTap_actionGroup3();
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
				window.obj88561_onTap_runningActionsCount = window.obj88561_onTap_runningActionsCount - 1;
if (window.obj88561_onTap_runningActionsCount < 0) {
	window.obj88561_onTap_runningActionsCount = 0;
} else if (window.obj88561_onTap_runningActionsCount == 0) {
	obj88561_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88561_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88561_onTap_activeActionGroupIndex = -1;
		$("#obj88561").trigger("obj88561_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88561) {
				console.warn("de-queueing event obj88561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88561_onTap_activeActionGroupIndex = 3;
	





















};
obj88556_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88556_onTap_activeActionGroupIndex = -1;
		$("#obj88556").trigger("obj88556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88556) {
				console.warn("de-queueing event obj88556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88556_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88556 
hide_88558();
function hide_88558() {
	var selector = "#obj88556";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88556_onTap_runningActionsCount = obj88556_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88556_onTap_runningActionsCount = window.obj88556_onTap_runningActionsCount - 1;
if (window.obj88556_onTap_runningActionsCount < 0) {
	window.obj88556_onTap_runningActionsCount = 0;
} else if (window.obj88556_onTap_runningActionsCount == 0) {
	obj88556_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88558(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88556_onTap_runningActionsCount = window.obj88556_onTap_runningActionsCount - 1;
if (window.obj88556_onTap_runningActionsCount < 0) {
	window.obj88556_onTap_runningActionsCount = 0;
} else if (window.obj88556_onTap_runningActionsCount == 0) {
	obj88556_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88556_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88556_onTap_activeActionGroupIndex = -1;
		$("#obj88556").trigger("obj88556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88556) {
				console.warn("de-queueing event obj88556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88556_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88561
(function(){
	window.obj88556_onTap_runningActionsCount = obj88556_onTap_runningActionsCount + 1;

	var selector = "#obj88561";
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
					window.obj88556_onTap_runningActionsCount = window.obj88556_onTap_runningActionsCount - 1;
if (window.obj88556_onTap_runningActionsCount < 0) {
	window.obj88556_onTap_runningActionsCount = 0;
} else if (window.obj88556_onTap_runningActionsCount == 0) {
	obj88556_onTap_actionGroup2();
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
				window.obj88556_onTap_runningActionsCount = window.obj88556_onTap_runningActionsCount - 1;
if (window.obj88556_onTap_runningActionsCount < 0) {
	window.obj88556_onTap_runningActionsCount = 0;
} else if (window.obj88556_onTap_runningActionsCount == 0) {
	obj88556_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88556_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88556_onTap_activeActionGroupIndex = -1;
		$("#obj88556").trigger("obj88556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88556) {
				console.warn("de-queueing event obj88556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88556_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88566 
playAudio_88560();
function playAudio_88560() {
	window.obj88556_onTap_runningActionsCount = obj88556_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88566")[0];
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
		    window.obj88556_onTap_runningActionsCount = window.obj88556_onTap_runningActionsCount - 1;
if (window.obj88556_onTap_runningActionsCount < 0) {
	window.obj88556_onTap_runningActionsCount = 0;
} else if (window.obj88556_onTap_runningActionsCount == 0) {
	obj88556_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88556_onTap_runningActionsCount = window.obj88556_onTap_runningActionsCount - 1;
if (window.obj88556_onTap_runningActionsCount < 0) {
	window.obj88556_onTap_runningActionsCount = 0;
} else if (window.obj88556_onTap_runningActionsCount == 0) {
	obj88556_onTap_actionGroup3();
}
	}
}









};
obj88556_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88556_onTap_activeActionGroupIndex = -1;
		$("#obj88556").trigger("obj88556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88556) {
				console.warn("de-queueing event obj88556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88556_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj41754: Event Touch Down
 *
 */
$("#obj41754").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41754_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41754_onTap is still running");
	return;
}
var obj41754_onTap_runningActionsCount = 0;
var obj41754_onTap_loopCount = 0;
obj41754_onTap_actionGroup0();
});










/*
 *
 *   obj41751: Event Touch Down
 *
 */
$("#obj41751").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41751_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41751_onTap is still running");
	return;
}
var obj41751_onTap_runningActionsCount = 0;
var obj41751_onTap_loopCount = 0;
obj41751_onTap_actionGroup0();
});








































/*
 *
 *   obj67262: Event Touch Down
 *
 */
$("#obj67262").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67262_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67262_onTap is still running");
	return;
}
var obj67262_onTap_runningActionsCount = 0;
var obj67262_onTap_loopCount = 0;
obj67262_onTap_actionGroup0();
});










/*
 *
 *   obj67254: Event Touch Down
 *
 */
$("#obj67254").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67254_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67254_onTap is still running");
	return;
}
var obj67254_onTap_runningActionsCount = 0;
var obj67254_onTap_loopCount = 0;
obj67254_onTap_actionGroup0();
});










/*
 *
 *   obj88561: Event Touch Down
 *
 */
$("#obj88561").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88561_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88561_onTap is still running");
	return;
}
var obj88561_onTap_runningActionsCount = 0;
var obj88561_onTap_loopCount = 0;
obj88561_onTap_actionGroup0();
});










/*
 *
 *   obj88556: Event Touch Down
 *
 */
$("#obj88556").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88556_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88556_onTap is still running");
	return;
}
var obj88556_onTap_runningActionsCount = 0;
var obj88556_onTap_loopCount = 0;
obj88556_onTap_actionGroup0();
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
	
$("#obj41749").trigger('SCEventShow');
$("#obj41754").trigger('SCEventShow');
$("#obj41751").trigger('SCEventShow');
$("#obj41770").trigger('SCEventShow');
$("#obj41772").trigger('SCEventShow');
$("#obj41774").trigger('SCEventShow');
$("#obj67262").trigger('SCEventShow');
$("#obj67254").trigger('SCEventShow');
$("#obj88561").trigger('SCEventShow');
$("#obj88556").trigger('SCEventShow');
$("#obj88566").trigger('SCEventShow');
$("#obj94911").trigger('SCEventShow');
$("#obj67268").trigger('SCEventShow');
	
});