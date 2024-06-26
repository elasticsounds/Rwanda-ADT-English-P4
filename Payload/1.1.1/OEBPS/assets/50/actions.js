pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 11112;
pubcoder.page.title = pubcoder.page.title || "50";
pubcoder.page.number = pubcoder.page.number || 50;
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
var obj71301_onTap_activeActionGroupIndex = -1;
var obj71301_onTap_runningActionsCount = 0;
var obj71301_onTap_loopCount = 0;
var obj71298_onTap_activeActionGroupIndex = -1;
var obj71298_onTap_runningActionsCount = 0;
var obj71298_onTap_loopCount = 0;
var obj71264_onTap_activeActionGroupIndex = -1;
var obj71264_onTap_runningActionsCount = 0;
var obj71264_onTap_loopCount = 0;
var obj71256_onTap_activeActionGroupIndex = -1;
var obj71256_onTap_runningActionsCount = 0;
var obj71256_onTap_loopCount = 0;
var obj87345_onTap_activeActionGroupIndex = -1;
var obj87345_onTap_runningActionsCount = 0;
var obj87345_onTap_loopCount = 0;
var obj87340_onTap_activeActionGroupIndex = -1;
var obj87340_onTap_runningActionsCount = 0;
var obj87340_onTap_loopCount = 0;
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
		
obj71301_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71301_onTap_activeActionGroupIndex = -1;
		$("#obj71301").trigger("obj71301_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71301) {
				console.warn("de-queueing event obj71301." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71301").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71301_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71303();
function goToPage_71303() {
	window.obj71301_onTap_runningActionsCount = obj71301_onTap_runningActionsCount + 1;
	$("#anchor304")[0].click();
	window.obj71301_onTap_runningActionsCount = window.obj71301_onTap_runningActionsCount - 1;
if (window.obj71301_onTap_runningActionsCount < 0) {
	window.obj71301_onTap_runningActionsCount = 0;
} else if (window.obj71301_onTap_runningActionsCount == 0) {
	obj71301_onTap_actionGroup1();
}
}





















};
obj71301_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71301_onTap_activeActionGroupIndex = -1;
		$("#obj71301").trigger("obj71301_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71301) {
				console.warn("de-queueing event obj71301." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71301").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71301_onTap_activeActionGroupIndex = 1;
	





















};
obj71298_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71298_onTap_activeActionGroupIndex = -1;
		$("#obj71298").trigger("obj71298_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71298) {
				console.warn("de-queueing event obj71298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71298_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71300();
function goToPage_71300() {
	window.obj71298_onTap_runningActionsCount = obj71298_onTap_runningActionsCount + 1;
	$("#anchor305")[0].click();
	window.obj71298_onTap_runningActionsCount = window.obj71298_onTap_runningActionsCount - 1;
if (window.obj71298_onTap_runningActionsCount < 0) {
	window.obj71298_onTap_runningActionsCount = 0;
} else if (window.obj71298_onTap_runningActionsCount == 0) {
	obj71298_onTap_actionGroup1();
}
}





















};
obj71298_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71298_onTap_activeActionGroupIndex = -1;
		$("#obj71298").trigger("obj71298_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71298) {
				console.warn("de-queueing event obj71298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71298_onTap_activeActionGroupIndex = 1;
	





















};
obj71264_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71264_onTap_activeActionGroupIndex = -1;
		$("#obj71264").trigger("obj71264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71264) {
				console.warn("de-queueing event obj71264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71264_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71264 
hide_71267();
function hide_71267() {
	var selector = "#obj71264";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71264_onTap_runningActionsCount = obj71264_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71264_onTap_runningActionsCount = window.obj71264_onTap_runningActionsCount - 1;
if (window.obj71264_onTap_runningActionsCount < 0) {
	window.obj71264_onTap_runningActionsCount = 0;
} else if (window.obj71264_onTap_runningActionsCount == 0) {
	obj71264_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71267(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71264_onTap_runningActionsCount = window.obj71264_onTap_runningActionsCount - 1;
if (window.obj71264_onTap_runningActionsCount < 0) {
	window.obj71264_onTap_runningActionsCount = 0;
} else if (window.obj71264_onTap_runningActionsCount == 0) {
	obj71264_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj71254 
stopMovie_71266();
function stopMovie_71266() {
	window.obj71264_onTap_runningActionsCount = obj71264_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71254")[0];
	myVideo.pause();
	window.obj71264_onTap_runningActionsCount = window.obj71264_onTap_runningActionsCount - 1;
if (window.obj71264_onTap_runningActionsCount < 0) {
	window.obj71264_onTap_runningActionsCount = 0;
} else if (window.obj71264_onTap_runningActionsCount == 0) {
	obj71264_onTap_actionGroup1();
}
}
















};
obj71264_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71264_onTap_activeActionGroupIndex = -1;
		$("#obj71264").trigger("obj71264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71264) {
				console.warn("de-queueing event obj71264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71264_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71256
(function(){
	window.obj71264_onTap_runningActionsCount = obj71264_onTap_runningActionsCount + 1;

	var selector = "#obj71256";
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
					window.obj71264_onTap_runningActionsCount = window.obj71264_onTap_runningActionsCount - 1;
if (window.obj71264_onTap_runningActionsCount < 0) {
	window.obj71264_onTap_runningActionsCount = 0;
} else if (window.obj71264_onTap_runningActionsCount == 0) {
	obj71264_onTap_actionGroup2();
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
				window.obj71264_onTap_runningActionsCount = window.obj71264_onTap_runningActionsCount - 1;
if (window.obj71264_onTap_runningActionsCount < 0) {
	window.obj71264_onTap_runningActionsCount = 0;
} else if (window.obj71264_onTap_runningActionsCount == 0) {
	obj71264_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71264_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71264_onTap_activeActionGroupIndex = -1;
		$("#obj71264").trigger("obj71264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71264) {
				console.warn("de-queueing event obj71264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71264_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71254 
move_71269();
function move_71269() {
	window.obj71264_onTap_runningActionsCount = obj71264_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71254");
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
			window.obj71264_onTap_runningActionsCount = window.obj71264_onTap_runningActionsCount - 1;
if (window.obj71264_onTap_runningActionsCount < 0) {
	window.obj71264_onTap_runningActionsCount = 0;
} else if (window.obj71264_onTap_runningActionsCount == 0) {
	obj71264_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71264_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71264_onTap_activeActionGroupIndex = -1;
		$("#obj71264").trigger("obj71264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71264) {
				console.warn("de-queueing event obj71264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71264_onTap_activeActionGroupIndex = 3;
	





















};
obj71256_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71256_onTap_activeActionGroupIndex = -1;
		$("#obj71256").trigger("obj71256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71256) {
				console.warn("de-queueing event obj71256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71256_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71256 
hide_71259();
function hide_71259() {
	var selector = "#obj71256";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71256_onTap_runningActionsCount = obj71256_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71256_onTap_runningActionsCount = window.obj71256_onTap_runningActionsCount - 1;
if (window.obj71256_onTap_runningActionsCount < 0) {
	window.obj71256_onTap_runningActionsCount = 0;
} else if (window.obj71256_onTap_runningActionsCount == 0) {
	obj71256_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71259(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71256_onTap_runningActionsCount = window.obj71256_onTap_runningActionsCount - 1;
if (window.obj71256_onTap_runningActionsCount < 0) {
	window.obj71256_onTap_runningActionsCount = 0;
} else if (window.obj71256_onTap_runningActionsCount == 0) {
	obj71256_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj71254 
playPauseMovie_71258();
function playPauseMovie_71258() {
	window.obj71256_onTap_runningActionsCount = obj71256_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71254")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj71256_onTap_runningActionsCount = window.obj71256_onTap_runningActionsCount - 1;
if (window.obj71256_onTap_runningActionsCount < 0) {
	window.obj71256_onTap_runningActionsCount = 0;
} else if (window.obj71256_onTap_runningActionsCount == 0) {
	obj71256_onTap_actionGroup1();
}
}

















};
obj71256_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71256_onTap_activeActionGroupIndex = -1;
		$("#obj71256").trigger("obj71256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71256) {
				console.warn("de-queueing event obj71256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71256_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71264
(function(){
	window.obj71256_onTap_runningActionsCount = obj71256_onTap_runningActionsCount + 1;

	var selector = "#obj71264";
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
					window.obj71256_onTap_runningActionsCount = window.obj71256_onTap_runningActionsCount - 1;
if (window.obj71256_onTap_runningActionsCount < 0) {
	window.obj71256_onTap_runningActionsCount = 0;
} else if (window.obj71256_onTap_runningActionsCount == 0) {
	obj71256_onTap_actionGroup2();
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
				window.obj71256_onTap_runningActionsCount = window.obj71256_onTap_runningActionsCount - 1;
if (window.obj71256_onTap_runningActionsCount < 0) {
	window.obj71256_onTap_runningActionsCount = 0;
} else if (window.obj71256_onTap_runningActionsCount == 0) {
	obj71256_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71256_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71256_onTap_activeActionGroupIndex = -1;
		$("#obj71256").trigger("obj71256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71256) {
				console.warn("de-queueing event obj71256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71256_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71254 
move_71261();
function move_71261() {
	window.obj71256_onTap_runningActionsCount = obj71256_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71254");
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
			window.obj71256_onTap_runningActionsCount = window.obj71256_onTap_runningActionsCount - 1;
if (window.obj71256_onTap_runningActionsCount < 0) {
	window.obj71256_onTap_runningActionsCount = 0;
} else if (window.obj71256_onTap_runningActionsCount == 0) {
	obj71256_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71256_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71256_onTap_activeActionGroupIndex = -1;
		$("#obj71256").trigger("obj71256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71256) {
				console.warn("de-queueing event obj71256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71256_onTap_activeActionGroupIndex = 3;
	





















};
obj87345_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87345_onTap_activeActionGroupIndex = -1;
		$("#obj87345").trigger("obj87345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87345) {
				console.warn("de-queueing event obj87345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87345_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87350 
stopAudio_87347();
function stopAudio_87347() {
	window.obj87345_onTap_runningActionsCount = obj87345_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87350")[0];
	myAudio.pause();
	window.obj87345_onTap_runningActionsCount = window.obj87345_onTap_runningActionsCount - 1;
if (window.obj87345_onTap_runningActionsCount < 0) {
	window.obj87345_onTap_runningActionsCount = 0;
} else if (window.obj87345_onTap_runningActionsCount == 0) {
	obj87345_onTap_actionGroup1();
}
}








};
obj87345_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87345_onTap_activeActionGroupIndex = -1;
		$("#obj87345").trigger("obj87345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87345) {
				console.warn("de-queueing event obj87345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87345_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87345 
hide_87348();
function hide_87348() {
	var selector = "#obj87345";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87345_onTap_runningActionsCount = obj87345_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87345_onTap_runningActionsCount = window.obj87345_onTap_runningActionsCount - 1;
if (window.obj87345_onTap_runningActionsCount < 0) {
	window.obj87345_onTap_runningActionsCount = 0;
} else if (window.obj87345_onTap_runningActionsCount == 0) {
	obj87345_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87348(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87345_onTap_runningActionsCount = window.obj87345_onTap_runningActionsCount - 1;
if (window.obj87345_onTap_runningActionsCount < 0) {
	window.obj87345_onTap_runningActionsCount = 0;
} else if (window.obj87345_onTap_runningActionsCount == 0) {
	obj87345_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87345_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87345_onTap_activeActionGroupIndex = -1;
		$("#obj87345").trigger("obj87345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87345) {
				console.warn("de-queueing event obj87345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87345_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87340
(function(){
	window.obj87345_onTap_runningActionsCount = obj87345_onTap_runningActionsCount + 1;

	var selector = "#obj87340";
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
					window.obj87345_onTap_runningActionsCount = window.obj87345_onTap_runningActionsCount - 1;
if (window.obj87345_onTap_runningActionsCount < 0) {
	window.obj87345_onTap_runningActionsCount = 0;
} else if (window.obj87345_onTap_runningActionsCount == 0) {
	obj87345_onTap_actionGroup3();
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
				window.obj87345_onTap_runningActionsCount = window.obj87345_onTap_runningActionsCount - 1;
if (window.obj87345_onTap_runningActionsCount < 0) {
	window.obj87345_onTap_runningActionsCount = 0;
} else if (window.obj87345_onTap_runningActionsCount == 0) {
	obj87345_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87345_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87345_onTap_activeActionGroupIndex = -1;
		$("#obj87345").trigger("obj87345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87345) {
				console.warn("de-queueing event obj87345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87345_onTap_activeActionGroupIndex = 3;
	





















};
obj87340_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87340_onTap_activeActionGroupIndex = -1;
		$("#obj87340").trigger("obj87340_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87340) {
				console.warn("de-queueing event obj87340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87340_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87340 
hide_87342();
function hide_87342() {
	var selector = "#obj87340";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87340_onTap_runningActionsCount = obj87340_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87340_onTap_runningActionsCount = window.obj87340_onTap_runningActionsCount - 1;
if (window.obj87340_onTap_runningActionsCount < 0) {
	window.obj87340_onTap_runningActionsCount = 0;
} else if (window.obj87340_onTap_runningActionsCount == 0) {
	obj87340_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87342(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87340_onTap_runningActionsCount = window.obj87340_onTap_runningActionsCount - 1;
if (window.obj87340_onTap_runningActionsCount < 0) {
	window.obj87340_onTap_runningActionsCount = 0;
} else if (window.obj87340_onTap_runningActionsCount == 0) {
	obj87340_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87340_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87340_onTap_activeActionGroupIndex = -1;
		$("#obj87340").trigger("obj87340_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87340) {
				console.warn("de-queueing event obj87340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87340_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87345
(function(){
	window.obj87340_onTap_runningActionsCount = obj87340_onTap_runningActionsCount + 1;

	var selector = "#obj87345";
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
					window.obj87340_onTap_runningActionsCount = window.obj87340_onTap_runningActionsCount - 1;
if (window.obj87340_onTap_runningActionsCount < 0) {
	window.obj87340_onTap_runningActionsCount = 0;
} else if (window.obj87340_onTap_runningActionsCount == 0) {
	obj87340_onTap_actionGroup2();
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
				window.obj87340_onTap_runningActionsCount = window.obj87340_onTap_runningActionsCount - 1;
if (window.obj87340_onTap_runningActionsCount < 0) {
	window.obj87340_onTap_runningActionsCount = 0;
} else if (window.obj87340_onTap_runningActionsCount == 0) {
	obj87340_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87340_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87340_onTap_activeActionGroupIndex = -1;
		$("#obj87340").trigger("obj87340_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87340) {
				console.warn("de-queueing event obj87340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87340_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87350 
playAudio_87344();
function playAudio_87344() {
	window.obj87340_onTap_runningActionsCount = obj87340_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87350")[0];
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
		    window.obj87340_onTap_runningActionsCount = window.obj87340_onTap_runningActionsCount - 1;
if (window.obj87340_onTap_runningActionsCount < 0) {
	window.obj87340_onTap_runningActionsCount = 0;
} else if (window.obj87340_onTap_runningActionsCount == 0) {
	obj87340_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87340_onTap_runningActionsCount = window.obj87340_onTap_runningActionsCount - 1;
if (window.obj87340_onTap_runningActionsCount < 0) {
	window.obj87340_onTap_runningActionsCount = 0;
} else if (window.obj87340_onTap_runningActionsCount == 0) {
	obj87340_onTap_actionGroup3();
}
	}
}









};
obj87340_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87340_onTap_activeActionGroupIndex = -1;
		$("#obj87340").trigger("obj87340_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87340) {
				console.warn("de-queueing event obj87340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87340_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj71301: Event Touch Down
 *
 */
$("#obj71301").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71301_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71301_onTap is still running");
	return;
}
var obj71301_onTap_runningActionsCount = 0;
var obj71301_onTap_loopCount = 0;
obj71301_onTap_actionGroup0();
});










/*
 *
 *   obj71298: Event Touch Down
 *
 */
$("#obj71298").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71298_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71298_onTap is still running");
	return;
}
var obj71298_onTap_runningActionsCount = 0;
var obj71298_onTap_loopCount = 0;
obj71298_onTap_actionGroup0();
});


























































































/*
 *
 *   obj71264: Event Touch Down
 *
 */
$("#obj71264").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71264_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71264_onTap is still running");
	return;
}
var obj71264_onTap_runningActionsCount = 0;
var obj71264_onTap_loopCount = 0;
obj71264_onTap_actionGroup0();
});










/*
 *
 *   obj71256: Event Touch Down
 *
 */
$("#obj71256").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71256_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71256_onTap is still running");
	return;
}
var obj71256_onTap_runningActionsCount = 0;
var obj71256_onTap_loopCount = 0;
obj71256_onTap_actionGroup0();
});










/*
 *
 *   obj87345: Event Touch Down
 *
 */
$("#obj87345").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87345_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87345_onTap is still running");
	return;
}
var obj87345_onTap_runningActionsCount = 0;
var obj87345_onTap_loopCount = 0;
obj87345_onTap_actionGroup0();
});










/*
 *
 *   obj87340: Event Touch Down
 *
 */
$("#obj87340").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87340_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87340_onTap is still running");
	return;
}
var obj87340_onTap_runningActionsCount = 0;
var obj87340_onTap_loopCount = 0;
obj87340_onTap_actionGroup0();
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
	
$("#obj71304").trigger('SCEventShow');
$("#obj71301").trigger('SCEventShow');
$("#obj71298").trigger('SCEventShow');
$("#obj71296").trigger('SCEventShow');
$("#obj71294").trigger('SCEventShow');
$("#obj71292").trigger('SCEventShow');
$("#obj71290").trigger('SCEventShow');
$("#obj71288").trigger('SCEventShow');
$("#obj71286").trigger('SCEventShow');
$("#obj71284").trigger('SCEventShow');
$("#obj71282").trigger('SCEventShow');
$("#obj71264").trigger('SCEventShow');
$("#obj71256").trigger('SCEventShow');
$("#obj87345").trigger('SCEventShow');
$("#obj87340").trigger('SCEventShow');
$("#obj87350").trigger('SCEventShow');
$("#obj94729").trigger('SCEventShow');
$("#obj71254").trigger('SCEventShow');
	
});