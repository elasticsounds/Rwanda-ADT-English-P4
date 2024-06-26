pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 42018;
pubcoder.page.title = pubcoder.page.title || "144";
pubcoder.page.number = pubcoder.page.number || 144;
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
var obj42024_onTap_activeActionGroupIndex = -1;
var obj42024_onTap_runningActionsCount = 0;
var obj42024_onTap_loopCount = 0;
var obj42021_onTap_activeActionGroupIndex = -1;
var obj42021_onTap_runningActionsCount = 0;
var obj42021_onTap_loopCount = 0;
var obj67310_onTap_activeActionGroupIndex = -1;
var obj67310_onTap_runningActionsCount = 0;
var obj67310_onTap_loopCount = 0;
var obj67302_onTap_activeActionGroupIndex = -1;
var obj67302_onTap_runningActionsCount = 0;
var obj67302_onTap_loopCount = 0;
var obj88597_onTap_activeActionGroupIndex = -1;
var obj88597_onTap_runningActionsCount = 0;
var obj88597_onTap_loopCount = 0;
var obj88592_onTap_activeActionGroupIndex = -1;
var obj88592_onTap_runningActionsCount = 0;
var obj88592_onTap_loopCount = 0;
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
		
obj42024_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42024_onTap_activeActionGroupIndex = -1;
		$("#obj42024").trigger("obj42024_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42024) {
				console.warn("de-queueing event obj42024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42024_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_42026();
function goToPage_42026() {
	window.obj42024_onTap_runningActionsCount = obj42024_onTap_runningActionsCount + 1;
	$("#anchor853")[0].click();
	window.obj42024_onTap_runningActionsCount = window.obj42024_onTap_runningActionsCount - 1;
if (window.obj42024_onTap_runningActionsCount < 0) {
	window.obj42024_onTap_runningActionsCount = 0;
} else if (window.obj42024_onTap_runningActionsCount == 0) {
	obj42024_onTap_actionGroup1();
}
}





















};
obj42024_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42024_onTap_activeActionGroupIndex = -1;
		$("#obj42024").trigger("obj42024_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42024) {
				console.warn("de-queueing event obj42024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42024_onTap_activeActionGroupIndex = 1;
	





















};
obj42021_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42021_onTap_activeActionGroupIndex = -1;
		$("#obj42021").trigger("obj42021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42021) {
				console.warn("de-queueing event obj42021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42021_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_42023();
function goToPage_42023() {
	window.obj42021_onTap_runningActionsCount = obj42021_onTap_runningActionsCount + 1;
	$("#anchor854")[0].click();
	window.obj42021_onTap_runningActionsCount = window.obj42021_onTap_runningActionsCount - 1;
if (window.obj42021_onTap_runningActionsCount < 0) {
	window.obj42021_onTap_runningActionsCount = 0;
} else if (window.obj42021_onTap_runningActionsCount == 0) {
	obj42021_onTap_actionGroup1();
}
}





















};
obj42021_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42021_onTap_activeActionGroupIndex = -1;
		$("#obj42021").trigger("obj42021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42021) {
				console.warn("de-queueing event obj42021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42021_onTap_activeActionGroupIndex = 1;
	





















};
obj67310_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67310_onTap_activeActionGroupIndex = -1;
		$("#obj67310").trigger("obj67310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67310) {
				console.warn("de-queueing event obj67310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67310_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67310 
hide_67313();
function hide_67313() {
	var selector = "#obj67310";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67310_onTap_runningActionsCount = obj67310_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67310_onTap_runningActionsCount = window.obj67310_onTap_runningActionsCount - 1;
if (window.obj67310_onTap_runningActionsCount < 0) {
	window.obj67310_onTap_runningActionsCount = 0;
} else if (window.obj67310_onTap_runningActionsCount == 0) {
	obj67310_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67313(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67310_onTap_runningActionsCount = window.obj67310_onTap_runningActionsCount - 1;
if (window.obj67310_onTap_runningActionsCount < 0) {
	window.obj67310_onTap_runningActionsCount = 0;
} else if (window.obj67310_onTap_runningActionsCount == 0) {
	obj67310_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67316 
stopMovie_67312();
function stopMovie_67312() {
	window.obj67310_onTap_runningActionsCount = obj67310_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67316")[0];
	myVideo.pause();
	window.obj67310_onTap_runningActionsCount = window.obj67310_onTap_runningActionsCount - 1;
if (window.obj67310_onTap_runningActionsCount < 0) {
	window.obj67310_onTap_runningActionsCount = 0;
} else if (window.obj67310_onTap_runningActionsCount == 0) {
	obj67310_onTap_actionGroup1();
}
}
















};
obj67310_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67310_onTap_activeActionGroupIndex = -1;
		$("#obj67310").trigger("obj67310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67310) {
				console.warn("de-queueing event obj67310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67310_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67302
(function(){
	window.obj67310_onTap_runningActionsCount = obj67310_onTap_runningActionsCount + 1;

	var selector = "#obj67302";
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
					window.obj67310_onTap_runningActionsCount = window.obj67310_onTap_runningActionsCount - 1;
if (window.obj67310_onTap_runningActionsCount < 0) {
	window.obj67310_onTap_runningActionsCount = 0;
} else if (window.obj67310_onTap_runningActionsCount == 0) {
	obj67310_onTap_actionGroup2();
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
				window.obj67310_onTap_runningActionsCount = window.obj67310_onTap_runningActionsCount - 1;
if (window.obj67310_onTap_runningActionsCount < 0) {
	window.obj67310_onTap_runningActionsCount = 0;
} else if (window.obj67310_onTap_runningActionsCount == 0) {
	obj67310_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67310_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67310_onTap_activeActionGroupIndex = -1;
		$("#obj67310").trigger("obj67310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67310) {
				console.warn("de-queueing event obj67310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67310_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67316 
move_67315();
function move_67315() {
	window.obj67310_onTap_runningActionsCount = obj67310_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67316");
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
			window.obj67310_onTap_runningActionsCount = window.obj67310_onTap_runningActionsCount - 1;
if (window.obj67310_onTap_runningActionsCount < 0) {
	window.obj67310_onTap_runningActionsCount = 0;
} else if (window.obj67310_onTap_runningActionsCount == 0) {
	obj67310_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67310_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67310_onTap_activeActionGroupIndex = -1;
		$("#obj67310").trigger("obj67310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67310) {
				console.warn("de-queueing event obj67310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67310_onTap_activeActionGroupIndex = 3;
	





















};
obj67302_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67302_onTap_activeActionGroupIndex = -1;
		$("#obj67302").trigger("obj67302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67302) {
				console.warn("de-queueing event obj67302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67302_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67302 
hide_67305();
function hide_67305() {
	var selector = "#obj67302";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67302_onTap_runningActionsCount = obj67302_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67302_onTap_runningActionsCount = window.obj67302_onTap_runningActionsCount - 1;
if (window.obj67302_onTap_runningActionsCount < 0) {
	window.obj67302_onTap_runningActionsCount = 0;
} else if (window.obj67302_onTap_runningActionsCount == 0) {
	obj67302_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67305(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67302_onTap_runningActionsCount = window.obj67302_onTap_runningActionsCount - 1;
if (window.obj67302_onTap_runningActionsCount < 0) {
	window.obj67302_onTap_runningActionsCount = 0;
} else if (window.obj67302_onTap_runningActionsCount == 0) {
	obj67302_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67316 
playPauseMovie_67304();
function playPauseMovie_67304() {
	window.obj67302_onTap_runningActionsCount = obj67302_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67316")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67302_onTap_runningActionsCount = window.obj67302_onTap_runningActionsCount - 1;
if (window.obj67302_onTap_runningActionsCount < 0) {
	window.obj67302_onTap_runningActionsCount = 0;
} else if (window.obj67302_onTap_runningActionsCount == 0) {
	obj67302_onTap_actionGroup1();
}
}

















};
obj67302_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67302_onTap_activeActionGroupIndex = -1;
		$("#obj67302").trigger("obj67302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67302) {
				console.warn("de-queueing event obj67302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67302_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67310
(function(){
	window.obj67302_onTap_runningActionsCount = obj67302_onTap_runningActionsCount + 1;

	var selector = "#obj67310";
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
					window.obj67302_onTap_runningActionsCount = window.obj67302_onTap_runningActionsCount - 1;
if (window.obj67302_onTap_runningActionsCount < 0) {
	window.obj67302_onTap_runningActionsCount = 0;
} else if (window.obj67302_onTap_runningActionsCount == 0) {
	obj67302_onTap_actionGroup2();
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
				window.obj67302_onTap_runningActionsCount = window.obj67302_onTap_runningActionsCount - 1;
if (window.obj67302_onTap_runningActionsCount < 0) {
	window.obj67302_onTap_runningActionsCount = 0;
} else if (window.obj67302_onTap_runningActionsCount == 0) {
	obj67302_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67302_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67302_onTap_activeActionGroupIndex = -1;
		$("#obj67302").trigger("obj67302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67302) {
				console.warn("de-queueing event obj67302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67302_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67316 
move_67307();
function move_67307() {
	window.obj67302_onTap_runningActionsCount = obj67302_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67316");
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
			window.obj67302_onTap_runningActionsCount = window.obj67302_onTap_runningActionsCount - 1;
if (window.obj67302_onTap_runningActionsCount < 0) {
	window.obj67302_onTap_runningActionsCount = 0;
} else if (window.obj67302_onTap_runningActionsCount == 0) {
	obj67302_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67302_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67302_onTap_activeActionGroupIndex = -1;
		$("#obj67302").trigger("obj67302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67302) {
				console.warn("de-queueing event obj67302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67302_onTap_activeActionGroupIndex = 3;
	





















};
obj88597_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88597_onTap_activeActionGroupIndex = -1;
		$("#obj88597").trigger("obj88597_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88597) {
				console.warn("de-queueing event obj88597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88597_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88602 
stopAudio_88599();
function stopAudio_88599() {
	window.obj88597_onTap_runningActionsCount = obj88597_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88602")[0];
	myAudio.pause();
	window.obj88597_onTap_runningActionsCount = window.obj88597_onTap_runningActionsCount - 1;
if (window.obj88597_onTap_runningActionsCount < 0) {
	window.obj88597_onTap_runningActionsCount = 0;
} else if (window.obj88597_onTap_runningActionsCount == 0) {
	obj88597_onTap_actionGroup1();
}
}








};
obj88597_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88597_onTap_activeActionGroupIndex = -1;
		$("#obj88597").trigger("obj88597_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88597) {
				console.warn("de-queueing event obj88597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88597_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88597 
hide_88600();
function hide_88600() {
	var selector = "#obj88597";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88597_onTap_runningActionsCount = obj88597_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88597_onTap_runningActionsCount = window.obj88597_onTap_runningActionsCount - 1;
if (window.obj88597_onTap_runningActionsCount < 0) {
	window.obj88597_onTap_runningActionsCount = 0;
} else if (window.obj88597_onTap_runningActionsCount == 0) {
	obj88597_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88600(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88597_onTap_runningActionsCount = window.obj88597_onTap_runningActionsCount - 1;
if (window.obj88597_onTap_runningActionsCount < 0) {
	window.obj88597_onTap_runningActionsCount = 0;
} else if (window.obj88597_onTap_runningActionsCount == 0) {
	obj88597_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88597_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88597_onTap_activeActionGroupIndex = -1;
		$("#obj88597").trigger("obj88597_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88597) {
				console.warn("de-queueing event obj88597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88597_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88592
(function(){
	window.obj88597_onTap_runningActionsCount = obj88597_onTap_runningActionsCount + 1;

	var selector = "#obj88592";
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
					window.obj88597_onTap_runningActionsCount = window.obj88597_onTap_runningActionsCount - 1;
if (window.obj88597_onTap_runningActionsCount < 0) {
	window.obj88597_onTap_runningActionsCount = 0;
} else if (window.obj88597_onTap_runningActionsCount == 0) {
	obj88597_onTap_actionGroup3();
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
				window.obj88597_onTap_runningActionsCount = window.obj88597_onTap_runningActionsCount - 1;
if (window.obj88597_onTap_runningActionsCount < 0) {
	window.obj88597_onTap_runningActionsCount = 0;
} else if (window.obj88597_onTap_runningActionsCount == 0) {
	obj88597_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88597_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88597_onTap_activeActionGroupIndex = -1;
		$("#obj88597").trigger("obj88597_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88597) {
				console.warn("de-queueing event obj88597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88597_onTap_activeActionGroupIndex = 3;
	





















};
obj88592_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88592_onTap_activeActionGroupIndex = -1;
		$("#obj88592").trigger("obj88592_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88592) {
				console.warn("de-queueing event obj88592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88592_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88592 
hide_88594();
function hide_88594() {
	var selector = "#obj88592";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88592_onTap_runningActionsCount = obj88592_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88592_onTap_runningActionsCount = window.obj88592_onTap_runningActionsCount - 1;
if (window.obj88592_onTap_runningActionsCount < 0) {
	window.obj88592_onTap_runningActionsCount = 0;
} else if (window.obj88592_onTap_runningActionsCount == 0) {
	obj88592_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88594(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88592_onTap_runningActionsCount = window.obj88592_onTap_runningActionsCount - 1;
if (window.obj88592_onTap_runningActionsCount < 0) {
	window.obj88592_onTap_runningActionsCount = 0;
} else if (window.obj88592_onTap_runningActionsCount == 0) {
	obj88592_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88592_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88592_onTap_activeActionGroupIndex = -1;
		$("#obj88592").trigger("obj88592_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88592) {
				console.warn("de-queueing event obj88592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88592_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88597
(function(){
	window.obj88592_onTap_runningActionsCount = obj88592_onTap_runningActionsCount + 1;

	var selector = "#obj88597";
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
					window.obj88592_onTap_runningActionsCount = window.obj88592_onTap_runningActionsCount - 1;
if (window.obj88592_onTap_runningActionsCount < 0) {
	window.obj88592_onTap_runningActionsCount = 0;
} else if (window.obj88592_onTap_runningActionsCount == 0) {
	obj88592_onTap_actionGroup2();
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
				window.obj88592_onTap_runningActionsCount = window.obj88592_onTap_runningActionsCount - 1;
if (window.obj88592_onTap_runningActionsCount < 0) {
	window.obj88592_onTap_runningActionsCount = 0;
} else if (window.obj88592_onTap_runningActionsCount == 0) {
	obj88592_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88592_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88592_onTap_activeActionGroupIndex = -1;
		$("#obj88592").trigger("obj88592_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88592) {
				console.warn("de-queueing event obj88592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88592_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88602 
playAudio_88596();
function playAudio_88596() {
	window.obj88592_onTap_runningActionsCount = obj88592_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88602")[0];
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
		    window.obj88592_onTap_runningActionsCount = window.obj88592_onTap_runningActionsCount - 1;
if (window.obj88592_onTap_runningActionsCount < 0) {
	window.obj88592_onTap_runningActionsCount = 0;
} else if (window.obj88592_onTap_runningActionsCount == 0) {
	obj88592_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88592_onTap_runningActionsCount = window.obj88592_onTap_runningActionsCount - 1;
if (window.obj88592_onTap_runningActionsCount < 0) {
	window.obj88592_onTap_runningActionsCount = 0;
} else if (window.obj88592_onTap_runningActionsCount == 0) {
	obj88592_onTap_actionGroup3();
}
	}
}









};
obj88592_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88592_onTap_activeActionGroupIndex = -1;
		$("#obj88592").trigger("obj88592_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88592) {
				console.warn("de-queueing event obj88592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88592_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj42024: Event Touch Down
 *
 */
$("#obj42024").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj42024_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42024_onTap is still running");
	return;
}
var obj42024_onTap_runningActionsCount = 0;
var obj42024_onTap_loopCount = 0;
obj42024_onTap_actionGroup0();
});










/*
 *
 *   obj42021: Event Touch Down
 *
 */
$("#obj42021").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj42021_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42021_onTap is still running");
	return;
}
var obj42021_onTap_runningActionsCount = 0;
var obj42021_onTap_loopCount = 0;
obj42021_onTap_actionGroup0();
});












































































































































/*
 *
 *   obj67310: Event Touch Down
 *
 */
$("#obj67310").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67310_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67310_onTap is still running");
	return;
}
var obj67310_onTap_runningActionsCount = 0;
var obj67310_onTap_loopCount = 0;
obj67310_onTap_actionGroup0();
});










/*
 *
 *   obj67302: Event Touch Down
 *
 */
$("#obj67302").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67302_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67302_onTap is still running");
	return;
}
var obj67302_onTap_runningActionsCount = 0;
var obj67302_onTap_loopCount = 0;
obj67302_onTap_actionGroup0();
});










/*
 *
 *   obj88597: Event Touch Down
 *
 */
$("#obj88597").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88597_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88597_onTap is still running");
	return;
}
var obj88597_onTap_runningActionsCount = 0;
var obj88597_onTap_loopCount = 0;
obj88597_onTap_actionGroup0();
});










/*
 *
 *   obj88592: Event Touch Down
 *
 */
$("#obj88592").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88592_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88592_onTap is still running");
	return;
}
var obj88592_onTap_runningActionsCount = 0;
var obj88592_onTap_loopCount = 0;
obj88592_onTap_actionGroup0();
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
	
$("#obj42019").trigger('SCEventShow');
$("#obj42024").trigger('SCEventShow');
$("#obj42021").trigger('SCEventShow');
$("#obj42066").trigger('SCEventShow');
$("#obj42069").trigger('SCEventShow');
$("#obj42071").trigger('SCEventShow');
$("#obj42073").trigger('SCEventShow');
$("#obj42075").trigger('SCEventShow');
$("#obj42077").trigger('SCEventShow');
$("#obj42079").trigger('SCEventShow');
$("#obj42081").trigger('SCEventShow');
$("#obj42085").trigger('SCEventShow');
$("#obj42087").trigger('SCEventShow');
$("#obj42089").trigger('SCEventShow');
$("#obj42091").trigger('SCEventShow');
$("#obj42093").trigger('SCEventShow');
$("#obj67310").trigger('SCEventShow');
$("#obj67302").trigger('SCEventShow');
$("#obj88597").trigger('SCEventShow');
$("#obj88592").trigger('SCEventShow');
$("#obj88602").trigger('SCEventShow');
$("#obj94917").trigger('SCEventShow');
$("#obj67316").trigger('SCEventShow');
	
});