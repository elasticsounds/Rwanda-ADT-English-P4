pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 39641;
pubcoder.page.title = pubcoder.page.title || "133";
pubcoder.page.number = pubcoder.page.number || 133;
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
var obj39655_onTap_activeActionGroupIndex = -1;
var obj39655_onTap_runningActionsCount = 0;
var obj39655_onTap_loopCount = 0;
var obj39652_onTap_activeActionGroupIndex = -1;
var obj39652_onTap_runningActionsCount = 0;
var obj39652_onTap_loopCount = 0;
var obj67134_onTap_activeActionGroupIndex = -1;
var obj67134_onTap_runningActionsCount = 0;
var obj67134_onTap_loopCount = 0;
var obj67126_onTap_activeActionGroupIndex = -1;
var obj67126_onTap_runningActionsCount = 0;
var obj67126_onTap_loopCount = 0;
var obj88465_onTap_activeActionGroupIndex = -1;
var obj88465_onTap_runningActionsCount = 0;
var obj88465_onTap_loopCount = 0;
var obj88460_onTap_activeActionGroupIndex = -1;
var obj88460_onTap_runningActionsCount = 0;
var obj88460_onTap_loopCount = 0;
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
		
obj39655_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39655_onTap_activeActionGroupIndex = -1;
		$("#obj39655").trigger("obj39655_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39655) {
				console.warn("de-queueing event obj39655." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39655").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39655_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_39657();
function goToPage_39657() {
	window.obj39655_onTap_runningActionsCount = obj39655_onTap_runningActionsCount + 1;
	$("#anchor797")[0].click();
	window.obj39655_onTap_runningActionsCount = window.obj39655_onTap_runningActionsCount - 1;
if (window.obj39655_onTap_runningActionsCount < 0) {
	window.obj39655_onTap_runningActionsCount = 0;
} else if (window.obj39655_onTap_runningActionsCount == 0) {
	obj39655_onTap_actionGroup1();
}
}





















};
obj39655_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39655_onTap_activeActionGroupIndex = -1;
		$("#obj39655").trigger("obj39655_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39655) {
				console.warn("de-queueing event obj39655." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39655").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39655_onTap_activeActionGroupIndex = 1;
	





















};
obj39652_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39652_onTap_activeActionGroupIndex = -1;
		$("#obj39652").trigger("obj39652_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39652) {
				console.warn("de-queueing event obj39652." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39652").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39652_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_39654();
function goToPage_39654() {
	window.obj39652_onTap_runningActionsCount = obj39652_onTap_runningActionsCount + 1;
	$("#anchor798")[0].click();
	window.obj39652_onTap_runningActionsCount = window.obj39652_onTap_runningActionsCount - 1;
if (window.obj39652_onTap_runningActionsCount < 0) {
	window.obj39652_onTap_runningActionsCount = 0;
} else if (window.obj39652_onTap_runningActionsCount == 0) {
	obj39652_onTap_actionGroup1();
}
}





















};
obj39652_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39652_onTap_activeActionGroupIndex = -1;
		$("#obj39652").trigger("obj39652_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39652) {
				console.warn("de-queueing event obj39652." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39652").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39652_onTap_activeActionGroupIndex = 1;
	





















};
obj67134_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67134_onTap_activeActionGroupIndex = -1;
		$("#obj67134").trigger("obj67134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67134) {
				console.warn("de-queueing event obj67134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67134_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67134 
hide_67137();
function hide_67137() {
	var selector = "#obj67134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67134_onTap_runningActionsCount = obj67134_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67134_onTap_runningActionsCount = window.obj67134_onTap_runningActionsCount - 1;
if (window.obj67134_onTap_runningActionsCount < 0) {
	window.obj67134_onTap_runningActionsCount = 0;
} else if (window.obj67134_onTap_runningActionsCount == 0) {
	obj67134_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67137(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67134_onTap_runningActionsCount = window.obj67134_onTap_runningActionsCount - 1;
if (window.obj67134_onTap_runningActionsCount < 0) {
	window.obj67134_onTap_runningActionsCount = 0;
} else if (window.obj67134_onTap_runningActionsCount == 0) {
	obj67134_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67140 
stopMovie_67136();
function stopMovie_67136() {
	window.obj67134_onTap_runningActionsCount = obj67134_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67140")[0];
	myVideo.pause();
	window.obj67134_onTap_runningActionsCount = window.obj67134_onTap_runningActionsCount - 1;
if (window.obj67134_onTap_runningActionsCount < 0) {
	window.obj67134_onTap_runningActionsCount = 0;
} else if (window.obj67134_onTap_runningActionsCount == 0) {
	obj67134_onTap_actionGroup1();
}
}
















};
obj67134_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67134_onTap_activeActionGroupIndex = -1;
		$("#obj67134").trigger("obj67134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67134) {
				console.warn("de-queueing event obj67134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67134_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67126
(function(){
	window.obj67134_onTap_runningActionsCount = obj67134_onTap_runningActionsCount + 1;

	var selector = "#obj67126";
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
					window.obj67134_onTap_runningActionsCount = window.obj67134_onTap_runningActionsCount - 1;
if (window.obj67134_onTap_runningActionsCount < 0) {
	window.obj67134_onTap_runningActionsCount = 0;
} else if (window.obj67134_onTap_runningActionsCount == 0) {
	obj67134_onTap_actionGroup2();
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
				window.obj67134_onTap_runningActionsCount = window.obj67134_onTap_runningActionsCount - 1;
if (window.obj67134_onTap_runningActionsCount < 0) {
	window.obj67134_onTap_runningActionsCount = 0;
} else if (window.obj67134_onTap_runningActionsCount == 0) {
	obj67134_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67134_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67134_onTap_activeActionGroupIndex = -1;
		$("#obj67134").trigger("obj67134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67134) {
				console.warn("de-queueing event obj67134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67134_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67140 
move_67139();
function move_67139() {
	window.obj67134_onTap_runningActionsCount = obj67134_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67140");
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
			window.obj67134_onTap_runningActionsCount = window.obj67134_onTap_runningActionsCount - 1;
if (window.obj67134_onTap_runningActionsCount < 0) {
	window.obj67134_onTap_runningActionsCount = 0;
} else if (window.obj67134_onTap_runningActionsCount == 0) {
	obj67134_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67134_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67134_onTap_activeActionGroupIndex = -1;
		$("#obj67134").trigger("obj67134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67134) {
				console.warn("de-queueing event obj67134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67134_onTap_activeActionGroupIndex = 3;
	





















};
obj67126_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67126_onTap_activeActionGroupIndex = -1;
		$("#obj67126").trigger("obj67126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67126) {
				console.warn("de-queueing event obj67126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67126_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67126 
hide_67129();
function hide_67129() {
	var selector = "#obj67126";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67126_onTap_runningActionsCount = obj67126_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67126_onTap_runningActionsCount = window.obj67126_onTap_runningActionsCount - 1;
if (window.obj67126_onTap_runningActionsCount < 0) {
	window.obj67126_onTap_runningActionsCount = 0;
} else if (window.obj67126_onTap_runningActionsCount == 0) {
	obj67126_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67129(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67126_onTap_runningActionsCount = window.obj67126_onTap_runningActionsCount - 1;
if (window.obj67126_onTap_runningActionsCount < 0) {
	window.obj67126_onTap_runningActionsCount = 0;
} else if (window.obj67126_onTap_runningActionsCount == 0) {
	obj67126_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67140 
playPauseMovie_67128();
function playPauseMovie_67128() {
	window.obj67126_onTap_runningActionsCount = obj67126_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67140")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67126_onTap_runningActionsCount = window.obj67126_onTap_runningActionsCount - 1;
if (window.obj67126_onTap_runningActionsCount < 0) {
	window.obj67126_onTap_runningActionsCount = 0;
} else if (window.obj67126_onTap_runningActionsCount == 0) {
	obj67126_onTap_actionGroup1();
}
}

















};
obj67126_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67126_onTap_activeActionGroupIndex = -1;
		$("#obj67126").trigger("obj67126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67126) {
				console.warn("de-queueing event obj67126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67126_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67134
(function(){
	window.obj67126_onTap_runningActionsCount = obj67126_onTap_runningActionsCount + 1;

	var selector = "#obj67134";
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
					window.obj67126_onTap_runningActionsCount = window.obj67126_onTap_runningActionsCount - 1;
if (window.obj67126_onTap_runningActionsCount < 0) {
	window.obj67126_onTap_runningActionsCount = 0;
} else if (window.obj67126_onTap_runningActionsCount == 0) {
	obj67126_onTap_actionGroup2();
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
				window.obj67126_onTap_runningActionsCount = window.obj67126_onTap_runningActionsCount - 1;
if (window.obj67126_onTap_runningActionsCount < 0) {
	window.obj67126_onTap_runningActionsCount = 0;
} else if (window.obj67126_onTap_runningActionsCount == 0) {
	obj67126_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67126_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67126_onTap_activeActionGroupIndex = -1;
		$("#obj67126").trigger("obj67126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67126) {
				console.warn("de-queueing event obj67126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67126_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67140 
move_67131();
function move_67131() {
	window.obj67126_onTap_runningActionsCount = obj67126_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67140");
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
			window.obj67126_onTap_runningActionsCount = window.obj67126_onTap_runningActionsCount - 1;
if (window.obj67126_onTap_runningActionsCount < 0) {
	window.obj67126_onTap_runningActionsCount = 0;
} else if (window.obj67126_onTap_runningActionsCount == 0) {
	obj67126_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67126_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67126_onTap_activeActionGroupIndex = -1;
		$("#obj67126").trigger("obj67126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67126) {
				console.warn("de-queueing event obj67126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67126_onTap_activeActionGroupIndex = 3;
	





















};
obj88465_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88465_onTap_activeActionGroupIndex = -1;
		$("#obj88465").trigger("obj88465_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88465) {
				console.warn("de-queueing event obj88465." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88465").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88465_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88470 
stopAudio_88467();
function stopAudio_88467() {
	window.obj88465_onTap_runningActionsCount = obj88465_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88470")[0];
	myAudio.pause();
	window.obj88465_onTap_runningActionsCount = window.obj88465_onTap_runningActionsCount - 1;
if (window.obj88465_onTap_runningActionsCount < 0) {
	window.obj88465_onTap_runningActionsCount = 0;
} else if (window.obj88465_onTap_runningActionsCount == 0) {
	obj88465_onTap_actionGroup1();
}
}








};
obj88465_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88465_onTap_activeActionGroupIndex = -1;
		$("#obj88465").trigger("obj88465_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88465) {
				console.warn("de-queueing event obj88465." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88465").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88465_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88465 
hide_88468();
function hide_88468() {
	var selector = "#obj88465";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88465_onTap_runningActionsCount = obj88465_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88465_onTap_runningActionsCount = window.obj88465_onTap_runningActionsCount - 1;
if (window.obj88465_onTap_runningActionsCount < 0) {
	window.obj88465_onTap_runningActionsCount = 0;
} else if (window.obj88465_onTap_runningActionsCount == 0) {
	obj88465_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88468(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88465_onTap_runningActionsCount = window.obj88465_onTap_runningActionsCount - 1;
if (window.obj88465_onTap_runningActionsCount < 0) {
	window.obj88465_onTap_runningActionsCount = 0;
} else if (window.obj88465_onTap_runningActionsCount == 0) {
	obj88465_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88465_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88465_onTap_activeActionGroupIndex = -1;
		$("#obj88465").trigger("obj88465_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88465) {
				console.warn("de-queueing event obj88465." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88465").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88465_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88460
(function(){
	window.obj88465_onTap_runningActionsCount = obj88465_onTap_runningActionsCount + 1;

	var selector = "#obj88460";
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
					window.obj88465_onTap_runningActionsCount = window.obj88465_onTap_runningActionsCount - 1;
if (window.obj88465_onTap_runningActionsCount < 0) {
	window.obj88465_onTap_runningActionsCount = 0;
} else if (window.obj88465_onTap_runningActionsCount == 0) {
	obj88465_onTap_actionGroup3();
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
				window.obj88465_onTap_runningActionsCount = window.obj88465_onTap_runningActionsCount - 1;
if (window.obj88465_onTap_runningActionsCount < 0) {
	window.obj88465_onTap_runningActionsCount = 0;
} else if (window.obj88465_onTap_runningActionsCount == 0) {
	obj88465_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88465_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88465_onTap_activeActionGroupIndex = -1;
		$("#obj88465").trigger("obj88465_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88465) {
				console.warn("de-queueing event obj88465." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88465").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88465_onTap_activeActionGroupIndex = 3;
	





















};
obj88460_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88460_onTap_activeActionGroupIndex = -1;
		$("#obj88460").trigger("obj88460_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88460) {
				console.warn("de-queueing event obj88460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88460_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88460 
hide_88462();
function hide_88462() {
	var selector = "#obj88460";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88460_onTap_runningActionsCount = obj88460_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88460_onTap_runningActionsCount = window.obj88460_onTap_runningActionsCount - 1;
if (window.obj88460_onTap_runningActionsCount < 0) {
	window.obj88460_onTap_runningActionsCount = 0;
} else if (window.obj88460_onTap_runningActionsCount == 0) {
	obj88460_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88462(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88460_onTap_runningActionsCount = window.obj88460_onTap_runningActionsCount - 1;
if (window.obj88460_onTap_runningActionsCount < 0) {
	window.obj88460_onTap_runningActionsCount = 0;
} else if (window.obj88460_onTap_runningActionsCount == 0) {
	obj88460_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88460_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88460_onTap_activeActionGroupIndex = -1;
		$("#obj88460").trigger("obj88460_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88460) {
				console.warn("de-queueing event obj88460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88460_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88465
(function(){
	window.obj88460_onTap_runningActionsCount = obj88460_onTap_runningActionsCount + 1;

	var selector = "#obj88465";
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
					window.obj88460_onTap_runningActionsCount = window.obj88460_onTap_runningActionsCount - 1;
if (window.obj88460_onTap_runningActionsCount < 0) {
	window.obj88460_onTap_runningActionsCount = 0;
} else if (window.obj88460_onTap_runningActionsCount == 0) {
	obj88460_onTap_actionGroup2();
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
				window.obj88460_onTap_runningActionsCount = window.obj88460_onTap_runningActionsCount - 1;
if (window.obj88460_onTap_runningActionsCount < 0) {
	window.obj88460_onTap_runningActionsCount = 0;
} else if (window.obj88460_onTap_runningActionsCount == 0) {
	obj88460_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88460_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88460_onTap_activeActionGroupIndex = -1;
		$("#obj88460").trigger("obj88460_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88460) {
				console.warn("de-queueing event obj88460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88460_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88470 
playAudio_88464();
function playAudio_88464() {
	window.obj88460_onTap_runningActionsCount = obj88460_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88470")[0];
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
		    window.obj88460_onTap_runningActionsCount = window.obj88460_onTap_runningActionsCount - 1;
if (window.obj88460_onTap_runningActionsCount < 0) {
	window.obj88460_onTap_runningActionsCount = 0;
} else if (window.obj88460_onTap_runningActionsCount == 0) {
	obj88460_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88460_onTap_runningActionsCount = window.obj88460_onTap_runningActionsCount - 1;
if (window.obj88460_onTap_runningActionsCount < 0) {
	window.obj88460_onTap_runningActionsCount = 0;
} else if (window.obj88460_onTap_runningActionsCount == 0) {
	obj88460_onTap_actionGroup3();
}
	}
}









};
obj88460_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88460_onTap_activeActionGroupIndex = -1;
		$("#obj88460").trigger("obj88460_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88460) {
				console.warn("de-queueing event obj88460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88460_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj39655: Event Touch Down
 *
 */
$("#obj39655").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj39655_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39655_onTap is still running");
	return;
}
var obj39655_onTap_runningActionsCount = 0;
var obj39655_onTap_loopCount = 0;
obj39655_onTap_actionGroup0();
});










/*
 *
 *   obj39652: Event Touch Down
 *
 */
$("#obj39652").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj39652_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39652_onTap is still running");
	return;
}
var obj39652_onTap_runningActionsCount = 0;
var obj39652_onTap_loopCount = 0;
obj39652_onTap_actionGroup0();
});






































































/*
 *
 *   obj67134: Event Touch Down
 *
 */
$("#obj67134").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67134_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67134_onTap is still running");
	return;
}
var obj67134_onTap_runningActionsCount = 0;
var obj67134_onTap_loopCount = 0;
obj67134_onTap_actionGroup0();
});










/*
 *
 *   obj67126: Event Touch Down
 *
 */
$("#obj67126").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67126_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67126_onTap is still running");
	return;
}
var obj67126_onTap_runningActionsCount = 0;
var obj67126_onTap_loopCount = 0;
obj67126_onTap_actionGroup0();
});










/*
 *
 *   obj88465: Event Touch Down
 *
 */
$("#obj88465").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88465_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88465_onTap is still running");
	return;
}
var obj88465_onTap_runningActionsCount = 0;
var obj88465_onTap_loopCount = 0;
obj88465_onTap_actionGroup0();
});










/*
 *
 *   obj88460: Event Touch Down
 *
 */
$("#obj88460").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88460_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88460_onTap is still running");
	return;
}
var obj88460_onTap_runningActionsCount = 0;
var obj88460_onTap_loopCount = 0;
obj88460_onTap_actionGroup0();
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
	
$("#obj39671").trigger('SCEventShow');
$("#obj39655").trigger('SCEventShow');
$("#obj39652").trigger('SCEventShow');
$("#obj39650").trigger('SCEventShow');
$("#obj39648").trigger('SCEventShow');
$("#obj39646").trigger('SCEventShow');
$("#obj39644").trigger('SCEventShow');
$("#obj39642").trigger('SCEventShow');
$("#obj39673").trigger('SCEventShow');
$("#obj67134").trigger('SCEventShow');
$("#obj67126").trigger('SCEventShow');
$("#obj88465").trigger('SCEventShow');
$("#obj88460").trigger('SCEventShow');
$("#obj88470").trigger('SCEventShow');
$("#obj94895").trigger('SCEventShow');
$("#obj67140").trigger('SCEventShow');
	
});