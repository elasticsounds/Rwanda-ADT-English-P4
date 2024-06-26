pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 41534;
pubcoder.page.title = pubcoder.page.title || "139";
pubcoder.page.number = pubcoder.page.number || 139;
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
var obj41540_onTap_activeActionGroupIndex = -1;
var obj41540_onTap_runningActionsCount = 0;
var obj41540_onTap_loopCount = 0;
var obj41537_onTap_activeActionGroupIndex = -1;
var obj41537_onTap_runningActionsCount = 0;
var obj41537_onTap_loopCount = 0;
var obj67230_onTap_activeActionGroupIndex = -1;
var obj67230_onTap_runningActionsCount = 0;
var obj67230_onTap_loopCount = 0;
var obj67222_onTap_activeActionGroupIndex = -1;
var obj67222_onTap_runningActionsCount = 0;
var obj67222_onTap_loopCount = 0;
var obj88537_onTap_activeActionGroupIndex = -1;
var obj88537_onTap_runningActionsCount = 0;
var obj88537_onTap_loopCount = 0;
var obj88532_onTap_activeActionGroupIndex = -1;
var obj88532_onTap_runningActionsCount = 0;
var obj88532_onTap_loopCount = 0;
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
		
obj41540_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41540_onTap_activeActionGroupIndex = -1;
		$("#obj41540").trigger("obj41540_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41540) {
				console.warn("de-queueing event obj41540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41540_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41542();
function goToPage_41542() {
	window.obj41540_onTap_runningActionsCount = obj41540_onTap_runningActionsCount + 1;
	$("#anchor827")[0].click();
	window.obj41540_onTap_runningActionsCount = window.obj41540_onTap_runningActionsCount - 1;
if (window.obj41540_onTap_runningActionsCount < 0) {
	window.obj41540_onTap_runningActionsCount = 0;
} else if (window.obj41540_onTap_runningActionsCount == 0) {
	obj41540_onTap_actionGroup1();
}
}





















};
obj41540_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41540_onTap_activeActionGroupIndex = -1;
		$("#obj41540").trigger("obj41540_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41540) {
				console.warn("de-queueing event obj41540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41540_onTap_activeActionGroupIndex = 1;
	





















};
obj41537_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41537_onTap_activeActionGroupIndex = -1;
		$("#obj41537").trigger("obj41537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41537) {
				console.warn("de-queueing event obj41537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41537_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41539();
function goToPage_41539() {
	window.obj41537_onTap_runningActionsCount = obj41537_onTap_runningActionsCount + 1;
	$("#anchor828")[0].click();
	window.obj41537_onTap_runningActionsCount = window.obj41537_onTap_runningActionsCount - 1;
if (window.obj41537_onTap_runningActionsCount < 0) {
	window.obj41537_onTap_runningActionsCount = 0;
} else if (window.obj41537_onTap_runningActionsCount == 0) {
	obj41537_onTap_actionGroup1();
}
}





















};
obj41537_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41537_onTap_activeActionGroupIndex = -1;
		$("#obj41537").trigger("obj41537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41537) {
				console.warn("de-queueing event obj41537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41537_onTap_activeActionGroupIndex = 1;
	





















};
obj67230_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67230_onTap_activeActionGroupIndex = -1;
		$("#obj67230").trigger("obj67230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67230) {
				console.warn("de-queueing event obj67230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67230_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67230 
hide_67233();
function hide_67233() {
	var selector = "#obj67230";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67230_onTap_runningActionsCount = obj67230_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67230_onTap_runningActionsCount = window.obj67230_onTap_runningActionsCount - 1;
if (window.obj67230_onTap_runningActionsCount < 0) {
	window.obj67230_onTap_runningActionsCount = 0;
} else if (window.obj67230_onTap_runningActionsCount == 0) {
	obj67230_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67233(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67230_onTap_runningActionsCount = window.obj67230_onTap_runningActionsCount - 1;
if (window.obj67230_onTap_runningActionsCount < 0) {
	window.obj67230_onTap_runningActionsCount = 0;
} else if (window.obj67230_onTap_runningActionsCount == 0) {
	obj67230_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67236 
stopMovie_67232();
function stopMovie_67232() {
	window.obj67230_onTap_runningActionsCount = obj67230_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67236")[0];
	myVideo.pause();
	window.obj67230_onTap_runningActionsCount = window.obj67230_onTap_runningActionsCount - 1;
if (window.obj67230_onTap_runningActionsCount < 0) {
	window.obj67230_onTap_runningActionsCount = 0;
} else if (window.obj67230_onTap_runningActionsCount == 0) {
	obj67230_onTap_actionGroup1();
}
}
















};
obj67230_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67230_onTap_activeActionGroupIndex = -1;
		$("#obj67230").trigger("obj67230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67230) {
				console.warn("de-queueing event obj67230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67230_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67222
(function(){
	window.obj67230_onTap_runningActionsCount = obj67230_onTap_runningActionsCount + 1;

	var selector = "#obj67222";
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
					window.obj67230_onTap_runningActionsCount = window.obj67230_onTap_runningActionsCount - 1;
if (window.obj67230_onTap_runningActionsCount < 0) {
	window.obj67230_onTap_runningActionsCount = 0;
} else if (window.obj67230_onTap_runningActionsCount == 0) {
	obj67230_onTap_actionGroup2();
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
				window.obj67230_onTap_runningActionsCount = window.obj67230_onTap_runningActionsCount - 1;
if (window.obj67230_onTap_runningActionsCount < 0) {
	window.obj67230_onTap_runningActionsCount = 0;
} else if (window.obj67230_onTap_runningActionsCount == 0) {
	obj67230_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67230_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67230_onTap_activeActionGroupIndex = -1;
		$("#obj67230").trigger("obj67230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67230) {
				console.warn("de-queueing event obj67230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67230_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67236 
move_67235();
function move_67235() {
	window.obj67230_onTap_runningActionsCount = obj67230_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67236");
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
			window.obj67230_onTap_runningActionsCount = window.obj67230_onTap_runningActionsCount - 1;
if (window.obj67230_onTap_runningActionsCount < 0) {
	window.obj67230_onTap_runningActionsCount = 0;
} else if (window.obj67230_onTap_runningActionsCount == 0) {
	obj67230_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67230_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67230_onTap_activeActionGroupIndex = -1;
		$("#obj67230").trigger("obj67230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67230) {
				console.warn("de-queueing event obj67230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67230_onTap_activeActionGroupIndex = 3;
	





















};
obj67222_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67222_onTap_activeActionGroupIndex = -1;
		$("#obj67222").trigger("obj67222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67222) {
				console.warn("de-queueing event obj67222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67222_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67222 
hide_67225();
function hide_67225() {
	var selector = "#obj67222";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67222_onTap_runningActionsCount = obj67222_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67222_onTap_runningActionsCount = window.obj67222_onTap_runningActionsCount - 1;
if (window.obj67222_onTap_runningActionsCount < 0) {
	window.obj67222_onTap_runningActionsCount = 0;
} else if (window.obj67222_onTap_runningActionsCount == 0) {
	obj67222_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67225(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67222_onTap_runningActionsCount = window.obj67222_onTap_runningActionsCount - 1;
if (window.obj67222_onTap_runningActionsCount < 0) {
	window.obj67222_onTap_runningActionsCount = 0;
} else if (window.obj67222_onTap_runningActionsCount == 0) {
	obj67222_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67236 
playPauseMovie_67224();
function playPauseMovie_67224() {
	window.obj67222_onTap_runningActionsCount = obj67222_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67236")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67222_onTap_runningActionsCount = window.obj67222_onTap_runningActionsCount - 1;
if (window.obj67222_onTap_runningActionsCount < 0) {
	window.obj67222_onTap_runningActionsCount = 0;
} else if (window.obj67222_onTap_runningActionsCount == 0) {
	obj67222_onTap_actionGroup1();
}
}

















};
obj67222_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67222_onTap_activeActionGroupIndex = -1;
		$("#obj67222").trigger("obj67222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67222) {
				console.warn("de-queueing event obj67222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67222_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67230
(function(){
	window.obj67222_onTap_runningActionsCount = obj67222_onTap_runningActionsCount + 1;

	var selector = "#obj67230";
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
					window.obj67222_onTap_runningActionsCount = window.obj67222_onTap_runningActionsCount - 1;
if (window.obj67222_onTap_runningActionsCount < 0) {
	window.obj67222_onTap_runningActionsCount = 0;
} else if (window.obj67222_onTap_runningActionsCount == 0) {
	obj67222_onTap_actionGroup2();
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
				window.obj67222_onTap_runningActionsCount = window.obj67222_onTap_runningActionsCount - 1;
if (window.obj67222_onTap_runningActionsCount < 0) {
	window.obj67222_onTap_runningActionsCount = 0;
} else if (window.obj67222_onTap_runningActionsCount == 0) {
	obj67222_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67222_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67222_onTap_activeActionGroupIndex = -1;
		$("#obj67222").trigger("obj67222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67222) {
				console.warn("de-queueing event obj67222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67222_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67236 
move_67227();
function move_67227() {
	window.obj67222_onTap_runningActionsCount = obj67222_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67236");
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
			window.obj67222_onTap_runningActionsCount = window.obj67222_onTap_runningActionsCount - 1;
if (window.obj67222_onTap_runningActionsCount < 0) {
	window.obj67222_onTap_runningActionsCount = 0;
} else if (window.obj67222_onTap_runningActionsCount == 0) {
	obj67222_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67222_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67222_onTap_activeActionGroupIndex = -1;
		$("#obj67222").trigger("obj67222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67222) {
				console.warn("de-queueing event obj67222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67222_onTap_activeActionGroupIndex = 3;
	





















};
obj88537_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88537_onTap_activeActionGroupIndex = -1;
		$("#obj88537").trigger("obj88537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88537) {
				console.warn("de-queueing event obj88537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88537_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88542 
stopAudio_88539();
function stopAudio_88539() {
	window.obj88537_onTap_runningActionsCount = obj88537_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88542")[0];
	myAudio.pause();
	window.obj88537_onTap_runningActionsCount = window.obj88537_onTap_runningActionsCount - 1;
if (window.obj88537_onTap_runningActionsCount < 0) {
	window.obj88537_onTap_runningActionsCount = 0;
} else if (window.obj88537_onTap_runningActionsCount == 0) {
	obj88537_onTap_actionGroup1();
}
}








};
obj88537_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88537_onTap_activeActionGroupIndex = -1;
		$("#obj88537").trigger("obj88537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88537) {
				console.warn("de-queueing event obj88537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88537_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88537 
hide_88540();
function hide_88540() {
	var selector = "#obj88537";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88537_onTap_runningActionsCount = obj88537_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88537_onTap_runningActionsCount = window.obj88537_onTap_runningActionsCount - 1;
if (window.obj88537_onTap_runningActionsCount < 0) {
	window.obj88537_onTap_runningActionsCount = 0;
} else if (window.obj88537_onTap_runningActionsCount == 0) {
	obj88537_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88540(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88537_onTap_runningActionsCount = window.obj88537_onTap_runningActionsCount - 1;
if (window.obj88537_onTap_runningActionsCount < 0) {
	window.obj88537_onTap_runningActionsCount = 0;
} else if (window.obj88537_onTap_runningActionsCount == 0) {
	obj88537_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88537_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88537_onTap_activeActionGroupIndex = -1;
		$("#obj88537").trigger("obj88537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88537) {
				console.warn("de-queueing event obj88537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88537_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88532
(function(){
	window.obj88537_onTap_runningActionsCount = obj88537_onTap_runningActionsCount + 1;

	var selector = "#obj88532";
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
					window.obj88537_onTap_runningActionsCount = window.obj88537_onTap_runningActionsCount - 1;
if (window.obj88537_onTap_runningActionsCount < 0) {
	window.obj88537_onTap_runningActionsCount = 0;
} else if (window.obj88537_onTap_runningActionsCount == 0) {
	obj88537_onTap_actionGroup3();
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
				window.obj88537_onTap_runningActionsCount = window.obj88537_onTap_runningActionsCount - 1;
if (window.obj88537_onTap_runningActionsCount < 0) {
	window.obj88537_onTap_runningActionsCount = 0;
} else if (window.obj88537_onTap_runningActionsCount == 0) {
	obj88537_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88537_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88537_onTap_activeActionGroupIndex = -1;
		$("#obj88537").trigger("obj88537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88537) {
				console.warn("de-queueing event obj88537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88537_onTap_activeActionGroupIndex = 3;
	





















};
obj88532_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88532_onTap_activeActionGroupIndex = -1;
		$("#obj88532").trigger("obj88532_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88532) {
				console.warn("de-queueing event obj88532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88532_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88532 
hide_88534();
function hide_88534() {
	var selector = "#obj88532";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88532_onTap_runningActionsCount = obj88532_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88532_onTap_runningActionsCount = window.obj88532_onTap_runningActionsCount - 1;
if (window.obj88532_onTap_runningActionsCount < 0) {
	window.obj88532_onTap_runningActionsCount = 0;
} else if (window.obj88532_onTap_runningActionsCount == 0) {
	obj88532_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88534(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88532_onTap_runningActionsCount = window.obj88532_onTap_runningActionsCount - 1;
if (window.obj88532_onTap_runningActionsCount < 0) {
	window.obj88532_onTap_runningActionsCount = 0;
} else if (window.obj88532_onTap_runningActionsCount == 0) {
	obj88532_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88532_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88532_onTap_activeActionGroupIndex = -1;
		$("#obj88532").trigger("obj88532_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88532) {
				console.warn("de-queueing event obj88532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88532_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88537
(function(){
	window.obj88532_onTap_runningActionsCount = obj88532_onTap_runningActionsCount + 1;

	var selector = "#obj88537";
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
					window.obj88532_onTap_runningActionsCount = window.obj88532_onTap_runningActionsCount - 1;
if (window.obj88532_onTap_runningActionsCount < 0) {
	window.obj88532_onTap_runningActionsCount = 0;
} else if (window.obj88532_onTap_runningActionsCount == 0) {
	obj88532_onTap_actionGroup2();
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
				window.obj88532_onTap_runningActionsCount = window.obj88532_onTap_runningActionsCount - 1;
if (window.obj88532_onTap_runningActionsCount < 0) {
	window.obj88532_onTap_runningActionsCount = 0;
} else if (window.obj88532_onTap_runningActionsCount == 0) {
	obj88532_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88532_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88532_onTap_activeActionGroupIndex = -1;
		$("#obj88532").trigger("obj88532_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88532) {
				console.warn("de-queueing event obj88532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88532_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88542 
playAudio_88536();
function playAudio_88536() {
	window.obj88532_onTap_runningActionsCount = obj88532_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88542")[0];
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
		    window.obj88532_onTap_runningActionsCount = window.obj88532_onTap_runningActionsCount - 1;
if (window.obj88532_onTap_runningActionsCount < 0) {
	window.obj88532_onTap_runningActionsCount = 0;
} else if (window.obj88532_onTap_runningActionsCount == 0) {
	obj88532_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88532_onTap_runningActionsCount = window.obj88532_onTap_runningActionsCount - 1;
if (window.obj88532_onTap_runningActionsCount < 0) {
	window.obj88532_onTap_runningActionsCount = 0;
} else if (window.obj88532_onTap_runningActionsCount == 0) {
	obj88532_onTap_actionGroup3();
}
	}
}









};
obj88532_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88532_onTap_activeActionGroupIndex = -1;
		$("#obj88532").trigger("obj88532_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88532) {
				console.warn("de-queueing event obj88532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88532_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj41540: Event Touch Down
 *
 */
$("#obj41540").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41540_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41540_onTap is still running");
	return;
}
var obj41540_onTap_runningActionsCount = 0;
var obj41540_onTap_loopCount = 0;
obj41540_onTap_actionGroup0();
});










/*
 *
 *   obj41537: Event Touch Down
 *
 */
$("#obj41537").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41537_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41537_onTap is still running");
	return;
}
var obj41537_onTap_runningActionsCount = 0;
var obj41537_onTap_loopCount = 0;
obj41537_onTap_actionGroup0();
});


















































/*
 *
 *   obj67230: Event Touch Down
 *
 */
$("#obj67230").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67230_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67230_onTap is still running");
	return;
}
var obj67230_onTap_runningActionsCount = 0;
var obj67230_onTap_loopCount = 0;
obj67230_onTap_actionGroup0();
});










/*
 *
 *   obj67222: Event Touch Down
 *
 */
$("#obj67222").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67222_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67222_onTap is still running");
	return;
}
var obj67222_onTap_runningActionsCount = 0;
var obj67222_onTap_loopCount = 0;
obj67222_onTap_actionGroup0();
});










/*
 *
 *   obj88537: Event Touch Down
 *
 */
$("#obj88537").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88537_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88537_onTap is still running");
	return;
}
var obj88537_onTap_runningActionsCount = 0;
var obj88537_onTap_loopCount = 0;
obj88537_onTap_actionGroup0();
});










/*
 *
 *   obj88532: Event Touch Down
 *
 */
$("#obj88532").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88532_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88532_onTap is still running");
	return;
}
var obj88532_onTap_runningActionsCount = 0;
var obj88532_onTap_loopCount = 0;
obj88532_onTap_actionGroup0();
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
	
$("#obj41535").trigger('SCEventShow');
$("#obj41540").trigger('SCEventShow');
$("#obj41537").trigger('SCEventShow');
$("#obj41558").trigger('SCEventShow');
$("#obj41556").trigger('SCEventShow');
$("#obj41560").trigger('SCEventShow');
$("#obj41563").trigger('SCEventShow');
$("#obj67230").trigger('SCEventShow');
$("#obj67222").trigger('SCEventShow');
$("#obj88537").trigger('SCEventShow');
$("#obj88532").trigger('SCEventShow');
$("#obj88542").trigger('SCEventShow');
$("#obj94907").trigger('SCEventShow');
$("#obj67236").trigger('SCEventShow');
	
});