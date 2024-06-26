pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 22054;
pubcoder.page.title = pubcoder.page.title || "85";
pubcoder.page.number = pubcoder.page.number || 85;
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
var obj78171_onTap_activeActionGroupIndex = -1;
var obj78171_onTap_runningActionsCount = 0;
var obj78171_onTap_loopCount = 0;
var obj78168_onTap_activeActionGroupIndex = -1;
var obj78168_onTap_runningActionsCount = 0;
var obj78168_onTap_loopCount = 0;
var obj78142_onTap_activeActionGroupIndex = -1;
var obj78142_onTap_runningActionsCount = 0;
var obj78142_onTap_loopCount = 0;
var obj78134_onTap_activeActionGroupIndex = -1;
var obj78134_onTap_runningActionsCount = 0;
var obj78134_onTap_loopCount = 0;
var obj87889_onTap_activeActionGroupIndex = -1;
var obj87889_onTap_runningActionsCount = 0;
var obj87889_onTap_loopCount = 0;
var obj87884_onTap_activeActionGroupIndex = -1;
var obj87884_onTap_runningActionsCount = 0;
var obj87884_onTap_loopCount = 0;
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
		
obj78171_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78171_onTap_activeActionGroupIndex = -1;
		$("#obj78171").trigger("obj78171_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78171) {
				console.warn("de-queueing event obj78171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78171_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78173();
function goToPage_78173() {
	window.obj78171_onTap_runningActionsCount = obj78171_onTap_runningActionsCount + 1;
	$("#anchor499")[0].click();
	window.obj78171_onTap_runningActionsCount = window.obj78171_onTap_runningActionsCount - 1;
if (window.obj78171_onTap_runningActionsCount < 0) {
	window.obj78171_onTap_runningActionsCount = 0;
} else if (window.obj78171_onTap_runningActionsCount == 0) {
	obj78171_onTap_actionGroup1();
}
}





















};
obj78171_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78171_onTap_activeActionGroupIndex = -1;
		$("#obj78171").trigger("obj78171_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78171) {
				console.warn("de-queueing event obj78171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78171_onTap_activeActionGroupIndex = 1;
	





















};
obj78168_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78168_onTap_activeActionGroupIndex = -1;
		$("#obj78168").trigger("obj78168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78168) {
				console.warn("de-queueing event obj78168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78168_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78170();
function goToPage_78170() {
	window.obj78168_onTap_runningActionsCount = obj78168_onTap_runningActionsCount + 1;
	$("#anchor500")[0].click();
	window.obj78168_onTap_runningActionsCount = window.obj78168_onTap_runningActionsCount - 1;
if (window.obj78168_onTap_runningActionsCount < 0) {
	window.obj78168_onTap_runningActionsCount = 0;
} else if (window.obj78168_onTap_runningActionsCount == 0) {
	obj78168_onTap_actionGroup1();
}
}





















};
obj78168_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78168_onTap_activeActionGroupIndex = -1;
		$("#obj78168").trigger("obj78168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78168) {
				console.warn("de-queueing event obj78168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78168_onTap_activeActionGroupIndex = 1;
	





















};
obj78142_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78142_onTap_activeActionGroupIndex = -1;
		$("#obj78142").trigger("obj78142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78142) {
				console.warn("de-queueing event obj78142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78142_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78142 
hide_78145();
function hide_78145() {
	var selector = "#obj78142";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78142_onTap_runningActionsCount = obj78142_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78142_onTap_runningActionsCount = window.obj78142_onTap_runningActionsCount - 1;
if (window.obj78142_onTap_runningActionsCount < 0) {
	window.obj78142_onTap_runningActionsCount = 0;
} else if (window.obj78142_onTap_runningActionsCount == 0) {
	obj78142_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78145(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78142_onTap_runningActionsCount = window.obj78142_onTap_runningActionsCount - 1;
if (window.obj78142_onTap_runningActionsCount < 0) {
	window.obj78142_onTap_runningActionsCount = 0;
} else if (window.obj78142_onTap_runningActionsCount == 0) {
	obj78142_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj78132 
stopMovie_78144();
function stopMovie_78144() {
	window.obj78142_onTap_runningActionsCount = obj78142_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78132")[0];
	myVideo.pause();
	window.obj78142_onTap_runningActionsCount = window.obj78142_onTap_runningActionsCount - 1;
if (window.obj78142_onTap_runningActionsCount < 0) {
	window.obj78142_onTap_runningActionsCount = 0;
} else if (window.obj78142_onTap_runningActionsCount == 0) {
	obj78142_onTap_actionGroup1();
}
}
















};
obj78142_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78142_onTap_activeActionGroupIndex = -1;
		$("#obj78142").trigger("obj78142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78142) {
				console.warn("de-queueing event obj78142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78142_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78134
(function(){
	window.obj78142_onTap_runningActionsCount = obj78142_onTap_runningActionsCount + 1;

	var selector = "#obj78134";
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
					window.obj78142_onTap_runningActionsCount = window.obj78142_onTap_runningActionsCount - 1;
if (window.obj78142_onTap_runningActionsCount < 0) {
	window.obj78142_onTap_runningActionsCount = 0;
} else if (window.obj78142_onTap_runningActionsCount == 0) {
	obj78142_onTap_actionGroup2();
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
				window.obj78142_onTap_runningActionsCount = window.obj78142_onTap_runningActionsCount - 1;
if (window.obj78142_onTap_runningActionsCount < 0) {
	window.obj78142_onTap_runningActionsCount = 0;
} else if (window.obj78142_onTap_runningActionsCount == 0) {
	obj78142_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78142_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78142_onTap_activeActionGroupIndex = -1;
		$("#obj78142").trigger("obj78142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78142) {
				console.warn("de-queueing event obj78142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78142_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78132 
move_78147();
function move_78147() {
	window.obj78142_onTap_runningActionsCount = obj78142_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78132");
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
			window.obj78142_onTap_runningActionsCount = window.obj78142_onTap_runningActionsCount - 1;
if (window.obj78142_onTap_runningActionsCount < 0) {
	window.obj78142_onTap_runningActionsCount = 0;
} else if (window.obj78142_onTap_runningActionsCount == 0) {
	obj78142_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78142_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78142_onTap_activeActionGroupIndex = -1;
		$("#obj78142").trigger("obj78142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78142) {
				console.warn("de-queueing event obj78142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78142_onTap_activeActionGroupIndex = 3;
	





















};
obj78134_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78134_onTap_activeActionGroupIndex = -1;
		$("#obj78134").trigger("obj78134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78134) {
				console.warn("de-queueing event obj78134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78134_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78134 
hide_78137();
function hide_78137() {
	var selector = "#obj78134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78134_onTap_runningActionsCount = obj78134_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78134_onTap_runningActionsCount = window.obj78134_onTap_runningActionsCount - 1;
if (window.obj78134_onTap_runningActionsCount < 0) {
	window.obj78134_onTap_runningActionsCount = 0;
} else if (window.obj78134_onTap_runningActionsCount == 0) {
	obj78134_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78137(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78134_onTap_runningActionsCount = window.obj78134_onTap_runningActionsCount - 1;
if (window.obj78134_onTap_runningActionsCount < 0) {
	window.obj78134_onTap_runningActionsCount = 0;
} else if (window.obj78134_onTap_runningActionsCount == 0) {
	obj78134_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj78132 
playPauseMovie_78136();
function playPauseMovie_78136() {
	window.obj78134_onTap_runningActionsCount = obj78134_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78132")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj78134_onTap_runningActionsCount = window.obj78134_onTap_runningActionsCount - 1;
if (window.obj78134_onTap_runningActionsCount < 0) {
	window.obj78134_onTap_runningActionsCount = 0;
} else if (window.obj78134_onTap_runningActionsCount == 0) {
	obj78134_onTap_actionGroup1();
}
}

















};
obj78134_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78134_onTap_activeActionGroupIndex = -1;
		$("#obj78134").trigger("obj78134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78134) {
				console.warn("de-queueing event obj78134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78134_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78142
(function(){
	window.obj78134_onTap_runningActionsCount = obj78134_onTap_runningActionsCount + 1;

	var selector = "#obj78142";
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
					window.obj78134_onTap_runningActionsCount = window.obj78134_onTap_runningActionsCount - 1;
if (window.obj78134_onTap_runningActionsCount < 0) {
	window.obj78134_onTap_runningActionsCount = 0;
} else if (window.obj78134_onTap_runningActionsCount == 0) {
	obj78134_onTap_actionGroup2();
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
				window.obj78134_onTap_runningActionsCount = window.obj78134_onTap_runningActionsCount - 1;
if (window.obj78134_onTap_runningActionsCount < 0) {
	window.obj78134_onTap_runningActionsCount = 0;
} else if (window.obj78134_onTap_runningActionsCount == 0) {
	obj78134_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78134_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78134_onTap_activeActionGroupIndex = -1;
		$("#obj78134").trigger("obj78134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78134) {
				console.warn("de-queueing event obj78134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78134_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78132 
move_78139();
function move_78139() {
	window.obj78134_onTap_runningActionsCount = obj78134_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78132");
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
			window.obj78134_onTap_runningActionsCount = window.obj78134_onTap_runningActionsCount - 1;
if (window.obj78134_onTap_runningActionsCount < 0) {
	window.obj78134_onTap_runningActionsCount = 0;
} else if (window.obj78134_onTap_runningActionsCount == 0) {
	obj78134_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78134_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78134_onTap_activeActionGroupIndex = -1;
		$("#obj78134").trigger("obj78134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78134) {
				console.warn("de-queueing event obj78134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78134_onTap_activeActionGroupIndex = 3;
	





















};
obj87889_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87889_onTap_activeActionGroupIndex = -1;
		$("#obj87889").trigger("obj87889_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87889) {
				console.warn("de-queueing event obj87889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87889_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87894 
stopAudio_87891();
function stopAudio_87891() {
	window.obj87889_onTap_runningActionsCount = obj87889_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87894")[0];
	myAudio.pause();
	window.obj87889_onTap_runningActionsCount = window.obj87889_onTap_runningActionsCount - 1;
if (window.obj87889_onTap_runningActionsCount < 0) {
	window.obj87889_onTap_runningActionsCount = 0;
} else if (window.obj87889_onTap_runningActionsCount == 0) {
	obj87889_onTap_actionGroup1();
}
}








};
obj87889_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87889_onTap_activeActionGroupIndex = -1;
		$("#obj87889").trigger("obj87889_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87889) {
				console.warn("de-queueing event obj87889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87889_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87889 
hide_87892();
function hide_87892() {
	var selector = "#obj87889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87889_onTap_runningActionsCount = obj87889_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87889_onTap_runningActionsCount = window.obj87889_onTap_runningActionsCount - 1;
if (window.obj87889_onTap_runningActionsCount < 0) {
	window.obj87889_onTap_runningActionsCount = 0;
} else if (window.obj87889_onTap_runningActionsCount == 0) {
	obj87889_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87892(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87889_onTap_runningActionsCount = window.obj87889_onTap_runningActionsCount - 1;
if (window.obj87889_onTap_runningActionsCount < 0) {
	window.obj87889_onTap_runningActionsCount = 0;
} else if (window.obj87889_onTap_runningActionsCount == 0) {
	obj87889_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87889_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87889_onTap_activeActionGroupIndex = -1;
		$("#obj87889").trigger("obj87889_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87889) {
				console.warn("de-queueing event obj87889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87889_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87884
(function(){
	window.obj87889_onTap_runningActionsCount = obj87889_onTap_runningActionsCount + 1;

	var selector = "#obj87884";
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
					window.obj87889_onTap_runningActionsCount = window.obj87889_onTap_runningActionsCount - 1;
if (window.obj87889_onTap_runningActionsCount < 0) {
	window.obj87889_onTap_runningActionsCount = 0;
} else if (window.obj87889_onTap_runningActionsCount == 0) {
	obj87889_onTap_actionGroup3();
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
				window.obj87889_onTap_runningActionsCount = window.obj87889_onTap_runningActionsCount - 1;
if (window.obj87889_onTap_runningActionsCount < 0) {
	window.obj87889_onTap_runningActionsCount = 0;
} else if (window.obj87889_onTap_runningActionsCount == 0) {
	obj87889_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87889_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87889_onTap_activeActionGroupIndex = -1;
		$("#obj87889").trigger("obj87889_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87889) {
				console.warn("de-queueing event obj87889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87889_onTap_activeActionGroupIndex = 3;
	





















};
obj87884_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87884_onTap_activeActionGroupIndex = -1;
		$("#obj87884").trigger("obj87884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87884) {
				console.warn("de-queueing event obj87884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87884_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87884 
hide_87886();
function hide_87886() {
	var selector = "#obj87884";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87884_onTap_runningActionsCount = obj87884_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87884_onTap_runningActionsCount = window.obj87884_onTap_runningActionsCount - 1;
if (window.obj87884_onTap_runningActionsCount < 0) {
	window.obj87884_onTap_runningActionsCount = 0;
} else if (window.obj87884_onTap_runningActionsCount == 0) {
	obj87884_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87886(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87884_onTap_runningActionsCount = window.obj87884_onTap_runningActionsCount - 1;
if (window.obj87884_onTap_runningActionsCount < 0) {
	window.obj87884_onTap_runningActionsCount = 0;
} else if (window.obj87884_onTap_runningActionsCount == 0) {
	obj87884_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87884_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87884_onTap_activeActionGroupIndex = -1;
		$("#obj87884").trigger("obj87884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87884) {
				console.warn("de-queueing event obj87884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87884_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87889
(function(){
	window.obj87884_onTap_runningActionsCount = obj87884_onTap_runningActionsCount + 1;

	var selector = "#obj87889";
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
					window.obj87884_onTap_runningActionsCount = window.obj87884_onTap_runningActionsCount - 1;
if (window.obj87884_onTap_runningActionsCount < 0) {
	window.obj87884_onTap_runningActionsCount = 0;
} else if (window.obj87884_onTap_runningActionsCount == 0) {
	obj87884_onTap_actionGroup2();
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
				window.obj87884_onTap_runningActionsCount = window.obj87884_onTap_runningActionsCount - 1;
if (window.obj87884_onTap_runningActionsCount < 0) {
	window.obj87884_onTap_runningActionsCount = 0;
} else if (window.obj87884_onTap_runningActionsCount == 0) {
	obj87884_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87884_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87884_onTap_activeActionGroupIndex = -1;
		$("#obj87884").trigger("obj87884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87884) {
				console.warn("de-queueing event obj87884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87884_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87894 
playAudio_87888();
function playAudio_87888() {
	window.obj87884_onTap_runningActionsCount = obj87884_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87894")[0];
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
		    window.obj87884_onTap_runningActionsCount = window.obj87884_onTap_runningActionsCount - 1;
if (window.obj87884_onTap_runningActionsCount < 0) {
	window.obj87884_onTap_runningActionsCount = 0;
} else if (window.obj87884_onTap_runningActionsCount == 0) {
	obj87884_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87884_onTap_runningActionsCount = window.obj87884_onTap_runningActionsCount - 1;
if (window.obj87884_onTap_runningActionsCount < 0) {
	window.obj87884_onTap_runningActionsCount = 0;
} else if (window.obj87884_onTap_runningActionsCount == 0) {
	obj87884_onTap_actionGroup3();
}
	}
}









};
obj87884_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87884_onTap_activeActionGroupIndex = -1;
		$("#obj87884").trigger("obj87884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87884) {
				console.warn("de-queueing event obj87884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87884_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj78171: Event Touch Down
 *
 */
$("#obj78171").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78171_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78171_onTap is still running");
	return;
}
var obj78171_onTap_runningActionsCount = 0;
var obj78171_onTap_loopCount = 0;
obj78171_onTap_actionGroup0();
});










/*
 *
 *   obj78168: Event Touch Down
 *
 */
$("#obj78168").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78168_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78168_onTap is still running");
	return;
}
var obj78168_onTap_runningActionsCount = 0;
var obj78168_onTap_loopCount = 0;
obj78168_onTap_actionGroup0();
});








































/*
 *
 *   obj78142: Event Touch Down
 *
 */
$("#obj78142").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78142_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78142_onTap is still running");
	return;
}
var obj78142_onTap_runningActionsCount = 0;
var obj78142_onTap_loopCount = 0;
obj78142_onTap_actionGroup0();
});










/*
 *
 *   obj78134: Event Touch Down
 *
 */
$("#obj78134").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78134_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78134_onTap is still running");
	return;
}
var obj78134_onTap_runningActionsCount = 0;
var obj78134_onTap_loopCount = 0;
obj78134_onTap_actionGroup0();
});










/*
 *
 *   obj87889: Event Touch Down
 *
 */
$("#obj87889").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87889_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87889_onTap is still running");
	return;
}
var obj87889_onTap_runningActionsCount = 0;
var obj87889_onTap_loopCount = 0;
obj87889_onTap_actionGroup0();
});










/*
 *
 *   obj87884: Event Touch Down
 *
 */
$("#obj87884").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87884_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87884_onTap is still running");
	return;
}
var obj87884_onTap_runningActionsCount = 0;
var obj87884_onTap_loopCount = 0;
obj87884_onTap_actionGroup0();
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
	
$("#obj78174").trigger('SCEventShow');
$("#obj78171").trigger('SCEventShow');
$("#obj78168").trigger('SCEventShow');
$("#obj78166").trigger('SCEventShow');
$("#obj78164").trigger('SCEventShow');
$("#obj78160").trigger('SCEventShow');
$("#obj78142").trigger('SCEventShow');
$("#obj78134").trigger('SCEventShow');
$("#obj87889").trigger('SCEventShow');
$("#obj87884").trigger('SCEventShow');
$("#obj87894").trigger('SCEventShow');
$("#obj90592").trigger('SCEventShow');
$("#obj94799").trigger('SCEventShow');
$("#obj78132").trigger('SCEventShow');
	
});