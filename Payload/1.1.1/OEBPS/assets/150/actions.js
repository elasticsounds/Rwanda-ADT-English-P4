pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 43745;
pubcoder.page.title = pubcoder.page.title || "150";
pubcoder.page.number = pubcoder.page.number || 150;
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
var obj43761_onTap_activeActionGroupIndex = -1;
var obj43761_onTap_runningActionsCount = 0;
var obj43761_onTap_loopCount = 0;
var obj43758_onTap_activeActionGroupIndex = -1;
var obj43758_onTap_runningActionsCount = 0;
var obj43758_onTap_loopCount = 0;
var obj67406_onTap_activeActionGroupIndex = -1;
var obj67406_onTap_runningActionsCount = 0;
var obj67406_onTap_loopCount = 0;
var obj67398_onTap_activeActionGroupIndex = -1;
var obj67398_onTap_runningActionsCount = 0;
var obj67398_onTap_loopCount = 0;
var obj88669_onTap_activeActionGroupIndex = -1;
var obj88669_onTap_runningActionsCount = 0;
var obj88669_onTap_loopCount = 0;
var obj88664_onTap_activeActionGroupIndex = -1;
var obj88664_onTap_runningActionsCount = 0;
var obj88664_onTap_loopCount = 0;
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
		
obj43761_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43761_onTap_activeActionGroupIndex = -1;
		$("#obj43761").trigger("obj43761_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43761) {
				console.warn("de-queueing event obj43761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43761_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43763();
function goToPage_43763() {
	window.obj43761_onTap_runningActionsCount = obj43761_onTap_runningActionsCount + 1;
	$("#anchor886")[0].click();
	window.obj43761_onTap_runningActionsCount = window.obj43761_onTap_runningActionsCount - 1;
if (window.obj43761_onTap_runningActionsCount < 0) {
	window.obj43761_onTap_runningActionsCount = 0;
} else if (window.obj43761_onTap_runningActionsCount == 0) {
	obj43761_onTap_actionGroup1();
}
}





















};
obj43761_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43761_onTap_activeActionGroupIndex = -1;
		$("#obj43761").trigger("obj43761_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43761) {
				console.warn("de-queueing event obj43761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43761_onTap_activeActionGroupIndex = 1;
	





















};
obj43758_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43758_onTap_activeActionGroupIndex = -1;
		$("#obj43758").trigger("obj43758_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43758) {
				console.warn("de-queueing event obj43758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43758_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43760();
function goToPage_43760() {
	window.obj43758_onTap_runningActionsCount = obj43758_onTap_runningActionsCount + 1;
	$("#anchor887")[0].click();
	window.obj43758_onTap_runningActionsCount = window.obj43758_onTap_runningActionsCount - 1;
if (window.obj43758_onTap_runningActionsCount < 0) {
	window.obj43758_onTap_runningActionsCount = 0;
} else if (window.obj43758_onTap_runningActionsCount == 0) {
	obj43758_onTap_actionGroup1();
}
}





















};
obj43758_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43758_onTap_activeActionGroupIndex = -1;
		$("#obj43758").trigger("obj43758_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43758) {
				console.warn("de-queueing event obj43758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43758_onTap_activeActionGroupIndex = 1;
	





















};
obj67406_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67406_onTap_activeActionGroupIndex = -1;
		$("#obj67406").trigger("obj67406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67406) {
				console.warn("de-queueing event obj67406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67406_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67406 
hide_67409();
function hide_67409() {
	var selector = "#obj67406";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67406_onTap_runningActionsCount = obj67406_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67406_onTap_runningActionsCount = window.obj67406_onTap_runningActionsCount - 1;
if (window.obj67406_onTap_runningActionsCount < 0) {
	window.obj67406_onTap_runningActionsCount = 0;
} else if (window.obj67406_onTap_runningActionsCount == 0) {
	obj67406_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67409(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67406_onTap_runningActionsCount = window.obj67406_onTap_runningActionsCount - 1;
if (window.obj67406_onTap_runningActionsCount < 0) {
	window.obj67406_onTap_runningActionsCount = 0;
} else if (window.obj67406_onTap_runningActionsCount == 0) {
	obj67406_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67412 
stopMovie_67408();
function stopMovie_67408() {
	window.obj67406_onTap_runningActionsCount = obj67406_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67412")[0];
	myVideo.pause();
	window.obj67406_onTap_runningActionsCount = window.obj67406_onTap_runningActionsCount - 1;
if (window.obj67406_onTap_runningActionsCount < 0) {
	window.obj67406_onTap_runningActionsCount = 0;
} else if (window.obj67406_onTap_runningActionsCount == 0) {
	obj67406_onTap_actionGroup1();
}
}
















};
obj67406_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67406_onTap_activeActionGroupIndex = -1;
		$("#obj67406").trigger("obj67406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67406) {
				console.warn("de-queueing event obj67406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67406_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67398
(function(){
	window.obj67406_onTap_runningActionsCount = obj67406_onTap_runningActionsCount + 1;

	var selector = "#obj67398";
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
					window.obj67406_onTap_runningActionsCount = window.obj67406_onTap_runningActionsCount - 1;
if (window.obj67406_onTap_runningActionsCount < 0) {
	window.obj67406_onTap_runningActionsCount = 0;
} else if (window.obj67406_onTap_runningActionsCount == 0) {
	obj67406_onTap_actionGroup2();
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
				window.obj67406_onTap_runningActionsCount = window.obj67406_onTap_runningActionsCount - 1;
if (window.obj67406_onTap_runningActionsCount < 0) {
	window.obj67406_onTap_runningActionsCount = 0;
} else if (window.obj67406_onTap_runningActionsCount == 0) {
	obj67406_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67406_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67406_onTap_activeActionGroupIndex = -1;
		$("#obj67406").trigger("obj67406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67406) {
				console.warn("de-queueing event obj67406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67406_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67412 
move_67411();
function move_67411() {
	window.obj67406_onTap_runningActionsCount = obj67406_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67412");
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
			window.obj67406_onTap_runningActionsCount = window.obj67406_onTap_runningActionsCount - 1;
if (window.obj67406_onTap_runningActionsCount < 0) {
	window.obj67406_onTap_runningActionsCount = 0;
} else if (window.obj67406_onTap_runningActionsCount == 0) {
	obj67406_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67406_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67406_onTap_activeActionGroupIndex = -1;
		$("#obj67406").trigger("obj67406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67406) {
				console.warn("de-queueing event obj67406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67406_onTap_activeActionGroupIndex = 3;
	





















};
obj67398_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67398_onTap_activeActionGroupIndex = -1;
		$("#obj67398").trigger("obj67398_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67398) {
				console.warn("de-queueing event obj67398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67398_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67398 
hide_67401();
function hide_67401() {
	var selector = "#obj67398";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67398_onTap_runningActionsCount = obj67398_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67398_onTap_runningActionsCount = window.obj67398_onTap_runningActionsCount - 1;
if (window.obj67398_onTap_runningActionsCount < 0) {
	window.obj67398_onTap_runningActionsCount = 0;
} else if (window.obj67398_onTap_runningActionsCount == 0) {
	obj67398_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67401(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67398_onTap_runningActionsCount = window.obj67398_onTap_runningActionsCount - 1;
if (window.obj67398_onTap_runningActionsCount < 0) {
	window.obj67398_onTap_runningActionsCount = 0;
} else if (window.obj67398_onTap_runningActionsCount == 0) {
	obj67398_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67412 
playPauseMovie_67400();
function playPauseMovie_67400() {
	window.obj67398_onTap_runningActionsCount = obj67398_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67412")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67398_onTap_runningActionsCount = window.obj67398_onTap_runningActionsCount - 1;
if (window.obj67398_onTap_runningActionsCount < 0) {
	window.obj67398_onTap_runningActionsCount = 0;
} else if (window.obj67398_onTap_runningActionsCount == 0) {
	obj67398_onTap_actionGroup1();
}
}

















};
obj67398_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67398_onTap_activeActionGroupIndex = -1;
		$("#obj67398").trigger("obj67398_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67398) {
				console.warn("de-queueing event obj67398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67398_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67406
(function(){
	window.obj67398_onTap_runningActionsCount = obj67398_onTap_runningActionsCount + 1;

	var selector = "#obj67406";
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
					window.obj67398_onTap_runningActionsCount = window.obj67398_onTap_runningActionsCount - 1;
if (window.obj67398_onTap_runningActionsCount < 0) {
	window.obj67398_onTap_runningActionsCount = 0;
} else if (window.obj67398_onTap_runningActionsCount == 0) {
	obj67398_onTap_actionGroup2();
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
				window.obj67398_onTap_runningActionsCount = window.obj67398_onTap_runningActionsCount - 1;
if (window.obj67398_onTap_runningActionsCount < 0) {
	window.obj67398_onTap_runningActionsCount = 0;
} else if (window.obj67398_onTap_runningActionsCount == 0) {
	obj67398_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67398_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67398_onTap_activeActionGroupIndex = -1;
		$("#obj67398").trigger("obj67398_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67398) {
				console.warn("de-queueing event obj67398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67398_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67412 
move_67403();
function move_67403() {
	window.obj67398_onTap_runningActionsCount = obj67398_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67412");
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
			window.obj67398_onTap_runningActionsCount = window.obj67398_onTap_runningActionsCount - 1;
if (window.obj67398_onTap_runningActionsCount < 0) {
	window.obj67398_onTap_runningActionsCount = 0;
} else if (window.obj67398_onTap_runningActionsCount == 0) {
	obj67398_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67398_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67398_onTap_activeActionGroupIndex = -1;
		$("#obj67398").trigger("obj67398_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67398) {
				console.warn("de-queueing event obj67398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67398_onTap_activeActionGroupIndex = 3;
	





















};
obj88669_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88669_onTap_activeActionGroupIndex = -1;
		$("#obj88669").trigger("obj88669_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88669) {
				console.warn("de-queueing event obj88669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88669_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88674 
stopAudio_88671();
function stopAudio_88671() {
	window.obj88669_onTap_runningActionsCount = obj88669_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88674")[0];
	myAudio.pause();
	window.obj88669_onTap_runningActionsCount = window.obj88669_onTap_runningActionsCount - 1;
if (window.obj88669_onTap_runningActionsCount < 0) {
	window.obj88669_onTap_runningActionsCount = 0;
} else if (window.obj88669_onTap_runningActionsCount == 0) {
	obj88669_onTap_actionGroup1();
}
}








};
obj88669_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88669_onTap_activeActionGroupIndex = -1;
		$("#obj88669").trigger("obj88669_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88669) {
				console.warn("de-queueing event obj88669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88669_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88669 
hide_88672();
function hide_88672() {
	var selector = "#obj88669";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88669_onTap_runningActionsCount = obj88669_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88669_onTap_runningActionsCount = window.obj88669_onTap_runningActionsCount - 1;
if (window.obj88669_onTap_runningActionsCount < 0) {
	window.obj88669_onTap_runningActionsCount = 0;
} else if (window.obj88669_onTap_runningActionsCount == 0) {
	obj88669_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88672(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88669_onTap_runningActionsCount = window.obj88669_onTap_runningActionsCount - 1;
if (window.obj88669_onTap_runningActionsCount < 0) {
	window.obj88669_onTap_runningActionsCount = 0;
} else if (window.obj88669_onTap_runningActionsCount == 0) {
	obj88669_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88669_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88669_onTap_activeActionGroupIndex = -1;
		$("#obj88669").trigger("obj88669_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88669) {
				console.warn("de-queueing event obj88669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88669_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88664
(function(){
	window.obj88669_onTap_runningActionsCount = obj88669_onTap_runningActionsCount + 1;

	var selector = "#obj88664";
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
					window.obj88669_onTap_runningActionsCount = window.obj88669_onTap_runningActionsCount - 1;
if (window.obj88669_onTap_runningActionsCount < 0) {
	window.obj88669_onTap_runningActionsCount = 0;
} else if (window.obj88669_onTap_runningActionsCount == 0) {
	obj88669_onTap_actionGroup3();
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
				window.obj88669_onTap_runningActionsCount = window.obj88669_onTap_runningActionsCount - 1;
if (window.obj88669_onTap_runningActionsCount < 0) {
	window.obj88669_onTap_runningActionsCount = 0;
} else if (window.obj88669_onTap_runningActionsCount == 0) {
	obj88669_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88669_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88669_onTap_activeActionGroupIndex = -1;
		$("#obj88669").trigger("obj88669_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88669) {
				console.warn("de-queueing event obj88669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88669_onTap_activeActionGroupIndex = 3;
	





















};
obj88664_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88664_onTap_activeActionGroupIndex = -1;
		$("#obj88664").trigger("obj88664_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88664) {
				console.warn("de-queueing event obj88664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88664_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88664 
hide_88666();
function hide_88666() {
	var selector = "#obj88664";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88664_onTap_runningActionsCount = obj88664_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88664_onTap_runningActionsCount = window.obj88664_onTap_runningActionsCount - 1;
if (window.obj88664_onTap_runningActionsCount < 0) {
	window.obj88664_onTap_runningActionsCount = 0;
} else if (window.obj88664_onTap_runningActionsCount == 0) {
	obj88664_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88666(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88664_onTap_runningActionsCount = window.obj88664_onTap_runningActionsCount - 1;
if (window.obj88664_onTap_runningActionsCount < 0) {
	window.obj88664_onTap_runningActionsCount = 0;
} else if (window.obj88664_onTap_runningActionsCount == 0) {
	obj88664_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88664_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88664_onTap_activeActionGroupIndex = -1;
		$("#obj88664").trigger("obj88664_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88664) {
				console.warn("de-queueing event obj88664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88664_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88669
(function(){
	window.obj88664_onTap_runningActionsCount = obj88664_onTap_runningActionsCount + 1;

	var selector = "#obj88669";
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
					window.obj88664_onTap_runningActionsCount = window.obj88664_onTap_runningActionsCount - 1;
if (window.obj88664_onTap_runningActionsCount < 0) {
	window.obj88664_onTap_runningActionsCount = 0;
} else if (window.obj88664_onTap_runningActionsCount == 0) {
	obj88664_onTap_actionGroup2();
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
				window.obj88664_onTap_runningActionsCount = window.obj88664_onTap_runningActionsCount - 1;
if (window.obj88664_onTap_runningActionsCount < 0) {
	window.obj88664_onTap_runningActionsCount = 0;
} else if (window.obj88664_onTap_runningActionsCount == 0) {
	obj88664_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88664_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88664_onTap_activeActionGroupIndex = -1;
		$("#obj88664").trigger("obj88664_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88664) {
				console.warn("de-queueing event obj88664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88664_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88674 
playAudio_88668();
function playAudio_88668() {
	window.obj88664_onTap_runningActionsCount = obj88664_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88674")[0];
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
		    window.obj88664_onTap_runningActionsCount = window.obj88664_onTap_runningActionsCount - 1;
if (window.obj88664_onTap_runningActionsCount < 0) {
	window.obj88664_onTap_runningActionsCount = 0;
} else if (window.obj88664_onTap_runningActionsCount == 0) {
	obj88664_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88664_onTap_runningActionsCount = window.obj88664_onTap_runningActionsCount - 1;
if (window.obj88664_onTap_runningActionsCount < 0) {
	window.obj88664_onTap_runningActionsCount = 0;
} else if (window.obj88664_onTap_runningActionsCount == 0) {
	obj88664_onTap_actionGroup3();
}
	}
}









};
obj88664_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88664_onTap_activeActionGroupIndex = -1;
		$("#obj88664").trigger("obj88664_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88664) {
				console.warn("de-queueing event obj88664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88664_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj43761: Event Touch Down
 *
 */
$("#obj43761").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43761_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43761_onTap is still running");
	return;
}
var obj43761_onTap_runningActionsCount = 0;
var obj43761_onTap_loopCount = 0;
obj43761_onTap_actionGroup0();
});










/*
 *
 *   obj43758: Event Touch Down
 *
 */
$("#obj43758").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43758_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43758_onTap is still running");
	return;
}
var obj43758_onTap_runningActionsCount = 0;
var obj43758_onTap_loopCount = 0;
obj43758_onTap_actionGroup0();
});






































































/*
 *
 *   obj67406: Event Touch Down
 *
 */
$("#obj67406").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67406_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67406_onTap is still running");
	return;
}
var obj67406_onTap_runningActionsCount = 0;
var obj67406_onTap_loopCount = 0;
obj67406_onTap_actionGroup0();
});










/*
 *
 *   obj67398: Event Touch Down
 *
 */
$("#obj67398").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67398_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67398_onTap is still running");
	return;
}
var obj67398_onTap_runningActionsCount = 0;
var obj67398_onTap_loopCount = 0;
obj67398_onTap_actionGroup0();
});










/*
 *
 *   obj88669: Event Touch Down
 *
 */
$("#obj88669").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88669_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88669_onTap is still running");
	return;
}
var obj88669_onTap_runningActionsCount = 0;
var obj88669_onTap_loopCount = 0;
obj88669_onTap_actionGroup0();
});










/*
 *
 *   obj88664: Event Touch Down
 *
 */
$("#obj88664").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88664_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88664_onTap is still running");
	return;
}
var obj88664_onTap_runningActionsCount = 0;
var obj88664_onTap_loopCount = 0;
obj88664_onTap_actionGroup0();
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
	
$("#obj43777").trigger('SCEventShow');
$("#obj43761").trigger('SCEventShow');
$("#obj43758").trigger('SCEventShow');
$("#obj43756").trigger('SCEventShow');
$("#obj43754").trigger('SCEventShow');
$("#obj43752").trigger('SCEventShow');
$("#obj43750").trigger('SCEventShow');
$("#obj43748").trigger('SCEventShow');
$("#obj43746").trigger('SCEventShow');
$("#obj67406").trigger('SCEventShow');
$("#obj67398").trigger('SCEventShow');
$("#obj88669").trigger('SCEventShow');
$("#obj88664").trigger('SCEventShow');
$("#obj88674").trigger('SCEventShow');
$("#obj94929").trigger('SCEventShow');
$("#obj67412").trigger('SCEventShow');
	
});