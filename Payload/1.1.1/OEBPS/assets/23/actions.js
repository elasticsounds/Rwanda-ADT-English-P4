pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 4089;
pubcoder.page.title = pubcoder.page.title || "23";
pubcoder.page.number = pubcoder.page.number || 23;
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
var obj4105_onTap_activeActionGroupIndex = -1;
var obj4105_onTap_runningActionsCount = 0;
var obj4105_onTap_loopCount = 0;
var obj4102_onTap_activeActionGroupIndex = -1;
var obj4102_onTap_runningActionsCount = 0;
var obj4102_onTap_loopCount = 0;
var obj65326_onTap_activeActionGroupIndex = -1;
var obj65326_onTap_runningActionsCount = 0;
var obj65326_onTap_loopCount = 0;
var obj65318_onTap_activeActionGroupIndex = -1;
var obj65318_onTap_runningActionsCount = 0;
var obj65318_onTap_loopCount = 0;
var obj89788_onTap_activeActionGroupIndex = -1;
var obj89788_onTap_runningActionsCount = 0;
var obj89788_onTap_loopCount = 0;
var obj89783_onTap_activeActionGroupIndex = -1;
var obj89783_onTap_runningActionsCount = 0;
var obj89783_onTap_loopCount = 0;
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
		
obj4105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4105_onTap_activeActionGroupIndex = -1;
		$("#obj4105").trigger("obj4105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4105) {
				console.warn("de-queueing event obj4105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4105_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4107();
function goToPage_4107() {
	window.obj4105_onTap_runningActionsCount = obj4105_onTap_runningActionsCount + 1;
	$("#anchor142")[0].click();
	window.obj4105_onTap_runningActionsCount = window.obj4105_onTap_runningActionsCount - 1;
if (window.obj4105_onTap_runningActionsCount < 0) {
	window.obj4105_onTap_runningActionsCount = 0;
} else if (window.obj4105_onTap_runningActionsCount == 0) {
	obj4105_onTap_actionGroup1();
}
}





















};
obj4105_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4105_onTap_activeActionGroupIndex = -1;
		$("#obj4105").trigger("obj4105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4105) {
				console.warn("de-queueing event obj4105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4105_onTap_activeActionGroupIndex = 1;
	





















};
obj4102_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4102_onTap_activeActionGroupIndex = -1;
		$("#obj4102").trigger("obj4102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4102) {
				console.warn("de-queueing event obj4102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4102_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4104();
function goToPage_4104() {
	window.obj4102_onTap_runningActionsCount = obj4102_onTap_runningActionsCount + 1;
	$("#anchor143")[0].click();
	window.obj4102_onTap_runningActionsCount = window.obj4102_onTap_runningActionsCount - 1;
if (window.obj4102_onTap_runningActionsCount < 0) {
	window.obj4102_onTap_runningActionsCount = 0;
} else if (window.obj4102_onTap_runningActionsCount == 0) {
	obj4102_onTap_actionGroup1();
}
}





















};
obj4102_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4102_onTap_activeActionGroupIndex = -1;
		$("#obj4102").trigger("obj4102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4102) {
				console.warn("de-queueing event obj4102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4102_onTap_activeActionGroupIndex = 1;
	





















};
obj65326_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65326_onTap_activeActionGroupIndex = -1;
		$("#obj65326").trigger("obj65326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65326) {
				console.warn("de-queueing event obj65326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65326_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65326 
hide_65329();
function hide_65329() {
	var selector = "#obj65326";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65326_onTap_runningActionsCount = obj65326_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65326_onTap_runningActionsCount = window.obj65326_onTap_runningActionsCount - 1;
if (window.obj65326_onTap_runningActionsCount < 0) {
	window.obj65326_onTap_runningActionsCount = 0;
} else if (window.obj65326_onTap_runningActionsCount == 0) {
	obj65326_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65329(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65326_onTap_runningActionsCount = window.obj65326_onTap_runningActionsCount - 1;
if (window.obj65326_onTap_runningActionsCount < 0) {
	window.obj65326_onTap_runningActionsCount = 0;
} else if (window.obj65326_onTap_runningActionsCount == 0) {
	obj65326_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65332 
stopMovie_65328();
function stopMovie_65328() {
	window.obj65326_onTap_runningActionsCount = obj65326_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65332")[0];
	myVideo.pause();
	window.obj65326_onTap_runningActionsCount = window.obj65326_onTap_runningActionsCount - 1;
if (window.obj65326_onTap_runningActionsCount < 0) {
	window.obj65326_onTap_runningActionsCount = 0;
} else if (window.obj65326_onTap_runningActionsCount == 0) {
	obj65326_onTap_actionGroup1();
}
}
















};
obj65326_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65326_onTap_activeActionGroupIndex = -1;
		$("#obj65326").trigger("obj65326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65326) {
				console.warn("de-queueing event obj65326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65326_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65318
(function(){
	window.obj65326_onTap_runningActionsCount = obj65326_onTap_runningActionsCount + 1;

	var selector = "#obj65318";
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
					window.obj65326_onTap_runningActionsCount = window.obj65326_onTap_runningActionsCount - 1;
if (window.obj65326_onTap_runningActionsCount < 0) {
	window.obj65326_onTap_runningActionsCount = 0;
} else if (window.obj65326_onTap_runningActionsCount == 0) {
	obj65326_onTap_actionGroup2();
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
				window.obj65326_onTap_runningActionsCount = window.obj65326_onTap_runningActionsCount - 1;
if (window.obj65326_onTap_runningActionsCount < 0) {
	window.obj65326_onTap_runningActionsCount = 0;
} else if (window.obj65326_onTap_runningActionsCount == 0) {
	obj65326_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65326_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65326_onTap_activeActionGroupIndex = -1;
		$("#obj65326").trigger("obj65326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65326) {
				console.warn("de-queueing event obj65326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65326_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65332 
move_65331();
function move_65331() {
	window.obj65326_onTap_runningActionsCount = obj65326_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65332");
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
			window.obj65326_onTap_runningActionsCount = window.obj65326_onTap_runningActionsCount - 1;
if (window.obj65326_onTap_runningActionsCount < 0) {
	window.obj65326_onTap_runningActionsCount = 0;
} else if (window.obj65326_onTap_runningActionsCount == 0) {
	obj65326_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65326_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65326_onTap_activeActionGroupIndex = -1;
		$("#obj65326").trigger("obj65326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65326) {
				console.warn("de-queueing event obj65326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65326_onTap_activeActionGroupIndex = 3;
	





















};
obj65318_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65318_onTap_activeActionGroupIndex = -1;
		$("#obj65318").trigger("obj65318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65318) {
				console.warn("de-queueing event obj65318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65318_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65318 
hide_65321();
function hide_65321() {
	var selector = "#obj65318";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65318_onTap_runningActionsCount = obj65318_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65318_onTap_runningActionsCount = window.obj65318_onTap_runningActionsCount - 1;
if (window.obj65318_onTap_runningActionsCount < 0) {
	window.obj65318_onTap_runningActionsCount = 0;
} else if (window.obj65318_onTap_runningActionsCount == 0) {
	obj65318_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65321(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65318_onTap_runningActionsCount = window.obj65318_onTap_runningActionsCount - 1;
if (window.obj65318_onTap_runningActionsCount < 0) {
	window.obj65318_onTap_runningActionsCount = 0;
} else if (window.obj65318_onTap_runningActionsCount == 0) {
	obj65318_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65332 
playPauseMovie_65320();
function playPauseMovie_65320() {
	window.obj65318_onTap_runningActionsCount = obj65318_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65332")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65318_onTap_runningActionsCount = window.obj65318_onTap_runningActionsCount - 1;
if (window.obj65318_onTap_runningActionsCount < 0) {
	window.obj65318_onTap_runningActionsCount = 0;
} else if (window.obj65318_onTap_runningActionsCount == 0) {
	obj65318_onTap_actionGroup1();
}
}

















};
obj65318_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65318_onTap_activeActionGroupIndex = -1;
		$("#obj65318").trigger("obj65318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65318) {
				console.warn("de-queueing event obj65318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65318_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65326
(function(){
	window.obj65318_onTap_runningActionsCount = obj65318_onTap_runningActionsCount + 1;

	var selector = "#obj65326";
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
					window.obj65318_onTap_runningActionsCount = window.obj65318_onTap_runningActionsCount - 1;
if (window.obj65318_onTap_runningActionsCount < 0) {
	window.obj65318_onTap_runningActionsCount = 0;
} else if (window.obj65318_onTap_runningActionsCount == 0) {
	obj65318_onTap_actionGroup2();
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
				window.obj65318_onTap_runningActionsCount = window.obj65318_onTap_runningActionsCount - 1;
if (window.obj65318_onTap_runningActionsCount < 0) {
	window.obj65318_onTap_runningActionsCount = 0;
} else if (window.obj65318_onTap_runningActionsCount == 0) {
	obj65318_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65318_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65318_onTap_activeActionGroupIndex = -1;
		$("#obj65318").trigger("obj65318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65318) {
				console.warn("de-queueing event obj65318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65318_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65332 
move_65323();
function move_65323() {
	window.obj65318_onTap_runningActionsCount = obj65318_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65332");
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
			window.obj65318_onTap_runningActionsCount = window.obj65318_onTap_runningActionsCount - 1;
if (window.obj65318_onTap_runningActionsCount < 0) {
	window.obj65318_onTap_runningActionsCount = 0;
} else if (window.obj65318_onTap_runningActionsCount == 0) {
	obj65318_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65318_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65318_onTap_activeActionGroupIndex = -1;
		$("#obj65318").trigger("obj65318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65318) {
				console.warn("de-queueing event obj65318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65318_onTap_activeActionGroupIndex = 3;
	





















};
obj89788_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89788_onTap_activeActionGroupIndex = -1;
		$("#obj89788").trigger("obj89788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89788) {
				console.warn("de-queueing event obj89788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89788_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89793 
stopAudio_89790();
function stopAudio_89790() {
	window.obj89788_onTap_runningActionsCount = obj89788_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89793")[0];
	myAudio.pause();
	window.obj89788_onTap_runningActionsCount = window.obj89788_onTap_runningActionsCount - 1;
if (window.obj89788_onTap_runningActionsCount < 0) {
	window.obj89788_onTap_runningActionsCount = 0;
} else if (window.obj89788_onTap_runningActionsCount == 0) {
	obj89788_onTap_actionGroup1();
}
}








};
obj89788_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89788_onTap_activeActionGroupIndex = -1;
		$("#obj89788").trigger("obj89788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89788) {
				console.warn("de-queueing event obj89788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89788_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89788 
hide_89791();
function hide_89791() {
	var selector = "#obj89788";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89788_onTap_runningActionsCount = obj89788_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89788_onTap_runningActionsCount = window.obj89788_onTap_runningActionsCount - 1;
if (window.obj89788_onTap_runningActionsCount < 0) {
	window.obj89788_onTap_runningActionsCount = 0;
} else if (window.obj89788_onTap_runningActionsCount == 0) {
	obj89788_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89791(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89788_onTap_runningActionsCount = window.obj89788_onTap_runningActionsCount - 1;
if (window.obj89788_onTap_runningActionsCount < 0) {
	window.obj89788_onTap_runningActionsCount = 0;
} else if (window.obj89788_onTap_runningActionsCount == 0) {
	obj89788_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89788_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89788_onTap_activeActionGroupIndex = -1;
		$("#obj89788").trigger("obj89788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89788) {
				console.warn("de-queueing event obj89788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89788_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89783
(function(){
	window.obj89788_onTap_runningActionsCount = obj89788_onTap_runningActionsCount + 1;

	var selector = "#obj89783";
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
					window.obj89788_onTap_runningActionsCount = window.obj89788_onTap_runningActionsCount - 1;
if (window.obj89788_onTap_runningActionsCount < 0) {
	window.obj89788_onTap_runningActionsCount = 0;
} else if (window.obj89788_onTap_runningActionsCount == 0) {
	obj89788_onTap_actionGroup3();
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
				window.obj89788_onTap_runningActionsCount = window.obj89788_onTap_runningActionsCount - 1;
if (window.obj89788_onTap_runningActionsCount < 0) {
	window.obj89788_onTap_runningActionsCount = 0;
} else if (window.obj89788_onTap_runningActionsCount == 0) {
	obj89788_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89788_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89788_onTap_activeActionGroupIndex = -1;
		$("#obj89788").trigger("obj89788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89788) {
				console.warn("de-queueing event obj89788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89788_onTap_activeActionGroupIndex = 3;
	





















};
obj89783_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89783_onTap_activeActionGroupIndex = -1;
		$("#obj89783").trigger("obj89783_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89783) {
				console.warn("de-queueing event obj89783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89783_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89783 
hide_89785();
function hide_89785() {
	var selector = "#obj89783";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89783_onTap_runningActionsCount = obj89783_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89783_onTap_runningActionsCount = window.obj89783_onTap_runningActionsCount - 1;
if (window.obj89783_onTap_runningActionsCount < 0) {
	window.obj89783_onTap_runningActionsCount = 0;
} else if (window.obj89783_onTap_runningActionsCount == 0) {
	obj89783_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89785(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89783_onTap_runningActionsCount = window.obj89783_onTap_runningActionsCount - 1;
if (window.obj89783_onTap_runningActionsCount < 0) {
	window.obj89783_onTap_runningActionsCount = 0;
} else if (window.obj89783_onTap_runningActionsCount == 0) {
	obj89783_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89783_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89783_onTap_activeActionGroupIndex = -1;
		$("#obj89783").trigger("obj89783_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89783) {
				console.warn("de-queueing event obj89783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89783_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89788
(function(){
	window.obj89783_onTap_runningActionsCount = obj89783_onTap_runningActionsCount + 1;

	var selector = "#obj89788";
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
					window.obj89783_onTap_runningActionsCount = window.obj89783_onTap_runningActionsCount - 1;
if (window.obj89783_onTap_runningActionsCount < 0) {
	window.obj89783_onTap_runningActionsCount = 0;
} else if (window.obj89783_onTap_runningActionsCount == 0) {
	obj89783_onTap_actionGroup2();
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
				window.obj89783_onTap_runningActionsCount = window.obj89783_onTap_runningActionsCount - 1;
if (window.obj89783_onTap_runningActionsCount < 0) {
	window.obj89783_onTap_runningActionsCount = 0;
} else if (window.obj89783_onTap_runningActionsCount == 0) {
	obj89783_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89783_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89783_onTap_activeActionGroupIndex = -1;
		$("#obj89783").trigger("obj89783_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89783) {
				console.warn("de-queueing event obj89783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89783_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89793 
playAudio_89787();
function playAudio_89787() {
	window.obj89783_onTap_runningActionsCount = obj89783_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89793")[0];
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
		    window.obj89783_onTap_runningActionsCount = window.obj89783_onTap_runningActionsCount - 1;
if (window.obj89783_onTap_runningActionsCount < 0) {
	window.obj89783_onTap_runningActionsCount = 0;
} else if (window.obj89783_onTap_runningActionsCount == 0) {
	obj89783_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89783_onTap_runningActionsCount = window.obj89783_onTap_runningActionsCount - 1;
if (window.obj89783_onTap_runningActionsCount < 0) {
	window.obj89783_onTap_runningActionsCount = 0;
} else if (window.obj89783_onTap_runningActionsCount == 0) {
	obj89783_onTap_actionGroup3();
}
	}
}









};
obj89783_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89783_onTap_activeActionGroupIndex = -1;
		$("#obj89783").trigger("obj89783_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89783) {
				console.warn("de-queueing event obj89783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89783_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj4105: Event Touch Down
 *
 */
$("#obj4105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4105_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4105_onTap is still running");
	return;
}
var obj4105_onTap_runningActionsCount = 0;
var obj4105_onTap_loopCount = 0;
obj4105_onTap_actionGroup0();
});










/*
 *
 *   obj4102: Event Touch Down
 *
 */
$("#obj4102").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4102_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4102_onTap is still running");
	return;
}
var obj4102_onTap_runningActionsCount = 0;
var obj4102_onTap_loopCount = 0;
obj4102_onTap_actionGroup0();
});


























































































/*
 *
 *   obj65326: Event Touch Down
 *
 */
$("#obj65326").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65326_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65326_onTap is still running");
	return;
}
var obj65326_onTap_runningActionsCount = 0;
var obj65326_onTap_loopCount = 0;
obj65326_onTap_actionGroup0();
});










/*
 *
 *   obj65318: Event Touch Down
 *
 */
$("#obj65318").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65318_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65318_onTap is still running");
	return;
}
var obj65318_onTap_runningActionsCount = 0;
var obj65318_onTap_loopCount = 0;
obj65318_onTap_actionGroup0();
});










/*
 *
 *   obj89788: Event Touch Down
 *
 */
$("#obj89788").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89788_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89788_onTap is still running");
	return;
}
var obj89788_onTap_runningActionsCount = 0;
var obj89788_onTap_loopCount = 0;
obj89788_onTap_actionGroup0();
});










/*
 *
 *   obj89783: Event Touch Down
 *
 */
$("#obj89783").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89783_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89783_onTap is still running");
	return;
}
var obj89783_onTap_runningActionsCount = 0;
var obj89783_onTap_loopCount = 0;
obj89783_onTap_actionGroup0();
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
	
$("#obj4100").trigger('SCEventShow');
$("#obj4105").trigger('SCEventShow');
$("#obj4102").trigger('SCEventShow');
$("#obj4092").trigger('SCEventShow');
$("#obj4090").trigger('SCEventShow');
$("#obj4094").trigger('SCEventShow');
$("#obj4098").trigger('SCEventShow');
$("#obj4121").trigger('SCEventShow');
$("#obj4123").trigger('SCEventShow');
$("#obj4125").trigger('SCEventShow');
$("#obj4130").trigger('SCEventShow');
$("#obj65326").trigger('SCEventShow');
$("#obj65318").trigger('SCEventShow');
$("#obj89788").trigger('SCEventShow');
$("#obj89783").trigger('SCEventShow');
$("#obj89793").trigger('SCEventShow');
$("#obj94675").trigger('SCEventShow');
$("#obj65332").trigger('SCEventShow');
	
});