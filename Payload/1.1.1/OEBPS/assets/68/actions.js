pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 17873;
pubcoder.page.title = pubcoder.page.title || "68";
pubcoder.page.number = pubcoder.page.number || 68;
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
var obj75228_onTap_activeActionGroupIndex = -1;
var obj75228_onTap_runningActionsCount = 0;
var obj75228_onTap_loopCount = 0;
var obj75225_onTap_activeActionGroupIndex = -1;
var obj75225_onTap_runningActionsCount = 0;
var obj75225_onTap_loopCount = 0;
var obj75185_onTap_activeActionGroupIndex = -1;
var obj75185_onTap_runningActionsCount = 0;
var obj75185_onTap_loopCount = 0;
var obj75177_onTap_activeActionGroupIndex = -1;
var obj75177_onTap_runningActionsCount = 0;
var obj75177_onTap_loopCount = 0;
var obj87651_onTap_activeActionGroupIndex = -1;
var obj87651_onTap_runningActionsCount = 0;
var obj87651_onTap_loopCount = 0;
var obj87646_onTap_activeActionGroupIndex = -1;
var obj87646_onTap_runningActionsCount = 0;
var obj87646_onTap_loopCount = 0;
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
		
obj75228_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75228_onTap_activeActionGroupIndex = -1;
		$("#obj75228").trigger("obj75228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75228) {
				console.warn("de-queueing event obj75228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75228_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75230();
function goToPage_75230() {
	window.obj75228_onTap_runningActionsCount = obj75228_onTap_runningActionsCount + 1;
	$("#anchor407")[0].click();
	window.obj75228_onTap_runningActionsCount = window.obj75228_onTap_runningActionsCount - 1;
if (window.obj75228_onTap_runningActionsCount < 0) {
	window.obj75228_onTap_runningActionsCount = 0;
} else if (window.obj75228_onTap_runningActionsCount == 0) {
	obj75228_onTap_actionGroup1();
}
}





















};
obj75228_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75228_onTap_activeActionGroupIndex = -1;
		$("#obj75228").trigger("obj75228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75228) {
				console.warn("de-queueing event obj75228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75228_onTap_activeActionGroupIndex = 1;
	





















};
obj75225_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75225_onTap_activeActionGroupIndex = -1;
		$("#obj75225").trigger("obj75225_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75225) {
				console.warn("de-queueing event obj75225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75225_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75227();
function goToPage_75227() {
	window.obj75225_onTap_runningActionsCount = obj75225_onTap_runningActionsCount + 1;
	$("#anchor408")[0].click();
	window.obj75225_onTap_runningActionsCount = window.obj75225_onTap_runningActionsCount - 1;
if (window.obj75225_onTap_runningActionsCount < 0) {
	window.obj75225_onTap_runningActionsCount = 0;
} else if (window.obj75225_onTap_runningActionsCount == 0) {
	obj75225_onTap_actionGroup1();
}
}





















};
obj75225_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75225_onTap_activeActionGroupIndex = -1;
		$("#obj75225").trigger("obj75225_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75225) {
				console.warn("de-queueing event obj75225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75225_onTap_activeActionGroupIndex = 1;
	





















};
obj75185_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75185_onTap_activeActionGroupIndex = -1;
		$("#obj75185").trigger("obj75185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75185) {
				console.warn("de-queueing event obj75185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75185_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75185 
hide_75188();
function hide_75188() {
	var selector = "#obj75185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75185_onTap_runningActionsCount = obj75185_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75185_onTap_runningActionsCount = window.obj75185_onTap_runningActionsCount - 1;
if (window.obj75185_onTap_runningActionsCount < 0) {
	window.obj75185_onTap_runningActionsCount = 0;
} else if (window.obj75185_onTap_runningActionsCount == 0) {
	obj75185_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75188(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75185_onTap_runningActionsCount = window.obj75185_onTap_runningActionsCount - 1;
if (window.obj75185_onTap_runningActionsCount < 0) {
	window.obj75185_onTap_runningActionsCount = 0;
} else if (window.obj75185_onTap_runningActionsCount == 0) {
	obj75185_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj75175 
stopMovie_75187();
function stopMovie_75187() {
	window.obj75185_onTap_runningActionsCount = obj75185_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75175")[0];
	myVideo.pause();
	window.obj75185_onTap_runningActionsCount = window.obj75185_onTap_runningActionsCount - 1;
if (window.obj75185_onTap_runningActionsCount < 0) {
	window.obj75185_onTap_runningActionsCount = 0;
} else if (window.obj75185_onTap_runningActionsCount == 0) {
	obj75185_onTap_actionGroup1();
}
}
















};
obj75185_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75185_onTap_activeActionGroupIndex = -1;
		$("#obj75185").trigger("obj75185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75185) {
				console.warn("de-queueing event obj75185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75185_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75177
(function(){
	window.obj75185_onTap_runningActionsCount = obj75185_onTap_runningActionsCount + 1;

	var selector = "#obj75177";
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
					window.obj75185_onTap_runningActionsCount = window.obj75185_onTap_runningActionsCount - 1;
if (window.obj75185_onTap_runningActionsCount < 0) {
	window.obj75185_onTap_runningActionsCount = 0;
} else if (window.obj75185_onTap_runningActionsCount == 0) {
	obj75185_onTap_actionGroup2();
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
				window.obj75185_onTap_runningActionsCount = window.obj75185_onTap_runningActionsCount - 1;
if (window.obj75185_onTap_runningActionsCount < 0) {
	window.obj75185_onTap_runningActionsCount = 0;
} else if (window.obj75185_onTap_runningActionsCount == 0) {
	obj75185_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75185_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75185_onTap_activeActionGroupIndex = -1;
		$("#obj75185").trigger("obj75185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75185) {
				console.warn("de-queueing event obj75185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75185_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75175 
move_75190();
function move_75190() {
	window.obj75185_onTap_runningActionsCount = obj75185_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75175");
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
			window.obj75185_onTap_runningActionsCount = window.obj75185_onTap_runningActionsCount - 1;
if (window.obj75185_onTap_runningActionsCount < 0) {
	window.obj75185_onTap_runningActionsCount = 0;
} else if (window.obj75185_onTap_runningActionsCount == 0) {
	obj75185_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75185_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75185_onTap_activeActionGroupIndex = -1;
		$("#obj75185").trigger("obj75185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75185) {
				console.warn("de-queueing event obj75185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75185_onTap_activeActionGroupIndex = 3;
	





















};
obj75177_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75177_onTap_activeActionGroupIndex = -1;
		$("#obj75177").trigger("obj75177_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75177) {
				console.warn("de-queueing event obj75177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75177_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75177 
hide_75180();
function hide_75180() {
	var selector = "#obj75177";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75177_onTap_runningActionsCount = obj75177_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75177_onTap_runningActionsCount = window.obj75177_onTap_runningActionsCount - 1;
if (window.obj75177_onTap_runningActionsCount < 0) {
	window.obj75177_onTap_runningActionsCount = 0;
} else if (window.obj75177_onTap_runningActionsCount == 0) {
	obj75177_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75180(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75177_onTap_runningActionsCount = window.obj75177_onTap_runningActionsCount - 1;
if (window.obj75177_onTap_runningActionsCount < 0) {
	window.obj75177_onTap_runningActionsCount = 0;
} else if (window.obj75177_onTap_runningActionsCount == 0) {
	obj75177_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj75175 
playPauseMovie_75179();
function playPauseMovie_75179() {
	window.obj75177_onTap_runningActionsCount = obj75177_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75175")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj75177_onTap_runningActionsCount = window.obj75177_onTap_runningActionsCount - 1;
if (window.obj75177_onTap_runningActionsCount < 0) {
	window.obj75177_onTap_runningActionsCount = 0;
} else if (window.obj75177_onTap_runningActionsCount == 0) {
	obj75177_onTap_actionGroup1();
}
}

















};
obj75177_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75177_onTap_activeActionGroupIndex = -1;
		$("#obj75177").trigger("obj75177_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75177) {
				console.warn("de-queueing event obj75177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75177_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75185
(function(){
	window.obj75177_onTap_runningActionsCount = obj75177_onTap_runningActionsCount + 1;

	var selector = "#obj75185";
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
					window.obj75177_onTap_runningActionsCount = window.obj75177_onTap_runningActionsCount - 1;
if (window.obj75177_onTap_runningActionsCount < 0) {
	window.obj75177_onTap_runningActionsCount = 0;
} else if (window.obj75177_onTap_runningActionsCount == 0) {
	obj75177_onTap_actionGroup2();
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
				window.obj75177_onTap_runningActionsCount = window.obj75177_onTap_runningActionsCount - 1;
if (window.obj75177_onTap_runningActionsCount < 0) {
	window.obj75177_onTap_runningActionsCount = 0;
} else if (window.obj75177_onTap_runningActionsCount == 0) {
	obj75177_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75177_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75177_onTap_activeActionGroupIndex = -1;
		$("#obj75177").trigger("obj75177_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75177) {
				console.warn("de-queueing event obj75177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75177_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75175 
move_75182();
function move_75182() {
	window.obj75177_onTap_runningActionsCount = obj75177_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75175");
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
			window.obj75177_onTap_runningActionsCount = window.obj75177_onTap_runningActionsCount - 1;
if (window.obj75177_onTap_runningActionsCount < 0) {
	window.obj75177_onTap_runningActionsCount = 0;
} else if (window.obj75177_onTap_runningActionsCount == 0) {
	obj75177_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75177_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75177_onTap_activeActionGroupIndex = -1;
		$("#obj75177").trigger("obj75177_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75177) {
				console.warn("de-queueing event obj75177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75177_onTap_activeActionGroupIndex = 3;
	





















};
obj87651_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87651_onTap_activeActionGroupIndex = -1;
		$("#obj87651").trigger("obj87651_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87651) {
				console.warn("de-queueing event obj87651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87651_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87656 
stopAudio_87653();
function stopAudio_87653() {
	window.obj87651_onTap_runningActionsCount = obj87651_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87656")[0];
	myAudio.pause();
	window.obj87651_onTap_runningActionsCount = window.obj87651_onTap_runningActionsCount - 1;
if (window.obj87651_onTap_runningActionsCount < 0) {
	window.obj87651_onTap_runningActionsCount = 0;
} else if (window.obj87651_onTap_runningActionsCount == 0) {
	obj87651_onTap_actionGroup1();
}
}








};
obj87651_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87651_onTap_activeActionGroupIndex = -1;
		$("#obj87651").trigger("obj87651_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87651) {
				console.warn("de-queueing event obj87651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87651_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87651 
hide_87654();
function hide_87654() {
	var selector = "#obj87651";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87651_onTap_runningActionsCount = obj87651_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87651_onTap_runningActionsCount = window.obj87651_onTap_runningActionsCount - 1;
if (window.obj87651_onTap_runningActionsCount < 0) {
	window.obj87651_onTap_runningActionsCount = 0;
} else if (window.obj87651_onTap_runningActionsCount == 0) {
	obj87651_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87654(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87651_onTap_runningActionsCount = window.obj87651_onTap_runningActionsCount - 1;
if (window.obj87651_onTap_runningActionsCount < 0) {
	window.obj87651_onTap_runningActionsCount = 0;
} else if (window.obj87651_onTap_runningActionsCount == 0) {
	obj87651_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87651_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87651_onTap_activeActionGroupIndex = -1;
		$("#obj87651").trigger("obj87651_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87651) {
				console.warn("de-queueing event obj87651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87651_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87646
(function(){
	window.obj87651_onTap_runningActionsCount = obj87651_onTap_runningActionsCount + 1;

	var selector = "#obj87646";
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
					window.obj87651_onTap_runningActionsCount = window.obj87651_onTap_runningActionsCount - 1;
if (window.obj87651_onTap_runningActionsCount < 0) {
	window.obj87651_onTap_runningActionsCount = 0;
} else if (window.obj87651_onTap_runningActionsCount == 0) {
	obj87651_onTap_actionGroup3();
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
				window.obj87651_onTap_runningActionsCount = window.obj87651_onTap_runningActionsCount - 1;
if (window.obj87651_onTap_runningActionsCount < 0) {
	window.obj87651_onTap_runningActionsCount = 0;
} else if (window.obj87651_onTap_runningActionsCount == 0) {
	obj87651_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87651_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87651_onTap_activeActionGroupIndex = -1;
		$("#obj87651").trigger("obj87651_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87651) {
				console.warn("de-queueing event obj87651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87651_onTap_activeActionGroupIndex = 3;
	





















};
obj87646_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87646_onTap_activeActionGroupIndex = -1;
		$("#obj87646").trigger("obj87646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87646) {
				console.warn("de-queueing event obj87646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87646_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87646 
hide_87648();
function hide_87648() {
	var selector = "#obj87646";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87646_onTap_runningActionsCount = obj87646_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87646_onTap_runningActionsCount = window.obj87646_onTap_runningActionsCount - 1;
if (window.obj87646_onTap_runningActionsCount < 0) {
	window.obj87646_onTap_runningActionsCount = 0;
} else if (window.obj87646_onTap_runningActionsCount == 0) {
	obj87646_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87648(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87646_onTap_runningActionsCount = window.obj87646_onTap_runningActionsCount - 1;
if (window.obj87646_onTap_runningActionsCount < 0) {
	window.obj87646_onTap_runningActionsCount = 0;
} else if (window.obj87646_onTap_runningActionsCount == 0) {
	obj87646_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87646_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87646_onTap_activeActionGroupIndex = -1;
		$("#obj87646").trigger("obj87646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87646) {
				console.warn("de-queueing event obj87646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87646_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87651
(function(){
	window.obj87646_onTap_runningActionsCount = obj87646_onTap_runningActionsCount + 1;

	var selector = "#obj87651";
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
					window.obj87646_onTap_runningActionsCount = window.obj87646_onTap_runningActionsCount - 1;
if (window.obj87646_onTap_runningActionsCount < 0) {
	window.obj87646_onTap_runningActionsCount = 0;
} else if (window.obj87646_onTap_runningActionsCount == 0) {
	obj87646_onTap_actionGroup2();
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
				window.obj87646_onTap_runningActionsCount = window.obj87646_onTap_runningActionsCount - 1;
if (window.obj87646_onTap_runningActionsCount < 0) {
	window.obj87646_onTap_runningActionsCount = 0;
} else if (window.obj87646_onTap_runningActionsCount == 0) {
	obj87646_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87646_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87646_onTap_activeActionGroupIndex = -1;
		$("#obj87646").trigger("obj87646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87646) {
				console.warn("de-queueing event obj87646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87646_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87656 
playAudio_87650();
function playAudio_87650() {
	window.obj87646_onTap_runningActionsCount = obj87646_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87656")[0];
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
		    window.obj87646_onTap_runningActionsCount = window.obj87646_onTap_runningActionsCount - 1;
if (window.obj87646_onTap_runningActionsCount < 0) {
	window.obj87646_onTap_runningActionsCount = 0;
} else if (window.obj87646_onTap_runningActionsCount == 0) {
	obj87646_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87646_onTap_runningActionsCount = window.obj87646_onTap_runningActionsCount - 1;
if (window.obj87646_onTap_runningActionsCount < 0) {
	window.obj87646_onTap_runningActionsCount = 0;
} else if (window.obj87646_onTap_runningActionsCount == 0) {
	obj87646_onTap_actionGroup3();
}
	}
}









};
obj87646_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87646_onTap_activeActionGroupIndex = -1;
		$("#obj87646").trigger("obj87646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87646) {
				console.warn("de-queueing event obj87646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87646_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75228: Event Touch Down
 *
 */
$("#obj75228").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75228_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75228_onTap is still running");
	return;
}
var obj75228_onTap_runningActionsCount = 0;
var obj75228_onTap_loopCount = 0;
obj75228_onTap_actionGroup0();
});










/*
 *
 *   obj75225: Event Touch Down
 *
 */
$("#obj75225").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75225_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75225_onTap is still running");
	return;
}
var obj75225_onTap_runningActionsCount = 0;
var obj75225_onTap_loopCount = 0;
obj75225_onTap_actionGroup0();
});














































































































/*
 *
 *   obj75185: Event Touch Down
 *
 */
$("#obj75185").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75185_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75185_onTap is still running");
	return;
}
var obj75185_onTap_runningActionsCount = 0;
var obj75185_onTap_loopCount = 0;
obj75185_onTap_actionGroup0();
});










/*
 *
 *   obj75177: Event Touch Down
 *
 */
$("#obj75177").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75177_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75177_onTap is still running");
	return;
}
var obj75177_onTap_runningActionsCount = 0;
var obj75177_onTap_loopCount = 0;
obj75177_onTap_actionGroup0();
});










/*
 *
 *   obj87651: Event Touch Down
 *
 */
$("#obj87651").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87651_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87651_onTap is still running");
	return;
}
var obj87651_onTap_runningActionsCount = 0;
var obj87651_onTap_loopCount = 0;
obj87651_onTap_actionGroup0();
});










/*
 *
 *   obj87646: Event Touch Down
 *
 */
$("#obj87646").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87646_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87646_onTap is still running");
	return;
}
var obj87646_onTap_runningActionsCount = 0;
var obj87646_onTap_loopCount = 0;
obj87646_onTap_actionGroup0();
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
	
$("#obj75231").trigger('SCEventShow');
$("#obj75228").trigger('SCEventShow');
$("#obj75225").trigger('SCEventShow');
$("#obj75223").trigger('SCEventShow');
$("#obj75221").trigger('SCEventShow');
$("#obj75219").trigger('SCEventShow');
$("#obj75217").trigger('SCEventShow');
$("#obj75215").trigger('SCEventShow');
$("#obj75213").trigger('SCEventShow');
$("#obj75211").trigger('SCEventShow');
$("#obj75207").trigger('SCEventShow');
$("#obj75205").trigger('SCEventShow');
$("#obj75203").trigger('SCEventShow');
$("#obj75185").trigger('SCEventShow');
$("#obj75177").trigger('SCEventShow');
$("#obj87651").trigger('SCEventShow');
$("#obj87646").trigger('SCEventShow');
$("#obj87656").trigger('SCEventShow');
$("#obj94765").trigger('SCEventShow');
$("#obj75175").trigger('SCEventShow');
	
});