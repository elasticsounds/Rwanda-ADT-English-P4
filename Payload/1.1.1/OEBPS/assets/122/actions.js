pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 35682;
pubcoder.page.title = pubcoder.page.title || "122";
pubcoder.page.number = pubcoder.page.number || 122;
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
var obj35690_onTap_activeActionGroupIndex = -1;
var obj35690_onTap_runningActionsCount = 0;
var obj35690_onTap_loopCount = 0;
var obj35687_onTap_activeActionGroupIndex = -1;
var obj35687_onTap_runningActionsCount = 0;
var obj35687_onTap_loopCount = 0;
var obj66958_onTap_activeActionGroupIndex = -1;
var obj66958_onTap_runningActionsCount = 0;
var obj66958_onTap_loopCount = 0;
var obj66950_onTap_activeActionGroupIndex = -1;
var obj66950_onTap_runningActionsCount = 0;
var obj66950_onTap_loopCount = 0;
var obj89574_onTap_activeActionGroupIndex = -1;
var obj89574_onTap_runningActionsCount = 0;
var obj89574_onTap_loopCount = 0;
var obj89569_onTap_activeActionGroupIndex = -1;
var obj89569_onTap_runningActionsCount = 0;
var obj89569_onTap_loopCount = 0;
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
		
obj35690_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35690_onTap_activeActionGroupIndex = -1;
		$("#obj35690").trigger("obj35690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35690) {
				console.warn("de-queueing event obj35690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35690_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_35692();
function goToPage_35692() {
	window.obj35690_onTap_runningActionsCount = obj35690_onTap_runningActionsCount + 1;
	$("#anchor732")[0].click();
	window.obj35690_onTap_runningActionsCount = window.obj35690_onTap_runningActionsCount - 1;
if (window.obj35690_onTap_runningActionsCount < 0) {
	window.obj35690_onTap_runningActionsCount = 0;
} else if (window.obj35690_onTap_runningActionsCount == 0) {
	obj35690_onTap_actionGroup1();
}
}





















};
obj35690_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35690_onTap_activeActionGroupIndex = -1;
		$("#obj35690").trigger("obj35690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35690) {
				console.warn("de-queueing event obj35690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35690_onTap_activeActionGroupIndex = 1;
	





















};
obj35687_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35687_onTap_activeActionGroupIndex = -1;
		$("#obj35687").trigger("obj35687_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35687) {
				console.warn("de-queueing event obj35687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35687_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_35689();
function goToPage_35689() {
	window.obj35687_onTap_runningActionsCount = obj35687_onTap_runningActionsCount + 1;
	$("#anchor733")[0].click();
	window.obj35687_onTap_runningActionsCount = window.obj35687_onTap_runningActionsCount - 1;
if (window.obj35687_onTap_runningActionsCount < 0) {
	window.obj35687_onTap_runningActionsCount = 0;
} else if (window.obj35687_onTap_runningActionsCount == 0) {
	obj35687_onTap_actionGroup1();
}
}





















};
obj35687_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35687_onTap_activeActionGroupIndex = -1;
		$("#obj35687").trigger("obj35687_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35687) {
				console.warn("de-queueing event obj35687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35687_onTap_activeActionGroupIndex = 1;
	





















};
obj66958_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66958_onTap_activeActionGroupIndex = -1;
		$("#obj66958").trigger("obj66958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66958) {
				console.warn("de-queueing event obj66958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66958_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj66958 
hide_66961();
function hide_66961() {
	var selector = "#obj66958";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj66958_onTap_runningActionsCount = obj66958_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj66958_onTap_runningActionsCount = window.obj66958_onTap_runningActionsCount - 1;
if (window.obj66958_onTap_runningActionsCount < 0) {
	window.obj66958_onTap_runningActionsCount = 0;
} else if (window.obj66958_onTap_runningActionsCount == 0) {
	obj66958_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_66961(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj66958_onTap_runningActionsCount = window.obj66958_onTap_runningActionsCount - 1;
if (window.obj66958_onTap_runningActionsCount < 0) {
	window.obj66958_onTap_runningActionsCount = 0;
} else if (window.obj66958_onTap_runningActionsCount == 0) {
	obj66958_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj66964 
stopMovie_66960();
function stopMovie_66960() {
	window.obj66958_onTap_runningActionsCount = obj66958_onTap_runningActionsCount + 1;
	var myVideo = $("#obj66964")[0];
	myVideo.pause();
	window.obj66958_onTap_runningActionsCount = window.obj66958_onTap_runningActionsCount - 1;
if (window.obj66958_onTap_runningActionsCount < 0) {
	window.obj66958_onTap_runningActionsCount = 0;
} else if (window.obj66958_onTap_runningActionsCount == 0) {
	obj66958_onTap_actionGroup1();
}
}
















};
obj66958_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66958_onTap_activeActionGroupIndex = -1;
		$("#obj66958").trigger("obj66958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66958) {
				console.warn("de-queueing event obj66958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66958_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj66950
(function(){
	window.obj66958_onTap_runningActionsCount = obj66958_onTap_runningActionsCount + 1;

	var selector = "#obj66950";
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
					window.obj66958_onTap_runningActionsCount = window.obj66958_onTap_runningActionsCount - 1;
if (window.obj66958_onTap_runningActionsCount < 0) {
	window.obj66958_onTap_runningActionsCount = 0;
} else if (window.obj66958_onTap_runningActionsCount == 0) {
	obj66958_onTap_actionGroup2();
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
				window.obj66958_onTap_runningActionsCount = window.obj66958_onTap_runningActionsCount - 1;
if (window.obj66958_onTap_runningActionsCount < 0) {
	window.obj66958_onTap_runningActionsCount = 0;
} else if (window.obj66958_onTap_runningActionsCount == 0) {
	obj66958_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj66958_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66958_onTap_activeActionGroupIndex = -1;
		$("#obj66958").trigger("obj66958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66958) {
				console.warn("de-queueing event obj66958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66958_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj66964 
move_66963();
function move_66963() {
	window.obj66958_onTap_runningActionsCount = obj66958_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj66964");
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
			window.obj66958_onTap_runningActionsCount = window.obj66958_onTap_runningActionsCount - 1;
if (window.obj66958_onTap_runningActionsCount < 0) {
	window.obj66958_onTap_runningActionsCount = 0;
} else if (window.obj66958_onTap_runningActionsCount == 0) {
	obj66958_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj66958_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj66958_onTap_activeActionGroupIndex = -1;
		$("#obj66958").trigger("obj66958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66958) {
				console.warn("de-queueing event obj66958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66958_onTap_activeActionGroupIndex = 3;
	





















};
obj66950_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66950_onTap_activeActionGroupIndex = -1;
		$("#obj66950").trigger("obj66950_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66950) {
				console.warn("de-queueing event obj66950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66950_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj66950 
hide_66953();
function hide_66953() {
	var selector = "#obj66950";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj66950_onTap_runningActionsCount = obj66950_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj66950_onTap_runningActionsCount = window.obj66950_onTap_runningActionsCount - 1;
if (window.obj66950_onTap_runningActionsCount < 0) {
	window.obj66950_onTap_runningActionsCount = 0;
} else if (window.obj66950_onTap_runningActionsCount == 0) {
	obj66950_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_66953(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj66950_onTap_runningActionsCount = window.obj66950_onTap_runningActionsCount - 1;
if (window.obj66950_onTap_runningActionsCount < 0) {
	window.obj66950_onTap_runningActionsCount = 0;
} else if (window.obj66950_onTap_runningActionsCount == 0) {
	obj66950_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj66964 
playPauseMovie_66952();
function playPauseMovie_66952() {
	window.obj66950_onTap_runningActionsCount = obj66950_onTap_runningActionsCount + 1;
	var myVideo = $("#obj66964")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj66950_onTap_runningActionsCount = window.obj66950_onTap_runningActionsCount - 1;
if (window.obj66950_onTap_runningActionsCount < 0) {
	window.obj66950_onTap_runningActionsCount = 0;
} else if (window.obj66950_onTap_runningActionsCount == 0) {
	obj66950_onTap_actionGroup1();
}
}

















};
obj66950_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66950_onTap_activeActionGroupIndex = -1;
		$("#obj66950").trigger("obj66950_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66950) {
				console.warn("de-queueing event obj66950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66950_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj66958
(function(){
	window.obj66950_onTap_runningActionsCount = obj66950_onTap_runningActionsCount + 1;

	var selector = "#obj66958";
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
					window.obj66950_onTap_runningActionsCount = window.obj66950_onTap_runningActionsCount - 1;
if (window.obj66950_onTap_runningActionsCount < 0) {
	window.obj66950_onTap_runningActionsCount = 0;
} else if (window.obj66950_onTap_runningActionsCount == 0) {
	obj66950_onTap_actionGroup2();
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
				window.obj66950_onTap_runningActionsCount = window.obj66950_onTap_runningActionsCount - 1;
if (window.obj66950_onTap_runningActionsCount < 0) {
	window.obj66950_onTap_runningActionsCount = 0;
} else if (window.obj66950_onTap_runningActionsCount == 0) {
	obj66950_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj66950_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66950_onTap_activeActionGroupIndex = -1;
		$("#obj66950").trigger("obj66950_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66950) {
				console.warn("de-queueing event obj66950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66950_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj66964 
move_66955();
function move_66955() {
	window.obj66950_onTap_runningActionsCount = obj66950_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj66964");
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
			window.obj66950_onTap_runningActionsCount = window.obj66950_onTap_runningActionsCount - 1;
if (window.obj66950_onTap_runningActionsCount < 0) {
	window.obj66950_onTap_runningActionsCount = 0;
} else if (window.obj66950_onTap_runningActionsCount == 0) {
	obj66950_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj66950_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj66950_onTap_activeActionGroupIndex = -1;
		$("#obj66950").trigger("obj66950_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66950) {
				console.warn("de-queueing event obj66950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66950_onTap_activeActionGroupIndex = 3;
	





















};
obj89574_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89574_onTap_activeActionGroupIndex = -1;
		$("#obj89574").trigger("obj89574_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89574) {
				console.warn("de-queueing event obj89574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89574_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89579 
stopAudio_89576();
function stopAudio_89576() {
	window.obj89574_onTap_runningActionsCount = obj89574_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89579")[0];
	myAudio.pause();
	window.obj89574_onTap_runningActionsCount = window.obj89574_onTap_runningActionsCount - 1;
if (window.obj89574_onTap_runningActionsCount < 0) {
	window.obj89574_onTap_runningActionsCount = 0;
} else if (window.obj89574_onTap_runningActionsCount == 0) {
	obj89574_onTap_actionGroup1();
}
}








};
obj89574_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89574_onTap_activeActionGroupIndex = -1;
		$("#obj89574").trigger("obj89574_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89574) {
				console.warn("de-queueing event obj89574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89574_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89574 
hide_89577();
function hide_89577() {
	var selector = "#obj89574";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89574_onTap_runningActionsCount = obj89574_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89574_onTap_runningActionsCount = window.obj89574_onTap_runningActionsCount - 1;
if (window.obj89574_onTap_runningActionsCount < 0) {
	window.obj89574_onTap_runningActionsCount = 0;
} else if (window.obj89574_onTap_runningActionsCount == 0) {
	obj89574_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89577(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89574_onTap_runningActionsCount = window.obj89574_onTap_runningActionsCount - 1;
if (window.obj89574_onTap_runningActionsCount < 0) {
	window.obj89574_onTap_runningActionsCount = 0;
} else if (window.obj89574_onTap_runningActionsCount == 0) {
	obj89574_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89574_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89574_onTap_activeActionGroupIndex = -1;
		$("#obj89574").trigger("obj89574_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89574) {
				console.warn("de-queueing event obj89574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89574_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89569
(function(){
	window.obj89574_onTap_runningActionsCount = obj89574_onTap_runningActionsCount + 1;

	var selector = "#obj89569";
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
					window.obj89574_onTap_runningActionsCount = window.obj89574_onTap_runningActionsCount - 1;
if (window.obj89574_onTap_runningActionsCount < 0) {
	window.obj89574_onTap_runningActionsCount = 0;
} else if (window.obj89574_onTap_runningActionsCount == 0) {
	obj89574_onTap_actionGroup3();
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
				window.obj89574_onTap_runningActionsCount = window.obj89574_onTap_runningActionsCount - 1;
if (window.obj89574_onTap_runningActionsCount < 0) {
	window.obj89574_onTap_runningActionsCount = 0;
} else if (window.obj89574_onTap_runningActionsCount == 0) {
	obj89574_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89574_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89574_onTap_activeActionGroupIndex = -1;
		$("#obj89574").trigger("obj89574_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89574) {
				console.warn("de-queueing event obj89574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89574_onTap_activeActionGroupIndex = 3;
	





















};
obj89569_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89569_onTap_activeActionGroupIndex = -1;
		$("#obj89569").trigger("obj89569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89569) {
				console.warn("de-queueing event obj89569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89569_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89569 
hide_89571();
function hide_89571() {
	var selector = "#obj89569";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89569_onTap_runningActionsCount = obj89569_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89569_onTap_runningActionsCount = window.obj89569_onTap_runningActionsCount - 1;
if (window.obj89569_onTap_runningActionsCount < 0) {
	window.obj89569_onTap_runningActionsCount = 0;
} else if (window.obj89569_onTap_runningActionsCount == 0) {
	obj89569_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89571(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89569_onTap_runningActionsCount = window.obj89569_onTap_runningActionsCount - 1;
if (window.obj89569_onTap_runningActionsCount < 0) {
	window.obj89569_onTap_runningActionsCount = 0;
} else if (window.obj89569_onTap_runningActionsCount == 0) {
	obj89569_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89569_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89569_onTap_activeActionGroupIndex = -1;
		$("#obj89569").trigger("obj89569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89569) {
				console.warn("de-queueing event obj89569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89569_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89574
(function(){
	window.obj89569_onTap_runningActionsCount = obj89569_onTap_runningActionsCount + 1;

	var selector = "#obj89574";
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
					window.obj89569_onTap_runningActionsCount = window.obj89569_onTap_runningActionsCount - 1;
if (window.obj89569_onTap_runningActionsCount < 0) {
	window.obj89569_onTap_runningActionsCount = 0;
} else if (window.obj89569_onTap_runningActionsCount == 0) {
	obj89569_onTap_actionGroup2();
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
				window.obj89569_onTap_runningActionsCount = window.obj89569_onTap_runningActionsCount - 1;
if (window.obj89569_onTap_runningActionsCount < 0) {
	window.obj89569_onTap_runningActionsCount = 0;
} else if (window.obj89569_onTap_runningActionsCount == 0) {
	obj89569_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89569_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89569_onTap_activeActionGroupIndex = -1;
		$("#obj89569").trigger("obj89569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89569) {
				console.warn("de-queueing event obj89569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89569_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89579 
playAudio_89573();
function playAudio_89573() {
	window.obj89569_onTap_runningActionsCount = obj89569_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89579")[0];
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
		    window.obj89569_onTap_runningActionsCount = window.obj89569_onTap_runningActionsCount - 1;
if (window.obj89569_onTap_runningActionsCount < 0) {
	window.obj89569_onTap_runningActionsCount = 0;
} else if (window.obj89569_onTap_runningActionsCount == 0) {
	obj89569_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89569_onTap_runningActionsCount = window.obj89569_onTap_runningActionsCount - 1;
if (window.obj89569_onTap_runningActionsCount < 0) {
	window.obj89569_onTap_runningActionsCount = 0;
} else if (window.obj89569_onTap_runningActionsCount == 0) {
	obj89569_onTap_actionGroup3();
}
	}
}









};
obj89569_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89569_onTap_activeActionGroupIndex = -1;
		$("#obj89569").trigger("obj89569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89569) {
				console.warn("de-queueing event obj89569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89569_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj35690: Event Touch Down
 *
 */
$("#obj35690").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj35690_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35690_onTap is still running");
	return;
}
var obj35690_onTap_runningActionsCount = 0;
var obj35690_onTap_loopCount = 0;
obj35690_onTap_actionGroup0();
});










/*
 *
 *   obj35687: Event Touch Down
 *
 */
$("#obj35687").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj35687_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35687_onTap is still running");
	return;
}
var obj35687_onTap_runningActionsCount = 0;
var obj35687_onTap_loopCount = 0;
obj35687_onTap_actionGroup0();
});






























/*
 *
 *   obj66958: Event Touch Down
 *
 */
$("#obj66958").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj66958_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj66958_onTap is still running");
	return;
}
var obj66958_onTap_runningActionsCount = 0;
var obj66958_onTap_loopCount = 0;
obj66958_onTap_actionGroup0();
});










/*
 *
 *   obj66950: Event Touch Down
 *
 */
$("#obj66950").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj66950_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj66950_onTap is still running");
	return;
}
var obj66950_onTap_runningActionsCount = 0;
var obj66950_onTap_loopCount = 0;
obj66950_onTap_actionGroup0();
});










/*
 *
 *   obj89574: Event Touch Down
 *
 */
$("#obj89574").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89574_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89574_onTap is still running");
	return;
}
var obj89574_onTap_runningActionsCount = 0;
var obj89574_onTap_loopCount = 0;
obj89574_onTap_actionGroup0();
});










/*
 *
 *   obj89569: Event Touch Down
 *
 */
$("#obj89569").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89569_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89569_onTap is still running");
	return;
}
var obj89569_onTap_runningActionsCount = 0;
var obj89569_onTap_loopCount = 0;
obj89569_onTap_actionGroup0();
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
	
$("#obj35706").trigger('SCEventShow');
$("#obj35690").trigger('SCEventShow');
$("#obj35687").trigger('SCEventShow');
$("#obj35685").trigger('SCEventShow');
$("#obj35683").trigger('SCEventShow');
$("#obj66958").trigger('SCEventShow');
$("#obj66950").trigger('SCEventShow');
$("#obj89574").trigger('SCEventShow');
$("#obj89569").trigger('SCEventShow');
$("#obj89579").trigger('SCEventShow');
$("#obj94873").trigger('SCEventShow');
$("#obj66964").trigger('SCEventShow');
	
});