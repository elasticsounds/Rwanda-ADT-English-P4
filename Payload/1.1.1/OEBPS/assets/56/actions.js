pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 14581;
pubcoder.page.title = pubcoder.page.title || "56";
pubcoder.page.number = pubcoder.page.number || 56;
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
var obj73649_onTap_activeActionGroupIndex = -1;
var obj73649_onTap_runningActionsCount = 0;
var obj73649_onTap_loopCount = 0;
var obj73646_onTap_activeActionGroupIndex = -1;
var obj73646_onTap_runningActionsCount = 0;
var obj73646_onTap_loopCount = 0;
var obj73626_onTap_activeActionGroupIndex = -1;
var obj73626_onTap_runningActionsCount = 0;
var obj73626_onTap_loopCount = 0;
var obj73618_onTap_activeActionGroupIndex = -1;
var obj73618_onTap_runningActionsCount = 0;
var obj73618_onTap_loopCount = 0;
var obj87423_onTap_activeActionGroupIndex = -1;
var obj87423_onTap_runningActionsCount = 0;
var obj87423_onTap_loopCount = 0;
var obj87418_onTap_activeActionGroupIndex = -1;
var obj87418_onTap_runningActionsCount = 0;
var obj87418_onTap_loopCount = 0;
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
		
obj73649_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73649_onTap_activeActionGroupIndex = -1;
		$("#obj73649").trigger("obj73649_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73649) {
				console.warn("de-queueing event obj73649." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73649").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73649_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_73651();
function goToPage_73651() {
	window.obj73649_onTap_runningActionsCount = obj73649_onTap_runningActionsCount + 1;
	$("#anchor334")[0].click();
	window.obj73649_onTap_runningActionsCount = window.obj73649_onTap_runningActionsCount - 1;
if (window.obj73649_onTap_runningActionsCount < 0) {
	window.obj73649_onTap_runningActionsCount = 0;
} else if (window.obj73649_onTap_runningActionsCount == 0) {
	obj73649_onTap_actionGroup1();
}
}





















};
obj73649_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73649_onTap_activeActionGroupIndex = -1;
		$("#obj73649").trigger("obj73649_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73649) {
				console.warn("de-queueing event obj73649." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73649").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73649_onTap_activeActionGroupIndex = 1;
	





















};
obj73646_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73646_onTap_activeActionGroupIndex = -1;
		$("#obj73646").trigger("obj73646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73646) {
				console.warn("de-queueing event obj73646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73646_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_73648();
function goToPage_73648() {
	window.obj73646_onTap_runningActionsCount = obj73646_onTap_runningActionsCount + 1;
	$("#anchor335")[0].click();
	window.obj73646_onTap_runningActionsCount = window.obj73646_onTap_runningActionsCount - 1;
if (window.obj73646_onTap_runningActionsCount < 0) {
	window.obj73646_onTap_runningActionsCount = 0;
} else if (window.obj73646_onTap_runningActionsCount == 0) {
	obj73646_onTap_actionGroup1();
}
}





















};
obj73646_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73646_onTap_activeActionGroupIndex = -1;
		$("#obj73646").trigger("obj73646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73646) {
				console.warn("de-queueing event obj73646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73646_onTap_activeActionGroupIndex = 1;
	





















};
obj73626_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73626_onTap_activeActionGroupIndex = -1;
		$("#obj73626").trigger("obj73626_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73626) {
				console.warn("de-queueing event obj73626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73626_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj73626 
hide_73629();
function hide_73629() {
	var selector = "#obj73626";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73626_onTap_runningActionsCount = obj73626_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73626_onTap_runningActionsCount = window.obj73626_onTap_runningActionsCount - 1;
if (window.obj73626_onTap_runningActionsCount < 0) {
	window.obj73626_onTap_runningActionsCount = 0;
} else if (window.obj73626_onTap_runningActionsCount == 0) {
	obj73626_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73629(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73626_onTap_runningActionsCount = window.obj73626_onTap_runningActionsCount - 1;
if (window.obj73626_onTap_runningActionsCount < 0) {
	window.obj73626_onTap_runningActionsCount = 0;
} else if (window.obj73626_onTap_runningActionsCount == 0) {
	obj73626_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj73616 
stopMovie_73628();
function stopMovie_73628() {
	window.obj73626_onTap_runningActionsCount = obj73626_onTap_runningActionsCount + 1;
	var myVideo = $("#obj73616")[0];
	myVideo.pause();
	window.obj73626_onTap_runningActionsCount = window.obj73626_onTap_runningActionsCount - 1;
if (window.obj73626_onTap_runningActionsCount < 0) {
	window.obj73626_onTap_runningActionsCount = 0;
} else if (window.obj73626_onTap_runningActionsCount == 0) {
	obj73626_onTap_actionGroup1();
}
}
















};
obj73626_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73626_onTap_activeActionGroupIndex = -1;
		$("#obj73626").trigger("obj73626_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73626) {
				console.warn("de-queueing event obj73626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73626_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj73618
(function(){
	window.obj73626_onTap_runningActionsCount = obj73626_onTap_runningActionsCount + 1;

	var selector = "#obj73618";
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
					window.obj73626_onTap_runningActionsCount = window.obj73626_onTap_runningActionsCount - 1;
if (window.obj73626_onTap_runningActionsCount < 0) {
	window.obj73626_onTap_runningActionsCount = 0;
} else if (window.obj73626_onTap_runningActionsCount == 0) {
	obj73626_onTap_actionGroup2();
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
				window.obj73626_onTap_runningActionsCount = window.obj73626_onTap_runningActionsCount - 1;
if (window.obj73626_onTap_runningActionsCount < 0) {
	window.obj73626_onTap_runningActionsCount = 0;
} else if (window.obj73626_onTap_runningActionsCount == 0) {
	obj73626_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73626_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73626_onTap_activeActionGroupIndex = -1;
		$("#obj73626").trigger("obj73626_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73626) {
				console.warn("de-queueing event obj73626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73626_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj73616 
move_73631();
function move_73631() {
	window.obj73626_onTap_runningActionsCount = obj73626_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj73616");
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
			window.obj73626_onTap_runningActionsCount = window.obj73626_onTap_runningActionsCount - 1;
if (window.obj73626_onTap_runningActionsCount < 0) {
	window.obj73626_onTap_runningActionsCount = 0;
} else if (window.obj73626_onTap_runningActionsCount == 0) {
	obj73626_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj73626_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73626_onTap_activeActionGroupIndex = -1;
		$("#obj73626").trigger("obj73626_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73626) {
				console.warn("de-queueing event obj73626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73626_onTap_activeActionGroupIndex = 3;
	





















};
obj73618_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73618_onTap_activeActionGroupIndex = -1;
		$("#obj73618").trigger("obj73618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73618) {
				console.warn("de-queueing event obj73618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73618_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj73618 
hide_73621();
function hide_73621() {
	var selector = "#obj73618";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73618_onTap_runningActionsCount = obj73618_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73618_onTap_runningActionsCount = window.obj73618_onTap_runningActionsCount - 1;
if (window.obj73618_onTap_runningActionsCount < 0) {
	window.obj73618_onTap_runningActionsCount = 0;
} else if (window.obj73618_onTap_runningActionsCount == 0) {
	obj73618_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73621(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73618_onTap_runningActionsCount = window.obj73618_onTap_runningActionsCount - 1;
if (window.obj73618_onTap_runningActionsCount < 0) {
	window.obj73618_onTap_runningActionsCount = 0;
} else if (window.obj73618_onTap_runningActionsCount == 0) {
	obj73618_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj73616 
playPauseMovie_73620();
function playPauseMovie_73620() {
	window.obj73618_onTap_runningActionsCount = obj73618_onTap_runningActionsCount + 1;
	var myVideo = $("#obj73616")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj73618_onTap_runningActionsCount = window.obj73618_onTap_runningActionsCount - 1;
if (window.obj73618_onTap_runningActionsCount < 0) {
	window.obj73618_onTap_runningActionsCount = 0;
} else if (window.obj73618_onTap_runningActionsCount == 0) {
	obj73618_onTap_actionGroup1();
}
}

















};
obj73618_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73618_onTap_activeActionGroupIndex = -1;
		$("#obj73618").trigger("obj73618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73618) {
				console.warn("de-queueing event obj73618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73618_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj73626
(function(){
	window.obj73618_onTap_runningActionsCount = obj73618_onTap_runningActionsCount + 1;

	var selector = "#obj73626";
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
					window.obj73618_onTap_runningActionsCount = window.obj73618_onTap_runningActionsCount - 1;
if (window.obj73618_onTap_runningActionsCount < 0) {
	window.obj73618_onTap_runningActionsCount = 0;
} else if (window.obj73618_onTap_runningActionsCount == 0) {
	obj73618_onTap_actionGroup2();
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
				window.obj73618_onTap_runningActionsCount = window.obj73618_onTap_runningActionsCount - 1;
if (window.obj73618_onTap_runningActionsCount < 0) {
	window.obj73618_onTap_runningActionsCount = 0;
} else if (window.obj73618_onTap_runningActionsCount == 0) {
	obj73618_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73618_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73618_onTap_activeActionGroupIndex = -1;
		$("#obj73618").trigger("obj73618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73618) {
				console.warn("de-queueing event obj73618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73618_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj73616 
move_73623();
function move_73623() {
	window.obj73618_onTap_runningActionsCount = obj73618_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj73616");
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
			window.obj73618_onTap_runningActionsCount = window.obj73618_onTap_runningActionsCount - 1;
if (window.obj73618_onTap_runningActionsCount < 0) {
	window.obj73618_onTap_runningActionsCount = 0;
} else if (window.obj73618_onTap_runningActionsCount == 0) {
	obj73618_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj73618_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73618_onTap_activeActionGroupIndex = -1;
		$("#obj73618").trigger("obj73618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73618) {
				console.warn("de-queueing event obj73618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73618_onTap_activeActionGroupIndex = 3;
	





















};
obj87423_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87423_onTap_activeActionGroupIndex = -1;
		$("#obj87423").trigger("obj87423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87423) {
				console.warn("de-queueing event obj87423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87423_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87428 
stopAudio_87425();
function stopAudio_87425() {
	window.obj87423_onTap_runningActionsCount = obj87423_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87428")[0];
	myAudio.pause();
	window.obj87423_onTap_runningActionsCount = window.obj87423_onTap_runningActionsCount - 1;
if (window.obj87423_onTap_runningActionsCount < 0) {
	window.obj87423_onTap_runningActionsCount = 0;
} else if (window.obj87423_onTap_runningActionsCount == 0) {
	obj87423_onTap_actionGroup1();
}
}








};
obj87423_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87423_onTap_activeActionGroupIndex = -1;
		$("#obj87423").trigger("obj87423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87423) {
				console.warn("de-queueing event obj87423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87423_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87423 
hide_87426();
function hide_87426() {
	var selector = "#obj87423";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87423_onTap_runningActionsCount = obj87423_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87423_onTap_runningActionsCount = window.obj87423_onTap_runningActionsCount - 1;
if (window.obj87423_onTap_runningActionsCount < 0) {
	window.obj87423_onTap_runningActionsCount = 0;
} else if (window.obj87423_onTap_runningActionsCount == 0) {
	obj87423_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87426(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87423_onTap_runningActionsCount = window.obj87423_onTap_runningActionsCount - 1;
if (window.obj87423_onTap_runningActionsCount < 0) {
	window.obj87423_onTap_runningActionsCount = 0;
} else if (window.obj87423_onTap_runningActionsCount == 0) {
	obj87423_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87423_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87423_onTap_activeActionGroupIndex = -1;
		$("#obj87423").trigger("obj87423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87423) {
				console.warn("de-queueing event obj87423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87423_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87418
(function(){
	window.obj87423_onTap_runningActionsCount = obj87423_onTap_runningActionsCount + 1;

	var selector = "#obj87418";
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
					window.obj87423_onTap_runningActionsCount = window.obj87423_onTap_runningActionsCount - 1;
if (window.obj87423_onTap_runningActionsCount < 0) {
	window.obj87423_onTap_runningActionsCount = 0;
} else if (window.obj87423_onTap_runningActionsCount == 0) {
	obj87423_onTap_actionGroup3();
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
				window.obj87423_onTap_runningActionsCount = window.obj87423_onTap_runningActionsCount - 1;
if (window.obj87423_onTap_runningActionsCount < 0) {
	window.obj87423_onTap_runningActionsCount = 0;
} else if (window.obj87423_onTap_runningActionsCount == 0) {
	obj87423_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87423_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87423_onTap_activeActionGroupIndex = -1;
		$("#obj87423").trigger("obj87423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87423) {
				console.warn("de-queueing event obj87423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87423_onTap_activeActionGroupIndex = 3;
	





















};
obj87418_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87418_onTap_activeActionGroupIndex = -1;
		$("#obj87418").trigger("obj87418_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87418) {
				console.warn("de-queueing event obj87418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87418_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87418 
hide_87420();
function hide_87420() {
	var selector = "#obj87418";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87418_onTap_runningActionsCount = obj87418_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87418_onTap_runningActionsCount = window.obj87418_onTap_runningActionsCount - 1;
if (window.obj87418_onTap_runningActionsCount < 0) {
	window.obj87418_onTap_runningActionsCount = 0;
} else if (window.obj87418_onTap_runningActionsCount == 0) {
	obj87418_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87420(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87418_onTap_runningActionsCount = window.obj87418_onTap_runningActionsCount - 1;
if (window.obj87418_onTap_runningActionsCount < 0) {
	window.obj87418_onTap_runningActionsCount = 0;
} else if (window.obj87418_onTap_runningActionsCount == 0) {
	obj87418_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87418_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87418_onTap_activeActionGroupIndex = -1;
		$("#obj87418").trigger("obj87418_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87418) {
				console.warn("de-queueing event obj87418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87418_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87423
(function(){
	window.obj87418_onTap_runningActionsCount = obj87418_onTap_runningActionsCount + 1;

	var selector = "#obj87423";
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
					window.obj87418_onTap_runningActionsCount = window.obj87418_onTap_runningActionsCount - 1;
if (window.obj87418_onTap_runningActionsCount < 0) {
	window.obj87418_onTap_runningActionsCount = 0;
} else if (window.obj87418_onTap_runningActionsCount == 0) {
	obj87418_onTap_actionGroup2();
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
				window.obj87418_onTap_runningActionsCount = window.obj87418_onTap_runningActionsCount - 1;
if (window.obj87418_onTap_runningActionsCount < 0) {
	window.obj87418_onTap_runningActionsCount = 0;
} else if (window.obj87418_onTap_runningActionsCount == 0) {
	obj87418_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87418_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87418_onTap_activeActionGroupIndex = -1;
		$("#obj87418").trigger("obj87418_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87418) {
				console.warn("de-queueing event obj87418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87418_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87428 
playAudio_87422();
function playAudio_87422() {
	window.obj87418_onTap_runningActionsCount = obj87418_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87428")[0];
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
		    window.obj87418_onTap_runningActionsCount = window.obj87418_onTap_runningActionsCount - 1;
if (window.obj87418_onTap_runningActionsCount < 0) {
	window.obj87418_onTap_runningActionsCount = 0;
} else if (window.obj87418_onTap_runningActionsCount == 0) {
	obj87418_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87418_onTap_runningActionsCount = window.obj87418_onTap_runningActionsCount - 1;
if (window.obj87418_onTap_runningActionsCount < 0) {
	window.obj87418_onTap_runningActionsCount = 0;
} else if (window.obj87418_onTap_runningActionsCount == 0) {
	obj87418_onTap_actionGroup3();
}
	}
}









};
obj87418_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87418_onTap_activeActionGroupIndex = -1;
		$("#obj87418").trigger("obj87418_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87418) {
				console.warn("de-queueing event obj87418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87418_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj73649: Event Touch Down
 *
 */
$("#obj73649").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73649_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73649_onTap is still running");
	return;
}
var obj73649_onTap_runningActionsCount = 0;
var obj73649_onTap_loopCount = 0;
obj73649_onTap_actionGroup0();
});










/*
 *
 *   obj73646: Event Touch Down
 *
 */
$("#obj73646").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73646_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73646_onTap is still running");
	return;
}
var obj73646_onTap_runningActionsCount = 0;
var obj73646_onTap_loopCount = 0;
obj73646_onTap_actionGroup0();
});




















/*
 *
 *   obj73626: Event Touch Down
 *
 */
$("#obj73626").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73626_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73626_onTap is still running");
	return;
}
var obj73626_onTap_runningActionsCount = 0;
var obj73626_onTap_loopCount = 0;
obj73626_onTap_actionGroup0();
});










/*
 *
 *   obj73618: Event Touch Down
 *
 */
$("#obj73618").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73618_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73618_onTap is still running");
	return;
}
var obj73618_onTap_runningActionsCount = 0;
var obj73618_onTap_loopCount = 0;
obj73618_onTap_actionGroup0();
});










/*
 *
 *   obj87423: Event Touch Down
 *
 */
$("#obj87423").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87423_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87423_onTap is still running");
	return;
}
var obj87423_onTap_runningActionsCount = 0;
var obj87423_onTap_loopCount = 0;
obj87423_onTap_actionGroup0();
});










/*
 *
 *   obj87418: Event Touch Down
 *
 */
$("#obj87418").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87418_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87418_onTap is still running");
	return;
}
var obj87418_onTap_runningActionsCount = 0;
var obj87418_onTap_loopCount = 0;
obj87418_onTap_actionGroup0();
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
	
$("#obj73652").trigger('SCEventShow');
$("#obj73649").trigger('SCEventShow');
$("#obj73646").trigger('SCEventShow');
$("#obj73644").trigger('SCEventShow');
$("#obj73626").trigger('SCEventShow');
$("#obj73618").trigger('SCEventShow');
$("#obj87423").trigger('SCEventShow');
$("#obj87418").trigger('SCEventShow');
$("#obj87428").trigger('SCEventShow');
$("#obj94741").trigger('SCEventShow');
$("#obj73616").trigger('SCEventShow');
	
});