pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 28632;
pubcoder.page.title = pubcoder.page.title || "104";
pubcoder.page.number = pubcoder.page.number || 104;
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
var obj81683_onTap_activeActionGroupIndex = -1;
var obj81683_onTap_runningActionsCount = 0;
var obj81683_onTap_loopCount = 0;
var obj81680_onTap_activeActionGroupIndex = -1;
var obj81680_onTap_runningActionsCount = 0;
var obj81680_onTap_loopCount = 0;
var obj81650_onTap_activeActionGroupIndex = -1;
var obj81650_onTap_runningActionsCount = 0;
var obj81650_onTap_loopCount = 0;
var obj81642_onTap_activeActionGroupIndex = -1;
var obj81642_onTap_runningActionsCount = 0;
var obj81642_onTap_loopCount = 0;
var obj88117_onTap_activeActionGroupIndex = -1;
var obj88117_onTap_runningActionsCount = 0;
var obj88117_onTap_loopCount = 0;
var obj88112_onTap_activeActionGroupIndex = -1;
var obj88112_onTap_runningActionsCount = 0;
var obj88112_onTap_loopCount = 0;
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
		
obj81683_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81683_onTap_activeActionGroupIndex = -1;
		$("#obj81683").trigger("obj81683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81683) {
				console.warn("de-queueing event obj81683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81683_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81685();
function goToPage_81685() {
	window.obj81683_onTap_runningActionsCount = obj81683_onTap_runningActionsCount + 1;
	$("#anchor621")[0].click();
	window.obj81683_onTap_runningActionsCount = window.obj81683_onTap_runningActionsCount - 1;
if (window.obj81683_onTap_runningActionsCount < 0) {
	window.obj81683_onTap_runningActionsCount = 0;
} else if (window.obj81683_onTap_runningActionsCount == 0) {
	obj81683_onTap_actionGroup1();
}
}





















};
obj81683_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81683_onTap_activeActionGroupIndex = -1;
		$("#obj81683").trigger("obj81683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81683) {
				console.warn("de-queueing event obj81683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81683_onTap_activeActionGroupIndex = 1;
	





















};
obj81680_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81680_onTap_activeActionGroupIndex = -1;
		$("#obj81680").trigger("obj81680_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81680) {
				console.warn("de-queueing event obj81680." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81680").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81680_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81682();
function goToPage_81682() {
	window.obj81680_onTap_runningActionsCount = obj81680_onTap_runningActionsCount + 1;
	$("#anchor622")[0].click();
	window.obj81680_onTap_runningActionsCount = window.obj81680_onTap_runningActionsCount - 1;
if (window.obj81680_onTap_runningActionsCount < 0) {
	window.obj81680_onTap_runningActionsCount = 0;
} else if (window.obj81680_onTap_runningActionsCount == 0) {
	obj81680_onTap_actionGroup1();
}
}





















};
obj81680_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81680_onTap_activeActionGroupIndex = -1;
		$("#obj81680").trigger("obj81680_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81680) {
				console.warn("de-queueing event obj81680." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81680").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81680_onTap_activeActionGroupIndex = 1;
	





















};
obj81650_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81650_onTap_activeActionGroupIndex = -1;
		$("#obj81650").trigger("obj81650_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81650) {
				console.warn("de-queueing event obj81650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81650_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj81650 
hide_81653();
function hide_81653() {
	var selector = "#obj81650";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81650_onTap_runningActionsCount = obj81650_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81650_onTap_runningActionsCount = window.obj81650_onTap_runningActionsCount - 1;
if (window.obj81650_onTap_runningActionsCount < 0) {
	window.obj81650_onTap_runningActionsCount = 0;
} else if (window.obj81650_onTap_runningActionsCount == 0) {
	obj81650_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81653(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81650_onTap_runningActionsCount = window.obj81650_onTap_runningActionsCount - 1;
if (window.obj81650_onTap_runningActionsCount < 0) {
	window.obj81650_onTap_runningActionsCount = 0;
} else if (window.obj81650_onTap_runningActionsCount == 0) {
	obj81650_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj81640 
stopMovie_81652();
function stopMovie_81652() {
	window.obj81650_onTap_runningActionsCount = obj81650_onTap_runningActionsCount + 1;
	var myVideo = $("#obj81640")[0];
	myVideo.pause();
	window.obj81650_onTap_runningActionsCount = window.obj81650_onTap_runningActionsCount - 1;
if (window.obj81650_onTap_runningActionsCount < 0) {
	window.obj81650_onTap_runningActionsCount = 0;
} else if (window.obj81650_onTap_runningActionsCount == 0) {
	obj81650_onTap_actionGroup1();
}
}
















};
obj81650_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81650_onTap_activeActionGroupIndex = -1;
		$("#obj81650").trigger("obj81650_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81650) {
				console.warn("de-queueing event obj81650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81650_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj81642
(function(){
	window.obj81650_onTap_runningActionsCount = obj81650_onTap_runningActionsCount + 1;

	var selector = "#obj81642";
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
					window.obj81650_onTap_runningActionsCount = window.obj81650_onTap_runningActionsCount - 1;
if (window.obj81650_onTap_runningActionsCount < 0) {
	window.obj81650_onTap_runningActionsCount = 0;
} else if (window.obj81650_onTap_runningActionsCount == 0) {
	obj81650_onTap_actionGroup2();
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
				window.obj81650_onTap_runningActionsCount = window.obj81650_onTap_runningActionsCount - 1;
if (window.obj81650_onTap_runningActionsCount < 0) {
	window.obj81650_onTap_runningActionsCount = 0;
} else if (window.obj81650_onTap_runningActionsCount == 0) {
	obj81650_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81650_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81650_onTap_activeActionGroupIndex = -1;
		$("#obj81650").trigger("obj81650_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81650) {
				console.warn("de-queueing event obj81650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81650_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj81640 
move_81655();
function move_81655() {
	window.obj81650_onTap_runningActionsCount = obj81650_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj81640");
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
			window.obj81650_onTap_runningActionsCount = window.obj81650_onTap_runningActionsCount - 1;
if (window.obj81650_onTap_runningActionsCount < 0) {
	window.obj81650_onTap_runningActionsCount = 0;
} else if (window.obj81650_onTap_runningActionsCount == 0) {
	obj81650_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj81650_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81650_onTap_activeActionGroupIndex = -1;
		$("#obj81650").trigger("obj81650_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81650) {
				console.warn("de-queueing event obj81650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81650_onTap_activeActionGroupIndex = 3;
	





















};
obj81642_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81642_onTap_activeActionGroupIndex = -1;
		$("#obj81642").trigger("obj81642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81642) {
				console.warn("de-queueing event obj81642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81642_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj81642 
hide_81645();
function hide_81645() {
	var selector = "#obj81642";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81642_onTap_runningActionsCount = obj81642_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81642_onTap_runningActionsCount = window.obj81642_onTap_runningActionsCount - 1;
if (window.obj81642_onTap_runningActionsCount < 0) {
	window.obj81642_onTap_runningActionsCount = 0;
} else if (window.obj81642_onTap_runningActionsCount == 0) {
	obj81642_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81645(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81642_onTap_runningActionsCount = window.obj81642_onTap_runningActionsCount - 1;
if (window.obj81642_onTap_runningActionsCount < 0) {
	window.obj81642_onTap_runningActionsCount = 0;
} else if (window.obj81642_onTap_runningActionsCount == 0) {
	obj81642_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj81640 
playPauseMovie_81644();
function playPauseMovie_81644() {
	window.obj81642_onTap_runningActionsCount = obj81642_onTap_runningActionsCount + 1;
	var myVideo = $("#obj81640")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj81642_onTap_runningActionsCount = window.obj81642_onTap_runningActionsCount - 1;
if (window.obj81642_onTap_runningActionsCount < 0) {
	window.obj81642_onTap_runningActionsCount = 0;
} else if (window.obj81642_onTap_runningActionsCount == 0) {
	obj81642_onTap_actionGroup1();
}
}

















};
obj81642_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81642_onTap_activeActionGroupIndex = -1;
		$("#obj81642").trigger("obj81642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81642) {
				console.warn("de-queueing event obj81642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81642_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj81650
(function(){
	window.obj81642_onTap_runningActionsCount = obj81642_onTap_runningActionsCount + 1;

	var selector = "#obj81650";
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
					window.obj81642_onTap_runningActionsCount = window.obj81642_onTap_runningActionsCount - 1;
if (window.obj81642_onTap_runningActionsCount < 0) {
	window.obj81642_onTap_runningActionsCount = 0;
} else if (window.obj81642_onTap_runningActionsCount == 0) {
	obj81642_onTap_actionGroup2();
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
				window.obj81642_onTap_runningActionsCount = window.obj81642_onTap_runningActionsCount - 1;
if (window.obj81642_onTap_runningActionsCount < 0) {
	window.obj81642_onTap_runningActionsCount = 0;
} else if (window.obj81642_onTap_runningActionsCount == 0) {
	obj81642_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81642_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81642_onTap_activeActionGroupIndex = -1;
		$("#obj81642").trigger("obj81642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81642) {
				console.warn("de-queueing event obj81642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81642_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj81640 
move_81647();
function move_81647() {
	window.obj81642_onTap_runningActionsCount = obj81642_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj81640");
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
			window.obj81642_onTap_runningActionsCount = window.obj81642_onTap_runningActionsCount - 1;
if (window.obj81642_onTap_runningActionsCount < 0) {
	window.obj81642_onTap_runningActionsCount = 0;
} else if (window.obj81642_onTap_runningActionsCount == 0) {
	obj81642_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj81642_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81642_onTap_activeActionGroupIndex = -1;
		$("#obj81642").trigger("obj81642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81642) {
				console.warn("de-queueing event obj81642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81642_onTap_activeActionGroupIndex = 3;
	





















};
obj88117_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88117_onTap_activeActionGroupIndex = -1;
		$("#obj88117").trigger("obj88117_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88117) {
				console.warn("de-queueing event obj88117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88117_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88122 
stopAudio_88119();
function stopAudio_88119() {
	window.obj88117_onTap_runningActionsCount = obj88117_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88122")[0];
	myAudio.pause();
	window.obj88117_onTap_runningActionsCount = window.obj88117_onTap_runningActionsCount - 1;
if (window.obj88117_onTap_runningActionsCount < 0) {
	window.obj88117_onTap_runningActionsCount = 0;
} else if (window.obj88117_onTap_runningActionsCount == 0) {
	obj88117_onTap_actionGroup1();
}
}








};
obj88117_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88117_onTap_activeActionGroupIndex = -1;
		$("#obj88117").trigger("obj88117_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88117) {
				console.warn("de-queueing event obj88117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88117_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88117 
hide_88120();
function hide_88120() {
	var selector = "#obj88117";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88117_onTap_runningActionsCount = obj88117_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88117_onTap_runningActionsCount = window.obj88117_onTap_runningActionsCount - 1;
if (window.obj88117_onTap_runningActionsCount < 0) {
	window.obj88117_onTap_runningActionsCount = 0;
} else if (window.obj88117_onTap_runningActionsCount == 0) {
	obj88117_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88120(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88117_onTap_runningActionsCount = window.obj88117_onTap_runningActionsCount - 1;
if (window.obj88117_onTap_runningActionsCount < 0) {
	window.obj88117_onTap_runningActionsCount = 0;
} else if (window.obj88117_onTap_runningActionsCount == 0) {
	obj88117_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88117_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88117_onTap_activeActionGroupIndex = -1;
		$("#obj88117").trigger("obj88117_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88117) {
				console.warn("de-queueing event obj88117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88117_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88112
(function(){
	window.obj88117_onTap_runningActionsCount = obj88117_onTap_runningActionsCount + 1;

	var selector = "#obj88112";
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
					window.obj88117_onTap_runningActionsCount = window.obj88117_onTap_runningActionsCount - 1;
if (window.obj88117_onTap_runningActionsCount < 0) {
	window.obj88117_onTap_runningActionsCount = 0;
} else if (window.obj88117_onTap_runningActionsCount == 0) {
	obj88117_onTap_actionGroup3();
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
				window.obj88117_onTap_runningActionsCount = window.obj88117_onTap_runningActionsCount - 1;
if (window.obj88117_onTap_runningActionsCount < 0) {
	window.obj88117_onTap_runningActionsCount = 0;
} else if (window.obj88117_onTap_runningActionsCount == 0) {
	obj88117_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88117_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88117_onTap_activeActionGroupIndex = -1;
		$("#obj88117").trigger("obj88117_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88117) {
				console.warn("de-queueing event obj88117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88117_onTap_activeActionGroupIndex = 3;
	





















};
obj88112_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88112_onTap_activeActionGroupIndex = -1;
		$("#obj88112").trigger("obj88112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88112) {
				console.warn("de-queueing event obj88112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88112_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88112 
hide_88114();
function hide_88114() {
	var selector = "#obj88112";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88112_onTap_runningActionsCount = obj88112_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88112_onTap_runningActionsCount = window.obj88112_onTap_runningActionsCount - 1;
if (window.obj88112_onTap_runningActionsCount < 0) {
	window.obj88112_onTap_runningActionsCount = 0;
} else if (window.obj88112_onTap_runningActionsCount == 0) {
	obj88112_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88114(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88112_onTap_runningActionsCount = window.obj88112_onTap_runningActionsCount - 1;
if (window.obj88112_onTap_runningActionsCount < 0) {
	window.obj88112_onTap_runningActionsCount = 0;
} else if (window.obj88112_onTap_runningActionsCount == 0) {
	obj88112_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88112_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88112_onTap_activeActionGroupIndex = -1;
		$("#obj88112").trigger("obj88112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88112) {
				console.warn("de-queueing event obj88112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88112_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88117
(function(){
	window.obj88112_onTap_runningActionsCount = obj88112_onTap_runningActionsCount + 1;

	var selector = "#obj88117";
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
					window.obj88112_onTap_runningActionsCount = window.obj88112_onTap_runningActionsCount - 1;
if (window.obj88112_onTap_runningActionsCount < 0) {
	window.obj88112_onTap_runningActionsCount = 0;
} else if (window.obj88112_onTap_runningActionsCount == 0) {
	obj88112_onTap_actionGroup2();
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
				window.obj88112_onTap_runningActionsCount = window.obj88112_onTap_runningActionsCount - 1;
if (window.obj88112_onTap_runningActionsCount < 0) {
	window.obj88112_onTap_runningActionsCount = 0;
} else if (window.obj88112_onTap_runningActionsCount == 0) {
	obj88112_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88112_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88112_onTap_activeActionGroupIndex = -1;
		$("#obj88112").trigger("obj88112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88112) {
				console.warn("de-queueing event obj88112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88112_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88122 
playAudio_88116();
function playAudio_88116() {
	window.obj88112_onTap_runningActionsCount = obj88112_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88122")[0];
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
		    window.obj88112_onTap_runningActionsCount = window.obj88112_onTap_runningActionsCount - 1;
if (window.obj88112_onTap_runningActionsCount < 0) {
	window.obj88112_onTap_runningActionsCount = 0;
} else if (window.obj88112_onTap_runningActionsCount == 0) {
	obj88112_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88112_onTap_runningActionsCount = window.obj88112_onTap_runningActionsCount - 1;
if (window.obj88112_onTap_runningActionsCount < 0) {
	window.obj88112_onTap_runningActionsCount = 0;
} else if (window.obj88112_onTap_runningActionsCount == 0) {
	obj88112_onTap_actionGroup3();
}
	}
}









};
obj88112_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88112_onTap_activeActionGroupIndex = -1;
		$("#obj88112").trigger("obj88112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88112) {
				console.warn("de-queueing event obj88112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88112_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj81683: Event Touch Down
 *
 */
$("#obj81683").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81683_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81683_onTap is still running");
	return;
}
var obj81683_onTap_runningActionsCount = 0;
var obj81683_onTap_loopCount = 0;
obj81683_onTap_actionGroup0();
});










/*
 *
 *   obj81680: Event Touch Down
 *
 */
$("#obj81680").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81680_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81680_onTap is still running");
	return;
}
var obj81680_onTap_runningActionsCount = 0;
var obj81680_onTap_loopCount = 0;
obj81680_onTap_actionGroup0();
});






































































/*
 *
 *   obj81650: Event Touch Down
 *
 */
$("#obj81650").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81650_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81650_onTap is still running");
	return;
}
var obj81650_onTap_runningActionsCount = 0;
var obj81650_onTap_loopCount = 0;
obj81650_onTap_actionGroup0();
});










/*
 *
 *   obj81642: Event Touch Down
 *
 */
$("#obj81642").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81642_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81642_onTap is still running");
	return;
}
var obj81642_onTap_runningActionsCount = 0;
var obj81642_onTap_loopCount = 0;
obj81642_onTap_actionGroup0();
});




















/*
 *
 *   obj88117: Event Touch Down
 *
 */
$("#obj88117").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88117_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88117_onTap is still running");
	return;
}
var obj88117_onTap_runningActionsCount = 0;
var obj88117_onTap_loopCount = 0;
obj88117_onTap_actionGroup0();
});










/*
 *
 *   obj88112: Event Touch Down
 *
 */
$("#obj88112").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88112_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88112_onTap is still running");
	return;
}
var obj88112_onTap_runningActionsCount = 0;
var obj88112_onTap_loopCount = 0;
obj88112_onTap_actionGroup0();
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
	
$("#obj81686").trigger('SCEventShow');
$("#obj81683").trigger('SCEventShow');
$("#obj81680").trigger('SCEventShow');
$("#obj81678").trigger('SCEventShow');
$("#obj81676").trigger('SCEventShow');
$("#obj81674").trigger('SCEventShow');
$("#obj81672").trigger('SCEventShow');
$("#obj81670").trigger('SCEventShow');
$("#obj81668").trigger('SCEventShow');
$("#obj81650").trigger('SCEventShow');
$("#obj81642").trigger('SCEventShow');
$("#obj81640").trigger('SCEventShow');
$("#obj88117").trigger('SCEventShow');
$("#obj88112").trigger('SCEventShow');
$("#obj94837").trigger('SCEventShow');
$("#obj88122").trigger('SCEventShow');
	
});