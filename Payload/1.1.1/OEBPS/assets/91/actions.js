pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 23887;
pubcoder.page.title = pubcoder.page.title || "91";
pubcoder.page.number = pubcoder.page.number || 91;
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
var obj79144_onTap_activeActionGroupIndex = -1;
var obj79144_onTap_runningActionsCount = 0;
var obj79144_onTap_loopCount = 0;
var obj79141_onTap_activeActionGroupIndex = -1;
var obj79141_onTap_runningActionsCount = 0;
var obj79141_onTap_loopCount = 0;
var obj79113_onTap_activeActionGroupIndex = -1;
var obj79113_onTap_runningActionsCount = 0;
var obj79113_onTap_loopCount = 0;
var obj79105_onTap_activeActionGroupIndex = -1;
var obj79105_onTap_runningActionsCount = 0;
var obj79105_onTap_loopCount = 0;
var obj87961_onTap_activeActionGroupIndex = -1;
var obj87961_onTap_runningActionsCount = 0;
var obj87961_onTap_loopCount = 0;
var obj87956_onTap_activeActionGroupIndex = -1;
var obj87956_onTap_runningActionsCount = 0;
var obj87956_onTap_loopCount = 0;
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
		
obj79144_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79144_onTap_activeActionGroupIndex = -1;
		$("#obj79144").trigger("obj79144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79144) {
				console.warn("de-queueing event obj79144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79144_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79146();
function goToPage_79146() {
	window.obj79144_onTap_runningActionsCount = obj79144_onTap_runningActionsCount + 1;
	$("#anchor535")[0].click();
	window.obj79144_onTap_runningActionsCount = window.obj79144_onTap_runningActionsCount - 1;
if (window.obj79144_onTap_runningActionsCount < 0) {
	window.obj79144_onTap_runningActionsCount = 0;
} else if (window.obj79144_onTap_runningActionsCount == 0) {
	obj79144_onTap_actionGroup1();
}
}





















};
obj79144_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79144_onTap_activeActionGroupIndex = -1;
		$("#obj79144").trigger("obj79144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79144) {
				console.warn("de-queueing event obj79144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79144_onTap_activeActionGroupIndex = 1;
	





















};
obj79141_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79141_onTap_activeActionGroupIndex = -1;
		$("#obj79141").trigger("obj79141_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79141) {
				console.warn("de-queueing event obj79141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79141_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79143();
function goToPage_79143() {
	window.obj79141_onTap_runningActionsCount = obj79141_onTap_runningActionsCount + 1;
	$("#anchor536")[0].click();
	window.obj79141_onTap_runningActionsCount = window.obj79141_onTap_runningActionsCount - 1;
if (window.obj79141_onTap_runningActionsCount < 0) {
	window.obj79141_onTap_runningActionsCount = 0;
} else if (window.obj79141_onTap_runningActionsCount == 0) {
	obj79141_onTap_actionGroup1();
}
}





















};
obj79141_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79141_onTap_activeActionGroupIndex = -1;
		$("#obj79141").trigger("obj79141_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79141) {
				console.warn("de-queueing event obj79141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79141_onTap_activeActionGroupIndex = 1;
	





















};
obj79113_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79113_onTap_activeActionGroupIndex = -1;
		$("#obj79113").trigger("obj79113_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79113) {
				console.warn("de-queueing event obj79113." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79113").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79113_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj79113 
hide_79116();
function hide_79116() {
	var selector = "#obj79113";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79113_onTap_runningActionsCount = obj79113_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79113_onTap_runningActionsCount = window.obj79113_onTap_runningActionsCount - 1;
if (window.obj79113_onTap_runningActionsCount < 0) {
	window.obj79113_onTap_runningActionsCount = 0;
} else if (window.obj79113_onTap_runningActionsCount == 0) {
	obj79113_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79116(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79113_onTap_runningActionsCount = window.obj79113_onTap_runningActionsCount - 1;
if (window.obj79113_onTap_runningActionsCount < 0) {
	window.obj79113_onTap_runningActionsCount = 0;
} else if (window.obj79113_onTap_runningActionsCount == 0) {
	obj79113_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj79103 
stopMovie_79115();
function stopMovie_79115() {
	window.obj79113_onTap_runningActionsCount = obj79113_onTap_runningActionsCount + 1;
	var myVideo = $("#obj79103")[0];
	myVideo.pause();
	window.obj79113_onTap_runningActionsCount = window.obj79113_onTap_runningActionsCount - 1;
if (window.obj79113_onTap_runningActionsCount < 0) {
	window.obj79113_onTap_runningActionsCount = 0;
} else if (window.obj79113_onTap_runningActionsCount == 0) {
	obj79113_onTap_actionGroup1();
}
}
















};
obj79113_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79113_onTap_activeActionGroupIndex = -1;
		$("#obj79113").trigger("obj79113_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79113) {
				console.warn("de-queueing event obj79113." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79113").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79113_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj79105
(function(){
	window.obj79113_onTap_runningActionsCount = obj79113_onTap_runningActionsCount + 1;

	var selector = "#obj79105";
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
					window.obj79113_onTap_runningActionsCount = window.obj79113_onTap_runningActionsCount - 1;
if (window.obj79113_onTap_runningActionsCount < 0) {
	window.obj79113_onTap_runningActionsCount = 0;
} else if (window.obj79113_onTap_runningActionsCount == 0) {
	obj79113_onTap_actionGroup2();
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
				window.obj79113_onTap_runningActionsCount = window.obj79113_onTap_runningActionsCount - 1;
if (window.obj79113_onTap_runningActionsCount < 0) {
	window.obj79113_onTap_runningActionsCount = 0;
} else if (window.obj79113_onTap_runningActionsCount == 0) {
	obj79113_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79113_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79113_onTap_activeActionGroupIndex = -1;
		$("#obj79113").trigger("obj79113_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79113) {
				console.warn("de-queueing event obj79113." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79113").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79113_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj79103 
move_79118();
function move_79118() {
	window.obj79113_onTap_runningActionsCount = obj79113_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj79103");
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
			window.obj79113_onTap_runningActionsCount = window.obj79113_onTap_runningActionsCount - 1;
if (window.obj79113_onTap_runningActionsCount < 0) {
	window.obj79113_onTap_runningActionsCount = 0;
} else if (window.obj79113_onTap_runningActionsCount == 0) {
	obj79113_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj79113_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79113_onTap_activeActionGroupIndex = -1;
		$("#obj79113").trigger("obj79113_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79113) {
				console.warn("de-queueing event obj79113." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79113").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79113_onTap_activeActionGroupIndex = 3;
	





















};
obj79105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79105_onTap_activeActionGroupIndex = -1;
		$("#obj79105").trigger("obj79105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79105) {
				console.warn("de-queueing event obj79105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79105_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj79105 
hide_79108();
function hide_79108() {
	var selector = "#obj79105";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79105_onTap_runningActionsCount = obj79105_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79105_onTap_runningActionsCount = window.obj79105_onTap_runningActionsCount - 1;
if (window.obj79105_onTap_runningActionsCount < 0) {
	window.obj79105_onTap_runningActionsCount = 0;
} else if (window.obj79105_onTap_runningActionsCount == 0) {
	obj79105_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79108(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79105_onTap_runningActionsCount = window.obj79105_onTap_runningActionsCount - 1;
if (window.obj79105_onTap_runningActionsCount < 0) {
	window.obj79105_onTap_runningActionsCount = 0;
} else if (window.obj79105_onTap_runningActionsCount == 0) {
	obj79105_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj79103 
playPauseMovie_79107();
function playPauseMovie_79107() {
	window.obj79105_onTap_runningActionsCount = obj79105_onTap_runningActionsCount + 1;
	var myVideo = $("#obj79103")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj79105_onTap_runningActionsCount = window.obj79105_onTap_runningActionsCount - 1;
if (window.obj79105_onTap_runningActionsCount < 0) {
	window.obj79105_onTap_runningActionsCount = 0;
} else if (window.obj79105_onTap_runningActionsCount == 0) {
	obj79105_onTap_actionGroup1();
}
}

















};
obj79105_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79105_onTap_activeActionGroupIndex = -1;
		$("#obj79105").trigger("obj79105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79105) {
				console.warn("de-queueing event obj79105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79105_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj79113
(function(){
	window.obj79105_onTap_runningActionsCount = obj79105_onTap_runningActionsCount + 1;

	var selector = "#obj79113";
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
					window.obj79105_onTap_runningActionsCount = window.obj79105_onTap_runningActionsCount - 1;
if (window.obj79105_onTap_runningActionsCount < 0) {
	window.obj79105_onTap_runningActionsCount = 0;
} else if (window.obj79105_onTap_runningActionsCount == 0) {
	obj79105_onTap_actionGroup2();
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
				window.obj79105_onTap_runningActionsCount = window.obj79105_onTap_runningActionsCount - 1;
if (window.obj79105_onTap_runningActionsCount < 0) {
	window.obj79105_onTap_runningActionsCount = 0;
} else if (window.obj79105_onTap_runningActionsCount == 0) {
	obj79105_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79105_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79105_onTap_activeActionGroupIndex = -1;
		$("#obj79105").trigger("obj79105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79105) {
				console.warn("de-queueing event obj79105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79105_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj79103 
move_79110();
function move_79110() {
	window.obj79105_onTap_runningActionsCount = obj79105_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj79103");
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
			window.obj79105_onTap_runningActionsCount = window.obj79105_onTap_runningActionsCount - 1;
if (window.obj79105_onTap_runningActionsCount < 0) {
	window.obj79105_onTap_runningActionsCount = 0;
} else if (window.obj79105_onTap_runningActionsCount == 0) {
	obj79105_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj79105_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79105_onTap_activeActionGroupIndex = -1;
		$("#obj79105").trigger("obj79105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79105) {
				console.warn("de-queueing event obj79105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79105_onTap_activeActionGroupIndex = 3;
	





















};
obj87961_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87961_onTap_activeActionGroupIndex = -1;
		$("#obj87961").trigger("obj87961_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87961) {
				console.warn("de-queueing event obj87961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87961_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87966 
stopAudio_87963();
function stopAudio_87963() {
	window.obj87961_onTap_runningActionsCount = obj87961_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87966")[0];
	myAudio.pause();
	window.obj87961_onTap_runningActionsCount = window.obj87961_onTap_runningActionsCount - 1;
if (window.obj87961_onTap_runningActionsCount < 0) {
	window.obj87961_onTap_runningActionsCount = 0;
} else if (window.obj87961_onTap_runningActionsCount == 0) {
	obj87961_onTap_actionGroup1();
}
}








};
obj87961_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87961_onTap_activeActionGroupIndex = -1;
		$("#obj87961").trigger("obj87961_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87961) {
				console.warn("de-queueing event obj87961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87961_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87961 
hide_87964();
function hide_87964() {
	var selector = "#obj87961";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87961_onTap_runningActionsCount = obj87961_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87961_onTap_runningActionsCount = window.obj87961_onTap_runningActionsCount - 1;
if (window.obj87961_onTap_runningActionsCount < 0) {
	window.obj87961_onTap_runningActionsCount = 0;
} else if (window.obj87961_onTap_runningActionsCount == 0) {
	obj87961_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87964(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87961_onTap_runningActionsCount = window.obj87961_onTap_runningActionsCount - 1;
if (window.obj87961_onTap_runningActionsCount < 0) {
	window.obj87961_onTap_runningActionsCount = 0;
} else if (window.obj87961_onTap_runningActionsCount == 0) {
	obj87961_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87961_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87961_onTap_activeActionGroupIndex = -1;
		$("#obj87961").trigger("obj87961_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87961) {
				console.warn("de-queueing event obj87961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87961_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87956
(function(){
	window.obj87961_onTap_runningActionsCount = obj87961_onTap_runningActionsCount + 1;

	var selector = "#obj87956";
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
					window.obj87961_onTap_runningActionsCount = window.obj87961_onTap_runningActionsCount - 1;
if (window.obj87961_onTap_runningActionsCount < 0) {
	window.obj87961_onTap_runningActionsCount = 0;
} else if (window.obj87961_onTap_runningActionsCount == 0) {
	obj87961_onTap_actionGroup3();
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
				window.obj87961_onTap_runningActionsCount = window.obj87961_onTap_runningActionsCount - 1;
if (window.obj87961_onTap_runningActionsCount < 0) {
	window.obj87961_onTap_runningActionsCount = 0;
} else if (window.obj87961_onTap_runningActionsCount == 0) {
	obj87961_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87961_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87961_onTap_activeActionGroupIndex = -1;
		$("#obj87961").trigger("obj87961_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87961) {
				console.warn("de-queueing event obj87961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87961_onTap_activeActionGroupIndex = 3;
	





















};
obj87956_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87956_onTap_activeActionGroupIndex = -1;
		$("#obj87956").trigger("obj87956_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87956) {
				console.warn("de-queueing event obj87956." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87956").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87956_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87956 
hide_87958();
function hide_87958() {
	var selector = "#obj87956";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87956_onTap_runningActionsCount = obj87956_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87956_onTap_runningActionsCount = window.obj87956_onTap_runningActionsCount - 1;
if (window.obj87956_onTap_runningActionsCount < 0) {
	window.obj87956_onTap_runningActionsCount = 0;
} else if (window.obj87956_onTap_runningActionsCount == 0) {
	obj87956_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87958(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87956_onTap_runningActionsCount = window.obj87956_onTap_runningActionsCount - 1;
if (window.obj87956_onTap_runningActionsCount < 0) {
	window.obj87956_onTap_runningActionsCount = 0;
} else if (window.obj87956_onTap_runningActionsCount == 0) {
	obj87956_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87956_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87956_onTap_activeActionGroupIndex = -1;
		$("#obj87956").trigger("obj87956_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87956) {
				console.warn("de-queueing event obj87956." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87956").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87956_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87961
(function(){
	window.obj87956_onTap_runningActionsCount = obj87956_onTap_runningActionsCount + 1;

	var selector = "#obj87961";
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
					window.obj87956_onTap_runningActionsCount = window.obj87956_onTap_runningActionsCount - 1;
if (window.obj87956_onTap_runningActionsCount < 0) {
	window.obj87956_onTap_runningActionsCount = 0;
} else if (window.obj87956_onTap_runningActionsCount == 0) {
	obj87956_onTap_actionGroup2();
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
				window.obj87956_onTap_runningActionsCount = window.obj87956_onTap_runningActionsCount - 1;
if (window.obj87956_onTap_runningActionsCount < 0) {
	window.obj87956_onTap_runningActionsCount = 0;
} else if (window.obj87956_onTap_runningActionsCount == 0) {
	obj87956_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87956_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87956_onTap_activeActionGroupIndex = -1;
		$("#obj87956").trigger("obj87956_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87956) {
				console.warn("de-queueing event obj87956." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87956").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87956_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87966 
playAudio_87960();
function playAudio_87960() {
	window.obj87956_onTap_runningActionsCount = obj87956_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87966")[0];
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
		    window.obj87956_onTap_runningActionsCount = window.obj87956_onTap_runningActionsCount - 1;
if (window.obj87956_onTap_runningActionsCount < 0) {
	window.obj87956_onTap_runningActionsCount = 0;
} else if (window.obj87956_onTap_runningActionsCount == 0) {
	obj87956_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87956_onTap_runningActionsCount = window.obj87956_onTap_runningActionsCount - 1;
if (window.obj87956_onTap_runningActionsCount < 0) {
	window.obj87956_onTap_runningActionsCount = 0;
} else if (window.obj87956_onTap_runningActionsCount == 0) {
	obj87956_onTap_actionGroup3();
}
	}
}









};
obj87956_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87956_onTap_activeActionGroupIndex = -1;
		$("#obj87956").trigger("obj87956_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87956) {
				console.warn("de-queueing event obj87956." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87956").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87956_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj79144: Event Touch Down
 *
 */
$("#obj79144").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79144_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79144_onTap is still running");
	return;
}
var obj79144_onTap_runningActionsCount = 0;
var obj79144_onTap_loopCount = 0;
obj79144_onTap_actionGroup0();
});










/*
 *
 *   obj79141: Event Touch Down
 *
 */
$("#obj79141").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79141_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79141_onTap is still running");
	return;
}
var obj79141_onTap_runningActionsCount = 0;
var obj79141_onTap_loopCount = 0;
obj79141_onTap_actionGroup0();
});




























































/*
 *
 *   obj79113: Event Touch Down
 *
 */
$("#obj79113").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79113_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79113_onTap is still running");
	return;
}
var obj79113_onTap_runningActionsCount = 0;
var obj79113_onTap_loopCount = 0;
obj79113_onTap_actionGroup0();
});










/*
 *
 *   obj79105: Event Touch Down
 *
 */
$("#obj79105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79105_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79105_onTap is still running");
	return;
}
var obj79105_onTap_runningActionsCount = 0;
var obj79105_onTap_loopCount = 0;
obj79105_onTap_actionGroup0();
});










/*
 *
 *   obj87961: Event Touch Down
 *
 */
$("#obj87961").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87961_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87961_onTap is still running");
	return;
}
var obj87961_onTap_runningActionsCount = 0;
var obj87961_onTap_loopCount = 0;
obj87961_onTap_actionGroup0();
});










/*
 *
 *   obj87956: Event Touch Down
 *
 */
$("#obj87956").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87956_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87956_onTap is still running");
	return;
}
var obj87956_onTap_runningActionsCount = 0;
var obj87956_onTap_loopCount = 0;
obj87956_onTap_actionGroup0();
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
	
$("#obj79147").trigger('SCEventShow');
$("#obj79144").trigger('SCEventShow');
$("#obj79141").trigger('SCEventShow');
$("#obj79139").trigger('SCEventShow');
$("#obj79137").trigger('SCEventShow');
$("#obj79135").trigger('SCEventShow');
$("#obj79133").trigger('SCEventShow');
$("#obj79131").trigger('SCEventShow');
$("#obj79113").trigger('SCEventShow');
$("#obj79105").trigger('SCEventShow');
$("#obj87961").trigger('SCEventShow');
$("#obj87956").trigger('SCEventShow');
$("#obj87966").trigger('SCEventShow');
$("#obj94811").trigger('SCEventShow');
$("#obj79103").trigger('SCEventShow');
	
});