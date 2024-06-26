pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 86;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj102_onTap_activeActionGroupIndex = -1;
var obj102_onTap_runningActionsCount = 0;
var obj102_onTap_loopCount = 0;
var obj105_onTap_activeActionGroupIndex = -1;
var obj105_onTap_runningActionsCount = 0;
var obj105_onTap_loopCount = 0;
var obj58997_onTap_activeActionGroupIndex = -1;
var obj58997_onTap_runningActionsCount = 0;
var obj58997_onTap_loopCount = 0;
var obj58992_onTap_activeActionGroupIndex = -1;
var obj58992_onTap_runningActionsCount = 0;
var obj58992_onTap_loopCount = 0;
var obj65054_onTap_activeActionGroupIndex = -1;
var obj65054_onTap_runningActionsCount = 0;
var obj65054_onTap_loopCount = 0;
var obj65046_onTap_activeActionGroupIndex = -1;
var obj65046_onTap_runningActionsCount = 0;
var obj65046_onTap_loopCount = 0;
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
		
obj102_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj102_onTap_activeActionGroupIndex = -1;
		$("#obj102").trigger("obj102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 102) {
				console.warn("de-queueing event obj102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj102_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_104();
function goToPage_104() {
	window.obj102_onTap_runningActionsCount = obj102_onTap_runningActionsCount + 1;
	$("#anchor45")[0].click();
	window.obj102_onTap_runningActionsCount = window.obj102_onTap_runningActionsCount - 1;
if (window.obj102_onTap_runningActionsCount < 0) {
	window.obj102_onTap_runningActionsCount = 0;
} else if (window.obj102_onTap_runningActionsCount == 0) {
	obj102_onTap_actionGroup1();
}
}





















};
obj102_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj102_onTap_activeActionGroupIndex = -1;
		$("#obj102").trigger("obj102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 102) {
				console.warn("de-queueing event obj102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj102_onTap_activeActionGroupIndex = 1;
	





















};
obj105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj105_onTap_activeActionGroupIndex = -1;
		$("#obj105").trigger("obj105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 105) {
				console.warn("de-queueing event obj105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj105_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_107();
function goToPage_107() {
	window.obj105_onTap_runningActionsCount = obj105_onTap_runningActionsCount + 1;
	$("#anchor46")[0].click();
	window.obj105_onTap_runningActionsCount = window.obj105_onTap_runningActionsCount - 1;
if (window.obj105_onTap_runningActionsCount < 0) {
	window.obj105_onTap_runningActionsCount = 0;
} else if (window.obj105_onTap_runningActionsCount == 0) {
	obj105_onTap_actionGroup1();
}
}





















};
obj105_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj105_onTap_activeActionGroupIndex = -1;
		$("#obj105").trigger("obj105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 105) {
				console.warn("de-queueing event obj105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj105_onTap_activeActionGroupIndex = 1;
	





















};
obj58997_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj58997_onTap_activeActionGroupIndex = -1;
		$("#obj58997").trigger("obj58997_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 58997) {
				console.warn("de-queueing event obj58997." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj58997").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj58997_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86797 
stopAudio_58999();
function stopAudio_58999() {
	window.obj58997_onTap_runningActionsCount = obj58997_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86797")[0];
	myAudio.pause();
	window.obj58997_onTap_runningActionsCount = window.obj58997_onTap_runningActionsCount - 1;
if (window.obj58997_onTap_runningActionsCount < 0) {
	window.obj58997_onTap_runningActionsCount = 0;
} else if (window.obj58997_onTap_runningActionsCount == 0) {
	obj58997_onTap_actionGroup1();
}
}








};
obj58997_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj58997_onTap_activeActionGroupIndex = -1;
		$("#obj58997").trigger("obj58997_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 58997) {
				console.warn("de-queueing event obj58997." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj58997").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj58997_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj58997 
hide_59000();
function hide_59000() {
	var selector = "#obj58997";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj58997_onTap_runningActionsCount = obj58997_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj58997_onTap_runningActionsCount = window.obj58997_onTap_runningActionsCount - 1;
if (window.obj58997_onTap_runningActionsCount < 0) {
	window.obj58997_onTap_runningActionsCount = 0;
} else if (window.obj58997_onTap_runningActionsCount == 0) {
	obj58997_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_59000(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj58997_onTap_runningActionsCount = window.obj58997_onTap_runningActionsCount - 1;
if (window.obj58997_onTap_runningActionsCount < 0) {
	window.obj58997_onTap_runningActionsCount = 0;
} else if (window.obj58997_onTap_runningActionsCount == 0) {
	obj58997_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj58997_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj58997_onTap_activeActionGroupIndex = -1;
		$("#obj58997").trigger("obj58997_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 58997) {
				console.warn("de-queueing event obj58997." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj58997").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj58997_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj58992
(function(){
	window.obj58997_onTap_runningActionsCount = obj58997_onTap_runningActionsCount + 1;

	var selector = "#obj58992";
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
					window.obj58997_onTap_runningActionsCount = window.obj58997_onTap_runningActionsCount - 1;
if (window.obj58997_onTap_runningActionsCount < 0) {
	window.obj58997_onTap_runningActionsCount = 0;
} else if (window.obj58997_onTap_runningActionsCount == 0) {
	obj58997_onTap_actionGroup3();
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
				window.obj58997_onTap_runningActionsCount = window.obj58997_onTap_runningActionsCount - 1;
if (window.obj58997_onTap_runningActionsCount < 0) {
	window.obj58997_onTap_runningActionsCount = 0;
} else if (window.obj58997_onTap_runningActionsCount == 0) {
	obj58997_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj58997_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj58997_onTap_activeActionGroupIndex = -1;
		$("#obj58997").trigger("obj58997_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 58997) {
				console.warn("de-queueing event obj58997." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj58997").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj58997_onTap_activeActionGroupIndex = 3;
	





















};
obj58992_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj58992_onTap_activeActionGroupIndex = -1;
		$("#obj58992").trigger("obj58992_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 58992) {
				console.warn("de-queueing event obj58992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj58992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj58992_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj58992 
hide_58995();
function hide_58995() {
	var selector = "#obj58992";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj58992_onTap_runningActionsCount = obj58992_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj58992_onTap_runningActionsCount = window.obj58992_onTap_runningActionsCount - 1;
if (window.obj58992_onTap_runningActionsCount < 0) {
	window.obj58992_onTap_runningActionsCount = 0;
} else if (window.obj58992_onTap_runningActionsCount == 0) {
	obj58992_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_58995(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj58992_onTap_runningActionsCount = window.obj58992_onTap_runningActionsCount - 1;
if (window.obj58992_onTap_runningActionsCount < 0) {
	window.obj58992_onTap_runningActionsCount = 0;
} else if (window.obj58992_onTap_runningActionsCount == 0) {
	obj58992_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj58992_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj58992_onTap_activeActionGroupIndex = -1;
		$("#obj58992").trigger("obj58992_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 58992) {
				console.warn("de-queueing event obj58992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj58992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj58992_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj58997
(function(){
	window.obj58992_onTap_runningActionsCount = obj58992_onTap_runningActionsCount + 1;

	var selector = "#obj58997";
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
					window.obj58992_onTap_runningActionsCount = window.obj58992_onTap_runningActionsCount - 1;
if (window.obj58992_onTap_runningActionsCount < 0) {
	window.obj58992_onTap_runningActionsCount = 0;
} else if (window.obj58992_onTap_runningActionsCount == 0) {
	obj58992_onTap_actionGroup2();
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
				window.obj58992_onTap_runningActionsCount = window.obj58992_onTap_runningActionsCount - 1;
if (window.obj58992_onTap_runningActionsCount < 0) {
	window.obj58992_onTap_runningActionsCount = 0;
} else if (window.obj58992_onTap_runningActionsCount == 0) {
	obj58992_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj58992_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj58992_onTap_activeActionGroupIndex = -1;
		$("#obj58992").trigger("obj58992_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 58992) {
				console.warn("de-queueing event obj58992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj58992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj58992_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86797 
playAudio_86801();
function playAudio_86801() {
	window.obj58992_onTap_runningActionsCount = obj58992_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86797")[0];
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
		    window.obj58992_onTap_runningActionsCount = window.obj58992_onTap_runningActionsCount - 1;
if (window.obj58992_onTap_runningActionsCount < 0) {
	window.obj58992_onTap_runningActionsCount = 0;
} else if (window.obj58992_onTap_runningActionsCount == 0) {
	obj58992_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj58992_onTap_runningActionsCount = window.obj58992_onTap_runningActionsCount - 1;
if (window.obj58992_onTap_runningActionsCount < 0) {
	window.obj58992_onTap_runningActionsCount = 0;
} else if (window.obj58992_onTap_runningActionsCount == 0) {
	obj58992_onTap_actionGroup3();
}
	}
}









};
obj58992_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj58992_onTap_activeActionGroupIndex = -1;
		$("#obj58992").trigger("obj58992_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 58992) {
				console.warn("de-queueing event obj58992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj58992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj58992_onTap_activeActionGroupIndex = 3;
	





















};
obj65054_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65054_onTap_activeActionGroupIndex = -1;
		$("#obj65054").trigger("obj65054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65054) {
				console.warn("de-queueing event obj65054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65054_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65054 
hide_65057();
function hide_65057() {
	var selector = "#obj65054";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65054_onTap_runningActionsCount = obj65054_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65054_onTap_runningActionsCount = window.obj65054_onTap_runningActionsCount - 1;
if (window.obj65054_onTap_runningActionsCount < 0) {
	window.obj65054_onTap_runningActionsCount = 0;
} else if (window.obj65054_onTap_runningActionsCount == 0) {
	obj65054_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65057(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65054_onTap_runningActionsCount = window.obj65054_onTap_runningActionsCount - 1;
if (window.obj65054_onTap_runningActionsCount < 0) {
	window.obj65054_onTap_runningActionsCount = 0;
} else if (window.obj65054_onTap_runningActionsCount == 0) {
	obj65054_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65060 
stopMovie_65056();
function stopMovie_65056() {
	window.obj65054_onTap_runningActionsCount = obj65054_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65060")[0];
	myVideo.pause();
	window.obj65054_onTap_runningActionsCount = window.obj65054_onTap_runningActionsCount - 1;
if (window.obj65054_onTap_runningActionsCount < 0) {
	window.obj65054_onTap_runningActionsCount = 0;
} else if (window.obj65054_onTap_runningActionsCount == 0) {
	obj65054_onTap_actionGroup1();
}
}
















};
obj65054_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65054_onTap_activeActionGroupIndex = -1;
		$("#obj65054").trigger("obj65054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65054) {
				console.warn("de-queueing event obj65054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65054_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65046
(function(){
	window.obj65054_onTap_runningActionsCount = obj65054_onTap_runningActionsCount + 1;

	var selector = "#obj65046";
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
					window.obj65054_onTap_runningActionsCount = window.obj65054_onTap_runningActionsCount - 1;
if (window.obj65054_onTap_runningActionsCount < 0) {
	window.obj65054_onTap_runningActionsCount = 0;
} else if (window.obj65054_onTap_runningActionsCount == 0) {
	obj65054_onTap_actionGroup2();
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
				window.obj65054_onTap_runningActionsCount = window.obj65054_onTap_runningActionsCount - 1;
if (window.obj65054_onTap_runningActionsCount < 0) {
	window.obj65054_onTap_runningActionsCount = 0;
} else if (window.obj65054_onTap_runningActionsCount == 0) {
	obj65054_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65054_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65054_onTap_activeActionGroupIndex = -1;
		$("#obj65054").trigger("obj65054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65054) {
				console.warn("de-queueing event obj65054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65054_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65060 
move_65059();
function move_65059() {
	window.obj65054_onTap_runningActionsCount = obj65054_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65060");
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
			window.obj65054_onTap_runningActionsCount = window.obj65054_onTap_runningActionsCount - 1;
if (window.obj65054_onTap_runningActionsCount < 0) {
	window.obj65054_onTap_runningActionsCount = 0;
} else if (window.obj65054_onTap_runningActionsCount == 0) {
	obj65054_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65054_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65054_onTap_activeActionGroupIndex = -1;
		$("#obj65054").trigger("obj65054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65054) {
				console.warn("de-queueing event obj65054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65054_onTap_activeActionGroupIndex = 3;
	





















};
obj65046_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65046_onTap_activeActionGroupIndex = -1;
		$("#obj65046").trigger("obj65046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65046) {
				console.warn("de-queueing event obj65046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65046_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65046 
hide_65049();
function hide_65049() {
	var selector = "#obj65046";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65046_onTap_runningActionsCount = obj65046_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65046_onTap_runningActionsCount = window.obj65046_onTap_runningActionsCount - 1;
if (window.obj65046_onTap_runningActionsCount < 0) {
	window.obj65046_onTap_runningActionsCount = 0;
} else if (window.obj65046_onTap_runningActionsCount == 0) {
	obj65046_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65049(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65046_onTap_runningActionsCount = window.obj65046_onTap_runningActionsCount - 1;
if (window.obj65046_onTap_runningActionsCount < 0) {
	window.obj65046_onTap_runningActionsCount = 0;
} else if (window.obj65046_onTap_runningActionsCount == 0) {
	obj65046_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65060 
playPauseMovie_65048();
function playPauseMovie_65048() {
	window.obj65046_onTap_runningActionsCount = obj65046_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65060")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65046_onTap_runningActionsCount = window.obj65046_onTap_runningActionsCount - 1;
if (window.obj65046_onTap_runningActionsCount < 0) {
	window.obj65046_onTap_runningActionsCount = 0;
} else if (window.obj65046_onTap_runningActionsCount == 0) {
	obj65046_onTap_actionGroup1();
}
}

















};
obj65046_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65046_onTap_activeActionGroupIndex = -1;
		$("#obj65046").trigger("obj65046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65046) {
				console.warn("de-queueing event obj65046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65046_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65054
(function(){
	window.obj65046_onTap_runningActionsCount = obj65046_onTap_runningActionsCount + 1;

	var selector = "#obj65054";
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
					window.obj65046_onTap_runningActionsCount = window.obj65046_onTap_runningActionsCount - 1;
if (window.obj65046_onTap_runningActionsCount < 0) {
	window.obj65046_onTap_runningActionsCount = 0;
} else if (window.obj65046_onTap_runningActionsCount == 0) {
	obj65046_onTap_actionGroup2();
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
				window.obj65046_onTap_runningActionsCount = window.obj65046_onTap_runningActionsCount - 1;
if (window.obj65046_onTap_runningActionsCount < 0) {
	window.obj65046_onTap_runningActionsCount = 0;
} else if (window.obj65046_onTap_runningActionsCount == 0) {
	obj65046_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65046_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65046_onTap_activeActionGroupIndex = -1;
		$("#obj65046").trigger("obj65046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65046) {
				console.warn("de-queueing event obj65046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65046_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65060 
move_65051();
function move_65051() {
	window.obj65046_onTap_runningActionsCount = obj65046_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65060");
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
			window.obj65046_onTap_runningActionsCount = window.obj65046_onTap_runningActionsCount - 1;
if (window.obj65046_onTap_runningActionsCount < 0) {
	window.obj65046_onTap_runningActionsCount = 0;
} else if (window.obj65046_onTap_runningActionsCount == 0) {
	obj65046_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65046_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65046_onTap_activeActionGroupIndex = -1;
		$("#obj65046").trigger("obj65046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65046) {
				console.warn("de-queueing event obj65046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65046_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj102: Event Touch Down
 *
 */
$("#obj102").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj102_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj102_onTap is still running");
	return;
}
var obj102_onTap_runningActionsCount = 0;
var obj102_onTap_loopCount = 0;
obj102_onTap_actionGroup0();
});










/*
 *
 *   obj105: Event Touch Down
 *
 */
$("#obj105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj105_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj105_onTap is still running");
	return;
}
var obj105_onTap_runningActionsCount = 0;
var obj105_onTap_loopCount = 0;
obj105_onTap_actionGroup0();
});


















































/*
 *
 *   obj58997: Event Touch Down
 *
 */
$("#obj58997").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj58997_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj58997_onTap is still running");
	return;
}
var obj58997_onTap_runningActionsCount = 0;
var obj58997_onTap_loopCount = 0;
obj58997_onTap_actionGroup0();
});










/*
 *
 *   obj58992: Event Touch Down
 *
 */
$("#obj58992").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj58992_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj58992_onTap is still running");
	return;
}
var obj58992_onTap_runningActionsCount = 0;
var obj58992_onTap_loopCount = 0;
obj58992_onTap_actionGroup0();
});










/*
 *
 *   obj65054: Event Touch Down
 *
 */
$("#obj65054").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65054_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65054_onTap is still running");
	return;
}
var obj65054_onTap_runningActionsCount = 0;
var obj65054_onTap_loopCount = 0;
obj65054_onTap_actionGroup0();
});










/*
 *
 *   obj65046: Event Touch Down
 *
 */
$("#obj65046").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65046_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65046_onTap is still running");
	return;
}
var obj65046_onTap_runningActionsCount = 0;
var obj65046_onTap_loopCount = 0;
obj65046_onTap_actionGroup0();
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
	
$("#obj87").trigger('SCEventShow');
$("#obj102").trigger('SCEventShow');
$("#obj105").trigger('SCEventShow');
$("#obj110").trigger('SCEventShow');
$("#obj108").trigger('SCEventShow');
$("#obj114").trigger('SCEventShow');
$("#obj112").trigger('SCEventShow');
$("#obj58997").trigger('SCEventShow');
$("#obj58992").trigger('SCEventShow');
$("#obj65054").trigger('SCEventShow');
$("#obj65046").trigger('SCEventShow');
$("#obj86797").trigger('SCEventShow');
$("#obj94641").trigger('SCEventShow');
$("#obj65060").trigger('SCEventShow');
	
});