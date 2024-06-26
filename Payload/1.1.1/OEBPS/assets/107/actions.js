pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 29206;
pubcoder.page.title = pubcoder.page.title || "107";
pubcoder.page.number = pubcoder.page.number || 107;
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
var obj83679_onTap_activeActionGroupIndex = -1;
var obj83679_onTap_runningActionsCount = 0;
var obj83679_onTap_loopCount = 0;
var obj83676_onTap_activeActionGroupIndex = -1;
var obj83676_onTap_runningActionsCount = 0;
var obj83676_onTap_loopCount = 0;
var obj83654_onTap_activeActionGroupIndex = -1;
var obj83654_onTap_runningActionsCount = 0;
var obj83654_onTap_loopCount = 0;
var obj83646_onTap_activeActionGroupIndex = -1;
var obj83646_onTap_runningActionsCount = 0;
var obj83646_onTap_loopCount = 0;
var obj88153_onTap_activeActionGroupIndex = -1;
var obj88153_onTap_runningActionsCount = 0;
var obj88153_onTap_loopCount = 0;
var obj88148_onTap_activeActionGroupIndex = -1;
var obj88148_onTap_runningActionsCount = 0;
var obj88148_onTap_loopCount = 0;
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
		
obj83679_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83679_onTap_activeActionGroupIndex = -1;
		$("#obj83679").trigger("obj83679_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83679) {
				console.warn("de-queueing event obj83679." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83679").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83679_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_83681();
function goToPage_83681() {
	window.obj83679_onTap_runningActionsCount = obj83679_onTap_runningActionsCount + 1;
	$("#anchor641")[0].click();
	window.obj83679_onTap_runningActionsCount = window.obj83679_onTap_runningActionsCount - 1;
if (window.obj83679_onTap_runningActionsCount < 0) {
	window.obj83679_onTap_runningActionsCount = 0;
} else if (window.obj83679_onTap_runningActionsCount == 0) {
	obj83679_onTap_actionGroup1();
}
}





















};
obj83679_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83679_onTap_activeActionGroupIndex = -1;
		$("#obj83679").trigger("obj83679_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83679) {
				console.warn("de-queueing event obj83679." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83679").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83679_onTap_activeActionGroupIndex = 1;
	





















};
obj83676_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83676_onTap_activeActionGroupIndex = -1;
		$("#obj83676").trigger("obj83676_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83676) {
				console.warn("de-queueing event obj83676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83676_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_83678();
function goToPage_83678() {
	window.obj83676_onTap_runningActionsCount = obj83676_onTap_runningActionsCount + 1;
	$("#anchor642")[0].click();
	window.obj83676_onTap_runningActionsCount = window.obj83676_onTap_runningActionsCount - 1;
if (window.obj83676_onTap_runningActionsCount < 0) {
	window.obj83676_onTap_runningActionsCount = 0;
} else if (window.obj83676_onTap_runningActionsCount == 0) {
	obj83676_onTap_actionGroup1();
}
}





















};
obj83676_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83676_onTap_activeActionGroupIndex = -1;
		$("#obj83676").trigger("obj83676_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83676) {
				console.warn("de-queueing event obj83676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83676_onTap_activeActionGroupIndex = 1;
	





















};
obj83654_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83654_onTap_activeActionGroupIndex = -1;
		$("#obj83654").trigger("obj83654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83654) {
				console.warn("de-queueing event obj83654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83654_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj83654 
hide_83657();
function hide_83657() {
	var selector = "#obj83654";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83654_onTap_runningActionsCount = obj83654_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83654_onTap_runningActionsCount = window.obj83654_onTap_runningActionsCount - 1;
if (window.obj83654_onTap_runningActionsCount < 0) {
	window.obj83654_onTap_runningActionsCount = 0;
} else if (window.obj83654_onTap_runningActionsCount == 0) {
	obj83654_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83657(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83654_onTap_runningActionsCount = window.obj83654_onTap_runningActionsCount - 1;
if (window.obj83654_onTap_runningActionsCount < 0) {
	window.obj83654_onTap_runningActionsCount = 0;
} else if (window.obj83654_onTap_runningActionsCount == 0) {
	obj83654_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj83644 
stopMovie_83656();
function stopMovie_83656() {
	window.obj83654_onTap_runningActionsCount = obj83654_onTap_runningActionsCount + 1;
	var myVideo = $("#obj83644")[0];
	myVideo.pause();
	window.obj83654_onTap_runningActionsCount = window.obj83654_onTap_runningActionsCount - 1;
if (window.obj83654_onTap_runningActionsCount < 0) {
	window.obj83654_onTap_runningActionsCount = 0;
} else if (window.obj83654_onTap_runningActionsCount == 0) {
	obj83654_onTap_actionGroup1();
}
}
















};
obj83654_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83654_onTap_activeActionGroupIndex = -1;
		$("#obj83654").trigger("obj83654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83654) {
				console.warn("de-queueing event obj83654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83654_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj83646
(function(){
	window.obj83654_onTap_runningActionsCount = obj83654_onTap_runningActionsCount + 1;

	var selector = "#obj83646";
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
					window.obj83654_onTap_runningActionsCount = window.obj83654_onTap_runningActionsCount - 1;
if (window.obj83654_onTap_runningActionsCount < 0) {
	window.obj83654_onTap_runningActionsCount = 0;
} else if (window.obj83654_onTap_runningActionsCount == 0) {
	obj83654_onTap_actionGroup2();
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
				window.obj83654_onTap_runningActionsCount = window.obj83654_onTap_runningActionsCount - 1;
if (window.obj83654_onTap_runningActionsCount < 0) {
	window.obj83654_onTap_runningActionsCount = 0;
} else if (window.obj83654_onTap_runningActionsCount == 0) {
	obj83654_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83654_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83654_onTap_activeActionGroupIndex = -1;
		$("#obj83654").trigger("obj83654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83654) {
				console.warn("de-queueing event obj83654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83654_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj83644 
move_83659();
function move_83659() {
	window.obj83654_onTap_runningActionsCount = obj83654_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj83644");
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
			window.obj83654_onTap_runningActionsCount = window.obj83654_onTap_runningActionsCount - 1;
if (window.obj83654_onTap_runningActionsCount < 0) {
	window.obj83654_onTap_runningActionsCount = 0;
} else if (window.obj83654_onTap_runningActionsCount == 0) {
	obj83654_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj83654_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83654_onTap_activeActionGroupIndex = -1;
		$("#obj83654").trigger("obj83654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83654) {
				console.warn("de-queueing event obj83654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83654_onTap_activeActionGroupIndex = 3;
	





















};
obj83646_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83646_onTap_activeActionGroupIndex = -1;
		$("#obj83646").trigger("obj83646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83646) {
				console.warn("de-queueing event obj83646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83646_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj83646 
hide_83649();
function hide_83649() {
	var selector = "#obj83646";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83646_onTap_runningActionsCount = obj83646_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83646_onTap_runningActionsCount = window.obj83646_onTap_runningActionsCount - 1;
if (window.obj83646_onTap_runningActionsCount < 0) {
	window.obj83646_onTap_runningActionsCount = 0;
} else if (window.obj83646_onTap_runningActionsCount == 0) {
	obj83646_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83649(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83646_onTap_runningActionsCount = window.obj83646_onTap_runningActionsCount - 1;
if (window.obj83646_onTap_runningActionsCount < 0) {
	window.obj83646_onTap_runningActionsCount = 0;
} else if (window.obj83646_onTap_runningActionsCount == 0) {
	obj83646_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj83644 
playPauseMovie_83648();
function playPauseMovie_83648() {
	window.obj83646_onTap_runningActionsCount = obj83646_onTap_runningActionsCount + 1;
	var myVideo = $("#obj83644")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj83646_onTap_runningActionsCount = window.obj83646_onTap_runningActionsCount - 1;
if (window.obj83646_onTap_runningActionsCount < 0) {
	window.obj83646_onTap_runningActionsCount = 0;
} else if (window.obj83646_onTap_runningActionsCount == 0) {
	obj83646_onTap_actionGroup1();
}
}

















};
obj83646_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83646_onTap_activeActionGroupIndex = -1;
		$("#obj83646").trigger("obj83646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83646) {
				console.warn("de-queueing event obj83646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83646_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj83654
(function(){
	window.obj83646_onTap_runningActionsCount = obj83646_onTap_runningActionsCount + 1;

	var selector = "#obj83654";
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
					window.obj83646_onTap_runningActionsCount = window.obj83646_onTap_runningActionsCount - 1;
if (window.obj83646_onTap_runningActionsCount < 0) {
	window.obj83646_onTap_runningActionsCount = 0;
} else if (window.obj83646_onTap_runningActionsCount == 0) {
	obj83646_onTap_actionGroup2();
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
				window.obj83646_onTap_runningActionsCount = window.obj83646_onTap_runningActionsCount - 1;
if (window.obj83646_onTap_runningActionsCount < 0) {
	window.obj83646_onTap_runningActionsCount = 0;
} else if (window.obj83646_onTap_runningActionsCount == 0) {
	obj83646_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83646_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83646_onTap_activeActionGroupIndex = -1;
		$("#obj83646").trigger("obj83646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83646) {
				console.warn("de-queueing event obj83646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83646_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj83644 
move_83651();
function move_83651() {
	window.obj83646_onTap_runningActionsCount = obj83646_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj83644");
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
			window.obj83646_onTap_runningActionsCount = window.obj83646_onTap_runningActionsCount - 1;
if (window.obj83646_onTap_runningActionsCount < 0) {
	window.obj83646_onTap_runningActionsCount = 0;
} else if (window.obj83646_onTap_runningActionsCount == 0) {
	obj83646_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj83646_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83646_onTap_activeActionGroupIndex = -1;
		$("#obj83646").trigger("obj83646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83646) {
				console.warn("de-queueing event obj83646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83646_onTap_activeActionGroupIndex = 3;
	





















};
obj88153_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88153_onTap_activeActionGroupIndex = -1;
		$("#obj88153").trigger("obj88153_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88153) {
				console.warn("de-queueing event obj88153." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88153").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88153_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88158 
stopAudio_88155();
function stopAudio_88155() {
	window.obj88153_onTap_runningActionsCount = obj88153_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88158")[0];
	myAudio.pause();
	window.obj88153_onTap_runningActionsCount = window.obj88153_onTap_runningActionsCount - 1;
if (window.obj88153_onTap_runningActionsCount < 0) {
	window.obj88153_onTap_runningActionsCount = 0;
} else if (window.obj88153_onTap_runningActionsCount == 0) {
	obj88153_onTap_actionGroup1();
}
}








};
obj88153_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88153_onTap_activeActionGroupIndex = -1;
		$("#obj88153").trigger("obj88153_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88153) {
				console.warn("de-queueing event obj88153." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88153").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88153_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88153 
hide_88156();
function hide_88156() {
	var selector = "#obj88153";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88153_onTap_runningActionsCount = obj88153_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88153_onTap_runningActionsCount = window.obj88153_onTap_runningActionsCount - 1;
if (window.obj88153_onTap_runningActionsCount < 0) {
	window.obj88153_onTap_runningActionsCount = 0;
} else if (window.obj88153_onTap_runningActionsCount == 0) {
	obj88153_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88156(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88153_onTap_runningActionsCount = window.obj88153_onTap_runningActionsCount - 1;
if (window.obj88153_onTap_runningActionsCount < 0) {
	window.obj88153_onTap_runningActionsCount = 0;
} else if (window.obj88153_onTap_runningActionsCount == 0) {
	obj88153_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88153_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88153_onTap_activeActionGroupIndex = -1;
		$("#obj88153").trigger("obj88153_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88153) {
				console.warn("de-queueing event obj88153." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88153").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88153_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88148
(function(){
	window.obj88153_onTap_runningActionsCount = obj88153_onTap_runningActionsCount + 1;

	var selector = "#obj88148";
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
					window.obj88153_onTap_runningActionsCount = window.obj88153_onTap_runningActionsCount - 1;
if (window.obj88153_onTap_runningActionsCount < 0) {
	window.obj88153_onTap_runningActionsCount = 0;
} else if (window.obj88153_onTap_runningActionsCount == 0) {
	obj88153_onTap_actionGroup3();
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
				window.obj88153_onTap_runningActionsCount = window.obj88153_onTap_runningActionsCount - 1;
if (window.obj88153_onTap_runningActionsCount < 0) {
	window.obj88153_onTap_runningActionsCount = 0;
} else if (window.obj88153_onTap_runningActionsCount == 0) {
	obj88153_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88153_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88153_onTap_activeActionGroupIndex = -1;
		$("#obj88153").trigger("obj88153_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88153) {
				console.warn("de-queueing event obj88153." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88153").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88153_onTap_activeActionGroupIndex = 3;
	





















};
obj88148_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88148_onTap_activeActionGroupIndex = -1;
		$("#obj88148").trigger("obj88148_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88148) {
				console.warn("de-queueing event obj88148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88148_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88148 
hide_88150();
function hide_88150() {
	var selector = "#obj88148";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88148_onTap_runningActionsCount = obj88148_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88148_onTap_runningActionsCount = window.obj88148_onTap_runningActionsCount - 1;
if (window.obj88148_onTap_runningActionsCount < 0) {
	window.obj88148_onTap_runningActionsCount = 0;
} else if (window.obj88148_onTap_runningActionsCount == 0) {
	obj88148_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88150(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88148_onTap_runningActionsCount = window.obj88148_onTap_runningActionsCount - 1;
if (window.obj88148_onTap_runningActionsCount < 0) {
	window.obj88148_onTap_runningActionsCount = 0;
} else if (window.obj88148_onTap_runningActionsCount == 0) {
	obj88148_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88148_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88148_onTap_activeActionGroupIndex = -1;
		$("#obj88148").trigger("obj88148_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88148) {
				console.warn("de-queueing event obj88148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88148_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88153
(function(){
	window.obj88148_onTap_runningActionsCount = obj88148_onTap_runningActionsCount + 1;

	var selector = "#obj88153";
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
					window.obj88148_onTap_runningActionsCount = window.obj88148_onTap_runningActionsCount - 1;
if (window.obj88148_onTap_runningActionsCount < 0) {
	window.obj88148_onTap_runningActionsCount = 0;
} else if (window.obj88148_onTap_runningActionsCount == 0) {
	obj88148_onTap_actionGroup2();
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
				window.obj88148_onTap_runningActionsCount = window.obj88148_onTap_runningActionsCount - 1;
if (window.obj88148_onTap_runningActionsCount < 0) {
	window.obj88148_onTap_runningActionsCount = 0;
} else if (window.obj88148_onTap_runningActionsCount == 0) {
	obj88148_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88148_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88148_onTap_activeActionGroupIndex = -1;
		$("#obj88148").trigger("obj88148_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88148) {
				console.warn("de-queueing event obj88148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88148_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88158 
playAudio_88152();
function playAudio_88152() {
	window.obj88148_onTap_runningActionsCount = obj88148_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88158")[0];
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
		    window.obj88148_onTap_runningActionsCount = window.obj88148_onTap_runningActionsCount - 1;
if (window.obj88148_onTap_runningActionsCount < 0) {
	window.obj88148_onTap_runningActionsCount = 0;
} else if (window.obj88148_onTap_runningActionsCount == 0) {
	obj88148_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88148_onTap_runningActionsCount = window.obj88148_onTap_runningActionsCount - 1;
if (window.obj88148_onTap_runningActionsCount < 0) {
	window.obj88148_onTap_runningActionsCount = 0;
} else if (window.obj88148_onTap_runningActionsCount == 0) {
	obj88148_onTap_actionGroup3();
}
	}
}









};
obj88148_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88148_onTap_activeActionGroupIndex = -1;
		$("#obj88148").trigger("obj88148_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88148) {
				console.warn("de-queueing event obj88148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88148_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj83679: Event Touch Down
 *
 */
$("#obj83679").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83679_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83679_onTap is still running");
	return;
}
var obj83679_onTap_runningActionsCount = 0;
var obj83679_onTap_loopCount = 0;
obj83679_onTap_actionGroup0();
});










/*
 *
 *   obj83676: Event Touch Down
 *
 */
$("#obj83676").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83676_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83676_onTap is still running");
	return;
}
var obj83676_onTap_runningActionsCount = 0;
var obj83676_onTap_loopCount = 0;
obj83676_onTap_actionGroup0();
});






























/*
 *
 *   obj83654: Event Touch Down
 *
 */
$("#obj83654").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83654_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83654_onTap is still running");
	return;
}
var obj83654_onTap_runningActionsCount = 0;
var obj83654_onTap_loopCount = 0;
obj83654_onTap_actionGroup0();
});










/*
 *
 *   obj83646: Event Touch Down
 *
 */
$("#obj83646").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83646_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83646_onTap is still running");
	return;
}
var obj83646_onTap_runningActionsCount = 0;
var obj83646_onTap_loopCount = 0;
obj83646_onTap_actionGroup0();
});










/*
 *
 *   obj88153: Event Touch Down
 *
 */
$("#obj88153").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88153_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88153_onTap is still running");
	return;
}
var obj88153_onTap_runningActionsCount = 0;
var obj88153_onTap_loopCount = 0;
obj88153_onTap_actionGroup0();
});










/*
 *
 *   obj88148: Event Touch Down
 *
 */
$("#obj88148").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88148_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88148_onTap is still running");
	return;
}
var obj88148_onTap_runningActionsCount = 0;
var obj88148_onTap_loopCount = 0;
obj88148_onTap_actionGroup0();
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
	
$("#obj83682").trigger('SCEventShow');
$("#obj83679").trigger('SCEventShow');
$("#obj83676").trigger('SCEventShow');
$("#obj83674").trigger('SCEventShow');
$("#obj83672").trigger('SCEventShow');
$("#obj83654").trigger('SCEventShow');
$("#obj83646").trigger('SCEventShow');
$("#obj88153").trigger('SCEventShow');
$("#obj88148").trigger('SCEventShow');
$("#obj88158").trigger('SCEventShow');
$("#obj94843").trigger('SCEventShow');
$("#obj83644").trigger('SCEventShow');
	
});