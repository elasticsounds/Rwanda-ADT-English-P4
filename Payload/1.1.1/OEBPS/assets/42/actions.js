pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 8473;
pubcoder.page.title = pubcoder.page.title || "42";
pubcoder.page.number = pubcoder.page.number || 42;
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
var obj69632_onTap_activeActionGroupIndex = -1;
var obj69632_onTap_runningActionsCount = 0;
var obj69632_onTap_loopCount = 0;
var obj69629_onTap_activeActionGroupIndex = -1;
var obj69629_onTap_runningActionsCount = 0;
var obj69629_onTap_loopCount = 0;
var obj69593_onTap_activeActionGroupIndex = -1;
var obj69593_onTap_runningActionsCount = 0;
var obj69593_onTap_loopCount = 0;
var obj69585_onTap_activeActionGroupIndex = -1;
var obj69585_onTap_runningActionsCount = 0;
var obj69585_onTap_loopCount = 0;
var obj87238_onTap_activeActionGroupIndex = -1;
var obj87238_onTap_runningActionsCount = 0;
var obj87238_onTap_loopCount = 0;
var obj87233_onTap_activeActionGroupIndex = -1;
var obj87233_onTap_runningActionsCount = 0;
var obj87233_onTap_loopCount = 0;
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
		
obj69632_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69632_onTap_activeActionGroupIndex = -1;
		$("#obj69632").trigger("obj69632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69632) {
				console.warn("de-queueing event obj69632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69632_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69634();
function goToPage_69634() {
	window.obj69632_onTap_runningActionsCount = obj69632_onTap_runningActionsCount + 1;
	$("#anchor254")[0].click();
	window.obj69632_onTap_runningActionsCount = window.obj69632_onTap_runningActionsCount - 1;
if (window.obj69632_onTap_runningActionsCount < 0) {
	window.obj69632_onTap_runningActionsCount = 0;
} else if (window.obj69632_onTap_runningActionsCount == 0) {
	obj69632_onTap_actionGroup1();
}
}





















};
obj69632_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69632_onTap_activeActionGroupIndex = -1;
		$("#obj69632").trigger("obj69632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69632) {
				console.warn("de-queueing event obj69632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69632_onTap_activeActionGroupIndex = 1;
	





















};
obj69629_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69629_onTap_activeActionGroupIndex = -1;
		$("#obj69629").trigger("obj69629_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69629) {
				console.warn("de-queueing event obj69629." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69629").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69629_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69631();
function goToPage_69631() {
	window.obj69629_onTap_runningActionsCount = obj69629_onTap_runningActionsCount + 1;
	$("#anchor255")[0].click();
	window.obj69629_onTap_runningActionsCount = window.obj69629_onTap_runningActionsCount - 1;
if (window.obj69629_onTap_runningActionsCount < 0) {
	window.obj69629_onTap_runningActionsCount = 0;
} else if (window.obj69629_onTap_runningActionsCount == 0) {
	obj69629_onTap_actionGroup1();
}
}





















};
obj69629_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69629_onTap_activeActionGroupIndex = -1;
		$("#obj69629").trigger("obj69629_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69629) {
				console.warn("de-queueing event obj69629." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69629").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69629_onTap_activeActionGroupIndex = 1;
	





















};
obj69593_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69593_onTap_activeActionGroupIndex = -1;
		$("#obj69593").trigger("obj69593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69593) {
				console.warn("de-queueing event obj69593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69593_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69593 
hide_69596();
function hide_69596() {
	var selector = "#obj69593";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69593_onTap_runningActionsCount = obj69593_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69593_onTap_runningActionsCount = window.obj69593_onTap_runningActionsCount - 1;
if (window.obj69593_onTap_runningActionsCount < 0) {
	window.obj69593_onTap_runningActionsCount = 0;
} else if (window.obj69593_onTap_runningActionsCount == 0) {
	obj69593_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69596(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69593_onTap_runningActionsCount = window.obj69593_onTap_runningActionsCount - 1;
if (window.obj69593_onTap_runningActionsCount < 0) {
	window.obj69593_onTap_runningActionsCount = 0;
} else if (window.obj69593_onTap_runningActionsCount == 0) {
	obj69593_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj69583 
stopMovie_69595();
function stopMovie_69595() {
	window.obj69593_onTap_runningActionsCount = obj69593_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69583")[0];
	myVideo.pause();
	window.obj69593_onTap_runningActionsCount = window.obj69593_onTap_runningActionsCount - 1;
if (window.obj69593_onTap_runningActionsCount < 0) {
	window.obj69593_onTap_runningActionsCount = 0;
} else if (window.obj69593_onTap_runningActionsCount == 0) {
	obj69593_onTap_actionGroup1();
}
}
















};
obj69593_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69593_onTap_activeActionGroupIndex = -1;
		$("#obj69593").trigger("obj69593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69593) {
				console.warn("de-queueing event obj69593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69593_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69585
(function(){
	window.obj69593_onTap_runningActionsCount = obj69593_onTap_runningActionsCount + 1;

	var selector = "#obj69585";
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
					window.obj69593_onTap_runningActionsCount = window.obj69593_onTap_runningActionsCount - 1;
if (window.obj69593_onTap_runningActionsCount < 0) {
	window.obj69593_onTap_runningActionsCount = 0;
} else if (window.obj69593_onTap_runningActionsCount == 0) {
	obj69593_onTap_actionGroup2();
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
				window.obj69593_onTap_runningActionsCount = window.obj69593_onTap_runningActionsCount - 1;
if (window.obj69593_onTap_runningActionsCount < 0) {
	window.obj69593_onTap_runningActionsCount = 0;
} else if (window.obj69593_onTap_runningActionsCount == 0) {
	obj69593_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69593_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69593_onTap_activeActionGroupIndex = -1;
		$("#obj69593").trigger("obj69593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69593) {
				console.warn("de-queueing event obj69593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69593_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69583 
move_69598();
function move_69598() {
	window.obj69593_onTap_runningActionsCount = obj69593_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69583");
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
			window.obj69593_onTap_runningActionsCount = window.obj69593_onTap_runningActionsCount - 1;
if (window.obj69593_onTap_runningActionsCount < 0) {
	window.obj69593_onTap_runningActionsCount = 0;
} else if (window.obj69593_onTap_runningActionsCount == 0) {
	obj69593_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69593_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69593_onTap_activeActionGroupIndex = -1;
		$("#obj69593").trigger("obj69593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69593) {
				console.warn("de-queueing event obj69593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69593_onTap_activeActionGroupIndex = 3;
	





















};
obj69585_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69585_onTap_activeActionGroupIndex = -1;
		$("#obj69585").trigger("obj69585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69585) {
				console.warn("de-queueing event obj69585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69585_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69585 
hide_69588();
function hide_69588() {
	var selector = "#obj69585";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69585_onTap_runningActionsCount = obj69585_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69585_onTap_runningActionsCount = window.obj69585_onTap_runningActionsCount - 1;
if (window.obj69585_onTap_runningActionsCount < 0) {
	window.obj69585_onTap_runningActionsCount = 0;
} else if (window.obj69585_onTap_runningActionsCount == 0) {
	obj69585_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69588(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69585_onTap_runningActionsCount = window.obj69585_onTap_runningActionsCount - 1;
if (window.obj69585_onTap_runningActionsCount < 0) {
	window.obj69585_onTap_runningActionsCount = 0;
} else if (window.obj69585_onTap_runningActionsCount == 0) {
	obj69585_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj69583 
playPauseMovie_69587();
function playPauseMovie_69587() {
	window.obj69585_onTap_runningActionsCount = obj69585_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69583")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj69585_onTap_runningActionsCount = window.obj69585_onTap_runningActionsCount - 1;
if (window.obj69585_onTap_runningActionsCount < 0) {
	window.obj69585_onTap_runningActionsCount = 0;
} else if (window.obj69585_onTap_runningActionsCount == 0) {
	obj69585_onTap_actionGroup1();
}
}

















};
obj69585_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69585_onTap_activeActionGroupIndex = -1;
		$("#obj69585").trigger("obj69585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69585) {
				console.warn("de-queueing event obj69585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69585_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69593
(function(){
	window.obj69585_onTap_runningActionsCount = obj69585_onTap_runningActionsCount + 1;

	var selector = "#obj69593";
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
					window.obj69585_onTap_runningActionsCount = window.obj69585_onTap_runningActionsCount - 1;
if (window.obj69585_onTap_runningActionsCount < 0) {
	window.obj69585_onTap_runningActionsCount = 0;
} else if (window.obj69585_onTap_runningActionsCount == 0) {
	obj69585_onTap_actionGroup2();
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
				window.obj69585_onTap_runningActionsCount = window.obj69585_onTap_runningActionsCount - 1;
if (window.obj69585_onTap_runningActionsCount < 0) {
	window.obj69585_onTap_runningActionsCount = 0;
} else if (window.obj69585_onTap_runningActionsCount == 0) {
	obj69585_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69585_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69585_onTap_activeActionGroupIndex = -1;
		$("#obj69585").trigger("obj69585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69585) {
				console.warn("de-queueing event obj69585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69585_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69583 
move_69590();
function move_69590() {
	window.obj69585_onTap_runningActionsCount = obj69585_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69583");
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
			window.obj69585_onTap_runningActionsCount = window.obj69585_onTap_runningActionsCount - 1;
if (window.obj69585_onTap_runningActionsCount < 0) {
	window.obj69585_onTap_runningActionsCount = 0;
} else if (window.obj69585_onTap_runningActionsCount == 0) {
	obj69585_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69585_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69585_onTap_activeActionGroupIndex = -1;
		$("#obj69585").trigger("obj69585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69585) {
				console.warn("de-queueing event obj69585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69585_onTap_activeActionGroupIndex = 3;
	





















};
obj87238_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87238_onTap_activeActionGroupIndex = -1;
		$("#obj87238").trigger("obj87238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87238) {
				console.warn("de-queueing event obj87238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87238_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87243 
stopAudio_87240();
function stopAudio_87240() {
	window.obj87238_onTap_runningActionsCount = obj87238_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87243")[0];
	myAudio.pause();
	window.obj87238_onTap_runningActionsCount = window.obj87238_onTap_runningActionsCount - 1;
if (window.obj87238_onTap_runningActionsCount < 0) {
	window.obj87238_onTap_runningActionsCount = 0;
} else if (window.obj87238_onTap_runningActionsCount == 0) {
	obj87238_onTap_actionGroup1();
}
}








};
obj87238_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87238_onTap_activeActionGroupIndex = -1;
		$("#obj87238").trigger("obj87238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87238) {
				console.warn("de-queueing event obj87238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87238_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87238 
hide_87241();
function hide_87241() {
	var selector = "#obj87238";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87238_onTap_runningActionsCount = obj87238_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87238_onTap_runningActionsCount = window.obj87238_onTap_runningActionsCount - 1;
if (window.obj87238_onTap_runningActionsCount < 0) {
	window.obj87238_onTap_runningActionsCount = 0;
} else if (window.obj87238_onTap_runningActionsCount == 0) {
	obj87238_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87241(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87238_onTap_runningActionsCount = window.obj87238_onTap_runningActionsCount - 1;
if (window.obj87238_onTap_runningActionsCount < 0) {
	window.obj87238_onTap_runningActionsCount = 0;
} else if (window.obj87238_onTap_runningActionsCount == 0) {
	obj87238_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87238_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87238_onTap_activeActionGroupIndex = -1;
		$("#obj87238").trigger("obj87238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87238) {
				console.warn("de-queueing event obj87238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87238_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87233
(function(){
	window.obj87238_onTap_runningActionsCount = obj87238_onTap_runningActionsCount + 1;

	var selector = "#obj87233";
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
					window.obj87238_onTap_runningActionsCount = window.obj87238_onTap_runningActionsCount - 1;
if (window.obj87238_onTap_runningActionsCount < 0) {
	window.obj87238_onTap_runningActionsCount = 0;
} else if (window.obj87238_onTap_runningActionsCount == 0) {
	obj87238_onTap_actionGroup3();
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
				window.obj87238_onTap_runningActionsCount = window.obj87238_onTap_runningActionsCount - 1;
if (window.obj87238_onTap_runningActionsCount < 0) {
	window.obj87238_onTap_runningActionsCount = 0;
} else if (window.obj87238_onTap_runningActionsCount == 0) {
	obj87238_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87238_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87238_onTap_activeActionGroupIndex = -1;
		$("#obj87238").trigger("obj87238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87238) {
				console.warn("de-queueing event obj87238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87238_onTap_activeActionGroupIndex = 3;
	





















};
obj87233_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87233_onTap_activeActionGroupIndex = -1;
		$("#obj87233").trigger("obj87233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87233) {
				console.warn("de-queueing event obj87233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87233_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87233 
hide_87235();
function hide_87235() {
	var selector = "#obj87233";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87233_onTap_runningActionsCount = obj87233_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87233_onTap_runningActionsCount = window.obj87233_onTap_runningActionsCount - 1;
if (window.obj87233_onTap_runningActionsCount < 0) {
	window.obj87233_onTap_runningActionsCount = 0;
} else if (window.obj87233_onTap_runningActionsCount == 0) {
	obj87233_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87235(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87233_onTap_runningActionsCount = window.obj87233_onTap_runningActionsCount - 1;
if (window.obj87233_onTap_runningActionsCount < 0) {
	window.obj87233_onTap_runningActionsCount = 0;
} else if (window.obj87233_onTap_runningActionsCount == 0) {
	obj87233_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87233_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87233_onTap_activeActionGroupIndex = -1;
		$("#obj87233").trigger("obj87233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87233) {
				console.warn("de-queueing event obj87233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87233_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87238
(function(){
	window.obj87233_onTap_runningActionsCount = obj87233_onTap_runningActionsCount + 1;

	var selector = "#obj87238";
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
					window.obj87233_onTap_runningActionsCount = window.obj87233_onTap_runningActionsCount - 1;
if (window.obj87233_onTap_runningActionsCount < 0) {
	window.obj87233_onTap_runningActionsCount = 0;
} else if (window.obj87233_onTap_runningActionsCount == 0) {
	obj87233_onTap_actionGroup2();
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
				window.obj87233_onTap_runningActionsCount = window.obj87233_onTap_runningActionsCount - 1;
if (window.obj87233_onTap_runningActionsCount < 0) {
	window.obj87233_onTap_runningActionsCount = 0;
} else if (window.obj87233_onTap_runningActionsCount == 0) {
	obj87233_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87233_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87233_onTap_activeActionGroupIndex = -1;
		$("#obj87233").trigger("obj87233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87233) {
				console.warn("de-queueing event obj87233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87233_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87243 
playAudio_87237();
function playAudio_87237() {
	window.obj87233_onTap_runningActionsCount = obj87233_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87243")[0];
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
		    window.obj87233_onTap_runningActionsCount = window.obj87233_onTap_runningActionsCount - 1;
if (window.obj87233_onTap_runningActionsCount < 0) {
	window.obj87233_onTap_runningActionsCount = 0;
} else if (window.obj87233_onTap_runningActionsCount == 0) {
	obj87233_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87233_onTap_runningActionsCount = window.obj87233_onTap_runningActionsCount - 1;
if (window.obj87233_onTap_runningActionsCount < 0) {
	window.obj87233_onTap_runningActionsCount = 0;
} else if (window.obj87233_onTap_runningActionsCount == 0) {
	obj87233_onTap_actionGroup3();
}
	}
}









};
obj87233_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87233_onTap_activeActionGroupIndex = -1;
		$("#obj87233").trigger("obj87233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87233) {
				console.warn("de-queueing event obj87233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87233_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj69632: Event Touch Down
 *
 */
$("#obj69632").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69632_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69632_onTap is still running");
	return;
}
var obj69632_onTap_runningActionsCount = 0;
var obj69632_onTap_loopCount = 0;
obj69632_onTap_actionGroup0();
});










/*
 *
 *   obj69629: Event Touch Down
 *
 */
$("#obj69629").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69629_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69629_onTap is still running");
	return;
}
var obj69629_onTap_runningActionsCount = 0;
var obj69629_onTap_loopCount = 0;
obj69629_onTap_actionGroup0();
});




































































































/*
 *
 *   obj69593: Event Touch Down
 *
 */
$("#obj69593").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69593_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69593_onTap is still running");
	return;
}
var obj69593_onTap_runningActionsCount = 0;
var obj69593_onTap_loopCount = 0;
obj69593_onTap_actionGroup0();
});










/*
 *
 *   obj69585: Event Touch Down
 *
 */
$("#obj69585").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69585_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69585_onTap is still running");
	return;
}
var obj69585_onTap_runningActionsCount = 0;
var obj69585_onTap_loopCount = 0;
obj69585_onTap_actionGroup0();
});










/*
 *
 *   obj87238: Event Touch Down
 *
 */
$("#obj87238").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87238_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87238_onTap is still running");
	return;
}
var obj87238_onTap_runningActionsCount = 0;
var obj87238_onTap_loopCount = 0;
obj87238_onTap_actionGroup0();
});










/*
 *
 *   obj87233: Event Touch Down
 *
 */
$("#obj87233").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87233_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87233_onTap is still running");
	return;
}
var obj87233_onTap_runningActionsCount = 0;
var obj87233_onTap_loopCount = 0;
obj87233_onTap_actionGroup0();
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
	
$("#obj69635").trigger('SCEventShow');
$("#obj69632").trigger('SCEventShow');
$("#obj69629").trigger('SCEventShow');
$("#obj69627").trigger('SCEventShow');
$("#obj69625").trigger('SCEventShow');
$("#obj69623").trigger('SCEventShow');
$("#obj69617").trigger('SCEventShow');
$("#obj69615").trigger('SCEventShow');
$("#obj69621").trigger('SCEventShow');
$("#obj69619").trigger('SCEventShow');
$("#obj69613").trigger('SCEventShow');
$("#obj69611").trigger('SCEventShow');
$("#obj69593").trigger('SCEventShow');
$("#obj69585").trigger('SCEventShow');
$("#obj87238").trigger('SCEventShow');
$("#obj87233").trigger('SCEventShow');
$("#obj87243").trigger('SCEventShow');
$("#obj94713").trigger('SCEventShow');
$("#obj69583").trigger('SCEventShow');
	
});