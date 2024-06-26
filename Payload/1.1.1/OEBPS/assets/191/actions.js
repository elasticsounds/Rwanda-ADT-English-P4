pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 53461;
pubcoder.page.title = pubcoder.page.title || "191";
pubcoder.page.number = pubcoder.page.number || 191;
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
var obj53469_onTap_activeActionGroupIndex = -1;
var obj53469_onTap_runningActionsCount = 0;
var obj53469_onTap_loopCount = 0;
var obj53466_onTap_activeActionGroupIndex = -1;
var obj53466_onTap_runningActionsCount = 0;
var obj53466_onTap_loopCount = 0;
var obj68078_onTap_activeActionGroupIndex = -1;
var obj68078_onTap_runningActionsCount = 0;
var obj68078_onTap_loopCount = 0;
var obj68070_onTap_activeActionGroupIndex = -1;
var obj68070_onTap_runningActionsCount = 0;
var obj68070_onTap_loopCount = 0;
var obj89173_onTap_activeActionGroupIndex = -1;
var obj89173_onTap_runningActionsCount = 0;
var obj89173_onTap_loopCount = 0;
var obj89168_onTap_activeActionGroupIndex = -1;
var obj89168_onTap_runningActionsCount = 0;
var obj89168_onTap_loopCount = 0;
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
		
obj53469_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53469_onTap_activeActionGroupIndex = -1;
		$("#obj53469").trigger("obj53469_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53469) {
				console.warn("de-queueing event obj53469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53469_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53471();
function goToPage_53471() {
	window.obj53469_onTap_runningActionsCount = obj53469_onTap_runningActionsCount + 1;
	$("#anchor1122")[0].click();
	window.obj53469_onTap_runningActionsCount = window.obj53469_onTap_runningActionsCount - 1;
if (window.obj53469_onTap_runningActionsCount < 0) {
	window.obj53469_onTap_runningActionsCount = 0;
} else if (window.obj53469_onTap_runningActionsCount == 0) {
	obj53469_onTap_actionGroup1();
}
}





















};
obj53469_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53469_onTap_activeActionGroupIndex = -1;
		$("#obj53469").trigger("obj53469_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53469) {
				console.warn("de-queueing event obj53469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53469_onTap_activeActionGroupIndex = 1;
	





















};
obj53466_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53466_onTap_activeActionGroupIndex = -1;
		$("#obj53466").trigger("obj53466_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53466) {
				console.warn("de-queueing event obj53466." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53466").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53466_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53468();
function goToPage_53468() {
	window.obj53466_onTap_runningActionsCount = obj53466_onTap_runningActionsCount + 1;
	$("#anchor1123")[0].click();
	window.obj53466_onTap_runningActionsCount = window.obj53466_onTap_runningActionsCount - 1;
if (window.obj53466_onTap_runningActionsCount < 0) {
	window.obj53466_onTap_runningActionsCount = 0;
} else if (window.obj53466_onTap_runningActionsCount == 0) {
	obj53466_onTap_actionGroup1();
}
}





















};
obj53466_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53466_onTap_activeActionGroupIndex = -1;
		$("#obj53466").trigger("obj53466_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53466) {
				console.warn("de-queueing event obj53466." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53466").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53466_onTap_activeActionGroupIndex = 1;
	





















};
obj68078_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68078_onTap_activeActionGroupIndex = -1;
		$("#obj68078").trigger("obj68078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68078) {
				console.warn("de-queueing event obj68078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68078_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68078 
hide_68081();
function hide_68081() {
	var selector = "#obj68078";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68078_onTap_runningActionsCount = obj68078_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68078_onTap_runningActionsCount = window.obj68078_onTap_runningActionsCount - 1;
if (window.obj68078_onTap_runningActionsCount < 0) {
	window.obj68078_onTap_runningActionsCount = 0;
} else if (window.obj68078_onTap_runningActionsCount == 0) {
	obj68078_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68081(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68078_onTap_runningActionsCount = window.obj68078_onTap_runningActionsCount - 1;
if (window.obj68078_onTap_runningActionsCount < 0) {
	window.obj68078_onTap_runningActionsCount = 0;
} else if (window.obj68078_onTap_runningActionsCount == 0) {
	obj68078_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68084 
stopMovie_68080();
function stopMovie_68080() {
	window.obj68078_onTap_runningActionsCount = obj68078_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68084")[0];
	myVideo.pause();
	window.obj68078_onTap_runningActionsCount = window.obj68078_onTap_runningActionsCount - 1;
if (window.obj68078_onTap_runningActionsCount < 0) {
	window.obj68078_onTap_runningActionsCount = 0;
} else if (window.obj68078_onTap_runningActionsCount == 0) {
	obj68078_onTap_actionGroup1();
}
}
















};
obj68078_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68078_onTap_activeActionGroupIndex = -1;
		$("#obj68078").trigger("obj68078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68078) {
				console.warn("de-queueing event obj68078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68078_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68070
(function(){
	window.obj68078_onTap_runningActionsCount = obj68078_onTap_runningActionsCount + 1;

	var selector = "#obj68070";
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
					window.obj68078_onTap_runningActionsCount = window.obj68078_onTap_runningActionsCount - 1;
if (window.obj68078_onTap_runningActionsCount < 0) {
	window.obj68078_onTap_runningActionsCount = 0;
} else if (window.obj68078_onTap_runningActionsCount == 0) {
	obj68078_onTap_actionGroup2();
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
				window.obj68078_onTap_runningActionsCount = window.obj68078_onTap_runningActionsCount - 1;
if (window.obj68078_onTap_runningActionsCount < 0) {
	window.obj68078_onTap_runningActionsCount = 0;
} else if (window.obj68078_onTap_runningActionsCount == 0) {
	obj68078_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68078_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68078_onTap_activeActionGroupIndex = -1;
		$("#obj68078").trigger("obj68078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68078) {
				console.warn("de-queueing event obj68078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68078_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68084 
move_68083();
function move_68083() {
	window.obj68078_onTap_runningActionsCount = obj68078_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68084");
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
			window.obj68078_onTap_runningActionsCount = window.obj68078_onTap_runningActionsCount - 1;
if (window.obj68078_onTap_runningActionsCount < 0) {
	window.obj68078_onTap_runningActionsCount = 0;
} else if (window.obj68078_onTap_runningActionsCount == 0) {
	obj68078_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68078_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68078_onTap_activeActionGroupIndex = -1;
		$("#obj68078").trigger("obj68078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68078) {
				console.warn("de-queueing event obj68078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68078_onTap_activeActionGroupIndex = 3;
	





















};
obj68070_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68070_onTap_activeActionGroupIndex = -1;
		$("#obj68070").trigger("obj68070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68070) {
				console.warn("de-queueing event obj68070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68070_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68070 
hide_68073();
function hide_68073() {
	var selector = "#obj68070";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68070_onTap_runningActionsCount = obj68070_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68070_onTap_runningActionsCount = window.obj68070_onTap_runningActionsCount - 1;
if (window.obj68070_onTap_runningActionsCount < 0) {
	window.obj68070_onTap_runningActionsCount = 0;
} else if (window.obj68070_onTap_runningActionsCount == 0) {
	obj68070_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68073(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68070_onTap_runningActionsCount = window.obj68070_onTap_runningActionsCount - 1;
if (window.obj68070_onTap_runningActionsCount < 0) {
	window.obj68070_onTap_runningActionsCount = 0;
} else if (window.obj68070_onTap_runningActionsCount == 0) {
	obj68070_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68084 
playPauseMovie_68072();
function playPauseMovie_68072() {
	window.obj68070_onTap_runningActionsCount = obj68070_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68084")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68070_onTap_runningActionsCount = window.obj68070_onTap_runningActionsCount - 1;
if (window.obj68070_onTap_runningActionsCount < 0) {
	window.obj68070_onTap_runningActionsCount = 0;
} else if (window.obj68070_onTap_runningActionsCount == 0) {
	obj68070_onTap_actionGroup1();
}
}

















};
obj68070_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68070_onTap_activeActionGroupIndex = -1;
		$("#obj68070").trigger("obj68070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68070) {
				console.warn("de-queueing event obj68070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68070_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68078
(function(){
	window.obj68070_onTap_runningActionsCount = obj68070_onTap_runningActionsCount + 1;

	var selector = "#obj68078";
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
					window.obj68070_onTap_runningActionsCount = window.obj68070_onTap_runningActionsCount - 1;
if (window.obj68070_onTap_runningActionsCount < 0) {
	window.obj68070_onTap_runningActionsCount = 0;
} else if (window.obj68070_onTap_runningActionsCount == 0) {
	obj68070_onTap_actionGroup2();
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
				window.obj68070_onTap_runningActionsCount = window.obj68070_onTap_runningActionsCount - 1;
if (window.obj68070_onTap_runningActionsCount < 0) {
	window.obj68070_onTap_runningActionsCount = 0;
} else if (window.obj68070_onTap_runningActionsCount == 0) {
	obj68070_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68070_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68070_onTap_activeActionGroupIndex = -1;
		$("#obj68070").trigger("obj68070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68070) {
				console.warn("de-queueing event obj68070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68070_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68084 
move_68075();
function move_68075() {
	window.obj68070_onTap_runningActionsCount = obj68070_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68084");
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
			window.obj68070_onTap_runningActionsCount = window.obj68070_onTap_runningActionsCount - 1;
if (window.obj68070_onTap_runningActionsCount < 0) {
	window.obj68070_onTap_runningActionsCount = 0;
} else if (window.obj68070_onTap_runningActionsCount == 0) {
	obj68070_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68070_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68070_onTap_activeActionGroupIndex = -1;
		$("#obj68070").trigger("obj68070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68070) {
				console.warn("de-queueing event obj68070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68070_onTap_activeActionGroupIndex = 3;
	





















};
obj89173_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89173_onTap_activeActionGroupIndex = -1;
		$("#obj89173").trigger("obj89173_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89173) {
				console.warn("de-queueing event obj89173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89173_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89178 
stopAudio_89175();
function stopAudio_89175() {
	window.obj89173_onTap_runningActionsCount = obj89173_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89178")[0];
	myAudio.pause();
	window.obj89173_onTap_runningActionsCount = window.obj89173_onTap_runningActionsCount - 1;
if (window.obj89173_onTap_runningActionsCount < 0) {
	window.obj89173_onTap_runningActionsCount = 0;
} else if (window.obj89173_onTap_runningActionsCount == 0) {
	obj89173_onTap_actionGroup1();
}
}








};
obj89173_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89173_onTap_activeActionGroupIndex = -1;
		$("#obj89173").trigger("obj89173_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89173) {
				console.warn("de-queueing event obj89173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89173_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89173 
hide_89176();
function hide_89176() {
	var selector = "#obj89173";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89173_onTap_runningActionsCount = obj89173_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89173_onTap_runningActionsCount = window.obj89173_onTap_runningActionsCount - 1;
if (window.obj89173_onTap_runningActionsCount < 0) {
	window.obj89173_onTap_runningActionsCount = 0;
} else if (window.obj89173_onTap_runningActionsCount == 0) {
	obj89173_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89176(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89173_onTap_runningActionsCount = window.obj89173_onTap_runningActionsCount - 1;
if (window.obj89173_onTap_runningActionsCount < 0) {
	window.obj89173_onTap_runningActionsCount = 0;
} else if (window.obj89173_onTap_runningActionsCount == 0) {
	obj89173_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89173_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89173_onTap_activeActionGroupIndex = -1;
		$("#obj89173").trigger("obj89173_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89173) {
				console.warn("de-queueing event obj89173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89173_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89168
(function(){
	window.obj89173_onTap_runningActionsCount = obj89173_onTap_runningActionsCount + 1;

	var selector = "#obj89168";
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
					window.obj89173_onTap_runningActionsCount = window.obj89173_onTap_runningActionsCount - 1;
if (window.obj89173_onTap_runningActionsCount < 0) {
	window.obj89173_onTap_runningActionsCount = 0;
} else if (window.obj89173_onTap_runningActionsCount == 0) {
	obj89173_onTap_actionGroup3();
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
				window.obj89173_onTap_runningActionsCount = window.obj89173_onTap_runningActionsCount - 1;
if (window.obj89173_onTap_runningActionsCount < 0) {
	window.obj89173_onTap_runningActionsCount = 0;
} else if (window.obj89173_onTap_runningActionsCount == 0) {
	obj89173_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89173_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89173_onTap_activeActionGroupIndex = -1;
		$("#obj89173").trigger("obj89173_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89173) {
				console.warn("de-queueing event obj89173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89173_onTap_activeActionGroupIndex = 3;
	





















};
obj89168_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89168_onTap_activeActionGroupIndex = -1;
		$("#obj89168").trigger("obj89168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89168) {
				console.warn("de-queueing event obj89168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89168_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89168 
hide_89170();
function hide_89170() {
	var selector = "#obj89168";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89168_onTap_runningActionsCount = obj89168_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89168_onTap_runningActionsCount = window.obj89168_onTap_runningActionsCount - 1;
if (window.obj89168_onTap_runningActionsCount < 0) {
	window.obj89168_onTap_runningActionsCount = 0;
} else if (window.obj89168_onTap_runningActionsCount == 0) {
	obj89168_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89170(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89168_onTap_runningActionsCount = window.obj89168_onTap_runningActionsCount - 1;
if (window.obj89168_onTap_runningActionsCount < 0) {
	window.obj89168_onTap_runningActionsCount = 0;
} else if (window.obj89168_onTap_runningActionsCount == 0) {
	obj89168_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89168_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89168_onTap_activeActionGroupIndex = -1;
		$("#obj89168").trigger("obj89168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89168) {
				console.warn("de-queueing event obj89168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89168_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89173
(function(){
	window.obj89168_onTap_runningActionsCount = obj89168_onTap_runningActionsCount + 1;

	var selector = "#obj89173";
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
					window.obj89168_onTap_runningActionsCount = window.obj89168_onTap_runningActionsCount - 1;
if (window.obj89168_onTap_runningActionsCount < 0) {
	window.obj89168_onTap_runningActionsCount = 0;
} else if (window.obj89168_onTap_runningActionsCount == 0) {
	obj89168_onTap_actionGroup2();
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
				window.obj89168_onTap_runningActionsCount = window.obj89168_onTap_runningActionsCount - 1;
if (window.obj89168_onTap_runningActionsCount < 0) {
	window.obj89168_onTap_runningActionsCount = 0;
} else if (window.obj89168_onTap_runningActionsCount == 0) {
	obj89168_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89168_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89168_onTap_activeActionGroupIndex = -1;
		$("#obj89168").trigger("obj89168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89168) {
				console.warn("de-queueing event obj89168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89168_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89178 
playAudio_89172();
function playAudio_89172() {
	window.obj89168_onTap_runningActionsCount = obj89168_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89178")[0];
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
		    window.obj89168_onTap_runningActionsCount = window.obj89168_onTap_runningActionsCount - 1;
if (window.obj89168_onTap_runningActionsCount < 0) {
	window.obj89168_onTap_runningActionsCount = 0;
} else if (window.obj89168_onTap_runningActionsCount == 0) {
	obj89168_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89168_onTap_runningActionsCount = window.obj89168_onTap_runningActionsCount - 1;
if (window.obj89168_onTap_runningActionsCount < 0) {
	window.obj89168_onTap_runningActionsCount = 0;
} else if (window.obj89168_onTap_runningActionsCount == 0) {
	obj89168_onTap_actionGroup3();
}
	}
}









};
obj89168_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89168_onTap_activeActionGroupIndex = -1;
		$("#obj89168").trigger("obj89168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89168) {
				console.warn("de-queueing event obj89168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89168_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj53469: Event Touch Down
 *
 */
$("#obj53469").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53469_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53469_onTap is still running");
	return;
}
var obj53469_onTap_runningActionsCount = 0;
var obj53469_onTap_loopCount = 0;
obj53469_onTap_actionGroup0();
});










/*
 *
 *   obj53466: Event Touch Down
 *
 */
$("#obj53466").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53466_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53466_onTap is still running");
	return;
}
var obj53466_onTap_runningActionsCount = 0;
var obj53466_onTap_loopCount = 0;
obj53466_onTap_actionGroup0();
});






























/*
 *
 *   obj68078: Event Touch Down
 *
 */
$("#obj68078").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68078_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68078_onTap is still running");
	return;
}
var obj68078_onTap_runningActionsCount = 0;
var obj68078_onTap_loopCount = 0;
obj68078_onTap_actionGroup0();
});










/*
 *
 *   obj68070: Event Touch Down
 *
 */
$("#obj68070").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68070_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68070_onTap is still running");
	return;
}
var obj68070_onTap_runningActionsCount = 0;
var obj68070_onTap_loopCount = 0;
obj68070_onTap_actionGroup0();
});










/*
 *
 *   obj89173: Event Touch Down
 *
 */
$("#obj89173").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89173_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89173_onTap is still running");
	return;
}
var obj89173_onTap_runningActionsCount = 0;
var obj89173_onTap_loopCount = 0;
obj89173_onTap_actionGroup0();
});










/*
 *
 *   obj89168: Event Touch Down
 *
 */
$("#obj89168").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89168_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89168_onTap is still running");
	return;
}
var obj89168_onTap_runningActionsCount = 0;
var obj89168_onTap_loopCount = 0;
obj89168_onTap_actionGroup0();
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
	
$("#obj53485").trigger('SCEventShow');
$("#obj53469").trigger('SCEventShow');
$("#obj53466").trigger('SCEventShow');
$("#obj53464").trigger('SCEventShow');
$("#obj53487").trigger('SCEventShow');
$("#obj68078").trigger('SCEventShow');
$("#obj68070").trigger('SCEventShow');
$("#obj89173").trigger('SCEventShow');
$("#obj89168").trigger('SCEventShow');
$("#obj89178").trigger('SCEventShow');
$("#obj95011").trigger('SCEventShow');
$("#obj68084").trigger('SCEventShow');
	
});