pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 45678;
pubcoder.page.title = pubcoder.page.title || "155";
pubcoder.page.number = pubcoder.page.number || 155;
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
var obj45694_onTap_activeActionGroupIndex = -1;
var obj45694_onTap_runningActionsCount = 0;
var obj45694_onTap_loopCount = 0;
var obj45691_onTap_activeActionGroupIndex = -1;
var obj45691_onTap_runningActionsCount = 0;
var obj45691_onTap_loopCount = 0;
var obj67486_onTap_activeActionGroupIndex = -1;
var obj67486_onTap_runningActionsCount = 0;
var obj67486_onTap_loopCount = 0;
var obj67478_onTap_activeActionGroupIndex = -1;
var obj67478_onTap_runningActionsCount = 0;
var obj67478_onTap_loopCount = 0;
var obj88741_onTap_activeActionGroupIndex = -1;
var obj88741_onTap_runningActionsCount = 0;
var obj88741_onTap_loopCount = 0;
var obj88736_onTap_activeActionGroupIndex = -1;
var obj88736_onTap_runningActionsCount = 0;
var obj88736_onTap_loopCount = 0;
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
		
obj45694_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45694_onTap_activeActionGroupIndex = -1;
		$("#obj45694").trigger("obj45694_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45694) {
				console.warn("de-queueing event obj45694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45694_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45696();
function goToPage_45696() {
	window.obj45694_onTap_runningActionsCount = obj45694_onTap_runningActionsCount + 1;
	$("#anchor918")[0].click();
	window.obj45694_onTap_runningActionsCount = window.obj45694_onTap_runningActionsCount - 1;
if (window.obj45694_onTap_runningActionsCount < 0) {
	window.obj45694_onTap_runningActionsCount = 0;
} else if (window.obj45694_onTap_runningActionsCount == 0) {
	obj45694_onTap_actionGroup1();
}
}





















};
obj45694_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45694_onTap_activeActionGroupIndex = -1;
		$("#obj45694").trigger("obj45694_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45694) {
				console.warn("de-queueing event obj45694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45694_onTap_activeActionGroupIndex = 1;
	





















};
obj45691_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45691_onTap_activeActionGroupIndex = -1;
		$("#obj45691").trigger("obj45691_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45691) {
				console.warn("de-queueing event obj45691." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45691").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45691_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45693();
function goToPage_45693() {
	window.obj45691_onTap_runningActionsCount = obj45691_onTap_runningActionsCount + 1;
	$("#anchor919")[0].click();
	window.obj45691_onTap_runningActionsCount = window.obj45691_onTap_runningActionsCount - 1;
if (window.obj45691_onTap_runningActionsCount < 0) {
	window.obj45691_onTap_runningActionsCount = 0;
} else if (window.obj45691_onTap_runningActionsCount == 0) {
	obj45691_onTap_actionGroup1();
}
}





















};
obj45691_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45691_onTap_activeActionGroupIndex = -1;
		$("#obj45691").trigger("obj45691_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45691) {
				console.warn("de-queueing event obj45691." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45691").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45691_onTap_activeActionGroupIndex = 1;
	





















};
obj67486_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67486_onTap_activeActionGroupIndex = -1;
		$("#obj67486").trigger("obj67486_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67486) {
				console.warn("de-queueing event obj67486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67486_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67486 
hide_67489();
function hide_67489() {
	var selector = "#obj67486";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67486_onTap_runningActionsCount = obj67486_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67486_onTap_runningActionsCount = window.obj67486_onTap_runningActionsCount - 1;
if (window.obj67486_onTap_runningActionsCount < 0) {
	window.obj67486_onTap_runningActionsCount = 0;
} else if (window.obj67486_onTap_runningActionsCount == 0) {
	obj67486_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67489(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67486_onTap_runningActionsCount = window.obj67486_onTap_runningActionsCount - 1;
if (window.obj67486_onTap_runningActionsCount < 0) {
	window.obj67486_onTap_runningActionsCount = 0;
} else if (window.obj67486_onTap_runningActionsCount == 0) {
	obj67486_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67492 
stopMovie_67488();
function stopMovie_67488() {
	window.obj67486_onTap_runningActionsCount = obj67486_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67492")[0];
	myVideo.pause();
	window.obj67486_onTap_runningActionsCount = window.obj67486_onTap_runningActionsCount - 1;
if (window.obj67486_onTap_runningActionsCount < 0) {
	window.obj67486_onTap_runningActionsCount = 0;
} else if (window.obj67486_onTap_runningActionsCount == 0) {
	obj67486_onTap_actionGroup1();
}
}
















};
obj67486_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67486_onTap_activeActionGroupIndex = -1;
		$("#obj67486").trigger("obj67486_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67486) {
				console.warn("de-queueing event obj67486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67486_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67478
(function(){
	window.obj67486_onTap_runningActionsCount = obj67486_onTap_runningActionsCount + 1;

	var selector = "#obj67478";
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
					window.obj67486_onTap_runningActionsCount = window.obj67486_onTap_runningActionsCount - 1;
if (window.obj67486_onTap_runningActionsCount < 0) {
	window.obj67486_onTap_runningActionsCount = 0;
} else if (window.obj67486_onTap_runningActionsCount == 0) {
	obj67486_onTap_actionGroup2();
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
				window.obj67486_onTap_runningActionsCount = window.obj67486_onTap_runningActionsCount - 1;
if (window.obj67486_onTap_runningActionsCount < 0) {
	window.obj67486_onTap_runningActionsCount = 0;
} else if (window.obj67486_onTap_runningActionsCount == 0) {
	obj67486_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67486_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67486_onTap_activeActionGroupIndex = -1;
		$("#obj67486").trigger("obj67486_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67486) {
				console.warn("de-queueing event obj67486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67486_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67492 
move_67491();
function move_67491() {
	window.obj67486_onTap_runningActionsCount = obj67486_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67492");
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
			window.obj67486_onTap_runningActionsCount = window.obj67486_onTap_runningActionsCount - 1;
if (window.obj67486_onTap_runningActionsCount < 0) {
	window.obj67486_onTap_runningActionsCount = 0;
} else if (window.obj67486_onTap_runningActionsCount == 0) {
	obj67486_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67486_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67486_onTap_activeActionGroupIndex = -1;
		$("#obj67486").trigger("obj67486_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67486) {
				console.warn("de-queueing event obj67486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67486_onTap_activeActionGroupIndex = 3;
	





















};
obj67478_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67478_onTap_activeActionGroupIndex = -1;
		$("#obj67478").trigger("obj67478_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67478) {
				console.warn("de-queueing event obj67478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67478_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67478 
hide_67481();
function hide_67481() {
	var selector = "#obj67478";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67478_onTap_runningActionsCount = obj67478_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67478_onTap_runningActionsCount = window.obj67478_onTap_runningActionsCount - 1;
if (window.obj67478_onTap_runningActionsCount < 0) {
	window.obj67478_onTap_runningActionsCount = 0;
} else if (window.obj67478_onTap_runningActionsCount == 0) {
	obj67478_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67481(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67478_onTap_runningActionsCount = window.obj67478_onTap_runningActionsCount - 1;
if (window.obj67478_onTap_runningActionsCount < 0) {
	window.obj67478_onTap_runningActionsCount = 0;
} else if (window.obj67478_onTap_runningActionsCount == 0) {
	obj67478_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67492 
playPauseMovie_67480();
function playPauseMovie_67480() {
	window.obj67478_onTap_runningActionsCount = obj67478_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67492")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67478_onTap_runningActionsCount = window.obj67478_onTap_runningActionsCount - 1;
if (window.obj67478_onTap_runningActionsCount < 0) {
	window.obj67478_onTap_runningActionsCount = 0;
} else if (window.obj67478_onTap_runningActionsCount == 0) {
	obj67478_onTap_actionGroup1();
}
}

















};
obj67478_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67478_onTap_activeActionGroupIndex = -1;
		$("#obj67478").trigger("obj67478_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67478) {
				console.warn("de-queueing event obj67478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67478_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67486
(function(){
	window.obj67478_onTap_runningActionsCount = obj67478_onTap_runningActionsCount + 1;

	var selector = "#obj67486";
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
					window.obj67478_onTap_runningActionsCount = window.obj67478_onTap_runningActionsCount - 1;
if (window.obj67478_onTap_runningActionsCount < 0) {
	window.obj67478_onTap_runningActionsCount = 0;
} else if (window.obj67478_onTap_runningActionsCount == 0) {
	obj67478_onTap_actionGroup2();
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
				window.obj67478_onTap_runningActionsCount = window.obj67478_onTap_runningActionsCount - 1;
if (window.obj67478_onTap_runningActionsCount < 0) {
	window.obj67478_onTap_runningActionsCount = 0;
} else if (window.obj67478_onTap_runningActionsCount == 0) {
	obj67478_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67478_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67478_onTap_activeActionGroupIndex = -1;
		$("#obj67478").trigger("obj67478_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67478) {
				console.warn("de-queueing event obj67478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67478_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67492 
move_67483();
function move_67483() {
	window.obj67478_onTap_runningActionsCount = obj67478_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67492");
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
			window.obj67478_onTap_runningActionsCount = window.obj67478_onTap_runningActionsCount - 1;
if (window.obj67478_onTap_runningActionsCount < 0) {
	window.obj67478_onTap_runningActionsCount = 0;
} else if (window.obj67478_onTap_runningActionsCount == 0) {
	obj67478_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67478_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67478_onTap_activeActionGroupIndex = -1;
		$("#obj67478").trigger("obj67478_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67478) {
				console.warn("de-queueing event obj67478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67478_onTap_activeActionGroupIndex = 3;
	





















};
obj88741_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88741_onTap_activeActionGroupIndex = -1;
		$("#obj88741").trigger("obj88741_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88741) {
				console.warn("de-queueing event obj88741." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88741").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88741_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88746 
stopAudio_88743();
function stopAudio_88743() {
	window.obj88741_onTap_runningActionsCount = obj88741_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88746")[0];
	myAudio.pause();
	window.obj88741_onTap_runningActionsCount = window.obj88741_onTap_runningActionsCount - 1;
if (window.obj88741_onTap_runningActionsCount < 0) {
	window.obj88741_onTap_runningActionsCount = 0;
} else if (window.obj88741_onTap_runningActionsCount == 0) {
	obj88741_onTap_actionGroup1();
}
}








};
obj88741_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88741_onTap_activeActionGroupIndex = -1;
		$("#obj88741").trigger("obj88741_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88741) {
				console.warn("de-queueing event obj88741." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88741").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88741_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88741 
hide_88744();
function hide_88744() {
	var selector = "#obj88741";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88741_onTap_runningActionsCount = obj88741_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88741_onTap_runningActionsCount = window.obj88741_onTap_runningActionsCount - 1;
if (window.obj88741_onTap_runningActionsCount < 0) {
	window.obj88741_onTap_runningActionsCount = 0;
} else if (window.obj88741_onTap_runningActionsCount == 0) {
	obj88741_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88744(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88741_onTap_runningActionsCount = window.obj88741_onTap_runningActionsCount - 1;
if (window.obj88741_onTap_runningActionsCount < 0) {
	window.obj88741_onTap_runningActionsCount = 0;
} else if (window.obj88741_onTap_runningActionsCount == 0) {
	obj88741_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88741_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88741_onTap_activeActionGroupIndex = -1;
		$("#obj88741").trigger("obj88741_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88741) {
				console.warn("de-queueing event obj88741." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88741").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88741_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88736
(function(){
	window.obj88741_onTap_runningActionsCount = obj88741_onTap_runningActionsCount + 1;

	var selector = "#obj88736";
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
					window.obj88741_onTap_runningActionsCount = window.obj88741_onTap_runningActionsCount - 1;
if (window.obj88741_onTap_runningActionsCount < 0) {
	window.obj88741_onTap_runningActionsCount = 0;
} else if (window.obj88741_onTap_runningActionsCount == 0) {
	obj88741_onTap_actionGroup3();
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
				window.obj88741_onTap_runningActionsCount = window.obj88741_onTap_runningActionsCount - 1;
if (window.obj88741_onTap_runningActionsCount < 0) {
	window.obj88741_onTap_runningActionsCount = 0;
} else if (window.obj88741_onTap_runningActionsCount == 0) {
	obj88741_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88741_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88741_onTap_activeActionGroupIndex = -1;
		$("#obj88741").trigger("obj88741_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88741) {
				console.warn("de-queueing event obj88741." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88741").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88741_onTap_activeActionGroupIndex = 3;
	





















};
obj88736_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88736_onTap_activeActionGroupIndex = -1;
		$("#obj88736").trigger("obj88736_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88736) {
				console.warn("de-queueing event obj88736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88736_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88736 
hide_88738();
function hide_88738() {
	var selector = "#obj88736";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88736_onTap_runningActionsCount = obj88736_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88736_onTap_runningActionsCount = window.obj88736_onTap_runningActionsCount - 1;
if (window.obj88736_onTap_runningActionsCount < 0) {
	window.obj88736_onTap_runningActionsCount = 0;
} else if (window.obj88736_onTap_runningActionsCount == 0) {
	obj88736_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88738(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88736_onTap_runningActionsCount = window.obj88736_onTap_runningActionsCount - 1;
if (window.obj88736_onTap_runningActionsCount < 0) {
	window.obj88736_onTap_runningActionsCount = 0;
} else if (window.obj88736_onTap_runningActionsCount == 0) {
	obj88736_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88736_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88736_onTap_activeActionGroupIndex = -1;
		$("#obj88736").trigger("obj88736_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88736) {
				console.warn("de-queueing event obj88736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88736_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88741
(function(){
	window.obj88736_onTap_runningActionsCount = obj88736_onTap_runningActionsCount + 1;

	var selector = "#obj88741";
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
					window.obj88736_onTap_runningActionsCount = window.obj88736_onTap_runningActionsCount - 1;
if (window.obj88736_onTap_runningActionsCount < 0) {
	window.obj88736_onTap_runningActionsCount = 0;
} else if (window.obj88736_onTap_runningActionsCount == 0) {
	obj88736_onTap_actionGroup2();
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
				window.obj88736_onTap_runningActionsCount = window.obj88736_onTap_runningActionsCount - 1;
if (window.obj88736_onTap_runningActionsCount < 0) {
	window.obj88736_onTap_runningActionsCount = 0;
} else if (window.obj88736_onTap_runningActionsCount == 0) {
	obj88736_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88736_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88736_onTap_activeActionGroupIndex = -1;
		$("#obj88736").trigger("obj88736_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88736) {
				console.warn("de-queueing event obj88736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88736_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88746 
playAudio_88740();
function playAudio_88740() {
	window.obj88736_onTap_runningActionsCount = obj88736_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88746")[0];
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
		    window.obj88736_onTap_runningActionsCount = window.obj88736_onTap_runningActionsCount - 1;
if (window.obj88736_onTap_runningActionsCount < 0) {
	window.obj88736_onTap_runningActionsCount = 0;
} else if (window.obj88736_onTap_runningActionsCount == 0) {
	obj88736_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88736_onTap_runningActionsCount = window.obj88736_onTap_runningActionsCount - 1;
if (window.obj88736_onTap_runningActionsCount < 0) {
	window.obj88736_onTap_runningActionsCount = 0;
} else if (window.obj88736_onTap_runningActionsCount == 0) {
	obj88736_onTap_actionGroup3();
}
	}
}









};
obj88736_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88736_onTap_activeActionGroupIndex = -1;
		$("#obj88736").trigger("obj88736_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88736) {
				console.warn("de-queueing event obj88736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88736_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj45694: Event Touch Down
 *
 */
$("#obj45694").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45694_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45694_onTap is still running");
	return;
}
var obj45694_onTap_runningActionsCount = 0;
var obj45694_onTap_loopCount = 0;
obj45694_onTap_actionGroup0();
});










/*
 *
 *   obj45691: Event Touch Down
 *
 */
$("#obj45691").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45691_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45691_onTap is still running");
	return;
}
var obj45691_onTap_runningActionsCount = 0;
var obj45691_onTap_loopCount = 0;
obj45691_onTap_actionGroup0();
});






































































/*
 *
 *   obj67486: Event Touch Down
 *
 */
$("#obj67486").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67486_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67486_onTap is still running");
	return;
}
var obj67486_onTap_runningActionsCount = 0;
var obj67486_onTap_loopCount = 0;
obj67486_onTap_actionGroup0();
});










/*
 *
 *   obj67478: Event Touch Down
 *
 */
$("#obj67478").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67478_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67478_onTap is still running");
	return;
}
var obj67478_onTap_runningActionsCount = 0;
var obj67478_onTap_loopCount = 0;
obj67478_onTap_actionGroup0();
});










/*
 *
 *   obj88741: Event Touch Down
 *
 */
$("#obj88741").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88741_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88741_onTap is still running");
	return;
}
var obj88741_onTap_runningActionsCount = 0;
var obj88741_onTap_loopCount = 0;
obj88741_onTap_actionGroup0();
});










/*
 *
 *   obj88736: Event Touch Down
 *
 */
$("#obj88736").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88736_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88736_onTap is still running");
	return;
}
var obj88736_onTap_runningActionsCount = 0;
var obj88736_onTap_loopCount = 0;
obj88736_onTap_actionGroup0();
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
	
$("#obj45710").trigger('SCEventShow');
$("#obj45694").trigger('SCEventShow');
$("#obj45691").trigger('SCEventShow');
$("#obj45689").trigger('SCEventShow');
$("#obj45687").trigger('SCEventShow');
$("#obj45685").trigger('SCEventShow');
$("#obj45683").trigger('SCEventShow');
$("#obj45681").trigger('SCEventShow');
$("#obj45679").trigger('SCEventShow');
$("#obj67486").trigger('SCEventShow');
$("#obj67478").trigger('SCEventShow');
$("#obj88741").trigger('SCEventShow');
$("#obj88736").trigger('SCEventShow');
$("#obj88746").trigger('SCEventShow');
$("#obj94939").trigger('SCEventShow');
$("#obj67492").trigger('SCEventShow');
	
});