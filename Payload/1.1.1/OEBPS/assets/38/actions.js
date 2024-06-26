pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 8009;
pubcoder.page.title = pubcoder.page.title || "38";
pubcoder.page.number = pubcoder.page.number || 38;
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
var obj69144_onTap_activeActionGroupIndex = -1;
var obj69144_onTap_runningActionsCount = 0;
var obj69144_onTap_loopCount = 0;
var obj69141_onTap_activeActionGroupIndex = -1;
var obj69141_onTap_runningActionsCount = 0;
var obj69141_onTap_loopCount = 0;
var obj69117_onTap_activeActionGroupIndex = -1;
var obj69117_onTap_runningActionsCount = 0;
var obj69117_onTap_loopCount = 0;
var obj69109_onTap_activeActionGroupIndex = -1;
var obj69109_onTap_runningActionsCount = 0;
var obj69109_onTap_loopCount = 0;
var obj87190_onTap_activeActionGroupIndex = -1;
var obj87190_onTap_runningActionsCount = 0;
var obj87190_onTap_loopCount = 0;
var obj87185_onTap_activeActionGroupIndex = -1;
var obj87185_onTap_runningActionsCount = 0;
var obj87185_onTap_loopCount = 0;
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
		
obj69144_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69144_onTap_activeActionGroupIndex = -1;
		$("#obj69144").trigger("obj69144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69144) {
				console.warn("de-queueing event obj69144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69144_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69146();
function goToPage_69146() {
	window.obj69144_onTap_runningActionsCount = obj69144_onTap_runningActionsCount + 1;
	$("#anchor232")[0].click();
	window.obj69144_onTap_runningActionsCount = window.obj69144_onTap_runningActionsCount - 1;
if (window.obj69144_onTap_runningActionsCount < 0) {
	window.obj69144_onTap_runningActionsCount = 0;
} else if (window.obj69144_onTap_runningActionsCount == 0) {
	obj69144_onTap_actionGroup1();
}
}





















};
obj69144_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69144_onTap_activeActionGroupIndex = -1;
		$("#obj69144").trigger("obj69144_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69144) {
				console.warn("de-queueing event obj69144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69144_onTap_activeActionGroupIndex = 1;
	





















};
obj69141_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69141_onTap_activeActionGroupIndex = -1;
		$("#obj69141").trigger("obj69141_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69141) {
				console.warn("de-queueing event obj69141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69141_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69143();
function goToPage_69143() {
	window.obj69141_onTap_runningActionsCount = obj69141_onTap_runningActionsCount + 1;
	$("#anchor233")[0].click();
	window.obj69141_onTap_runningActionsCount = window.obj69141_onTap_runningActionsCount - 1;
if (window.obj69141_onTap_runningActionsCount < 0) {
	window.obj69141_onTap_runningActionsCount = 0;
} else if (window.obj69141_onTap_runningActionsCount == 0) {
	obj69141_onTap_actionGroup1();
}
}





















};
obj69141_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69141_onTap_activeActionGroupIndex = -1;
		$("#obj69141").trigger("obj69141_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69141) {
				console.warn("de-queueing event obj69141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69141_onTap_activeActionGroupIndex = 1;
	





















};
obj69117_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69117_onTap_activeActionGroupIndex = -1;
		$("#obj69117").trigger("obj69117_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69117) {
				console.warn("de-queueing event obj69117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69117_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69117 
hide_69120();
function hide_69120() {
	var selector = "#obj69117";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69117_onTap_runningActionsCount = obj69117_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69117_onTap_runningActionsCount = window.obj69117_onTap_runningActionsCount - 1;
if (window.obj69117_onTap_runningActionsCount < 0) {
	window.obj69117_onTap_runningActionsCount = 0;
} else if (window.obj69117_onTap_runningActionsCount == 0) {
	obj69117_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69120(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69117_onTap_runningActionsCount = window.obj69117_onTap_runningActionsCount - 1;
if (window.obj69117_onTap_runningActionsCount < 0) {
	window.obj69117_onTap_runningActionsCount = 0;
} else if (window.obj69117_onTap_runningActionsCount == 0) {
	obj69117_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj69107 
stopMovie_69119();
function stopMovie_69119() {
	window.obj69117_onTap_runningActionsCount = obj69117_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69107")[0];
	myVideo.pause();
	window.obj69117_onTap_runningActionsCount = window.obj69117_onTap_runningActionsCount - 1;
if (window.obj69117_onTap_runningActionsCount < 0) {
	window.obj69117_onTap_runningActionsCount = 0;
} else if (window.obj69117_onTap_runningActionsCount == 0) {
	obj69117_onTap_actionGroup1();
}
}
















};
obj69117_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69117_onTap_activeActionGroupIndex = -1;
		$("#obj69117").trigger("obj69117_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69117) {
				console.warn("de-queueing event obj69117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69117_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69109
(function(){
	window.obj69117_onTap_runningActionsCount = obj69117_onTap_runningActionsCount + 1;

	var selector = "#obj69109";
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
					window.obj69117_onTap_runningActionsCount = window.obj69117_onTap_runningActionsCount - 1;
if (window.obj69117_onTap_runningActionsCount < 0) {
	window.obj69117_onTap_runningActionsCount = 0;
} else if (window.obj69117_onTap_runningActionsCount == 0) {
	obj69117_onTap_actionGroup2();
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
				window.obj69117_onTap_runningActionsCount = window.obj69117_onTap_runningActionsCount - 1;
if (window.obj69117_onTap_runningActionsCount < 0) {
	window.obj69117_onTap_runningActionsCount = 0;
} else if (window.obj69117_onTap_runningActionsCount == 0) {
	obj69117_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69117_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69117_onTap_activeActionGroupIndex = -1;
		$("#obj69117").trigger("obj69117_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69117) {
				console.warn("de-queueing event obj69117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69117_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69107 
move_69122();
function move_69122() {
	window.obj69117_onTap_runningActionsCount = obj69117_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69107");
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
			window.obj69117_onTap_runningActionsCount = window.obj69117_onTap_runningActionsCount - 1;
if (window.obj69117_onTap_runningActionsCount < 0) {
	window.obj69117_onTap_runningActionsCount = 0;
} else if (window.obj69117_onTap_runningActionsCount == 0) {
	obj69117_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69117_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69117_onTap_activeActionGroupIndex = -1;
		$("#obj69117").trigger("obj69117_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69117) {
				console.warn("de-queueing event obj69117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69117_onTap_activeActionGroupIndex = 3;
	





















};
obj69109_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69109_onTap_activeActionGroupIndex = -1;
		$("#obj69109").trigger("obj69109_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69109) {
				console.warn("de-queueing event obj69109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69109_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69109 
hide_69112();
function hide_69112() {
	var selector = "#obj69109";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69109_onTap_runningActionsCount = obj69109_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69109_onTap_runningActionsCount = window.obj69109_onTap_runningActionsCount - 1;
if (window.obj69109_onTap_runningActionsCount < 0) {
	window.obj69109_onTap_runningActionsCount = 0;
} else if (window.obj69109_onTap_runningActionsCount == 0) {
	obj69109_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69112(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69109_onTap_runningActionsCount = window.obj69109_onTap_runningActionsCount - 1;
if (window.obj69109_onTap_runningActionsCount < 0) {
	window.obj69109_onTap_runningActionsCount = 0;
} else if (window.obj69109_onTap_runningActionsCount == 0) {
	obj69109_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj69107 
playPauseMovie_69111();
function playPauseMovie_69111() {
	window.obj69109_onTap_runningActionsCount = obj69109_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69107")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj69109_onTap_runningActionsCount = window.obj69109_onTap_runningActionsCount - 1;
if (window.obj69109_onTap_runningActionsCount < 0) {
	window.obj69109_onTap_runningActionsCount = 0;
} else if (window.obj69109_onTap_runningActionsCount == 0) {
	obj69109_onTap_actionGroup1();
}
}

















};
obj69109_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69109_onTap_activeActionGroupIndex = -1;
		$("#obj69109").trigger("obj69109_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69109) {
				console.warn("de-queueing event obj69109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69109_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69117
(function(){
	window.obj69109_onTap_runningActionsCount = obj69109_onTap_runningActionsCount + 1;

	var selector = "#obj69117";
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
					window.obj69109_onTap_runningActionsCount = window.obj69109_onTap_runningActionsCount - 1;
if (window.obj69109_onTap_runningActionsCount < 0) {
	window.obj69109_onTap_runningActionsCount = 0;
} else if (window.obj69109_onTap_runningActionsCount == 0) {
	obj69109_onTap_actionGroup2();
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
				window.obj69109_onTap_runningActionsCount = window.obj69109_onTap_runningActionsCount - 1;
if (window.obj69109_onTap_runningActionsCount < 0) {
	window.obj69109_onTap_runningActionsCount = 0;
} else if (window.obj69109_onTap_runningActionsCount == 0) {
	obj69109_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69109_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69109_onTap_activeActionGroupIndex = -1;
		$("#obj69109").trigger("obj69109_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69109) {
				console.warn("de-queueing event obj69109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69109_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69107 
move_69114();
function move_69114() {
	window.obj69109_onTap_runningActionsCount = obj69109_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69107");
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
			window.obj69109_onTap_runningActionsCount = window.obj69109_onTap_runningActionsCount - 1;
if (window.obj69109_onTap_runningActionsCount < 0) {
	window.obj69109_onTap_runningActionsCount = 0;
} else if (window.obj69109_onTap_runningActionsCount == 0) {
	obj69109_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69109_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69109_onTap_activeActionGroupIndex = -1;
		$("#obj69109").trigger("obj69109_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69109) {
				console.warn("de-queueing event obj69109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69109_onTap_activeActionGroupIndex = 3;
	





















};
obj87190_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87190_onTap_activeActionGroupIndex = -1;
		$("#obj87190").trigger("obj87190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87190) {
				console.warn("de-queueing event obj87190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87190_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87195 
stopAudio_87192();
function stopAudio_87192() {
	window.obj87190_onTap_runningActionsCount = obj87190_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87195")[0];
	myAudio.pause();
	window.obj87190_onTap_runningActionsCount = window.obj87190_onTap_runningActionsCount - 1;
if (window.obj87190_onTap_runningActionsCount < 0) {
	window.obj87190_onTap_runningActionsCount = 0;
} else if (window.obj87190_onTap_runningActionsCount == 0) {
	obj87190_onTap_actionGroup1();
}
}








};
obj87190_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87190_onTap_activeActionGroupIndex = -1;
		$("#obj87190").trigger("obj87190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87190) {
				console.warn("de-queueing event obj87190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87190_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87190 
hide_87193();
function hide_87193() {
	var selector = "#obj87190";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87190_onTap_runningActionsCount = obj87190_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87190_onTap_runningActionsCount = window.obj87190_onTap_runningActionsCount - 1;
if (window.obj87190_onTap_runningActionsCount < 0) {
	window.obj87190_onTap_runningActionsCount = 0;
} else if (window.obj87190_onTap_runningActionsCount == 0) {
	obj87190_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87193(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87190_onTap_runningActionsCount = window.obj87190_onTap_runningActionsCount - 1;
if (window.obj87190_onTap_runningActionsCount < 0) {
	window.obj87190_onTap_runningActionsCount = 0;
} else if (window.obj87190_onTap_runningActionsCount == 0) {
	obj87190_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87190_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87190_onTap_activeActionGroupIndex = -1;
		$("#obj87190").trigger("obj87190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87190) {
				console.warn("de-queueing event obj87190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87190_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87185
(function(){
	window.obj87190_onTap_runningActionsCount = obj87190_onTap_runningActionsCount + 1;

	var selector = "#obj87185";
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
					window.obj87190_onTap_runningActionsCount = window.obj87190_onTap_runningActionsCount - 1;
if (window.obj87190_onTap_runningActionsCount < 0) {
	window.obj87190_onTap_runningActionsCount = 0;
} else if (window.obj87190_onTap_runningActionsCount == 0) {
	obj87190_onTap_actionGroup3();
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
				window.obj87190_onTap_runningActionsCount = window.obj87190_onTap_runningActionsCount - 1;
if (window.obj87190_onTap_runningActionsCount < 0) {
	window.obj87190_onTap_runningActionsCount = 0;
} else if (window.obj87190_onTap_runningActionsCount == 0) {
	obj87190_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87190_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87190_onTap_activeActionGroupIndex = -1;
		$("#obj87190").trigger("obj87190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87190) {
				console.warn("de-queueing event obj87190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87190_onTap_activeActionGroupIndex = 3;
	





















};
obj87185_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87185_onTap_activeActionGroupIndex = -1;
		$("#obj87185").trigger("obj87185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87185) {
				console.warn("de-queueing event obj87185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87185_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87185 
hide_87187();
function hide_87187() {
	var selector = "#obj87185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87185_onTap_runningActionsCount = obj87185_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87185_onTap_runningActionsCount = window.obj87185_onTap_runningActionsCount - 1;
if (window.obj87185_onTap_runningActionsCount < 0) {
	window.obj87185_onTap_runningActionsCount = 0;
} else if (window.obj87185_onTap_runningActionsCount == 0) {
	obj87185_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87187(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87185_onTap_runningActionsCount = window.obj87185_onTap_runningActionsCount - 1;
if (window.obj87185_onTap_runningActionsCount < 0) {
	window.obj87185_onTap_runningActionsCount = 0;
} else if (window.obj87185_onTap_runningActionsCount == 0) {
	obj87185_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87185_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87185_onTap_activeActionGroupIndex = -1;
		$("#obj87185").trigger("obj87185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87185) {
				console.warn("de-queueing event obj87185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87185_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87190
(function(){
	window.obj87185_onTap_runningActionsCount = obj87185_onTap_runningActionsCount + 1;

	var selector = "#obj87190";
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
					window.obj87185_onTap_runningActionsCount = window.obj87185_onTap_runningActionsCount - 1;
if (window.obj87185_onTap_runningActionsCount < 0) {
	window.obj87185_onTap_runningActionsCount = 0;
} else if (window.obj87185_onTap_runningActionsCount == 0) {
	obj87185_onTap_actionGroup2();
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
				window.obj87185_onTap_runningActionsCount = window.obj87185_onTap_runningActionsCount - 1;
if (window.obj87185_onTap_runningActionsCount < 0) {
	window.obj87185_onTap_runningActionsCount = 0;
} else if (window.obj87185_onTap_runningActionsCount == 0) {
	obj87185_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87185_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87185_onTap_activeActionGroupIndex = -1;
		$("#obj87185").trigger("obj87185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87185) {
				console.warn("de-queueing event obj87185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87185_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87195 
playAudio_87189();
function playAudio_87189() {
	window.obj87185_onTap_runningActionsCount = obj87185_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87195")[0];
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
		    window.obj87185_onTap_runningActionsCount = window.obj87185_onTap_runningActionsCount - 1;
if (window.obj87185_onTap_runningActionsCount < 0) {
	window.obj87185_onTap_runningActionsCount = 0;
} else if (window.obj87185_onTap_runningActionsCount == 0) {
	obj87185_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87185_onTap_runningActionsCount = window.obj87185_onTap_runningActionsCount - 1;
if (window.obj87185_onTap_runningActionsCount < 0) {
	window.obj87185_onTap_runningActionsCount = 0;
} else if (window.obj87185_onTap_runningActionsCount == 0) {
	obj87185_onTap_actionGroup3();
}
	}
}









};
obj87185_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87185_onTap_activeActionGroupIndex = -1;
		$("#obj87185").trigger("obj87185_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87185) {
				console.warn("de-queueing event obj87185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87185_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj69144: Event Touch Down
 *
 */
$("#obj69144").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69144_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69144_onTap is still running");
	return;
}
var obj69144_onTap_runningActionsCount = 0;
var obj69144_onTap_loopCount = 0;
obj69144_onTap_actionGroup0();
});










/*
 *
 *   obj69141: Event Touch Down
 *
 */
$("#obj69141").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69141_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69141_onTap is still running");
	return;
}
var obj69141_onTap_runningActionsCount = 0;
var obj69141_onTap_loopCount = 0;
obj69141_onTap_actionGroup0();
});








































/*
 *
 *   obj69117: Event Touch Down
 *
 */
$("#obj69117").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69117_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69117_onTap is still running");
	return;
}
var obj69117_onTap_runningActionsCount = 0;
var obj69117_onTap_loopCount = 0;
obj69117_onTap_actionGroup0();
});










/*
 *
 *   obj69109: Event Touch Down
 *
 */
$("#obj69109").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69109_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69109_onTap is still running");
	return;
}
var obj69109_onTap_runningActionsCount = 0;
var obj69109_onTap_loopCount = 0;
obj69109_onTap_actionGroup0();
});










/*
 *
 *   obj87190: Event Touch Down
 *
 */
$("#obj87190").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87190_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87190_onTap is still running");
	return;
}
var obj87190_onTap_runningActionsCount = 0;
var obj87190_onTap_loopCount = 0;
obj87190_onTap_actionGroup0();
});










/*
 *
 *   obj87185: Event Touch Down
 *
 */
$("#obj87185").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87185_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87185_onTap is still running");
	return;
}
var obj87185_onTap_runningActionsCount = 0;
var obj87185_onTap_loopCount = 0;
obj87185_onTap_actionGroup0();
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
	
$("#obj69147").trigger('SCEventShow');
$("#obj69144").trigger('SCEventShow');
$("#obj69141").trigger('SCEventShow');
$("#obj69139").trigger('SCEventShow');
$("#obj69137").trigger('SCEventShow');
$("#obj69135").trigger('SCEventShow');
$("#obj69117").trigger('SCEventShow');
$("#obj69109").trigger('SCEventShow');
$("#obj87190").trigger('SCEventShow');
$("#obj87185").trigger('SCEventShow');
$("#obj87195").trigger('SCEventShow');
$("#obj94705").trigger('SCEventShow');
$("#obj69107").trigger('SCEventShow');
	
});