pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 2829;
pubcoder.page.title = pubcoder.page.title || "19";
pubcoder.page.number = pubcoder.page.number || 19;
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
var obj2835_onTap_activeActionGroupIndex = -1;
var obj2835_onTap_runningActionsCount = 0;
var obj2835_onTap_loopCount = 0;
var obj2832_onTap_activeActionGroupIndex = -1;
var obj2832_onTap_runningActionsCount = 0;
var obj2832_onTap_loopCount = 0;
var obj65262_onTap_activeActionGroupIndex = -1;
var obj65262_onTap_runningActionsCount = 0;
var obj65262_onTap_loopCount = 0;
var obj65254_onTap_activeActionGroupIndex = -1;
var obj65254_onTap_runningActionsCount = 0;
var obj65254_onTap_loopCount = 0;
var obj87033_onTap_activeActionGroupIndex = -1;
var obj87033_onTap_runningActionsCount = 0;
var obj87033_onTap_loopCount = 0;
var obj87028_onTap_activeActionGroupIndex = -1;
var obj87028_onTap_runningActionsCount = 0;
var obj87028_onTap_loopCount = 0;
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
		
obj2835_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2835_onTap_activeActionGroupIndex = -1;
		$("#obj2835").trigger("obj2835_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2835) {
				console.warn("de-queueing event obj2835." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2835").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2835_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2837();
function goToPage_2837() {
	window.obj2835_onTap_runningActionsCount = obj2835_onTap_runningActionsCount + 1;
	$("#anchor120")[0].click();
	window.obj2835_onTap_runningActionsCount = window.obj2835_onTap_runningActionsCount - 1;
if (window.obj2835_onTap_runningActionsCount < 0) {
	window.obj2835_onTap_runningActionsCount = 0;
} else if (window.obj2835_onTap_runningActionsCount == 0) {
	obj2835_onTap_actionGroup1();
}
}





















};
obj2835_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2835_onTap_activeActionGroupIndex = -1;
		$("#obj2835").trigger("obj2835_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2835) {
				console.warn("de-queueing event obj2835." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2835").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2835_onTap_activeActionGroupIndex = 1;
	





















};
obj2832_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2832_onTap_activeActionGroupIndex = -1;
		$("#obj2832").trigger("obj2832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2832) {
				console.warn("de-queueing event obj2832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2832_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2834();
function goToPage_2834() {
	window.obj2832_onTap_runningActionsCount = obj2832_onTap_runningActionsCount + 1;
	$("#anchor121")[0].click();
	window.obj2832_onTap_runningActionsCount = window.obj2832_onTap_runningActionsCount - 1;
if (window.obj2832_onTap_runningActionsCount < 0) {
	window.obj2832_onTap_runningActionsCount = 0;
} else if (window.obj2832_onTap_runningActionsCount == 0) {
	obj2832_onTap_actionGroup1();
}
}





















};
obj2832_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2832_onTap_activeActionGroupIndex = -1;
		$("#obj2832").trigger("obj2832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2832) {
				console.warn("de-queueing event obj2832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2832_onTap_activeActionGroupIndex = 1;
	





















};
obj65262_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65262_onTap_activeActionGroupIndex = -1;
		$("#obj65262").trigger("obj65262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65262) {
				console.warn("de-queueing event obj65262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65262_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65262 
hide_65265();
function hide_65265() {
	var selector = "#obj65262";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65262_onTap_runningActionsCount = obj65262_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65262_onTap_runningActionsCount = window.obj65262_onTap_runningActionsCount - 1;
if (window.obj65262_onTap_runningActionsCount < 0) {
	window.obj65262_onTap_runningActionsCount = 0;
} else if (window.obj65262_onTap_runningActionsCount == 0) {
	obj65262_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65265(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65262_onTap_runningActionsCount = window.obj65262_onTap_runningActionsCount - 1;
if (window.obj65262_onTap_runningActionsCount < 0) {
	window.obj65262_onTap_runningActionsCount = 0;
} else if (window.obj65262_onTap_runningActionsCount == 0) {
	obj65262_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65268 
stopMovie_65264();
function stopMovie_65264() {
	window.obj65262_onTap_runningActionsCount = obj65262_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65268")[0];
	myVideo.pause();
	window.obj65262_onTap_runningActionsCount = window.obj65262_onTap_runningActionsCount - 1;
if (window.obj65262_onTap_runningActionsCount < 0) {
	window.obj65262_onTap_runningActionsCount = 0;
} else if (window.obj65262_onTap_runningActionsCount == 0) {
	obj65262_onTap_actionGroup1();
}
}
















};
obj65262_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65262_onTap_activeActionGroupIndex = -1;
		$("#obj65262").trigger("obj65262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65262) {
				console.warn("de-queueing event obj65262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65262_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65254
(function(){
	window.obj65262_onTap_runningActionsCount = obj65262_onTap_runningActionsCount + 1;

	var selector = "#obj65254";
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
					window.obj65262_onTap_runningActionsCount = window.obj65262_onTap_runningActionsCount - 1;
if (window.obj65262_onTap_runningActionsCount < 0) {
	window.obj65262_onTap_runningActionsCount = 0;
} else if (window.obj65262_onTap_runningActionsCount == 0) {
	obj65262_onTap_actionGroup2();
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
				window.obj65262_onTap_runningActionsCount = window.obj65262_onTap_runningActionsCount - 1;
if (window.obj65262_onTap_runningActionsCount < 0) {
	window.obj65262_onTap_runningActionsCount = 0;
} else if (window.obj65262_onTap_runningActionsCount == 0) {
	obj65262_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65262_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65262_onTap_activeActionGroupIndex = -1;
		$("#obj65262").trigger("obj65262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65262) {
				console.warn("de-queueing event obj65262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65262_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65268 
move_65267();
function move_65267() {
	window.obj65262_onTap_runningActionsCount = obj65262_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65268");
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
			window.obj65262_onTap_runningActionsCount = window.obj65262_onTap_runningActionsCount - 1;
if (window.obj65262_onTap_runningActionsCount < 0) {
	window.obj65262_onTap_runningActionsCount = 0;
} else if (window.obj65262_onTap_runningActionsCount == 0) {
	obj65262_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65262_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65262_onTap_activeActionGroupIndex = -1;
		$("#obj65262").trigger("obj65262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65262) {
				console.warn("de-queueing event obj65262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65262_onTap_activeActionGroupIndex = 3;
	





















};
obj65254_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65254_onTap_activeActionGroupIndex = -1;
		$("#obj65254").trigger("obj65254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65254) {
				console.warn("de-queueing event obj65254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65254_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65254 
hide_65257();
function hide_65257() {
	var selector = "#obj65254";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65254_onTap_runningActionsCount = obj65254_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65254_onTap_runningActionsCount = window.obj65254_onTap_runningActionsCount - 1;
if (window.obj65254_onTap_runningActionsCount < 0) {
	window.obj65254_onTap_runningActionsCount = 0;
} else if (window.obj65254_onTap_runningActionsCount == 0) {
	obj65254_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65257(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65254_onTap_runningActionsCount = window.obj65254_onTap_runningActionsCount - 1;
if (window.obj65254_onTap_runningActionsCount < 0) {
	window.obj65254_onTap_runningActionsCount = 0;
} else if (window.obj65254_onTap_runningActionsCount == 0) {
	obj65254_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65268 
playPauseMovie_65256();
function playPauseMovie_65256() {
	window.obj65254_onTap_runningActionsCount = obj65254_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65268")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65254_onTap_runningActionsCount = window.obj65254_onTap_runningActionsCount - 1;
if (window.obj65254_onTap_runningActionsCount < 0) {
	window.obj65254_onTap_runningActionsCount = 0;
} else if (window.obj65254_onTap_runningActionsCount == 0) {
	obj65254_onTap_actionGroup1();
}
}

















};
obj65254_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65254_onTap_activeActionGroupIndex = -1;
		$("#obj65254").trigger("obj65254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65254) {
				console.warn("de-queueing event obj65254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65254_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65262
(function(){
	window.obj65254_onTap_runningActionsCount = obj65254_onTap_runningActionsCount + 1;

	var selector = "#obj65262";
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
					window.obj65254_onTap_runningActionsCount = window.obj65254_onTap_runningActionsCount - 1;
if (window.obj65254_onTap_runningActionsCount < 0) {
	window.obj65254_onTap_runningActionsCount = 0;
} else if (window.obj65254_onTap_runningActionsCount == 0) {
	obj65254_onTap_actionGroup2();
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
				window.obj65254_onTap_runningActionsCount = window.obj65254_onTap_runningActionsCount - 1;
if (window.obj65254_onTap_runningActionsCount < 0) {
	window.obj65254_onTap_runningActionsCount = 0;
} else if (window.obj65254_onTap_runningActionsCount == 0) {
	obj65254_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65254_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65254_onTap_activeActionGroupIndex = -1;
		$("#obj65254").trigger("obj65254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65254) {
				console.warn("de-queueing event obj65254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65254_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65268 
move_65259();
function move_65259() {
	window.obj65254_onTap_runningActionsCount = obj65254_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65268");
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
			window.obj65254_onTap_runningActionsCount = window.obj65254_onTap_runningActionsCount - 1;
if (window.obj65254_onTap_runningActionsCount < 0) {
	window.obj65254_onTap_runningActionsCount = 0;
} else if (window.obj65254_onTap_runningActionsCount == 0) {
	obj65254_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65254_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65254_onTap_activeActionGroupIndex = -1;
		$("#obj65254").trigger("obj65254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65254) {
				console.warn("de-queueing event obj65254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65254_onTap_activeActionGroupIndex = 3;
	





















};
obj87033_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87033_onTap_activeActionGroupIndex = -1;
		$("#obj87033").trigger("obj87033_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87033) {
				console.warn("de-queueing event obj87033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87033_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87038 
stopAudio_87035();
function stopAudio_87035() {
	window.obj87033_onTap_runningActionsCount = obj87033_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87038")[0];
	myAudio.pause();
	window.obj87033_onTap_runningActionsCount = window.obj87033_onTap_runningActionsCount - 1;
if (window.obj87033_onTap_runningActionsCount < 0) {
	window.obj87033_onTap_runningActionsCount = 0;
} else if (window.obj87033_onTap_runningActionsCount == 0) {
	obj87033_onTap_actionGroup1();
}
}








};
obj87033_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87033_onTap_activeActionGroupIndex = -1;
		$("#obj87033").trigger("obj87033_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87033) {
				console.warn("de-queueing event obj87033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87033_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87033 
hide_87036();
function hide_87036() {
	var selector = "#obj87033";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87033_onTap_runningActionsCount = obj87033_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87033_onTap_runningActionsCount = window.obj87033_onTap_runningActionsCount - 1;
if (window.obj87033_onTap_runningActionsCount < 0) {
	window.obj87033_onTap_runningActionsCount = 0;
} else if (window.obj87033_onTap_runningActionsCount == 0) {
	obj87033_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87036(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87033_onTap_runningActionsCount = window.obj87033_onTap_runningActionsCount - 1;
if (window.obj87033_onTap_runningActionsCount < 0) {
	window.obj87033_onTap_runningActionsCount = 0;
} else if (window.obj87033_onTap_runningActionsCount == 0) {
	obj87033_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87033_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87033_onTap_activeActionGroupIndex = -1;
		$("#obj87033").trigger("obj87033_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87033) {
				console.warn("de-queueing event obj87033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87033_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87028
(function(){
	window.obj87033_onTap_runningActionsCount = obj87033_onTap_runningActionsCount + 1;

	var selector = "#obj87028";
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
					window.obj87033_onTap_runningActionsCount = window.obj87033_onTap_runningActionsCount - 1;
if (window.obj87033_onTap_runningActionsCount < 0) {
	window.obj87033_onTap_runningActionsCount = 0;
} else if (window.obj87033_onTap_runningActionsCount == 0) {
	obj87033_onTap_actionGroup3();
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
				window.obj87033_onTap_runningActionsCount = window.obj87033_onTap_runningActionsCount - 1;
if (window.obj87033_onTap_runningActionsCount < 0) {
	window.obj87033_onTap_runningActionsCount = 0;
} else if (window.obj87033_onTap_runningActionsCount == 0) {
	obj87033_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87033_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87033_onTap_activeActionGroupIndex = -1;
		$("#obj87033").trigger("obj87033_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87033) {
				console.warn("de-queueing event obj87033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87033_onTap_activeActionGroupIndex = 3;
	





















};
obj87028_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87028_onTap_activeActionGroupIndex = -1;
		$("#obj87028").trigger("obj87028_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87028) {
				console.warn("de-queueing event obj87028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87028_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87028 
hide_87030();
function hide_87030() {
	var selector = "#obj87028";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87028_onTap_runningActionsCount = obj87028_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87028_onTap_runningActionsCount = window.obj87028_onTap_runningActionsCount - 1;
if (window.obj87028_onTap_runningActionsCount < 0) {
	window.obj87028_onTap_runningActionsCount = 0;
} else if (window.obj87028_onTap_runningActionsCount == 0) {
	obj87028_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87030(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87028_onTap_runningActionsCount = window.obj87028_onTap_runningActionsCount - 1;
if (window.obj87028_onTap_runningActionsCount < 0) {
	window.obj87028_onTap_runningActionsCount = 0;
} else if (window.obj87028_onTap_runningActionsCount == 0) {
	obj87028_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87028_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87028_onTap_activeActionGroupIndex = -1;
		$("#obj87028").trigger("obj87028_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87028) {
				console.warn("de-queueing event obj87028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87028_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87033
(function(){
	window.obj87028_onTap_runningActionsCount = obj87028_onTap_runningActionsCount + 1;

	var selector = "#obj87033";
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
					window.obj87028_onTap_runningActionsCount = window.obj87028_onTap_runningActionsCount - 1;
if (window.obj87028_onTap_runningActionsCount < 0) {
	window.obj87028_onTap_runningActionsCount = 0;
} else if (window.obj87028_onTap_runningActionsCount == 0) {
	obj87028_onTap_actionGroup2();
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
				window.obj87028_onTap_runningActionsCount = window.obj87028_onTap_runningActionsCount - 1;
if (window.obj87028_onTap_runningActionsCount < 0) {
	window.obj87028_onTap_runningActionsCount = 0;
} else if (window.obj87028_onTap_runningActionsCount == 0) {
	obj87028_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87028_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87028_onTap_activeActionGroupIndex = -1;
		$("#obj87028").trigger("obj87028_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87028) {
				console.warn("de-queueing event obj87028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87028_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87038 
playAudio_87032();
function playAudio_87032() {
	window.obj87028_onTap_runningActionsCount = obj87028_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87038")[0];
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
		    window.obj87028_onTap_runningActionsCount = window.obj87028_onTap_runningActionsCount - 1;
if (window.obj87028_onTap_runningActionsCount < 0) {
	window.obj87028_onTap_runningActionsCount = 0;
} else if (window.obj87028_onTap_runningActionsCount == 0) {
	obj87028_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87028_onTap_runningActionsCount = window.obj87028_onTap_runningActionsCount - 1;
if (window.obj87028_onTap_runningActionsCount < 0) {
	window.obj87028_onTap_runningActionsCount = 0;
} else if (window.obj87028_onTap_runningActionsCount == 0) {
	obj87028_onTap_actionGroup3();
}
	}
}









};
obj87028_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87028_onTap_activeActionGroupIndex = -1;
		$("#obj87028").trigger("obj87028_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87028) {
				console.warn("de-queueing event obj87028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87028_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj2835: Event Touch Down
 *
 */
$("#obj2835").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2835_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2835_onTap is still running");
	return;
}
var obj2835_onTap_runningActionsCount = 0;
var obj2835_onTap_loopCount = 0;
obj2835_onTap_actionGroup0();
});










/*
 *
 *   obj2832: Event Touch Down
 *
 */
$("#obj2832").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2832_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2832_onTap is still running");
	return;
}
var obj2832_onTap_runningActionsCount = 0;
var obj2832_onTap_loopCount = 0;
obj2832_onTap_actionGroup0();
});
















































































/*
 *
 *   obj65262: Event Touch Down
 *
 */
$("#obj65262").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65262_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65262_onTap is still running");
	return;
}
var obj65262_onTap_runningActionsCount = 0;
var obj65262_onTap_loopCount = 0;
obj65262_onTap_actionGroup0();
});










/*
 *
 *   obj65254: Event Touch Down
 *
 */
$("#obj65254").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65254_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65254_onTap is still running");
	return;
}
var obj65254_onTap_runningActionsCount = 0;
var obj65254_onTap_loopCount = 0;
obj65254_onTap_actionGroup0();
});










/*
 *
 *   obj87033: Event Touch Down
 *
 */
$("#obj87033").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87033_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87033_onTap is still running");
	return;
}
var obj87033_onTap_runningActionsCount = 0;
var obj87033_onTap_loopCount = 0;
obj87033_onTap_actionGroup0();
});










/*
 *
 *   obj87028: Event Touch Down
 *
 */
$("#obj87028").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87028_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87028_onTap is still running");
	return;
}
var obj87028_onTap_runningActionsCount = 0;
var obj87028_onTap_loopCount = 0;
obj87028_onTap_actionGroup0();
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
	
$("#obj2830").trigger('SCEventShow');
$("#obj2835").trigger('SCEventShow');
$("#obj2832").trigger('SCEventShow');
$("#obj2851").trigger('SCEventShow');
$("#obj2865").trigger('SCEventShow');
$("#obj2870").trigger('SCEventShow');
$("#obj2875").trigger('SCEventShow');
$("#obj2877").trigger('SCEventShow');
$("#obj2882").trigger('SCEventShow');
$("#obj2884").trigger('SCEventShow');
$("#obj65262").trigger('SCEventShow');
$("#obj65254").trigger('SCEventShow');
$("#obj87033").trigger('SCEventShow');
$("#obj87028").trigger('SCEventShow');
$("#obj87038").trigger('SCEventShow');
$("#obj94667").trigger('SCEventShow');
$("#obj65268").trigger('SCEventShow');
	
});