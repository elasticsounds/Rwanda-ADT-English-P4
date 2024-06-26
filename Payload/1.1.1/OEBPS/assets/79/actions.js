pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 20246;
pubcoder.page.title = pubcoder.page.title || "79";
pubcoder.page.number = pubcoder.page.number || 79;
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
var obj77246_onTap_activeActionGroupIndex = -1;
var obj77246_onTap_runningActionsCount = 0;
var obj77246_onTap_loopCount = 0;
var obj77243_onTap_activeActionGroupIndex = -1;
var obj77243_onTap_runningActionsCount = 0;
var obj77243_onTap_loopCount = 0;
var obj77219_onTap_activeActionGroupIndex = -1;
var obj77219_onTap_runningActionsCount = 0;
var obj77219_onTap_loopCount = 0;
var obj77211_onTap_activeActionGroupIndex = -1;
var obj77211_onTap_runningActionsCount = 0;
var obj77211_onTap_loopCount = 0;
var obj87809_onTap_activeActionGroupIndex = -1;
var obj87809_onTap_runningActionsCount = 0;
var obj87809_onTap_loopCount = 0;
var obj87804_onTap_activeActionGroupIndex = -1;
var obj87804_onTap_runningActionsCount = 0;
var obj87804_onTap_loopCount = 0;
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
		
obj77246_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77246_onTap_activeActionGroupIndex = -1;
		$("#obj77246").trigger("obj77246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77246) {
				console.warn("de-queueing event obj77246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77246_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77248();
function goToPage_77248() {
	window.obj77246_onTap_runningActionsCount = obj77246_onTap_runningActionsCount + 1;
	$("#anchor466")[0].click();
	window.obj77246_onTap_runningActionsCount = window.obj77246_onTap_runningActionsCount - 1;
if (window.obj77246_onTap_runningActionsCount < 0) {
	window.obj77246_onTap_runningActionsCount = 0;
} else if (window.obj77246_onTap_runningActionsCount == 0) {
	obj77246_onTap_actionGroup1();
}
}





















};
obj77246_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77246_onTap_activeActionGroupIndex = -1;
		$("#obj77246").trigger("obj77246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77246) {
				console.warn("de-queueing event obj77246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77246_onTap_activeActionGroupIndex = 1;
	





















};
obj77243_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77243_onTap_activeActionGroupIndex = -1;
		$("#obj77243").trigger("obj77243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77243) {
				console.warn("de-queueing event obj77243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77243_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77245();
function goToPage_77245() {
	window.obj77243_onTap_runningActionsCount = obj77243_onTap_runningActionsCount + 1;
	$("#anchor467")[0].click();
	window.obj77243_onTap_runningActionsCount = window.obj77243_onTap_runningActionsCount - 1;
if (window.obj77243_onTap_runningActionsCount < 0) {
	window.obj77243_onTap_runningActionsCount = 0;
} else if (window.obj77243_onTap_runningActionsCount == 0) {
	obj77243_onTap_actionGroup1();
}
}





















};
obj77243_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77243_onTap_activeActionGroupIndex = -1;
		$("#obj77243").trigger("obj77243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77243) {
				console.warn("de-queueing event obj77243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77243_onTap_activeActionGroupIndex = 1;
	





















};
obj77219_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77219_onTap_activeActionGroupIndex = -1;
		$("#obj77219").trigger("obj77219_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77219) {
				console.warn("de-queueing event obj77219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77219_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj77219 
hide_77222();
function hide_77222() {
	var selector = "#obj77219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77219_onTap_runningActionsCount = obj77219_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77219_onTap_runningActionsCount = window.obj77219_onTap_runningActionsCount - 1;
if (window.obj77219_onTap_runningActionsCount < 0) {
	window.obj77219_onTap_runningActionsCount = 0;
} else if (window.obj77219_onTap_runningActionsCount == 0) {
	obj77219_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77222(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77219_onTap_runningActionsCount = window.obj77219_onTap_runningActionsCount - 1;
if (window.obj77219_onTap_runningActionsCount < 0) {
	window.obj77219_onTap_runningActionsCount = 0;
} else if (window.obj77219_onTap_runningActionsCount == 0) {
	obj77219_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj77209 
stopMovie_77221();
function stopMovie_77221() {
	window.obj77219_onTap_runningActionsCount = obj77219_onTap_runningActionsCount + 1;
	var myVideo = $("#obj77209")[0];
	myVideo.pause();
	window.obj77219_onTap_runningActionsCount = window.obj77219_onTap_runningActionsCount - 1;
if (window.obj77219_onTap_runningActionsCount < 0) {
	window.obj77219_onTap_runningActionsCount = 0;
} else if (window.obj77219_onTap_runningActionsCount == 0) {
	obj77219_onTap_actionGroup1();
}
}
















};
obj77219_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77219_onTap_activeActionGroupIndex = -1;
		$("#obj77219").trigger("obj77219_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77219) {
				console.warn("de-queueing event obj77219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77219_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj77211
(function(){
	window.obj77219_onTap_runningActionsCount = obj77219_onTap_runningActionsCount + 1;

	var selector = "#obj77211";
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
					window.obj77219_onTap_runningActionsCount = window.obj77219_onTap_runningActionsCount - 1;
if (window.obj77219_onTap_runningActionsCount < 0) {
	window.obj77219_onTap_runningActionsCount = 0;
} else if (window.obj77219_onTap_runningActionsCount == 0) {
	obj77219_onTap_actionGroup2();
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
				window.obj77219_onTap_runningActionsCount = window.obj77219_onTap_runningActionsCount - 1;
if (window.obj77219_onTap_runningActionsCount < 0) {
	window.obj77219_onTap_runningActionsCount = 0;
} else if (window.obj77219_onTap_runningActionsCount == 0) {
	obj77219_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77219_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77219_onTap_activeActionGroupIndex = -1;
		$("#obj77219").trigger("obj77219_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77219) {
				console.warn("de-queueing event obj77219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77219_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj77209 
move_77224();
function move_77224() {
	window.obj77219_onTap_runningActionsCount = obj77219_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj77209");
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
			window.obj77219_onTap_runningActionsCount = window.obj77219_onTap_runningActionsCount - 1;
if (window.obj77219_onTap_runningActionsCount < 0) {
	window.obj77219_onTap_runningActionsCount = 0;
} else if (window.obj77219_onTap_runningActionsCount == 0) {
	obj77219_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj77219_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77219_onTap_activeActionGroupIndex = -1;
		$("#obj77219").trigger("obj77219_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77219) {
				console.warn("de-queueing event obj77219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77219_onTap_activeActionGroupIndex = 3;
	





















};
obj77211_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77211_onTap_activeActionGroupIndex = -1;
		$("#obj77211").trigger("obj77211_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77211) {
				console.warn("de-queueing event obj77211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77211_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj77211 
hide_77214();
function hide_77214() {
	var selector = "#obj77211";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77211_onTap_runningActionsCount = obj77211_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77211_onTap_runningActionsCount = window.obj77211_onTap_runningActionsCount - 1;
if (window.obj77211_onTap_runningActionsCount < 0) {
	window.obj77211_onTap_runningActionsCount = 0;
} else if (window.obj77211_onTap_runningActionsCount == 0) {
	obj77211_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77214(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77211_onTap_runningActionsCount = window.obj77211_onTap_runningActionsCount - 1;
if (window.obj77211_onTap_runningActionsCount < 0) {
	window.obj77211_onTap_runningActionsCount = 0;
} else if (window.obj77211_onTap_runningActionsCount == 0) {
	obj77211_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj77209 
playPauseMovie_77213();
function playPauseMovie_77213() {
	window.obj77211_onTap_runningActionsCount = obj77211_onTap_runningActionsCount + 1;
	var myVideo = $("#obj77209")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj77211_onTap_runningActionsCount = window.obj77211_onTap_runningActionsCount - 1;
if (window.obj77211_onTap_runningActionsCount < 0) {
	window.obj77211_onTap_runningActionsCount = 0;
} else if (window.obj77211_onTap_runningActionsCount == 0) {
	obj77211_onTap_actionGroup1();
}
}

















};
obj77211_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77211_onTap_activeActionGroupIndex = -1;
		$("#obj77211").trigger("obj77211_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77211) {
				console.warn("de-queueing event obj77211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77211_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj77219
(function(){
	window.obj77211_onTap_runningActionsCount = obj77211_onTap_runningActionsCount + 1;

	var selector = "#obj77219";
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
					window.obj77211_onTap_runningActionsCount = window.obj77211_onTap_runningActionsCount - 1;
if (window.obj77211_onTap_runningActionsCount < 0) {
	window.obj77211_onTap_runningActionsCount = 0;
} else if (window.obj77211_onTap_runningActionsCount == 0) {
	obj77211_onTap_actionGroup2();
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
				window.obj77211_onTap_runningActionsCount = window.obj77211_onTap_runningActionsCount - 1;
if (window.obj77211_onTap_runningActionsCount < 0) {
	window.obj77211_onTap_runningActionsCount = 0;
} else if (window.obj77211_onTap_runningActionsCount == 0) {
	obj77211_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77211_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77211_onTap_activeActionGroupIndex = -1;
		$("#obj77211").trigger("obj77211_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77211) {
				console.warn("de-queueing event obj77211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77211_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj77209 
move_77216();
function move_77216() {
	window.obj77211_onTap_runningActionsCount = obj77211_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj77209");
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
			window.obj77211_onTap_runningActionsCount = window.obj77211_onTap_runningActionsCount - 1;
if (window.obj77211_onTap_runningActionsCount < 0) {
	window.obj77211_onTap_runningActionsCount = 0;
} else if (window.obj77211_onTap_runningActionsCount == 0) {
	obj77211_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj77211_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77211_onTap_activeActionGroupIndex = -1;
		$("#obj77211").trigger("obj77211_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77211) {
				console.warn("de-queueing event obj77211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77211_onTap_activeActionGroupIndex = 3;
	





















};
obj87809_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87809_onTap_activeActionGroupIndex = -1;
		$("#obj87809").trigger("obj87809_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87809) {
				console.warn("de-queueing event obj87809." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87809").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87809_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87814 
stopAudio_87811();
function stopAudio_87811() {
	window.obj87809_onTap_runningActionsCount = obj87809_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87814")[0];
	myAudio.pause();
	window.obj87809_onTap_runningActionsCount = window.obj87809_onTap_runningActionsCount - 1;
if (window.obj87809_onTap_runningActionsCount < 0) {
	window.obj87809_onTap_runningActionsCount = 0;
} else if (window.obj87809_onTap_runningActionsCount == 0) {
	obj87809_onTap_actionGroup1();
}
}








};
obj87809_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87809_onTap_activeActionGroupIndex = -1;
		$("#obj87809").trigger("obj87809_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87809) {
				console.warn("de-queueing event obj87809." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87809").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87809_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87809 
hide_87812();
function hide_87812() {
	var selector = "#obj87809";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87809_onTap_runningActionsCount = obj87809_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87809_onTap_runningActionsCount = window.obj87809_onTap_runningActionsCount - 1;
if (window.obj87809_onTap_runningActionsCount < 0) {
	window.obj87809_onTap_runningActionsCount = 0;
} else if (window.obj87809_onTap_runningActionsCount == 0) {
	obj87809_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87812(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87809_onTap_runningActionsCount = window.obj87809_onTap_runningActionsCount - 1;
if (window.obj87809_onTap_runningActionsCount < 0) {
	window.obj87809_onTap_runningActionsCount = 0;
} else if (window.obj87809_onTap_runningActionsCount == 0) {
	obj87809_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87809_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87809_onTap_activeActionGroupIndex = -1;
		$("#obj87809").trigger("obj87809_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87809) {
				console.warn("de-queueing event obj87809." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87809").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87809_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87804
(function(){
	window.obj87809_onTap_runningActionsCount = obj87809_onTap_runningActionsCount + 1;

	var selector = "#obj87804";
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
					window.obj87809_onTap_runningActionsCount = window.obj87809_onTap_runningActionsCount - 1;
if (window.obj87809_onTap_runningActionsCount < 0) {
	window.obj87809_onTap_runningActionsCount = 0;
} else if (window.obj87809_onTap_runningActionsCount == 0) {
	obj87809_onTap_actionGroup3();
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
				window.obj87809_onTap_runningActionsCount = window.obj87809_onTap_runningActionsCount - 1;
if (window.obj87809_onTap_runningActionsCount < 0) {
	window.obj87809_onTap_runningActionsCount = 0;
} else if (window.obj87809_onTap_runningActionsCount == 0) {
	obj87809_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87809_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87809_onTap_activeActionGroupIndex = -1;
		$("#obj87809").trigger("obj87809_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87809) {
				console.warn("de-queueing event obj87809." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87809").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87809_onTap_activeActionGroupIndex = 3;
	





















};
obj87804_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87804_onTap_activeActionGroupIndex = -1;
		$("#obj87804").trigger("obj87804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87804) {
				console.warn("de-queueing event obj87804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87804_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87804 
hide_87806();
function hide_87806() {
	var selector = "#obj87804";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87804_onTap_runningActionsCount = obj87804_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87804_onTap_runningActionsCount = window.obj87804_onTap_runningActionsCount - 1;
if (window.obj87804_onTap_runningActionsCount < 0) {
	window.obj87804_onTap_runningActionsCount = 0;
} else if (window.obj87804_onTap_runningActionsCount == 0) {
	obj87804_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87806(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87804_onTap_runningActionsCount = window.obj87804_onTap_runningActionsCount - 1;
if (window.obj87804_onTap_runningActionsCount < 0) {
	window.obj87804_onTap_runningActionsCount = 0;
} else if (window.obj87804_onTap_runningActionsCount == 0) {
	obj87804_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87804_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87804_onTap_activeActionGroupIndex = -1;
		$("#obj87804").trigger("obj87804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87804) {
				console.warn("de-queueing event obj87804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87804_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87809
(function(){
	window.obj87804_onTap_runningActionsCount = obj87804_onTap_runningActionsCount + 1;

	var selector = "#obj87809";
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
					window.obj87804_onTap_runningActionsCount = window.obj87804_onTap_runningActionsCount - 1;
if (window.obj87804_onTap_runningActionsCount < 0) {
	window.obj87804_onTap_runningActionsCount = 0;
} else if (window.obj87804_onTap_runningActionsCount == 0) {
	obj87804_onTap_actionGroup2();
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
				window.obj87804_onTap_runningActionsCount = window.obj87804_onTap_runningActionsCount - 1;
if (window.obj87804_onTap_runningActionsCount < 0) {
	window.obj87804_onTap_runningActionsCount = 0;
} else if (window.obj87804_onTap_runningActionsCount == 0) {
	obj87804_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87804_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87804_onTap_activeActionGroupIndex = -1;
		$("#obj87804").trigger("obj87804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87804) {
				console.warn("de-queueing event obj87804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87804_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87814 
playAudio_87808();
function playAudio_87808() {
	window.obj87804_onTap_runningActionsCount = obj87804_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87814")[0];
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
		    window.obj87804_onTap_runningActionsCount = window.obj87804_onTap_runningActionsCount - 1;
if (window.obj87804_onTap_runningActionsCount < 0) {
	window.obj87804_onTap_runningActionsCount = 0;
} else if (window.obj87804_onTap_runningActionsCount == 0) {
	obj87804_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87804_onTap_runningActionsCount = window.obj87804_onTap_runningActionsCount - 1;
if (window.obj87804_onTap_runningActionsCount < 0) {
	window.obj87804_onTap_runningActionsCount = 0;
} else if (window.obj87804_onTap_runningActionsCount == 0) {
	obj87804_onTap_actionGroup3();
}
	}
}









};
obj87804_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87804_onTap_activeActionGroupIndex = -1;
		$("#obj87804").trigger("obj87804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87804) {
				console.warn("de-queueing event obj87804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87804_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj77246: Event Touch Down
 *
 */
$("#obj77246").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77246_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77246_onTap is still running");
	return;
}
var obj77246_onTap_runningActionsCount = 0;
var obj77246_onTap_loopCount = 0;
obj77246_onTap_actionGroup0();
});










/*
 *
 *   obj77243: Event Touch Down
 *
 */
$("#obj77243").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77243_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77243_onTap is still running");
	return;
}
var obj77243_onTap_runningActionsCount = 0;
var obj77243_onTap_loopCount = 0;
obj77243_onTap_actionGroup0();
});








































/*
 *
 *   obj77219: Event Touch Down
 *
 */
$("#obj77219").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77219_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77219_onTap is still running");
	return;
}
var obj77219_onTap_runningActionsCount = 0;
var obj77219_onTap_loopCount = 0;
obj77219_onTap_actionGroup0();
});










/*
 *
 *   obj77211: Event Touch Down
 *
 */
$("#obj77211").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77211_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77211_onTap is still running");
	return;
}
var obj77211_onTap_runningActionsCount = 0;
var obj77211_onTap_loopCount = 0;
obj77211_onTap_actionGroup0();
});










/*
 *
 *   obj87809: Event Touch Down
 *
 */
$("#obj87809").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87809_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87809_onTap is still running");
	return;
}
var obj87809_onTap_runningActionsCount = 0;
var obj87809_onTap_loopCount = 0;
obj87809_onTap_actionGroup0();
});










/*
 *
 *   obj87804: Event Touch Down
 *
 */
$("#obj87804").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87804_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87804_onTap is still running");
	return;
}
var obj87804_onTap_runningActionsCount = 0;
var obj87804_onTap_loopCount = 0;
obj87804_onTap_actionGroup0();
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
	
$("#obj77249").trigger('SCEventShow');
$("#obj77246").trigger('SCEventShow');
$("#obj77243").trigger('SCEventShow');
$("#obj77241").trigger('SCEventShow');
$("#obj77239").trigger('SCEventShow');
$("#obj77237").trigger('SCEventShow');
$("#obj77219").trigger('SCEventShow');
$("#obj77211").trigger('SCEventShow');
$("#obj87809").trigger('SCEventShow');
$("#obj87804").trigger('SCEventShow');
$("#obj87814").trigger('SCEventShow');
$("#obj94787").trigger('SCEventShow');
$("#obj77209").trigger('SCEventShow');
	
});