pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 49493;
pubcoder.page.title = pubcoder.page.title || "180";
pubcoder.page.number = pubcoder.page.number || 180;
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
var obj49505_onTap_activeActionGroupIndex = -1;
var obj49505_onTap_runningActionsCount = 0;
var obj49505_onTap_loopCount = 0;
var obj49502_onTap_activeActionGroupIndex = -1;
var obj49502_onTap_runningActionsCount = 0;
var obj49502_onTap_loopCount = 0;
var obj67902_onTap_activeActionGroupIndex = -1;
var obj67902_onTap_runningActionsCount = 0;
var obj67902_onTap_loopCount = 0;
var obj67894_onTap_activeActionGroupIndex = -1;
var obj67894_onTap_runningActionsCount = 0;
var obj67894_onTap_loopCount = 0;
var obj89041_onTap_activeActionGroupIndex = -1;
var obj89041_onTap_runningActionsCount = 0;
var obj89041_onTap_loopCount = 0;
var obj89036_onTap_activeActionGroupIndex = -1;
var obj89036_onTap_runningActionsCount = 0;
var obj89036_onTap_loopCount = 0;
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
		
obj49505_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49505_onTap_activeActionGroupIndex = -1;
		$("#obj49505").trigger("obj49505_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49505) {
				console.warn("de-queueing event obj49505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49505_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49507();
function goToPage_49507() {
	window.obj49505_onTap_runningActionsCount = obj49505_onTap_runningActionsCount + 1;
	$("#anchor1063")[0].click();
	window.obj49505_onTap_runningActionsCount = window.obj49505_onTap_runningActionsCount - 1;
if (window.obj49505_onTap_runningActionsCount < 0) {
	window.obj49505_onTap_runningActionsCount = 0;
} else if (window.obj49505_onTap_runningActionsCount == 0) {
	obj49505_onTap_actionGroup1();
}
}





















};
obj49505_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49505_onTap_activeActionGroupIndex = -1;
		$("#obj49505").trigger("obj49505_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49505) {
				console.warn("de-queueing event obj49505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49505_onTap_activeActionGroupIndex = 1;
	





















};
obj49502_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49502_onTap_activeActionGroupIndex = -1;
		$("#obj49502").trigger("obj49502_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49502) {
				console.warn("de-queueing event obj49502." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49502").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49502_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49504();
function goToPage_49504() {
	window.obj49502_onTap_runningActionsCount = obj49502_onTap_runningActionsCount + 1;
	$("#anchor1064")[0].click();
	window.obj49502_onTap_runningActionsCount = window.obj49502_onTap_runningActionsCount - 1;
if (window.obj49502_onTap_runningActionsCount < 0) {
	window.obj49502_onTap_runningActionsCount = 0;
} else if (window.obj49502_onTap_runningActionsCount == 0) {
	obj49502_onTap_actionGroup1();
}
}





















};
obj49502_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49502_onTap_activeActionGroupIndex = -1;
		$("#obj49502").trigger("obj49502_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49502) {
				console.warn("de-queueing event obj49502." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49502").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49502_onTap_activeActionGroupIndex = 1;
	





















};
obj67902_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67902_onTap_activeActionGroupIndex = -1;
		$("#obj67902").trigger("obj67902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67902) {
				console.warn("de-queueing event obj67902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67902_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67902 
hide_67905();
function hide_67905() {
	var selector = "#obj67902";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67902_onTap_runningActionsCount = obj67902_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67902_onTap_runningActionsCount = window.obj67902_onTap_runningActionsCount - 1;
if (window.obj67902_onTap_runningActionsCount < 0) {
	window.obj67902_onTap_runningActionsCount = 0;
} else if (window.obj67902_onTap_runningActionsCount == 0) {
	obj67902_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67905(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67902_onTap_runningActionsCount = window.obj67902_onTap_runningActionsCount - 1;
if (window.obj67902_onTap_runningActionsCount < 0) {
	window.obj67902_onTap_runningActionsCount = 0;
} else if (window.obj67902_onTap_runningActionsCount == 0) {
	obj67902_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67908 
stopMovie_67904();
function stopMovie_67904() {
	window.obj67902_onTap_runningActionsCount = obj67902_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67908")[0];
	myVideo.pause();
	window.obj67902_onTap_runningActionsCount = window.obj67902_onTap_runningActionsCount - 1;
if (window.obj67902_onTap_runningActionsCount < 0) {
	window.obj67902_onTap_runningActionsCount = 0;
} else if (window.obj67902_onTap_runningActionsCount == 0) {
	obj67902_onTap_actionGroup1();
}
}
















};
obj67902_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67902_onTap_activeActionGroupIndex = -1;
		$("#obj67902").trigger("obj67902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67902) {
				console.warn("de-queueing event obj67902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67902_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67894
(function(){
	window.obj67902_onTap_runningActionsCount = obj67902_onTap_runningActionsCount + 1;

	var selector = "#obj67894";
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
					window.obj67902_onTap_runningActionsCount = window.obj67902_onTap_runningActionsCount - 1;
if (window.obj67902_onTap_runningActionsCount < 0) {
	window.obj67902_onTap_runningActionsCount = 0;
} else if (window.obj67902_onTap_runningActionsCount == 0) {
	obj67902_onTap_actionGroup2();
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
				window.obj67902_onTap_runningActionsCount = window.obj67902_onTap_runningActionsCount - 1;
if (window.obj67902_onTap_runningActionsCount < 0) {
	window.obj67902_onTap_runningActionsCount = 0;
} else if (window.obj67902_onTap_runningActionsCount == 0) {
	obj67902_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67902_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67902_onTap_activeActionGroupIndex = -1;
		$("#obj67902").trigger("obj67902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67902) {
				console.warn("de-queueing event obj67902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67902_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67908 
move_67907();
function move_67907() {
	window.obj67902_onTap_runningActionsCount = obj67902_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67908");
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
			window.obj67902_onTap_runningActionsCount = window.obj67902_onTap_runningActionsCount - 1;
if (window.obj67902_onTap_runningActionsCount < 0) {
	window.obj67902_onTap_runningActionsCount = 0;
} else if (window.obj67902_onTap_runningActionsCount == 0) {
	obj67902_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67902_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67902_onTap_activeActionGroupIndex = -1;
		$("#obj67902").trigger("obj67902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67902) {
				console.warn("de-queueing event obj67902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67902_onTap_activeActionGroupIndex = 3;
	





















};
obj67894_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67894_onTap_activeActionGroupIndex = -1;
		$("#obj67894").trigger("obj67894_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67894) {
				console.warn("de-queueing event obj67894." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67894").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67894_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67894 
hide_67897();
function hide_67897() {
	var selector = "#obj67894";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67894_onTap_runningActionsCount = obj67894_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67894_onTap_runningActionsCount = window.obj67894_onTap_runningActionsCount - 1;
if (window.obj67894_onTap_runningActionsCount < 0) {
	window.obj67894_onTap_runningActionsCount = 0;
} else if (window.obj67894_onTap_runningActionsCount == 0) {
	obj67894_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67897(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67894_onTap_runningActionsCount = window.obj67894_onTap_runningActionsCount - 1;
if (window.obj67894_onTap_runningActionsCount < 0) {
	window.obj67894_onTap_runningActionsCount = 0;
} else if (window.obj67894_onTap_runningActionsCount == 0) {
	obj67894_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67908 
playPauseMovie_67896();
function playPauseMovie_67896() {
	window.obj67894_onTap_runningActionsCount = obj67894_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67908")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67894_onTap_runningActionsCount = window.obj67894_onTap_runningActionsCount - 1;
if (window.obj67894_onTap_runningActionsCount < 0) {
	window.obj67894_onTap_runningActionsCount = 0;
} else if (window.obj67894_onTap_runningActionsCount == 0) {
	obj67894_onTap_actionGroup1();
}
}

















};
obj67894_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67894_onTap_activeActionGroupIndex = -1;
		$("#obj67894").trigger("obj67894_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67894) {
				console.warn("de-queueing event obj67894." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67894").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67894_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67902
(function(){
	window.obj67894_onTap_runningActionsCount = obj67894_onTap_runningActionsCount + 1;

	var selector = "#obj67902";
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
					window.obj67894_onTap_runningActionsCount = window.obj67894_onTap_runningActionsCount - 1;
if (window.obj67894_onTap_runningActionsCount < 0) {
	window.obj67894_onTap_runningActionsCount = 0;
} else if (window.obj67894_onTap_runningActionsCount == 0) {
	obj67894_onTap_actionGroup2();
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
				window.obj67894_onTap_runningActionsCount = window.obj67894_onTap_runningActionsCount - 1;
if (window.obj67894_onTap_runningActionsCount < 0) {
	window.obj67894_onTap_runningActionsCount = 0;
} else if (window.obj67894_onTap_runningActionsCount == 0) {
	obj67894_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67894_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67894_onTap_activeActionGroupIndex = -1;
		$("#obj67894").trigger("obj67894_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67894) {
				console.warn("de-queueing event obj67894." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67894").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67894_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67908 
move_67899();
function move_67899() {
	window.obj67894_onTap_runningActionsCount = obj67894_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67908");
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
			window.obj67894_onTap_runningActionsCount = window.obj67894_onTap_runningActionsCount - 1;
if (window.obj67894_onTap_runningActionsCount < 0) {
	window.obj67894_onTap_runningActionsCount = 0;
} else if (window.obj67894_onTap_runningActionsCount == 0) {
	obj67894_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67894_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67894_onTap_activeActionGroupIndex = -1;
		$("#obj67894").trigger("obj67894_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67894) {
				console.warn("de-queueing event obj67894." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67894").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67894_onTap_activeActionGroupIndex = 3;
	





















};
obj89041_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89041_onTap_activeActionGroupIndex = -1;
		$("#obj89041").trigger("obj89041_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89041) {
				console.warn("de-queueing event obj89041." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89041").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89041_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89046 
stopAudio_89043();
function stopAudio_89043() {
	window.obj89041_onTap_runningActionsCount = obj89041_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89046")[0];
	myAudio.pause();
	window.obj89041_onTap_runningActionsCount = window.obj89041_onTap_runningActionsCount - 1;
if (window.obj89041_onTap_runningActionsCount < 0) {
	window.obj89041_onTap_runningActionsCount = 0;
} else if (window.obj89041_onTap_runningActionsCount == 0) {
	obj89041_onTap_actionGroup1();
}
}








};
obj89041_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89041_onTap_activeActionGroupIndex = -1;
		$("#obj89041").trigger("obj89041_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89041) {
				console.warn("de-queueing event obj89041." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89041").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89041_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89041 
hide_89044();
function hide_89044() {
	var selector = "#obj89041";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89041_onTap_runningActionsCount = obj89041_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89041_onTap_runningActionsCount = window.obj89041_onTap_runningActionsCount - 1;
if (window.obj89041_onTap_runningActionsCount < 0) {
	window.obj89041_onTap_runningActionsCount = 0;
} else if (window.obj89041_onTap_runningActionsCount == 0) {
	obj89041_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89044(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89041_onTap_runningActionsCount = window.obj89041_onTap_runningActionsCount - 1;
if (window.obj89041_onTap_runningActionsCount < 0) {
	window.obj89041_onTap_runningActionsCount = 0;
} else if (window.obj89041_onTap_runningActionsCount == 0) {
	obj89041_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89041_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89041_onTap_activeActionGroupIndex = -1;
		$("#obj89041").trigger("obj89041_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89041) {
				console.warn("de-queueing event obj89041." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89041").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89041_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89036
(function(){
	window.obj89041_onTap_runningActionsCount = obj89041_onTap_runningActionsCount + 1;

	var selector = "#obj89036";
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
					window.obj89041_onTap_runningActionsCount = window.obj89041_onTap_runningActionsCount - 1;
if (window.obj89041_onTap_runningActionsCount < 0) {
	window.obj89041_onTap_runningActionsCount = 0;
} else if (window.obj89041_onTap_runningActionsCount == 0) {
	obj89041_onTap_actionGroup3();
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
				window.obj89041_onTap_runningActionsCount = window.obj89041_onTap_runningActionsCount - 1;
if (window.obj89041_onTap_runningActionsCount < 0) {
	window.obj89041_onTap_runningActionsCount = 0;
} else if (window.obj89041_onTap_runningActionsCount == 0) {
	obj89041_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89041_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89041_onTap_activeActionGroupIndex = -1;
		$("#obj89041").trigger("obj89041_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89041) {
				console.warn("de-queueing event obj89041." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89041").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89041_onTap_activeActionGroupIndex = 3;
	





















};
obj89036_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89036_onTap_activeActionGroupIndex = -1;
		$("#obj89036").trigger("obj89036_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89036) {
				console.warn("de-queueing event obj89036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89036_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89036 
hide_89038();
function hide_89038() {
	var selector = "#obj89036";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89036_onTap_runningActionsCount = obj89036_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89036_onTap_runningActionsCount = window.obj89036_onTap_runningActionsCount - 1;
if (window.obj89036_onTap_runningActionsCount < 0) {
	window.obj89036_onTap_runningActionsCount = 0;
} else if (window.obj89036_onTap_runningActionsCount == 0) {
	obj89036_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89038(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89036_onTap_runningActionsCount = window.obj89036_onTap_runningActionsCount - 1;
if (window.obj89036_onTap_runningActionsCount < 0) {
	window.obj89036_onTap_runningActionsCount = 0;
} else if (window.obj89036_onTap_runningActionsCount == 0) {
	obj89036_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89036_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89036_onTap_activeActionGroupIndex = -1;
		$("#obj89036").trigger("obj89036_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89036) {
				console.warn("de-queueing event obj89036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89036_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89041
(function(){
	window.obj89036_onTap_runningActionsCount = obj89036_onTap_runningActionsCount + 1;

	var selector = "#obj89041";
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
					window.obj89036_onTap_runningActionsCount = window.obj89036_onTap_runningActionsCount - 1;
if (window.obj89036_onTap_runningActionsCount < 0) {
	window.obj89036_onTap_runningActionsCount = 0;
} else if (window.obj89036_onTap_runningActionsCount == 0) {
	obj89036_onTap_actionGroup2();
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
				window.obj89036_onTap_runningActionsCount = window.obj89036_onTap_runningActionsCount - 1;
if (window.obj89036_onTap_runningActionsCount < 0) {
	window.obj89036_onTap_runningActionsCount = 0;
} else if (window.obj89036_onTap_runningActionsCount == 0) {
	obj89036_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89036_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89036_onTap_activeActionGroupIndex = -1;
		$("#obj89036").trigger("obj89036_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89036) {
				console.warn("de-queueing event obj89036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89036_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89046 
playAudio_89040();
function playAudio_89040() {
	window.obj89036_onTap_runningActionsCount = obj89036_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89046")[0];
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
		    window.obj89036_onTap_runningActionsCount = window.obj89036_onTap_runningActionsCount - 1;
if (window.obj89036_onTap_runningActionsCount < 0) {
	window.obj89036_onTap_runningActionsCount = 0;
} else if (window.obj89036_onTap_runningActionsCount == 0) {
	obj89036_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89036_onTap_runningActionsCount = window.obj89036_onTap_runningActionsCount - 1;
if (window.obj89036_onTap_runningActionsCount < 0) {
	window.obj89036_onTap_runningActionsCount = 0;
} else if (window.obj89036_onTap_runningActionsCount == 0) {
	obj89036_onTap_actionGroup3();
}
	}
}









};
obj89036_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89036_onTap_activeActionGroupIndex = -1;
		$("#obj89036").trigger("obj89036_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89036) {
				console.warn("de-queueing event obj89036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89036_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj49505: Event Touch Down
 *
 */
$("#obj49505").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49505_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49505_onTap is still running");
	return;
}
var obj49505_onTap_runningActionsCount = 0;
var obj49505_onTap_loopCount = 0;
obj49505_onTap_actionGroup0();
});










/*
 *
 *   obj49502: Event Touch Down
 *
 */
$("#obj49502").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49502_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49502_onTap is still running");
	return;
}
var obj49502_onTap_runningActionsCount = 0;
var obj49502_onTap_loopCount = 0;
obj49502_onTap_actionGroup0();
});








































/*
 *
 *   obj67902: Event Touch Down
 *
 */
$("#obj67902").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67902_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67902_onTap is still running");
	return;
}
var obj67902_onTap_runningActionsCount = 0;
var obj67902_onTap_loopCount = 0;
obj67902_onTap_actionGroup0();
});










/*
 *
 *   obj67894: Event Touch Down
 *
 */
$("#obj67894").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67894_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67894_onTap is still running");
	return;
}
var obj67894_onTap_runningActionsCount = 0;
var obj67894_onTap_loopCount = 0;
obj67894_onTap_actionGroup0();
});










/*
 *
 *   obj89041: Event Touch Down
 *
 */
$("#obj89041").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89041_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89041_onTap is still running");
	return;
}
var obj89041_onTap_runningActionsCount = 0;
var obj89041_onTap_loopCount = 0;
obj89041_onTap_actionGroup0();
});










/*
 *
 *   obj89036: Event Touch Down
 *
 */
$("#obj89036").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89036_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89036_onTap is still running");
	return;
}
var obj89036_onTap_runningActionsCount = 0;
var obj89036_onTap_loopCount = 0;
obj89036_onTap_actionGroup0();
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
	
$("#obj49521").trigger('SCEventShow');
$("#obj49505").trigger('SCEventShow');
$("#obj49502").trigger('SCEventShow');
$("#obj49500").trigger('SCEventShow');
$("#obj49498").trigger('SCEventShow');
$("#obj49524").trigger('SCEventShow');
$("#obj67902").trigger('SCEventShow');
$("#obj67894").trigger('SCEventShow');
$("#obj89041").trigger('SCEventShow');
$("#obj89036").trigger('SCEventShow');
$("#obj89046").trigger('SCEventShow');
$("#obj94989").trigger('SCEventShow');
$("#obj67908").trigger('SCEventShow');
	
});