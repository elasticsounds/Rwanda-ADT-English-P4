pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 6919;
pubcoder.page.title = pubcoder.page.title || "34";
pubcoder.page.number = pubcoder.page.number || 34;
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
var obj68620_onTap_activeActionGroupIndex = -1;
var obj68620_onTap_runningActionsCount = 0;
var obj68620_onTap_loopCount = 0;
var obj68617_onTap_activeActionGroupIndex = -1;
var obj68617_onTap_runningActionsCount = 0;
var obj68617_onTap_loopCount = 0;
var obj68595_onTap_activeActionGroupIndex = -1;
var obj68595_onTap_runningActionsCount = 0;
var obj68595_onTap_loopCount = 0;
var obj68587_onTap_activeActionGroupIndex = -1;
var obj68587_onTap_runningActionsCount = 0;
var obj68587_onTap_loopCount = 0;
var obj87135_onTap_activeActionGroupIndex = -1;
var obj87135_onTap_runningActionsCount = 0;
var obj87135_onTap_loopCount = 0;
var obj87130_onTap_activeActionGroupIndex = -1;
var obj87130_onTap_runningActionsCount = 0;
var obj87130_onTap_loopCount = 0;
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
		
obj68620_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68620_onTap_activeActionGroupIndex = -1;
		$("#obj68620").trigger("obj68620_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68620) {
				console.warn("de-queueing event obj68620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68620_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68622();
function goToPage_68622() {
	window.obj68620_onTap_runningActionsCount = obj68620_onTap_runningActionsCount + 1;
	$("#anchor210")[0].click();
	window.obj68620_onTap_runningActionsCount = window.obj68620_onTap_runningActionsCount - 1;
if (window.obj68620_onTap_runningActionsCount < 0) {
	window.obj68620_onTap_runningActionsCount = 0;
} else if (window.obj68620_onTap_runningActionsCount == 0) {
	obj68620_onTap_actionGroup1();
}
}





















};
obj68620_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68620_onTap_activeActionGroupIndex = -1;
		$("#obj68620").trigger("obj68620_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68620) {
				console.warn("de-queueing event obj68620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68620_onTap_activeActionGroupIndex = 1;
	





















};
obj68617_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68617_onTap_activeActionGroupIndex = -1;
		$("#obj68617").trigger("obj68617_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68617) {
				console.warn("de-queueing event obj68617." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68617").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68617_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68619();
function goToPage_68619() {
	window.obj68617_onTap_runningActionsCount = obj68617_onTap_runningActionsCount + 1;
	$("#anchor211")[0].click();
	window.obj68617_onTap_runningActionsCount = window.obj68617_onTap_runningActionsCount - 1;
if (window.obj68617_onTap_runningActionsCount < 0) {
	window.obj68617_onTap_runningActionsCount = 0;
} else if (window.obj68617_onTap_runningActionsCount == 0) {
	obj68617_onTap_actionGroup1();
}
}





















};
obj68617_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68617_onTap_activeActionGroupIndex = -1;
		$("#obj68617").trigger("obj68617_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68617) {
				console.warn("de-queueing event obj68617." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68617").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68617_onTap_activeActionGroupIndex = 1;
	





















};
obj68595_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68595_onTap_activeActionGroupIndex = -1;
		$("#obj68595").trigger("obj68595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68595) {
				console.warn("de-queueing event obj68595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68595_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68595 
hide_68598();
function hide_68598() {
	var selector = "#obj68595";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68595_onTap_runningActionsCount = obj68595_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68595_onTap_runningActionsCount = window.obj68595_onTap_runningActionsCount - 1;
if (window.obj68595_onTap_runningActionsCount < 0) {
	window.obj68595_onTap_runningActionsCount = 0;
} else if (window.obj68595_onTap_runningActionsCount == 0) {
	obj68595_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68598(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68595_onTap_runningActionsCount = window.obj68595_onTap_runningActionsCount - 1;
if (window.obj68595_onTap_runningActionsCount < 0) {
	window.obj68595_onTap_runningActionsCount = 0;
} else if (window.obj68595_onTap_runningActionsCount == 0) {
	obj68595_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68585 
stopMovie_68597();
function stopMovie_68597() {
	window.obj68595_onTap_runningActionsCount = obj68595_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68585")[0];
	myVideo.pause();
	window.obj68595_onTap_runningActionsCount = window.obj68595_onTap_runningActionsCount - 1;
if (window.obj68595_onTap_runningActionsCount < 0) {
	window.obj68595_onTap_runningActionsCount = 0;
} else if (window.obj68595_onTap_runningActionsCount == 0) {
	obj68595_onTap_actionGroup1();
}
}
















};
obj68595_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68595_onTap_activeActionGroupIndex = -1;
		$("#obj68595").trigger("obj68595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68595) {
				console.warn("de-queueing event obj68595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68595_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68587
(function(){
	window.obj68595_onTap_runningActionsCount = obj68595_onTap_runningActionsCount + 1;

	var selector = "#obj68587";
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
					window.obj68595_onTap_runningActionsCount = window.obj68595_onTap_runningActionsCount - 1;
if (window.obj68595_onTap_runningActionsCount < 0) {
	window.obj68595_onTap_runningActionsCount = 0;
} else if (window.obj68595_onTap_runningActionsCount == 0) {
	obj68595_onTap_actionGroup2();
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
				window.obj68595_onTap_runningActionsCount = window.obj68595_onTap_runningActionsCount - 1;
if (window.obj68595_onTap_runningActionsCount < 0) {
	window.obj68595_onTap_runningActionsCount = 0;
} else if (window.obj68595_onTap_runningActionsCount == 0) {
	obj68595_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68595_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68595_onTap_activeActionGroupIndex = -1;
		$("#obj68595").trigger("obj68595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68595) {
				console.warn("de-queueing event obj68595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68595_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68585 
move_68600();
function move_68600() {
	window.obj68595_onTap_runningActionsCount = obj68595_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68585");
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
			window.obj68595_onTap_runningActionsCount = window.obj68595_onTap_runningActionsCount - 1;
if (window.obj68595_onTap_runningActionsCount < 0) {
	window.obj68595_onTap_runningActionsCount = 0;
} else if (window.obj68595_onTap_runningActionsCount == 0) {
	obj68595_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68595_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68595_onTap_activeActionGroupIndex = -1;
		$("#obj68595").trigger("obj68595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68595) {
				console.warn("de-queueing event obj68595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68595_onTap_activeActionGroupIndex = 3;
	





















};
obj68587_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68587_onTap_activeActionGroupIndex = -1;
		$("#obj68587").trigger("obj68587_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68587) {
				console.warn("de-queueing event obj68587." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68587").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68587_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68587 
hide_68590();
function hide_68590() {
	var selector = "#obj68587";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68587_onTap_runningActionsCount = obj68587_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68587_onTap_runningActionsCount = window.obj68587_onTap_runningActionsCount - 1;
if (window.obj68587_onTap_runningActionsCount < 0) {
	window.obj68587_onTap_runningActionsCount = 0;
} else if (window.obj68587_onTap_runningActionsCount == 0) {
	obj68587_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68590(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68587_onTap_runningActionsCount = window.obj68587_onTap_runningActionsCount - 1;
if (window.obj68587_onTap_runningActionsCount < 0) {
	window.obj68587_onTap_runningActionsCount = 0;
} else if (window.obj68587_onTap_runningActionsCount == 0) {
	obj68587_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68585 
playPauseMovie_68589();
function playPauseMovie_68589() {
	window.obj68587_onTap_runningActionsCount = obj68587_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68585")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68587_onTap_runningActionsCount = window.obj68587_onTap_runningActionsCount - 1;
if (window.obj68587_onTap_runningActionsCount < 0) {
	window.obj68587_onTap_runningActionsCount = 0;
} else if (window.obj68587_onTap_runningActionsCount == 0) {
	obj68587_onTap_actionGroup1();
}
}

















};
obj68587_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68587_onTap_activeActionGroupIndex = -1;
		$("#obj68587").trigger("obj68587_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68587) {
				console.warn("de-queueing event obj68587." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68587").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68587_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68595
(function(){
	window.obj68587_onTap_runningActionsCount = obj68587_onTap_runningActionsCount + 1;

	var selector = "#obj68595";
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
					window.obj68587_onTap_runningActionsCount = window.obj68587_onTap_runningActionsCount - 1;
if (window.obj68587_onTap_runningActionsCount < 0) {
	window.obj68587_onTap_runningActionsCount = 0;
} else if (window.obj68587_onTap_runningActionsCount == 0) {
	obj68587_onTap_actionGroup2();
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
				window.obj68587_onTap_runningActionsCount = window.obj68587_onTap_runningActionsCount - 1;
if (window.obj68587_onTap_runningActionsCount < 0) {
	window.obj68587_onTap_runningActionsCount = 0;
} else if (window.obj68587_onTap_runningActionsCount == 0) {
	obj68587_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68587_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68587_onTap_activeActionGroupIndex = -1;
		$("#obj68587").trigger("obj68587_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68587) {
				console.warn("de-queueing event obj68587." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68587").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68587_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68585 
move_68592();
function move_68592() {
	window.obj68587_onTap_runningActionsCount = obj68587_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68585");
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
			window.obj68587_onTap_runningActionsCount = window.obj68587_onTap_runningActionsCount - 1;
if (window.obj68587_onTap_runningActionsCount < 0) {
	window.obj68587_onTap_runningActionsCount = 0;
} else if (window.obj68587_onTap_runningActionsCount == 0) {
	obj68587_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68587_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68587_onTap_activeActionGroupIndex = -1;
		$("#obj68587").trigger("obj68587_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68587) {
				console.warn("de-queueing event obj68587." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68587").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68587_onTap_activeActionGroupIndex = 3;
	





















};
obj87135_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87135_onTap_activeActionGroupIndex = -1;
		$("#obj87135").trigger("obj87135_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87135) {
				console.warn("de-queueing event obj87135." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87135").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87135_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87140 
stopAudio_87137();
function stopAudio_87137() {
	window.obj87135_onTap_runningActionsCount = obj87135_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87140")[0];
	myAudio.pause();
	window.obj87135_onTap_runningActionsCount = window.obj87135_onTap_runningActionsCount - 1;
if (window.obj87135_onTap_runningActionsCount < 0) {
	window.obj87135_onTap_runningActionsCount = 0;
} else if (window.obj87135_onTap_runningActionsCount == 0) {
	obj87135_onTap_actionGroup1();
}
}








};
obj87135_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87135_onTap_activeActionGroupIndex = -1;
		$("#obj87135").trigger("obj87135_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87135) {
				console.warn("de-queueing event obj87135." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87135").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87135_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87135 
hide_87138();
function hide_87138() {
	var selector = "#obj87135";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87135_onTap_runningActionsCount = obj87135_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87135_onTap_runningActionsCount = window.obj87135_onTap_runningActionsCount - 1;
if (window.obj87135_onTap_runningActionsCount < 0) {
	window.obj87135_onTap_runningActionsCount = 0;
} else if (window.obj87135_onTap_runningActionsCount == 0) {
	obj87135_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87138(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87135_onTap_runningActionsCount = window.obj87135_onTap_runningActionsCount - 1;
if (window.obj87135_onTap_runningActionsCount < 0) {
	window.obj87135_onTap_runningActionsCount = 0;
} else if (window.obj87135_onTap_runningActionsCount == 0) {
	obj87135_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87135_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87135_onTap_activeActionGroupIndex = -1;
		$("#obj87135").trigger("obj87135_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87135) {
				console.warn("de-queueing event obj87135." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87135").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87135_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87130
(function(){
	window.obj87135_onTap_runningActionsCount = obj87135_onTap_runningActionsCount + 1;

	var selector = "#obj87130";
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
					window.obj87135_onTap_runningActionsCount = window.obj87135_onTap_runningActionsCount - 1;
if (window.obj87135_onTap_runningActionsCount < 0) {
	window.obj87135_onTap_runningActionsCount = 0;
} else if (window.obj87135_onTap_runningActionsCount == 0) {
	obj87135_onTap_actionGroup3();
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
				window.obj87135_onTap_runningActionsCount = window.obj87135_onTap_runningActionsCount - 1;
if (window.obj87135_onTap_runningActionsCount < 0) {
	window.obj87135_onTap_runningActionsCount = 0;
} else if (window.obj87135_onTap_runningActionsCount == 0) {
	obj87135_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87135_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87135_onTap_activeActionGroupIndex = -1;
		$("#obj87135").trigger("obj87135_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87135) {
				console.warn("de-queueing event obj87135." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87135").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87135_onTap_activeActionGroupIndex = 3;
	





















};
obj87130_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87130_onTap_activeActionGroupIndex = -1;
		$("#obj87130").trigger("obj87130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87130) {
				console.warn("de-queueing event obj87130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87130_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87130 
hide_87132();
function hide_87132() {
	var selector = "#obj87130";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87130_onTap_runningActionsCount = obj87130_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87130_onTap_runningActionsCount = window.obj87130_onTap_runningActionsCount - 1;
if (window.obj87130_onTap_runningActionsCount < 0) {
	window.obj87130_onTap_runningActionsCount = 0;
} else if (window.obj87130_onTap_runningActionsCount == 0) {
	obj87130_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87132(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87130_onTap_runningActionsCount = window.obj87130_onTap_runningActionsCount - 1;
if (window.obj87130_onTap_runningActionsCount < 0) {
	window.obj87130_onTap_runningActionsCount = 0;
} else if (window.obj87130_onTap_runningActionsCount == 0) {
	obj87130_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87130_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87130_onTap_activeActionGroupIndex = -1;
		$("#obj87130").trigger("obj87130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87130) {
				console.warn("de-queueing event obj87130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87130_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87135
(function(){
	window.obj87130_onTap_runningActionsCount = obj87130_onTap_runningActionsCount + 1;

	var selector = "#obj87135";
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
					window.obj87130_onTap_runningActionsCount = window.obj87130_onTap_runningActionsCount - 1;
if (window.obj87130_onTap_runningActionsCount < 0) {
	window.obj87130_onTap_runningActionsCount = 0;
} else if (window.obj87130_onTap_runningActionsCount == 0) {
	obj87130_onTap_actionGroup2();
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
				window.obj87130_onTap_runningActionsCount = window.obj87130_onTap_runningActionsCount - 1;
if (window.obj87130_onTap_runningActionsCount < 0) {
	window.obj87130_onTap_runningActionsCount = 0;
} else if (window.obj87130_onTap_runningActionsCount == 0) {
	obj87130_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87130_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87130_onTap_activeActionGroupIndex = -1;
		$("#obj87130").trigger("obj87130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87130) {
				console.warn("de-queueing event obj87130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87130_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87140 
playAudio_87134();
function playAudio_87134() {
	window.obj87130_onTap_runningActionsCount = obj87130_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87140")[0];
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
		    window.obj87130_onTap_runningActionsCount = window.obj87130_onTap_runningActionsCount - 1;
if (window.obj87130_onTap_runningActionsCount < 0) {
	window.obj87130_onTap_runningActionsCount = 0;
} else if (window.obj87130_onTap_runningActionsCount == 0) {
	obj87130_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87130_onTap_runningActionsCount = window.obj87130_onTap_runningActionsCount - 1;
if (window.obj87130_onTap_runningActionsCount < 0) {
	window.obj87130_onTap_runningActionsCount = 0;
} else if (window.obj87130_onTap_runningActionsCount == 0) {
	obj87130_onTap_actionGroup3();
}
	}
}









};
obj87130_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87130_onTap_activeActionGroupIndex = -1;
		$("#obj87130").trigger("obj87130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87130) {
				console.warn("de-queueing event obj87130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87130_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj68620: Event Touch Down
 *
 */
$("#obj68620").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68620_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68620_onTap is still running");
	return;
}
var obj68620_onTap_runningActionsCount = 0;
var obj68620_onTap_loopCount = 0;
obj68620_onTap_actionGroup0();
});










/*
 *
 *   obj68617: Event Touch Down
 *
 */
$("#obj68617").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68617_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68617_onTap is still running");
	return;
}
var obj68617_onTap_runningActionsCount = 0;
var obj68617_onTap_loopCount = 0;
obj68617_onTap_actionGroup0();
});






























/*
 *
 *   obj68595: Event Touch Down
 *
 */
$("#obj68595").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68595_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68595_onTap is still running");
	return;
}
var obj68595_onTap_runningActionsCount = 0;
var obj68595_onTap_loopCount = 0;
obj68595_onTap_actionGroup0();
});










/*
 *
 *   obj68587: Event Touch Down
 *
 */
$("#obj68587").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68587_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68587_onTap is still running");
	return;
}
var obj68587_onTap_runningActionsCount = 0;
var obj68587_onTap_loopCount = 0;
obj68587_onTap_actionGroup0();
});










/*
 *
 *   obj87135: Event Touch Down
 *
 */
$("#obj87135").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87135_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87135_onTap is still running");
	return;
}
var obj87135_onTap_runningActionsCount = 0;
var obj87135_onTap_loopCount = 0;
obj87135_onTap_actionGroup0();
});










/*
 *
 *   obj87130: Event Touch Down
 *
 */
$("#obj87130").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87130_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87130_onTap is still running");
	return;
}
var obj87130_onTap_runningActionsCount = 0;
var obj87130_onTap_loopCount = 0;
obj87130_onTap_actionGroup0();
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
	
$("#obj68623").trigger('SCEventShow');
$("#obj68620").trigger('SCEventShow');
$("#obj68617").trigger('SCEventShow');
$("#obj68615").trigger('SCEventShow');
$("#obj68613").trigger('SCEventShow');
$("#obj68595").trigger('SCEventShow');
$("#obj68587").trigger('SCEventShow');
$("#obj87135").trigger('SCEventShow');
$("#obj87130").trigger('SCEventShow');
$("#obj87140").trigger('SCEventShow');
$("#obj94697").trigger('SCEventShow');
$("#obj68585").trigger('SCEventShow');
	
});