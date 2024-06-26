pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 37836;
pubcoder.page.title = pubcoder.page.title || "126";
pubcoder.page.number = pubcoder.page.number || 126;
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
var obj37850_onTap_activeActionGroupIndex = -1;
var obj37850_onTap_runningActionsCount = 0;
var obj37850_onTap_loopCount = 0;
var obj37847_onTap_activeActionGroupIndex = -1;
var obj37847_onTap_runningActionsCount = 0;
var obj37847_onTap_loopCount = 0;
var obj37868_onTap_activeActionGroupIndex = -1;
var obj37868_onTap_runningActionsCount = 0;
var obj37868_onTap_loopCount = 0;
var obj67022_onTap_activeActionGroupIndex = -1;
var obj67022_onTap_runningActionsCount = 0;
var obj67022_onTap_loopCount = 0;
var obj67014_onTap_activeActionGroupIndex = -1;
var obj67014_onTap_runningActionsCount = 0;
var obj67014_onTap_loopCount = 0;
var obj88381_onTap_activeActionGroupIndex = -1;
var obj88381_onTap_runningActionsCount = 0;
var obj88381_onTap_loopCount = 0;
var obj88376_onTap_activeActionGroupIndex = -1;
var obj88376_onTap_runningActionsCount = 0;
var obj88376_onTap_loopCount = 0;
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
		
obj37850_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37850_onTap_activeActionGroupIndex = -1;
		$("#obj37850").trigger("obj37850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37850) {
				console.warn("de-queueing event obj37850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37850_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_37852();
function goToPage_37852() {
	window.obj37850_onTap_runningActionsCount = obj37850_onTap_runningActionsCount + 1;
	$("#anchor757")[0].click();
	window.obj37850_onTap_runningActionsCount = window.obj37850_onTap_runningActionsCount - 1;
if (window.obj37850_onTap_runningActionsCount < 0) {
	window.obj37850_onTap_runningActionsCount = 0;
} else if (window.obj37850_onTap_runningActionsCount == 0) {
	obj37850_onTap_actionGroup1();
}
}





















};
obj37850_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37850_onTap_activeActionGroupIndex = -1;
		$("#obj37850").trigger("obj37850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37850) {
				console.warn("de-queueing event obj37850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37850_onTap_activeActionGroupIndex = 1;
	





















};
obj37847_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37847_onTap_activeActionGroupIndex = -1;
		$("#obj37847").trigger("obj37847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37847) {
				console.warn("de-queueing event obj37847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37847_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_37849();
function goToPage_37849() {
	window.obj37847_onTap_runningActionsCount = obj37847_onTap_runningActionsCount + 1;
	$("#anchor758")[0].click();
	window.obj37847_onTap_runningActionsCount = window.obj37847_onTap_runningActionsCount - 1;
if (window.obj37847_onTap_runningActionsCount < 0) {
	window.obj37847_onTap_runningActionsCount = 0;
} else if (window.obj37847_onTap_runningActionsCount == 0) {
	obj37847_onTap_actionGroup1();
}
}





















};
obj37847_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37847_onTap_activeActionGroupIndex = -1;
		$("#obj37847").trigger("obj37847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37847) {
				console.warn("de-queueing event obj37847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37847_onTap_activeActionGroupIndex = 1;
	





















};
obj37868_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37868_onTap_activeActionGroupIndex = -1;
		$("#obj37868").trigger("obj37868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37868) {
				console.warn("de-queueing event obj37868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37868_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_37870();
function runjs_37870() {
	window.obj37868_onTap_runningActionsCount = obj37868_onTap_runningActionsCount + 1;

	$("#obj37868").css("border-color", "#058E3F"); $("#obj37868").css("border-width", "2px"); $("#obj37868").css("border-style", "solid"); $("#obj37868").css("border-radius", "10px"); $("#obj37868").css("-webkit-border-radius", "10px"); $("#obj37868").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj37868_onTap_runningActionsCount = window.obj37868_onTap_runningActionsCount - 1;
if (window.obj37868_onTap_runningActionsCount < 0) {
	window.obj37868_onTap_runningActionsCount = 0;
} else if (window.obj37868_onTap_runningActionsCount == 0) {
	obj37868_onTap_actionGroup1();
}
	}, 1);
}







};
obj37868_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37868_onTap_activeActionGroupIndex = -1;
		$("#obj37868").trigger("obj37868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37868) {
				console.warn("de-queueing event obj37868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37868_onTap_activeActionGroupIndex = 1;
	





















};
obj67022_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67022_onTap_activeActionGroupIndex = -1;
		$("#obj67022").trigger("obj67022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67022) {
				console.warn("de-queueing event obj67022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67022_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67022 
hide_67025();
function hide_67025() {
	var selector = "#obj67022";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67022_onTap_runningActionsCount = obj67022_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67022_onTap_runningActionsCount = window.obj67022_onTap_runningActionsCount - 1;
if (window.obj67022_onTap_runningActionsCount < 0) {
	window.obj67022_onTap_runningActionsCount = 0;
} else if (window.obj67022_onTap_runningActionsCount == 0) {
	obj67022_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67025(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67022_onTap_runningActionsCount = window.obj67022_onTap_runningActionsCount - 1;
if (window.obj67022_onTap_runningActionsCount < 0) {
	window.obj67022_onTap_runningActionsCount = 0;
} else if (window.obj67022_onTap_runningActionsCount == 0) {
	obj67022_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67028 
stopMovie_67024();
function stopMovie_67024() {
	window.obj67022_onTap_runningActionsCount = obj67022_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67028")[0];
	myVideo.pause();
	window.obj67022_onTap_runningActionsCount = window.obj67022_onTap_runningActionsCount - 1;
if (window.obj67022_onTap_runningActionsCount < 0) {
	window.obj67022_onTap_runningActionsCount = 0;
} else if (window.obj67022_onTap_runningActionsCount == 0) {
	obj67022_onTap_actionGroup1();
}
}
















};
obj67022_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67022_onTap_activeActionGroupIndex = -1;
		$("#obj67022").trigger("obj67022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67022) {
				console.warn("de-queueing event obj67022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67022_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67014
(function(){
	window.obj67022_onTap_runningActionsCount = obj67022_onTap_runningActionsCount + 1;

	var selector = "#obj67014";
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
					window.obj67022_onTap_runningActionsCount = window.obj67022_onTap_runningActionsCount - 1;
if (window.obj67022_onTap_runningActionsCount < 0) {
	window.obj67022_onTap_runningActionsCount = 0;
} else if (window.obj67022_onTap_runningActionsCount == 0) {
	obj67022_onTap_actionGroup2();
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
				window.obj67022_onTap_runningActionsCount = window.obj67022_onTap_runningActionsCount - 1;
if (window.obj67022_onTap_runningActionsCount < 0) {
	window.obj67022_onTap_runningActionsCount = 0;
} else if (window.obj67022_onTap_runningActionsCount == 0) {
	obj67022_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67022_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67022_onTap_activeActionGroupIndex = -1;
		$("#obj67022").trigger("obj67022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67022) {
				console.warn("de-queueing event obj67022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67022_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67028 
move_67027();
function move_67027() {
	window.obj67022_onTap_runningActionsCount = obj67022_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67028");
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
			window.obj67022_onTap_runningActionsCount = window.obj67022_onTap_runningActionsCount - 1;
if (window.obj67022_onTap_runningActionsCount < 0) {
	window.obj67022_onTap_runningActionsCount = 0;
} else if (window.obj67022_onTap_runningActionsCount == 0) {
	obj67022_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67022_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67022_onTap_activeActionGroupIndex = -1;
		$("#obj67022").trigger("obj67022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67022) {
				console.warn("de-queueing event obj67022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67022_onTap_activeActionGroupIndex = 3;
	





















};
obj67014_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67014_onTap_activeActionGroupIndex = -1;
		$("#obj67014").trigger("obj67014_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67014) {
				console.warn("de-queueing event obj67014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67014_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67014 
hide_67017();
function hide_67017() {
	var selector = "#obj67014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67014_onTap_runningActionsCount = obj67014_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67014_onTap_runningActionsCount = window.obj67014_onTap_runningActionsCount - 1;
if (window.obj67014_onTap_runningActionsCount < 0) {
	window.obj67014_onTap_runningActionsCount = 0;
} else if (window.obj67014_onTap_runningActionsCount == 0) {
	obj67014_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67017(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67014_onTap_runningActionsCount = window.obj67014_onTap_runningActionsCount - 1;
if (window.obj67014_onTap_runningActionsCount < 0) {
	window.obj67014_onTap_runningActionsCount = 0;
} else if (window.obj67014_onTap_runningActionsCount == 0) {
	obj67014_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67028 
playPauseMovie_67016();
function playPauseMovie_67016() {
	window.obj67014_onTap_runningActionsCount = obj67014_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67028")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67014_onTap_runningActionsCount = window.obj67014_onTap_runningActionsCount - 1;
if (window.obj67014_onTap_runningActionsCount < 0) {
	window.obj67014_onTap_runningActionsCount = 0;
} else if (window.obj67014_onTap_runningActionsCount == 0) {
	obj67014_onTap_actionGroup1();
}
}

















};
obj67014_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67014_onTap_activeActionGroupIndex = -1;
		$("#obj67014").trigger("obj67014_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67014) {
				console.warn("de-queueing event obj67014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67014_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67022
(function(){
	window.obj67014_onTap_runningActionsCount = obj67014_onTap_runningActionsCount + 1;

	var selector = "#obj67022";
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
					window.obj67014_onTap_runningActionsCount = window.obj67014_onTap_runningActionsCount - 1;
if (window.obj67014_onTap_runningActionsCount < 0) {
	window.obj67014_onTap_runningActionsCount = 0;
} else if (window.obj67014_onTap_runningActionsCount == 0) {
	obj67014_onTap_actionGroup2();
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
				window.obj67014_onTap_runningActionsCount = window.obj67014_onTap_runningActionsCount - 1;
if (window.obj67014_onTap_runningActionsCount < 0) {
	window.obj67014_onTap_runningActionsCount = 0;
} else if (window.obj67014_onTap_runningActionsCount == 0) {
	obj67014_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67014_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67014_onTap_activeActionGroupIndex = -1;
		$("#obj67014").trigger("obj67014_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67014) {
				console.warn("de-queueing event obj67014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67014_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67028 
move_67019();
function move_67019() {
	window.obj67014_onTap_runningActionsCount = obj67014_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67028");
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
			window.obj67014_onTap_runningActionsCount = window.obj67014_onTap_runningActionsCount - 1;
if (window.obj67014_onTap_runningActionsCount < 0) {
	window.obj67014_onTap_runningActionsCount = 0;
} else if (window.obj67014_onTap_runningActionsCount == 0) {
	obj67014_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67014_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67014_onTap_activeActionGroupIndex = -1;
		$("#obj67014").trigger("obj67014_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67014) {
				console.warn("de-queueing event obj67014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67014_onTap_activeActionGroupIndex = 3;
	





















};
obj88381_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88381_onTap_activeActionGroupIndex = -1;
		$("#obj88381").trigger("obj88381_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88381) {
				console.warn("de-queueing event obj88381." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88381").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88381_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88386 
stopAudio_88383();
function stopAudio_88383() {
	window.obj88381_onTap_runningActionsCount = obj88381_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88386")[0];
	myAudio.pause();
	window.obj88381_onTap_runningActionsCount = window.obj88381_onTap_runningActionsCount - 1;
if (window.obj88381_onTap_runningActionsCount < 0) {
	window.obj88381_onTap_runningActionsCount = 0;
} else if (window.obj88381_onTap_runningActionsCount == 0) {
	obj88381_onTap_actionGroup1();
}
}








};
obj88381_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88381_onTap_activeActionGroupIndex = -1;
		$("#obj88381").trigger("obj88381_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88381) {
				console.warn("de-queueing event obj88381." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88381").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88381_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88381 
hide_88384();
function hide_88384() {
	var selector = "#obj88381";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88381_onTap_runningActionsCount = obj88381_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88381_onTap_runningActionsCount = window.obj88381_onTap_runningActionsCount - 1;
if (window.obj88381_onTap_runningActionsCount < 0) {
	window.obj88381_onTap_runningActionsCount = 0;
} else if (window.obj88381_onTap_runningActionsCount == 0) {
	obj88381_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88384(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88381_onTap_runningActionsCount = window.obj88381_onTap_runningActionsCount - 1;
if (window.obj88381_onTap_runningActionsCount < 0) {
	window.obj88381_onTap_runningActionsCount = 0;
} else if (window.obj88381_onTap_runningActionsCount == 0) {
	obj88381_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88381_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88381_onTap_activeActionGroupIndex = -1;
		$("#obj88381").trigger("obj88381_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88381) {
				console.warn("de-queueing event obj88381." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88381").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88381_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88376
(function(){
	window.obj88381_onTap_runningActionsCount = obj88381_onTap_runningActionsCount + 1;

	var selector = "#obj88376";
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
					window.obj88381_onTap_runningActionsCount = window.obj88381_onTap_runningActionsCount - 1;
if (window.obj88381_onTap_runningActionsCount < 0) {
	window.obj88381_onTap_runningActionsCount = 0;
} else if (window.obj88381_onTap_runningActionsCount == 0) {
	obj88381_onTap_actionGroup3();
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
				window.obj88381_onTap_runningActionsCount = window.obj88381_onTap_runningActionsCount - 1;
if (window.obj88381_onTap_runningActionsCount < 0) {
	window.obj88381_onTap_runningActionsCount = 0;
} else if (window.obj88381_onTap_runningActionsCount == 0) {
	obj88381_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88381_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88381_onTap_activeActionGroupIndex = -1;
		$("#obj88381").trigger("obj88381_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88381) {
				console.warn("de-queueing event obj88381." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88381").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88381_onTap_activeActionGroupIndex = 3;
	





















};
obj88376_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88376_onTap_activeActionGroupIndex = -1;
		$("#obj88376").trigger("obj88376_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88376) {
				console.warn("de-queueing event obj88376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88376_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88376 
hide_88378();
function hide_88378() {
	var selector = "#obj88376";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88376_onTap_runningActionsCount = obj88376_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88376_onTap_runningActionsCount = window.obj88376_onTap_runningActionsCount - 1;
if (window.obj88376_onTap_runningActionsCount < 0) {
	window.obj88376_onTap_runningActionsCount = 0;
} else if (window.obj88376_onTap_runningActionsCount == 0) {
	obj88376_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88378(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88376_onTap_runningActionsCount = window.obj88376_onTap_runningActionsCount - 1;
if (window.obj88376_onTap_runningActionsCount < 0) {
	window.obj88376_onTap_runningActionsCount = 0;
} else if (window.obj88376_onTap_runningActionsCount == 0) {
	obj88376_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88376_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88376_onTap_activeActionGroupIndex = -1;
		$("#obj88376").trigger("obj88376_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88376) {
				console.warn("de-queueing event obj88376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88376_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88381
(function(){
	window.obj88376_onTap_runningActionsCount = obj88376_onTap_runningActionsCount + 1;

	var selector = "#obj88381";
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
					window.obj88376_onTap_runningActionsCount = window.obj88376_onTap_runningActionsCount - 1;
if (window.obj88376_onTap_runningActionsCount < 0) {
	window.obj88376_onTap_runningActionsCount = 0;
} else if (window.obj88376_onTap_runningActionsCount == 0) {
	obj88376_onTap_actionGroup2();
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
				window.obj88376_onTap_runningActionsCount = window.obj88376_onTap_runningActionsCount - 1;
if (window.obj88376_onTap_runningActionsCount < 0) {
	window.obj88376_onTap_runningActionsCount = 0;
} else if (window.obj88376_onTap_runningActionsCount == 0) {
	obj88376_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88376_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88376_onTap_activeActionGroupIndex = -1;
		$("#obj88376").trigger("obj88376_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88376) {
				console.warn("de-queueing event obj88376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88376_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88386 
playAudio_88380();
function playAudio_88380() {
	window.obj88376_onTap_runningActionsCount = obj88376_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88386")[0];
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
		    window.obj88376_onTap_runningActionsCount = window.obj88376_onTap_runningActionsCount - 1;
if (window.obj88376_onTap_runningActionsCount < 0) {
	window.obj88376_onTap_runningActionsCount = 0;
} else if (window.obj88376_onTap_runningActionsCount == 0) {
	obj88376_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88376_onTap_runningActionsCount = window.obj88376_onTap_runningActionsCount - 1;
if (window.obj88376_onTap_runningActionsCount < 0) {
	window.obj88376_onTap_runningActionsCount = 0;
} else if (window.obj88376_onTap_runningActionsCount == 0) {
	obj88376_onTap_actionGroup3();
}
	}
}









};
obj88376_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88376_onTap_activeActionGroupIndex = -1;
		$("#obj88376").trigger("obj88376_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88376) {
				console.warn("de-queueing event obj88376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88376_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj37850: Event Touch Down
 *
 */
$("#obj37850").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj37850_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37850_onTap is still running");
	return;
}
var obj37850_onTap_runningActionsCount = 0;
var obj37850_onTap_loopCount = 0;
obj37850_onTap_actionGroup0();
});










/*
 *
 *   obj37847: Event Touch Down
 *
 */
$("#obj37847").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj37847_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37847_onTap is still running");
	return;
}
var obj37847_onTap_runningActionsCount = 0;
var obj37847_onTap_loopCount = 0;
obj37847_onTap_actionGroup0();
});






































































/*
 *
 *   obj37868: Event Touch Down
 *
 */
$("#obj37868").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj37868_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37868_onTap is still running");
	return;
}
var obj37868_onTap_runningActionsCount = 0;
var obj37868_onTap_loopCount = 0;
obj37868_onTap_actionGroup0();
});






























/*
 *
 *   obj67022: Event Touch Down
 *
 */
$("#obj67022").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67022_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67022_onTap is still running");
	return;
}
var obj67022_onTap_runningActionsCount = 0;
var obj67022_onTap_loopCount = 0;
obj67022_onTap_actionGroup0();
});










/*
 *
 *   obj67014: Event Touch Down
 *
 */
$("#obj67014").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67014_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67014_onTap is still running");
	return;
}
var obj67014_onTap_runningActionsCount = 0;
var obj67014_onTap_loopCount = 0;
obj67014_onTap_actionGroup0();
});










/*
 *
 *   obj88381: Event Touch Down
 *
 */
$("#obj88381").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88381_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88381_onTap is still running");
	return;
}
var obj88381_onTap_runningActionsCount = 0;
var obj88381_onTap_loopCount = 0;
obj88381_onTap_actionGroup0();
});










/*
 *
 *   obj88376: Event Touch Down
 *
 */
$("#obj88376").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88376_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88376_onTap is still running");
	return;
}
var obj88376_onTap_runningActionsCount = 0;
var obj88376_onTap_loopCount = 0;
obj88376_onTap_actionGroup0();
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
	
$("#obj37866").trigger('SCEventShow');
$("#obj37850").trigger('SCEventShow');
$("#obj37847").trigger('SCEventShow');
$("#obj37845").trigger('SCEventShow');
$("#obj37843").trigger('SCEventShow');
$("#obj37841").trigger('SCEventShow');
$("#obj37839").trigger('SCEventShow');
$("#obj37837").trigger('SCEventShow');
$("#obj37874").trigger('SCEventShow');
$("#obj37868").trigger('SCEventShow');
$("#obj37872").trigger('SCEventShow');
$("#obj37876").trigger('SCEventShow');
$("#obj67022").trigger('SCEventShow');
$("#obj67014").trigger('SCEventShow');
$("#obj88381").trigger('SCEventShow');
$("#obj88376").trigger('SCEventShow');
$("#obj88386").trigger('SCEventShow');
$("#obj94881").trigger('SCEventShow');
$("#obj67028").trigger('SCEventShow');
	
});