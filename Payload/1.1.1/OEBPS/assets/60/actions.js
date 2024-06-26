pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 15277;
pubcoder.page.title = pubcoder.page.title || "60";
pubcoder.page.number = pubcoder.page.number || 60;
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
var obj74137_onTap_activeActionGroupIndex = -1;
var obj74137_onTap_runningActionsCount = 0;
var obj74137_onTap_loopCount = 0;
var obj74134_onTap_activeActionGroupIndex = -1;
var obj74134_onTap_runningActionsCount = 0;
var obj74134_onTap_loopCount = 0;
var obj74123_onTap_activeActionGroupIndex = -1;
var obj74123_onTap_runningActionsCount = 0;
var obj74123_onTap_loopCount = 0;
var obj74105_onTap_activeActionGroupIndex = -1;
var obj74105_onTap_runningActionsCount = 0;
var obj74105_onTap_loopCount = 0;
var obj74097_onTap_activeActionGroupIndex = -1;
var obj74097_onTap_runningActionsCount = 0;
var obj74097_onTap_loopCount = 0;
var obj87447_onTap_activeActionGroupIndex = -1;
var obj87447_onTap_runningActionsCount = 0;
var obj87447_onTap_loopCount = 0;
var obj87442_onTap_activeActionGroupIndex = -1;
var obj87442_onTap_runningActionsCount = 0;
var obj87442_onTap_loopCount = 0;
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
		
obj74137_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74137_onTap_activeActionGroupIndex = -1;
		$("#obj74137").trigger("obj74137_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74137) {
				console.warn("de-queueing event obj74137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74137_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74139();
function goToPage_74139() {
	window.obj74137_onTap_runningActionsCount = obj74137_onTap_runningActionsCount + 1;
	$("#anchor356")[0].click();
	window.obj74137_onTap_runningActionsCount = window.obj74137_onTap_runningActionsCount - 1;
if (window.obj74137_onTap_runningActionsCount < 0) {
	window.obj74137_onTap_runningActionsCount = 0;
} else if (window.obj74137_onTap_runningActionsCount == 0) {
	obj74137_onTap_actionGroup1();
}
}





















};
obj74137_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74137_onTap_activeActionGroupIndex = -1;
		$("#obj74137").trigger("obj74137_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74137) {
				console.warn("de-queueing event obj74137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74137_onTap_activeActionGroupIndex = 1;
	





















};
obj74134_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74134_onTap_activeActionGroupIndex = -1;
		$("#obj74134").trigger("obj74134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74134) {
				console.warn("de-queueing event obj74134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74134_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74136();
function goToPage_74136() {
	window.obj74134_onTap_runningActionsCount = obj74134_onTap_runningActionsCount + 1;
	$("#anchor357")[0].click();
	window.obj74134_onTap_runningActionsCount = window.obj74134_onTap_runningActionsCount - 1;
if (window.obj74134_onTap_runningActionsCount < 0) {
	window.obj74134_onTap_runningActionsCount = 0;
} else if (window.obj74134_onTap_runningActionsCount == 0) {
	obj74134_onTap_actionGroup1();
}
}





















};
obj74134_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74134_onTap_activeActionGroupIndex = -1;
		$("#obj74134").trigger("obj74134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74134) {
				console.warn("de-queueing event obj74134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74134_onTap_activeActionGroupIndex = 1;
	





















};
obj74123_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74123_onTap_activeActionGroupIndex = -1;
		$("#obj74123").trigger("obj74123_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74123) {
				console.warn("de-queueing event obj74123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74123_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74125();
function goToPage_74125() {
	window.obj74123_onTap_runningActionsCount = obj74123_onTap_runningActionsCount + 1;
	$("#anchor358")[0].click();
	window.obj74123_onTap_runningActionsCount = window.obj74123_onTap_runningActionsCount - 1;
if (window.obj74123_onTap_runningActionsCount < 0) {
	window.obj74123_onTap_runningActionsCount = 0;
} else if (window.obj74123_onTap_runningActionsCount == 0) {
	obj74123_onTap_actionGroup1();
}
}





















};
obj74123_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74123_onTap_activeActionGroupIndex = -1;
		$("#obj74123").trigger("obj74123_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74123) {
				console.warn("de-queueing event obj74123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74123_onTap_activeActionGroupIndex = 1;
	





















};
obj74105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74105_onTap_activeActionGroupIndex = -1;
		$("#obj74105").trigger("obj74105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74105) {
				console.warn("de-queueing event obj74105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74105_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74105 
hide_74108();
function hide_74108() {
	var selector = "#obj74105";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74105_onTap_runningActionsCount = obj74105_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74105_onTap_runningActionsCount = window.obj74105_onTap_runningActionsCount - 1;
if (window.obj74105_onTap_runningActionsCount < 0) {
	window.obj74105_onTap_runningActionsCount = 0;
} else if (window.obj74105_onTap_runningActionsCount == 0) {
	obj74105_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74108(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74105_onTap_runningActionsCount = window.obj74105_onTap_runningActionsCount - 1;
if (window.obj74105_onTap_runningActionsCount < 0) {
	window.obj74105_onTap_runningActionsCount = 0;
} else if (window.obj74105_onTap_runningActionsCount == 0) {
	obj74105_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj74095 
stopMovie_74107();
function stopMovie_74107() {
	window.obj74105_onTap_runningActionsCount = obj74105_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74095")[0];
	myVideo.pause();
	window.obj74105_onTap_runningActionsCount = window.obj74105_onTap_runningActionsCount - 1;
if (window.obj74105_onTap_runningActionsCount < 0) {
	window.obj74105_onTap_runningActionsCount = 0;
} else if (window.obj74105_onTap_runningActionsCount == 0) {
	obj74105_onTap_actionGroup1();
}
}
















};
obj74105_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74105_onTap_activeActionGroupIndex = -1;
		$("#obj74105").trigger("obj74105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74105) {
				console.warn("de-queueing event obj74105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74105_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74097
(function(){
	window.obj74105_onTap_runningActionsCount = obj74105_onTap_runningActionsCount + 1;

	var selector = "#obj74097";
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
					window.obj74105_onTap_runningActionsCount = window.obj74105_onTap_runningActionsCount - 1;
if (window.obj74105_onTap_runningActionsCount < 0) {
	window.obj74105_onTap_runningActionsCount = 0;
} else if (window.obj74105_onTap_runningActionsCount == 0) {
	obj74105_onTap_actionGroup2();
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
				window.obj74105_onTap_runningActionsCount = window.obj74105_onTap_runningActionsCount - 1;
if (window.obj74105_onTap_runningActionsCount < 0) {
	window.obj74105_onTap_runningActionsCount = 0;
} else if (window.obj74105_onTap_runningActionsCount == 0) {
	obj74105_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74105_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74105_onTap_activeActionGroupIndex = -1;
		$("#obj74105").trigger("obj74105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74105) {
				console.warn("de-queueing event obj74105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74105_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74095 
move_74110();
function move_74110() {
	window.obj74105_onTap_runningActionsCount = obj74105_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74095");
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
			window.obj74105_onTap_runningActionsCount = window.obj74105_onTap_runningActionsCount - 1;
if (window.obj74105_onTap_runningActionsCount < 0) {
	window.obj74105_onTap_runningActionsCount = 0;
} else if (window.obj74105_onTap_runningActionsCount == 0) {
	obj74105_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74105_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74105_onTap_activeActionGroupIndex = -1;
		$("#obj74105").trigger("obj74105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74105) {
				console.warn("de-queueing event obj74105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74105_onTap_activeActionGroupIndex = 3;
	





















};
obj74097_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74097_onTap_activeActionGroupIndex = -1;
		$("#obj74097").trigger("obj74097_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74097) {
				console.warn("de-queueing event obj74097." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74097").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74097_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74097 
hide_74100();
function hide_74100() {
	var selector = "#obj74097";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74097_onTap_runningActionsCount = obj74097_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74097_onTap_runningActionsCount = window.obj74097_onTap_runningActionsCount - 1;
if (window.obj74097_onTap_runningActionsCount < 0) {
	window.obj74097_onTap_runningActionsCount = 0;
} else if (window.obj74097_onTap_runningActionsCount == 0) {
	obj74097_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74100(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74097_onTap_runningActionsCount = window.obj74097_onTap_runningActionsCount - 1;
if (window.obj74097_onTap_runningActionsCount < 0) {
	window.obj74097_onTap_runningActionsCount = 0;
} else if (window.obj74097_onTap_runningActionsCount == 0) {
	obj74097_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj74095 
playPauseMovie_74099();
function playPauseMovie_74099() {
	window.obj74097_onTap_runningActionsCount = obj74097_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74095")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj74097_onTap_runningActionsCount = window.obj74097_onTap_runningActionsCount - 1;
if (window.obj74097_onTap_runningActionsCount < 0) {
	window.obj74097_onTap_runningActionsCount = 0;
} else if (window.obj74097_onTap_runningActionsCount == 0) {
	obj74097_onTap_actionGroup1();
}
}

















};
obj74097_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74097_onTap_activeActionGroupIndex = -1;
		$("#obj74097").trigger("obj74097_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74097) {
				console.warn("de-queueing event obj74097." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74097").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74097_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74105
(function(){
	window.obj74097_onTap_runningActionsCount = obj74097_onTap_runningActionsCount + 1;

	var selector = "#obj74105";
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
					window.obj74097_onTap_runningActionsCount = window.obj74097_onTap_runningActionsCount - 1;
if (window.obj74097_onTap_runningActionsCount < 0) {
	window.obj74097_onTap_runningActionsCount = 0;
} else if (window.obj74097_onTap_runningActionsCount == 0) {
	obj74097_onTap_actionGroup2();
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
				window.obj74097_onTap_runningActionsCount = window.obj74097_onTap_runningActionsCount - 1;
if (window.obj74097_onTap_runningActionsCount < 0) {
	window.obj74097_onTap_runningActionsCount = 0;
} else if (window.obj74097_onTap_runningActionsCount == 0) {
	obj74097_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74097_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74097_onTap_activeActionGroupIndex = -1;
		$("#obj74097").trigger("obj74097_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74097) {
				console.warn("de-queueing event obj74097." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74097").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74097_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74095 
move_74102();
function move_74102() {
	window.obj74097_onTap_runningActionsCount = obj74097_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74095");
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
			window.obj74097_onTap_runningActionsCount = window.obj74097_onTap_runningActionsCount - 1;
if (window.obj74097_onTap_runningActionsCount < 0) {
	window.obj74097_onTap_runningActionsCount = 0;
} else if (window.obj74097_onTap_runningActionsCount == 0) {
	obj74097_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74097_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74097_onTap_activeActionGroupIndex = -1;
		$("#obj74097").trigger("obj74097_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74097) {
				console.warn("de-queueing event obj74097." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74097").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74097_onTap_activeActionGroupIndex = 3;
	





















};
obj87447_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87447_onTap_activeActionGroupIndex = -1;
		$("#obj87447").trigger("obj87447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87447) {
				console.warn("de-queueing event obj87447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87447_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87452 
stopAudio_87449();
function stopAudio_87449() {
	window.obj87447_onTap_runningActionsCount = obj87447_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87452")[0];
	myAudio.pause();
	window.obj87447_onTap_runningActionsCount = window.obj87447_onTap_runningActionsCount - 1;
if (window.obj87447_onTap_runningActionsCount < 0) {
	window.obj87447_onTap_runningActionsCount = 0;
} else if (window.obj87447_onTap_runningActionsCount == 0) {
	obj87447_onTap_actionGroup1();
}
}








};
obj87447_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87447_onTap_activeActionGroupIndex = -1;
		$("#obj87447").trigger("obj87447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87447) {
				console.warn("de-queueing event obj87447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87447_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87447 
hide_87450();
function hide_87450() {
	var selector = "#obj87447";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87447_onTap_runningActionsCount = obj87447_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87447_onTap_runningActionsCount = window.obj87447_onTap_runningActionsCount - 1;
if (window.obj87447_onTap_runningActionsCount < 0) {
	window.obj87447_onTap_runningActionsCount = 0;
} else if (window.obj87447_onTap_runningActionsCount == 0) {
	obj87447_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87450(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87447_onTap_runningActionsCount = window.obj87447_onTap_runningActionsCount - 1;
if (window.obj87447_onTap_runningActionsCount < 0) {
	window.obj87447_onTap_runningActionsCount = 0;
} else if (window.obj87447_onTap_runningActionsCount == 0) {
	obj87447_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87447_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87447_onTap_activeActionGroupIndex = -1;
		$("#obj87447").trigger("obj87447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87447) {
				console.warn("de-queueing event obj87447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87447_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87442
(function(){
	window.obj87447_onTap_runningActionsCount = obj87447_onTap_runningActionsCount + 1;

	var selector = "#obj87442";
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
					window.obj87447_onTap_runningActionsCount = window.obj87447_onTap_runningActionsCount - 1;
if (window.obj87447_onTap_runningActionsCount < 0) {
	window.obj87447_onTap_runningActionsCount = 0;
} else if (window.obj87447_onTap_runningActionsCount == 0) {
	obj87447_onTap_actionGroup3();
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
				window.obj87447_onTap_runningActionsCount = window.obj87447_onTap_runningActionsCount - 1;
if (window.obj87447_onTap_runningActionsCount < 0) {
	window.obj87447_onTap_runningActionsCount = 0;
} else if (window.obj87447_onTap_runningActionsCount == 0) {
	obj87447_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87447_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87447_onTap_activeActionGroupIndex = -1;
		$("#obj87447").trigger("obj87447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87447) {
				console.warn("de-queueing event obj87447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87447_onTap_activeActionGroupIndex = 3;
	





















};
obj87442_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87442_onTap_activeActionGroupIndex = -1;
		$("#obj87442").trigger("obj87442_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87442) {
				console.warn("de-queueing event obj87442." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87442").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87442_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87442 
hide_87444();
function hide_87444() {
	var selector = "#obj87442";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87442_onTap_runningActionsCount = obj87442_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87442_onTap_runningActionsCount = window.obj87442_onTap_runningActionsCount - 1;
if (window.obj87442_onTap_runningActionsCount < 0) {
	window.obj87442_onTap_runningActionsCount = 0;
} else if (window.obj87442_onTap_runningActionsCount == 0) {
	obj87442_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87444(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87442_onTap_runningActionsCount = window.obj87442_onTap_runningActionsCount - 1;
if (window.obj87442_onTap_runningActionsCount < 0) {
	window.obj87442_onTap_runningActionsCount = 0;
} else if (window.obj87442_onTap_runningActionsCount == 0) {
	obj87442_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87442_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87442_onTap_activeActionGroupIndex = -1;
		$("#obj87442").trigger("obj87442_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87442) {
				console.warn("de-queueing event obj87442." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87442").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87442_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87447
(function(){
	window.obj87442_onTap_runningActionsCount = obj87442_onTap_runningActionsCount + 1;

	var selector = "#obj87447";
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
					window.obj87442_onTap_runningActionsCount = window.obj87442_onTap_runningActionsCount - 1;
if (window.obj87442_onTap_runningActionsCount < 0) {
	window.obj87442_onTap_runningActionsCount = 0;
} else if (window.obj87442_onTap_runningActionsCount == 0) {
	obj87442_onTap_actionGroup2();
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
				window.obj87442_onTap_runningActionsCount = window.obj87442_onTap_runningActionsCount - 1;
if (window.obj87442_onTap_runningActionsCount < 0) {
	window.obj87442_onTap_runningActionsCount = 0;
} else if (window.obj87442_onTap_runningActionsCount == 0) {
	obj87442_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87442_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87442_onTap_activeActionGroupIndex = -1;
		$("#obj87442").trigger("obj87442_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87442) {
				console.warn("de-queueing event obj87442." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87442").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87442_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87452 
playAudio_87446();
function playAudio_87446() {
	window.obj87442_onTap_runningActionsCount = obj87442_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87452")[0];
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
		    window.obj87442_onTap_runningActionsCount = window.obj87442_onTap_runningActionsCount - 1;
if (window.obj87442_onTap_runningActionsCount < 0) {
	window.obj87442_onTap_runningActionsCount = 0;
} else if (window.obj87442_onTap_runningActionsCount == 0) {
	obj87442_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87442_onTap_runningActionsCount = window.obj87442_onTap_runningActionsCount - 1;
if (window.obj87442_onTap_runningActionsCount < 0) {
	window.obj87442_onTap_runningActionsCount = 0;
} else if (window.obj87442_onTap_runningActionsCount == 0) {
	obj87442_onTap_actionGroup3();
}
	}
}









};
obj87442_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87442_onTap_activeActionGroupIndex = -1;
		$("#obj87442").trigger("obj87442_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87442) {
				console.warn("de-queueing event obj87442." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87442").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87442_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj74137: Event Touch Down
 *
 */
$("#obj74137").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74137_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74137_onTap is still running");
	return;
}
var obj74137_onTap_runningActionsCount = 0;
var obj74137_onTap_loopCount = 0;
obj74137_onTap_actionGroup0();
});










/*
 *
 *   obj74134: Event Touch Down
 *
 */
$("#obj74134").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74134_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74134_onTap is still running");
	return;
}
var obj74134_onTap_runningActionsCount = 0;
var obj74134_onTap_loopCount = 0;
obj74134_onTap_actionGroup0();
});


















































/*
 *
 *   obj74123: Event Touch Down
 *
 */
$("#obj74123").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74123_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74123_onTap is still running");
	return;
}
var obj74123_onTap_runningActionsCount = 0;
var obj74123_onTap_loopCount = 0;
obj74123_onTap_actionGroup0();
});










/*
 *
 *   obj74105: Event Touch Down
 *
 */
$("#obj74105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74105_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74105_onTap is still running");
	return;
}
var obj74105_onTap_runningActionsCount = 0;
var obj74105_onTap_loopCount = 0;
obj74105_onTap_actionGroup0();
});










/*
 *
 *   obj74097: Event Touch Down
 *
 */
$("#obj74097").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74097_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74097_onTap is still running");
	return;
}
var obj74097_onTap_runningActionsCount = 0;
var obj74097_onTap_loopCount = 0;
obj74097_onTap_actionGroup0();
});










/*
 *
 *   obj87447: Event Touch Down
 *
 */
$("#obj87447").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87447_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87447_onTap is still running");
	return;
}
var obj87447_onTap_runningActionsCount = 0;
var obj87447_onTap_loopCount = 0;
obj87447_onTap_actionGroup0();
});










/*
 *
 *   obj87442: Event Touch Down
 *
 */
$("#obj87442").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87442_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87442_onTap is still running");
	return;
}
var obj87442_onTap_runningActionsCount = 0;
var obj87442_onTap_loopCount = 0;
obj87442_onTap_actionGroup0();
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
	
$("#obj74140").trigger('SCEventShow');
$("#obj74137").trigger('SCEventShow');
$("#obj74134").trigger('SCEventShow');
$("#obj74132").trigger('SCEventShow');
$("#obj74130").trigger('SCEventShow');
$("#obj74128").trigger('SCEventShow');
$("#obj74126").trigger('SCEventShow');
$("#obj74123").trigger('SCEventShow');
$("#obj74105").trigger('SCEventShow');
$("#obj74097").trigger('SCEventShow');
$("#obj87447").trigger('SCEventShow');
$("#obj87442").trigger('SCEventShow');
$("#obj87452").trigger('SCEventShow');
$("#obj94749").trigger('SCEventShow');
$("#obj74095").trigger('SCEventShow');
	
});