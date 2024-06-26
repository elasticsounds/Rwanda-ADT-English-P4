pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 17949;
pubcoder.page.title = pubcoder.page.title || "70";
pubcoder.page.number = pubcoder.page.number || 70;
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
var obj75310_onTap_activeActionGroupIndex = -1;
var obj75310_onTap_runningActionsCount = 0;
var obj75310_onTap_loopCount = 0;
var obj75307_onTap_activeActionGroupIndex = -1;
var obj75307_onTap_runningActionsCount = 0;
var obj75307_onTap_loopCount = 0;
var obj75283_onTap_activeActionGroupIndex = -1;
var obj75283_onTap_runningActionsCount = 0;
var obj75283_onTap_loopCount = 0;
var obj75275_onTap_activeActionGroupIndex = -1;
var obj75275_onTap_runningActionsCount = 0;
var obj75275_onTap_loopCount = 0;
var obj87675_onTap_activeActionGroupIndex = -1;
var obj87675_onTap_runningActionsCount = 0;
var obj87675_onTap_loopCount = 0;
var obj87670_onTap_activeActionGroupIndex = -1;
var obj87670_onTap_runningActionsCount = 0;
var obj87670_onTap_loopCount = 0;
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
		
obj75310_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75310_onTap_activeActionGroupIndex = -1;
		$("#obj75310").trigger("obj75310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75310) {
				console.warn("de-queueing event obj75310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75310_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75312();
function goToPage_75312() {
	window.obj75310_onTap_runningActionsCount = obj75310_onTap_runningActionsCount + 1;
	$("#anchor415")[0].click();
	window.obj75310_onTap_runningActionsCount = window.obj75310_onTap_runningActionsCount - 1;
if (window.obj75310_onTap_runningActionsCount < 0) {
	window.obj75310_onTap_runningActionsCount = 0;
} else if (window.obj75310_onTap_runningActionsCount == 0) {
	obj75310_onTap_actionGroup1();
}
}





















};
obj75310_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75310_onTap_activeActionGroupIndex = -1;
		$("#obj75310").trigger("obj75310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75310) {
				console.warn("de-queueing event obj75310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75310_onTap_activeActionGroupIndex = 1;
	





















};
obj75307_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75307_onTap_activeActionGroupIndex = -1;
		$("#obj75307").trigger("obj75307_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75307) {
				console.warn("de-queueing event obj75307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75307_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75309();
function goToPage_75309() {
	window.obj75307_onTap_runningActionsCount = obj75307_onTap_runningActionsCount + 1;
	$("#anchor416")[0].click();
	window.obj75307_onTap_runningActionsCount = window.obj75307_onTap_runningActionsCount - 1;
if (window.obj75307_onTap_runningActionsCount < 0) {
	window.obj75307_onTap_runningActionsCount = 0;
} else if (window.obj75307_onTap_runningActionsCount == 0) {
	obj75307_onTap_actionGroup1();
}
}





















};
obj75307_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75307_onTap_activeActionGroupIndex = -1;
		$("#obj75307").trigger("obj75307_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75307) {
				console.warn("de-queueing event obj75307." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75307").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75307_onTap_activeActionGroupIndex = 1;
	





















};
obj75283_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75283_onTap_activeActionGroupIndex = -1;
		$("#obj75283").trigger("obj75283_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75283) {
				console.warn("de-queueing event obj75283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75283_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75283 
hide_75286();
function hide_75286() {
	var selector = "#obj75283";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75283_onTap_runningActionsCount = obj75283_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75283_onTap_runningActionsCount = window.obj75283_onTap_runningActionsCount - 1;
if (window.obj75283_onTap_runningActionsCount < 0) {
	window.obj75283_onTap_runningActionsCount = 0;
} else if (window.obj75283_onTap_runningActionsCount == 0) {
	obj75283_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75286(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75283_onTap_runningActionsCount = window.obj75283_onTap_runningActionsCount - 1;
if (window.obj75283_onTap_runningActionsCount < 0) {
	window.obj75283_onTap_runningActionsCount = 0;
} else if (window.obj75283_onTap_runningActionsCount == 0) {
	obj75283_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj75273 
stopMovie_75285();
function stopMovie_75285() {
	window.obj75283_onTap_runningActionsCount = obj75283_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75273")[0];
	myVideo.pause();
	window.obj75283_onTap_runningActionsCount = window.obj75283_onTap_runningActionsCount - 1;
if (window.obj75283_onTap_runningActionsCount < 0) {
	window.obj75283_onTap_runningActionsCount = 0;
} else if (window.obj75283_onTap_runningActionsCount == 0) {
	obj75283_onTap_actionGroup1();
}
}
















};
obj75283_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75283_onTap_activeActionGroupIndex = -1;
		$("#obj75283").trigger("obj75283_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75283) {
				console.warn("de-queueing event obj75283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75283_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75275
(function(){
	window.obj75283_onTap_runningActionsCount = obj75283_onTap_runningActionsCount + 1;

	var selector = "#obj75275";
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
					window.obj75283_onTap_runningActionsCount = window.obj75283_onTap_runningActionsCount - 1;
if (window.obj75283_onTap_runningActionsCount < 0) {
	window.obj75283_onTap_runningActionsCount = 0;
} else if (window.obj75283_onTap_runningActionsCount == 0) {
	obj75283_onTap_actionGroup2();
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
				window.obj75283_onTap_runningActionsCount = window.obj75283_onTap_runningActionsCount - 1;
if (window.obj75283_onTap_runningActionsCount < 0) {
	window.obj75283_onTap_runningActionsCount = 0;
} else if (window.obj75283_onTap_runningActionsCount == 0) {
	obj75283_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75283_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75283_onTap_activeActionGroupIndex = -1;
		$("#obj75283").trigger("obj75283_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75283) {
				console.warn("de-queueing event obj75283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75283_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75273 
move_75288();
function move_75288() {
	window.obj75283_onTap_runningActionsCount = obj75283_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75273");
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
			window.obj75283_onTap_runningActionsCount = window.obj75283_onTap_runningActionsCount - 1;
if (window.obj75283_onTap_runningActionsCount < 0) {
	window.obj75283_onTap_runningActionsCount = 0;
} else if (window.obj75283_onTap_runningActionsCount == 0) {
	obj75283_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75283_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75283_onTap_activeActionGroupIndex = -1;
		$("#obj75283").trigger("obj75283_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75283) {
				console.warn("de-queueing event obj75283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75283_onTap_activeActionGroupIndex = 3;
	





















};
obj75275_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75275_onTap_activeActionGroupIndex = -1;
		$("#obj75275").trigger("obj75275_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75275) {
				console.warn("de-queueing event obj75275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75275_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75275 
hide_75278();
function hide_75278() {
	var selector = "#obj75275";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75275_onTap_runningActionsCount = obj75275_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75275_onTap_runningActionsCount = window.obj75275_onTap_runningActionsCount - 1;
if (window.obj75275_onTap_runningActionsCount < 0) {
	window.obj75275_onTap_runningActionsCount = 0;
} else if (window.obj75275_onTap_runningActionsCount == 0) {
	obj75275_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75278(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75275_onTap_runningActionsCount = window.obj75275_onTap_runningActionsCount - 1;
if (window.obj75275_onTap_runningActionsCount < 0) {
	window.obj75275_onTap_runningActionsCount = 0;
} else if (window.obj75275_onTap_runningActionsCount == 0) {
	obj75275_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj75273 
playPauseMovie_75277();
function playPauseMovie_75277() {
	window.obj75275_onTap_runningActionsCount = obj75275_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75273")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj75275_onTap_runningActionsCount = window.obj75275_onTap_runningActionsCount - 1;
if (window.obj75275_onTap_runningActionsCount < 0) {
	window.obj75275_onTap_runningActionsCount = 0;
} else if (window.obj75275_onTap_runningActionsCount == 0) {
	obj75275_onTap_actionGroup1();
}
}

















};
obj75275_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75275_onTap_activeActionGroupIndex = -1;
		$("#obj75275").trigger("obj75275_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75275) {
				console.warn("de-queueing event obj75275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75275_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75283
(function(){
	window.obj75275_onTap_runningActionsCount = obj75275_onTap_runningActionsCount + 1;

	var selector = "#obj75283";
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
					window.obj75275_onTap_runningActionsCount = window.obj75275_onTap_runningActionsCount - 1;
if (window.obj75275_onTap_runningActionsCount < 0) {
	window.obj75275_onTap_runningActionsCount = 0;
} else if (window.obj75275_onTap_runningActionsCount == 0) {
	obj75275_onTap_actionGroup2();
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
				window.obj75275_onTap_runningActionsCount = window.obj75275_onTap_runningActionsCount - 1;
if (window.obj75275_onTap_runningActionsCount < 0) {
	window.obj75275_onTap_runningActionsCount = 0;
} else if (window.obj75275_onTap_runningActionsCount == 0) {
	obj75275_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75275_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75275_onTap_activeActionGroupIndex = -1;
		$("#obj75275").trigger("obj75275_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75275) {
				console.warn("de-queueing event obj75275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75275_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75273 
move_75280();
function move_75280() {
	window.obj75275_onTap_runningActionsCount = obj75275_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75273");
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
			window.obj75275_onTap_runningActionsCount = window.obj75275_onTap_runningActionsCount - 1;
if (window.obj75275_onTap_runningActionsCount < 0) {
	window.obj75275_onTap_runningActionsCount = 0;
} else if (window.obj75275_onTap_runningActionsCount == 0) {
	obj75275_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75275_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75275_onTap_activeActionGroupIndex = -1;
		$("#obj75275").trigger("obj75275_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75275) {
				console.warn("de-queueing event obj75275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75275_onTap_activeActionGroupIndex = 3;
	





















};
obj87675_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87675_onTap_activeActionGroupIndex = -1;
		$("#obj87675").trigger("obj87675_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87675) {
				console.warn("de-queueing event obj87675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87675_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87680 
stopAudio_87677();
function stopAudio_87677() {
	window.obj87675_onTap_runningActionsCount = obj87675_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87680")[0];
	myAudio.pause();
	window.obj87675_onTap_runningActionsCount = window.obj87675_onTap_runningActionsCount - 1;
if (window.obj87675_onTap_runningActionsCount < 0) {
	window.obj87675_onTap_runningActionsCount = 0;
} else if (window.obj87675_onTap_runningActionsCount == 0) {
	obj87675_onTap_actionGroup1();
}
}








};
obj87675_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87675_onTap_activeActionGroupIndex = -1;
		$("#obj87675").trigger("obj87675_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87675) {
				console.warn("de-queueing event obj87675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87675_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87675 
hide_87678();
function hide_87678() {
	var selector = "#obj87675";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87675_onTap_runningActionsCount = obj87675_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87675_onTap_runningActionsCount = window.obj87675_onTap_runningActionsCount - 1;
if (window.obj87675_onTap_runningActionsCount < 0) {
	window.obj87675_onTap_runningActionsCount = 0;
} else if (window.obj87675_onTap_runningActionsCount == 0) {
	obj87675_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87678(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87675_onTap_runningActionsCount = window.obj87675_onTap_runningActionsCount - 1;
if (window.obj87675_onTap_runningActionsCount < 0) {
	window.obj87675_onTap_runningActionsCount = 0;
} else if (window.obj87675_onTap_runningActionsCount == 0) {
	obj87675_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87675_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87675_onTap_activeActionGroupIndex = -1;
		$("#obj87675").trigger("obj87675_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87675) {
				console.warn("de-queueing event obj87675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87675_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87670
(function(){
	window.obj87675_onTap_runningActionsCount = obj87675_onTap_runningActionsCount + 1;

	var selector = "#obj87670";
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
					window.obj87675_onTap_runningActionsCount = window.obj87675_onTap_runningActionsCount - 1;
if (window.obj87675_onTap_runningActionsCount < 0) {
	window.obj87675_onTap_runningActionsCount = 0;
} else if (window.obj87675_onTap_runningActionsCount == 0) {
	obj87675_onTap_actionGroup3();
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
				window.obj87675_onTap_runningActionsCount = window.obj87675_onTap_runningActionsCount - 1;
if (window.obj87675_onTap_runningActionsCount < 0) {
	window.obj87675_onTap_runningActionsCount = 0;
} else if (window.obj87675_onTap_runningActionsCount == 0) {
	obj87675_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87675_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87675_onTap_activeActionGroupIndex = -1;
		$("#obj87675").trigger("obj87675_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87675) {
				console.warn("de-queueing event obj87675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87675_onTap_activeActionGroupIndex = 3;
	





















};
obj87670_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87670_onTap_activeActionGroupIndex = -1;
		$("#obj87670").trigger("obj87670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87670) {
				console.warn("de-queueing event obj87670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87670_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87670 
hide_87672();
function hide_87672() {
	var selector = "#obj87670";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87670_onTap_runningActionsCount = obj87670_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87670_onTap_runningActionsCount = window.obj87670_onTap_runningActionsCount - 1;
if (window.obj87670_onTap_runningActionsCount < 0) {
	window.obj87670_onTap_runningActionsCount = 0;
} else if (window.obj87670_onTap_runningActionsCount == 0) {
	obj87670_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87672(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87670_onTap_runningActionsCount = window.obj87670_onTap_runningActionsCount - 1;
if (window.obj87670_onTap_runningActionsCount < 0) {
	window.obj87670_onTap_runningActionsCount = 0;
} else if (window.obj87670_onTap_runningActionsCount == 0) {
	obj87670_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87670_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87670_onTap_activeActionGroupIndex = -1;
		$("#obj87670").trigger("obj87670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87670) {
				console.warn("de-queueing event obj87670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87670_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87675
(function(){
	window.obj87670_onTap_runningActionsCount = obj87670_onTap_runningActionsCount + 1;

	var selector = "#obj87675";
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
					window.obj87670_onTap_runningActionsCount = window.obj87670_onTap_runningActionsCount - 1;
if (window.obj87670_onTap_runningActionsCount < 0) {
	window.obj87670_onTap_runningActionsCount = 0;
} else if (window.obj87670_onTap_runningActionsCount == 0) {
	obj87670_onTap_actionGroup2();
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
				window.obj87670_onTap_runningActionsCount = window.obj87670_onTap_runningActionsCount - 1;
if (window.obj87670_onTap_runningActionsCount < 0) {
	window.obj87670_onTap_runningActionsCount = 0;
} else if (window.obj87670_onTap_runningActionsCount == 0) {
	obj87670_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87670_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87670_onTap_activeActionGroupIndex = -1;
		$("#obj87670").trigger("obj87670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87670) {
				console.warn("de-queueing event obj87670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87670_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87680 
playAudio_87674();
function playAudio_87674() {
	window.obj87670_onTap_runningActionsCount = obj87670_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87680")[0];
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
		    window.obj87670_onTap_runningActionsCount = window.obj87670_onTap_runningActionsCount - 1;
if (window.obj87670_onTap_runningActionsCount < 0) {
	window.obj87670_onTap_runningActionsCount = 0;
} else if (window.obj87670_onTap_runningActionsCount == 0) {
	obj87670_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87670_onTap_runningActionsCount = window.obj87670_onTap_runningActionsCount - 1;
if (window.obj87670_onTap_runningActionsCount < 0) {
	window.obj87670_onTap_runningActionsCount = 0;
} else if (window.obj87670_onTap_runningActionsCount == 0) {
	obj87670_onTap_actionGroup3();
}
	}
}









};
obj87670_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87670_onTap_activeActionGroupIndex = -1;
		$("#obj87670").trigger("obj87670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87670) {
				console.warn("de-queueing event obj87670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87670_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75310: Event Touch Down
 *
 */
$("#obj75310").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75310_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75310_onTap is still running");
	return;
}
var obj75310_onTap_runningActionsCount = 0;
var obj75310_onTap_loopCount = 0;
obj75310_onTap_actionGroup0();
});










/*
 *
 *   obj75307: Event Touch Down
 *
 */
$("#obj75307").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75307_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75307_onTap is still running");
	return;
}
var obj75307_onTap_runningActionsCount = 0;
var obj75307_onTap_loopCount = 0;
obj75307_onTap_actionGroup0();
});








































/*
 *
 *   obj75283: Event Touch Down
 *
 */
$("#obj75283").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75283_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75283_onTap is still running");
	return;
}
var obj75283_onTap_runningActionsCount = 0;
var obj75283_onTap_loopCount = 0;
obj75283_onTap_actionGroup0();
});










/*
 *
 *   obj75275: Event Touch Down
 *
 */
$("#obj75275").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75275_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75275_onTap is still running");
	return;
}
var obj75275_onTap_runningActionsCount = 0;
var obj75275_onTap_loopCount = 0;
obj75275_onTap_actionGroup0();
});










/*
 *
 *   obj87675: Event Touch Down
 *
 */
$("#obj87675").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87675_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87675_onTap is still running");
	return;
}
var obj87675_onTap_runningActionsCount = 0;
var obj87675_onTap_loopCount = 0;
obj87675_onTap_actionGroup0();
});










/*
 *
 *   obj87670: Event Touch Down
 *
 */
$("#obj87670").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87670_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87670_onTap is still running");
	return;
}
var obj87670_onTap_runningActionsCount = 0;
var obj87670_onTap_loopCount = 0;
obj87670_onTap_actionGroup0();
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
	
$("#obj75313").trigger('SCEventShow');
$("#obj75310").trigger('SCEventShow');
$("#obj75307").trigger('SCEventShow');
$("#obj75305").trigger('SCEventShow');
$("#obj75303").trigger('SCEventShow');
$("#obj75301").trigger('SCEventShow');
$("#obj75283").trigger('SCEventShow');
$("#obj75275").trigger('SCEventShow');
$("#obj87675").trigger('SCEventShow');
$("#obj87670").trigger('SCEventShow');
$("#obj87680").trigger('SCEventShow');
$("#obj94769").trigger('SCEventShow');
$("#obj75273").trigger('SCEventShow');
	
});