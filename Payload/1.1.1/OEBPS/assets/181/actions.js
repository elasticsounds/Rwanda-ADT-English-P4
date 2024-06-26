pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 49526;
pubcoder.page.title = pubcoder.page.title || "181";
pubcoder.page.number = pubcoder.page.number || 181;
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
var obj49532_onTap_activeActionGroupIndex = -1;
var obj49532_onTap_runningActionsCount = 0;
var obj49532_onTap_loopCount = 0;
var obj49529_onTap_activeActionGroupIndex = -1;
var obj49529_onTap_runningActionsCount = 0;
var obj49529_onTap_loopCount = 0;
var obj67918_onTap_activeActionGroupIndex = -1;
var obj67918_onTap_runningActionsCount = 0;
var obj67918_onTap_loopCount = 0;
var obj67910_onTap_activeActionGroupIndex = -1;
var obj67910_onTap_runningActionsCount = 0;
var obj67910_onTap_loopCount = 0;
var obj89053_onTap_activeActionGroupIndex = -1;
var obj89053_onTap_runningActionsCount = 0;
var obj89053_onTap_loopCount = 0;
var obj89048_onTap_activeActionGroupIndex = -1;
var obj89048_onTap_runningActionsCount = 0;
var obj89048_onTap_loopCount = 0;
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
		
obj49532_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49532_onTap_activeActionGroupIndex = -1;
		$("#obj49532").trigger("obj49532_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49532) {
				console.warn("de-queueing event obj49532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49532_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49534();
function goToPage_49534() {
	window.obj49532_onTap_runningActionsCount = obj49532_onTap_runningActionsCount + 1;
	$("#anchor1067")[0].click();
	window.obj49532_onTap_runningActionsCount = window.obj49532_onTap_runningActionsCount - 1;
if (window.obj49532_onTap_runningActionsCount < 0) {
	window.obj49532_onTap_runningActionsCount = 0;
} else if (window.obj49532_onTap_runningActionsCount == 0) {
	obj49532_onTap_actionGroup1();
}
}





















};
obj49532_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49532_onTap_activeActionGroupIndex = -1;
		$("#obj49532").trigger("obj49532_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49532) {
				console.warn("de-queueing event obj49532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49532_onTap_activeActionGroupIndex = 1;
	





















};
obj49529_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49529_onTap_activeActionGroupIndex = -1;
		$("#obj49529").trigger("obj49529_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49529) {
				console.warn("de-queueing event obj49529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49529_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49531();
function goToPage_49531() {
	window.obj49529_onTap_runningActionsCount = obj49529_onTap_runningActionsCount + 1;
	$("#anchor1068")[0].click();
	window.obj49529_onTap_runningActionsCount = window.obj49529_onTap_runningActionsCount - 1;
if (window.obj49529_onTap_runningActionsCount < 0) {
	window.obj49529_onTap_runningActionsCount = 0;
} else if (window.obj49529_onTap_runningActionsCount == 0) {
	obj49529_onTap_actionGroup1();
}
}





















};
obj49529_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49529_onTap_activeActionGroupIndex = -1;
		$("#obj49529").trigger("obj49529_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49529) {
				console.warn("de-queueing event obj49529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49529_onTap_activeActionGroupIndex = 1;
	





















};
obj67918_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67918_onTap_activeActionGroupIndex = -1;
		$("#obj67918").trigger("obj67918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67918) {
				console.warn("de-queueing event obj67918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67918_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67918 
hide_67921();
function hide_67921() {
	var selector = "#obj67918";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67918_onTap_runningActionsCount = obj67918_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67918_onTap_runningActionsCount = window.obj67918_onTap_runningActionsCount - 1;
if (window.obj67918_onTap_runningActionsCount < 0) {
	window.obj67918_onTap_runningActionsCount = 0;
} else if (window.obj67918_onTap_runningActionsCount == 0) {
	obj67918_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67921(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67918_onTap_runningActionsCount = window.obj67918_onTap_runningActionsCount - 1;
if (window.obj67918_onTap_runningActionsCount < 0) {
	window.obj67918_onTap_runningActionsCount = 0;
} else if (window.obj67918_onTap_runningActionsCount == 0) {
	obj67918_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67924 
stopMovie_67920();
function stopMovie_67920() {
	window.obj67918_onTap_runningActionsCount = obj67918_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67924")[0];
	myVideo.pause();
	window.obj67918_onTap_runningActionsCount = window.obj67918_onTap_runningActionsCount - 1;
if (window.obj67918_onTap_runningActionsCount < 0) {
	window.obj67918_onTap_runningActionsCount = 0;
} else if (window.obj67918_onTap_runningActionsCount == 0) {
	obj67918_onTap_actionGroup1();
}
}
















};
obj67918_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67918_onTap_activeActionGroupIndex = -1;
		$("#obj67918").trigger("obj67918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67918) {
				console.warn("de-queueing event obj67918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67918_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67910
(function(){
	window.obj67918_onTap_runningActionsCount = obj67918_onTap_runningActionsCount + 1;

	var selector = "#obj67910";
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
					window.obj67918_onTap_runningActionsCount = window.obj67918_onTap_runningActionsCount - 1;
if (window.obj67918_onTap_runningActionsCount < 0) {
	window.obj67918_onTap_runningActionsCount = 0;
} else if (window.obj67918_onTap_runningActionsCount == 0) {
	obj67918_onTap_actionGroup2();
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
				window.obj67918_onTap_runningActionsCount = window.obj67918_onTap_runningActionsCount - 1;
if (window.obj67918_onTap_runningActionsCount < 0) {
	window.obj67918_onTap_runningActionsCount = 0;
} else if (window.obj67918_onTap_runningActionsCount == 0) {
	obj67918_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67918_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67918_onTap_activeActionGroupIndex = -1;
		$("#obj67918").trigger("obj67918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67918) {
				console.warn("de-queueing event obj67918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67918_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67924 
move_67923();
function move_67923() {
	window.obj67918_onTap_runningActionsCount = obj67918_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67924");
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
			window.obj67918_onTap_runningActionsCount = window.obj67918_onTap_runningActionsCount - 1;
if (window.obj67918_onTap_runningActionsCount < 0) {
	window.obj67918_onTap_runningActionsCount = 0;
} else if (window.obj67918_onTap_runningActionsCount == 0) {
	obj67918_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67918_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67918_onTap_activeActionGroupIndex = -1;
		$("#obj67918").trigger("obj67918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67918) {
				console.warn("de-queueing event obj67918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67918_onTap_activeActionGroupIndex = 3;
	





















};
obj67910_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67910_onTap_activeActionGroupIndex = -1;
		$("#obj67910").trigger("obj67910_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67910) {
				console.warn("de-queueing event obj67910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67910_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67910 
hide_67913();
function hide_67913() {
	var selector = "#obj67910";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67910_onTap_runningActionsCount = obj67910_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67910_onTap_runningActionsCount = window.obj67910_onTap_runningActionsCount - 1;
if (window.obj67910_onTap_runningActionsCount < 0) {
	window.obj67910_onTap_runningActionsCount = 0;
} else if (window.obj67910_onTap_runningActionsCount == 0) {
	obj67910_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67913(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67910_onTap_runningActionsCount = window.obj67910_onTap_runningActionsCount - 1;
if (window.obj67910_onTap_runningActionsCount < 0) {
	window.obj67910_onTap_runningActionsCount = 0;
} else if (window.obj67910_onTap_runningActionsCount == 0) {
	obj67910_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67924 
playPauseMovie_67912();
function playPauseMovie_67912() {
	window.obj67910_onTap_runningActionsCount = obj67910_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67924")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67910_onTap_runningActionsCount = window.obj67910_onTap_runningActionsCount - 1;
if (window.obj67910_onTap_runningActionsCount < 0) {
	window.obj67910_onTap_runningActionsCount = 0;
} else if (window.obj67910_onTap_runningActionsCount == 0) {
	obj67910_onTap_actionGroup1();
}
}

















};
obj67910_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67910_onTap_activeActionGroupIndex = -1;
		$("#obj67910").trigger("obj67910_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67910) {
				console.warn("de-queueing event obj67910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67910_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67918
(function(){
	window.obj67910_onTap_runningActionsCount = obj67910_onTap_runningActionsCount + 1;

	var selector = "#obj67918";
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
					window.obj67910_onTap_runningActionsCount = window.obj67910_onTap_runningActionsCount - 1;
if (window.obj67910_onTap_runningActionsCount < 0) {
	window.obj67910_onTap_runningActionsCount = 0;
} else if (window.obj67910_onTap_runningActionsCount == 0) {
	obj67910_onTap_actionGroup2();
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
				window.obj67910_onTap_runningActionsCount = window.obj67910_onTap_runningActionsCount - 1;
if (window.obj67910_onTap_runningActionsCount < 0) {
	window.obj67910_onTap_runningActionsCount = 0;
} else if (window.obj67910_onTap_runningActionsCount == 0) {
	obj67910_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67910_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67910_onTap_activeActionGroupIndex = -1;
		$("#obj67910").trigger("obj67910_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67910) {
				console.warn("de-queueing event obj67910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67910_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67924 
move_67915();
function move_67915() {
	window.obj67910_onTap_runningActionsCount = obj67910_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67924");
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
			window.obj67910_onTap_runningActionsCount = window.obj67910_onTap_runningActionsCount - 1;
if (window.obj67910_onTap_runningActionsCount < 0) {
	window.obj67910_onTap_runningActionsCount = 0;
} else if (window.obj67910_onTap_runningActionsCount == 0) {
	obj67910_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67910_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67910_onTap_activeActionGroupIndex = -1;
		$("#obj67910").trigger("obj67910_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67910) {
				console.warn("de-queueing event obj67910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67910_onTap_activeActionGroupIndex = 3;
	





















};
obj89053_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89053_onTap_activeActionGroupIndex = -1;
		$("#obj89053").trigger("obj89053_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89053) {
				console.warn("de-queueing event obj89053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89053_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89058 
stopAudio_89055();
function stopAudio_89055() {
	window.obj89053_onTap_runningActionsCount = obj89053_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89058")[0];
	myAudio.pause();
	window.obj89053_onTap_runningActionsCount = window.obj89053_onTap_runningActionsCount - 1;
if (window.obj89053_onTap_runningActionsCount < 0) {
	window.obj89053_onTap_runningActionsCount = 0;
} else if (window.obj89053_onTap_runningActionsCount == 0) {
	obj89053_onTap_actionGroup1();
}
}








};
obj89053_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89053_onTap_activeActionGroupIndex = -1;
		$("#obj89053").trigger("obj89053_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89053) {
				console.warn("de-queueing event obj89053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89053_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89053 
hide_89056();
function hide_89056() {
	var selector = "#obj89053";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89053_onTap_runningActionsCount = obj89053_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89053_onTap_runningActionsCount = window.obj89053_onTap_runningActionsCount - 1;
if (window.obj89053_onTap_runningActionsCount < 0) {
	window.obj89053_onTap_runningActionsCount = 0;
} else if (window.obj89053_onTap_runningActionsCount == 0) {
	obj89053_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89056(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89053_onTap_runningActionsCount = window.obj89053_onTap_runningActionsCount - 1;
if (window.obj89053_onTap_runningActionsCount < 0) {
	window.obj89053_onTap_runningActionsCount = 0;
} else if (window.obj89053_onTap_runningActionsCount == 0) {
	obj89053_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89053_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89053_onTap_activeActionGroupIndex = -1;
		$("#obj89053").trigger("obj89053_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89053) {
				console.warn("de-queueing event obj89053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89053_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89048
(function(){
	window.obj89053_onTap_runningActionsCount = obj89053_onTap_runningActionsCount + 1;

	var selector = "#obj89048";
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
					window.obj89053_onTap_runningActionsCount = window.obj89053_onTap_runningActionsCount - 1;
if (window.obj89053_onTap_runningActionsCount < 0) {
	window.obj89053_onTap_runningActionsCount = 0;
} else if (window.obj89053_onTap_runningActionsCount == 0) {
	obj89053_onTap_actionGroup3();
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
				window.obj89053_onTap_runningActionsCount = window.obj89053_onTap_runningActionsCount - 1;
if (window.obj89053_onTap_runningActionsCount < 0) {
	window.obj89053_onTap_runningActionsCount = 0;
} else if (window.obj89053_onTap_runningActionsCount == 0) {
	obj89053_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89053_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89053_onTap_activeActionGroupIndex = -1;
		$("#obj89053").trigger("obj89053_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89053) {
				console.warn("de-queueing event obj89053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89053_onTap_activeActionGroupIndex = 3;
	





















};
obj89048_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89048_onTap_activeActionGroupIndex = -1;
		$("#obj89048").trigger("obj89048_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89048) {
				console.warn("de-queueing event obj89048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89048_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89048 
hide_89050();
function hide_89050() {
	var selector = "#obj89048";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89048_onTap_runningActionsCount = obj89048_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89048_onTap_runningActionsCount = window.obj89048_onTap_runningActionsCount - 1;
if (window.obj89048_onTap_runningActionsCount < 0) {
	window.obj89048_onTap_runningActionsCount = 0;
} else if (window.obj89048_onTap_runningActionsCount == 0) {
	obj89048_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89050(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89048_onTap_runningActionsCount = window.obj89048_onTap_runningActionsCount - 1;
if (window.obj89048_onTap_runningActionsCount < 0) {
	window.obj89048_onTap_runningActionsCount = 0;
} else if (window.obj89048_onTap_runningActionsCount == 0) {
	obj89048_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89048_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89048_onTap_activeActionGroupIndex = -1;
		$("#obj89048").trigger("obj89048_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89048) {
				console.warn("de-queueing event obj89048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89048_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89053
(function(){
	window.obj89048_onTap_runningActionsCount = obj89048_onTap_runningActionsCount + 1;

	var selector = "#obj89053";
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
					window.obj89048_onTap_runningActionsCount = window.obj89048_onTap_runningActionsCount - 1;
if (window.obj89048_onTap_runningActionsCount < 0) {
	window.obj89048_onTap_runningActionsCount = 0;
} else if (window.obj89048_onTap_runningActionsCount == 0) {
	obj89048_onTap_actionGroup2();
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
				window.obj89048_onTap_runningActionsCount = window.obj89048_onTap_runningActionsCount - 1;
if (window.obj89048_onTap_runningActionsCount < 0) {
	window.obj89048_onTap_runningActionsCount = 0;
} else if (window.obj89048_onTap_runningActionsCount == 0) {
	obj89048_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89048_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89048_onTap_activeActionGroupIndex = -1;
		$("#obj89048").trigger("obj89048_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89048) {
				console.warn("de-queueing event obj89048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89048_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89058 
playAudio_89052();
function playAudio_89052() {
	window.obj89048_onTap_runningActionsCount = obj89048_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89058")[0];
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
		    window.obj89048_onTap_runningActionsCount = window.obj89048_onTap_runningActionsCount - 1;
if (window.obj89048_onTap_runningActionsCount < 0) {
	window.obj89048_onTap_runningActionsCount = 0;
} else if (window.obj89048_onTap_runningActionsCount == 0) {
	obj89048_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89048_onTap_runningActionsCount = window.obj89048_onTap_runningActionsCount - 1;
if (window.obj89048_onTap_runningActionsCount < 0) {
	window.obj89048_onTap_runningActionsCount = 0;
} else if (window.obj89048_onTap_runningActionsCount == 0) {
	obj89048_onTap_actionGroup3();
}
	}
}









};
obj89048_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89048_onTap_activeActionGroupIndex = -1;
		$("#obj89048").trigger("obj89048_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89048) {
				console.warn("de-queueing event obj89048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89048_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj49532: Event Touch Down
 *
 */
$("#obj49532").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49532_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49532_onTap is still running");
	return;
}
var obj49532_onTap_runningActionsCount = 0;
var obj49532_onTap_loopCount = 0;
obj49532_onTap_actionGroup0();
});










/*
 *
 *   obj49529: Event Touch Down
 *
 */
$("#obj49529").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49529_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49529_onTap is still running");
	return;
}
var obj49529_onTap_runningActionsCount = 0;
var obj49529_onTap_loopCount = 0;
obj49529_onTap_actionGroup0();
});


























































































































































































































































/*
 *
 *   obj67918: Event Touch Down
 *
 */
$("#obj67918").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67918_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67918_onTap is still running");
	return;
}
var obj67918_onTap_runningActionsCount = 0;
var obj67918_onTap_loopCount = 0;
obj67918_onTap_actionGroup0();
});










/*
 *
 *   obj67910: Event Touch Down
 *
 */
$("#obj67910").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67910_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67910_onTap is still running");
	return;
}
var obj67910_onTap_runningActionsCount = 0;
var obj67910_onTap_loopCount = 0;
obj67910_onTap_actionGroup0();
});










/*
 *
 *   obj89053: Event Touch Down
 *
 */
$("#obj89053").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89053_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89053_onTap is still running");
	return;
}
var obj89053_onTap_runningActionsCount = 0;
var obj89053_onTap_loopCount = 0;
obj89053_onTap_actionGroup0();
});










/*
 *
 *   obj89048: Event Touch Down
 *
 */
$("#obj89048").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89048_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89048_onTap is still running");
	return;
}
var obj89048_onTap_runningActionsCount = 0;
var obj89048_onTap_loopCount = 0;
obj89048_onTap_actionGroup0();
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
	
$("#obj49527").trigger('SCEventShow');
$("#obj49532").trigger('SCEventShow');
$("#obj49529").trigger('SCEventShow');
$("#obj49549").trigger('SCEventShow');
$("#obj49552").trigger('SCEventShow');
$("#obj49555").trigger('SCEventShow');
$("#obj49558").trigger('SCEventShow');
$("#obj49561").trigger('SCEventShow');
$("#obj49564").trigger('SCEventShow');
$("#obj49567").trigger('SCEventShow');
$("#obj49570").trigger('SCEventShow');
$("#obj49573").trigger('SCEventShow');
$("#obj49576").trigger('SCEventShow');
$("#obj49579").trigger('SCEventShow');
$("#obj49582").trigger('SCEventShow');
$("#obj49584").trigger('SCEventShow');
$("#obj49586").trigger('SCEventShow');
$("#obj49588").trigger('SCEventShow');
$("#obj49594").trigger('SCEventShow');
$("#obj49592").trigger('SCEventShow');
$("#obj49590").trigger('SCEventShow');
$("#obj49600").trigger('SCEventShow');
$("#obj49598").trigger('SCEventShow');
$("#obj49596").trigger('SCEventShow');
$("#obj49602").trigger('SCEventShow');
$("#obj49604").trigger('SCEventShow');
$("#obj49606").trigger('SCEventShow');
$("#obj67918").trigger('SCEventShow');
$("#obj67910").trigger('SCEventShow');
$("#obj89053").trigger('SCEventShow');
$("#obj89048").trigger('SCEventShow');
$("#obj89058").trigger('SCEventShow');
$("#obj94991").trigger('SCEventShow');
$("#obj67924").trigger('SCEventShow');
	
});