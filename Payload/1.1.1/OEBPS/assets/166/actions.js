pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 47220;
pubcoder.page.title = pubcoder.page.title || "166";
pubcoder.page.number = pubcoder.page.number || 166;
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
var obj47236_onTap_activeActionGroupIndex = -1;
var obj47236_onTap_runningActionsCount = 0;
var obj47236_onTap_loopCount = 0;
var obj47233_onTap_activeActionGroupIndex = -1;
var obj47233_onTap_runningActionsCount = 0;
var obj47233_onTap_loopCount = 0;
var obj67662_onTap_activeActionGroupIndex = -1;
var obj67662_onTap_runningActionsCount = 0;
var obj67662_onTap_loopCount = 0;
var obj67654_onTap_activeActionGroupIndex = -1;
var obj67654_onTap_runningActionsCount = 0;
var obj67654_onTap_loopCount = 0;
var obj88873_onTap_activeActionGroupIndex = -1;
var obj88873_onTap_runningActionsCount = 0;
var obj88873_onTap_loopCount = 0;
var obj88868_onTap_activeActionGroupIndex = -1;
var obj88868_onTap_runningActionsCount = 0;
var obj88868_onTap_loopCount = 0;
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
		
obj47236_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47236_onTap_activeActionGroupIndex = -1;
		$("#obj47236").trigger("obj47236_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47236) {
				console.warn("de-queueing event obj47236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47236_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47238();
function goToPage_47238() {
	window.obj47236_onTap_runningActionsCount = obj47236_onTap_runningActionsCount + 1;
	$("#anchor977")[0].click();
	window.obj47236_onTap_runningActionsCount = window.obj47236_onTap_runningActionsCount - 1;
if (window.obj47236_onTap_runningActionsCount < 0) {
	window.obj47236_onTap_runningActionsCount = 0;
} else if (window.obj47236_onTap_runningActionsCount == 0) {
	obj47236_onTap_actionGroup1();
}
}





















};
obj47236_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47236_onTap_activeActionGroupIndex = -1;
		$("#obj47236").trigger("obj47236_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47236) {
				console.warn("de-queueing event obj47236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47236_onTap_activeActionGroupIndex = 1;
	





















};
obj47233_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47233_onTap_activeActionGroupIndex = -1;
		$("#obj47233").trigger("obj47233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47233) {
				console.warn("de-queueing event obj47233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47233_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47235();
function goToPage_47235() {
	window.obj47233_onTap_runningActionsCount = obj47233_onTap_runningActionsCount + 1;
	$("#anchor978")[0].click();
	window.obj47233_onTap_runningActionsCount = window.obj47233_onTap_runningActionsCount - 1;
if (window.obj47233_onTap_runningActionsCount < 0) {
	window.obj47233_onTap_runningActionsCount = 0;
} else if (window.obj47233_onTap_runningActionsCount == 0) {
	obj47233_onTap_actionGroup1();
}
}





















};
obj47233_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47233_onTap_activeActionGroupIndex = -1;
		$("#obj47233").trigger("obj47233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47233) {
				console.warn("de-queueing event obj47233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47233_onTap_activeActionGroupIndex = 1;
	





















};
obj67662_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67662_onTap_activeActionGroupIndex = -1;
		$("#obj67662").trigger("obj67662_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67662) {
				console.warn("de-queueing event obj67662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67662_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67662 
hide_67665();
function hide_67665() {
	var selector = "#obj67662";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67662_onTap_runningActionsCount = obj67662_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67662_onTap_runningActionsCount = window.obj67662_onTap_runningActionsCount - 1;
if (window.obj67662_onTap_runningActionsCount < 0) {
	window.obj67662_onTap_runningActionsCount = 0;
} else if (window.obj67662_onTap_runningActionsCount == 0) {
	obj67662_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67665(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67662_onTap_runningActionsCount = window.obj67662_onTap_runningActionsCount - 1;
if (window.obj67662_onTap_runningActionsCount < 0) {
	window.obj67662_onTap_runningActionsCount = 0;
} else if (window.obj67662_onTap_runningActionsCount == 0) {
	obj67662_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67668 
stopMovie_67664();
function stopMovie_67664() {
	window.obj67662_onTap_runningActionsCount = obj67662_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67668")[0];
	myVideo.pause();
	window.obj67662_onTap_runningActionsCount = window.obj67662_onTap_runningActionsCount - 1;
if (window.obj67662_onTap_runningActionsCount < 0) {
	window.obj67662_onTap_runningActionsCount = 0;
} else if (window.obj67662_onTap_runningActionsCount == 0) {
	obj67662_onTap_actionGroup1();
}
}
















};
obj67662_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67662_onTap_activeActionGroupIndex = -1;
		$("#obj67662").trigger("obj67662_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67662) {
				console.warn("de-queueing event obj67662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67662_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67654
(function(){
	window.obj67662_onTap_runningActionsCount = obj67662_onTap_runningActionsCount + 1;

	var selector = "#obj67654";
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
					window.obj67662_onTap_runningActionsCount = window.obj67662_onTap_runningActionsCount - 1;
if (window.obj67662_onTap_runningActionsCount < 0) {
	window.obj67662_onTap_runningActionsCount = 0;
} else if (window.obj67662_onTap_runningActionsCount == 0) {
	obj67662_onTap_actionGroup2();
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
				window.obj67662_onTap_runningActionsCount = window.obj67662_onTap_runningActionsCount - 1;
if (window.obj67662_onTap_runningActionsCount < 0) {
	window.obj67662_onTap_runningActionsCount = 0;
} else if (window.obj67662_onTap_runningActionsCount == 0) {
	obj67662_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67662_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67662_onTap_activeActionGroupIndex = -1;
		$("#obj67662").trigger("obj67662_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67662) {
				console.warn("de-queueing event obj67662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67662_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67668 
move_67667();
function move_67667() {
	window.obj67662_onTap_runningActionsCount = obj67662_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67668");
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
			window.obj67662_onTap_runningActionsCount = window.obj67662_onTap_runningActionsCount - 1;
if (window.obj67662_onTap_runningActionsCount < 0) {
	window.obj67662_onTap_runningActionsCount = 0;
} else if (window.obj67662_onTap_runningActionsCount == 0) {
	obj67662_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67662_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67662_onTap_activeActionGroupIndex = -1;
		$("#obj67662").trigger("obj67662_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67662) {
				console.warn("de-queueing event obj67662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67662_onTap_activeActionGroupIndex = 3;
	





















};
obj67654_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67654_onTap_activeActionGroupIndex = -1;
		$("#obj67654").trigger("obj67654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67654) {
				console.warn("de-queueing event obj67654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67654_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67654 
hide_67657();
function hide_67657() {
	var selector = "#obj67654";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67654_onTap_runningActionsCount = obj67654_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67654_onTap_runningActionsCount = window.obj67654_onTap_runningActionsCount - 1;
if (window.obj67654_onTap_runningActionsCount < 0) {
	window.obj67654_onTap_runningActionsCount = 0;
} else if (window.obj67654_onTap_runningActionsCount == 0) {
	obj67654_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67657(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67654_onTap_runningActionsCount = window.obj67654_onTap_runningActionsCount - 1;
if (window.obj67654_onTap_runningActionsCount < 0) {
	window.obj67654_onTap_runningActionsCount = 0;
} else if (window.obj67654_onTap_runningActionsCount == 0) {
	obj67654_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67668 
playPauseMovie_67656();
function playPauseMovie_67656() {
	window.obj67654_onTap_runningActionsCount = obj67654_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67668")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67654_onTap_runningActionsCount = window.obj67654_onTap_runningActionsCount - 1;
if (window.obj67654_onTap_runningActionsCount < 0) {
	window.obj67654_onTap_runningActionsCount = 0;
} else if (window.obj67654_onTap_runningActionsCount == 0) {
	obj67654_onTap_actionGroup1();
}
}

















};
obj67654_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67654_onTap_activeActionGroupIndex = -1;
		$("#obj67654").trigger("obj67654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67654) {
				console.warn("de-queueing event obj67654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67654_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67662
(function(){
	window.obj67654_onTap_runningActionsCount = obj67654_onTap_runningActionsCount + 1;

	var selector = "#obj67662";
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
					window.obj67654_onTap_runningActionsCount = window.obj67654_onTap_runningActionsCount - 1;
if (window.obj67654_onTap_runningActionsCount < 0) {
	window.obj67654_onTap_runningActionsCount = 0;
} else if (window.obj67654_onTap_runningActionsCount == 0) {
	obj67654_onTap_actionGroup2();
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
				window.obj67654_onTap_runningActionsCount = window.obj67654_onTap_runningActionsCount - 1;
if (window.obj67654_onTap_runningActionsCount < 0) {
	window.obj67654_onTap_runningActionsCount = 0;
} else if (window.obj67654_onTap_runningActionsCount == 0) {
	obj67654_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67654_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67654_onTap_activeActionGroupIndex = -1;
		$("#obj67654").trigger("obj67654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67654) {
				console.warn("de-queueing event obj67654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67654_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67668 
move_67659();
function move_67659() {
	window.obj67654_onTap_runningActionsCount = obj67654_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67668");
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
			window.obj67654_onTap_runningActionsCount = window.obj67654_onTap_runningActionsCount - 1;
if (window.obj67654_onTap_runningActionsCount < 0) {
	window.obj67654_onTap_runningActionsCount = 0;
} else if (window.obj67654_onTap_runningActionsCount == 0) {
	obj67654_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67654_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67654_onTap_activeActionGroupIndex = -1;
		$("#obj67654").trigger("obj67654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67654) {
				console.warn("de-queueing event obj67654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67654_onTap_activeActionGroupIndex = 3;
	





















};
obj88873_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88873_onTap_activeActionGroupIndex = -1;
		$("#obj88873").trigger("obj88873_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88873) {
				console.warn("de-queueing event obj88873." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88873").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88873_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88878 
stopAudio_88875();
function stopAudio_88875() {
	window.obj88873_onTap_runningActionsCount = obj88873_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88878")[0];
	myAudio.pause();
	window.obj88873_onTap_runningActionsCount = window.obj88873_onTap_runningActionsCount - 1;
if (window.obj88873_onTap_runningActionsCount < 0) {
	window.obj88873_onTap_runningActionsCount = 0;
} else if (window.obj88873_onTap_runningActionsCount == 0) {
	obj88873_onTap_actionGroup1();
}
}








};
obj88873_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88873_onTap_activeActionGroupIndex = -1;
		$("#obj88873").trigger("obj88873_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88873) {
				console.warn("de-queueing event obj88873." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88873").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88873_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88873 
hide_88876();
function hide_88876() {
	var selector = "#obj88873";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88873_onTap_runningActionsCount = obj88873_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88873_onTap_runningActionsCount = window.obj88873_onTap_runningActionsCount - 1;
if (window.obj88873_onTap_runningActionsCount < 0) {
	window.obj88873_onTap_runningActionsCount = 0;
} else if (window.obj88873_onTap_runningActionsCount == 0) {
	obj88873_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88876(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88873_onTap_runningActionsCount = window.obj88873_onTap_runningActionsCount - 1;
if (window.obj88873_onTap_runningActionsCount < 0) {
	window.obj88873_onTap_runningActionsCount = 0;
} else if (window.obj88873_onTap_runningActionsCount == 0) {
	obj88873_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88873_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88873_onTap_activeActionGroupIndex = -1;
		$("#obj88873").trigger("obj88873_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88873) {
				console.warn("de-queueing event obj88873." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88873").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88873_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88868
(function(){
	window.obj88873_onTap_runningActionsCount = obj88873_onTap_runningActionsCount + 1;

	var selector = "#obj88868";
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
					window.obj88873_onTap_runningActionsCount = window.obj88873_onTap_runningActionsCount - 1;
if (window.obj88873_onTap_runningActionsCount < 0) {
	window.obj88873_onTap_runningActionsCount = 0;
} else if (window.obj88873_onTap_runningActionsCount == 0) {
	obj88873_onTap_actionGroup3();
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
				window.obj88873_onTap_runningActionsCount = window.obj88873_onTap_runningActionsCount - 1;
if (window.obj88873_onTap_runningActionsCount < 0) {
	window.obj88873_onTap_runningActionsCount = 0;
} else if (window.obj88873_onTap_runningActionsCount == 0) {
	obj88873_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88873_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88873_onTap_activeActionGroupIndex = -1;
		$("#obj88873").trigger("obj88873_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88873) {
				console.warn("de-queueing event obj88873." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88873").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88873_onTap_activeActionGroupIndex = 3;
	





















};
obj88868_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88868_onTap_activeActionGroupIndex = -1;
		$("#obj88868").trigger("obj88868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88868) {
				console.warn("de-queueing event obj88868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88868_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88868 
hide_88870();
function hide_88870() {
	var selector = "#obj88868";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88868_onTap_runningActionsCount = obj88868_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88868_onTap_runningActionsCount = window.obj88868_onTap_runningActionsCount - 1;
if (window.obj88868_onTap_runningActionsCount < 0) {
	window.obj88868_onTap_runningActionsCount = 0;
} else if (window.obj88868_onTap_runningActionsCount == 0) {
	obj88868_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88870(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88868_onTap_runningActionsCount = window.obj88868_onTap_runningActionsCount - 1;
if (window.obj88868_onTap_runningActionsCount < 0) {
	window.obj88868_onTap_runningActionsCount = 0;
} else if (window.obj88868_onTap_runningActionsCount == 0) {
	obj88868_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88868_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88868_onTap_activeActionGroupIndex = -1;
		$("#obj88868").trigger("obj88868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88868) {
				console.warn("de-queueing event obj88868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88868_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88873
(function(){
	window.obj88868_onTap_runningActionsCount = obj88868_onTap_runningActionsCount + 1;

	var selector = "#obj88873";
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
					window.obj88868_onTap_runningActionsCount = window.obj88868_onTap_runningActionsCount - 1;
if (window.obj88868_onTap_runningActionsCount < 0) {
	window.obj88868_onTap_runningActionsCount = 0;
} else if (window.obj88868_onTap_runningActionsCount == 0) {
	obj88868_onTap_actionGroup2();
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
				window.obj88868_onTap_runningActionsCount = window.obj88868_onTap_runningActionsCount - 1;
if (window.obj88868_onTap_runningActionsCount < 0) {
	window.obj88868_onTap_runningActionsCount = 0;
} else if (window.obj88868_onTap_runningActionsCount == 0) {
	obj88868_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88868_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88868_onTap_activeActionGroupIndex = -1;
		$("#obj88868").trigger("obj88868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88868) {
				console.warn("de-queueing event obj88868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88868_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88878 
playAudio_88872();
function playAudio_88872() {
	window.obj88868_onTap_runningActionsCount = obj88868_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88878")[0];
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
		    window.obj88868_onTap_runningActionsCount = window.obj88868_onTap_runningActionsCount - 1;
if (window.obj88868_onTap_runningActionsCount < 0) {
	window.obj88868_onTap_runningActionsCount = 0;
} else if (window.obj88868_onTap_runningActionsCount == 0) {
	obj88868_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88868_onTap_runningActionsCount = window.obj88868_onTap_runningActionsCount - 1;
if (window.obj88868_onTap_runningActionsCount < 0) {
	window.obj88868_onTap_runningActionsCount = 0;
} else if (window.obj88868_onTap_runningActionsCount == 0) {
	obj88868_onTap_actionGroup3();
}
	}
}









};
obj88868_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88868_onTap_activeActionGroupIndex = -1;
		$("#obj88868").trigger("obj88868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88868) {
				console.warn("de-queueing event obj88868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88868_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj47236: Event Touch Down
 *
 */
$("#obj47236").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47236_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47236_onTap is still running");
	return;
}
var obj47236_onTap_runningActionsCount = 0;
var obj47236_onTap_loopCount = 0;
obj47236_onTap_actionGroup0();
});










/*
 *
 *   obj47233: Event Touch Down
 *
 */
$("#obj47233").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47233_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47233_onTap is still running");
	return;
}
var obj47233_onTap_runningActionsCount = 0;
var obj47233_onTap_loopCount = 0;
obj47233_onTap_actionGroup0();
});


















































/*
 *
 *   obj67662: Event Touch Down
 *
 */
$("#obj67662").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67662_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67662_onTap is still running");
	return;
}
var obj67662_onTap_runningActionsCount = 0;
var obj67662_onTap_loopCount = 0;
obj67662_onTap_actionGroup0();
});










/*
 *
 *   obj67654: Event Touch Down
 *
 */
$("#obj67654").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67654_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67654_onTap is still running");
	return;
}
var obj67654_onTap_runningActionsCount = 0;
var obj67654_onTap_loopCount = 0;
obj67654_onTap_actionGroup0();
});










/*
 *
 *   obj88873: Event Touch Down
 *
 */
$("#obj88873").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88873_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88873_onTap is still running");
	return;
}
var obj88873_onTap_runningActionsCount = 0;
var obj88873_onTap_loopCount = 0;
obj88873_onTap_actionGroup0();
});










/*
 *
 *   obj88868: Event Touch Down
 *
 */
$("#obj88868").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88868_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88868_onTap is still running");
	return;
}
var obj88868_onTap_runningActionsCount = 0;
var obj88868_onTap_loopCount = 0;
obj88868_onTap_actionGroup0();
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
	
$("#obj47252").trigger('SCEventShow');
$("#obj47236").trigger('SCEventShow');
$("#obj47233").trigger('SCEventShow');
$("#obj47231").trigger('SCEventShow');
$("#obj47229").trigger('SCEventShow');
$("#obj47223").trigger('SCEventShow');
$("#obj47255").trigger('SCEventShow');
$("#obj67662").trigger('SCEventShow');
$("#obj67654").trigger('SCEventShow');
$("#obj88873").trigger('SCEventShow');
$("#obj88868").trigger('SCEventShow');
$("#obj88878").trigger('SCEventShow');
$("#obj94961").trigger('SCEventShow');
$("#obj67668").trigger('SCEventShow');
	
});