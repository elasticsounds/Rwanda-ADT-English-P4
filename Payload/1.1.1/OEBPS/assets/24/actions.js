pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 4132;
pubcoder.page.title = pubcoder.page.title || "24";
pubcoder.page.number = pubcoder.page.number || 24;
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
var obj4138_onTap_activeActionGroupIndex = -1;
var obj4138_onTap_runningActionsCount = 0;
var obj4138_onTap_loopCount = 0;
var obj4135_onTap_activeActionGroupIndex = -1;
var obj4135_onTap_runningActionsCount = 0;
var obj4135_onTap_loopCount = 0;
var obj65342_onTap_activeActionGroupIndex = -1;
var obj65342_onTap_runningActionsCount = 0;
var obj65342_onTap_loopCount = 0;
var obj65334_onTap_activeActionGroupIndex = -1;
var obj65334_onTap_runningActionsCount = 0;
var obj65334_onTap_loopCount = 0;
var obj89800_onTap_activeActionGroupIndex = -1;
var obj89800_onTap_runningActionsCount = 0;
var obj89800_onTap_loopCount = 0;
var obj89795_onTap_activeActionGroupIndex = -1;
var obj89795_onTap_runningActionsCount = 0;
var obj89795_onTap_loopCount = 0;
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
		
obj4138_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4138_onTap_activeActionGroupIndex = -1;
		$("#obj4138").trigger("obj4138_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4138) {
				console.warn("de-queueing event obj4138." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4138").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4138_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4140();
function goToPage_4140() {
	window.obj4138_onTap_runningActionsCount = obj4138_onTap_runningActionsCount + 1;
	$("#anchor146")[0].click();
	window.obj4138_onTap_runningActionsCount = window.obj4138_onTap_runningActionsCount - 1;
if (window.obj4138_onTap_runningActionsCount < 0) {
	window.obj4138_onTap_runningActionsCount = 0;
} else if (window.obj4138_onTap_runningActionsCount == 0) {
	obj4138_onTap_actionGroup1();
}
}





















};
obj4138_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4138_onTap_activeActionGroupIndex = -1;
		$("#obj4138").trigger("obj4138_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4138) {
				console.warn("de-queueing event obj4138." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4138").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4138_onTap_activeActionGroupIndex = 1;
	





















};
obj4135_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4135_onTap_activeActionGroupIndex = -1;
		$("#obj4135").trigger("obj4135_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4135) {
				console.warn("de-queueing event obj4135." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4135").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4135_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4137();
function goToPage_4137() {
	window.obj4135_onTap_runningActionsCount = obj4135_onTap_runningActionsCount + 1;
	$("#anchor147")[0].click();
	window.obj4135_onTap_runningActionsCount = window.obj4135_onTap_runningActionsCount - 1;
if (window.obj4135_onTap_runningActionsCount < 0) {
	window.obj4135_onTap_runningActionsCount = 0;
} else if (window.obj4135_onTap_runningActionsCount == 0) {
	obj4135_onTap_actionGroup1();
}
}





















};
obj4135_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4135_onTap_activeActionGroupIndex = -1;
		$("#obj4135").trigger("obj4135_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4135) {
				console.warn("de-queueing event obj4135." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4135").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4135_onTap_activeActionGroupIndex = 1;
	





















};
obj65342_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65342_onTap_activeActionGroupIndex = -1;
		$("#obj65342").trigger("obj65342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65342) {
				console.warn("de-queueing event obj65342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65342_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65342 
hide_65345();
function hide_65345() {
	var selector = "#obj65342";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65342_onTap_runningActionsCount = obj65342_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65342_onTap_runningActionsCount = window.obj65342_onTap_runningActionsCount - 1;
if (window.obj65342_onTap_runningActionsCount < 0) {
	window.obj65342_onTap_runningActionsCount = 0;
} else if (window.obj65342_onTap_runningActionsCount == 0) {
	obj65342_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65345(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65342_onTap_runningActionsCount = window.obj65342_onTap_runningActionsCount - 1;
if (window.obj65342_onTap_runningActionsCount < 0) {
	window.obj65342_onTap_runningActionsCount = 0;
} else if (window.obj65342_onTap_runningActionsCount == 0) {
	obj65342_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65348 
stopMovie_65344();
function stopMovie_65344() {
	window.obj65342_onTap_runningActionsCount = obj65342_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65348")[0];
	myVideo.pause();
	window.obj65342_onTap_runningActionsCount = window.obj65342_onTap_runningActionsCount - 1;
if (window.obj65342_onTap_runningActionsCount < 0) {
	window.obj65342_onTap_runningActionsCount = 0;
} else if (window.obj65342_onTap_runningActionsCount == 0) {
	obj65342_onTap_actionGroup1();
}
}
















};
obj65342_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65342_onTap_activeActionGroupIndex = -1;
		$("#obj65342").trigger("obj65342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65342) {
				console.warn("de-queueing event obj65342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65342_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65334
(function(){
	window.obj65342_onTap_runningActionsCount = obj65342_onTap_runningActionsCount + 1;

	var selector = "#obj65334";
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
					window.obj65342_onTap_runningActionsCount = window.obj65342_onTap_runningActionsCount - 1;
if (window.obj65342_onTap_runningActionsCount < 0) {
	window.obj65342_onTap_runningActionsCount = 0;
} else if (window.obj65342_onTap_runningActionsCount == 0) {
	obj65342_onTap_actionGroup2();
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
				window.obj65342_onTap_runningActionsCount = window.obj65342_onTap_runningActionsCount - 1;
if (window.obj65342_onTap_runningActionsCount < 0) {
	window.obj65342_onTap_runningActionsCount = 0;
} else if (window.obj65342_onTap_runningActionsCount == 0) {
	obj65342_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65342_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65342_onTap_activeActionGroupIndex = -1;
		$("#obj65342").trigger("obj65342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65342) {
				console.warn("de-queueing event obj65342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65342_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65348 
move_65347();
function move_65347() {
	window.obj65342_onTap_runningActionsCount = obj65342_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65348");
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
			window.obj65342_onTap_runningActionsCount = window.obj65342_onTap_runningActionsCount - 1;
if (window.obj65342_onTap_runningActionsCount < 0) {
	window.obj65342_onTap_runningActionsCount = 0;
} else if (window.obj65342_onTap_runningActionsCount == 0) {
	obj65342_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65342_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65342_onTap_activeActionGroupIndex = -1;
		$("#obj65342").trigger("obj65342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65342) {
				console.warn("de-queueing event obj65342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65342_onTap_activeActionGroupIndex = 3;
	





















};
obj65334_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65334_onTap_activeActionGroupIndex = -1;
		$("#obj65334").trigger("obj65334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65334) {
				console.warn("de-queueing event obj65334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65334_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65334 
hide_65337();
function hide_65337() {
	var selector = "#obj65334";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65334_onTap_runningActionsCount = obj65334_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65334_onTap_runningActionsCount = window.obj65334_onTap_runningActionsCount - 1;
if (window.obj65334_onTap_runningActionsCount < 0) {
	window.obj65334_onTap_runningActionsCount = 0;
} else if (window.obj65334_onTap_runningActionsCount == 0) {
	obj65334_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65337(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65334_onTap_runningActionsCount = window.obj65334_onTap_runningActionsCount - 1;
if (window.obj65334_onTap_runningActionsCount < 0) {
	window.obj65334_onTap_runningActionsCount = 0;
} else if (window.obj65334_onTap_runningActionsCount == 0) {
	obj65334_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65348 
playPauseMovie_65336();
function playPauseMovie_65336() {
	window.obj65334_onTap_runningActionsCount = obj65334_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65348")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65334_onTap_runningActionsCount = window.obj65334_onTap_runningActionsCount - 1;
if (window.obj65334_onTap_runningActionsCount < 0) {
	window.obj65334_onTap_runningActionsCount = 0;
} else if (window.obj65334_onTap_runningActionsCount == 0) {
	obj65334_onTap_actionGroup1();
}
}

















};
obj65334_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65334_onTap_activeActionGroupIndex = -1;
		$("#obj65334").trigger("obj65334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65334) {
				console.warn("de-queueing event obj65334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65334_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65342
(function(){
	window.obj65334_onTap_runningActionsCount = obj65334_onTap_runningActionsCount + 1;

	var selector = "#obj65342";
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
					window.obj65334_onTap_runningActionsCount = window.obj65334_onTap_runningActionsCount - 1;
if (window.obj65334_onTap_runningActionsCount < 0) {
	window.obj65334_onTap_runningActionsCount = 0;
} else if (window.obj65334_onTap_runningActionsCount == 0) {
	obj65334_onTap_actionGroup2();
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
				window.obj65334_onTap_runningActionsCount = window.obj65334_onTap_runningActionsCount - 1;
if (window.obj65334_onTap_runningActionsCount < 0) {
	window.obj65334_onTap_runningActionsCount = 0;
} else if (window.obj65334_onTap_runningActionsCount == 0) {
	obj65334_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65334_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65334_onTap_activeActionGroupIndex = -1;
		$("#obj65334").trigger("obj65334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65334) {
				console.warn("de-queueing event obj65334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65334_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65348 
move_65339();
function move_65339() {
	window.obj65334_onTap_runningActionsCount = obj65334_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65348");
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
			window.obj65334_onTap_runningActionsCount = window.obj65334_onTap_runningActionsCount - 1;
if (window.obj65334_onTap_runningActionsCount < 0) {
	window.obj65334_onTap_runningActionsCount = 0;
} else if (window.obj65334_onTap_runningActionsCount == 0) {
	obj65334_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65334_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65334_onTap_activeActionGroupIndex = -1;
		$("#obj65334").trigger("obj65334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65334) {
				console.warn("de-queueing event obj65334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65334_onTap_activeActionGroupIndex = 3;
	





















};
obj89800_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89800_onTap_activeActionGroupIndex = -1;
		$("#obj89800").trigger("obj89800_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89800) {
				console.warn("de-queueing event obj89800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89800_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89805 
stopAudio_89802();
function stopAudio_89802() {
	window.obj89800_onTap_runningActionsCount = obj89800_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89805")[0];
	myAudio.pause();
	window.obj89800_onTap_runningActionsCount = window.obj89800_onTap_runningActionsCount - 1;
if (window.obj89800_onTap_runningActionsCount < 0) {
	window.obj89800_onTap_runningActionsCount = 0;
} else if (window.obj89800_onTap_runningActionsCount == 0) {
	obj89800_onTap_actionGroup1();
}
}








};
obj89800_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89800_onTap_activeActionGroupIndex = -1;
		$("#obj89800").trigger("obj89800_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89800) {
				console.warn("de-queueing event obj89800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89800_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89800 
hide_89803();
function hide_89803() {
	var selector = "#obj89800";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89800_onTap_runningActionsCount = obj89800_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89800_onTap_runningActionsCount = window.obj89800_onTap_runningActionsCount - 1;
if (window.obj89800_onTap_runningActionsCount < 0) {
	window.obj89800_onTap_runningActionsCount = 0;
} else if (window.obj89800_onTap_runningActionsCount == 0) {
	obj89800_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89803(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89800_onTap_runningActionsCount = window.obj89800_onTap_runningActionsCount - 1;
if (window.obj89800_onTap_runningActionsCount < 0) {
	window.obj89800_onTap_runningActionsCount = 0;
} else if (window.obj89800_onTap_runningActionsCount == 0) {
	obj89800_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89800_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89800_onTap_activeActionGroupIndex = -1;
		$("#obj89800").trigger("obj89800_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89800) {
				console.warn("de-queueing event obj89800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89800_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89795
(function(){
	window.obj89800_onTap_runningActionsCount = obj89800_onTap_runningActionsCount + 1;

	var selector = "#obj89795";
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
					window.obj89800_onTap_runningActionsCount = window.obj89800_onTap_runningActionsCount - 1;
if (window.obj89800_onTap_runningActionsCount < 0) {
	window.obj89800_onTap_runningActionsCount = 0;
} else if (window.obj89800_onTap_runningActionsCount == 0) {
	obj89800_onTap_actionGroup3();
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
				window.obj89800_onTap_runningActionsCount = window.obj89800_onTap_runningActionsCount - 1;
if (window.obj89800_onTap_runningActionsCount < 0) {
	window.obj89800_onTap_runningActionsCount = 0;
} else if (window.obj89800_onTap_runningActionsCount == 0) {
	obj89800_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89800_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89800_onTap_activeActionGroupIndex = -1;
		$("#obj89800").trigger("obj89800_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89800) {
				console.warn("de-queueing event obj89800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89800_onTap_activeActionGroupIndex = 3;
	





















};
obj89795_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89795_onTap_activeActionGroupIndex = -1;
		$("#obj89795").trigger("obj89795_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89795) {
				console.warn("de-queueing event obj89795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89795_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89795 
hide_89797();
function hide_89797() {
	var selector = "#obj89795";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89795_onTap_runningActionsCount = obj89795_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89795_onTap_runningActionsCount = window.obj89795_onTap_runningActionsCount - 1;
if (window.obj89795_onTap_runningActionsCount < 0) {
	window.obj89795_onTap_runningActionsCount = 0;
} else if (window.obj89795_onTap_runningActionsCount == 0) {
	obj89795_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89797(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89795_onTap_runningActionsCount = window.obj89795_onTap_runningActionsCount - 1;
if (window.obj89795_onTap_runningActionsCount < 0) {
	window.obj89795_onTap_runningActionsCount = 0;
} else if (window.obj89795_onTap_runningActionsCount == 0) {
	obj89795_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89795_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89795_onTap_activeActionGroupIndex = -1;
		$("#obj89795").trigger("obj89795_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89795) {
				console.warn("de-queueing event obj89795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89795_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89800
(function(){
	window.obj89795_onTap_runningActionsCount = obj89795_onTap_runningActionsCount + 1;

	var selector = "#obj89800";
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
					window.obj89795_onTap_runningActionsCount = window.obj89795_onTap_runningActionsCount - 1;
if (window.obj89795_onTap_runningActionsCount < 0) {
	window.obj89795_onTap_runningActionsCount = 0;
} else if (window.obj89795_onTap_runningActionsCount == 0) {
	obj89795_onTap_actionGroup2();
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
				window.obj89795_onTap_runningActionsCount = window.obj89795_onTap_runningActionsCount - 1;
if (window.obj89795_onTap_runningActionsCount < 0) {
	window.obj89795_onTap_runningActionsCount = 0;
} else if (window.obj89795_onTap_runningActionsCount == 0) {
	obj89795_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89795_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89795_onTap_activeActionGroupIndex = -1;
		$("#obj89795").trigger("obj89795_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89795) {
				console.warn("de-queueing event obj89795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89795_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89805 
playAudio_89799();
function playAudio_89799() {
	window.obj89795_onTap_runningActionsCount = obj89795_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89805")[0];
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
		    window.obj89795_onTap_runningActionsCount = window.obj89795_onTap_runningActionsCount - 1;
if (window.obj89795_onTap_runningActionsCount < 0) {
	window.obj89795_onTap_runningActionsCount = 0;
} else if (window.obj89795_onTap_runningActionsCount == 0) {
	obj89795_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89795_onTap_runningActionsCount = window.obj89795_onTap_runningActionsCount - 1;
if (window.obj89795_onTap_runningActionsCount < 0) {
	window.obj89795_onTap_runningActionsCount = 0;
} else if (window.obj89795_onTap_runningActionsCount == 0) {
	obj89795_onTap_actionGroup3();
}
	}
}









};
obj89795_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89795_onTap_activeActionGroupIndex = -1;
		$("#obj89795").trigger("obj89795_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89795) {
				console.warn("de-queueing event obj89795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89795_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj4138: Event Touch Down
 *
 */
$("#obj4138").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4138_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4138_onTap is still running");
	return;
}
var obj4138_onTap_runningActionsCount = 0;
var obj4138_onTap_loopCount = 0;
obj4138_onTap_actionGroup0();
});










/*
 *
 *   obj4135: Event Touch Down
 *
 */
$("#obj4135").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4135_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4135_onTap is still running");
	return;
}
var obj4135_onTap_runningActionsCount = 0;
var obj4135_onTap_loopCount = 0;
obj4135_onTap_actionGroup0();
});






























/*
 *
 *   obj65342: Event Touch Down
 *
 */
$("#obj65342").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65342_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65342_onTap is still running");
	return;
}
var obj65342_onTap_runningActionsCount = 0;
var obj65342_onTap_loopCount = 0;
obj65342_onTap_actionGroup0();
});










/*
 *
 *   obj65334: Event Touch Down
 *
 */
$("#obj65334").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65334_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65334_onTap is still running");
	return;
}
var obj65334_onTap_runningActionsCount = 0;
var obj65334_onTap_loopCount = 0;
obj65334_onTap_actionGroup0();
});










/*
 *
 *   obj89800: Event Touch Down
 *
 */
$("#obj89800").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89800_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89800_onTap is still running");
	return;
}
var obj89800_onTap_runningActionsCount = 0;
var obj89800_onTap_loopCount = 0;
obj89800_onTap_actionGroup0();
});










/*
 *
 *   obj89795: Event Touch Down
 *
 */
$("#obj89795").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89795_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89795_onTap is still running");
	return;
}
var obj89795_onTap_runningActionsCount = 0;
var obj89795_onTap_loopCount = 0;
obj89795_onTap_actionGroup0();
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
	
$("#obj4133").trigger('SCEventShow');
$("#obj4138").trigger('SCEventShow');
$("#obj4135").trigger('SCEventShow');
$("#obj4154").trigger('SCEventShow');
$("#obj4156").trigger('SCEventShow');
$("#obj65342").trigger('SCEventShow');
$("#obj65334").trigger('SCEventShow');
$("#obj89800").trigger('SCEventShow');
$("#obj89795").trigger('SCEventShow');
$("#obj89805").trigger('SCEventShow');
$("#obj94677").trigger('SCEventShow');
$("#obj65348").trigger('SCEventShow');
	
});