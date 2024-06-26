pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 37878;
pubcoder.page.title = pubcoder.page.title || "127";
pubcoder.page.number = pubcoder.page.number || 127;
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
var obj37884_onTap_activeActionGroupIndex = -1;
var obj37884_onTap_runningActionsCount = 0;
var obj37884_onTap_loopCount = 0;
var obj37881_onTap_activeActionGroupIndex = -1;
var obj37881_onTap_runningActionsCount = 0;
var obj37881_onTap_loopCount = 0;
var obj67038_onTap_activeActionGroupIndex = -1;
var obj67038_onTap_runningActionsCount = 0;
var obj67038_onTap_loopCount = 0;
var obj67030_onTap_activeActionGroupIndex = -1;
var obj67030_onTap_runningActionsCount = 0;
var obj67030_onTap_loopCount = 0;
var obj88393_onTap_activeActionGroupIndex = -1;
var obj88393_onTap_runningActionsCount = 0;
var obj88393_onTap_loopCount = 0;
var obj88388_onTap_activeActionGroupIndex = -1;
var obj88388_onTap_runningActionsCount = 0;
var obj88388_onTap_loopCount = 0;
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
		
obj37884_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37884_onTap_activeActionGroupIndex = -1;
		$("#obj37884").trigger("obj37884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37884) {
				console.warn("de-queueing event obj37884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37884_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_37886();
function goToPage_37886() {
	window.obj37884_onTap_runningActionsCount = obj37884_onTap_runningActionsCount + 1;
	$("#anchor761")[0].click();
	window.obj37884_onTap_runningActionsCount = window.obj37884_onTap_runningActionsCount - 1;
if (window.obj37884_onTap_runningActionsCount < 0) {
	window.obj37884_onTap_runningActionsCount = 0;
} else if (window.obj37884_onTap_runningActionsCount == 0) {
	obj37884_onTap_actionGroup1();
}
}





















};
obj37884_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37884_onTap_activeActionGroupIndex = -1;
		$("#obj37884").trigger("obj37884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37884) {
				console.warn("de-queueing event obj37884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37884_onTap_activeActionGroupIndex = 1;
	





















};
obj37881_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37881_onTap_activeActionGroupIndex = -1;
		$("#obj37881").trigger("obj37881_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37881) {
				console.warn("de-queueing event obj37881." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37881").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37881_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_37883();
function goToPage_37883() {
	window.obj37881_onTap_runningActionsCount = obj37881_onTap_runningActionsCount + 1;
	$("#anchor762")[0].click();
	window.obj37881_onTap_runningActionsCount = window.obj37881_onTap_runningActionsCount - 1;
if (window.obj37881_onTap_runningActionsCount < 0) {
	window.obj37881_onTap_runningActionsCount = 0;
} else if (window.obj37881_onTap_runningActionsCount == 0) {
	obj37881_onTap_actionGroup1();
}
}





















};
obj37881_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37881_onTap_activeActionGroupIndex = -1;
		$("#obj37881").trigger("obj37881_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37881) {
				console.warn("de-queueing event obj37881." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37881").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37881_onTap_activeActionGroupIndex = 1;
	





















};
obj67038_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67038_onTap_activeActionGroupIndex = -1;
		$("#obj67038").trigger("obj67038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67038) {
				console.warn("de-queueing event obj67038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67038_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67038 
hide_67041();
function hide_67041() {
	var selector = "#obj67038";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67038_onTap_runningActionsCount = obj67038_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67038_onTap_runningActionsCount = window.obj67038_onTap_runningActionsCount - 1;
if (window.obj67038_onTap_runningActionsCount < 0) {
	window.obj67038_onTap_runningActionsCount = 0;
} else if (window.obj67038_onTap_runningActionsCount == 0) {
	obj67038_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67041(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67038_onTap_runningActionsCount = window.obj67038_onTap_runningActionsCount - 1;
if (window.obj67038_onTap_runningActionsCount < 0) {
	window.obj67038_onTap_runningActionsCount = 0;
} else if (window.obj67038_onTap_runningActionsCount == 0) {
	obj67038_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67044 
stopMovie_67040();
function stopMovie_67040() {
	window.obj67038_onTap_runningActionsCount = obj67038_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67044")[0];
	myVideo.pause();
	window.obj67038_onTap_runningActionsCount = window.obj67038_onTap_runningActionsCount - 1;
if (window.obj67038_onTap_runningActionsCount < 0) {
	window.obj67038_onTap_runningActionsCount = 0;
} else if (window.obj67038_onTap_runningActionsCount == 0) {
	obj67038_onTap_actionGroup1();
}
}
















};
obj67038_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67038_onTap_activeActionGroupIndex = -1;
		$("#obj67038").trigger("obj67038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67038) {
				console.warn("de-queueing event obj67038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67038_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67030
(function(){
	window.obj67038_onTap_runningActionsCount = obj67038_onTap_runningActionsCount + 1;

	var selector = "#obj67030";
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
					window.obj67038_onTap_runningActionsCount = window.obj67038_onTap_runningActionsCount - 1;
if (window.obj67038_onTap_runningActionsCount < 0) {
	window.obj67038_onTap_runningActionsCount = 0;
} else if (window.obj67038_onTap_runningActionsCount == 0) {
	obj67038_onTap_actionGroup2();
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
				window.obj67038_onTap_runningActionsCount = window.obj67038_onTap_runningActionsCount - 1;
if (window.obj67038_onTap_runningActionsCount < 0) {
	window.obj67038_onTap_runningActionsCount = 0;
} else if (window.obj67038_onTap_runningActionsCount == 0) {
	obj67038_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67038_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67038_onTap_activeActionGroupIndex = -1;
		$("#obj67038").trigger("obj67038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67038) {
				console.warn("de-queueing event obj67038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67038_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67044 
move_67043();
function move_67043() {
	window.obj67038_onTap_runningActionsCount = obj67038_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67044");
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
			window.obj67038_onTap_runningActionsCount = window.obj67038_onTap_runningActionsCount - 1;
if (window.obj67038_onTap_runningActionsCount < 0) {
	window.obj67038_onTap_runningActionsCount = 0;
} else if (window.obj67038_onTap_runningActionsCount == 0) {
	obj67038_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67038_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67038_onTap_activeActionGroupIndex = -1;
		$("#obj67038").trigger("obj67038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67038) {
				console.warn("de-queueing event obj67038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67038_onTap_activeActionGroupIndex = 3;
	





















};
obj67030_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67030_onTap_activeActionGroupIndex = -1;
		$("#obj67030").trigger("obj67030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67030) {
				console.warn("de-queueing event obj67030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67030_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67030 
hide_67033();
function hide_67033() {
	var selector = "#obj67030";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67030_onTap_runningActionsCount = obj67030_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67030_onTap_runningActionsCount = window.obj67030_onTap_runningActionsCount - 1;
if (window.obj67030_onTap_runningActionsCount < 0) {
	window.obj67030_onTap_runningActionsCount = 0;
} else if (window.obj67030_onTap_runningActionsCount == 0) {
	obj67030_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67033(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67030_onTap_runningActionsCount = window.obj67030_onTap_runningActionsCount - 1;
if (window.obj67030_onTap_runningActionsCount < 0) {
	window.obj67030_onTap_runningActionsCount = 0;
} else if (window.obj67030_onTap_runningActionsCount == 0) {
	obj67030_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67044 
playPauseMovie_67032();
function playPauseMovie_67032() {
	window.obj67030_onTap_runningActionsCount = obj67030_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67044")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67030_onTap_runningActionsCount = window.obj67030_onTap_runningActionsCount - 1;
if (window.obj67030_onTap_runningActionsCount < 0) {
	window.obj67030_onTap_runningActionsCount = 0;
} else if (window.obj67030_onTap_runningActionsCount == 0) {
	obj67030_onTap_actionGroup1();
}
}

















};
obj67030_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67030_onTap_activeActionGroupIndex = -1;
		$("#obj67030").trigger("obj67030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67030) {
				console.warn("de-queueing event obj67030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67030_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67038
(function(){
	window.obj67030_onTap_runningActionsCount = obj67030_onTap_runningActionsCount + 1;

	var selector = "#obj67038";
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
					window.obj67030_onTap_runningActionsCount = window.obj67030_onTap_runningActionsCount - 1;
if (window.obj67030_onTap_runningActionsCount < 0) {
	window.obj67030_onTap_runningActionsCount = 0;
} else if (window.obj67030_onTap_runningActionsCount == 0) {
	obj67030_onTap_actionGroup2();
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
				window.obj67030_onTap_runningActionsCount = window.obj67030_onTap_runningActionsCount - 1;
if (window.obj67030_onTap_runningActionsCount < 0) {
	window.obj67030_onTap_runningActionsCount = 0;
} else if (window.obj67030_onTap_runningActionsCount == 0) {
	obj67030_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67030_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67030_onTap_activeActionGroupIndex = -1;
		$("#obj67030").trigger("obj67030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67030) {
				console.warn("de-queueing event obj67030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67030_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67044 
move_67035();
function move_67035() {
	window.obj67030_onTap_runningActionsCount = obj67030_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67044");
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
			window.obj67030_onTap_runningActionsCount = window.obj67030_onTap_runningActionsCount - 1;
if (window.obj67030_onTap_runningActionsCount < 0) {
	window.obj67030_onTap_runningActionsCount = 0;
} else if (window.obj67030_onTap_runningActionsCount == 0) {
	obj67030_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67030_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67030_onTap_activeActionGroupIndex = -1;
		$("#obj67030").trigger("obj67030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67030) {
				console.warn("de-queueing event obj67030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67030_onTap_activeActionGroupIndex = 3;
	





















};
obj88393_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88393_onTap_activeActionGroupIndex = -1;
		$("#obj88393").trigger("obj88393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88393) {
				console.warn("de-queueing event obj88393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88393_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88398 
stopAudio_88395();
function stopAudio_88395() {
	window.obj88393_onTap_runningActionsCount = obj88393_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88398")[0];
	myAudio.pause();
	window.obj88393_onTap_runningActionsCount = window.obj88393_onTap_runningActionsCount - 1;
if (window.obj88393_onTap_runningActionsCount < 0) {
	window.obj88393_onTap_runningActionsCount = 0;
} else if (window.obj88393_onTap_runningActionsCount == 0) {
	obj88393_onTap_actionGroup1();
}
}








};
obj88393_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88393_onTap_activeActionGroupIndex = -1;
		$("#obj88393").trigger("obj88393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88393) {
				console.warn("de-queueing event obj88393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88393_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88393 
hide_88396();
function hide_88396() {
	var selector = "#obj88393";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88393_onTap_runningActionsCount = obj88393_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88393_onTap_runningActionsCount = window.obj88393_onTap_runningActionsCount - 1;
if (window.obj88393_onTap_runningActionsCount < 0) {
	window.obj88393_onTap_runningActionsCount = 0;
} else if (window.obj88393_onTap_runningActionsCount == 0) {
	obj88393_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88396(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88393_onTap_runningActionsCount = window.obj88393_onTap_runningActionsCount - 1;
if (window.obj88393_onTap_runningActionsCount < 0) {
	window.obj88393_onTap_runningActionsCount = 0;
} else if (window.obj88393_onTap_runningActionsCount == 0) {
	obj88393_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88393_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88393_onTap_activeActionGroupIndex = -1;
		$("#obj88393").trigger("obj88393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88393) {
				console.warn("de-queueing event obj88393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88393_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88388
(function(){
	window.obj88393_onTap_runningActionsCount = obj88393_onTap_runningActionsCount + 1;

	var selector = "#obj88388";
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
					window.obj88393_onTap_runningActionsCount = window.obj88393_onTap_runningActionsCount - 1;
if (window.obj88393_onTap_runningActionsCount < 0) {
	window.obj88393_onTap_runningActionsCount = 0;
} else if (window.obj88393_onTap_runningActionsCount == 0) {
	obj88393_onTap_actionGroup3();
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
				window.obj88393_onTap_runningActionsCount = window.obj88393_onTap_runningActionsCount - 1;
if (window.obj88393_onTap_runningActionsCount < 0) {
	window.obj88393_onTap_runningActionsCount = 0;
} else if (window.obj88393_onTap_runningActionsCount == 0) {
	obj88393_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88393_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88393_onTap_activeActionGroupIndex = -1;
		$("#obj88393").trigger("obj88393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88393) {
				console.warn("de-queueing event obj88393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88393_onTap_activeActionGroupIndex = 3;
	





















};
obj88388_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88388_onTap_activeActionGroupIndex = -1;
		$("#obj88388").trigger("obj88388_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88388) {
				console.warn("de-queueing event obj88388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88388_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88388 
hide_88390();
function hide_88390() {
	var selector = "#obj88388";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88388_onTap_runningActionsCount = obj88388_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88388_onTap_runningActionsCount = window.obj88388_onTap_runningActionsCount - 1;
if (window.obj88388_onTap_runningActionsCount < 0) {
	window.obj88388_onTap_runningActionsCount = 0;
} else if (window.obj88388_onTap_runningActionsCount == 0) {
	obj88388_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88390(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88388_onTap_runningActionsCount = window.obj88388_onTap_runningActionsCount - 1;
if (window.obj88388_onTap_runningActionsCount < 0) {
	window.obj88388_onTap_runningActionsCount = 0;
} else if (window.obj88388_onTap_runningActionsCount == 0) {
	obj88388_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88388_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88388_onTap_activeActionGroupIndex = -1;
		$("#obj88388").trigger("obj88388_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88388) {
				console.warn("de-queueing event obj88388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88388_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88393
(function(){
	window.obj88388_onTap_runningActionsCount = obj88388_onTap_runningActionsCount + 1;

	var selector = "#obj88393";
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
					window.obj88388_onTap_runningActionsCount = window.obj88388_onTap_runningActionsCount - 1;
if (window.obj88388_onTap_runningActionsCount < 0) {
	window.obj88388_onTap_runningActionsCount = 0;
} else if (window.obj88388_onTap_runningActionsCount == 0) {
	obj88388_onTap_actionGroup2();
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
				window.obj88388_onTap_runningActionsCount = window.obj88388_onTap_runningActionsCount - 1;
if (window.obj88388_onTap_runningActionsCount < 0) {
	window.obj88388_onTap_runningActionsCount = 0;
} else if (window.obj88388_onTap_runningActionsCount == 0) {
	obj88388_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88388_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88388_onTap_activeActionGroupIndex = -1;
		$("#obj88388").trigger("obj88388_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88388) {
				console.warn("de-queueing event obj88388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88388_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88398 
playAudio_88392();
function playAudio_88392() {
	window.obj88388_onTap_runningActionsCount = obj88388_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88398")[0];
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
		    window.obj88388_onTap_runningActionsCount = window.obj88388_onTap_runningActionsCount - 1;
if (window.obj88388_onTap_runningActionsCount < 0) {
	window.obj88388_onTap_runningActionsCount = 0;
} else if (window.obj88388_onTap_runningActionsCount == 0) {
	obj88388_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88388_onTap_runningActionsCount = window.obj88388_onTap_runningActionsCount - 1;
if (window.obj88388_onTap_runningActionsCount < 0) {
	window.obj88388_onTap_runningActionsCount = 0;
} else if (window.obj88388_onTap_runningActionsCount == 0) {
	obj88388_onTap_actionGroup3();
}
	}
}









};
obj88388_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88388_onTap_activeActionGroupIndex = -1;
		$("#obj88388").trigger("obj88388_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88388) {
				console.warn("de-queueing event obj88388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88388_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj37884: Event Touch Down
 *
 */
$("#obj37884").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj37884_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37884_onTap is still running");
	return;
}
var obj37884_onTap_runningActionsCount = 0;
var obj37884_onTap_loopCount = 0;
obj37884_onTap_actionGroup0();
});










/*
 *
 *   obj37881: Event Touch Down
 *
 */
$("#obj37881").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj37881_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37881_onTap is still running");
	return;
}
var obj37881_onTap_runningActionsCount = 0;
var obj37881_onTap_loopCount = 0;
obj37881_onTap_actionGroup0();
});




























































/*
 *
 *   obj67038: Event Touch Down
 *
 */
$("#obj67038").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67038_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67038_onTap is still running");
	return;
}
var obj67038_onTap_runningActionsCount = 0;
var obj67038_onTap_loopCount = 0;
obj67038_onTap_actionGroup0();
});










/*
 *
 *   obj67030: Event Touch Down
 *
 */
$("#obj67030").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67030_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67030_onTap is still running");
	return;
}
var obj67030_onTap_runningActionsCount = 0;
var obj67030_onTap_loopCount = 0;
obj67030_onTap_actionGroup0();
});










/*
 *
 *   obj88393: Event Touch Down
 *
 */
$("#obj88393").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88393_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88393_onTap is still running");
	return;
}
var obj88393_onTap_runningActionsCount = 0;
var obj88393_onTap_loopCount = 0;
obj88393_onTap_actionGroup0();
});










/*
 *
 *   obj88388: Event Touch Down
 *
 */
$("#obj88388").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88388_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88388_onTap is still running");
	return;
}
var obj88388_onTap_runningActionsCount = 0;
var obj88388_onTap_loopCount = 0;
obj88388_onTap_actionGroup0();
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
	
$("#obj37879").trigger('SCEventShow');
$("#obj37884").trigger('SCEventShow');
$("#obj37881").trigger('SCEventShow');
$("#obj37900").trigger('SCEventShow');
$("#obj37902").trigger('SCEventShow');
$("#obj37904").trigger('SCEventShow');
$("#obj37906").trigger('SCEventShow');
$("#obj37909").trigger('SCEventShow');
$("#obj67038").trigger('SCEventShow');
$("#obj67030").trigger('SCEventShow');
$("#obj88393").trigger('SCEventShow');
$("#obj88388").trigger('SCEventShow');
$("#obj88398").trigger('SCEventShow');
$("#obj94883").trigger('SCEventShow');
$("#obj67044").trigger('SCEventShow');
	
});