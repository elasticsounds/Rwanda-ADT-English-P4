pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 17543;
pubcoder.page.title = pubcoder.page.title || "65";
pubcoder.page.number = pubcoder.page.number || 65;
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
var obj74916_onTap_activeActionGroupIndex = -1;
var obj74916_onTap_runningActionsCount = 0;
var obj74916_onTap_loopCount = 0;
var obj74913_onTap_activeActionGroupIndex = -1;
var obj74913_onTap_runningActionsCount = 0;
var obj74913_onTap_loopCount = 0;
var obj74891_onTap_activeActionGroupIndex = -1;
var obj74891_onTap_runningActionsCount = 0;
var obj74891_onTap_loopCount = 0;
var obj74883_onTap_activeActionGroupIndex = -1;
var obj74883_onTap_runningActionsCount = 0;
var obj74883_onTap_loopCount = 0;
var obj87611_onTap_activeActionGroupIndex = -1;
var obj87611_onTap_runningActionsCount = 0;
var obj87611_onTap_loopCount = 0;
var obj87606_onTap_activeActionGroupIndex = -1;
var obj87606_onTap_runningActionsCount = 0;
var obj87606_onTap_loopCount = 0;
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
		
obj74916_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74916_onTap_activeActionGroupIndex = -1;
		$("#obj74916").trigger("obj74916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74916) {
				console.warn("de-queueing event obj74916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74916_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74918();
function goToPage_74918() {
	window.obj74916_onTap_runningActionsCount = obj74916_onTap_runningActionsCount + 1;
	$("#anchor389")[0].click();
	window.obj74916_onTap_runningActionsCount = window.obj74916_onTap_runningActionsCount - 1;
if (window.obj74916_onTap_runningActionsCount < 0) {
	window.obj74916_onTap_runningActionsCount = 0;
} else if (window.obj74916_onTap_runningActionsCount == 0) {
	obj74916_onTap_actionGroup1();
}
}





















};
obj74916_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74916_onTap_activeActionGroupIndex = -1;
		$("#obj74916").trigger("obj74916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74916) {
				console.warn("de-queueing event obj74916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74916_onTap_activeActionGroupIndex = 1;
	





















};
obj74913_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74913_onTap_activeActionGroupIndex = -1;
		$("#obj74913").trigger("obj74913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74913) {
				console.warn("de-queueing event obj74913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74913_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74915();
function goToPage_74915() {
	window.obj74913_onTap_runningActionsCount = obj74913_onTap_runningActionsCount + 1;
	$("#anchor390")[0].click();
	window.obj74913_onTap_runningActionsCount = window.obj74913_onTap_runningActionsCount - 1;
if (window.obj74913_onTap_runningActionsCount < 0) {
	window.obj74913_onTap_runningActionsCount = 0;
} else if (window.obj74913_onTap_runningActionsCount == 0) {
	obj74913_onTap_actionGroup1();
}
}





















};
obj74913_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74913_onTap_activeActionGroupIndex = -1;
		$("#obj74913").trigger("obj74913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74913) {
				console.warn("de-queueing event obj74913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74913_onTap_activeActionGroupIndex = 1;
	





















};
obj74891_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74891_onTap_activeActionGroupIndex = -1;
		$("#obj74891").trigger("obj74891_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74891) {
				console.warn("de-queueing event obj74891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74891_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74891 
hide_74894();
function hide_74894() {
	var selector = "#obj74891";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74891_onTap_runningActionsCount = obj74891_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74891_onTap_runningActionsCount = window.obj74891_onTap_runningActionsCount - 1;
if (window.obj74891_onTap_runningActionsCount < 0) {
	window.obj74891_onTap_runningActionsCount = 0;
} else if (window.obj74891_onTap_runningActionsCount == 0) {
	obj74891_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74894(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74891_onTap_runningActionsCount = window.obj74891_onTap_runningActionsCount - 1;
if (window.obj74891_onTap_runningActionsCount < 0) {
	window.obj74891_onTap_runningActionsCount = 0;
} else if (window.obj74891_onTap_runningActionsCount == 0) {
	obj74891_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj74881 
stopMovie_74893();
function stopMovie_74893() {
	window.obj74891_onTap_runningActionsCount = obj74891_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74881")[0];
	myVideo.pause();
	window.obj74891_onTap_runningActionsCount = window.obj74891_onTap_runningActionsCount - 1;
if (window.obj74891_onTap_runningActionsCount < 0) {
	window.obj74891_onTap_runningActionsCount = 0;
} else if (window.obj74891_onTap_runningActionsCount == 0) {
	obj74891_onTap_actionGroup1();
}
}
















};
obj74891_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74891_onTap_activeActionGroupIndex = -1;
		$("#obj74891").trigger("obj74891_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74891) {
				console.warn("de-queueing event obj74891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74891_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74883
(function(){
	window.obj74891_onTap_runningActionsCount = obj74891_onTap_runningActionsCount + 1;

	var selector = "#obj74883";
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
					window.obj74891_onTap_runningActionsCount = window.obj74891_onTap_runningActionsCount - 1;
if (window.obj74891_onTap_runningActionsCount < 0) {
	window.obj74891_onTap_runningActionsCount = 0;
} else if (window.obj74891_onTap_runningActionsCount == 0) {
	obj74891_onTap_actionGroup2();
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
				window.obj74891_onTap_runningActionsCount = window.obj74891_onTap_runningActionsCount - 1;
if (window.obj74891_onTap_runningActionsCount < 0) {
	window.obj74891_onTap_runningActionsCount = 0;
} else if (window.obj74891_onTap_runningActionsCount == 0) {
	obj74891_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74891_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74891_onTap_activeActionGroupIndex = -1;
		$("#obj74891").trigger("obj74891_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74891) {
				console.warn("de-queueing event obj74891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74891_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74881 
move_74896();
function move_74896() {
	window.obj74891_onTap_runningActionsCount = obj74891_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74881");
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
			window.obj74891_onTap_runningActionsCount = window.obj74891_onTap_runningActionsCount - 1;
if (window.obj74891_onTap_runningActionsCount < 0) {
	window.obj74891_onTap_runningActionsCount = 0;
} else if (window.obj74891_onTap_runningActionsCount == 0) {
	obj74891_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74891_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74891_onTap_activeActionGroupIndex = -1;
		$("#obj74891").trigger("obj74891_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74891) {
				console.warn("de-queueing event obj74891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74891_onTap_activeActionGroupIndex = 3;
	





















};
obj74883_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74883_onTap_activeActionGroupIndex = -1;
		$("#obj74883").trigger("obj74883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74883) {
				console.warn("de-queueing event obj74883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74883_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74883 
hide_74886();
function hide_74886() {
	var selector = "#obj74883";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74883_onTap_runningActionsCount = obj74883_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74883_onTap_runningActionsCount = window.obj74883_onTap_runningActionsCount - 1;
if (window.obj74883_onTap_runningActionsCount < 0) {
	window.obj74883_onTap_runningActionsCount = 0;
} else if (window.obj74883_onTap_runningActionsCount == 0) {
	obj74883_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74886(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74883_onTap_runningActionsCount = window.obj74883_onTap_runningActionsCount - 1;
if (window.obj74883_onTap_runningActionsCount < 0) {
	window.obj74883_onTap_runningActionsCount = 0;
} else if (window.obj74883_onTap_runningActionsCount == 0) {
	obj74883_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj74881 
playPauseMovie_74885();
function playPauseMovie_74885() {
	window.obj74883_onTap_runningActionsCount = obj74883_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74881")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj74883_onTap_runningActionsCount = window.obj74883_onTap_runningActionsCount - 1;
if (window.obj74883_onTap_runningActionsCount < 0) {
	window.obj74883_onTap_runningActionsCount = 0;
} else if (window.obj74883_onTap_runningActionsCount == 0) {
	obj74883_onTap_actionGroup1();
}
}

















};
obj74883_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74883_onTap_activeActionGroupIndex = -1;
		$("#obj74883").trigger("obj74883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74883) {
				console.warn("de-queueing event obj74883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74883_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74891
(function(){
	window.obj74883_onTap_runningActionsCount = obj74883_onTap_runningActionsCount + 1;

	var selector = "#obj74891";
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
					window.obj74883_onTap_runningActionsCount = window.obj74883_onTap_runningActionsCount - 1;
if (window.obj74883_onTap_runningActionsCount < 0) {
	window.obj74883_onTap_runningActionsCount = 0;
} else if (window.obj74883_onTap_runningActionsCount == 0) {
	obj74883_onTap_actionGroup2();
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
				window.obj74883_onTap_runningActionsCount = window.obj74883_onTap_runningActionsCount - 1;
if (window.obj74883_onTap_runningActionsCount < 0) {
	window.obj74883_onTap_runningActionsCount = 0;
} else if (window.obj74883_onTap_runningActionsCount == 0) {
	obj74883_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74883_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74883_onTap_activeActionGroupIndex = -1;
		$("#obj74883").trigger("obj74883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74883) {
				console.warn("de-queueing event obj74883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74883_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74881 
move_74888();
function move_74888() {
	window.obj74883_onTap_runningActionsCount = obj74883_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74881");
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
			window.obj74883_onTap_runningActionsCount = window.obj74883_onTap_runningActionsCount - 1;
if (window.obj74883_onTap_runningActionsCount < 0) {
	window.obj74883_onTap_runningActionsCount = 0;
} else if (window.obj74883_onTap_runningActionsCount == 0) {
	obj74883_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74883_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74883_onTap_activeActionGroupIndex = -1;
		$("#obj74883").trigger("obj74883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74883) {
				console.warn("de-queueing event obj74883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74883_onTap_activeActionGroupIndex = 3;
	





















};
obj87611_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87611_onTap_activeActionGroupIndex = -1;
		$("#obj87611").trigger("obj87611_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87611) {
				console.warn("de-queueing event obj87611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87611_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87616 
stopAudio_87613();
function stopAudio_87613() {
	window.obj87611_onTap_runningActionsCount = obj87611_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87616")[0];
	myAudio.pause();
	window.obj87611_onTap_runningActionsCount = window.obj87611_onTap_runningActionsCount - 1;
if (window.obj87611_onTap_runningActionsCount < 0) {
	window.obj87611_onTap_runningActionsCount = 0;
} else if (window.obj87611_onTap_runningActionsCount == 0) {
	obj87611_onTap_actionGroup1();
}
}








};
obj87611_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87611_onTap_activeActionGroupIndex = -1;
		$("#obj87611").trigger("obj87611_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87611) {
				console.warn("de-queueing event obj87611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87611_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87611 
hide_87614();
function hide_87614() {
	var selector = "#obj87611";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87611_onTap_runningActionsCount = obj87611_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87611_onTap_runningActionsCount = window.obj87611_onTap_runningActionsCount - 1;
if (window.obj87611_onTap_runningActionsCount < 0) {
	window.obj87611_onTap_runningActionsCount = 0;
} else if (window.obj87611_onTap_runningActionsCount == 0) {
	obj87611_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87614(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87611_onTap_runningActionsCount = window.obj87611_onTap_runningActionsCount - 1;
if (window.obj87611_onTap_runningActionsCount < 0) {
	window.obj87611_onTap_runningActionsCount = 0;
} else if (window.obj87611_onTap_runningActionsCount == 0) {
	obj87611_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87611_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87611_onTap_activeActionGroupIndex = -1;
		$("#obj87611").trigger("obj87611_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87611) {
				console.warn("de-queueing event obj87611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87611_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87606
(function(){
	window.obj87611_onTap_runningActionsCount = obj87611_onTap_runningActionsCount + 1;

	var selector = "#obj87606";
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
					window.obj87611_onTap_runningActionsCount = window.obj87611_onTap_runningActionsCount - 1;
if (window.obj87611_onTap_runningActionsCount < 0) {
	window.obj87611_onTap_runningActionsCount = 0;
} else if (window.obj87611_onTap_runningActionsCount == 0) {
	obj87611_onTap_actionGroup3();
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
				window.obj87611_onTap_runningActionsCount = window.obj87611_onTap_runningActionsCount - 1;
if (window.obj87611_onTap_runningActionsCount < 0) {
	window.obj87611_onTap_runningActionsCount = 0;
} else if (window.obj87611_onTap_runningActionsCount == 0) {
	obj87611_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87611_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87611_onTap_activeActionGroupIndex = -1;
		$("#obj87611").trigger("obj87611_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87611) {
				console.warn("de-queueing event obj87611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87611_onTap_activeActionGroupIndex = 3;
	





















};
obj87606_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87606_onTap_activeActionGroupIndex = -1;
		$("#obj87606").trigger("obj87606_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87606) {
				console.warn("de-queueing event obj87606." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87606").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87606_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87606 
hide_87608();
function hide_87608() {
	var selector = "#obj87606";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87606_onTap_runningActionsCount = obj87606_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87606_onTap_runningActionsCount = window.obj87606_onTap_runningActionsCount - 1;
if (window.obj87606_onTap_runningActionsCount < 0) {
	window.obj87606_onTap_runningActionsCount = 0;
} else if (window.obj87606_onTap_runningActionsCount == 0) {
	obj87606_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87608(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87606_onTap_runningActionsCount = window.obj87606_onTap_runningActionsCount - 1;
if (window.obj87606_onTap_runningActionsCount < 0) {
	window.obj87606_onTap_runningActionsCount = 0;
} else if (window.obj87606_onTap_runningActionsCount == 0) {
	obj87606_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87606_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87606_onTap_activeActionGroupIndex = -1;
		$("#obj87606").trigger("obj87606_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87606) {
				console.warn("de-queueing event obj87606." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87606").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87606_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87611
(function(){
	window.obj87606_onTap_runningActionsCount = obj87606_onTap_runningActionsCount + 1;

	var selector = "#obj87611";
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
					window.obj87606_onTap_runningActionsCount = window.obj87606_onTap_runningActionsCount - 1;
if (window.obj87606_onTap_runningActionsCount < 0) {
	window.obj87606_onTap_runningActionsCount = 0;
} else if (window.obj87606_onTap_runningActionsCount == 0) {
	obj87606_onTap_actionGroup2();
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
				window.obj87606_onTap_runningActionsCount = window.obj87606_onTap_runningActionsCount - 1;
if (window.obj87606_onTap_runningActionsCount < 0) {
	window.obj87606_onTap_runningActionsCount = 0;
} else if (window.obj87606_onTap_runningActionsCount == 0) {
	obj87606_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87606_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87606_onTap_activeActionGroupIndex = -1;
		$("#obj87606").trigger("obj87606_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87606) {
				console.warn("de-queueing event obj87606." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87606").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87606_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87616 
playAudio_87610();
function playAudio_87610() {
	window.obj87606_onTap_runningActionsCount = obj87606_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87616")[0];
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
		    window.obj87606_onTap_runningActionsCount = window.obj87606_onTap_runningActionsCount - 1;
if (window.obj87606_onTap_runningActionsCount < 0) {
	window.obj87606_onTap_runningActionsCount = 0;
} else if (window.obj87606_onTap_runningActionsCount == 0) {
	obj87606_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87606_onTap_runningActionsCount = window.obj87606_onTap_runningActionsCount - 1;
if (window.obj87606_onTap_runningActionsCount < 0) {
	window.obj87606_onTap_runningActionsCount = 0;
} else if (window.obj87606_onTap_runningActionsCount == 0) {
	obj87606_onTap_actionGroup3();
}
	}
}









};
obj87606_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87606_onTap_activeActionGroupIndex = -1;
		$("#obj87606").trigger("obj87606_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87606) {
				console.warn("de-queueing event obj87606." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87606").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87606_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj74916: Event Touch Down
 *
 */
$("#obj74916").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74916_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74916_onTap is still running");
	return;
}
var obj74916_onTap_runningActionsCount = 0;
var obj74916_onTap_loopCount = 0;
obj74916_onTap_actionGroup0();
});










/*
 *
 *   obj74913: Event Touch Down
 *
 */
$("#obj74913").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74913_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74913_onTap is still running");
	return;
}
var obj74913_onTap_runningActionsCount = 0;
var obj74913_onTap_loopCount = 0;
obj74913_onTap_actionGroup0();
});






























/*
 *
 *   obj74891: Event Touch Down
 *
 */
$("#obj74891").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74891_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74891_onTap is still running");
	return;
}
var obj74891_onTap_runningActionsCount = 0;
var obj74891_onTap_loopCount = 0;
obj74891_onTap_actionGroup0();
});










/*
 *
 *   obj74883: Event Touch Down
 *
 */
$("#obj74883").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74883_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74883_onTap is still running");
	return;
}
var obj74883_onTap_runningActionsCount = 0;
var obj74883_onTap_loopCount = 0;
obj74883_onTap_actionGroup0();
});










/*
 *
 *   obj87611: Event Touch Down
 *
 */
$("#obj87611").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87611_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87611_onTap is still running");
	return;
}
var obj87611_onTap_runningActionsCount = 0;
var obj87611_onTap_loopCount = 0;
obj87611_onTap_actionGroup0();
});










/*
 *
 *   obj87606: Event Touch Down
 *
 */
$("#obj87606").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87606_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87606_onTap is still running");
	return;
}
var obj87606_onTap_runningActionsCount = 0;
var obj87606_onTap_loopCount = 0;
obj87606_onTap_actionGroup0();
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
	
$("#obj74919").trigger('SCEventShow');
$("#obj74916").trigger('SCEventShow');
$("#obj74913").trigger('SCEventShow');
$("#obj74911").trigger('SCEventShow');
$("#obj74909").trigger('SCEventShow');
$("#obj74891").trigger('SCEventShow');
$("#obj74883").trigger('SCEventShow');
$("#obj87611").trigger('SCEventShow');
$("#obj87606").trigger('SCEventShow');
$("#obj87616").trigger('SCEventShow');
$("#obj94759").trigger('SCEventShow');
$("#obj74881").trigger('SCEventShow');
	
});