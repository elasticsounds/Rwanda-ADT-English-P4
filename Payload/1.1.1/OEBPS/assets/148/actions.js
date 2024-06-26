pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 43541;
pubcoder.page.title = pubcoder.page.title || "148";
pubcoder.page.number = pubcoder.page.number || 148;
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
var obj43547_onTap_activeActionGroupIndex = -1;
var obj43547_onTap_runningActionsCount = 0;
var obj43547_onTap_loopCount = 0;
var obj43544_onTap_activeActionGroupIndex = -1;
var obj43544_onTap_runningActionsCount = 0;
var obj43544_onTap_loopCount = 0;
var obj67374_onTap_activeActionGroupIndex = -1;
var obj67374_onTap_runningActionsCount = 0;
var obj67374_onTap_loopCount = 0;
var obj67366_onTap_activeActionGroupIndex = -1;
var obj67366_onTap_runningActionsCount = 0;
var obj67366_onTap_loopCount = 0;
var obj88645_onTap_activeActionGroupIndex = -1;
var obj88645_onTap_runningActionsCount = 0;
var obj88645_onTap_loopCount = 0;
var obj88640_onTap_activeActionGroupIndex = -1;
var obj88640_onTap_runningActionsCount = 0;
var obj88640_onTap_loopCount = 0;
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
		
obj43547_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43547_onTap_activeActionGroupIndex = -1;
		$("#obj43547").trigger("obj43547_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43547) {
				console.warn("de-queueing event obj43547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43547_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43549();
function goToPage_43549() {
	window.obj43547_onTap_runningActionsCount = obj43547_onTap_runningActionsCount + 1;
	$("#anchor875")[0].click();
	window.obj43547_onTap_runningActionsCount = window.obj43547_onTap_runningActionsCount - 1;
if (window.obj43547_onTap_runningActionsCount < 0) {
	window.obj43547_onTap_runningActionsCount = 0;
} else if (window.obj43547_onTap_runningActionsCount == 0) {
	obj43547_onTap_actionGroup1();
}
}





















};
obj43547_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43547_onTap_activeActionGroupIndex = -1;
		$("#obj43547").trigger("obj43547_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43547) {
				console.warn("de-queueing event obj43547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43547_onTap_activeActionGroupIndex = 1;
	





















};
obj43544_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43544_onTap_activeActionGroupIndex = -1;
		$("#obj43544").trigger("obj43544_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43544) {
				console.warn("de-queueing event obj43544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43544_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43546();
function goToPage_43546() {
	window.obj43544_onTap_runningActionsCount = obj43544_onTap_runningActionsCount + 1;
	$("#anchor876")[0].click();
	window.obj43544_onTap_runningActionsCount = window.obj43544_onTap_runningActionsCount - 1;
if (window.obj43544_onTap_runningActionsCount < 0) {
	window.obj43544_onTap_runningActionsCount = 0;
} else if (window.obj43544_onTap_runningActionsCount == 0) {
	obj43544_onTap_actionGroup1();
}
}





















};
obj43544_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43544_onTap_activeActionGroupIndex = -1;
		$("#obj43544").trigger("obj43544_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43544) {
				console.warn("de-queueing event obj43544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43544_onTap_activeActionGroupIndex = 1;
	





















};
obj67374_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67374_onTap_activeActionGroupIndex = -1;
		$("#obj67374").trigger("obj67374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67374) {
				console.warn("de-queueing event obj67374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67374_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67374 
hide_67377();
function hide_67377() {
	var selector = "#obj67374";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67374_onTap_runningActionsCount = obj67374_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67374_onTap_runningActionsCount = window.obj67374_onTap_runningActionsCount - 1;
if (window.obj67374_onTap_runningActionsCount < 0) {
	window.obj67374_onTap_runningActionsCount = 0;
} else if (window.obj67374_onTap_runningActionsCount == 0) {
	obj67374_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67377(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67374_onTap_runningActionsCount = window.obj67374_onTap_runningActionsCount - 1;
if (window.obj67374_onTap_runningActionsCount < 0) {
	window.obj67374_onTap_runningActionsCount = 0;
} else if (window.obj67374_onTap_runningActionsCount == 0) {
	obj67374_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67380 
stopMovie_67376();
function stopMovie_67376() {
	window.obj67374_onTap_runningActionsCount = obj67374_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67380")[0];
	myVideo.pause();
	window.obj67374_onTap_runningActionsCount = window.obj67374_onTap_runningActionsCount - 1;
if (window.obj67374_onTap_runningActionsCount < 0) {
	window.obj67374_onTap_runningActionsCount = 0;
} else if (window.obj67374_onTap_runningActionsCount == 0) {
	obj67374_onTap_actionGroup1();
}
}
















};
obj67374_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67374_onTap_activeActionGroupIndex = -1;
		$("#obj67374").trigger("obj67374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67374) {
				console.warn("de-queueing event obj67374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67374_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67366
(function(){
	window.obj67374_onTap_runningActionsCount = obj67374_onTap_runningActionsCount + 1;

	var selector = "#obj67366";
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
					window.obj67374_onTap_runningActionsCount = window.obj67374_onTap_runningActionsCount - 1;
if (window.obj67374_onTap_runningActionsCount < 0) {
	window.obj67374_onTap_runningActionsCount = 0;
} else if (window.obj67374_onTap_runningActionsCount == 0) {
	obj67374_onTap_actionGroup2();
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
				window.obj67374_onTap_runningActionsCount = window.obj67374_onTap_runningActionsCount - 1;
if (window.obj67374_onTap_runningActionsCount < 0) {
	window.obj67374_onTap_runningActionsCount = 0;
} else if (window.obj67374_onTap_runningActionsCount == 0) {
	obj67374_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67374_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67374_onTap_activeActionGroupIndex = -1;
		$("#obj67374").trigger("obj67374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67374) {
				console.warn("de-queueing event obj67374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67374_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67380 
move_67379();
function move_67379() {
	window.obj67374_onTap_runningActionsCount = obj67374_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67380");
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
			window.obj67374_onTap_runningActionsCount = window.obj67374_onTap_runningActionsCount - 1;
if (window.obj67374_onTap_runningActionsCount < 0) {
	window.obj67374_onTap_runningActionsCount = 0;
} else if (window.obj67374_onTap_runningActionsCount == 0) {
	obj67374_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67374_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67374_onTap_activeActionGroupIndex = -1;
		$("#obj67374").trigger("obj67374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67374) {
				console.warn("de-queueing event obj67374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67374_onTap_activeActionGroupIndex = 3;
	





















};
obj67366_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67366_onTap_activeActionGroupIndex = -1;
		$("#obj67366").trigger("obj67366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67366) {
				console.warn("de-queueing event obj67366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67366_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67366 
hide_67369();
function hide_67369() {
	var selector = "#obj67366";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67366_onTap_runningActionsCount = obj67366_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67366_onTap_runningActionsCount = window.obj67366_onTap_runningActionsCount - 1;
if (window.obj67366_onTap_runningActionsCount < 0) {
	window.obj67366_onTap_runningActionsCount = 0;
} else if (window.obj67366_onTap_runningActionsCount == 0) {
	obj67366_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67369(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67366_onTap_runningActionsCount = window.obj67366_onTap_runningActionsCount - 1;
if (window.obj67366_onTap_runningActionsCount < 0) {
	window.obj67366_onTap_runningActionsCount = 0;
} else if (window.obj67366_onTap_runningActionsCount == 0) {
	obj67366_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67380 
playPauseMovie_67368();
function playPauseMovie_67368() {
	window.obj67366_onTap_runningActionsCount = obj67366_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67380")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67366_onTap_runningActionsCount = window.obj67366_onTap_runningActionsCount - 1;
if (window.obj67366_onTap_runningActionsCount < 0) {
	window.obj67366_onTap_runningActionsCount = 0;
} else if (window.obj67366_onTap_runningActionsCount == 0) {
	obj67366_onTap_actionGroup1();
}
}

















};
obj67366_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67366_onTap_activeActionGroupIndex = -1;
		$("#obj67366").trigger("obj67366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67366) {
				console.warn("de-queueing event obj67366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67366_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67374
(function(){
	window.obj67366_onTap_runningActionsCount = obj67366_onTap_runningActionsCount + 1;

	var selector = "#obj67374";
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
					window.obj67366_onTap_runningActionsCount = window.obj67366_onTap_runningActionsCount - 1;
if (window.obj67366_onTap_runningActionsCount < 0) {
	window.obj67366_onTap_runningActionsCount = 0;
} else if (window.obj67366_onTap_runningActionsCount == 0) {
	obj67366_onTap_actionGroup2();
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
				window.obj67366_onTap_runningActionsCount = window.obj67366_onTap_runningActionsCount - 1;
if (window.obj67366_onTap_runningActionsCount < 0) {
	window.obj67366_onTap_runningActionsCount = 0;
} else if (window.obj67366_onTap_runningActionsCount == 0) {
	obj67366_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67366_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67366_onTap_activeActionGroupIndex = -1;
		$("#obj67366").trigger("obj67366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67366) {
				console.warn("de-queueing event obj67366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67366_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67380 
move_67371();
function move_67371() {
	window.obj67366_onTap_runningActionsCount = obj67366_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67380");
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
			window.obj67366_onTap_runningActionsCount = window.obj67366_onTap_runningActionsCount - 1;
if (window.obj67366_onTap_runningActionsCount < 0) {
	window.obj67366_onTap_runningActionsCount = 0;
} else if (window.obj67366_onTap_runningActionsCount == 0) {
	obj67366_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67366_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67366_onTap_activeActionGroupIndex = -1;
		$("#obj67366").trigger("obj67366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67366) {
				console.warn("de-queueing event obj67366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67366_onTap_activeActionGroupIndex = 3;
	





















};
obj88645_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88645_onTap_activeActionGroupIndex = -1;
		$("#obj88645").trigger("obj88645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88645) {
				console.warn("de-queueing event obj88645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88645_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88650 
stopAudio_88647();
function stopAudio_88647() {
	window.obj88645_onTap_runningActionsCount = obj88645_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88650")[0];
	myAudio.pause();
	window.obj88645_onTap_runningActionsCount = window.obj88645_onTap_runningActionsCount - 1;
if (window.obj88645_onTap_runningActionsCount < 0) {
	window.obj88645_onTap_runningActionsCount = 0;
} else if (window.obj88645_onTap_runningActionsCount == 0) {
	obj88645_onTap_actionGroup1();
}
}








};
obj88645_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88645_onTap_activeActionGroupIndex = -1;
		$("#obj88645").trigger("obj88645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88645) {
				console.warn("de-queueing event obj88645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88645_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88645 
hide_88648();
function hide_88648() {
	var selector = "#obj88645";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88645_onTap_runningActionsCount = obj88645_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88645_onTap_runningActionsCount = window.obj88645_onTap_runningActionsCount - 1;
if (window.obj88645_onTap_runningActionsCount < 0) {
	window.obj88645_onTap_runningActionsCount = 0;
} else if (window.obj88645_onTap_runningActionsCount == 0) {
	obj88645_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88648(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88645_onTap_runningActionsCount = window.obj88645_onTap_runningActionsCount - 1;
if (window.obj88645_onTap_runningActionsCount < 0) {
	window.obj88645_onTap_runningActionsCount = 0;
} else if (window.obj88645_onTap_runningActionsCount == 0) {
	obj88645_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88645_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88645_onTap_activeActionGroupIndex = -1;
		$("#obj88645").trigger("obj88645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88645) {
				console.warn("de-queueing event obj88645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88645_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88640
(function(){
	window.obj88645_onTap_runningActionsCount = obj88645_onTap_runningActionsCount + 1;

	var selector = "#obj88640";
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
					window.obj88645_onTap_runningActionsCount = window.obj88645_onTap_runningActionsCount - 1;
if (window.obj88645_onTap_runningActionsCount < 0) {
	window.obj88645_onTap_runningActionsCount = 0;
} else if (window.obj88645_onTap_runningActionsCount == 0) {
	obj88645_onTap_actionGroup3();
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
				window.obj88645_onTap_runningActionsCount = window.obj88645_onTap_runningActionsCount - 1;
if (window.obj88645_onTap_runningActionsCount < 0) {
	window.obj88645_onTap_runningActionsCount = 0;
} else if (window.obj88645_onTap_runningActionsCount == 0) {
	obj88645_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88645_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88645_onTap_activeActionGroupIndex = -1;
		$("#obj88645").trigger("obj88645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88645) {
				console.warn("de-queueing event obj88645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88645_onTap_activeActionGroupIndex = 3;
	





















};
obj88640_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88640_onTap_activeActionGroupIndex = -1;
		$("#obj88640").trigger("obj88640_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88640) {
				console.warn("de-queueing event obj88640." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88640").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88640_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88640 
hide_88642();
function hide_88642() {
	var selector = "#obj88640";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88640_onTap_runningActionsCount = obj88640_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88640_onTap_runningActionsCount = window.obj88640_onTap_runningActionsCount - 1;
if (window.obj88640_onTap_runningActionsCount < 0) {
	window.obj88640_onTap_runningActionsCount = 0;
} else if (window.obj88640_onTap_runningActionsCount == 0) {
	obj88640_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88642(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88640_onTap_runningActionsCount = window.obj88640_onTap_runningActionsCount - 1;
if (window.obj88640_onTap_runningActionsCount < 0) {
	window.obj88640_onTap_runningActionsCount = 0;
} else if (window.obj88640_onTap_runningActionsCount == 0) {
	obj88640_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88640_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88640_onTap_activeActionGroupIndex = -1;
		$("#obj88640").trigger("obj88640_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88640) {
				console.warn("de-queueing event obj88640." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88640").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88640_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88645
(function(){
	window.obj88640_onTap_runningActionsCount = obj88640_onTap_runningActionsCount + 1;

	var selector = "#obj88645";
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
					window.obj88640_onTap_runningActionsCount = window.obj88640_onTap_runningActionsCount - 1;
if (window.obj88640_onTap_runningActionsCount < 0) {
	window.obj88640_onTap_runningActionsCount = 0;
} else if (window.obj88640_onTap_runningActionsCount == 0) {
	obj88640_onTap_actionGroup2();
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
				window.obj88640_onTap_runningActionsCount = window.obj88640_onTap_runningActionsCount - 1;
if (window.obj88640_onTap_runningActionsCount < 0) {
	window.obj88640_onTap_runningActionsCount = 0;
} else if (window.obj88640_onTap_runningActionsCount == 0) {
	obj88640_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88640_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88640_onTap_activeActionGroupIndex = -1;
		$("#obj88640").trigger("obj88640_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88640) {
				console.warn("de-queueing event obj88640." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88640").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88640_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88650 
playAudio_88644();
function playAudio_88644() {
	window.obj88640_onTap_runningActionsCount = obj88640_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88650")[0];
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
		    window.obj88640_onTap_runningActionsCount = window.obj88640_onTap_runningActionsCount - 1;
if (window.obj88640_onTap_runningActionsCount < 0) {
	window.obj88640_onTap_runningActionsCount = 0;
} else if (window.obj88640_onTap_runningActionsCount == 0) {
	obj88640_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88640_onTap_runningActionsCount = window.obj88640_onTap_runningActionsCount - 1;
if (window.obj88640_onTap_runningActionsCount < 0) {
	window.obj88640_onTap_runningActionsCount = 0;
} else if (window.obj88640_onTap_runningActionsCount == 0) {
	obj88640_onTap_actionGroup3();
}
	}
}









};
obj88640_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88640_onTap_activeActionGroupIndex = -1;
		$("#obj88640").trigger("obj88640_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88640) {
				console.warn("de-queueing event obj88640." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88640").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88640_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj43547: Event Touch Down
 *
 */
$("#obj43547").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43547_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43547_onTap is still running");
	return;
}
var obj43547_onTap_runningActionsCount = 0;
var obj43547_onTap_loopCount = 0;
obj43547_onTap_actionGroup0();
});










/*
 *
 *   obj43544: Event Touch Down
 *
 */
$("#obj43544").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43544_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43544_onTap is still running");
	return;
}
var obj43544_onTap_runningActionsCount = 0;
var obj43544_onTap_loopCount = 0;
obj43544_onTap_actionGroup0();
});




















/*
 *
 *   obj67374: Event Touch Down
 *
 */
$("#obj67374").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67374_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67374_onTap is still running");
	return;
}
var obj67374_onTap_runningActionsCount = 0;
var obj67374_onTap_loopCount = 0;
obj67374_onTap_actionGroup0();
});










/*
 *
 *   obj67366: Event Touch Down
 *
 */
$("#obj67366").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67366_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67366_onTap is still running");
	return;
}
var obj67366_onTap_runningActionsCount = 0;
var obj67366_onTap_loopCount = 0;
obj67366_onTap_actionGroup0();
});










/*
 *
 *   obj88645: Event Touch Down
 *
 */
$("#obj88645").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88645_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88645_onTap is still running");
	return;
}
var obj88645_onTap_runningActionsCount = 0;
var obj88645_onTap_loopCount = 0;
obj88645_onTap_actionGroup0();
});










/*
 *
 *   obj88640: Event Touch Down
 *
 */
$("#obj88640").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88640_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88640_onTap is still running");
	return;
}
var obj88640_onTap_runningActionsCount = 0;
var obj88640_onTap_loopCount = 0;
obj88640_onTap_actionGroup0();
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
	
$("#obj43542").trigger('SCEventShow');
$("#obj43547").trigger('SCEventShow');
$("#obj43544").trigger('SCEventShow');
$("#obj43563").trigger('SCEventShow');
$("#obj67374").trigger('SCEventShow');
$("#obj67366").trigger('SCEventShow');
$("#obj88645").trigger('SCEventShow');
$("#obj88640").trigger('SCEventShow');
$("#obj88650").trigger('SCEventShow');
$("#obj94925").trigger('SCEventShow');
$("#obj67380").trigger('SCEventShow');
	
});