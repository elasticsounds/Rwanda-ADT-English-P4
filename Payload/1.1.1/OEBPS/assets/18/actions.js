pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 2774;
pubcoder.page.title = pubcoder.page.title || "18";
pubcoder.page.number = pubcoder.page.number || 18;
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
var obj2780_onTap_activeActionGroupIndex = -1;
var obj2780_onTap_runningActionsCount = 0;
var obj2780_onTap_loopCount = 0;
var obj2777_onTap_activeActionGroupIndex = -1;
var obj2777_onTap_runningActionsCount = 0;
var obj2777_onTap_loopCount = 0;
var obj2822_onTap_activeActionGroupIndex = -1;
var obj2822_onTap_runningActionsCount = 0;
var obj2822_onTap_loopCount = 0;
var obj65246_onTap_activeActionGroupIndex = -1;
var obj65246_onTap_runningActionsCount = 0;
var obj65246_onTap_loopCount = 0;
var obj65238_onTap_activeActionGroupIndex = -1;
var obj65238_onTap_runningActionsCount = 0;
var obj65238_onTap_loopCount = 0;
var obj87021_onTap_activeActionGroupIndex = -1;
var obj87021_onTap_runningActionsCount = 0;
var obj87021_onTap_loopCount = 0;
var obj87016_onTap_activeActionGroupIndex = -1;
var obj87016_onTap_runningActionsCount = 0;
var obj87016_onTap_loopCount = 0;
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
		
obj2780_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2780_onTap_activeActionGroupIndex = -1;
		$("#obj2780").trigger("obj2780_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2780) {
				console.warn("de-queueing event obj2780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2780_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2782();
function goToPage_2782() {
	window.obj2780_onTap_runningActionsCount = obj2780_onTap_runningActionsCount + 1;
	$("#anchor115")[0].click();
	window.obj2780_onTap_runningActionsCount = window.obj2780_onTap_runningActionsCount - 1;
if (window.obj2780_onTap_runningActionsCount < 0) {
	window.obj2780_onTap_runningActionsCount = 0;
} else if (window.obj2780_onTap_runningActionsCount == 0) {
	obj2780_onTap_actionGroup1();
}
}





















};
obj2780_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2780_onTap_activeActionGroupIndex = -1;
		$("#obj2780").trigger("obj2780_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2780) {
				console.warn("de-queueing event obj2780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2780_onTap_activeActionGroupIndex = 1;
	





















};
obj2777_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2777_onTap_activeActionGroupIndex = -1;
		$("#obj2777").trigger("obj2777_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2777) {
				console.warn("de-queueing event obj2777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2777_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2779();
function goToPage_2779() {
	window.obj2777_onTap_runningActionsCount = obj2777_onTap_runningActionsCount + 1;
	$("#anchor116")[0].click();
	window.obj2777_onTap_runningActionsCount = window.obj2777_onTap_runningActionsCount - 1;
if (window.obj2777_onTap_runningActionsCount < 0) {
	window.obj2777_onTap_runningActionsCount = 0;
} else if (window.obj2777_onTap_runningActionsCount == 0) {
	obj2777_onTap_actionGroup1();
}
}





















};
obj2777_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2777_onTap_activeActionGroupIndex = -1;
		$("#obj2777").trigger("obj2777_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2777) {
				console.warn("de-queueing event obj2777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2777_onTap_activeActionGroupIndex = 1;
	





















};
obj2822_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2822_onTap_activeActionGroupIndex = -1;
		$("#obj2822").trigger("obj2822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2822) {
				console.warn("de-queueing event obj2822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2822_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2828();
function goToPage_2828() {
	window.obj2822_onTap_runningActionsCount = obj2822_onTap_runningActionsCount + 1;
	$("#anchor117")[0].click();
	window.obj2822_onTap_runningActionsCount = window.obj2822_onTap_runningActionsCount - 1;
if (window.obj2822_onTap_runningActionsCount < 0) {
	window.obj2822_onTap_runningActionsCount = 0;
} else if (window.obj2822_onTap_runningActionsCount == 0) {
	obj2822_onTap_actionGroup1();
}
}





















};
obj2822_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2822_onTap_activeActionGroupIndex = -1;
		$("#obj2822").trigger("obj2822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2822) {
				console.warn("de-queueing event obj2822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2822_onTap_activeActionGroupIndex = 1;
	





















};
obj65246_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65246_onTap_activeActionGroupIndex = -1;
		$("#obj65246").trigger("obj65246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65246) {
				console.warn("de-queueing event obj65246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65246_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65246 
hide_65249();
function hide_65249() {
	var selector = "#obj65246";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65246_onTap_runningActionsCount = obj65246_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65246_onTap_runningActionsCount = window.obj65246_onTap_runningActionsCount - 1;
if (window.obj65246_onTap_runningActionsCount < 0) {
	window.obj65246_onTap_runningActionsCount = 0;
} else if (window.obj65246_onTap_runningActionsCount == 0) {
	obj65246_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65249(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65246_onTap_runningActionsCount = window.obj65246_onTap_runningActionsCount - 1;
if (window.obj65246_onTap_runningActionsCount < 0) {
	window.obj65246_onTap_runningActionsCount = 0;
} else if (window.obj65246_onTap_runningActionsCount == 0) {
	obj65246_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65252 
stopMovie_65248();
function stopMovie_65248() {
	window.obj65246_onTap_runningActionsCount = obj65246_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65252")[0];
	myVideo.pause();
	window.obj65246_onTap_runningActionsCount = window.obj65246_onTap_runningActionsCount - 1;
if (window.obj65246_onTap_runningActionsCount < 0) {
	window.obj65246_onTap_runningActionsCount = 0;
} else if (window.obj65246_onTap_runningActionsCount == 0) {
	obj65246_onTap_actionGroup1();
}
}
















};
obj65246_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65246_onTap_activeActionGroupIndex = -1;
		$("#obj65246").trigger("obj65246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65246) {
				console.warn("de-queueing event obj65246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65246_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65238
(function(){
	window.obj65246_onTap_runningActionsCount = obj65246_onTap_runningActionsCount + 1;

	var selector = "#obj65238";
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
					window.obj65246_onTap_runningActionsCount = window.obj65246_onTap_runningActionsCount - 1;
if (window.obj65246_onTap_runningActionsCount < 0) {
	window.obj65246_onTap_runningActionsCount = 0;
} else if (window.obj65246_onTap_runningActionsCount == 0) {
	obj65246_onTap_actionGroup2();
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
				window.obj65246_onTap_runningActionsCount = window.obj65246_onTap_runningActionsCount - 1;
if (window.obj65246_onTap_runningActionsCount < 0) {
	window.obj65246_onTap_runningActionsCount = 0;
} else if (window.obj65246_onTap_runningActionsCount == 0) {
	obj65246_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65246_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65246_onTap_activeActionGroupIndex = -1;
		$("#obj65246").trigger("obj65246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65246) {
				console.warn("de-queueing event obj65246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65246_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65252 
move_65251();
function move_65251() {
	window.obj65246_onTap_runningActionsCount = obj65246_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65252");
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
			window.obj65246_onTap_runningActionsCount = window.obj65246_onTap_runningActionsCount - 1;
if (window.obj65246_onTap_runningActionsCount < 0) {
	window.obj65246_onTap_runningActionsCount = 0;
} else if (window.obj65246_onTap_runningActionsCount == 0) {
	obj65246_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65246_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65246_onTap_activeActionGroupIndex = -1;
		$("#obj65246").trigger("obj65246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65246) {
				console.warn("de-queueing event obj65246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65246_onTap_activeActionGroupIndex = 3;
	





















};
obj65238_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65238_onTap_activeActionGroupIndex = -1;
		$("#obj65238").trigger("obj65238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65238) {
				console.warn("de-queueing event obj65238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65238_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65238 
hide_65241();
function hide_65241() {
	var selector = "#obj65238";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65238_onTap_runningActionsCount = obj65238_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65238_onTap_runningActionsCount = window.obj65238_onTap_runningActionsCount - 1;
if (window.obj65238_onTap_runningActionsCount < 0) {
	window.obj65238_onTap_runningActionsCount = 0;
} else if (window.obj65238_onTap_runningActionsCount == 0) {
	obj65238_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65241(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65238_onTap_runningActionsCount = window.obj65238_onTap_runningActionsCount - 1;
if (window.obj65238_onTap_runningActionsCount < 0) {
	window.obj65238_onTap_runningActionsCount = 0;
} else if (window.obj65238_onTap_runningActionsCount == 0) {
	obj65238_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65252 
playPauseMovie_65240();
function playPauseMovie_65240() {
	window.obj65238_onTap_runningActionsCount = obj65238_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65252")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65238_onTap_runningActionsCount = window.obj65238_onTap_runningActionsCount - 1;
if (window.obj65238_onTap_runningActionsCount < 0) {
	window.obj65238_onTap_runningActionsCount = 0;
} else if (window.obj65238_onTap_runningActionsCount == 0) {
	obj65238_onTap_actionGroup1();
}
}

















};
obj65238_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65238_onTap_activeActionGroupIndex = -1;
		$("#obj65238").trigger("obj65238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65238) {
				console.warn("de-queueing event obj65238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65238_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65246
(function(){
	window.obj65238_onTap_runningActionsCount = obj65238_onTap_runningActionsCount + 1;

	var selector = "#obj65246";
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
					window.obj65238_onTap_runningActionsCount = window.obj65238_onTap_runningActionsCount - 1;
if (window.obj65238_onTap_runningActionsCount < 0) {
	window.obj65238_onTap_runningActionsCount = 0;
} else if (window.obj65238_onTap_runningActionsCount == 0) {
	obj65238_onTap_actionGroup2();
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
				window.obj65238_onTap_runningActionsCount = window.obj65238_onTap_runningActionsCount - 1;
if (window.obj65238_onTap_runningActionsCount < 0) {
	window.obj65238_onTap_runningActionsCount = 0;
} else if (window.obj65238_onTap_runningActionsCount == 0) {
	obj65238_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65238_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65238_onTap_activeActionGroupIndex = -1;
		$("#obj65238").trigger("obj65238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65238) {
				console.warn("de-queueing event obj65238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65238_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65252 
move_65243();
function move_65243() {
	window.obj65238_onTap_runningActionsCount = obj65238_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65252");
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
			window.obj65238_onTap_runningActionsCount = window.obj65238_onTap_runningActionsCount - 1;
if (window.obj65238_onTap_runningActionsCount < 0) {
	window.obj65238_onTap_runningActionsCount = 0;
} else if (window.obj65238_onTap_runningActionsCount == 0) {
	obj65238_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65238_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65238_onTap_activeActionGroupIndex = -1;
		$("#obj65238").trigger("obj65238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65238) {
				console.warn("de-queueing event obj65238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65238_onTap_activeActionGroupIndex = 3;
	





















};
obj87021_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87021_onTap_activeActionGroupIndex = -1;
		$("#obj87021").trigger("obj87021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87021) {
				console.warn("de-queueing event obj87021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87021_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87026 
stopAudio_87023();
function stopAudio_87023() {
	window.obj87021_onTap_runningActionsCount = obj87021_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87026")[0];
	myAudio.pause();
	window.obj87021_onTap_runningActionsCount = window.obj87021_onTap_runningActionsCount - 1;
if (window.obj87021_onTap_runningActionsCount < 0) {
	window.obj87021_onTap_runningActionsCount = 0;
} else if (window.obj87021_onTap_runningActionsCount == 0) {
	obj87021_onTap_actionGroup1();
}
}








};
obj87021_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87021_onTap_activeActionGroupIndex = -1;
		$("#obj87021").trigger("obj87021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87021) {
				console.warn("de-queueing event obj87021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87021_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87021 
hide_87024();
function hide_87024() {
	var selector = "#obj87021";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87021_onTap_runningActionsCount = obj87021_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87021_onTap_runningActionsCount = window.obj87021_onTap_runningActionsCount - 1;
if (window.obj87021_onTap_runningActionsCount < 0) {
	window.obj87021_onTap_runningActionsCount = 0;
} else if (window.obj87021_onTap_runningActionsCount == 0) {
	obj87021_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87024(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87021_onTap_runningActionsCount = window.obj87021_onTap_runningActionsCount - 1;
if (window.obj87021_onTap_runningActionsCount < 0) {
	window.obj87021_onTap_runningActionsCount = 0;
} else if (window.obj87021_onTap_runningActionsCount == 0) {
	obj87021_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87021_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87021_onTap_activeActionGroupIndex = -1;
		$("#obj87021").trigger("obj87021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87021) {
				console.warn("de-queueing event obj87021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87021_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87016
(function(){
	window.obj87021_onTap_runningActionsCount = obj87021_onTap_runningActionsCount + 1;

	var selector = "#obj87016";
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
					window.obj87021_onTap_runningActionsCount = window.obj87021_onTap_runningActionsCount - 1;
if (window.obj87021_onTap_runningActionsCount < 0) {
	window.obj87021_onTap_runningActionsCount = 0;
} else if (window.obj87021_onTap_runningActionsCount == 0) {
	obj87021_onTap_actionGroup3();
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
				window.obj87021_onTap_runningActionsCount = window.obj87021_onTap_runningActionsCount - 1;
if (window.obj87021_onTap_runningActionsCount < 0) {
	window.obj87021_onTap_runningActionsCount = 0;
} else if (window.obj87021_onTap_runningActionsCount == 0) {
	obj87021_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87021_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87021_onTap_activeActionGroupIndex = -1;
		$("#obj87021").trigger("obj87021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87021) {
				console.warn("de-queueing event obj87021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87021_onTap_activeActionGroupIndex = 3;
	





















};
obj87016_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87016_onTap_activeActionGroupIndex = -1;
		$("#obj87016").trigger("obj87016_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87016) {
				console.warn("de-queueing event obj87016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87016_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87016 
hide_87018();
function hide_87018() {
	var selector = "#obj87016";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87016_onTap_runningActionsCount = obj87016_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87016_onTap_runningActionsCount = window.obj87016_onTap_runningActionsCount - 1;
if (window.obj87016_onTap_runningActionsCount < 0) {
	window.obj87016_onTap_runningActionsCount = 0;
} else if (window.obj87016_onTap_runningActionsCount == 0) {
	obj87016_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87018(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87016_onTap_runningActionsCount = window.obj87016_onTap_runningActionsCount - 1;
if (window.obj87016_onTap_runningActionsCount < 0) {
	window.obj87016_onTap_runningActionsCount = 0;
} else if (window.obj87016_onTap_runningActionsCount == 0) {
	obj87016_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87016_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87016_onTap_activeActionGroupIndex = -1;
		$("#obj87016").trigger("obj87016_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87016) {
				console.warn("de-queueing event obj87016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87016_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87021
(function(){
	window.obj87016_onTap_runningActionsCount = obj87016_onTap_runningActionsCount + 1;

	var selector = "#obj87021";
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
					window.obj87016_onTap_runningActionsCount = window.obj87016_onTap_runningActionsCount - 1;
if (window.obj87016_onTap_runningActionsCount < 0) {
	window.obj87016_onTap_runningActionsCount = 0;
} else if (window.obj87016_onTap_runningActionsCount == 0) {
	obj87016_onTap_actionGroup2();
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
				window.obj87016_onTap_runningActionsCount = window.obj87016_onTap_runningActionsCount - 1;
if (window.obj87016_onTap_runningActionsCount < 0) {
	window.obj87016_onTap_runningActionsCount = 0;
} else if (window.obj87016_onTap_runningActionsCount == 0) {
	obj87016_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87016_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87016_onTap_activeActionGroupIndex = -1;
		$("#obj87016").trigger("obj87016_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87016) {
				console.warn("de-queueing event obj87016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87016_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87026 
playAudio_87020();
function playAudio_87020() {
	window.obj87016_onTap_runningActionsCount = obj87016_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87026")[0];
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
		    window.obj87016_onTap_runningActionsCount = window.obj87016_onTap_runningActionsCount - 1;
if (window.obj87016_onTap_runningActionsCount < 0) {
	window.obj87016_onTap_runningActionsCount = 0;
} else if (window.obj87016_onTap_runningActionsCount == 0) {
	obj87016_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87016_onTap_runningActionsCount = window.obj87016_onTap_runningActionsCount - 1;
if (window.obj87016_onTap_runningActionsCount < 0) {
	window.obj87016_onTap_runningActionsCount = 0;
} else if (window.obj87016_onTap_runningActionsCount == 0) {
	obj87016_onTap_actionGroup3();
}
	}
}









};
obj87016_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87016_onTap_activeActionGroupIndex = -1;
		$("#obj87016").trigger("obj87016_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87016) {
				console.warn("de-queueing event obj87016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87016_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj2780: Event Touch Down
 *
 */
$("#obj2780").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2780_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2780_onTap is still running");
	return;
}
var obj2780_onTap_runningActionsCount = 0;
var obj2780_onTap_loopCount = 0;
obj2780_onTap_actionGroup0();
});










/*
 *
 *   obj2777: Event Touch Down
 *
 */
$("#obj2777").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2777_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2777_onTap is still running");
	return;
}
var obj2777_onTap_runningActionsCount = 0;
var obj2777_onTap_loopCount = 0;
obj2777_onTap_actionGroup0();
});


































































































































/*
 *
 *   obj2822: Event Touch Down
 *
 */
$("#obj2822").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2822_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2822_onTap is still running");
	return;
}
var obj2822_onTap_runningActionsCount = 0;
var obj2822_onTap_loopCount = 0;
obj2822_onTap_actionGroup0();
});




















/*
 *
 *   obj65246: Event Touch Down
 *
 */
$("#obj65246").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65246_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65246_onTap is still running");
	return;
}
var obj65246_onTap_runningActionsCount = 0;
var obj65246_onTap_loopCount = 0;
obj65246_onTap_actionGroup0();
});










/*
 *
 *   obj65238: Event Touch Down
 *
 */
$("#obj65238").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65238_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65238_onTap is still running");
	return;
}
var obj65238_onTap_runningActionsCount = 0;
var obj65238_onTap_loopCount = 0;
obj65238_onTap_actionGroup0();
});










/*
 *
 *   obj87021: Event Touch Down
 *
 */
$("#obj87021").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87021_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87021_onTap is still running");
	return;
}
var obj87021_onTap_runningActionsCount = 0;
var obj87021_onTap_loopCount = 0;
obj87021_onTap_actionGroup0();
});










/*
 *
 *   obj87016: Event Touch Down
 *
 */
$("#obj87016").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87016_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87016_onTap is still running");
	return;
}
var obj87016_onTap_runningActionsCount = 0;
var obj87016_onTap_loopCount = 0;
obj87016_onTap_actionGroup0();
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
	
$("#obj2775").trigger('SCEventShow');
$("#obj2780").trigger('SCEventShow');
$("#obj2777").trigger('SCEventShow');
$("#obj2796").trigger('SCEventShow');
$("#obj2812").trigger('SCEventShow');
$("#obj2800").trigger('SCEventShow');
$("#obj2802").trigger('SCEventShow');
$("#obj2804").trigger('SCEventShow');
$("#obj2806").trigger('SCEventShow');
$("#obj2808").trigger('SCEventShow');
$("#obj2810").trigger('SCEventShow');
$("#obj2814").trigger('SCEventShow');
$("#obj2816").trigger('SCEventShow');
$("#obj2820").trigger('SCEventShow');
$("#obj2818").trigger('SCEventShow');
$("#obj2822").trigger('SCEventShow');
$("#obj2824").trigger('SCEventShow');
$("#obj65246").trigger('SCEventShow');
$("#obj65238").trigger('SCEventShow');
$("#obj87021").trigger('SCEventShow');
$("#obj87016").trigger('SCEventShow');
$("#obj87026").trigger('SCEventShow');
$("#obj94665").trigger('SCEventShow');
$("#obj65252").trigger('SCEventShow');
	
});