pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 43506;
pubcoder.page.title = pubcoder.page.title || "147";
pubcoder.page.number = pubcoder.page.number || 147;
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
var obj43512_onTap_activeActionGroupIndex = -1;
var obj43512_onTap_runningActionsCount = 0;
var obj43512_onTap_loopCount = 0;
var obj43509_onTap_activeActionGroupIndex = -1;
var obj43509_onTap_runningActionsCount = 0;
var obj43509_onTap_loopCount = 0;
var obj67358_onTap_activeActionGroupIndex = -1;
var obj67358_onTap_runningActionsCount = 0;
var obj67358_onTap_loopCount = 0;
var obj67350_onTap_activeActionGroupIndex = -1;
var obj67350_onTap_runningActionsCount = 0;
var obj67350_onTap_loopCount = 0;
var obj88633_onTap_activeActionGroupIndex = -1;
var obj88633_onTap_runningActionsCount = 0;
var obj88633_onTap_loopCount = 0;
var obj88628_onTap_activeActionGroupIndex = -1;
var obj88628_onTap_runningActionsCount = 0;
var obj88628_onTap_loopCount = 0;
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
		
obj43512_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43512_onTap_activeActionGroupIndex = -1;
		$("#obj43512").trigger("obj43512_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43512) {
				console.warn("de-queueing event obj43512." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43512").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43512_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43514();
function goToPage_43514() {
	window.obj43512_onTap_runningActionsCount = obj43512_onTap_runningActionsCount + 1;
	$("#anchor871")[0].click();
	window.obj43512_onTap_runningActionsCount = window.obj43512_onTap_runningActionsCount - 1;
if (window.obj43512_onTap_runningActionsCount < 0) {
	window.obj43512_onTap_runningActionsCount = 0;
} else if (window.obj43512_onTap_runningActionsCount == 0) {
	obj43512_onTap_actionGroup1();
}
}





















};
obj43512_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43512_onTap_activeActionGroupIndex = -1;
		$("#obj43512").trigger("obj43512_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43512) {
				console.warn("de-queueing event obj43512." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43512").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43512_onTap_activeActionGroupIndex = 1;
	





















};
obj43509_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43509_onTap_activeActionGroupIndex = -1;
		$("#obj43509").trigger("obj43509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43509) {
				console.warn("de-queueing event obj43509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43509_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43511();
function goToPage_43511() {
	window.obj43509_onTap_runningActionsCount = obj43509_onTap_runningActionsCount + 1;
	$("#anchor872")[0].click();
	window.obj43509_onTap_runningActionsCount = window.obj43509_onTap_runningActionsCount - 1;
if (window.obj43509_onTap_runningActionsCount < 0) {
	window.obj43509_onTap_runningActionsCount = 0;
} else if (window.obj43509_onTap_runningActionsCount == 0) {
	obj43509_onTap_actionGroup1();
}
}





















};
obj43509_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43509_onTap_activeActionGroupIndex = -1;
		$("#obj43509").trigger("obj43509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43509) {
				console.warn("de-queueing event obj43509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43509_onTap_activeActionGroupIndex = 1;
	





















};
obj67358_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67358_onTap_activeActionGroupIndex = -1;
		$("#obj67358").trigger("obj67358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67358) {
				console.warn("de-queueing event obj67358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67358_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67358 
hide_67361();
function hide_67361() {
	var selector = "#obj67358";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67358_onTap_runningActionsCount = obj67358_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67358_onTap_runningActionsCount = window.obj67358_onTap_runningActionsCount - 1;
if (window.obj67358_onTap_runningActionsCount < 0) {
	window.obj67358_onTap_runningActionsCount = 0;
} else if (window.obj67358_onTap_runningActionsCount == 0) {
	obj67358_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67361(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67358_onTap_runningActionsCount = window.obj67358_onTap_runningActionsCount - 1;
if (window.obj67358_onTap_runningActionsCount < 0) {
	window.obj67358_onTap_runningActionsCount = 0;
} else if (window.obj67358_onTap_runningActionsCount == 0) {
	obj67358_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67364 
stopMovie_67360();
function stopMovie_67360() {
	window.obj67358_onTap_runningActionsCount = obj67358_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67364")[0];
	myVideo.pause();
	window.obj67358_onTap_runningActionsCount = window.obj67358_onTap_runningActionsCount - 1;
if (window.obj67358_onTap_runningActionsCount < 0) {
	window.obj67358_onTap_runningActionsCount = 0;
} else if (window.obj67358_onTap_runningActionsCount == 0) {
	obj67358_onTap_actionGroup1();
}
}
















};
obj67358_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67358_onTap_activeActionGroupIndex = -1;
		$("#obj67358").trigger("obj67358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67358) {
				console.warn("de-queueing event obj67358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67358_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67350
(function(){
	window.obj67358_onTap_runningActionsCount = obj67358_onTap_runningActionsCount + 1;

	var selector = "#obj67350";
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
					window.obj67358_onTap_runningActionsCount = window.obj67358_onTap_runningActionsCount - 1;
if (window.obj67358_onTap_runningActionsCount < 0) {
	window.obj67358_onTap_runningActionsCount = 0;
} else if (window.obj67358_onTap_runningActionsCount == 0) {
	obj67358_onTap_actionGroup2();
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
				window.obj67358_onTap_runningActionsCount = window.obj67358_onTap_runningActionsCount - 1;
if (window.obj67358_onTap_runningActionsCount < 0) {
	window.obj67358_onTap_runningActionsCount = 0;
} else if (window.obj67358_onTap_runningActionsCount == 0) {
	obj67358_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67358_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67358_onTap_activeActionGroupIndex = -1;
		$("#obj67358").trigger("obj67358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67358) {
				console.warn("de-queueing event obj67358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67358_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67364 
move_67363();
function move_67363() {
	window.obj67358_onTap_runningActionsCount = obj67358_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67364");
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
			window.obj67358_onTap_runningActionsCount = window.obj67358_onTap_runningActionsCount - 1;
if (window.obj67358_onTap_runningActionsCount < 0) {
	window.obj67358_onTap_runningActionsCount = 0;
} else if (window.obj67358_onTap_runningActionsCount == 0) {
	obj67358_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67358_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67358_onTap_activeActionGroupIndex = -1;
		$("#obj67358").trigger("obj67358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67358) {
				console.warn("de-queueing event obj67358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67358_onTap_activeActionGroupIndex = 3;
	





















};
obj67350_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67350_onTap_activeActionGroupIndex = -1;
		$("#obj67350").trigger("obj67350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67350) {
				console.warn("de-queueing event obj67350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67350_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67350 
hide_67353();
function hide_67353() {
	var selector = "#obj67350";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67350_onTap_runningActionsCount = obj67350_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67350_onTap_runningActionsCount = window.obj67350_onTap_runningActionsCount - 1;
if (window.obj67350_onTap_runningActionsCount < 0) {
	window.obj67350_onTap_runningActionsCount = 0;
} else if (window.obj67350_onTap_runningActionsCount == 0) {
	obj67350_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67353(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67350_onTap_runningActionsCount = window.obj67350_onTap_runningActionsCount - 1;
if (window.obj67350_onTap_runningActionsCount < 0) {
	window.obj67350_onTap_runningActionsCount = 0;
} else if (window.obj67350_onTap_runningActionsCount == 0) {
	obj67350_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67364 
playPauseMovie_67352();
function playPauseMovie_67352() {
	window.obj67350_onTap_runningActionsCount = obj67350_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67364")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67350_onTap_runningActionsCount = window.obj67350_onTap_runningActionsCount - 1;
if (window.obj67350_onTap_runningActionsCount < 0) {
	window.obj67350_onTap_runningActionsCount = 0;
} else if (window.obj67350_onTap_runningActionsCount == 0) {
	obj67350_onTap_actionGroup1();
}
}

















};
obj67350_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67350_onTap_activeActionGroupIndex = -1;
		$("#obj67350").trigger("obj67350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67350) {
				console.warn("de-queueing event obj67350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67350_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67358
(function(){
	window.obj67350_onTap_runningActionsCount = obj67350_onTap_runningActionsCount + 1;

	var selector = "#obj67358";
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
					window.obj67350_onTap_runningActionsCount = window.obj67350_onTap_runningActionsCount - 1;
if (window.obj67350_onTap_runningActionsCount < 0) {
	window.obj67350_onTap_runningActionsCount = 0;
} else if (window.obj67350_onTap_runningActionsCount == 0) {
	obj67350_onTap_actionGroup2();
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
				window.obj67350_onTap_runningActionsCount = window.obj67350_onTap_runningActionsCount - 1;
if (window.obj67350_onTap_runningActionsCount < 0) {
	window.obj67350_onTap_runningActionsCount = 0;
} else if (window.obj67350_onTap_runningActionsCount == 0) {
	obj67350_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67350_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67350_onTap_activeActionGroupIndex = -1;
		$("#obj67350").trigger("obj67350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67350) {
				console.warn("de-queueing event obj67350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67350_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67364 
move_67355();
function move_67355() {
	window.obj67350_onTap_runningActionsCount = obj67350_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67364");
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
			window.obj67350_onTap_runningActionsCount = window.obj67350_onTap_runningActionsCount - 1;
if (window.obj67350_onTap_runningActionsCount < 0) {
	window.obj67350_onTap_runningActionsCount = 0;
} else if (window.obj67350_onTap_runningActionsCount == 0) {
	obj67350_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67350_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67350_onTap_activeActionGroupIndex = -1;
		$("#obj67350").trigger("obj67350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67350) {
				console.warn("de-queueing event obj67350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67350_onTap_activeActionGroupIndex = 3;
	





















};
obj88633_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88633_onTap_activeActionGroupIndex = -1;
		$("#obj88633").trigger("obj88633_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88633) {
				console.warn("de-queueing event obj88633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88633_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88638 
stopAudio_88635();
function stopAudio_88635() {
	window.obj88633_onTap_runningActionsCount = obj88633_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88638")[0];
	myAudio.pause();
	window.obj88633_onTap_runningActionsCount = window.obj88633_onTap_runningActionsCount - 1;
if (window.obj88633_onTap_runningActionsCount < 0) {
	window.obj88633_onTap_runningActionsCount = 0;
} else if (window.obj88633_onTap_runningActionsCount == 0) {
	obj88633_onTap_actionGroup1();
}
}








};
obj88633_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88633_onTap_activeActionGroupIndex = -1;
		$("#obj88633").trigger("obj88633_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88633) {
				console.warn("de-queueing event obj88633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88633_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88633 
hide_88636();
function hide_88636() {
	var selector = "#obj88633";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88633_onTap_runningActionsCount = obj88633_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88633_onTap_runningActionsCount = window.obj88633_onTap_runningActionsCount - 1;
if (window.obj88633_onTap_runningActionsCount < 0) {
	window.obj88633_onTap_runningActionsCount = 0;
} else if (window.obj88633_onTap_runningActionsCount == 0) {
	obj88633_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88636(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88633_onTap_runningActionsCount = window.obj88633_onTap_runningActionsCount - 1;
if (window.obj88633_onTap_runningActionsCount < 0) {
	window.obj88633_onTap_runningActionsCount = 0;
} else if (window.obj88633_onTap_runningActionsCount == 0) {
	obj88633_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88633_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88633_onTap_activeActionGroupIndex = -1;
		$("#obj88633").trigger("obj88633_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88633) {
				console.warn("de-queueing event obj88633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88633_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88628
(function(){
	window.obj88633_onTap_runningActionsCount = obj88633_onTap_runningActionsCount + 1;

	var selector = "#obj88628";
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
					window.obj88633_onTap_runningActionsCount = window.obj88633_onTap_runningActionsCount - 1;
if (window.obj88633_onTap_runningActionsCount < 0) {
	window.obj88633_onTap_runningActionsCount = 0;
} else if (window.obj88633_onTap_runningActionsCount == 0) {
	obj88633_onTap_actionGroup3();
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
				window.obj88633_onTap_runningActionsCount = window.obj88633_onTap_runningActionsCount - 1;
if (window.obj88633_onTap_runningActionsCount < 0) {
	window.obj88633_onTap_runningActionsCount = 0;
} else if (window.obj88633_onTap_runningActionsCount == 0) {
	obj88633_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88633_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88633_onTap_activeActionGroupIndex = -1;
		$("#obj88633").trigger("obj88633_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88633) {
				console.warn("de-queueing event obj88633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88633_onTap_activeActionGroupIndex = 3;
	





















};
obj88628_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88628_onTap_activeActionGroupIndex = -1;
		$("#obj88628").trigger("obj88628_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88628) {
				console.warn("de-queueing event obj88628." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88628").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88628_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88628 
hide_88630();
function hide_88630() {
	var selector = "#obj88628";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88628_onTap_runningActionsCount = obj88628_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88628_onTap_runningActionsCount = window.obj88628_onTap_runningActionsCount - 1;
if (window.obj88628_onTap_runningActionsCount < 0) {
	window.obj88628_onTap_runningActionsCount = 0;
} else if (window.obj88628_onTap_runningActionsCount == 0) {
	obj88628_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88630(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88628_onTap_runningActionsCount = window.obj88628_onTap_runningActionsCount - 1;
if (window.obj88628_onTap_runningActionsCount < 0) {
	window.obj88628_onTap_runningActionsCount = 0;
} else if (window.obj88628_onTap_runningActionsCount == 0) {
	obj88628_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88628_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88628_onTap_activeActionGroupIndex = -1;
		$("#obj88628").trigger("obj88628_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88628) {
				console.warn("de-queueing event obj88628." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88628").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88628_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88633
(function(){
	window.obj88628_onTap_runningActionsCount = obj88628_onTap_runningActionsCount + 1;

	var selector = "#obj88633";
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
					window.obj88628_onTap_runningActionsCount = window.obj88628_onTap_runningActionsCount - 1;
if (window.obj88628_onTap_runningActionsCount < 0) {
	window.obj88628_onTap_runningActionsCount = 0;
} else if (window.obj88628_onTap_runningActionsCount == 0) {
	obj88628_onTap_actionGroup2();
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
				window.obj88628_onTap_runningActionsCount = window.obj88628_onTap_runningActionsCount - 1;
if (window.obj88628_onTap_runningActionsCount < 0) {
	window.obj88628_onTap_runningActionsCount = 0;
} else if (window.obj88628_onTap_runningActionsCount == 0) {
	obj88628_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88628_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88628_onTap_activeActionGroupIndex = -1;
		$("#obj88628").trigger("obj88628_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88628) {
				console.warn("de-queueing event obj88628." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88628").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88628_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88638 
playAudio_88632();
function playAudio_88632() {
	window.obj88628_onTap_runningActionsCount = obj88628_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88638")[0];
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
		    window.obj88628_onTap_runningActionsCount = window.obj88628_onTap_runningActionsCount - 1;
if (window.obj88628_onTap_runningActionsCount < 0) {
	window.obj88628_onTap_runningActionsCount = 0;
} else if (window.obj88628_onTap_runningActionsCount == 0) {
	obj88628_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88628_onTap_runningActionsCount = window.obj88628_onTap_runningActionsCount - 1;
if (window.obj88628_onTap_runningActionsCount < 0) {
	window.obj88628_onTap_runningActionsCount = 0;
} else if (window.obj88628_onTap_runningActionsCount == 0) {
	obj88628_onTap_actionGroup3();
}
	}
}









};
obj88628_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88628_onTap_activeActionGroupIndex = -1;
		$("#obj88628").trigger("obj88628_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88628) {
				console.warn("de-queueing event obj88628." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88628").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88628_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj43512: Event Touch Down
 *
 */
$("#obj43512").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43512_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43512_onTap is still running");
	return;
}
var obj43512_onTap_runningActionsCount = 0;
var obj43512_onTap_loopCount = 0;
obj43512_onTap_actionGroup0();
});










/*
 *
 *   obj43509: Event Touch Down
 *
 */
$("#obj43509").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43509_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43509_onTap is still running");
	return;
}
var obj43509_onTap_runningActionsCount = 0;
var obj43509_onTap_loopCount = 0;
obj43509_onTap_actionGroup0();
});






































































/*
 *
 *   obj67358: Event Touch Down
 *
 */
$("#obj67358").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67358_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67358_onTap is still running");
	return;
}
var obj67358_onTap_runningActionsCount = 0;
var obj67358_onTap_loopCount = 0;
obj67358_onTap_actionGroup0();
});










/*
 *
 *   obj67350: Event Touch Down
 *
 */
$("#obj67350").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67350_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67350_onTap is still running");
	return;
}
var obj67350_onTap_runningActionsCount = 0;
var obj67350_onTap_loopCount = 0;
obj67350_onTap_actionGroup0();
});










/*
 *
 *   obj88633: Event Touch Down
 *
 */
$("#obj88633").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88633_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88633_onTap is still running");
	return;
}
var obj88633_onTap_runningActionsCount = 0;
var obj88633_onTap_loopCount = 0;
obj88633_onTap_actionGroup0();
});










/*
 *
 *   obj88628: Event Touch Down
 *
 */
$("#obj88628").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88628_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88628_onTap is still running");
	return;
}
var obj88628_onTap_runningActionsCount = 0;
var obj88628_onTap_loopCount = 0;
obj88628_onTap_actionGroup0();
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
	
$("#obj43507").trigger('SCEventShow');
$("#obj43512").trigger('SCEventShow');
$("#obj43509").trigger('SCEventShow');
$("#obj43530").trigger('SCEventShow');
$("#obj43528").trigger('SCEventShow');
$("#obj43532").trigger('SCEventShow');
$("#obj43534").trigger('SCEventShow');
$("#obj43536").trigger('SCEventShow');
$("#obj43539").trigger('SCEventShow');
$("#obj67358").trigger('SCEventShow');
$("#obj67350").trigger('SCEventShow');
$("#obj88633").trigger('SCEventShow');
$("#obj88628").trigger('SCEventShow');
$("#obj88638").trigger('SCEventShow');
$("#obj94923").trigger('SCEventShow');
$("#obj67364").trigger('SCEventShow');
	
});