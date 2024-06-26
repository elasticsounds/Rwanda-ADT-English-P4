pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 3389;
pubcoder.page.title = pubcoder.page.title || "21";
pubcoder.page.number = pubcoder.page.number || 21;
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
var obj3424_onTap_activeActionGroupIndex = -1;
var obj3424_onTap_runningActionsCount = 0;
var obj3424_onTap_loopCount = 0;
var obj3421_onTap_activeActionGroupIndex = -1;
var obj3421_onTap_runningActionsCount = 0;
var obj3421_onTap_loopCount = 0;
var obj65294_onTap_activeActionGroupIndex = -1;
var obj65294_onTap_runningActionsCount = 0;
var obj65294_onTap_loopCount = 0;
var obj65286_onTap_activeActionGroupIndex = -1;
var obj65286_onTap_runningActionsCount = 0;
var obj65286_onTap_loopCount = 0;
var obj87061_onTap_activeActionGroupIndex = -1;
var obj87061_onTap_runningActionsCount = 0;
var obj87061_onTap_loopCount = 0;
var obj87056_onTap_activeActionGroupIndex = -1;
var obj87056_onTap_runningActionsCount = 0;
var obj87056_onTap_loopCount = 0;
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
		
obj3424_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3424_onTap_activeActionGroupIndex = -1;
		$("#obj3424").trigger("obj3424_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3424) {
				console.warn("de-queueing event obj3424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3424_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3426();
function goToPage_3426() {
	window.obj3424_onTap_runningActionsCount = obj3424_onTap_runningActionsCount + 1;
	$("#anchor131")[0].click();
	window.obj3424_onTap_runningActionsCount = window.obj3424_onTap_runningActionsCount - 1;
if (window.obj3424_onTap_runningActionsCount < 0) {
	window.obj3424_onTap_runningActionsCount = 0;
} else if (window.obj3424_onTap_runningActionsCount == 0) {
	obj3424_onTap_actionGroup1();
}
}





















};
obj3424_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3424_onTap_activeActionGroupIndex = -1;
		$("#obj3424").trigger("obj3424_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3424) {
				console.warn("de-queueing event obj3424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3424_onTap_activeActionGroupIndex = 1;
	





















};
obj3421_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3421_onTap_activeActionGroupIndex = -1;
		$("#obj3421").trigger("obj3421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3421) {
				console.warn("de-queueing event obj3421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3421_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3423();
function goToPage_3423() {
	window.obj3421_onTap_runningActionsCount = obj3421_onTap_runningActionsCount + 1;
	$("#anchor132")[0].click();
	window.obj3421_onTap_runningActionsCount = window.obj3421_onTap_runningActionsCount - 1;
if (window.obj3421_onTap_runningActionsCount < 0) {
	window.obj3421_onTap_runningActionsCount = 0;
} else if (window.obj3421_onTap_runningActionsCount == 0) {
	obj3421_onTap_actionGroup1();
}
}





















};
obj3421_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3421_onTap_activeActionGroupIndex = -1;
		$("#obj3421").trigger("obj3421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3421) {
				console.warn("de-queueing event obj3421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3421_onTap_activeActionGroupIndex = 1;
	





















};
obj65294_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65294_onTap_activeActionGroupIndex = -1;
		$("#obj65294").trigger("obj65294_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65294) {
				console.warn("de-queueing event obj65294." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65294").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65294_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65294 
hide_65297();
function hide_65297() {
	var selector = "#obj65294";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65294_onTap_runningActionsCount = obj65294_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65294_onTap_runningActionsCount = window.obj65294_onTap_runningActionsCount - 1;
if (window.obj65294_onTap_runningActionsCount < 0) {
	window.obj65294_onTap_runningActionsCount = 0;
} else if (window.obj65294_onTap_runningActionsCount == 0) {
	obj65294_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65297(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65294_onTap_runningActionsCount = window.obj65294_onTap_runningActionsCount - 1;
if (window.obj65294_onTap_runningActionsCount < 0) {
	window.obj65294_onTap_runningActionsCount = 0;
} else if (window.obj65294_onTap_runningActionsCount == 0) {
	obj65294_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65300 
stopMovie_65296();
function stopMovie_65296() {
	window.obj65294_onTap_runningActionsCount = obj65294_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65300")[0];
	myVideo.pause();
	window.obj65294_onTap_runningActionsCount = window.obj65294_onTap_runningActionsCount - 1;
if (window.obj65294_onTap_runningActionsCount < 0) {
	window.obj65294_onTap_runningActionsCount = 0;
} else if (window.obj65294_onTap_runningActionsCount == 0) {
	obj65294_onTap_actionGroup1();
}
}
















};
obj65294_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65294_onTap_activeActionGroupIndex = -1;
		$("#obj65294").trigger("obj65294_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65294) {
				console.warn("de-queueing event obj65294." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65294").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65294_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65286
(function(){
	window.obj65294_onTap_runningActionsCount = obj65294_onTap_runningActionsCount + 1;

	var selector = "#obj65286";
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
					window.obj65294_onTap_runningActionsCount = window.obj65294_onTap_runningActionsCount - 1;
if (window.obj65294_onTap_runningActionsCount < 0) {
	window.obj65294_onTap_runningActionsCount = 0;
} else if (window.obj65294_onTap_runningActionsCount == 0) {
	obj65294_onTap_actionGroup2();
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
				window.obj65294_onTap_runningActionsCount = window.obj65294_onTap_runningActionsCount - 1;
if (window.obj65294_onTap_runningActionsCount < 0) {
	window.obj65294_onTap_runningActionsCount = 0;
} else if (window.obj65294_onTap_runningActionsCount == 0) {
	obj65294_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65294_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65294_onTap_activeActionGroupIndex = -1;
		$("#obj65294").trigger("obj65294_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65294) {
				console.warn("de-queueing event obj65294." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65294").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65294_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65300 
move_65299();
function move_65299() {
	window.obj65294_onTap_runningActionsCount = obj65294_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65300");
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
			window.obj65294_onTap_runningActionsCount = window.obj65294_onTap_runningActionsCount - 1;
if (window.obj65294_onTap_runningActionsCount < 0) {
	window.obj65294_onTap_runningActionsCount = 0;
} else if (window.obj65294_onTap_runningActionsCount == 0) {
	obj65294_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65294_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65294_onTap_activeActionGroupIndex = -1;
		$("#obj65294").trigger("obj65294_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65294) {
				console.warn("de-queueing event obj65294." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65294").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65294_onTap_activeActionGroupIndex = 3;
	





















};
obj65286_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65286_onTap_activeActionGroupIndex = -1;
		$("#obj65286").trigger("obj65286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65286) {
				console.warn("de-queueing event obj65286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65286_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65286 
hide_65289();
function hide_65289() {
	var selector = "#obj65286";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65286_onTap_runningActionsCount = obj65286_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65286_onTap_runningActionsCount = window.obj65286_onTap_runningActionsCount - 1;
if (window.obj65286_onTap_runningActionsCount < 0) {
	window.obj65286_onTap_runningActionsCount = 0;
} else if (window.obj65286_onTap_runningActionsCount == 0) {
	obj65286_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65289(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65286_onTap_runningActionsCount = window.obj65286_onTap_runningActionsCount - 1;
if (window.obj65286_onTap_runningActionsCount < 0) {
	window.obj65286_onTap_runningActionsCount = 0;
} else if (window.obj65286_onTap_runningActionsCount == 0) {
	obj65286_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65300 
playPauseMovie_65288();
function playPauseMovie_65288() {
	window.obj65286_onTap_runningActionsCount = obj65286_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65300")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65286_onTap_runningActionsCount = window.obj65286_onTap_runningActionsCount - 1;
if (window.obj65286_onTap_runningActionsCount < 0) {
	window.obj65286_onTap_runningActionsCount = 0;
} else if (window.obj65286_onTap_runningActionsCount == 0) {
	obj65286_onTap_actionGroup1();
}
}

















};
obj65286_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65286_onTap_activeActionGroupIndex = -1;
		$("#obj65286").trigger("obj65286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65286) {
				console.warn("de-queueing event obj65286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65286_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65294
(function(){
	window.obj65286_onTap_runningActionsCount = obj65286_onTap_runningActionsCount + 1;

	var selector = "#obj65294";
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
					window.obj65286_onTap_runningActionsCount = window.obj65286_onTap_runningActionsCount - 1;
if (window.obj65286_onTap_runningActionsCount < 0) {
	window.obj65286_onTap_runningActionsCount = 0;
} else if (window.obj65286_onTap_runningActionsCount == 0) {
	obj65286_onTap_actionGroup2();
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
				window.obj65286_onTap_runningActionsCount = window.obj65286_onTap_runningActionsCount - 1;
if (window.obj65286_onTap_runningActionsCount < 0) {
	window.obj65286_onTap_runningActionsCount = 0;
} else if (window.obj65286_onTap_runningActionsCount == 0) {
	obj65286_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65286_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65286_onTap_activeActionGroupIndex = -1;
		$("#obj65286").trigger("obj65286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65286) {
				console.warn("de-queueing event obj65286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65286_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65300 
move_65291();
function move_65291() {
	window.obj65286_onTap_runningActionsCount = obj65286_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65300");
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
			window.obj65286_onTap_runningActionsCount = window.obj65286_onTap_runningActionsCount - 1;
if (window.obj65286_onTap_runningActionsCount < 0) {
	window.obj65286_onTap_runningActionsCount = 0;
} else if (window.obj65286_onTap_runningActionsCount == 0) {
	obj65286_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65286_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65286_onTap_activeActionGroupIndex = -1;
		$("#obj65286").trigger("obj65286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65286) {
				console.warn("de-queueing event obj65286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65286_onTap_activeActionGroupIndex = 3;
	





















};
obj87061_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87061_onTap_activeActionGroupIndex = -1;
		$("#obj87061").trigger("obj87061_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87061) {
				console.warn("de-queueing event obj87061." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87061").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87061_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87066 
stopAudio_87063();
function stopAudio_87063() {
	window.obj87061_onTap_runningActionsCount = obj87061_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87066")[0];
	myAudio.pause();
	window.obj87061_onTap_runningActionsCount = window.obj87061_onTap_runningActionsCount - 1;
if (window.obj87061_onTap_runningActionsCount < 0) {
	window.obj87061_onTap_runningActionsCount = 0;
} else if (window.obj87061_onTap_runningActionsCount == 0) {
	obj87061_onTap_actionGroup1();
}
}








};
obj87061_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87061_onTap_activeActionGroupIndex = -1;
		$("#obj87061").trigger("obj87061_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87061) {
				console.warn("de-queueing event obj87061." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87061").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87061_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87061 
hide_87064();
function hide_87064() {
	var selector = "#obj87061";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87061_onTap_runningActionsCount = obj87061_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87061_onTap_runningActionsCount = window.obj87061_onTap_runningActionsCount - 1;
if (window.obj87061_onTap_runningActionsCount < 0) {
	window.obj87061_onTap_runningActionsCount = 0;
} else if (window.obj87061_onTap_runningActionsCount == 0) {
	obj87061_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87064(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87061_onTap_runningActionsCount = window.obj87061_onTap_runningActionsCount - 1;
if (window.obj87061_onTap_runningActionsCount < 0) {
	window.obj87061_onTap_runningActionsCount = 0;
} else if (window.obj87061_onTap_runningActionsCount == 0) {
	obj87061_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87061_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87061_onTap_activeActionGroupIndex = -1;
		$("#obj87061").trigger("obj87061_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87061) {
				console.warn("de-queueing event obj87061." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87061").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87061_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87056
(function(){
	window.obj87061_onTap_runningActionsCount = obj87061_onTap_runningActionsCount + 1;

	var selector = "#obj87056";
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
					window.obj87061_onTap_runningActionsCount = window.obj87061_onTap_runningActionsCount - 1;
if (window.obj87061_onTap_runningActionsCount < 0) {
	window.obj87061_onTap_runningActionsCount = 0;
} else if (window.obj87061_onTap_runningActionsCount == 0) {
	obj87061_onTap_actionGroup3();
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
				window.obj87061_onTap_runningActionsCount = window.obj87061_onTap_runningActionsCount - 1;
if (window.obj87061_onTap_runningActionsCount < 0) {
	window.obj87061_onTap_runningActionsCount = 0;
} else if (window.obj87061_onTap_runningActionsCount == 0) {
	obj87061_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87061_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87061_onTap_activeActionGroupIndex = -1;
		$("#obj87061").trigger("obj87061_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87061) {
				console.warn("de-queueing event obj87061." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87061").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87061_onTap_activeActionGroupIndex = 3;
	





















};
obj87056_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87056_onTap_activeActionGroupIndex = -1;
		$("#obj87056").trigger("obj87056_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87056) {
				console.warn("de-queueing event obj87056." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87056").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87056_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87056 
hide_87058();
function hide_87058() {
	var selector = "#obj87056";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87056_onTap_runningActionsCount = obj87056_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87056_onTap_runningActionsCount = window.obj87056_onTap_runningActionsCount - 1;
if (window.obj87056_onTap_runningActionsCount < 0) {
	window.obj87056_onTap_runningActionsCount = 0;
} else if (window.obj87056_onTap_runningActionsCount == 0) {
	obj87056_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87058(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87056_onTap_runningActionsCount = window.obj87056_onTap_runningActionsCount - 1;
if (window.obj87056_onTap_runningActionsCount < 0) {
	window.obj87056_onTap_runningActionsCount = 0;
} else if (window.obj87056_onTap_runningActionsCount == 0) {
	obj87056_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87056_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87056_onTap_activeActionGroupIndex = -1;
		$("#obj87056").trigger("obj87056_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87056) {
				console.warn("de-queueing event obj87056." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87056").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87056_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87061
(function(){
	window.obj87056_onTap_runningActionsCount = obj87056_onTap_runningActionsCount + 1;

	var selector = "#obj87061";
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
					window.obj87056_onTap_runningActionsCount = window.obj87056_onTap_runningActionsCount - 1;
if (window.obj87056_onTap_runningActionsCount < 0) {
	window.obj87056_onTap_runningActionsCount = 0;
} else if (window.obj87056_onTap_runningActionsCount == 0) {
	obj87056_onTap_actionGroup2();
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
				window.obj87056_onTap_runningActionsCount = window.obj87056_onTap_runningActionsCount - 1;
if (window.obj87056_onTap_runningActionsCount < 0) {
	window.obj87056_onTap_runningActionsCount = 0;
} else if (window.obj87056_onTap_runningActionsCount == 0) {
	obj87056_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87056_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87056_onTap_activeActionGroupIndex = -1;
		$("#obj87056").trigger("obj87056_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87056) {
				console.warn("de-queueing event obj87056." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87056").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87056_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87066 
playAudio_87060();
function playAudio_87060() {
	window.obj87056_onTap_runningActionsCount = obj87056_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87066")[0];
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
		    window.obj87056_onTap_runningActionsCount = window.obj87056_onTap_runningActionsCount - 1;
if (window.obj87056_onTap_runningActionsCount < 0) {
	window.obj87056_onTap_runningActionsCount = 0;
} else if (window.obj87056_onTap_runningActionsCount == 0) {
	obj87056_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87056_onTap_runningActionsCount = window.obj87056_onTap_runningActionsCount - 1;
if (window.obj87056_onTap_runningActionsCount < 0) {
	window.obj87056_onTap_runningActionsCount = 0;
} else if (window.obj87056_onTap_runningActionsCount == 0) {
	obj87056_onTap_actionGroup3();
}
	}
}









};
obj87056_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87056_onTap_activeActionGroupIndex = -1;
		$("#obj87056").trigger("obj87056_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87056) {
				console.warn("de-queueing event obj87056." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87056").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87056_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj3424: Event Touch Down
 *
 */
$("#obj3424").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3424_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3424_onTap is still running");
	return;
}
var obj3424_onTap_runningActionsCount = 0;
var obj3424_onTap_loopCount = 0;
obj3424_onTap_actionGroup0();
});










/*
 *
 *   obj3421: Event Touch Down
 *
 */
$("#obj3421").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3421_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3421_onTap is still running");
	return;
}
var obj3421_onTap_runningActionsCount = 0;
var obj3421_onTap_loopCount = 0;
obj3421_onTap_actionGroup0();
});




























































/*
 *
 *   obj65294: Event Touch Down
 *
 */
$("#obj65294").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65294_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65294_onTap is still running");
	return;
}
var obj65294_onTap_runningActionsCount = 0;
var obj65294_onTap_loopCount = 0;
obj65294_onTap_actionGroup0();
});










/*
 *
 *   obj65286: Event Touch Down
 *
 */
$("#obj65286").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65286_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65286_onTap is still running");
	return;
}
var obj65286_onTap_runningActionsCount = 0;
var obj65286_onTap_loopCount = 0;
obj65286_onTap_actionGroup0();
});










/*
 *
 *   obj87061: Event Touch Down
 *
 */
$("#obj87061").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87061_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87061_onTap is still running");
	return;
}
var obj87061_onTap_runningActionsCount = 0;
var obj87061_onTap_loopCount = 0;
obj87061_onTap_actionGroup0();
});










/*
 *
 *   obj87056: Event Touch Down
 *
 */
$("#obj87056").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87056_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87056_onTap is still running");
	return;
}
var obj87056_onTap_runningActionsCount = 0;
var obj87056_onTap_loopCount = 0;
obj87056_onTap_actionGroup0();
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
	
$("#obj3419").trigger('SCEventShow');
$("#obj3424").trigger('SCEventShow');
$("#obj3421").trigger('SCEventShow');
$("#obj3448").trigger('SCEventShow');
$("#obj3446").trigger('SCEventShow');
$("#obj3444").trigger('SCEventShow');
$("#obj3450").trigger('SCEventShow');
$("#obj3452").trigger('SCEventShow');
$("#obj65294").trigger('SCEventShow');
$("#obj65286").trigger('SCEventShow');
$("#obj87061").trigger('SCEventShow');
$("#obj87056").trigger('SCEventShow');
$("#obj87066").trigger('SCEventShow');
$("#obj94671").trigger('SCEventShow');
$("#obj65300").trigger('SCEventShow');
	
});