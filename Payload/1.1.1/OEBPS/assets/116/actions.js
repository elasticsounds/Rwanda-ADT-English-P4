pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 33214;
pubcoder.page.title = pubcoder.page.title || "116";
pubcoder.page.number = pubcoder.page.number || 116;
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
var obj85718_onTap_activeActionGroupIndex = -1;
var obj85718_onTap_runningActionsCount = 0;
var obj85718_onTap_loopCount = 0;
var obj85715_onTap_activeActionGroupIndex = -1;
var obj85715_onTap_runningActionsCount = 0;
var obj85715_onTap_loopCount = 0;
var obj85687_onTap_activeActionGroupIndex = -1;
var obj85687_onTap_runningActionsCount = 0;
var obj85687_onTap_loopCount = 0;
var obj85679_onTap_activeActionGroupIndex = -1;
var obj85679_onTap_runningActionsCount = 0;
var obj85679_onTap_loopCount = 0;
var obj88261_onTap_activeActionGroupIndex = -1;
var obj88261_onTap_runningActionsCount = 0;
var obj88261_onTap_loopCount = 0;
var obj88256_onTap_activeActionGroupIndex = -1;
var obj88256_onTap_runningActionsCount = 0;
var obj88256_onTap_loopCount = 0;
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
		
obj85718_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85718_onTap_activeActionGroupIndex = -1;
		$("#obj85718").trigger("obj85718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85718) {
				console.warn("de-queueing event obj85718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85718_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_85720();
function goToPage_85720() {
	window.obj85718_onTap_runningActionsCount = obj85718_onTap_runningActionsCount + 1;
	$("#anchor696")[0].click();
	window.obj85718_onTap_runningActionsCount = window.obj85718_onTap_runningActionsCount - 1;
if (window.obj85718_onTap_runningActionsCount < 0) {
	window.obj85718_onTap_runningActionsCount = 0;
} else if (window.obj85718_onTap_runningActionsCount == 0) {
	obj85718_onTap_actionGroup1();
}
}





















};
obj85718_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85718_onTap_activeActionGroupIndex = -1;
		$("#obj85718").trigger("obj85718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85718) {
				console.warn("de-queueing event obj85718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85718_onTap_activeActionGroupIndex = 1;
	





















};
obj85715_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85715_onTap_activeActionGroupIndex = -1;
		$("#obj85715").trigger("obj85715_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85715) {
				console.warn("de-queueing event obj85715." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85715").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85715_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_85717();
function goToPage_85717() {
	window.obj85715_onTap_runningActionsCount = obj85715_onTap_runningActionsCount + 1;
	$("#anchor697")[0].click();
	window.obj85715_onTap_runningActionsCount = window.obj85715_onTap_runningActionsCount - 1;
if (window.obj85715_onTap_runningActionsCount < 0) {
	window.obj85715_onTap_runningActionsCount = 0;
} else if (window.obj85715_onTap_runningActionsCount == 0) {
	obj85715_onTap_actionGroup1();
}
}





















};
obj85715_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85715_onTap_activeActionGroupIndex = -1;
		$("#obj85715").trigger("obj85715_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85715) {
				console.warn("de-queueing event obj85715." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85715").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85715_onTap_activeActionGroupIndex = 1;
	





















};
obj85687_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85687_onTap_activeActionGroupIndex = -1;
		$("#obj85687").trigger("obj85687_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85687) {
				console.warn("de-queueing event obj85687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85687_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj85687 
hide_85690();
function hide_85690() {
	var selector = "#obj85687";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85687_onTap_runningActionsCount = obj85687_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85687_onTap_runningActionsCount = window.obj85687_onTap_runningActionsCount - 1;
if (window.obj85687_onTap_runningActionsCount < 0) {
	window.obj85687_onTap_runningActionsCount = 0;
} else if (window.obj85687_onTap_runningActionsCount == 0) {
	obj85687_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85690(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85687_onTap_runningActionsCount = window.obj85687_onTap_runningActionsCount - 1;
if (window.obj85687_onTap_runningActionsCount < 0) {
	window.obj85687_onTap_runningActionsCount = 0;
} else if (window.obj85687_onTap_runningActionsCount == 0) {
	obj85687_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj85677 
stopMovie_85689();
function stopMovie_85689() {
	window.obj85687_onTap_runningActionsCount = obj85687_onTap_runningActionsCount + 1;
	var myVideo = $("#obj85677")[0];
	myVideo.pause();
	window.obj85687_onTap_runningActionsCount = window.obj85687_onTap_runningActionsCount - 1;
if (window.obj85687_onTap_runningActionsCount < 0) {
	window.obj85687_onTap_runningActionsCount = 0;
} else if (window.obj85687_onTap_runningActionsCount == 0) {
	obj85687_onTap_actionGroup1();
}
}
















};
obj85687_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85687_onTap_activeActionGroupIndex = -1;
		$("#obj85687").trigger("obj85687_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85687) {
				console.warn("de-queueing event obj85687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85687_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj85679
(function(){
	window.obj85687_onTap_runningActionsCount = obj85687_onTap_runningActionsCount + 1;

	var selector = "#obj85679";
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
					window.obj85687_onTap_runningActionsCount = window.obj85687_onTap_runningActionsCount - 1;
if (window.obj85687_onTap_runningActionsCount < 0) {
	window.obj85687_onTap_runningActionsCount = 0;
} else if (window.obj85687_onTap_runningActionsCount == 0) {
	obj85687_onTap_actionGroup2();
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
				window.obj85687_onTap_runningActionsCount = window.obj85687_onTap_runningActionsCount - 1;
if (window.obj85687_onTap_runningActionsCount < 0) {
	window.obj85687_onTap_runningActionsCount = 0;
} else if (window.obj85687_onTap_runningActionsCount == 0) {
	obj85687_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85687_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85687_onTap_activeActionGroupIndex = -1;
		$("#obj85687").trigger("obj85687_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85687) {
				console.warn("de-queueing event obj85687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85687_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj85677 
move_85692();
function move_85692() {
	window.obj85687_onTap_runningActionsCount = obj85687_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj85677");
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
			window.obj85687_onTap_runningActionsCount = window.obj85687_onTap_runningActionsCount - 1;
if (window.obj85687_onTap_runningActionsCount < 0) {
	window.obj85687_onTap_runningActionsCount = 0;
} else if (window.obj85687_onTap_runningActionsCount == 0) {
	obj85687_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj85687_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85687_onTap_activeActionGroupIndex = -1;
		$("#obj85687").trigger("obj85687_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85687) {
				console.warn("de-queueing event obj85687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85687_onTap_activeActionGroupIndex = 3;
	





















};
obj85679_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85679_onTap_activeActionGroupIndex = -1;
		$("#obj85679").trigger("obj85679_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85679) {
				console.warn("de-queueing event obj85679." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85679").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85679_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj85679 
hide_85682();
function hide_85682() {
	var selector = "#obj85679";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85679_onTap_runningActionsCount = obj85679_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85679_onTap_runningActionsCount = window.obj85679_onTap_runningActionsCount - 1;
if (window.obj85679_onTap_runningActionsCount < 0) {
	window.obj85679_onTap_runningActionsCount = 0;
} else if (window.obj85679_onTap_runningActionsCount == 0) {
	obj85679_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85682(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85679_onTap_runningActionsCount = window.obj85679_onTap_runningActionsCount - 1;
if (window.obj85679_onTap_runningActionsCount < 0) {
	window.obj85679_onTap_runningActionsCount = 0;
} else if (window.obj85679_onTap_runningActionsCount == 0) {
	obj85679_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj85677 
playPauseMovie_85681();
function playPauseMovie_85681() {
	window.obj85679_onTap_runningActionsCount = obj85679_onTap_runningActionsCount + 1;
	var myVideo = $("#obj85677")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj85679_onTap_runningActionsCount = window.obj85679_onTap_runningActionsCount - 1;
if (window.obj85679_onTap_runningActionsCount < 0) {
	window.obj85679_onTap_runningActionsCount = 0;
} else if (window.obj85679_onTap_runningActionsCount == 0) {
	obj85679_onTap_actionGroup1();
}
}

















};
obj85679_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85679_onTap_activeActionGroupIndex = -1;
		$("#obj85679").trigger("obj85679_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85679) {
				console.warn("de-queueing event obj85679." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85679").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85679_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj85687
(function(){
	window.obj85679_onTap_runningActionsCount = obj85679_onTap_runningActionsCount + 1;

	var selector = "#obj85687";
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
					window.obj85679_onTap_runningActionsCount = window.obj85679_onTap_runningActionsCount - 1;
if (window.obj85679_onTap_runningActionsCount < 0) {
	window.obj85679_onTap_runningActionsCount = 0;
} else if (window.obj85679_onTap_runningActionsCount == 0) {
	obj85679_onTap_actionGroup2();
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
				window.obj85679_onTap_runningActionsCount = window.obj85679_onTap_runningActionsCount - 1;
if (window.obj85679_onTap_runningActionsCount < 0) {
	window.obj85679_onTap_runningActionsCount = 0;
} else if (window.obj85679_onTap_runningActionsCount == 0) {
	obj85679_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85679_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85679_onTap_activeActionGroupIndex = -1;
		$("#obj85679").trigger("obj85679_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85679) {
				console.warn("de-queueing event obj85679." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85679").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85679_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj85677 
move_85684();
function move_85684() {
	window.obj85679_onTap_runningActionsCount = obj85679_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj85677");
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
			window.obj85679_onTap_runningActionsCount = window.obj85679_onTap_runningActionsCount - 1;
if (window.obj85679_onTap_runningActionsCount < 0) {
	window.obj85679_onTap_runningActionsCount = 0;
} else if (window.obj85679_onTap_runningActionsCount == 0) {
	obj85679_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj85679_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85679_onTap_activeActionGroupIndex = -1;
		$("#obj85679").trigger("obj85679_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85679) {
				console.warn("de-queueing event obj85679." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85679").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85679_onTap_activeActionGroupIndex = 3;
	





















};
obj88261_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88261_onTap_activeActionGroupIndex = -1;
		$("#obj88261").trigger("obj88261_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88261) {
				console.warn("de-queueing event obj88261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88261_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88266 
stopAudio_88263();
function stopAudio_88263() {
	window.obj88261_onTap_runningActionsCount = obj88261_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88266")[0];
	myAudio.pause();
	window.obj88261_onTap_runningActionsCount = window.obj88261_onTap_runningActionsCount - 1;
if (window.obj88261_onTap_runningActionsCount < 0) {
	window.obj88261_onTap_runningActionsCount = 0;
} else if (window.obj88261_onTap_runningActionsCount == 0) {
	obj88261_onTap_actionGroup1();
}
}








};
obj88261_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88261_onTap_activeActionGroupIndex = -1;
		$("#obj88261").trigger("obj88261_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88261) {
				console.warn("de-queueing event obj88261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88261_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88261 
hide_88264();
function hide_88264() {
	var selector = "#obj88261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88261_onTap_runningActionsCount = obj88261_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88261_onTap_runningActionsCount = window.obj88261_onTap_runningActionsCount - 1;
if (window.obj88261_onTap_runningActionsCount < 0) {
	window.obj88261_onTap_runningActionsCount = 0;
} else if (window.obj88261_onTap_runningActionsCount == 0) {
	obj88261_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88264(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88261_onTap_runningActionsCount = window.obj88261_onTap_runningActionsCount - 1;
if (window.obj88261_onTap_runningActionsCount < 0) {
	window.obj88261_onTap_runningActionsCount = 0;
} else if (window.obj88261_onTap_runningActionsCount == 0) {
	obj88261_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88261_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88261_onTap_activeActionGroupIndex = -1;
		$("#obj88261").trigger("obj88261_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88261) {
				console.warn("de-queueing event obj88261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88261_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88256
(function(){
	window.obj88261_onTap_runningActionsCount = obj88261_onTap_runningActionsCount + 1;

	var selector = "#obj88256";
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
					window.obj88261_onTap_runningActionsCount = window.obj88261_onTap_runningActionsCount - 1;
if (window.obj88261_onTap_runningActionsCount < 0) {
	window.obj88261_onTap_runningActionsCount = 0;
} else if (window.obj88261_onTap_runningActionsCount == 0) {
	obj88261_onTap_actionGroup3();
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
				window.obj88261_onTap_runningActionsCount = window.obj88261_onTap_runningActionsCount - 1;
if (window.obj88261_onTap_runningActionsCount < 0) {
	window.obj88261_onTap_runningActionsCount = 0;
} else if (window.obj88261_onTap_runningActionsCount == 0) {
	obj88261_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88261_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88261_onTap_activeActionGroupIndex = -1;
		$("#obj88261").trigger("obj88261_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88261) {
				console.warn("de-queueing event obj88261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88261_onTap_activeActionGroupIndex = 3;
	





















};
obj88256_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88256_onTap_activeActionGroupIndex = -1;
		$("#obj88256").trigger("obj88256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88256) {
				console.warn("de-queueing event obj88256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88256_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88256 
hide_88258();
function hide_88258() {
	var selector = "#obj88256";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88256_onTap_runningActionsCount = obj88256_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88256_onTap_runningActionsCount = window.obj88256_onTap_runningActionsCount - 1;
if (window.obj88256_onTap_runningActionsCount < 0) {
	window.obj88256_onTap_runningActionsCount = 0;
} else if (window.obj88256_onTap_runningActionsCount == 0) {
	obj88256_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88258(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88256_onTap_runningActionsCount = window.obj88256_onTap_runningActionsCount - 1;
if (window.obj88256_onTap_runningActionsCount < 0) {
	window.obj88256_onTap_runningActionsCount = 0;
} else if (window.obj88256_onTap_runningActionsCount == 0) {
	obj88256_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88256_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88256_onTap_activeActionGroupIndex = -1;
		$("#obj88256").trigger("obj88256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88256) {
				console.warn("de-queueing event obj88256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88256_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88261
(function(){
	window.obj88256_onTap_runningActionsCount = obj88256_onTap_runningActionsCount + 1;

	var selector = "#obj88261";
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
					window.obj88256_onTap_runningActionsCount = window.obj88256_onTap_runningActionsCount - 1;
if (window.obj88256_onTap_runningActionsCount < 0) {
	window.obj88256_onTap_runningActionsCount = 0;
} else if (window.obj88256_onTap_runningActionsCount == 0) {
	obj88256_onTap_actionGroup2();
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
				window.obj88256_onTap_runningActionsCount = window.obj88256_onTap_runningActionsCount - 1;
if (window.obj88256_onTap_runningActionsCount < 0) {
	window.obj88256_onTap_runningActionsCount = 0;
} else if (window.obj88256_onTap_runningActionsCount == 0) {
	obj88256_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88256_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88256_onTap_activeActionGroupIndex = -1;
		$("#obj88256").trigger("obj88256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88256) {
				console.warn("de-queueing event obj88256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88256_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88266 
playAudio_88260();
function playAudio_88260() {
	window.obj88256_onTap_runningActionsCount = obj88256_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88266")[0];
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
		    window.obj88256_onTap_runningActionsCount = window.obj88256_onTap_runningActionsCount - 1;
if (window.obj88256_onTap_runningActionsCount < 0) {
	window.obj88256_onTap_runningActionsCount = 0;
} else if (window.obj88256_onTap_runningActionsCount == 0) {
	obj88256_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88256_onTap_runningActionsCount = window.obj88256_onTap_runningActionsCount - 1;
if (window.obj88256_onTap_runningActionsCount < 0) {
	window.obj88256_onTap_runningActionsCount = 0;
} else if (window.obj88256_onTap_runningActionsCount == 0) {
	obj88256_onTap_actionGroup3();
}
	}
}









};
obj88256_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88256_onTap_activeActionGroupIndex = -1;
		$("#obj88256").trigger("obj88256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88256) {
				console.warn("de-queueing event obj88256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88256_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj85718: Event Touch Down
 *
 */
$("#obj85718").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85718_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85718_onTap is still running");
	return;
}
var obj85718_onTap_runningActionsCount = 0;
var obj85718_onTap_loopCount = 0;
obj85718_onTap_actionGroup0();
});










/*
 *
 *   obj85715: Event Touch Down
 *
 */
$("#obj85715").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85715_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85715_onTap is still running");
	return;
}
var obj85715_onTap_runningActionsCount = 0;
var obj85715_onTap_loopCount = 0;
obj85715_onTap_actionGroup0();
});




























































/*
 *
 *   obj85687: Event Touch Down
 *
 */
$("#obj85687").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85687_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85687_onTap is still running");
	return;
}
var obj85687_onTap_runningActionsCount = 0;
var obj85687_onTap_loopCount = 0;
obj85687_onTap_actionGroup0();
});










/*
 *
 *   obj85679: Event Touch Down
 *
 */
$("#obj85679").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85679_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85679_onTap is still running");
	return;
}
var obj85679_onTap_runningActionsCount = 0;
var obj85679_onTap_loopCount = 0;
obj85679_onTap_actionGroup0();
});










/*
 *
 *   obj88261: Event Touch Down
 *
 */
$("#obj88261").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88261_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88261_onTap is still running");
	return;
}
var obj88261_onTap_runningActionsCount = 0;
var obj88261_onTap_loopCount = 0;
obj88261_onTap_actionGroup0();
});










/*
 *
 *   obj88256: Event Touch Down
 *
 */
$("#obj88256").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88256_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88256_onTap is still running");
	return;
}
var obj88256_onTap_runningActionsCount = 0;
var obj88256_onTap_loopCount = 0;
obj88256_onTap_actionGroup0();
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
	
$("#obj85721").trigger('SCEventShow');
$("#obj85718").trigger('SCEventShow');
$("#obj85715").trigger('SCEventShow');
$("#obj85713").trigger('SCEventShow');
$("#obj85711").trigger('SCEventShow');
$("#obj85709").trigger('SCEventShow');
$("#obj85707").trigger('SCEventShow');
$("#obj85705").trigger('SCEventShow');
$("#obj85687").trigger('SCEventShow');
$("#obj85679").trigger('SCEventShow');
$("#obj88261").trigger('SCEventShow');
$("#obj88256").trigger('SCEventShow');
$("#obj88266").trigger('SCEventShow');
$("#obj94861").trigger('SCEventShow');
$("#obj85677").trigger('SCEventShow');
	
});