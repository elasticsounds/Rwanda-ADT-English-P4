pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 20128;
pubcoder.page.title = pubcoder.page.title || "78";
pubcoder.page.number = pubcoder.page.number || 78;
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
var obj77204_onTap_activeActionGroupIndex = -1;
var obj77204_onTap_runningActionsCount = 0;
var obj77204_onTap_loopCount = 0;
var obj77201_onTap_activeActionGroupIndex = -1;
var obj77201_onTap_runningActionsCount = 0;
var obj77201_onTap_loopCount = 0;
var obj77155_onTap_activeActionGroupIndex = -1;
var obj77155_onTap_runningActionsCount = 0;
var obj77155_onTap_loopCount = 0;
var obj77147_onTap_activeActionGroupIndex = -1;
var obj77147_onTap_runningActionsCount = 0;
var obj77147_onTap_loopCount = 0;
var obj87797_onTap_activeActionGroupIndex = -1;
var obj87797_onTap_runningActionsCount = 0;
var obj87797_onTap_loopCount = 0;
var obj87792_onTap_activeActionGroupIndex = -1;
var obj87792_onTap_runningActionsCount = 0;
var obj87792_onTap_loopCount = 0;
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
		
obj77204_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77204_onTap_activeActionGroupIndex = -1;
		$("#obj77204").trigger("obj77204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77204) {
				console.warn("de-queueing event obj77204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77204_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77206();
function goToPage_77206() {
	window.obj77204_onTap_runningActionsCount = obj77204_onTap_runningActionsCount + 1;
	$("#anchor462")[0].click();
	window.obj77204_onTap_runningActionsCount = window.obj77204_onTap_runningActionsCount - 1;
if (window.obj77204_onTap_runningActionsCount < 0) {
	window.obj77204_onTap_runningActionsCount = 0;
} else if (window.obj77204_onTap_runningActionsCount == 0) {
	obj77204_onTap_actionGroup1();
}
}





















};
obj77204_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77204_onTap_activeActionGroupIndex = -1;
		$("#obj77204").trigger("obj77204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77204) {
				console.warn("de-queueing event obj77204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77204_onTap_activeActionGroupIndex = 1;
	





















};
obj77201_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77201_onTap_activeActionGroupIndex = -1;
		$("#obj77201").trigger("obj77201_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77201) {
				console.warn("de-queueing event obj77201." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77201").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77201_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77203();
function goToPage_77203() {
	window.obj77201_onTap_runningActionsCount = obj77201_onTap_runningActionsCount + 1;
	$("#anchor463")[0].click();
	window.obj77201_onTap_runningActionsCount = window.obj77201_onTap_runningActionsCount - 1;
if (window.obj77201_onTap_runningActionsCount < 0) {
	window.obj77201_onTap_runningActionsCount = 0;
} else if (window.obj77201_onTap_runningActionsCount == 0) {
	obj77201_onTap_actionGroup1();
}
}





















};
obj77201_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77201_onTap_activeActionGroupIndex = -1;
		$("#obj77201").trigger("obj77201_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77201) {
				console.warn("de-queueing event obj77201." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77201").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77201_onTap_activeActionGroupIndex = 1;
	





















};
obj77155_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77155_onTap_activeActionGroupIndex = -1;
		$("#obj77155").trigger("obj77155_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77155) {
				console.warn("de-queueing event obj77155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77155_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj77155 
hide_77158();
function hide_77158() {
	var selector = "#obj77155";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77155_onTap_runningActionsCount = obj77155_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77155_onTap_runningActionsCount = window.obj77155_onTap_runningActionsCount - 1;
if (window.obj77155_onTap_runningActionsCount < 0) {
	window.obj77155_onTap_runningActionsCount = 0;
} else if (window.obj77155_onTap_runningActionsCount == 0) {
	obj77155_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77158(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77155_onTap_runningActionsCount = window.obj77155_onTap_runningActionsCount - 1;
if (window.obj77155_onTap_runningActionsCount < 0) {
	window.obj77155_onTap_runningActionsCount = 0;
} else if (window.obj77155_onTap_runningActionsCount == 0) {
	obj77155_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj77145 
stopMovie_77157();
function stopMovie_77157() {
	window.obj77155_onTap_runningActionsCount = obj77155_onTap_runningActionsCount + 1;
	var myVideo = $("#obj77145")[0];
	myVideo.pause();
	window.obj77155_onTap_runningActionsCount = window.obj77155_onTap_runningActionsCount - 1;
if (window.obj77155_onTap_runningActionsCount < 0) {
	window.obj77155_onTap_runningActionsCount = 0;
} else if (window.obj77155_onTap_runningActionsCount == 0) {
	obj77155_onTap_actionGroup1();
}
}
















};
obj77155_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77155_onTap_activeActionGroupIndex = -1;
		$("#obj77155").trigger("obj77155_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77155) {
				console.warn("de-queueing event obj77155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77155_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj77147
(function(){
	window.obj77155_onTap_runningActionsCount = obj77155_onTap_runningActionsCount + 1;

	var selector = "#obj77147";
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
					window.obj77155_onTap_runningActionsCount = window.obj77155_onTap_runningActionsCount - 1;
if (window.obj77155_onTap_runningActionsCount < 0) {
	window.obj77155_onTap_runningActionsCount = 0;
} else if (window.obj77155_onTap_runningActionsCount == 0) {
	obj77155_onTap_actionGroup2();
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
				window.obj77155_onTap_runningActionsCount = window.obj77155_onTap_runningActionsCount - 1;
if (window.obj77155_onTap_runningActionsCount < 0) {
	window.obj77155_onTap_runningActionsCount = 0;
} else if (window.obj77155_onTap_runningActionsCount == 0) {
	obj77155_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77155_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77155_onTap_activeActionGroupIndex = -1;
		$("#obj77155").trigger("obj77155_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77155) {
				console.warn("de-queueing event obj77155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77155_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj77145 
move_77160();
function move_77160() {
	window.obj77155_onTap_runningActionsCount = obj77155_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj77145");
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
			window.obj77155_onTap_runningActionsCount = window.obj77155_onTap_runningActionsCount - 1;
if (window.obj77155_onTap_runningActionsCount < 0) {
	window.obj77155_onTap_runningActionsCount = 0;
} else if (window.obj77155_onTap_runningActionsCount == 0) {
	obj77155_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj77155_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77155_onTap_activeActionGroupIndex = -1;
		$("#obj77155").trigger("obj77155_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77155) {
				console.warn("de-queueing event obj77155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77155_onTap_activeActionGroupIndex = 3;
	





















};
obj77147_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77147_onTap_activeActionGroupIndex = -1;
		$("#obj77147").trigger("obj77147_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77147) {
				console.warn("de-queueing event obj77147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77147_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj77147 
hide_77150();
function hide_77150() {
	var selector = "#obj77147";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77147_onTap_runningActionsCount = obj77147_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77147_onTap_runningActionsCount = window.obj77147_onTap_runningActionsCount - 1;
if (window.obj77147_onTap_runningActionsCount < 0) {
	window.obj77147_onTap_runningActionsCount = 0;
} else if (window.obj77147_onTap_runningActionsCount == 0) {
	obj77147_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77150(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77147_onTap_runningActionsCount = window.obj77147_onTap_runningActionsCount - 1;
if (window.obj77147_onTap_runningActionsCount < 0) {
	window.obj77147_onTap_runningActionsCount = 0;
} else if (window.obj77147_onTap_runningActionsCount == 0) {
	obj77147_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj77145 
playPauseMovie_77149();
function playPauseMovie_77149() {
	window.obj77147_onTap_runningActionsCount = obj77147_onTap_runningActionsCount + 1;
	var myVideo = $("#obj77145")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj77147_onTap_runningActionsCount = window.obj77147_onTap_runningActionsCount - 1;
if (window.obj77147_onTap_runningActionsCount < 0) {
	window.obj77147_onTap_runningActionsCount = 0;
} else if (window.obj77147_onTap_runningActionsCount == 0) {
	obj77147_onTap_actionGroup1();
}
}

















};
obj77147_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77147_onTap_activeActionGroupIndex = -1;
		$("#obj77147").trigger("obj77147_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77147) {
				console.warn("de-queueing event obj77147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77147_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj77155
(function(){
	window.obj77147_onTap_runningActionsCount = obj77147_onTap_runningActionsCount + 1;

	var selector = "#obj77155";
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
					window.obj77147_onTap_runningActionsCount = window.obj77147_onTap_runningActionsCount - 1;
if (window.obj77147_onTap_runningActionsCount < 0) {
	window.obj77147_onTap_runningActionsCount = 0;
} else if (window.obj77147_onTap_runningActionsCount == 0) {
	obj77147_onTap_actionGroup2();
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
				window.obj77147_onTap_runningActionsCount = window.obj77147_onTap_runningActionsCount - 1;
if (window.obj77147_onTap_runningActionsCount < 0) {
	window.obj77147_onTap_runningActionsCount = 0;
} else if (window.obj77147_onTap_runningActionsCount == 0) {
	obj77147_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77147_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77147_onTap_activeActionGroupIndex = -1;
		$("#obj77147").trigger("obj77147_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77147) {
				console.warn("de-queueing event obj77147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77147_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj77145 
move_77152();
function move_77152() {
	window.obj77147_onTap_runningActionsCount = obj77147_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj77145");
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
			window.obj77147_onTap_runningActionsCount = window.obj77147_onTap_runningActionsCount - 1;
if (window.obj77147_onTap_runningActionsCount < 0) {
	window.obj77147_onTap_runningActionsCount = 0;
} else if (window.obj77147_onTap_runningActionsCount == 0) {
	obj77147_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj77147_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77147_onTap_activeActionGroupIndex = -1;
		$("#obj77147").trigger("obj77147_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77147) {
				console.warn("de-queueing event obj77147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77147_onTap_activeActionGroupIndex = 3;
	





















};
obj87797_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87797_onTap_activeActionGroupIndex = -1;
		$("#obj87797").trigger("obj87797_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87797) {
				console.warn("de-queueing event obj87797." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87797").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87797_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87802 
stopAudio_87799();
function stopAudio_87799() {
	window.obj87797_onTap_runningActionsCount = obj87797_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87802")[0];
	myAudio.pause();
	window.obj87797_onTap_runningActionsCount = window.obj87797_onTap_runningActionsCount - 1;
if (window.obj87797_onTap_runningActionsCount < 0) {
	window.obj87797_onTap_runningActionsCount = 0;
} else if (window.obj87797_onTap_runningActionsCount == 0) {
	obj87797_onTap_actionGroup1();
}
}








};
obj87797_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87797_onTap_activeActionGroupIndex = -1;
		$("#obj87797").trigger("obj87797_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87797) {
				console.warn("de-queueing event obj87797." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87797").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87797_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87797 
hide_87800();
function hide_87800() {
	var selector = "#obj87797";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87797_onTap_runningActionsCount = obj87797_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87797_onTap_runningActionsCount = window.obj87797_onTap_runningActionsCount - 1;
if (window.obj87797_onTap_runningActionsCount < 0) {
	window.obj87797_onTap_runningActionsCount = 0;
} else if (window.obj87797_onTap_runningActionsCount == 0) {
	obj87797_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87800(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87797_onTap_runningActionsCount = window.obj87797_onTap_runningActionsCount - 1;
if (window.obj87797_onTap_runningActionsCount < 0) {
	window.obj87797_onTap_runningActionsCount = 0;
} else if (window.obj87797_onTap_runningActionsCount == 0) {
	obj87797_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87797_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87797_onTap_activeActionGroupIndex = -1;
		$("#obj87797").trigger("obj87797_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87797) {
				console.warn("de-queueing event obj87797." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87797").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87797_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87792
(function(){
	window.obj87797_onTap_runningActionsCount = obj87797_onTap_runningActionsCount + 1;

	var selector = "#obj87792";
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
					window.obj87797_onTap_runningActionsCount = window.obj87797_onTap_runningActionsCount - 1;
if (window.obj87797_onTap_runningActionsCount < 0) {
	window.obj87797_onTap_runningActionsCount = 0;
} else if (window.obj87797_onTap_runningActionsCount == 0) {
	obj87797_onTap_actionGroup3();
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
				window.obj87797_onTap_runningActionsCount = window.obj87797_onTap_runningActionsCount - 1;
if (window.obj87797_onTap_runningActionsCount < 0) {
	window.obj87797_onTap_runningActionsCount = 0;
} else if (window.obj87797_onTap_runningActionsCount == 0) {
	obj87797_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87797_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87797_onTap_activeActionGroupIndex = -1;
		$("#obj87797").trigger("obj87797_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87797) {
				console.warn("de-queueing event obj87797." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87797").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87797_onTap_activeActionGroupIndex = 3;
	





















};
obj87792_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87792_onTap_activeActionGroupIndex = -1;
		$("#obj87792").trigger("obj87792_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87792) {
				console.warn("de-queueing event obj87792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87792_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87792 
hide_87794();
function hide_87794() {
	var selector = "#obj87792";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87792_onTap_runningActionsCount = obj87792_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87792_onTap_runningActionsCount = window.obj87792_onTap_runningActionsCount - 1;
if (window.obj87792_onTap_runningActionsCount < 0) {
	window.obj87792_onTap_runningActionsCount = 0;
} else if (window.obj87792_onTap_runningActionsCount == 0) {
	obj87792_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87794(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87792_onTap_runningActionsCount = window.obj87792_onTap_runningActionsCount - 1;
if (window.obj87792_onTap_runningActionsCount < 0) {
	window.obj87792_onTap_runningActionsCount = 0;
} else if (window.obj87792_onTap_runningActionsCount == 0) {
	obj87792_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87792_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87792_onTap_activeActionGroupIndex = -1;
		$("#obj87792").trigger("obj87792_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87792) {
				console.warn("de-queueing event obj87792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87792_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87797
(function(){
	window.obj87792_onTap_runningActionsCount = obj87792_onTap_runningActionsCount + 1;

	var selector = "#obj87797";
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
					window.obj87792_onTap_runningActionsCount = window.obj87792_onTap_runningActionsCount - 1;
if (window.obj87792_onTap_runningActionsCount < 0) {
	window.obj87792_onTap_runningActionsCount = 0;
} else if (window.obj87792_onTap_runningActionsCount == 0) {
	obj87792_onTap_actionGroup2();
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
				window.obj87792_onTap_runningActionsCount = window.obj87792_onTap_runningActionsCount - 1;
if (window.obj87792_onTap_runningActionsCount < 0) {
	window.obj87792_onTap_runningActionsCount = 0;
} else if (window.obj87792_onTap_runningActionsCount == 0) {
	obj87792_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87792_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87792_onTap_activeActionGroupIndex = -1;
		$("#obj87792").trigger("obj87792_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87792) {
				console.warn("de-queueing event obj87792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87792_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87802 
playAudio_87796();
function playAudio_87796() {
	window.obj87792_onTap_runningActionsCount = obj87792_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87802")[0];
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
		    window.obj87792_onTap_runningActionsCount = window.obj87792_onTap_runningActionsCount - 1;
if (window.obj87792_onTap_runningActionsCount < 0) {
	window.obj87792_onTap_runningActionsCount = 0;
} else if (window.obj87792_onTap_runningActionsCount == 0) {
	obj87792_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87792_onTap_runningActionsCount = window.obj87792_onTap_runningActionsCount - 1;
if (window.obj87792_onTap_runningActionsCount < 0) {
	window.obj87792_onTap_runningActionsCount = 0;
} else if (window.obj87792_onTap_runningActionsCount == 0) {
	obj87792_onTap_actionGroup3();
}
	}
}









};
obj87792_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87792_onTap_activeActionGroupIndex = -1;
		$("#obj87792").trigger("obj87792_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87792) {
				console.warn("de-queueing event obj87792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87792_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj77204: Event Touch Down
 *
 */
$("#obj77204").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77204_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77204_onTap is still running");
	return;
}
var obj77204_onTap_runningActionsCount = 0;
var obj77204_onTap_loopCount = 0;
obj77204_onTap_actionGroup0();
});










/*
 *
 *   obj77201: Event Touch Down
 *
 */
$("#obj77201").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77201_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77201_onTap is still running");
	return;
}
var obj77201_onTap_runningActionsCount = 0;
var obj77201_onTap_loopCount = 0;
obj77201_onTap_actionGroup0();
});






















































































































































/*
 *
 *   obj77155: Event Touch Down
 *
 */
$("#obj77155").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77155_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77155_onTap is still running");
	return;
}
var obj77155_onTap_runningActionsCount = 0;
var obj77155_onTap_loopCount = 0;
obj77155_onTap_actionGroup0();
});










/*
 *
 *   obj77147: Event Touch Down
 *
 */
$("#obj77147").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77147_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77147_onTap is still running");
	return;
}
var obj77147_onTap_runningActionsCount = 0;
var obj77147_onTap_loopCount = 0;
obj77147_onTap_actionGroup0();
});










/*
 *
 *   obj87797: Event Touch Down
 *
 */
$("#obj87797").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87797_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87797_onTap is still running");
	return;
}
var obj87797_onTap_runningActionsCount = 0;
var obj87797_onTap_loopCount = 0;
obj87797_onTap_actionGroup0();
});










/*
 *
 *   obj87792: Event Touch Down
 *
 */
$("#obj87792").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87792_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87792_onTap is still running");
	return;
}
var obj87792_onTap_runningActionsCount = 0;
var obj87792_onTap_loopCount = 0;
obj87792_onTap_actionGroup0();
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
	
$("#obj77207").trigger('SCEventShow');
$("#obj77204").trigger('SCEventShow');
$("#obj77201").trigger('SCEventShow');
$("#obj77199").trigger('SCEventShow');
$("#obj77197").trigger('SCEventShow');
$("#obj77195").trigger('SCEventShow');
$("#obj77193").trigger('SCEventShow');
$("#obj77191").trigger('SCEventShow');
$("#obj77189").trigger('SCEventShow');
$("#obj77187").trigger('SCEventShow');
$("#obj77185").trigger('SCEventShow');
$("#obj77183").trigger('SCEventShow');
$("#obj77181").trigger('SCEventShow');
$("#obj77179").trigger('SCEventShow');
$("#obj77177").trigger('SCEventShow');
$("#obj77175").trigger('SCEventShow');
$("#obj77173").trigger('SCEventShow');
$("#obj77155").trigger('SCEventShow');
$("#obj77147").trigger('SCEventShow');
$("#obj87797").trigger('SCEventShow');
$("#obj87792").trigger('SCEventShow');
$("#obj87802").trigger('SCEventShow');
$("#obj94785").trigger('SCEventShow');
$("#obj77145").trigger('SCEventShow');
	
});