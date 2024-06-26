pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 51600;
pubcoder.page.title = pubcoder.page.title || "183";
pubcoder.page.number = pubcoder.page.number || 183;
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
var obj51614_onTap_activeActionGroupIndex = -1;
var obj51614_onTap_runningActionsCount = 0;
var obj51614_onTap_loopCount = 0;
var obj51611_onTap_activeActionGroupIndex = -1;
var obj51611_onTap_runningActionsCount = 0;
var obj51611_onTap_loopCount = 0;
var obj67950_onTap_activeActionGroupIndex = -1;
var obj67950_onTap_runningActionsCount = 0;
var obj67950_onTap_loopCount = 0;
var obj67942_onTap_activeActionGroupIndex = -1;
var obj67942_onTap_runningActionsCount = 0;
var obj67942_onTap_loopCount = 0;
var obj89077_onTap_activeActionGroupIndex = -1;
var obj89077_onTap_runningActionsCount = 0;
var obj89077_onTap_loopCount = 0;
var obj89072_onTap_activeActionGroupIndex = -1;
var obj89072_onTap_runningActionsCount = 0;
var obj89072_onTap_loopCount = 0;
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
		
obj51614_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51614_onTap_activeActionGroupIndex = -1;
		$("#obj51614").trigger("obj51614_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51614) {
				console.warn("de-queueing event obj51614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51614_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_51616();
function goToPage_51616() {
	window.obj51614_onTap_runningActionsCount = obj51614_onTap_runningActionsCount + 1;
	$("#anchor1078")[0].click();
	window.obj51614_onTap_runningActionsCount = window.obj51614_onTap_runningActionsCount - 1;
if (window.obj51614_onTap_runningActionsCount < 0) {
	window.obj51614_onTap_runningActionsCount = 0;
} else if (window.obj51614_onTap_runningActionsCount == 0) {
	obj51614_onTap_actionGroup1();
}
}





















};
obj51614_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51614_onTap_activeActionGroupIndex = -1;
		$("#obj51614").trigger("obj51614_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51614) {
				console.warn("de-queueing event obj51614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51614_onTap_activeActionGroupIndex = 1;
	





















};
obj51611_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51611_onTap_activeActionGroupIndex = -1;
		$("#obj51611").trigger("obj51611_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51611) {
				console.warn("de-queueing event obj51611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51611_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_51613();
function goToPage_51613() {
	window.obj51611_onTap_runningActionsCount = obj51611_onTap_runningActionsCount + 1;
	$("#anchor1079")[0].click();
	window.obj51611_onTap_runningActionsCount = window.obj51611_onTap_runningActionsCount - 1;
if (window.obj51611_onTap_runningActionsCount < 0) {
	window.obj51611_onTap_runningActionsCount = 0;
} else if (window.obj51611_onTap_runningActionsCount == 0) {
	obj51611_onTap_actionGroup1();
}
}





















};
obj51611_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51611_onTap_activeActionGroupIndex = -1;
		$("#obj51611").trigger("obj51611_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51611) {
				console.warn("de-queueing event obj51611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51611_onTap_activeActionGroupIndex = 1;
	





















};
obj67950_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67950_onTap_activeActionGroupIndex = -1;
		$("#obj67950").trigger("obj67950_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67950) {
				console.warn("de-queueing event obj67950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67950_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67950 
hide_67953();
function hide_67953() {
	var selector = "#obj67950";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67950_onTap_runningActionsCount = obj67950_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67950_onTap_runningActionsCount = window.obj67950_onTap_runningActionsCount - 1;
if (window.obj67950_onTap_runningActionsCount < 0) {
	window.obj67950_onTap_runningActionsCount = 0;
} else if (window.obj67950_onTap_runningActionsCount == 0) {
	obj67950_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67953(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67950_onTap_runningActionsCount = window.obj67950_onTap_runningActionsCount - 1;
if (window.obj67950_onTap_runningActionsCount < 0) {
	window.obj67950_onTap_runningActionsCount = 0;
} else if (window.obj67950_onTap_runningActionsCount == 0) {
	obj67950_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67956 
stopMovie_67952();
function stopMovie_67952() {
	window.obj67950_onTap_runningActionsCount = obj67950_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67956")[0];
	myVideo.pause();
	window.obj67950_onTap_runningActionsCount = window.obj67950_onTap_runningActionsCount - 1;
if (window.obj67950_onTap_runningActionsCount < 0) {
	window.obj67950_onTap_runningActionsCount = 0;
} else if (window.obj67950_onTap_runningActionsCount == 0) {
	obj67950_onTap_actionGroup1();
}
}
















};
obj67950_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67950_onTap_activeActionGroupIndex = -1;
		$("#obj67950").trigger("obj67950_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67950) {
				console.warn("de-queueing event obj67950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67950_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67942
(function(){
	window.obj67950_onTap_runningActionsCount = obj67950_onTap_runningActionsCount + 1;

	var selector = "#obj67942";
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
					window.obj67950_onTap_runningActionsCount = window.obj67950_onTap_runningActionsCount - 1;
if (window.obj67950_onTap_runningActionsCount < 0) {
	window.obj67950_onTap_runningActionsCount = 0;
} else if (window.obj67950_onTap_runningActionsCount == 0) {
	obj67950_onTap_actionGroup2();
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
				window.obj67950_onTap_runningActionsCount = window.obj67950_onTap_runningActionsCount - 1;
if (window.obj67950_onTap_runningActionsCount < 0) {
	window.obj67950_onTap_runningActionsCount = 0;
} else if (window.obj67950_onTap_runningActionsCount == 0) {
	obj67950_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67950_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67950_onTap_activeActionGroupIndex = -1;
		$("#obj67950").trigger("obj67950_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67950) {
				console.warn("de-queueing event obj67950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67950_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67956 
move_67955();
function move_67955() {
	window.obj67950_onTap_runningActionsCount = obj67950_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67956");
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
			window.obj67950_onTap_runningActionsCount = window.obj67950_onTap_runningActionsCount - 1;
if (window.obj67950_onTap_runningActionsCount < 0) {
	window.obj67950_onTap_runningActionsCount = 0;
} else if (window.obj67950_onTap_runningActionsCount == 0) {
	obj67950_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67950_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67950_onTap_activeActionGroupIndex = -1;
		$("#obj67950").trigger("obj67950_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67950) {
				console.warn("de-queueing event obj67950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67950_onTap_activeActionGroupIndex = 3;
	





















};
obj67942_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67942_onTap_activeActionGroupIndex = -1;
		$("#obj67942").trigger("obj67942_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67942) {
				console.warn("de-queueing event obj67942." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67942").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67942_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67942 
hide_67945();
function hide_67945() {
	var selector = "#obj67942";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67942_onTap_runningActionsCount = obj67942_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67942_onTap_runningActionsCount = window.obj67942_onTap_runningActionsCount - 1;
if (window.obj67942_onTap_runningActionsCount < 0) {
	window.obj67942_onTap_runningActionsCount = 0;
} else if (window.obj67942_onTap_runningActionsCount == 0) {
	obj67942_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67945(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67942_onTap_runningActionsCount = window.obj67942_onTap_runningActionsCount - 1;
if (window.obj67942_onTap_runningActionsCount < 0) {
	window.obj67942_onTap_runningActionsCount = 0;
} else if (window.obj67942_onTap_runningActionsCount == 0) {
	obj67942_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67956 
playPauseMovie_67944();
function playPauseMovie_67944() {
	window.obj67942_onTap_runningActionsCount = obj67942_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67956")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67942_onTap_runningActionsCount = window.obj67942_onTap_runningActionsCount - 1;
if (window.obj67942_onTap_runningActionsCount < 0) {
	window.obj67942_onTap_runningActionsCount = 0;
} else if (window.obj67942_onTap_runningActionsCount == 0) {
	obj67942_onTap_actionGroup1();
}
}

















};
obj67942_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67942_onTap_activeActionGroupIndex = -1;
		$("#obj67942").trigger("obj67942_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67942) {
				console.warn("de-queueing event obj67942." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67942").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67942_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67950
(function(){
	window.obj67942_onTap_runningActionsCount = obj67942_onTap_runningActionsCount + 1;

	var selector = "#obj67950";
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
					window.obj67942_onTap_runningActionsCount = window.obj67942_onTap_runningActionsCount - 1;
if (window.obj67942_onTap_runningActionsCount < 0) {
	window.obj67942_onTap_runningActionsCount = 0;
} else if (window.obj67942_onTap_runningActionsCount == 0) {
	obj67942_onTap_actionGroup2();
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
				window.obj67942_onTap_runningActionsCount = window.obj67942_onTap_runningActionsCount - 1;
if (window.obj67942_onTap_runningActionsCount < 0) {
	window.obj67942_onTap_runningActionsCount = 0;
} else if (window.obj67942_onTap_runningActionsCount == 0) {
	obj67942_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67942_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67942_onTap_activeActionGroupIndex = -1;
		$("#obj67942").trigger("obj67942_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67942) {
				console.warn("de-queueing event obj67942." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67942").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67942_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67956 
move_67947();
function move_67947() {
	window.obj67942_onTap_runningActionsCount = obj67942_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67956");
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
			window.obj67942_onTap_runningActionsCount = window.obj67942_onTap_runningActionsCount - 1;
if (window.obj67942_onTap_runningActionsCount < 0) {
	window.obj67942_onTap_runningActionsCount = 0;
} else if (window.obj67942_onTap_runningActionsCount == 0) {
	obj67942_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67942_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67942_onTap_activeActionGroupIndex = -1;
		$("#obj67942").trigger("obj67942_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67942) {
				console.warn("de-queueing event obj67942." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67942").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67942_onTap_activeActionGroupIndex = 3;
	





















};
obj89077_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89077_onTap_activeActionGroupIndex = -1;
		$("#obj89077").trigger("obj89077_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89077) {
				console.warn("de-queueing event obj89077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89077_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89082 
stopAudio_89079();
function stopAudio_89079() {
	window.obj89077_onTap_runningActionsCount = obj89077_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89082")[0];
	myAudio.pause();
	window.obj89077_onTap_runningActionsCount = window.obj89077_onTap_runningActionsCount - 1;
if (window.obj89077_onTap_runningActionsCount < 0) {
	window.obj89077_onTap_runningActionsCount = 0;
} else if (window.obj89077_onTap_runningActionsCount == 0) {
	obj89077_onTap_actionGroup1();
}
}








};
obj89077_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89077_onTap_activeActionGroupIndex = -1;
		$("#obj89077").trigger("obj89077_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89077) {
				console.warn("de-queueing event obj89077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89077_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89077 
hide_89080();
function hide_89080() {
	var selector = "#obj89077";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89077_onTap_runningActionsCount = obj89077_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89077_onTap_runningActionsCount = window.obj89077_onTap_runningActionsCount - 1;
if (window.obj89077_onTap_runningActionsCount < 0) {
	window.obj89077_onTap_runningActionsCount = 0;
} else if (window.obj89077_onTap_runningActionsCount == 0) {
	obj89077_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89080(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89077_onTap_runningActionsCount = window.obj89077_onTap_runningActionsCount - 1;
if (window.obj89077_onTap_runningActionsCount < 0) {
	window.obj89077_onTap_runningActionsCount = 0;
} else if (window.obj89077_onTap_runningActionsCount == 0) {
	obj89077_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89077_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89077_onTap_activeActionGroupIndex = -1;
		$("#obj89077").trigger("obj89077_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89077) {
				console.warn("de-queueing event obj89077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89077_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89072
(function(){
	window.obj89077_onTap_runningActionsCount = obj89077_onTap_runningActionsCount + 1;

	var selector = "#obj89072";
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
					window.obj89077_onTap_runningActionsCount = window.obj89077_onTap_runningActionsCount - 1;
if (window.obj89077_onTap_runningActionsCount < 0) {
	window.obj89077_onTap_runningActionsCount = 0;
} else if (window.obj89077_onTap_runningActionsCount == 0) {
	obj89077_onTap_actionGroup3();
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
				window.obj89077_onTap_runningActionsCount = window.obj89077_onTap_runningActionsCount - 1;
if (window.obj89077_onTap_runningActionsCount < 0) {
	window.obj89077_onTap_runningActionsCount = 0;
} else if (window.obj89077_onTap_runningActionsCount == 0) {
	obj89077_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89077_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89077_onTap_activeActionGroupIndex = -1;
		$("#obj89077").trigger("obj89077_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89077) {
				console.warn("de-queueing event obj89077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89077_onTap_activeActionGroupIndex = 3;
	





















};
obj89072_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89072_onTap_activeActionGroupIndex = -1;
		$("#obj89072").trigger("obj89072_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89072) {
				console.warn("de-queueing event obj89072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89072_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89072 
hide_89074();
function hide_89074() {
	var selector = "#obj89072";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89072_onTap_runningActionsCount = obj89072_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89072_onTap_runningActionsCount = window.obj89072_onTap_runningActionsCount - 1;
if (window.obj89072_onTap_runningActionsCount < 0) {
	window.obj89072_onTap_runningActionsCount = 0;
} else if (window.obj89072_onTap_runningActionsCount == 0) {
	obj89072_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89074(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89072_onTap_runningActionsCount = window.obj89072_onTap_runningActionsCount - 1;
if (window.obj89072_onTap_runningActionsCount < 0) {
	window.obj89072_onTap_runningActionsCount = 0;
} else if (window.obj89072_onTap_runningActionsCount == 0) {
	obj89072_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89072_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89072_onTap_activeActionGroupIndex = -1;
		$("#obj89072").trigger("obj89072_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89072) {
				console.warn("de-queueing event obj89072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89072_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89077
(function(){
	window.obj89072_onTap_runningActionsCount = obj89072_onTap_runningActionsCount + 1;

	var selector = "#obj89077";
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
					window.obj89072_onTap_runningActionsCount = window.obj89072_onTap_runningActionsCount - 1;
if (window.obj89072_onTap_runningActionsCount < 0) {
	window.obj89072_onTap_runningActionsCount = 0;
} else if (window.obj89072_onTap_runningActionsCount == 0) {
	obj89072_onTap_actionGroup2();
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
				window.obj89072_onTap_runningActionsCount = window.obj89072_onTap_runningActionsCount - 1;
if (window.obj89072_onTap_runningActionsCount < 0) {
	window.obj89072_onTap_runningActionsCount = 0;
} else if (window.obj89072_onTap_runningActionsCount == 0) {
	obj89072_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89072_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89072_onTap_activeActionGroupIndex = -1;
		$("#obj89072").trigger("obj89072_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89072) {
				console.warn("de-queueing event obj89072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89072_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89082 
playAudio_89076();
function playAudio_89076() {
	window.obj89072_onTap_runningActionsCount = obj89072_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89082")[0];
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
		    window.obj89072_onTap_runningActionsCount = window.obj89072_onTap_runningActionsCount - 1;
if (window.obj89072_onTap_runningActionsCount < 0) {
	window.obj89072_onTap_runningActionsCount = 0;
} else if (window.obj89072_onTap_runningActionsCount == 0) {
	obj89072_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89072_onTap_runningActionsCount = window.obj89072_onTap_runningActionsCount - 1;
if (window.obj89072_onTap_runningActionsCount < 0) {
	window.obj89072_onTap_runningActionsCount = 0;
} else if (window.obj89072_onTap_runningActionsCount == 0) {
	obj89072_onTap_actionGroup3();
}
	}
}









};
obj89072_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89072_onTap_activeActionGroupIndex = -1;
		$("#obj89072").trigger("obj89072_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89072) {
				console.warn("de-queueing event obj89072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89072_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj51614: Event Touch Down
 *
 */
$("#obj51614").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj51614_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51614_onTap is still running");
	return;
}
var obj51614_onTap_runningActionsCount = 0;
var obj51614_onTap_loopCount = 0;
obj51614_onTap_actionGroup0();
});










/*
 *
 *   obj51611: Event Touch Down
 *
 */
$("#obj51611").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj51611_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51611_onTap is still running");
	return;
}
var obj51611_onTap_runningActionsCount = 0;
var obj51611_onTap_loopCount = 0;
obj51611_onTap_actionGroup0();
});
















































































/*
 *
 *   obj67950: Event Touch Down
 *
 */
$("#obj67950").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67950_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67950_onTap is still running");
	return;
}
var obj67950_onTap_runningActionsCount = 0;
var obj67950_onTap_loopCount = 0;
obj67950_onTap_actionGroup0();
});










/*
 *
 *   obj67942: Event Touch Down
 *
 */
$("#obj67942").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67942_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67942_onTap is still running");
	return;
}
var obj67942_onTap_runningActionsCount = 0;
var obj67942_onTap_loopCount = 0;
obj67942_onTap_actionGroup0();
});










/*
 *
 *   obj89077: Event Touch Down
 *
 */
$("#obj89077").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89077_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89077_onTap is still running");
	return;
}
var obj89077_onTap_runningActionsCount = 0;
var obj89077_onTap_loopCount = 0;
obj89077_onTap_actionGroup0();
});










/*
 *
 *   obj89072: Event Touch Down
 *
 */
$("#obj89072").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89072_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89072_onTap is still running");
	return;
}
var obj89072_onTap_runningActionsCount = 0;
var obj89072_onTap_loopCount = 0;
obj89072_onTap_actionGroup0();
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
	
$("#obj51630").trigger('SCEventShow');
$("#obj51614").trigger('SCEventShow');
$("#obj51611").trigger('SCEventShow');
$("#obj51609").trigger('SCEventShow');
$("#obj51607").trigger('SCEventShow');
$("#obj51605").trigger('SCEventShow');
$("#obj51603").trigger('SCEventShow');
$("#obj51632").trigger('SCEventShow');
$("#obj51634").trigger('SCEventShow');
$("#obj51637").trigger('SCEventShow');
$("#obj67950").trigger('SCEventShow');
$("#obj67942").trigger('SCEventShow');
$("#obj89077").trigger('SCEventShow');
$("#obj89072").trigger('SCEventShow');
$("#obj89082").trigger('SCEventShow');
$("#obj94995").trigger('SCEventShow');
$("#obj67956").trigger('SCEventShow');
	
});