pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 54912;
pubcoder.page.title = pubcoder.page.title || "197";
pubcoder.page.number = pubcoder.page.number || 197;
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
var obj54920_onTap_activeActionGroupIndex = -1;
var obj54920_onTap_runningActionsCount = 0;
var obj54920_onTap_loopCount = 0;
var obj54917_onTap_activeActionGroupIndex = -1;
var obj54917_onTap_runningActionsCount = 0;
var obj54917_onTap_loopCount = 0;
var obj68190_onTap_activeActionGroupIndex = -1;
var obj68190_onTap_runningActionsCount = 0;
var obj68190_onTap_loopCount = 0;
var obj68182_onTap_activeActionGroupIndex = -1;
var obj68182_onTap_runningActionsCount = 0;
var obj68182_onTap_loopCount = 0;
var obj89245_onTap_activeActionGroupIndex = -1;
var obj89245_onTap_runningActionsCount = 0;
var obj89245_onTap_loopCount = 0;
var obj89240_onTap_activeActionGroupIndex = -1;
var obj89240_onTap_runningActionsCount = 0;
var obj89240_onTap_loopCount = 0;
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
		
obj54920_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54920_onTap_activeActionGroupIndex = -1;
		$("#obj54920").trigger("obj54920_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54920) {
				console.warn("de-queueing event obj54920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54920_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_54922();
function goToPage_54922() {
	window.obj54920_onTap_runningActionsCount = obj54920_onTap_runningActionsCount + 1;
	$("#anchor1161")[0].click();
	window.obj54920_onTap_runningActionsCount = window.obj54920_onTap_runningActionsCount - 1;
if (window.obj54920_onTap_runningActionsCount < 0) {
	window.obj54920_onTap_runningActionsCount = 0;
} else if (window.obj54920_onTap_runningActionsCount == 0) {
	obj54920_onTap_actionGroup1();
}
}





















};
obj54920_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54920_onTap_activeActionGroupIndex = -1;
		$("#obj54920").trigger("obj54920_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54920) {
				console.warn("de-queueing event obj54920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54920_onTap_activeActionGroupIndex = 1;
	





















};
obj54917_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54917_onTap_activeActionGroupIndex = -1;
		$("#obj54917").trigger("obj54917_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54917) {
				console.warn("de-queueing event obj54917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54917_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_54919();
function goToPage_54919() {
	window.obj54917_onTap_runningActionsCount = obj54917_onTap_runningActionsCount + 1;
	$("#anchor1162")[0].click();
	window.obj54917_onTap_runningActionsCount = window.obj54917_onTap_runningActionsCount - 1;
if (window.obj54917_onTap_runningActionsCount < 0) {
	window.obj54917_onTap_runningActionsCount = 0;
} else if (window.obj54917_onTap_runningActionsCount == 0) {
	obj54917_onTap_actionGroup1();
}
}





















};
obj54917_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54917_onTap_activeActionGroupIndex = -1;
		$("#obj54917").trigger("obj54917_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54917) {
				console.warn("de-queueing event obj54917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54917_onTap_activeActionGroupIndex = 1;
	





















};
obj68190_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68190_onTap_activeActionGroupIndex = -1;
		$("#obj68190").trigger("obj68190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68190) {
				console.warn("de-queueing event obj68190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68190_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68190 
hide_68193();
function hide_68193() {
	var selector = "#obj68190";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68190_onTap_runningActionsCount = obj68190_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68190_onTap_runningActionsCount = window.obj68190_onTap_runningActionsCount - 1;
if (window.obj68190_onTap_runningActionsCount < 0) {
	window.obj68190_onTap_runningActionsCount = 0;
} else if (window.obj68190_onTap_runningActionsCount == 0) {
	obj68190_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68193(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68190_onTap_runningActionsCount = window.obj68190_onTap_runningActionsCount - 1;
if (window.obj68190_onTap_runningActionsCount < 0) {
	window.obj68190_onTap_runningActionsCount = 0;
} else if (window.obj68190_onTap_runningActionsCount == 0) {
	obj68190_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68196 
stopMovie_68192();
function stopMovie_68192() {
	window.obj68190_onTap_runningActionsCount = obj68190_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68196")[0];
	myVideo.pause();
	window.obj68190_onTap_runningActionsCount = window.obj68190_onTap_runningActionsCount - 1;
if (window.obj68190_onTap_runningActionsCount < 0) {
	window.obj68190_onTap_runningActionsCount = 0;
} else if (window.obj68190_onTap_runningActionsCount == 0) {
	obj68190_onTap_actionGroup1();
}
}
















};
obj68190_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68190_onTap_activeActionGroupIndex = -1;
		$("#obj68190").trigger("obj68190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68190) {
				console.warn("de-queueing event obj68190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68190_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68182
(function(){
	window.obj68190_onTap_runningActionsCount = obj68190_onTap_runningActionsCount + 1;

	var selector = "#obj68182";
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
					window.obj68190_onTap_runningActionsCount = window.obj68190_onTap_runningActionsCount - 1;
if (window.obj68190_onTap_runningActionsCount < 0) {
	window.obj68190_onTap_runningActionsCount = 0;
} else if (window.obj68190_onTap_runningActionsCount == 0) {
	obj68190_onTap_actionGroup2();
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
				window.obj68190_onTap_runningActionsCount = window.obj68190_onTap_runningActionsCount - 1;
if (window.obj68190_onTap_runningActionsCount < 0) {
	window.obj68190_onTap_runningActionsCount = 0;
} else if (window.obj68190_onTap_runningActionsCount == 0) {
	obj68190_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68190_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68190_onTap_activeActionGroupIndex = -1;
		$("#obj68190").trigger("obj68190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68190) {
				console.warn("de-queueing event obj68190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68190_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68196 
move_68195();
function move_68195() {
	window.obj68190_onTap_runningActionsCount = obj68190_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68196");
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
			window.obj68190_onTap_runningActionsCount = window.obj68190_onTap_runningActionsCount - 1;
if (window.obj68190_onTap_runningActionsCount < 0) {
	window.obj68190_onTap_runningActionsCount = 0;
} else if (window.obj68190_onTap_runningActionsCount == 0) {
	obj68190_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68190_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68190_onTap_activeActionGroupIndex = -1;
		$("#obj68190").trigger("obj68190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68190) {
				console.warn("de-queueing event obj68190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68190_onTap_activeActionGroupIndex = 3;
	





















};
obj68182_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68182_onTap_activeActionGroupIndex = -1;
		$("#obj68182").trigger("obj68182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68182) {
				console.warn("de-queueing event obj68182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68182_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68182 
hide_68185();
function hide_68185() {
	var selector = "#obj68182";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68182_onTap_runningActionsCount = obj68182_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68182_onTap_runningActionsCount = window.obj68182_onTap_runningActionsCount - 1;
if (window.obj68182_onTap_runningActionsCount < 0) {
	window.obj68182_onTap_runningActionsCount = 0;
} else if (window.obj68182_onTap_runningActionsCount == 0) {
	obj68182_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68185(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68182_onTap_runningActionsCount = window.obj68182_onTap_runningActionsCount - 1;
if (window.obj68182_onTap_runningActionsCount < 0) {
	window.obj68182_onTap_runningActionsCount = 0;
} else if (window.obj68182_onTap_runningActionsCount == 0) {
	obj68182_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68196 
playPauseMovie_68184();
function playPauseMovie_68184() {
	window.obj68182_onTap_runningActionsCount = obj68182_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68196")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68182_onTap_runningActionsCount = window.obj68182_onTap_runningActionsCount - 1;
if (window.obj68182_onTap_runningActionsCount < 0) {
	window.obj68182_onTap_runningActionsCount = 0;
} else if (window.obj68182_onTap_runningActionsCount == 0) {
	obj68182_onTap_actionGroup1();
}
}

















};
obj68182_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68182_onTap_activeActionGroupIndex = -1;
		$("#obj68182").trigger("obj68182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68182) {
				console.warn("de-queueing event obj68182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68182_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68190
(function(){
	window.obj68182_onTap_runningActionsCount = obj68182_onTap_runningActionsCount + 1;

	var selector = "#obj68190";
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
					window.obj68182_onTap_runningActionsCount = window.obj68182_onTap_runningActionsCount - 1;
if (window.obj68182_onTap_runningActionsCount < 0) {
	window.obj68182_onTap_runningActionsCount = 0;
} else if (window.obj68182_onTap_runningActionsCount == 0) {
	obj68182_onTap_actionGroup2();
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
				window.obj68182_onTap_runningActionsCount = window.obj68182_onTap_runningActionsCount - 1;
if (window.obj68182_onTap_runningActionsCount < 0) {
	window.obj68182_onTap_runningActionsCount = 0;
} else if (window.obj68182_onTap_runningActionsCount == 0) {
	obj68182_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68182_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68182_onTap_activeActionGroupIndex = -1;
		$("#obj68182").trigger("obj68182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68182) {
				console.warn("de-queueing event obj68182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68182_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68196 
move_68187();
function move_68187() {
	window.obj68182_onTap_runningActionsCount = obj68182_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68196");
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
			window.obj68182_onTap_runningActionsCount = window.obj68182_onTap_runningActionsCount - 1;
if (window.obj68182_onTap_runningActionsCount < 0) {
	window.obj68182_onTap_runningActionsCount = 0;
} else if (window.obj68182_onTap_runningActionsCount == 0) {
	obj68182_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68182_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68182_onTap_activeActionGroupIndex = -1;
		$("#obj68182").trigger("obj68182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68182) {
				console.warn("de-queueing event obj68182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68182_onTap_activeActionGroupIndex = 3;
	





















};
obj89245_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89245_onTap_activeActionGroupIndex = -1;
		$("#obj89245").trigger("obj89245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89245) {
				console.warn("de-queueing event obj89245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89245_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89250 
stopAudio_89247();
function stopAudio_89247() {
	window.obj89245_onTap_runningActionsCount = obj89245_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89250")[0];
	myAudio.pause();
	window.obj89245_onTap_runningActionsCount = window.obj89245_onTap_runningActionsCount - 1;
if (window.obj89245_onTap_runningActionsCount < 0) {
	window.obj89245_onTap_runningActionsCount = 0;
} else if (window.obj89245_onTap_runningActionsCount == 0) {
	obj89245_onTap_actionGroup1();
}
}








};
obj89245_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89245_onTap_activeActionGroupIndex = -1;
		$("#obj89245").trigger("obj89245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89245) {
				console.warn("de-queueing event obj89245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89245_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89245 
hide_89248();
function hide_89248() {
	var selector = "#obj89245";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89245_onTap_runningActionsCount = obj89245_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89245_onTap_runningActionsCount = window.obj89245_onTap_runningActionsCount - 1;
if (window.obj89245_onTap_runningActionsCount < 0) {
	window.obj89245_onTap_runningActionsCount = 0;
} else if (window.obj89245_onTap_runningActionsCount == 0) {
	obj89245_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89248(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89245_onTap_runningActionsCount = window.obj89245_onTap_runningActionsCount - 1;
if (window.obj89245_onTap_runningActionsCount < 0) {
	window.obj89245_onTap_runningActionsCount = 0;
} else if (window.obj89245_onTap_runningActionsCount == 0) {
	obj89245_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89245_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89245_onTap_activeActionGroupIndex = -1;
		$("#obj89245").trigger("obj89245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89245) {
				console.warn("de-queueing event obj89245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89245_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89240
(function(){
	window.obj89245_onTap_runningActionsCount = obj89245_onTap_runningActionsCount + 1;

	var selector = "#obj89240";
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
					window.obj89245_onTap_runningActionsCount = window.obj89245_onTap_runningActionsCount - 1;
if (window.obj89245_onTap_runningActionsCount < 0) {
	window.obj89245_onTap_runningActionsCount = 0;
} else if (window.obj89245_onTap_runningActionsCount == 0) {
	obj89245_onTap_actionGroup3();
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
				window.obj89245_onTap_runningActionsCount = window.obj89245_onTap_runningActionsCount - 1;
if (window.obj89245_onTap_runningActionsCount < 0) {
	window.obj89245_onTap_runningActionsCount = 0;
} else if (window.obj89245_onTap_runningActionsCount == 0) {
	obj89245_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89245_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89245_onTap_activeActionGroupIndex = -1;
		$("#obj89245").trigger("obj89245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89245) {
				console.warn("de-queueing event obj89245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89245_onTap_activeActionGroupIndex = 3;
	





















};
obj89240_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89240_onTap_activeActionGroupIndex = -1;
		$("#obj89240").trigger("obj89240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89240) {
				console.warn("de-queueing event obj89240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89240_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89240 
hide_89242();
function hide_89242() {
	var selector = "#obj89240";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89240_onTap_runningActionsCount = obj89240_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89240_onTap_runningActionsCount = window.obj89240_onTap_runningActionsCount - 1;
if (window.obj89240_onTap_runningActionsCount < 0) {
	window.obj89240_onTap_runningActionsCount = 0;
} else if (window.obj89240_onTap_runningActionsCount == 0) {
	obj89240_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89242(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89240_onTap_runningActionsCount = window.obj89240_onTap_runningActionsCount - 1;
if (window.obj89240_onTap_runningActionsCount < 0) {
	window.obj89240_onTap_runningActionsCount = 0;
} else if (window.obj89240_onTap_runningActionsCount == 0) {
	obj89240_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89240_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89240_onTap_activeActionGroupIndex = -1;
		$("#obj89240").trigger("obj89240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89240) {
				console.warn("de-queueing event obj89240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89240_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89245
(function(){
	window.obj89240_onTap_runningActionsCount = obj89240_onTap_runningActionsCount + 1;

	var selector = "#obj89245";
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
					window.obj89240_onTap_runningActionsCount = window.obj89240_onTap_runningActionsCount - 1;
if (window.obj89240_onTap_runningActionsCount < 0) {
	window.obj89240_onTap_runningActionsCount = 0;
} else if (window.obj89240_onTap_runningActionsCount == 0) {
	obj89240_onTap_actionGroup2();
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
				window.obj89240_onTap_runningActionsCount = window.obj89240_onTap_runningActionsCount - 1;
if (window.obj89240_onTap_runningActionsCount < 0) {
	window.obj89240_onTap_runningActionsCount = 0;
} else if (window.obj89240_onTap_runningActionsCount == 0) {
	obj89240_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89240_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89240_onTap_activeActionGroupIndex = -1;
		$("#obj89240").trigger("obj89240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89240) {
				console.warn("de-queueing event obj89240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89240_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89250 
playAudio_89244();
function playAudio_89244() {
	window.obj89240_onTap_runningActionsCount = obj89240_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89250")[0];
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
		    window.obj89240_onTap_runningActionsCount = window.obj89240_onTap_runningActionsCount - 1;
if (window.obj89240_onTap_runningActionsCount < 0) {
	window.obj89240_onTap_runningActionsCount = 0;
} else if (window.obj89240_onTap_runningActionsCount == 0) {
	obj89240_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89240_onTap_runningActionsCount = window.obj89240_onTap_runningActionsCount - 1;
if (window.obj89240_onTap_runningActionsCount < 0) {
	window.obj89240_onTap_runningActionsCount = 0;
} else if (window.obj89240_onTap_runningActionsCount == 0) {
	obj89240_onTap_actionGroup3();
}
	}
}









};
obj89240_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89240_onTap_activeActionGroupIndex = -1;
		$("#obj89240").trigger("obj89240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89240) {
				console.warn("de-queueing event obj89240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89240_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj54920: Event Touch Down
 *
 */
$("#obj54920").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54920_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54920_onTap is still running");
	return;
}
var obj54920_onTap_runningActionsCount = 0;
var obj54920_onTap_loopCount = 0;
obj54920_onTap_actionGroup0();
});










/*
 *
 *   obj54917: Event Touch Down
 *
 */
$("#obj54917").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54917_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54917_onTap is still running");
	return;
}
var obj54917_onTap_runningActionsCount = 0;
var obj54917_onTap_loopCount = 0;
obj54917_onTap_actionGroup0();
});






























/*
 *
 *   obj68190: Event Touch Down
 *
 */
$("#obj68190").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68190_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68190_onTap is still running");
	return;
}
var obj68190_onTap_runningActionsCount = 0;
var obj68190_onTap_loopCount = 0;
obj68190_onTap_actionGroup0();
});










/*
 *
 *   obj68182: Event Touch Down
 *
 */
$("#obj68182").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68182_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68182_onTap is still running");
	return;
}
var obj68182_onTap_runningActionsCount = 0;
var obj68182_onTap_loopCount = 0;
obj68182_onTap_actionGroup0();
});










/*
 *
 *   obj89245: Event Touch Down
 *
 */
$("#obj89245").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89245_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89245_onTap is still running");
	return;
}
var obj89245_onTap_runningActionsCount = 0;
var obj89245_onTap_loopCount = 0;
obj89245_onTap_actionGroup0();
});










/*
 *
 *   obj89240: Event Touch Down
 *
 */
$("#obj89240").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89240_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89240_onTap is still running");
	return;
}
var obj89240_onTap_runningActionsCount = 0;
var obj89240_onTap_loopCount = 0;
obj89240_onTap_actionGroup0();
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
	
$("#obj54936").trigger('SCEventShow');
$("#obj54920").trigger('SCEventShow');
$("#obj54917").trigger('SCEventShow');
$("#obj54915").trigger('SCEventShow');
$("#obj54939").trigger('SCEventShow');
$("#obj68190").trigger('SCEventShow');
$("#obj68182").trigger('SCEventShow');
$("#obj89245").trigger('SCEventShow');
$("#obj89240").trigger('SCEventShow');
$("#obj89250").trigger('SCEventShow');
$("#obj95023").trigger('SCEventShow');
$("#obj68196").trigger('SCEventShow');
	
});