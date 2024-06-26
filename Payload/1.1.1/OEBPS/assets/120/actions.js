pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 34146;
pubcoder.page.title = pubcoder.page.title || "120";
pubcoder.page.number = pubcoder.page.number || 120;
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
var obj86668_onTap_activeActionGroupIndex = -1;
var obj86668_onTap_runningActionsCount = 0;
var obj86668_onTap_loopCount = 0;
var obj86665_onTap_activeActionGroupIndex = -1;
var obj86665_onTap_runningActionsCount = 0;
var obj86665_onTap_loopCount = 0;
var obj86635_onTap_activeActionGroupIndex = -1;
var obj86635_onTap_runningActionsCount = 0;
var obj86635_onTap_loopCount = 0;
var obj86627_onTap_activeActionGroupIndex = -1;
var obj86627_onTap_runningActionsCount = 0;
var obj86627_onTap_loopCount = 0;
var obj88309_onTap_activeActionGroupIndex = -1;
var obj88309_onTap_runningActionsCount = 0;
var obj88309_onTap_loopCount = 0;
var obj88304_onTap_activeActionGroupIndex = -1;
var obj88304_onTap_runningActionsCount = 0;
var obj88304_onTap_loopCount = 0;
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
		
obj86668_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86668_onTap_activeActionGroupIndex = -1;
		$("#obj86668").trigger("obj86668_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86668) {
				console.warn("de-queueing event obj86668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86668_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86670();
function goToPage_86670() {
	window.obj86668_onTap_runningActionsCount = obj86668_onTap_runningActionsCount + 1;
	$("#anchor721")[0].click();
	window.obj86668_onTap_runningActionsCount = window.obj86668_onTap_runningActionsCount - 1;
if (window.obj86668_onTap_runningActionsCount < 0) {
	window.obj86668_onTap_runningActionsCount = 0;
} else if (window.obj86668_onTap_runningActionsCount == 0) {
	obj86668_onTap_actionGroup1();
}
}





















};
obj86668_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86668_onTap_activeActionGroupIndex = -1;
		$("#obj86668").trigger("obj86668_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86668) {
				console.warn("de-queueing event obj86668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86668_onTap_activeActionGroupIndex = 1;
	





















};
obj86665_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86665_onTap_activeActionGroupIndex = -1;
		$("#obj86665").trigger("obj86665_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86665) {
				console.warn("de-queueing event obj86665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86665_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86667();
function goToPage_86667() {
	window.obj86665_onTap_runningActionsCount = obj86665_onTap_runningActionsCount + 1;
	$("#anchor722")[0].click();
	window.obj86665_onTap_runningActionsCount = window.obj86665_onTap_runningActionsCount - 1;
if (window.obj86665_onTap_runningActionsCount < 0) {
	window.obj86665_onTap_runningActionsCount = 0;
} else if (window.obj86665_onTap_runningActionsCount == 0) {
	obj86665_onTap_actionGroup1();
}
}





















};
obj86665_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86665_onTap_activeActionGroupIndex = -1;
		$("#obj86665").trigger("obj86665_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86665) {
				console.warn("de-queueing event obj86665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86665_onTap_activeActionGroupIndex = 1;
	





















};
obj86635_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86635_onTap_activeActionGroupIndex = -1;
		$("#obj86635").trigger("obj86635_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86635) {
				console.warn("de-queueing event obj86635." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86635").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86635_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86635 
hide_86638();
function hide_86638() {
	var selector = "#obj86635";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86635_onTap_runningActionsCount = obj86635_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86635_onTap_runningActionsCount = window.obj86635_onTap_runningActionsCount - 1;
if (window.obj86635_onTap_runningActionsCount < 0) {
	window.obj86635_onTap_runningActionsCount = 0;
} else if (window.obj86635_onTap_runningActionsCount == 0) {
	obj86635_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86638(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86635_onTap_runningActionsCount = window.obj86635_onTap_runningActionsCount - 1;
if (window.obj86635_onTap_runningActionsCount < 0) {
	window.obj86635_onTap_runningActionsCount = 0;
} else if (window.obj86635_onTap_runningActionsCount == 0) {
	obj86635_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj86625 
stopMovie_86637();
function stopMovie_86637() {
	window.obj86635_onTap_runningActionsCount = obj86635_onTap_runningActionsCount + 1;
	var myVideo = $("#obj86625")[0];
	myVideo.pause();
	window.obj86635_onTap_runningActionsCount = window.obj86635_onTap_runningActionsCount - 1;
if (window.obj86635_onTap_runningActionsCount < 0) {
	window.obj86635_onTap_runningActionsCount = 0;
} else if (window.obj86635_onTap_runningActionsCount == 0) {
	obj86635_onTap_actionGroup1();
}
}
















};
obj86635_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86635_onTap_activeActionGroupIndex = -1;
		$("#obj86635").trigger("obj86635_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86635) {
				console.warn("de-queueing event obj86635." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86635").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86635_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86627
(function(){
	window.obj86635_onTap_runningActionsCount = obj86635_onTap_runningActionsCount + 1;

	var selector = "#obj86627";
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
					window.obj86635_onTap_runningActionsCount = window.obj86635_onTap_runningActionsCount - 1;
if (window.obj86635_onTap_runningActionsCount < 0) {
	window.obj86635_onTap_runningActionsCount = 0;
} else if (window.obj86635_onTap_runningActionsCount == 0) {
	obj86635_onTap_actionGroup2();
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
				window.obj86635_onTap_runningActionsCount = window.obj86635_onTap_runningActionsCount - 1;
if (window.obj86635_onTap_runningActionsCount < 0) {
	window.obj86635_onTap_runningActionsCount = 0;
} else if (window.obj86635_onTap_runningActionsCount == 0) {
	obj86635_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86635_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86635_onTap_activeActionGroupIndex = -1;
		$("#obj86635").trigger("obj86635_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86635) {
				console.warn("de-queueing event obj86635." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86635").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86635_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj86625 
move_86640();
function move_86640() {
	window.obj86635_onTap_runningActionsCount = obj86635_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj86625");
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
			window.obj86635_onTap_runningActionsCount = window.obj86635_onTap_runningActionsCount - 1;
if (window.obj86635_onTap_runningActionsCount < 0) {
	window.obj86635_onTap_runningActionsCount = 0;
} else if (window.obj86635_onTap_runningActionsCount == 0) {
	obj86635_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj86635_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86635_onTap_activeActionGroupIndex = -1;
		$("#obj86635").trigger("obj86635_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86635) {
				console.warn("de-queueing event obj86635." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86635").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86635_onTap_activeActionGroupIndex = 3;
	





















};
obj86627_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86627_onTap_activeActionGroupIndex = -1;
		$("#obj86627").trigger("obj86627_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86627) {
				console.warn("de-queueing event obj86627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86627_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86627 
hide_86630();
function hide_86630() {
	var selector = "#obj86627";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86627_onTap_runningActionsCount = obj86627_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86627_onTap_runningActionsCount = window.obj86627_onTap_runningActionsCount - 1;
if (window.obj86627_onTap_runningActionsCount < 0) {
	window.obj86627_onTap_runningActionsCount = 0;
} else if (window.obj86627_onTap_runningActionsCount == 0) {
	obj86627_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86630(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86627_onTap_runningActionsCount = window.obj86627_onTap_runningActionsCount - 1;
if (window.obj86627_onTap_runningActionsCount < 0) {
	window.obj86627_onTap_runningActionsCount = 0;
} else if (window.obj86627_onTap_runningActionsCount == 0) {
	obj86627_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj86625 
playPauseMovie_86629();
function playPauseMovie_86629() {
	window.obj86627_onTap_runningActionsCount = obj86627_onTap_runningActionsCount + 1;
	var myVideo = $("#obj86625")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj86627_onTap_runningActionsCount = window.obj86627_onTap_runningActionsCount - 1;
if (window.obj86627_onTap_runningActionsCount < 0) {
	window.obj86627_onTap_runningActionsCount = 0;
} else if (window.obj86627_onTap_runningActionsCount == 0) {
	obj86627_onTap_actionGroup1();
}
}

















};
obj86627_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86627_onTap_activeActionGroupIndex = -1;
		$("#obj86627").trigger("obj86627_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86627) {
				console.warn("de-queueing event obj86627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86627_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86635
(function(){
	window.obj86627_onTap_runningActionsCount = obj86627_onTap_runningActionsCount + 1;

	var selector = "#obj86635";
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
					window.obj86627_onTap_runningActionsCount = window.obj86627_onTap_runningActionsCount - 1;
if (window.obj86627_onTap_runningActionsCount < 0) {
	window.obj86627_onTap_runningActionsCount = 0;
} else if (window.obj86627_onTap_runningActionsCount == 0) {
	obj86627_onTap_actionGroup2();
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
				window.obj86627_onTap_runningActionsCount = window.obj86627_onTap_runningActionsCount - 1;
if (window.obj86627_onTap_runningActionsCount < 0) {
	window.obj86627_onTap_runningActionsCount = 0;
} else if (window.obj86627_onTap_runningActionsCount == 0) {
	obj86627_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86627_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86627_onTap_activeActionGroupIndex = -1;
		$("#obj86627").trigger("obj86627_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86627) {
				console.warn("de-queueing event obj86627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86627_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj86625 
move_86632();
function move_86632() {
	window.obj86627_onTap_runningActionsCount = obj86627_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj86625");
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
			window.obj86627_onTap_runningActionsCount = window.obj86627_onTap_runningActionsCount - 1;
if (window.obj86627_onTap_runningActionsCount < 0) {
	window.obj86627_onTap_runningActionsCount = 0;
} else if (window.obj86627_onTap_runningActionsCount == 0) {
	obj86627_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj86627_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86627_onTap_activeActionGroupIndex = -1;
		$("#obj86627").trigger("obj86627_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86627) {
				console.warn("de-queueing event obj86627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86627_onTap_activeActionGroupIndex = 3;
	





















};
obj88309_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88309_onTap_activeActionGroupIndex = -1;
		$("#obj88309").trigger("obj88309_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88309) {
				console.warn("de-queueing event obj88309." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88309").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88309_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88314 
stopAudio_88311();
function stopAudio_88311() {
	window.obj88309_onTap_runningActionsCount = obj88309_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88314")[0];
	myAudio.pause();
	window.obj88309_onTap_runningActionsCount = window.obj88309_onTap_runningActionsCount - 1;
if (window.obj88309_onTap_runningActionsCount < 0) {
	window.obj88309_onTap_runningActionsCount = 0;
} else if (window.obj88309_onTap_runningActionsCount == 0) {
	obj88309_onTap_actionGroup1();
}
}








};
obj88309_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88309_onTap_activeActionGroupIndex = -1;
		$("#obj88309").trigger("obj88309_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88309) {
				console.warn("de-queueing event obj88309." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88309").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88309_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88309 
hide_88312();
function hide_88312() {
	var selector = "#obj88309";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88309_onTap_runningActionsCount = obj88309_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88309_onTap_runningActionsCount = window.obj88309_onTap_runningActionsCount - 1;
if (window.obj88309_onTap_runningActionsCount < 0) {
	window.obj88309_onTap_runningActionsCount = 0;
} else if (window.obj88309_onTap_runningActionsCount == 0) {
	obj88309_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88312(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88309_onTap_runningActionsCount = window.obj88309_onTap_runningActionsCount - 1;
if (window.obj88309_onTap_runningActionsCount < 0) {
	window.obj88309_onTap_runningActionsCount = 0;
} else if (window.obj88309_onTap_runningActionsCount == 0) {
	obj88309_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88309_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88309_onTap_activeActionGroupIndex = -1;
		$("#obj88309").trigger("obj88309_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88309) {
				console.warn("de-queueing event obj88309." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88309").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88309_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88304
(function(){
	window.obj88309_onTap_runningActionsCount = obj88309_onTap_runningActionsCount + 1;

	var selector = "#obj88304";
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
					window.obj88309_onTap_runningActionsCount = window.obj88309_onTap_runningActionsCount - 1;
if (window.obj88309_onTap_runningActionsCount < 0) {
	window.obj88309_onTap_runningActionsCount = 0;
} else if (window.obj88309_onTap_runningActionsCount == 0) {
	obj88309_onTap_actionGroup3();
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
				window.obj88309_onTap_runningActionsCount = window.obj88309_onTap_runningActionsCount - 1;
if (window.obj88309_onTap_runningActionsCount < 0) {
	window.obj88309_onTap_runningActionsCount = 0;
} else if (window.obj88309_onTap_runningActionsCount == 0) {
	obj88309_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88309_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88309_onTap_activeActionGroupIndex = -1;
		$("#obj88309").trigger("obj88309_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88309) {
				console.warn("de-queueing event obj88309." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88309").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88309_onTap_activeActionGroupIndex = 3;
	





















};
obj88304_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88304_onTap_activeActionGroupIndex = -1;
		$("#obj88304").trigger("obj88304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88304) {
				console.warn("de-queueing event obj88304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88304_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88304 
hide_88306();
function hide_88306() {
	var selector = "#obj88304";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88304_onTap_runningActionsCount = obj88304_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88304_onTap_runningActionsCount = window.obj88304_onTap_runningActionsCount - 1;
if (window.obj88304_onTap_runningActionsCount < 0) {
	window.obj88304_onTap_runningActionsCount = 0;
} else if (window.obj88304_onTap_runningActionsCount == 0) {
	obj88304_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88306(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88304_onTap_runningActionsCount = window.obj88304_onTap_runningActionsCount - 1;
if (window.obj88304_onTap_runningActionsCount < 0) {
	window.obj88304_onTap_runningActionsCount = 0;
} else if (window.obj88304_onTap_runningActionsCount == 0) {
	obj88304_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88304_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88304_onTap_activeActionGroupIndex = -1;
		$("#obj88304").trigger("obj88304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88304) {
				console.warn("de-queueing event obj88304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88304_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88309
(function(){
	window.obj88304_onTap_runningActionsCount = obj88304_onTap_runningActionsCount + 1;

	var selector = "#obj88309";
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
					window.obj88304_onTap_runningActionsCount = window.obj88304_onTap_runningActionsCount - 1;
if (window.obj88304_onTap_runningActionsCount < 0) {
	window.obj88304_onTap_runningActionsCount = 0;
} else if (window.obj88304_onTap_runningActionsCount == 0) {
	obj88304_onTap_actionGroup2();
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
				window.obj88304_onTap_runningActionsCount = window.obj88304_onTap_runningActionsCount - 1;
if (window.obj88304_onTap_runningActionsCount < 0) {
	window.obj88304_onTap_runningActionsCount = 0;
} else if (window.obj88304_onTap_runningActionsCount == 0) {
	obj88304_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88304_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88304_onTap_activeActionGroupIndex = -1;
		$("#obj88304").trigger("obj88304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88304) {
				console.warn("de-queueing event obj88304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88304_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88314 
playAudio_88308();
function playAudio_88308() {
	window.obj88304_onTap_runningActionsCount = obj88304_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88314")[0];
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
		    window.obj88304_onTap_runningActionsCount = window.obj88304_onTap_runningActionsCount - 1;
if (window.obj88304_onTap_runningActionsCount < 0) {
	window.obj88304_onTap_runningActionsCount = 0;
} else if (window.obj88304_onTap_runningActionsCount == 0) {
	obj88304_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88304_onTap_runningActionsCount = window.obj88304_onTap_runningActionsCount - 1;
if (window.obj88304_onTap_runningActionsCount < 0) {
	window.obj88304_onTap_runningActionsCount = 0;
} else if (window.obj88304_onTap_runningActionsCount == 0) {
	obj88304_onTap_actionGroup3();
}
	}
}









};
obj88304_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88304_onTap_activeActionGroupIndex = -1;
		$("#obj88304").trigger("obj88304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88304) {
				console.warn("de-queueing event obj88304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88304_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj86668: Event Touch Down
 *
 */
$("#obj86668").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86668_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86668_onTap is still running");
	return;
}
var obj86668_onTap_runningActionsCount = 0;
var obj86668_onTap_loopCount = 0;
obj86668_onTap_actionGroup0();
});










/*
 *
 *   obj86665: Event Touch Down
 *
 */
$("#obj86665").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86665_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86665_onTap is still running");
	return;
}
var obj86665_onTap_runningActionsCount = 0;
var obj86665_onTap_loopCount = 0;
obj86665_onTap_actionGroup0();
});






































































/*
 *
 *   obj86635: Event Touch Down
 *
 */
$("#obj86635").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86635_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86635_onTap is still running");
	return;
}
var obj86635_onTap_runningActionsCount = 0;
var obj86635_onTap_loopCount = 0;
obj86635_onTap_actionGroup0();
});










/*
 *
 *   obj86627: Event Touch Down
 *
 */
$("#obj86627").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86627_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86627_onTap is still running");
	return;
}
var obj86627_onTap_runningActionsCount = 0;
var obj86627_onTap_loopCount = 0;
obj86627_onTap_actionGroup0();
});










/*
 *
 *   obj88309: Event Touch Down
 *
 */
$("#obj88309").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88309_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88309_onTap is still running");
	return;
}
var obj88309_onTap_runningActionsCount = 0;
var obj88309_onTap_loopCount = 0;
obj88309_onTap_actionGroup0();
});










/*
 *
 *   obj88304: Event Touch Down
 *
 */
$("#obj88304").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88304_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88304_onTap is still running");
	return;
}
var obj88304_onTap_runningActionsCount = 0;
var obj88304_onTap_loopCount = 0;
obj88304_onTap_actionGroup0();
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
	
$("#obj86671").trigger('SCEventShow');
$("#obj86668").trigger('SCEventShow');
$("#obj86665").trigger('SCEventShow');
$("#obj86663").trigger('SCEventShow');
$("#obj86661").trigger('SCEventShow');
$("#obj86659").trigger('SCEventShow');
$("#obj86657").trigger('SCEventShow');
$("#obj86655").trigger('SCEventShow');
$("#obj86653").trigger('SCEventShow');
$("#obj86635").trigger('SCEventShow');
$("#obj86627").trigger('SCEventShow');
$("#obj88309").trigger('SCEventShow');
$("#obj88304").trigger('SCEventShow');
$("#obj88314").trigger('SCEventShow');
$("#obj94869").trigger('SCEventShow');
$("#obj86625").trigger('SCEventShow');
	
});