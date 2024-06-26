pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 21764;
pubcoder.page.title = pubcoder.page.title || "82";
pubcoder.page.number = pubcoder.page.number || 82;
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
var obj77576_onTap_activeActionGroupIndex = -1;
var obj77576_onTap_runningActionsCount = 0;
var obj77576_onTap_loopCount = 0;
var obj77573_onTap_activeActionGroupIndex = -1;
var obj77573_onTap_runningActionsCount = 0;
var obj77573_onTap_loopCount = 0;
var obj77545_onTap_activeActionGroupIndex = -1;
var obj77545_onTap_runningActionsCount = 0;
var obj77545_onTap_loopCount = 0;
var obj77537_onTap_activeActionGroupIndex = -1;
var obj77537_onTap_runningActionsCount = 0;
var obj77537_onTap_loopCount = 0;
var obj87847_onTap_activeActionGroupIndex = -1;
var obj87847_onTap_runningActionsCount = 0;
var obj87847_onTap_loopCount = 0;
var obj87842_onTap_activeActionGroupIndex = -1;
var obj87842_onTap_runningActionsCount = 0;
var obj87842_onTap_loopCount = 0;
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
		
obj77576_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77576_onTap_activeActionGroupIndex = -1;
		$("#obj77576").trigger("obj77576_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77576) {
				console.warn("de-queueing event obj77576." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77576").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77576_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77578();
function goToPage_77578() {
	window.obj77576_onTap_runningActionsCount = obj77576_onTap_runningActionsCount + 1;
	$("#anchor484")[0].click();
	window.obj77576_onTap_runningActionsCount = window.obj77576_onTap_runningActionsCount - 1;
if (window.obj77576_onTap_runningActionsCount < 0) {
	window.obj77576_onTap_runningActionsCount = 0;
} else if (window.obj77576_onTap_runningActionsCount == 0) {
	obj77576_onTap_actionGroup1();
}
}





















};
obj77576_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77576_onTap_activeActionGroupIndex = -1;
		$("#obj77576").trigger("obj77576_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77576) {
				console.warn("de-queueing event obj77576." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77576").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77576_onTap_activeActionGroupIndex = 1;
	





















};
obj77573_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77573_onTap_activeActionGroupIndex = -1;
		$("#obj77573").trigger("obj77573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77573) {
				console.warn("de-queueing event obj77573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77573_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77575();
function goToPage_77575() {
	window.obj77573_onTap_runningActionsCount = obj77573_onTap_runningActionsCount + 1;
	$("#anchor485")[0].click();
	window.obj77573_onTap_runningActionsCount = window.obj77573_onTap_runningActionsCount - 1;
if (window.obj77573_onTap_runningActionsCount < 0) {
	window.obj77573_onTap_runningActionsCount = 0;
} else if (window.obj77573_onTap_runningActionsCount == 0) {
	obj77573_onTap_actionGroup1();
}
}





















};
obj77573_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77573_onTap_activeActionGroupIndex = -1;
		$("#obj77573").trigger("obj77573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77573) {
				console.warn("de-queueing event obj77573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77573_onTap_activeActionGroupIndex = 1;
	





















};
obj77545_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77545_onTap_activeActionGroupIndex = -1;
		$("#obj77545").trigger("obj77545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77545) {
				console.warn("de-queueing event obj77545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77545_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj77545 
hide_77548();
function hide_77548() {
	var selector = "#obj77545";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77545_onTap_runningActionsCount = obj77545_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77545_onTap_runningActionsCount = window.obj77545_onTap_runningActionsCount - 1;
if (window.obj77545_onTap_runningActionsCount < 0) {
	window.obj77545_onTap_runningActionsCount = 0;
} else if (window.obj77545_onTap_runningActionsCount == 0) {
	obj77545_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77548(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77545_onTap_runningActionsCount = window.obj77545_onTap_runningActionsCount - 1;
if (window.obj77545_onTap_runningActionsCount < 0) {
	window.obj77545_onTap_runningActionsCount = 0;
} else if (window.obj77545_onTap_runningActionsCount == 0) {
	obj77545_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj77535 
stopMovie_77547();
function stopMovie_77547() {
	window.obj77545_onTap_runningActionsCount = obj77545_onTap_runningActionsCount + 1;
	var myVideo = $("#obj77535")[0];
	myVideo.pause();
	window.obj77545_onTap_runningActionsCount = window.obj77545_onTap_runningActionsCount - 1;
if (window.obj77545_onTap_runningActionsCount < 0) {
	window.obj77545_onTap_runningActionsCount = 0;
} else if (window.obj77545_onTap_runningActionsCount == 0) {
	obj77545_onTap_actionGroup1();
}
}
















};
obj77545_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77545_onTap_activeActionGroupIndex = -1;
		$("#obj77545").trigger("obj77545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77545) {
				console.warn("de-queueing event obj77545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77545_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj77537
(function(){
	window.obj77545_onTap_runningActionsCount = obj77545_onTap_runningActionsCount + 1;

	var selector = "#obj77537";
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
					window.obj77545_onTap_runningActionsCount = window.obj77545_onTap_runningActionsCount - 1;
if (window.obj77545_onTap_runningActionsCount < 0) {
	window.obj77545_onTap_runningActionsCount = 0;
} else if (window.obj77545_onTap_runningActionsCount == 0) {
	obj77545_onTap_actionGroup2();
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
				window.obj77545_onTap_runningActionsCount = window.obj77545_onTap_runningActionsCount - 1;
if (window.obj77545_onTap_runningActionsCount < 0) {
	window.obj77545_onTap_runningActionsCount = 0;
} else if (window.obj77545_onTap_runningActionsCount == 0) {
	obj77545_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77545_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77545_onTap_activeActionGroupIndex = -1;
		$("#obj77545").trigger("obj77545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77545) {
				console.warn("de-queueing event obj77545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77545_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj77535 
move_77550();
function move_77550() {
	window.obj77545_onTap_runningActionsCount = obj77545_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj77535");
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
			window.obj77545_onTap_runningActionsCount = window.obj77545_onTap_runningActionsCount - 1;
if (window.obj77545_onTap_runningActionsCount < 0) {
	window.obj77545_onTap_runningActionsCount = 0;
} else if (window.obj77545_onTap_runningActionsCount == 0) {
	obj77545_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj77545_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77545_onTap_activeActionGroupIndex = -1;
		$("#obj77545").trigger("obj77545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77545) {
				console.warn("de-queueing event obj77545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77545_onTap_activeActionGroupIndex = 3;
	





















};
obj77537_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77537_onTap_activeActionGroupIndex = -1;
		$("#obj77537").trigger("obj77537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77537) {
				console.warn("de-queueing event obj77537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77537_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj77537 
hide_77540();
function hide_77540() {
	var selector = "#obj77537";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77537_onTap_runningActionsCount = obj77537_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77537_onTap_runningActionsCount = window.obj77537_onTap_runningActionsCount - 1;
if (window.obj77537_onTap_runningActionsCount < 0) {
	window.obj77537_onTap_runningActionsCount = 0;
} else if (window.obj77537_onTap_runningActionsCount == 0) {
	obj77537_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77540(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77537_onTap_runningActionsCount = window.obj77537_onTap_runningActionsCount - 1;
if (window.obj77537_onTap_runningActionsCount < 0) {
	window.obj77537_onTap_runningActionsCount = 0;
} else if (window.obj77537_onTap_runningActionsCount == 0) {
	obj77537_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj77535 
playPauseMovie_77539();
function playPauseMovie_77539() {
	window.obj77537_onTap_runningActionsCount = obj77537_onTap_runningActionsCount + 1;
	var myVideo = $("#obj77535")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj77537_onTap_runningActionsCount = window.obj77537_onTap_runningActionsCount - 1;
if (window.obj77537_onTap_runningActionsCount < 0) {
	window.obj77537_onTap_runningActionsCount = 0;
} else if (window.obj77537_onTap_runningActionsCount == 0) {
	obj77537_onTap_actionGroup1();
}
}

















};
obj77537_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77537_onTap_activeActionGroupIndex = -1;
		$("#obj77537").trigger("obj77537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77537) {
				console.warn("de-queueing event obj77537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77537_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj77545
(function(){
	window.obj77537_onTap_runningActionsCount = obj77537_onTap_runningActionsCount + 1;

	var selector = "#obj77545";
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
					window.obj77537_onTap_runningActionsCount = window.obj77537_onTap_runningActionsCount - 1;
if (window.obj77537_onTap_runningActionsCount < 0) {
	window.obj77537_onTap_runningActionsCount = 0;
} else if (window.obj77537_onTap_runningActionsCount == 0) {
	obj77537_onTap_actionGroup2();
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
				window.obj77537_onTap_runningActionsCount = window.obj77537_onTap_runningActionsCount - 1;
if (window.obj77537_onTap_runningActionsCount < 0) {
	window.obj77537_onTap_runningActionsCount = 0;
} else if (window.obj77537_onTap_runningActionsCount == 0) {
	obj77537_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77537_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77537_onTap_activeActionGroupIndex = -1;
		$("#obj77537").trigger("obj77537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77537) {
				console.warn("de-queueing event obj77537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77537_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj77535 
move_77542();
function move_77542() {
	window.obj77537_onTap_runningActionsCount = obj77537_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj77535");
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
			window.obj77537_onTap_runningActionsCount = window.obj77537_onTap_runningActionsCount - 1;
if (window.obj77537_onTap_runningActionsCount < 0) {
	window.obj77537_onTap_runningActionsCount = 0;
} else if (window.obj77537_onTap_runningActionsCount == 0) {
	obj77537_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj77537_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77537_onTap_activeActionGroupIndex = -1;
		$("#obj77537").trigger("obj77537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77537) {
				console.warn("de-queueing event obj77537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77537_onTap_activeActionGroupIndex = 3;
	





















};
obj87847_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87847_onTap_activeActionGroupIndex = -1;
		$("#obj87847").trigger("obj87847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87847) {
				console.warn("de-queueing event obj87847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87847_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87852 
stopAudio_87849();
function stopAudio_87849() {
	window.obj87847_onTap_runningActionsCount = obj87847_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87852")[0];
	myAudio.pause();
	window.obj87847_onTap_runningActionsCount = window.obj87847_onTap_runningActionsCount - 1;
if (window.obj87847_onTap_runningActionsCount < 0) {
	window.obj87847_onTap_runningActionsCount = 0;
} else if (window.obj87847_onTap_runningActionsCount == 0) {
	obj87847_onTap_actionGroup1();
}
}








};
obj87847_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87847_onTap_activeActionGroupIndex = -1;
		$("#obj87847").trigger("obj87847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87847) {
				console.warn("de-queueing event obj87847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87847_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87847 
hide_87850();
function hide_87850() {
	var selector = "#obj87847";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87847_onTap_runningActionsCount = obj87847_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87847_onTap_runningActionsCount = window.obj87847_onTap_runningActionsCount - 1;
if (window.obj87847_onTap_runningActionsCount < 0) {
	window.obj87847_onTap_runningActionsCount = 0;
} else if (window.obj87847_onTap_runningActionsCount == 0) {
	obj87847_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87850(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87847_onTap_runningActionsCount = window.obj87847_onTap_runningActionsCount - 1;
if (window.obj87847_onTap_runningActionsCount < 0) {
	window.obj87847_onTap_runningActionsCount = 0;
} else if (window.obj87847_onTap_runningActionsCount == 0) {
	obj87847_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87847_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87847_onTap_activeActionGroupIndex = -1;
		$("#obj87847").trigger("obj87847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87847) {
				console.warn("de-queueing event obj87847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87847_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87842
(function(){
	window.obj87847_onTap_runningActionsCount = obj87847_onTap_runningActionsCount + 1;

	var selector = "#obj87842";
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
					window.obj87847_onTap_runningActionsCount = window.obj87847_onTap_runningActionsCount - 1;
if (window.obj87847_onTap_runningActionsCount < 0) {
	window.obj87847_onTap_runningActionsCount = 0;
} else if (window.obj87847_onTap_runningActionsCount == 0) {
	obj87847_onTap_actionGroup3();
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
				window.obj87847_onTap_runningActionsCount = window.obj87847_onTap_runningActionsCount - 1;
if (window.obj87847_onTap_runningActionsCount < 0) {
	window.obj87847_onTap_runningActionsCount = 0;
} else if (window.obj87847_onTap_runningActionsCount == 0) {
	obj87847_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87847_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87847_onTap_activeActionGroupIndex = -1;
		$("#obj87847").trigger("obj87847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87847) {
				console.warn("de-queueing event obj87847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87847_onTap_activeActionGroupIndex = 3;
	





















};
obj87842_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87842_onTap_activeActionGroupIndex = -1;
		$("#obj87842").trigger("obj87842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87842) {
				console.warn("de-queueing event obj87842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87842_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87842 
hide_87844();
function hide_87844() {
	var selector = "#obj87842";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87842_onTap_runningActionsCount = obj87842_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87842_onTap_runningActionsCount = window.obj87842_onTap_runningActionsCount - 1;
if (window.obj87842_onTap_runningActionsCount < 0) {
	window.obj87842_onTap_runningActionsCount = 0;
} else if (window.obj87842_onTap_runningActionsCount == 0) {
	obj87842_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87844(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87842_onTap_runningActionsCount = window.obj87842_onTap_runningActionsCount - 1;
if (window.obj87842_onTap_runningActionsCount < 0) {
	window.obj87842_onTap_runningActionsCount = 0;
} else if (window.obj87842_onTap_runningActionsCount == 0) {
	obj87842_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87842_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87842_onTap_activeActionGroupIndex = -1;
		$("#obj87842").trigger("obj87842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87842) {
				console.warn("de-queueing event obj87842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87842_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87847
(function(){
	window.obj87842_onTap_runningActionsCount = obj87842_onTap_runningActionsCount + 1;

	var selector = "#obj87847";
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
					window.obj87842_onTap_runningActionsCount = window.obj87842_onTap_runningActionsCount - 1;
if (window.obj87842_onTap_runningActionsCount < 0) {
	window.obj87842_onTap_runningActionsCount = 0;
} else if (window.obj87842_onTap_runningActionsCount == 0) {
	obj87842_onTap_actionGroup2();
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
				window.obj87842_onTap_runningActionsCount = window.obj87842_onTap_runningActionsCount - 1;
if (window.obj87842_onTap_runningActionsCount < 0) {
	window.obj87842_onTap_runningActionsCount = 0;
} else if (window.obj87842_onTap_runningActionsCount == 0) {
	obj87842_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87842_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87842_onTap_activeActionGroupIndex = -1;
		$("#obj87842").trigger("obj87842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87842) {
				console.warn("de-queueing event obj87842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87842_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87852 
playAudio_87846();
function playAudio_87846() {
	window.obj87842_onTap_runningActionsCount = obj87842_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87852")[0];
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
		    window.obj87842_onTap_runningActionsCount = window.obj87842_onTap_runningActionsCount - 1;
if (window.obj87842_onTap_runningActionsCount < 0) {
	window.obj87842_onTap_runningActionsCount = 0;
} else if (window.obj87842_onTap_runningActionsCount == 0) {
	obj87842_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87842_onTap_runningActionsCount = window.obj87842_onTap_runningActionsCount - 1;
if (window.obj87842_onTap_runningActionsCount < 0) {
	window.obj87842_onTap_runningActionsCount = 0;
} else if (window.obj87842_onTap_runningActionsCount == 0) {
	obj87842_onTap_actionGroup3();
}
	}
}









};
obj87842_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87842_onTap_activeActionGroupIndex = -1;
		$("#obj87842").trigger("obj87842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87842) {
				console.warn("de-queueing event obj87842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87842_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj77576: Event Touch Down
 *
 */
$("#obj77576").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77576_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77576_onTap is still running");
	return;
}
var obj77576_onTap_runningActionsCount = 0;
var obj77576_onTap_loopCount = 0;
obj77576_onTap_actionGroup0();
});










/*
 *
 *   obj77573: Event Touch Down
 *
 */
$("#obj77573").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77573_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77573_onTap is still running");
	return;
}
var obj77573_onTap_runningActionsCount = 0;
var obj77573_onTap_loopCount = 0;
obj77573_onTap_actionGroup0();
});




























































/*
 *
 *   obj77545: Event Touch Down
 *
 */
$("#obj77545").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77545_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77545_onTap is still running");
	return;
}
var obj77545_onTap_runningActionsCount = 0;
var obj77545_onTap_loopCount = 0;
obj77545_onTap_actionGroup0();
});










/*
 *
 *   obj77537: Event Touch Down
 *
 */
$("#obj77537").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77537_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77537_onTap is still running");
	return;
}
var obj77537_onTap_runningActionsCount = 0;
var obj77537_onTap_loopCount = 0;
obj77537_onTap_actionGroup0();
});










/*
 *
 *   obj87847: Event Touch Down
 *
 */
$("#obj87847").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87847_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87847_onTap is still running");
	return;
}
var obj87847_onTap_runningActionsCount = 0;
var obj87847_onTap_loopCount = 0;
obj87847_onTap_actionGroup0();
});










/*
 *
 *   obj87842: Event Touch Down
 *
 */
$("#obj87842").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87842_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87842_onTap is still running");
	return;
}
var obj87842_onTap_runningActionsCount = 0;
var obj87842_onTap_loopCount = 0;
obj87842_onTap_actionGroup0();
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
	
$("#obj77579").trigger('SCEventShow');
$("#obj77576").trigger('SCEventShow');
$("#obj77573").trigger('SCEventShow');
$("#obj77571").trigger('SCEventShow');
$("#obj77569").trigger('SCEventShow');
$("#obj77567").trigger('SCEventShow');
$("#obj77565").trigger('SCEventShow');
$("#obj77563").trigger('SCEventShow');
$("#obj77545").trigger('SCEventShow');
$("#obj77537").trigger('SCEventShow');
$("#obj87847").trigger('SCEventShow');
$("#obj87842").trigger('SCEventShow');
$("#obj87852").trigger('SCEventShow');
$("#obj94793").trigger('SCEventShow');
$("#obj77535").trigger('SCEventShow');
	
});