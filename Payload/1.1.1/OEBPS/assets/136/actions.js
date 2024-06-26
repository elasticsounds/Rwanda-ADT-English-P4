pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 40749;
pubcoder.page.title = pubcoder.page.title || "136";
pubcoder.page.number = pubcoder.page.number || 136;
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
var obj40757_onTap_activeActionGroupIndex = -1;
var obj40757_onTap_runningActionsCount = 0;
var obj40757_onTap_loopCount = 0;
var obj40754_onTap_activeActionGroupIndex = -1;
var obj40754_onTap_runningActionsCount = 0;
var obj40754_onTap_loopCount = 0;
var obj67182_onTap_activeActionGroupIndex = -1;
var obj67182_onTap_runningActionsCount = 0;
var obj67182_onTap_loopCount = 0;
var obj67174_onTap_activeActionGroupIndex = -1;
var obj67174_onTap_runningActionsCount = 0;
var obj67174_onTap_loopCount = 0;
var obj88501_onTap_activeActionGroupIndex = -1;
var obj88501_onTap_runningActionsCount = 0;
var obj88501_onTap_loopCount = 0;
var obj88496_onTap_activeActionGroupIndex = -1;
var obj88496_onTap_runningActionsCount = 0;
var obj88496_onTap_loopCount = 0;
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
		
obj40757_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40757_onTap_activeActionGroupIndex = -1;
		$("#obj40757").trigger("obj40757_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40757) {
				console.warn("de-queueing event obj40757." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40757").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40757_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_40759();
function goToPage_40759() {
	window.obj40757_onTap_runningActionsCount = obj40757_onTap_runningActionsCount + 1;
	$("#anchor812")[0].click();
	window.obj40757_onTap_runningActionsCount = window.obj40757_onTap_runningActionsCount - 1;
if (window.obj40757_onTap_runningActionsCount < 0) {
	window.obj40757_onTap_runningActionsCount = 0;
} else if (window.obj40757_onTap_runningActionsCount == 0) {
	obj40757_onTap_actionGroup1();
}
}





















};
obj40757_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40757_onTap_activeActionGroupIndex = -1;
		$("#obj40757").trigger("obj40757_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40757) {
				console.warn("de-queueing event obj40757." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40757").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40757_onTap_activeActionGroupIndex = 1;
	





















};
obj40754_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40754_onTap_activeActionGroupIndex = -1;
		$("#obj40754").trigger("obj40754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40754) {
				console.warn("de-queueing event obj40754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40754_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_40756();
function goToPage_40756() {
	window.obj40754_onTap_runningActionsCount = obj40754_onTap_runningActionsCount + 1;
	$("#anchor813")[0].click();
	window.obj40754_onTap_runningActionsCount = window.obj40754_onTap_runningActionsCount - 1;
if (window.obj40754_onTap_runningActionsCount < 0) {
	window.obj40754_onTap_runningActionsCount = 0;
} else if (window.obj40754_onTap_runningActionsCount == 0) {
	obj40754_onTap_actionGroup1();
}
}





















};
obj40754_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40754_onTap_activeActionGroupIndex = -1;
		$("#obj40754").trigger("obj40754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40754) {
				console.warn("de-queueing event obj40754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40754_onTap_activeActionGroupIndex = 1;
	





















};
obj67182_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67182_onTap_activeActionGroupIndex = -1;
		$("#obj67182").trigger("obj67182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67182) {
				console.warn("de-queueing event obj67182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67182_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67182 
hide_67185();
function hide_67185() {
	var selector = "#obj67182";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67182_onTap_runningActionsCount = obj67182_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67182_onTap_runningActionsCount = window.obj67182_onTap_runningActionsCount - 1;
if (window.obj67182_onTap_runningActionsCount < 0) {
	window.obj67182_onTap_runningActionsCount = 0;
} else if (window.obj67182_onTap_runningActionsCount == 0) {
	obj67182_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67185(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67182_onTap_runningActionsCount = window.obj67182_onTap_runningActionsCount - 1;
if (window.obj67182_onTap_runningActionsCount < 0) {
	window.obj67182_onTap_runningActionsCount = 0;
} else if (window.obj67182_onTap_runningActionsCount == 0) {
	obj67182_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67188 
stopMovie_67184();
function stopMovie_67184() {
	window.obj67182_onTap_runningActionsCount = obj67182_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67188")[0];
	myVideo.pause();
	window.obj67182_onTap_runningActionsCount = window.obj67182_onTap_runningActionsCount - 1;
if (window.obj67182_onTap_runningActionsCount < 0) {
	window.obj67182_onTap_runningActionsCount = 0;
} else if (window.obj67182_onTap_runningActionsCount == 0) {
	obj67182_onTap_actionGroup1();
}
}
















};
obj67182_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67182_onTap_activeActionGroupIndex = -1;
		$("#obj67182").trigger("obj67182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67182) {
				console.warn("de-queueing event obj67182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67182_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67174
(function(){
	window.obj67182_onTap_runningActionsCount = obj67182_onTap_runningActionsCount + 1;

	var selector = "#obj67174";
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
					window.obj67182_onTap_runningActionsCount = window.obj67182_onTap_runningActionsCount - 1;
if (window.obj67182_onTap_runningActionsCount < 0) {
	window.obj67182_onTap_runningActionsCount = 0;
} else if (window.obj67182_onTap_runningActionsCount == 0) {
	obj67182_onTap_actionGroup2();
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
				window.obj67182_onTap_runningActionsCount = window.obj67182_onTap_runningActionsCount - 1;
if (window.obj67182_onTap_runningActionsCount < 0) {
	window.obj67182_onTap_runningActionsCount = 0;
} else if (window.obj67182_onTap_runningActionsCount == 0) {
	obj67182_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67182_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67182_onTap_activeActionGroupIndex = -1;
		$("#obj67182").trigger("obj67182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67182) {
				console.warn("de-queueing event obj67182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67182_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67188 
move_67187();
function move_67187() {
	window.obj67182_onTap_runningActionsCount = obj67182_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67188");
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
			window.obj67182_onTap_runningActionsCount = window.obj67182_onTap_runningActionsCount - 1;
if (window.obj67182_onTap_runningActionsCount < 0) {
	window.obj67182_onTap_runningActionsCount = 0;
} else if (window.obj67182_onTap_runningActionsCount == 0) {
	obj67182_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67182_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67182_onTap_activeActionGroupIndex = -1;
		$("#obj67182").trigger("obj67182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67182) {
				console.warn("de-queueing event obj67182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67182_onTap_activeActionGroupIndex = 3;
	





















};
obj67174_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67174_onTap_activeActionGroupIndex = -1;
		$("#obj67174").trigger("obj67174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67174) {
				console.warn("de-queueing event obj67174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67174_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67174 
hide_67177();
function hide_67177() {
	var selector = "#obj67174";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67174_onTap_runningActionsCount = obj67174_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67174_onTap_runningActionsCount = window.obj67174_onTap_runningActionsCount - 1;
if (window.obj67174_onTap_runningActionsCount < 0) {
	window.obj67174_onTap_runningActionsCount = 0;
} else if (window.obj67174_onTap_runningActionsCount == 0) {
	obj67174_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67177(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67174_onTap_runningActionsCount = window.obj67174_onTap_runningActionsCount - 1;
if (window.obj67174_onTap_runningActionsCount < 0) {
	window.obj67174_onTap_runningActionsCount = 0;
} else if (window.obj67174_onTap_runningActionsCount == 0) {
	obj67174_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67188 
playPauseMovie_67176();
function playPauseMovie_67176() {
	window.obj67174_onTap_runningActionsCount = obj67174_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67188")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67174_onTap_runningActionsCount = window.obj67174_onTap_runningActionsCount - 1;
if (window.obj67174_onTap_runningActionsCount < 0) {
	window.obj67174_onTap_runningActionsCount = 0;
} else if (window.obj67174_onTap_runningActionsCount == 0) {
	obj67174_onTap_actionGroup1();
}
}

















};
obj67174_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67174_onTap_activeActionGroupIndex = -1;
		$("#obj67174").trigger("obj67174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67174) {
				console.warn("de-queueing event obj67174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67174_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67182
(function(){
	window.obj67174_onTap_runningActionsCount = obj67174_onTap_runningActionsCount + 1;

	var selector = "#obj67182";
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
					window.obj67174_onTap_runningActionsCount = window.obj67174_onTap_runningActionsCount - 1;
if (window.obj67174_onTap_runningActionsCount < 0) {
	window.obj67174_onTap_runningActionsCount = 0;
} else if (window.obj67174_onTap_runningActionsCount == 0) {
	obj67174_onTap_actionGroup2();
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
				window.obj67174_onTap_runningActionsCount = window.obj67174_onTap_runningActionsCount - 1;
if (window.obj67174_onTap_runningActionsCount < 0) {
	window.obj67174_onTap_runningActionsCount = 0;
} else if (window.obj67174_onTap_runningActionsCount == 0) {
	obj67174_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67174_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67174_onTap_activeActionGroupIndex = -1;
		$("#obj67174").trigger("obj67174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67174) {
				console.warn("de-queueing event obj67174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67174_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67188 
move_67179();
function move_67179() {
	window.obj67174_onTap_runningActionsCount = obj67174_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67188");
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
			window.obj67174_onTap_runningActionsCount = window.obj67174_onTap_runningActionsCount - 1;
if (window.obj67174_onTap_runningActionsCount < 0) {
	window.obj67174_onTap_runningActionsCount = 0;
} else if (window.obj67174_onTap_runningActionsCount == 0) {
	obj67174_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67174_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67174_onTap_activeActionGroupIndex = -1;
		$("#obj67174").trigger("obj67174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67174) {
				console.warn("de-queueing event obj67174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67174_onTap_activeActionGroupIndex = 3;
	





















};
obj88501_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88501_onTap_activeActionGroupIndex = -1;
		$("#obj88501").trigger("obj88501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88501) {
				console.warn("de-queueing event obj88501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88501_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88506 
stopAudio_88503();
function stopAudio_88503() {
	window.obj88501_onTap_runningActionsCount = obj88501_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88506")[0];
	myAudio.pause();
	window.obj88501_onTap_runningActionsCount = window.obj88501_onTap_runningActionsCount - 1;
if (window.obj88501_onTap_runningActionsCount < 0) {
	window.obj88501_onTap_runningActionsCount = 0;
} else if (window.obj88501_onTap_runningActionsCount == 0) {
	obj88501_onTap_actionGroup1();
}
}








};
obj88501_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88501_onTap_activeActionGroupIndex = -1;
		$("#obj88501").trigger("obj88501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88501) {
				console.warn("de-queueing event obj88501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88501_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88501 
hide_88504();
function hide_88504() {
	var selector = "#obj88501";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88501_onTap_runningActionsCount = obj88501_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88501_onTap_runningActionsCount = window.obj88501_onTap_runningActionsCount - 1;
if (window.obj88501_onTap_runningActionsCount < 0) {
	window.obj88501_onTap_runningActionsCount = 0;
} else if (window.obj88501_onTap_runningActionsCount == 0) {
	obj88501_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88504(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88501_onTap_runningActionsCount = window.obj88501_onTap_runningActionsCount - 1;
if (window.obj88501_onTap_runningActionsCount < 0) {
	window.obj88501_onTap_runningActionsCount = 0;
} else if (window.obj88501_onTap_runningActionsCount == 0) {
	obj88501_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88501_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88501_onTap_activeActionGroupIndex = -1;
		$("#obj88501").trigger("obj88501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88501) {
				console.warn("de-queueing event obj88501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88501_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88496
(function(){
	window.obj88501_onTap_runningActionsCount = obj88501_onTap_runningActionsCount + 1;

	var selector = "#obj88496";
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
					window.obj88501_onTap_runningActionsCount = window.obj88501_onTap_runningActionsCount - 1;
if (window.obj88501_onTap_runningActionsCount < 0) {
	window.obj88501_onTap_runningActionsCount = 0;
} else if (window.obj88501_onTap_runningActionsCount == 0) {
	obj88501_onTap_actionGroup3();
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
				window.obj88501_onTap_runningActionsCount = window.obj88501_onTap_runningActionsCount - 1;
if (window.obj88501_onTap_runningActionsCount < 0) {
	window.obj88501_onTap_runningActionsCount = 0;
} else if (window.obj88501_onTap_runningActionsCount == 0) {
	obj88501_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88501_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88501_onTap_activeActionGroupIndex = -1;
		$("#obj88501").trigger("obj88501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88501) {
				console.warn("de-queueing event obj88501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88501_onTap_activeActionGroupIndex = 3;
	





















};
obj88496_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88496_onTap_activeActionGroupIndex = -1;
		$("#obj88496").trigger("obj88496_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88496) {
				console.warn("de-queueing event obj88496." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88496").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88496_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88496 
hide_88498();
function hide_88498() {
	var selector = "#obj88496";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88496_onTap_runningActionsCount = obj88496_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88496_onTap_runningActionsCount = window.obj88496_onTap_runningActionsCount - 1;
if (window.obj88496_onTap_runningActionsCount < 0) {
	window.obj88496_onTap_runningActionsCount = 0;
} else if (window.obj88496_onTap_runningActionsCount == 0) {
	obj88496_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88498(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88496_onTap_runningActionsCount = window.obj88496_onTap_runningActionsCount - 1;
if (window.obj88496_onTap_runningActionsCount < 0) {
	window.obj88496_onTap_runningActionsCount = 0;
} else if (window.obj88496_onTap_runningActionsCount == 0) {
	obj88496_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88496_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88496_onTap_activeActionGroupIndex = -1;
		$("#obj88496").trigger("obj88496_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88496) {
				console.warn("de-queueing event obj88496." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88496").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88496_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88501
(function(){
	window.obj88496_onTap_runningActionsCount = obj88496_onTap_runningActionsCount + 1;

	var selector = "#obj88501";
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
					window.obj88496_onTap_runningActionsCount = window.obj88496_onTap_runningActionsCount - 1;
if (window.obj88496_onTap_runningActionsCount < 0) {
	window.obj88496_onTap_runningActionsCount = 0;
} else if (window.obj88496_onTap_runningActionsCount == 0) {
	obj88496_onTap_actionGroup2();
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
				window.obj88496_onTap_runningActionsCount = window.obj88496_onTap_runningActionsCount - 1;
if (window.obj88496_onTap_runningActionsCount < 0) {
	window.obj88496_onTap_runningActionsCount = 0;
} else if (window.obj88496_onTap_runningActionsCount == 0) {
	obj88496_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88496_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88496_onTap_activeActionGroupIndex = -1;
		$("#obj88496").trigger("obj88496_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88496) {
				console.warn("de-queueing event obj88496." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88496").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88496_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88506 
playAudio_88500();
function playAudio_88500() {
	window.obj88496_onTap_runningActionsCount = obj88496_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88506")[0];
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
		    window.obj88496_onTap_runningActionsCount = window.obj88496_onTap_runningActionsCount - 1;
if (window.obj88496_onTap_runningActionsCount < 0) {
	window.obj88496_onTap_runningActionsCount = 0;
} else if (window.obj88496_onTap_runningActionsCount == 0) {
	obj88496_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88496_onTap_runningActionsCount = window.obj88496_onTap_runningActionsCount - 1;
if (window.obj88496_onTap_runningActionsCount < 0) {
	window.obj88496_onTap_runningActionsCount = 0;
} else if (window.obj88496_onTap_runningActionsCount == 0) {
	obj88496_onTap_actionGroup3();
}
	}
}









};
obj88496_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88496_onTap_activeActionGroupIndex = -1;
		$("#obj88496").trigger("obj88496_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88496) {
				console.warn("de-queueing event obj88496." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88496").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88496_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj40757: Event Touch Down
 *
 */
$("#obj40757").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj40757_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40757_onTap is still running");
	return;
}
var obj40757_onTap_runningActionsCount = 0;
var obj40757_onTap_loopCount = 0;
obj40757_onTap_actionGroup0();
});










/*
 *
 *   obj40754: Event Touch Down
 *
 */
$("#obj40754").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj40754_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40754_onTap is still running");
	return;
}
var obj40754_onTap_runningActionsCount = 0;
var obj40754_onTap_loopCount = 0;
obj40754_onTap_actionGroup0();
});


















































/*
 *
 *   obj67182: Event Touch Down
 *
 */
$("#obj67182").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67182_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67182_onTap is still running");
	return;
}
var obj67182_onTap_runningActionsCount = 0;
var obj67182_onTap_loopCount = 0;
obj67182_onTap_actionGroup0();
});










/*
 *
 *   obj67174: Event Touch Down
 *
 */
$("#obj67174").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67174_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67174_onTap is still running");
	return;
}
var obj67174_onTap_runningActionsCount = 0;
var obj67174_onTap_loopCount = 0;
obj67174_onTap_actionGroup0();
});










/*
 *
 *   obj88501: Event Touch Down
 *
 */
$("#obj88501").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88501_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88501_onTap is still running");
	return;
}
var obj88501_onTap_runningActionsCount = 0;
var obj88501_onTap_loopCount = 0;
obj88501_onTap_actionGroup0();
});










/*
 *
 *   obj88496: Event Touch Down
 *
 */
$("#obj88496").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88496_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88496_onTap is still running");
	return;
}
var obj88496_onTap_runningActionsCount = 0;
var obj88496_onTap_loopCount = 0;
obj88496_onTap_actionGroup0();
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
	
$("#obj40773").trigger('SCEventShow');
$("#obj40757").trigger('SCEventShow');
$("#obj40754").trigger('SCEventShow');
$("#obj40752").trigger('SCEventShow');
$("#obj40776").trigger('SCEventShow');
$("#obj40778").trigger('SCEventShow');
$("#obj58694").trigger('SCEventShow');
$("#obj67182").trigger('SCEventShow');
$("#obj67174").trigger('SCEventShow');
$("#obj88501").trigger('SCEventShow');
$("#obj88496").trigger('SCEventShow');
$("#obj88506").trigger('SCEventShow');
$("#obj94901").trigger('SCEventShow');
$("#obj67188").trigger('SCEventShow');
	
});