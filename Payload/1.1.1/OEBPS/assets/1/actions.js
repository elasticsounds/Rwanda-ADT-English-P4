pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 3;
pubcoder.page.title = pubcoder.page.title || "1";
pubcoder.page.number = pubcoder.page.number || 1;
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
var obj53_onTap_activeActionGroupIndex = -1;
var obj53_onTap_runningActionsCount = 0;
var obj53_onTap_loopCount = 0;
var obj56_onTap_activeActionGroupIndex = -1;
var obj56_onTap_runningActionsCount = 0;
var obj56_onTap_loopCount = 0;
var obj90039_onTap_activeActionGroupIndex = -1;
var obj90039_onTap_runningActionsCount = 0;
var obj90039_onTap_loopCount = 0;
var obj90031_onTap_activeActionGroupIndex = -1;
var obj90031_onTap_runningActionsCount = 0;
var obj90031_onTap_loopCount = 0;
var obj90026_onTap_activeActionGroupIndex = -1;
var obj90026_onTap_runningActionsCount = 0;
var obj90026_onTap_loopCount = 0;
var obj90021_onTap_activeActionGroupIndex = -1;
var obj90021_onTap_runningActionsCount = 0;
var obj90021_onTap_loopCount = 0;
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
		
obj53_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53_onTap_activeActionGroupIndex = -1;
		$("#obj53").trigger("obj53_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53) {
				console.warn("de-queueing event obj53." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55();
function goToPage_55() {
	window.obj53_onTap_runningActionsCount = obj53_onTap_runningActionsCount + 1;
	$("#anchor15")[0].click();
	window.obj53_onTap_runningActionsCount = window.obj53_onTap_runningActionsCount - 1;
if (window.obj53_onTap_runningActionsCount < 0) {
	window.obj53_onTap_runningActionsCount = 0;
} else if (window.obj53_onTap_runningActionsCount == 0) {
	obj53_onTap_actionGroup1();
}
}





















};
obj53_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53_onTap_activeActionGroupIndex = -1;
		$("#obj53").trigger("obj53_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53) {
				console.warn("de-queueing event obj53." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53_onTap_activeActionGroupIndex = 1;
	





















};
obj56_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56_onTap_activeActionGroupIndex = -1;
		$("#obj56").trigger("obj56_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56) {
				console.warn("de-queueing event obj56." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_58();
function goToPage_58() {
	window.obj56_onTap_runningActionsCount = obj56_onTap_runningActionsCount + 1;
	$("#anchor16")[0].click();
	window.obj56_onTap_runningActionsCount = window.obj56_onTap_runningActionsCount - 1;
if (window.obj56_onTap_runningActionsCount < 0) {
	window.obj56_onTap_runningActionsCount = 0;
} else if (window.obj56_onTap_runningActionsCount == 0) {
	obj56_onTap_actionGroup1();
}
}





















};
obj56_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56_onTap_activeActionGroupIndex = -1;
		$("#obj56").trigger("obj56_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56) {
				console.warn("de-queueing event obj56." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56_onTap_activeActionGroupIndex = 1;
	





















};
obj90039_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90039_onTap_activeActionGroupIndex = -1;
		$("#obj90039").trigger("obj90039_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90039) {
				console.warn("de-queueing event obj90039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90039_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj90039 
hide_90042();
function hide_90042() {
	var selector = "#obj90039";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj90039_onTap_runningActionsCount = obj90039_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj90039_onTap_runningActionsCount = window.obj90039_onTap_runningActionsCount - 1;
if (window.obj90039_onTap_runningActionsCount < 0) {
	window.obj90039_onTap_runningActionsCount = 0;
} else if (window.obj90039_onTap_runningActionsCount == 0) {
	obj90039_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90042(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj90039_onTap_runningActionsCount = window.obj90039_onTap_runningActionsCount - 1;
if (window.obj90039_onTap_runningActionsCount < 0) {
	window.obj90039_onTap_runningActionsCount = 0;
} else if (window.obj90039_onTap_runningActionsCount == 0) {
	obj90039_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj90047 
stopMovie_90041();
function stopMovie_90041() {
	window.obj90039_onTap_runningActionsCount = obj90039_onTap_runningActionsCount + 1;
	var myVideo = $("#obj90047")[0];
	myVideo.pause();
	window.obj90039_onTap_runningActionsCount = window.obj90039_onTap_runningActionsCount - 1;
if (window.obj90039_onTap_runningActionsCount < 0) {
	window.obj90039_onTap_runningActionsCount = 0;
} else if (window.obj90039_onTap_runningActionsCount == 0) {
	obj90039_onTap_actionGroup1();
}
}
















};
obj90039_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90039_onTap_activeActionGroupIndex = -1;
		$("#obj90039").trigger("obj90039_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90039) {
				console.warn("de-queueing event obj90039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90039_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj90031
(function(){
	window.obj90039_onTap_runningActionsCount = obj90039_onTap_runningActionsCount + 1;

	var selector = "#obj90031";
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
					window.obj90039_onTap_runningActionsCount = window.obj90039_onTap_runningActionsCount - 1;
if (window.obj90039_onTap_runningActionsCount < 0) {
	window.obj90039_onTap_runningActionsCount = 0;
} else if (window.obj90039_onTap_runningActionsCount == 0) {
	obj90039_onTap_actionGroup2();
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
				window.obj90039_onTap_runningActionsCount = window.obj90039_onTap_runningActionsCount - 1;
if (window.obj90039_onTap_runningActionsCount < 0) {
	window.obj90039_onTap_runningActionsCount = 0;
} else if (window.obj90039_onTap_runningActionsCount == 0) {
	obj90039_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj90039_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90039_onTap_activeActionGroupIndex = -1;
		$("#obj90039").trigger("obj90039_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90039) {
				console.warn("de-queueing event obj90039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90039_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj90047 
move_90044();
function move_90044() {
	window.obj90039_onTap_runningActionsCount = obj90039_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj90047");
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
			window.obj90039_onTap_runningActionsCount = window.obj90039_onTap_runningActionsCount - 1;
if (window.obj90039_onTap_runningActionsCount < 0) {
	window.obj90039_onTap_runningActionsCount = 0;
} else if (window.obj90039_onTap_runningActionsCount == 0) {
	obj90039_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj90039_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj90039_onTap_activeActionGroupIndex = -1;
		$("#obj90039").trigger("obj90039_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90039) {
				console.warn("de-queueing event obj90039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90039_onTap_activeActionGroupIndex = 3;
	





















};
obj90031_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90031_onTap_activeActionGroupIndex = -1;
		$("#obj90031").trigger("obj90031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90031) {
				console.warn("de-queueing event obj90031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90031_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj90031 
hide_90034();
function hide_90034() {
	var selector = "#obj90031";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj90031_onTap_runningActionsCount = obj90031_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj90031_onTap_runningActionsCount = window.obj90031_onTap_runningActionsCount - 1;
if (window.obj90031_onTap_runningActionsCount < 0) {
	window.obj90031_onTap_runningActionsCount = 0;
} else if (window.obj90031_onTap_runningActionsCount == 0) {
	obj90031_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90034(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj90031_onTap_runningActionsCount = window.obj90031_onTap_runningActionsCount - 1;
if (window.obj90031_onTap_runningActionsCount < 0) {
	window.obj90031_onTap_runningActionsCount = 0;
} else if (window.obj90031_onTap_runningActionsCount == 0) {
	obj90031_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj90047 
playPauseMovie_90033();
function playPauseMovie_90033() {
	window.obj90031_onTap_runningActionsCount = obj90031_onTap_runningActionsCount + 1;
	var myVideo = $("#obj90047")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj90031_onTap_runningActionsCount = window.obj90031_onTap_runningActionsCount - 1;
if (window.obj90031_onTap_runningActionsCount < 0) {
	window.obj90031_onTap_runningActionsCount = 0;
} else if (window.obj90031_onTap_runningActionsCount == 0) {
	obj90031_onTap_actionGroup1();
}
}

















};
obj90031_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90031_onTap_activeActionGroupIndex = -1;
		$("#obj90031").trigger("obj90031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90031) {
				console.warn("de-queueing event obj90031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90031_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj90039
(function(){
	window.obj90031_onTap_runningActionsCount = obj90031_onTap_runningActionsCount + 1;

	var selector = "#obj90039";
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
					window.obj90031_onTap_runningActionsCount = window.obj90031_onTap_runningActionsCount - 1;
if (window.obj90031_onTap_runningActionsCount < 0) {
	window.obj90031_onTap_runningActionsCount = 0;
} else if (window.obj90031_onTap_runningActionsCount == 0) {
	obj90031_onTap_actionGroup2();
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
				window.obj90031_onTap_runningActionsCount = window.obj90031_onTap_runningActionsCount - 1;
if (window.obj90031_onTap_runningActionsCount < 0) {
	window.obj90031_onTap_runningActionsCount = 0;
} else if (window.obj90031_onTap_runningActionsCount == 0) {
	obj90031_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj90031_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90031_onTap_activeActionGroupIndex = -1;
		$("#obj90031").trigger("obj90031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90031) {
				console.warn("de-queueing event obj90031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90031_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj90047 
move_90036();
function move_90036() {
	window.obj90031_onTap_runningActionsCount = obj90031_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj90047");
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
			window.obj90031_onTap_runningActionsCount = window.obj90031_onTap_runningActionsCount - 1;
if (window.obj90031_onTap_runningActionsCount < 0) {
	window.obj90031_onTap_runningActionsCount = 0;
} else if (window.obj90031_onTap_runningActionsCount == 0) {
	obj90031_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj90031_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj90031_onTap_activeActionGroupIndex = -1;
		$("#obj90031").trigger("obj90031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90031) {
				console.warn("de-queueing event obj90031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90031_onTap_activeActionGroupIndex = 3;
	





















};
obj90026_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90026_onTap_activeActionGroupIndex = -1;
		$("#obj90026").trigger("obj90026_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90026) {
				console.warn("de-queueing event obj90026." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90026").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90026_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj90045 
stopAudio_90028();
function stopAudio_90028() {
	window.obj90026_onTap_runningActionsCount = obj90026_onTap_runningActionsCount + 1;
	var myAudio = $("#obj90045")[0];
	myAudio.pause();
	window.obj90026_onTap_runningActionsCount = window.obj90026_onTap_runningActionsCount - 1;
if (window.obj90026_onTap_runningActionsCount < 0) {
	window.obj90026_onTap_runningActionsCount = 0;
} else if (window.obj90026_onTap_runningActionsCount == 0) {
	obj90026_onTap_actionGroup1();
}
}








};
obj90026_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90026_onTap_activeActionGroupIndex = -1;
		$("#obj90026").trigger("obj90026_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90026) {
				console.warn("de-queueing event obj90026." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90026").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90026_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj90026 
hide_90029();
function hide_90029() {
	var selector = "#obj90026";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj90026_onTap_runningActionsCount = obj90026_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj90026_onTap_runningActionsCount = window.obj90026_onTap_runningActionsCount - 1;
if (window.obj90026_onTap_runningActionsCount < 0) {
	window.obj90026_onTap_runningActionsCount = 0;
} else if (window.obj90026_onTap_runningActionsCount == 0) {
	obj90026_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90029(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj90026_onTap_runningActionsCount = window.obj90026_onTap_runningActionsCount - 1;
if (window.obj90026_onTap_runningActionsCount < 0) {
	window.obj90026_onTap_runningActionsCount = 0;
} else if (window.obj90026_onTap_runningActionsCount == 0) {
	obj90026_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj90026_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90026_onTap_activeActionGroupIndex = -1;
		$("#obj90026").trigger("obj90026_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90026) {
				console.warn("de-queueing event obj90026." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90026").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90026_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj90021
(function(){
	window.obj90026_onTap_runningActionsCount = obj90026_onTap_runningActionsCount + 1;

	var selector = "#obj90021";
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
					window.obj90026_onTap_runningActionsCount = window.obj90026_onTap_runningActionsCount - 1;
if (window.obj90026_onTap_runningActionsCount < 0) {
	window.obj90026_onTap_runningActionsCount = 0;
} else if (window.obj90026_onTap_runningActionsCount == 0) {
	obj90026_onTap_actionGroup3();
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
				window.obj90026_onTap_runningActionsCount = window.obj90026_onTap_runningActionsCount - 1;
if (window.obj90026_onTap_runningActionsCount < 0) {
	window.obj90026_onTap_runningActionsCount = 0;
} else if (window.obj90026_onTap_runningActionsCount == 0) {
	obj90026_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj90026_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj90026_onTap_activeActionGroupIndex = -1;
		$("#obj90026").trigger("obj90026_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90026) {
				console.warn("de-queueing event obj90026." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90026").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90026_onTap_activeActionGroupIndex = 3;
	





















};
obj90021_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90021_onTap_activeActionGroupIndex = -1;
		$("#obj90021").trigger("obj90021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90021) {
				console.warn("de-queueing event obj90021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90021_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj90021 
hide_90023();
function hide_90023() {
	var selector = "#obj90021";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj90021_onTap_runningActionsCount = obj90021_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj90021_onTap_runningActionsCount = window.obj90021_onTap_runningActionsCount - 1;
if (window.obj90021_onTap_runningActionsCount < 0) {
	window.obj90021_onTap_runningActionsCount = 0;
} else if (window.obj90021_onTap_runningActionsCount == 0) {
	obj90021_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90023(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj90021_onTap_runningActionsCount = window.obj90021_onTap_runningActionsCount - 1;
if (window.obj90021_onTap_runningActionsCount < 0) {
	window.obj90021_onTap_runningActionsCount = 0;
} else if (window.obj90021_onTap_runningActionsCount == 0) {
	obj90021_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj90021_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90021_onTap_activeActionGroupIndex = -1;
		$("#obj90021").trigger("obj90021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90021) {
				console.warn("de-queueing event obj90021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90021_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj90026
(function(){
	window.obj90021_onTap_runningActionsCount = obj90021_onTap_runningActionsCount + 1;

	var selector = "#obj90026";
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
					window.obj90021_onTap_runningActionsCount = window.obj90021_onTap_runningActionsCount - 1;
if (window.obj90021_onTap_runningActionsCount < 0) {
	window.obj90021_onTap_runningActionsCount = 0;
} else if (window.obj90021_onTap_runningActionsCount == 0) {
	obj90021_onTap_actionGroup2();
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
				window.obj90021_onTap_runningActionsCount = window.obj90021_onTap_runningActionsCount - 1;
if (window.obj90021_onTap_runningActionsCount < 0) {
	window.obj90021_onTap_runningActionsCount = 0;
} else if (window.obj90021_onTap_runningActionsCount == 0) {
	obj90021_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj90021_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90021_onTap_activeActionGroupIndex = -1;
		$("#obj90021").trigger("obj90021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90021) {
				console.warn("de-queueing event obj90021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90021_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj90045 
playAudio_90025();
function playAudio_90025() {
	window.obj90021_onTap_runningActionsCount = obj90021_onTap_runningActionsCount + 1;
	var myAudio = $("#obj90045")[0];
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
		    window.obj90021_onTap_runningActionsCount = window.obj90021_onTap_runningActionsCount - 1;
if (window.obj90021_onTap_runningActionsCount < 0) {
	window.obj90021_onTap_runningActionsCount = 0;
} else if (window.obj90021_onTap_runningActionsCount == 0) {
	obj90021_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj90021_onTap_runningActionsCount = window.obj90021_onTap_runningActionsCount - 1;
if (window.obj90021_onTap_runningActionsCount < 0) {
	window.obj90021_onTap_runningActionsCount = 0;
} else if (window.obj90021_onTap_runningActionsCount == 0) {
	obj90021_onTap_actionGroup3();
}
	}
}









};
obj90021_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj90021_onTap_activeActionGroupIndex = -1;
		$("#obj90021").trigger("obj90021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90021) {
				console.warn("de-queueing event obj90021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90021_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj53: Event Touch Down
 *
 */
$("#obj53").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53_onTap is still running");
	return;
}
var obj53_onTap_runningActionsCount = 0;
var obj53_onTap_loopCount = 0;
obj53_onTap_actionGroup0();
});










/*
 *
 *   obj56: Event Touch Down
 *
 */
$("#obj56").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj56_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56_onTap is still running");
	return;
}
var obj56_onTap_runningActionsCount = 0;
var obj56_onTap_loopCount = 0;
obj56_onTap_actionGroup0();
});










/*
 *
 *   obj90039: Event Touch Down
 *
 */
$("#obj90039").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj90039_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj90039_onTap is still running");
	return;
}
var obj90039_onTap_runningActionsCount = 0;
var obj90039_onTap_loopCount = 0;
obj90039_onTap_actionGroup0();
});










/*
 *
 *   obj90031: Event Touch Down
 *
 */
$("#obj90031").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj90031_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj90031_onTap is still running");
	return;
}
var obj90031_onTap_runningActionsCount = 0;
var obj90031_onTap_loopCount = 0;
obj90031_onTap_actionGroup0();
});










/*
 *
 *   obj90026: Event Touch Down
 *
 */
$("#obj90026").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj90026_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj90026_onTap is still running");
	return;
}
var obj90026_onTap_runningActionsCount = 0;
var obj90026_onTap_loopCount = 0;
obj90026_onTap_actionGroup0();
});










/*
 *
 *   obj90021: Event Touch Down
 *
 */
$("#obj90021").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj90021_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj90021_onTap is still running");
	return;
}
var obj90021_onTap_runningActionsCount = 0;
var obj90021_onTap_loopCount = 0;
obj90021_onTap_actionGroup0();
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
	
$("#obj94633").trigger('SCEventShow');
$("#obj53").trigger('SCEventShow');
$("#obj56").trigger('SCEventShow');
$("#obj90039").trigger('SCEventShow');
$("#obj90031").trigger('SCEventShow');
$("#obj90026").trigger('SCEventShow');
$("#obj90021").trigger('SCEventShow');
$("#obj90045").trigger('SCEventShow');
$("#obj90586").trigger('SCEventShow');
$("#obj90047").trigger('SCEventShow');
$("#obj99269").trigger('SCEventShow');
	
});