pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 12182;
pubcoder.page.title = pubcoder.page.title || "55";
pubcoder.page.number = pubcoder.page.number || 55;
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
var obj73611_onTap_activeActionGroupIndex = -1;
var obj73611_onTap_runningActionsCount = 0;
var obj73611_onTap_loopCount = 0;
var obj73608_onTap_activeActionGroupIndex = -1;
var obj73608_onTap_runningActionsCount = 0;
var obj73608_onTap_loopCount = 0;
var obj73578_onTap_activeActionGroupIndex = -1;
var obj73578_onTap_runningActionsCount = 0;
var obj73578_onTap_loopCount = 0;
var obj73570_onTap_activeActionGroupIndex = -1;
var obj73570_onTap_runningActionsCount = 0;
var obj73570_onTap_loopCount = 0;
var obj87411_onTap_activeActionGroupIndex = -1;
var obj87411_onTap_runningActionsCount = 0;
var obj87411_onTap_loopCount = 0;
var obj87406_onTap_activeActionGroupIndex = -1;
var obj87406_onTap_runningActionsCount = 0;
var obj87406_onTap_loopCount = 0;
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
		
obj73611_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73611_onTap_activeActionGroupIndex = -1;
		$("#obj73611").trigger("obj73611_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73611) {
				console.warn("de-queueing event obj73611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73611_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_73613();
function goToPage_73613() {
	window.obj73611_onTap_runningActionsCount = obj73611_onTap_runningActionsCount + 1;
	$("#anchor330")[0].click();
	window.obj73611_onTap_runningActionsCount = window.obj73611_onTap_runningActionsCount - 1;
if (window.obj73611_onTap_runningActionsCount < 0) {
	window.obj73611_onTap_runningActionsCount = 0;
} else if (window.obj73611_onTap_runningActionsCount == 0) {
	obj73611_onTap_actionGroup1();
}
}





















};
obj73611_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73611_onTap_activeActionGroupIndex = -1;
		$("#obj73611").trigger("obj73611_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73611) {
				console.warn("de-queueing event obj73611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73611_onTap_activeActionGroupIndex = 1;
	





















};
obj73608_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73608_onTap_activeActionGroupIndex = -1;
		$("#obj73608").trigger("obj73608_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73608) {
				console.warn("de-queueing event obj73608." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73608").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73608_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_73610();
function goToPage_73610() {
	window.obj73608_onTap_runningActionsCount = obj73608_onTap_runningActionsCount + 1;
	$("#anchor331")[0].click();
	window.obj73608_onTap_runningActionsCount = window.obj73608_onTap_runningActionsCount - 1;
if (window.obj73608_onTap_runningActionsCount < 0) {
	window.obj73608_onTap_runningActionsCount = 0;
} else if (window.obj73608_onTap_runningActionsCount == 0) {
	obj73608_onTap_actionGroup1();
}
}





















};
obj73608_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73608_onTap_activeActionGroupIndex = -1;
		$("#obj73608").trigger("obj73608_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73608) {
				console.warn("de-queueing event obj73608." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73608").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73608_onTap_activeActionGroupIndex = 1;
	





















};
obj73578_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73578_onTap_activeActionGroupIndex = -1;
		$("#obj73578").trigger("obj73578_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73578) {
				console.warn("de-queueing event obj73578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73578_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj73578 
hide_73581();
function hide_73581() {
	var selector = "#obj73578";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73578_onTap_runningActionsCount = obj73578_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73578_onTap_runningActionsCount = window.obj73578_onTap_runningActionsCount - 1;
if (window.obj73578_onTap_runningActionsCount < 0) {
	window.obj73578_onTap_runningActionsCount = 0;
} else if (window.obj73578_onTap_runningActionsCount == 0) {
	obj73578_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73581(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73578_onTap_runningActionsCount = window.obj73578_onTap_runningActionsCount - 1;
if (window.obj73578_onTap_runningActionsCount < 0) {
	window.obj73578_onTap_runningActionsCount = 0;
} else if (window.obj73578_onTap_runningActionsCount == 0) {
	obj73578_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj73568 
stopMovie_73580();
function stopMovie_73580() {
	window.obj73578_onTap_runningActionsCount = obj73578_onTap_runningActionsCount + 1;
	var myVideo = $("#obj73568")[0];
	myVideo.pause();
	window.obj73578_onTap_runningActionsCount = window.obj73578_onTap_runningActionsCount - 1;
if (window.obj73578_onTap_runningActionsCount < 0) {
	window.obj73578_onTap_runningActionsCount = 0;
} else if (window.obj73578_onTap_runningActionsCount == 0) {
	obj73578_onTap_actionGroup1();
}
}
















};
obj73578_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73578_onTap_activeActionGroupIndex = -1;
		$("#obj73578").trigger("obj73578_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73578) {
				console.warn("de-queueing event obj73578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73578_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj73570
(function(){
	window.obj73578_onTap_runningActionsCount = obj73578_onTap_runningActionsCount + 1;

	var selector = "#obj73570";
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
					window.obj73578_onTap_runningActionsCount = window.obj73578_onTap_runningActionsCount - 1;
if (window.obj73578_onTap_runningActionsCount < 0) {
	window.obj73578_onTap_runningActionsCount = 0;
} else if (window.obj73578_onTap_runningActionsCount == 0) {
	obj73578_onTap_actionGroup2();
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
				window.obj73578_onTap_runningActionsCount = window.obj73578_onTap_runningActionsCount - 1;
if (window.obj73578_onTap_runningActionsCount < 0) {
	window.obj73578_onTap_runningActionsCount = 0;
} else if (window.obj73578_onTap_runningActionsCount == 0) {
	obj73578_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73578_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73578_onTap_activeActionGroupIndex = -1;
		$("#obj73578").trigger("obj73578_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73578) {
				console.warn("de-queueing event obj73578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73578_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj73568 
move_73583();
function move_73583() {
	window.obj73578_onTap_runningActionsCount = obj73578_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj73568");
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
			window.obj73578_onTap_runningActionsCount = window.obj73578_onTap_runningActionsCount - 1;
if (window.obj73578_onTap_runningActionsCount < 0) {
	window.obj73578_onTap_runningActionsCount = 0;
} else if (window.obj73578_onTap_runningActionsCount == 0) {
	obj73578_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj73578_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73578_onTap_activeActionGroupIndex = -1;
		$("#obj73578").trigger("obj73578_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73578) {
				console.warn("de-queueing event obj73578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73578_onTap_activeActionGroupIndex = 3;
	





















};
obj73570_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73570_onTap_activeActionGroupIndex = -1;
		$("#obj73570").trigger("obj73570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73570) {
				console.warn("de-queueing event obj73570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73570_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj73570 
hide_73573();
function hide_73573() {
	var selector = "#obj73570";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73570_onTap_runningActionsCount = obj73570_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73570_onTap_runningActionsCount = window.obj73570_onTap_runningActionsCount - 1;
if (window.obj73570_onTap_runningActionsCount < 0) {
	window.obj73570_onTap_runningActionsCount = 0;
} else if (window.obj73570_onTap_runningActionsCount == 0) {
	obj73570_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73573(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73570_onTap_runningActionsCount = window.obj73570_onTap_runningActionsCount - 1;
if (window.obj73570_onTap_runningActionsCount < 0) {
	window.obj73570_onTap_runningActionsCount = 0;
} else if (window.obj73570_onTap_runningActionsCount == 0) {
	obj73570_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj73568 
playPauseMovie_73572();
function playPauseMovie_73572() {
	window.obj73570_onTap_runningActionsCount = obj73570_onTap_runningActionsCount + 1;
	var myVideo = $("#obj73568")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj73570_onTap_runningActionsCount = window.obj73570_onTap_runningActionsCount - 1;
if (window.obj73570_onTap_runningActionsCount < 0) {
	window.obj73570_onTap_runningActionsCount = 0;
} else if (window.obj73570_onTap_runningActionsCount == 0) {
	obj73570_onTap_actionGroup1();
}
}

















};
obj73570_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73570_onTap_activeActionGroupIndex = -1;
		$("#obj73570").trigger("obj73570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73570) {
				console.warn("de-queueing event obj73570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73570_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj73578
(function(){
	window.obj73570_onTap_runningActionsCount = obj73570_onTap_runningActionsCount + 1;

	var selector = "#obj73578";
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
					window.obj73570_onTap_runningActionsCount = window.obj73570_onTap_runningActionsCount - 1;
if (window.obj73570_onTap_runningActionsCount < 0) {
	window.obj73570_onTap_runningActionsCount = 0;
} else if (window.obj73570_onTap_runningActionsCount == 0) {
	obj73570_onTap_actionGroup2();
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
				window.obj73570_onTap_runningActionsCount = window.obj73570_onTap_runningActionsCount - 1;
if (window.obj73570_onTap_runningActionsCount < 0) {
	window.obj73570_onTap_runningActionsCount = 0;
} else if (window.obj73570_onTap_runningActionsCount == 0) {
	obj73570_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73570_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73570_onTap_activeActionGroupIndex = -1;
		$("#obj73570").trigger("obj73570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73570) {
				console.warn("de-queueing event obj73570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73570_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj73568 
move_73575();
function move_73575() {
	window.obj73570_onTap_runningActionsCount = obj73570_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj73568");
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
			window.obj73570_onTap_runningActionsCount = window.obj73570_onTap_runningActionsCount - 1;
if (window.obj73570_onTap_runningActionsCount < 0) {
	window.obj73570_onTap_runningActionsCount = 0;
} else if (window.obj73570_onTap_runningActionsCount == 0) {
	obj73570_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj73570_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73570_onTap_activeActionGroupIndex = -1;
		$("#obj73570").trigger("obj73570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73570) {
				console.warn("de-queueing event obj73570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73570_onTap_activeActionGroupIndex = 3;
	





















};
obj87411_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87411_onTap_activeActionGroupIndex = -1;
		$("#obj87411").trigger("obj87411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87411) {
				console.warn("de-queueing event obj87411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87411_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87416 
stopAudio_87413();
function stopAudio_87413() {
	window.obj87411_onTap_runningActionsCount = obj87411_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87416")[0];
	myAudio.pause();
	window.obj87411_onTap_runningActionsCount = window.obj87411_onTap_runningActionsCount - 1;
if (window.obj87411_onTap_runningActionsCount < 0) {
	window.obj87411_onTap_runningActionsCount = 0;
} else if (window.obj87411_onTap_runningActionsCount == 0) {
	obj87411_onTap_actionGroup1();
}
}








};
obj87411_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87411_onTap_activeActionGroupIndex = -1;
		$("#obj87411").trigger("obj87411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87411) {
				console.warn("de-queueing event obj87411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87411_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87411 
hide_87414();
function hide_87414() {
	var selector = "#obj87411";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87411_onTap_runningActionsCount = obj87411_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87411_onTap_runningActionsCount = window.obj87411_onTap_runningActionsCount - 1;
if (window.obj87411_onTap_runningActionsCount < 0) {
	window.obj87411_onTap_runningActionsCount = 0;
} else if (window.obj87411_onTap_runningActionsCount == 0) {
	obj87411_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87414(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87411_onTap_runningActionsCount = window.obj87411_onTap_runningActionsCount - 1;
if (window.obj87411_onTap_runningActionsCount < 0) {
	window.obj87411_onTap_runningActionsCount = 0;
} else if (window.obj87411_onTap_runningActionsCount == 0) {
	obj87411_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87411_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87411_onTap_activeActionGroupIndex = -1;
		$("#obj87411").trigger("obj87411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87411) {
				console.warn("de-queueing event obj87411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87411_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87406
(function(){
	window.obj87411_onTap_runningActionsCount = obj87411_onTap_runningActionsCount + 1;

	var selector = "#obj87406";
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
					window.obj87411_onTap_runningActionsCount = window.obj87411_onTap_runningActionsCount - 1;
if (window.obj87411_onTap_runningActionsCount < 0) {
	window.obj87411_onTap_runningActionsCount = 0;
} else if (window.obj87411_onTap_runningActionsCount == 0) {
	obj87411_onTap_actionGroup3();
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
				window.obj87411_onTap_runningActionsCount = window.obj87411_onTap_runningActionsCount - 1;
if (window.obj87411_onTap_runningActionsCount < 0) {
	window.obj87411_onTap_runningActionsCount = 0;
} else if (window.obj87411_onTap_runningActionsCount == 0) {
	obj87411_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87411_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87411_onTap_activeActionGroupIndex = -1;
		$("#obj87411").trigger("obj87411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87411) {
				console.warn("de-queueing event obj87411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87411_onTap_activeActionGroupIndex = 3;
	





















};
obj87406_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87406_onTap_activeActionGroupIndex = -1;
		$("#obj87406").trigger("obj87406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87406) {
				console.warn("de-queueing event obj87406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87406_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87406 
hide_87408();
function hide_87408() {
	var selector = "#obj87406";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87406_onTap_runningActionsCount = obj87406_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87406_onTap_runningActionsCount = window.obj87406_onTap_runningActionsCount - 1;
if (window.obj87406_onTap_runningActionsCount < 0) {
	window.obj87406_onTap_runningActionsCount = 0;
} else if (window.obj87406_onTap_runningActionsCount == 0) {
	obj87406_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87408(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87406_onTap_runningActionsCount = window.obj87406_onTap_runningActionsCount - 1;
if (window.obj87406_onTap_runningActionsCount < 0) {
	window.obj87406_onTap_runningActionsCount = 0;
} else if (window.obj87406_onTap_runningActionsCount == 0) {
	obj87406_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87406_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87406_onTap_activeActionGroupIndex = -1;
		$("#obj87406").trigger("obj87406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87406) {
				console.warn("de-queueing event obj87406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87406_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87411
(function(){
	window.obj87406_onTap_runningActionsCount = obj87406_onTap_runningActionsCount + 1;

	var selector = "#obj87411";
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
					window.obj87406_onTap_runningActionsCount = window.obj87406_onTap_runningActionsCount - 1;
if (window.obj87406_onTap_runningActionsCount < 0) {
	window.obj87406_onTap_runningActionsCount = 0;
} else if (window.obj87406_onTap_runningActionsCount == 0) {
	obj87406_onTap_actionGroup2();
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
				window.obj87406_onTap_runningActionsCount = window.obj87406_onTap_runningActionsCount - 1;
if (window.obj87406_onTap_runningActionsCount < 0) {
	window.obj87406_onTap_runningActionsCount = 0;
} else if (window.obj87406_onTap_runningActionsCount == 0) {
	obj87406_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87406_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87406_onTap_activeActionGroupIndex = -1;
		$("#obj87406").trigger("obj87406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87406) {
				console.warn("de-queueing event obj87406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87406_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87416 
playAudio_87410();
function playAudio_87410() {
	window.obj87406_onTap_runningActionsCount = obj87406_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87416")[0];
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
		    window.obj87406_onTap_runningActionsCount = window.obj87406_onTap_runningActionsCount - 1;
if (window.obj87406_onTap_runningActionsCount < 0) {
	window.obj87406_onTap_runningActionsCount = 0;
} else if (window.obj87406_onTap_runningActionsCount == 0) {
	obj87406_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87406_onTap_runningActionsCount = window.obj87406_onTap_runningActionsCount - 1;
if (window.obj87406_onTap_runningActionsCount < 0) {
	window.obj87406_onTap_runningActionsCount = 0;
} else if (window.obj87406_onTap_runningActionsCount == 0) {
	obj87406_onTap_actionGroup3();
}
	}
}









};
obj87406_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87406_onTap_activeActionGroupIndex = -1;
		$("#obj87406").trigger("obj87406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87406) {
				console.warn("de-queueing event obj87406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87406_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj73611: Event Touch Down
 *
 */
$("#obj73611").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73611_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73611_onTap is still running");
	return;
}
var obj73611_onTap_runningActionsCount = 0;
var obj73611_onTap_loopCount = 0;
obj73611_onTap_actionGroup0();
});










/*
 *
 *   obj73608: Event Touch Down
 *
 */
$("#obj73608").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73608_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73608_onTap is still running");
	return;
}
var obj73608_onTap_runningActionsCount = 0;
var obj73608_onTap_loopCount = 0;
obj73608_onTap_actionGroup0();
});






































































/*
 *
 *   obj73578: Event Touch Down
 *
 */
$("#obj73578").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73578_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73578_onTap is still running");
	return;
}
var obj73578_onTap_runningActionsCount = 0;
var obj73578_onTap_loopCount = 0;
obj73578_onTap_actionGroup0();
});










/*
 *
 *   obj73570: Event Touch Down
 *
 */
$("#obj73570").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73570_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73570_onTap is still running");
	return;
}
var obj73570_onTap_runningActionsCount = 0;
var obj73570_onTap_loopCount = 0;
obj73570_onTap_actionGroup0();
});










/*
 *
 *   obj87411: Event Touch Down
 *
 */
$("#obj87411").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87411_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87411_onTap is still running");
	return;
}
var obj87411_onTap_runningActionsCount = 0;
var obj87411_onTap_loopCount = 0;
obj87411_onTap_actionGroup0();
});










/*
 *
 *   obj87406: Event Touch Down
 *
 */
$("#obj87406").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87406_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87406_onTap is still running");
	return;
}
var obj87406_onTap_runningActionsCount = 0;
var obj87406_onTap_loopCount = 0;
obj87406_onTap_actionGroup0();
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
	
$("#obj73614").trigger('SCEventShow');
$("#obj73611").trigger('SCEventShow');
$("#obj73608").trigger('SCEventShow');
$("#obj73606").trigger('SCEventShow');
$("#obj73604").trigger('SCEventShow');
$("#obj73602").trigger('SCEventShow');
$("#obj73600").trigger('SCEventShow');
$("#obj73598").trigger('SCEventShow');
$("#obj73596").trigger('SCEventShow');
$("#obj73578").trigger('SCEventShow');
$("#obj73570").trigger('SCEventShow');
$("#obj87411").trigger('SCEventShow');
$("#obj87406").trigger('SCEventShow');
$("#obj87416").trigger('SCEventShow');
$("#obj90589").trigger('SCEventShow');
$("#obj94739").trigger('SCEventShow');
$("#obj73568").trigger('SCEventShow');
	
});