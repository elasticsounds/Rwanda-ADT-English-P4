pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 1107;
pubcoder.page.title = pubcoder.page.title || "10";
pubcoder.page.number = pubcoder.page.number || 10;
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
var obj1127_onTap_activeActionGroupIndex = -1;
var obj1127_onTap_runningActionsCount = 0;
var obj1127_onTap_loopCount = 0;
var obj1130_onTap_activeActionGroupIndex = -1;
var obj1130_onTap_runningActionsCount = 0;
var obj1130_onTap_loopCount = 0;
var obj65118_onTap_activeActionGroupIndex = -1;
var obj65118_onTap_runningActionsCount = 0;
var obj65118_onTap_loopCount = 0;
var obj65110_onTap_activeActionGroupIndex = -1;
var obj65110_onTap_runningActionsCount = 0;
var obj65110_onTap_loopCount = 0;
var obj86904_onTap_activeActionGroupIndex = -1;
var obj86904_onTap_runningActionsCount = 0;
var obj86904_onTap_loopCount = 0;
var obj86899_onTap_activeActionGroupIndex = -1;
var obj86899_onTap_runningActionsCount = 0;
var obj86899_onTap_loopCount = 0;
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
		
obj1127_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1127_onTap_activeActionGroupIndex = -1;
		$("#obj1127").trigger("obj1127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1127) {
				console.warn("de-queueing event obj1127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1127_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1129();
function goToPage_1129() {
	window.obj1127_onTap_runningActionsCount = obj1127_onTap_runningActionsCount + 1;
	$("#anchor68")[0].click();
	window.obj1127_onTap_runningActionsCount = window.obj1127_onTap_runningActionsCount - 1;
if (window.obj1127_onTap_runningActionsCount < 0) {
	window.obj1127_onTap_runningActionsCount = 0;
} else if (window.obj1127_onTap_runningActionsCount == 0) {
	obj1127_onTap_actionGroup1();
}
}





















};
obj1127_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1127_onTap_activeActionGroupIndex = -1;
		$("#obj1127").trigger("obj1127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1127) {
				console.warn("de-queueing event obj1127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1127_onTap_activeActionGroupIndex = 1;
	





















};
obj1130_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1130_onTap_activeActionGroupIndex = -1;
		$("#obj1130").trigger("obj1130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1130) {
				console.warn("de-queueing event obj1130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1130_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1132();
function goToPage_1132() {
	window.obj1130_onTap_runningActionsCount = obj1130_onTap_runningActionsCount + 1;
	$("#anchor69")[0].click();
	window.obj1130_onTap_runningActionsCount = window.obj1130_onTap_runningActionsCount - 1;
if (window.obj1130_onTap_runningActionsCount < 0) {
	window.obj1130_onTap_runningActionsCount = 0;
} else if (window.obj1130_onTap_runningActionsCount == 0) {
	obj1130_onTap_actionGroup1();
}
}





















};
obj1130_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1130_onTap_activeActionGroupIndex = -1;
		$("#obj1130").trigger("obj1130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1130) {
				console.warn("de-queueing event obj1130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1130_onTap_activeActionGroupIndex = 1;
	





















};
obj65118_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65118_onTap_activeActionGroupIndex = -1;
		$("#obj65118").trigger("obj65118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65118) {
				console.warn("de-queueing event obj65118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65118_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65118 
hide_65121();
function hide_65121() {
	var selector = "#obj65118";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65118_onTap_runningActionsCount = obj65118_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65118_onTap_runningActionsCount = window.obj65118_onTap_runningActionsCount - 1;
if (window.obj65118_onTap_runningActionsCount < 0) {
	window.obj65118_onTap_runningActionsCount = 0;
} else if (window.obj65118_onTap_runningActionsCount == 0) {
	obj65118_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65121(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65118_onTap_runningActionsCount = window.obj65118_onTap_runningActionsCount - 1;
if (window.obj65118_onTap_runningActionsCount < 0) {
	window.obj65118_onTap_runningActionsCount = 0;
} else if (window.obj65118_onTap_runningActionsCount == 0) {
	obj65118_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65124 
stopMovie_65120();
function stopMovie_65120() {
	window.obj65118_onTap_runningActionsCount = obj65118_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65124")[0];
	myVideo.pause();
	window.obj65118_onTap_runningActionsCount = window.obj65118_onTap_runningActionsCount - 1;
if (window.obj65118_onTap_runningActionsCount < 0) {
	window.obj65118_onTap_runningActionsCount = 0;
} else if (window.obj65118_onTap_runningActionsCount == 0) {
	obj65118_onTap_actionGroup1();
}
}
















};
obj65118_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65118_onTap_activeActionGroupIndex = -1;
		$("#obj65118").trigger("obj65118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65118) {
				console.warn("de-queueing event obj65118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65118_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65110
(function(){
	window.obj65118_onTap_runningActionsCount = obj65118_onTap_runningActionsCount + 1;

	var selector = "#obj65110";
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
					window.obj65118_onTap_runningActionsCount = window.obj65118_onTap_runningActionsCount - 1;
if (window.obj65118_onTap_runningActionsCount < 0) {
	window.obj65118_onTap_runningActionsCount = 0;
} else if (window.obj65118_onTap_runningActionsCount == 0) {
	obj65118_onTap_actionGroup2();
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
				window.obj65118_onTap_runningActionsCount = window.obj65118_onTap_runningActionsCount - 1;
if (window.obj65118_onTap_runningActionsCount < 0) {
	window.obj65118_onTap_runningActionsCount = 0;
} else if (window.obj65118_onTap_runningActionsCount == 0) {
	obj65118_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65118_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65118_onTap_activeActionGroupIndex = -1;
		$("#obj65118").trigger("obj65118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65118) {
				console.warn("de-queueing event obj65118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65118_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65124 
move_65123();
function move_65123() {
	window.obj65118_onTap_runningActionsCount = obj65118_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65124");
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
			window.obj65118_onTap_runningActionsCount = window.obj65118_onTap_runningActionsCount - 1;
if (window.obj65118_onTap_runningActionsCount < 0) {
	window.obj65118_onTap_runningActionsCount = 0;
} else if (window.obj65118_onTap_runningActionsCount == 0) {
	obj65118_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65118_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65118_onTap_activeActionGroupIndex = -1;
		$("#obj65118").trigger("obj65118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65118) {
				console.warn("de-queueing event obj65118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65118_onTap_activeActionGroupIndex = 3;
	





















};
obj65110_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65110_onTap_activeActionGroupIndex = -1;
		$("#obj65110").trigger("obj65110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65110) {
				console.warn("de-queueing event obj65110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65110_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65110 
hide_65113();
function hide_65113() {
	var selector = "#obj65110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65110_onTap_runningActionsCount = obj65110_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65110_onTap_runningActionsCount = window.obj65110_onTap_runningActionsCount - 1;
if (window.obj65110_onTap_runningActionsCount < 0) {
	window.obj65110_onTap_runningActionsCount = 0;
} else if (window.obj65110_onTap_runningActionsCount == 0) {
	obj65110_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65113(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65110_onTap_runningActionsCount = window.obj65110_onTap_runningActionsCount - 1;
if (window.obj65110_onTap_runningActionsCount < 0) {
	window.obj65110_onTap_runningActionsCount = 0;
} else if (window.obj65110_onTap_runningActionsCount == 0) {
	obj65110_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65124 
playPauseMovie_65112();
function playPauseMovie_65112() {
	window.obj65110_onTap_runningActionsCount = obj65110_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65124")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65110_onTap_runningActionsCount = window.obj65110_onTap_runningActionsCount - 1;
if (window.obj65110_onTap_runningActionsCount < 0) {
	window.obj65110_onTap_runningActionsCount = 0;
} else if (window.obj65110_onTap_runningActionsCount == 0) {
	obj65110_onTap_actionGroup1();
}
}

















};
obj65110_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65110_onTap_activeActionGroupIndex = -1;
		$("#obj65110").trigger("obj65110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65110) {
				console.warn("de-queueing event obj65110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65110_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65118
(function(){
	window.obj65110_onTap_runningActionsCount = obj65110_onTap_runningActionsCount + 1;

	var selector = "#obj65118";
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
					window.obj65110_onTap_runningActionsCount = window.obj65110_onTap_runningActionsCount - 1;
if (window.obj65110_onTap_runningActionsCount < 0) {
	window.obj65110_onTap_runningActionsCount = 0;
} else if (window.obj65110_onTap_runningActionsCount == 0) {
	obj65110_onTap_actionGroup2();
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
				window.obj65110_onTap_runningActionsCount = window.obj65110_onTap_runningActionsCount - 1;
if (window.obj65110_onTap_runningActionsCount < 0) {
	window.obj65110_onTap_runningActionsCount = 0;
} else if (window.obj65110_onTap_runningActionsCount == 0) {
	obj65110_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65110_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65110_onTap_activeActionGroupIndex = -1;
		$("#obj65110").trigger("obj65110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65110) {
				console.warn("de-queueing event obj65110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65110_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65124 
move_65115();
function move_65115() {
	window.obj65110_onTap_runningActionsCount = obj65110_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65124");
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
			window.obj65110_onTap_runningActionsCount = window.obj65110_onTap_runningActionsCount - 1;
if (window.obj65110_onTap_runningActionsCount < 0) {
	window.obj65110_onTap_runningActionsCount = 0;
} else if (window.obj65110_onTap_runningActionsCount == 0) {
	obj65110_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65110_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65110_onTap_activeActionGroupIndex = -1;
		$("#obj65110").trigger("obj65110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65110) {
				console.warn("de-queueing event obj65110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65110_onTap_activeActionGroupIndex = 3;
	





















};
obj86904_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86904_onTap_activeActionGroupIndex = -1;
		$("#obj86904").trigger("obj86904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86904) {
				console.warn("de-queueing event obj86904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86904_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86909 
stopAudio_86906();
function stopAudio_86906() {
	window.obj86904_onTap_runningActionsCount = obj86904_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86909")[0];
	myAudio.pause();
	window.obj86904_onTap_runningActionsCount = window.obj86904_onTap_runningActionsCount - 1;
if (window.obj86904_onTap_runningActionsCount < 0) {
	window.obj86904_onTap_runningActionsCount = 0;
} else if (window.obj86904_onTap_runningActionsCount == 0) {
	obj86904_onTap_actionGroup1();
}
}








};
obj86904_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86904_onTap_activeActionGroupIndex = -1;
		$("#obj86904").trigger("obj86904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86904) {
				console.warn("de-queueing event obj86904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86904_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86904 
hide_86907();
function hide_86907() {
	var selector = "#obj86904";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86904_onTap_runningActionsCount = obj86904_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86904_onTap_runningActionsCount = window.obj86904_onTap_runningActionsCount - 1;
if (window.obj86904_onTap_runningActionsCount < 0) {
	window.obj86904_onTap_runningActionsCount = 0;
} else if (window.obj86904_onTap_runningActionsCount == 0) {
	obj86904_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86907(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86904_onTap_runningActionsCount = window.obj86904_onTap_runningActionsCount - 1;
if (window.obj86904_onTap_runningActionsCount < 0) {
	window.obj86904_onTap_runningActionsCount = 0;
} else if (window.obj86904_onTap_runningActionsCount == 0) {
	obj86904_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86904_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86904_onTap_activeActionGroupIndex = -1;
		$("#obj86904").trigger("obj86904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86904) {
				console.warn("de-queueing event obj86904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86904_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86899
(function(){
	window.obj86904_onTap_runningActionsCount = obj86904_onTap_runningActionsCount + 1;

	var selector = "#obj86899";
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
					window.obj86904_onTap_runningActionsCount = window.obj86904_onTap_runningActionsCount - 1;
if (window.obj86904_onTap_runningActionsCount < 0) {
	window.obj86904_onTap_runningActionsCount = 0;
} else if (window.obj86904_onTap_runningActionsCount == 0) {
	obj86904_onTap_actionGroup3();
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
				window.obj86904_onTap_runningActionsCount = window.obj86904_onTap_runningActionsCount - 1;
if (window.obj86904_onTap_runningActionsCount < 0) {
	window.obj86904_onTap_runningActionsCount = 0;
} else if (window.obj86904_onTap_runningActionsCount == 0) {
	obj86904_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86904_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86904_onTap_activeActionGroupIndex = -1;
		$("#obj86904").trigger("obj86904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86904) {
				console.warn("de-queueing event obj86904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86904_onTap_activeActionGroupIndex = 3;
	





















};
obj86899_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86899_onTap_activeActionGroupIndex = -1;
		$("#obj86899").trigger("obj86899_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86899) {
				console.warn("de-queueing event obj86899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86899_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86899 
hide_86901();
function hide_86901() {
	var selector = "#obj86899";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86899_onTap_runningActionsCount = obj86899_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86899_onTap_runningActionsCount = window.obj86899_onTap_runningActionsCount - 1;
if (window.obj86899_onTap_runningActionsCount < 0) {
	window.obj86899_onTap_runningActionsCount = 0;
} else if (window.obj86899_onTap_runningActionsCount == 0) {
	obj86899_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86901(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86899_onTap_runningActionsCount = window.obj86899_onTap_runningActionsCount - 1;
if (window.obj86899_onTap_runningActionsCount < 0) {
	window.obj86899_onTap_runningActionsCount = 0;
} else if (window.obj86899_onTap_runningActionsCount == 0) {
	obj86899_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86899_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86899_onTap_activeActionGroupIndex = -1;
		$("#obj86899").trigger("obj86899_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86899) {
				console.warn("de-queueing event obj86899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86899_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86904
(function(){
	window.obj86899_onTap_runningActionsCount = obj86899_onTap_runningActionsCount + 1;

	var selector = "#obj86904";
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
					window.obj86899_onTap_runningActionsCount = window.obj86899_onTap_runningActionsCount - 1;
if (window.obj86899_onTap_runningActionsCount < 0) {
	window.obj86899_onTap_runningActionsCount = 0;
} else if (window.obj86899_onTap_runningActionsCount == 0) {
	obj86899_onTap_actionGroup2();
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
				window.obj86899_onTap_runningActionsCount = window.obj86899_onTap_runningActionsCount - 1;
if (window.obj86899_onTap_runningActionsCount < 0) {
	window.obj86899_onTap_runningActionsCount = 0;
} else if (window.obj86899_onTap_runningActionsCount == 0) {
	obj86899_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86899_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86899_onTap_activeActionGroupIndex = -1;
		$("#obj86899").trigger("obj86899_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86899) {
				console.warn("de-queueing event obj86899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86899_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86909 
playAudio_86903();
function playAudio_86903() {
	window.obj86899_onTap_runningActionsCount = obj86899_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86909")[0];
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
		    window.obj86899_onTap_runningActionsCount = window.obj86899_onTap_runningActionsCount - 1;
if (window.obj86899_onTap_runningActionsCount < 0) {
	window.obj86899_onTap_runningActionsCount = 0;
} else if (window.obj86899_onTap_runningActionsCount == 0) {
	obj86899_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86899_onTap_runningActionsCount = window.obj86899_onTap_runningActionsCount - 1;
if (window.obj86899_onTap_runningActionsCount < 0) {
	window.obj86899_onTap_runningActionsCount = 0;
} else if (window.obj86899_onTap_runningActionsCount == 0) {
	obj86899_onTap_actionGroup3();
}
	}
}









};
obj86899_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86899_onTap_activeActionGroupIndex = -1;
		$("#obj86899").trigger("obj86899_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86899) {
				console.warn("de-queueing event obj86899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86899_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj1127: Event Touch Down
 *
 */
$("#obj1127").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1127_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1127_onTap is still running");
	return;
}
var obj1127_onTap_runningActionsCount = 0;
var obj1127_onTap_loopCount = 0;
obj1127_onTap_actionGroup0();
});










/*
 *
 *   obj1130: Event Touch Down
 *
 */
$("#obj1130").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1130_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1130_onTap is still running");
	return;
}
var obj1130_onTap_runningActionsCount = 0;
var obj1130_onTap_loopCount = 0;
obj1130_onTap_actionGroup0();
});




























































/*
 *
 *   obj65118: Event Touch Down
 *
 */
$("#obj65118").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65118_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65118_onTap is still running");
	return;
}
var obj65118_onTap_runningActionsCount = 0;
var obj65118_onTap_loopCount = 0;
obj65118_onTap_actionGroup0();
});










/*
 *
 *   obj65110: Event Touch Down
 *
 */
$("#obj65110").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65110_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65110_onTap is still running");
	return;
}
var obj65110_onTap_runningActionsCount = 0;
var obj65110_onTap_loopCount = 0;
obj65110_onTap_actionGroup0();
});










/*
 *
 *   obj86904: Event Touch Down
 *
 */
$("#obj86904").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86904_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86904_onTap is still running");
	return;
}
var obj86904_onTap_runningActionsCount = 0;
var obj86904_onTap_loopCount = 0;
obj86904_onTap_actionGroup0();
});










/*
 *
 *   obj86899: Event Touch Down
 *
 */
$("#obj86899").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86899_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86899_onTap is still running");
	return;
}
var obj86899_onTap_runningActionsCount = 0;
var obj86899_onTap_loopCount = 0;
obj86899_onTap_actionGroup0();
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
	
$("#obj1108").trigger('SCEventShow');
$("#obj1127").trigger('SCEventShow');
$("#obj1130").trigger('SCEventShow');
$("#obj1135").trigger('SCEventShow');
$("#obj1141").trigger('SCEventShow');
$("#obj1133").trigger('SCEventShow');
$("#obj1137").trigger('SCEventShow');
$("#obj1139").trigger('SCEventShow');
$("#obj65118").trigger('SCEventShow');
$("#obj65110").trigger('SCEventShow');
$("#obj86904").trigger('SCEventShow');
$("#obj86899").trigger('SCEventShow');
$("#obj86909").trigger('SCEventShow');
$("#obj94649").trigger('SCEventShow');
$("#obj65124").trigger('SCEventShow');
	
});