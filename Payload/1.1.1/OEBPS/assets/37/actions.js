pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 7610;
pubcoder.page.title = pubcoder.page.title || "37";
pubcoder.page.number = pubcoder.page.number || 37;
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
var obj69102_onTap_activeActionGroupIndex = -1;
var obj69102_onTap_runningActionsCount = 0;
var obj69102_onTap_loopCount = 0;
var obj69099_onTap_activeActionGroupIndex = -1;
var obj69099_onTap_runningActionsCount = 0;
var obj69099_onTap_loopCount = 0;
var obj69067_onTap_activeActionGroupIndex = -1;
var obj69067_onTap_runningActionsCount = 0;
var obj69067_onTap_loopCount = 0;
var obj69059_onTap_activeActionGroupIndex = -1;
var obj69059_onTap_runningActionsCount = 0;
var obj69059_onTap_loopCount = 0;
var obj87178_onTap_activeActionGroupIndex = -1;
var obj87178_onTap_runningActionsCount = 0;
var obj87178_onTap_loopCount = 0;
var obj87173_onTap_activeActionGroupIndex = -1;
var obj87173_onTap_runningActionsCount = 0;
var obj87173_onTap_loopCount = 0;
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
		
obj69102_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69102_onTap_activeActionGroupIndex = -1;
		$("#obj69102").trigger("obj69102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69102) {
				console.warn("de-queueing event obj69102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69102_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69104();
function goToPage_69104() {
	window.obj69102_onTap_runningActionsCount = obj69102_onTap_runningActionsCount + 1;
	$("#anchor228")[0].click();
	window.obj69102_onTap_runningActionsCount = window.obj69102_onTap_runningActionsCount - 1;
if (window.obj69102_onTap_runningActionsCount < 0) {
	window.obj69102_onTap_runningActionsCount = 0;
} else if (window.obj69102_onTap_runningActionsCount == 0) {
	obj69102_onTap_actionGroup1();
}
}





















};
obj69102_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69102_onTap_activeActionGroupIndex = -1;
		$("#obj69102").trigger("obj69102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69102) {
				console.warn("de-queueing event obj69102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69102_onTap_activeActionGroupIndex = 1;
	





















};
obj69099_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69099_onTap_activeActionGroupIndex = -1;
		$("#obj69099").trigger("obj69099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69099) {
				console.warn("de-queueing event obj69099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69099_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69101();
function goToPage_69101() {
	window.obj69099_onTap_runningActionsCount = obj69099_onTap_runningActionsCount + 1;
	$("#anchor229")[0].click();
	window.obj69099_onTap_runningActionsCount = window.obj69099_onTap_runningActionsCount - 1;
if (window.obj69099_onTap_runningActionsCount < 0) {
	window.obj69099_onTap_runningActionsCount = 0;
} else if (window.obj69099_onTap_runningActionsCount == 0) {
	obj69099_onTap_actionGroup1();
}
}





















};
obj69099_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69099_onTap_activeActionGroupIndex = -1;
		$("#obj69099").trigger("obj69099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69099) {
				console.warn("de-queueing event obj69099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69099_onTap_activeActionGroupIndex = 1;
	





















};
obj69067_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69067_onTap_activeActionGroupIndex = -1;
		$("#obj69067").trigger("obj69067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69067) {
				console.warn("de-queueing event obj69067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69067_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69067 
hide_69070();
function hide_69070() {
	var selector = "#obj69067";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69067_onTap_runningActionsCount = obj69067_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69067_onTap_runningActionsCount = window.obj69067_onTap_runningActionsCount - 1;
if (window.obj69067_onTap_runningActionsCount < 0) {
	window.obj69067_onTap_runningActionsCount = 0;
} else if (window.obj69067_onTap_runningActionsCount == 0) {
	obj69067_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69070(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69067_onTap_runningActionsCount = window.obj69067_onTap_runningActionsCount - 1;
if (window.obj69067_onTap_runningActionsCount < 0) {
	window.obj69067_onTap_runningActionsCount = 0;
} else if (window.obj69067_onTap_runningActionsCount == 0) {
	obj69067_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj69057 
stopMovie_69069();
function stopMovie_69069() {
	window.obj69067_onTap_runningActionsCount = obj69067_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69057")[0];
	myVideo.pause();
	window.obj69067_onTap_runningActionsCount = window.obj69067_onTap_runningActionsCount - 1;
if (window.obj69067_onTap_runningActionsCount < 0) {
	window.obj69067_onTap_runningActionsCount = 0;
} else if (window.obj69067_onTap_runningActionsCount == 0) {
	obj69067_onTap_actionGroup1();
}
}
















};
obj69067_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69067_onTap_activeActionGroupIndex = -1;
		$("#obj69067").trigger("obj69067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69067) {
				console.warn("de-queueing event obj69067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69067_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69059
(function(){
	window.obj69067_onTap_runningActionsCount = obj69067_onTap_runningActionsCount + 1;

	var selector = "#obj69059";
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
					window.obj69067_onTap_runningActionsCount = window.obj69067_onTap_runningActionsCount - 1;
if (window.obj69067_onTap_runningActionsCount < 0) {
	window.obj69067_onTap_runningActionsCount = 0;
} else if (window.obj69067_onTap_runningActionsCount == 0) {
	obj69067_onTap_actionGroup2();
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
				window.obj69067_onTap_runningActionsCount = window.obj69067_onTap_runningActionsCount - 1;
if (window.obj69067_onTap_runningActionsCount < 0) {
	window.obj69067_onTap_runningActionsCount = 0;
} else if (window.obj69067_onTap_runningActionsCount == 0) {
	obj69067_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69067_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69067_onTap_activeActionGroupIndex = -1;
		$("#obj69067").trigger("obj69067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69067) {
				console.warn("de-queueing event obj69067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69067_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69057 
move_69072();
function move_69072() {
	window.obj69067_onTap_runningActionsCount = obj69067_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69057");
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
			window.obj69067_onTap_runningActionsCount = window.obj69067_onTap_runningActionsCount - 1;
if (window.obj69067_onTap_runningActionsCount < 0) {
	window.obj69067_onTap_runningActionsCount = 0;
} else if (window.obj69067_onTap_runningActionsCount == 0) {
	obj69067_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69067_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69067_onTap_activeActionGroupIndex = -1;
		$("#obj69067").trigger("obj69067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69067) {
				console.warn("de-queueing event obj69067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69067_onTap_activeActionGroupIndex = 3;
	





















};
obj69059_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69059_onTap_activeActionGroupIndex = -1;
		$("#obj69059").trigger("obj69059_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69059) {
				console.warn("de-queueing event obj69059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69059_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69059 
hide_69062();
function hide_69062() {
	var selector = "#obj69059";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69059_onTap_runningActionsCount = obj69059_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69059_onTap_runningActionsCount = window.obj69059_onTap_runningActionsCount - 1;
if (window.obj69059_onTap_runningActionsCount < 0) {
	window.obj69059_onTap_runningActionsCount = 0;
} else if (window.obj69059_onTap_runningActionsCount == 0) {
	obj69059_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69062(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69059_onTap_runningActionsCount = window.obj69059_onTap_runningActionsCount - 1;
if (window.obj69059_onTap_runningActionsCount < 0) {
	window.obj69059_onTap_runningActionsCount = 0;
} else if (window.obj69059_onTap_runningActionsCount == 0) {
	obj69059_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj69057 
playPauseMovie_69061();
function playPauseMovie_69061() {
	window.obj69059_onTap_runningActionsCount = obj69059_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69057")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj69059_onTap_runningActionsCount = window.obj69059_onTap_runningActionsCount - 1;
if (window.obj69059_onTap_runningActionsCount < 0) {
	window.obj69059_onTap_runningActionsCount = 0;
} else if (window.obj69059_onTap_runningActionsCount == 0) {
	obj69059_onTap_actionGroup1();
}
}

















};
obj69059_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69059_onTap_activeActionGroupIndex = -1;
		$("#obj69059").trigger("obj69059_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69059) {
				console.warn("de-queueing event obj69059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69059_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69067
(function(){
	window.obj69059_onTap_runningActionsCount = obj69059_onTap_runningActionsCount + 1;

	var selector = "#obj69067";
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
					window.obj69059_onTap_runningActionsCount = window.obj69059_onTap_runningActionsCount - 1;
if (window.obj69059_onTap_runningActionsCount < 0) {
	window.obj69059_onTap_runningActionsCount = 0;
} else if (window.obj69059_onTap_runningActionsCount == 0) {
	obj69059_onTap_actionGroup2();
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
				window.obj69059_onTap_runningActionsCount = window.obj69059_onTap_runningActionsCount - 1;
if (window.obj69059_onTap_runningActionsCount < 0) {
	window.obj69059_onTap_runningActionsCount = 0;
} else if (window.obj69059_onTap_runningActionsCount == 0) {
	obj69059_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69059_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69059_onTap_activeActionGroupIndex = -1;
		$("#obj69059").trigger("obj69059_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69059) {
				console.warn("de-queueing event obj69059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69059_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69057 
move_69064();
function move_69064() {
	window.obj69059_onTap_runningActionsCount = obj69059_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69057");
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
			window.obj69059_onTap_runningActionsCount = window.obj69059_onTap_runningActionsCount - 1;
if (window.obj69059_onTap_runningActionsCount < 0) {
	window.obj69059_onTap_runningActionsCount = 0;
} else if (window.obj69059_onTap_runningActionsCount == 0) {
	obj69059_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69059_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69059_onTap_activeActionGroupIndex = -1;
		$("#obj69059").trigger("obj69059_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69059) {
				console.warn("de-queueing event obj69059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69059_onTap_activeActionGroupIndex = 3;
	





















};
obj87178_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87178_onTap_activeActionGroupIndex = -1;
		$("#obj87178").trigger("obj87178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87178) {
				console.warn("de-queueing event obj87178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87178_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87183 
stopAudio_87180();
function stopAudio_87180() {
	window.obj87178_onTap_runningActionsCount = obj87178_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87183")[0];
	myAudio.pause();
	window.obj87178_onTap_runningActionsCount = window.obj87178_onTap_runningActionsCount - 1;
if (window.obj87178_onTap_runningActionsCount < 0) {
	window.obj87178_onTap_runningActionsCount = 0;
} else if (window.obj87178_onTap_runningActionsCount == 0) {
	obj87178_onTap_actionGroup1();
}
}








};
obj87178_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87178_onTap_activeActionGroupIndex = -1;
		$("#obj87178").trigger("obj87178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87178) {
				console.warn("de-queueing event obj87178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87178_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87178 
hide_87181();
function hide_87181() {
	var selector = "#obj87178";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87178_onTap_runningActionsCount = obj87178_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87178_onTap_runningActionsCount = window.obj87178_onTap_runningActionsCount - 1;
if (window.obj87178_onTap_runningActionsCount < 0) {
	window.obj87178_onTap_runningActionsCount = 0;
} else if (window.obj87178_onTap_runningActionsCount == 0) {
	obj87178_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87181(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87178_onTap_runningActionsCount = window.obj87178_onTap_runningActionsCount - 1;
if (window.obj87178_onTap_runningActionsCount < 0) {
	window.obj87178_onTap_runningActionsCount = 0;
} else if (window.obj87178_onTap_runningActionsCount == 0) {
	obj87178_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87178_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87178_onTap_activeActionGroupIndex = -1;
		$("#obj87178").trigger("obj87178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87178) {
				console.warn("de-queueing event obj87178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87178_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87173
(function(){
	window.obj87178_onTap_runningActionsCount = obj87178_onTap_runningActionsCount + 1;

	var selector = "#obj87173";
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
					window.obj87178_onTap_runningActionsCount = window.obj87178_onTap_runningActionsCount - 1;
if (window.obj87178_onTap_runningActionsCount < 0) {
	window.obj87178_onTap_runningActionsCount = 0;
} else if (window.obj87178_onTap_runningActionsCount == 0) {
	obj87178_onTap_actionGroup3();
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
				window.obj87178_onTap_runningActionsCount = window.obj87178_onTap_runningActionsCount - 1;
if (window.obj87178_onTap_runningActionsCount < 0) {
	window.obj87178_onTap_runningActionsCount = 0;
} else if (window.obj87178_onTap_runningActionsCount == 0) {
	obj87178_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87178_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87178_onTap_activeActionGroupIndex = -1;
		$("#obj87178").trigger("obj87178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87178) {
				console.warn("de-queueing event obj87178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87178_onTap_activeActionGroupIndex = 3;
	





















};
obj87173_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87173_onTap_activeActionGroupIndex = -1;
		$("#obj87173").trigger("obj87173_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87173) {
				console.warn("de-queueing event obj87173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87173_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87173 
hide_87175();
function hide_87175() {
	var selector = "#obj87173";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87173_onTap_runningActionsCount = obj87173_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87173_onTap_runningActionsCount = window.obj87173_onTap_runningActionsCount - 1;
if (window.obj87173_onTap_runningActionsCount < 0) {
	window.obj87173_onTap_runningActionsCount = 0;
} else if (window.obj87173_onTap_runningActionsCount == 0) {
	obj87173_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87175(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87173_onTap_runningActionsCount = window.obj87173_onTap_runningActionsCount - 1;
if (window.obj87173_onTap_runningActionsCount < 0) {
	window.obj87173_onTap_runningActionsCount = 0;
} else if (window.obj87173_onTap_runningActionsCount == 0) {
	obj87173_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87173_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87173_onTap_activeActionGroupIndex = -1;
		$("#obj87173").trigger("obj87173_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87173) {
				console.warn("de-queueing event obj87173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87173_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87178
(function(){
	window.obj87173_onTap_runningActionsCount = obj87173_onTap_runningActionsCount + 1;

	var selector = "#obj87178";
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
					window.obj87173_onTap_runningActionsCount = window.obj87173_onTap_runningActionsCount - 1;
if (window.obj87173_onTap_runningActionsCount < 0) {
	window.obj87173_onTap_runningActionsCount = 0;
} else if (window.obj87173_onTap_runningActionsCount == 0) {
	obj87173_onTap_actionGroup2();
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
				window.obj87173_onTap_runningActionsCount = window.obj87173_onTap_runningActionsCount - 1;
if (window.obj87173_onTap_runningActionsCount < 0) {
	window.obj87173_onTap_runningActionsCount = 0;
} else if (window.obj87173_onTap_runningActionsCount == 0) {
	obj87173_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87173_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87173_onTap_activeActionGroupIndex = -1;
		$("#obj87173").trigger("obj87173_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87173) {
				console.warn("de-queueing event obj87173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87173_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87183 
playAudio_87177();
function playAudio_87177() {
	window.obj87173_onTap_runningActionsCount = obj87173_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87183")[0];
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
		    window.obj87173_onTap_runningActionsCount = window.obj87173_onTap_runningActionsCount - 1;
if (window.obj87173_onTap_runningActionsCount < 0) {
	window.obj87173_onTap_runningActionsCount = 0;
} else if (window.obj87173_onTap_runningActionsCount == 0) {
	obj87173_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87173_onTap_runningActionsCount = window.obj87173_onTap_runningActionsCount - 1;
if (window.obj87173_onTap_runningActionsCount < 0) {
	window.obj87173_onTap_runningActionsCount = 0;
} else if (window.obj87173_onTap_runningActionsCount == 0) {
	obj87173_onTap_actionGroup3();
}
	}
}









};
obj87173_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87173_onTap_activeActionGroupIndex = -1;
		$("#obj87173").trigger("obj87173_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87173) {
				console.warn("de-queueing event obj87173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87173_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj69102: Event Touch Down
 *
 */
$("#obj69102").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69102_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69102_onTap is still running");
	return;
}
var obj69102_onTap_runningActionsCount = 0;
var obj69102_onTap_loopCount = 0;
obj69102_onTap_actionGroup0();
});










/*
 *
 *   obj69099: Event Touch Down
 *
 */
$("#obj69099").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69099_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69099_onTap is still running");
	return;
}
var obj69099_onTap_runningActionsCount = 0;
var obj69099_onTap_loopCount = 0;
obj69099_onTap_actionGroup0();
});
















































































/*
 *
 *   obj69067: Event Touch Down
 *
 */
$("#obj69067").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69067_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69067_onTap is still running");
	return;
}
var obj69067_onTap_runningActionsCount = 0;
var obj69067_onTap_loopCount = 0;
obj69067_onTap_actionGroup0();
});










/*
 *
 *   obj69059: Event Touch Down
 *
 */
$("#obj69059").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69059_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69059_onTap is still running");
	return;
}
var obj69059_onTap_runningActionsCount = 0;
var obj69059_onTap_loopCount = 0;
obj69059_onTap_actionGroup0();
});










/*
 *
 *   obj87178: Event Touch Down
 *
 */
$("#obj87178").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87178_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87178_onTap is still running");
	return;
}
var obj87178_onTap_runningActionsCount = 0;
var obj87178_onTap_loopCount = 0;
obj87178_onTap_actionGroup0();
});










/*
 *
 *   obj87173: Event Touch Down
 *
 */
$("#obj87173").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87173_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87173_onTap is still running");
	return;
}
var obj87173_onTap_runningActionsCount = 0;
var obj87173_onTap_loopCount = 0;
obj87173_onTap_actionGroup0();
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
	
$("#obj69105").trigger('SCEventShow');
$("#obj69102").trigger('SCEventShow');
$("#obj69099").trigger('SCEventShow');
$("#obj69097").trigger('SCEventShow');
$("#obj69095").trigger('SCEventShow');
$("#obj69093").trigger('SCEventShow');
$("#obj69091").trigger('SCEventShow');
$("#obj69089").trigger('SCEventShow');
$("#obj69087").trigger('SCEventShow');
$("#obj69085").trigger('SCEventShow');
$("#obj69067").trigger('SCEventShow');
$("#obj69059").trigger('SCEventShow');
$("#obj87178").trigger('SCEventShow');
$("#obj87173").trigger('SCEventShow');
$("#obj87183").trigger('SCEventShow');
$("#obj94703").trigger('SCEventShow');
$("#obj69057").trigger('SCEventShow');
	
});