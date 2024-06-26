pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 53489;
pubcoder.page.title = pubcoder.page.title || "192";
pubcoder.page.number = pubcoder.page.number || 192;
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
var obj53541_onTap_activeActionGroupIndex = -1;
var obj53541_onTap_runningActionsCount = 0;
var obj53541_onTap_loopCount = 0;
var obj53538_onTap_activeActionGroupIndex = -1;
var obj53538_onTap_runningActionsCount = 0;
var obj53538_onTap_loopCount = 0;
var obj68094_onTap_activeActionGroupIndex = -1;
var obj68094_onTap_runningActionsCount = 0;
var obj68094_onTap_loopCount = 0;
var obj68086_onTap_activeActionGroupIndex = -1;
var obj68086_onTap_runningActionsCount = 0;
var obj68086_onTap_loopCount = 0;
var obj89185_onTap_activeActionGroupIndex = -1;
var obj89185_onTap_runningActionsCount = 0;
var obj89185_onTap_loopCount = 0;
var obj89180_onTap_activeActionGroupIndex = -1;
var obj89180_onTap_runningActionsCount = 0;
var obj89180_onTap_loopCount = 0;
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
		
obj53541_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53541_onTap_activeActionGroupIndex = -1;
		$("#obj53541").trigger("obj53541_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53541) {
				console.warn("de-queueing event obj53541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53541_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53543();
function goToPage_53543() {
	window.obj53541_onTap_runningActionsCount = obj53541_onTap_runningActionsCount + 1;
	$("#anchor1126")[0].click();
	window.obj53541_onTap_runningActionsCount = window.obj53541_onTap_runningActionsCount - 1;
if (window.obj53541_onTap_runningActionsCount < 0) {
	window.obj53541_onTap_runningActionsCount = 0;
} else if (window.obj53541_onTap_runningActionsCount == 0) {
	obj53541_onTap_actionGroup1();
}
}





















};
obj53541_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53541_onTap_activeActionGroupIndex = -1;
		$("#obj53541").trigger("obj53541_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53541) {
				console.warn("de-queueing event obj53541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53541_onTap_activeActionGroupIndex = 1;
	





















};
obj53538_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53538_onTap_activeActionGroupIndex = -1;
		$("#obj53538").trigger("obj53538_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53538) {
				console.warn("de-queueing event obj53538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53538_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53540();
function goToPage_53540() {
	window.obj53538_onTap_runningActionsCount = obj53538_onTap_runningActionsCount + 1;
	$("#anchor1127")[0].click();
	window.obj53538_onTap_runningActionsCount = window.obj53538_onTap_runningActionsCount - 1;
if (window.obj53538_onTap_runningActionsCount < 0) {
	window.obj53538_onTap_runningActionsCount = 0;
} else if (window.obj53538_onTap_runningActionsCount == 0) {
	obj53538_onTap_actionGroup1();
}
}





















};
obj53538_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53538_onTap_activeActionGroupIndex = -1;
		$("#obj53538").trigger("obj53538_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53538) {
				console.warn("de-queueing event obj53538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53538_onTap_activeActionGroupIndex = 1;
	





















};
obj68094_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68094_onTap_activeActionGroupIndex = -1;
		$("#obj68094").trigger("obj68094_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68094) {
				console.warn("de-queueing event obj68094." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68094").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68094_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68094 
hide_68097();
function hide_68097() {
	var selector = "#obj68094";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68094_onTap_runningActionsCount = obj68094_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68094_onTap_runningActionsCount = window.obj68094_onTap_runningActionsCount - 1;
if (window.obj68094_onTap_runningActionsCount < 0) {
	window.obj68094_onTap_runningActionsCount = 0;
} else if (window.obj68094_onTap_runningActionsCount == 0) {
	obj68094_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68097(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68094_onTap_runningActionsCount = window.obj68094_onTap_runningActionsCount - 1;
if (window.obj68094_onTap_runningActionsCount < 0) {
	window.obj68094_onTap_runningActionsCount = 0;
} else if (window.obj68094_onTap_runningActionsCount == 0) {
	obj68094_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68100 
stopMovie_68096();
function stopMovie_68096() {
	window.obj68094_onTap_runningActionsCount = obj68094_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68100")[0];
	myVideo.pause();
	window.obj68094_onTap_runningActionsCount = window.obj68094_onTap_runningActionsCount - 1;
if (window.obj68094_onTap_runningActionsCount < 0) {
	window.obj68094_onTap_runningActionsCount = 0;
} else if (window.obj68094_onTap_runningActionsCount == 0) {
	obj68094_onTap_actionGroup1();
}
}
















};
obj68094_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68094_onTap_activeActionGroupIndex = -1;
		$("#obj68094").trigger("obj68094_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68094) {
				console.warn("de-queueing event obj68094." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68094").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68094_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68086
(function(){
	window.obj68094_onTap_runningActionsCount = obj68094_onTap_runningActionsCount + 1;

	var selector = "#obj68086";
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
					window.obj68094_onTap_runningActionsCount = window.obj68094_onTap_runningActionsCount - 1;
if (window.obj68094_onTap_runningActionsCount < 0) {
	window.obj68094_onTap_runningActionsCount = 0;
} else if (window.obj68094_onTap_runningActionsCount == 0) {
	obj68094_onTap_actionGroup2();
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
				window.obj68094_onTap_runningActionsCount = window.obj68094_onTap_runningActionsCount - 1;
if (window.obj68094_onTap_runningActionsCount < 0) {
	window.obj68094_onTap_runningActionsCount = 0;
} else if (window.obj68094_onTap_runningActionsCount == 0) {
	obj68094_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68094_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68094_onTap_activeActionGroupIndex = -1;
		$("#obj68094").trigger("obj68094_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68094) {
				console.warn("de-queueing event obj68094." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68094").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68094_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68100 
move_68099();
function move_68099() {
	window.obj68094_onTap_runningActionsCount = obj68094_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68100");
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
			window.obj68094_onTap_runningActionsCount = window.obj68094_onTap_runningActionsCount - 1;
if (window.obj68094_onTap_runningActionsCount < 0) {
	window.obj68094_onTap_runningActionsCount = 0;
} else if (window.obj68094_onTap_runningActionsCount == 0) {
	obj68094_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68094_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68094_onTap_activeActionGroupIndex = -1;
		$("#obj68094").trigger("obj68094_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68094) {
				console.warn("de-queueing event obj68094." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68094").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68094_onTap_activeActionGroupIndex = 3;
	





















};
obj68086_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68086_onTap_activeActionGroupIndex = -1;
		$("#obj68086").trigger("obj68086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68086) {
				console.warn("de-queueing event obj68086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68086_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68086 
hide_68089();
function hide_68089() {
	var selector = "#obj68086";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68086_onTap_runningActionsCount = obj68086_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68086_onTap_runningActionsCount = window.obj68086_onTap_runningActionsCount - 1;
if (window.obj68086_onTap_runningActionsCount < 0) {
	window.obj68086_onTap_runningActionsCount = 0;
} else if (window.obj68086_onTap_runningActionsCount == 0) {
	obj68086_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68089(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68086_onTap_runningActionsCount = window.obj68086_onTap_runningActionsCount - 1;
if (window.obj68086_onTap_runningActionsCount < 0) {
	window.obj68086_onTap_runningActionsCount = 0;
} else if (window.obj68086_onTap_runningActionsCount == 0) {
	obj68086_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68100 
playPauseMovie_68088();
function playPauseMovie_68088() {
	window.obj68086_onTap_runningActionsCount = obj68086_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68100")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68086_onTap_runningActionsCount = window.obj68086_onTap_runningActionsCount - 1;
if (window.obj68086_onTap_runningActionsCount < 0) {
	window.obj68086_onTap_runningActionsCount = 0;
} else if (window.obj68086_onTap_runningActionsCount == 0) {
	obj68086_onTap_actionGroup1();
}
}

















};
obj68086_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68086_onTap_activeActionGroupIndex = -1;
		$("#obj68086").trigger("obj68086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68086) {
				console.warn("de-queueing event obj68086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68086_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68094
(function(){
	window.obj68086_onTap_runningActionsCount = obj68086_onTap_runningActionsCount + 1;

	var selector = "#obj68094";
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
					window.obj68086_onTap_runningActionsCount = window.obj68086_onTap_runningActionsCount - 1;
if (window.obj68086_onTap_runningActionsCount < 0) {
	window.obj68086_onTap_runningActionsCount = 0;
} else if (window.obj68086_onTap_runningActionsCount == 0) {
	obj68086_onTap_actionGroup2();
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
				window.obj68086_onTap_runningActionsCount = window.obj68086_onTap_runningActionsCount - 1;
if (window.obj68086_onTap_runningActionsCount < 0) {
	window.obj68086_onTap_runningActionsCount = 0;
} else if (window.obj68086_onTap_runningActionsCount == 0) {
	obj68086_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68086_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68086_onTap_activeActionGroupIndex = -1;
		$("#obj68086").trigger("obj68086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68086) {
				console.warn("de-queueing event obj68086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68086_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68100 
move_68091();
function move_68091() {
	window.obj68086_onTap_runningActionsCount = obj68086_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68100");
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
			window.obj68086_onTap_runningActionsCount = window.obj68086_onTap_runningActionsCount - 1;
if (window.obj68086_onTap_runningActionsCount < 0) {
	window.obj68086_onTap_runningActionsCount = 0;
} else if (window.obj68086_onTap_runningActionsCount == 0) {
	obj68086_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68086_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68086_onTap_activeActionGroupIndex = -1;
		$("#obj68086").trigger("obj68086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68086) {
				console.warn("de-queueing event obj68086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68086_onTap_activeActionGroupIndex = 3;
	





















};
obj89185_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89185_onTap_activeActionGroupIndex = -1;
		$("#obj89185").trigger("obj89185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89185) {
				console.warn("de-queueing event obj89185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89185_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89190 
stopAudio_89187();
function stopAudio_89187() {
	window.obj89185_onTap_runningActionsCount = obj89185_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89190")[0];
	myAudio.pause();
	window.obj89185_onTap_runningActionsCount = window.obj89185_onTap_runningActionsCount - 1;
if (window.obj89185_onTap_runningActionsCount < 0) {
	window.obj89185_onTap_runningActionsCount = 0;
} else if (window.obj89185_onTap_runningActionsCount == 0) {
	obj89185_onTap_actionGroup1();
}
}








};
obj89185_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89185_onTap_activeActionGroupIndex = -1;
		$("#obj89185").trigger("obj89185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89185) {
				console.warn("de-queueing event obj89185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89185_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89185 
hide_89188();
function hide_89188() {
	var selector = "#obj89185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89185_onTap_runningActionsCount = obj89185_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89185_onTap_runningActionsCount = window.obj89185_onTap_runningActionsCount - 1;
if (window.obj89185_onTap_runningActionsCount < 0) {
	window.obj89185_onTap_runningActionsCount = 0;
} else if (window.obj89185_onTap_runningActionsCount == 0) {
	obj89185_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89188(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89185_onTap_runningActionsCount = window.obj89185_onTap_runningActionsCount - 1;
if (window.obj89185_onTap_runningActionsCount < 0) {
	window.obj89185_onTap_runningActionsCount = 0;
} else if (window.obj89185_onTap_runningActionsCount == 0) {
	obj89185_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89185_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89185_onTap_activeActionGroupIndex = -1;
		$("#obj89185").trigger("obj89185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89185) {
				console.warn("de-queueing event obj89185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89185_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89180
(function(){
	window.obj89185_onTap_runningActionsCount = obj89185_onTap_runningActionsCount + 1;

	var selector = "#obj89180";
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
					window.obj89185_onTap_runningActionsCount = window.obj89185_onTap_runningActionsCount - 1;
if (window.obj89185_onTap_runningActionsCount < 0) {
	window.obj89185_onTap_runningActionsCount = 0;
} else if (window.obj89185_onTap_runningActionsCount == 0) {
	obj89185_onTap_actionGroup3();
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
				window.obj89185_onTap_runningActionsCount = window.obj89185_onTap_runningActionsCount - 1;
if (window.obj89185_onTap_runningActionsCount < 0) {
	window.obj89185_onTap_runningActionsCount = 0;
} else if (window.obj89185_onTap_runningActionsCount == 0) {
	obj89185_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89185_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89185_onTap_activeActionGroupIndex = -1;
		$("#obj89185").trigger("obj89185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89185) {
				console.warn("de-queueing event obj89185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89185_onTap_activeActionGroupIndex = 3;
	





















};
obj89180_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89180_onTap_activeActionGroupIndex = -1;
		$("#obj89180").trigger("obj89180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89180) {
				console.warn("de-queueing event obj89180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89180_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89180 
hide_89182();
function hide_89182() {
	var selector = "#obj89180";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89180_onTap_runningActionsCount = obj89180_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89180_onTap_runningActionsCount = window.obj89180_onTap_runningActionsCount - 1;
if (window.obj89180_onTap_runningActionsCount < 0) {
	window.obj89180_onTap_runningActionsCount = 0;
} else if (window.obj89180_onTap_runningActionsCount == 0) {
	obj89180_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89182(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89180_onTap_runningActionsCount = window.obj89180_onTap_runningActionsCount - 1;
if (window.obj89180_onTap_runningActionsCount < 0) {
	window.obj89180_onTap_runningActionsCount = 0;
} else if (window.obj89180_onTap_runningActionsCount == 0) {
	obj89180_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89180_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89180_onTap_activeActionGroupIndex = -1;
		$("#obj89180").trigger("obj89180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89180) {
				console.warn("de-queueing event obj89180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89180_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89185
(function(){
	window.obj89180_onTap_runningActionsCount = obj89180_onTap_runningActionsCount + 1;

	var selector = "#obj89185";
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
					window.obj89180_onTap_runningActionsCount = window.obj89180_onTap_runningActionsCount - 1;
if (window.obj89180_onTap_runningActionsCount < 0) {
	window.obj89180_onTap_runningActionsCount = 0;
} else if (window.obj89180_onTap_runningActionsCount == 0) {
	obj89180_onTap_actionGroup2();
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
				window.obj89180_onTap_runningActionsCount = window.obj89180_onTap_runningActionsCount - 1;
if (window.obj89180_onTap_runningActionsCount < 0) {
	window.obj89180_onTap_runningActionsCount = 0;
} else if (window.obj89180_onTap_runningActionsCount == 0) {
	obj89180_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89180_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89180_onTap_activeActionGroupIndex = -1;
		$("#obj89180").trigger("obj89180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89180) {
				console.warn("de-queueing event obj89180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89180_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89190 
playAudio_89184();
function playAudio_89184() {
	window.obj89180_onTap_runningActionsCount = obj89180_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89190")[0];
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
		    window.obj89180_onTap_runningActionsCount = window.obj89180_onTap_runningActionsCount - 1;
if (window.obj89180_onTap_runningActionsCount < 0) {
	window.obj89180_onTap_runningActionsCount = 0;
} else if (window.obj89180_onTap_runningActionsCount == 0) {
	obj89180_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89180_onTap_runningActionsCount = window.obj89180_onTap_runningActionsCount - 1;
if (window.obj89180_onTap_runningActionsCount < 0) {
	window.obj89180_onTap_runningActionsCount = 0;
} else if (window.obj89180_onTap_runningActionsCount == 0) {
	obj89180_onTap_actionGroup3();
}
	}
}









};
obj89180_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89180_onTap_activeActionGroupIndex = -1;
		$("#obj89180").trigger("obj89180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89180) {
				console.warn("de-queueing event obj89180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89180_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj53541: Event Touch Down
 *
 */
$("#obj53541").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53541_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53541_onTap is still running");
	return;
}
var obj53541_onTap_runningActionsCount = 0;
var obj53541_onTap_loopCount = 0;
obj53541_onTap_actionGroup0();
});










/*
 *
 *   obj53538: Event Touch Down
 *
 */
$("#obj53538").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53538_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53538_onTap is still running");
	return;
}
var obj53538_onTap_runningActionsCount = 0;
var obj53538_onTap_loopCount = 0;
obj53538_onTap_actionGroup0();
});


























































































































































































































































/*
 *
 *   obj68094: Event Touch Down
 *
 */
$("#obj68094").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68094_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68094_onTap is still running");
	return;
}
var obj68094_onTap_runningActionsCount = 0;
var obj68094_onTap_loopCount = 0;
obj68094_onTap_actionGroup0();
});










/*
 *
 *   obj68086: Event Touch Down
 *
 */
$("#obj68086").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68086_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68086_onTap is still running");
	return;
}
var obj68086_onTap_runningActionsCount = 0;
var obj68086_onTap_loopCount = 0;
obj68086_onTap_actionGroup0();
});










/*
 *
 *   obj89185: Event Touch Down
 *
 */
$("#obj89185").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89185_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89185_onTap is still running");
	return;
}
var obj89185_onTap_runningActionsCount = 0;
var obj89185_onTap_loopCount = 0;
obj89185_onTap_actionGroup0();
});










/*
 *
 *   obj89180: Event Touch Down
 *
 */
$("#obj89180").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89180_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89180_onTap is still running");
	return;
}
var obj89180_onTap_runningActionsCount = 0;
var obj89180_onTap_loopCount = 0;
obj89180_onTap_actionGroup0();
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
	
$("#obj53557").trigger('SCEventShow');
$("#obj53541").trigger('SCEventShow');
$("#obj53538").trigger('SCEventShow');
$("#obj53536").trigger('SCEventShow');
$("#obj53534").trigger('SCEventShow');
$("#obj53532").trigger('SCEventShow');
$("#obj53530").trigger('SCEventShow');
$("#obj53528").trigger('SCEventShow');
$("#obj53526").trigger('SCEventShow');
$("#obj53524").trigger('SCEventShow');
$("#obj53522").trigger('SCEventShow');
$("#obj53520").trigger('SCEventShow');
$("#obj53518").trigger('SCEventShow');
$("#obj53516").trigger('SCEventShow');
$("#obj53514").trigger('SCEventShow');
$("#obj53512").trigger('SCEventShow');
$("#obj53510").trigger('SCEventShow');
$("#obj53508").trigger('SCEventShow');
$("#obj53506").trigger('SCEventShow');
$("#obj53504").trigger('SCEventShow');
$("#obj53502").trigger('SCEventShow');
$("#obj53500").trigger('SCEventShow');
$("#obj53498").trigger('SCEventShow');
$("#obj53496").trigger('SCEventShow');
$("#obj53494").trigger('SCEventShow');
$("#obj53492").trigger('SCEventShow');
$("#obj53490").trigger('SCEventShow');
$("#obj68094").trigger('SCEventShow');
$("#obj68086").trigger('SCEventShow');
$("#obj89185").trigger('SCEventShow');
$("#obj89180").trigger('SCEventShow');
$("#obj89190").trigger('SCEventShow');
$("#obj95013").trigger('SCEventShow');
$("#obj68100").trigger('SCEventShow');
	
});