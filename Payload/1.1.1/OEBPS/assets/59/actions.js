pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 15197;
pubcoder.page.title = pubcoder.page.title || "59";
pubcoder.page.number = pubcoder.page.number || 59;
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
var obj74090_onTap_activeActionGroupIndex = -1;
var obj74090_onTap_runningActionsCount = 0;
var obj74090_onTap_loopCount = 0;
var obj74087_onTap_activeActionGroupIndex = -1;
var obj74087_onTap_runningActionsCount = 0;
var obj74087_onTap_loopCount = 0;
var obj74058_onTap_activeActionGroupIndex = -1;
var obj74058_onTap_runningActionsCount = 0;
var obj74058_onTap_loopCount = 0;
var obj74050_onTap_activeActionGroupIndex = -1;
var obj74050_onTap_runningActionsCount = 0;
var obj74050_onTap_loopCount = 0;
var obj87435_onTap_activeActionGroupIndex = -1;
var obj87435_onTap_runningActionsCount = 0;
var obj87435_onTap_loopCount = 0;
var obj87430_onTap_activeActionGroupIndex = -1;
var obj87430_onTap_runningActionsCount = 0;
var obj87430_onTap_loopCount = 0;
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
		
obj74090_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74090_onTap_activeActionGroupIndex = -1;
		$("#obj74090").trigger("obj74090_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74090) {
				console.warn("de-queueing event obj74090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74090_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74092();
function goToPage_74092() {
	window.obj74090_onTap_runningActionsCount = obj74090_onTap_runningActionsCount + 1;
	$("#anchor352")[0].click();
	window.obj74090_onTap_runningActionsCount = window.obj74090_onTap_runningActionsCount - 1;
if (window.obj74090_onTap_runningActionsCount < 0) {
	window.obj74090_onTap_runningActionsCount = 0;
} else if (window.obj74090_onTap_runningActionsCount == 0) {
	obj74090_onTap_actionGroup1();
}
}





















};
obj74090_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74090_onTap_activeActionGroupIndex = -1;
		$("#obj74090").trigger("obj74090_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74090) {
				console.warn("de-queueing event obj74090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74090_onTap_activeActionGroupIndex = 1;
	





















};
obj74087_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74087_onTap_activeActionGroupIndex = -1;
		$("#obj74087").trigger("obj74087_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74087) {
				console.warn("de-queueing event obj74087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74087_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74089();
function goToPage_74089() {
	window.obj74087_onTap_runningActionsCount = obj74087_onTap_runningActionsCount + 1;
	$("#anchor353")[0].click();
	window.obj74087_onTap_runningActionsCount = window.obj74087_onTap_runningActionsCount - 1;
if (window.obj74087_onTap_runningActionsCount < 0) {
	window.obj74087_onTap_runningActionsCount = 0;
} else if (window.obj74087_onTap_runningActionsCount == 0) {
	obj74087_onTap_actionGroup1();
}
}





















};
obj74087_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74087_onTap_activeActionGroupIndex = -1;
		$("#obj74087").trigger("obj74087_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74087) {
				console.warn("de-queueing event obj74087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74087_onTap_activeActionGroupIndex = 1;
	





















};
obj74058_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74058_onTap_activeActionGroupIndex = -1;
		$("#obj74058").trigger("obj74058_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74058) {
				console.warn("de-queueing event obj74058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74058_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74058 
hide_74061();
function hide_74061() {
	var selector = "#obj74058";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74058_onTap_runningActionsCount = obj74058_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74058_onTap_runningActionsCount = window.obj74058_onTap_runningActionsCount - 1;
if (window.obj74058_onTap_runningActionsCount < 0) {
	window.obj74058_onTap_runningActionsCount = 0;
} else if (window.obj74058_onTap_runningActionsCount == 0) {
	obj74058_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74061(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74058_onTap_runningActionsCount = window.obj74058_onTap_runningActionsCount - 1;
if (window.obj74058_onTap_runningActionsCount < 0) {
	window.obj74058_onTap_runningActionsCount = 0;
} else if (window.obj74058_onTap_runningActionsCount == 0) {
	obj74058_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj74048 
stopMovie_74060();
function stopMovie_74060() {
	window.obj74058_onTap_runningActionsCount = obj74058_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74048")[0];
	myVideo.pause();
	window.obj74058_onTap_runningActionsCount = window.obj74058_onTap_runningActionsCount - 1;
if (window.obj74058_onTap_runningActionsCount < 0) {
	window.obj74058_onTap_runningActionsCount = 0;
} else if (window.obj74058_onTap_runningActionsCount == 0) {
	obj74058_onTap_actionGroup1();
}
}
















};
obj74058_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74058_onTap_activeActionGroupIndex = -1;
		$("#obj74058").trigger("obj74058_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74058) {
				console.warn("de-queueing event obj74058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74058_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74050
(function(){
	window.obj74058_onTap_runningActionsCount = obj74058_onTap_runningActionsCount + 1;

	var selector = "#obj74050";
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
					window.obj74058_onTap_runningActionsCount = window.obj74058_onTap_runningActionsCount - 1;
if (window.obj74058_onTap_runningActionsCount < 0) {
	window.obj74058_onTap_runningActionsCount = 0;
} else if (window.obj74058_onTap_runningActionsCount == 0) {
	obj74058_onTap_actionGroup2();
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
				window.obj74058_onTap_runningActionsCount = window.obj74058_onTap_runningActionsCount - 1;
if (window.obj74058_onTap_runningActionsCount < 0) {
	window.obj74058_onTap_runningActionsCount = 0;
} else if (window.obj74058_onTap_runningActionsCount == 0) {
	obj74058_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74058_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74058_onTap_activeActionGroupIndex = -1;
		$("#obj74058").trigger("obj74058_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74058) {
				console.warn("de-queueing event obj74058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74058_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74048 
move_74063();
function move_74063() {
	window.obj74058_onTap_runningActionsCount = obj74058_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74048");
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
			window.obj74058_onTap_runningActionsCount = window.obj74058_onTap_runningActionsCount - 1;
if (window.obj74058_onTap_runningActionsCount < 0) {
	window.obj74058_onTap_runningActionsCount = 0;
} else if (window.obj74058_onTap_runningActionsCount == 0) {
	obj74058_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74058_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74058_onTap_activeActionGroupIndex = -1;
		$("#obj74058").trigger("obj74058_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74058) {
				console.warn("de-queueing event obj74058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74058_onTap_activeActionGroupIndex = 3;
	





















};
obj74050_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74050_onTap_activeActionGroupIndex = -1;
		$("#obj74050").trigger("obj74050_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74050) {
				console.warn("de-queueing event obj74050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74050_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74050 
hide_74053();
function hide_74053() {
	var selector = "#obj74050";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74050_onTap_runningActionsCount = obj74050_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74050_onTap_runningActionsCount = window.obj74050_onTap_runningActionsCount - 1;
if (window.obj74050_onTap_runningActionsCount < 0) {
	window.obj74050_onTap_runningActionsCount = 0;
} else if (window.obj74050_onTap_runningActionsCount == 0) {
	obj74050_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74053(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74050_onTap_runningActionsCount = window.obj74050_onTap_runningActionsCount - 1;
if (window.obj74050_onTap_runningActionsCount < 0) {
	window.obj74050_onTap_runningActionsCount = 0;
} else if (window.obj74050_onTap_runningActionsCount == 0) {
	obj74050_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj74048 
playPauseMovie_74052();
function playPauseMovie_74052() {
	window.obj74050_onTap_runningActionsCount = obj74050_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74048")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj74050_onTap_runningActionsCount = window.obj74050_onTap_runningActionsCount - 1;
if (window.obj74050_onTap_runningActionsCount < 0) {
	window.obj74050_onTap_runningActionsCount = 0;
} else if (window.obj74050_onTap_runningActionsCount == 0) {
	obj74050_onTap_actionGroup1();
}
}

















};
obj74050_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74050_onTap_activeActionGroupIndex = -1;
		$("#obj74050").trigger("obj74050_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74050) {
				console.warn("de-queueing event obj74050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74050_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74058
(function(){
	window.obj74050_onTap_runningActionsCount = obj74050_onTap_runningActionsCount + 1;

	var selector = "#obj74058";
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
					window.obj74050_onTap_runningActionsCount = window.obj74050_onTap_runningActionsCount - 1;
if (window.obj74050_onTap_runningActionsCount < 0) {
	window.obj74050_onTap_runningActionsCount = 0;
} else if (window.obj74050_onTap_runningActionsCount == 0) {
	obj74050_onTap_actionGroup2();
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
				window.obj74050_onTap_runningActionsCount = window.obj74050_onTap_runningActionsCount - 1;
if (window.obj74050_onTap_runningActionsCount < 0) {
	window.obj74050_onTap_runningActionsCount = 0;
} else if (window.obj74050_onTap_runningActionsCount == 0) {
	obj74050_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74050_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74050_onTap_activeActionGroupIndex = -1;
		$("#obj74050").trigger("obj74050_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74050) {
				console.warn("de-queueing event obj74050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74050_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74048 
move_74055();
function move_74055() {
	window.obj74050_onTap_runningActionsCount = obj74050_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74048");
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
			window.obj74050_onTap_runningActionsCount = window.obj74050_onTap_runningActionsCount - 1;
if (window.obj74050_onTap_runningActionsCount < 0) {
	window.obj74050_onTap_runningActionsCount = 0;
} else if (window.obj74050_onTap_runningActionsCount == 0) {
	obj74050_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74050_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74050_onTap_activeActionGroupIndex = -1;
		$("#obj74050").trigger("obj74050_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74050) {
				console.warn("de-queueing event obj74050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74050_onTap_activeActionGroupIndex = 3;
	





















};
obj87435_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87435_onTap_activeActionGroupIndex = -1;
		$("#obj87435").trigger("obj87435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87435) {
				console.warn("de-queueing event obj87435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87435_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87440 
stopAudio_87437();
function stopAudio_87437() {
	window.obj87435_onTap_runningActionsCount = obj87435_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87440")[0];
	myAudio.pause();
	window.obj87435_onTap_runningActionsCount = window.obj87435_onTap_runningActionsCount - 1;
if (window.obj87435_onTap_runningActionsCount < 0) {
	window.obj87435_onTap_runningActionsCount = 0;
} else if (window.obj87435_onTap_runningActionsCount == 0) {
	obj87435_onTap_actionGroup1();
}
}








};
obj87435_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87435_onTap_activeActionGroupIndex = -1;
		$("#obj87435").trigger("obj87435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87435) {
				console.warn("de-queueing event obj87435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87435_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87435 
hide_87438();
function hide_87438() {
	var selector = "#obj87435";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87435_onTap_runningActionsCount = obj87435_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87435_onTap_runningActionsCount = window.obj87435_onTap_runningActionsCount - 1;
if (window.obj87435_onTap_runningActionsCount < 0) {
	window.obj87435_onTap_runningActionsCount = 0;
} else if (window.obj87435_onTap_runningActionsCount == 0) {
	obj87435_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87438(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87435_onTap_runningActionsCount = window.obj87435_onTap_runningActionsCount - 1;
if (window.obj87435_onTap_runningActionsCount < 0) {
	window.obj87435_onTap_runningActionsCount = 0;
} else if (window.obj87435_onTap_runningActionsCount == 0) {
	obj87435_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87435_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87435_onTap_activeActionGroupIndex = -1;
		$("#obj87435").trigger("obj87435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87435) {
				console.warn("de-queueing event obj87435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87435_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87430
(function(){
	window.obj87435_onTap_runningActionsCount = obj87435_onTap_runningActionsCount + 1;

	var selector = "#obj87430";
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
					window.obj87435_onTap_runningActionsCount = window.obj87435_onTap_runningActionsCount - 1;
if (window.obj87435_onTap_runningActionsCount < 0) {
	window.obj87435_onTap_runningActionsCount = 0;
} else if (window.obj87435_onTap_runningActionsCount == 0) {
	obj87435_onTap_actionGroup3();
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
				window.obj87435_onTap_runningActionsCount = window.obj87435_onTap_runningActionsCount - 1;
if (window.obj87435_onTap_runningActionsCount < 0) {
	window.obj87435_onTap_runningActionsCount = 0;
} else if (window.obj87435_onTap_runningActionsCount == 0) {
	obj87435_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87435_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87435_onTap_activeActionGroupIndex = -1;
		$("#obj87435").trigger("obj87435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87435) {
				console.warn("de-queueing event obj87435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87435_onTap_activeActionGroupIndex = 3;
	





















};
obj87430_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87430_onTap_activeActionGroupIndex = -1;
		$("#obj87430").trigger("obj87430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87430) {
				console.warn("de-queueing event obj87430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87430_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87430 
hide_87432();
function hide_87432() {
	var selector = "#obj87430";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87430_onTap_runningActionsCount = obj87430_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87430_onTap_runningActionsCount = window.obj87430_onTap_runningActionsCount - 1;
if (window.obj87430_onTap_runningActionsCount < 0) {
	window.obj87430_onTap_runningActionsCount = 0;
} else if (window.obj87430_onTap_runningActionsCount == 0) {
	obj87430_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87432(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87430_onTap_runningActionsCount = window.obj87430_onTap_runningActionsCount - 1;
if (window.obj87430_onTap_runningActionsCount < 0) {
	window.obj87430_onTap_runningActionsCount = 0;
} else if (window.obj87430_onTap_runningActionsCount == 0) {
	obj87430_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87430_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87430_onTap_activeActionGroupIndex = -1;
		$("#obj87430").trigger("obj87430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87430) {
				console.warn("de-queueing event obj87430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87430_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87435
(function(){
	window.obj87430_onTap_runningActionsCount = obj87430_onTap_runningActionsCount + 1;

	var selector = "#obj87435";
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
					window.obj87430_onTap_runningActionsCount = window.obj87430_onTap_runningActionsCount - 1;
if (window.obj87430_onTap_runningActionsCount < 0) {
	window.obj87430_onTap_runningActionsCount = 0;
} else if (window.obj87430_onTap_runningActionsCount == 0) {
	obj87430_onTap_actionGroup2();
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
				window.obj87430_onTap_runningActionsCount = window.obj87430_onTap_runningActionsCount - 1;
if (window.obj87430_onTap_runningActionsCount < 0) {
	window.obj87430_onTap_runningActionsCount = 0;
} else if (window.obj87430_onTap_runningActionsCount == 0) {
	obj87430_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87430_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87430_onTap_activeActionGroupIndex = -1;
		$("#obj87430").trigger("obj87430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87430) {
				console.warn("de-queueing event obj87430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87430_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87440 
playAudio_87434();
function playAudio_87434() {
	window.obj87430_onTap_runningActionsCount = obj87430_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87440")[0];
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
		    window.obj87430_onTap_runningActionsCount = window.obj87430_onTap_runningActionsCount - 1;
if (window.obj87430_onTap_runningActionsCount < 0) {
	window.obj87430_onTap_runningActionsCount = 0;
} else if (window.obj87430_onTap_runningActionsCount == 0) {
	obj87430_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87430_onTap_runningActionsCount = window.obj87430_onTap_runningActionsCount - 1;
if (window.obj87430_onTap_runningActionsCount < 0) {
	window.obj87430_onTap_runningActionsCount = 0;
} else if (window.obj87430_onTap_runningActionsCount == 0) {
	obj87430_onTap_actionGroup3();
}
	}
}









};
obj87430_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87430_onTap_activeActionGroupIndex = -1;
		$("#obj87430").trigger("obj87430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87430) {
				console.warn("de-queueing event obj87430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87430_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj74090: Event Touch Down
 *
 */
$("#obj74090").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74090_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74090_onTap is still running");
	return;
}
var obj74090_onTap_runningActionsCount = 0;
var obj74090_onTap_loopCount = 0;
obj74090_onTap_actionGroup0();
});










/*
 *
 *   obj74087: Event Touch Down
 *
 */
$("#obj74087").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74087_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74087_onTap is still running");
	return;
}
var obj74087_onTap_runningActionsCount = 0;
var obj74087_onTap_loopCount = 0;
obj74087_onTap_actionGroup0();
});


















































/*
 *
 *   obj74058: Event Touch Down
 *
 */
$("#obj74058").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74058_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74058_onTap is still running");
	return;
}
var obj74058_onTap_runningActionsCount = 0;
var obj74058_onTap_loopCount = 0;
obj74058_onTap_actionGroup0();
});










/*
 *
 *   obj74050: Event Touch Down
 *
 */
$("#obj74050").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74050_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74050_onTap is still running");
	return;
}
var obj74050_onTap_runningActionsCount = 0;
var obj74050_onTap_loopCount = 0;
obj74050_onTap_actionGroup0();
});










/*
 *
 *   obj87435: Event Touch Down
 *
 */
$("#obj87435").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87435_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87435_onTap is still running");
	return;
}
var obj87435_onTap_runningActionsCount = 0;
var obj87435_onTap_loopCount = 0;
obj87435_onTap_actionGroup0();
});










/*
 *
 *   obj87430: Event Touch Down
 *
 */
$("#obj87430").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87430_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87430_onTap is still running");
	return;
}
var obj87430_onTap_runningActionsCount = 0;
var obj87430_onTap_loopCount = 0;
obj87430_onTap_actionGroup0();
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
	
$("#obj74093").trigger('SCEventShow');
$("#obj74090").trigger('SCEventShow');
$("#obj74087").trigger('SCEventShow');
$("#obj74085").trigger('SCEventShow');
$("#obj74083").trigger('SCEventShow');
$("#obj74081").trigger('SCEventShow');
$("#obj74079").trigger('SCEventShow');
$("#obj74058").trigger('SCEventShow');
$("#obj74050").trigger('SCEventShow');
$("#obj87435").trigger('SCEventShow');
$("#obj87430").trigger('SCEventShow');
$("#obj87440").trigger('SCEventShow');
$("#obj94747").trigger('SCEventShow');
$("#obj74048").trigger('SCEventShow');
	
});