pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 18322;
pubcoder.page.title = pubcoder.page.title || "73";
pubcoder.page.number = pubcoder.page.number || 73;
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
var obj75653_onTap_activeActionGroupIndex = -1;
var obj75653_onTap_runningActionsCount = 0;
var obj75653_onTap_loopCount = 0;
var obj75650_onTap_activeActionGroupIndex = -1;
var obj75650_onTap_runningActionsCount = 0;
var obj75650_onTap_loopCount = 0;
var obj75610_onTap_activeActionGroupIndex = -1;
var obj75610_onTap_runningActionsCount = 0;
var obj75610_onTap_loopCount = 0;
var obj75602_onTap_activeActionGroupIndex = -1;
var obj75602_onTap_runningActionsCount = 0;
var obj75602_onTap_loopCount = 0;
var obj87717_onTap_activeActionGroupIndex = -1;
var obj87717_onTap_runningActionsCount = 0;
var obj87717_onTap_loopCount = 0;
var obj87712_onTap_activeActionGroupIndex = -1;
var obj87712_onTap_runningActionsCount = 0;
var obj87712_onTap_loopCount = 0;
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
		
obj75653_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75653_onTap_activeActionGroupIndex = -1;
		$("#obj75653").trigger("obj75653_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75653) {
				console.warn("de-queueing event obj75653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75653_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75655();
function goToPage_75655() {
	window.obj75653_onTap_runningActionsCount = obj75653_onTap_runningActionsCount + 1;
	$("#anchor433")[0].click();
	window.obj75653_onTap_runningActionsCount = window.obj75653_onTap_runningActionsCount - 1;
if (window.obj75653_onTap_runningActionsCount < 0) {
	window.obj75653_onTap_runningActionsCount = 0;
} else if (window.obj75653_onTap_runningActionsCount == 0) {
	obj75653_onTap_actionGroup1();
}
}





















};
obj75653_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75653_onTap_activeActionGroupIndex = -1;
		$("#obj75653").trigger("obj75653_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75653) {
				console.warn("de-queueing event obj75653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75653_onTap_activeActionGroupIndex = 1;
	





















};
obj75650_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75650_onTap_activeActionGroupIndex = -1;
		$("#obj75650").trigger("obj75650_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75650) {
				console.warn("de-queueing event obj75650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75650_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75652();
function goToPage_75652() {
	window.obj75650_onTap_runningActionsCount = obj75650_onTap_runningActionsCount + 1;
	$("#anchor434")[0].click();
	window.obj75650_onTap_runningActionsCount = window.obj75650_onTap_runningActionsCount - 1;
if (window.obj75650_onTap_runningActionsCount < 0) {
	window.obj75650_onTap_runningActionsCount = 0;
} else if (window.obj75650_onTap_runningActionsCount == 0) {
	obj75650_onTap_actionGroup1();
}
}





















};
obj75650_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75650_onTap_activeActionGroupIndex = -1;
		$("#obj75650").trigger("obj75650_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75650) {
				console.warn("de-queueing event obj75650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75650_onTap_activeActionGroupIndex = 1;
	





















};
obj75610_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75610_onTap_activeActionGroupIndex = -1;
		$("#obj75610").trigger("obj75610_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75610) {
				console.warn("de-queueing event obj75610." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75610").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75610_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75610 
hide_75613();
function hide_75613() {
	var selector = "#obj75610";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75610_onTap_runningActionsCount = obj75610_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75610_onTap_runningActionsCount = window.obj75610_onTap_runningActionsCount - 1;
if (window.obj75610_onTap_runningActionsCount < 0) {
	window.obj75610_onTap_runningActionsCount = 0;
} else if (window.obj75610_onTap_runningActionsCount == 0) {
	obj75610_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75613(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75610_onTap_runningActionsCount = window.obj75610_onTap_runningActionsCount - 1;
if (window.obj75610_onTap_runningActionsCount < 0) {
	window.obj75610_onTap_runningActionsCount = 0;
} else if (window.obj75610_onTap_runningActionsCount == 0) {
	obj75610_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj75600 
stopMovie_75612();
function stopMovie_75612() {
	window.obj75610_onTap_runningActionsCount = obj75610_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75600")[0];
	myVideo.pause();
	window.obj75610_onTap_runningActionsCount = window.obj75610_onTap_runningActionsCount - 1;
if (window.obj75610_onTap_runningActionsCount < 0) {
	window.obj75610_onTap_runningActionsCount = 0;
} else if (window.obj75610_onTap_runningActionsCount == 0) {
	obj75610_onTap_actionGroup1();
}
}
















};
obj75610_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75610_onTap_activeActionGroupIndex = -1;
		$("#obj75610").trigger("obj75610_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75610) {
				console.warn("de-queueing event obj75610." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75610").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75610_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75602
(function(){
	window.obj75610_onTap_runningActionsCount = obj75610_onTap_runningActionsCount + 1;

	var selector = "#obj75602";
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
					window.obj75610_onTap_runningActionsCount = window.obj75610_onTap_runningActionsCount - 1;
if (window.obj75610_onTap_runningActionsCount < 0) {
	window.obj75610_onTap_runningActionsCount = 0;
} else if (window.obj75610_onTap_runningActionsCount == 0) {
	obj75610_onTap_actionGroup2();
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
				window.obj75610_onTap_runningActionsCount = window.obj75610_onTap_runningActionsCount - 1;
if (window.obj75610_onTap_runningActionsCount < 0) {
	window.obj75610_onTap_runningActionsCount = 0;
} else if (window.obj75610_onTap_runningActionsCount == 0) {
	obj75610_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75610_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75610_onTap_activeActionGroupIndex = -1;
		$("#obj75610").trigger("obj75610_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75610) {
				console.warn("de-queueing event obj75610." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75610").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75610_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75600 
move_75615();
function move_75615() {
	window.obj75610_onTap_runningActionsCount = obj75610_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75600");
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
			window.obj75610_onTap_runningActionsCount = window.obj75610_onTap_runningActionsCount - 1;
if (window.obj75610_onTap_runningActionsCount < 0) {
	window.obj75610_onTap_runningActionsCount = 0;
} else if (window.obj75610_onTap_runningActionsCount == 0) {
	obj75610_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75610_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75610_onTap_activeActionGroupIndex = -1;
		$("#obj75610").trigger("obj75610_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75610) {
				console.warn("de-queueing event obj75610." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75610").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75610_onTap_activeActionGroupIndex = 3;
	





















};
obj75602_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75602_onTap_activeActionGroupIndex = -1;
		$("#obj75602").trigger("obj75602_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75602) {
				console.warn("de-queueing event obj75602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75602_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75602 
hide_75605();
function hide_75605() {
	var selector = "#obj75602";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75602_onTap_runningActionsCount = obj75602_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75602_onTap_runningActionsCount = window.obj75602_onTap_runningActionsCount - 1;
if (window.obj75602_onTap_runningActionsCount < 0) {
	window.obj75602_onTap_runningActionsCount = 0;
} else if (window.obj75602_onTap_runningActionsCount == 0) {
	obj75602_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75605(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75602_onTap_runningActionsCount = window.obj75602_onTap_runningActionsCount - 1;
if (window.obj75602_onTap_runningActionsCount < 0) {
	window.obj75602_onTap_runningActionsCount = 0;
} else if (window.obj75602_onTap_runningActionsCount == 0) {
	obj75602_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj75600 
playPauseMovie_75604();
function playPauseMovie_75604() {
	window.obj75602_onTap_runningActionsCount = obj75602_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75600")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj75602_onTap_runningActionsCount = window.obj75602_onTap_runningActionsCount - 1;
if (window.obj75602_onTap_runningActionsCount < 0) {
	window.obj75602_onTap_runningActionsCount = 0;
} else if (window.obj75602_onTap_runningActionsCount == 0) {
	obj75602_onTap_actionGroup1();
}
}

















};
obj75602_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75602_onTap_activeActionGroupIndex = -1;
		$("#obj75602").trigger("obj75602_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75602) {
				console.warn("de-queueing event obj75602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75602_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75610
(function(){
	window.obj75602_onTap_runningActionsCount = obj75602_onTap_runningActionsCount + 1;

	var selector = "#obj75610";
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
					window.obj75602_onTap_runningActionsCount = window.obj75602_onTap_runningActionsCount - 1;
if (window.obj75602_onTap_runningActionsCount < 0) {
	window.obj75602_onTap_runningActionsCount = 0;
} else if (window.obj75602_onTap_runningActionsCount == 0) {
	obj75602_onTap_actionGroup2();
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
				window.obj75602_onTap_runningActionsCount = window.obj75602_onTap_runningActionsCount - 1;
if (window.obj75602_onTap_runningActionsCount < 0) {
	window.obj75602_onTap_runningActionsCount = 0;
} else if (window.obj75602_onTap_runningActionsCount == 0) {
	obj75602_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75602_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75602_onTap_activeActionGroupIndex = -1;
		$("#obj75602").trigger("obj75602_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75602) {
				console.warn("de-queueing event obj75602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75602_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75600 
move_75607();
function move_75607() {
	window.obj75602_onTap_runningActionsCount = obj75602_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75600");
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
			window.obj75602_onTap_runningActionsCount = window.obj75602_onTap_runningActionsCount - 1;
if (window.obj75602_onTap_runningActionsCount < 0) {
	window.obj75602_onTap_runningActionsCount = 0;
} else if (window.obj75602_onTap_runningActionsCount == 0) {
	obj75602_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75602_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75602_onTap_activeActionGroupIndex = -1;
		$("#obj75602").trigger("obj75602_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75602) {
				console.warn("de-queueing event obj75602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75602_onTap_activeActionGroupIndex = 3;
	





















};
obj87717_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87717_onTap_activeActionGroupIndex = -1;
		$("#obj87717").trigger("obj87717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87717) {
				console.warn("de-queueing event obj87717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87717_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87722 
stopAudio_87719();
function stopAudio_87719() {
	window.obj87717_onTap_runningActionsCount = obj87717_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87722")[0];
	myAudio.pause();
	window.obj87717_onTap_runningActionsCount = window.obj87717_onTap_runningActionsCount - 1;
if (window.obj87717_onTap_runningActionsCount < 0) {
	window.obj87717_onTap_runningActionsCount = 0;
} else if (window.obj87717_onTap_runningActionsCount == 0) {
	obj87717_onTap_actionGroup1();
}
}








};
obj87717_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87717_onTap_activeActionGroupIndex = -1;
		$("#obj87717").trigger("obj87717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87717) {
				console.warn("de-queueing event obj87717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87717_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87717 
hide_87720();
function hide_87720() {
	var selector = "#obj87717";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87717_onTap_runningActionsCount = obj87717_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87717_onTap_runningActionsCount = window.obj87717_onTap_runningActionsCount - 1;
if (window.obj87717_onTap_runningActionsCount < 0) {
	window.obj87717_onTap_runningActionsCount = 0;
} else if (window.obj87717_onTap_runningActionsCount == 0) {
	obj87717_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87720(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87717_onTap_runningActionsCount = window.obj87717_onTap_runningActionsCount - 1;
if (window.obj87717_onTap_runningActionsCount < 0) {
	window.obj87717_onTap_runningActionsCount = 0;
} else if (window.obj87717_onTap_runningActionsCount == 0) {
	obj87717_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87717_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87717_onTap_activeActionGroupIndex = -1;
		$("#obj87717").trigger("obj87717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87717) {
				console.warn("de-queueing event obj87717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87717_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87712
(function(){
	window.obj87717_onTap_runningActionsCount = obj87717_onTap_runningActionsCount + 1;

	var selector = "#obj87712";
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
					window.obj87717_onTap_runningActionsCount = window.obj87717_onTap_runningActionsCount - 1;
if (window.obj87717_onTap_runningActionsCount < 0) {
	window.obj87717_onTap_runningActionsCount = 0;
} else if (window.obj87717_onTap_runningActionsCount == 0) {
	obj87717_onTap_actionGroup3();
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
				window.obj87717_onTap_runningActionsCount = window.obj87717_onTap_runningActionsCount - 1;
if (window.obj87717_onTap_runningActionsCount < 0) {
	window.obj87717_onTap_runningActionsCount = 0;
} else if (window.obj87717_onTap_runningActionsCount == 0) {
	obj87717_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87717_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87717_onTap_activeActionGroupIndex = -1;
		$("#obj87717").trigger("obj87717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87717) {
				console.warn("de-queueing event obj87717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87717_onTap_activeActionGroupIndex = 3;
	





















};
obj87712_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87712_onTap_activeActionGroupIndex = -1;
		$("#obj87712").trigger("obj87712_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87712) {
				console.warn("de-queueing event obj87712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87712_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87712 
hide_87714();
function hide_87714() {
	var selector = "#obj87712";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87712_onTap_runningActionsCount = obj87712_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87712_onTap_runningActionsCount = window.obj87712_onTap_runningActionsCount - 1;
if (window.obj87712_onTap_runningActionsCount < 0) {
	window.obj87712_onTap_runningActionsCount = 0;
} else if (window.obj87712_onTap_runningActionsCount == 0) {
	obj87712_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87714(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87712_onTap_runningActionsCount = window.obj87712_onTap_runningActionsCount - 1;
if (window.obj87712_onTap_runningActionsCount < 0) {
	window.obj87712_onTap_runningActionsCount = 0;
} else if (window.obj87712_onTap_runningActionsCount == 0) {
	obj87712_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87712_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87712_onTap_activeActionGroupIndex = -1;
		$("#obj87712").trigger("obj87712_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87712) {
				console.warn("de-queueing event obj87712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87712_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87717
(function(){
	window.obj87712_onTap_runningActionsCount = obj87712_onTap_runningActionsCount + 1;

	var selector = "#obj87717";
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
					window.obj87712_onTap_runningActionsCount = window.obj87712_onTap_runningActionsCount - 1;
if (window.obj87712_onTap_runningActionsCount < 0) {
	window.obj87712_onTap_runningActionsCount = 0;
} else if (window.obj87712_onTap_runningActionsCount == 0) {
	obj87712_onTap_actionGroup2();
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
				window.obj87712_onTap_runningActionsCount = window.obj87712_onTap_runningActionsCount - 1;
if (window.obj87712_onTap_runningActionsCount < 0) {
	window.obj87712_onTap_runningActionsCount = 0;
} else if (window.obj87712_onTap_runningActionsCount == 0) {
	obj87712_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87712_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87712_onTap_activeActionGroupIndex = -1;
		$("#obj87712").trigger("obj87712_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87712) {
				console.warn("de-queueing event obj87712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87712_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87722 
playAudio_87716();
function playAudio_87716() {
	window.obj87712_onTap_runningActionsCount = obj87712_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87722")[0];
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
		    window.obj87712_onTap_runningActionsCount = window.obj87712_onTap_runningActionsCount - 1;
if (window.obj87712_onTap_runningActionsCount < 0) {
	window.obj87712_onTap_runningActionsCount = 0;
} else if (window.obj87712_onTap_runningActionsCount == 0) {
	obj87712_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87712_onTap_runningActionsCount = window.obj87712_onTap_runningActionsCount - 1;
if (window.obj87712_onTap_runningActionsCount < 0) {
	window.obj87712_onTap_runningActionsCount = 0;
} else if (window.obj87712_onTap_runningActionsCount == 0) {
	obj87712_onTap_actionGroup3();
}
	}
}









};
obj87712_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87712_onTap_activeActionGroupIndex = -1;
		$("#obj87712").trigger("obj87712_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87712) {
				console.warn("de-queueing event obj87712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87712_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75653: Event Touch Down
 *
 */
$("#obj75653").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75653_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75653_onTap is still running");
	return;
}
var obj75653_onTap_runningActionsCount = 0;
var obj75653_onTap_loopCount = 0;
obj75653_onTap_actionGroup0();
});










/*
 *
 *   obj75650: Event Touch Down
 *
 */
$("#obj75650").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75650_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75650_onTap is still running");
	return;
}
var obj75650_onTap_runningActionsCount = 0;
var obj75650_onTap_loopCount = 0;
obj75650_onTap_actionGroup0();
});














































































































/*
 *
 *   obj75610: Event Touch Down
 *
 */
$("#obj75610").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75610_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75610_onTap is still running");
	return;
}
var obj75610_onTap_runningActionsCount = 0;
var obj75610_onTap_loopCount = 0;
obj75610_onTap_actionGroup0();
});










/*
 *
 *   obj75602: Event Touch Down
 *
 */
$("#obj75602").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75602_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75602_onTap is still running");
	return;
}
var obj75602_onTap_runningActionsCount = 0;
var obj75602_onTap_loopCount = 0;
obj75602_onTap_actionGroup0();
});










/*
 *
 *   obj87717: Event Touch Down
 *
 */
$("#obj87717").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87717_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87717_onTap is still running");
	return;
}
var obj87717_onTap_runningActionsCount = 0;
var obj87717_onTap_loopCount = 0;
obj87717_onTap_actionGroup0();
});










/*
 *
 *   obj87712: Event Touch Down
 *
 */
$("#obj87712").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87712_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87712_onTap is still running");
	return;
}
var obj87712_onTap_runningActionsCount = 0;
var obj87712_onTap_loopCount = 0;
obj87712_onTap_actionGroup0();
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
	
$("#obj75656").trigger('SCEventShow');
$("#obj75653").trigger('SCEventShow');
$("#obj75650").trigger('SCEventShow');
$("#obj75648").trigger('SCEventShow');
$("#obj75646").trigger('SCEventShow');
$("#obj75644").trigger('SCEventShow');
$("#obj75642").trigger('SCEventShow');
$("#obj75640").trigger('SCEventShow');
$("#obj75638").trigger('SCEventShow');
$("#obj75636").trigger('SCEventShow');
$("#obj75632").trigger('SCEventShow');
$("#obj75630").trigger('SCEventShow');
$("#obj75628").trigger('SCEventShow');
$("#obj75610").trigger('SCEventShow');
$("#obj75602").trigger('SCEventShow');
$("#obj87717").trigger('SCEventShow');
$("#obj87712").trigger('SCEventShow');
$("#obj87722").trigger('SCEventShow');
$("#obj94775").trigger('SCEventShow');
$("#obj75600").trigger('SCEventShow');
	
});