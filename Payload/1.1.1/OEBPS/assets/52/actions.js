pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 11200;
pubcoder.page.title = pubcoder.page.title || "52";
pubcoder.page.number = pubcoder.page.number || 52;
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
var obj71849_onTap_activeActionGroupIndex = -1;
var obj71849_onTap_runningActionsCount = 0;
var obj71849_onTap_loopCount = 0;
var obj71846_onTap_activeActionGroupIndex = -1;
var obj71846_onTap_runningActionsCount = 0;
var obj71846_onTap_loopCount = 0;
var obj71813_onTap_activeActionGroupIndex = -1;
var obj71813_onTap_runningActionsCount = 0;
var obj71813_onTap_loopCount = 0;
var obj71805_onTap_activeActionGroupIndex = -1;
var obj71805_onTap_runningActionsCount = 0;
var obj71805_onTap_loopCount = 0;
var obj87375_onTap_activeActionGroupIndex = -1;
var obj87375_onTap_runningActionsCount = 0;
var obj87375_onTap_loopCount = 0;
var obj87370_onTap_activeActionGroupIndex = -1;
var obj87370_onTap_runningActionsCount = 0;
var obj87370_onTap_loopCount = 0;
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
		
obj71849_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71849_onTap_activeActionGroupIndex = -1;
		$("#obj71849").trigger("obj71849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71849) {
				console.warn("de-queueing event obj71849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71849_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71851();
function goToPage_71851() {
	window.obj71849_onTap_runningActionsCount = obj71849_onTap_runningActionsCount + 1;
	$("#anchor315")[0].click();
	window.obj71849_onTap_runningActionsCount = window.obj71849_onTap_runningActionsCount - 1;
if (window.obj71849_onTap_runningActionsCount < 0) {
	window.obj71849_onTap_runningActionsCount = 0;
} else if (window.obj71849_onTap_runningActionsCount == 0) {
	obj71849_onTap_actionGroup1();
}
}





















};
obj71849_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71849_onTap_activeActionGroupIndex = -1;
		$("#obj71849").trigger("obj71849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71849) {
				console.warn("de-queueing event obj71849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71849_onTap_activeActionGroupIndex = 1;
	





















};
obj71846_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71846_onTap_activeActionGroupIndex = -1;
		$("#obj71846").trigger("obj71846_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71846) {
				console.warn("de-queueing event obj71846." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71846").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71846_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71848();
function goToPage_71848() {
	window.obj71846_onTap_runningActionsCount = obj71846_onTap_runningActionsCount + 1;
	$("#anchor316")[0].click();
	window.obj71846_onTap_runningActionsCount = window.obj71846_onTap_runningActionsCount - 1;
if (window.obj71846_onTap_runningActionsCount < 0) {
	window.obj71846_onTap_runningActionsCount = 0;
} else if (window.obj71846_onTap_runningActionsCount == 0) {
	obj71846_onTap_actionGroup1();
}
}





















};
obj71846_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71846_onTap_activeActionGroupIndex = -1;
		$("#obj71846").trigger("obj71846_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71846) {
				console.warn("de-queueing event obj71846." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71846").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71846_onTap_activeActionGroupIndex = 1;
	





















};
obj71813_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71813_onTap_activeActionGroupIndex = -1;
		$("#obj71813").trigger("obj71813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71813) {
				console.warn("de-queueing event obj71813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71813_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71813 
hide_71816();
function hide_71816() {
	var selector = "#obj71813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71813_onTap_runningActionsCount = obj71813_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71813_onTap_runningActionsCount = window.obj71813_onTap_runningActionsCount - 1;
if (window.obj71813_onTap_runningActionsCount < 0) {
	window.obj71813_onTap_runningActionsCount = 0;
} else if (window.obj71813_onTap_runningActionsCount == 0) {
	obj71813_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71816(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71813_onTap_runningActionsCount = window.obj71813_onTap_runningActionsCount - 1;
if (window.obj71813_onTap_runningActionsCount < 0) {
	window.obj71813_onTap_runningActionsCount = 0;
} else if (window.obj71813_onTap_runningActionsCount == 0) {
	obj71813_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj71803 
stopMovie_71815();
function stopMovie_71815() {
	window.obj71813_onTap_runningActionsCount = obj71813_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71803")[0];
	myVideo.pause();
	window.obj71813_onTap_runningActionsCount = window.obj71813_onTap_runningActionsCount - 1;
if (window.obj71813_onTap_runningActionsCount < 0) {
	window.obj71813_onTap_runningActionsCount = 0;
} else if (window.obj71813_onTap_runningActionsCount == 0) {
	obj71813_onTap_actionGroup1();
}
}
















};
obj71813_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71813_onTap_activeActionGroupIndex = -1;
		$("#obj71813").trigger("obj71813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71813) {
				console.warn("de-queueing event obj71813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71813_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71805
(function(){
	window.obj71813_onTap_runningActionsCount = obj71813_onTap_runningActionsCount + 1;

	var selector = "#obj71805";
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
					window.obj71813_onTap_runningActionsCount = window.obj71813_onTap_runningActionsCount - 1;
if (window.obj71813_onTap_runningActionsCount < 0) {
	window.obj71813_onTap_runningActionsCount = 0;
} else if (window.obj71813_onTap_runningActionsCount == 0) {
	obj71813_onTap_actionGroup2();
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
				window.obj71813_onTap_runningActionsCount = window.obj71813_onTap_runningActionsCount - 1;
if (window.obj71813_onTap_runningActionsCount < 0) {
	window.obj71813_onTap_runningActionsCount = 0;
} else if (window.obj71813_onTap_runningActionsCount == 0) {
	obj71813_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71813_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71813_onTap_activeActionGroupIndex = -1;
		$("#obj71813").trigger("obj71813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71813) {
				console.warn("de-queueing event obj71813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71813_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71803 
move_71818();
function move_71818() {
	window.obj71813_onTap_runningActionsCount = obj71813_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71803");
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
			window.obj71813_onTap_runningActionsCount = window.obj71813_onTap_runningActionsCount - 1;
if (window.obj71813_onTap_runningActionsCount < 0) {
	window.obj71813_onTap_runningActionsCount = 0;
} else if (window.obj71813_onTap_runningActionsCount == 0) {
	obj71813_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71813_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71813_onTap_activeActionGroupIndex = -1;
		$("#obj71813").trigger("obj71813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71813) {
				console.warn("de-queueing event obj71813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71813_onTap_activeActionGroupIndex = 3;
	





















};
obj71805_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71805_onTap_activeActionGroupIndex = -1;
		$("#obj71805").trigger("obj71805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71805) {
				console.warn("de-queueing event obj71805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71805_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71805 
hide_71808();
function hide_71808() {
	var selector = "#obj71805";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71805_onTap_runningActionsCount = obj71805_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71805_onTap_runningActionsCount = window.obj71805_onTap_runningActionsCount - 1;
if (window.obj71805_onTap_runningActionsCount < 0) {
	window.obj71805_onTap_runningActionsCount = 0;
} else if (window.obj71805_onTap_runningActionsCount == 0) {
	obj71805_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71808(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71805_onTap_runningActionsCount = window.obj71805_onTap_runningActionsCount - 1;
if (window.obj71805_onTap_runningActionsCount < 0) {
	window.obj71805_onTap_runningActionsCount = 0;
} else if (window.obj71805_onTap_runningActionsCount == 0) {
	obj71805_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj71803 
playPauseMovie_71807();
function playPauseMovie_71807() {
	window.obj71805_onTap_runningActionsCount = obj71805_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71803")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj71805_onTap_runningActionsCount = window.obj71805_onTap_runningActionsCount - 1;
if (window.obj71805_onTap_runningActionsCount < 0) {
	window.obj71805_onTap_runningActionsCount = 0;
} else if (window.obj71805_onTap_runningActionsCount == 0) {
	obj71805_onTap_actionGroup1();
}
}

















};
obj71805_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71805_onTap_activeActionGroupIndex = -1;
		$("#obj71805").trigger("obj71805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71805) {
				console.warn("de-queueing event obj71805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71805_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71813
(function(){
	window.obj71805_onTap_runningActionsCount = obj71805_onTap_runningActionsCount + 1;

	var selector = "#obj71813";
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
					window.obj71805_onTap_runningActionsCount = window.obj71805_onTap_runningActionsCount - 1;
if (window.obj71805_onTap_runningActionsCount < 0) {
	window.obj71805_onTap_runningActionsCount = 0;
} else if (window.obj71805_onTap_runningActionsCount == 0) {
	obj71805_onTap_actionGroup2();
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
				window.obj71805_onTap_runningActionsCount = window.obj71805_onTap_runningActionsCount - 1;
if (window.obj71805_onTap_runningActionsCount < 0) {
	window.obj71805_onTap_runningActionsCount = 0;
} else if (window.obj71805_onTap_runningActionsCount == 0) {
	obj71805_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71805_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71805_onTap_activeActionGroupIndex = -1;
		$("#obj71805").trigger("obj71805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71805) {
				console.warn("de-queueing event obj71805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71805_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71803 
move_71810();
function move_71810() {
	window.obj71805_onTap_runningActionsCount = obj71805_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71803");
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
			window.obj71805_onTap_runningActionsCount = window.obj71805_onTap_runningActionsCount - 1;
if (window.obj71805_onTap_runningActionsCount < 0) {
	window.obj71805_onTap_runningActionsCount = 0;
} else if (window.obj71805_onTap_runningActionsCount == 0) {
	obj71805_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71805_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71805_onTap_activeActionGroupIndex = -1;
		$("#obj71805").trigger("obj71805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71805) {
				console.warn("de-queueing event obj71805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71805_onTap_activeActionGroupIndex = 3;
	





















};
obj87375_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87375_onTap_activeActionGroupIndex = -1;
		$("#obj87375").trigger("obj87375_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87375) {
				console.warn("de-queueing event obj87375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87375_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87380 
stopAudio_87377();
function stopAudio_87377() {
	window.obj87375_onTap_runningActionsCount = obj87375_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87380")[0];
	myAudio.pause();
	window.obj87375_onTap_runningActionsCount = window.obj87375_onTap_runningActionsCount - 1;
if (window.obj87375_onTap_runningActionsCount < 0) {
	window.obj87375_onTap_runningActionsCount = 0;
} else if (window.obj87375_onTap_runningActionsCount == 0) {
	obj87375_onTap_actionGroup1();
}
}








};
obj87375_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87375_onTap_activeActionGroupIndex = -1;
		$("#obj87375").trigger("obj87375_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87375) {
				console.warn("de-queueing event obj87375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87375_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87375 
hide_87378();
function hide_87378() {
	var selector = "#obj87375";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87375_onTap_runningActionsCount = obj87375_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87375_onTap_runningActionsCount = window.obj87375_onTap_runningActionsCount - 1;
if (window.obj87375_onTap_runningActionsCount < 0) {
	window.obj87375_onTap_runningActionsCount = 0;
} else if (window.obj87375_onTap_runningActionsCount == 0) {
	obj87375_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87378(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87375_onTap_runningActionsCount = window.obj87375_onTap_runningActionsCount - 1;
if (window.obj87375_onTap_runningActionsCount < 0) {
	window.obj87375_onTap_runningActionsCount = 0;
} else if (window.obj87375_onTap_runningActionsCount == 0) {
	obj87375_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87375_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87375_onTap_activeActionGroupIndex = -1;
		$("#obj87375").trigger("obj87375_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87375) {
				console.warn("de-queueing event obj87375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87375_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87370
(function(){
	window.obj87375_onTap_runningActionsCount = obj87375_onTap_runningActionsCount + 1;

	var selector = "#obj87370";
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
					window.obj87375_onTap_runningActionsCount = window.obj87375_onTap_runningActionsCount - 1;
if (window.obj87375_onTap_runningActionsCount < 0) {
	window.obj87375_onTap_runningActionsCount = 0;
} else if (window.obj87375_onTap_runningActionsCount == 0) {
	obj87375_onTap_actionGroup3();
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
				window.obj87375_onTap_runningActionsCount = window.obj87375_onTap_runningActionsCount - 1;
if (window.obj87375_onTap_runningActionsCount < 0) {
	window.obj87375_onTap_runningActionsCount = 0;
} else if (window.obj87375_onTap_runningActionsCount == 0) {
	obj87375_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87375_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87375_onTap_activeActionGroupIndex = -1;
		$("#obj87375").trigger("obj87375_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87375) {
				console.warn("de-queueing event obj87375." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87375").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87375_onTap_activeActionGroupIndex = 3;
	





















};
obj87370_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87370_onTap_activeActionGroupIndex = -1;
		$("#obj87370").trigger("obj87370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87370) {
				console.warn("de-queueing event obj87370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87370_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87370 
hide_87372();
function hide_87372() {
	var selector = "#obj87370";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87370_onTap_runningActionsCount = obj87370_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87370_onTap_runningActionsCount = window.obj87370_onTap_runningActionsCount - 1;
if (window.obj87370_onTap_runningActionsCount < 0) {
	window.obj87370_onTap_runningActionsCount = 0;
} else if (window.obj87370_onTap_runningActionsCount == 0) {
	obj87370_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87372(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87370_onTap_runningActionsCount = window.obj87370_onTap_runningActionsCount - 1;
if (window.obj87370_onTap_runningActionsCount < 0) {
	window.obj87370_onTap_runningActionsCount = 0;
} else if (window.obj87370_onTap_runningActionsCount == 0) {
	obj87370_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87370_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87370_onTap_activeActionGroupIndex = -1;
		$("#obj87370").trigger("obj87370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87370) {
				console.warn("de-queueing event obj87370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87370_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87375
(function(){
	window.obj87370_onTap_runningActionsCount = obj87370_onTap_runningActionsCount + 1;

	var selector = "#obj87375";
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
					window.obj87370_onTap_runningActionsCount = window.obj87370_onTap_runningActionsCount - 1;
if (window.obj87370_onTap_runningActionsCount < 0) {
	window.obj87370_onTap_runningActionsCount = 0;
} else if (window.obj87370_onTap_runningActionsCount == 0) {
	obj87370_onTap_actionGroup2();
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
				window.obj87370_onTap_runningActionsCount = window.obj87370_onTap_runningActionsCount - 1;
if (window.obj87370_onTap_runningActionsCount < 0) {
	window.obj87370_onTap_runningActionsCount = 0;
} else if (window.obj87370_onTap_runningActionsCount == 0) {
	obj87370_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87370_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87370_onTap_activeActionGroupIndex = -1;
		$("#obj87370").trigger("obj87370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87370) {
				console.warn("de-queueing event obj87370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87370_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87380 
playAudio_87374();
function playAudio_87374() {
	window.obj87370_onTap_runningActionsCount = obj87370_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87380")[0];
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
		    window.obj87370_onTap_runningActionsCount = window.obj87370_onTap_runningActionsCount - 1;
if (window.obj87370_onTap_runningActionsCount < 0) {
	window.obj87370_onTap_runningActionsCount = 0;
} else if (window.obj87370_onTap_runningActionsCount == 0) {
	obj87370_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87370_onTap_runningActionsCount = window.obj87370_onTap_runningActionsCount - 1;
if (window.obj87370_onTap_runningActionsCount < 0) {
	window.obj87370_onTap_runningActionsCount = 0;
} else if (window.obj87370_onTap_runningActionsCount == 0) {
	obj87370_onTap_actionGroup3();
}
	}
}









};
obj87370_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87370_onTap_activeActionGroupIndex = -1;
		$("#obj87370").trigger("obj87370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87370) {
				console.warn("de-queueing event obj87370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87370_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj71849: Event Touch Down
 *
 */
$("#obj71849").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71849_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71849_onTap is still running");
	return;
}
var obj71849_onTap_runningActionsCount = 0;
var obj71849_onTap_loopCount = 0;
obj71849_onTap_actionGroup0();
});










/*
 *
 *   obj71846: Event Touch Down
 *
 */
$("#obj71846").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71846_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71846_onTap is still running");
	return;
}
var obj71846_onTap_runningActionsCount = 0;
var obj71846_onTap_loopCount = 0;
obj71846_onTap_actionGroup0();
});






































































/*
 *
 *   obj71813: Event Touch Down
 *
 */
$("#obj71813").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71813_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71813_onTap is still running");
	return;
}
var obj71813_onTap_runningActionsCount = 0;
var obj71813_onTap_loopCount = 0;
obj71813_onTap_actionGroup0();
});










/*
 *
 *   obj71805: Event Touch Down
 *
 */
$("#obj71805").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71805_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71805_onTap is still running");
	return;
}
var obj71805_onTap_runningActionsCount = 0;
var obj71805_onTap_loopCount = 0;
obj71805_onTap_actionGroup0();
});










/*
 *
 *   obj87375: Event Touch Down
 *
 */
$("#obj87375").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87375_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87375_onTap is still running");
	return;
}
var obj87375_onTap_runningActionsCount = 0;
var obj87375_onTap_loopCount = 0;
obj87375_onTap_actionGroup0();
});










/*
 *
 *   obj87370: Event Touch Down
 *
 */
$("#obj87370").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87370_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87370_onTap is still running");
	return;
}
var obj87370_onTap_runningActionsCount = 0;
var obj87370_onTap_loopCount = 0;
obj87370_onTap_actionGroup0();
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
	
$("#obj71852").trigger('SCEventShow');
$("#obj71849").trigger('SCEventShow');
$("#obj71846").trigger('SCEventShow');
$("#obj71844").trigger('SCEventShow');
$("#obj71842").trigger('SCEventShow');
$("#obj71840").trigger('SCEventShow');
$("#obj71838").trigger('SCEventShow');
$("#obj71836").trigger('SCEventShow');
$("#obj71834").trigger('SCEventShow');
$("#obj71813").trigger('SCEventShow');
$("#obj71805").trigger('SCEventShow');
$("#obj87375").trigger('SCEventShow');
$("#obj87370").trigger('SCEventShow');
$("#obj87380").trigger('SCEventShow');
$("#obj94733").trigger('SCEventShow');
$("#obj71803").trigger('SCEventShow');
	
});