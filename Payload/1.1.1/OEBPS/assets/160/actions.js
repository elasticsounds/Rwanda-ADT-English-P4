pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 46149;
pubcoder.page.title = pubcoder.page.title || "160";
pubcoder.page.number = pubcoder.page.number || 160;
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
var obj46165_onTap_activeActionGroupIndex = -1;
var obj46165_onTap_runningActionsCount = 0;
var obj46165_onTap_loopCount = 0;
var obj46162_onTap_activeActionGroupIndex = -1;
var obj46162_onTap_runningActionsCount = 0;
var obj46162_onTap_loopCount = 0;
var obj67566_onTap_activeActionGroupIndex = -1;
var obj67566_onTap_runningActionsCount = 0;
var obj67566_onTap_loopCount = 0;
var obj67558_onTap_activeActionGroupIndex = -1;
var obj67558_onTap_runningActionsCount = 0;
var obj67558_onTap_loopCount = 0;
var obj88801_onTap_activeActionGroupIndex = -1;
var obj88801_onTap_runningActionsCount = 0;
var obj88801_onTap_loopCount = 0;
var obj88796_onTap_activeActionGroupIndex = -1;
var obj88796_onTap_runningActionsCount = 0;
var obj88796_onTap_loopCount = 0;
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
		
obj46165_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46165_onTap_activeActionGroupIndex = -1;
		$("#obj46165").trigger("obj46165_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46165) {
				console.warn("de-queueing event obj46165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46165_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46167();
function goToPage_46167() {
	window.obj46165_onTap_runningActionsCount = obj46165_onTap_runningActionsCount + 1;
	$("#anchor944")[0].click();
	window.obj46165_onTap_runningActionsCount = window.obj46165_onTap_runningActionsCount - 1;
if (window.obj46165_onTap_runningActionsCount < 0) {
	window.obj46165_onTap_runningActionsCount = 0;
} else if (window.obj46165_onTap_runningActionsCount == 0) {
	obj46165_onTap_actionGroup1();
}
}





















};
obj46165_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46165_onTap_activeActionGroupIndex = -1;
		$("#obj46165").trigger("obj46165_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46165) {
				console.warn("de-queueing event obj46165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46165_onTap_activeActionGroupIndex = 1;
	





















};
obj46162_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46162_onTap_activeActionGroupIndex = -1;
		$("#obj46162").trigger("obj46162_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46162) {
				console.warn("de-queueing event obj46162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46162_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46164();
function goToPage_46164() {
	window.obj46162_onTap_runningActionsCount = obj46162_onTap_runningActionsCount + 1;
	$("#anchor945")[0].click();
	window.obj46162_onTap_runningActionsCount = window.obj46162_onTap_runningActionsCount - 1;
if (window.obj46162_onTap_runningActionsCount < 0) {
	window.obj46162_onTap_runningActionsCount = 0;
} else if (window.obj46162_onTap_runningActionsCount == 0) {
	obj46162_onTap_actionGroup1();
}
}





















};
obj46162_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46162_onTap_activeActionGroupIndex = -1;
		$("#obj46162").trigger("obj46162_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46162) {
				console.warn("de-queueing event obj46162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46162_onTap_activeActionGroupIndex = 1;
	





















};
obj67566_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67566_onTap_activeActionGroupIndex = -1;
		$("#obj67566").trigger("obj67566_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67566) {
				console.warn("de-queueing event obj67566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67566_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67566 
hide_67569();
function hide_67569() {
	var selector = "#obj67566";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67566_onTap_runningActionsCount = obj67566_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67566_onTap_runningActionsCount = window.obj67566_onTap_runningActionsCount - 1;
if (window.obj67566_onTap_runningActionsCount < 0) {
	window.obj67566_onTap_runningActionsCount = 0;
} else if (window.obj67566_onTap_runningActionsCount == 0) {
	obj67566_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67569(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67566_onTap_runningActionsCount = window.obj67566_onTap_runningActionsCount - 1;
if (window.obj67566_onTap_runningActionsCount < 0) {
	window.obj67566_onTap_runningActionsCount = 0;
} else if (window.obj67566_onTap_runningActionsCount == 0) {
	obj67566_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67572 
stopMovie_67568();
function stopMovie_67568() {
	window.obj67566_onTap_runningActionsCount = obj67566_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67572")[0];
	myVideo.pause();
	window.obj67566_onTap_runningActionsCount = window.obj67566_onTap_runningActionsCount - 1;
if (window.obj67566_onTap_runningActionsCount < 0) {
	window.obj67566_onTap_runningActionsCount = 0;
} else if (window.obj67566_onTap_runningActionsCount == 0) {
	obj67566_onTap_actionGroup1();
}
}
















};
obj67566_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67566_onTap_activeActionGroupIndex = -1;
		$("#obj67566").trigger("obj67566_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67566) {
				console.warn("de-queueing event obj67566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67566_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67558
(function(){
	window.obj67566_onTap_runningActionsCount = obj67566_onTap_runningActionsCount + 1;

	var selector = "#obj67558";
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
					window.obj67566_onTap_runningActionsCount = window.obj67566_onTap_runningActionsCount - 1;
if (window.obj67566_onTap_runningActionsCount < 0) {
	window.obj67566_onTap_runningActionsCount = 0;
} else if (window.obj67566_onTap_runningActionsCount == 0) {
	obj67566_onTap_actionGroup2();
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
				window.obj67566_onTap_runningActionsCount = window.obj67566_onTap_runningActionsCount - 1;
if (window.obj67566_onTap_runningActionsCount < 0) {
	window.obj67566_onTap_runningActionsCount = 0;
} else if (window.obj67566_onTap_runningActionsCount == 0) {
	obj67566_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67566_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67566_onTap_activeActionGroupIndex = -1;
		$("#obj67566").trigger("obj67566_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67566) {
				console.warn("de-queueing event obj67566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67566_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67572 
move_67571();
function move_67571() {
	window.obj67566_onTap_runningActionsCount = obj67566_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67572");
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
			window.obj67566_onTap_runningActionsCount = window.obj67566_onTap_runningActionsCount - 1;
if (window.obj67566_onTap_runningActionsCount < 0) {
	window.obj67566_onTap_runningActionsCount = 0;
} else if (window.obj67566_onTap_runningActionsCount == 0) {
	obj67566_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67566_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67566_onTap_activeActionGroupIndex = -1;
		$("#obj67566").trigger("obj67566_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67566) {
				console.warn("de-queueing event obj67566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67566_onTap_activeActionGroupIndex = 3;
	





















};
obj67558_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67558_onTap_activeActionGroupIndex = -1;
		$("#obj67558").trigger("obj67558_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67558) {
				console.warn("de-queueing event obj67558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67558_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67558 
hide_67561();
function hide_67561() {
	var selector = "#obj67558";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67558_onTap_runningActionsCount = obj67558_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67558_onTap_runningActionsCount = window.obj67558_onTap_runningActionsCount - 1;
if (window.obj67558_onTap_runningActionsCount < 0) {
	window.obj67558_onTap_runningActionsCount = 0;
} else if (window.obj67558_onTap_runningActionsCount == 0) {
	obj67558_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67561(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67558_onTap_runningActionsCount = window.obj67558_onTap_runningActionsCount - 1;
if (window.obj67558_onTap_runningActionsCount < 0) {
	window.obj67558_onTap_runningActionsCount = 0;
} else if (window.obj67558_onTap_runningActionsCount == 0) {
	obj67558_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67572 
playPauseMovie_67560();
function playPauseMovie_67560() {
	window.obj67558_onTap_runningActionsCount = obj67558_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67572")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67558_onTap_runningActionsCount = window.obj67558_onTap_runningActionsCount - 1;
if (window.obj67558_onTap_runningActionsCount < 0) {
	window.obj67558_onTap_runningActionsCount = 0;
} else if (window.obj67558_onTap_runningActionsCount == 0) {
	obj67558_onTap_actionGroup1();
}
}

















};
obj67558_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67558_onTap_activeActionGroupIndex = -1;
		$("#obj67558").trigger("obj67558_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67558) {
				console.warn("de-queueing event obj67558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67558_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67566
(function(){
	window.obj67558_onTap_runningActionsCount = obj67558_onTap_runningActionsCount + 1;

	var selector = "#obj67566";
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
					window.obj67558_onTap_runningActionsCount = window.obj67558_onTap_runningActionsCount - 1;
if (window.obj67558_onTap_runningActionsCount < 0) {
	window.obj67558_onTap_runningActionsCount = 0;
} else if (window.obj67558_onTap_runningActionsCount == 0) {
	obj67558_onTap_actionGroup2();
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
				window.obj67558_onTap_runningActionsCount = window.obj67558_onTap_runningActionsCount - 1;
if (window.obj67558_onTap_runningActionsCount < 0) {
	window.obj67558_onTap_runningActionsCount = 0;
} else if (window.obj67558_onTap_runningActionsCount == 0) {
	obj67558_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67558_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67558_onTap_activeActionGroupIndex = -1;
		$("#obj67558").trigger("obj67558_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67558) {
				console.warn("de-queueing event obj67558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67558_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67572 
move_67563();
function move_67563() {
	window.obj67558_onTap_runningActionsCount = obj67558_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67572");
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
			window.obj67558_onTap_runningActionsCount = window.obj67558_onTap_runningActionsCount - 1;
if (window.obj67558_onTap_runningActionsCount < 0) {
	window.obj67558_onTap_runningActionsCount = 0;
} else if (window.obj67558_onTap_runningActionsCount == 0) {
	obj67558_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67558_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67558_onTap_activeActionGroupIndex = -1;
		$("#obj67558").trigger("obj67558_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67558) {
				console.warn("de-queueing event obj67558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67558_onTap_activeActionGroupIndex = 3;
	





















};
obj88801_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88801_onTap_activeActionGroupIndex = -1;
		$("#obj88801").trigger("obj88801_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88801) {
				console.warn("de-queueing event obj88801." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88801").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88801_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88806 
stopAudio_88803();
function stopAudio_88803() {
	window.obj88801_onTap_runningActionsCount = obj88801_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88806")[0];
	myAudio.pause();
	window.obj88801_onTap_runningActionsCount = window.obj88801_onTap_runningActionsCount - 1;
if (window.obj88801_onTap_runningActionsCount < 0) {
	window.obj88801_onTap_runningActionsCount = 0;
} else if (window.obj88801_onTap_runningActionsCount == 0) {
	obj88801_onTap_actionGroup1();
}
}








};
obj88801_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88801_onTap_activeActionGroupIndex = -1;
		$("#obj88801").trigger("obj88801_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88801) {
				console.warn("de-queueing event obj88801." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88801").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88801_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88801 
hide_88804();
function hide_88804() {
	var selector = "#obj88801";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88801_onTap_runningActionsCount = obj88801_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88801_onTap_runningActionsCount = window.obj88801_onTap_runningActionsCount - 1;
if (window.obj88801_onTap_runningActionsCount < 0) {
	window.obj88801_onTap_runningActionsCount = 0;
} else if (window.obj88801_onTap_runningActionsCount == 0) {
	obj88801_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88804(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88801_onTap_runningActionsCount = window.obj88801_onTap_runningActionsCount - 1;
if (window.obj88801_onTap_runningActionsCount < 0) {
	window.obj88801_onTap_runningActionsCount = 0;
} else if (window.obj88801_onTap_runningActionsCount == 0) {
	obj88801_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88801_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88801_onTap_activeActionGroupIndex = -1;
		$("#obj88801").trigger("obj88801_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88801) {
				console.warn("de-queueing event obj88801." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88801").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88801_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88796
(function(){
	window.obj88801_onTap_runningActionsCount = obj88801_onTap_runningActionsCount + 1;

	var selector = "#obj88796";
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
					window.obj88801_onTap_runningActionsCount = window.obj88801_onTap_runningActionsCount - 1;
if (window.obj88801_onTap_runningActionsCount < 0) {
	window.obj88801_onTap_runningActionsCount = 0;
} else if (window.obj88801_onTap_runningActionsCount == 0) {
	obj88801_onTap_actionGroup3();
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
				window.obj88801_onTap_runningActionsCount = window.obj88801_onTap_runningActionsCount - 1;
if (window.obj88801_onTap_runningActionsCount < 0) {
	window.obj88801_onTap_runningActionsCount = 0;
} else if (window.obj88801_onTap_runningActionsCount == 0) {
	obj88801_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88801_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88801_onTap_activeActionGroupIndex = -1;
		$("#obj88801").trigger("obj88801_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88801) {
				console.warn("de-queueing event obj88801." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88801").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88801_onTap_activeActionGroupIndex = 3;
	





















};
obj88796_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88796_onTap_activeActionGroupIndex = -1;
		$("#obj88796").trigger("obj88796_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88796) {
				console.warn("de-queueing event obj88796." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88796").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88796_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88796 
hide_88798();
function hide_88798() {
	var selector = "#obj88796";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88796_onTap_runningActionsCount = obj88796_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88796_onTap_runningActionsCount = window.obj88796_onTap_runningActionsCount - 1;
if (window.obj88796_onTap_runningActionsCount < 0) {
	window.obj88796_onTap_runningActionsCount = 0;
} else if (window.obj88796_onTap_runningActionsCount == 0) {
	obj88796_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88798(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88796_onTap_runningActionsCount = window.obj88796_onTap_runningActionsCount - 1;
if (window.obj88796_onTap_runningActionsCount < 0) {
	window.obj88796_onTap_runningActionsCount = 0;
} else if (window.obj88796_onTap_runningActionsCount == 0) {
	obj88796_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88796_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88796_onTap_activeActionGroupIndex = -1;
		$("#obj88796").trigger("obj88796_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88796) {
				console.warn("de-queueing event obj88796." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88796").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88796_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88801
(function(){
	window.obj88796_onTap_runningActionsCount = obj88796_onTap_runningActionsCount + 1;

	var selector = "#obj88801";
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
					window.obj88796_onTap_runningActionsCount = window.obj88796_onTap_runningActionsCount - 1;
if (window.obj88796_onTap_runningActionsCount < 0) {
	window.obj88796_onTap_runningActionsCount = 0;
} else if (window.obj88796_onTap_runningActionsCount == 0) {
	obj88796_onTap_actionGroup2();
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
				window.obj88796_onTap_runningActionsCount = window.obj88796_onTap_runningActionsCount - 1;
if (window.obj88796_onTap_runningActionsCount < 0) {
	window.obj88796_onTap_runningActionsCount = 0;
} else if (window.obj88796_onTap_runningActionsCount == 0) {
	obj88796_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88796_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88796_onTap_activeActionGroupIndex = -1;
		$("#obj88796").trigger("obj88796_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88796) {
				console.warn("de-queueing event obj88796." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88796").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88796_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88806 
playAudio_88800();
function playAudio_88800() {
	window.obj88796_onTap_runningActionsCount = obj88796_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88806")[0];
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
		    window.obj88796_onTap_runningActionsCount = window.obj88796_onTap_runningActionsCount - 1;
if (window.obj88796_onTap_runningActionsCount < 0) {
	window.obj88796_onTap_runningActionsCount = 0;
} else if (window.obj88796_onTap_runningActionsCount == 0) {
	obj88796_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88796_onTap_runningActionsCount = window.obj88796_onTap_runningActionsCount - 1;
if (window.obj88796_onTap_runningActionsCount < 0) {
	window.obj88796_onTap_runningActionsCount = 0;
} else if (window.obj88796_onTap_runningActionsCount == 0) {
	obj88796_onTap_actionGroup3();
}
	}
}









};
obj88796_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88796_onTap_activeActionGroupIndex = -1;
		$("#obj88796").trigger("obj88796_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88796) {
				console.warn("de-queueing event obj88796." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88796").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88796_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj46165: Event Touch Down
 *
 */
$("#obj46165").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46165_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46165_onTap is still running");
	return;
}
var obj46165_onTap_runningActionsCount = 0;
var obj46165_onTap_loopCount = 0;
obj46165_onTap_actionGroup0();
});










/*
 *
 *   obj46162: Event Touch Down
 *
 */
$("#obj46162").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46162_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46162_onTap is still running");
	return;
}
var obj46162_onTap_runningActionsCount = 0;
var obj46162_onTap_loopCount = 0;
obj46162_onTap_actionGroup0();
});








































/*
 *
 *   obj67566: Event Touch Down
 *
 */
$("#obj67566").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67566_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67566_onTap is still running");
	return;
}
var obj67566_onTap_runningActionsCount = 0;
var obj67566_onTap_loopCount = 0;
obj67566_onTap_actionGroup0();
});










/*
 *
 *   obj67558: Event Touch Down
 *
 */
$("#obj67558").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67558_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67558_onTap is still running");
	return;
}
var obj67558_onTap_runningActionsCount = 0;
var obj67558_onTap_loopCount = 0;
obj67558_onTap_actionGroup0();
});










/*
 *
 *   obj88801: Event Touch Down
 *
 */
$("#obj88801").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88801_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88801_onTap is still running");
	return;
}
var obj88801_onTap_runningActionsCount = 0;
var obj88801_onTap_loopCount = 0;
obj88801_onTap_actionGroup0();
});










/*
 *
 *   obj88796: Event Touch Down
 *
 */
$("#obj88796").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88796_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88796_onTap is still running");
	return;
}
var obj88796_onTap_runningActionsCount = 0;
var obj88796_onTap_loopCount = 0;
obj88796_onTap_actionGroup0();
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
	
$("#obj46181").trigger('SCEventShow');
$("#obj46165").trigger('SCEventShow');
$("#obj46162").trigger('SCEventShow');
$("#obj46156").trigger('SCEventShow');
$("#obj46154").trigger('SCEventShow');
$("#obj46152").trigger('SCEventShow');
$("#obj67566").trigger('SCEventShow');
$("#obj67558").trigger('SCEventShow');
$("#obj88801").trigger('SCEventShow');
$("#obj88796").trigger('SCEventShow');
$("#obj88806").trigger('SCEventShow');
$("#obj94949").trigger('SCEventShow');
$("#obj67572").trigger('SCEventShow');
	
});