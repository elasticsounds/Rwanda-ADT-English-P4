pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 46077;
pubcoder.page.title = pubcoder.page.title || "158";
pubcoder.page.number = pubcoder.page.number || 158;
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
var obj46089_onTap_activeActionGroupIndex = -1;
var obj46089_onTap_runningActionsCount = 0;
var obj46089_onTap_loopCount = 0;
var obj46086_onTap_activeActionGroupIndex = -1;
var obj46086_onTap_runningActionsCount = 0;
var obj46086_onTap_loopCount = 0;
var obj67534_onTap_activeActionGroupIndex = -1;
var obj67534_onTap_runningActionsCount = 0;
var obj67534_onTap_loopCount = 0;
var obj67526_onTap_activeActionGroupIndex = -1;
var obj67526_onTap_runningActionsCount = 0;
var obj67526_onTap_loopCount = 0;
var obj88777_onTap_activeActionGroupIndex = -1;
var obj88777_onTap_runningActionsCount = 0;
var obj88777_onTap_loopCount = 0;
var obj88772_onTap_activeActionGroupIndex = -1;
var obj88772_onTap_runningActionsCount = 0;
var obj88772_onTap_loopCount = 0;
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
		
obj46089_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46089_onTap_activeActionGroupIndex = -1;
		$("#obj46089").trigger("obj46089_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46089) {
				console.warn("de-queueing event obj46089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46089_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46091();
function goToPage_46091() {
	window.obj46089_onTap_runningActionsCount = obj46089_onTap_runningActionsCount + 1;
	$("#anchor936")[0].click();
	window.obj46089_onTap_runningActionsCount = window.obj46089_onTap_runningActionsCount - 1;
if (window.obj46089_onTap_runningActionsCount < 0) {
	window.obj46089_onTap_runningActionsCount = 0;
} else if (window.obj46089_onTap_runningActionsCount == 0) {
	obj46089_onTap_actionGroup1();
}
}





















};
obj46089_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46089_onTap_activeActionGroupIndex = -1;
		$("#obj46089").trigger("obj46089_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46089) {
				console.warn("de-queueing event obj46089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46089_onTap_activeActionGroupIndex = 1;
	





















};
obj46086_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46086_onTap_activeActionGroupIndex = -1;
		$("#obj46086").trigger("obj46086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46086) {
				console.warn("de-queueing event obj46086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46086_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46088();
function goToPage_46088() {
	window.obj46086_onTap_runningActionsCount = obj46086_onTap_runningActionsCount + 1;
	$("#anchor937")[0].click();
	window.obj46086_onTap_runningActionsCount = window.obj46086_onTap_runningActionsCount - 1;
if (window.obj46086_onTap_runningActionsCount < 0) {
	window.obj46086_onTap_runningActionsCount = 0;
} else if (window.obj46086_onTap_runningActionsCount == 0) {
	obj46086_onTap_actionGroup1();
}
}





















};
obj46086_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46086_onTap_activeActionGroupIndex = -1;
		$("#obj46086").trigger("obj46086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46086) {
				console.warn("de-queueing event obj46086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46086_onTap_activeActionGroupIndex = 1;
	





















};
obj67534_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67534_onTap_activeActionGroupIndex = -1;
		$("#obj67534").trigger("obj67534_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67534) {
				console.warn("de-queueing event obj67534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67534_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67534 
hide_67537();
function hide_67537() {
	var selector = "#obj67534";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67534_onTap_runningActionsCount = obj67534_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67534_onTap_runningActionsCount = window.obj67534_onTap_runningActionsCount - 1;
if (window.obj67534_onTap_runningActionsCount < 0) {
	window.obj67534_onTap_runningActionsCount = 0;
} else if (window.obj67534_onTap_runningActionsCount == 0) {
	obj67534_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67537(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67534_onTap_runningActionsCount = window.obj67534_onTap_runningActionsCount - 1;
if (window.obj67534_onTap_runningActionsCount < 0) {
	window.obj67534_onTap_runningActionsCount = 0;
} else if (window.obj67534_onTap_runningActionsCount == 0) {
	obj67534_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67540 
stopMovie_67536();
function stopMovie_67536() {
	window.obj67534_onTap_runningActionsCount = obj67534_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67540")[0];
	myVideo.pause();
	window.obj67534_onTap_runningActionsCount = window.obj67534_onTap_runningActionsCount - 1;
if (window.obj67534_onTap_runningActionsCount < 0) {
	window.obj67534_onTap_runningActionsCount = 0;
} else if (window.obj67534_onTap_runningActionsCount == 0) {
	obj67534_onTap_actionGroup1();
}
}
















};
obj67534_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67534_onTap_activeActionGroupIndex = -1;
		$("#obj67534").trigger("obj67534_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67534) {
				console.warn("de-queueing event obj67534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67534_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67526
(function(){
	window.obj67534_onTap_runningActionsCount = obj67534_onTap_runningActionsCount + 1;

	var selector = "#obj67526";
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
					window.obj67534_onTap_runningActionsCount = window.obj67534_onTap_runningActionsCount - 1;
if (window.obj67534_onTap_runningActionsCount < 0) {
	window.obj67534_onTap_runningActionsCount = 0;
} else if (window.obj67534_onTap_runningActionsCount == 0) {
	obj67534_onTap_actionGroup2();
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
				window.obj67534_onTap_runningActionsCount = window.obj67534_onTap_runningActionsCount - 1;
if (window.obj67534_onTap_runningActionsCount < 0) {
	window.obj67534_onTap_runningActionsCount = 0;
} else if (window.obj67534_onTap_runningActionsCount == 0) {
	obj67534_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67534_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67534_onTap_activeActionGroupIndex = -1;
		$("#obj67534").trigger("obj67534_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67534) {
				console.warn("de-queueing event obj67534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67534_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67540 
move_67539();
function move_67539() {
	window.obj67534_onTap_runningActionsCount = obj67534_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67540");
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
			window.obj67534_onTap_runningActionsCount = window.obj67534_onTap_runningActionsCount - 1;
if (window.obj67534_onTap_runningActionsCount < 0) {
	window.obj67534_onTap_runningActionsCount = 0;
} else if (window.obj67534_onTap_runningActionsCount == 0) {
	obj67534_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67534_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67534_onTap_activeActionGroupIndex = -1;
		$("#obj67534").trigger("obj67534_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67534) {
				console.warn("de-queueing event obj67534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67534_onTap_activeActionGroupIndex = 3;
	





















};
obj67526_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67526_onTap_activeActionGroupIndex = -1;
		$("#obj67526").trigger("obj67526_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67526) {
				console.warn("de-queueing event obj67526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67526_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67526 
hide_67529();
function hide_67529() {
	var selector = "#obj67526";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67526_onTap_runningActionsCount = obj67526_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67526_onTap_runningActionsCount = window.obj67526_onTap_runningActionsCount - 1;
if (window.obj67526_onTap_runningActionsCount < 0) {
	window.obj67526_onTap_runningActionsCount = 0;
} else if (window.obj67526_onTap_runningActionsCount == 0) {
	obj67526_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67529(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67526_onTap_runningActionsCount = window.obj67526_onTap_runningActionsCount - 1;
if (window.obj67526_onTap_runningActionsCount < 0) {
	window.obj67526_onTap_runningActionsCount = 0;
} else if (window.obj67526_onTap_runningActionsCount == 0) {
	obj67526_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67540 
playPauseMovie_67528();
function playPauseMovie_67528() {
	window.obj67526_onTap_runningActionsCount = obj67526_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67540")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67526_onTap_runningActionsCount = window.obj67526_onTap_runningActionsCount - 1;
if (window.obj67526_onTap_runningActionsCount < 0) {
	window.obj67526_onTap_runningActionsCount = 0;
} else if (window.obj67526_onTap_runningActionsCount == 0) {
	obj67526_onTap_actionGroup1();
}
}

















};
obj67526_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67526_onTap_activeActionGroupIndex = -1;
		$("#obj67526").trigger("obj67526_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67526) {
				console.warn("de-queueing event obj67526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67526_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67534
(function(){
	window.obj67526_onTap_runningActionsCount = obj67526_onTap_runningActionsCount + 1;

	var selector = "#obj67534";
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
					window.obj67526_onTap_runningActionsCount = window.obj67526_onTap_runningActionsCount - 1;
if (window.obj67526_onTap_runningActionsCount < 0) {
	window.obj67526_onTap_runningActionsCount = 0;
} else if (window.obj67526_onTap_runningActionsCount == 0) {
	obj67526_onTap_actionGroup2();
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
				window.obj67526_onTap_runningActionsCount = window.obj67526_onTap_runningActionsCount - 1;
if (window.obj67526_onTap_runningActionsCount < 0) {
	window.obj67526_onTap_runningActionsCount = 0;
} else if (window.obj67526_onTap_runningActionsCount == 0) {
	obj67526_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67526_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67526_onTap_activeActionGroupIndex = -1;
		$("#obj67526").trigger("obj67526_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67526) {
				console.warn("de-queueing event obj67526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67526_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67540 
move_67531();
function move_67531() {
	window.obj67526_onTap_runningActionsCount = obj67526_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67540");
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
			window.obj67526_onTap_runningActionsCount = window.obj67526_onTap_runningActionsCount - 1;
if (window.obj67526_onTap_runningActionsCount < 0) {
	window.obj67526_onTap_runningActionsCount = 0;
} else if (window.obj67526_onTap_runningActionsCount == 0) {
	obj67526_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67526_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67526_onTap_activeActionGroupIndex = -1;
		$("#obj67526").trigger("obj67526_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67526) {
				console.warn("de-queueing event obj67526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67526_onTap_activeActionGroupIndex = 3;
	





















};
obj88777_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88777_onTap_activeActionGroupIndex = -1;
		$("#obj88777").trigger("obj88777_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88777) {
				console.warn("de-queueing event obj88777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88777_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88782 
stopAudio_88779();
function stopAudio_88779() {
	window.obj88777_onTap_runningActionsCount = obj88777_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88782")[0];
	myAudio.pause();
	window.obj88777_onTap_runningActionsCount = window.obj88777_onTap_runningActionsCount - 1;
if (window.obj88777_onTap_runningActionsCount < 0) {
	window.obj88777_onTap_runningActionsCount = 0;
} else if (window.obj88777_onTap_runningActionsCount == 0) {
	obj88777_onTap_actionGroup1();
}
}








};
obj88777_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88777_onTap_activeActionGroupIndex = -1;
		$("#obj88777").trigger("obj88777_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88777) {
				console.warn("de-queueing event obj88777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88777_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88777 
hide_88780();
function hide_88780() {
	var selector = "#obj88777";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88777_onTap_runningActionsCount = obj88777_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88777_onTap_runningActionsCount = window.obj88777_onTap_runningActionsCount - 1;
if (window.obj88777_onTap_runningActionsCount < 0) {
	window.obj88777_onTap_runningActionsCount = 0;
} else if (window.obj88777_onTap_runningActionsCount == 0) {
	obj88777_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88780(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88777_onTap_runningActionsCount = window.obj88777_onTap_runningActionsCount - 1;
if (window.obj88777_onTap_runningActionsCount < 0) {
	window.obj88777_onTap_runningActionsCount = 0;
} else if (window.obj88777_onTap_runningActionsCount == 0) {
	obj88777_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88777_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88777_onTap_activeActionGroupIndex = -1;
		$("#obj88777").trigger("obj88777_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88777) {
				console.warn("de-queueing event obj88777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88777_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88772
(function(){
	window.obj88777_onTap_runningActionsCount = obj88777_onTap_runningActionsCount + 1;

	var selector = "#obj88772";
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
					window.obj88777_onTap_runningActionsCount = window.obj88777_onTap_runningActionsCount - 1;
if (window.obj88777_onTap_runningActionsCount < 0) {
	window.obj88777_onTap_runningActionsCount = 0;
} else if (window.obj88777_onTap_runningActionsCount == 0) {
	obj88777_onTap_actionGroup3();
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
				window.obj88777_onTap_runningActionsCount = window.obj88777_onTap_runningActionsCount - 1;
if (window.obj88777_onTap_runningActionsCount < 0) {
	window.obj88777_onTap_runningActionsCount = 0;
} else if (window.obj88777_onTap_runningActionsCount == 0) {
	obj88777_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88777_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88777_onTap_activeActionGroupIndex = -1;
		$("#obj88777").trigger("obj88777_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88777) {
				console.warn("de-queueing event obj88777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88777_onTap_activeActionGroupIndex = 3;
	





















};
obj88772_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88772_onTap_activeActionGroupIndex = -1;
		$("#obj88772").trigger("obj88772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88772) {
				console.warn("de-queueing event obj88772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88772_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88772 
hide_88774();
function hide_88774() {
	var selector = "#obj88772";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88772_onTap_runningActionsCount = obj88772_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88772_onTap_runningActionsCount = window.obj88772_onTap_runningActionsCount - 1;
if (window.obj88772_onTap_runningActionsCount < 0) {
	window.obj88772_onTap_runningActionsCount = 0;
} else if (window.obj88772_onTap_runningActionsCount == 0) {
	obj88772_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88774(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88772_onTap_runningActionsCount = window.obj88772_onTap_runningActionsCount - 1;
if (window.obj88772_onTap_runningActionsCount < 0) {
	window.obj88772_onTap_runningActionsCount = 0;
} else if (window.obj88772_onTap_runningActionsCount == 0) {
	obj88772_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88772_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88772_onTap_activeActionGroupIndex = -1;
		$("#obj88772").trigger("obj88772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88772) {
				console.warn("de-queueing event obj88772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88772_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88777
(function(){
	window.obj88772_onTap_runningActionsCount = obj88772_onTap_runningActionsCount + 1;

	var selector = "#obj88777";
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
					window.obj88772_onTap_runningActionsCount = window.obj88772_onTap_runningActionsCount - 1;
if (window.obj88772_onTap_runningActionsCount < 0) {
	window.obj88772_onTap_runningActionsCount = 0;
} else if (window.obj88772_onTap_runningActionsCount == 0) {
	obj88772_onTap_actionGroup2();
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
				window.obj88772_onTap_runningActionsCount = window.obj88772_onTap_runningActionsCount - 1;
if (window.obj88772_onTap_runningActionsCount < 0) {
	window.obj88772_onTap_runningActionsCount = 0;
} else if (window.obj88772_onTap_runningActionsCount == 0) {
	obj88772_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88772_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88772_onTap_activeActionGroupIndex = -1;
		$("#obj88772").trigger("obj88772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88772) {
				console.warn("de-queueing event obj88772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88772_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88782 
playAudio_88776();
function playAudio_88776() {
	window.obj88772_onTap_runningActionsCount = obj88772_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88782")[0];
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
		    window.obj88772_onTap_runningActionsCount = window.obj88772_onTap_runningActionsCount - 1;
if (window.obj88772_onTap_runningActionsCount < 0) {
	window.obj88772_onTap_runningActionsCount = 0;
} else if (window.obj88772_onTap_runningActionsCount == 0) {
	obj88772_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88772_onTap_runningActionsCount = window.obj88772_onTap_runningActionsCount - 1;
if (window.obj88772_onTap_runningActionsCount < 0) {
	window.obj88772_onTap_runningActionsCount = 0;
} else if (window.obj88772_onTap_runningActionsCount == 0) {
	obj88772_onTap_actionGroup3();
}
	}
}









};
obj88772_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88772_onTap_activeActionGroupIndex = -1;
		$("#obj88772").trigger("obj88772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88772) {
				console.warn("de-queueing event obj88772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88772_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj46089: Event Touch Down
 *
 */
$("#obj46089").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46089_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46089_onTap is still running");
	return;
}
var obj46089_onTap_runningActionsCount = 0;
var obj46089_onTap_loopCount = 0;
obj46089_onTap_actionGroup0();
});










/*
 *
 *   obj46086: Event Touch Down
 *
 */
$("#obj46086").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46086_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46086_onTap is still running");
	return;
}
var obj46086_onTap_runningActionsCount = 0;
var obj46086_onTap_loopCount = 0;
obj46086_onTap_actionGroup0();
});


















































/*
 *
 *   obj67534: Event Touch Down
 *
 */
$("#obj67534").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67534_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67534_onTap is still running");
	return;
}
var obj67534_onTap_runningActionsCount = 0;
var obj67534_onTap_loopCount = 0;
obj67534_onTap_actionGroup0();
});










/*
 *
 *   obj67526: Event Touch Down
 *
 */
$("#obj67526").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67526_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67526_onTap is still running");
	return;
}
var obj67526_onTap_runningActionsCount = 0;
var obj67526_onTap_loopCount = 0;
obj67526_onTap_actionGroup0();
});










/*
 *
 *   obj88777: Event Touch Down
 *
 */
$("#obj88777").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88777_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88777_onTap is still running");
	return;
}
var obj88777_onTap_runningActionsCount = 0;
var obj88777_onTap_loopCount = 0;
obj88777_onTap_actionGroup0();
});










/*
 *
 *   obj88772: Event Touch Down
 *
 */
$("#obj88772").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88772_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88772_onTap is still running");
	return;
}
var obj88772_onTap_runningActionsCount = 0;
var obj88772_onTap_loopCount = 0;
obj88772_onTap_actionGroup0();
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
	
$("#obj46105").trigger('SCEventShow');
$("#obj46089").trigger('SCEventShow');
$("#obj46086").trigger('SCEventShow');
$("#obj46084").trigger('SCEventShow');
$("#obj46082").trigger('SCEventShow');
$("#obj46080").trigger('SCEventShow');
$("#obj46108").trigger('SCEventShow');
$("#obj67534").trigger('SCEventShow');
$("#obj67526").trigger('SCEventShow');
$("#obj88777").trigger('SCEventShow');
$("#obj88772").trigger('SCEventShow');
$("#obj88782").trigger('SCEventShow');
$("#obj94945").trigger('SCEventShow');
$("#obj67540").trigger('SCEventShow');
	
});