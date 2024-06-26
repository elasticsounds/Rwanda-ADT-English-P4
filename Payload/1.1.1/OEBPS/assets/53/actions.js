pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 12117;
pubcoder.page.title = pubcoder.page.title || "53";
pubcoder.page.number = pubcoder.page.number || 53;
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
var obj71889_onTap_activeActionGroupIndex = -1;
var obj71889_onTap_runningActionsCount = 0;
var obj71889_onTap_loopCount = 0;
var obj71886_onTap_activeActionGroupIndex = -1;
var obj71886_onTap_runningActionsCount = 0;
var obj71886_onTap_loopCount = 0;
var obj71864_onTap_activeActionGroupIndex = -1;
var obj71864_onTap_runningActionsCount = 0;
var obj71864_onTap_loopCount = 0;
var obj71856_onTap_activeActionGroupIndex = -1;
var obj71856_onTap_runningActionsCount = 0;
var obj71856_onTap_loopCount = 0;
var obj89900_onTap_activeActionGroupIndex = -1;
var obj89900_onTap_runningActionsCount = 0;
var obj89900_onTap_loopCount = 0;
var obj89895_onTap_activeActionGroupIndex = -1;
var obj89895_onTap_runningActionsCount = 0;
var obj89895_onTap_loopCount = 0;
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
		
obj71889_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71889_onTap_activeActionGroupIndex = -1;
		$("#obj71889").trigger("obj71889_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71889) {
				console.warn("de-queueing event obj71889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71889_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71891();
function goToPage_71891() {
	window.obj71889_onTap_runningActionsCount = obj71889_onTap_runningActionsCount + 1;
	$("#anchor319")[0].click();
	window.obj71889_onTap_runningActionsCount = window.obj71889_onTap_runningActionsCount - 1;
if (window.obj71889_onTap_runningActionsCount < 0) {
	window.obj71889_onTap_runningActionsCount = 0;
} else if (window.obj71889_onTap_runningActionsCount == 0) {
	obj71889_onTap_actionGroup1();
}
}





















};
obj71889_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71889_onTap_activeActionGroupIndex = -1;
		$("#obj71889").trigger("obj71889_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71889) {
				console.warn("de-queueing event obj71889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71889_onTap_activeActionGroupIndex = 1;
	





















};
obj71886_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71886_onTap_activeActionGroupIndex = -1;
		$("#obj71886").trigger("obj71886_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71886) {
				console.warn("de-queueing event obj71886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71886_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71888();
function goToPage_71888() {
	window.obj71886_onTap_runningActionsCount = obj71886_onTap_runningActionsCount + 1;
	$("#anchor320")[0].click();
	window.obj71886_onTap_runningActionsCount = window.obj71886_onTap_runningActionsCount - 1;
if (window.obj71886_onTap_runningActionsCount < 0) {
	window.obj71886_onTap_runningActionsCount = 0;
} else if (window.obj71886_onTap_runningActionsCount == 0) {
	obj71886_onTap_actionGroup1();
}
}





















};
obj71886_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71886_onTap_activeActionGroupIndex = -1;
		$("#obj71886").trigger("obj71886_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71886) {
				console.warn("de-queueing event obj71886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71886_onTap_activeActionGroupIndex = 1;
	





















};
obj71864_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71864_onTap_activeActionGroupIndex = -1;
		$("#obj71864").trigger("obj71864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71864) {
				console.warn("de-queueing event obj71864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71864_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71864 
hide_71867();
function hide_71867() {
	var selector = "#obj71864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71864_onTap_runningActionsCount = obj71864_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71864_onTap_runningActionsCount = window.obj71864_onTap_runningActionsCount - 1;
if (window.obj71864_onTap_runningActionsCount < 0) {
	window.obj71864_onTap_runningActionsCount = 0;
} else if (window.obj71864_onTap_runningActionsCount == 0) {
	obj71864_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71867(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71864_onTap_runningActionsCount = window.obj71864_onTap_runningActionsCount - 1;
if (window.obj71864_onTap_runningActionsCount < 0) {
	window.obj71864_onTap_runningActionsCount = 0;
} else if (window.obj71864_onTap_runningActionsCount == 0) {
	obj71864_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj71854 
stopMovie_71866();
function stopMovie_71866() {
	window.obj71864_onTap_runningActionsCount = obj71864_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71854")[0];
	myVideo.pause();
	window.obj71864_onTap_runningActionsCount = window.obj71864_onTap_runningActionsCount - 1;
if (window.obj71864_onTap_runningActionsCount < 0) {
	window.obj71864_onTap_runningActionsCount = 0;
} else if (window.obj71864_onTap_runningActionsCount == 0) {
	obj71864_onTap_actionGroup1();
}
}
















};
obj71864_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71864_onTap_activeActionGroupIndex = -1;
		$("#obj71864").trigger("obj71864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71864) {
				console.warn("de-queueing event obj71864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71864_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71856
(function(){
	window.obj71864_onTap_runningActionsCount = obj71864_onTap_runningActionsCount + 1;

	var selector = "#obj71856";
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
					window.obj71864_onTap_runningActionsCount = window.obj71864_onTap_runningActionsCount - 1;
if (window.obj71864_onTap_runningActionsCount < 0) {
	window.obj71864_onTap_runningActionsCount = 0;
} else if (window.obj71864_onTap_runningActionsCount == 0) {
	obj71864_onTap_actionGroup2();
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
				window.obj71864_onTap_runningActionsCount = window.obj71864_onTap_runningActionsCount - 1;
if (window.obj71864_onTap_runningActionsCount < 0) {
	window.obj71864_onTap_runningActionsCount = 0;
} else if (window.obj71864_onTap_runningActionsCount == 0) {
	obj71864_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71864_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71864_onTap_activeActionGroupIndex = -1;
		$("#obj71864").trigger("obj71864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71864) {
				console.warn("de-queueing event obj71864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71864_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71854 
move_71869();
function move_71869() {
	window.obj71864_onTap_runningActionsCount = obj71864_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71854");
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
			window.obj71864_onTap_runningActionsCount = window.obj71864_onTap_runningActionsCount - 1;
if (window.obj71864_onTap_runningActionsCount < 0) {
	window.obj71864_onTap_runningActionsCount = 0;
} else if (window.obj71864_onTap_runningActionsCount == 0) {
	obj71864_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71864_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71864_onTap_activeActionGroupIndex = -1;
		$("#obj71864").trigger("obj71864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71864) {
				console.warn("de-queueing event obj71864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71864_onTap_activeActionGroupIndex = 3;
	





















};
obj71856_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71856_onTap_activeActionGroupIndex = -1;
		$("#obj71856").trigger("obj71856_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71856) {
				console.warn("de-queueing event obj71856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71856_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71856 
hide_71859();
function hide_71859() {
	var selector = "#obj71856";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71856_onTap_runningActionsCount = obj71856_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71856_onTap_runningActionsCount = window.obj71856_onTap_runningActionsCount - 1;
if (window.obj71856_onTap_runningActionsCount < 0) {
	window.obj71856_onTap_runningActionsCount = 0;
} else if (window.obj71856_onTap_runningActionsCount == 0) {
	obj71856_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71859(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71856_onTap_runningActionsCount = window.obj71856_onTap_runningActionsCount - 1;
if (window.obj71856_onTap_runningActionsCount < 0) {
	window.obj71856_onTap_runningActionsCount = 0;
} else if (window.obj71856_onTap_runningActionsCount == 0) {
	obj71856_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj71854 
playPauseMovie_71858();
function playPauseMovie_71858() {
	window.obj71856_onTap_runningActionsCount = obj71856_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71854")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj71856_onTap_runningActionsCount = window.obj71856_onTap_runningActionsCount - 1;
if (window.obj71856_onTap_runningActionsCount < 0) {
	window.obj71856_onTap_runningActionsCount = 0;
} else if (window.obj71856_onTap_runningActionsCount == 0) {
	obj71856_onTap_actionGroup1();
}
}

















};
obj71856_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71856_onTap_activeActionGroupIndex = -1;
		$("#obj71856").trigger("obj71856_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71856) {
				console.warn("de-queueing event obj71856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71856_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71864
(function(){
	window.obj71856_onTap_runningActionsCount = obj71856_onTap_runningActionsCount + 1;

	var selector = "#obj71864";
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
					window.obj71856_onTap_runningActionsCount = window.obj71856_onTap_runningActionsCount - 1;
if (window.obj71856_onTap_runningActionsCount < 0) {
	window.obj71856_onTap_runningActionsCount = 0;
} else if (window.obj71856_onTap_runningActionsCount == 0) {
	obj71856_onTap_actionGroup2();
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
				window.obj71856_onTap_runningActionsCount = window.obj71856_onTap_runningActionsCount - 1;
if (window.obj71856_onTap_runningActionsCount < 0) {
	window.obj71856_onTap_runningActionsCount = 0;
} else if (window.obj71856_onTap_runningActionsCount == 0) {
	obj71856_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71856_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71856_onTap_activeActionGroupIndex = -1;
		$("#obj71856").trigger("obj71856_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71856) {
				console.warn("de-queueing event obj71856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71856_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71854 
move_71861();
function move_71861() {
	window.obj71856_onTap_runningActionsCount = obj71856_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71854");
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
			window.obj71856_onTap_runningActionsCount = window.obj71856_onTap_runningActionsCount - 1;
if (window.obj71856_onTap_runningActionsCount < 0) {
	window.obj71856_onTap_runningActionsCount = 0;
} else if (window.obj71856_onTap_runningActionsCount == 0) {
	obj71856_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71856_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71856_onTap_activeActionGroupIndex = -1;
		$("#obj71856").trigger("obj71856_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71856) {
				console.warn("de-queueing event obj71856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71856_onTap_activeActionGroupIndex = 3;
	





















};
obj89900_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89900_onTap_activeActionGroupIndex = -1;
		$("#obj89900").trigger("obj89900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89900) {
				console.warn("de-queueing event obj89900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89900_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89905 
stopAudio_89902();
function stopAudio_89902() {
	window.obj89900_onTap_runningActionsCount = obj89900_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89905")[0];
	myAudio.pause();
	window.obj89900_onTap_runningActionsCount = window.obj89900_onTap_runningActionsCount - 1;
if (window.obj89900_onTap_runningActionsCount < 0) {
	window.obj89900_onTap_runningActionsCount = 0;
} else if (window.obj89900_onTap_runningActionsCount == 0) {
	obj89900_onTap_actionGroup1();
}
}








};
obj89900_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89900_onTap_activeActionGroupIndex = -1;
		$("#obj89900").trigger("obj89900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89900) {
				console.warn("de-queueing event obj89900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89900_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89900 
hide_89903();
function hide_89903() {
	var selector = "#obj89900";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89900_onTap_runningActionsCount = obj89900_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89900_onTap_runningActionsCount = window.obj89900_onTap_runningActionsCount - 1;
if (window.obj89900_onTap_runningActionsCount < 0) {
	window.obj89900_onTap_runningActionsCount = 0;
} else if (window.obj89900_onTap_runningActionsCount == 0) {
	obj89900_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89903(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89900_onTap_runningActionsCount = window.obj89900_onTap_runningActionsCount - 1;
if (window.obj89900_onTap_runningActionsCount < 0) {
	window.obj89900_onTap_runningActionsCount = 0;
} else if (window.obj89900_onTap_runningActionsCount == 0) {
	obj89900_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89900_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89900_onTap_activeActionGroupIndex = -1;
		$("#obj89900").trigger("obj89900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89900) {
				console.warn("de-queueing event obj89900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89900_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89895
(function(){
	window.obj89900_onTap_runningActionsCount = obj89900_onTap_runningActionsCount + 1;

	var selector = "#obj89895";
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
					window.obj89900_onTap_runningActionsCount = window.obj89900_onTap_runningActionsCount - 1;
if (window.obj89900_onTap_runningActionsCount < 0) {
	window.obj89900_onTap_runningActionsCount = 0;
} else if (window.obj89900_onTap_runningActionsCount == 0) {
	obj89900_onTap_actionGroup3();
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
				window.obj89900_onTap_runningActionsCount = window.obj89900_onTap_runningActionsCount - 1;
if (window.obj89900_onTap_runningActionsCount < 0) {
	window.obj89900_onTap_runningActionsCount = 0;
} else if (window.obj89900_onTap_runningActionsCount == 0) {
	obj89900_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89900_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89900_onTap_activeActionGroupIndex = -1;
		$("#obj89900").trigger("obj89900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89900) {
				console.warn("de-queueing event obj89900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89900_onTap_activeActionGroupIndex = 3;
	





















};
obj89895_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89895_onTap_activeActionGroupIndex = -1;
		$("#obj89895").trigger("obj89895_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89895) {
				console.warn("de-queueing event obj89895." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89895").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89895_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89895 
hide_89897();
function hide_89897() {
	var selector = "#obj89895";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89895_onTap_runningActionsCount = obj89895_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89895_onTap_runningActionsCount = window.obj89895_onTap_runningActionsCount - 1;
if (window.obj89895_onTap_runningActionsCount < 0) {
	window.obj89895_onTap_runningActionsCount = 0;
} else if (window.obj89895_onTap_runningActionsCount == 0) {
	obj89895_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89897(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89895_onTap_runningActionsCount = window.obj89895_onTap_runningActionsCount - 1;
if (window.obj89895_onTap_runningActionsCount < 0) {
	window.obj89895_onTap_runningActionsCount = 0;
} else if (window.obj89895_onTap_runningActionsCount == 0) {
	obj89895_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89895_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89895_onTap_activeActionGroupIndex = -1;
		$("#obj89895").trigger("obj89895_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89895) {
				console.warn("de-queueing event obj89895." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89895").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89895_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89900
(function(){
	window.obj89895_onTap_runningActionsCount = obj89895_onTap_runningActionsCount + 1;

	var selector = "#obj89900";
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
					window.obj89895_onTap_runningActionsCount = window.obj89895_onTap_runningActionsCount - 1;
if (window.obj89895_onTap_runningActionsCount < 0) {
	window.obj89895_onTap_runningActionsCount = 0;
} else if (window.obj89895_onTap_runningActionsCount == 0) {
	obj89895_onTap_actionGroup2();
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
				window.obj89895_onTap_runningActionsCount = window.obj89895_onTap_runningActionsCount - 1;
if (window.obj89895_onTap_runningActionsCount < 0) {
	window.obj89895_onTap_runningActionsCount = 0;
} else if (window.obj89895_onTap_runningActionsCount == 0) {
	obj89895_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89895_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89895_onTap_activeActionGroupIndex = -1;
		$("#obj89895").trigger("obj89895_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89895) {
				console.warn("de-queueing event obj89895." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89895").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89895_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89905 
playAudio_89899();
function playAudio_89899() {
	window.obj89895_onTap_runningActionsCount = obj89895_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89905")[0];
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
		    window.obj89895_onTap_runningActionsCount = window.obj89895_onTap_runningActionsCount - 1;
if (window.obj89895_onTap_runningActionsCount < 0) {
	window.obj89895_onTap_runningActionsCount = 0;
} else if (window.obj89895_onTap_runningActionsCount == 0) {
	obj89895_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89895_onTap_runningActionsCount = window.obj89895_onTap_runningActionsCount - 1;
if (window.obj89895_onTap_runningActionsCount < 0) {
	window.obj89895_onTap_runningActionsCount = 0;
} else if (window.obj89895_onTap_runningActionsCount == 0) {
	obj89895_onTap_actionGroup3();
}
	}
}









};
obj89895_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89895_onTap_activeActionGroupIndex = -1;
		$("#obj89895").trigger("obj89895_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89895) {
				console.warn("de-queueing event obj89895." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89895").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89895_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj71889: Event Touch Down
 *
 */
$("#obj71889").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71889_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71889_onTap is still running");
	return;
}
var obj71889_onTap_runningActionsCount = 0;
var obj71889_onTap_loopCount = 0;
obj71889_onTap_actionGroup0();
});










/*
 *
 *   obj71886: Event Touch Down
 *
 */
$("#obj71886").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71886_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71886_onTap is still running");
	return;
}
var obj71886_onTap_runningActionsCount = 0;
var obj71886_onTap_loopCount = 0;
obj71886_onTap_actionGroup0();
});






























/*
 *
 *   obj71864: Event Touch Down
 *
 */
$("#obj71864").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71864_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71864_onTap is still running");
	return;
}
var obj71864_onTap_runningActionsCount = 0;
var obj71864_onTap_loopCount = 0;
obj71864_onTap_actionGroup0();
});










/*
 *
 *   obj71856: Event Touch Down
 *
 */
$("#obj71856").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71856_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71856_onTap is still running");
	return;
}
var obj71856_onTap_runningActionsCount = 0;
var obj71856_onTap_loopCount = 0;
obj71856_onTap_actionGroup0();
});










/*
 *
 *   obj89900: Event Touch Down
 *
 */
$("#obj89900").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89900_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89900_onTap is still running");
	return;
}
var obj89900_onTap_runningActionsCount = 0;
var obj89900_onTap_loopCount = 0;
obj89900_onTap_actionGroup0();
});










/*
 *
 *   obj89895: Event Touch Down
 *
 */
$("#obj89895").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89895_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89895_onTap is still running");
	return;
}
var obj89895_onTap_runningActionsCount = 0;
var obj89895_onTap_loopCount = 0;
obj89895_onTap_actionGroup0();
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
	
$("#obj71892").trigger('SCEventShow');
$("#obj71889").trigger('SCEventShow');
$("#obj71886").trigger('SCEventShow');
$("#obj71884").trigger('SCEventShow');
$("#obj71882").trigger('SCEventShow');
$("#obj71864").trigger('SCEventShow');
$("#obj71856").trigger('SCEventShow');
$("#obj89900").trigger('SCEventShow');
$("#obj89895").trigger('SCEventShow');
$("#obj89905").trigger('SCEventShow');
$("#obj94735").trigger('SCEventShow');
$("#obj71854").trigger('SCEventShow');
	
});