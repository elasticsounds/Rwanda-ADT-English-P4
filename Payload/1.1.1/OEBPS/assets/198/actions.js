pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 54941;
pubcoder.page.title = pubcoder.page.title || "198";
pubcoder.page.number = pubcoder.page.number || 198;
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
var obj54955_onTap_activeActionGroupIndex = -1;
var obj54955_onTap_runningActionsCount = 0;
var obj54955_onTap_loopCount = 0;
var obj54952_onTap_activeActionGroupIndex = -1;
var obj54952_onTap_runningActionsCount = 0;
var obj54952_onTap_loopCount = 0;
var obj68206_onTap_activeActionGroupIndex = -1;
var obj68206_onTap_runningActionsCount = 0;
var obj68206_onTap_loopCount = 0;
var obj68198_onTap_activeActionGroupIndex = -1;
var obj68198_onTap_runningActionsCount = 0;
var obj68198_onTap_loopCount = 0;
var obj89257_onTap_activeActionGroupIndex = -1;
var obj89257_onTap_runningActionsCount = 0;
var obj89257_onTap_loopCount = 0;
var obj89252_onTap_activeActionGroupIndex = -1;
var obj89252_onTap_runningActionsCount = 0;
var obj89252_onTap_loopCount = 0;
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
		
obj54955_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54955_onTap_activeActionGroupIndex = -1;
		$("#obj54955").trigger("obj54955_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54955) {
				console.warn("de-queueing event obj54955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54955_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_54957();
function goToPage_54957() {
	window.obj54955_onTap_runningActionsCount = obj54955_onTap_runningActionsCount + 1;
	$("#anchor1165")[0].click();
	window.obj54955_onTap_runningActionsCount = window.obj54955_onTap_runningActionsCount - 1;
if (window.obj54955_onTap_runningActionsCount < 0) {
	window.obj54955_onTap_runningActionsCount = 0;
} else if (window.obj54955_onTap_runningActionsCount == 0) {
	obj54955_onTap_actionGroup1();
}
}





















};
obj54955_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54955_onTap_activeActionGroupIndex = -1;
		$("#obj54955").trigger("obj54955_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54955) {
				console.warn("de-queueing event obj54955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54955_onTap_activeActionGroupIndex = 1;
	





















};
obj54952_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54952_onTap_activeActionGroupIndex = -1;
		$("#obj54952").trigger("obj54952_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54952) {
				console.warn("de-queueing event obj54952." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54952").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54952_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_54954();
function goToPage_54954() {
	window.obj54952_onTap_runningActionsCount = obj54952_onTap_runningActionsCount + 1;
	$("#anchor1166")[0].click();
	window.obj54952_onTap_runningActionsCount = window.obj54952_onTap_runningActionsCount - 1;
if (window.obj54952_onTap_runningActionsCount < 0) {
	window.obj54952_onTap_runningActionsCount = 0;
} else if (window.obj54952_onTap_runningActionsCount == 0) {
	obj54952_onTap_actionGroup1();
}
}





















};
obj54952_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54952_onTap_activeActionGroupIndex = -1;
		$("#obj54952").trigger("obj54952_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54952) {
				console.warn("de-queueing event obj54952." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54952").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54952_onTap_activeActionGroupIndex = 1;
	





















};
obj68206_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68206_onTap_activeActionGroupIndex = -1;
		$("#obj68206").trigger("obj68206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68206) {
				console.warn("de-queueing event obj68206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68206_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68206 
hide_68209();
function hide_68209() {
	var selector = "#obj68206";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68206_onTap_runningActionsCount = obj68206_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68206_onTap_runningActionsCount = window.obj68206_onTap_runningActionsCount - 1;
if (window.obj68206_onTap_runningActionsCount < 0) {
	window.obj68206_onTap_runningActionsCount = 0;
} else if (window.obj68206_onTap_runningActionsCount == 0) {
	obj68206_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68209(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68206_onTap_runningActionsCount = window.obj68206_onTap_runningActionsCount - 1;
if (window.obj68206_onTap_runningActionsCount < 0) {
	window.obj68206_onTap_runningActionsCount = 0;
} else if (window.obj68206_onTap_runningActionsCount == 0) {
	obj68206_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68212 
stopMovie_68208();
function stopMovie_68208() {
	window.obj68206_onTap_runningActionsCount = obj68206_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68212")[0];
	myVideo.pause();
	window.obj68206_onTap_runningActionsCount = window.obj68206_onTap_runningActionsCount - 1;
if (window.obj68206_onTap_runningActionsCount < 0) {
	window.obj68206_onTap_runningActionsCount = 0;
} else if (window.obj68206_onTap_runningActionsCount == 0) {
	obj68206_onTap_actionGroup1();
}
}
















};
obj68206_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68206_onTap_activeActionGroupIndex = -1;
		$("#obj68206").trigger("obj68206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68206) {
				console.warn("de-queueing event obj68206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68206_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68198
(function(){
	window.obj68206_onTap_runningActionsCount = obj68206_onTap_runningActionsCount + 1;

	var selector = "#obj68198";
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
					window.obj68206_onTap_runningActionsCount = window.obj68206_onTap_runningActionsCount - 1;
if (window.obj68206_onTap_runningActionsCount < 0) {
	window.obj68206_onTap_runningActionsCount = 0;
} else if (window.obj68206_onTap_runningActionsCount == 0) {
	obj68206_onTap_actionGroup2();
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
				window.obj68206_onTap_runningActionsCount = window.obj68206_onTap_runningActionsCount - 1;
if (window.obj68206_onTap_runningActionsCount < 0) {
	window.obj68206_onTap_runningActionsCount = 0;
} else if (window.obj68206_onTap_runningActionsCount == 0) {
	obj68206_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68206_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68206_onTap_activeActionGroupIndex = -1;
		$("#obj68206").trigger("obj68206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68206) {
				console.warn("de-queueing event obj68206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68206_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68212 
move_68211();
function move_68211() {
	window.obj68206_onTap_runningActionsCount = obj68206_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68212");
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
			window.obj68206_onTap_runningActionsCount = window.obj68206_onTap_runningActionsCount - 1;
if (window.obj68206_onTap_runningActionsCount < 0) {
	window.obj68206_onTap_runningActionsCount = 0;
} else if (window.obj68206_onTap_runningActionsCount == 0) {
	obj68206_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68206_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68206_onTap_activeActionGroupIndex = -1;
		$("#obj68206").trigger("obj68206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68206) {
				console.warn("de-queueing event obj68206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68206_onTap_activeActionGroupIndex = 3;
	





















};
obj68198_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68198_onTap_activeActionGroupIndex = -1;
		$("#obj68198").trigger("obj68198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68198) {
				console.warn("de-queueing event obj68198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68198_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68198 
hide_68201();
function hide_68201() {
	var selector = "#obj68198";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68198_onTap_runningActionsCount = obj68198_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68198_onTap_runningActionsCount = window.obj68198_onTap_runningActionsCount - 1;
if (window.obj68198_onTap_runningActionsCount < 0) {
	window.obj68198_onTap_runningActionsCount = 0;
} else if (window.obj68198_onTap_runningActionsCount == 0) {
	obj68198_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68201(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68198_onTap_runningActionsCount = window.obj68198_onTap_runningActionsCount - 1;
if (window.obj68198_onTap_runningActionsCount < 0) {
	window.obj68198_onTap_runningActionsCount = 0;
} else if (window.obj68198_onTap_runningActionsCount == 0) {
	obj68198_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68212 
playPauseMovie_68200();
function playPauseMovie_68200() {
	window.obj68198_onTap_runningActionsCount = obj68198_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68212")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68198_onTap_runningActionsCount = window.obj68198_onTap_runningActionsCount - 1;
if (window.obj68198_onTap_runningActionsCount < 0) {
	window.obj68198_onTap_runningActionsCount = 0;
} else if (window.obj68198_onTap_runningActionsCount == 0) {
	obj68198_onTap_actionGroup1();
}
}

















};
obj68198_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68198_onTap_activeActionGroupIndex = -1;
		$("#obj68198").trigger("obj68198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68198) {
				console.warn("de-queueing event obj68198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68198_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68206
(function(){
	window.obj68198_onTap_runningActionsCount = obj68198_onTap_runningActionsCount + 1;

	var selector = "#obj68206";
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
					window.obj68198_onTap_runningActionsCount = window.obj68198_onTap_runningActionsCount - 1;
if (window.obj68198_onTap_runningActionsCount < 0) {
	window.obj68198_onTap_runningActionsCount = 0;
} else if (window.obj68198_onTap_runningActionsCount == 0) {
	obj68198_onTap_actionGroup2();
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
				window.obj68198_onTap_runningActionsCount = window.obj68198_onTap_runningActionsCount - 1;
if (window.obj68198_onTap_runningActionsCount < 0) {
	window.obj68198_onTap_runningActionsCount = 0;
} else if (window.obj68198_onTap_runningActionsCount == 0) {
	obj68198_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68198_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68198_onTap_activeActionGroupIndex = -1;
		$("#obj68198").trigger("obj68198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68198) {
				console.warn("de-queueing event obj68198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68198_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68212 
move_68203();
function move_68203() {
	window.obj68198_onTap_runningActionsCount = obj68198_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68212");
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
			window.obj68198_onTap_runningActionsCount = window.obj68198_onTap_runningActionsCount - 1;
if (window.obj68198_onTap_runningActionsCount < 0) {
	window.obj68198_onTap_runningActionsCount = 0;
} else if (window.obj68198_onTap_runningActionsCount == 0) {
	obj68198_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68198_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68198_onTap_activeActionGroupIndex = -1;
		$("#obj68198").trigger("obj68198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68198) {
				console.warn("de-queueing event obj68198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68198_onTap_activeActionGroupIndex = 3;
	





















};
obj89257_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89257_onTap_activeActionGroupIndex = -1;
		$("#obj89257").trigger("obj89257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89257) {
				console.warn("de-queueing event obj89257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89257_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89262 
stopAudio_89259();
function stopAudio_89259() {
	window.obj89257_onTap_runningActionsCount = obj89257_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89262")[0];
	myAudio.pause();
	window.obj89257_onTap_runningActionsCount = window.obj89257_onTap_runningActionsCount - 1;
if (window.obj89257_onTap_runningActionsCount < 0) {
	window.obj89257_onTap_runningActionsCount = 0;
} else if (window.obj89257_onTap_runningActionsCount == 0) {
	obj89257_onTap_actionGroup1();
}
}








};
obj89257_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89257_onTap_activeActionGroupIndex = -1;
		$("#obj89257").trigger("obj89257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89257) {
				console.warn("de-queueing event obj89257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89257_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89257 
hide_89260();
function hide_89260() {
	var selector = "#obj89257";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89257_onTap_runningActionsCount = obj89257_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89257_onTap_runningActionsCount = window.obj89257_onTap_runningActionsCount - 1;
if (window.obj89257_onTap_runningActionsCount < 0) {
	window.obj89257_onTap_runningActionsCount = 0;
} else if (window.obj89257_onTap_runningActionsCount == 0) {
	obj89257_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89260(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89257_onTap_runningActionsCount = window.obj89257_onTap_runningActionsCount - 1;
if (window.obj89257_onTap_runningActionsCount < 0) {
	window.obj89257_onTap_runningActionsCount = 0;
} else if (window.obj89257_onTap_runningActionsCount == 0) {
	obj89257_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89257_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89257_onTap_activeActionGroupIndex = -1;
		$("#obj89257").trigger("obj89257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89257) {
				console.warn("de-queueing event obj89257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89257_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89252
(function(){
	window.obj89257_onTap_runningActionsCount = obj89257_onTap_runningActionsCount + 1;

	var selector = "#obj89252";
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
					window.obj89257_onTap_runningActionsCount = window.obj89257_onTap_runningActionsCount - 1;
if (window.obj89257_onTap_runningActionsCount < 0) {
	window.obj89257_onTap_runningActionsCount = 0;
} else if (window.obj89257_onTap_runningActionsCount == 0) {
	obj89257_onTap_actionGroup3();
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
				window.obj89257_onTap_runningActionsCount = window.obj89257_onTap_runningActionsCount - 1;
if (window.obj89257_onTap_runningActionsCount < 0) {
	window.obj89257_onTap_runningActionsCount = 0;
} else if (window.obj89257_onTap_runningActionsCount == 0) {
	obj89257_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89257_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89257_onTap_activeActionGroupIndex = -1;
		$("#obj89257").trigger("obj89257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89257) {
				console.warn("de-queueing event obj89257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89257_onTap_activeActionGroupIndex = 3;
	





















};
obj89252_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89252_onTap_activeActionGroupIndex = -1;
		$("#obj89252").trigger("obj89252_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89252) {
				console.warn("de-queueing event obj89252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89252_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89252 
hide_89254();
function hide_89254() {
	var selector = "#obj89252";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89252_onTap_runningActionsCount = obj89252_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89252_onTap_runningActionsCount = window.obj89252_onTap_runningActionsCount - 1;
if (window.obj89252_onTap_runningActionsCount < 0) {
	window.obj89252_onTap_runningActionsCount = 0;
} else if (window.obj89252_onTap_runningActionsCount == 0) {
	obj89252_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89254(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89252_onTap_runningActionsCount = window.obj89252_onTap_runningActionsCount - 1;
if (window.obj89252_onTap_runningActionsCount < 0) {
	window.obj89252_onTap_runningActionsCount = 0;
} else if (window.obj89252_onTap_runningActionsCount == 0) {
	obj89252_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89252_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89252_onTap_activeActionGroupIndex = -1;
		$("#obj89252").trigger("obj89252_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89252) {
				console.warn("de-queueing event obj89252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89252_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89257
(function(){
	window.obj89252_onTap_runningActionsCount = obj89252_onTap_runningActionsCount + 1;

	var selector = "#obj89257";
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
					window.obj89252_onTap_runningActionsCount = window.obj89252_onTap_runningActionsCount - 1;
if (window.obj89252_onTap_runningActionsCount < 0) {
	window.obj89252_onTap_runningActionsCount = 0;
} else if (window.obj89252_onTap_runningActionsCount == 0) {
	obj89252_onTap_actionGroup2();
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
				window.obj89252_onTap_runningActionsCount = window.obj89252_onTap_runningActionsCount - 1;
if (window.obj89252_onTap_runningActionsCount < 0) {
	window.obj89252_onTap_runningActionsCount = 0;
} else if (window.obj89252_onTap_runningActionsCount == 0) {
	obj89252_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89252_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89252_onTap_activeActionGroupIndex = -1;
		$("#obj89252").trigger("obj89252_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89252) {
				console.warn("de-queueing event obj89252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89252_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89262 
playAudio_89256();
function playAudio_89256() {
	window.obj89252_onTap_runningActionsCount = obj89252_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89262")[0];
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
		    window.obj89252_onTap_runningActionsCount = window.obj89252_onTap_runningActionsCount - 1;
if (window.obj89252_onTap_runningActionsCount < 0) {
	window.obj89252_onTap_runningActionsCount = 0;
} else if (window.obj89252_onTap_runningActionsCount == 0) {
	obj89252_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89252_onTap_runningActionsCount = window.obj89252_onTap_runningActionsCount - 1;
if (window.obj89252_onTap_runningActionsCount < 0) {
	window.obj89252_onTap_runningActionsCount = 0;
} else if (window.obj89252_onTap_runningActionsCount == 0) {
	obj89252_onTap_actionGroup3();
}
	}
}









};
obj89252_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89252_onTap_activeActionGroupIndex = -1;
		$("#obj89252").trigger("obj89252_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89252) {
				console.warn("de-queueing event obj89252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89252_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj54955: Event Touch Down
 *
 */
$("#obj54955").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54955_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54955_onTap is still running");
	return;
}
var obj54955_onTap_runningActionsCount = 0;
var obj54955_onTap_loopCount = 0;
obj54955_onTap_actionGroup0();
});










/*
 *
 *   obj54952: Event Touch Down
 *
 */
$("#obj54952").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54952_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54952_onTap is still running");
	return;
}
var obj54952_onTap_runningActionsCount = 0;
var obj54952_onTap_loopCount = 0;
obj54952_onTap_actionGroup0();
});




























































/*
 *
 *   obj68206: Event Touch Down
 *
 */
$("#obj68206").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68206_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68206_onTap is still running");
	return;
}
var obj68206_onTap_runningActionsCount = 0;
var obj68206_onTap_loopCount = 0;
obj68206_onTap_actionGroup0();
});










/*
 *
 *   obj68198: Event Touch Down
 *
 */
$("#obj68198").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68198_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68198_onTap is still running");
	return;
}
var obj68198_onTap_runningActionsCount = 0;
var obj68198_onTap_loopCount = 0;
obj68198_onTap_actionGroup0();
});










/*
 *
 *   obj89257: Event Touch Down
 *
 */
$("#obj89257").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89257_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89257_onTap is still running");
	return;
}
var obj89257_onTap_runningActionsCount = 0;
var obj89257_onTap_loopCount = 0;
obj89257_onTap_actionGroup0();
});










/*
 *
 *   obj89252: Event Touch Down
 *
 */
$("#obj89252").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89252_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89252_onTap is still running");
	return;
}
var obj89252_onTap_runningActionsCount = 0;
var obj89252_onTap_loopCount = 0;
obj89252_onTap_actionGroup0();
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
	
$("#obj54971").trigger('SCEventShow');
$("#obj54955").trigger('SCEventShow');
$("#obj54952").trigger('SCEventShow');
$("#obj54950").trigger('SCEventShow');
$("#obj54948").trigger('SCEventShow');
$("#obj54946").trigger('SCEventShow');
$("#obj54944").trigger('SCEventShow');
$("#obj54973").trigger('SCEventShow');
$("#obj68206").trigger('SCEventShow');
$("#obj68198").trigger('SCEventShow');
$("#obj89257").trigger('SCEventShow');
$("#obj89252").trigger('SCEventShow');
$("#obj89262").trigger('SCEventShow');
$("#obj95025").trigger('SCEventShow');
$("#obj68212").trigger('SCEventShow');
	
});