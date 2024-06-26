pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 17922;
pubcoder.page.title = pubcoder.page.title || "69";
pubcoder.page.number = pubcoder.page.number || 69;
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
var obj75268_onTap_activeActionGroupIndex = -1;
var obj75268_onTap_runningActionsCount = 0;
var obj75268_onTap_loopCount = 0;
var obj75265_onTap_activeActionGroupIndex = -1;
var obj75265_onTap_runningActionsCount = 0;
var obj75265_onTap_loopCount = 0;
var obj75243_onTap_activeActionGroupIndex = -1;
var obj75243_onTap_runningActionsCount = 0;
var obj75243_onTap_loopCount = 0;
var obj75235_onTap_activeActionGroupIndex = -1;
var obj75235_onTap_runningActionsCount = 0;
var obj75235_onTap_loopCount = 0;
var obj87663_onTap_activeActionGroupIndex = -1;
var obj87663_onTap_runningActionsCount = 0;
var obj87663_onTap_loopCount = 0;
var obj87658_onTap_activeActionGroupIndex = -1;
var obj87658_onTap_runningActionsCount = 0;
var obj87658_onTap_loopCount = 0;
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
		
obj75268_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75268_onTap_activeActionGroupIndex = -1;
		$("#obj75268").trigger("obj75268_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75268) {
				console.warn("de-queueing event obj75268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75268_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75270();
function goToPage_75270() {
	window.obj75268_onTap_runningActionsCount = obj75268_onTap_runningActionsCount + 1;
	$("#anchor411")[0].click();
	window.obj75268_onTap_runningActionsCount = window.obj75268_onTap_runningActionsCount - 1;
if (window.obj75268_onTap_runningActionsCount < 0) {
	window.obj75268_onTap_runningActionsCount = 0;
} else if (window.obj75268_onTap_runningActionsCount == 0) {
	obj75268_onTap_actionGroup1();
}
}





















};
obj75268_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75268_onTap_activeActionGroupIndex = -1;
		$("#obj75268").trigger("obj75268_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75268) {
				console.warn("de-queueing event obj75268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75268_onTap_activeActionGroupIndex = 1;
	





















};
obj75265_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75265_onTap_activeActionGroupIndex = -1;
		$("#obj75265").trigger("obj75265_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75265) {
				console.warn("de-queueing event obj75265." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75265").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75265_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75267();
function goToPage_75267() {
	window.obj75265_onTap_runningActionsCount = obj75265_onTap_runningActionsCount + 1;
	$("#anchor412")[0].click();
	window.obj75265_onTap_runningActionsCount = window.obj75265_onTap_runningActionsCount - 1;
if (window.obj75265_onTap_runningActionsCount < 0) {
	window.obj75265_onTap_runningActionsCount = 0;
} else if (window.obj75265_onTap_runningActionsCount == 0) {
	obj75265_onTap_actionGroup1();
}
}





















};
obj75265_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75265_onTap_activeActionGroupIndex = -1;
		$("#obj75265").trigger("obj75265_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75265) {
				console.warn("de-queueing event obj75265." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75265").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75265_onTap_activeActionGroupIndex = 1;
	





















};
obj75243_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75243_onTap_activeActionGroupIndex = -1;
		$("#obj75243").trigger("obj75243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75243) {
				console.warn("de-queueing event obj75243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75243_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75243 
hide_75246();
function hide_75246() {
	var selector = "#obj75243";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75243_onTap_runningActionsCount = obj75243_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75243_onTap_runningActionsCount = window.obj75243_onTap_runningActionsCount - 1;
if (window.obj75243_onTap_runningActionsCount < 0) {
	window.obj75243_onTap_runningActionsCount = 0;
} else if (window.obj75243_onTap_runningActionsCount == 0) {
	obj75243_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75246(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75243_onTap_runningActionsCount = window.obj75243_onTap_runningActionsCount - 1;
if (window.obj75243_onTap_runningActionsCount < 0) {
	window.obj75243_onTap_runningActionsCount = 0;
} else if (window.obj75243_onTap_runningActionsCount == 0) {
	obj75243_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj75233 
stopMovie_75245();
function stopMovie_75245() {
	window.obj75243_onTap_runningActionsCount = obj75243_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75233")[0];
	myVideo.pause();
	window.obj75243_onTap_runningActionsCount = window.obj75243_onTap_runningActionsCount - 1;
if (window.obj75243_onTap_runningActionsCount < 0) {
	window.obj75243_onTap_runningActionsCount = 0;
} else if (window.obj75243_onTap_runningActionsCount == 0) {
	obj75243_onTap_actionGroup1();
}
}
















};
obj75243_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75243_onTap_activeActionGroupIndex = -1;
		$("#obj75243").trigger("obj75243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75243) {
				console.warn("de-queueing event obj75243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75243_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75235
(function(){
	window.obj75243_onTap_runningActionsCount = obj75243_onTap_runningActionsCount + 1;

	var selector = "#obj75235";
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
					window.obj75243_onTap_runningActionsCount = window.obj75243_onTap_runningActionsCount - 1;
if (window.obj75243_onTap_runningActionsCount < 0) {
	window.obj75243_onTap_runningActionsCount = 0;
} else if (window.obj75243_onTap_runningActionsCount == 0) {
	obj75243_onTap_actionGroup2();
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
				window.obj75243_onTap_runningActionsCount = window.obj75243_onTap_runningActionsCount - 1;
if (window.obj75243_onTap_runningActionsCount < 0) {
	window.obj75243_onTap_runningActionsCount = 0;
} else if (window.obj75243_onTap_runningActionsCount == 0) {
	obj75243_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75243_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75243_onTap_activeActionGroupIndex = -1;
		$("#obj75243").trigger("obj75243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75243) {
				console.warn("de-queueing event obj75243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75243_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75233 
move_75248();
function move_75248() {
	window.obj75243_onTap_runningActionsCount = obj75243_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75233");
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
			window.obj75243_onTap_runningActionsCount = window.obj75243_onTap_runningActionsCount - 1;
if (window.obj75243_onTap_runningActionsCount < 0) {
	window.obj75243_onTap_runningActionsCount = 0;
} else if (window.obj75243_onTap_runningActionsCount == 0) {
	obj75243_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75243_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75243_onTap_activeActionGroupIndex = -1;
		$("#obj75243").trigger("obj75243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75243) {
				console.warn("de-queueing event obj75243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75243_onTap_activeActionGroupIndex = 3;
	





















};
obj75235_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75235_onTap_activeActionGroupIndex = -1;
		$("#obj75235").trigger("obj75235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75235) {
				console.warn("de-queueing event obj75235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75235_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75235 
hide_75238();
function hide_75238() {
	var selector = "#obj75235";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75235_onTap_runningActionsCount = obj75235_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75235_onTap_runningActionsCount = window.obj75235_onTap_runningActionsCount - 1;
if (window.obj75235_onTap_runningActionsCount < 0) {
	window.obj75235_onTap_runningActionsCount = 0;
} else if (window.obj75235_onTap_runningActionsCount == 0) {
	obj75235_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75238(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75235_onTap_runningActionsCount = window.obj75235_onTap_runningActionsCount - 1;
if (window.obj75235_onTap_runningActionsCount < 0) {
	window.obj75235_onTap_runningActionsCount = 0;
} else if (window.obj75235_onTap_runningActionsCount == 0) {
	obj75235_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj75233 
playPauseMovie_75237();
function playPauseMovie_75237() {
	window.obj75235_onTap_runningActionsCount = obj75235_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75233")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj75235_onTap_runningActionsCount = window.obj75235_onTap_runningActionsCount - 1;
if (window.obj75235_onTap_runningActionsCount < 0) {
	window.obj75235_onTap_runningActionsCount = 0;
} else if (window.obj75235_onTap_runningActionsCount == 0) {
	obj75235_onTap_actionGroup1();
}
}

















};
obj75235_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75235_onTap_activeActionGroupIndex = -1;
		$("#obj75235").trigger("obj75235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75235) {
				console.warn("de-queueing event obj75235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75235_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75243
(function(){
	window.obj75235_onTap_runningActionsCount = obj75235_onTap_runningActionsCount + 1;

	var selector = "#obj75243";
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
					window.obj75235_onTap_runningActionsCount = window.obj75235_onTap_runningActionsCount - 1;
if (window.obj75235_onTap_runningActionsCount < 0) {
	window.obj75235_onTap_runningActionsCount = 0;
} else if (window.obj75235_onTap_runningActionsCount == 0) {
	obj75235_onTap_actionGroup2();
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
				window.obj75235_onTap_runningActionsCount = window.obj75235_onTap_runningActionsCount - 1;
if (window.obj75235_onTap_runningActionsCount < 0) {
	window.obj75235_onTap_runningActionsCount = 0;
} else if (window.obj75235_onTap_runningActionsCount == 0) {
	obj75235_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75235_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75235_onTap_activeActionGroupIndex = -1;
		$("#obj75235").trigger("obj75235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75235) {
				console.warn("de-queueing event obj75235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75235_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75233 
move_75240();
function move_75240() {
	window.obj75235_onTap_runningActionsCount = obj75235_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75233");
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
			window.obj75235_onTap_runningActionsCount = window.obj75235_onTap_runningActionsCount - 1;
if (window.obj75235_onTap_runningActionsCount < 0) {
	window.obj75235_onTap_runningActionsCount = 0;
} else if (window.obj75235_onTap_runningActionsCount == 0) {
	obj75235_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75235_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75235_onTap_activeActionGroupIndex = -1;
		$("#obj75235").trigger("obj75235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75235) {
				console.warn("de-queueing event obj75235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75235_onTap_activeActionGroupIndex = 3;
	





















};
obj87663_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87663_onTap_activeActionGroupIndex = -1;
		$("#obj87663").trigger("obj87663_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87663) {
				console.warn("de-queueing event obj87663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87663_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87668 
stopAudio_87665();
function stopAudio_87665() {
	window.obj87663_onTap_runningActionsCount = obj87663_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87668")[0];
	myAudio.pause();
	window.obj87663_onTap_runningActionsCount = window.obj87663_onTap_runningActionsCount - 1;
if (window.obj87663_onTap_runningActionsCount < 0) {
	window.obj87663_onTap_runningActionsCount = 0;
} else if (window.obj87663_onTap_runningActionsCount == 0) {
	obj87663_onTap_actionGroup1();
}
}








};
obj87663_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87663_onTap_activeActionGroupIndex = -1;
		$("#obj87663").trigger("obj87663_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87663) {
				console.warn("de-queueing event obj87663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87663_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87663 
hide_87666();
function hide_87666() {
	var selector = "#obj87663";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87663_onTap_runningActionsCount = obj87663_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87663_onTap_runningActionsCount = window.obj87663_onTap_runningActionsCount - 1;
if (window.obj87663_onTap_runningActionsCount < 0) {
	window.obj87663_onTap_runningActionsCount = 0;
} else if (window.obj87663_onTap_runningActionsCount == 0) {
	obj87663_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87666(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87663_onTap_runningActionsCount = window.obj87663_onTap_runningActionsCount - 1;
if (window.obj87663_onTap_runningActionsCount < 0) {
	window.obj87663_onTap_runningActionsCount = 0;
} else if (window.obj87663_onTap_runningActionsCount == 0) {
	obj87663_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87663_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87663_onTap_activeActionGroupIndex = -1;
		$("#obj87663").trigger("obj87663_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87663) {
				console.warn("de-queueing event obj87663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87663_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87658
(function(){
	window.obj87663_onTap_runningActionsCount = obj87663_onTap_runningActionsCount + 1;

	var selector = "#obj87658";
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
					window.obj87663_onTap_runningActionsCount = window.obj87663_onTap_runningActionsCount - 1;
if (window.obj87663_onTap_runningActionsCount < 0) {
	window.obj87663_onTap_runningActionsCount = 0;
} else if (window.obj87663_onTap_runningActionsCount == 0) {
	obj87663_onTap_actionGroup3();
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
				window.obj87663_onTap_runningActionsCount = window.obj87663_onTap_runningActionsCount - 1;
if (window.obj87663_onTap_runningActionsCount < 0) {
	window.obj87663_onTap_runningActionsCount = 0;
} else if (window.obj87663_onTap_runningActionsCount == 0) {
	obj87663_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87663_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87663_onTap_activeActionGroupIndex = -1;
		$("#obj87663").trigger("obj87663_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87663) {
				console.warn("de-queueing event obj87663." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87663").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87663_onTap_activeActionGroupIndex = 3;
	





















};
obj87658_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87658_onTap_activeActionGroupIndex = -1;
		$("#obj87658").trigger("obj87658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87658) {
				console.warn("de-queueing event obj87658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87658_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87658 
hide_87660();
function hide_87660() {
	var selector = "#obj87658";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87658_onTap_runningActionsCount = obj87658_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87658_onTap_runningActionsCount = window.obj87658_onTap_runningActionsCount - 1;
if (window.obj87658_onTap_runningActionsCount < 0) {
	window.obj87658_onTap_runningActionsCount = 0;
} else if (window.obj87658_onTap_runningActionsCount == 0) {
	obj87658_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87660(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87658_onTap_runningActionsCount = window.obj87658_onTap_runningActionsCount - 1;
if (window.obj87658_onTap_runningActionsCount < 0) {
	window.obj87658_onTap_runningActionsCount = 0;
} else if (window.obj87658_onTap_runningActionsCount == 0) {
	obj87658_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87658_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87658_onTap_activeActionGroupIndex = -1;
		$("#obj87658").trigger("obj87658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87658) {
				console.warn("de-queueing event obj87658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87658_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87663
(function(){
	window.obj87658_onTap_runningActionsCount = obj87658_onTap_runningActionsCount + 1;

	var selector = "#obj87663";
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
					window.obj87658_onTap_runningActionsCount = window.obj87658_onTap_runningActionsCount - 1;
if (window.obj87658_onTap_runningActionsCount < 0) {
	window.obj87658_onTap_runningActionsCount = 0;
} else if (window.obj87658_onTap_runningActionsCount == 0) {
	obj87658_onTap_actionGroup2();
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
				window.obj87658_onTap_runningActionsCount = window.obj87658_onTap_runningActionsCount - 1;
if (window.obj87658_onTap_runningActionsCount < 0) {
	window.obj87658_onTap_runningActionsCount = 0;
} else if (window.obj87658_onTap_runningActionsCount == 0) {
	obj87658_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87658_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87658_onTap_activeActionGroupIndex = -1;
		$("#obj87658").trigger("obj87658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87658) {
				console.warn("de-queueing event obj87658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87658_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87668 
playAudio_87662();
function playAudio_87662() {
	window.obj87658_onTap_runningActionsCount = obj87658_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87668")[0];
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
		    window.obj87658_onTap_runningActionsCount = window.obj87658_onTap_runningActionsCount - 1;
if (window.obj87658_onTap_runningActionsCount < 0) {
	window.obj87658_onTap_runningActionsCount = 0;
} else if (window.obj87658_onTap_runningActionsCount == 0) {
	obj87658_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87658_onTap_runningActionsCount = window.obj87658_onTap_runningActionsCount - 1;
if (window.obj87658_onTap_runningActionsCount < 0) {
	window.obj87658_onTap_runningActionsCount = 0;
} else if (window.obj87658_onTap_runningActionsCount == 0) {
	obj87658_onTap_actionGroup3();
}
	}
}









};
obj87658_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87658_onTap_activeActionGroupIndex = -1;
		$("#obj87658").trigger("obj87658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87658) {
				console.warn("de-queueing event obj87658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87658_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75268: Event Touch Down
 *
 */
$("#obj75268").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75268_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75268_onTap is still running");
	return;
}
var obj75268_onTap_runningActionsCount = 0;
var obj75268_onTap_loopCount = 0;
obj75268_onTap_actionGroup0();
});










/*
 *
 *   obj75265: Event Touch Down
 *
 */
$("#obj75265").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75265_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75265_onTap is still running");
	return;
}
var obj75265_onTap_runningActionsCount = 0;
var obj75265_onTap_loopCount = 0;
obj75265_onTap_actionGroup0();
});






























/*
 *
 *   obj75243: Event Touch Down
 *
 */
$("#obj75243").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75243_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75243_onTap is still running");
	return;
}
var obj75243_onTap_runningActionsCount = 0;
var obj75243_onTap_loopCount = 0;
obj75243_onTap_actionGroup0();
});










/*
 *
 *   obj75235: Event Touch Down
 *
 */
$("#obj75235").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75235_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75235_onTap is still running");
	return;
}
var obj75235_onTap_runningActionsCount = 0;
var obj75235_onTap_loopCount = 0;
obj75235_onTap_actionGroup0();
});










/*
 *
 *   obj87663: Event Touch Down
 *
 */
$("#obj87663").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87663_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87663_onTap is still running");
	return;
}
var obj87663_onTap_runningActionsCount = 0;
var obj87663_onTap_loopCount = 0;
obj87663_onTap_actionGroup0();
});










/*
 *
 *   obj87658: Event Touch Down
 *
 */
$("#obj87658").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87658_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87658_onTap is still running");
	return;
}
var obj87658_onTap_runningActionsCount = 0;
var obj87658_onTap_loopCount = 0;
obj87658_onTap_actionGroup0();
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
	
$("#obj75271").trigger('SCEventShow');
$("#obj75268").trigger('SCEventShow');
$("#obj75265").trigger('SCEventShow');
$("#obj75263").trigger('SCEventShow');
$("#obj75261").trigger('SCEventShow');
$("#obj75243").trigger('SCEventShow');
$("#obj75235").trigger('SCEventShow');
$("#obj87663").trigger('SCEventShow');
$("#obj87658").trigger('SCEventShow');
$("#obj87668").trigger('SCEventShow');
$("#obj94767").trigger('SCEventShow');
$("#obj75233").trigger('SCEventShow');
	
});