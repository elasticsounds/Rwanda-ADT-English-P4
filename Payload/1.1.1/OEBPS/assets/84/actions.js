pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 22024;
pubcoder.page.title = pubcoder.page.title || "84";
pubcoder.page.number = pubcoder.page.number || 84;
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
var obj78127_onTap_activeActionGroupIndex = -1;
var obj78127_onTap_runningActionsCount = 0;
var obj78127_onTap_loopCount = 0;
var obj78124_onTap_activeActionGroupIndex = -1;
var obj78124_onTap_runningActionsCount = 0;
var obj78124_onTap_loopCount = 0;
var obj78100_onTap_activeActionGroupIndex = -1;
var obj78100_onTap_runningActionsCount = 0;
var obj78100_onTap_loopCount = 0;
var obj78092_onTap_activeActionGroupIndex = -1;
var obj78092_onTap_runningActionsCount = 0;
var obj78092_onTap_loopCount = 0;
var obj87877_onTap_activeActionGroupIndex = -1;
var obj87877_onTap_runningActionsCount = 0;
var obj87877_onTap_loopCount = 0;
var obj87872_onTap_activeActionGroupIndex = -1;
var obj87872_onTap_runningActionsCount = 0;
var obj87872_onTap_loopCount = 0;
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
		
obj78127_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78127_onTap_activeActionGroupIndex = -1;
		$("#obj78127").trigger("obj78127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78127) {
				console.warn("de-queueing event obj78127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78127_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78129();
function goToPage_78129() {
	window.obj78127_onTap_runningActionsCount = obj78127_onTap_runningActionsCount + 1;
	$("#anchor495")[0].click();
	window.obj78127_onTap_runningActionsCount = window.obj78127_onTap_runningActionsCount - 1;
if (window.obj78127_onTap_runningActionsCount < 0) {
	window.obj78127_onTap_runningActionsCount = 0;
} else if (window.obj78127_onTap_runningActionsCount == 0) {
	obj78127_onTap_actionGroup1();
}
}





















};
obj78127_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78127_onTap_activeActionGroupIndex = -1;
		$("#obj78127").trigger("obj78127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78127) {
				console.warn("de-queueing event obj78127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78127_onTap_activeActionGroupIndex = 1;
	





















};
obj78124_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78124_onTap_activeActionGroupIndex = -1;
		$("#obj78124").trigger("obj78124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78124) {
				console.warn("de-queueing event obj78124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78124_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78126();
function goToPage_78126() {
	window.obj78124_onTap_runningActionsCount = obj78124_onTap_runningActionsCount + 1;
	$("#anchor496")[0].click();
	window.obj78124_onTap_runningActionsCount = window.obj78124_onTap_runningActionsCount - 1;
if (window.obj78124_onTap_runningActionsCount < 0) {
	window.obj78124_onTap_runningActionsCount = 0;
} else if (window.obj78124_onTap_runningActionsCount == 0) {
	obj78124_onTap_actionGroup1();
}
}





















};
obj78124_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78124_onTap_activeActionGroupIndex = -1;
		$("#obj78124").trigger("obj78124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78124) {
				console.warn("de-queueing event obj78124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78124_onTap_activeActionGroupIndex = 1;
	





















};
obj78100_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78100_onTap_activeActionGroupIndex = -1;
		$("#obj78100").trigger("obj78100_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78100) {
				console.warn("de-queueing event obj78100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78100_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78100 
hide_78103();
function hide_78103() {
	var selector = "#obj78100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78100_onTap_runningActionsCount = obj78100_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78100_onTap_runningActionsCount = window.obj78100_onTap_runningActionsCount - 1;
if (window.obj78100_onTap_runningActionsCount < 0) {
	window.obj78100_onTap_runningActionsCount = 0;
} else if (window.obj78100_onTap_runningActionsCount == 0) {
	obj78100_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78103(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78100_onTap_runningActionsCount = window.obj78100_onTap_runningActionsCount - 1;
if (window.obj78100_onTap_runningActionsCount < 0) {
	window.obj78100_onTap_runningActionsCount = 0;
} else if (window.obj78100_onTap_runningActionsCount == 0) {
	obj78100_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj78090 
stopMovie_78102();
function stopMovie_78102() {
	window.obj78100_onTap_runningActionsCount = obj78100_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78090")[0];
	myVideo.pause();
	window.obj78100_onTap_runningActionsCount = window.obj78100_onTap_runningActionsCount - 1;
if (window.obj78100_onTap_runningActionsCount < 0) {
	window.obj78100_onTap_runningActionsCount = 0;
} else if (window.obj78100_onTap_runningActionsCount == 0) {
	obj78100_onTap_actionGroup1();
}
}
















};
obj78100_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78100_onTap_activeActionGroupIndex = -1;
		$("#obj78100").trigger("obj78100_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78100) {
				console.warn("de-queueing event obj78100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78100_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78092
(function(){
	window.obj78100_onTap_runningActionsCount = obj78100_onTap_runningActionsCount + 1;

	var selector = "#obj78092";
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
					window.obj78100_onTap_runningActionsCount = window.obj78100_onTap_runningActionsCount - 1;
if (window.obj78100_onTap_runningActionsCount < 0) {
	window.obj78100_onTap_runningActionsCount = 0;
} else if (window.obj78100_onTap_runningActionsCount == 0) {
	obj78100_onTap_actionGroup2();
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
				window.obj78100_onTap_runningActionsCount = window.obj78100_onTap_runningActionsCount - 1;
if (window.obj78100_onTap_runningActionsCount < 0) {
	window.obj78100_onTap_runningActionsCount = 0;
} else if (window.obj78100_onTap_runningActionsCount == 0) {
	obj78100_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78100_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78100_onTap_activeActionGroupIndex = -1;
		$("#obj78100").trigger("obj78100_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78100) {
				console.warn("de-queueing event obj78100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78100_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78090 
move_78105();
function move_78105() {
	window.obj78100_onTap_runningActionsCount = obj78100_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78090");
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
			window.obj78100_onTap_runningActionsCount = window.obj78100_onTap_runningActionsCount - 1;
if (window.obj78100_onTap_runningActionsCount < 0) {
	window.obj78100_onTap_runningActionsCount = 0;
} else if (window.obj78100_onTap_runningActionsCount == 0) {
	obj78100_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78100_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78100_onTap_activeActionGroupIndex = -1;
		$("#obj78100").trigger("obj78100_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78100) {
				console.warn("de-queueing event obj78100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78100_onTap_activeActionGroupIndex = 3;
	





















};
obj78092_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78092_onTap_activeActionGroupIndex = -1;
		$("#obj78092").trigger("obj78092_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78092) {
				console.warn("de-queueing event obj78092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78092_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78092 
hide_78095();
function hide_78095() {
	var selector = "#obj78092";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78092_onTap_runningActionsCount = obj78092_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78092_onTap_runningActionsCount = window.obj78092_onTap_runningActionsCount - 1;
if (window.obj78092_onTap_runningActionsCount < 0) {
	window.obj78092_onTap_runningActionsCount = 0;
} else if (window.obj78092_onTap_runningActionsCount == 0) {
	obj78092_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78095(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78092_onTap_runningActionsCount = window.obj78092_onTap_runningActionsCount - 1;
if (window.obj78092_onTap_runningActionsCount < 0) {
	window.obj78092_onTap_runningActionsCount = 0;
} else if (window.obj78092_onTap_runningActionsCount == 0) {
	obj78092_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj78090 
playPauseMovie_78094();
function playPauseMovie_78094() {
	window.obj78092_onTap_runningActionsCount = obj78092_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78090")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj78092_onTap_runningActionsCount = window.obj78092_onTap_runningActionsCount - 1;
if (window.obj78092_onTap_runningActionsCount < 0) {
	window.obj78092_onTap_runningActionsCount = 0;
} else if (window.obj78092_onTap_runningActionsCount == 0) {
	obj78092_onTap_actionGroup1();
}
}

















};
obj78092_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78092_onTap_activeActionGroupIndex = -1;
		$("#obj78092").trigger("obj78092_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78092) {
				console.warn("de-queueing event obj78092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78092_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78100
(function(){
	window.obj78092_onTap_runningActionsCount = obj78092_onTap_runningActionsCount + 1;

	var selector = "#obj78100";
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
					window.obj78092_onTap_runningActionsCount = window.obj78092_onTap_runningActionsCount - 1;
if (window.obj78092_onTap_runningActionsCount < 0) {
	window.obj78092_onTap_runningActionsCount = 0;
} else if (window.obj78092_onTap_runningActionsCount == 0) {
	obj78092_onTap_actionGroup2();
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
				window.obj78092_onTap_runningActionsCount = window.obj78092_onTap_runningActionsCount - 1;
if (window.obj78092_onTap_runningActionsCount < 0) {
	window.obj78092_onTap_runningActionsCount = 0;
} else if (window.obj78092_onTap_runningActionsCount == 0) {
	obj78092_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78092_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78092_onTap_activeActionGroupIndex = -1;
		$("#obj78092").trigger("obj78092_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78092) {
				console.warn("de-queueing event obj78092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78092_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78090 
move_78097();
function move_78097() {
	window.obj78092_onTap_runningActionsCount = obj78092_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78090");
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
			window.obj78092_onTap_runningActionsCount = window.obj78092_onTap_runningActionsCount - 1;
if (window.obj78092_onTap_runningActionsCount < 0) {
	window.obj78092_onTap_runningActionsCount = 0;
} else if (window.obj78092_onTap_runningActionsCount == 0) {
	obj78092_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78092_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78092_onTap_activeActionGroupIndex = -1;
		$("#obj78092").trigger("obj78092_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78092) {
				console.warn("de-queueing event obj78092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78092_onTap_activeActionGroupIndex = 3;
	





















};
obj87877_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87877_onTap_activeActionGroupIndex = -1;
		$("#obj87877").trigger("obj87877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87877) {
				console.warn("de-queueing event obj87877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87877_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87882 
stopAudio_87879();
function stopAudio_87879() {
	window.obj87877_onTap_runningActionsCount = obj87877_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87882")[0];
	myAudio.pause();
	window.obj87877_onTap_runningActionsCount = window.obj87877_onTap_runningActionsCount - 1;
if (window.obj87877_onTap_runningActionsCount < 0) {
	window.obj87877_onTap_runningActionsCount = 0;
} else if (window.obj87877_onTap_runningActionsCount == 0) {
	obj87877_onTap_actionGroup1();
}
}








};
obj87877_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87877_onTap_activeActionGroupIndex = -1;
		$("#obj87877").trigger("obj87877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87877) {
				console.warn("de-queueing event obj87877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87877_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87877 
hide_87880();
function hide_87880() {
	var selector = "#obj87877";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87877_onTap_runningActionsCount = obj87877_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87877_onTap_runningActionsCount = window.obj87877_onTap_runningActionsCount - 1;
if (window.obj87877_onTap_runningActionsCount < 0) {
	window.obj87877_onTap_runningActionsCount = 0;
} else if (window.obj87877_onTap_runningActionsCount == 0) {
	obj87877_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87880(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87877_onTap_runningActionsCount = window.obj87877_onTap_runningActionsCount - 1;
if (window.obj87877_onTap_runningActionsCount < 0) {
	window.obj87877_onTap_runningActionsCount = 0;
} else if (window.obj87877_onTap_runningActionsCount == 0) {
	obj87877_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87877_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87877_onTap_activeActionGroupIndex = -1;
		$("#obj87877").trigger("obj87877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87877) {
				console.warn("de-queueing event obj87877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87877_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87872
(function(){
	window.obj87877_onTap_runningActionsCount = obj87877_onTap_runningActionsCount + 1;

	var selector = "#obj87872";
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
					window.obj87877_onTap_runningActionsCount = window.obj87877_onTap_runningActionsCount - 1;
if (window.obj87877_onTap_runningActionsCount < 0) {
	window.obj87877_onTap_runningActionsCount = 0;
} else if (window.obj87877_onTap_runningActionsCount == 0) {
	obj87877_onTap_actionGroup3();
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
				window.obj87877_onTap_runningActionsCount = window.obj87877_onTap_runningActionsCount - 1;
if (window.obj87877_onTap_runningActionsCount < 0) {
	window.obj87877_onTap_runningActionsCount = 0;
} else if (window.obj87877_onTap_runningActionsCount == 0) {
	obj87877_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87877_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87877_onTap_activeActionGroupIndex = -1;
		$("#obj87877").trigger("obj87877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87877) {
				console.warn("de-queueing event obj87877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87877_onTap_activeActionGroupIndex = 3;
	





















};
obj87872_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87872_onTap_activeActionGroupIndex = -1;
		$("#obj87872").trigger("obj87872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87872) {
				console.warn("de-queueing event obj87872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87872_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87872 
hide_87874();
function hide_87874() {
	var selector = "#obj87872";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87872_onTap_runningActionsCount = obj87872_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87872_onTap_runningActionsCount = window.obj87872_onTap_runningActionsCount - 1;
if (window.obj87872_onTap_runningActionsCount < 0) {
	window.obj87872_onTap_runningActionsCount = 0;
} else if (window.obj87872_onTap_runningActionsCount == 0) {
	obj87872_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87874(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87872_onTap_runningActionsCount = window.obj87872_onTap_runningActionsCount - 1;
if (window.obj87872_onTap_runningActionsCount < 0) {
	window.obj87872_onTap_runningActionsCount = 0;
} else if (window.obj87872_onTap_runningActionsCount == 0) {
	obj87872_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87872_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87872_onTap_activeActionGroupIndex = -1;
		$("#obj87872").trigger("obj87872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87872) {
				console.warn("de-queueing event obj87872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87872_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87877
(function(){
	window.obj87872_onTap_runningActionsCount = obj87872_onTap_runningActionsCount + 1;

	var selector = "#obj87877";
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
					window.obj87872_onTap_runningActionsCount = window.obj87872_onTap_runningActionsCount - 1;
if (window.obj87872_onTap_runningActionsCount < 0) {
	window.obj87872_onTap_runningActionsCount = 0;
} else if (window.obj87872_onTap_runningActionsCount == 0) {
	obj87872_onTap_actionGroup2();
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
				window.obj87872_onTap_runningActionsCount = window.obj87872_onTap_runningActionsCount - 1;
if (window.obj87872_onTap_runningActionsCount < 0) {
	window.obj87872_onTap_runningActionsCount = 0;
} else if (window.obj87872_onTap_runningActionsCount == 0) {
	obj87872_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87872_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87872_onTap_activeActionGroupIndex = -1;
		$("#obj87872").trigger("obj87872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87872) {
				console.warn("de-queueing event obj87872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87872_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87882 
playAudio_87876();
function playAudio_87876() {
	window.obj87872_onTap_runningActionsCount = obj87872_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87882")[0];
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
		    window.obj87872_onTap_runningActionsCount = window.obj87872_onTap_runningActionsCount - 1;
if (window.obj87872_onTap_runningActionsCount < 0) {
	window.obj87872_onTap_runningActionsCount = 0;
} else if (window.obj87872_onTap_runningActionsCount == 0) {
	obj87872_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87872_onTap_runningActionsCount = window.obj87872_onTap_runningActionsCount - 1;
if (window.obj87872_onTap_runningActionsCount < 0) {
	window.obj87872_onTap_runningActionsCount = 0;
} else if (window.obj87872_onTap_runningActionsCount == 0) {
	obj87872_onTap_actionGroup3();
}
	}
}









};
obj87872_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87872_onTap_activeActionGroupIndex = -1;
		$("#obj87872").trigger("obj87872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87872) {
				console.warn("de-queueing event obj87872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87872_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj78127: Event Touch Down
 *
 */
$("#obj78127").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78127_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78127_onTap is still running");
	return;
}
var obj78127_onTap_runningActionsCount = 0;
var obj78127_onTap_loopCount = 0;
obj78127_onTap_actionGroup0();
});










/*
 *
 *   obj78124: Event Touch Down
 *
 */
$("#obj78124").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78124_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78124_onTap is still running");
	return;
}
var obj78124_onTap_runningActionsCount = 0;
var obj78124_onTap_loopCount = 0;
obj78124_onTap_actionGroup0();
});








































/*
 *
 *   obj78100: Event Touch Down
 *
 */
$("#obj78100").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78100_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78100_onTap is still running");
	return;
}
var obj78100_onTap_runningActionsCount = 0;
var obj78100_onTap_loopCount = 0;
obj78100_onTap_actionGroup0();
});










/*
 *
 *   obj78092: Event Touch Down
 *
 */
$("#obj78092").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78092_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78092_onTap is still running");
	return;
}
var obj78092_onTap_runningActionsCount = 0;
var obj78092_onTap_loopCount = 0;
obj78092_onTap_actionGroup0();
});










/*
 *
 *   obj87877: Event Touch Down
 *
 */
$("#obj87877").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87877_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87877_onTap is still running");
	return;
}
var obj87877_onTap_runningActionsCount = 0;
var obj87877_onTap_loopCount = 0;
obj87877_onTap_actionGroup0();
});










/*
 *
 *   obj87872: Event Touch Down
 *
 */
$("#obj87872").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87872_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87872_onTap is still running");
	return;
}
var obj87872_onTap_runningActionsCount = 0;
var obj87872_onTap_loopCount = 0;
obj87872_onTap_actionGroup0();
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
	
$("#obj78130").trigger('SCEventShow');
$("#obj78127").trigger('SCEventShow');
$("#obj78124").trigger('SCEventShow');
$("#obj78122").trigger('SCEventShow');
$("#obj78120").trigger('SCEventShow');
$("#obj78118").trigger('SCEventShow');
$("#obj78100").trigger('SCEventShow');
$("#obj78092").trigger('SCEventShow');
$("#obj87877").trigger('SCEventShow');
$("#obj87872").trigger('SCEventShow');
$("#obj87882").trigger('SCEventShow');
$("#obj94797").trigger('SCEventShow');
$("#obj78090").trigger('SCEventShow');
	
});