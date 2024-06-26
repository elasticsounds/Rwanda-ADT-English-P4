pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 5347;
pubcoder.page.title = pubcoder.page.title || "29";
pubcoder.page.number = pubcoder.page.number || 29;
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
var obj5353_onTap_activeActionGroupIndex = -1;
var obj5353_onTap_runningActionsCount = 0;
var obj5353_onTap_loopCount = 0;
var obj5350_onTap_activeActionGroupIndex = -1;
var obj5350_onTap_runningActionsCount = 0;
var obj5350_onTap_loopCount = 0;
var obj65422_onTap_activeActionGroupIndex = -1;
var obj65422_onTap_runningActionsCount = 0;
var obj65422_onTap_loopCount = 0;
var obj65414_onTap_activeActionGroupIndex = -1;
var obj65414_onTap_runningActionsCount = 0;
var obj65414_onTap_loopCount = 0;
var obj87111_onTap_activeActionGroupIndex = -1;
var obj87111_onTap_runningActionsCount = 0;
var obj87111_onTap_loopCount = 0;
var obj87106_onTap_activeActionGroupIndex = -1;
var obj87106_onTap_runningActionsCount = 0;
var obj87106_onTap_loopCount = 0;
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
		
obj5353_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5353_onTap_activeActionGroupIndex = -1;
		$("#obj5353").trigger("obj5353_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5353) {
				console.warn("de-queueing event obj5353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5353_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_5355();
function goToPage_5355() {
	window.obj5353_onTap_runningActionsCount = obj5353_onTap_runningActionsCount + 1;
	$("#anchor175")[0].click();
	window.obj5353_onTap_runningActionsCount = window.obj5353_onTap_runningActionsCount - 1;
if (window.obj5353_onTap_runningActionsCount < 0) {
	window.obj5353_onTap_runningActionsCount = 0;
} else if (window.obj5353_onTap_runningActionsCount == 0) {
	obj5353_onTap_actionGroup1();
}
}





















};
obj5353_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5353_onTap_activeActionGroupIndex = -1;
		$("#obj5353").trigger("obj5353_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5353) {
				console.warn("de-queueing event obj5353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5353_onTap_activeActionGroupIndex = 1;
	





















};
obj5350_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5350_onTap_activeActionGroupIndex = -1;
		$("#obj5350").trigger("obj5350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5350) {
				console.warn("de-queueing event obj5350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5350_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_5352();
function goToPage_5352() {
	window.obj5350_onTap_runningActionsCount = obj5350_onTap_runningActionsCount + 1;
	$("#anchor176")[0].click();
	window.obj5350_onTap_runningActionsCount = window.obj5350_onTap_runningActionsCount - 1;
if (window.obj5350_onTap_runningActionsCount < 0) {
	window.obj5350_onTap_runningActionsCount = 0;
} else if (window.obj5350_onTap_runningActionsCount == 0) {
	obj5350_onTap_actionGroup1();
}
}





















};
obj5350_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5350_onTap_activeActionGroupIndex = -1;
		$("#obj5350").trigger("obj5350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5350) {
				console.warn("de-queueing event obj5350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5350_onTap_activeActionGroupIndex = 1;
	





















};
obj65422_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65422_onTap_activeActionGroupIndex = -1;
		$("#obj65422").trigger("obj65422_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65422) {
				console.warn("de-queueing event obj65422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65422_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65422 
hide_65425();
function hide_65425() {
	var selector = "#obj65422";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65422_onTap_runningActionsCount = obj65422_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65422_onTap_runningActionsCount = window.obj65422_onTap_runningActionsCount - 1;
if (window.obj65422_onTap_runningActionsCount < 0) {
	window.obj65422_onTap_runningActionsCount = 0;
} else if (window.obj65422_onTap_runningActionsCount == 0) {
	obj65422_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65425(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65422_onTap_runningActionsCount = window.obj65422_onTap_runningActionsCount - 1;
if (window.obj65422_onTap_runningActionsCount < 0) {
	window.obj65422_onTap_runningActionsCount = 0;
} else if (window.obj65422_onTap_runningActionsCount == 0) {
	obj65422_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65428 
stopMovie_65424();
function stopMovie_65424() {
	window.obj65422_onTap_runningActionsCount = obj65422_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65428")[0];
	myVideo.pause();
	window.obj65422_onTap_runningActionsCount = window.obj65422_onTap_runningActionsCount - 1;
if (window.obj65422_onTap_runningActionsCount < 0) {
	window.obj65422_onTap_runningActionsCount = 0;
} else if (window.obj65422_onTap_runningActionsCount == 0) {
	obj65422_onTap_actionGroup1();
}
}
















};
obj65422_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65422_onTap_activeActionGroupIndex = -1;
		$("#obj65422").trigger("obj65422_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65422) {
				console.warn("de-queueing event obj65422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65422_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65414
(function(){
	window.obj65422_onTap_runningActionsCount = obj65422_onTap_runningActionsCount + 1;

	var selector = "#obj65414";
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
					window.obj65422_onTap_runningActionsCount = window.obj65422_onTap_runningActionsCount - 1;
if (window.obj65422_onTap_runningActionsCount < 0) {
	window.obj65422_onTap_runningActionsCount = 0;
} else if (window.obj65422_onTap_runningActionsCount == 0) {
	obj65422_onTap_actionGroup2();
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
				window.obj65422_onTap_runningActionsCount = window.obj65422_onTap_runningActionsCount - 1;
if (window.obj65422_onTap_runningActionsCount < 0) {
	window.obj65422_onTap_runningActionsCount = 0;
} else if (window.obj65422_onTap_runningActionsCount == 0) {
	obj65422_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65422_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65422_onTap_activeActionGroupIndex = -1;
		$("#obj65422").trigger("obj65422_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65422) {
				console.warn("de-queueing event obj65422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65422_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65428 
move_65427();
function move_65427() {
	window.obj65422_onTap_runningActionsCount = obj65422_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65428");
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
			window.obj65422_onTap_runningActionsCount = window.obj65422_onTap_runningActionsCount - 1;
if (window.obj65422_onTap_runningActionsCount < 0) {
	window.obj65422_onTap_runningActionsCount = 0;
} else if (window.obj65422_onTap_runningActionsCount == 0) {
	obj65422_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65422_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65422_onTap_activeActionGroupIndex = -1;
		$("#obj65422").trigger("obj65422_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65422) {
				console.warn("de-queueing event obj65422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65422_onTap_activeActionGroupIndex = 3;
	





















};
obj65414_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65414_onTap_activeActionGroupIndex = -1;
		$("#obj65414").trigger("obj65414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65414) {
				console.warn("de-queueing event obj65414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65414_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65414 
hide_65417();
function hide_65417() {
	var selector = "#obj65414";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65414_onTap_runningActionsCount = obj65414_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65414_onTap_runningActionsCount = window.obj65414_onTap_runningActionsCount - 1;
if (window.obj65414_onTap_runningActionsCount < 0) {
	window.obj65414_onTap_runningActionsCount = 0;
} else if (window.obj65414_onTap_runningActionsCount == 0) {
	obj65414_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65417(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65414_onTap_runningActionsCount = window.obj65414_onTap_runningActionsCount - 1;
if (window.obj65414_onTap_runningActionsCount < 0) {
	window.obj65414_onTap_runningActionsCount = 0;
} else if (window.obj65414_onTap_runningActionsCount == 0) {
	obj65414_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65428 
playPauseMovie_65416();
function playPauseMovie_65416() {
	window.obj65414_onTap_runningActionsCount = obj65414_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65428")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65414_onTap_runningActionsCount = window.obj65414_onTap_runningActionsCount - 1;
if (window.obj65414_onTap_runningActionsCount < 0) {
	window.obj65414_onTap_runningActionsCount = 0;
} else if (window.obj65414_onTap_runningActionsCount == 0) {
	obj65414_onTap_actionGroup1();
}
}

















};
obj65414_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65414_onTap_activeActionGroupIndex = -1;
		$("#obj65414").trigger("obj65414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65414) {
				console.warn("de-queueing event obj65414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65414_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65422
(function(){
	window.obj65414_onTap_runningActionsCount = obj65414_onTap_runningActionsCount + 1;

	var selector = "#obj65422";
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
					window.obj65414_onTap_runningActionsCount = window.obj65414_onTap_runningActionsCount - 1;
if (window.obj65414_onTap_runningActionsCount < 0) {
	window.obj65414_onTap_runningActionsCount = 0;
} else if (window.obj65414_onTap_runningActionsCount == 0) {
	obj65414_onTap_actionGroup2();
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
				window.obj65414_onTap_runningActionsCount = window.obj65414_onTap_runningActionsCount - 1;
if (window.obj65414_onTap_runningActionsCount < 0) {
	window.obj65414_onTap_runningActionsCount = 0;
} else if (window.obj65414_onTap_runningActionsCount == 0) {
	obj65414_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65414_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65414_onTap_activeActionGroupIndex = -1;
		$("#obj65414").trigger("obj65414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65414) {
				console.warn("de-queueing event obj65414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65414_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65428 
move_65419();
function move_65419() {
	window.obj65414_onTap_runningActionsCount = obj65414_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65428");
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
			window.obj65414_onTap_runningActionsCount = window.obj65414_onTap_runningActionsCount - 1;
if (window.obj65414_onTap_runningActionsCount < 0) {
	window.obj65414_onTap_runningActionsCount = 0;
} else if (window.obj65414_onTap_runningActionsCount == 0) {
	obj65414_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65414_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65414_onTap_activeActionGroupIndex = -1;
		$("#obj65414").trigger("obj65414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65414) {
				console.warn("de-queueing event obj65414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65414_onTap_activeActionGroupIndex = 3;
	





















};
obj87111_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87111_onTap_activeActionGroupIndex = -1;
		$("#obj87111").trigger("obj87111_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87111) {
				console.warn("de-queueing event obj87111." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87111").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87111_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87116 
stopAudio_87113();
function stopAudio_87113() {
	window.obj87111_onTap_runningActionsCount = obj87111_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87116")[0];
	myAudio.pause();
	window.obj87111_onTap_runningActionsCount = window.obj87111_onTap_runningActionsCount - 1;
if (window.obj87111_onTap_runningActionsCount < 0) {
	window.obj87111_onTap_runningActionsCount = 0;
} else if (window.obj87111_onTap_runningActionsCount == 0) {
	obj87111_onTap_actionGroup1();
}
}








};
obj87111_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87111_onTap_activeActionGroupIndex = -1;
		$("#obj87111").trigger("obj87111_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87111) {
				console.warn("de-queueing event obj87111." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87111").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87111_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87111 
hide_87114();
function hide_87114() {
	var selector = "#obj87111";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87111_onTap_runningActionsCount = obj87111_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87111_onTap_runningActionsCount = window.obj87111_onTap_runningActionsCount - 1;
if (window.obj87111_onTap_runningActionsCount < 0) {
	window.obj87111_onTap_runningActionsCount = 0;
} else if (window.obj87111_onTap_runningActionsCount == 0) {
	obj87111_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87114(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87111_onTap_runningActionsCount = window.obj87111_onTap_runningActionsCount - 1;
if (window.obj87111_onTap_runningActionsCount < 0) {
	window.obj87111_onTap_runningActionsCount = 0;
} else if (window.obj87111_onTap_runningActionsCount == 0) {
	obj87111_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87111_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87111_onTap_activeActionGroupIndex = -1;
		$("#obj87111").trigger("obj87111_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87111) {
				console.warn("de-queueing event obj87111." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87111").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87111_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87106
(function(){
	window.obj87111_onTap_runningActionsCount = obj87111_onTap_runningActionsCount + 1;

	var selector = "#obj87106";
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
					window.obj87111_onTap_runningActionsCount = window.obj87111_onTap_runningActionsCount - 1;
if (window.obj87111_onTap_runningActionsCount < 0) {
	window.obj87111_onTap_runningActionsCount = 0;
} else if (window.obj87111_onTap_runningActionsCount == 0) {
	obj87111_onTap_actionGroup3();
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
				window.obj87111_onTap_runningActionsCount = window.obj87111_onTap_runningActionsCount - 1;
if (window.obj87111_onTap_runningActionsCount < 0) {
	window.obj87111_onTap_runningActionsCount = 0;
} else if (window.obj87111_onTap_runningActionsCount == 0) {
	obj87111_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87111_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87111_onTap_activeActionGroupIndex = -1;
		$("#obj87111").trigger("obj87111_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87111) {
				console.warn("de-queueing event obj87111." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87111").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87111_onTap_activeActionGroupIndex = 3;
	





















};
obj87106_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87106_onTap_activeActionGroupIndex = -1;
		$("#obj87106").trigger("obj87106_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87106) {
				console.warn("de-queueing event obj87106." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87106").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87106_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87106 
hide_87108();
function hide_87108() {
	var selector = "#obj87106";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87106_onTap_runningActionsCount = obj87106_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87106_onTap_runningActionsCount = window.obj87106_onTap_runningActionsCount - 1;
if (window.obj87106_onTap_runningActionsCount < 0) {
	window.obj87106_onTap_runningActionsCount = 0;
} else if (window.obj87106_onTap_runningActionsCount == 0) {
	obj87106_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87108(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87106_onTap_runningActionsCount = window.obj87106_onTap_runningActionsCount - 1;
if (window.obj87106_onTap_runningActionsCount < 0) {
	window.obj87106_onTap_runningActionsCount = 0;
} else if (window.obj87106_onTap_runningActionsCount == 0) {
	obj87106_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87106_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87106_onTap_activeActionGroupIndex = -1;
		$("#obj87106").trigger("obj87106_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87106) {
				console.warn("de-queueing event obj87106." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87106").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87106_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87111
(function(){
	window.obj87106_onTap_runningActionsCount = obj87106_onTap_runningActionsCount + 1;

	var selector = "#obj87111";
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
					window.obj87106_onTap_runningActionsCount = window.obj87106_onTap_runningActionsCount - 1;
if (window.obj87106_onTap_runningActionsCount < 0) {
	window.obj87106_onTap_runningActionsCount = 0;
} else if (window.obj87106_onTap_runningActionsCount == 0) {
	obj87106_onTap_actionGroup2();
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
				window.obj87106_onTap_runningActionsCount = window.obj87106_onTap_runningActionsCount - 1;
if (window.obj87106_onTap_runningActionsCount < 0) {
	window.obj87106_onTap_runningActionsCount = 0;
} else if (window.obj87106_onTap_runningActionsCount == 0) {
	obj87106_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87106_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87106_onTap_activeActionGroupIndex = -1;
		$("#obj87106").trigger("obj87106_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87106) {
				console.warn("de-queueing event obj87106." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87106").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87106_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87116 
playAudio_87110();
function playAudio_87110() {
	window.obj87106_onTap_runningActionsCount = obj87106_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87116")[0];
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
		    window.obj87106_onTap_runningActionsCount = window.obj87106_onTap_runningActionsCount - 1;
if (window.obj87106_onTap_runningActionsCount < 0) {
	window.obj87106_onTap_runningActionsCount = 0;
} else if (window.obj87106_onTap_runningActionsCount == 0) {
	obj87106_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87106_onTap_runningActionsCount = window.obj87106_onTap_runningActionsCount - 1;
if (window.obj87106_onTap_runningActionsCount < 0) {
	window.obj87106_onTap_runningActionsCount = 0;
} else if (window.obj87106_onTap_runningActionsCount == 0) {
	obj87106_onTap_actionGroup3();
}
	}
}









};
obj87106_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87106_onTap_activeActionGroupIndex = -1;
		$("#obj87106").trigger("obj87106_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87106) {
				console.warn("de-queueing event obj87106." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87106").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87106_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj5353: Event Touch Down
 *
 */
$("#obj5353").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5353_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5353_onTap is still running");
	return;
}
var obj5353_onTap_runningActionsCount = 0;
var obj5353_onTap_loopCount = 0;
obj5353_onTap_actionGroup0();
});










/*
 *
 *   obj5350: Event Touch Down
 *
 */
$("#obj5350").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5350_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5350_onTap is still running");
	return;
}
var obj5350_onTap_runningActionsCount = 0;
var obj5350_onTap_loopCount = 0;
obj5350_onTap_actionGroup0();
});








































/*
 *
 *   obj65422: Event Touch Down
 *
 */
$("#obj65422").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65422_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65422_onTap is still running");
	return;
}
var obj65422_onTap_runningActionsCount = 0;
var obj65422_onTap_loopCount = 0;
obj65422_onTap_actionGroup0();
});










/*
 *
 *   obj65414: Event Touch Down
 *
 */
$("#obj65414").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65414_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65414_onTap is still running");
	return;
}
var obj65414_onTap_runningActionsCount = 0;
var obj65414_onTap_loopCount = 0;
obj65414_onTap_actionGroup0();
});










/*
 *
 *   obj87111: Event Touch Down
 *
 */
$("#obj87111").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87111_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87111_onTap is still running");
	return;
}
var obj87111_onTap_runningActionsCount = 0;
var obj87111_onTap_loopCount = 0;
obj87111_onTap_actionGroup0();
});










/*
 *
 *   obj87106: Event Touch Down
 *
 */
$("#obj87106").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87106_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87106_onTap is still running");
	return;
}
var obj87106_onTap_runningActionsCount = 0;
var obj87106_onTap_loopCount = 0;
obj87106_onTap_actionGroup0();
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
	
$("#obj5348").trigger('SCEventShow');
$("#obj5353").trigger('SCEventShow');
$("#obj5350").trigger('SCEventShow');
$("#obj5369").trigger('SCEventShow');
$("#obj5371").trigger('SCEventShow');
$("#obj5373").trigger('SCEventShow');
$("#obj65422").trigger('SCEventShow');
$("#obj65414").trigger('SCEventShow');
$("#obj87111").trigger('SCEventShow');
$("#obj87106").trigger('SCEventShow');
$("#obj87116").trigger('SCEventShow');
$("#obj94687").trigger('SCEventShow');
$("#obj65428").trigger('SCEventShow');
	
});