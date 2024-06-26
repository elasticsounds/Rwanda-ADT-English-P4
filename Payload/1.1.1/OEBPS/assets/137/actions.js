pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 40780;
pubcoder.page.title = pubcoder.page.title || "137";
pubcoder.page.number = pubcoder.page.number || 137;
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
var obj40792_onTap_activeActionGroupIndex = -1;
var obj40792_onTap_runningActionsCount = 0;
var obj40792_onTap_loopCount = 0;
var obj40789_onTap_activeActionGroupIndex = -1;
var obj40789_onTap_runningActionsCount = 0;
var obj40789_onTap_loopCount = 0;
var obj67198_onTap_activeActionGroupIndex = -1;
var obj67198_onTap_runningActionsCount = 0;
var obj67198_onTap_loopCount = 0;
var obj67190_onTap_activeActionGroupIndex = -1;
var obj67190_onTap_runningActionsCount = 0;
var obj67190_onTap_loopCount = 0;
var obj88513_onTap_activeActionGroupIndex = -1;
var obj88513_onTap_runningActionsCount = 0;
var obj88513_onTap_loopCount = 0;
var obj88508_onTap_activeActionGroupIndex = -1;
var obj88508_onTap_runningActionsCount = 0;
var obj88508_onTap_loopCount = 0;
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
		
obj40792_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40792_onTap_activeActionGroupIndex = -1;
		$("#obj40792").trigger("obj40792_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40792) {
				console.warn("de-queueing event obj40792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40792_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_40794();
function goToPage_40794() {
	window.obj40792_onTap_runningActionsCount = obj40792_onTap_runningActionsCount + 1;
	$("#anchor816")[0].click();
	window.obj40792_onTap_runningActionsCount = window.obj40792_onTap_runningActionsCount - 1;
if (window.obj40792_onTap_runningActionsCount < 0) {
	window.obj40792_onTap_runningActionsCount = 0;
} else if (window.obj40792_onTap_runningActionsCount == 0) {
	obj40792_onTap_actionGroup1();
}
}





















};
obj40792_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40792_onTap_activeActionGroupIndex = -1;
		$("#obj40792").trigger("obj40792_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40792) {
				console.warn("de-queueing event obj40792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40792_onTap_activeActionGroupIndex = 1;
	





















};
obj40789_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40789_onTap_activeActionGroupIndex = -1;
		$("#obj40789").trigger("obj40789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40789) {
				console.warn("de-queueing event obj40789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40789_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_40791();
function goToPage_40791() {
	window.obj40789_onTap_runningActionsCount = obj40789_onTap_runningActionsCount + 1;
	$("#anchor817")[0].click();
	window.obj40789_onTap_runningActionsCount = window.obj40789_onTap_runningActionsCount - 1;
if (window.obj40789_onTap_runningActionsCount < 0) {
	window.obj40789_onTap_runningActionsCount = 0;
} else if (window.obj40789_onTap_runningActionsCount == 0) {
	obj40789_onTap_actionGroup1();
}
}





















};
obj40789_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40789_onTap_activeActionGroupIndex = -1;
		$("#obj40789").trigger("obj40789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40789) {
				console.warn("de-queueing event obj40789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40789_onTap_activeActionGroupIndex = 1;
	





















};
obj67198_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67198_onTap_activeActionGroupIndex = -1;
		$("#obj67198").trigger("obj67198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67198) {
				console.warn("de-queueing event obj67198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67198_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67198 
hide_67201();
function hide_67201() {
	var selector = "#obj67198";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67198_onTap_runningActionsCount = obj67198_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67198_onTap_runningActionsCount = window.obj67198_onTap_runningActionsCount - 1;
if (window.obj67198_onTap_runningActionsCount < 0) {
	window.obj67198_onTap_runningActionsCount = 0;
} else if (window.obj67198_onTap_runningActionsCount == 0) {
	obj67198_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67201(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67198_onTap_runningActionsCount = window.obj67198_onTap_runningActionsCount - 1;
if (window.obj67198_onTap_runningActionsCount < 0) {
	window.obj67198_onTap_runningActionsCount = 0;
} else if (window.obj67198_onTap_runningActionsCount == 0) {
	obj67198_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67204 
stopMovie_67200();
function stopMovie_67200() {
	window.obj67198_onTap_runningActionsCount = obj67198_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67204")[0];
	myVideo.pause();
	window.obj67198_onTap_runningActionsCount = window.obj67198_onTap_runningActionsCount - 1;
if (window.obj67198_onTap_runningActionsCount < 0) {
	window.obj67198_onTap_runningActionsCount = 0;
} else if (window.obj67198_onTap_runningActionsCount == 0) {
	obj67198_onTap_actionGroup1();
}
}
















};
obj67198_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67198_onTap_activeActionGroupIndex = -1;
		$("#obj67198").trigger("obj67198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67198) {
				console.warn("de-queueing event obj67198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67198_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67190
(function(){
	window.obj67198_onTap_runningActionsCount = obj67198_onTap_runningActionsCount + 1;

	var selector = "#obj67190";
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
					window.obj67198_onTap_runningActionsCount = window.obj67198_onTap_runningActionsCount - 1;
if (window.obj67198_onTap_runningActionsCount < 0) {
	window.obj67198_onTap_runningActionsCount = 0;
} else if (window.obj67198_onTap_runningActionsCount == 0) {
	obj67198_onTap_actionGroup2();
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
				window.obj67198_onTap_runningActionsCount = window.obj67198_onTap_runningActionsCount - 1;
if (window.obj67198_onTap_runningActionsCount < 0) {
	window.obj67198_onTap_runningActionsCount = 0;
} else if (window.obj67198_onTap_runningActionsCount == 0) {
	obj67198_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67198_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67198_onTap_activeActionGroupIndex = -1;
		$("#obj67198").trigger("obj67198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67198) {
				console.warn("de-queueing event obj67198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67198_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67204 
move_67203();
function move_67203() {
	window.obj67198_onTap_runningActionsCount = obj67198_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67204");
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
			window.obj67198_onTap_runningActionsCount = window.obj67198_onTap_runningActionsCount - 1;
if (window.obj67198_onTap_runningActionsCount < 0) {
	window.obj67198_onTap_runningActionsCount = 0;
} else if (window.obj67198_onTap_runningActionsCount == 0) {
	obj67198_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67198_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67198_onTap_activeActionGroupIndex = -1;
		$("#obj67198").trigger("obj67198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67198) {
				console.warn("de-queueing event obj67198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67198_onTap_activeActionGroupIndex = 3;
	





















};
obj67190_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67190_onTap_activeActionGroupIndex = -1;
		$("#obj67190").trigger("obj67190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67190) {
				console.warn("de-queueing event obj67190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67190_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67190 
hide_67193();
function hide_67193() {
	var selector = "#obj67190";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67190_onTap_runningActionsCount = obj67190_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67190_onTap_runningActionsCount = window.obj67190_onTap_runningActionsCount - 1;
if (window.obj67190_onTap_runningActionsCount < 0) {
	window.obj67190_onTap_runningActionsCount = 0;
} else if (window.obj67190_onTap_runningActionsCount == 0) {
	obj67190_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67193(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67190_onTap_runningActionsCount = window.obj67190_onTap_runningActionsCount - 1;
if (window.obj67190_onTap_runningActionsCount < 0) {
	window.obj67190_onTap_runningActionsCount = 0;
} else if (window.obj67190_onTap_runningActionsCount == 0) {
	obj67190_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67204 
playPauseMovie_67192();
function playPauseMovie_67192() {
	window.obj67190_onTap_runningActionsCount = obj67190_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67204")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67190_onTap_runningActionsCount = window.obj67190_onTap_runningActionsCount - 1;
if (window.obj67190_onTap_runningActionsCount < 0) {
	window.obj67190_onTap_runningActionsCount = 0;
} else if (window.obj67190_onTap_runningActionsCount == 0) {
	obj67190_onTap_actionGroup1();
}
}

















};
obj67190_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67190_onTap_activeActionGroupIndex = -1;
		$("#obj67190").trigger("obj67190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67190) {
				console.warn("de-queueing event obj67190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67190_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67198
(function(){
	window.obj67190_onTap_runningActionsCount = obj67190_onTap_runningActionsCount + 1;

	var selector = "#obj67198";
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
					window.obj67190_onTap_runningActionsCount = window.obj67190_onTap_runningActionsCount - 1;
if (window.obj67190_onTap_runningActionsCount < 0) {
	window.obj67190_onTap_runningActionsCount = 0;
} else if (window.obj67190_onTap_runningActionsCount == 0) {
	obj67190_onTap_actionGroup2();
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
				window.obj67190_onTap_runningActionsCount = window.obj67190_onTap_runningActionsCount - 1;
if (window.obj67190_onTap_runningActionsCount < 0) {
	window.obj67190_onTap_runningActionsCount = 0;
} else if (window.obj67190_onTap_runningActionsCount == 0) {
	obj67190_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67190_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67190_onTap_activeActionGroupIndex = -1;
		$("#obj67190").trigger("obj67190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67190) {
				console.warn("de-queueing event obj67190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67190_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67204 
move_67195();
function move_67195() {
	window.obj67190_onTap_runningActionsCount = obj67190_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67204");
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
			window.obj67190_onTap_runningActionsCount = window.obj67190_onTap_runningActionsCount - 1;
if (window.obj67190_onTap_runningActionsCount < 0) {
	window.obj67190_onTap_runningActionsCount = 0;
} else if (window.obj67190_onTap_runningActionsCount == 0) {
	obj67190_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67190_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67190_onTap_activeActionGroupIndex = -1;
		$("#obj67190").trigger("obj67190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67190) {
				console.warn("de-queueing event obj67190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67190_onTap_activeActionGroupIndex = 3;
	





















};
obj88513_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88513_onTap_activeActionGroupIndex = -1;
		$("#obj88513").trigger("obj88513_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88513) {
				console.warn("de-queueing event obj88513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88513_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88518 
stopAudio_88515();
function stopAudio_88515() {
	window.obj88513_onTap_runningActionsCount = obj88513_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88518")[0];
	myAudio.pause();
	window.obj88513_onTap_runningActionsCount = window.obj88513_onTap_runningActionsCount - 1;
if (window.obj88513_onTap_runningActionsCount < 0) {
	window.obj88513_onTap_runningActionsCount = 0;
} else if (window.obj88513_onTap_runningActionsCount == 0) {
	obj88513_onTap_actionGroup1();
}
}








};
obj88513_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88513_onTap_activeActionGroupIndex = -1;
		$("#obj88513").trigger("obj88513_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88513) {
				console.warn("de-queueing event obj88513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88513_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88513 
hide_88516();
function hide_88516() {
	var selector = "#obj88513";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88513_onTap_runningActionsCount = obj88513_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88513_onTap_runningActionsCount = window.obj88513_onTap_runningActionsCount - 1;
if (window.obj88513_onTap_runningActionsCount < 0) {
	window.obj88513_onTap_runningActionsCount = 0;
} else if (window.obj88513_onTap_runningActionsCount == 0) {
	obj88513_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88516(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88513_onTap_runningActionsCount = window.obj88513_onTap_runningActionsCount - 1;
if (window.obj88513_onTap_runningActionsCount < 0) {
	window.obj88513_onTap_runningActionsCount = 0;
} else if (window.obj88513_onTap_runningActionsCount == 0) {
	obj88513_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88513_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88513_onTap_activeActionGroupIndex = -1;
		$("#obj88513").trigger("obj88513_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88513) {
				console.warn("de-queueing event obj88513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88513_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88508
(function(){
	window.obj88513_onTap_runningActionsCount = obj88513_onTap_runningActionsCount + 1;

	var selector = "#obj88508";
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
					window.obj88513_onTap_runningActionsCount = window.obj88513_onTap_runningActionsCount - 1;
if (window.obj88513_onTap_runningActionsCount < 0) {
	window.obj88513_onTap_runningActionsCount = 0;
} else if (window.obj88513_onTap_runningActionsCount == 0) {
	obj88513_onTap_actionGroup3();
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
				window.obj88513_onTap_runningActionsCount = window.obj88513_onTap_runningActionsCount - 1;
if (window.obj88513_onTap_runningActionsCount < 0) {
	window.obj88513_onTap_runningActionsCount = 0;
} else if (window.obj88513_onTap_runningActionsCount == 0) {
	obj88513_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88513_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88513_onTap_activeActionGroupIndex = -1;
		$("#obj88513").trigger("obj88513_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88513) {
				console.warn("de-queueing event obj88513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88513_onTap_activeActionGroupIndex = 3;
	





















};
obj88508_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88508_onTap_activeActionGroupIndex = -1;
		$("#obj88508").trigger("obj88508_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88508) {
				console.warn("de-queueing event obj88508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88508_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88508 
hide_88510();
function hide_88510() {
	var selector = "#obj88508";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88508_onTap_runningActionsCount = obj88508_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88508_onTap_runningActionsCount = window.obj88508_onTap_runningActionsCount - 1;
if (window.obj88508_onTap_runningActionsCount < 0) {
	window.obj88508_onTap_runningActionsCount = 0;
} else if (window.obj88508_onTap_runningActionsCount == 0) {
	obj88508_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88510(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88508_onTap_runningActionsCount = window.obj88508_onTap_runningActionsCount - 1;
if (window.obj88508_onTap_runningActionsCount < 0) {
	window.obj88508_onTap_runningActionsCount = 0;
} else if (window.obj88508_onTap_runningActionsCount == 0) {
	obj88508_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88508_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88508_onTap_activeActionGroupIndex = -1;
		$("#obj88508").trigger("obj88508_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88508) {
				console.warn("de-queueing event obj88508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88508_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88513
(function(){
	window.obj88508_onTap_runningActionsCount = obj88508_onTap_runningActionsCount + 1;

	var selector = "#obj88513";
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
					window.obj88508_onTap_runningActionsCount = window.obj88508_onTap_runningActionsCount - 1;
if (window.obj88508_onTap_runningActionsCount < 0) {
	window.obj88508_onTap_runningActionsCount = 0;
} else if (window.obj88508_onTap_runningActionsCount == 0) {
	obj88508_onTap_actionGroup2();
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
				window.obj88508_onTap_runningActionsCount = window.obj88508_onTap_runningActionsCount - 1;
if (window.obj88508_onTap_runningActionsCount < 0) {
	window.obj88508_onTap_runningActionsCount = 0;
} else if (window.obj88508_onTap_runningActionsCount == 0) {
	obj88508_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88508_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88508_onTap_activeActionGroupIndex = -1;
		$("#obj88508").trigger("obj88508_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88508) {
				console.warn("de-queueing event obj88508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88508_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88518 
playAudio_88512();
function playAudio_88512() {
	window.obj88508_onTap_runningActionsCount = obj88508_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88518")[0];
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
		    window.obj88508_onTap_runningActionsCount = window.obj88508_onTap_runningActionsCount - 1;
if (window.obj88508_onTap_runningActionsCount < 0) {
	window.obj88508_onTap_runningActionsCount = 0;
} else if (window.obj88508_onTap_runningActionsCount == 0) {
	obj88508_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88508_onTap_runningActionsCount = window.obj88508_onTap_runningActionsCount - 1;
if (window.obj88508_onTap_runningActionsCount < 0) {
	window.obj88508_onTap_runningActionsCount = 0;
} else if (window.obj88508_onTap_runningActionsCount == 0) {
	obj88508_onTap_actionGroup3();
}
	}
}









};
obj88508_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88508_onTap_activeActionGroupIndex = -1;
		$("#obj88508").trigger("obj88508_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88508) {
				console.warn("de-queueing event obj88508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88508_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj40792: Event Touch Down
 *
 */
$("#obj40792").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj40792_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40792_onTap is still running");
	return;
}
var obj40792_onTap_runningActionsCount = 0;
var obj40792_onTap_loopCount = 0;
obj40792_onTap_actionGroup0();
});










/*
 *
 *   obj40789: Event Touch Down
 *
 */
$("#obj40789").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj40789_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40789_onTap is still running");
	return;
}
var obj40789_onTap_runningActionsCount = 0;
var obj40789_onTap_loopCount = 0;
obj40789_onTap_actionGroup0();
});


















































/*
 *
 *   obj67198: Event Touch Down
 *
 */
$("#obj67198").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67198_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67198_onTap is still running");
	return;
}
var obj67198_onTap_runningActionsCount = 0;
var obj67198_onTap_loopCount = 0;
obj67198_onTap_actionGroup0();
});










/*
 *
 *   obj67190: Event Touch Down
 *
 */
$("#obj67190").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67190_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67190_onTap is still running");
	return;
}
var obj67190_onTap_runningActionsCount = 0;
var obj67190_onTap_loopCount = 0;
obj67190_onTap_actionGroup0();
});










/*
 *
 *   obj88513: Event Touch Down
 *
 */
$("#obj88513").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88513_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88513_onTap is still running");
	return;
}
var obj88513_onTap_runningActionsCount = 0;
var obj88513_onTap_loopCount = 0;
obj88513_onTap_actionGroup0();
});










/*
 *
 *   obj88508: Event Touch Down
 *
 */
$("#obj88508").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88508_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88508_onTap is still running");
	return;
}
var obj88508_onTap_runningActionsCount = 0;
var obj88508_onTap_loopCount = 0;
obj88508_onTap_actionGroup0();
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
	
$("#obj40808").trigger('SCEventShow');
$("#obj40792").trigger('SCEventShow');
$("#obj40789").trigger('SCEventShow');
$("#obj40787").trigger('SCEventShow');
$("#obj40785").trigger('SCEventShow');
$("#obj40783").trigger('SCEventShow');
$("#obj40781").trigger('SCEventShow');
$("#obj67198").trigger('SCEventShow');
$("#obj67190").trigger('SCEventShow');
$("#obj88513").trigger('SCEventShow');
$("#obj88508").trigger('SCEventShow');
$("#obj88518").trigger('SCEventShow');
$("#obj94903").trigger('SCEventShow');
$("#obj67204").trigger('SCEventShow');
	
});