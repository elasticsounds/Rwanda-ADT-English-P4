pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 96053;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
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
var obj96084_onTap_activeActionGroupIndex = -1;
var obj96084_onTap_runningActionsCount = 0;
var obj96084_onTap_loopCount = 0;
var obj96081_onTap_activeActionGroupIndex = -1;
var obj96081_onTap_runningActionsCount = 0;
var obj96081_onTap_loopCount = 0;
var obj96075_onTap_activeActionGroupIndex = -1;
var obj96075_onTap_runningActionsCount = 0;
var obj96075_onTap_loopCount = 0;
var obj96067_onTap_activeActionGroupIndex = -1;
var obj96067_onTap_runningActionsCount = 0;
var obj96067_onTap_loopCount = 0;
var obj96062_onTap_activeActionGroupIndex = -1;
var obj96062_onTap_runningActionsCount = 0;
var obj96062_onTap_loopCount = 0;
var obj96057_onTap_activeActionGroupIndex = -1;
var obj96057_onTap_runningActionsCount = 0;
var obj96057_onTap_loopCount = 0;
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
		
obj96084_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96084_onTap_activeActionGroupIndex = -1;
		$("#obj96084").trigger("obj96084_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96084) {
				console.warn("de-queueing event obj96084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96084_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_96086();
function goToPage_96086() {
	window.obj96084_onTap_runningActionsCount = obj96084_onTap_runningActionsCount + 1;
	$("#anchor19")[0].click();
	window.obj96084_onTap_runningActionsCount = window.obj96084_onTap_runningActionsCount - 1;
if (window.obj96084_onTap_runningActionsCount < 0) {
	window.obj96084_onTap_runningActionsCount = 0;
} else if (window.obj96084_onTap_runningActionsCount == 0) {
	obj96084_onTap_actionGroup1();
}
}





















};
obj96084_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96084_onTap_activeActionGroupIndex = -1;
		$("#obj96084").trigger("obj96084_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96084) {
				console.warn("de-queueing event obj96084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96084_onTap_activeActionGroupIndex = 1;
	





















};
obj96081_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96081_onTap_activeActionGroupIndex = -1;
		$("#obj96081").trigger("obj96081_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96081) {
				console.warn("de-queueing event obj96081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96081_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_96083();
function goToPage_96083() {
	window.obj96081_onTap_runningActionsCount = obj96081_onTap_runningActionsCount + 1;
	$("#anchor20")[0].click();
	window.obj96081_onTap_runningActionsCount = window.obj96081_onTap_runningActionsCount - 1;
if (window.obj96081_onTap_runningActionsCount < 0) {
	window.obj96081_onTap_runningActionsCount = 0;
} else if (window.obj96081_onTap_runningActionsCount == 0) {
	obj96081_onTap_actionGroup1();
}
}





















};
obj96081_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96081_onTap_activeActionGroupIndex = -1;
		$("#obj96081").trigger("obj96081_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96081) {
				console.warn("de-queueing event obj96081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96081_onTap_activeActionGroupIndex = 1;
	





















};
obj96075_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96075_onTap_activeActionGroupIndex = -1;
		$("#obj96075").trigger("obj96075_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96075) {
				console.warn("de-queueing event obj96075." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96075").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96075_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj96075 
hide_96078();
function hide_96078() {
	var selector = "#obj96075";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96075_onTap_runningActionsCount = obj96075_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96075_onTap_runningActionsCount = window.obj96075_onTap_runningActionsCount - 1;
if (window.obj96075_onTap_runningActionsCount < 0) {
	window.obj96075_onTap_runningActionsCount = 0;
} else if (window.obj96075_onTap_runningActionsCount == 0) {
	obj96075_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96078(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96075_onTap_runningActionsCount = window.obj96075_onTap_runningActionsCount - 1;
if (window.obj96075_onTap_runningActionsCount < 0) {
	window.obj96075_onTap_runningActionsCount = 0;
} else if (window.obj96075_onTap_runningActionsCount == 0) {
	obj96075_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj96621 
stopMovie_96077();
function stopMovie_96077() {
	window.obj96075_onTap_runningActionsCount = obj96075_onTap_runningActionsCount + 1;
	var myVideo = $("#obj96621")[0];
	myVideo.pause();
	window.obj96075_onTap_runningActionsCount = window.obj96075_onTap_runningActionsCount - 1;
if (window.obj96075_onTap_runningActionsCount < 0) {
	window.obj96075_onTap_runningActionsCount = 0;
} else if (window.obj96075_onTap_runningActionsCount == 0) {
	obj96075_onTap_actionGroup1();
}
}
















};
obj96075_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96075_onTap_activeActionGroupIndex = -1;
		$("#obj96075").trigger("obj96075_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96075) {
				console.warn("de-queueing event obj96075." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96075").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96075_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj96067
(function(){
	window.obj96075_onTap_runningActionsCount = obj96075_onTap_runningActionsCount + 1;

	var selector = "#obj96067";
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
					window.obj96075_onTap_runningActionsCount = window.obj96075_onTap_runningActionsCount - 1;
if (window.obj96075_onTap_runningActionsCount < 0) {
	window.obj96075_onTap_runningActionsCount = 0;
} else if (window.obj96075_onTap_runningActionsCount == 0) {
	obj96075_onTap_actionGroup2();
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
				window.obj96075_onTap_runningActionsCount = window.obj96075_onTap_runningActionsCount - 1;
if (window.obj96075_onTap_runningActionsCount < 0) {
	window.obj96075_onTap_runningActionsCount = 0;
} else if (window.obj96075_onTap_runningActionsCount == 0) {
	obj96075_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96075_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96075_onTap_activeActionGroupIndex = -1;
		$("#obj96075").trigger("obj96075_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96075) {
				console.warn("de-queueing event obj96075." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96075").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96075_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj96621 
move_96080();
function move_96080() {
	window.obj96075_onTap_runningActionsCount = obj96075_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj96621");
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
			window.obj96075_onTap_runningActionsCount = window.obj96075_onTap_runningActionsCount - 1;
if (window.obj96075_onTap_runningActionsCount < 0) {
	window.obj96075_onTap_runningActionsCount = 0;
} else if (window.obj96075_onTap_runningActionsCount == 0) {
	obj96075_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj96075_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96075_onTap_activeActionGroupIndex = -1;
		$("#obj96075").trigger("obj96075_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96075) {
				console.warn("de-queueing event obj96075." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96075").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96075_onTap_activeActionGroupIndex = 3;
	





















};
obj96067_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96067_onTap_activeActionGroupIndex = -1;
		$("#obj96067").trigger("obj96067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96067) {
				console.warn("de-queueing event obj96067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96067_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj96067 
hide_96070();
function hide_96070() {
	var selector = "#obj96067";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96067_onTap_runningActionsCount = obj96067_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96067_onTap_runningActionsCount = window.obj96067_onTap_runningActionsCount - 1;
if (window.obj96067_onTap_runningActionsCount < 0) {
	window.obj96067_onTap_runningActionsCount = 0;
} else if (window.obj96067_onTap_runningActionsCount == 0) {
	obj96067_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96070(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96067_onTap_runningActionsCount = window.obj96067_onTap_runningActionsCount - 1;
if (window.obj96067_onTap_runningActionsCount < 0) {
	window.obj96067_onTap_runningActionsCount = 0;
} else if (window.obj96067_onTap_runningActionsCount == 0) {
	obj96067_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj96621 
playPauseMovie_96069();
function playPauseMovie_96069() {
	window.obj96067_onTap_runningActionsCount = obj96067_onTap_runningActionsCount + 1;
	var myVideo = $("#obj96621")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj96067_onTap_runningActionsCount = window.obj96067_onTap_runningActionsCount - 1;
if (window.obj96067_onTap_runningActionsCount < 0) {
	window.obj96067_onTap_runningActionsCount = 0;
} else if (window.obj96067_onTap_runningActionsCount == 0) {
	obj96067_onTap_actionGroup1();
}
}

















};
obj96067_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96067_onTap_activeActionGroupIndex = -1;
		$("#obj96067").trigger("obj96067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96067) {
				console.warn("de-queueing event obj96067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96067_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj96075
(function(){
	window.obj96067_onTap_runningActionsCount = obj96067_onTap_runningActionsCount + 1;

	var selector = "#obj96075";
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
					window.obj96067_onTap_runningActionsCount = window.obj96067_onTap_runningActionsCount - 1;
if (window.obj96067_onTap_runningActionsCount < 0) {
	window.obj96067_onTap_runningActionsCount = 0;
} else if (window.obj96067_onTap_runningActionsCount == 0) {
	obj96067_onTap_actionGroup2();
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
				window.obj96067_onTap_runningActionsCount = window.obj96067_onTap_runningActionsCount - 1;
if (window.obj96067_onTap_runningActionsCount < 0) {
	window.obj96067_onTap_runningActionsCount = 0;
} else if (window.obj96067_onTap_runningActionsCount == 0) {
	obj96067_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96067_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96067_onTap_activeActionGroupIndex = -1;
		$("#obj96067").trigger("obj96067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96067) {
				console.warn("de-queueing event obj96067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96067_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj96621 
move_96072();
function move_96072() {
	window.obj96067_onTap_runningActionsCount = obj96067_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj96621");
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
			window.obj96067_onTap_runningActionsCount = window.obj96067_onTap_runningActionsCount - 1;
if (window.obj96067_onTap_runningActionsCount < 0) {
	window.obj96067_onTap_runningActionsCount = 0;
} else if (window.obj96067_onTap_runningActionsCount == 0) {
	obj96067_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj96067_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96067_onTap_activeActionGroupIndex = -1;
		$("#obj96067").trigger("obj96067_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96067) {
				console.warn("de-queueing event obj96067." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96067").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96067_onTap_activeActionGroupIndex = 3;
	





















};
obj96062_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96062_onTap_activeActionGroupIndex = -1;
		$("#obj96062").trigger("obj96062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96062) {
				console.warn("de-queueing event obj96062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96062_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj96619 
stopAudio_96064();
function stopAudio_96064() {
	window.obj96062_onTap_runningActionsCount = obj96062_onTap_runningActionsCount + 1;
	var myAudio = $("#obj96619")[0];
	myAudio.pause();
	window.obj96062_onTap_runningActionsCount = window.obj96062_onTap_runningActionsCount - 1;
if (window.obj96062_onTap_runningActionsCount < 0) {
	window.obj96062_onTap_runningActionsCount = 0;
} else if (window.obj96062_onTap_runningActionsCount == 0) {
	obj96062_onTap_actionGroup1();
}
}








};
obj96062_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96062_onTap_activeActionGroupIndex = -1;
		$("#obj96062").trigger("obj96062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96062) {
				console.warn("de-queueing event obj96062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96062_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj96062 
hide_96065();
function hide_96065() {
	var selector = "#obj96062";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96062_onTap_runningActionsCount = obj96062_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96062_onTap_runningActionsCount = window.obj96062_onTap_runningActionsCount - 1;
if (window.obj96062_onTap_runningActionsCount < 0) {
	window.obj96062_onTap_runningActionsCount = 0;
} else if (window.obj96062_onTap_runningActionsCount == 0) {
	obj96062_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96065(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96062_onTap_runningActionsCount = window.obj96062_onTap_runningActionsCount - 1;
if (window.obj96062_onTap_runningActionsCount < 0) {
	window.obj96062_onTap_runningActionsCount = 0;
} else if (window.obj96062_onTap_runningActionsCount == 0) {
	obj96062_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj96062_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96062_onTap_activeActionGroupIndex = -1;
		$("#obj96062").trigger("obj96062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96062) {
				console.warn("de-queueing event obj96062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96062_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj96057
(function(){
	window.obj96062_onTap_runningActionsCount = obj96062_onTap_runningActionsCount + 1;

	var selector = "#obj96057";
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
					window.obj96062_onTap_runningActionsCount = window.obj96062_onTap_runningActionsCount - 1;
if (window.obj96062_onTap_runningActionsCount < 0) {
	window.obj96062_onTap_runningActionsCount = 0;
} else if (window.obj96062_onTap_runningActionsCount == 0) {
	obj96062_onTap_actionGroup3();
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
				window.obj96062_onTap_runningActionsCount = window.obj96062_onTap_runningActionsCount - 1;
if (window.obj96062_onTap_runningActionsCount < 0) {
	window.obj96062_onTap_runningActionsCount = 0;
} else if (window.obj96062_onTap_runningActionsCount == 0) {
	obj96062_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96062_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96062_onTap_activeActionGroupIndex = -1;
		$("#obj96062").trigger("obj96062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96062) {
				console.warn("de-queueing event obj96062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96062_onTap_activeActionGroupIndex = 3;
	





















};
obj96057_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96057_onTap_activeActionGroupIndex = -1;
		$("#obj96057").trigger("obj96057_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96057) {
				console.warn("de-queueing event obj96057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96057_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj96057 
hide_96059();
function hide_96059() {
	var selector = "#obj96057";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj96057_onTap_runningActionsCount = obj96057_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj96057_onTap_runningActionsCount = window.obj96057_onTap_runningActionsCount - 1;
if (window.obj96057_onTap_runningActionsCount < 0) {
	window.obj96057_onTap_runningActionsCount = 0;
} else if (window.obj96057_onTap_runningActionsCount == 0) {
	obj96057_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_96059(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj96057_onTap_runningActionsCount = window.obj96057_onTap_runningActionsCount - 1;
if (window.obj96057_onTap_runningActionsCount < 0) {
	window.obj96057_onTap_runningActionsCount = 0;
} else if (window.obj96057_onTap_runningActionsCount == 0) {
	obj96057_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj96057_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96057_onTap_activeActionGroupIndex = -1;
		$("#obj96057").trigger("obj96057_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96057) {
				console.warn("de-queueing event obj96057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96057_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj96062
(function(){
	window.obj96057_onTap_runningActionsCount = obj96057_onTap_runningActionsCount + 1;

	var selector = "#obj96062";
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
					window.obj96057_onTap_runningActionsCount = window.obj96057_onTap_runningActionsCount - 1;
if (window.obj96057_onTap_runningActionsCount < 0) {
	window.obj96057_onTap_runningActionsCount = 0;
} else if (window.obj96057_onTap_runningActionsCount == 0) {
	obj96057_onTap_actionGroup2();
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
				window.obj96057_onTap_runningActionsCount = window.obj96057_onTap_runningActionsCount - 1;
if (window.obj96057_onTap_runningActionsCount < 0) {
	window.obj96057_onTap_runningActionsCount = 0;
} else if (window.obj96057_onTap_runningActionsCount == 0) {
	obj96057_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj96057_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj96057_onTap_activeActionGroupIndex = -1;
		$("#obj96057").trigger("obj96057_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96057) {
				console.warn("de-queueing event obj96057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96057_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj96619 
playAudio_96061();
function playAudio_96061() {
	window.obj96057_onTap_runningActionsCount = obj96057_onTap_runningActionsCount + 1;
	var myAudio = $("#obj96619")[0];
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
		    window.obj96057_onTap_runningActionsCount = window.obj96057_onTap_runningActionsCount - 1;
if (window.obj96057_onTap_runningActionsCount < 0) {
	window.obj96057_onTap_runningActionsCount = 0;
} else if (window.obj96057_onTap_runningActionsCount == 0) {
	obj96057_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj96057_onTap_runningActionsCount = window.obj96057_onTap_runningActionsCount - 1;
if (window.obj96057_onTap_runningActionsCount < 0) {
	window.obj96057_onTap_runningActionsCount = 0;
} else if (window.obj96057_onTap_runningActionsCount == 0) {
	obj96057_onTap_actionGroup3();
}
	}
}









};
obj96057_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj96057_onTap_activeActionGroupIndex = -1;
		$("#obj96057").trigger("obj96057_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 96057) {
				console.warn("de-queueing event obj96057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj96057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj96057_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj96084: Event Touch Down
 *
 */
$("#obj96084").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96084_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96084_onTap is still running");
	return;
}
var obj96084_onTap_runningActionsCount = 0;
var obj96084_onTap_loopCount = 0;
obj96084_onTap_actionGroup0();
});










/*
 *
 *   obj96081: Event Touch Down
 *
 */
$("#obj96081").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96081_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96081_onTap is still running");
	return;
}
var obj96081_onTap_runningActionsCount = 0;
var obj96081_onTap_loopCount = 0;
obj96081_onTap_actionGroup0();
});










/*
 *
 *   obj96075: Event Touch Down
 *
 */
$("#obj96075").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96075_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96075_onTap is still running");
	return;
}
var obj96075_onTap_runningActionsCount = 0;
var obj96075_onTap_loopCount = 0;
obj96075_onTap_actionGroup0();
});










/*
 *
 *   obj96067: Event Touch Down
 *
 */
$("#obj96067").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96067_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96067_onTap is still running");
	return;
}
var obj96067_onTap_runningActionsCount = 0;
var obj96067_onTap_loopCount = 0;
obj96067_onTap_actionGroup0();
});










/*
 *
 *   obj96062: Event Touch Down
 *
 */
$("#obj96062").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96062_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96062_onTap is still running");
	return;
}
var obj96062_onTap_runningActionsCount = 0;
var obj96062_onTap_loopCount = 0;
obj96062_onTap_actionGroup0();
});










/*
 *
 *   obj96057: Event Touch Down
 *
 */
$("#obj96057").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj96057_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj96057_onTap is still running");
	return;
}
var obj96057_onTap_runningActionsCount = 0;
var obj96057_onTap_loopCount = 0;
obj96057_onTap_actionGroup0();
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
	
$("#obj96087").trigger('SCEventShow');
$("#obj96084").trigger('SCEventShow');
$("#obj96081").trigger('SCEventShow');
$("#obj96075").trigger('SCEventShow');
$("#obj96067").trigger('SCEventShow');
$("#obj96062").trigger('SCEventShow');
$("#obj96057").trigger('SCEventShow');
$("#obj96125").trigger('SCEventShow');
$("#obj96055").trigger('SCEventShow');
$("#obj96619").trigger('SCEventShow');
$("#obj96621").trigger('SCEventShow');
	
});