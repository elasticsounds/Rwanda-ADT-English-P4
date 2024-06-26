pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 47257;
pubcoder.page.title = pubcoder.page.title || "167";
pubcoder.page.number = pubcoder.page.number || 167;
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
var obj47263_onTap_activeActionGroupIndex = -1;
var obj47263_onTap_runningActionsCount = 0;
var obj47263_onTap_loopCount = 0;
var obj47260_onTap_activeActionGroupIndex = -1;
var obj47260_onTap_runningActionsCount = 0;
var obj47260_onTap_loopCount = 0;
var obj67678_onTap_activeActionGroupIndex = -1;
var obj67678_onTap_runningActionsCount = 0;
var obj67678_onTap_loopCount = 0;
var obj67670_onTap_activeActionGroupIndex = -1;
var obj67670_onTap_runningActionsCount = 0;
var obj67670_onTap_loopCount = 0;
var obj88885_onTap_activeActionGroupIndex = -1;
var obj88885_onTap_runningActionsCount = 0;
var obj88885_onTap_loopCount = 0;
var obj88880_onTap_activeActionGroupIndex = -1;
var obj88880_onTap_runningActionsCount = 0;
var obj88880_onTap_loopCount = 0;
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
		
obj47263_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47263_onTap_activeActionGroupIndex = -1;
		$("#obj47263").trigger("obj47263_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47263) {
				console.warn("de-queueing event obj47263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47263_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47265();
function goToPage_47265() {
	window.obj47263_onTap_runningActionsCount = obj47263_onTap_runningActionsCount + 1;
	$("#anchor981")[0].click();
	window.obj47263_onTap_runningActionsCount = window.obj47263_onTap_runningActionsCount - 1;
if (window.obj47263_onTap_runningActionsCount < 0) {
	window.obj47263_onTap_runningActionsCount = 0;
} else if (window.obj47263_onTap_runningActionsCount == 0) {
	obj47263_onTap_actionGroup1();
}
}





















};
obj47263_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47263_onTap_activeActionGroupIndex = -1;
		$("#obj47263").trigger("obj47263_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47263) {
				console.warn("de-queueing event obj47263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47263_onTap_activeActionGroupIndex = 1;
	





















};
obj47260_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47260_onTap_activeActionGroupIndex = -1;
		$("#obj47260").trigger("obj47260_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47260) {
				console.warn("de-queueing event obj47260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47260_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47262();
function goToPage_47262() {
	window.obj47260_onTap_runningActionsCount = obj47260_onTap_runningActionsCount + 1;
	$("#anchor982")[0].click();
	window.obj47260_onTap_runningActionsCount = window.obj47260_onTap_runningActionsCount - 1;
if (window.obj47260_onTap_runningActionsCount < 0) {
	window.obj47260_onTap_runningActionsCount = 0;
} else if (window.obj47260_onTap_runningActionsCount == 0) {
	obj47260_onTap_actionGroup1();
}
}





















};
obj47260_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47260_onTap_activeActionGroupIndex = -1;
		$("#obj47260").trigger("obj47260_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47260) {
				console.warn("de-queueing event obj47260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47260_onTap_activeActionGroupIndex = 1;
	





















};
obj67678_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67678_onTap_activeActionGroupIndex = -1;
		$("#obj67678").trigger("obj67678_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67678) {
				console.warn("de-queueing event obj67678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67678_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67678 
hide_67681();
function hide_67681() {
	var selector = "#obj67678";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67678_onTap_runningActionsCount = obj67678_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67678_onTap_runningActionsCount = window.obj67678_onTap_runningActionsCount - 1;
if (window.obj67678_onTap_runningActionsCount < 0) {
	window.obj67678_onTap_runningActionsCount = 0;
} else if (window.obj67678_onTap_runningActionsCount == 0) {
	obj67678_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67681(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67678_onTap_runningActionsCount = window.obj67678_onTap_runningActionsCount - 1;
if (window.obj67678_onTap_runningActionsCount < 0) {
	window.obj67678_onTap_runningActionsCount = 0;
} else if (window.obj67678_onTap_runningActionsCount == 0) {
	obj67678_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67684 
stopMovie_67680();
function stopMovie_67680() {
	window.obj67678_onTap_runningActionsCount = obj67678_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67684")[0];
	myVideo.pause();
	window.obj67678_onTap_runningActionsCount = window.obj67678_onTap_runningActionsCount - 1;
if (window.obj67678_onTap_runningActionsCount < 0) {
	window.obj67678_onTap_runningActionsCount = 0;
} else if (window.obj67678_onTap_runningActionsCount == 0) {
	obj67678_onTap_actionGroup1();
}
}
















};
obj67678_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67678_onTap_activeActionGroupIndex = -1;
		$("#obj67678").trigger("obj67678_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67678) {
				console.warn("de-queueing event obj67678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67678_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67670
(function(){
	window.obj67678_onTap_runningActionsCount = obj67678_onTap_runningActionsCount + 1;

	var selector = "#obj67670";
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
					window.obj67678_onTap_runningActionsCount = window.obj67678_onTap_runningActionsCount - 1;
if (window.obj67678_onTap_runningActionsCount < 0) {
	window.obj67678_onTap_runningActionsCount = 0;
} else if (window.obj67678_onTap_runningActionsCount == 0) {
	obj67678_onTap_actionGroup2();
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
				window.obj67678_onTap_runningActionsCount = window.obj67678_onTap_runningActionsCount - 1;
if (window.obj67678_onTap_runningActionsCount < 0) {
	window.obj67678_onTap_runningActionsCount = 0;
} else if (window.obj67678_onTap_runningActionsCount == 0) {
	obj67678_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67678_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67678_onTap_activeActionGroupIndex = -1;
		$("#obj67678").trigger("obj67678_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67678) {
				console.warn("de-queueing event obj67678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67678_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67684 
move_67683();
function move_67683() {
	window.obj67678_onTap_runningActionsCount = obj67678_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67684");
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
			window.obj67678_onTap_runningActionsCount = window.obj67678_onTap_runningActionsCount - 1;
if (window.obj67678_onTap_runningActionsCount < 0) {
	window.obj67678_onTap_runningActionsCount = 0;
} else if (window.obj67678_onTap_runningActionsCount == 0) {
	obj67678_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67678_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67678_onTap_activeActionGroupIndex = -1;
		$("#obj67678").trigger("obj67678_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67678) {
				console.warn("de-queueing event obj67678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67678_onTap_activeActionGroupIndex = 3;
	





















};
obj67670_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67670_onTap_activeActionGroupIndex = -1;
		$("#obj67670").trigger("obj67670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67670) {
				console.warn("de-queueing event obj67670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67670_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67670 
hide_67673();
function hide_67673() {
	var selector = "#obj67670";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67670_onTap_runningActionsCount = obj67670_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67670_onTap_runningActionsCount = window.obj67670_onTap_runningActionsCount - 1;
if (window.obj67670_onTap_runningActionsCount < 0) {
	window.obj67670_onTap_runningActionsCount = 0;
} else if (window.obj67670_onTap_runningActionsCount == 0) {
	obj67670_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67673(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67670_onTap_runningActionsCount = window.obj67670_onTap_runningActionsCount - 1;
if (window.obj67670_onTap_runningActionsCount < 0) {
	window.obj67670_onTap_runningActionsCount = 0;
} else if (window.obj67670_onTap_runningActionsCount == 0) {
	obj67670_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67684 
playPauseMovie_67672();
function playPauseMovie_67672() {
	window.obj67670_onTap_runningActionsCount = obj67670_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67684")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67670_onTap_runningActionsCount = window.obj67670_onTap_runningActionsCount - 1;
if (window.obj67670_onTap_runningActionsCount < 0) {
	window.obj67670_onTap_runningActionsCount = 0;
} else if (window.obj67670_onTap_runningActionsCount == 0) {
	obj67670_onTap_actionGroup1();
}
}

















};
obj67670_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67670_onTap_activeActionGroupIndex = -1;
		$("#obj67670").trigger("obj67670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67670) {
				console.warn("de-queueing event obj67670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67670_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67678
(function(){
	window.obj67670_onTap_runningActionsCount = obj67670_onTap_runningActionsCount + 1;

	var selector = "#obj67678";
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
					window.obj67670_onTap_runningActionsCount = window.obj67670_onTap_runningActionsCount - 1;
if (window.obj67670_onTap_runningActionsCount < 0) {
	window.obj67670_onTap_runningActionsCount = 0;
} else if (window.obj67670_onTap_runningActionsCount == 0) {
	obj67670_onTap_actionGroup2();
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
				window.obj67670_onTap_runningActionsCount = window.obj67670_onTap_runningActionsCount - 1;
if (window.obj67670_onTap_runningActionsCount < 0) {
	window.obj67670_onTap_runningActionsCount = 0;
} else if (window.obj67670_onTap_runningActionsCount == 0) {
	obj67670_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67670_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67670_onTap_activeActionGroupIndex = -1;
		$("#obj67670").trigger("obj67670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67670) {
				console.warn("de-queueing event obj67670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67670_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67684 
move_67675();
function move_67675() {
	window.obj67670_onTap_runningActionsCount = obj67670_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67684");
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
			window.obj67670_onTap_runningActionsCount = window.obj67670_onTap_runningActionsCount - 1;
if (window.obj67670_onTap_runningActionsCount < 0) {
	window.obj67670_onTap_runningActionsCount = 0;
} else if (window.obj67670_onTap_runningActionsCount == 0) {
	obj67670_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67670_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67670_onTap_activeActionGroupIndex = -1;
		$("#obj67670").trigger("obj67670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67670) {
				console.warn("de-queueing event obj67670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67670_onTap_activeActionGroupIndex = 3;
	





















};
obj88885_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88885_onTap_activeActionGroupIndex = -1;
		$("#obj88885").trigger("obj88885_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88885) {
				console.warn("de-queueing event obj88885." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88885").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88885_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88890 
stopAudio_88887();
function stopAudio_88887() {
	window.obj88885_onTap_runningActionsCount = obj88885_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88890")[0];
	myAudio.pause();
	window.obj88885_onTap_runningActionsCount = window.obj88885_onTap_runningActionsCount - 1;
if (window.obj88885_onTap_runningActionsCount < 0) {
	window.obj88885_onTap_runningActionsCount = 0;
} else if (window.obj88885_onTap_runningActionsCount == 0) {
	obj88885_onTap_actionGroup1();
}
}








};
obj88885_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88885_onTap_activeActionGroupIndex = -1;
		$("#obj88885").trigger("obj88885_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88885) {
				console.warn("de-queueing event obj88885." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88885").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88885_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88885 
hide_88888();
function hide_88888() {
	var selector = "#obj88885";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88885_onTap_runningActionsCount = obj88885_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88885_onTap_runningActionsCount = window.obj88885_onTap_runningActionsCount - 1;
if (window.obj88885_onTap_runningActionsCount < 0) {
	window.obj88885_onTap_runningActionsCount = 0;
} else if (window.obj88885_onTap_runningActionsCount == 0) {
	obj88885_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88888(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88885_onTap_runningActionsCount = window.obj88885_onTap_runningActionsCount - 1;
if (window.obj88885_onTap_runningActionsCount < 0) {
	window.obj88885_onTap_runningActionsCount = 0;
} else if (window.obj88885_onTap_runningActionsCount == 0) {
	obj88885_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88885_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88885_onTap_activeActionGroupIndex = -1;
		$("#obj88885").trigger("obj88885_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88885) {
				console.warn("de-queueing event obj88885." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88885").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88885_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88880
(function(){
	window.obj88885_onTap_runningActionsCount = obj88885_onTap_runningActionsCount + 1;

	var selector = "#obj88880";
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
					window.obj88885_onTap_runningActionsCount = window.obj88885_onTap_runningActionsCount - 1;
if (window.obj88885_onTap_runningActionsCount < 0) {
	window.obj88885_onTap_runningActionsCount = 0;
} else if (window.obj88885_onTap_runningActionsCount == 0) {
	obj88885_onTap_actionGroup3();
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
				window.obj88885_onTap_runningActionsCount = window.obj88885_onTap_runningActionsCount - 1;
if (window.obj88885_onTap_runningActionsCount < 0) {
	window.obj88885_onTap_runningActionsCount = 0;
} else if (window.obj88885_onTap_runningActionsCount == 0) {
	obj88885_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88885_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88885_onTap_activeActionGroupIndex = -1;
		$("#obj88885").trigger("obj88885_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88885) {
				console.warn("de-queueing event obj88885." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88885").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88885_onTap_activeActionGroupIndex = 3;
	





















};
obj88880_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88880_onTap_activeActionGroupIndex = -1;
		$("#obj88880").trigger("obj88880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88880) {
				console.warn("de-queueing event obj88880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88880_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88880 
hide_88882();
function hide_88882() {
	var selector = "#obj88880";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88880_onTap_runningActionsCount = obj88880_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88880_onTap_runningActionsCount = window.obj88880_onTap_runningActionsCount - 1;
if (window.obj88880_onTap_runningActionsCount < 0) {
	window.obj88880_onTap_runningActionsCount = 0;
} else if (window.obj88880_onTap_runningActionsCount == 0) {
	obj88880_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88882(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88880_onTap_runningActionsCount = window.obj88880_onTap_runningActionsCount - 1;
if (window.obj88880_onTap_runningActionsCount < 0) {
	window.obj88880_onTap_runningActionsCount = 0;
} else if (window.obj88880_onTap_runningActionsCount == 0) {
	obj88880_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88880_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88880_onTap_activeActionGroupIndex = -1;
		$("#obj88880").trigger("obj88880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88880) {
				console.warn("de-queueing event obj88880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88880_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88885
(function(){
	window.obj88880_onTap_runningActionsCount = obj88880_onTap_runningActionsCount + 1;

	var selector = "#obj88885";
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
					window.obj88880_onTap_runningActionsCount = window.obj88880_onTap_runningActionsCount - 1;
if (window.obj88880_onTap_runningActionsCount < 0) {
	window.obj88880_onTap_runningActionsCount = 0;
} else if (window.obj88880_onTap_runningActionsCount == 0) {
	obj88880_onTap_actionGroup2();
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
				window.obj88880_onTap_runningActionsCount = window.obj88880_onTap_runningActionsCount - 1;
if (window.obj88880_onTap_runningActionsCount < 0) {
	window.obj88880_onTap_runningActionsCount = 0;
} else if (window.obj88880_onTap_runningActionsCount == 0) {
	obj88880_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88880_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88880_onTap_activeActionGroupIndex = -1;
		$("#obj88880").trigger("obj88880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88880) {
				console.warn("de-queueing event obj88880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88880_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88890 
playAudio_88884();
function playAudio_88884() {
	window.obj88880_onTap_runningActionsCount = obj88880_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88890")[0];
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
		    window.obj88880_onTap_runningActionsCount = window.obj88880_onTap_runningActionsCount - 1;
if (window.obj88880_onTap_runningActionsCount < 0) {
	window.obj88880_onTap_runningActionsCount = 0;
} else if (window.obj88880_onTap_runningActionsCount == 0) {
	obj88880_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88880_onTap_runningActionsCount = window.obj88880_onTap_runningActionsCount - 1;
if (window.obj88880_onTap_runningActionsCount < 0) {
	window.obj88880_onTap_runningActionsCount = 0;
} else if (window.obj88880_onTap_runningActionsCount == 0) {
	obj88880_onTap_actionGroup3();
}
	}
}









};
obj88880_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88880_onTap_activeActionGroupIndex = -1;
		$("#obj88880").trigger("obj88880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88880) {
				console.warn("de-queueing event obj88880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88880_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj47263: Event Touch Down
 *
 */
$("#obj47263").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47263_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47263_onTap is still running");
	return;
}
var obj47263_onTap_runningActionsCount = 0;
var obj47263_onTap_loopCount = 0;
obj47263_onTap_actionGroup0();
});










/*
 *
 *   obj47260: Event Touch Down
 *
 */
$("#obj47260").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47260_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47260_onTap is still running");
	return;
}
var obj47260_onTap_runningActionsCount = 0;
var obj47260_onTap_loopCount = 0;
obj47260_onTap_actionGroup0();
});




















/*
 *
 *   obj67678: Event Touch Down
 *
 */
$("#obj67678").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67678_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67678_onTap is still running");
	return;
}
var obj67678_onTap_runningActionsCount = 0;
var obj67678_onTap_loopCount = 0;
obj67678_onTap_actionGroup0();
});










/*
 *
 *   obj67670: Event Touch Down
 *
 */
$("#obj67670").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67670_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67670_onTap is still running");
	return;
}
var obj67670_onTap_runningActionsCount = 0;
var obj67670_onTap_loopCount = 0;
obj67670_onTap_actionGroup0();
});










/*
 *
 *   obj88885: Event Touch Down
 *
 */
$("#obj88885").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88885_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88885_onTap is still running");
	return;
}
var obj88885_onTap_runningActionsCount = 0;
var obj88885_onTap_loopCount = 0;
obj88885_onTap_actionGroup0();
});










/*
 *
 *   obj88880: Event Touch Down
 *
 */
$("#obj88880").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88880_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88880_onTap is still running");
	return;
}
var obj88880_onTap_runningActionsCount = 0;
var obj88880_onTap_loopCount = 0;
obj88880_onTap_actionGroup0();
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
	
$("#obj47258").trigger('SCEventShow');
$("#obj47263").trigger('SCEventShow');
$("#obj47260").trigger('SCEventShow');
$("#obj47280").trigger('SCEventShow');
$("#obj67678").trigger('SCEventShow');
$("#obj67670").trigger('SCEventShow');
$("#obj88885").trigger('SCEventShow');
$("#obj88880").trigger('SCEventShow');
$("#obj88890").trigger('SCEventShow');
$("#obj94963").trigger('SCEventShow');
$("#obj67684").trigger('SCEventShow');
	
});