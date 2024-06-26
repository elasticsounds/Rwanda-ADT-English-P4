pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 59;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 5;
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
var obj75_onTap_activeActionGroupIndex = -1;
var obj75_onTap_runningActionsCount = 0;
var obj75_onTap_loopCount = 0;
var obj78_onTap_activeActionGroupIndex = -1;
var obj78_onTap_runningActionsCount = 0;
var obj78_onTap_loopCount = 0;
var obj65038_onTap_activeActionGroupIndex = -1;
var obj65038_onTap_runningActionsCount = 0;
var obj65038_onTap_loopCount = 0;
var obj65030_onTap_activeActionGroupIndex = -1;
var obj65030_onTap_runningActionsCount = 0;
var obj65030_onTap_loopCount = 0;
var obj86807_onTap_activeActionGroupIndex = -1;
var obj86807_onTap_runningActionsCount = 0;
var obj86807_onTap_loopCount = 0;
var obj86802_onTap_activeActionGroupIndex = -1;
var obj86802_onTap_runningActionsCount = 0;
var obj86802_onTap_loopCount = 0;
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
		
obj75_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75_onTap_activeActionGroupIndex = -1;
		$("#obj75").trigger("obj75_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75) {
				console.warn("de-queueing event obj75." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77();
function goToPage_77() {
	window.obj75_onTap_runningActionsCount = obj75_onTap_runningActionsCount + 1;
	$("#anchor41")[0].click();
	window.obj75_onTap_runningActionsCount = window.obj75_onTap_runningActionsCount - 1;
if (window.obj75_onTap_runningActionsCount < 0) {
	window.obj75_onTap_runningActionsCount = 0;
} else if (window.obj75_onTap_runningActionsCount == 0) {
	obj75_onTap_actionGroup1();
}
}





















};
obj75_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75_onTap_activeActionGroupIndex = -1;
		$("#obj75").trigger("obj75_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75) {
				console.warn("de-queueing event obj75." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75_onTap_activeActionGroupIndex = 1;
	





















};
obj78_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78_onTap_activeActionGroupIndex = -1;
		$("#obj78").trigger("obj78_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78) {
				console.warn("de-queueing event obj78." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80();
function goToPage_80() {
	window.obj78_onTap_runningActionsCount = obj78_onTap_runningActionsCount + 1;
	$("#anchor42")[0].click();
	window.obj78_onTap_runningActionsCount = window.obj78_onTap_runningActionsCount - 1;
if (window.obj78_onTap_runningActionsCount < 0) {
	window.obj78_onTap_runningActionsCount = 0;
} else if (window.obj78_onTap_runningActionsCount == 0) {
	obj78_onTap_actionGroup1();
}
}





















};
obj78_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78_onTap_activeActionGroupIndex = -1;
		$("#obj78").trigger("obj78_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78) {
				console.warn("de-queueing event obj78." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78_onTap_activeActionGroupIndex = 1;
	





















};
obj65038_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65038_onTap_activeActionGroupIndex = -1;
		$("#obj65038").trigger("obj65038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65038) {
				console.warn("de-queueing event obj65038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65038_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65038 
hide_65041();
function hide_65041() {
	var selector = "#obj65038";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65038_onTap_runningActionsCount = obj65038_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65038_onTap_runningActionsCount = window.obj65038_onTap_runningActionsCount - 1;
if (window.obj65038_onTap_runningActionsCount < 0) {
	window.obj65038_onTap_runningActionsCount = 0;
} else if (window.obj65038_onTap_runningActionsCount == 0) {
	obj65038_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65041(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65038_onTap_runningActionsCount = window.obj65038_onTap_runningActionsCount - 1;
if (window.obj65038_onTap_runningActionsCount < 0) {
	window.obj65038_onTap_runningActionsCount = 0;
} else if (window.obj65038_onTap_runningActionsCount == 0) {
	obj65038_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65044 
stopMovie_65040();
function stopMovie_65040() {
	window.obj65038_onTap_runningActionsCount = obj65038_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65044")[0];
	myVideo.pause();
	window.obj65038_onTap_runningActionsCount = window.obj65038_onTap_runningActionsCount - 1;
if (window.obj65038_onTap_runningActionsCount < 0) {
	window.obj65038_onTap_runningActionsCount = 0;
} else if (window.obj65038_onTap_runningActionsCount == 0) {
	obj65038_onTap_actionGroup1();
}
}
















};
obj65038_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65038_onTap_activeActionGroupIndex = -1;
		$("#obj65038").trigger("obj65038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65038) {
				console.warn("de-queueing event obj65038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65038_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65030
(function(){
	window.obj65038_onTap_runningActionsCount = obj65038_onTap_runningActionsCount + 1;

	var selector = "#obj65030";
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
					window.obj65038_onTap_runningActionsCount = window.obj65038_onTap_runningActionsCount - 1;
if (window.obj65038_onTap_runningActionsCount < 0) {
	window.obj65038_onTap_runningActionsCount = 0;
} else if (window.obj65038_onTap_runningActionsCount == 0) {
	obj65038_onTap_actionGroup2();
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
				window.obj65038_onTap_runningActionsCount = window.obj65038_onTap_runningActionsCount - 1;
if (window.obj65038_onTap_runningActionsCount < 0) {
	window.obj65038_onTap_runningActionsCount = 0;
} else if (window.obj65038_onTap_runningActionsCount == 0) {
	obj65038_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65038_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65038_onTap_activeActionGroupIndex = -1;
		$("#obj65038").trigger("obj65038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65038) {
				console.warn("de-queueing event obj65038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65038_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65044 
move_65043();
function move_65043() {
	window.obj65038_onTap_runningActionsCount = obj65038_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65044");
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
			window.obj65038_onTap_runningActionsCount = window.obj65038_onTap_runningActionsCount - 1;
if (window.obj65038_onTap_runningActionsCount < 0) {
	window.obj65038_onTap_runningActionsCount = 0;
} else if (window.obj65038_onTap_runningActionsCount == 0) {
	obj65038_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65038_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65038_onTap_activeActionGroupIndex = -1;
		$("#obj65038").trigger("obj65038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65038) {
				console.warn("de-queueing event obj65038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65038_onTap_activeActionGroupIndex = 3;
	





















};
obj65030_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65030_onTap_activeActionGroupIndex = -1;
		$("#obj65030").trigger("obj65030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65030) {
				console.warn("de-queueing event obj65030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65030_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65030 
hide_65033();
function hide_65033() {
	var selector = "#obj65030";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65030_onTap_runningActionsCount = obj65030_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65030_onTap_runningActionsCount = window.obj65030_onTap_runningActionsCount - 1;
if (window.obj65030_onTap_runningActionsCount < 0) {
	window.obj65030_onTap_runningActionsCount = 0;
} else if (window.obj65030_onTap_runningActionsCount == 0) {
	obj65030_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65033(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65030_onTap_runningActionsCount = window.obj65030_onTap_runningActionsCount - 1;
if (window.obj65030_onTap_runningActionsCount < 0) {
	window.obj65030_onTap_runningActionsCount = 0;
} else if (window.obj65030_onTap_runningActionsCount == 0) {
	obj65030_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65044 
playPauseMovie_65032();
function playPauseMovie_65032() {
	window.obj65030_onTap_runningActionsCount = obj65030_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65044")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65030_onTap_runningActionsCount = window.obj65030_onTap_runningActionsCount - 1;
if (window.obj65030_onTap_runningActionsCount < 0) {
	window.obj65030_onTap_runningActionsCount = 0;
} else if (window.obj65030_onTap_runningActionsCount == 0) {
	obj65030_onTap_actionGroup1();
}
}

















};
obj65030_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65030_onTap_activeActionGroupIndex = -1;
		$("#obj65030").trigger("obj65030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65030) {
				console.warn("de-queueing event obj65030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65030_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65038
(function(){
	window.obj65030_onTap_runningActionsCount = obj65030_onTap_runningActionsCount + 1;

	var selector = "#obj65038";
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
					window.obj65030_onTap_runningActionsCount = window.obj65030_onTap_runningActionsCount - 1;
if (window.obj65030_onTap_runningActionsCount < 0) {
	window.obj65030_onTap_runningActionsCount = 0;
} else if (window.obj65030_onTap_runningActionsCount == 0) {
	obj65030_onTap_actionGroup2();
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
				window.obj65030_onTap_runningActionsCount = window.obj65030_onTap_runningActionsCount - 1;
if (window.obj65030_onTap_runningActionsCount < 0) {
	window.obj65030_onTap_runningActionsCount = 0;
} else if (window.obj65030_onTap_runningActionsCount == 0) {
	obj65030_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65030_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65030_onTap_activeActionGroupIndex = -1;
		$("#obj65030").trigger("obj65030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65030) {
				console.warn("de-queueing event obj65030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65030_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65044 
move_65035();
function move_65035() {
	window.obj65030_onTap_runningActionsCount = obj65030_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65044");
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
			window.obj65030_onTap_runningActionsCount = window.obj65030_onTap_runningActionsCount - 1;
if (window.obj65030_onTap_runningActionsCount < 0) {
	window.obj65030_onTap_runningActionsCount = 0;
} else if (window.obj65030_onTap_runningActionsCount == 0) {
	obj65030_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65030_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65030_onTap_activeActionGroupIndex = -1;
		$("#obj65030").trigger("obj65030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65030) {
				console.warn("de-queueing event obj65030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65030_onTap_activeActionGroupIndex = 3;
	





















};
obj86807_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86807_onTap_activeActionGroupIndex = -1;
		$("#obj86807").trigger("obj86807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86807) {
				console.warn("de-queueing event obj86807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86807_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86812 
stopAudio_86809();
function stopAudio_86809() {
	window.obj86807_onTap_runningActionsCount = obj86807_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86812")[0];
	myAudio.pause();
	window.obj86807_onTap_runningActionsCount = window.obj86807_onTap_runningActionsCount - 1;
if (window.obj86807_onTap_runningActionsCount < 0) {
	window.obj86807_onTap_runningActionsCount = 0;
} else if (window.obj86807_onTap_runningActionsCount == 0) {
	obj86807_onTap_actionGroup1();
}
}








};
obj86807_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86807_onTap_activeActionGroupIndex = -1;
		$("#obj86807").trigger("obj86807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86807) {
				console.warn("de-queueing event obj86807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86807_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86807 
hide_86810();
function hide_86810() {
	var selector = "#obj86807";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86807_onTap_runningActionsCount = obj86807_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86807_onTap_runningActionsCount = window.obj86807_onTap_runningActionsCount - 1;
if (window.obj86807_onTap_runningActionsCount < 0) {
	window.obj86807_onTap_runningActionsCount = 0;
} else if (window.obj86807_onTap_runningActionsCount == 0) {
	obj86807_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86810(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86807_onTap_runningActionsCount = window.obj86807_onTap_runningActionsCount - 1;
if (window.obj86807_onTap_runningActionsCount < 0) {
	window.obj86807_onTap_runningActionsCount = 0;
} else if (window.obj86807_onTap_runningActionsCount == 0) {
	obj86807_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86807_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86807_onTap_activeActionGroupIndex = -1;
		$("#obj86807").trigger("obj86807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86807) {
				console.warn("de-queueing event obj86807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86807_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86802
(function(){
	window.obj86807_onTap_runningActionsCount = obj86807_onTap_runningActionsCount + 1;

	var selector = "#obj86802";
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
					window.obj86807_onTap_runningActionsCount = window.obj86807_onTap_runningActionsCount - 1;
if (window.obj86807_onTap_runningActionsCount < 0) {
	window.obj86807_onTap_runningActionsCount = 0;
} else if (window.obj86807_onTap_runningActionsCount == 0) {
	obj86807_onTap_actionGroup3();
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
				window.obj86807_onTap_runningActionsCount = window.obj86807_onTap_runningActionsCount - 1;
if (window.obj86807_onTap_runningActionsCount < 0) {
	window.obj86807_onTap_runningActionsCount = 0;
} else if (window.obj86807_onTap_runningActionsCount == 0) {
	obj86807_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86807_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86807_onTap_activeActionGroupIndex = -1;
		$("#obj86807").trigger("obj86807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86807) {
				console.warn("de-queueing event obj86807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86807_onTap_activeActionGroupIndex = 3;
	





















};
obj86802_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86802_onTap_activeActionGroupIndex = -1;
		$("#obj86802").trigger("obj86802_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86802) {
				console.warn("de-queueing event obj86802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86802_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86802 
hide_86804();
function hide_86804() {
	var selector = "#obj86802";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86802_onTap_runningActionsCount = obj86802_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86802_onTap_runningActionsCount = window.obj86802_onTap_runningActionsCount - 1;
if (window.obj86802_onTap_runningActionsCount < 0) {
	window.obj86802_onTap_runningActionsCount = 0;
} else if (window.obj86802_onTap_runningActionsCount == 0) {
	obj86802_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86804(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86802_onTap_runningActionsCount = window.obj86802_onTap_runningActionsCount - 1;
if (window.obj86802_onTap_runningActionsCount < 0) {
	window.obj86802_onTap_runningActionsCount = 0;
} else if (window.obj86802_onTap_runningActionsCount == 0) {
	obj86802_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86802_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86802_onTap_activeActionGroupIndex = -1;
		$("#obj86802").trigger("obj86802_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86802) {
				console.warn("de-queueing event obj86802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86802_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86807
(function(){
	window.obj86802_onTap_runningActionsCount = obj86802_onTap_runningActionsCount + 1;

	var selector = "#obj86807";
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
					window.obj86802_onTap_runningActionsCount = window.obj86802_onTap_runningActionsCount - 1;
if (window.obj86802_onTap_runningActionsCount < 0) {
	window.obj86802_onTap_runningActionsCount = 0;
} else if (window.obj86802_onTap_runningActionsCount == 0) {
	obj86802_onTap_actionGroup2();
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
				window.obj86802_onTap_runningActionsCount = window.obj86802_onTap_runningActionsCount - 1;
if (window.obj86802_onTap_runningActionsCount < 0) {
	window.obj86802_onTap_runningActionsCount = 0;
} else if (window.obj86802_onTap_runningActionsCount == 0) {
	obj86802_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86802_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86802_onTap_activeActionGroupIndex = -1;
		$("#obj86802").trigger("obj86802_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86802) {
				console.warn("de-queueing event obj86802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86802_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86812 
playAudio_86806();
function playAudio_86806() {
	window.obj86802_onTap_runningActionsCount = obj86802_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86812")[0];
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
		    window.obj86802_onTap_runningActionsCount = window.obj86802_onTap_runningActionsCount - 1;
if (window.obj86802_onTap_runningActionsCount < 0) {
	window.obj86802_onTap_runningActionsCount = 0;
} else if (window.obj86802_onTap_runningActionsCount == 0) {
	obj86802_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86802_onTap_runningActionsCount = window.obj86802_onTap_runningActionsCount - 1;
if (window.obj86802_onTap_runningActionsCount < 0) {
	window.obj86802_onTap_runningActionsCount = 0;
} else if (window.obj86802_onTap_runningActionsCount == 0) {
	obj86802_onTap_actionGroup3();
}
	}
}









};
obj86802_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86802_onTap_activeActionGroupIndex = -1;
		$("#obj86802").trigger("obj86802_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86802) {
				console.warn("de-queueing event obj86802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86802_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75: Event Touch Down
 *
 */
$("#obj75").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75_onTap is still running");
	return;
}
var obj75_onTap_runningActionsCount = 0;
var obj75_onTap_loopCount = 0;
obj75_onTap_actionGroup0();
});










/*
 *
 *   obj78: Event Touch Down
 *
 */
$("#obj78").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78_onTap is still running");
	return;
}
var obj78_onTap_runningActionsCount = 0;
var obj78_onTap_loopCount = 0;
obj78_onTap_actionGroup0();
});






























/*
 *
 *   obj65038: Event Touch Down
 *
 */
$("#obj65038").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65038_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65038_onTap is still running");
	return;
}
var obj65038_onTap_runningActionsCount = 0;
var obj65038_onTap_loopCount = 0;
obj65038_onTap_actionGroup0();
});










/*
 *
 *   obj65030: Event Touch Down
 *
 */
$("#obj65030").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65030_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65030_onTap is still running");
	return;
}
var obj65030_onTap_runningActionsCount = 0;
var obj65030_onTap_loopCount = 0;
obj65030_onTap_actionGroup0();
});










/*
 *
 *   obj86807: Event Touch Down
 *
 */
$("#obj86807").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86807_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86807_onTap is still running");
	return;
}
var obj86807_onTap_runningActionsCount = 0;
var obj86807_onTap_loopCount = 0;
obj86807_onTap_actionGroup0();
});










/*
 *
 *   obj86802: Event Touch Down
 *
 */
$("#obj86802").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86802_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86802_onTap is still running");
	return;
}
var obj86802_onTap_runningActionsCount = 0;
var obj86802_onTap_loopCount = 0;
obj86802_onTap_actionGroup0();
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
	
$("#obj60").trigger('SCEventShow');
$("#obj75").trigger('SCEventShow');
$("#obj78").trigger('SCEventShow');
$("#obj81").trigger('SCEventShow');
$("#obj83").trigger('SCEventShow');
$("#obj65038").trigger('SCEventShow');
$("#obj65030").trigger('SCEventShow');
$("#obj86807").trigger('SCEventShow');
$("#obj86802").trigger('SCEventShow');
$("#obj86812").trigger('SCEventShow');
$("#obj94639").trigger('SCEventShow');
$("#obj65044").trigger('SCEventShow');
	
});