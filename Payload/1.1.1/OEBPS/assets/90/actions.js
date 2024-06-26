pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 23511;
pubcoder.page.title = pubcoder.page.title || "90";
pubcoder.page.number = pubcoder.page.number || 90;
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
var obj79098_onTap_activeActionGroupIndex = -1;
var obj79098_onTap_runningActionsCount = 0;
var obj79098_onTap_loopCount = 0;
var obj79095_onTap_activeActionGroupIndex = -1;
var obj79095_onTap_runningActionsCount = 0;
var obj79095_onTap_loopCount = 0;
var obj79067_onTap_activeActionGroupIndex = -1;
var obj79067_onTap_runningActionsCount = 0;
var obj79067_onTap_loopCount = 0;
var obj79059_onTap_activeActionGroupIndex = -1;
var obj79059_onTap_runningActionsCount = 0;
var obj79059_onTap_loopCount = 0;
var obj87949_onTap_activeActionGroupIndex = -1;
var obj87949_onTap_runningActionsCount = 0;
var obj87949_onTap_loopCount = 0;
var obj87944_onTap_activeActionGroupIndex = -1;
var obj87944_onTap_runningActionsCount = 0;
var obj87944_onTap_loopCount = 0;
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
		
obj79098_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79098_onTap_activeActionGroupIndex = -1;
		$("#obj79098").trigger("obj79098_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79098) {
				console.warn("de-queueing event obj79098." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79098").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79098_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79100();
function goToPage_79100() {
	window.obj79098_onTap_runningActionsCount = obj79098_onTap_runningActionsCount + 1;
	$("#anchor531")[0].click();
	window.obj79098_onTap_runningActionsCount = window.obj79098_onTap_runningActionsCount - 1;
if (window.obj79098_onTap_runningActionsCount < 0) {
	window.obj79098_onTap_runningActionsCount = 0;
} else if (window.obj79098_onTap_runningActionsCount == 0) {
	obj79098_onTap_actionGroup1();
}
}





















};
obj79098_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79098_onTap_activeActionGroupIndex = -1;
		$("#obj79098").trigger("obj79098_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79098) {
				console.warn("de-queueing event obj79098." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79098").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79098_onTap_activeActionGroupIndex = 1;
	





















};
obj79095_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79095_onTap_activeActionGroupIndex = -1;
		$("#obj79095").trigger("obj79095_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79095) {
				console.warn("de-queueing event obj79095." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79095").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79095_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79097();
function goToPage_79097() {
	window.obj79095_onTap_runningActionsCount = obj79095_onTap_runningActionsCount + 1;
	$("#anchor532")[0].click();
	window.obj79095_onTap_runningActionsCount = window.obj79095_onTap_runningActionsCount - 1;
if (window.obj79095_onTap_runningActionsCount < 0) {
	window.obj79095_onTap_runningActionsCount = 0;
} else if (window.obj79095_onTap_runningActionsCount == 0) {
	obj79095_onTap_actionGroup1();
}
}





















};
obj79095_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79095_onTap_activeActionGroupIndex = -1;
		$("#obj79095").trigger("obj79095_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79095) {
				console.warn("de-queueing event obj79095." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79095").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79095_onTap_activeActionGroupIndex = 1;
	





















};
obj79067_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79067_onTap_activeActionGroupIndex = -1;
		$("#obj79067").trigger("obj79067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79067) {
				console.warn("de-queueing event obj79067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79067_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj79067 
hide_79070();
function hide_79070() {
	var selector = "#obj79067";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79067_onTap_runningActionsCount = obj79067_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79067_onTap_runningActionsCount = window.obj79067_onTap_runningActionsCount - 1;
if (window.obj79067_onTap_runningActionsCount < 0) {
	window.obj79067_onTap_runningActionsCount = 0;
} else if (window.obj79067_onTap_runningActionsCount == 0) {
	obj79067_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79070(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79067_onTap_runningActionsCount = window.obj79067_onTap_runningActionsCount - 1;
if (window.obj79067_onTap_runningActionsCount < 0) {
	window.obj79067_onTap_runningActionsCount = 0;
} else if (window.obj79067_onTap_runningActionsCount == 0) {
	obj79067_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj79057 
stopMovie_79069();
function stopMovie_79069() {
	window.obj79067_onTap_runningActionsCount = obj79067_onTap_runningActionsCount + 1;
	var myVideo = $("#obj79057")[0];
	myVideo.pause();
	window.obj79067_onTap_runningActionsCount = window.obj79067_onTap_runningActionsCount - 1;
if (window.obj79067_onTap_runningActionsCount < 0) {
	window.obj79067_onTap_runningActionsCount = 0;
} else if (window.obj79067_onTap_runningActionsCount == 0) {
	obj79067_onTap_actionGroup1();
}
}
















};
obj79067_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79067_onTap_activeActionGroupIndex = -1;
		$("#obj79067").trigger("obj79067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79067) {
				console.warn("de-queueing event obj79067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79067_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj79059
(function(){
	window.obj79067_onTap_runningActionsCount = obj79067_onTap_runningActionsCount + 1;

	var selector = "#obj79059";
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
					window.obj79067_onTap_runningActionsCount = window.obj79067_onTap_runningActionsCount - 1;
if (window.obj79067_onTap_runningActionsCount < 0) {
	window.obj79067_onTap_runningActionsCount = 0;
} else if (window.obj79067_onTap_runningActionsCount == 0) {
	obj79067_onTap_actionGroup2();
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
				window.obj79067_onTap_runningActionsCount = window.obj79067_onTap_runningActionsCount - 1;
if (window.obj79067_onTap_runningActionsCount < 0) {
	window.obj79067_onTap_runningActionsCount = 0;
} else if (window.obj79067_onTap_runningActionsCount == 0) {
	obj79067_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79067_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79067_onTap_activeActionGroupIndex = -1;
		$("#obj79067").trigger("obj79067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79067) {
				console.warn("de-queueing event obj79067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79067_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj79057 
move_79072();
function move_79072() {
	window.obj79067_onTap_runningActionsCount = obj79067_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj79057");
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
			window.obj79067_onTap_runningActionsCount = window.obj79067_onTap_runningActionsCount - 1;
if (window.obj79067_onTap_runningActionsCount < 0) {
	window.obj79067_onTap_runningActionsCount = 0;
} else if (window.obj79067_onTap_runningActionsCount == 0) {
	obj79067_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj79067_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79067_onTap_activeActionGroupIndex = -1;
		$("#obj79067").trigger("obj79067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79067) {
				console.warn("de-queueing event obj79067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79067_onTap_activeActionGroupIndex = 3;
	





















};
obj79059_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79059_onTap_activeActionGroupIndex = -1;
		$("#obj79059").trigger("obj79059_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79059) {
				console.warn("de-queueing event obj79059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79059_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj79059 
hide_79062();
function hide_79062() {
	var selector = "#obj79059";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79059_onTap_runningActionsCount = obj79059_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79059_onTap_runningActionsCount = window.obj79059_onTap_runningActionsCount - 1;
if (window.obj79059_onTap_runningActionsCount < 0) {
	window.obj79059_onTap_runningActionsCount = 0;
} else if (window.obj79059_onTap_runningActionsCount == 0) {
	obj79059_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79062(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79059_onTap_runningActionsCount = window.obj79059_onTap_runningActionsCount - 1;
if (window.obj79059_onTap_runningActionsCount < 0) {
	window.obj79059_onTap_runningActionsCount = 0;
} else if (window.obj79059_onTap_runningActionsCount == 0) {
	obj79059_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj79057 
playPauseMovie_79061();
function playPauseMovie_79061() {
	window.obj79059_onTap_runningActionsCount = obj79059_onTap_runningActionsCount + 1;
	var myVideo = $("#obj79057")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj79059_onTap_runningActionsCount = window.obj79059_onTap_runningActionsCount - 1;
if (window.obj79059_onTap_runningActionsCount < 0) {
	window.obj79059_onTap_runningActionsCount = 0;
} else if (window.obj79059_onTap_runningActionsCount == 0) {
	obj79059_onTap_actionGroup1();
}
}

















};
obj79059_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79059_onTap_activeActionGroupIndex = -1;
		$("#obj79059").trigger("obj79059_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79059) {
				console.warn("de-queueing event obj79059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79059_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj79067
(function(){
	window.obj79059_onTap_runningActionsCount = obj79059_onTap_runningActionsCount + 1;

	var selector = "#obj79067";
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
					window.obj79059_onTap_runningActionsCount = window.obj79059_onTap_runningActionsCount - 1;
if (window.obj79059_onTap_runningActionsCount < 0) {
	window.obj79059_onTap_runningActionsCount = 0;
} else if (window.obj79059_onTap_runningActionsCount == 0) {
	obj79059_onTap_actionGroup2();
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
				window.obj79059_onTap_runningActionsCount = window.obj79059_onTap_runningActionsCount - 1;
if (window.obj79059_onTap_runningActionsCount < 0) {
	window.obj79059_onTap_runningActionsCount = 0;
} else if (window.obj79059_onTap_runningActionsCount == 0) {
	obj79059_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79059_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79059_onTap_activeActionGroupIndex = -1;
		$("#obj79059").trigger("obj79059_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79059) {
				console.warn("de-queueing event obj79059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79059_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj79057 
move_79064();
function move_79064() {
	window.obj79059_onTap_runningActionsCount = obj79059_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj79057");
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
			window.obj79059_onTap_runningActionsCount = window.obj79059_onTap_runningActionsCount - 1;
if (window.obj79059_onTap_runningActionsCount < 0) {
	window.obj79059_onTap_runningActionsCount = 0;
} else if (window.obj79059_onTap_runningActionsCount == 0) {
	obj79059_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj79059_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79059_onTap_activeActionGroupIndex = -1;
		$("#obj79059").trigger("obj79059_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79059) {
				console.warn("de-queueing event obj79059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79059_onTap_activeActionGroupIndex = 3;
	





















};
obj87949_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87949_onTap_activeActionGroupIndex = -1;
		$("#obj87949").trigger("obj87949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87949) {
				console.warn("de-queueing event obj87949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87949_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87954 
stopAudio_87951();
function stopAudio_87951() {
	window.obj87949_onTap_runningActionsCount = obj87949_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87954")[0];
	myAudio.pause();
	window.obj87949_onTap_runningActionsCount = window.obj87949_onTap_runningActionsCount - 1;
if (window.obj87949_onTap_runningActionsCount < 0) {
	window.obj87949_onTap_runningActionsCount = 0;
} else if (window.obj87949_onTap_runningActionsCount == 0) {
	obj87949_onTap_actionGroup1();
}
}








};
obj87949_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87949_onTap_activeActionGroupIndex = -1;
		$("#obj87949").trigger("obj87949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87949) {
				console.warn("de-queueing event obj87949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87949_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87949 
hide_87952();
function hide_87952() {
	var selector = "#obj87949";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87949_onTap_runningActionsCount = obj87949_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87949_onTap_runningActionsCount = window.obj87949_onTap_runningActionsCount - 1;
if (window.obj87949_onTap_runningActionsCount < 0) {
	window.obj87949_onTap_runningActionsCount = 0;
} else if (window.obj87949_onTap_runningActionsCount == 0) {
	obj87949_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87952(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87949_onTap_runningActionsCount = window.obj87949_onTap_runningActionsCount - 1;
if (window.obj87949_onTap_runningActionsCount < 0) {
	window.obj87949_onTap_runningActionsCount = 0;
} else if (window.obj87949_onTap_runningActionsCount == 0) {
	obj87949_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87949_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87949_onTap_activeActionGroupIndex = -1;
		$("#obj87949").trigger("obj87949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87949) {
				console.warn("de-queueing event obj87949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87949_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87944
(function(){
	window.obj87949_onTap_runningActionsCount = obj87949_onTap_runningActionsCount + 1;

	var selector = "#obj87944";
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
					window.obj87949_onTap_runningActionsCount = window.obj87949_onTap_runningActionsCount - 1;
if (window.obj87949_onTap_runningActionsCount < 0) {
	window.obj87949_onTap_runningActionsCount = 0;
} else if (window.obj87949_onTap_runningActionsCount == 0) {
	obj87949_onTap_actionGroup3();
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
				window.obj87949_onTap_runningActionsCount = window.obj87949_onTap_runningActionsCount - 1;
if (window.obj87949_onTap_runningActionsCount < 0) {
	window.obj87949_onTap_runningActionsCount = 0;
} else if (window.obj87949_onTap_runningActionsCount == 0) {
	obj87949_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87949_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87949_onTap_activeActionGroupIndex = -1;
		$("#obj87949").trigger("obj87949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87949) {
				console.warn("de-queueing event obj87949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87949_onTap_activeActionGroupIndex = 3;
	





















};
obj87944_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87944_onTap_activeActionGroupIndex = -1;
		$("#obj87944").trigger("obj87944_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87944) {
				console.warn("de-queueing event obj87944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87944_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87944 
hide_87946();
function hide_87946() {
	var selector = "#obj87944";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87944_onTap_runningActionsCount = obj87944_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87944_onTap_runningActionsCount = window.obj87944_onTap_runningActionsCount - 1;
if (window.obj87944_onTap_runningActionsCount < 0) {
	window.obj87944_onTap_runningActionsCount = 0;
} else if (window.obj87944_onTap_runningActionsCount == 0) {
	obj87944_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87946(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87944_onTap_runningActionsCount = window.obj87944_onTap_runningActionsCount - 1;
if (window.obj87944_onTap_runningActionsCount < 0) {
	window.obj87944_onTap_runningActionsCount = 0;
} else if (window.obj87944_onTap_runningActionsCount == 0) {
	obj87944_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87944_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87944_onTap_activeActionGroupIndex = -1;
		$("#obj87944").trigger("obj87944_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87944) {
				console.warn("de-queueing event obj87944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87944_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87949
(function(){
	window.obj87944_onTap_runningActionsCount = obj87944_onTap_runningActionsCount + 1;

	var selector = "#obj87949";
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
					window.obj87944_onTap_runningActionsCount = window.obj87944_onTap_runningActionsCount - 1;
if (window.obj87944_onTap_runningActionsCount < 0) {
	window.obj87944_onTap_runningActionsCount = 0;
} else if (window.obj87944_onTap_runningActionsCount == 0) {
	obj87944_onTap_actionGroup2();
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
				window.obj87944_onTap_runningActionsCount = window.obj87944_onTap_runningActionsCount - 1;
if (window.obj87944_onTap_runningActionsCount < 0) {
	window.obj87944_onTap_runningActionsCount = 0;
} else if (window.obj87944_onTap_runningActionsCount == 0) {
	obj87944_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87944_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87944_onTap_activeActionGroupIndex = -1;
		$("#obj87944").trigger("obj87944_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87944) {
				console.warn("de-queueing event obj87944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87944_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87954 
playAudio_87948();
function playAudio_87948() {
	window.obj87944_onTap_runningActionsCount = obj87944_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87954")[0];
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
		    window.obj87944_onTap_runningActionsCount = window.obj87944_onTap_runningActionsCount - 1;
if (window.obj87944_onTap_runningActionsCount < 0) {
	window.obj87944_onTap_runningActionsCount = 0;
} else if (window.obj87944_onTap_runningActionsCount == 0) {
	obj87944_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87944_onTap_runningActionsCount = window.obj87944_onTap_runningActionsCount - 1;
if (window.obj87944_onTap_runningActionsCount < 0) {
	window.obj87944_onTap_runningActionsCount = 0;
} else if (window.obj87944_onTap_runningActionsCount == 0) {
	obj87944_onTap_actionGroup3();
}
	}
}









};
obj87944_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87944_onTap_activeActionGroupIndex = -1;
		$("#obj87944").trigger("obj87944_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87944) {
				console.warn("de-queueing event obj87944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87944_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj79098: Event Touch Down
 *
 */
$("#obj79098").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79098_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79098_onTap is still running");
	return;
}
var obj79098_onTap_runningActionsCount = 0;
var obj79098_onTap_loopCount = 0;
obj79098_onTap_actionGroup0();
});










/*
 *
 *   obj79095: Event Touch Down
 *
 */
$("#obj79095").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79095_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79095_onTap is still running");
	return;
}
var obj79095_onTap_runningActionsCount = 0;
var obj79095_onTap_loopCount = 0;
obj79095_onTap_actionGroup0();
});




























































/*
 *
 *   obj79067: Event Touch Down
 *
 */
$("#obj79067").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79067_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79067_onTap is still running");
	return;
}
var obj79067_onTap_runningActionsCount = 0;
var obj79067_onTap_loopCount = 0;
obj79067_onTap_actionGroup0();
});










/*
 *
 *   obj79059: Event Touch Down
 *
 */
$("#obj79059").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79059_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79059_onTap is still running");
	return;
}
var obj79059_onTap_runningActionsCount = 0;
var obj79059_onTap_loopCount = 0;
obj79059_onTap_actionGroup0();
});










/*
 *
 *   obj87949: Event Touch Down
 *
 */
$("#obj87949").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87949_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87949_onTap is still running");
	return;
}
var obj87949_onTap_runningActionsCount = 0;
var obj87949_onTap_loopCount = 0;
obj87949_onTap_actionGroup0();
});










/*
 *
 *   obj87944: Event Touch Down
 *
 */
$("#obj87944").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87944_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87944_onTap is still running");
	return;
}
var obj87944_onTap_runningActionsCount = 0;
var obj87944_onTap_loopCount = 0;
obj87944_onTap_actionGroup0();
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
	
$("#obj79101").trigger('SCEventShow');
$("#obj79098").trigger('SCEventShow');
$("#obj79095").trigger('SCEventShow');
$("#obj79093").trigger('SCEventShow');
$("#obj79091").trigger('SCEventShow');
$("#obj79089").trigger('SCEventShow');
$("#obj79087").trigger('SCEventShow');
$("#obj79085").trigger('SCEventShow');
$("#obj79067").trigger('SCEventShow');
$("#obj79059").trigger('SCEventShow');
$("#obj87949").trigger('SCEventShow');
$("#obj87944").trigger('SCEventShow');
$("#obj87954").trigger('SCEventShow');
$("#obj94809").trigger('SCEventShow');
$("#obj79057").trigger('SCEventShow');
	
});