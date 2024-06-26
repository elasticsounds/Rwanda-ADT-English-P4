pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 55858;
pubcoder.page.title = pubcoder.page.title || "205";
pubcoder.page.number = pubcoder.page.number || 205;
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
var obj55866_onTap_activeActionGroupIndex = -1;
var obj55866_onTap_runningActionsCount = 0;
var obj55866_onTap_loopCount = 0;
var obj55863_onTap_activeActionGroupIndex = -1;
var obj55863_onTap_runningActionsCount = 0;
var obj55863_onTap_loopCount = 0;
var obj68318_onTap_activeActionGroupIndex = -1;
var obj68318_onTap_runningActionsCount = 0;
var obj68318_onTap_loopCount = 0;
var obj68310_onTap_activeActionGroupIndex = -1;
var obj68310_onTap_runningActionsCount = 0;
var obj68310_onTap_loopCount = 0;
var obj89341_onTap_activeActionGroupIndex = -1;
var obj89341_onTap_runningActionsCount = 0;
var obj89341_onTap_loopCount = 0;
var obj89336_onTap_activeActionGroupIndex = -1;
var obj89336_onTap_runningActionsCount = 0;
var obj89336_onTap_loopCount = 0;
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
		
obj55866_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55866_onTap_activeActionGroupIndex = -1;
		$("#obj55866").trigger("obj55866_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55866) {
				console.warn("de-queueing event obj55866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55866_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55868();
function goToPage_55868() {
	window.obj55866_onTap_runningActionsCount = obj55866_onTap_runningActionsCount + 1;
	$("#anchor1205")[0].click();
	window.obj55866_onTap_runningActionsCount = window.obj55866_onTap_runningActionsCount - 1;
if (window.obj55866_onTap_runningActionsCount < 0) {
	window.obj55866_onTap_runningActionsCount = 0;
} else if (window.obj55866_onTap_runningActionsCount == 0) {
	obj55866_onTap_actionGroup1();
}
}





















};
obj55866_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55866_onTap_activeActionGroupIndex = -1;
		$("#obj55866").trigger("obj55866_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55866) {
				console.warn("de-queueing event obj55866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55866_onTap_activeActionGroupIndex = 1;
	





















};
obj55863_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55863_onTap_activeActionGroupIndex = -1;
		$("#obj55863").trigger("obj55863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55863) {
				console.warn("de-queueing event obj55863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55863_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55865();
function goToPage_55865() {
	window.obj55863_onTap_runningActionsCount = obj55863_onTap_runningActionsCount + 1;
	$("#anchor1206")[0].click();
	window.obj55863_onTap_runningActionsCount = window.obj55863_onTap_runningActionsCount - 1;
if (window.obj55863_onTap_runningActionsCount < 0) {
	window.obj55863_onTap_runningActionsCount = 0;
} else if (window.obj55863_onTap_runningActionsCount == 0) {
	obj55863_onTap_actionGroup1();
}
}





















};
obj55863_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55863_onTap_activeActionGroupIndex = -1;
		$("#obj55863").trigger("obj55863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55863) {
				console.warn("de-queueing event obj55863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55863_onTap_activeActionGroupIndex = 1;
	





















};
obj68318_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68318_onTap_activeActionGroupIndex = -1;
		$("#obj68318").trigger("obj68318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68318) {
				console.warn("de-queueing event obj68318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68318_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68318 
hide_68321();
function hide_68321() {
	var selector = "#obj68318";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68318_onTap_runningActionsCount = obj68318_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68318_onTap_runningActionsCount = window.obj68318_onTap_runningActionsCount - 1;
if (window.obj68318_onTap_runningActionsCount < 0) {
	window.obj68318_onTap_runningActionsCount = 0;
} else if (window.obj68318_onTap_runningActionsCount == 0) {
	obj68318_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68321(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68318_onTap_runningActionsCount = window.obj68318_onTap_runningActionsCount - 1;
if (window.obj68318_onTap_runningActionsCount < 0) {
	window.obj68318_onTap_runningActionsCount = 0;
} else if (window.obj68318_onTap_runningActionsCount == 0) {
	obj68318_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68324 
stopMovie_68320();
function stopMovie_68320() {
	window.obj68318_onTap_runningActionsCount = obj68318_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68324")[0];
	myVideo.pause();
	window.obj68318_onTap_runningActionsCount = window.obj68318_onTap_runningActionsCount - 1;
if (window.obj68318_onTap_runningActionsCount < 0) {
	window.obj68318_onTap_runningActionsCount = 0;
} else if (window.obj68318_onTap_runningActionsCount == 0) {
	obj68318_onTap_actionGroup1();
}
}
















};
obj68318_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68318_onTap_activeActionGroupIndex = -1;
		$("#obj68318").trigger("obj68318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68318) {
				console.warn("de-queueing event obj68318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68318_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68310
(function(){
	window.obj68318_onTap_runningActionsCount = obj68318_onTap_runningActionsCount + 1;

	var selector = "#obj68310";
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
					window.obj68318_onTap_runningActionsCount = window.obj68318_onTap_runningActionsCount - 1;
if (window.obj68318_onTap_runningActionsCount < 0) {
	window.obj68318_onTap_runningActionsCount = 0;
} else if (window.obj68318_onTap_runningActionsCount == 0) {
	obj68318_onTap_actionGroup2();
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
				window.obj68318_onTap_runningActionsCount = window.obj68318_onTap_runningActionsCount - 1;
if (window.obj68318_onTap_runningActionsCount < 0) {
	window.obj68318_onTap_runningActionsCount = 0;
} else if (window.obj68318_onTap_runningActionsCount == 0) {
	obj68318_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68318_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68318_onTap_activeActionGroupIndex = -1;
		$("#obj68318").trigger("obj68318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68318) {
				console.warn("de-queueing event obj68318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68318_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68324 
move_68323();
function move_68323() {
	window.obj68318_onTap_runningActionsCount = obj68318_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68324");
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
			window.obj68318_onTap_runningActionsCount = window.obj68318_onTap_runningActionsCount - 1;
if (window.obj68318_onTap_runningActionsCount < 0) {
	window.obj68318_onTap_runningActionsCount = 0;
} else if (window.obj68318_onTap_runningActionsCount == 0) {
	obj68318_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68318_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68318_onTap_activeActionGroupIndex = -1;
		$("#obj68318").trigger("obj68318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68318) {
				console.warn("de-queueing event obj68318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68318_onTap_activeActionGroupIndex = 3;
	





















};
obj68310_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68310_onTap_activeActionGroupIndex = -1;
		$("#obj68310").trigger("obj68310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68310) {
				console.warn("de-queueing event obj68310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68310_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68310 
hide_68313();
function hide_68313() {
	var selector = "#obj68310";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68310_onTap_runningActionsCount = obj68310_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68310_onTap_runningActionsCount = window.obj68310_onTap_runningActionsCount - 1;
if (window.obj68310_onTap_runningActionsCount < 0) {
	window.obj68310_onTap_runningActionsCount = 0;
} else if (window.obj68310_onTap_runningActionsCount == 0) {
	obj68310_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68313(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68310_onTap_runningActionsCount = window.obj68310_onTap_runningActionsCount - 1;
if (window.obj68310_onTap_runningActionsCount < 0) {
	window.obj68310_onTap_runningActionsCount = 0;
} else if (window.obj68310_onTap_runningActionsCount == 0) {
	obj68310_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68324 
playPauseMovie_68312();
function playPauseMovie_68312() {
	window.obj68310_onTap_runningActionsCount = obj68310_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68324")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68310_onTap_runningActionsCount = window.obj68310_onTap_runningActionsCount - 1;
if (window.obj68310_onTap_runningActionsCount < 0) {
	window.obj68310_onTap_runningActionsCount = 0;
} else if (window.obj68310_onTap_runningActionsCount == 0) {
	obj68310_onTap_actionGroup1();
}
}

















};
obj68310_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68310_onTap_activeActionGroupIndex = -1;
		$("#obj68310").trigger("obj68310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68310) {
				console.warn("de-queueing event obj68310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68310_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68318
(function(){
	window.obj68310_onTap_runningActionsCount = obj68310_onTap_runningActionsCount + 1;

	var selector = "#obj68318";
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
					window.obj68310_onTap_runningActionsCount = window.obj68310_onTap_runningActionsCount - 1;
if (window.obj68310_onTap_runningActionsCount < 0) {
	window.obj68310_onTap_runningActionsCount = 0;
} else if (window.obj68310_onTap_runningActionsCount == 0) {
	obj68310_onTap_actionGroup2();
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
				window.obj68310_onTap_runningActionsCount = window.obj68310_onTap_runningActionsCount - 1;
if (window.obj68310_onTap_runningActionsCount < 0) {
	window.obj68310_onTap_runningActionsCount = 0;
} else if (window.obj68310_onTap_runningActionsCount == 0) {
	obj68310_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68310_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68310_onTap_activeActionGroupIndex = -1;
		$("#obj68310").trigger("obj68310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68310) {
				console.warn("de-queueing event obj68310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68310_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68324 
move_68315();
function move_68315() {
	window.obj68310_onTap_runningActionsCount = obj68310_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68324");
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
			window.obj68310_onTap_runningActionsCount = window.obj68310_onTap_runningActionsCount - 1;
if (window.obj68310_onTap_runningActionsCount < 0) {
	window.obj68310_onTap_runningActionsCount = 0;
} else if (window.obj68310_onTap_runningActionsCount == 0) {
	obj68310_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68310_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68310_onTap_activeActionGroupIndex = -1;
		$("#obj68310").trigger("obj68310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68310) {
				console.warn("de-queueing event obj68310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68310_onTap_activeActionGroupIndex = 3;
	





















};
obj89341_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89341_onTap_activeActionGroupIndex = -1;
		$("#obj89341").trigger("obj89341_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89341) {
				console.warn("de-queueing event obj89341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89341_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89346 
stopAudio_89343();
function stopAudio_89343() {
	window.obj89341_onTap_runningActionsCount = obj89341_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89346")[0];
	myAudio.pause();
	window.obj89341_onTap_runningActionsCount = window.obj89341_onTap_runningActionsCount - 1;
if (window.obj89341_onTap_runningActionsCount < 0) {
	window.obj89341_onTap_runningActionsCount = 0;
} else if (window.obj89341_onTap_runningActionsCount == 0) {
	obj89341_onTap_actionGroup1();
}
}








};
obj89341_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89341_onTap_activeActionGroupIndex = -1;
		$("#obj89341").trigger("obj89341_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89341) {
				console.warn("de-queueing event obj89341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89341_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89341 
hide_89344();
function hide_89344() {
	var selector = "#obj89341";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89341_onTap_runningActionsCount = obj89341_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89341_onTap_runningActionsCount = window.obj89341_onTap_runningActionsCount - 1;
if (window.obj89341_onTap_runningActionsCount < 0) {
	window.obj89341_onTap_runningActionsCount = 0;
} else if (window.obj89341_onTap_runningActionsCount == 0) {
	obj89341_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89344(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89341_onTap_runningActionsCount = window.obj89341_onTap_runningActionsCount - 1;
if (window.obj89341_onTap_runningActionsCount < 0) {
	window.obj89341_onTap_runningActionsCount = 0;
} else if (window.obj89341_onTap_runningActionsCount == 0) {
	obj89341_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89341_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89341_onTap_activeActionGroupIndex = -1;
		$("#obj89341").trigger("obj89341_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89341) {
				console.warn("de-queueing event obj89341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89341_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89336
(function(){
	window.obj89341_onTap_runningActionsCount = obj89341_onTap_runningActionsCount + 1;

	var selector = "#obj89336";
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
					window.obj89341_onTap_runningActionsCount = window.obj89341_onTap_runningActionsCount - 1;
if (window.obj89341_onTap_runningActionsCount < 0) {
	window.obj89341_onTap_runningActionsCount = 0;
} else if (window.obj89341_onTap_runningActionsCount == 0) {
	obj89341_onTap_actionGroup3();
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
				window.obj89341_onTap_runningActionsCount = window.obj89341_onTap_runningActionsCount - 1;
if (window.obj89341_onTap_runningActionsCount < 0) {
	window.obj89341_onTap_runningActionsCount = 0;
} else if (window.obj89341_onTap_runningActionsCount == 0) {
	obj89341_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89341_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89341_onTap_activeActionGroupIndex = -1;
		$("#obj89341").trigger("obj89341_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89341) {
				console.warn("de-queueing event obj89341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89341_onTap_activeActionGroupIndex = 3;
	





















};
obj89336_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89336_onTap_activeActionGroupIndex = -1;
		$("#obj89336").trigger("obj89336_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89336) {
				console.warn("de-queueing event obj89336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89336_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89336 
hide_89338();
function hide_89338() {
	var selector = "#obj89336";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89336_onTap_runningActionsCount = obj89336_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89336_onTap_runningActionsCount = window.obj89336_onTap_runningActionsCount - 1;
if (window.obj89336_onTap_runningActionsCount < 0) {
	window.obj89336_onTap_runningActionsCount = 0;
} else if (window.obj89336_onTap_runningActionsCount == 0) {
	obj89336_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89338(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89336_onTap_runningActionsCount = window.obj89336_onTap_runningActionsCount - 1;
if (window.obj89336_onTap_runningActionsCount < 0) {
	window.obj89336_onTap_runningActionsCount = 0;
} else if (window.obj89336_onTap_runningActionsCount == 0) {
	obj89336_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89336_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89336_onTap_activeActionGroupIndex = -1;
		$("#obj89336").trigger("obj89336_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89336) {
				console.warn("de-queueing event obj89336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89336_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89341
(function(){
	window.obj89336_onTap_runningActionsCount = obj89336_onTap_runningActionsCount + 1;

	var selector = "#obj89341";
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
					window.obj89336_onTap_runningActionsCount = window.obj89336_onTap_runningActionsCount - 1;
if (window.obj89336_onTap_runningActionsCount < 0) {
	window.obj89336_onTap_runningActionsCount = 0;
} else if (window.obj89336_onTap_runningActionsCount == 0) {
	obj89336_onTap_actionGroup2();
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
				window.obj89336_onTap_runningActionsCount = window.obj89336_onTap_runningActionsCount - 1;
if (window.obj89336_onTap_runningActionsCount < 0) {
	window.obj89336_onTap_runningActionsCount = 0;
} else if (window.obj89336_onTap_runningActionsCount == 0) {
	obj89336_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89336_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89336_onTap_activeActionGroupIndex = -1;
		$("#obj89336").trigger("obj89336_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89336) {
				console.warn("de-queueing event obj89336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89336_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89346 
playAudio_89340();
function playAudio_89340() {
	window.obj89336_onTap_runningActionsCount = obj89336_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89346")[0];
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
		    window.obj89336_onTap_runningActionsCount = window.obj89336_onTap_runningActionsCount - 1;
if (window.obj89336_onTap_runningActionsCount < 0) {
	window.obj89336_onTap_runningActionsCount = 0;
} else if (window.obj89336_onTap_runningActionsCount == 0) {
	obj89336_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89336_onTap_runningActionsCount = window.obj89336_onTap_runningActionsCount - 1;
if (window.obj89336_onTap_runningActionsCount < 0) {
	window.obj89336_onTap_runningActionsCount = 0;
} else if (window.obj89336_onTap_runningActionsCount == 0) {
	obj89336_onTap_actionGroup3();
}
	}
}









};
obj89336_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89336_onTap_activeActionGroupIndex = -1;
		$("#obj89336").trigger("obj89336_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89336) {
				console.warn("de-queueing event obj89336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89336_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj55866: Event Touch Down
 *
 */
$("#obj55866").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55866_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55866_onTap is still running");
	return;
}
var obj55866_onTap_runningActionsCount = 0;
var obj55866_onTap_loopCount = 0;
obj55866_onTap_actionGroup0();
});










/*
 *
 *   obj55863: Event Touch Down
 *
 */
$("#obj55863").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55863_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55863_onTap is still running");
	return;
}
var obj55863_onTap_runningActionsCount = 0;
var obj55863_onTap_loopCount = 0;
obj55863_onTap_actionGroup0();
});






























/*
 *
 *   obj68318: Event Touch Down
 *
 */
$("#obj68318").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68318_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68318_onTap is still running");
	return;
}
var obj68318_onTap_runningActionsCount = 0;
var obj68318_onTap_loopCount = 0;
obj68318_onTap_actionGroup0();
});










/*
 *
 *   obj68310: Event Touch Down
 *
 */
$("#obj68310").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68310_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68310_onTap is still running");
	return;
}
var obj68310_onTap_runningActionsCount = 0;
var obj68310_onTap_loopCount = 0;
obj68310_onTap_actionGroup0();
});










/*
 *
 *   obj89341: Event Touch Down
 *
 */
$("#obj89341").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89341_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89341_onTap is still running");
	return;
}
var obj89341_onTap_runningActionsCount = 0;
var obj89341_onTap_loopCount = 0;
obj89341_onTap_actionGroup0();
});










/*
 *
 *   obj89336: Event Touch Down
 *
 */
$("#obj89336").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89336_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89336_onTap is still running");
	return;
}
var obj89336_onTap_runningActionsCount = 0;
var obj89336_onTap_loopCount = 0;
obj89336_onTap_actionGroup0();
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
	
$("#obj55882").trigger('SCEventShow');
$("#obj55866").trigger('SCEventShow');
$("#obj55863").trigger('SCEventShow');
$("#obj55861").trigger('SCEventShow');
$("#obj55884").trigger('SCEventShow');
$("#obj68318").trigger('SCEventShow');
$("#obj68310").trigger('SCEventShow');
$("#obj89341").trigger('SCEventShow');
$("#obj89336").trigger('SCEventShow');
$("#obj89346").trigger('SCEventShow');
$("#obj95039").trigger('SCEventShow');
$("#obj68324").trigger('SCEventShow');
	
});