pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 48759;
pubcoder.page.title = pubcoder.page.title || "173";
pubcoder.page.number = pubcoder.page.number || 173;
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
var obj48767_onTap_activeActionGroupIndex = -1;
var obj48767_onTap_runningActionsCount = 0;
var obj48767_onTap_loopCount = 0;
var obj48764_onTap_activeActionGroupIndex = -1;
var obj48764_onTap_runningActionsCount = 0;
var obj48764_onTap_loopCount = 0;
var obj67774_onTap_activeActionGroupIndex = -1;
var obj67774_onTap_runningActionsCount = 0;
var obj67774_onTap_loopCount = 0;
var obj67766_onTap_activeActionGroupIndex = -1;
var obj67766_onTap_runningActionsCount = 0;
var obj67766_onTap_loopCount = 0;
var obj88957_onTap_activeActionGroupIndex = -1;
var obj88957_onTap_runningActionsCount = 0;
var obj88957_onTap_loopCount = 0;
var obj88952_onTap_activeActionGroupIndex = -1;
var obj88952_onTap_runningActionsCount = 0;
var obj88952_onTap_loopCount = 0;
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
		
obj48767_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48767_onTap_activeActionGroupIndex = -1;
		$("#obj48767").trigger("obj48767_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48767) {
				console.warn("de-queueing event obj48767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48767_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_48769();
function goToPage_48769() {
	window.obj48767_onTap_runningActionsCount = obj48767_onTap_runningActionsCount + 1;
	$("#anchor1017")[0].click();
	window.obj48767_onTap_runningActionsCount = window.obj48767_onTap_runningActionsCount - 1;
if (window.obj48767_onTap_runningActionsCount < 0) {
	window.obj48767_onTap_runningActionsCount = 0;
} else if (window.obj48767_onTap_runningActionsCount == 0) {
	obj48767_onTap_actionGroup1();
}
}





















};
obj48767_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48767_onTap_activeActionGroupIndex = -1;
		$("#obj48767").trigger("obj48767_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48767) {
				console.warn("de-queueing event obj48767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48767_onTap_activeActionGroupIndex = 1;
	





















};
obj48764_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48764_onTap_activeActionGroupIndex = -1;
		$("#obj48764").trigger("obj48764_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48764) {
				console.warn("de-queueing event obj48764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48764_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_48766();
function goToPage_48766() {
	window.obj48764_onTap_runningActionsCount = obj48764_onTap_runningActionsCount + 1;
	$("#anchor1018")[0].click();
	window.obj48764_onTap_runningActionsCount = window.obj48764_onTap_runningActionsCount - 1;
if (window.obj48764_onTap_runningActionsCount < 0) {
	window.obj48764_onTap_runningActionsCount = 0;
} else if (window.obj48764_onTap_runningActionsCount == 0) {
	obj48764_onTap_actionGroup1();
}
}





















};
obj48764_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48764_onTap_activeActionGroupIndex = -1;
		$("#obj48764").trigger("obj48764_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48764) {
				console.warn("de-queueing event obj48764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48764_onTap_activeActionGroupIndex = 1;
	





















};
obj67774_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67774_onTap_activeActionGroupIndex = -1;
		$("#obj67774").trigger("obj67774_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67774) {
				console.warn("de-queueing event obj67774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67774_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67774 
hide_67777();
function hide_67777() {
	var selector = "#obj67774";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67774_onTap_runningActionsCount = obj67774_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67774_onTap_runningActionsCount = window.obj67774_onTap_runningActionsCount - 1;
if (window.obj67774_onTap_runningActionsCount < 0) {
	window.obj67774_onTap_runningActionsCount = 0;
} else if (window.obj67774_onTap_runningActionsCount == 0) {
	obj67774_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67777(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67774_onTap_runningActionsCount = window.obj67774_onTap_runningActionsCount - 1;
if (window.obj67774_onTap_runningActionsCount < 0) {
	window.obj67774_onTap_runningActionsCount = 0;
} else if (window.obj67774_onTap_runningActionsCount == 0) {
	obj67774_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67780 
stopMovie_67776();
function stopMovie_67776() {
	window.obj67774_onTap_runningActionsCount = obj67774_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67780")[0];
	myVideo.pause();
	window.obj67774_onTap_runningActionsCount = window.obj67774_onTap_runningActionsCount - 1;
if (window.obj67774_onTap_runningActionsCount < 0) {
	window.obj67774_onTap_runningActionsCount = 0;
} else if (window.obj67774_onTap_runningActionsCount == 0) {
	obj67774_onTap_actionGroup1();
}
}
















};
obj67774_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67774_onTap_activeActionGroupIndex = -1;
		$("#obj67774").trigger("obj67774_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67774) {
				console.warn("de-queueing event obj67774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67774_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67766
(function(){
	window.obj67774_onTap_runningActionsCount = obj67774_onTap_runningActionsCount + 1;

	var selector = "#obj67766";
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
					window.obj67774_onTap_runningActionsCount = window.obj67774_onTap_runningActionsCount - 1;
if (window.obj67774_onTap_runningActionsCount < 0) {
	window.obj67774_onTap_runningActionsCount = 0;
} else if (window.obj67774_onTap_runningActionsCount == 0) {
	obj67774_onTap_actionGroup2();
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
				window.obj67774_onTap_runningActionsCount = window.obj67774_onTap_runningActionsCount - 1;
if (window.obj67774_onTap_runningActionsCount < 0) {
	window.obj67774_onTap_runningActionsCount = 0;
} else if (window.obj67774_onTap_runningActionsCount == 0) {
	obj67774_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67774_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67774_onTap_activeActionGroupIndex = -1;
		$("#obj67774").trigger("obj67774_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67774) {
				console.warn("de-queueing event obj67774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67774_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67780 
move_67779();
function move_67779() {
	window.obj67774_onTap_runningActionsCount = obj67774_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67780");
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
			window.obj67774_onTap_runningActionsCount = window.obj67774_onTap_runningActionsCount - 1;
if (window.obj67774_onTap_runningActionsCount < 0) {
	window.obj67774_onTap_runningActionsCount = 0;
} else if (window.obj67774_onTap_runningActionsCount == 0) {
	obj67774_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67774_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67774_onTap_activeActionGroupIndex = -1;
		$("#obj67774").trigger("obj67774_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67774) {
				console.warn("de-queueing event obj67774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67774_onTap_activeActionGroupIndex = 3;
	





















};
obj67766_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67766_onTap_activeActionGroupIndex = -1;
		$("#obj67766").trigger("obj67766_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67766) {
				console.warn("de-queueing event obj67766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67766_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67766 
hide_67769();
function hide_67769() {
	var selector = "#obj67766";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67766_onTap_runningActionsCount = obj67766_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67766_onTap_runningActionsCount = window.obj67766_onTap_runningActionsCount - 1;
if (window.obj67766_onTap_runningActionsCount < 0) {
	window.obj67766_onTap_runningActionsCount = 0;
} else if (window.obj67766_onTap_runningActionsCount == 0) {
	obj67766_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67769(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67766_onTap_runningActionsCount = window.obj67766_onTap_runningActionsCount - 1;
if (window.obj67766_onTap_runningActionsCount < 0) {
	window.obj67766_onTap_runningActionsCount = 0;
} else if (window.obj67766_onTap_runningActionsCount == 0) {
	obj67766_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67780 
playPauseMovie_67768();
function playPauseMovie_67768() {
	window.obj67766_onTap_runningActionsCount = obj67766_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67780")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67766_onTap_runningActionsCount = window.obj67766_onTap_runningActionsCount - 1;
if (window.obj67766_onTap_runningActionsCount < 0) {
	window.obj67766_onTap_runningActionsCount = 0;
} else if (window.obj67766_onTap_runningActionsCount == 0) {
	obj67766_onTap_actionGroup1();
}
}

















};
obj67766_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67766_onTap_activeActionGroupIndex = -1;
		$("#obj67766").trigger("obj67766_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67766) {
				console.warn("de-queueing event obj67766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67766_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67774
(function(){
	window.obj67766_onTap_runningActionsCount = obj67766_onTap_runningActionsCount + 1;

	var selector = "#obj67774";
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
					window.obj67766_onTap_runningActionsCount = window.obj67766_onTap_runningActionsCount - 1;
if (window.obj67766_onTap_runningActionsCount < 0) {
	window.obj67766_onTap_runningActionsCount = 0;
} else if (window.obj67766_onTap_runningActionsCount == 0) {
	obj67766_onTap_actionGroup2();
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
				window.obj67766_onTap_runningActionsCount = window.obj67766_onTap_runningActionsCount - 1;
if (window.obj67766_onTap_runningActionsCount < 0) {
	window.obj67766_onTap_runningActionsCount = 0;
} else if (window.obj67766_onTap_runningActionsCount == 0) {
	obj67766_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67766_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67766_onTap_activeActionGroupIndex = -1;
		$("#obj67766").trigger("obj67766_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67766) {
				console.warn("de-queueing event obj67766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67766_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67780 
move_67771();
function move_67771() {
	window.obj67766_onTap_runningActionsCount = obj67766_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67780");
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
			window.obj67766_onTap_runningActionsCount = window.obj67766_onTap_runningActionsCount - 1;
if (window.obj67766_onTap_runningActionsCount < 0) {
	window.obj67766_onTap_runningActionsCount = 0;
} else if (window.obj67766_onTap_runningActionsCount == 0) {
	obj67766_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67766_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67766_onTap_activeActionGroupIndex = -1;
		$("#obj67766").trigger("obj67766_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67766) {
				console.warn("de-queueing event obj67766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67766_onTap_activeActionGroupIndex = 3;
	





















};
obj88957_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88957_onTap_activeActionGroupIndex = -1;
		$("#obj88957").trigger("obj88957_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88957) {
				console.warn("de-queueing event obj88957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88957_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88962 
stopAudio_88959();
function stopAudio_88959() {
	window.obj88957_onTap_runningActionsCount = obj88957_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88962")[0];
	myAudio.pause();
	window.obj88957_onTap_runningActionsCount = window.obj88957_onTap_runningActionsCount - 1;
if (window.obj88957_onTap_runningActionsCount < 0) {
	window.obj88957_onTap_runningActionsCount = 0;
} else if (window.obj88957_onTap_runningActionsCount == 0) {
	obj88957_onTap_actionGroup1();
}
}








};
obj88957_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88957_onTap_activeActionGroupIndex = -1;
		$("#obj88957").trigger("obj88957_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88957) {
				console.warn("de-queueing event obj88957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88957_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88957 
hide_88960();
function hide_88960() {
	var selector = "#obj88957";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88957_onTap_runningActionsCount = obj88957_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88957_onTap_runningActionsCount = window.obj88957_onTap_runningActionsCount - 1;
if (window.obj88957_onTap_runningActionsCount < 0) {
	window.obj88957_onTap_runningActionsCount = 0;
} else if (window.obj88957_onTap_runningActionsCount == 0) {
	obj88957_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88960(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88957_onTap_runningActionsCount = window.obj88957_onTap_runningActionsCount - 1;
if (window.obj88957_onTap_runningActionsCount < 0) {
	window.obj88957_onTap_runningActionsCount = 0;
} else if (window.obj88957_onTap_runningActionsCount == 0) {
	obj88957_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88957_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88957_onTap_activeActionGroupIndex = -1;
		$("#obj88957").trigger("obj88957_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88957) {
				console.warn("de-queueing event obj88957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88957_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88952
(function(){
	window.obj88957_onTap_runningActionsCount = obj88957_onTap_runningActionsCount + 1;

	var selector = "#obj88952";
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
					window.obj88957_onTap_runningActionsCount = window.obj88957_onTap_runningActionsCount - 1;
if (window.obj88957_onTap_runningActionsCount < 0) {
	window.obj88957_onTap_runningActionsCount = 0;
} else if (window.obj88957_onTap_runningActionsCount == 0) {
	obj88957_onTap_actionGroup3();
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
				window.obj88957_onTap_runningActionsCount = window.obj88957_onTap_runningActionsCount - 1;
if (window.obj88957_onTap_runningActionsCount < 0) {
	window.obj88957_onTap_runningActionsCount = 0;
} else if (window.obj88957_onTap_runningActionsCount == 0) {
	obj88957_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88957_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88957_onTap_activeActionGroupIndex = -1;
		$("#obj88957").trigger("obj88957_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88957) {
				console.warn("de-queueing event obj88957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88957_onTap_activeActionGroupIndex = 3;
	





















};
obj88952_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88952_onTap_activeActionGroupIndex = -1;
		$("#obj88952").trigger("obj88952_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88952) {
				console.warn("de-queueing event obj88952." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88952").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88952_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88952 
hide_88954();
function hide_88954() {
	var selector = "#obj88952";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88952_onTap_runningActionsCount = obj88952_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88952_onTap_runningActionsCount = window.obj88952_onTap_runningActionsCount - 1;
if (window.obj88952_onTap_runningActionsCount < 0) {
	window.obj88952_onTap_runningActionsCount = 0;
} else if (window.obj88952_onTap_runningActionsCount == 0) {
	obj88952_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88954(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88952_onTap_runningActionsCount = window.obj88952_onTap_runningActionsCount - 1;
if (window.obj88952_onTap_runningActionsCount < 0) {
	window.obj88952_onTap_runningActionsCount = 0;
} else if (window.obj88952_onTap_runningActionsCount == 0) {
	obj88952_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88952_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88952_onTap_activeActionGroupIndex = -1;
		$("#obj88952").trigger("obj88952_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88952) {
				console.warn("de-queueing event obj88952." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88952").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88952_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88957
(function(){
	window.obj88952_onTap_runningActionsCount = obj88952_onTap_runningActionsCount + 1;

	var selector = "#obj88957";
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
					window.obj88952_onTap_runningActionsCount = window.obj88952_onTap_runningActionsCount - 1;
if (window.obj88952_onTap_runningActionsCount < 0) {
	window.obj88952_onTap_runningActionsCount = 0;
} else if (window.obj88952_onTap_runningActionsCount == 0) {
	obj88952_onTap_actionGroup2();
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
				window.obj88952_onTap_runningActionsCount = window.obj88952_onTap_runningActionsCount - 1;
if (window.obj88952_onTap_runningActionsCount < 0) {
	window.obj88952_onTap_runningActionsCount = 0;
} else if (window.obj88952_onTap_runningActionsCount == 0) {
	obj88952_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88952_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88952_onTap_activeActionGroupIndex = -1;
		$("#obj88952").trigger("obj88952_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88952) {
				console.warn("de-queueing event obj88952." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88952").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88952_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88962 
playAudio_88956();
function playAudio_88956() {
	window.obj88952_onTap_runningActionsCount = obj88952_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88962")[0];
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
		    window.obj88952_onTap_runningActionsCount = window.obj88952_onTap_runningActionsCount - 1;
if (window.obj88952_onTap_runningActionsCount < 0) {
	window.obj88952_onTap_runningActionsCount = 0;
} else if (window.obj88952_onTap_runningActionsCount == 0) {
	obj88952_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88952_onTap_runningActionsCount = window.obj88952_onTap_runningActionsCount - 1;
if (window.obj88952_onTap_runningActionsCount < 0) {
	window.obj88952_onTap_runningActionsCount = 0;
} else if (window.obj88952_onTap_runningActionsCount == 0) {
	obj88952_onTap_actionGroup3();
}
	}
}









};
obj88952_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88952_onTap_activeActionGroupIndex = -1;
		$("#obj88952").trigger("obj88952_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88952) {
				console.warn("de-queueing event obj88952." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88952").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88952_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj48767: Event Touch Down
 *
 */
$("#obj48767").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48767_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48767_onTap is still running");
	return;
}
var obj48767_onTap_runningActionsCount = 0;
var obj48767_onTap_loopCount = 0;
obj48767_onTap_actionGroup0();
});










/*
 *
 *   obj48764: Event Touch Down
 *
 */
$("#obj48764").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48764_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48764_onTap is still running");
	return;
}
var obj48764_onTap_runningActionsCount = 0;
var obj48764_onTap_loopCount = 0;
obj48764_onTap_actionGroup0();
});








































/*
 *
 *   obj67774: Event Touch Down
 *
 */
$("#obj67774").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67774_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67774_onTap is still running");
	return;
}
var obj67774_onTap_runningActionsCount = 0;
var obj67774_onTap_loopCount = 0;
obj67774_onTap_actionGroup0();
});










/*
 *
 *   obj67766: Event Touch Down
 *
 */
$("#obj67766").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67766_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67766_onTap is still running");
	return;
}
var obj67766_onTap_runningActionsCount = 0;
var obj67766_onTap_loopCount = 0;
obj67766_onTap_actionGroup0();
});










/*
 *
 *   obj88957: Event Touch Down
 *
 */
$("#obj88957").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88957_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88957_onTap is still running");
	return;
}
var obj88957_onTap_runningActionsCount = 0;
var obj88957_onTap_loopCount = 0;
obj88957_onTap_actionGroup0();
});










/*
 *
 *   obj88952: Event Touch Down
 *
 */
$("#obj88952").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88952_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88952_onTap is still running");
	return;
}
var obj88952_onTap_runningActionsCount = 0;
var obj88952_onTap_loopCount = 0;
obj88952_onTap_actionGroup0();
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
	
$("#obj48783").trigger('SCEventShow');
$("#obj48767").trigger('SCEventShow');
$("#obj48764").trigger('SCEventShow');
$("#obj48762").trigger('SCEventShow');
$("#obj48760").trigger('SCEventShow');
$("#obj48786").trigger('SCEventShow');
$("#obj67774").trigger('SCEventShow');
$("#obj67766").trigger('SCEventShow');
$("#obj88957").trigger('SCEventShow');
$("#obj88952").trigger('SCEventShow');
$("#obj88962").trigger('SCEventShow');
$("#obj94975").trigger('SCEventShow');
$("#obj67780").trigger('SCEventShow');
	
});