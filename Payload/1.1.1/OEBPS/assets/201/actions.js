pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 55427;
pubcoder.page.title = pubcoder.page.title || "201";
pubcoder.page.number = pubcoder.page.number || 201;
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
var obj55441_onTap_activeActionGroupIndex = -1;
var obj55441_onTap_runningActionsCount = 0;
var obj55441_onTap_loopCount = 0;
var obj55438_onTap_activeActionGroupIndex = -1;
var obj55438_onTap_runningActionsCount = 0;
var obj55438_onTap_loopCount = 0;
var obj68254_onTap_activeActionGroupIndex = -1;
var obj68254_onTap_runningActionsCount = 0;
var obj68254_onTap_loopCount = 0;
var obj68246_onTap_activeActionGroupIndex = -1;
var obj68246_onTap_runningActionsCount = 0;
var obj68246_onTap_loopCount = 0;
var obj89293_onTap_activeActionGroupIndex = -1;
var obj89293_onTap_runningActionsCount = 0;
var obj89293_onTap_loopCount = 0;
var obj89288_onTap_activeActionGroupIndex = -1;
var obj89288_onTap_runningActionsCount = 0;
var obj89288_onTap_loopCount = 0;
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
		
obj55441_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55441_onTap_activeActionGroupIndex = -1;
		$("#obj55441").trigger("obj55441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55441) {
				console.warn("de-queueing event obj55441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55441_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55443();
function goToPage_55443() {
	window.obj55441_onTap_runningActionsCount = obj55441_onTap_runningActionsCount + 1;
	$("#anchor1183")[0].click();
	window.obj55441_onTap_runningActionsCount = window.obj55441_onTap_runningActionsCount - 1;
if (window.obj55441_onTap_runningActionsCount < 0) {
	window.obj55441_onTap_runningActionsCount = 0;
} else if (window.obj55441_onTap_runningActionsCount == 0) {
	obj55441_onTap_actionGroup1();
}
}





















};
obj55441_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55441_onTap_activeActionGroupIndex = -1;
		$("#obj55441").trigger("obj55441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55441) {
				console.warn("de-queueing event obj55441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55441_onTap_activeActionGroupIndex = 1;
	





















};
obj55438_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55438_onTap_activeActionGroupIndex = -1;
		$("#obj55438").trigger("obj55438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55438) {
				console.warn("de-queueing event obj55438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55438_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55440();
function goToPage_55440() {
	window.obj55438_onTap_runningActionsCount = obj55438_onTap_runningActionsCount + 1;
	$("#anchor1184")[0].click();
	window.obj55438_onTap_runningActionsCount = window.obj55438_onTap_runningActionsCount - 1;
if (window.obj55438_onTap_runningActionsCount < 0) {
	window.obj55438_onTap_runningActionsCount = 0;
} else if (window.obj55438_onTap_runningActionsCount == 0) {
	obj55438_onTap_actionGroup1();
}
}





















};
obj55438_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55438_onTap_activeActionGroupIndex = -1;
		$("#obj55438").trigger("obj55438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55438) {
				console.warn("de-queueing event obj55438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55438_onTap_activeActionGroupIndex = 1;
	





















};
obj68254_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68254_onTap_activeActionGroupIndex = -1;
		$("#obj68254").trigger("obj68254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68254) {
				console.warn("de-queueing event obj68254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68254_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68254 
hide_68257();
function hide_68257() {
	var selector = "#obj68254";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68254_onTap_runningActionsCount = obj68254_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68254_onTap_runningActionsCount = window.obj68254_onTap_runningActionsCount - 1;
if (window.obj68254_onTap_runningActionsCount < 0) {
	window.obj68254_onTap_runningActionsCount = 0;
} else if (window.obj68254_onTap_runningActionsCount == 0) {
	obj68254_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68257(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68254_onTap_runningActionsCount = window.obj68254_onTap_runningActionsCount - 1;
if (window.obj68254_onTap_runningActionsCount < 0) {
	window.obj68254_onTap_runningActionsCount = 0;
} else if (window.obj68254_onTap_runningActionsCount == 0) {
	obj68254_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68260 
stopMovie_68256();
function stopMovie_68256() {
	window.obj68254_onTap_runningActionsCount = obj68254_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68260")[0];
	myVideo.pause();
	window.obj68254_onTap_runningActionsCount = window.obj68254_onTap_runningActionsCount - 1;
if (window.obj68254_onTap_runningActionsCount < 0) {
	window.obj68254_onTap_runningActionsCount = 0;
} else if (window.obj68254_onTap_runningActionsCount == 0) {
	obj68254_onTap_actionGroup1();
}
}
















};
obj68254_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68254_onTap_activeActionGroupIndex = -1;
		$("#obj68254").trigger("obj68254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68254) {
				console.warn("de-queueing event obj68254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68254_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68246
(function(){
	window.obj68254_onTap_runningActionsCount = obj68254_onTap_runningActionsCount + 1;

	var selector = "#obj68246";
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
					window.obj68254_onTap_runningActionsCount = window.obj68254_onTap_runningActionsCount - 1;
if (window.obj68254_onTap_runningActionsCount < 0) {
	window.obj68254_onTap_runningActionsCount = 0;
} else if (window.obj68254_onTap_runningActionsCount == 0) {
	obj68254_onTap_actionGroup2();
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
				window.obj68254_onTap_runningActionsCount = window.obj68254_onTap_runningActionsCount - 1;
if (window.obj68254_onTap_runningActionsCount < 0) {
	window.obj68254_onTap_runningActionsCount = 0;
} else if (window.obj68254_onTap_runningActionsCount == 0) {
	obj68254_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68254_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68254_onTap_activeActionGroupIndex = -1;
		$("#obj68254").trigger("obj68254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68254) {
				console.warn("de-queueing event obj68254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68254_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68260 
move_68259();
function move_68259() {
	window.obj68254_onTap_runningActionsCount = obj68254_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68260");
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
			window.obj68254_onTap_runningActionsCount = window.obj68254_onTap_runningActionsCount - 1;
if (window.obj68254_onTap_runningActionsCount < 0) {
	window.obj68254_onTap_runningActionsCount = 0;
} else if (window.obj68254_onTap_runningActionsCount == 0) {
	obj68254_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68254_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68254_onTap_activeActionGroupIndex = -1;
		$("#obj68254").trigger("obj68254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68254) {
				console.warn("de-queueing event obj68254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68254_onTap_activeActionGroupIndex = 3;
	





















};
obj68246_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68246_onTap_activeActionGroupIndex = -1;
		$("#obj68246").trigger("obj68246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68246) {
				console.warn("de-queueing event obj68246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68246_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68246 
hide_68249();
function hide_68249() {
	var selector = "#obj68246";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68246_onTap_runningActionsCount = obj68246_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68246_onTap_runningActionsCount = window.obj68246_onTap_runningActionsCount - 1;
if (window.obj68246_onTap_runningActionsCount < 0) {
	window.obj68246_onTap_runningActionsCount = 0;
} else if (window.obj68246_onTap_runningActionsCount == 0) {
	obj68246_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68249(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68246_onTap_runningActionsCount = window.obj68246_onTap_runningActionsCount - 1;
if (window.obj68246_onTap_runningActionsCount < 0) {
	window.obj68246_onTap_runningActionsCount = 0;
} else if (window.obj68246_onTap_runningActionsCount == 0) {
	obj68246_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68260 
playPauseMovie_68248();
function playPauseMovie_68248() {
	window.obj68246_onTap_runningActionsCount = obj68246_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68260")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68246_onTap_runningActionsCount = window.obj68246_onTap_runningActionsCount - 1;
if (window.obj68246_onTap_runningActionsCount < 0) {
	window.obj68246_onTap_runningActionsCount = 0;
} else if (window.obj68246_onTap_runningActionsCount == 0) {
	obj68246_onTap_actionGroup1();
}
}

















};
obj68246_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68246_onTap_activeActionGroupIndex = -1;
		$("#obj68246").trigger("obj68246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68246) {
				console.warn("de-queueing event obj68246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68246_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68254
(function(){
	window.obj68246_onTap_runningActionsCount = obj68246_onTap_runningActionsCount + 1;

	var selector = "#obj68254";
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
					window.obj68246_onTap_runningActionsCount = window.obj68246_onTap_runningActionsCount - 1;
if (window.obj68246_onTap_runningActionsCount < 0) {
	window.obj68246_onTap_runningActionsCount = 0;
} else if (window.obj68246_onTap_runningActionsCount == 0) {
	obj68246_onTap_actionGroup2();
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
				window.obj68246_onTap_runningActionsCount = window.obj68246_onTap_runningActionsCount - 1;
if (window.obj68246_onTap_runningActionsCount < 0) {
	window.obj68246_onTap_runningActionsCount = 0;
} else if (window.obj68246_onTap_runningActionsCount == 0) {
	obj68246_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68246_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68246_onTap_activeActionGroupIndex = -1;
		$("#obj68246").trigger("obj68246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68246) {
				console.warn("de-queueing event obj68246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68246_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68260 
move_68251();
function move_68251() {
	window.obj68246_onTap_runningActionsCount = obj68246_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68260");
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
			window.obj68246_onTap_runningActionsCount = window.obj68246_onTap_runningActionsCount - 1;
if (window.obj68246_onTap_runningActionsCount < 0) {
	window.obj68246_onTap_runningActionsCount = 0;
} else if (window.obj68246_onTap_runningActionsCount == 0) {
	obj68246_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68246_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68246_onTap_activeActionGroupIndex = -1;
		$("#obj68246").trigger("obj68246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68246) {
				console.warn("de-queueing event obj68246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68246_onTap_activeActionGroupIndex = 3;
	





















};
obj89293_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89293_onTap_activeActionGroupIndex = -1;
		$("#obj89293").trigger("obj89293_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89293) {
				console.warn("de-queueing event obj89293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89293_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89298 
stopAudio_89295();
function stopAudio_89295() {
	window.obj89293_onTap_runningActionsCount = obj89293_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89298")[0];
	myAudio.pause();
	window.obj89293_onTap_runningActionsCount = window.obj89293_onTap_runningActionsCount - 1;
if (window.obj89293_onTap_runningActionsCount < 0) {
	window.obj89293_onTap_runningActionsCount = 0;
} else if (window.obj89293_onTap_runningActionsCount == 0) {
	obj89293_onTap_actionGroup1();
}
}








};
obj89293_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89293_onTap_activeActionGroupIndex = -1;
		$("#obj89293").trigger("obj89293_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89293) {
				console.warn("de-queueing event obj89293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89293_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89293 
hide_89296();
function hide_89296() {
	var selector = "#obj89293";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89293_onTap_runningActionsCount = obj89293_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89293_onTap_runningActionsCount = window.obj89293_onTap_runningActionsCount - 1;
if (window.obj89293_onTap_runningActionsCount < 0) {
	window.obj89293_onTap_runningActionsCount = 0;
} else if (window.obj89293_onTap_runningActionsCount == 0) {
	obj89293_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89296(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89293_onTap_runningActionsCount = window.obj89293_onTap_runningActionsCount - 1;
if (window.obj89293_onTap_runningActionsCount < 0) {
	window.obj89293_onTap_runningActionsCount = 0;
} else if (window.obj89293_onTap_runningActionsCount == 0) {
	obj89293_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89293_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89293_onTap_activeActionGroupIndex = -1;
		$("#obj89293").trigger("obj89293_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89293) {
				console.warn("de-queueing event obj89293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89293_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89288
(function(){
	window.obj89293_onTap_runningActionsCount = obj89293_onTap_runningActionsCount + 1;

	var selector = "#obj89288";
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
					window.obj89293_onTap_runningActionsCount = window.obj89293_onTap_runningActionsCount - 1;
if (window.obj89293_onTap_runningActionsCount < 0) {
	window.obj89293_onTap_runningActionsCount = 0;
} else if (window.obj89293_onTap_runningActionsCount == 0) {
	obj89293_onTap_actionGroup3();
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
				window.obj89293_onTap_runningActionsCount = window.obj89293_onTap_runningActionsCount - 1;
if (window.obj89293_onTap_runningActionsCount < 0) {
	window.obj89293_onTap_runningActionsCount = 0;
} else if (window.obj89293_onTap_runningActionsCount == 0) {
	obj89293_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89293_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89293_onTap_activeActionGroupIndex = -1;
		$("#obj89293").trigger("obj89293_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89293) {
				console.warn("de-queueing event obj89293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89293_onTap_activeActionGroupIndex = 3;
	





















};
obj89288_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89288_onTap_activeActionGroupIndex = -1;
		$("#obj89288").trigger("obj89288_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89288) {
				console.warn("de-queueing event obj89288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89288_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89288 
hide_89290();
function hide_89290() {
	var selector = "#obj89288";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89288_onTap_runningActionsCount = obj89288_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89288_onTap_runningActionsCount = window.obj89288_onTap_runningActionsCount - 1;
if (window.obj89288_onTap_runningActionsCount < 0) {
	window.obj89288_onTap_runningActionsCount = 0;
} else if (window.obj89288_onTap_runningActionsCount == 0) {
	obj89288_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89290(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89288_onTap_runningActionsCount = window.obj89288_onTap_runningActionsCount - 1;
if (window.obj89288_onTap_runningActionsCount < 0) {
	window.obj89288_onTap_runningActionsCount = 0;
} else if (window.obj89288_onTap_runningActionsCount == 0) {
	obj89288_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89288_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89288_onTap_activeActionGroupIndex = -1;
		$("#obj89288").trigger("obj89288_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89288) {
				console.warn("de-queueing event obj89288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89288_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89293
(function(){
	window.obj89288_onTap_runningActionsCount = obj89288_onTap_runningActionsCount + 1;

	var selector = "#obj89293";
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
					window.obj89288_onTap_runningActionsCount = window.obj89288_onTap_runningActionsCount - 1;
if (window.obj89288_onTap_runningActionsCount < 0) {
	window.obj89288_onTap_runningActionsCount = 0;
} else if (window.obj89288_onTap_runningActionsCount == 0) {
	obj89288_onTap_actionGroup2();
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
				window.obj89288_onTap_runningActionsCount = window.obj89288_onTap_runningActionsCount - 1;
if (window.obj89288_onTap_runningActionsCount < 0) {
	window.obj89288_onTap_runningActionsCount = 0;
} else if (window.obj89288_onTap_runningActionsCount == 0) {
	obj89288_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89288_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89288_onTap_activeActionGroupIndex = -1;
		$("#obj89288").trigger("obj89288_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89288) {
				console.warn("de-queueing event obj89288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89288_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89298 
playAudio_89292();
function playAudio_89292() {
	window.obj89288_onTap_runningActionsCount = obj89288_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89298")[0];
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
		    window.obj89288_onTap_runningActionsCount = window.obj89288_onTap_runningActionsCount - 1;
if (window.obj89288_onTap_runningActionsCount < 0) {
	window.obj89288_onTap_runningActionsCount = 0;
} else if (window.obj89288_onTap_runningActionsCount == 0) {
	obj89288_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89288_onTap_runningActionsCount = window.obj89288_onTap_runningActionsCount - 1;
if (window.obj89288_onTap_runningActionsCount < 0) {
	window.obj89288_onTap_runningActionsCount = 0;
} else if (window.obj89288_onTap_runningActionsCount == 0) {
	obj89288_onTap_actionGroup3();
}
	}
}









};
obj89288_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89288_onTap_activeActionGroupIndex = -1;
		$("#obj89288").trigger("obj89288_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89288) {
				console.warn("de-queueing event obj89288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89288_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj55441: Event Touch Down
 *
 */
$("#obj55441").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55441_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55441_onTap is still running");
	return;
}
var obj55441_onTap_runningActionsCount = 0;
var obj55441_onTap_loopCount = 0;
obj55441_onTap_actionGroup0();
});










/*
 *
 *   obj55438: Event Touch Down
 *
 */
$("#obj55438").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55438_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55438_onTap is still running");
	return;
}
var obj55438_onTap_runningActionsCount = 0;
var obj55438_onTap_loopCount = 0;
obj55438_onTap_actionGroup0();
});




























































/*
 *
 *   obj68254: Event Touch Down
 *
 */
$("#obj68254").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68254_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68254_onTap is still running");
	return;
}
var obj68254_onTap_runningActionsCount = 0;
var obj68254_onTap_loopCount = 0;
obj68254_onTap_actionGroup0();
});










/*
 *
 *   obj68246: Event Touch Down
 *
 */
$("#obj68246").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68246_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68246_onTap is still running");
	return;
}
var obj68246_onTap_runningActionsCount = 0;
var obj68246_onTap_loopCount = 0;
obj68246_onTap_actionGroup0();
});










/*
 *
 *   obj89293: Event Touch Down
 *
 */
$("#obj89293").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89293_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89293_onTap is still running");
	return;
}
var obj89293_onTap_runningActionsCount = 0;
var obj89293_onTap_loopCount = 0;
obj89293_onTap_actionGroup0();
});










/*
 *
 *   obj89288: Event Touch Down
 *
 */
$("#obj89288").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89288_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89288_onTap is still running");
	return;
}
var obj89288_onTap_runningActionsCount = 0;
var obj89288_onTap_loopCount = 0;
obj89288_onTap_actionGroup0();
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
	
$("#obj55457").trigger('SCEventShow');
$("#obj55441").trigger('SCEventShow');
$("#obj55438").trigger('SCEventShow');
$("#obj55436").trigger('SCEventShow');
$("#obj55434").trigger('SCEventShow');
$("#obj55432").trigger('SCEventShow');
$("#obj55430").trigger('SCEventShow');
$("#obj55459").trigger('SCEventShow');
$("#obj68254").trigger('SCEventShow');
$("#obj68246").trigger('SCEventShow');
$("#obj89293").trigger('SCEventShow');
$("#obj89288").trigger('SCEventShow');
$("#obj89298").trigger('SCEventShow');
$("#obj95031").trigger('SCEventShow');
$("#obj68260").trigger('SCEventShow');
	
});