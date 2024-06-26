pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 8078;
pubcoder.page.title = pubcoder.page.title || "40";
pubcoder.page.number = pubcoder.page.number || 40;
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
var obj69381_onTap_activeActionGroupIndex = -1;
var obj69381_onTap_runningActionsCount = 0;
var obj69381_onTap_loopCount = 0;
var obj69378_onTap_activeActionGroupIndex = -1;
var obj69378_onTap_runningActionsCount = 0;
var obj69378_onTap_loopCount = 0;
var obj69350_onTap_activeActionGroupIndex = -1;
var obj69350_onTap_runningActionsCount = 0;
var obj69350_onTap_loopCount = 0;
var obj69342_onTap_activeActionGroupIndex = -1;
var obj69342_onTap_runningActionsCount = 0;
var obj69342_onTap_loopCount = 0;
var obj87214_onTap_activeActionGroupIndex = -1;
var obj87214_onTap_runningActionsCount = 0;
var obj87214_onTap_loopCount = 0;
var obj87209_onTap_activeActionGroupIndex = -1;
var obj87209_onTap_runningActionsCount = 0;
var obj87209_onTap_loopCount = 0;
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
		
obj69381_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69381_onTap_activeActionGroupIndex = -1;
		$("#obj69381").trigger("obj69381_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69381) {
				console.warn("de-queueing event obj69381." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69381").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69381_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69383();
function goToPage_69383() {
	window.obj69381_onTap_runningActionsCount = obj69381_onTap_runningActionsCount + 1;
	$("#anchor243")[0].click();
	window.obj69381_onTap_runningActionsCount = window.obj69381_onTap_runningActionsCount - 1;
if (window.obj69381_onTap_runningActionsCount < 0) {
	window.obj69381_onTap_runningActionsCount = 0;
} else if (window.obj69381_onTap_runningActionsCount == 0) {
	obj69381_onTap_actionGroup1();
}
}





















};
obj69381_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69381_onTap_activeActionGroupIndex = -1;
		$("#obj69381").trigger("obj69381_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69381) {
				console.warn("de-queueing event obj69381." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69381").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69381_onTap_activeActionGroupIndex = 1;
	





















};
obj69378_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69378_onTap_activeActionGroupIndex = -1;
		$("#obj69378").trigger("obj69378_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69378) {
				console.warn("de-queueing event obj69378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69378_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69380();
function goToPage_69380() {
	window.obj69378_onTap_runningActionsCount = obj69378_onTap_runningActionsCount + 1;
	$("#anchor244")[0].click();
	window.obj69378_onTap_runningActionsCount = window.obj69378_onTap_runningActionsCount - 1;
if (window.obj69378_onTap_runningActionsCount < 0) {
	window.obj69378_onTap_runningActionsCount = 0;
} else if (window.obj69378_onTap_runningActionsCount == 0) {
	obj69378_onTap_actionGroup1();
}
}





















};
obj69378_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69378_onTap_activeActionGroupIndex = -1;
		$("#obj69378").trigger("obj69378_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69378) {
				console.warn("de-queueing event obj69378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69378_onTap_activeActionGroupIndex = 1;
	





















};
obj69350_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69350_onTap_activeActionGroupIndex = -1;
		$("#obj69350").trigger("obj69350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69350) {
				console.warn("de-queueing event obj69350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69350_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69350 
hide_69353();
function hide_69353() {
	var selector = "#obj69350";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69350_onTap_runningActionsCount = obj69350_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69350_onTap_runningActionsCount = window.obj69350_onTap_runningActionsCount - 1;
if (window.obj69350_onTap_runningActionsCount < 0) {
	window.obj69350_onTap_runningActionsCount = 0;
} else if (window.obj69350_onTap_runningActionsCount == 0) {
	obj69350_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69353(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69350_onTap_runningActionsCount = window.obj69350_onTap_runningActionsCount - 1;
if (window.obj69350_onTap_runningActionsCount < 0) {
	window.obj69350_onTap_runningActionsCount = 0;
} else if (window.obj69350_onTap_runningActionsCount == 0) {
	obj69350_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj69340 
stopMovie_69352();
function stopMovie_69352() {
	window.obj69350_onTap_runningActionsCount = obj69350_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69340")[0];
	myVideo.pause();
	window.obj69350_onTap_runningActionsCount = window.obj69350_onTap_runningActionsCount - 1;
if (window.obj69350_onTap_runningActionsCount < 0) {
	window.obj69350_onTap_runningActionsCount = 0;
} else if (window.obj69350_onTap_runningActionsCount == 0) {
	obj69350_onTap_actionGroup1();
}
}
















};
obj69350_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69350_onTap_activeActionGroupIndex = -1;
		$("#obj69350").trigger("obj69350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69350) {
				console.warn("de-queueing event obj69350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69350_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69342
(function(){
	window.obj69350_onTap_runningActionsCount = obj69350_onTap_runningActionsCount + 1;

	var selector = "#obj69342";
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
					window.obj69350_onTap_runningActionsCount = window.obj69350_onTap_runningActionsCount - 1;
if (window.obj69350_onTap_runningActionsCount < 0) {
	window.obj69350_onTap_runningActionsCount = 0;
} else if (window.obj69350_onTap_runningActionsCount == 0) {
	obj69350_onTap_actionGroup2();
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
				window.obj69350_onTap_runningActionsCount = window.obj69350_onTap_runningActionsCount - 1;
if (window.obj69350_onTap_runningActionsCount < 0) {
	window.obj69350_onTap_runningActionsCount = 0;
} else if (window.obj69350_onTap_runningActionsCount == 0) {
	obj69350_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69350_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69350_onTap_activeActionGroupIndex = -1;
		$("#obj69350").trigger("obj69350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69350) {
				console.warn("de-queueing event obj69350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69350_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69340 
move_69355();
function move_69355() {
	window.obj69350_onTap_runningActionsCount = obj69350_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69340");
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
			window.obj69350_onTap_runningActionsCount = window.obj69350_onTap_runningActionsCount - 1;
if (window.obj69350_onTap_runningActionsCount < 0) {
	window.obj69350_onTap_runningActionsCount = 0;
} else if (window.obj69350_onTap_runningActionsCount == 0) {
	obj69350_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69350_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69350_onTap_activeActionGroupIndex = -1;
		$("#obj69350").trigger("obj69350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69350) {
				console.warn("de-queueing event obj69350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69350_onTap_activeActionGroupIndex = 3;
	





















};
obj69342_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69342_onTap_activeActionGroupIndex = -1;
		$("#obj69342").trigger("obj69342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69342) {
				console.warn("de-queueing event obj69342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69342_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69342 
hide_69345();
function hide_69345() {
	var selector = "#obj69342";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69342_onTap_runningActionsCount = obj69342_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69342_onTap_runningActionsCount = window.obj69342_onTap_runningActionsCount - 1;
if (window.obj69342_onTap_runningActionsCount < 0) {
	window.obj69342_onTap_runningActionsCount = 0;
} else if (window.obj69342_onTap_runningActionsCount == 0) {
	obj69342_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69345(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69342_onTap_runningActionsCount = window.obj69342_onTap_runningActionsCount - 1;
if (window.obj69342_onTap_runningActionsCount < 0) {
	window.obj69342_onTap_runningActionsCount = 0;
} else if (window.obj69342_onTap_runningActionsCount == 0) {
	obj69342_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj69340 
playPauseMovie_69344();
function playPauseMovie_69344() {
	window.obj69342_onTap_runningActionsCount = obj69342_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69340")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj69342_onTap_runningActionsCount = window.obj69342_onTap_runningActionsCount - 1;
if (window.obj69342_onTap_runningActionsCount < 0) {
	window.obj69342_onTap_runningActionsCount = 0;
} else if (window.obj69342_onTap_runningActionsCount == 0) {
	obj69342_onTap_actionGroup1();
}
}

















};
obj69342_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69342_onTap_activeActionGroupIndex = -1;
		$("#obj69342").trigger("obj69342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69342) {
				console.warn("de-queueing event obj69342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69342_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69350
(function(){
	window.obj69342_onTap_runningActionsCount = obj69342_onTap_runningActionsCount + 1;

	var selector = "#obj69350";
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
					window.obj69342_onTap_runningActionsCount = window.obj69342_onTap_runningActionsCount - 1;
if (window.obj69342_onTap_runningActionsCount < 0) {
	window.obj69342_onTap_runningActionsCount = 0;
} else if (window.obj69342_onTap_runningActionsCount == 0) {
	obj69342_onTap_actionGroup2();
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
				window.obj69342_onTap_runningActionsCount = window.obj69342_onTap_runningActionsCount - 1;
if (window.obj69342_onTap_runningActionsCount < 0) {
	window.obj69342_onTap_runningActionsCount = 0;
} else if (window.obj69342_onTap_runningActionsCount == 0) {
	obj69342_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69342_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69342_onTap_activeActionGroupIndex = -1;
		$("#obj69342").trigger("obj69342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69342) {
				console.warn("de-queueing event obj69342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69342_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69340 
move_69347();
function move_69347() {
	window.obj69342_onTap_runningActionsCount = obj69342_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69340");
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
			window.obj69342_onTap_runningActionsCount = window.obj69342_onTap_runningActionsCount - 1;
if (window.obj69342_onTap_runningActionsCount < 0) {
	window.obj69342_onTap_runningActionsCount = 0;
} else if (window.obj69342_onTap_runningActionsCount == 0) {
	obj69342_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69342_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69342_onTap_activeActionGroupIndex = -1;
		$("#obj69342").trigger("obj69342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69342) {
				console.warn("de-queueing event obj69342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69342_onTap_activeActionGroupIndex = 3;
	





















};
obj87214_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87214_onTap_activeActionGroupIndex = -1;
		$("#obj87214").trigger("obj87214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87214) {
				console.warn("de-queueing event obj87214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87214_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87219 
stopAudio_87216();
function stopAudio_87216() {
	window.obj87214_onTap_runningActionsCount = obj87214_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87219")[0];
	myAudio.pause();
	window.obj87214_onTap_runningActionsCount = window.obj87214_onTap_runningActionsCount - 1;
if (window.obj87214_onTap_runningActionsCount < 0) {
	window.obj87214_onTap_runningActionsCount = 0;
} else if (window.obj87214_onTap_runningActionsCount == 0) {
	obj87214_onTap_actionGroup1();
}
}








};
obj87214_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87214_onTap_activeActionGroupIndex = -1;
		$("#obj87214").trigger("obj87214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87214) {
				console.warn("de-queueing event obj87214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87214_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87214 
hide_87217();
function hide_87217() {
	var selector = "#obj87214";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87214_onTap_runningActionsCount = obj87214_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87214_onTap_runningActionsCount = window.obj87214_onTap_runningActionsCount - 1;
if (window.obj87214_onTap_runningActionsCount < 0) {
	window.obj87214_onTap_runningActionsCount = 0;
} else if (window.obj87214_onTap_runningActionsCount == 0) {
	obj87214_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87217(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87214_onTap_runningActionsCount = window.obj87214_onTap_runningActionsCount - 1;
if (window.obj87214_onTap_runningActionsCount < 0) {
	window.obj87214_onTap_runningActionsCount = 0;
} else if (window.obj87214_onTap_runningActionsCount == 0) {
	obj87214_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87214_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87214_onTap_activeActionGroupIndex = -1;
		$("#obj87214").trigger("obj87214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87214) {
				console.warn("de-queueing event obj87214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87214_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87209
(function(){
	window.obj87214_onTap_runningActionsCount = obj87214_onTap_runningActionsCount + 1;

	var selector = "#obj87209";
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
					window.obj87214_onTap_runningActionsCount = window.obj87214_onTap_runningActionsCount - 1;
if (window.obj87214_onTap_runningActionsCount < 0) {
	window.obj87214_onTap_runningActionsCount = 0;
} else if (window.obj87214_onTap_runningActionsCount == 0) {
	obj87214_onTap_actionGroup3();
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
				window.obj87214_onTap_runningActionsCount = window.obj87214_onTap_runningActionsCount - 1;
if (window.obj87214_onTap_runningActionsCount < 0) {
	window.obj87214_onTap_runningActionsCount = 0;
} else if (window.obj87214_onTap_runningActionsCount == 0) {
	obj87214_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87214_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87214_onTap_activeActionGroupIndex = -1;
		$("#obj87214").trigger("obj87214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87214) {
				console.warn("de-queueing event obj87214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87214_onTap_activeActionGroupIndex = 3;
	





















};
obj87209_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87209_onTap_activeActionGroupIndex = -1;
		$("#obj87209").trigger("obj87209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87209) {
				console.warn("de-queueing event obj87209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87209_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87209 
hide_87211();
function hide_87211() {
	var selector = "#obj87209";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87209_onTap_runningActionsCount = obj87209_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87209_onTap_runningActionsCount = window.obj87209_onTap_runningActionsCount - 1;
if (window.obj87209_onTap_runningActionsCount < 0) {
	window.obj87209_onTap_runningActionsCount = 0;
} else if (window.obj87209_onTap_runningActionsCount == 0) {
	obj87209_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87211(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87209_onTap_runningActionsCount = window.obj87209_onTap_runningActionsCount - 1;
if (window.obj87209_onTap_runningActionsCount < 0) {
	window.obj87209_onTap_runningActionsCount = 0;
} else if (window.obj87209_onTap_runningActionsCount == 0) {
	obj87209_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87209_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87209_onTap_activeActionGroupIndex = -1;
		$("#obj87209").trigger("obj87209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87209) {
				console.warn("de-queueing event obj87209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87209_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87214
(function(){
	window.obj87209_onTap_runningActionsCount = obj87209_onTap_runningActionsCount + 1;

	var selector = "#obj87214";
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
					window.obj87209_onTap_runningActionsCount = window.obj87209_onTap_runningActionsCount - 1;
if (window.obj87209_onTap_runningActionsCount < 0) {
	window.obj87209_onTap_runningActionsCount = 0;
} else if (window.obj87209_onTap_runningActionsCount == 0) {
	obj87209_onTap_actionGroup2();
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
				window.obj87209_onTap_runningActionsCount = window.obj87209_onTap_runningActionsCount - 1;
if (window.obj87209_onTap_runningActionsCount < 0) {
	window.obj87209_onTap_runningActionsCount = 0;
} else if (window.obj87209_onTap_runningActionsCount == 0) {
	obj87209_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87209_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87209_onTap_activeActionGroupIndex = -1;
		$("#obj87209").trigger("obj87209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87209) {
				console.warn("de-queueing event obj87209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87209_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87219 
playAudio_87213();
function playAudio_87213() {
	window.obj87209_onTap_runningActionsCount = obj87209_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87219")[0];
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
		    window.obj87209_onTap_runningActionsCount = window.obj87209_onTap_runningActionsCount - 1;
if (window.obj87209_onTap_runningActionsCount < 0) {
	window.obj87209_onTap_runningActionsCount = 0;
} else if (window.obj87209_onTap_runningActionsCount == 0) {
	obj87209_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87209_onTap_runningActionsCount = window.obj87209_onTap_runningActionsCount - 1;
if (window.obj87209_onTap_runningActionsCount < 0) {
	window.obj87209_onTap_runningActionsCount = 0;
} else if (window.obj87209_onTap_runningActionsCount == 0) {
	obj87209_onTap_actionGroup3();
}
	}
}









};
obj87209_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87209_onTap_activeActionGroupIndex = -1;
		$("#obj87209").trigger("obj87209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87209) {
				console.warn("de-queueing event obj87209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87209_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj69381: Event Touch Down
 *
 */
$("#obj69381").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69381_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69381_onTap is still running");
	return;
}
var obj69381_onTap_runningActionsCount = 0;
var obj69381_onTap_loopCount = 0;
obj69381_onTap_actionGroup0();
});










/*
 *
 *   obj69378: Event Touch Down
 *
 */
$("#obj69378").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69378_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69378_onTap is still running");
	return;
}
var obj69378_onTap_runningActionsCount = 0;
var obj69378_onTap_loopCount = 0;
obj69378_onTap_actionGroup0();
});




























































/*
 *
 *   obj69350: Event Touch Down
 *
 */
$("#obj69350").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69350_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69350_onTap is still running");
	return;
}
var obj69350_onTap_runningActionsCount = 0;
var obj69350_onTap_loopCount = 0;
obj69350_onTap_actionGroup0();
});










/*
 *
 *   obj69342: Event Touch Down
 *
 */
$("#obj69342").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69342_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69342_onTap is still running");
	return;
}
var obj69342_onTap_runningActionsCount = 0;
var obj69342_onTap_loopCount = 0;
obj69342_onTap_actionGroup0();
});










/*
 *
 *   obj87214: Event Touch Down
 *
 */
$("#obj87214").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87214_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87214_onTap is still running");
	return;
}
var obj87214_onTap_runningActionsCount = 0;
var obj87214_onTap_loopCount = 0;
obj87214_onTap_actionGroup0();
});










/*
 *
 *   obj87209: Event Touch Down
 *
 */
$("#obj87209").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87209_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87209_onTap is still running");
	return;
}
var obj87209_onTap_runningActionsCount = 0;
var obj87209_onTap_loopCount = 0;
obj87209_onTap_actionGroup0();
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
	
$("#obj69384").trigger('SCEventShow');
$("#obj69381").trigger('SCEventShow');
$("#obj69378").trigger('SCEventShow');
$("#obj69376").trigger('SCEventShow');
$("#obj69374").trigger('SCEventShow');
$("#obj69372").trigger('SCEventShow');
$("#obj69370").trigger('SCEventShow');
$("#obj69368").trigger('SCEventShow');
$("#obj69350").trigger('SCEventShow');
$("#obj69342").trigger('SCEventShow');
$("#obj87214").trigger('SCEventShow');
$("#obj87209").trigger('SCEventShow');
$("#obj87219").trigger('SCEventShow');
$("#obj94709").trigger('SCEventShow');
$("#obj69340").trigger('SCEventShow');
	
});