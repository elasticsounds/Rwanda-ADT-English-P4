pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 31870;
pubcoder.page.title = pubcoder.page.title || "112";
pubcoder.page.number = pubcoder.page.number || 112;
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
var obj84902_onTap_activeActionGroupIndex = -1;
var obj84902_onTap_runningActionsCount = 0;
var obj84902_onTap_loopCount = 0;
var obj84899_onTap_activeActionGroupIndex = -1;
var obj84899_onTap_runningActionsCount = 0;
var obj84899_onTap_loopCount = 0;
var obj84871_onTap_activeActionGroupIndex = -1;
var obj84871_onTap_runningActionsCount = 0;
var obj84871_onTap_loopCount = 0;
var obj84863_onTap_activeActionGroupIndex = -1;
var obj84863_onTap_runningActionsCount = 0;
var obj84863_onTap_loopCount = 0;
var obj88213_onTap_activeActionGroupIndex = -1;
var obj88213_onTap_runningActionsCount = 0;
var obj88213_onTap_loopCount = 0;
var obj88208_onTap_activeActionGroupIndex = -1;
var obj88208_onTap_runningActionsCount = 0;
var obj88208_onTap_loopCount = 0;
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
		
obj84902_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84902_onTap_activeActionGroupIndex = -1;
		$("#obj84902").trigger("obj84902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84902) {
				console.warn("de-queueing event obj84902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84902_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_84904();
function goToPage_84904() {
	window.obj84902_onTap_runningActionsCount = obj84902_onTap_runningActionsCount + 1;
	$("#anchor673")[0].click();
	window.obj84902_onTap_runningActionsCount = window.obj84902_onTap_runningActionsCount - 1;
if (window.obj84902_onTap_runningActionsCount < 0) {
	window.obj84902_onTap_runningActionsCount = 0;
} else if (window.obj84902_onTap_runningActionsCount == 0) {
	obj84902_onTap_actionGroup1();
}
}





















};
obj84902_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84902_onTap_activeActionGroupIndex = -1;
		$("#obj84902").trigger("obj84902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84902) {
				console.warn("de-queueing event obj84902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84902_onTap_activeActionGroupIndex = 1;
	





















};
obj84899_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84899_onTap_activeActionGroupIndex = -1;
		$("#obj84899").trigger("obj84899_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84899) {
				console.warn("de-queueing event obj84899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84899_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_84901();
function goToPage_84901() {
	window.obj84899_onTap_runningActionsCount = obj84899_onTap_runningActionsCount + 1;
	$("#anchor674")[0].click();
	window.obj84899_onTap_runningActionsCount = window.obj84899_onTap_runningActionsCount - 1;
if (window.obj84899_onTap_runningActionsCount < 0) {
	window.obj84899_onTap_runningActionsCount = 0;
} else if (window.obj84899_onTap_runningActionsCount == 0) {
	obj84899_onTap_actionGroup1();
}
}





















};
obj84899_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84899_onTap_activeActionGroupIndex = -1;
		$("#obj84899").trigger("obj84899_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84899) {
				console.warn("de-queueing event obj84899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84899_onTap_activeActionGroupIndex = 1;
	





















};
obj84871_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84871_onTap_activeActionGroupIndex = -1;
		$("#obj84871").trigger("obj84871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84871) {
				console.warn("de-queueing event obj84871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84871_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj84871 
hide_84874();
function hide_84874() {
	var selector = "#obj84871";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84871_onTap_runningActionsCount = obj84871_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84871_onTap_runningActionsCount = window.obj84871_onTap_runningActionsCount - 1;
if (window.obj84871_onTap_runningActionsCount < 0) {
	window.obj84871_onTap_runningActionsCount = 0;
} else if (window.obj84871_onTap_runningActionsCount == 0) {
	obj84871_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84874(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84871_onTap_runningActionsCount = window.obj84871_onTap_runningActionsCount - 1;
if (window.obj84871_onTap_runningActionsCount < 0) {
	window.obj84871_onTap_runningActionsCount = 0;
} else if (window.obj84871_onTap_runningActionsCount == 0) {
	obj84871_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj84861 
stopMovie_84873();
function stopMovie_84873() {
	window.obj84871_onTap_runningActionsCount = obj84871_onTap_runningActionsCount + 1;
	var myVideo = $("#obj84861")[0];
	myVideo.pause();
	window.obj84871_onTap_runningActionsCount = window.obj84871_onTap_runningActionsCount - 1;
if (window.obj84871_onTap_runningActionsCount < 0) {
	window.obj84871_onTap_runningActionsCount = 0;
} else if (window.obj84871_onTap_runningActionsCount == 0) {
	obj84871_onTap_actionGroup1();
}
}
















};
obj84871_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84871_onTap_activeActionGroupIndex = -1;
		$("#obj84871").trigger("obj84871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84871) {
				console.warn("de-queueing event obj84871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84871_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj84863
(function(){
	window.obj84871_onTap_runningActionsCount = obj84871_onTap_runningActionsCount + 1;

	var selector = "#obj84863";
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
					window.obj84871_onTap_runningActionsCount = window.obj84871_onTap_runningActionsCount - 1;
if (window.obj84871_onTap_runningActionsCount < 0) {
	window.obj84871_onTap_runningActionsCount = 0;
} else if (window.obj84871_onTap_runningActionsCount == 0) {
	obj84871_onTap_actionGroup2();
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
				window.obj84871_onTap_runningActionsCount = window.obj84871_onTap_runningActionsCount - 1;
if (window.obj84871_onTap_runningActionsCount < 0) {
	window.obj84871_onTap_runningActionsCount = 0;
} else if (window.obj84871_onTap_runningActionsCount == 0) {
	obj84871_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84871_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84871_onTap_activeActionGroupIndex = -1;
		$("#obj84871").trigger("obj84871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84871) {
				console.warn("de-queueing event obj84871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84871_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj84861 
move_84876();
function move_84876() {
	window.obj84871_onTap_runningActionsCount = obj84871_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj84861");
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
			window.obj84871_onTap_runningActionsCount = window.obj84871_onTap_runningActionsCount - 1;
if (window.obj84871_onTap_runningActionsCount < 0) {
	window.obj84871_onTap_runningActionsCount = 0;
} else if (window.obj84871_onTap_runningActionsCount == 0) {
	obj84871_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj84871_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84871_onTap_activeActionGroupIndex = -1;
		$("#obj84871").trigger("obj84871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84871) {
				console.warn("de-queueing event obj84871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84871_onTap_activeActionGroupIndex = 3;
	





















};
obj84863_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84863_onTap_activeActionGroupIndex = -1;
		$("#obj84863").trigger("obj84863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84863) {
				console.warn("de-queueing event obj84863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84863_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj84863 
hide_84866();
function hide_84866() {
	var selector = "#obj84863";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84863_onTap_runningActionsCount = obj84863_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84863_onTap_runningActionsCount = window.obj84863_onTap_runningActionsCount - 1;
if (window.obj84863_onTap_runningActionsCount < 0) {
	window.obj84863_onTap_runningActionsCount = 0;
} else if (window.obj84863_onTap_runningActionsCount == 0) {
	obj84863_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84866(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84863_onTap_runningActionsCount = window.obj84863_onTap_runningActionsCount - 1;
if (window.obj84863_onTap_runningActionsCount < 0) {
	window.obj84863_onTap_runningActionsCount = 0;
} else if (window.obj84863_onTap_runningActionsCount == 0) {
	obj84863_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj84861 
playPauseMovie_84865();
function playPauseMovie_84865() {
	window.obj84863_onTap_runningActionsCount = obj84863_onTap_runningActionsCount + 1;
	var myVideo = $("#obj84861")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj84863_onTap_runningActionsCount = window.obj84863_onTap_runningActionsCount - 1;
if (window.obj84863_onTap_runningActionsCount < 0) {
	window.obj84863_onTap_runningActionsCount = 0;
} else if (window.obj84863_onTap_runningActionsCount == 0) {
	obj84863_onTap_actionGroup1();
}
}

















};
obj84863_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84863_onTap_activeActionGroupIndex = -1;
		$("#obj84863").trigger("obj84863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84863) {
				console.warn("de-queueing event obj84863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84863_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj84871
(function(){
	window.obj84863_onTap_runningActionsCount = obj84863_onTap_runningActionsCount + 1;

	var selector = "#obj84871";
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
					window.obj84863_onTap_runningActionsCount = window.obj84863_onTap_runningActionsCount - 1;
if (window.obj84863_onTap_runningActionsCount < 0) {
	window.obj84863_onTap_runningActionsCount = 0;
} else if (window.obj84863_onTap_runningActionsCount == 0) {
	obj84863_onTap_actionGroup2();
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
				window.obj84863_onTap_runningActionsCount = window.obj84863_onTap_runningActionsCount - 1;
if (window.obj84863_onTap_runningActionsCount < 0) {
	window.obj84863_onTap_runningActionsCount = 0;
} else if (window.obj84863_onTap_runningActionsCount == 0) {
	obj84863_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84863_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84863_onTap_activeActionGroupIndex = -1;
		$("#obj84863").trigger("obj84863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84863) {
				console.warn("de-queueing event obj84863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84863_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj84861 
move_84868();
function move_84868() {
	window.obj84863_onTap_runningActionsCount = obj84863_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj84861");
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
			window.obj84863_onTap_runningActionsCount = window.obj84863_onTap_runningActionsCount - 1;
if (window.obj84863_onTap_runningActionsCount < 0) {
	window.obj84863_onTap_runningActionsCount = 0;
} else if (window.obj84863_onTap_runningActionsCount == 0) {
	obj84863_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj84863_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84863_onTap_activeActionGroupIndex = -1;
		$("#obj84863").trigger("obj84863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84863) {
				console.warn("de-queueing event obj84863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84863_onTap_activeActionGroupIndex = 3;
	





















};
obj88213_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88213_onTap_activeActionGroupIndex = -1;
		$("#obj88213").trigger("obj88213_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88213) {
				console.warn("de-queueing event obj88213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88213_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88218 
stopAudio_88215();
function stopAudio_88215() {
	window.obj88213_onTap_runningActionsCount = obj88213_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88218")[0];
	myAudio.pause();
	window.obj88213_onTap_runningActionsCount = window.obj88213_onTap_runningActionsCount - 1;
if (window.obj88213_onTap_runningActionsCount < 0) {
	window.obj88213_onTap_runningActionsCount = 0;
} else if (window.obj88213_onTap_runningActionsCount == 0) {
	obj88213_onTap_actionGroup1();
}
}








};
obj88213_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88213_onTap_activeActionGroupIndex = -1;
		$("#obj88213").trigger("obj88213_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88213) {
				console.warn("de-queueing event obj88213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88213_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88213 
hide_88216();
function hide_88216() {
	var selector = "#obj88213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88213_onTap_runningActionsCount = obj88213_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88213_onTap_runningActionsCount = window.obj88213_onTap_runningActionsCount - 1;
if (window.obj88213_onTap_runningActionsCount < 0) {
	window.obj88213_onTap_runningActionsCount = 0;
} else if (window.obj88213_onTap_runningActionsCount == 0) {
	obj88213_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88216(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88213_onTap_runningActionsCount = window.obj88213_onTap_runningActionsCount - 1;
if (window.obj88213_onTap_runningActionsCount < 0) {
	window.obj88213_onTap_runningActionsCount = 0;
} else if (window.obj88213_onTap_runningActionsCount == 0) {
	obj88213_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88213_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88213_onTap_activeActionGroupIndex = -1;
		$("#obj88213").trigger("obj88213_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88213) {
				console.warn("de-queueing event obj88213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88213_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88208
(function(){
	window.obj88213_onTap_runningActionsCount = obj88213_onTap_runningActionsCount + 1;

	var selector = "#obj88208";
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
					window.obj88213_onTap_runningActionsCount = window.obj88213_onTap_runningActionsCount - 1;
if (window.obj88213_onTap_runningActionsCount < 0) {
	window.obj88213_onTap_runningActionsCount = 0;
} else if (window.obj88213_onTap_runningActionsCount == 0) {
	obj88213_onTap_actionGroup3();
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
				window.obj88213_onTap_runningActionsCount = window.obj88213_onTap_runningActionsCount - 1;
if (window.obj88213_onTap_runningActionsCount < 0) {
	window.obj88213_onTap_runningActionsCount = 0;
} else if (window.obj88213_onTap_runningActionsCount == 0) {
	obj88213_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88213_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88213_onTap_activeActionGroupIndex = -1;
		$("#obj88213").trigger("obj88213_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88213) {
				console.warn("de-queueing event obj88213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88213_onTap_activeActionGroupIndex = 3;
	





















};
obj88208_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88208_onTap_activeActionGroupIndex = -1;
		$("#obj88208").trigger("obj88208_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88208) {
				console.warn("de-queueing event obj88208." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88208").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88208_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88208 
hide_88210();
function hide_88210() {
	var selector = "#obj88208";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88208_onTap_runningActionsCount = obj88208_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88208_onTap_runningActionsCount = window.obj88208_onTap_runningActionsCount - 1;
if (window.obj88208_onTap_runningActionsCount < 0) {
	window.obj88208_onTap_runningActionsCount = 0;
} else if (window.obj88208_onTap_runningActionsCount == 0) {
	obj88208_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88210(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88208_onTap_runningActionsCount = window.obj88208_onTap_runningActionsCount - 1;
if (window.obj88208_onTap_runningActionsCount < 0) {
	window.obj88208_onTap_runningActionsCount = 0;
} else if (window.obj88208_onTap_runningActionsCount == 0) {
	obj88208_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88208_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88208_onTap_activeActionGroupIndex = -1;
		$("#obj88208").trigger("obj88208_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88208) {
				console.warn("de-queueing event obj88208." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88208").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88208_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88213
(function(){
	window.obj88208_onTap_runningActionsCount = obj88208_onTap_runningActionsCount + 1;

	var selector = "#obj88213";
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
					window.obj88208_onTap_runningActionsCount = window.obj88208_onTap_runningActionsCount - 1;
if (window.obj88208_onTap_runningActionsCount < 0) {
	window.obj88208_onTap_runningActionsCount = 0;
} else if (window.obj88208_onTap_runningActionsCount == 0) {
	obj88208_onTap_actionGroup2();
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
				window.obj88208_onTap_runningActionsCount = window.obj88208_onTap_runningActionsCount - 1;
if (window.obj88208_onTap_runningActionsCount < 0) {
	window.obj88208_onTap_runningActionsCount = 0;
} else if (window.obj88208_onTap_runningActionsCount == 0) {
	obj88208_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88208_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88208_onTap_activeActionGroupIndex = -1;
		$("#obj88208").trigger("obj88208_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88208) {
				console.warn("de-queueing event obj88208." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88208").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88208_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88218 
playAudio_88212();
function playAudio_88212() {
	window.obj88208_onTap_runningActionsCount = obj88208_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88218")[0];
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
		    window.obj88208_onTap_runningActionsCount = window.obj88208_onTap_runningActionsCount - 1;
if (window.obj88208_onTap_runningActionsCount < 0) {
	window.obj88208_onTap_runningActionsCount = 0;
} else if (window.obj88208_onTap_runningActionsCount == 0) {
	obj88208_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88208_onTap_runningActionsCount = window.obj88208_onTap_runningActionsCount - 1;
if (window.obj88208_onTap_runningActionsCount < 0) {
	window.obj88208_onTap_runningActionsCount = 0;
} else if (window.obj88208_onTap_runningActionsCount == 0) {
	obj88208_onTap_actionGroup3();
}
	}
}









};
obj88208_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88208_onTap_activeActionGroupIndex = -1;
		$("#obj88208").trigger("obj88208_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88208) {
				console.warn("de-queueing event obj88208." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88208").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88208_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj84902: Event Touch Down
 *
 */
$("#obj84902").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84902_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84902_onTap is still running");
	return;
}
var obj84902_onTap_runningActionsCount = 0;
var obj84902_onTap_loopCount = 0;
obj84902_onTap_actionGroup0();
});










/*
 *
 *   obj84899: Event Touch Down
 *
 */
$("#obj84899").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84899_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84899_onTap is still running");
	return;
}
var obj84899_onTap_runningActionsCount = 0;
var obj84899_onTap_loopCount = 0;
obj84899_onTap_actionGroup0();
});




























































/*
 *
 *   obj84871: Event Touch Down
 *
 */
$("#obj84871").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84871_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84871_onTap is still running");
	return;
}
var obj84871_onTap_runningActionsCount = 0;
var obj84871_onTap_loopCount = 0;
obj84871_onTap_actionGroup0();
});










/*
 *
 *   obj84863: Event Touch Down
 *
 */
$("#obj84863").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84863_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84863_onTap is still running");
	return;
}
var obj84863_onTap_runningActionsCount = 0;
var obj84863_onTap_loopCount = 0;
obj84863_onTap_actionGroup0();
});










/*
 *
 *   obj88213: Event Touch Down
 *
 */
$("#obj88213").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88213_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88213_onTap is still running");
	return;
}
var obj88213_onTap_runningActionsCount = 0;
var obj88213_onTap_loopCount = 0;
obj88213_onTap_actionGroup0();
});










/*
 *
 *   obj88208: Event Touch Down
 *
 */
$("#obj88208").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88208_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88208_onTap is still running");
	return;
}
var obj88208_onTap_runningActionsCount = 0;
var obj88208_onTap_loopCount = 0;
obj88208_onTap_actionGroup0();
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
	
$("#obj84905").trigger('SCEventShow');
$("#obj84902").trigger('SCEventShow');
$("#obj84899").trigger('SCEventShow');
$("#obj84897").trigger('SCEventShow');
$("#obj84895").trigger('SCEventShow');
$("#obj84893").trigger('SCEventShow');
$("#obj84891").trigger('SCEventShow');
$("#obj84889").trigger('SCEventShow');
$("#obj84871").trigger('SCEventShow');
$("#obj84863").trigger('SCEventShow');
$("#obj88213").trigger('SCEventShow');
$("#obj88208").trigger('SCEventShow');
$("#obj88218").trigger('SCEventShow');
$("#obj94853").trigger('SCEventShow');
$("#obj84861").trigger('SCEventShow');
	
});