pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 55824;
pubcoder.page.title = pubcoder.page.title || "204";
pubcoder.page.number = pubcoder.page.number || 204;
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
var obj55830_onTap_activeActionGroupIndex = -1;
var obj55830_onTap_runningActionsCount = 0;
var obj55830_onTap_loopCount = 0;
var obj55827_onTap_activeActionGroupIndex = -1;
var obj55827_onTap_runningActionsCount = 0;
var obj55827_onTap_loopCount = 0;
var obj68302_onTap_activeActionGroupIndex = -1;
var obj68302_onTap_runningActionsCount = 0;
var obj68302_onTap_loopCount = 0;
var obj68294_onTap_activeActionGroupIndex = -1;
var obj68294_onTap_runningActionsCount = 0;
var obj68294_onTap_loopCount = 0;
var obj89329_onTap_activeActionGroupIndex = -1;
var obj89329_onTap_runningActionsCount = 0;
var obj89329_onTap_loopCount = 0;
var obj89324_onTap_activeActionGroupIndex = -1;
var obj89324_onTap_runningActionsCount = 0;
var obj89324_onTap_loopCount = 0;
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
		
obj55830_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55830_onTap_activeActionGroupIndex = -1;
		$("#obj55830").trigger("obj55830_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55830) {
				console.warn("de-queueing event obj55830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55830_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55832();
function goToPage_55832() {
	window.obj55830_onTap_runningActionsCount = obj55830_onTap_runningActionsCount + 1;
	$("#anchor1201")[0].click();
	window.obj55830_onTap_runningActionsCount = window.obj55830_onTap_runningActionsCount - 1;
if (window.obj55830_onTap_runningActionsCount < 0) {
	window.obj55830_onTap_runningActionsCount = 0;
} else if (window.obj55830_onTap_runningActionsCount == 0) {
	obj55830_onTap_actionGroup1();
}
}





















};
obj55830_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55830_onTap_activeActionGroupIndex = -1;
		$("#obj55830").trigger("obj55830_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55830) {
				console.warn("de-queueing event obj55830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55830_onTap_activeActionGroupIndex = 1;
	





















};
obj55827_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55827_onTap_activeActionGroupIndex = -1;
		$("#obj55827").trigger("obj55827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55827) {
				console.warn("de-queueing event obj55827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55827_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55829();
function goToPage_55829() {
	window.obj55827_onTap_runningActionsCount = obj55827_onTap_runningActionsCount + 1;
	$("#anchor1202")[0].click();
	window.obj55827_onTap_runningActionsCount = window.obj55827_onTap_runningActionsCount - 1;
if (window.obj55827_onTap_runningActionsCount < 0) {
	window.obj55827_onTap_runningActionsCount = 0;
} else if (window.obj55827_onTap_runningActionsCount == 0) {
	obj55827_onTap_actionGroup1();
}
}





















};
obj55827_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55827_onTap_activeActionGroupIndex = -1;
		$("#obj55827").trigger("obj55827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55827) {
				console.warn("de-queueing event obj55827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55827_onTap_activeActionGroupIndex = 1;
	





















};
obj68302_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68302_onTap_activeActionGroupIndex = -1;
		$("#obj68302").trigger("obj68302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68302) {
				console.warn("de-queueing event obj68302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68302_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68302 
hide_68305();
function hide_68305() {
	var selector = "#obj68302";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68302_onTap_runningActionsCount = obj68302_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68302_onTap_runningActionsCount = window.obj68302_onTap_runningActionsCount - 1;
if (window.obj68302_onTap_runningActionsCount < 0) {
	window.obj68302_onTap_runningActionsCount = 0;
} else if (window.obj68302_onTap_runningActionsCount == 0) {
	obj68302_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68305(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68302_onTap_runningActionsCount = window.obj68302_onTap_runningActionsCount - 1;
if (window.obj68302_onTap_runningActionsCount < 0) {
	window.obj68302_onTap_runningActionsCount = 0;
} else if (window.obj68302_onTap_runningActionsCount == 0) {
	obj68302_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68308 
stopMovie_68304();
function stopMovie_68304() {
	window.obj68302_onTap_runningActionsCount = obj68302_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68308")[0];
	myVideo.pause();
	window.obj68302_onTap_runningActionsCount = window.obj68302_onTap_runningActionsCount - 1;
if (window.obj68302_onTap_runningActionsCount < 0) {
	window.obj68302_onTap_runningActionsCount = 0;
} else if (window.obj68302_onTap_runningActionsCount == 0) {
	obj68302_onTap_actionGroup1();
}
}
















};
obj68302_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68302_onTap_activeActionGroupIndex = -1;
		$("#obj68302").trigger("obj68302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68302) {
				console.warn("de-queueing event obj68302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68302_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68294
(function(){
	window.obj68302_onTap_runningActionsCount = obj68302_onTap_runningActionsCount + 1;

	var selector = "#obj68294";
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
					window.obj68302_onTap_runningActionsCount = window.obj68302_onTap_runningActionsCount - 1;
if (window.obj68302_onTap_runningActionsCount < 0) {
	window.obj68302_onTap_runningActionsCount = 0;
} else if (window.obj68302_onTap_runningActionsCount == 0) {
	obj68302_onTap_actionGroup2();
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
				window.obj68302_onTap_runningActionsCount = window.obj68302_onTap_runningActionsCount - 1;
if (window.obj68302_onTap_runningActionsCount < 0) {
	window.obj68302_onTap_runningActionsCount = 0;
} else if (window.obj68302_onTap_runningActionsCount == 0) {
	obj68302_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68302_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68302_onTap_activeActionGroupIndex = -1;
		$("#obj68302").trigger("obj68302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68302) {
				console.warn("de-queueing event obj68302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68302_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68308 
move_68307();
function move_68307() {
	window.obj68302_onTap_runningActionsCount = obj68302_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68308");
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
			window.obj68302_onTap_runningActionsCount = window.obj68302_onTap_runningActionsCount - 1;
if (window.obj68302_onTap_runningActionsCount < 0) {
	window.obj68302_onTap_runningActionsCount = 0;
} else if (window.obj68302_onTap_runningActionsCount == 0) {
	obj68302_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68302_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68302_onTap_activeActionGroupIndex = -1;
		$("#obj68302").trigger("obj68302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68302) {
				console.warn("de-queueing event obj68302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68302_onTap_activeActionGroupIndex = 3;
	





















};
obj68294_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68294_onTap_activeActionGroupIndex = -1;
		$("#obj68294").trigger("obj68294_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68294) {
				console.warn("de-queueing event obj68294." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68294").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68294_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68294 
hide_68297();
function hide_68297() {
	var selector = "#obj68294";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68294_onTap_runningActionsCount = obj68294_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68294_onTap_runningActionsCount = window.obj68294_onTap_runningActionsCount - 1;
if (window.obj68294_onTap_runningActionsCount < 0) {
	window.obj68294_onTap_runningActionsCount = 0;
} else if (window.obj68294_onTap_runningActionsCount == 0) {
	obj68294_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68297(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68294_onTap_runningActionsCount = window.obj68294_onTap_runningActionsCount - 1;
if (window.obj68294_onTap_runningActionsCount < 0) {
	window.obj68294_onTap_runningActionsCount = 0;
} else if (window.obj68294_onTap_runningActionsCount == 0) {
	obj68294_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68308 
playPauseMovie_68296();
function playPauseMovie_68296() {
	window.obj68294_onTap_runningActionsCount = obj68294_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68308")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68294_onTap_runningActionsCount = window.obj68294_onTap_runningActionsCount - 1;
if (window.obj68294_onTap_runningActionsCount < 0) {
	window.obj68294_onTap_runningActionsCount = 0;
} else if (window.obj68294_onTap_runningActionsCount == 0) {
	obj68294_onTap_actionGroup1();
}
}

















};
obj68294_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68294_onTap_activeActionGroupIndex = -1;
		$("#obj68294").trigger("obj68294_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68294) {
				console.warn("de-queueing event obj68294." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68294").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68294_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68302
(function(){
	window.obj68294_onTap_runningActionsCount = obj68294_onTap_runningActionsCount + 1;

	var selector = "#obj68302";
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
					window.obj68294_onTap_runningActionsCount = window.obj68294_onTap_runningActionsCount - 1;
if (window.obj68294_onTap_runningActionsCount < 0) {
	window.obj68294_onTap_runningActionsCount = 0;
} else if (window.obj68294_onTap_runningActionsCount == 0) {
	obj68294_onTap_actionGroup2();
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
				window.obj68294_onTap_runningActionsCount = window.obj68294_onTap_runningActionsCount - 1;
if (window.obj68294_onTap_runningActionsCount < 0) {
	window.obj68294_onTap_runningActionsCount = 0;
} else if (window.obj68294_onTap_runningActionsCount == 0) {
	obj68294_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68294_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68294_onTap_activeActionGroupIndex = -1;
		$("#obj68294").trigger("obj68294_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68294) {
				console.warn("de-queueing event obj68294." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68294").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68294_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68308 
move_68299();
function move_68299() {
	window.obj68294_onTap_runningActionsCount = obj68294_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68308");
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
			window.obj68294_onTap_runningActionsCount = window.obj68294_onTap_runningActionsCount - 1;
if (window.obj68294_onTap_runningActionsCount < 0) {
	window.obj68294_onTap_runningActionsCount = 0;
} else if (window.obj68294_onTap_runningActionsCount == 0) {
	obj68294_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68294_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68294_onTap_activeActionGroupIndex = -1;
		$("#obj68294").trigger("obj68294_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68294) {
				console.warn("de-queueing event obj68294." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68294").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68294_onTap_activeActionGroupIndex = 3;
	





















};
obj89329_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89329_onTap_activeActionGroupIndex = -1;
		$("#obj89329").trigger("obj89329_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89329) {
				console.warn("de-queueing event obj89329." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89329").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89329_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89334 
stopAudio_89331();
function stopAudio_89331() {
	window.obj89329_onTap_runningActionsCount = obj89329_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89334")[0];
	myAudio.pause();
	window.obj89329_onTap_runningActionsCount = window.obj89329_onTap_runningActionsCount - 1;
if (window.obj89329_onTap_runningActionsCount < 0) {
	window.obj89329_onTap_runningActionsCount = 0;
} else if (window.obj89329_onTap_runningActionsCount == 0) {
	obj89329_onTap_actionGroup1();
}
}








};
obj89329_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89329_onTap_activeActionGroupIndex = -1;
		$("#obj89329").trigger("obj89329_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89329) {
				console.warn("de-queueing event obj89329." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89329").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89329_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89329 
hide_89332();
function hide_89332() {
	var selector = "#obj89329";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89329_onTap_runningActionsCount = obj89329_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89329_onTap_runningActionsCount = window.obj89329_onTap_runningActionsCount - 1;
if (window.obj89329_onTap_runningActionsCount < 0) {
	window.obj89329_onTap_runningActionsCount = 0;
} else if (window.obj89329_onTap_runningActionsCount == 0) {
	obj89329_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89332(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89329_onTap_runningActionsCount = window.obj89329_onTap_runningActionsCount - 1;
if (window.obj89329_onTap_runningActionsCount < 0) {
	window.obj89329_onTap_runningActionsCount = 0;
} else if (window.obj89329_onTap_runningActionsCount == 0) {
	obj89329_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89329_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89329_onTap_activeActionGroupIndex = -1;
		$("#obj89329").trigger("obj89329_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89329) {
				console.warn("de-queueing event obj89329." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89329").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89329_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89324
(function(){
	window.obj89329_onTap_runningActionsCount = obj89329_onTap_runningActionsCount + 1;

	var selector = "#obj89324";
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
					window.obj89329_onTap_runningActionsCount = window.obj89329_onTap_runningActionsCount - 1;
if (window.obj89329_onTap_runningActionsCount < 0) {
	window.obj89329_onTap_runningActionsCount = 0;
} else if (window.obj89329_onTap_runningActionsCount == 0) {
	obj89329_onTap_actionGroup3();
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
				window.obj89329_onTap_runningActionsCount = window.obj89329_onTap_runningActionsCount - 1;
if (window.obj89329_onTap_runningActionsCount < 0) {
	window.obj89329_onTap_runningActionsCount = 0;
} else if (window.obj89329_onTap_runningActionsCount == 0) {
	obj89329_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89329_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89329_onTap_activeActionGroupIndex = -1;
		$("#obj89329").trigger("obj89329_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89329) {
				console.warn("de-queueing event obj89329." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89329").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89329_onTap_activeActionGroupIndex = 3;
	





















};
obj89324_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89324_onTap_activeActionGroupIndex = -1;
		$("#obj89324").trigger("obj89324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89324) {
				console.warn("de-queueing event obj89324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89324_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89324 
hide_89326();
function hide_89326() {
	var selector = "#obj89324";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89324_onTap_runningActionsCount = obj89324_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89324_onTap_runningActionsCount = window.obj89324_onTap_runningActionsCount - 1;
if (window.obj89324_onTap_runningActionsCount < 0) {
	window.obj89324_onTap_runningActionsCount = 0;
} else if (window.obj89324_onTap_runningActionsCount == 0) {
	obj89324_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89326(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89324_onTap_runningActionsCount = window.obj89324_onTap_runningActionsCount - 1;
if (window.obj89324_onTap_runningActionsCount < 0) {
	window.obj89324_onTap_runningActionsCount = 0;
} else if (window.obj89324_onTap_runningActionsCount == 0) {
	obj89324_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89324_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89324_onTap_activeActionGroupIndex = -1;
		$("#obj89324").trigger("obj89324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89324) {
				console.warn("de-queueing event obj89324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89324_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89329
(function(){
	window.obj89324_onTap_runningActionsCount = obj89324_onTap_runningActionsCount + 1;

	var selector = "#obj89329";
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
					window.obj89324_onTap_runningActionsCount = window.obj89324_onTap_runningActionsCount - 1;
if (window.obj89324_onTap_runningActionsCount < 0) {
	window.obj89324_onTap_runningActionsCount = 0;
} else if (window.obj89324_onTap_runningActionsCount == 0) {
	obj89324_onTap_actionGroup2();
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
				window.obj89324_onTap_runningActionsCount = window.obj89324_onTap_runningActionsCount - 1;
if (window.obj89324_onTap_runningActionsCount < 0) {
	window.obj89324_onTap_runningActionsCount = 0;
} else if (window.obj89324_onTap_runningActionsCount == 0) {
	obj89324_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89324_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89324_onTap_activeActionGroupIndex = -1;
		$("#obj89324").trigger("obj89324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89324) {
				console.warn("de-queueing event obj89324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89324_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89334 
playAudio_89328();
function playAudio_89328() {
	window.obj89324_onTap_runningActionsCount = obj89324_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89334")[0];
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
		    window.obj89324_onTap_runningActionsCount = window.obj89324_onTap_runningActionsCount - 1;
if (window.obj89324_onTap_runningActionsCount < 0) {
	window.obj89324_onTap_runningActionsCount = 0;
} else if (window.obj89324_onTap_runningActionsCount == 0) {
	obj89324_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89324_onTap_runningActionsCount = window.obj89324_onTap_runningActionsCount - 1;
if (window.obj89324_onTap_runningActionsCount < 0) {
	window.obj89324_onTap_runningActionsCount = 0;
} else if (window.obj89324_onTap_runningActionsCount == 0) {
	obj89324_onTap_actionGroup3();
}
	}
}









};
obj89324_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89324_onTap_activeActionGroupIndex = -1;
		$("#obj89324").trigger("obj89324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89324) {
				console.warn("de-queueing event obj89324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89324_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj55830: Event Touch Down
 *
 */
$("#obj55830").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55830_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55830_onTap is still running");
	return;
}
var obj55830_onTap_runningActionsCount = 0;
var obj55830_onTap_loopCount = 0;
obj55830_onTap_actionGroup0();
});










/*
 *
 *   obj55827: Event Touch Down
 *
 */
$("#obj55827").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55827_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55827_onTap is still running");
	return;
}
var obj55827_onTap_runningActionsCount = 0;
var obj55827_onTap_loopCount = 0;
obj55827_onTap_actionGroup0();
});






































































/*
 *
 *   obj68302: Event Touch Down
 *
 */
$("#obj68302").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68302_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68302_onTap is still running");
	return;
}
var obj68302_onTap_runningActionsCount = 0;
var obj68302_onTap_loopCount = 0;
obj68302_onTap_actionGroup0();
});










/*
 *
 *   obj68294: Event Touch Down
 *
 */
$("#obj68294").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68294_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68294_onTap is still running");
	return;
}
var obj68294_onTap_runningActionsCount = 0;
var obj68294_onTap_loopCount = 0;
obj68294_onTap_actionGroup0();
});










/*
 *
 *   obj89329: Event Touch Down
 *
 */
$("#obj89329").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89329_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89329_onTap is still running");
	return;
}
var obj89329_onTap_runningActionsCount = 0;
var obj89329_onTap_loopCount = 0;
obj89329_onTap_actionGroup0();
});










/*
 *
 *   obj89324: Event Touch Down
 *
 */
$("#obj89324").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89324_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89324_onTap is still running");
	return;
}
var obj89324_onTap_runningActionsCount = 0;
var obj89324_onTap_loopCount = 0;
obj89324_onTap_actionGroup0();
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
	
$("#obj55825").trigger('SCEventShow');
$("#obj55830").trigger('SCEventShow');
$("#obj55827").trigger('SCEventShow');
$("#obj55852").trigger('SCEventShow');
$("#obj55850").trigger('SCEventShow');
$("#obj55848").trigger('SCEventShow');
$("#obj55846").trigger('SCEventShow');
$("#obj55854").trigger('SCEventShow');
$("#obj55856").trigger('SCEventShow');
$("#obj68302").trigger('SCEventShow');
$("#obj68294").trigger('SCEventShow');
$("#obj89329").trigger('SCEventShow');
$("#obj89324").trigger('SCEventShow');
$("#obj89334").trigger('SCEventShow');
$("#obj95037").trigger('SCEventShow');
$("#obj68308").trigger('SCEventShow');
	
});