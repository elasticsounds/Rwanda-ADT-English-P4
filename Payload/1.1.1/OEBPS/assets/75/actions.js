pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 18546;
pubcoder.page.title = pubcoder.page.title || "75";
pubcoder.page.number = pubcoder.page.number || 75;
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
var obj75894_onTap_activeActionGroupIndex = -1;
var obj75894_onTap_runningActionsCount = 0;
var obj75894_onTap_loopCount = 0;
var obj75891_onTap_activeActionGroupIndex = -1;
var obj75891_onTap_runningActionsCount = 0;
var obj75891_onTap_loopCount = 0;
var obj75859_onTap_activeActionGroupIndex = -1;
var obj75859_onTap_runningActionsCount = 0;
var obj75859_onTap_loopCount = 0;
var obj75851_onTap_activeActionGroupIndex = -1;
var obj75851_onTap_runningActionsCount = 0;
var obj75851_onTap_loopCount = 0;
var obj87747_onTap_activeActionGroupIndex = -1;
var obj87747_onTap_runningActionsCount = 0;
var obj87747_onTap_loopCount = 0;
var obj87742_onTap_activeActionGroupIndex = -1;
var obj87742_onTap_runningActionsCount = 0;
var obj87742_onTap_loopCount = 0;
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
		
obj75894_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75894_onTap_activeActionGroupIndex = -1;
		$("#obj75894").trigger("obj75894_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75894) {
				console.warn("de-queueing event obj75894." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75894").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75894_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75896();
function goToPage_75896() {
	window.obj75894_onTap_runningActionsCount = obj75894_onTap_runningActionsCount + 1;
	$("#anchor444")[0].click();
	window.obj75894_onTap_runningActionsCount = window.obj75894_onTap_runningActionsCount - 1;
if (window.obj75894_onTap_runningActionsCount < 0) {
	window.obj75894_onTap_runningActionsCount = 0;
} else if (window.obj75894_onTap_runningActionsCount == 0) {
	obj75894_onTap_actionGroup1();
}
}





















};
obj75894_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75894_onTap_activeActionGroupIndex = -1;
		$("#obj75894").trigger("obj75894_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75894) {
				console.warn("de-queueing event obj75894." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75894").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75894_onTap_activeActionGroupIndex = 1;
	





















};
obj75891_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75891_onTap_activeActionGroupIndex = -1;
		$("#obj75891").trigger("obj75891_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75891) {
				console.warn("de-queueing event obj75891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75891_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75893();
function goToPage_75893() {
	window.obj75891_onTap_runningActionsCount = obj75891_onTap_runningActionsCount + 1;
	$("#anchor445")[0].click();
	window.obj75891_onTap_runningActionsCount = window.obj75891_onTap_runningActionsCount - 1;
if (window.obj75891_onTap_runningActionsCount < 0) {
	window.obj75891_onTap_runningActionsCount = 0;
} else if (window.obj75891_onTap_runningActionsCount == 0) {
	obj75891_onTap_actionGroup1();
}
}





















};
obj75891_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75891_onTap_activeActionGroupIndex = -1;
		$("#obj75891").trigger("obj75891_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75891) {
				console.warn("de-queueing event obj75891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75891_onTap_activeActionGroupIndex = 1;
	





















};
obj75859_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75859_onTap_activeActionGroupIndex = -1;
		$("#obj75859").trigger("obj75859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75859) {
				console.warn("de-queueing event obj75859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75859_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75859 
hide_75862();
function hide_75862() {
	var selector = "#obj75859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75859_onTap_runningActionsCount = obj75859_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75859_onTap_runningActionsCount = window.obj75859_onTap_runningActionsCount - 1;
if (window.obj75859_onTap_runningActionsCount < 0) {
	window.obj75859_onTap_runningActionsCount = 0;
} else if (window.obj75859_onTap_runningActionsCount == 0) {
	obj75859_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75862(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75859_onTap_runningActionsCount = window.obj75859_onTap_runningActionsCount - 1;
if (window.obj75859_onTap_runningActionsCount < 0) {
	window.obj75859_onTap_runningActionsCount = 0;
} else if (window.obj75859_onTap_runningActionsCount == 0) {
	obj75859_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj75849 
stopMovie_75861();
function stopMovie_75861() {
	window.obj75859_onTap_runningActionsCount = obj75859_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75849")[0];
	myVideo.pause();
	window.obj75859_onTap_runningActionsCount = window.obj75859_onTap_runningActionsCount - 1;
if (window.obj75859_onTap_runningActionsCount < 0) {
	window.obj75859_onTap_runningActionsCount = 0;
} else if (window.obj75859_onTap_runningActionsCount == 0) {
	obj75859_onTap_actionGroup1();
}
}
















};
obj75859_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75859_onTap_activeActionGroupIndex = -1;
		$("#obj75859").trigger("obj75859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75859) {
				console.warn("de-queueing event obj75859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75859_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75851
(function(){
	window.obj75859_onTap_runningActionsCount = obj75859_onTap_runningActionsCount + 1;

	var selector = "#obj75851";
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
					window.obj75859_onTap_runningActionsCount = window.obj75859_onTap_runningActionsCount - 1;
if (window.obj75859_onTap_runningActionsCount < 0) {
	window.obj75859_onTap_runningActionsCount = 0;
} else if (window.obj75859_onTap_runningActionsCount == 0) {
	obj75859_onTap_actionGroup2();
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
				window.obj75859_onTap_runningActionsCount = window.obj75859_onTap_runningActionsCount - 1;
if (window.obj75859_onTap_runningActionsCount < 0) {
	window.obj75859_onTap_runningActionsCount = 0;
} else if (window.obj75859_onTap_runningActionsCount == 0) {
	obj75859_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75859_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75859_onTap_activeActionGroupIndex = -1;
		$("#obj75859").trigger("obj75859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75859) {
				console.warn("de-queueing event obj75859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75859_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75849 
move_75864();
function move_75864() {
	window.obj75859_onTap_runningActionsCount = obj75859_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75849");
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
			window.obj75859_onTap_runningActionsCount = window.obj75859_onTap_runningActionsCount - 1;
if (window.obj75859_onTap_runningActionsCount < 0) {
	window.obj75859_onTap_runningActionsCount = 0;
} else if (window.obj75859_onTap_runningActionsCount == 0) {
	obj75859_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75859_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75859_onTap_activeActionGroupIndex = -1;
		$("#obj75859").trigger("obj75859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75859) {
				console.warn("de-queueing event obj75859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75859_onTap_activeActionGroupIndex = 3;
	





















};
obj75851_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75851_onTap_activeActionGroupIndex = -1;
		$("#obj75851").trigger("obj75851_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75851) {
				console.warn("de-queueing event obj75851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75851_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75851 
hide_75854();
function hide_75854() {
	var selector = "#obj75851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75851_onTap_runningActionsCount = obj75851_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75851_onTap_runningActionsCount = window.obj75851_onTap_runningActionsCount - 1;
if (window.obj75851_onTap_runningActionsCount < 0) {
	window.obj75851_onTap_runningActionsCount = 0;
} else if (window.obj75851_onTap_runningActionsCount == 0) {
	obj75851_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75854(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75851_onTap_runningActionsCount = window.obj75851_onTap_runningActionsCount - 1;
if (window.obj75851_onTap_runningActionsCount < 0) {
	window.obj75851_onTap_runningActionsCount = 0;
} else if (window.obj75851_onTap_runningActionsCount == 0) {
	obj75851_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj75849 
playPauseMovie_75853();
function playPauseMovie_75853() {
	window.obj75851_onTap_runningActionsCount = obj75851_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75849")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj75851_onTap_runningActionsCount = window.obj75851_onTap_runningActionsCount - 1;
if (window.obj75851_onTap_runningActionsCount < 0) {
	window.obj75851_onTap_runningActionsCount = 0;
} else if (window.obj75851_onTap_runningActionsCount == 0) {
	obj75851_onTap_actionGroup1();
}
}

















};
obj75851_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75851_onTap_activeActionGroupIndex = -1;
		$("#obj75851").trigger("obj75851_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75851) {
				console.warn("de-queueing event obj75851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75851_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75859
(function(){
	window.obj75851_onTap_runningActionsCount = obj75851_onTap_runningActionsCount + 1;

	var selector = "#obj75859";
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
					window.obj75851_onTap_runningActionsCount = window.obj75851_onTap_runningActionsCount - 1;
if (window.obj75851_onTap_runningActionsCount < 0) {
	window.obj75851_onTap_runningActionsCount = 0;
} else if (window.obj75851_onTap_runningActionsCount == 0) {
	obj75851_onTap_actionGroup2();
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
				window.obj75851_onTap_runningActionsCount = window.obj75851_onTap_runningActionsCount - 1;
if (window.obj75851_onTap_runningActionsCount < 0) {
	window.obj75851_onTap_runningActionsCount = 0;
} else if (window.obj75851_onTap_runningActionsCount == 0) {
	obj75851_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75851_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75851_onTap_activeActionGroupIndex = -1;
		$("#obj75851").trigger("obj75851_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75851) {
				console.warn("de-queueing event obj75851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75851_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75849 
move_75856();
function move_75856() {
	window.obj75851_onTap_runningActionsCount = obj75851_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75849");
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
			window.obj75851_onTap_runningActionsCount = window.obj75851_onTap_runningActionsCount - 1;
if (window.obj75851_onTap_runningActionsCount < 0) {
	window.obj75851_onTap_runningActionsCount = 0;
} else if (window.obj75851_onTap_runningActionsCount == 0) {
	obj75851_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75851_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75851_onTap_activeActionGroupIndex = -1;
		$("#obj75851").trigger("obj75851_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75851) {
				console.warn("de-queueing event obj75851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75851_onTap_activeActionGroupIndex = 3;
	





















};
obj87747_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87747_onTap_activeActionGroupIndex = -1;
		$("#obj87747").trigger("obj87747_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87747) {
				console.warn("de-queueing event obj87747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87747_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87752 
stopAudio_87749();
function stopAudio_87749() {
	window.obj87747_onTap_runningActionsCount = obj87747_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87752")[0];
	myAudio.pause();
	window.obj87747_onTap_runningActionsCount = window.obj87747_onTap_runningActionsCount - 1;
if (window.obj87747_onTap_runningActionsCount < 0) {
	window.obj87747_onTap_runningActionsCount = 0;
} else if (window.obj87747_onTap_runningActionsCount == 0) {
	obj87747_onTap_actionGroup1();
}
}








};
obj87747_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87747_onTap_activeActionGroupIndex = -1;
		$("#obj87747").trigger("obj87747_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87747) {
				console.warn("de-queueing event obj87747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87747_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87747 
hide_87750();
function hide_87750() {
	var selector = "#obj87747";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87747_onTap_runningActionsCount = obj87747_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87747_onTap_runningActionsCount = window.obj87747_onTap_runningActionsCount - 1;
if (window.obj87747_onTap_runningActionsCount < 0) {
	window.obj87747_onTap_runningActionsCount = 0;
} else if (window.obj87747_onTap_runningActionsCount == 0) {
	obj87747_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87750(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87747_onTap_runningActionsCount = window.obj87747_onTap_runningActionsCount - 1;
if (window.obj87747_onTap_runningActionsCount < 0) {
	window.obj87747_onTap_runningActionsCount = 0;
} else if (window.obj87747_onTap_runningActionsCount == 0) {
	obj87747_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87747_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87747_onTap_activeActionGroupIndex = -1;
		$("#obj87747").trigger("obj87747_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87747) {
				console.warn("de-queueing event obj87747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87747_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87742
(function(){
	window.obj87747_onTap_runningActionsCount = obj87747_onTap_runningActionsCount + 1;

	var selector = "#obj87742";
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
					window.obj87747_onTap_runningActionsCount = window.obj87747_onTap_runningActionsCount - 1;
if (window.obj87747_onTap_runningActionsCount < 0) {
	window.obj87747_onTap_runningActionsCount = 0;
} else if (window.obj87747_onTap_runningActionsCount == 0) {
	obj87747_onTap_actionGroup3();
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
				window.obj87747_onTap_runningActionsCount = window.obj87747_onTap_runningActionsCount - 1;
if (window.obj87747_onTap_runningActionsCount < 0) {
	window.obj87747_onTap_runningActionsCount = 0;
} else if (window.obj87747_onTap_runningActionsCount == 0) {
	obj87747_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87747_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87747_onTap_activeActionGroupIndex = -1;
		$("#obj87747").trigger("obj87747_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87747) {
				console.warn("de-queueing event obj87747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87747_onTap_activeActionGroupIndex = 3;
	





















};
obj87742_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87742_onTap_activeActionGroupIndex = -1;
		$("#obj87742").trigger("obj87742_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87742) {
				console.warn("de-queueing event obj87742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87742_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87742 
hide_87744();
function hide_87744() {
	var selector = "#obj87742";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87742_onTap_runningActionsCount = obj87742_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87742_onTap_runningActionsCount = window.obj87742_onTap_runningActionsCount - 1;
if (window.obj87742_onTap_runningActionsCount < 0) {
	window.obj87742_onTap_runningActionsCount = 0;
} else if (window.obj87742_onTap_runningActionsCount == 0) {
	obj87742_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87744(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87742_onTap_runningActionsCount = window.obj87742_onTap_runningActionsCount - 1;
if (window.obj87742_onTap_runningActionsCount < 0) {
	window.obj87742_onTap_runningActionsCount = 0;
} else if (window.obj87742_onTap_runningActionsCount == 0) {
	obj87742_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87742_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87742_onTap_activeActionGroupIndex = -1;
		$("#obj87742").trigger("obj87742_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87742) {
				console.warn("de-queueing event obj87742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87742_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87747
(function(){
	window.obj87742_onTap_runningActionsCount = obj87742_onTap_runningActionsCount + 1;

	var selector = "#obj87747";
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
					window.obj87742_onTap_runningActionsCount = window.obj87742_onTap_runningActionsCount - 1;
if (window.obj87742_onTap_runningActionsCount < 0) {
	window.obj87742_onTap_runningActionsCount = 0;
} else if (window.obj87742_onTap_runningActionsCount == 0) {
	obj87742_onTap_actionGroup2();
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
				window.obj87742_onTap_runningActionsCount = window.obj87742_onTap_runningActionsCount - 1;
if (window.obj87742_onTap_runningActionsCount < 0) {
	window.obj87742_onTap_runningActionsCount = 0;
} else if (window.obj87742_onTap_runningActionsCount == 0) {
	obj87742_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87742_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87742_onTap_activeActionGroupIndex = -1;
		$("#obj87742").trigger("obj87742_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87742) {
				console.warn("de-queueing event obj87742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87742_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87752 
playAudio_87746();
function playAudio_87746() {
	window.obj87742_onTap_runningActionsCount = obj87742_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87752")[0];
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
		    window.obj87742_onTap_runningActionsCount = window.obj87742_onTap_runningActionsCount - 1;
if (window.obj87742_onTap_runningActionsCount < 0) {
	window.obj87742_onTap_runningActionsCount = 0;
} else if (window.obj87742_onTap_runningActionsCount == 0) {
	obj87742_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87742_onTap_runningActionsCount = window.obj87742_onTap_runningActionsCount - 1;
if (window.obj87742_onTap_runningActionsCount < 0) {
	window.obj87742_onTap_runningActionsCount = 0;
} else if (window.obj87742_onTap_runningActionsCount == 0) {
	obj87742_onTap_actionGroup3();
}
	}
}









};
obj87742_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87742_onTap_activeActionGroupIndex = -1;
		$("#obj87742").trigger("obj87742_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87742) {
				console.warn("de-queueing event obj87742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87742_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75894: Event Touch Down
 *
 */
$("#obj75894").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75894_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75894_onTap is still running");
	return;
}
var obj75894_onTap_runningActionsCount = 0;
var obj75894_onTap_loopCount = 0;
obj75894_onTap_actionGroup0();
});










/*
 *
 *   obj75891: Event Touch Down
 *
 */
$("#obj75891").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75891_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75891_onTap is still running");
	return;
}
var obj75891_onTap_runningActionsCount = 0;
var obj75891_onTap_loopCount = 0;
obj75891_onTap_actionGroup0();
});
















































































/*
 *
 *   obj75859: Event Touch Down
 *
 */
$("#obj75859").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75859_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75859_onTap is still running");
	return;
}
var obj75859_onTap_runningActionsCount = 0;
var obj75859_onTap_loopCount = 0;
obj75859_onTap_actionGroup0();
});










/*
 *
 *   obj75851: Event Touch Down
 *
 */
$("#obj75851").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75851_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75851_onTap is still running");
	return;
}
var obj75851_onTap_runningActionsCount = 0;
var obj75851_onTap_loopCount = 0;
obj75851_onTap_actionGroup0();
});










/*
 *
 *   obj87747: Event Touch Down
 *
 */
$("#obj87747").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87747_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87747_onTap is still running");
	return;
}
var obj87747_onTap_runningActionsCount = 0;
var obj87747_onTap_loopCount = 0;
obj87747_onTap_actionGroup0();
});










/*
 *
 *   obj87742: Event Touch Down
 *
 */
$("#obj87742").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87742_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87742_onTap is still running");
	return;
}
var obj87742_onTap_runningActionsCount = 0;
var obj87742_onTap_loopCount = 0;
obj87742_onTap_actionGroup0();
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
	
$("#obj75897").trigger('SCEventShow');
$("#obj75894").trigger('SCEventShow');
$("#obj75891").trigger('SCEventShow');
$("#obj75889").trigger('SCEventShow');
$("#obj75887").trigger('SCEventShow');
$("#obj75885").trigger('SCEventShow');
$("#obj75883").trigger('SCEventShow');
$("#obj75881").trigger('SCEventShow');
$("#obj75879").trigger('SCEventShow');
$("#obj75877").trigger('SCEventShow');
$("#obj75859").trigger('SCEventShow');
$("#obj75851").trigger('SCEventShow');
$("#obj87747").trigger('SCEventShow');
$("#obj87742").trigger('SCEventShow');
$("#obj87752").trigger('SCEventShow');
$("#obj94779").trigger('SCEventShow');
$("#obj75849").trigger('SCEventShow');
	
});