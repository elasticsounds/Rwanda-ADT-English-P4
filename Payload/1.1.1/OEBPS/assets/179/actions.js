pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 49460;
pubcoder.page.title = pubcoder.page.title || "179";
pubcoder.page.number = pubcoder.page.number || 179;
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
var obj49472_onTap_activeActionGroupIndex = -1;
var obj49472_onTap_runningActionsCount = 0;
var obj49472_onTap_loopCount = 0;
var obj49469_onTap_activeActionGroupIndex = -1;
var obj49469_onTap_runningActionsCount = 0;
var obj49469_onTap_loopCount = 0;
var obj67886_onTap_activeActionGroupIndex = -1;
var obj67886_onTap_runningActionsCount = 0;
var obj67886_onTap_loopCount = 0;
var obj67878_onTap_activeActionGroupIndex = -1;
var obj67878_onTap_runningActionsCount = 0;
var obj67878_onTap_loopCount = 0;
var obj89029_onTap_activeActionGroupIndex = -1;
var obj89029_onTap_runningActionsCount = 0;
var obj89029_onTap_loopCount = 0;
var obj89024_onTap_activeActionGroupIndex = -1;
var obj89024_onTap_runningActionsCount = 0;
var obj89024_onTap_loopCount = 0;
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
		
obj49472_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49472_onTap_activeActionGroupIndex = -1;
		$("#obj49472").trigger("obj49472_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49472) {
				console.warn("de-queueing event obj49472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49472_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49474();
function goToPage_49474() {
	window.obj49472_onTap_runningActionsCount = obj49472_onTap_runningActionsCount + 1;
	$("#anchor1059")[0].click();
	window.obj49472_onTap_runningActionsCount = window.obj49472_onTap_runningActionsCount - 1;
if (window.obj49472_onTap_runningActionsCount < 0) {
	window.obj49472_onTap_runningActionsCount = 0;
} else if (window.obj49472_onTap_runningActionsCount == 0) {
	obj49472_onTap_actionGroup1();
}
}





















};
obj49472_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49472_onTap_activeActionGroupIndex = -1;
		$("#obj49472").trigger("obj49472_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49472) {
				console.warn("de-queueing event obj49472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49472_onTap_activeActionGroupIndex = 1;
	





















};
obj49469_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49469_onTap_activeActionGroupIndex = -1;
		$("#obj49469").trigger("obj49469_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49469) {
				console.warn("de-queueing event obj49469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49469_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49471();
function goToPage_49471() {
	window.obj49469_onTap_runningActionsCount = obj49469_onTap_runningActionsCount + 1;
	$("#anchor1060")[0].click();
	window.obj49469_onTap_runningActionsCount = window.obj49469_onTap_runningActionsCount - 1;
if (window.obj49469_onTap_runningActionsCount < 0) {
	window.obj49469_onTap_runningActionsCount = 0;
} else if (window.obj49469_onTap_runningActionsCount == 0) {
	obj49469_onTap_actionGroup1();
}
}





















};
obj49469_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49469_onTap_activeActionGroupIndex = -1;
		$("#obj49469").trigger("obj49469_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49469) {
				console.warn("de-queueing event obj49469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49469_onTap_activeActionGroupIndex = 1;
	





















};
obj67886_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67886_onTap_activeActionGroupIndex = -1;
		$("#obj67886").trigger("obj67886_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67886) {
				console.warn("de-queueing event obj67886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67886_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67886 
hide_67889();
function hide_67889() {
	var selector = "#obj67886";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67886_onTap_runningActionsCount = obj67886_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67886_onTap_runningActionsCount = window.obj67886_onTap_runningActionsCount - 1;
if (window.obj67886_onTap_runningActionsCount < 0) {
	window.obj67886_onTap_runningActionsCount = 0;
} else if (window.obj67886_onTap_runningActionsCount == 0) {
	obj67886_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67889(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67886_onTap_runningActionsCount = window.obj67886_onTap_runningActionsCount - 1;
if (window.obj67886_onTap_runningActionsCount < 0) {
	window.obj67886_onTap_runningActionsCount = 0;
} else if (window.obj67886_onTap_runningActionsCount == 0) {
	obj67886_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67892 
stopMovie_67888();
function stopMovie_67888() {
	window.obj67886_onTap_runningActionsCount = obj67886_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67892")[0];
	myVideo.pause();
	window.obj67886_onTap_runningActionsCount = window.obj67886_onTap_runningActionsCount - 1;
if (window.obj67886_onTap_runningActionsCount < 0) {
	window.obj67886_onTap_runningActionsCount = 0;
} else if (window.obj67886_onTap_runningActionsCount == 0) {
	obj67886_onTap_actionGroup1();
}
}
















};
obj67886_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67886_onTap_activeActionGroupIndex = -1;
		$("#obj67886").trigger("obj67886_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67886) {
				console.warn("de-queueing event obj67886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67886_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67878
(function(){
	window.obj67886_onTap_runningActionsCount = obj67886_onTap_runningActionsCount + 1;

	var selector = "#obj67878";
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
					window.obj67886_onTap_runningActionsCount = window.obj67886_onTap_runningActionsCount - 1;
if (window.obj67886_onTap_runningActionsCount < 0) {
	window.obj67886_onTap_runningActionsCount = 0;
} else if (window.obj67886_onTap_runningActionsCount == 0) {
	obj67886_onTap_actionGroup2();
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
				window.obj67886_onTap_runningActionsCount = window.obj67886_onTap_runningActionsCount - 1;
if (window.obj67886_onTap_runningActionsCount < 0) {
	window.obj67886_onTap_runningActionsCount = 0;
} else if (window.obj67886_onTap_runningActionsCount == 0) {
	obj67886_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67886_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67886_onTap_activeActionGroupIndex = -1;
		$("#obj67886").trigger("obj67886_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67886) {
				console.warn("de-queueing event obj67886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67886_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67892 
move_67891();
function move_67891() {
	window.obj67886_onTap_runningActionsCount = obj67886_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67892");
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
			window.obj67886_onTap_runningActionsCount = window.obj67886_onTap_runningActionsCount - 1;
if (window.obj67886_onTap_runningActionsCount < 0) {
	window.obj67886_onTap_runningActionsCount = 0;
} else if (window.obj67886_onTap_runningActionsCount == 0) {
	obj67886_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67886_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67886_onTap_activeActionGroupIndex = -1;
		$("#obj67886").trigger("obj67886_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67886) {
				console.warn("de-queueing event obj67886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67886_onTap_activeActionGroupIndex = 3;
	





















};
obj67878_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67878_onTap_activeActionGroupIndex = -1;
		$("#obj67878").trigger("obj67878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67878) {
				console.warn("de-queueing event obj67878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67878_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67878 
hide_67881();
function hide_67881() {
	var selector = "#obj67878";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67878_onTap_runningActionsCount = obj67878_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67878_onTap_runningActionsCount = window.obj67878_onTap_runningActionsCount - 1;
if (window.obj67878_onTap_runningActionsCount < 0) {
	window.obj67878_onTap_runningActionsCount = 0;
} else if (window.obj67878_onTap_runningActionsCount == 0) {
	obj67878_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67881(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67878_onTap_runningActionsCount = window.obj67878_onTap_runningActionsCount - 1;
if (window.obj67878_onTap_runningActionsCount < 0) {
	window.obj67878_onTap_runningActionsCount = 0;
} else if (window.obj67878_onTap_runningActionsCount == 0) {
	obj67878_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67892 
playPauseMovie_67880();
function playPauseMovie_67880() {
	window.obj67878_onTap_runningActionsCount = obj67878_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67892")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67878_onTap_runningActionsCount = window.obj67878_onTap_runningActionsCount - 1;
if (window.obj67878_onTap_runningActionsCount < 0) {
	window.obj67878_onTap_runningActionsCount = 0;
} else if (window.obj67878_onTap_runningActionsCount == 0) {
	obj67878_onTap_actionGroup1();
}
}

















};
obj67878_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67878_onTap_activeActionGroupIndex = -1;
		$("#obj67878").trigger("obj67878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67878) {
				console.warn("de-queueing event obj67878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67878_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67886
(function(){
	window.obj67878_onTap_runningActionsCount = obj67878_onTap_runningActionsCount + 1;

	var selector = "#obj67886";
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
					window.obj67878_onTap_runningActionsCount = window.obj67878_onTap_runningActionsCount - 1;
if (window.obj67878_onTap_runningActionsCount < 0) {
	window.obj67878_onTap_runningActionsCount = 0;
} else if (window.obj67878_onTap_runningActionsCount == 0) {
	obj67878_onTap_actionGroup2();
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
				window.obj67878_onTap_runningActionsCount = window.obj67878_onTap_runningActionsCount - 1;
if (window.obj67878_onTap_runningActionsCount < 0) {
	window.obj67878_onTap_runningActionsCount = 0;
} else if (window.obj67878_onTap_runningActionsCount == 0) {
	obj67878_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67878_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67878_onTap_activeActionGroupIndex = -1;
		$("#obj67878").trigger("obj67878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67878) {
				console.warn("de-queueing event obj67878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67878_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67892 
move_67883();
function move_67883() {
	window.obj67878_onTap_runningActionsCount = obj67878_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67892");
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
			window.obj67878_onTap_runningActionsCount = window.obj67878_onTap_runningActionsCount - 1;
if (window.obj67878_onTap_runningActionsCount < 0) {
	window.obj67878_onTap_runningActionsCount = 0;
} else if (window.obj67878_onTap_runningActionsCount == 0) {
	obj67878_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67878_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67878_onTap_activeActionGroupIndex = -1;
		$("#obj67878").trigger("obj67878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67878) {
				console.warn("de-queueing event obj67878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67878_onTap_activeActionGroupIndex = 3;
	





















};
obj89029_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89029_onTap_activeActionGroupIndex = -1;
		$("#obj89029").trigger("obj89029_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89029) {
				console.warn("de-queueing event obj89029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89029_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89034 
stopAudio_89031();
function stopAudio_89031() {
	window.obj89029_onTap_runningActionsCount = obj89029_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89034")[0];
	myAudio.pause();
	window.obj89029_onTap_runningActionsCount = window.obj89029_onTap_runningActionsCount - 1;
if (window.obj89029_onTap_runningActionsCount < 0) {
	window.obj89029_onTap_runningActionsCount = 0;
} else if (window.obj89029_onTap_runningActionsCount == 0) {
	obj89029_onTap_actionGroup1();
}
}








};
obj89029_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89029_onTap_activeActionGroupIndex = -1;
		$("#obj89029").trigger("obj89029_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89029) {
				console.warn("de-queueing event obj89029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89029_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89029 
hide_89032();
function hide_89032() {
	var selector = "#obj89029";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89029_onTap_runningActionsCount = obj89029_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89029_onTap_runningActionsCount = window.obj89029_onTap_runningActionsCount - 1;
if (window.obj89029_onTap_runningActionsCount < 0) {
	window.obj89029_onTap_runningActionsCount = 0;
} else if (window.obj89029_onTap_runningActionsCount == 0) {
	obj89029_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89032(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89029_onTap_runningActionsCount = window.obj89029_onTap_runningActionsCount - 1;
if (window.obj89029_onTap_runningActionsCount < 0) {
	window.obj89029_onTap_runningActionsCount = 0;
} else if (window.obj89029_onTap_runningActionsCount == 0) {
	obj89029_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89029_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89029_onTap_activeActionGroupIndex = -1;
		$("#obj89029").trigger("obj89029_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89029) {
				console.warn("de-queueing event obj89029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89029_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89024
(function(){
	window.obj89029_onTap_runningActionsCount = obj89029_onTap_runningActionsCount + 1;

	var selector = "#obj89024";
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
					window.obj89029_onTap_runningActionsCount = window.obj89029_onTap_runningActionsCount - 1;
if (window.obj89029_onTap_runningActionsCount < 0) {
	window.obj89029_onTap_runningActionsCount = 0;
} else if (window.obj89029_onTap_runningActionsCount == 0) {
	obj89029_onTap_actionGroup3();
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
				window.obj89029_onTap_runningActionsCount = window.obj89029_onTap_runningActionsCount - 1;
if (window.obj89029_onTap_runningActionsCount < 0) {
	window.obj89029_onTap_runningActionsCount = 0;
} else if (window.obj89029_onTap_runningActionsCount == 0) {
	obj89029_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89029_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89029_onTap_activeActionGroupIndex = -1;
		$("#obj89029").trigger("obj89029_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89029) {
				console.warn("de-queueing event obj89029." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89029").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89029_onTap_activeActionGroupIndex = 3;
	





















};
obj89024_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89024_onTap_activeActionGroupIndex = -1;
		$("#obj89024").trigger("obj89024_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89024) {
				console.warn("de-queueing event obj89024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89024_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89024 
hide_89026();
function hide_89026() {
	var selector = "#obj89024";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89024_onTap_runningActionsCount = obj89024_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89024_onTap_runningActionsCount = window.obj89024_onTap_runningActionsCount - 1;
if (window.obj89024_onTap_runningActionsCount < 0) {
	window.obj89024_onTap_runningActionsCount = 0;
} else if (window.obj89024_onTap_runningActionsCount == 0) {
	obj89024_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89026(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89024_onTap_runningActionsCount = window.obj89024_onTap_runningActionsCount - 1;
if (window.obj89024_onTap_runningActionsCount < 0) {
	window.obj89024_onTap_runningActionsCount = 0;
} else if (window.obj89024_onTap_runningActionsCount == 0) {
	obj89024_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89024_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89024_onTap_activeActionGroupIndex = -1;
		$("#obj89024").trigger("obj89024_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89024) {
				console.warn("de-queueing event obj89024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89024_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89029
(function(){
	window.obj89024_onTap_runningActionsCount = obj89024_onTap_runningActionsCount + 1;

	var selector = "#obj89029";
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
					window.obj89024_onTap_runningActionsCount = window.obj89024_onTap_runningActionsCount - 1;
if (window.obj89024_onTap_runningActionsCount < 0) {
	window.obj89024_onTap_runningActionsCount = 0;
} else if (window.obj89024_onTap_runningActionsCount == 0) {
	obj89024_onTap_actionGroup2();
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
				window.obj89024_onTap_runningActionsCount = window.obj89024_onTap_runningActionsCount - 1;
if (window.obj89024_onTap_runningActionsCount < 0) {
	window.obj89024_onTap_runningActionsCount = 0;
} else if (window.obj89024_onTap_runningActionsCount == 0) {
	obj89024_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89024_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89024_onTap_activeActionGroupIndex = -1;
		$("#obj89024").trigger("obj89024_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89024) {
				console.warn("de-queueing event obj89024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89024_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89034 
playAudio_89028();
function playAudio_89028() {
	window.obj89024_onTap_runningActionsCount = obj89024_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89034")[0];
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
		    window.obj89024_onTap_runningActionsCount = window.obj89024_onTap_runningActionsCount - 1;
if (window.obj89024_onTap_runningActionsCount < 0) {
	window.obj89024_onTap_runningActionsCount = 0;
} else if (window.obj89024_onTap_runningActionsCount == 0) {
	obj89024_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89024_onTap_runningActionsCount = window.obj89024_onTap_runningActionsCount - 1;
if (window.obj89024_onTap_runningActionsCount < 0) {
	window.obj89024_onTap_runningActionsCount = 0;
} else if (window.obj89024_onTap_runningActionsCount == 0) {
	obj89024_onTap_actionGroup3();
}
	}
}









};
obj89024_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89024_onTap_activeActionGroupIndex = -1;
		$("#obj89024").trigger("obj89024_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89024) {
				console.warn("de-queueing event obj89024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89024_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj49472: Event Touch Down
 *
 */
$("#obj49472").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49472_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49472_onTap is still running");
	return;
}
var obj49472_onTap_runningActionsCount = 0;
var obj49472_onTap_loopCount = 0;
obj49472_onTap_actionGroup0();
});










/*
 *
 *   obj49469: Event Touch Down
 *
 */
$("#obj49469").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49469_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49469_onTap is still running");
	return;
}
var obj49469_onTap_runningActionsCount = 0;
var obj49469_onTap_loopCount = 0;
obj49469_onTap_actionGroup0();
});






























/*
 *
 *   obj67886: Event Touch Down
 *
 */
$("#obj67886").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67886_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67886_onTap is still running");
	return;
}
var obj67886_onTap_runningActionsCount = 0;
var obj67886_onTap_loopCount = 0;
obj67886_onTap_actionGroup0();
});










/*
 *
 *   obj67878: Event Touch Down
 *
 */
$("#obj67878").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67878_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67878_onTap is still running");
	return;
}
var obj67878_onTap_runningActionsCount = 0;
var obj67878_onTap_loopCount = 0;
obj67878_onTap_actionGroup0();
});










/*
 *
 *   obj89029: Event Touch Down
 *
 */
$("#obj89029").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89029_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89029_onTap is still running");
	return;
}
var obj89029_onTap_runningActionsCount = 0;
var obj89029_onTap_loopCount = 0;
obj89029_onTap_actionGroup0();
});










/*
 *
 *   obj89024: Event Touch Down
 *
 */
$("#obj89024").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89024_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89024_onTap is still running");
	return;
}
var obj89024_onTap_runningActionsCount = 0;
var obj89024_onTap_loopCount = 0;
obj89024_onTap_actionGroup0();
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
	
$("#obj49488").trigger('SCEventShow');
$("#obj49472").trigger('SCEventShow');
$("#obj49469").trigger('SCEventShow');
$("#obj49467").trigger('SCEventShow');
$("#obj49491").trigger('SCEventShow');
$("#obj67886").trigger('SCEventShow');
$("#obj67878").trigger('SCEventShow');
$("#obj89029").trigger('SCEventShow');
$("#obj89024").trigger('SCEventShow');
$("#obj89034").trigger('SCEventShow');
$("#obj94987").trigger('SCEventShow');
$("#obj67892").trigger('SCEventShow');
	
});