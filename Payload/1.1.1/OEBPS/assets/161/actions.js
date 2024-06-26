pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 46183;
pubcoder.page.title = pubcoder.page.title || "161";
pubcoder.page.number = pubcoder.page.number || 161;
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
var obj46191_onTap_activeActionGroupIndex = -1;
var obj46191_onTap_runningActionsCount = 0;
var obj46191_onTap_loopCount = 0;
var obj46188_onTap_activeActionGroupIndex = -1;
var obj46188_onTap_runningActionsCount = 0;
var obj46188_onTap_loopCount = 0;
var obj67582_onTap_activeActionGroupIndex = -1;
var obj67582_onTap_runningActionsCount = 0;
var obj67582_onTap_loopCount = 0;
var obj67574_onTap_activeActionGroupIndex = -1;
var obj67574_onTap_runningActionsCount = 0;
var obj67574_onTap_loopCount = 0;
var obj88813_onTap_activeActionGroupIndex = -1;
var obj88813_onTap_runningActionsCount = 0;
var obj88813_onTap_loopCount = 0;
var obj88808_onTap_activeActionGroupIndex = -1;
var obj88808_onTap_runningActionsCount = 0;
var obj88808_onTap_loopCount = 0;
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
		
obj46191_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46191_onTap_activeActionGroupIndex = -1;
		$("#obj46191").trigger("obj46191_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46191) {
				console.warn("de-queueing event obj46191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46191_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46193();
function goToPage_46193() {
	window.obj46191_onTap_runningActionsCount = obj46191_onTap_runningActionsCount + 1;
	$("#anchor948")[0].click();
	window.obj46191_onTap_runningActionsCount = window.obj46191_onTap_runningActionsCount - 1;
if (window.obj46191_onTap_runningActionsCount < 0) {
	window.obj46191_onTap_runningActionsCount = 0;
} else if (window.obj46191_onTap_runningActionsCount == 0) {
	obj46191_onTap_actionGroup1();
}
}





















};
obj46191_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46191_onTap_activeActionGroupIndex = -1;
		$("#obj46191").trigger("obj46191_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46191) {
				console.warn("de-queueing event obj46191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46191_onTap_activeActionGroupIndex = 1;
	





















};
obj46188_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46188_onTap_activeActionGroupIndex = -1;
		$("#obj46188").trigger("obj46188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46188) {
				console.warn("de-queueing event obj46188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46188_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46190();
function goToPage_46190() {
	window.obj46188_onTap_runningActionsCount = obj46188_onTap_runningActionsCount + 1;
	$("#anchor949")[0].click();
	window.obj46188_onTap_runningActionsCount = window.obj46188_onTap_runningActionsCount - 1;
if (window.obj46188_onTap_runningActionsCount < 0) {
	window.obj46188_onTap_runningActionsCount = 0;
} else if (window.obj46188_onTap_runningActionsCount == 0) {
	obj46188_onTap_actionGroup1();
}
}





















};
obj46188_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46188_onTap_activeActionGroupIndex = -1;
		$("#obj46188").trigger("obj46188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46188) {
				console.warn("de-queueing event obj46188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46188_onTap_activeActionGroupIndex = 1;
	





















};
obj67582_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67582_onTap_activeActionGroupIndex = -1;
		$("#obj67582").trigger("obj67582_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67582) {
				console.warn("de-queueing event obj67582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67582_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67582 
hide_67585();
function hide_67585() {
	var selector = "#obj67582";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67582_onTap_runningActionsCount = obj67582_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67582_onTap_runningActionsCount = window.obj67582_onTap_runningActionsCount - 1;
if (window.obj67582_onTap_runningActionsCount < 0) {
	window.obj67582_onTap_runningActionsCount = 0;
} else if (window.obj67582_onTap_runningActionsCount == 0) {
	obj67582_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67585(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67582_onTap_runningActionsCount = window.obj67582_onTap_runningActionsCount - 1;
if (window.obj67582_onTap_runningActionsCount < 0) {
	window.obj67582_onTap_runningActionsCount = 0;
} else if (window.obj67582_onTap_runningActionsCount == 0) {
	obj67582_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67588 
stopMovie_67584();
function stopMovie_67584() {
	window.obj67582_onTap_runningActionsCount = obj67582_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67588")[0];
	myVideo.pause();
	window.obj67582_onTap_runningActionsCount = window.obj67582_onTap_runningActionsCount - 1;
if (window.obj67582_onTap_runningActionsCount < 0) {
	window.obj67582_onTap_runningActionsCount = 0;
} else if (window.obj67582_onTap_runningActionsCount == 0) {
	obj67582_onTap_actionGroup1();
}
}
















};
obj67582_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67582_onTap_activeActionGroupIndex = -1;
		$("#obj67582").trigger("obj67582_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67582) {
				console.warn("de-queueing event obj67582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67582_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67574
(function(){
	window.obj67582_onTap_runningActionsCount = obj67582_onTap_runningActionsCount + 1;

	var selector = "#obj67574";
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
					window.obj67582_onTap_runningActionsCount = window.obj67582_onTap_runningActionsCount - 1;
if (window.obj67582_onTap_runningActionsCount < 0) {
	window.obj67582_onTap_runningActionsCount = 0;
} else if (window.obj67582_onTap_runningActionsCount == 0) {
	obj67582_onTap_actionGroup2();
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
				window.obj67582_onTap_runningActionsCount = window.obj67582_onTap_runningActionsCount - 1;
if (window.obj67582_onTap_runningActionsCount < 0) {
	window.obj67582_onTap_runningActionsCount = 0;
} else if (window.obj67582_onTap_runningActionsCount == 0) {
	obj67582_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67582_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67582_onTap_activeActionGroupIndex = -1;
		$("#obj67582").trigger("obj67582_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67582) {
				console.warn("de-queueing event obj67582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67582_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67588 
move_67587();
function move_67587() {
	window.obj67582_onTap_runningActionsCount = obj67582_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67588");
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
			window.obj67582_onTap_runningActionsCount = window.obj67582_onTap_runningActionsCount - 1;
if (window.obj67582_onTap_runningActionsCount < 0) {
	window.obj67582_onTap_runningActionsCount = 0;
} else if (window.obj67582_onTap_runningActionsCount == 0) {
	obj67582_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67582_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67582_onTap_activeActionGroupIndex = -1;
		$("#obj67582").trigger("obj67582_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67582) {
				console.warn("de-queueing event obj67582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67582_onTap_activeActionGroupIndex = 3;
	





















};
obj67574_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67574_onTap_activeActionGroupIndex = -1;
		$("#obj67574").trigger("obj67574_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67574) {
				console.warn("de-queueing event obj67574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67574_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67574 
hide_67577();
function hide_67577() {
	var selector = "#obj67574";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67574_onTap_runningActionsCount = obj67574_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67574_onTap_runningActionsCount = window.obj67574_onTap_runningActionsCount - 1;
if (window.obj67574_onTap_runningActionsCount < 0) {
	window.obj67574_onTap_runningActionsCount = 0;
} else if (window.obj67574_onTap_runningActionsCount == 0) {
	obj67574_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67577(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67574_onTap_runningActionsCount = window.obj67574_onTap_runningActionsCount - 1;
if (window.obj67574_onTap_runningActionsCount < 0) {
	window.obj67574_onTap_runningActionsCount = 0;
} else if (window.obj67574_onTap_runningActionsCount == 0) {
	obj67574_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67588 
playPauseMovie_67576();
function playPauseMovie_67576() {
	window.obj67574_onTap_runningActionsCount = obj67574_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67588")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67574_onTap_runningActionsCount = window.obj67574_onTap_runningActionsCount - 1;
if (window.obj67574_onTap_runningActionsCount < 0) {
	window.obj67574_onTap_runningActionsCount = 0;
} else if (window.obj67574_onTap_runningActionsCount == 0) {
	obj67574_onTap_actionGroup1();
}
}

















};
obj67574_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67574_onTap_activeActionGroupIndex = -1;
		$("#obj67574").trigger("obj67574_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67574) {
				console.warn("de-queueing event obj67574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67574_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67582
(function(){
	window.obj67574_onTap_runningActionsCount = obj67574_onTap_runningActionsCount + 1;

	var selector = "#obj67582";
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
					window.obj67574_onTap_runningActionsCount = window.obj67574_onTap_runningActionsCount - 1;
if (window.obj67574_onTap_runningActionsCount < 0) {
	window.obj67574_onTap_runningActionsCount = 0;
} else if (window.obj67574_onTap_runningActionsCount == 0) {
	obj67574_onTap_actionGroup2();
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
				window.obj67574_onTap_runningActionsCount = window.obj67574_onTap_runningActionsCount - 1;
if (window.obj67574_onTap_runningActionsCount < 0) {
	window.obj67574_onTap_runningActionsCount = 0;
} else if (window.obj67574_onTap_runningActionsCount == 0) {
	obj67574_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67574_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67574_onTap_activeActionGroupIndex = -1;
		$("#obj67574").trigger("obj67574_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67574) {
				console.warn("de-queueing event obj67574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67574_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67588 
move_67579();
function move_67579() {
	window.obj67574_onTap_runningActionsCount = obj67574_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67588");
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
			window.obj67574_onTap_runningActionsCount = window.obj67574_onTap_runningActionsCount - 1;
if (window.obj67574_onTap_runningActionsCount < 0) {
	window.obj67574_onTap_runningActionsCount = 0;
} else if (window.obj67574_onTap_runningActionsCount == 0) {
	obj67574_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67574_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67574_onTap_activeActionGroupIndex = -1;
		$("#obj67574").trigger("obj67574_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67574) {
				console.warn("de-queueing event obj67574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67574_onTap_activeActionGroupIndex = 3;
	





















};
obj88813_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88813_onTap_activeActionGroupIndex = -1;
		$("#obj88813").trigger("obj88813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88813) {
				console.warn("de-queueing event obj88813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88813_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88818 
stopAudio_88815();
function stopAudio_88815() {
	window.obj88813_onTap_runningActionsCount = obj88813_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88818")[0];
	myAudio.pause();
	window.obj88813_onTap_runningActionsCount = window.obj88813_onTap_runningActionsCount - 1;
if (window.obj88813_onTap_runningActionsCount < 0) {
	window.obj88813_onTap_runningActionsCount = 0;
} else if (window.obj88813_onTap_runningActionsCount == 0) {
	obj88813_onTap_actionGroup1();
}
}








};
obj88813_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88813_onTap_activeActionGroupIndex = -1;
		$("#obj88813").trigger("obj88813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88813) {
				console.warn("de-queueing event obj88813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88813_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88813 
hide_88816();
function hide_88816() {
	var selector = "#obj88813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88813_onTap_runningActionsCount = obj88813_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88813_onTap_runningActionsCount = window.obj88813_onTap_runningActionsCount - 1;
if (window.obj88813_onTap_runningActionsCount < 0) {
	window.obj88813_onTap_runningActionsCount = 0;
} else if (window.obj88813_onTap_runningActionsCount == 0) {
	obj88813_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88816(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88813_onTap_runningActionsCount = window.obj88813_onTap_runningActionsCount - 1;
if (window.obj88813_onTap_runningActionsCount < 0) {
	window.obj88813_onTap_runningActionsCount = 0;
} else if (window.obj88813_onTap_runningActionsCount == 0) {
	obj88813_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88813_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88813_onTap_activeActionGroupIndex = -1;
		$("#obj88813").trigger("obj88813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88813) {
				console.warn("de-queueing event obj88813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88813_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88808
(function(){
	window.obj88813_onTap_runningActionsCount = obj88813_onTap_runningActionsCount + 1;

	var selector = "#obj88808";
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
					window.obj88813_onTap_runningActionsCount = window.obj88813_onTap_runningActionsCount - 1;
if (window.obj88813_onTap_runningActionsCount < 0) {
	window.obj88813_onTap_runningActionsCount = 0;
} else if (window.obj88813_onTap_runningActionsCount == 0) {
	obj88813_onTap_actionGroup3();
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
				window.obj88813_onTap_runningActionsCount = window.obj88813_onTap_runningActionsCount - 1;
if (window.obj88813_onTap_runningActionsCount < 0) {
	window.obj88813_onTap_runningActionsCount = 0;
} else if (window.obj88813_onTap_runningActionsCount == 0) {
	obj88813_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88813_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88813_onTap_activeActionGroupIndex = -1;
		$("#obj88813").trigger("obj88813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88813) {
				console.warn("de-queueing event obj88813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88813_onTap_activeActionGroupIndex = 3;
	





















};
obj88808_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88808_onTap_activeActionGroupIndex = -1;
		$("#obj88808").trigger("obj88808_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88808) {
				console.warn("de-queueing event obj88808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88808_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88808 
hide_88810();
function hide_88810() {
	var selector = "#obj88808";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88808_onTap_runningActionsCount = obj88808_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88808_onTap_runningActionsCount = window.obj88808_onTap_runningActionsCount - 1;
if (window.obj88808_onTap_runningActionsCount < 0) {
	window.obj88808_onTap_runningActionsCount = 0;
} else if (window.obj88808_onTap_runningActionsCount == 0) {
	obj88808_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88810(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88808_onTap_runningActionsCount = window.obj88808_onTap_runningActionsCount - 1;
if (window.obj88808_onTap_runningActionsCount < 0) {
	window.obj88808_onTap_runningActionsCount = 0;
} else if (window.obj88808_onTap_runningActionsCount == 0) {
	obj88808_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88808_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88808_onTap_activeActionGroupIndex = -1;
		$("#obj88808").trigger("obj88808_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88808) {
				console.warn("de-queueing event obj88808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88808_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88813
(function(){
	window.obj88808_onTap_runningActionsCount = obj88808_onTap_runningActionsCount + 1;

	var selector = "#obj88813";
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
					window.obj88808_onTap_runningActionsCount = window.obj88808_onTap_runningActionsCount - 1;
if (window.obj88808_onTap_runningActionsCount < 0) {
	window.obj88808_onTap_runningActionsCount = 0;
} else if (window.obj88808_onTap_runningActionsCount == 0) {
	obj88808_onTap_actionGroup2();
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
				window.obj88808_onTap_runningActionsCount = window.obj88808_onTap_runningActionsCount - 1;
if (window.obj88808_onTap_runningActionsCount < 0) {
	window.obj88808_onTap_runningActionsCount = 0;
} else if (window.obj88808_onTap_runningActionsCount == 0) {
	obj88808_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88808_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88808_onTap_activeActionGroupIndex = -1;
		$("#obj88808").trigger("obj88808_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88808) {
				console.warn("de-queueing event obj88808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88808_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88818 
playAudio_88812();
function playAudio_88812() {
	window.obj88808_onTap_runningActionsCount = obj88808_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88818")[0];
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
		    window.obj88808_onTap_runningActionsCount = window.obj88808_onTap_runningActionsCount - 1;
if (window.obj88808_onTap_runningActionsCount < 0) {
	window.obj88808_onTap_runningActionsCount = 0;
} else if (window.obj88808_onTap_runningActionsCount == 0) {
	obj88808_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88808_onTap_runningActionsCount = window.obj88808_onTap_runningActionsCount - 1;
if (window.obj88808_onTap_runningActionsCount < 0) {
	window.obj88808_onTap_runningActionsCount = 0;
} else if (window.obj88808_onTap_runningActionsCount == 0) {
	obj88808_onTap_actionGroup3();
}
	}
}









};
obj88808_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88808_onTap_activeActionGroupIndex = -1;
		$("#obj88808").trigger("obj88808_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88808) {
				console.warn("de-queueing event obj88808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88808_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj46191: Event Touch Down
 *
 */
$("#obj46191").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46191_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46191_onTap is still running");
	return;
}
var obj46191_onTap_runningActionsCount = 0;
var obj46191_onTap_loopCount = 0;
obj46191_onTap_actionGroup0();
});










/*
 *
 *   obj46188: Event Touch Down
 *
 */
$("#obj46188").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46188_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46188_onTap is still running");
	return;
}
var obj46188_onTap_runningActionsCount = 0;
var obj46188_onTap_loopCount = 0;
obj46188_onTap_actionGroup0();
});






























/*
 *
 *   obj67582: Event Touch Down
 *
 */
$("#obj67582").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67582_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67582_onTap is still running");
	return;
}
var obj67582_onTap_runningActionsCount = 0;
var obj67582_onTap_loopCount = 0;
obj67582_onTap_actionGroup0();
});










/*
 *
 *   obj67574: Event Touch Down
 *
 */
$("#obj67574").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67574_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67574_onTap is still running");
	return;
}
var obj67574_onTap_runningActionsCount = 0;
var obj67574_onTap_loopCount = 0;
obj67574_onTap_actionGroup0();
});










/*
 *
 *   obj88813: Event Touch Down
 *
 */
$("#obj88813").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88813_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88813_onTap is still running");
	return;
}
var obj88813_onTap_runningActionsCount = 0;
var obj88813_onTap_loopCount = 0;
obj88813_onTap_actionGroup0();
});










/*
 *
 *   obj88808: Event Touch Down
 *
 */
$("#obj88808").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88808_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88808_onTap is still running");
	return;
}
var obj88808_onTap_runningActionsCount = 0;
var obj88808_onTap_loopCount = 0;
obj88808_onTap_actionGroup0();
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
	
$("#obj46207").trigger('SCEventShow');
$("#obj46191").trigger('SCEventShow');
$("#obj46188").trigger('SCEventShow');
$("#obj46186").trigger('SCEventShow');
$("#obj46184").trigger('SCEventShow');
$("#obj67582").trigger('SCEventShow');
$("#obj67574").trigger('SCEventShow');
$("#obj88813").trigger('SCEventShow');
$("#obj88808").trigger('SCEventShow');
$("#obj88818").trigger('SCEventShow');
$("#obj94951").trigger('SCEventShow');
$("#obj67588").trigger('SCEventShow');
	
});