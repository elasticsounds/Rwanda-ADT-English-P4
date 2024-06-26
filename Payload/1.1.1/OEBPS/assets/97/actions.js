pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 24990;
pubcoder.page.title = pubcoder.page.title || "97";
pubcoder.page.number = pubcoder.page.number || 97;
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
var obj80330_onTap_activeActionGroupIndex = -1;
var obj80330_onTap_runningActionsCount = 0;
var obj80330_onTap_loopCount = 0;
var obj80327_onTap_activeActionGroupIndex = -1;
var obj80327_onTap_runningActionsCount = 0;
var obj80327_onTap_loopCount = 0;
var obj80299_onTap_activeActionGroupIndex = -1;
var obj80299_onTap_runningActionsCount = 0;
var obj80299_onTap_loopCount = 0;
var obj80291_onTap_activeActionGroupIndex = -1;
var obj80291_onTap_runningActionsCount = 0;
var obj80291_onTap_loopCount = 0;
var obj88033_onTap_activeActionGroupIndex = -1;
var obj88033_onTap_runningActionsCount = 0;
var obj88033_onTap_loopCount = 0;
var obj88028_onTap_activeActionGroupIndex = -1;
var obj88028_onTap_runningActionsCount = 0;
var obj88028_onTap_loopCount = 0;
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
		
obj80330_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80330_onTap_activeActionGroupIndex = -1;
		$("#obj80330").trigger("obj80330_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80330) {
				console.warn("de-queueing event obj80330." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80330").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80330_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80332();
function goToPage_80332() {
	window.obj80330_onTap_runningActionsCount = obj80330_onTap_runningActionsCount + 1;
	$("#anchor574")[0].click();
	window.obj80330_onTap_runningActionsCount = window.obj80330_onTap_runningActionsCount - 1;
if (window.obj80330_onTap_runningActionsCount < 0) {
	window.obj80330_onTap_runningActionsCount = 0;
} else if (window.obj80330_onTap_runningActionsCount == 0) {
	obj80330_onTap_actionGroup1();
}
}





















};
obj80330_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80330_onTap_activeActionGroupIndex = -1;
		$("#obj80330").trigger("obj80330_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80330) {
				console.warn("de-queueing event obj80330." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80330").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80330_onTap_activeActionGroupIndex = 1;
	





















};
obj80327_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80327_onTap_activeActionGroupIndex = -1;
		$("#obj80327").trigger("obj80327_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80327) {
				console.warn("de-queueing event obj80327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80327_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80329();
function goToPage_80329() {
	window.obj80327_onTap_runningActionsCount = obj80327_onTap_runningActionsCount + 1;
	$("#anchor575")[0].click();
	window.obj80327_onTap_runningActionsCount = window.obj80327_onTap_runningActionsCount - 1;
if (window.obj80327_onTap_runningActionsCount < 0) {
	window.obj80327_onTap_runningActionsCount = 0;
} else if (window.obj80327_onTap_runningActionsCount == 0) {
	obj80327_onTap_actionGroup1();
}
}





















};
obj80327_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80327_onTap_activeActionGroupIndex = -1;
		$("#obj80327").trigger("obj80327_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80327) {
				console.warn("de-queueing event obj80327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80327_onTap_activeActionGroupIndex = 1;
	





















};
obj80299_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80299_onTap_activeActionGroupIndex = -1;
		$("#obj80299").trigger("obj80299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80299) {
				console.warn("de-queueing event obj80299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80299_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80299 
hide_80302();
function hide_80302() {
	var selector = "#obj80299";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80299_onTap_runningActionsCount = obj80299_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80299_onTap_runningActionsCount = window.obj80299_onTap_runningActionsCount - 1;
if (window.obj80299_onTap_runningActionsCount < 0) {
	window.obj80299_onTap_runningActionsCount = 0;
} else if (window.obj80299_onTap_runningActionsCount == 0) {
	obj80299_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80302(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80299_onTap_runningActionsCount = window.obj80299_onTap_runningActionsCount - 1;
if (window.obj80299_onTap_runningActionsCount < 0) {
	window.obj80299_onTap_runningActionsCount = 0;
} else if (window.obj80299_onTap_runningActionsCount == 0) {
	obj80299_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj80289 
stopMovie_80301();
function stopMovie_80301() {
	window.obj80299_onTap_runningActionsCount = obj80299_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80289")[0];
	myVideo.pause();
	window.obj80299_onTap_runningActionsCount = window.obj80299_onTap_runningActionsCount - 1;
if (window.obj80299_onTap_runningActionsCount < 0) {
	window.obj80299_onTap_runningActionsCount = 0;
} else if (window.obj80299_onTap_runningActionsCount == 0) {
	obj80299_onTap_actionGroup1();
}
}
















};
obj80299_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80299_onTap_activeActionGroupIndex = -1;
		$("#obj80299").trigger("obj80299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80299) {
				console.warn("de-queueing event obj80299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80299_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80291
(function(){
	window.obj80299_onTap_runningActionsCount = obj80299_onTap_runningActionsCount + 1;

	var selector = "#obj80291";
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
					window.obj80299_onTap_runningActionsCount = window.obj80299_onTap_runningActionsCount - 1;
if (window.obj80299_onTap_runningActionsCount < 0) {
	window.obj80299_onTap_runningActionsCount = 0;
} else if (window.obj80299_onTap_runningActionsCount == 0) {
	obj80299_onTap_actionGroup2();
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
				window.obj80299_onTap_runningActionsCount = window.obj80299_onTap_runningActionsCount - 1;
if (window.obj80299_onTap_runningActionsCount < 0) {
	window.obj80299_onTap_runningActionsCount = 0;
} else if (window.obj80299_onTap_runningActionsCount == 0) {
	obj80299_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80299_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80299_onTap_activeActionGroupIndex = -1;
		$("#obj80299").trigger("obj80299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80299) {
				console.warn("de-queueing event obj80299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80299_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80289 
move_80304();
function move_80304() {
	window.obj80299_onTap_runningActionsCount = obj80299_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80289");
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
			window.obj80299_onTap_runningActionsCount = window.obj80299_onTap_runningActionsCount - 1;
if (window.obj80299_onTap_runningActionsCount < 0) {
	window.obj80299_onTap_runningActionsCount = 0;
} else if (window.obj80299_onTap_runningActionsCount == 0) {
	obj80299_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80299_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80299_onTap_activeActionGroupIndex = -1;
		$("#obj80299").trigger("obj80299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80299) {
				console.warn("de-queueing event obj80299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80299_onTap_activeActionGroupIndex = 3;
	





















};
obj80291_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80291_onTap_activeActionGroupIndex = -1;
		$("#obj80291").trigger("obj80291_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80291) {
				console.warn("de-queueing event obj80291." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80291").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80291_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80291 
hide_80294();
function hide_80294() {
	var selector = "#obj80291";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80291_onTap_runningActionsCount = obj80291_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80291_onTap_runningActionsCount = window.obj80291_onTap_runningActionsCount - 1;
if (window.obj80291_onTap_runningActionsCount < 0) {
	window.obj80291_onTap_runningActionsCount = 0;
} else if (window.obj80291_onTap_runningActionsCount == 0) {
	obj80291_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80294(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80291_onTap_runningActionsCount = window.obj80291_onTap_runningActionsCount - 1;
if (window.obj80291_onTap_runningActionsCount < 0) {
	window.obj80291_onTap_runningActionsCount = 0;
} else if (window.obj80291_onTap_runningActionsCount == 0) {
	obj80291_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj80289 
playPauseMovie_80293();
function playPauseMovie_80293() {
	window.obj80291_onTap_runningActionsCount = obj80291_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80289")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj80291_onTap_runningActionsCount = window.obj80291_onTap_runningActionsCount - 1;
if (window.obj80291_onTap_runningActionsCount < 0) {
	window.obj80291_onTap_runningActionsCount = 0;
} else if (window.obj80291_onTap_runningActionsCount == 0) {
	obj80291_onTap_actionGroup1();
}
}

















};
obj80291_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80291_onTap_activeActionGroupIndex = -1;
		$("#obj80291").trigger("obj80291_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80291) {
				console.warn("de-queueing event obj80291." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80291").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80291_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80299
(function(){
	window.obj80291_onTap_runningActionsCount = obj80291_onTap_runningActionsCount + 1;

	var selector = "#obj80299";
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
					window.obj80291_onTap_runningActionsCount = window.obj80291_onTap_runningActionsCount - 1;
if (window.obj80291_onTap_runningActionsCount < 0) {
	window.obj80291_onTap_runningActionsCount = 0;
} else if (window.obj80291_onTap_runningActionsCount == 0) {
	obj80291_onTap_actionGroup2();
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
				window.obj80291_onTap_runningActionsCount = window.obj80291_onTap_runningActionsCount - 1;
if (window.obj80291_onTap_runningActionsCount < 0) {
	window.obj80291_onTap_runningActionsCount = 0;
} else if (window.obj80291_onTap_runningActionsCount == 0) {
	obj80291_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80291_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80291_onTap_activeActionGroupIndex = -1;
		$("#obj80291").trigger("obj80291_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80291) {
				console.warn("de-queueing event obj80291." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80291").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80291_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80289 
move_80296();
function move_80296() {
	window.obj80291_onTap_runningActionsCount = obj80291_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80289");
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
			window.obj80291_onTap_runningActionsCount = window.obj80291_onTap_runningActionsCount - 1;
if (window.obj80291_onTap_runningActionsCount < 0) {
	window.obj80291_onTap_runningActionsCount = 0;
} else if (window.obj80291_onTap_runningActionsCount == 0) {
	obj80291_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80291_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80291_onTap_activeActionGroupIndex = -1;
		$("#obj80291").trigger("obj80291_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80291) {
				console.warn("de-queueing event obj80291." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80291").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80291_onTap_activeActionGroupIndex = 3;
	





















};
obj88033_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88033_onTap_activeActionGroupIndex = -1;
		$("#obj88033").trigger("obj88033_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88033) {
				console.warn("de-queueing event obj88033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88033_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88038 
stopAudio_88035();
function stopAudio_88035() {
	window.obj88033_onTap_runningActionsCount = obj88033_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88038")[0];
	myAudio.pause();
	window.obj88033_onTap_runningActionsCount = window.obj88033_onTap_runningActionsCount - 1;
if (window.obj88033_onTap_runningActionsCount < 0) {
	window.obj88033_onTap_runningActionsCount = 0;
} else if (window.obj88033_onTap_runningActionsCount == 0) {
	obj88033_onTap_actionGroup1();
}
}








};
obj88033_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88033_onTap_activeActionGroupIndex = -1;
		$("#obj88033").trigger("obj88033_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88033) {
				console.warn("de-queueing event obj88033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88033_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88033 
hide_88036();
function hide_88036() {
	var selector = "#obj88033";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88033_onTap_runningActionsCount = obj88033_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88033_onTap_runningActionsCount = window.obj88033_onTap_runningActionsCount - 1;
if (window.obj88033_onTap_runningActionsCount < 0) {
	window.obj88033_onTap_runningActionsCount = 0;
} else if (window.obj88033_onTap_runningActionsCount == 0) {
	obj88033_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88036(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88033_onTap_runningActionsCount = window.obj88033_onTap_runningActionsCount - 1;
if (window.obj88033_onTap_runningActionsCount < 0) {
	window.obj88033_onTap_runningActionsCount = 0;
} else if (window.obj88033_onTap_runningActionsCount == 0) {
	obj88033_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88033_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88033_onTap_activeActionGroupIndex = -1;
		$("#obj88033").trigger("obj88033_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88033) {
				console.warn("de-queueing event obj88033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88033_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88028
(function(){
	window.obj88033_onTap_runningActionsCount = obj88033_onTap_runningActionsCount + 1;

	var selector = "#obj88028";
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
					window.obj88033_onTap_runningActionsCount = window.obj88033_onTap_runningActionsCount - 1;
if (window.obj88033_onTap_runningActionsCount < 0) {
	window.obj88033_onTap_runningActionsCount = 0;
} else if (window.obj88033_onTap_runningActionsCount == 0) {
	obj88033_onTap_actionGroup3();
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
				window.obj88033_onTap_runningActionsCount = window.obj88033_onTap_runningActionsCount - 1;
if (window.obj88033_onTap_runningActionsCount < 0) {
	window.obj88033_onTap_runningActionsCount = 0;
} else if (window.obj88033_onTap_runningActionsCount == 0) {
	obj88033_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88033_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88033_onTap_activeActionGroupIndex = -1;
		$("#obj88033").trigger("obj88033_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88033) {
				console.warn("de-queueing event obj88033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88033_onTap_activeActionGroupIndex = 3;
	





















};
obj88028_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88028_onTap_activeActionGroupIndex = -1;
		$("#obj88028").trigger("obj88028_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88028) {
				console.warn("de-queueing event obj88028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88028_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88028 
hide_88030();
function hide_88030() {
	var selector = "#obj88028";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88028_onTap_runningActionsCount = obj88028_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88028_onTap_runningActionsCount = window.obj88028_onTap_runningActionsCount - 1;
if (window.obj88028_onTap_runningActionsCount < 0) {
	window.obj88028_onTap_runningActionsCount = 0;
} else if (window.obj88028_onTap_runningActionsCount == 0) {
	obj88028_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88030(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88028_onTap_runningActionsCount = window.obj88028_onTap_runningActionsCount - 1;
if (window.obj88028_onTap_runningActionsCount < 0) {
	window.obj88028_onTap_runningActionsCount = 0;
} else if (window.obj88028_onTap_runningActionsCount == 0) {
	obj88028_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88028_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88028_onTap_activeActionGroupIndex = -1;
		$("#obj88028").trigger("obj88028_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88028) {
				console.warn("de-queueing event obj88028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88028_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88033
(function(){
	window.obj88028_onTap_runningActionsCount = obj88028_onTap_runningActionsCount + 1;

	var selector = "#obj88033";
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
					window.obj88028_onTap_runningActionsCount = window.obj88028_onTap_runningActionsCount - 1;
if (window.obj88028_onTap_runningActionsCount < 0) {
	window.obj88028_onTap_runningActionsCount = 0;
} else if (window.obj88028_onTap_runningActionsCount == 0) {
	obj88028_onTap_actionGroup2();
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
				window.obj88028_onTap_runningActionsCount = window.obj88028_onTap_runningActionsCount - 1;
if (window.obj88028_onTap_runningActionsCount < 0) {
	window.obj88028_onTap_runningActionsCount = 0;
} else if (window.obj88028_onTap_runningActionsCount == 0) {
	obj88028_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88028_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88028_onTap_activeActionGroupIndex = -1;
		$("#obj88028").trigger("obj88028_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88028) {
				console.warn("de-queueing event obj88028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88028_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88038 
playAudio_88032();
function playAudio_88032() {
	window.obj88028_onTap_runningActionsCount = obj88028_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88038")[0];
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
		    window.obj88028_onTap_runningActionsCount = window.obj88028_onTap_runningActionsCount - 1;
if (window.obj88028_onTap_runningActionsCount < 0) {
	window.obj88028_onTap_runningActionsCount = 0;
} else if (window.obj88028_onTap_runningActionsCount == 0) {
	obj88028_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88028_onTap_runningActionsCount = window.obj88028_onTap_runningActionsCount - 1;
if (window.obj88028_onTap_runningActionsCount < 0) {
	window.obj88028_onTap_runningActionsCount = 0;
} else if (window.obj88028_onTap_runningActionsCount == 0) {
	obj88028_onTap_actionGroup3();
}
	}
}









};
obj88028_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88028_onTap_activeActionGroupIndex = -1;
		$("#obj88028").trigger("obj88028_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88028) {
				console.warn("de-queueing event obj88028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88028_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj80330: Event Touch Down
 *
 */
$("#obj80330").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80330_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80330_onTap is still running");
	return;
}
var obj80330_onTap_runningActionsCount = 0;
var obj80330_onTap_loopCount = 0;
obj80330_onTap_actionGroup0();
});










/*
 *
 *   obj80327: Event Touch Down
 *
 */
$("#obj80327").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80327_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80327_onTap is still running");
	return;
}
var obj80327_onTap_runningActionsCount = 0;
var obj80327_onTap_loopCount = 0;
obj80327_onTap_actionGroup0();
});




























































/*
 *
 *   obj80299: Event Touch Down
 *
 */
$("#obj80299").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80299_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80299_onTap is still running");
	return;
}
var obj80299_onTap_runningActionsCount = 0;
var obj80299_onTap_loopCount = 0;
obj80299_onTap_actionGroup0();
});










/*
 *
 *   obj80291: Event Touch Down
 *
 */
$("#obj80291").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80291_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80291_onTap is still running");
	return;
}
var obj80291_onTap_runningActionsCount = 0;
var obj80291_onTap_loopCount = 0;
obj80291_onTap_actionGroup0();
});










/*
 *
 *   obj88033: Event Touch Down
 *
 */
$("#obj88033").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88033_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88033_onTap is still running");
	return;
}
var obj88033_onTap_runningActionsCount = 0;
var obj88033_onTap_loopCount = 0;
obj88033_onTap_actionGroup0();
});










/*
 *
 *   obj88028: Event Touch Down
 *
 */
$("#obj88028").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88028_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88028_onTap is still running");
	return;
}
var obj88028_onTap_runningActionsCount = 0;
var obj88028_onTap_loopCount = 0;
obj88028_onTap_actionGroup0();
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
	
$("#obj80333").trigger('SCEventShow');
$("#obj80330").trigger('SCEventShow');
$("#obj80327").trigger('SCEventShow');
$("#obj80325").trigger('SCEventShow');
$("#obj80323").trigger('SCEventShow');
$("#obj80321").trigger('SCEventShow');
$("#obj80319").trigger('SCEventShow');
$("#obj80317").trigger('SCEventShow');
$("#obj80299").trigger('SCEventShow');
$("#obj80291").trigger('SCEventShow');
$("#obj88033").trigger('SCEventShow');
$("#obj88028").trigger('SCEventShow');
$("#obj88038").trigger('SCEventShow');
$("#obj94823").trigger('SCEventShow');
$("#obj80289").trigger('SCEventShow');
	
});