pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 2127;
pubcoder.page.title = pubcoder.page.title || "14";
pubcoder.page.number = pubcoder.page.number || 14;
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
var obj2133_onTap_activeActionGroupIndex = -1;
var obj2133_onTap_runningActionsCount = 0;
var obj2133_onTap_loopCount = 0;
var obj2130_onTap_activeActionGroupIndex = -1;
var obj2130_onTap_runningActionsCount = 0;
var obj2130_onTap_loopCount = 0;
var obj65182_onTap_activeActionGroupIndex = -1;
var obj65182_onTap_runningActionsCount = 0;
var obj65182_onTap_loopCount = 0;
var obj65174_onTap_activeActionGroupIndex = -1;
var obj65174_onTap_runningActionsCount = 0;
var obj65174_onTap_loopCount = 0;
var obj86965_onTap_activeActionGroupIndex = -1;
var obj86965_onTap_runningActionsCount = 0;
var obj86965_onTap_loopCount = 0;
var obj86960_onTap_activeActionGroupIndex = -1;
var obj86960_onTap_runningActionsCount = 0;
var obj86960_onTap_loopCount = 0;
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
		
obj2133_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2133_onTap_activeActionGroupIndex = -1;
		$("#obj2133").trigger("obj2133_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2133) {
				console.warn("de-queueing event obj2133." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2133").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2133_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2135();
function goToPage_2135() {
	window.obj2133_onTap_runningActionsCount = obj2133_onTap_runningActionsCount + 1;
	$("#anchor93")[0].click();
	window.obj2133_onTap_runningActionsCount = window.obj2133_onTap_runningActionsCount - 1;
if (window.obj2133_onTap_runningActionsCount < 0) {
	window.obj2133_onTap_runningActionsCount = 0;
} else if (window.obj2133_onTap_runningActionsCount == 0) {
	obj2133_onTap_actionGroup1();
}
}





















};
obj2133_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2133_onTap_activeActionGroupIndex = -1;
		$("#obj2133").trigger("obj2133_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2133) {
				console.warn("de-queueing event obj2133." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2133").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2133_onTap_activeActionGroupIndex = 1;
	





















};
obj2130_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2130_onTap_activeActionGroupIndex = -1;
		$("#obj2130").trigger("obj2130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2130) {
				console.warn("de-queueing event obj2130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2130_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2132();
function goToPage_2132() {
	window.obj2130_onTap_runningActionsCount = obj2130_onTap_runningActionsCount + 1;
	$("#anchor94")[0].click();
	window.obj2130_onTap_runningActionsCount = window.obj2130_onTap_runningActionsCount - 1;
if (window.obj2130_onTap_runningActionsCount < 0) {
	window.obj2130_onTap_runningActionsCount = 0;
} else if (window.obj2130_onTap_runningActionsCount == 0) {
	obj2130_onTap_actionGroup1();
}
}





















};
obj2130_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2130_onTap_activeActionGroupIndex = -1;
		$("#obj2130").trigger("obj2130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2130) {
				console.warn("de-queueing event obj2130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2130_onTap_activeActionGroupIndex = 1;
	





















};
obj65182_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65182_onTap_activeActionGroupIndex = -1;
		$("#obj65182").trigger("obj65182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65182) {
				console.warn("de-queueing event obj65182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65182_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65182 
hide_65185();
function hide_65185() {
	var selector = "#obj65182";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65182_onTap_runningActionsCount = obj65182_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65182_onTap_runningActionsCount = window.obj65182_onTap_runningActionsCount - 1;
if (window.obj65182_onTap_runningActionsCount < 0) {
	window.obj65182_onTap_runningActionsCount = 0;
} else if (window.obj65182_onTap_runningActionsCount == 0) {
	obj65182_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65185(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65182_onTap_runningActionsCount = window.obj65182_onTap_runningActionsCount - 1;
if (window.obj65182_onTap_runningActionsCount < 0) {
	window.obj65182_onTap_runningActionsCount = 0;
} else if (window.obj65182_onTap_runningActionsCount == 0) {
	obj65182_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65188 
stopMovie_65184();
function stopMovie_65184() {
	window.obj65182_onTap_runningActionsCount = obj65182_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65188")[0];
	myVideo.pause();
	window.obj65182_onTap_runningActionsCount = window.obj65182_onTap_runningActionsCount - 1;
if (window.obj65182_onTap_runningActionsCount < 0) {
	window.obj65182_onTap_runningActionsCount = 0;
} else if (window.obj65182_onTap_runningActionsCount == 0) {
	obj65182_onTap_actionGroup1();
}
}
















};
obj65182_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65182_onTap_activeActionGroupIndex = -1;
		$("#obj65182").trigger("obj65182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65182) {
				console.warn("de-queueing event obj65182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65182_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65174
(function(){
	window.obj65182_onTap_runningActionsCount = obj65182_onTap_runningActionsCount + 1;

	var selector = "#obj65174";
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
					window.obj65182_onTap_runningActionsCount = window.obj65182_onTap_runningActionsCount - 1;
if (window.obj65182_onTap_runningActionsCount < 0) {
	window.obj65182_onTap_runningActionsCount = 0;
} else if (window.obj65182_onTap_runningActionsCount == 0) {
	obj65182_onTap_actionGroup2();
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
				window.obj65182_onTap_runningActionsCount = window.obj65182_onTap_runningActionsCount - 1;
if (window.obj65182_onTap_runningActionsCount < 0) {
	window.obj65182_onTap_runningActionsCount = 0;
} else if (window.obj65182_onTap_runningActionsCount == 0) {
	obj65182_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65182_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65182_onTap_activeActionGroupIndex = -1;
		$("#obj65182").trigger("obj65182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65182) {
				console.warn("de-queueing event obj65182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65182_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65188 
move_65187();
function move_65187() {
	window.obj65182_onTap_runningActionsCount = obj65182_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65188");
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
			window.obj65182_onTap_runningActionsCount = window.obj65182_onTap_runningActionsCount - 1;
if (window.obj65182_onTap_runningActionsCount < 0) {
	window.obj65182_onTap_runningActionsCount = 0;
} else if (window.obj65182_onTap_runningActionsCount == 0) {
	obj65182_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65182_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65182_onTap_activeActionGroupIndex = -1;
		$("#obj65182").trigger("obj65182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65182) {
				console.warn("de-queueing event obj65182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65182_onTap_activeActionGroupIndex = 3;
	





















};
obj65174_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65174_onTap_activeActionGroupIndex = -1;
		$("#obj65174").trigger("obj65174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65174) {
				console.warn("de-queueing event obj65174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65174_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65174 
hide_65177();
function hide_65177() {
	var selector = "#obj65174";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65174_onTap_runningActionsCount = obj65174_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65174_onTap_runningActionsCount = window.obj65174_onTap_runningActionsCount - 1;
if (window.obj65174_onTap_runningActionsCount < 0) {
	window.obj65174_onTap_runningActionsCount = 0;
} else if (window.obj65174_onTap_runningActionsCount == 0) {
	obj65174_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65177(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65174_onTap_runningActionsCount = window.obj65174_onTap_runningActionsCount - 1;
if (window.obj65174_onTap_runningActionsCount < 0) {
	window.obj65174_onTap_runningActionsCount = 0;
} else if (window.obj65174_onTap_runningActionsCount == 0) {
	obj65174_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65188 
playPauseMovie_65176();
function playPauseMovie_65176() {
	window.obj65174_onTap_runningActionsCount = obj65174_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65188")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65174_onTap_runningActionsCount = window.obj65174_onTap_runningActionsCount - 1;
if (window.obj65174_onTap_runningActionsCount < 0) {
	window.obj65174_onTap_runningActionsCount = 0;
} else if (window.obj65174_onTap_runningActionsCount == 0) {
	obj65174_onTap_actionGroup1();
}
}

















};
obj65174_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65174_onTap_activeActionGroupIndex = -1;
		$("#obj65174").trigger("obj65174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65174) {
				console.warn("de-queueing event obj65174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65174_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65182
(function(){
	window.obj65174_onTap_runningActionsCount = obj65174_onTap_runningActionsCount + 1;

	var selector = "#obj65182";
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
					window.obj65174_onTap_runningActionsCount = window.obj65174_onTap_runningActionsCount - 1;
if (window.obj65174_onTap_runningActionsCount < 0) {
	window.obj65174_onTap_runningActionsCount = 0;
} else if (window.obj65174_onTap_runningActionsCount == 0) {
	obj65174_onTap_actionGroup2();
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
				window.obj65174_onTap_runningActionsCount = window.obj65174_onTap_runningActionsCount - 1;
if (window.obj65174_onTap_runningActionsCount < 0) {
	window.obj65174_onTap_runningActionsCount = 0;
} else if (window.obj65174_onTap_runningActionsCount == 0) {
	obj65174_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65174_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65174_onTap_activeActionGroupIndex = -1;
		$("#obj65174").trigger("obj65174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65174) {
				console.warn("de-queueing event obj65174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65174_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65188 
move_65179();
function move_65179() {
	window.obj65174_onTap_runningActionsCount = obj65174_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65188");
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
			window.obj65174_onTap_runningActionsCount = window.obj65174_onTap_runningActionsCount - 1;
if (window.obj65174_onTap_runningActionsCount < 0) {
	window.obj65174_onTap_runningActionsCount = 0;
} else if (window.obj65174_onTap_runningActionsCount == 0) {
	obj65174_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65174_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65174_onTap_activeActionGroupIndex = -1;
		$("#obj65174").trigger("obj65174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65174) {
				console.warn("de-queueing event obj65174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65174_onTap_activeActionGroupIndex = 3;
	





















};
obj86965_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86965_onTap_activeActionGroupIndex = -1;
		$("#obj86965").trigger("obj86965_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86965) {
				console.warn("de-queueing event obj86965." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86965").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86965_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86970 
stopAudio_86967();
function stopAudio_86967() {
	window.obj86965_onTap_runningActionsCount = obj86965_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86970")[0];
	myAudio.pause();
	window.obj86965_onTap_runningActionsCount = window.obj86965_onTap_runningActionsCount - 1;
if (window.obj86965_onTap_runningActionsCount < 0) {
	window.obj86965_onTap_runningActionsCount = 0;
} else if (window.obj86965_onTap_runningActionsCount == 0) {
	obj86965_onTap_actionGroup1();
}
}








};
obj86965_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86965_onTap_activeActionGroupIndex = -1;
		$("#obj86965").trigger("obj86965_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86965) {
				console.warn("de-queueing event obj86965." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86965").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86965_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86965 
hide_86968();
function hide_86968() {
	var selector = "#obj86965";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86965_onTap_runningActionsCount = obj86965_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86965_onTap_runningActionsCount = window.obj86965_onTap_runningActionsCount - 1;
if (window.obj86965_onTap_runningActionsCount < 0) {
	window.obj86965_onTap_runningActionsCount = 0;
} else if (window.obj86965_onTap_runningActionsCount == 0) {
	obj86965_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86968(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86965_onTap_runningActionsCount = window.obj86965_onTap_runningActionsCount - 1;
if (window.obj86965_onTap_runningActionsCount < 0) {
	window.obj86965_onTap_runningActionsCount = 0;
} else if (window.obj86965_onTap_runningActionsCount == 0) {
	obj86965_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86965_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86965_onTap_activeActionGroupIndex = -1;
		$("#obj86965").trigger("obj86965_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86965) {
				console.warn("de-queueing event obj86965." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86965").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86965_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86960
(function(){
	window.obj86965_onTap_runningActionsCount = obj86965_onTap_runningActionsCount + 1;

	var selector = "#obj86960";
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
					window.obj86965_onTap_runningActionsCount = window.obj86965_onTap_runningActionsCount - 1;
if (window.obj86965_onTap_runningActionsCount < 0) {
	window.obj86965_onTap_runningActionsCount = 0;
} else if (window.obj86965_onTap_runningActionsCount == 0) {
	obj86965_onTap_actionGroup3();
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
				window.obj86965_onTap_runningActionsCount = window.obj86965_onTap_runningActionsCount - 1;
if (window.obj86965_onTap_runningActionsCount < 0) {
	window.obj86965_onTap_runningActionsCount = 0;
} else if (window.obj86965_onTap_runningActionsCount == 0) {
	obj86965_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86965_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86965_onTap_activeActionGroupIndex = -1;
		$("#obj86965").trigger("obj86965_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86965) {
				console.warn("de-queueing event obj86965." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86965").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86965_onTap_activeActionGroupIndex = 3;
	





















};
obj86960_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86960_onTap_activeActionGroupIndex = -1;
		$("#obj86960").trigger("obj86960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86960) {
				console.warn("de-queueing event obj86960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86960_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86960 
hide_86962();
function hide_86962() {
	var selector = "#obj86960";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86960_onTap_runningActionsCount = obj86960_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86960_onTap_runningActionsCount = window.obj86960_onTap_runningActionsCount - 1;
if (window.obj86960_onTap_runningActionsCount < 0) {
	window.obj86960_onTap_runningActionsCount = 0;
} else if (window.obj86960_onTap_runningActionsCount == 0) {
	obj86960_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86962(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86960_onTap_runningActionsCount = window.obj86960_onTap_runningActionsCount - 1;
if (window.obj86960_onTap_runningActionsCount < 0) {
	window.obj86960_onTap_runningActionsCount = 0;
} else if (window.obj86960_onTap_runningActionsCount == 0) {
	obj86960_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86960_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86960_onTap_activeActionGroupIndex = -1;
		$("#obj86960").trigger("obj86960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86960) {
				console.warn("de-queueing event obj86960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86960_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86965
(function(){
	window.obj86960_onTap_runningActionsCount = obj86960_onTap_runningActionsCount + 1;

	var selector = "#obj86965";
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
					window.obj86960_onTap_runningActionsCount = window.obj86960_onTap_runningActionsCount - 1;
if (window.obj86960_onTap_runningActionsCount < 0) {
	window.obj86960_onTap_runningActionsCount = 0;
} else if (window.obj86960_onTap_runningActionsCount == 0) {
	obj86960_onTap_actionGroup2();
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
				window.obj86960_onTap_runningActionsCount = window.obj86960_onTap_runningActionsCount - 1;
if (window.obj86960_onTap_runningActionsCount < 0) {
	window.obj86960_onTap_runningActionsCount = 0;
} else if (window.obj86960_onTap_runningActionsCount == 0) {
	obj86960_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86960_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86960_onTap_activeActionGroupIndex = -1;
		$("#obj86960").trigger("obj86960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86960) {
				console.warn("de-queueing event obj86960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86960_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86970 
playAudio_86964();
function playAudio_86964() {
	window.obj86960_onTap_runningActionsCount = obj86960_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86970")[0];
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
		    window.obj86960_onTap_runningActionsCount = window.obj86960_onTap_runningActionsCount - 1;
if (window.obj86960_onTap_runningActionsCount < 0) {
	window.obj86960_onTap_runningActionsCount = 0;
} else if (window.obj86960_onTap_runningActionsCount == 0) {
	obj86960_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86960_onTap_runningActionsCount = window.obj86960_onTap_runningActionsCount - 1;
if (window.obj86960_onTap_runningActionsCount < 0) {
	window.obj86960_onTap_runningActionsCount = 0;
} else if (window.obj86960_onTap_runningActionsCount == 0) {
	obj86960_onTap_actionGroup3();
}
	}
}









};
obj86960_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86960_onTap_activeActionGroupIndex = -1;
		$("#obj86960").trigger("obj86960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86960) {
				console.warn("de-queueing event obj86960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86960_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj2133: Event Touch Down
 *
 */
$("#obj2133").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2133_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2133_onTap is still running");
	return;
}
var obj2133_onTap_runningActionsCount = 0;
var obj2133_onTap_loopCount = 0;
obj2133_onTap_actionGroup0();
});










/*
 *
 *   obj2130: Event Touch Down
 *
 */
$("#obj2130").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2130_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2130_onTap is still running");
	return;
}
var obj2130_onTap_runningActionsCount = 0;
var obj2130_onTap_loopCount = 0;
obj2130_onTap_actionGroup0();
});




























































/*
 *
 *   obj65182: Event Touch Down
 *
 */
$("#obj65182").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65182_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65182_onTap is still running");
	return;
}
var obj65182_onTap_runningActionsCount = 0;
var obj65182_onTap_loopCount = 0;
obj65182_onTap_actionGroup0();
});










/*
 *
 *   obj65174: Event Touch Down
 *
 */
$("#obj65174").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65174_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65174_onTap is still running");
	return;
}
var obj65174_onTap_runningActionsCount = 0;
var obj65174_onTap_loopCount = 0;
obj65174_onTap_actionGroup0();
});










/*
 *
 *   obj86965: Event Touch Down
 *
 */
$("#obj86965").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86965_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86965_onTap is still running");
	return;
}
var obj86965_onTap_runningActionsCount = 0;
var obj86965_onTap_loopCount = 0;
obj86965_onTap_actionGroup0();
});










/*
 *
 *   obj86960: Event Touch Down
 *
 */
$("#obj86960").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86960_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86960_onTap is still running");
	return;
}
var obj86960_onTap_runningActionsCount = 0;
var obj86960_onTap_loopCount = 0;
obj86960_onTap_actionGroup0();
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
	
$("#obj2128").trigger('SCEventShow');
$("#obj2133").trigger('SCEventShow');
$("#obj2130").trigger('SCEventShow');
$("#obj2151").trigger('SCEventShow');
$("#obj2149").trigger('SCEventShow');
$("#obj2153").trigger('SCEventShow');
$("#obj2157").trigger('SCEventShow');
$("#obj2159").trigger('SCEventShow');
$("#obj65182").trigger('SCEventShow');
$("#obj65174").trigger('SCEventShow');
$("#obj86965").trigger('SCEventShow');
$("#obj86960").trigger('SCEventShow');
$("#obj86970").trigger('SCEventShow');
$("#obj94657").trigger('SCEventShow');
$("#obj65188").trigger('SCEventShow');
	
});