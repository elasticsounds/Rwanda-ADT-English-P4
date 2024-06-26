pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 2463;
pubcoder.page.title = pubcoder.page.title || "16";
pubcoder.page.number = pubcoder.page.number || 16;
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
var obj2469_onTap_activeActionGroupIndex = -1;
var obj2469_onTap_runningActionsCount = 0;
var obj2469_onTap_loopCount = 0;
var obj2466_onTap_activeActionGroupIndex = -1;
var obj2466_onTap_runningActionsCount = 0;
var obj2466_onTap_loopCount = 0;
var obj65214_onTap_activeActionGroupIndex = -1;
var obj65214_onTap_runningActionsCount = 0;
var obj65214_onTap_loopCount = 0;
var obj65206_onTap_activeActionGroupIndex = -1;
var obj65206_onTap_runningActionsCount = 0;
var obj65206_onTap_loopCount = 0;
var obj86993_onTap_activeActionGroupIndex = -1;
var obj86993_onTap_runningActionsCount = 0;
var obj86993_onTap_loopCount = 0;
var obj86988_onTap_activeActionGroupIndex = -1;
var obj86988_onTap_runningActionsCount = 0;
var obj86988_onTap_loopCount = 0;
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
		
obj2469_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2469_onTap_activeActionGroupIndex = -1;
		$("#obj2469").trigger("obj2469_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2469) {
				console.warn("de-queueing event obj2469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2469_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2471();
function goToPage_2471() {
	window.obj2469_onTap_runningActionsCount = obj2469_onTap_runningActionsCount + 1;
	$("#anchor104")[0].click();
	window.obj2469_onTap_runningActionsCount = window.obj2469_onTap_runningActionsCount - 1;
if (window.obj2469_onTap_runningActionsCount < 0) {
	window.obj2469_onTap_runningActionsCount = 0;
} else if (window.obj2469_onTap_runningActionsCount == 0) {
	obj2469_onTap_actionGroup1();
}
}





















};
obj2469_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2469_onTap_activeActionGroupIndex = -1;
		$("#obj2469").trigger("obj2469_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2469) {
				console.warn("de-queueing event obj2469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2469_onTap_activeActionGroupIndex = 1;
	





















};
obj2466_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2466_onTap_activeActionGroupIndex = -1;
		$("#obj2466").trigger("obj2466_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2466) {
				console.warn("de-queueing event obj2466." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2466").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2466_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2468();
function goToPage_2468() {
	window.obj2466_onTap_runningActionsCount = obj2466_onTap_runningActionsCount + 1;
	$("#anchor105")[0].click();
	window.obj2466_onTap_runningActionsCount = window.obj2466_onTap_runningActionsCount - 1;
if (window.obj2466_onTap_runningActionsCount < 0) {
	window.obj2466_onTap_runningActionsCount = 0;
} else if (window.obj2466_onTap_runningActionsCount == 0) {
	obj2466_onTap_actionGroup1();
}
}





















};
obj2466_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2466_onTap_activeActionGroupIndex = -1;
		$("#obj2466").trigger("obj2466_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2466) {
				console.warn("de-queueing event obj2466." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2466").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2466_onTap_activeActionGroupIndex = 1;
	





















};
obj65214_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65214_onTap_activeActionGroupIndex = -1;
		$("#obj65214").trigger("obj65214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65214) {
				console.warn("de-queueing event obj65214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65214_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65214 
hide_65217();
function hide_65217() {
	var selector = "#obj65214";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65214_onTap_runningActionsCount = obj65214_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65214_onTap_runningActionsCount = window.obj65214_onTap_runningActionsCount - 1;
if (window.obj65214_onTap_runningActionsCount < 0) {
	window.obj65214_onTap_runningActionsCount = 0;
} else if (window.obj65214_onTap_runningActionsCount == 0) {
	obj65214_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65217(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65214_onTap_runningActionsCount = window.obj65214_onTap_runningActionsCount - 1;
if (window.obj65214_onTap_runningActionsCount < 0) {
	window.obj65214_onTap_runningActionsCount = 0;
} else if (window.obj65214_onTap_runningActionsCount == 0) {
	obj65214_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65220 
stopMovie_65216();
function stopMovie_65216() {
	window.obj65214_onTap_runningActionsCount = obj65214_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65220")[0];
	myVideo.pause();
	window.obj65214_onTap_runningActionsCount = window.obj65214_onTap_runningActionsCount - 1;
if (window.obj65214_onTap_runningActionsCount < 0) {
	window.obj65214_onTap_runningActionsCount = 0;
} else if (window.obj65214_onTap_runningActionsCount == 0) {
	obj65214_onTap_actionGroup1();
}
}
















};
obj65214_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65214_onTap_activeActionGroupIndex = -1;
		$("#obj65214").trigger("obj65214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65214) {
				console.warn("de-queueing event obj65214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65214_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65206
(function(){
	window.obj65214_onTap_runningActionsCount = obj65214_onTap_runningActionsCount + 1;

	var selector = "#obj65206";
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
					window.obj65214_onTap_runningActionsCount = window.obj65214_onTap_runningActionsCount - 1;
if (window.obj65214_onTap_runningActionsCount < 0) {
	window.obj65214_onTap_runningActionsCount = 0;
} else if (window.obj65214_onTap_runningActionsCount == 0) {
	obj65214_onTap_actionGroup2();
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
				window.obj65214_onTap_runningActionsCount = window.obj65214_onTap_runningActionsCount - 1;
if (window.obj65214_onTap_runningActionsCount < 0) {
	window.obj65214_onTap_runningActionsCount = 0;
} else if (window.obj65214_onTap_runningActionsCount == 0) {
	obj65214_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65214_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65214_onTap_activeActionGroupIndex = -1;
		$("#obj65214").trigger("obj65214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65214) {
				console.warn("de-queueing event obj65214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65214_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65220 
move_65219();
function move_65219() {
	window.obj65214_onTap_runningActionsCount = obj65214_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65220");
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
			window.obj65214_onTap_runningActionsCount = window.obj65214_onTap_runningActionsCount - 1;
if (window.obj65214_onTap_runningActionsCount < 0) {
	window.obj65214_onTap_runningActionsCount = 0;
} else if (window.obj65214_onTap_runningActionsCount == 0) {
	obj65214_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65214_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65214_onTap_activeActionGroupIndex = -1;
		$("#obj65214").trigger("obj65214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65214) {
				console.warn("de-queueing event obj65214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65214_onTap_activeActionGroupIndex = 3;
	





















};
obj65206_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65206_onTap_activeActionGroupIndex = -1;
		$("#obj65206").trigger("obj65206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65206) {
				console.warn("de-queueing event obj65206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65206_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65206 
hide_65209();
function hide_65209() {
	var selector = "#obj65206";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65206_onTap_runningActionsCount = obj65206_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65206_onTap_runningActionsCount = window.obj65206_onTap_runningActionsCount - 1;
if (window.obj65206_onTap_runningActionsCount < 0) {
	window.obj65206_onTap_runningActionsCount = 0;
} else if (window.obj65206_onTap_runningActionsCount == 0) {
	obj65206_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65209(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65206_onTap_runningActionsCount = window.obj65206_onTap_runningActionsCount - 1;
if (window.obj65206_onTap_runningActionsCount < 0) {
	window.obj65206_onTap_runningActionsCount = 0;
} else if (window.obj65206_onTap_runningActionsCount == 0) {
	obj65206_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65220 
playPauseMovie_65208();
function playPauseMovie_65208() {
	window.obj65206_onTap_runningActionsCount = obj65206_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65220")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65206_onTap_runningActionsCount = window.obj65206_onTap_runningActionsCount - 1;
if (window.obj65206_onTap_runningActionsCount < 0) {
	window.obj65206_onTap_runningActionsCount = 0;
} else if (window.obj65206_onTap_runningActionsCount == 0) {
	obj65206_onTap_actionGroup1();
}
}

















};
obj65206_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65206_onTap_activeActionGroupIndex = -1;
		$("#obj65206").trigger("obj65206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65206) {
				console.warn("de-queueing event obj65206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65206_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65214
(function(){
	window.obj65206_onTap_runningActionsCount = obj65206_onTap_runningActionsCount + 1;

	var selector = "#obj65214";
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
					window.obj65206_onTap_runningActionsCount = window.obj65206_onTap_runningActionsCount - 1;
if (window.obj65206_onTap_runningActionsCount < 0) {
	window.obj65206_onTap_runningActionsCount = 0;
} else if (window.obj65206_onTap_runningActionsCount == 0) {
	obj65206_onTap_actionGroup2();
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
				window.obj65206_onTap_runningActionsCount = window.obj65206_onTap_runningActionsCount - 1;
if (window.obj65206_onTap_runningActionsCount < 0) {
	window.obj65206_onTap_runningActionsCount = 0;
} else if (window.obj65206_onTap_runningActionsCount == 0) {
	obj65206_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65206_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65206_onTap_activeActionGroupIndex = -1;
		$("#obj65206").trigger("obj65206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65206) {
				console.warn("de-queueing event obj65206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65206_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65220 
move_65211();
function move_65211() {
	window.obj65206_onTap_runningActionsCount = obj65206_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65220");
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
			window.obj65206_onTap_runningActionsCount = window.obj65206_onTap_runningActionsCount - 1;
if (window.obj65206_onTap_runningActionsCount < 0) {
	window.obj65206_onTap_runningActionsCount = 0;
} else if (window.obj65206_onTap_runningActionsCount == 0) {
	obj65206_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65206_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65206_onTap_activeActionGroupIndex = -1;
		$("#obj65206").trigger("obj65206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65206) {
				console.warn("de-queueing event obj65206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65206_onTap_activeActionGroupIndex = 3;
	





















};
obj86993_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86993_onTap_activeActionGroupIndex = -1;
		$("#obj86993").trigger("obj86993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86993) {
				console.warn("de-queueing event obj86993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86993_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86998 
stopAudio_86995();
function stopAudio_86995() {
	window.obj86993_onTap_runningActionsCount = obj86993_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86998")[0];
	myAudio.pause();
	window.obj86993_onTap_runningActionsCount = window.obj86993_onTap_runningActionsCount - 1;
if (window.obj86993_onTap_runningActionsCount < 0) {
	window.obj86993_onTap_runningActionsCount = 0;
} else if (window.obj86993_onTap_runningActionsCount == 0) {
	obj86993_onTap_actionGroup1();
}
}








};
obj86993_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86993_onTap_activeActionGroupIndex = -1;
		$("#obj86993").trigger("obj86993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86993) {
				console.warn("de-queueing event obj86993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86993_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86993 
hide_86996();
function hide_86996() {
	var selector = "#obj86993";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86993_onTap_runningActionsCount = obj86993_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86993_onTap_runningActionsCount = window.obj86993_onTap_runningActionsCount - 1;
if (window.obj86993_onTap_runningActionsCount < 0) {
	window.obj86993_onTap_runningActionsCount = 0;
} else if (window.obj86993_onTap_runningActionsCount == 0) {
	obj86993_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86996(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86993_onTap_runningActionsCount = window.obj86993_onTap_runningActionsCount - 1;
if (window.obj86993_onTap_runningActionsCount < 0) {
	window.obj86993_onTap_runningActionsCount = 0;
} else if (window.obj86993_onTap_runningActionsCount == 0) {
	obj86993_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86993_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86993_onTap_activeActionGroupIndex = -1;
		$("#obj86993").trigger("obj86993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86993) {
				console.warn("de-queueing event obj86993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86993_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86988
(function(){
	window.obj86993_onTap_runningActionsCount = obj86993_onTap_runningActionsCount + 1;

	var selector = "#obj86988";
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
					window.obj86993_onTap_runningActionsCount = window.obj86993_onTap_runningActionsCount - 1;
if (window.obj86993_onTap_runningActionsCount < 0) {
	window.obj86993_onTap_runningActionsCount = 0;
} else if (window.obj86993_onTap_runningActionsCount == 0) {
	obj86993_onTap_actionGroup3();
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
				window.obj86993_onTap_runningActionsCount = window.obj86993_onTap_runningActionsCount - 1;
if (window.obj86993_onTap_runningActionsCount < 0) {
	window.obj86993_onTap_runningActionsCount = 0;
} else if (window.obj86993_onTap_runningActionsCount == 0) {
	obj86993_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86993_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86993_onTap_activeActionGroupIndex = -1;
		$("#obj86993").trigger("obj86993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86993) {
				console.warn("de-queueing event obj86993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86993_onTap_activeActionGroupIndex = 3;
	





















};
obj86988_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86988_onTap_activeActionGroupIndex = -1;
		$("#obj86988").trigger("obj86988_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86988) {
				console.warn("de-queueing event obj86988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86988_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86988 
hide_86990();
function hide_86990() {
	var selector = "#obj86988";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86988_onTap_runningActionsCount = obj86988_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86988_onTap_runningActionsCount = window.obj86988_onTap_runningActionsCount - 1;
if (window.obj86988_onTap_runningActionsCount < 0) {
	window.obj86988_onTap_runningActionsCount = 0;
} else if (window.obj86988_onTap_runningActionsCount == 0) {
	obj86988_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86990(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86988_onTap_runningActionsCount = window.obj86988_onTap_runningActionsCount - 1;
if (window.obj86988_onTap_runningActionsCount < 0) {
	window.obj86988_onTap_runningActionsCount = 0;
} else if (window.obj86988_onTap_runningActionsCount == 0) {
	obj86988_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86988_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86988_onTap_activeActionGroupIndex = -1;
		$("#obj86988").trigger("obj86988_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86988) {
				console.warn("de-queueing event obj86988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86988_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86993
(function(){
	window.obj86988_onTap_runningActionsCount = obj86988_onTap_runningActionsCount + 1;

	var selector = "#obj86993";
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
					window.obj86988_onTap_runningActionsCount = window.obj86988_onTap_runningActionsCount - 1;
if (window.obj86988_onTap_runningActionsCount < 0) {
	window.obj86988_onTap_runningActionsCount = 0;
} else if (window.obj86988_onTap_runningActionsCount == 0) {
	obj86988_onTap_actionGroup2();
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
				window.obj86988_onTap_runningActionsCount = window.obj86988_onTap_runningActionsCount - 1;
if (window.obj86988_onTap_runningActionsCount < 0) {
	window.obj86988_onTap_runningActionsCount = 0;
} else if (window.obj86988_onTap_runningActionsCount == 0) {
	obj86988_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86988_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86988_onTap_activeActionGroupIndex = -1;
		$("#obj86988").trigger("obj86988_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86988) {
				console.warn("de-queueing event obj86988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86988_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86998 
playAudio_86992();
function playAudio_86992() {
	window.obj86988_onTap_runningActionsCount = obj86988_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86998")[0];
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
		    window.obj86988_onTap_runningActionsCount = window.obj86988_onTap_runningActionsCount - 1;
if (window.obj86988_onTap_runningActionsCount < 0) {
	window.obj86988_onTap_runningActionsCount = 0;
} else if (window.obj86988_onTap_runningActionsCount == 0) {
	obj86988_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86988_onTap_runningActionsCount = window.obj86988_onTap_runningActionsCount - 1;
if (window.obj86988_onTap_runningActionsCount < 0) {
	window.obj86988_onTap_runningActionsCount = 0;
} else if (window.obj86988_onTap_runningActionsCount == 0) {
	obj86988_onTap_actionGroup3();
}
	}
}









};
obj86988_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86988_onTap_activeActionGroupIndex = -1;
		$("#obj86988").trigger("obj86988_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86988) {
				console.warn("de-queueing event obj86988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86988_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj2469: Event Touch Down
 *
 */
$("#obj2469").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2469_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2469_onTap is still running");
	return;
}
var obj2469_onTap_runningActionsCount = 0;
var obj2469_onTap_loopCount = 0;
obj2469_onTap_actionGroup0();
});










/*
 *
 *   obj2466: Event Touch Down
 *
 */
$("#obj2466").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2466_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2466_onTap is still running");
	return;
}
var obj2466_onTap_runningActionsCount = 0;
var obj2466_onTap_loopCount = 0;
obj2466_onTap_actionGroup0();
});






























/*
 *
 *   obj65214: Event Touch Down
 *
 */
$("#obj65214").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65214_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65214_onTap is still running");
	return;
}
var obj65214_onTap_runningActionsCount = 0;
var obj65214_onTap_loopCount = 0;
obj65214_onTap_actionGroup0();
});










/*
 *
 *   obj65206: Event Touch Down
 *
 */
$("#obj65206").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65206_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65206_onTap is still running");
	return;
}
var obj65206_onTap_runningActionsCount = 0;
var obj65206_onTap_loopCount = 0;
obj65206_onTap_actionGroup0();
});










/*
 *
 *   obj86993: Event Touch Down
 *
 */
$("#obj86993").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86993_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86993_onTap is still running");
	return;
}
var obj86993_onTap_runningActionsCount = 0;
var obj86993_onTap_loopCount = 0;
obj86993_onTap_actionGroup0();
});










/*
 *
 *   obj86988: Event Touch Down
 *
 */
$("#obj86988").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86988_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86988_onTap is still running");
	return;
}
var obj86988_onTap_runningActionsCount = 0;
var obj86988_onTap_loopCount = 0;
obj86988_onTap_actionGroup0();
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
	
$("#obj2464").trigger('SCEventShow');
$("#obj2469").trigger('SCEventShow');
$("#obj2466").trigger('SCEventShow');
$("#obj2485").trigger('SCEventShow');
$("#obj2488").trigger('SCEventShow');
$("#obj65214").trigger('SCEventShow');
$("#obj65206").trigger('SCEventShow');
$("#obj86993").trigger('SCEventShow');
$("#obj86988").trigger('SCEventShow');
$("#obj86998").trigger('SCEventShow');
$("#obj94661").trigger('SCEventShow');
$("#obj65220").trigger('SCEventShow');
	
});