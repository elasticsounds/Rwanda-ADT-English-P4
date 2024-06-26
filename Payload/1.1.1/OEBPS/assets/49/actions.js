pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 11027;
pubcoder.page.title = pubcoder.page.title || "49";
pubcoder.page.number = pubcoder.page.number || 49;
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
var obj71249_onTap_activeActionGroupIndex = -1;
var obj71249_onTap_runningActionsCount = 0;
var obj71249_onTap_loopCount = 0;
var obj71246_onTap_activeActionGroupIndex = -1;
var obj71246_onTap_runningActionsCount = 0;
var obj71246_onTap_loopCount = 0;
var obj71204_onTap_activeActionGroupIndex = -1;
var obj71204_onTap_runningActionsCount = 0;
var obj71204_onTap_loopCount = 0;
var obj71196_onTap_activeActionGroupIndex = -1;
var obj71196_onTap_runningActionsCount = 0;
var obj71196_onTap_loopCount = 0;
var obj87333_onTap_activeActionGroupIndex = -1;
var obj87333_onTap_runningActionsCount = 0;
var obj87333_onTap_loopCount = 0;
var obj87328_onTap_activeActionGroupIndex = -1;
var obj87328_onTap_runningActionsCount = 0;
var obj87328_onTap_loopCount = 0;
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
		
obj71249_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71249_onTap_activeActionGroupIndex = -1;
		$("#obj71249").trigger("obj71249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71249) {
				console.warn("de-queueing event obj71249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71249_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71251();
function goToPage_71251() {
	window.obj71249_onTap_runningActionsCount = obj71249_onTap_runningActionsCount + 1;
	$("#anchor300")[0].click();
	window.obj71249_onTap_runningActionsCount = window.obj71249_onTap_runningActionsCount - 1;
if (window.obj71249_onTap_runningActionsCount < 0) {
	window.obj71249_onTap_runningActionsCount = 0;
} else if (window.obj71249_onTap_runningActionsCount == 0) {
	obj71249_onTap_actionGroup1();
}
}





















};
obj71249_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71249_onTap_activeActionGroupIndex = -1;
		$("#obj71249").trigger("obj71249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71249) {
				console.warn("de-queueing event obj71249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71249_onTap_activeActionGroupIndex = 1;
	





















};
obj71246_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71246_onTap_activeActionGroupIndex = -1;
		$("#obj71246").trigger("obj71246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71246) {
				console.warn("de-queueing event obj71246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71246_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71248();
function goToPage_71248() {
	window.obj71246_onTap_runningActionsCount = obj71246_onTap_runningActionsCount + 1;
	$("#anchor301")[0].click();
	window.obj71246_onTap_runningActionsCount = window.obj71246_onTap_runningActionsCount - 1;
if (window.obj71246_onTap_runningActionsCount < 0) {
	window.obj71246_onTap_runningActionsCount = 0;
} else if (window.obj71246_onTap_runningActionsCount == 0) {
	obj71246_onTap_actionGroup1();
}
}





















};
obj71246_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71246_onTap_activeActionGroupIndex = -1;
		$("#obj71246").trigger("obj71246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71246) {
				console.warn("de-queueing event obj71246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71246_onTap_activeActionGroupIndex = 1;
	





















};
obj71204_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71204_onTap_activeActionGroupIndex = -1;
		$("#obj71204").trigger("obj71204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71204) {
				console.warn("de-queueing event obj71204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71204_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71204 
hide_71207();
function hide_71207() {
	var selector = "#obj71204";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71204_onTap_runningActionsCount = obj71204_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71204_onTap_runningActionsCount = window.obj71204_onTap_runningActionsCount - 1;
if (window.obj71204_onTap_runningActionsCount < 0) {
	window.obj71204_onTap_runningActionsCount = 0;
} else if (window.obj71204_onTap_runningActionsCount == 0) {
	obj71204_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71207(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71204_onTap_runningActionsCount = window.obj71204_onTap_runningActionsCount - 1;
if (window.obj71204_onTap_runningActionsCount < 0) {
	window.obj71204_onTap_runningActionsCount = 0;
} else if (window.obj71204_onTap_runningActionsCount == 0) {
	obj71204_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj71194 
stopMovie_71206();
function stopMovie_71206() {
	window.obj71204_onTap_runningActionsCount = obj71204_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71194")[0];
	myVideo.pause();
	window.obj71204_onTap_runningActionsCount = window.obj71204_onTap_runningActionsCount - 1;
if (window.obj71204_onTap_runningActionsCount < 0) {
	window.obj71204_onTap_runningActionsCount = 0;
} else if (window.obj71204_onTap_runningActionsCount == 0) {
	obj71204_onTap_actionGroup1();
}
}
















};
obj71204_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71204_onTap_activeActionGroupIndex = -1;
		$("#obj71204").trigger("obj71204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71204) {
				console.warn("de-queueing event obj71204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71204_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71196
(function(){
	window.obj71204_onTap_runningActionsCount = obj71204_onTap_runningActionsCount + 1;

	var selector = "#obj71196";
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
					window.obj71204_onTap_runningActionsCount = window.obj71204_onTap_runningActionsCount - 1;
if (window.obj71204_onTap_runningActionsCount < 0) {
	window.obj71204_onTap_runningActionsCount = 0;
} else if (window.obj71204_onTap_runningActionsCount == 0) {
	obj71204_onTap_actionGroup2();
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
				window.obj71204_onTap_runningActionsCount = window.obj71204_onTap_runningActionsCount - 1;
if (window.obj71204_onTap_runningActionsCount < 0) {
	window.obj71204_onTap_runningActionsCount = 0;
} else if (window.obj71204_onTap_runningActionsCount == 0) {
	obj71204_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71204_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71204_onTap_activeActionGroupIndex = -1;
		$("#obj71204").trigger("obj71204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71204) {
				console.warn("de-queueing event obj71204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71204_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71194 
move_71209();
function move_71209() {
	window.obj71204_onTap_runningActionsCount = obj71204_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71194");
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
			window.obj71204_onTap_runningActionsCount = window.obj71204_onTap_runningActionsCount - 1;
if (window.obj71204_onTap_runningActionsCount < 0) {
	window.obj71204_onTap_runningActionsCount = 0;
} else if (window.obj71204_onTap_runningActionsCount == 0) {
	obj71204_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71204_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71204_onTap_activeActionGroupIndex = -1;
		$("#obj71204").trigger("obj71204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71204) {
				console.warn("de-queueing event obj71204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71204_onTap_activeActionGroupIndex = 3;
	





















};
obj71196_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71196_onTap_activeActionGroupIndex = -1;
		$("#obj71196").trigger("obj71196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71196) {
				console.warn("de-queueing event obj71196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71196_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71196 
hide_71199();
function hide_71199() {
	var selector = "#obj71196";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71196_onTap_runningActionsCount = obj71196_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71196_onTap_runningActionsCount = window.obj71196_onTap_runningActionsCount - 1;
if (window.obj71196_onTap_runningActionsCount < 0) {
	window.obj71196_onTap_runningActionsCount = 0;
} else if (window.obj71196_onTap_runningActionsCount == 0) {
	obj71196_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71199(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71196_onTap_runningActionsCount = window.obj71196_onTap_runningActionsCount - 1;
if (window.obj71196_onTap_runningActionsCount < 0) {
	window.obj71196_onTap_runningActionsCount = 0;
} else if (window.obj71196_onTap_runningActionsCount == 0) {
	obj71196_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj71194 
playPauseMovie_71198();
function playPauseMovie_71198() {
	window.obj71196_onTap_runningActionsCount = obj71196_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71194")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj71196_onTap_runningActionsCount = window.obj71196_onTap_runningActionsCount - 1;
if (window.obj71196_onTap_runningActionsCount < 0) {
	window.obj71196_onTap_runningActionsCount = 0;
} else if (window.obj71196_onTap_runningActionsCount == 0) {
	obj71196_onTap_actionGroup1();
}
}

















};
obj71196_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71196_onTap_activeActionGroupIndex = -1;
		$("#obj71196").trigger("obj71196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71196) {
				console.warn("de-queueing event obj71196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71196_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71204
(function(){
	window.obj71196_onTap_runningActionsCount = obj71196_onTap_runningActionsCount + 1;

	var selector = "#obj71204";
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
					window.obj71196_onTap_runningActionsCount = window.obj71196_onTap_runningActionsCount - 1;
if (window.obj71196_onTap_runningActionsCount < 0) {
	window.obj71196_onTap_runningActionsCount = 0;
} else if (window.obj71196_onTap_runningActionsCount == 0) {
	obj71196_onTap_actionGroup2();
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
				window.obj71196_onTap_runningActionsCount = window.obj71196_onTap_runningActionsCount - 1;
if (window.obj71196_onTap_runningActionsCount < 0) {
	window.obj71196_onTap_runningActionsCount = 0;
} else if (window.obj71196_onTap_runningActionsCount == 0) {
	obj71196_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71196_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71196_onTap_activeActionGroupIndex = -1;
		$("#obj71196").trigger("obj71196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71196) {
				console.warn("de-queueing event obj71196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71196_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71194 
move_71201();
function move_71201() {
	window.obj71196_onTap_runningActionsCount = obj71196_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71194");
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
			window.obj71196_onTap_runningActionsCount = window.obj71196_onTap_runningActionsCount - 1;
if (window.obj71196_onTap_runningActionsCount < 0) {
	window.obj71196_onTap_runningActionsCount = 0;
} else if (window.obj71196_onTap_runningActionsCount == 0) {
	obj71196_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71196_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71196_onTap_activeActionGroupIndex = -1;
		$("#obj71196").trigger("obj71196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71196) {
				console.warn("de-queueing event obj71196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71196_onTap_activeActionGroupIndex = 3;
	





















};
obj87333_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87333_onTap_activeActionGroupIndex = -1;
		$("#obj87333").trigger("obj87333_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87333) {
				console.warn("de-queueing event obj87333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87333_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87338 
stopAudio_87335();
function stopAudio_87335() {
	window.obj87333_onTap_runningActionsCount = obj87333_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87338")[0];
	myAudio.pause();
	window.obj87333_onTap_runningActionsCount = window.obj87333_onTap_runningActionsCount - 1;
if (window.obj87333_onTap_runningActionsCount < 0) {
	window.obj87333_onTap_runningActionsCount = 0;
} else if (window.obj87333_onTap_runningActionsCount == 0) {
	obj87333_onTap_actionGroup1();
}
}








};
obj87333_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87333_onTap_activeActionGroupIndex = -1;
		$("#obj87333").trigger("obj87333_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87333) {
				console.warn("de-queueing event obj87333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87333_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87333 
hide_87336();
function hide_87336() {
	var selector = "#obj87333";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87333_onTap_runningActionsCount = obj87333_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87333_onTap_runningActionsCount = window.obj87333_onTap_runningActionsCount - 1;
if (window.obj87333_onTap_runningActionsCount < 0) {
	window.obj87333_onTap_runningActionsCount = 0;
} else if (window.obj87333_onTap_runningActionsCount == 0) {
	obj87333_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87336(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87333_onTap_runningActionsCount = window.obj87333_onTap_runningActionsCount - 1;
if (window.obj87333_onTap_runningActionsCount < 0) {
	window.obj87333_onTap_runningActionsCount = 0;
} else if (window.obj87333_onTap_runningActionsCount == 0) {
	obj87333_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87333_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87333_onTap_activeActionGroupIndex = -1;
		$("#obj87333").trigger("obj87333_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87333) {
				console.warn("de-queueing event obj87333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87333_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87328
(function(){
	window.obj87333_onTap_runningActionsCount = obj87333_onTap_runningActionsCount + 1;

	var selector = "#obj87328";
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
					window.obj87333_onTap_runningActionsCount = window.obj87333_onTap_runningActionsCount - 1;
if (window.obj87333_onTap_runningActionsCount < 0) {
	window.obj87333_onTap_runningActionsCount = 0;
} else if (window.obj87333_onTap_runningActionsCount == 0) {
	obj87333_onTap_actionGroup3();
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
				window.obj87333_onTap_runningActionsCount = window.obj87333_onTap_runningActionsCount - 1;
if (window.obj87333_onTap_runningActionsCount < 0) {
	window.obj87333_onTap_runningActionsCount = 0;
} else if (window.obj87333_onTap_runningActionsCount == 0) {
	obj87333_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87333_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87333_onTap_activeActionGroupIndex = -1;
		$("#obj87333").trigger("obj87333_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87333) {
				console.warn("de-queueing event obj87333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87333_onTap_activeActionGroupIndex = 3;
	





















};
obj87328_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87328_onTap_activeActionGroupIndex = -1;
		$("#obj87328").trigger("obj87328_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87328) {
				console.warn("de-queueing event obj87328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87328_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87328 
hide_87330();
function hide_87330() {
	var selector = "#obj87328";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87328_onTap_runningActionsCount = obj87328_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87328_onTap_runningActionsCount = window.obj87328_onTap_runningActionsCount - 1;
if (window.obj87328_onTap_runningActionsCount < 0) {
	window.obj87328_onTap_runningActionsCount = 0;
} else if (window.obj87328_onTap_runningActionsCount == 0) {
	obj87328_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87330(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87328_onTap_runningActionsCount = window.obj87328_onTap_runningActionsCount - 1;
if (window.obj87328_onTap_runningActionsCount < 0) {
	window.obj87328_onTap_runningActionsCount = 0;
} else if (window.obj87328_onTap_runningActionsCount == 0) {
	obj87328_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87328_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87328_onTap_activeActionGroupIndex = -1;
		$("#obj87328").trigger("obj87328_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87328) {
				console.warn("de-queueing event obj87328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87328_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87333
(function(){
	window.obj87328_onTap_runningActionsCount = obj87328_onTap_runningActionsCount + 1;

	var selector = "#obj87333";
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
					window.obj87328_onTap_runningActionsCount = window.obj87328_onTap_runningActionsCount - 1;
if (window.obj87328_onTap_runningActionsCount < 0) {
	window.obj87328_onTap_runningActionsCount = 0;
} else if (window.obj87328_onTap_runningActionsCount == 0) {
	obj87328_onTap_actionGroup2();
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
				window.obj87328_onTap_runningActionsCount = window.obj87328_onTap_runningActionsCount - 1;
if (window.obj87328_onTap_runningActionsCount < 0) {
	window.obj87328_onTap_runningActionsCount = 0;
} else if (window.obj87328_onTap_runningActionsCount == 0) {
	obj87328_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87328_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87328_onTap_activeActionGroupIndex = -1;
		$("#obj87328").trigger("obj87328_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87328) {
				console.warn("de-queueing event obj87328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87328_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87338 
playAudio_87332();
function playAudio_87332() {
	window.obj87328_onTap_runningActionsCount = obj87328_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87338")[0];
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
		    window.obj87328_onTap_runningActionsCount = window.obj87328_onTap_runningActionsCount - 1;
if (window.obj87328_onTap_runningActionsCount < 0) {
	window.obj87328_onTap_runningActionsCount = 0;
} else if (window.obj87328_onTap_runningActionsCount == 0) {
	obj87328_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87328_onTap_runningActionsCount = window.obj87328_onTap_runningActionsCount - 1;
if (window.obj87328_onTap_runningActionsCount < 0) {
	window.obj87328_onTap_runningActionsCount = 0;
} else if (window.obj87328_onTap_runningActionsCount == 0) {
	obj87328_onTap_actionGroup3();
}
	}
}









};
obj87328_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87328_onTap_activeActionGroupIndex = -1;
		$("#obj87328").trigger("obj87328_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87328) {
				console.warn("de-queueing event obj87328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87328_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj71249: Event Touch Down
 *
 */
$("#obj71249").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71249_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71249_onTap is still running");
	return;
}
var obj71249_onTap_runningActionsCount = 0;
var obj71249_onTap_loopCount = 0;
obj71249_onTap_actionGroup0();
});










/*
 *
 *   obj71246: Event Touch Down
 *
 */
$("#obj71246").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71246_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71246_onTap is still running");
	return;
}
var obj71246_onTap_runningActionsCount = 0;
var obj71246_onTap_loopCount = 0;
obj71246_onTap_actionGroup0();
});














































































































/*
 *
 *   obj71204: Event Touch Down
 *
 */
$("#obj71204").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71204_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71204_onTap is still running");
	return;
}
var obj71204_onTap_runningActionsCount = 0;
var obj71204_onTap_loopCount = 0;
obj71204_onTap_actionGroup0();
});










/*
 *
 *   obj71196: Event Touch Down
 *
 */
$("#obj71196").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71196_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71196_onTap is still running");
	return;
}
var obj71196_onTap_runningActionsCount = 0;
var obj71196_onTap_loopCount = 0;
obj71196_onTap_actionGroup0();
});










/*
 *
 *   obj87333: Event Touch Down
 *
 */
$("#obj87333").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87333_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87333_onTap is still running");
	return;
}
var obj87333_onTap_runningActionsCount = 0;
var obj87333_onTap_loopCount = 0;
obj87333_onTap_actionGroup0();
});










/*
 *
 *   obj87328: Event Touch Down
 *
 */
$("#obj87328").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87328_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87328_onTap is still running");
	return;
}
var obj87328_onTap_runningActionsCount = 0;
var obj87328_onTap_loopCount = 0;
obj87328_onTap_actionGroup0();
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
	
$("#obj71252").trigger('SCEventShow');
$("#obj71249").trigger('SCEventShow');
$("#obj71246").trigger('SCEventShow');
$("#obj71240").trigger('SCEventShow');
$("#obj71238").trigger('SCEventShow');
$("#obj71236").trigger('SCEventShow');
$("#obj71234").trigger('SCEventShow');
$("#obj71232").trigger('SCEventShow');
$("#obj71230").trigger('SCEventShow');
$("#obj71228").trigger('SCEventShow');
$("#obj71226").trigger('SCEventShow');
$("#obj71224").trigger('SCEventShow');
$("#obj71222").trigger('SCEventShow');
$("#obj71204").trigger('SCEventShow');
$("#obj71196").trigger('SCEventShow');
$("#obj87333").trigger('SCEventShow');
$("#obj87328").trigger('SCEventShow');
$("#obj87338").trigger('SCEventShow');
$("#obj94727").trigger('SCEventShow');
$("#obj71194").trigger('SCEventShow');
	
});