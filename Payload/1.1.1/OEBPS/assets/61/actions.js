pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 15307;
pubcoder.page.title = pubcoder.page.title || "61";
pubcoder.page.number = pubcoder.page.number || 61;
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
var obj74183_onTap_activeActionGroupIndex = -1;
var obj74183_onTap_runningActionsCount = 0;
var obj74183_onTap_loopCount = 0;
var obj74180_onTap_activeActionGroupIndex = -1;
var obj74180_onTap_runningActionsCount = 0;
var obj74180_onTap_loopCount = 0;
var obj74152_onTap_activeActionGroupIndex = -1;
var obj74152_onTap_runningActionsCount = 0;
var obj74152_onTap_loopCount = 0;
var obj74144_onTap_activeActionGroupIndex = -1;
var obj74144_onTap_runningActionsCount = 0;
var obj74144_onTap_loopCount = 0;
var obj87459_onTap_activeActionGroupIndex = -1;
var obj87459_onTap_runningActionsCount = 0;
var obj87459_onTap_loopCount = 0;
var obj87454_onTap_activeActionGroupIndex = -1;
var obj87454_onTap_runningActionsCount = 0;
var obj87454_onTap_loopCount = 0;
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
		
obj74183_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74183_onTap_activeActionGroupIndex = -1;
		$("#obj74183").trigger("obj74183_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74183) {
				console.warn("de-queueing event obj74183." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74183").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74183_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74185();
function goToPage_74185() {
	window.obj74183_onTap_runningActionsCount = obj74183_onTap_runningActionsCount + 1;
	$("#anchor361")[0].click();
	window.obj74183_onTap_runningActionsCount = window.obj74183_onTap_runningActionsCount - 1;
if (window.obj74183_onTap_runningActionsCount < 0) {
	window.obj74183_onTap_runningActionsCount = 0;
} else if (window.obj74183_onTap_runningActionsCount == 0) {
	obj74183_onTap_actionGroup1();
}
}





















};
obj74183_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74183_onTap_activeActionGroupIndex = -1;
		$("#obj74183").trigger("obj74183_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74183) {
				console.warn("de-queueing event obj74183." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74183").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74183_onTap_activeActionGroupIndex = 1;
	





















};
obj74180_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74180_onTap_activeActionGroupIndex = -1;
		$("#obj74180").trigger("obj74180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74180) {
				console.warn("de-queueing event obj74180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74180_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74182();
function goToPage_74182() {
	window.obj74180_onTap_runningActionsCount = obj74180_onTap_runningActionsCount + 1;
	$("#anchor362")[0].click();
	window.obj74180_onTap_runningActionsCount = window.obj74180_onTap_runningActionsCount - 1;
if (window.obj74180_onTap_runningActionsCount < 0) {
	window.obj74180_onTap_runningActionsCount = 0;
} else if (window.obj74180_onTap_runningActionsCount == 0) {
	obj74180_onTap_actionGroup1();
}
}





















};
obj74180_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74180_onTap_activeActionGroupIndex = -1;
		$("#obj74180").trigger("obj74180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74180) {
				console.warn("de-queueing event obj74180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74180_onTap_activeActionGroupIndex = 1;
	





















};
obj74152_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74152_onTap_activeActionGroupIndex = -1;
		$("#obj74152").trigger("obj74152_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74152) {
				console.warn("de-queueing event obj74152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74152_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74152 
hide_74155();
function hide_74155() {
	var selector = "#obj74152";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74152_onTap_runningActionsCount = obj74152_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74152_onTap_runningActionsCount = window.obj74152_onTap_runningActionsCount - 1;
if (window.obj74152_onTap_runningActionsCount < 0) {
	window.obj74152_onTap_runningActionsCount = 0;
} else if (window.obj74152_onTap_runningActionsCount == 0) {
	obj74152_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74155(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74152_onTap_runningActionsCount = window.obj74152_onTap_runningActionsCount - 1;
if (window.obj74152_onTap_runningActionsCount < 0) {
	window.obj74152_onTap_runningActionsCount = 0;
} else if (window.obj74152_onTap_runningActionsCount == 0) {
	obj74152_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj74142 
stopMovie_74154();
function stopMovie_74154() {
	window.obj74152_onTap_runningActionsCount = obj74152_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74142")[0];
	myVideo.pause();
	window.obj74152_onTap_runningActionsCount = window.obj74152_onTap_runningActionsCount - 1;
if (window.obj74152_onTap_runningActionsCount < 0) {
	window.obj74152_onTap_runningActionsCount = 0;
} else if (window.obj74152_onTap_runningActionsCount == 0) {
	obj74152_onTap_actionGroup1();
}
}
















};
obj74152_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74152_onTap_activeActionGroupIndex = -1;
		$("#obj74152").trigger("obj74152_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74152) {
				console.warn("de-queueing event obj74152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74152_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74144
(function(){
	window.obj74152_onTap_runningActionsCount = obj74152_onTap_runningActionsCount + 1;

	var selector = "#obj74144";
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
					window.obj74152_onTap_runningActionsCount = window.obj74152_onTap_runningActionsCount - 1;
if (window.obj74152_onTap_runningActionsCount < 0) {
	window.obj74152_onTap_runningActionsCount = 0;
} else if (window.obj74152_onTap_runningActionsCount == 0) {
	obj74152_onTap_actionGroup2();
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
				window.obj74152_onTap_runningActionsCount = window.obj74152_onTap_runningActionsCount - 1;
if (window.obj74152_onTap_runningActionsCount < 0) {
	window.obj74152_onTap_runningActionsCount = 0;
} else if (window.obj74152_onTap_runningActionsCount == 0) {
	obj74152_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74152_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74152_onTap_activeActionGroupIndex = -1;
		$("#obj74152").trigger("obj74152_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74152) {
				console.warn("de-queueing event obj74152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74152_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74142 
move_74157();
function move_74157() {
	window.obj74152_onTap_runningActionsCount = obj74152_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74142");
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
			window.obj74152_onTap_runningActionsCount = window.obj74152_onTap_runningActionsCount - 1;
if (window.obj74152_onTap_runningActionsCount < 0) {
	window.obj74152_onTap_runningActionsCount = 0;
} else if (window.obj74152_onTap_runningActionsCount == 0) {
	obj74152_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74152_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74152_onTap_activeActionGroupIndex = -1;
		$("#obj74152").trigger("obj74152_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74152) {
				console.warn("de-queueing event obj74152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74152_onTap_activeActionGroupIndex = 3;
	





















};
obj74144_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74144_onTap_activeActionGroupIndex = -1;
		$("#obj74144").trigger("obj74144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74144) {
				console.warn("de-queueing event obj74144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74144_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74144 
hide_74147();
function hide_74147() {
	var selector = "#obj74144";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74144_onTap_runningActionsCount = obj74144_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74144_onTap_runningActionsCount = window.obj74144_onTap_runningActionsCount - 1;
if (window.obj74144_onTap_runningActionsCount < 0) {
	window.obj74144_onTap_runningActionsCount = 0;
} else if (window.obj74144_onTap_runningActionsCount == 0) {
	obj74144_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74147(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74144_onTap_runningActionsCount = window.obj74144_onTap_runningActionsCount - 1;
if (window.obj74144_onTap_runningActionsCount < 0) {
	window.obj74144_onTap_runningActionsCount = 0;
} else if (window.obj74144_onTap_runningActionsCount == 0) {
	obj74144_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj74142 
playPauseMovie_74146();
function playPauseMovie_74146() {
	window.obj74144_onTap_runningActionsCount = obj74144_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74142")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj74144_onTap_runningActionsCount = window.obj74144_onTap_runningActionsCount - 1;
if (window.obj74144_onTap_runningActionsCount < 0) {
	window.obj74144_onTap_runningActionsCount = 0;
} else if (window.obj74144_onTap_runningActionsCount == 0) {
	obj74144_onTap_actionGroup1();
}
}

















};
obj74144_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74144_onTap_activeActionGroupIndex = -1;
		$("#obj74144").trigger("obj74144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74144) {
				console.warn("de-queueing event obj74144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74144_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74152
(function(){
	window.obj74144_onTap_runningActionsCount = obj74144_onTap_runningActionsCount + 1;

	var selector = "#obj74152";
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
					window.obj74144_onTap_runningActionsCount = window.obj74144_onTap_runningActionsCount - 1;
if (window.obj74144_onTap_runningActionsCount < 0) {
	window.obj74144_onTap_runningActionsCount = 0;
} else if (window.obj74144_onTap_runningActionsCount == 0) {
	obj74144_onTap_actionGroup2();
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
				window.obj74144_onTap_runningActionsCount = window.obj74144_onTap_runningActionsCount - 1;
if (window.obj74144_onTap_runningActionsCount < 0) {
	window.obj74144_onTap_runningActionsCount = 0;
} else if (window.obj74144_onTap_runningActionsCount == 0) {
	obj74144_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74144_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74144_onTap_activeActionGroupIndex = -1;
		$("#obj74144").trigger("obj74144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74144) {
				console.warn("de-queueing event obj74144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74144_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74142 
move_74149();
function move_74149() {
	window.obj74144_onTap_runningActionsCount = obj74144_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74142");
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
			window.obj74144_onTap_runningActionsCount = window.obj74144_onTap_runningActionsCount - 1;
if (window.obj74144_onTap_runningActionsCount < 0) {
	window.obj74144_onTap_runningActionsCount = 0;
} else if (window.obj74144_onTap_runningActionsCount == 0) {
	obj74144_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74144_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74144_onTap_activeActionGroupIndex = -1;
		$("#obj74144").trigger("obj74144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74144) {
				console.warn("de-queueing event obj74144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74144_onTap_activeActionGroupIndex = 3;
	





















};
obj87459_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87459_onTap_activeActionGroupIndex = -1;
		$("#obj87459").trigger("obj87459_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87459) {
				console.warn("de-queueing event obj87459." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87459").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87459_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87464 
stopAudio_87461();
function stopAudio_87461() {
	window.obj87459_onTap_runningActionsCount = obj87459_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87464")[0];
	myAudio.pause();
	window.obj87459_onTap_runningActionsCount = window.obj87459_onTap_runningActionsCount - 1;
if (window.obj87459_onTap_runningActionsCount < 0) {
	window.obj87459_onTap_runningActionsCount = 0;
} else if (window.obj87459_onTap_runningActionsCount == 0) {
	obj87459_onTap_actionGroup1();
}
}








};
obj87459_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87459_onTap_activeActionGroupIndex = -1;
		$("#obj87459").trigger("obj87459_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87459) {
				console.warn("de-queueing event obj87459." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87459").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87459_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87459 
hide_87462();
function hide_87462() {
	var selector = "#obj87459";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87459_onTap_runningActionsCount = obj87459_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87459_onTap_runningActionsCount = window.obj87459_onTap_runningActionsCount - 1;
if (window.obj87459_onTap_runningActionsCount < 0) {
	window.obj87459_onTap_runningActionsCount = 0;
} else if (window.obj87459_onTap_runningActionsCount == 0) {
	obj87459_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87462(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87459_onTap_runningActionsCount = window.obj87459_onTap_runningActionsCount - 1;
if (window.obj87459_onTap_runningActionsCount < 0) {
	window.obj87459_onTap_runningActionsCount = 0;
} else if (window.obj87459_onTap_runningActionsCount == 0) {
	obj87459_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87459_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87459_onTap_activeActionGroupIndex = -1;
		$("#obj87459").trigger("obj87459_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87459) {
				console.warn("de-queueing event obj87459." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87459").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87459_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87454
(function(){
	window.obj87459_onTap_runningActionsCount = obj87459_onTap_runningActionsCount + 1;

	var selector = "#obj87454";
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
					window.obj87459_onTap_runningActionsCount = window.obj87459_onTap_runningActionsCount - 1;
if (window.obj87459_onTap_runningActionsCount < 0) {
	window.obj87459_onTap_runningActionsCount = 0;
} else if (window.obj87459_onTap_runningActionsCount == 0) {
	obj87459_onTap_actionGroup3();
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
				window.obj87459_onTap_runningActionsCount = window.obj87459_onTap_runningActionsCount - 1;
if (window.obj87459_onTap_runningActionsCount < 0) {
	window.obj87459_onTap_runningActionsCount = 0;
} else if (window.obj87459_onTap_runningActionsCount == 0) {
	obj87459_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87459_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87459_onTap_activeActionGroupIndex = -1;
		$("#obj87459").trigger("obj87459_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87459) {
				console.warn("de-queueing event obj87459." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87459").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87459_onTap_activeActionGroupIndex = 3;
	





















};
obj87454_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87454_onTap_activeActionGroupIndex = -1;
		$("#obj87454").trigger("obj87454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87454) {
				console.warn("de-queueing event obj87454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87454_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87454 
hide_87456();
function hide_87456() {
	var selector = "#obj87454";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87454_onTap_runningActionsCount = obj87454_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87454_onTap_runningActionsCount = window.obj87454_onTap_runningActionsCount - 1;
if (window.obj87454_onTap_runningActionsCount < 0) {
	window.obj87454_onTap_runningActionsCount = 0;
} else if (window.obj87454_onTap_runningActionsCount == 0) {
	obj87454_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87456(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87454_onTap_runningActionsCount = window.obj87454_onTap_runningActionsCount - 1;
if (window.obj87454_onTap_runningActionsCount < 0) {
	window.obj87454_onTap_runningActionsCount = 0;
} else if (window.obj87454_onTap_runningActionsCount == 0) {
	obj87454_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87454_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87454_onTap_activeActionGroupIndex = -1;
		$("#obj87454").trigger("obj87454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87454) {
				console.warn("de-queueing event obj87454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87454_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87459
(function(){
	window.obj87454_onTap_runningActionsCount = obj87454_onTap_runningActionsCount + 1;

	var selector = "#obj87459";
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
					window.obj87454_onTap_runningActionsCount = window.obj87454_onTap_runningActionsCount - 1;
if (window.obj87454_onTap_runningActionsCount < 0) {
	window.obj87454_onTap_runningActionsCount = 0;
} else if (window.obj87454_onTap_runningActionsCount == 0) {
	obj87454_onTap_actionGroup2();
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
				window.obj87454_onTap_runningActionsCount = window.obj87454_onTap_runningActionsCount - 1;
if (window.obj87454_onTap_runningActionsCount < 0) {
	window.obj87454_onTap_runningActionsCount = 0;
} else if (window.obj87454_onTap_runningActionsCount == 0) {
	obj87454_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87454_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87454_onTap_activeActionGroupIndex = -1;
		$("#obj87454").trigger("obj87454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87454) {
				console.warn("de-queueing event obj87454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87454_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87464 
playAudio_87458();
function playAudio_87458() {
	window.obj87454_onTap_runningActionsCount = obj87454_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87464")[0];
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
		    window.obj87454_onTap_runningActionsCount = window.obj87454_onTap_runningActionsCount - 1;
if (window.obj87454_onTap_runningActionsCount < 0) {
	window.obj87454_onTap_runningActionsCount = 0;
} else if (window.obj87454_onTap_runningActionsCount == 0) {
	obj87454_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87454_onTap_runningActionsCount = window.obj87454_onTap_runningActionsCount - 1;
if (window.obj87454_onTap_runningActionsCount < 0) {
	window.obj87454_onTap_runningActionsCount = 0;
} else if (window.obj87454_onTap_runningActionsCount == 0) {
	obj87454_onTap_actionGroup3();
}
	}
}









};
obj87454_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87454_onTap_activeActionGroupIndex = -1;
		$("#obj87454").trigger("obj87454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87454) {
				console.warn("de-queueing event obj87454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87454_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj74183: Event Touch Down
 *
 */
$("#obj74183").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74183_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74183_onTap is still running");
	return;
}
var obj74183_onTap_runningActionsCount = 0;
var obj74183_onTap_loopCount = 0;
obj74183_onTap_actionGroup0();
});










/*
 *
 *   obj74180: Event Touch Down
 *
 */
$("#obj74180").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74180_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74180_onTap is still running");
	return;
}
var obj74180_onTap_runningActionsCount = 0;
var obj74180_onTap_loopCount = 0;
obj74180_onTap_actionGroup0();
});




























































/*
 *
 *   obj74152: Event Touch Down
 *
 */
$("#obj74152").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74152_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74152_onTap is still running");
	return;
}
var obj74152_onTap_runningActionsCount = 0;
var obj74152_onTap_loopCount = 0;
obj74152_onTap_actionGroup0();
});










/*
 *
 *   obj74144: Event Touch Down
 *
 */
$("#obj74144").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74144_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74144_onTap is still running");
	return;
}
var obj74144_onTap_runningActionsCount = 0;
var obj74144_onTap_loopCount = 0;
obj74144_onTap_actionGroup0();
});










/*
 *
 *   obj87459: Event Touch Down
 *
 */
$("#obj87459").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87459_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87459_onTap is still running");
	return;
}
var obj87459_onTap_runningActionsCount = 0;
var obj87459_onTap_loopCount = 0;
obj87459_onTap_actionGroup0();
});










/*
 *
 *   obj87454: Event Touch Down
 *
 */
$("#obj87454").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87454_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87454_onTap is still running");
	return;
}
var obj87454_onTap_runningActionsCount = 0;
var obj87454_onTap_loopCount = 0;
obj87454_onTap_actionGroup0();
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
	
$("#obj74186").trigger('SCEventShow');
$("#obj74183").trigger('SCEventShow');
$("#obj74180").trigger('SCEventShow');
$("#obj74178").trigger('SCEventShow');
$("#obj74176").trigger('SCEventShow');
$("#obj74174").trigger('SCEventShow');
$("#obj74172").trigger('SCEventShow');
$("#obj74170").trigger('SCEventShow');
$("#obj74152").trigger('SCEventShow');
$("#obj74144").trigger('SCEventShow');
$("#obj87459").trigger('SCEventShow');
$("#obj87454").trigger('SCEventShow');
$("#obj87464").trigger('SCEventShow');
$("#obj94751").trigger('SCEventShow');
$("#obj74142").trigger('SCEventShow');
	
});