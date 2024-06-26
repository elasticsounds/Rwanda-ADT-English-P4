pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 46562;
pubcoder.page.title = pubcoder.page.title || "164";
pubcoder.page.number = pubcoder.page.number || 164;
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
var obj46572_onTap_activeActionGroupIndex = -1;
var obj46572_onTap_runningActionsCount = 0;
var obj46572_onTap_loopCount = 0;
var obj46569_onTap_activeActionGroupIndex = -1;
var obj46569_onTap_runningActionsCount = 0;
var obj46569_onTap_loopCount = 0;
var obj67630_onTap_activeActionGroupIndex = -1;
var obj67630_onTap_runningActionsCount = 0;
var obj67630_onTap_loopCount = 0;
var obj67622_onTap_activeActionGroupIndex = -1;
var obj67622_onTap_runningActionsCount = 0;
var obj67622_onTap_loopCount = 0;
var obj88849_onTap_activeActionGroupIndex = -1;
var obj88849_onTap_runningActionsCount = 0;
var obj88849_onTap_loopCount = 0;
var obj88844_onTap_activeActionGroupIndex = -1;
var obj88844_onTap_runningActionsCount = 0;
var obj88844_onTap_loopCount = 0;
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
		
obj46572_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46572_onTap_activeActionGroupIndex = -1;
		$("#obj46572").trigger("obj46572_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46572) {
				console.warn("de-queueing event obj46572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46572_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46574();
function goToPage_46574() {
	window.obj46572_onTap_runningActionsCount = obj46572_onTap_runningActionsCount + 1;
	$("#anchor966")[0].click();
	window.obj46572_onTap_runningActionsCount = window.obj46572_onTap_runningActionsCount - 1;
if (window.obj46572_onTap_runningActionsCount < 0) {
	window.obj46572_onTap_runningActionsCount = 0;
} else if (window.obj46572_onTap_runningActionsCount == 0) {
	obj46572_onTap_actionGroup1();
}
}





















};
obj46572_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46572_onTap_activeActionGroupIndex = -1;
		$("#obj46572").trigger("obj46572_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46572) {
				console.warn("de-queueing event obj46572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46572_onTap_activeActionGroupIndex = 1;
	





















};
obj46569_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46569_onTap_activeActionGroupIndex = -1;
		$("#obj46569").trigger("obj46569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46569) {
				console.warn("de-queueing event obj46569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46569_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46571();
function goToPage_46571() {
	window.obj46569_onTap_runningActionsCount = obj46569_onTap_runningActionsCount + 1;
	$("#anchor967")[0].click();
	window.obj46569_onTap_runningActionsCount = window.obj46569_onTap_runningActionsCount - 1;
if (window.obj46569_onTap_runningActionsCount < 0) {
	window.obj46569_onTap_runningActionsCount = 0;
} else if (window.obj46569_onTap_runningActionsCount == 0) {
	obj46569_onTap_actionGroup1();
}
}





















};
obj46569_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46569_onTap_activeActionGroupIndex = -1;
		$("#obj46569").trigger("obj46569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46569) {
				console.warn("de-queueing event obj46569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46569_onTap_activeActionGroupIndex = 1;
	





















};
obj67630_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67630_onTap_activeActionGroupIndex = -1;
		$("#obj67630").trigger("obj67630_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67630) {
				console.warn("de-queueing event obj67630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67630_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67630 
hide_67633();
function hide_67633() {
	var selector = "#obj67630";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67630_onTap_runningActionsCount = obj67630_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67630_onTap_runningActionsCount = window.obj67630_onTap_runningActionsCount - 1;
if (window.obj67630_onTap_runningActionsCount < 0) {
	window.obj67630_onTap_runningActionsCount = 0;
} else if (window.obj67630_onTap_runningActionsCount == 0) {
	obj67630_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67633(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67630_onTap_runningActionsCount = window.obj67630_onTap_runningActionsCount - 1;
if (window.obj67630_onTap_runningActionsCount < 0) {
	window.obj67630_onTap_runningActionsCount = 0;
} else if (window.obj67630_onTap_runningActionsCount == 0) {
	obj67630_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67636 
stopMovie_67632();
function stopMovie_67632() {
	window.obj67630_onTap_runningActionsCount = obj67630_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67636")[0];
	myVideo.pause();
	window.obj67630_onTap_runningActionsCount = window.obj67630_onTap_runningActionsCount - 1;
if (window.obj67630_onTap_runningActionsCount < 0) {
	window.obj67630_onTap_runningActionsCount = 0;
} else if (window.obj67630_onTap_runningActionsCount == 0) {
	obj67630_onTap_actionGroup1();
}
}
















};
obj67630_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67630_onTap_activeActionGroupIndex = -1;
		$("#obj67630").trigger("obj67630_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67630) {
				console.warn("de-queueing event obj67630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67630_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67622
(function(){
	window.obj67630_onTap_runningActionsCount = obj67630_onTap_runningActionsCount + 1;

	var selector = "#obj67622";
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
					window.obj67630_onTap_runningActionsCount = window.obj67630_onTap_runningActionsCount - 1;
if (window.obj67630_onTap_runningActionsCount < 0) {
	window.obj67630_onTap_runningActionsCount = 0;
} else if (window.obj67630_onTap_runningActionsCount == 0) {
	obj67630_onTap_actionGroup2();
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
				window.obj67630_onTap_runningActionsCount = window.obj67630_onTap_runningActionsCount - 1;
if (window.obj67630_onTap_runningActionsCount < 0) {
	window.obj67630_onTap_runningActionsCount = 0;
} else if (window.obj67630_onTap_runningActionsCount == 0) {
	obj67630_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67630_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67630_onTap_activeActionGroupIndex = -1;
		$("#obj67630").trigger("obj67630_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67630) {
				console.warn("de-queueing event obj67630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67630_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67636 
move_67635();
function move_67635() {
	window.obj67630_onTap_runningActionsCount = obj67630_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67636");
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
			window.obj67630_onTap_runningActionsCount = window.obj67630_onTap_runningActionsCount - 1;
if (window.obj67630_onTap_runningActionsCount < 0) {
	window.obj67630_onTap_runningActionsCount = 0;
} else if (window.obj67630_onTap_runningActionsCount == 0) {
	obj67630_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67630_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67630_onTap_activeActionGroupIndex = -1;
		$("#obj67630").trigger("obj67630_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67630) {
				console.warn("de-queueing event obj67630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67630_onTap_activeActionGroupIndex = 3;
	





















};
obj67622_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67622_onTap_activeActionGroupIndex = -1;
		$("#obj67622").trigger("obj67622_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67622) {
				console.warn("de-queueing event obj67622." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67622").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67622_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67622 
hide_67625();
function hide_67625() {
	var selector = "#obj67622";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67622_onTap_runningActionsCount = obj67622_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67622_onTap_runningActionsCount = window.obj67622_onTap_runningActionsCount - 1;
if (window.obj67622_onTap_runningActionsCount < 0) {
	window.obj67622_onTap_runningActionsCount = 0;
} else if (window.obj67622_onTap_runningActionsCount == 0) {
	obj67622_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67625(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67622_onTap_runningActionsCount = window.obj67622_onTap_runningActionsCount - 1;
if (window.obj67622_onTap_runningActionsCount < 0) {
	window.obj67622_onTap_runningActionsCount = 0;
} else if (window.obj67622_onTap_runningActionsCount == 0) {
	obj67622_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67636 
playPauseMovie_67624();
function playPauseMovie_67624() {
	window.obj67622_onTap_runningActionsCount = obj67622_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67636")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67622_onTap_runningActionsCount = window.obj67622_onTap_runningActionsCount - 1;
if (window.obj67622_onTap_runningActionsCount < 0) {
	window.obj67622_onTap_runningActionsCount = 0;
} else if (window.obj67622_onTap_runningActionsCount == 0) {
	obj67622_onTap_actionGroup1();
}
}

















};
obj67622_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67622_onTap_activeActionGroupIndex = -1;
		$("#obj67622").trigger("obj67622_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67622) {
				console.warn("de-queueing event obj67622." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67622").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67622_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67630
(function(){
	window.obj67622_onTap_runningActionsCount = obj67622_onTap_runningActionsCount + 1;

	var selector = "#obj67630";
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
					window.obj67622_onTap_runningActionsCount = window.obj67622_onTap_runningActionsCount - 1;
if (window.obj67622_onTap_runningActionsCount < 0) {
	window.obj67622_onTap_runningActionsCount = 0;
} else if (window.obj67622_onTap_runningActionsCount == 0) {
	obj67622_onTap_actionGroup2();
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
				window.obj67622_onTap_runningActionsCount = window.obj67622_onTap_runningActionsCount - 1;
if (window.obj67622_onTap_runningActionsCount < 0) {
	window.obj67622_onTap_runningActionsCount = 0;
} else if (window.obj67622_onTap_runningActionsCount == 0) {
	obj67622_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67622_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67622_onTap_activeActionGroupIndex = -1;
		$("#obj67622").trigger("obj67622_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67622) {
				console.warn("de-queueing event obj67622." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67622").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67622_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67636 
move_67627();
function move_67627() {
	window.obj67622_onTap_runningActionsCount = obj67622_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67636");
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
			window.obj67622_onTap_runningActionsCount = window.obj67622_onTap_runningActionsCount - 1;
if (window.obj67622_onTap_runningActionsCount < 0) {
	window.obj67622_onTap_runningActionsCount = 0;
} else if (window.obj67622_onTap_runningActionsCount == 0) {
	obj67622_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67622_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67622_onTap_activeActionGroupIndex = -1;
		$("#obj67622").trigger("obj67622_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67622) {
				console.warn("de-queueing event obj67622." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67622").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67622_onTap_activeActionGroupIndex = 3;
	





















};
obj88849_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88849_onTap_activeActionGroupIndex = -1;
		$("#obj88849").trigger("obj88849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88849) {
				console.warn("de-queueing event obj88849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88849_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88854 
stopAudio_88851();
function stopAudio_88851() {
	window.obj88849_onTap_runningActionsCount = obj88849_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88854")[0];
	myAudio.pause();
	window.obj88849_onTap_runningActionsCount = window.obj88849_onTap_runningActionsCount - 1;
if (window.obj88849_onTap_runningActionsCount < 0) {
	window.obj88849_onTap_runningActionsCount = 0;
} else if (window.obj88849_onTap_runningActionsCount == 0) {
	obj88849_onTap_actionGroup1();
}
}








};
obj88849_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88849_onTap_activeActionGroupIndex = -1;
		$("#obj88849").trigger("obj88849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88849) {
				console.warn("de-queueing event obj88849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88849_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88849 
hide_88852();
function hide_88852() {
	var selector = "#obj88849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88849_onTap_runningActionsCount = obj88849_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88849_onTap_runningActionsCount = window.obj88849_onTap_runningActionsCount - 1;
if (window.obj88849_onTap_runningActionsCount < 0) {
	window.obj88849_onTap_runningActionsCount = 0;
} else if (window.obj88849_onTap_runningActionsCount == 0) {
	obj88849_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88852(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88849_onTap_runningActionsCount = window.obj88849_onTap_runningActionsCount - 1;
if (window.obj88849_onTap_runningActionsCount < 0) {
	window.obj88849_onTap_runningActionsCount = 0;
} else if (window.obj88849_onTap_runningActionsCount == 0) {
	obj88849_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88849_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88849_onTap_activeActionGroupIndex = -1;
		$("#obj88849").trigger("obj88849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88849) {
				console.warn("de-queueing event obj88849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88849_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88844
(function(){
	window.obj88849_onTap_runningActionsCount = obj88849_onTap_runningActionsCount + 1;

	var selector = "#obj88844";
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
					window.obj88849_onTap_runningActionsCount = window.obj88849_onTap_runningActionsCount - 1;
if (window.obj88849_onTap_runningActionsCount < 0) {
	window.obj88849_onTap_runningActionsCount = 0;
} else if (window.obj88849_onTap_runningActionsCount == 0) {
	obj88849_onTap_actionGroup3();
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
				window.obj88849_onTap_runningActionsCount = window.obj88849_onTap_runningActionsCount - 1;
if (window.obj88849_onTap_runningActionsCount < 0) {
	window.obj88849_onTap_runningActionsCount = 0;
} else if (window.obj88849_onTap_runningActionsCount == 0) {
	obj88849_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88849_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88849_onTap_activeActionGroupIndex = -1;
		$("#obj88849").trigger("obj88849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88849) {
				console.warn("de-queueing event obj88849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88849_onTap_activeActionGroupIndex = 3;
	





















};
obj88844_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88844_onTap_activeActionGroupIndex = -1;
		$("#obj88844").trigger("obj88844_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88844) {
				console.warn("de-queueing event obj88844." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88844").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88844_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88844 
hide_88846();
function hide_88846() {
	var selector = "#obj88844";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88844_onTap_runningActionsCount = obj88844_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88844_onTap_runningActionsCount = window.obj88844_onTap_runningActionsCount - 1;
if (window.obj88844_onTap_runningActionsCount < 0) {
	window.obj88844_onTap_runningActionsCount = 0;
} else if (window.obj88844_onTap_runningActionsCount == 0) {
	obj88844_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88846(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88844_onTap_runningActionsCount = window.obj88844_onTap_runningActionsCount - 1;
if (window.obj88844_onTap_runningActionsCount < 0) {
	window.obj88844_onTap_runningActionsCount = 0;
} else if (window.obj88844_onTap_runningActionsCount == 0) {
	obj88844_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88844_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88844_onTap_activeActionGroupIndex = -1;
		$("#obj88844").trigger("obj88844_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88844) {
				console.warn("de-queueing event obj88844." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88844").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88844_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88849
(function(){
	window.obj88844_onTap_runningActionsCount = obj88844_onTap_runningActionsCount + 1;

	var selector = "#obj88849";
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
					window.obj88844_onTap_runningActionsCount = window.obj88844_onTap_runningActionsCount - 1;
if (window.obj88844_onTap_runningActionsCount < 0) {
	window.obj88844_onTap_runningActionsCount = 0;
} else if (window.obj88844_onTap_runningActionsCount == 0) {
	obj88844_onTap_actionGroup2();
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
				window.obj88844_onTap_runningActionsCount = window.obj88844_onTap_runningActionsCount - 1;
if (window.obj88844_onTap_runningActionsCount < 0) {
	window.obj88844_onTap_runningActionsCount = 0;
} else if (window.obj88844_onTap_runningActionsCount == 0) {
	obj88844_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88844_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88844_onTap_activeActionGroupIndex = -1;
		$("#obj88844").trigger("obj88844_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88844) {
				console.warn("de-queueing event obj88844." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88844").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88844_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88854 
playAudio_88848();
function playAudio_88848() {
	window.obj88844_onTap_runningActionsCount = obj88844_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88854")[0];
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
		    window.obj88844_onTap_runningActionsCount = window.obj88844_onTap_runningActionsCount - 1;
if (window.obj88844_onTap_runningActionsCount < 0) {
	window.obj88844_onTap_runningActionsCount = 0;
} else if (window.obj88844_onTap_runningActionsCount == 0) {
	obj88844_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88844_onTap_runningActionsCount = window.obj88844_onTap_runningActionsCount - 1;
if (window.obj88844_onTap_runningActionsCount < 0) {
	window.obj88844_onTap_runningActionsCount = 0;
} else if (window.obj88844_onTap_runningActionsCount == 0) {
	obj88844_onTap_actionGroup3();
}
	}
}









};
obj88844_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88844_onTap_activeActionGroupIndex = -1;
		$("#obj88844").trigger("obj88844_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88844) {
				console.warn("de-queueing event obj88844." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88844").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88844_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj46572: Event Touch Down
 *
 */
$("#obj46572").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46572_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46572_onTap is still running");
	return;
}
var obj46572_onTap_runningActionsCount = 0;
var obj46572_onTap_loopCount = 0;
obj46572_onTap_actionGroup0();
});










/*
 *
 *   obj46569: Event Touch Down
 *
 */
$("#obj46569").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46569_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46569_onTap is still running");
	return;
}
var obj46569_onTap_runningActionsCount = 0;
var obj46569_onTap_loopCount = 0;
obj46569_onTap_actionGroup0();
});






































































































































































































































/*
 *
 *   obj67630: Event Touch Down
 *
 */
$("#obj67630").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67630_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67630_onTap is still running");
	return;
}
var obj67630_onTap_runningActionsCount = 0;
var obj67630_onTap_loopCount = 0;
obj67630_onTap_actionGroup0();
});










/*
 *
 *   obj67622: Event Touch Down
 *
 */
$("#obj67622").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67622_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67622_onTap is still running");
	return;
}
var obj67622_onTap_runningActionsCount = 0;
var obj67622_onTap_loopCount = 0;
obj67622_onTap_actionGroup0();
});










/*
 *
 *   obj88849: Event Touch Down
 *
 */
$("#obj88849").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88849_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88849_onTap is still running");
	return;
}
var obj88849_onTap_runningActionsCount = 0;
var obj88849_onTap_loopCount = 0;
obj88849_onTap_actionGroup0();
});










/*
 *
 *   obj88844: Event Touch Down
 *
 */
$("#obj88844").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88844_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88844_onTap is still running");
	return;
}
var obj88844_onTap_runningActionsCount = 0;
var obj88844_onTap_loopCount = 0;
obj88844_onTap_actionGroup0();
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
	
$("#obj46567").trigger('SCEventShow');
$("#obj46572").trigger('SCEventShow');
$("#obj46569").trigger('SCEventShow');
$("#obj46563").trigger('SCEventShow');
$("#obj46565").trigger('SCEventShow');
$("#obj46588").trigger('SCEventShow');
$("#obj46591").trigger('SCEventShow');
$("#obj46594").trigger('SCEventShow');
$("#obj46597").trigger('SCEventShow');
$("#obj46600").trigger('SCEventShow');
$("#obj46603").trigger('SCEventShow');
$("#obj46606").trigger('SCEventShow');
$("#obj46609").trigger('SCEventShow');
$("#obj46612").trigger('SCEventShow');
$("#obj46615").trigger('SCEventShow');
$("#obj46617").trigger('SCEventShow');
$("#obj46619").trigger('SCEventShow');
$("#obj46623").trigger('SCEventShow');
$("#obj46625").trigger('SCEventShow');
$("#obj46627").trigger('SCEventShow');
$("#obj46629").trigger('SCEventShow');
$("#obj46631").trigger('SCEventShow');
$("#obj46633").trigger('SCEventShow');
$("#obj46635").trigger('SCEventShow');
$("#obj46637").trigger('SCEventShow');
$("#obj67630").trigger('SCEventShow');
$("#obj67622").trigger('SCEventShow');
$("#obj88849").trigger('SCEventShow');
$("#obj88844").trigger('SCEventShow');
$("#obj88854").trigger('SCEventShow');
$("#obj94957").trigger('SCEventShow');
$("#obj67636").trigger('SCEventShow');
	
});