pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 720;
pubcoder.page.title = pubcoder.page.title || "8";
pubcoder.page.number = pubcoder.page.number || 8;
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
var obj726_onTap_activeActionGroupIndex = -1;
var obj726_onTap_runningActionsCount = 0;
var obj726_onTap_loopCount = 0;
var obj723_onTap_activeActionGroupIndex = -1;
var obj723_onTap_runningActionsCount = 0;
var obj723_onTap_loopCount = 0;
var obj65086_onTap_activeActionGroupIndex = -1;
var obj65086_onTap_runningActionsCount = 0;
var obj65086_onTap_loopCount = 0;
var obj65078_onTap_activeActionGroupIndex = -1;
var obj65078_onTap_runningActionsCount = 0;
var obj65078_onTap_loopCount = 0;
var obj86877_onTap_activeActionGroupIndex = -1;
var obj86877_onTap_runningActionsCount = 0;
var obj86877_onTap_loopCount = 0;
var obj86872_onTap_activeActionGroupIndex = -1;
var obj86872_onTap_runningActionsCount = 0;
var obj86872_onTap_loopCount = 0;
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
		
obj726_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj726_onTap_activeActionGroupIndex = -1;
		$("#obj726").trigger("obj726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 726) {
				console.warn("de-queueing event obj726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj726_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_728();
function goToPage_728() {
	window.obj726_onTap_runningActionsCount = obj726_onTap_runningActionsCount + 1;
	$("#anchor56")[0].click();
	window.obj726_onTap_runningActionsCount = window.obj726_onTap_runningActionsCount - 1;
if (window.obj726_onTap_runningActionsCount < 0) {
	window.obj726_onTap_runningActionsCount = 0;
} else if (window.obj726_onTap_runningActionsCount == 0) {
	obj726_onTap_actionGroup1();
}
}





















};
obj726_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj726_onTap_activeActionGroupIndex = -1;
		$("#obj726").trigger("obj726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 726) {
				console.warn("de-queueing event obj726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj726_onTap_activeActionGroupIndex = 1;
	





















};
obj723_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj723_onTap_activeActionGroupIndex = -1;
		$("#obj723").trigger("obj723_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 723) {
				console.warn("de-queueing event obj723." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj723").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj723_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_725();
function goToPage_725() {
	window.obj723_onTap_runningActionsCount = obj723_onTap_runningActionsCount + 1;
	$("#anchor57")[0].click();
	window.obj723_onTap_runningActionsCount = window.obj723_onTap_runningActionsCount - 1;
if (window.obj723_onTap_runningActionsCount < 0) {
	window.obj723_onTap_runningActionsCount = 0;
} else if (window.obj723_onTap_runningActionsCount == 0) {
	obj723_onTap_actionGroup1();
}
}





















};
obj723_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj723_onTap_activeActionGroupIndex = -1;
		$("#obj723").trigger("obj723_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 723) {
				console.warn("de-queueing event obj723." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj723").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj723_onTap_activeActionGroupIndex = 1;
	





















};
obj65086_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65086_onTap_activeActionGroupIndex = -1;
		$("#obj65086").trigger("obj65086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65086) {
				console.warn("de-queueing event obj65086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65086_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65086 
hide_65089();
function hide_65089() {
	var selector = "#obj65086";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65086_onTap_runningActionsCount = obj65086_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65086_onTap_runningActionsCount = window.obj65086_onTap_runningActionsCount - 1;
if (window.obj65086_onTap_runningActionsCount < 0) {
	window.obj65086_onTap_runningActionsCount = 0;
} else if (window.obj65086_onTap_runningActionsCount == 0) {
	obj65086_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65089(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65086_onTap_runningActionsCount = window.obj65086_onTap_runningActionsCount - 1;
if (window.obj65086_onTap_runningActionsCount < 0) {
	window.obj65086_onTap_runningActionsCount = 0;
} else if (window.obj65086_onTap_runningActionsCount == 0) {
	obj65086_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65092 
stopMovie_65088();
function stopMovie_65088() {
	window.obj65086_onTap_runningActionsCount = obj65086_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65092")[0];
	myVideo.pause();
	window.obj65086_onTap_runningActionsCount = window.obj65086_onTap_runningActionsCount - 1;
if (window.obj65086_onTap_runningActionsCount < 0) {
	window.obj65086_onTap_runningActionsCount = 0;
} else if (window.obj65086_onTap_runningActionsCount == 0) {
	obj65086_onTap_actionGroup1();
}
}
















};
obj65086_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65086_onTap_activeActionGroupIndex = -1;
		$("#obj65086").trigger("obj65086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65086) {
				console.warn("de-queueing event obj65086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65086_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65078
(function(){
	window.obj65086_onTap_runningActionsCount = obj65086_onTap_runningActionsCount + 1;

	var selector = "#obj65078";
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
					window.obj65086_onTap_runningActionsCount = window.obj65086_onTap_runningActionsCount - 1;
if (window.obj65086_onTap_runningActionsCount < 0) {
	window.obj65086_onTap_runningActionsCount = 0;
} else if (window.obj65086_onTap_runningActionsCount == 0) {
	obj65086_onTap_actionGroup2();
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
				window.obj65086_onTap_runningActionsCount = window.obj65086_onTap_runningActionsCount - 1;
if (window.obj65086_onTap_runningActionsCount < 0) {
	window.obj65086_onTap_runningActionsCount = 0;
} else if (window.obj65086_onTap_runningActionsCount == 0) {
	obj65086_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65086_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65086_onTap_activeActionGroupIndex = -1;
		$("#obj65086").trigger("obj65086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65086) {
				console.warn("de-queueing event obj65086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65086_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65092 
move_65091();
function move_65091() {
	window.obj65086_onTap_runningActionsCount = obj65086_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65092");
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
			window.obj65086_onTap_runningActionsCount = window.obj65086_onTap_runningActionsCount - 1;
if (window.obj65086_onTap_runningActionsCount < 0) {
	window.obj65086_onTap_runningActionsCount = 0;
} else if (window.obj65086_onTap_runningActionsCount == 0) {
	obj65086_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65086_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65086_onTap_activeActionGroupIndex = -1;
		$("#obj65086").trigger("obj65086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65086) {
				console.warn("de-queueing event obj65086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65086_onTap_activeActionGroupIndex = 3;
	





















};
obj65078_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65078_onTap_activeActionGroupIndex = -1;
		$("#obj65078").trigger("obj65078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65078) {
				console.warn("de-queueing event obj65078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65078_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65078 
hide_65081();
function hide_65081() {
	var selector = "#obj65078";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65078_onTap_runningActionsCount = obj65078_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65078_onTap_runningActionsCount = window.obj65078_onTap_runningActionsCount - 1;
if (window.obj65078_onTap_runningActionsCount < 0) {
	window.obj65078_onTap_runningActionsCount = 0;
} else if (window.obj65078_onTap_runningActionsCount == 0) {
	obj65078_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65081(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65078_onTap_runningActionsCount = window.obj65078_onTap_runningActionsCount - 1;
if (window.obj65078_onTap_runningActionsCount < 0) {
	window.obj65078_onTap_runningActionsCount = 0;
} else if (window.obj65078_onTap_runningActionsCount == 0) {
	obj65078_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65092 
playPauseMovie_65080();
function playPauseMovie_65080() {
	window.obj65078_onTap_runningActionsCount = obj65078_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65092")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65078_onTap_runningActionsCount = window.obj65078_onTap_runningActionsCount - 1;
if (window.obj65078_onTap_runningActionsCount < 0) {
	window.obj65078_onTap_runningActionsCount = 0;
} else if (window.obj65078_onTap_runningActionsCount == 0) {
	obj65078_onTap_actionGroup1();
}
}

















};
obj65078_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65078_onTap_activeActionGroupIndex = -1;
		$("#obj65078").trigger("obj65078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65078) {
				console.warn("de-queueing event obj65078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65078_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65086
(function(){
	window.obj65078_onTap_runningActionsCount = obj65078_onTap_runningActionsCount + 1;

	var selector = "#obj65086";
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
					window.obj65078_onTap_runningActionsCount = window.obj65078_onTap_runningActionsCount - 1;
if (window.obj65078_onTap_runningActionsCount < 0) {
	window.obj65078_onTap_runningActionsCount = 0;
} else if (window.obj65078_onTap_runningActionsCount == 0) {
	obj65078_onTap_actionGroup2();
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
				window.obj65078_onTap_runningActionsCount = window.obj65078_onTap_runningActionsCount - 1;
if (window.obj65078_onTap_runningActionsCount < 0) {
	window.obj65078_onTap_runningActionsCount = 0;
} else if (window.obj65078_onTap_runningActionsCount == 0) {
	obj65078_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65078_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65078_onTap_activeActionGroupIndex = -1;
		$("#obj65078").trigger("obj65078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65078) {
				console.warn("de-queueing event obj65078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65078_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65092 
move_65083();
function move_65083() {
	window.obj65078_onTap_runningActionsCount = obj65078_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65092");
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
			window.obj65078_onTap_runningActionsCount = window.obj65078_onTap_runningActionsCount - 1;
if (window.obj65078_onTap_runningActionsCount < 0) {
	window.obj65078_onTap_runningActionsCount = 0;
} else if (window.obj65078_onTap_runningActionsCount == 0) {
	obj65078_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65078_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65078_onTap_activeActionGroupIndex = -1;
		$("#obj65078").trigger("obj65078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65078) {
				console.warn("de-queueing event obj65078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65078_onTap_activeActionGroupIndex = 3;
	





















};
obj86877_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86877_onTap_activeActionGroupIndex = -1;
		$("#obj86877").trigger("obj86877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86877) {
				console.warn("de-queueing event obj86877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86877_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86882 
stopAudio_86879();
function stopAudio_86879() {
	window.obj86877_onTap_runningActionsCount = obj86877_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86882")[0];
	myAudio.pause();
	window.obj86877_onTap_runningActionsCount = window.obj86877_onTap_runningActionsCount - 1;
if (window.obj86877_onTap_runningActionsCount < 0) {
	window.obj86877_onTap_runningActionsCount = 0;
} else if (window.obj86877_onTap_runningActionsCount == 0) {
	obj86877_onTap_actionGroup1();
}
}








};
obj86877_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86877_onTap_activeActionGroupIndex = -1;
		$("#obj86877").trigger("obj86877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86877) {
				console.warn("de-queueing event obj86877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86877_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86877 
hide_86880();
function hide_86880() {
	var selector = "#obj86877";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86877_onTap_runningActionsCount = obj86877_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86877_onTap_runningActionsCount = window.obj86877_onTap_runningActionsCount - 1;
if (window.obj86877_onTap_runningActionsCount < 0) {
	window.obj86877_onTap_runningActionsCount = 0;
} else if (window.obj86877_onTap_runningActionsCount == 0) {
	obj86877_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86880(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86877_onTap_runningActionsCount = window.obj86877_onTap_runningActionsCount - 1;
if (window.obj86877_onTap_runningActionsCount < 0) {
	window.obj86877_onTap_runningActionsCount = 0;
} else if (window.obj86877_onTap_runningActionsCount == 0) {
	obj86877_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86877_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86877_onTap_activeActionGroupIndex = -1;
		$("#obj86877").trigger("obj86877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86877) {
				console.warn("de-queueing event obj86877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86877_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86872
(function(){
	window.obj86877_onTap_runningActionsCount = obj86877_onTap_runningActionsCount + 1;

	var selector = "#obj86872";
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
					window.obj86877_onTap_runningActionsCount = window.obj86877_onTap_runningActionsCount - 1;
if (window.obj86877_onTap_runningActionsCount < 0) {
	window.obj86877_onTap_runningActionsCount = 0;
} else if (window.obj86877_onTap_runningActionsCount == 0) {
	obj86877_onTap_actionGroup3();
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
				window.obj86877_onTap_runningActionsCount = window.obj86877_onTap_runningActionsCount - 1;
if (window.obj86877_onTap_runningActionsCount < 0) {
	window.obj86877_onTap_runningActionsCount = 0;
} else if (window.obj86877_onTap_runningActionsCount == 0) {
	obj86877_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86877_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86877_onTap_activeActionGroupIndex = -1;
		$("#obj86877").trigger("obj86877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86877) {
				console.warn("de-queueing event obj86877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86877_onTap_activeActionGroupIndex = 3;
	





















};
obj86872_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86872_onTap_activeActionGroupIndex = -1;
		$("#obj86872").trigger("obj86872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86872) {
				console.warn("de-queueing event obj86872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86872_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86872 
hide_86874();
function hide_86874() {
	var selector = "#obj86872";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86872_onTap_runningActionsCount = obj86872_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86872_onTap_runningActionsCount = window.obj86872_onTap_runningActionsCount - 1;
if (window.obj86872_onTap_runningActionsCount < 0) {
	window.obj86872_onTap_runningActionsCount = 0;
} else if (window.obj86872_onTap_runningActionsCount == 0) {
	obj86872_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86874(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86872_onTap_runningActionsCount = window.obj86872_onTap_runningActionsCount - 1;
if (window.obj86872_onTap_runningActionsCount < 0) {
	window.obj86872_onTap_runningActionsCount = 0;
} else if (window.obj86872_onTap_runningActionsCount == 0) {
	obj86872_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86872_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86872_onTap_activeActionGroupIndex = -1;
		$("#obj86872").trigger("obj86872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86872) {
				console.warn("de-queueing event obj86872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86872_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86877
(function(){
	window.obj86872_onTap_runningActionsCount = obj86872_onTap_runningActionsCount + 1;

	var selector = "#obj86877";
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
					window.obj86872_onTap_runningActionsCount = window.obj86872_onTap_runningActionsCount - 1;
if (window.obj86872_onTap_runningActionsCount < 0) {
	window.obj86872_onTap_runningActionsCount = 0;
} else if (window.obj86872_onTap_runningActionsCount == 0) {
	obj86872_onTap_actionGroup2();
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
				window.obj86872_onTap_runningActionsCount = window.obj86872_onTap_runningActionsCount - 1;
if (window.obj86872_onTap_runningActionsCount < 0) {
	window.obj86872_onTap_runningActionsCount = 0;
} else if (window.obj86872_onTap_runningActionsCount == 0) {
	obj86872_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86872_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86872_onTap_activeActionGroupIndex = -1;
		$("#obj86872").trigger("obj86872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86872) {
				console.warn("de-queueing event obj86872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86872_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86882 
playAudio_86876();
function playAudio_86876() {
	window.obj86872_onTap_runningActionsCount = obj86872_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86882")[0];
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
		    window.obj86872_onTap_runningActionsCount = window.obj86872_onTap_runningActionsCount - 1;
if (window.obj86872_onTap_runningActionsCount < 0) {
	window.obj86872_onTap_runningActionsCount = 0;
} else if (window.obj86872_onTap_runningActionsCount == 0) {
	obj86872_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86872_onTap_runningActionsCount = window.obj86872_onTap_runningActionsCount - 1;
if (window.obj86872_onTap_runningActionsCount < 0) {
	window.obj86872_onTap_runningActionsCount = 0;
} else if (window.obj86872_onTap_runningActionsCount == 0) {
	obj86872_onTap_actionGroup3();
}
	}
}









};
obj86872_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86872_onTap_activeActionGroupIndex = -1;
		$("#obj86872").trigger("obj86872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86872) {
				console.warn("de-queueing event obj86872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86872_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj726: Event Touch Down
 *
 */
$("#obj726").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj726_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj726_onTap is still running");
	return;
}
var obj726_onTap_runningActionsCount = 0;
var obj726_onTap_loopCount = 0;
obj726_onTap_actionGroup0();
});










/*
 *
 *   obj723: Event Touch Down
 *
 */
$("#obj723").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj723_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj723_onTap is still running");
	return;
}
var obj723_onTap_runningActionsCount = 0;
var obj723_onTap_loopCount = 0;
obj723_onTap_actionGroup0();
});








































/*
 *
 *   obj65086: Event Touch Down
 *
 */
$("#obj65086").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65086_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65086_onTap is still running");
	return;
}
var obj65086_onTap_runningActionsCount = 0;
var obj65086_onTap_loopCount = 0;
obj65086_onTap_actionGroup0();
});










/*
 *
 *   obj65078: Event Touch Down
 *
 */
$("#obj65078").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65078_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65078_onTap is still running");
	return;
}
var obj65078_onTap_runningActionsCount = 0;
var obj65078_onTap_loopCount = 0;
obj65078_onTap_actionGroup0();
});










/*
 *
 *   obj86877: Event Touch Down
 *
 */
$("#obj86877").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86877_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86877_onTap is still running");
	return;
}
var obj86877_onTap_runningActionsCount = 0;
var obj86877_onTap_loopCount = 0;
obj86877_onTap_actionGroup0();
});










/*
 *
 *   obj86872: Event Touch Down
 *
 */
$("#obj86872").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86872_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86872_onTap is still running");
	return;
}
var obj86872_onTap_runningActionsCount = 0;
var obj86872_onTap_loopCount = 0;
obj86872_onTap_actionGroup0();
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
	
$("#obj721").trigger('SCEventShow');
$("#obj726").trigger('SCEventShow');
$("#obj723").trigger('SCEventShow');
$("#obj758").trigger('SCEventShow');
$("#obj754").trigger('SCEventShow');
$("#obj756").trigger('SCEventShow');
$("#obj65086").trigger('SCEventShow');
$("#obj65078").trigger('SCEventShow');
$("#obj86877").trigger('SCEventShow');
$("#obj86872").trigger('SCEventShow');
$("#obj86882").trigger('SCEventShow');
$("#obj94645").trigger('SCEventShow');
$("#obj65092").trigger('SCEventShow');
	
});