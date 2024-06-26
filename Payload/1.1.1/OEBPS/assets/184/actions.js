pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 51639;
pubcoder.page.title = pubcoder.page.title || "184";
pubcoder.page.number = pubcoder.page.number || 184;
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
var obj51645_onTap_activeActionGroupIndex = -1;
var obj51645_onTap_runningActionsCount = 0;
var obj51645_onTap_loopCount = 0;
var obj51642_onTap_activeActionGroupIndex = -1;
var obj51642_onTap_runningActionsCount = 0;
var obj51642_onTap_loopCount = 0;
var obj67966_onTap_activeActionGroupIndex = -1;
var obj67966_onTap_runningActionsCount = 0;
var obj67966_onTap_loopCount = 0;
var obj67958_onTap_activeActionGroupIndex = -1;
var obj67958_onTap_runningActionsCount = 0;
var obj67958_onTap_loopCount = 0;
var obj89089_onTap_activeActionGroupIndex = -1;
var obj89089_onTap_runningActionsCount = 0;
var obj89089_onTap_loopCount = 0;
var obj89084_onTap_activeActionGroupIndex = -1;
var obj89084_onTap_runningActionsCount = 0;
var obj89084_onTap_loopCount = 0;
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
		
obj51645_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51645_onTap_activeActionGroupIndex = -1;
		$("#obj51645").trigger("obj51645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51645) {
				console.warn("de-queueing event obj51645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51645_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_51647();
function goToPage_51647() {
	window.obj51645_onTap_runningActionsCount = obj51645_onTap_runningActionsCount + 1;
	$("#anchor1082")[0].click();
	window.obj51645_onTap_runningActionsCount = window.obj51645_onTap_runningActionsCount - 1;
if (window.obj51645_onTap_runningActionsCount < 0) {
	window.obj51645_onTap_runningActionsCount = 0;
} else if (window.obj51645_onTap_runningActionsCount == 0) {
	obj51645_onTap_actionGroup1();
}
}





















};
obj51645_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51645_onTap_activeActionGroupIndex = -1;
		$("#obj51645").trigger("obj51645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51645) {
				console.warn("de-queueing event obj51645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51645_onTap_activeActionGroupIndex = 1;
	





















};
obj51642_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51642_onTap_activeActionGroupIndex = -1;
		$("#obj51642").trigger("obj51642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51642) {
				console.warn("de-queueing event obj51642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51642_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_51644();
function goToPage_51644() {
	window.obj51642_onTap_runningActionsCount = obj51642_onTap_runningActionsCount + 1;
	$("#anchor1083")[0].click();
	window.obj51642_onTap_runningActionsCount = window.obj51642_onTap_runningActionsCount - 1;
if (window.obj51642_onTap_runningActionsCount < 0) {
	window.obj51642_onTap_runningActionsCount = 0;
} else if (window.obj51642_onTap_runningActionsCount == 0) {
	obj51642_onTap_actionGroup1();
}
}





















};
obj51642_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51642_onTap_activeActionGroupIndex = -1;
		$("#obj51642").trigger("obj51642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51642) {
				console.warn("de-queueing event obj51642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51642_onTap_activeActionGroupIndex = 1;
	





















};
obj67966_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67966_onTap_activeActionGroupIndex = -1;
		$("#obj67966").trigger("obj67966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67966) {
				console.warn("de-queueing event obj67966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67966_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67966 
hide_67969();
function hide_67969() {
	var selector = "#obj67966";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67966_onTap_runningActionsCount = obj67966_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67966_onTap_runningActionsCount = window.obj67966_onTap_runningActionsCount - 1;
if (window.obj67966_onTap_runningActionsCount < 0) {
	window.obj67966_onTap_runningActionsCount = 0;
} else if (window.obj67966_onTap_runningActionsCount == 0) {
	obj67966_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67969(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67966_onTap_runningActionsCount = window.obj67966_onTap_runningActionsCount - 1;
if (window.obj67966_onTap_runningActionsCount < 0) {
	window.obj67966_onTap_runningActionsCount = 0;
} else if (window.obj67966_onTap_runningActionsCount == 0) {
	obj67966_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67972 
stopMovie_67968();
function stopMovie_67968() {
	window.obj67966_onTap_runningActionsCount = obj67966_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67972")[0];
	myVideo.pause();
	window.obj67966_onTap_runningActionsCount = window.obj67966_onTap_runningActionsCount - 1;
if (window.obj67966_onTap_runningActionsCount < 0) {
	window.obj67966_onTap_runningActionsCount = 0;
} else if (window.obj67966_onTap_runningActionsCount == 0) {
	obj67966_onTap_actionGroup1();
}
}
















};
obj67966_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67966_onTap_activeActionGroupIndex = -1;
		$("#obj67966").trigger("obj67966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67966) {
				console.warn("de-queueing event obj67966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67966_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67958
(function(){
	window.obj67966_onTap_runningActionsCount = obj67966_onTap_runningActionsCount + 1;

	var selector = "#obj67958";
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
					window.obj67966_onTap_runningActionsCount = window.obj67966_onTap_runningActionsCount - 1;
if (window.obj67966_onTap_runningActionsCount < 0) {
	window.obj67966_onTap_runningActionsCount = 0;
} else if (window.obj67966_onTap_runningActionsCount == 0) {
	obj67966_onTap_actionGroup2();
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
				window.obj67966_onTap_runningActionsCount = window.obj67966_onTap_runningActionsCount - 1;
if (window.obj67966_onTap_runningActionsCount < 0) {
	window.obj67966_onTap_runningActionsCount = 0;
} else if (window.obj67966_onTap_runningActionsCount == 0) {
	obj67966_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67966_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67966_onTap_activeActionGroupIndex = -1;
		$("#obj67966").trigger("obj67966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67966) {
				console.warn("de-queueing event obj67966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67966_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67972 
move_67971();
function move_67971() {
	window.obj67966_onTap_runningActionsCount = obj67966_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67972");
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
			window.obj67966_onTap_runningActionsCount = window.obj67966_onTap_runningActionsCount - 1;
if (window.obj67966_onTap_runningActionsCount < 0) {
	window.obj67966_onTap_runningActionsCount = 0;
} else if (window.obj67966_onTap_runningActionsCount == 0) {
	obj67966_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67966_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67966_onTap_activeActionGroupIndex = -1;
		$("#obj67966").trigger("obj67966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67966) {
				console.warn("de-queueing event obj67966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67966_onTap_activeActionGroupIndex = 3;
	





















};
obj67958_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67958_onTap_activeActionGroupIndex = -1;
		$("#obj67958").trigger("obj67958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67958) {
				console.warn("de-queueing event obj67958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67958_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67958 
hide_67961();
function hide_67961() {
	var selector = "#obj67958";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67958_onTap_runningActionsCount = obj67958_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67958_onTap_runningActionsCount = window.obj67958_onTap_runningActionsCount - 1;
if (window.obj67958_onTap_runningActionsCount < 0) {
	window.obj67958_onTap_runningActionsCount = 0;
} else if (window.obj67958_onTap_runningActionsCount == 0) {
	obj67958_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67961(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67958_onTap_runningActionsCount = window.obj67958_onTap_runningActionsCount - 1;
if (window.obj67958_onTap_runningActionsCount < 0) {
	window.obj67958_onTap_runningActionsCount = 0;
} else if (window.obj67958_onTap_runningActionsCount == 0) {
	obj67958_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67972 
playPauseMovie_67960();
function playPauseMovie_67960() {
	window.obj67958_onTap_runningActionsCount = obj67958_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67972")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67958_onTap_runningActionsCount = window.obj67958_onTap_runningActionsCount - 1;
if (window.obj67958_onTap_runningActionsCount < 0) {
	window.obj67958_onTap_runningActionsCount = 0;
} else if (window.obj67958_onTap_runningActionsCount == 0) {
	obj67958_onTap_actionGroup1();
}
}

















};
obj67958_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67958_onTap_activeActionGroupIndex = -1;
		$("#obj67958").trigger("obj67958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67958) {
				console.warn("de-queueing event obj67958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67958_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67966
(function(){
	window.obj67958_onTap_runningActionsCount = obj67958_onTap_runningActionsCount + 1;

	var selector = "#obj67966";
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
					window.obj67958_onTap_runningActionsCount = window.obj67958_onTap_runningActionsCount - 1;
if (window.obj67958_onTap_runningActionsCount < 0) {
	window.obj67958_onTap_runningActionsCount = 0;
} else if (window.obj67958_onTap_runningActionsCount == 0) {
	obj67958_onTap_actionGroup2();
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
				window.obj67958_onTap_runningActionsCount = window.obj67958_onTap_runningActionsCount - 1;
if (window.obj67958_onTap_runningActionsCount < 0) {
	window.obj67958_onTap_runningActionsCount = 0;
} else if (window.obj67958_onTap_runningActionsCount == 0) {
	obj67958_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67958_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67958_onTap_activeActionGroupIndex = -1;
		$("#obj67958").trigger("obj67958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67958) {
				console.warn("de-queueing event obj67958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67958_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67972 
move_67963();
function move_67963() {
	window.obj67958_onTap_runningActionsCount = obj67958_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67972");
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
			window.obj67958_onTap_runningActionsCount = window.obj67958_onTap_runningActionsCount - 1;
if (window.obj67958_onTap_runningActionsCount < 0) {
	window.obj67958_onTap_runningActionsCount = 0;
} else if (window.obj67958_onTap_runningActionsCount == 0) {
	obj67958_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67958_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67958_onTap_activeActionGroupIndex = -1;
		$("#obj67958").trigger("obj67958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67958) {
				console.warn("de-queueing event obj67958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67958_onTap_activeActionGroupIndex = 3;
	





















};
obj89089_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89089_onTap_activeActionGroupIndex = -1;
		$("#obj89089").trigger("obj89089_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89089) {
				console.warn("de-queueing event obj89089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89089_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89094 
stopAudio_89091();
function stopAudio_89091() {
	window.obj89089_onTap_runningActionsCount = obj89089_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89094")[0];
	myAudio.pause();
	window.obj89089_onTap_runningActionsCount = window.obj89089_onTap_runningActionsCount - 1;
if (window.obj89089_onTap_runningActionsCount < 0) {
	window.obj89089_onTap_runningActionsCount = 0;
} else if (window.obj89089_onTap_runningActionsCount == 0) {
	obj89089_onTap_actionGroup1();
}
}








};
obj89089_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89089_onTap_activeActionGroupIndex = -1;
		$("#obj89089").trigger("obj89089_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89089) {
				console.warn("de-queueing event obj89089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89089_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89089 
hide_89092();
function hide_89092() {
	var selector = "#obj89089";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89089_onTap_runningActionsCount = obj89089_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89089_onTap_runningActionsCount = window.obj89089_onTap_runningActionsCount - 1;
if (window.obj89089_onTap_runningActionsCount < 0) {
	window.obj89089_onTap_runningActionsCount = 0;
} else if (window.obj89089_onTap_runningActionsCount == 0) {
	obj89089_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89092(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89089_onTap_runningActionsCount = window.obj89089_onTap_runningActionsCount - 1;
if (window.obj89089_onTap_runningActionsCount < 0) {
	window.obj89089_onTap_runningActionsCount = 0;
} else if (window.obj89089_onTap_runningActionsCount == 0) {
	obj89089_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89089_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89089_onTap_activeActionGroupIndex = -1;
		$("#obj89089").trigger("obj89089_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89089) {
				console.warn("de-queueing event obj89089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89089_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89084
(function(){
	window.obj89089_onTap_runningActionsCount = obj89089_onTap_runningActionsCount + 1;

	var selector = "#obj89084";
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
					window.obj89089_onTap_runningActionsCount = window.obj89089_onTap_runningActionsCount - 1;
if (window.obj89089_onTap_runningActionsCount < 0) {
	window.obj89089_onTap_runningActionsCount = 0;
} else if (window.obj89089_onTap_runningActionsCount == 0) {
	obj89089_onTap_actionGroup3();
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
				window.obj89089_onTap_runningActionsCount = window.obj89089_onTap_runningActionsCount - 1;
if (window.obj89089_onTap_runningActionsCount < 0) {
	window.obj89089_onTap_runningActionsCount = 0;
} else if (window.obj89089_onTap_runningActionsCount == 0) {
	obj89089_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89089_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89089_onTap_activeActionGroupIndex = -1;
		$("#obj89089").trigger("obj89089_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89089) {
				console.warn("de-queueing event obj89089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89089_onTap_activeActionGroupIndex = 3;
	





















};
obj89084_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89084_onTap_activeActionGroupIndex = -1;
		$("#obj89084").trigger("obj89084_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89084) {
				console.warn("de-queueing event obj89084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89084_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89084 
hide_89086();
function hide_89086() {
	var selector = "#obj89084";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89084_onTap_runningActionsCount = obj89084_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89084_onTap_runningActionsCount = window.obj89084_onTap_runningActionsCount - 1;
if (window.obj89084_onTap_runningActionsCount < 0) {
	window.obj89084_onTap_runningActionsCount = 0;
} else if (window.obj89084_onTap_runningActionsCount == 0) {
	obj89084_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89086(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89084_onTap_runningActionsCount = window.obj89084_onTap_runningActionsCount - 1;
if (window.obj89084_onTap_runningActionsCount < 0) {
	window.obj89084_onTap_runningActionsCount = 0;
} else if (window.obj89084_onTap_runningActionsCount == 0) {
	obj89084_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89084_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89084_onTap_activeActionGroupIndex = -1;
		$("#obj89084").trigger("obj89084_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89084) {
				console.warn("de-queueing event obj89084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89084_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89089
(function(){
	window.obj89084_onTap_runningActionsCount = obj89084_onTap_runningActionsCount + 1;

	var selector = "#obj89089";
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
					window.obj89084_onTap_runningActionsCount = window.obj89084_onTap_runningActionsCount - 1;
if (window.obj89084_onTap_runningActionsCount < 0) {
	window.obj89084_onTap_runningActionsCount = 0;
} else if (window.obj89084_onTap_runningActionsCount == 0) {
	obj89084_onTap_actionGroup2();
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
				window.obj89084_onTap_runningActionsCount = window.obj89084_onTap_runningActionsCount - 1;
if (window.obj89084_onTap_runningActionsCount < 0) {
	window.obj89084_onTap_runningActionsCount = 0;
} else if (window.obj89084_onTap_runningActionsCount == 0) {
	obj89084_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89084_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89084_onTap_activeActionGroupIndex = -1;
		$("#obj89084").trigger("obj89084_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89084) {
				console.warn("de-queueing event obj89084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89084_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89094 
playAudio_89088();
function playAudio_89088() {
	window.obj89084_onTap_runningActionsCount = obj89084_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89094")[0];
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
		    window.obj89084_onTap_runningActionsCount = window.obj89084_onTap_runningActionsCount - 1;
if (window.obj89084_onTap_runningActionsCount < 0) {
	window.obj89084_onTap_runningActionsCount = 0;
} else if (window.obj89084_onTap_runningActionsCount == 0) {
	obj89084_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89084_onTap_runningActionsCount = window.obj89084_onTap_runningActionsCount - 1;
if (window.obj89084_onTap_runningActionsCount < 0) {
	window.obj89084_onTap_runningActionsCount = 0;
} else if (window.obj89084_onTap_runningActionsCount == 0) {
	obj89084_onTap_actionGroup3();
}
	}
}









};
obj89084_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89084_onTap_activeActionGroupIndex = -1;
		$("#obj89084").trigger("obj89084_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89084) {
				console.warn("de-queueing event obj89084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89084_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj51645: Event Touch Down
 *
 */
$("#obj51645").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj51645_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51645_onTap is still running");
	return;
}
var obj51645_onTap_runningActionsCount = 0;
var obj51645_onTap_loopCount = 0;
obj51645_onTap_actionGroup0();
});










/*
 *
 *   obj51642: Event Touch Down
 *
 */
$("#obj51642").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj51642_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51642_onTap is still running");
	return;
}
var obj51642_onTap_runningActionsCount = 0;
var obj51642_onTap_loopCount = 0;
obj51642_onTap_actionGroup0();
});




















/*
 *
 *   obj67966: Event Touch Down
 *
 */
$("#obj67966").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67966_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67966_onTap is still running");
	return;
}
var obj67966_onTap_runningActionsCount = 0;
var obj67966_onTap_loopCount = 0;
obj67966_onTap_actionGroup0();
});










/*
 *
 *   obj67958: Event Touch Down
 *
 */
$("#obj67958").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67958_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67958_onTap is still running");
	return;
}
var obj67958_onTap_runningActionsCount = 0;
var obj67958_onTap_loopCount = 0;
obj67958_onTap_actionGroup0();
});










/*
 *
 *   obj89089: Event Touch Down
 *
 */
$("#obj89089").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89089_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89089_onTap is still running");
	return;
}
var obj89089_onTap_runningActionsCount = 0;
var obj89089_onTap_loopCount = 0;
obj89089_onTap_actionGroup0();
});










/*
 *
 *   obj89084: Event Touch Down
 *
 */
$("#obj89084").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89084_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89084_onTap is still running");
	return;
}
var obj89084_onTap_runningActionsCount = 0;
var obj89084_onTap_loopCount = 0;
obj89084_onTap_actionGroup0();
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
	
$("#obj51640").trigger('SCEventShow');
$("#obj51645").trigger('SCEventShow');
$("#obj51642").trigger('SCEventShow');
$("#obj51662").trigger('SCEventShow');
$("#obj67966").trigger('SCEventShow');
$("#obj67958").trigger('SCEventShow');
$("#obj89089").trigger('SCEventShow');
$("#obj89084").trigger('SCEventShow');
$("#obj89094").trigger('SCEventShow');
$("#obj94997").trigger('SCEventShow');
$("#obj67972").trigger('SCEventShow');
	
});