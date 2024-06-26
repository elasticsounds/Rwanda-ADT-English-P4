pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 93319;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 4;
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
var obj93324_onTap_activeActionGroupIndex = -1;
var obj93324_onTap_runningActionsCount = 0;
var obj93324_onTap_loopCount = 0;
var obj93330_onTap_activeActionGroupIndex = -1;
var obj93330_onTap_runningActionsCount = 0;
var obj93330_onTap_loopCount = 0;
var obj93336_onTap_activeActionGroupIndex = -1;
var obj93336_onTap_runningActionsCount = 0;
var obj93336_onTap_loopCount = 0;
var obj93342_onTap_activeActionGroupIndex = -1;
var obj93342_onTap_runningActionsCount = 0;
var obj93342_onTap_loopCount = 0;
var obj93351_onTap_activeActionGroupIndex = -1;
var obj93351_onTap_runningActionsCount = 0;
var obj93351_onTap_loopCount = 0;
var obj93354_onTap_activeActionGroupIndex = -1;
var obj93354_onTap_runningActionsCount = 0;
var obj93354_onTap_loopCount = 0;
var obj93385_onTap_activeActionGroupIndex = -1;
var obj93385_onTap_runningActionsCount = 0;
var obj93385_onTap_loopCount = 0;
var obj93387_onTap_activeActionGroupIndex = -1;
var obj93387_onTap_runningActionsCount = 0;
var obj93387_onTap_loopCount = 0;
var obj93389_onTap_activeActionGroupIndex = -1;
var obj93389_onTap_runningActionsCount = 0;
var obj93389_onTap_loopCount = 0;
var obj93391_onTap_activeActionGroupIndex = -1;
var obj93391_onTap_runningActionsCount = 0;
var obj93391_onTap_loopCount = 0;
var obj93393_onTap_activeActionGroupIndex = -1;
var obj93393_onTap_runningActionsCount = 0;
var obj93393_onTap_loopCount = 0;
var obj93395_onTap_activeActionGroupIndex = -1;
var obj93395_onTap_runningActionsCount = 0;
var obj93395_onTap_loopCount = 0;
var obj93397_onTap_activeActionGroupIndex = -1;
var obj93397_onTap_runningActionsCount = 0;
var obj93397_onTap_loopCount = 0;
var obj93399_onTap_activeActionGroupIndex = -1;
var obj93399_onTap_runningActionsCount = 0;
var obj93399_onTap_loopCount = 0;
var obj93401_onTap_activeActionGroupIndex = -1;
var obj93401_onTap_runningActionsCount = 0;
var obj93401_onTap_loopCount = 0;
var obj93403_onTap_activeActionGroupIndex = -1;
var obj93403_onTap_runningActionsCount = 0;
var obj93403_onTap_loopCount = 0;
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
		
obj93324_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93324_onTap_activeActionGroupIndex = -1;
		$("#obj93324").trigger("obj93324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93324) {
				console.warn("de-queueing event obj93324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93324_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj93408 
stopAudio_93327();
function stopAudio_93327() {
	window.obj93324_onTap_runningActionsCount = obj93324_onTap_runningActionsCount + 1;
	var myAudio = $("#obj93408")[0];
	myAudio.pause();
	window.obj93324_onTap_runningActionsCount = window.obj93324_onTap_runningActionsCount - 1;
if (window.obj93324_onTap_runningActionsCount < 0) {
	window.obj93324_onTap_runningActionsCount = 0;
} else if (window.obj93324_onTap_runningActionsCount == 0) {
	obj93324_onTap_actionGroup1();
}
}








};
obj93324_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93324_onTap_activeActionGroupIndex = -1;
		$("#obj93324").trigger("obj93324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93324) {
				console.warn("de-queueing event obj93324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93324_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj93324 
hide_93328();
function hide_93328() {
	var selector = "#obj93324";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj93324_onTap_runningActionsCount = obj93324_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj93324_onTap_runningActionsCount = window.obj93324_onTap_runningActionsCount - 1;
if (window.obj93324_onTap_runningActionsCount < 0) {
	window.obj93324_onTap_runningActionsCount = 0;
} else if (window.obj93324_onTap_runningActionsCount == 0) {
	obj93324_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_93328(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj93324_onTap_runningActionsCount = window.obj93324_onTap_runningActionsCount - 1;
if (window.obj93324_onTap_runningActionsCount < 0) {
	window.obj93324_onTap_runningActionsCount = 0;
} else if (window.obj93324_onTap_runningActionsCount == 0) {
	obj93324_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj93324_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93324_onTap_activeActionGroupIndex = -1;
		$("#obj93324").trigger("obj93324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93324) {
				console.warn("de-queueing event obj93324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93324_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj93330
(function(){
	window.obj93324_onTap_runningActionsCount = obj93324_onTap_runningActionsCount + 1;

	var selector = "#obj93330";
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
					window.obj93324_onTap_runningActionsCount = window.obj93324_onTap_runningActionsCount - 1;
if (window.obj93324_onTap_runningActionsCount < 0) {
	window.obj93324_onTap_runningActionsCount = 0;
} else if (window.obj93324_onTap_runningActionsCount == 0) {
	obj93324_onTap_actionGroup3();
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
				window.obj93324_onTap_runningActionsCount = window.obj93324_onTap_runningActionsCount - 1;
if (window.obj93324_onTap_runningActionsCount < 0) {
	window.obj93324_onTap_runningActionsCount = 0;
} else if (window.obj93324_onTap_runningActionsCount == 0) {
	obj93324_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj93324_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93324_onTap_activeActionGroupIndex = -1;
		$("#obj93324").trigger("obj93324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93324) {
				console.warn("de-queueing event obj93324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93324_onTap_activeActionGroupIndex = 3;
	





















};
obj93330_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93330_onTap_activeActionGroupIndex = -1;
		$("#obj93330").trigger("obj93330_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93330) {
				console.warn("de-queueing event obj93330." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93330").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93330_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj93330 
hide_93333();
function hide_93333() {
	var selector = "#obj93330";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj93330_onTap_runningActionsCount = obj93330_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj93330_onTap_runningActionsCount = window.obj93330_onTap_runningActionsCount - 1;
if (window.obj93330_onTap_runningActionsCount < 0) {
	window.obj93330_onTap_runningActionsCount = 0;
} else if (window.obj93330_onTap_runningActionsCount == 0) {
	obj93330_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_93333(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj93330_onTap_runningActionsCount = window.obj93330_onTap_runningActionsCount - 1;
if (window.obj93330_onTap_runningActionsCount < 0) {
	window.obj93330_onTap_runningActionsCount = 0;
} else if (window.obj93330_onTap_runningActionsCount == 0) {
	obj93330_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}











//	action: playAudio
//	target: obj93408 
playAudio_93332();
function playAudio_93332() {
	window.obj93330_onTap_runningActionsCount = obj93330_onTap_runningActionsCount + 1;
	var myAudio = $("#obj93408")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
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
		    window.obj93330_onTap_runningActionsCount = window.obj93330_onTap_runningActionsCount - 1;
if (window.obj93330_onTap_runningActionsCount < 0) {
	window.obj93330_onTap_runningActionsCount = 0;
} else if (window.obj93330_onTap_runningActionsCount == 0) {
	obj93330_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj93330_onTap_runningActionsCount = window.obj93330_onTap_runningActionsCount - 1;
if (window.obj93330_onTap_runningActionsCount < 0) {
	window.obj93330_onTap_runningActionsCount = 0;
} else if (window.obj93330_onTap_runningActionsCount == 0) {
	obj93330_onTap_actionGroup1();
}
	}
}









};
obj93330_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93330_onTap_activeActionGroupIndex = -1;
		$("#obj93330").trigger("obj93330_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93330) {
				console.warn("de-queueing event obj93330." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93330").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93330_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj93324
(function(){
	window.obj93330_onTap_runningActionsCount = obj93330_onTap_runningActionsCount + 1;

	var selector = "#obj93324";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj93330_onTap_runningActionsCount = window.obj93330_onTap_runningActionsCount - 1;
if (window.obj93330_onTap_runningActionsCount < 0) {
	window.obj93330_onTap_runningActionsCount = 0;
} else if (window.obj93330_onTap_runningActionsCount == 0) {
	obj93330_onTap_actionGroup2();
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
				window.obj93330_onTap_runningActionsCount = window.obj93330_onTap_runningActionsCount - 1;
if (window.obj93330_onTap_runningActionsCount < 0) {
	window.obj93330_onTap_runningActionsCount = 0;
} else if (window.obj93330_onTap_runningActionsCount == 0) {
	obj93330_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj93330_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93330_onTap_activeActionGroupIndex = -1;
		$("#obj93330").trigger("obj93330_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93330) {
				console.warn("de-queueing event obj93330." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93330").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93330_onTap_activeActionGroupIndex = 2;
	





















};
obj93336_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93336_onTap_activeActionGroupIndex = -1;
		$("#obj93336").trigger("obj93336_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93336) {
				console.warn("de-queueing event obj93336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93336_onTap_activeActionGroupIndex = 0;
	





//	action: stopMovie 
//	target: obj93406 
stopMovie_93338();
function stopMovie_93338() {
	window.obj93336_onTap_runningActionsCount = obj93336_onTap_runningActionsCount + 1;
	var myVideo = $("#obj93406")[0];
	myVideo.pause();
	window.obj93336_onTap_runningActionsCount = window.obj93336_onTap_runningActionsCount - 1;
if (window.obj93336_onTap_runningActionsCount < 0) {
	window.obj93336_onTap_runningActionsCount = 0;
} else if (window.obj93336_onTap_runningActionsCount == 0) {
	obj93336_onTap_actionGroup1();
}
}
















};
obj93336_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93336_onTap_activeActionGroupIndex = -1;
		$("#obj93336").trigger("obj93336_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93336) {
				console.warn("de-queueing event obj93336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93336_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj93336 
hide_93339();
function hide_93339() {
	var selector = "#obj93336";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj93336_onTap_runningActionsCount = obj93336_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj93336_onTap_runningActionsCount = window.obj93336_onTap_runningActionsCount - 1;
if (window.obj93336_onTap_runningActionsCount < 0) {
	window.obj93336_onTap_runningActionsCount = 0;
} else if (window.obj93336_onTap_runningActionsCount == 0) {
	obj93336_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_93339(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj93336_onTap_runningActionsCount = window.obj93336_onTap_runningActionsCount - 1;
if (window.obj93336_onTap_runningActionsCount < 0) {
	window.obj93336_onTap_runningActionsCount = 0;
} else if (window.obj93336_onTap_runningActionsCount == 0) {
	obj93336_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj93336_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93336_onTap_activeActionGroupIndex = -1;
		$("#obj93336").trigger("obj93336_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93336) {
				console.warn("de-queueing event obj93336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93336_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj93342
(function(){
	window.obj93336_onTap_runningActionsCount = obj93336_onTap_runningActionsCount + 1;

	var selector = "#obj93342";
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
					window.obj93336_onTap_runningActionsCount = window.obj93336_onTap_runningActionsCount - 1;
if (window.obj93336_onTap_runningActionsCount < 0) {
	window.obj93336_onTap_runningActionsCount = 0;
} else if (window.obj93336_onTap_runningActionsCount == 0) {
	obj93336_onTap_actionGroup3();
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
				window.obj93336_onTap_runningActionsCount = window.obj93336_onTap_runningActionsCount - 1;
if (window.obj93336_onTap_runningActionsCount < 0) {
	window.obj93336_onTap_runningActionsCount = 0;
} else if (window.obj93336_onTap_runningActionsCount == 0) {
	obj93336_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj93336_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93336_onTap_activeActionGroupIndex = -1;
		$("#obj93336").trigger("obj93336_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93336) {
				console.warn("de-queueing event obj93336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93336_onTap_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj93406 
move_93341();
function move_93341() {
	window.obj93336_onTap_runningActionsCount = obj93336_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj93406");
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
			window.obj93336_onTap_runningActionsCount = window.obj93336_onTap_runningActionsCount - 1;
if (window.obj93336_onTap_runningActionsCount < 0) {
	window.obj93336_onTap_runningActionsCount = 0;
} else if (window.obj93336_onTap_runningActionsCount == 0) {
	obj93336_onTap_actionGroup4();
}
		}, 1);
	});
}



















};
obj93336_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93336_onTap_activeActionGroupIndex = -1;
		$("#obj93336").trigger("obj93336_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93336) {
				console.warn("de-queueing event obj93336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93336_onTap_activeActionGroupIndex = 4;
	





















};
obj93342_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93342_onTap_activeActionGroupIndex = -1;
		$("#obj93342").trigger("obj93342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93342) {
				console.warn("de-queueing event obj93342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93342_onTap_activeActionGroupIndex = 0;
	




//	action: playPauseMovie
//	target: obj93406 
playPauseMovie_93345();
function playPauseMovie_93345() {
	window.obj93342_onTap_runningActionsCount = obj93342_onTap_runningActionsCount + 1;
	var myVideo = $("#obj93406")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj93342_onTap_runningActionsCount = window.obj93342_onTap_runningActionsCount - 1;
if (window.obj93342_onTap_runningActionsCount < 0) {
	window.obj93342_onTap_runningActionsCount = 0;
} else if (window.obj93342_onTap_runningActionsCount == 0) {
	obj93342_onTap_actionGroup1();
}
}

















};
obj93342_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93342_onTap_activeActionGroupIndex = -1;
		$("#obj93342").trigger("obj93342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93342) {
				console.warn("de-queueing event obj93342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93342_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj93342 
hide_93346();
function hide_93346() {
	var selector = "#obj93342";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj93342_onTap_runningActionsCount = obj93342_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj93342_onTap_runningActionsCount = window.obj93342_onTap_runningActionsCount - 1;
if (window.obj93342_onTap_runningActionsCount < 0) {
	window.obj93342_onTap_runningActionsCount = 0;
} else if (window.obj93342_onTap_runningActionsCount == 0) {
	obj93342_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_93346(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj93342_onTap_runningActionsCount = window.obj93342_onTap_runningActionsCount - 1;
if (window.obj93342_onTap_runningActionsCount < 0) {
	window.obj93342_onTap_runningActionsCount = 0;
} else if (window.obj93342_onTap_runningActionsCount == 0) {
	obj93342_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj93342_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93342_onTap_activeActionGroupIndex = -1;
		$("#obj93342").trigger("obj93342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93342) {
				console.warn("de-queueing event obj93342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93342_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj93336
(function(){
	window.obj93342_onTap_runningActionsCount = obj93342_onTap_runningActionsCount + 1;

	var selector = "#obj93336";
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
					window.obj93342_onTap_runningActionsCount = window.obj93342_onTap_runningActionsCount - 1;
if (window.obj93342_onTap_runningActionsCount < 0) {
	window.obj93342_onTap_runningActionsCount = 0;
} else if (window.obj93342_onTap_runningActionsCount == 0) {
	obj93342_onTap_actionGroup3();
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
				window.obj93342_onTap_runningActionsCount = window.obj93342_onTap_runningActionsCount - 1;
if (window.obj93342_onTap_runningActionsCount < 0) {
	window.obj93342_onTap_runningActionsCount = 0;
} else if (window.obj93342_onTap_runningActionsCount == 0) {
	obj93342_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj93342_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93342_onTap_activeActionGroupIndex = -1;
		$("#obj93342").trigger("obj93342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93342) {
				console.warn("de-queueing event obj93342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93342_onTap_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj93406 
move_93348();
function move_93348() {
	window.obj93342_onTap_runningActionsCount = obj93342_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj93406");
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
			window.obj93342_onTap_runningActionsCount = window.obj93342_onTap_runningActionsCount - 1;
if (window.obj93342_onTap_runningActionsCount < 0) {
	window.obj93342_onTap_runningActionsCount = 0;
} else if (window.obj93342_onTap_runningActionsCount == 0) {
	obj93342_onTap_actionGroup4();
}
		}, 1);
	});
}



















};
obj93342_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93342_onTap_activeActionGroupIndex = -1;
		$("#obj93342").trigger("obj93342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93342) {
				console.warn("de-queueing event obj93342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93342_onTap_activeActionGroupIndex = 4;
	





















};
obj93351_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93351_onTap_activeActionGroupIndex = -1;
		$("#obj93351").trigger("obj93351_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93351) {
				console.warn("de-queueing event obj93351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93351_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93353();
function goToPage_93353() {
	window.obj93351_onTap_runningActionsCount = obj93351_onTap_runningActionsCount + 1;
	$("#anchor27")[0].click();
	window.obj93351_onTap_runningActionsCount = window.obj93351_onTap_runningActionsCount - 1;
if (window.obj93351_onTap_runningActionsCount < 0) {
	window.obj93351_onTap_runningActionsCount = 0;
} else if (window.obj93351_onTap_runningActionsCount == 0) {
	obj93351_onTap_actionGroup1();
}
}





















};
obj93351_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93351_onTap_activeActionGroupIndex = -1;
		$("#obj93351").trigger("obj93351_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93351) {
				console.warn("de-queueing event obj93351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93351_onTap_activeActionGroupIndex = 1;
	





















};
obj93354_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93354_onTap_activeActionGroupIndex = -1;
		$("#obj93354").trigger("obj93354_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93354) {
				console.warn("de-queueing event obj93354." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93354").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93354_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93356();
function goToPage_93356() {
	window.obj93354_onTap_runningActionsCount = obj93354_onTap_runningActionsCount + 1;
	$("#anchor28")[0].click();
	window.obj93354_onTap_runningActionsCount = window.obj93354_onTap_runningActionsCount - 1;
if (window.obj93354_onTap_runningActionsCount < 0) {
	window.obj93354_onTap_runningActionsCount = 0;
} else if (window.obj93354_onTap_runningActionsCount == 0) {
	obj93354_onTap_actionGroup1();
}
}





















};
obj93354_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93354_onTap_activeActionGroupIndex = -1;
		$("#obj93354").trigger("obj93354_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93354) {
				console.warn("de-queueing event obj93354." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93354").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93354_onTap_activeActionGroupIndex = 1;
	





















};
obj93385_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93385_onTap_activeActionGroupIndex = -1;
		$("#obj93385").trigger("obj93385_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93385) {
				console.warn("de-queueing event obj93385." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93385").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93385_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93411();
function goToPage_93411() {
	window.obj93385_onTap_runningActionsCount = obj93385_onTap_runningActionsCount + 1;
	$("#anchor29")[0].click();
	window.obj93385_onTap_runningActionsCount = window.obj93385_onTap_runningActionsCount - 1;
if (window.obj93385_onTap_runningActionsCount < 0) {
	window.obj93385_onTap_runningActionsCount = 0;
} else if (window.obj93385_onTap_runningActionsCount == 0) {
	obj93385_onTap_actionGroup1();
}
}





















};
obj93385_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93385_onTap_activeActionGroupIndex = -1;
		$("#obj93385").trigger("obj93385_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93385) {
				console.warn("de-queueing event obj93385." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93385").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93385_onTap_activeActionGroupIndex = 1;
	





















};
obj93387_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93387_onTap_activeActionGroupIndex = -1;
		$("#obj93387").trigger("obj93387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93387) {
				console.warn("de-queueing event obj93387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93387_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93412();
function goToPage_93412() {
	window.obj93387_onTap_runningActionsCount = obj93387_onTap_runningActionsCount + 1;
	$("#anchor30")[0].click();
	window.obj93387_onTap_runningActionsCount = window.obj93387_onTap_runningActionsCount - 1;
if (window.obj93387_onTap_runningActionsCount < 0) {
	window.obj93387_onTap_runningActionsCount = 0;
} else if (window.obj93387_onTap_runningActionsCount == 0) {
	obj93387_onTap_actionGroup1();
}
}





















};
obj93387_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93387_onTap_activeActionGroupIndex = -1;
		$("#obj93387").trigger("obj93387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93387) {
				console.warn("de-queueing event obj93387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93387_onTap_activeActionGroupIndex = 1;
	





















};
obj93389_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93389_onTap_activeActionGroupIndex = -1;
		$("#obj93389").trigger("obj93389_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93389) {
				console.warn("de-queueing event obj93389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93389_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93413();
function goToPage_93413() {
	window.obj93389_onTap_runningActionsCount = obj93389_onTap_runningActionsCount + 1;
	$("#anchor31")[0].click();
	window.obj93389_onTap_runningActionsCount = window.obj93389_onTap_runningActionsCount - 1;
if (window.obj93389_onTap_runningActionsCount < 0) {
	window.obj93389_onTap_runningActionsCount = 0;
} else if (window.obj93389_onTap_runningActionsCount == 0) {
	obj93389_onTap_actionGroup1();
}
}





















};
obj93389_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93389_onTap_activeActionGroupIndex = -1;
		$("#obj93389").trigger("obj93389_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93389) {
				console.warn("de-queueing event obj93389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93389_onTap_activeActionGroupIndex = 1;
	





















};
obj93391_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93391_onTap_activeActionGroupIndex = -1;
		$("#obj93391").trigger("obj93391_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93391) {
				console.warn("de-queueing event obj93391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93391_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93414();
function goToPage_93414() {
	window.obj93391_onTap_runningActionsCount = obj93391_onTap_runningActionsCount + 1;
	$("#anchor32")[0].click();
	window.obj93391_onTap_runningActionsCount = window.obj93391_onTap_runningActionsCount - 1;
if (window.obj93391_onTap_runningActionsCount < 0) {
	window.obj93391_onTap_runningActionsCount = 0;
} else if (window.obj93391_onTap_runningActionsCount == 0) {
	obj93391_onTap_actionGroup1();
}
}





















};
obj93391_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93391_onTap_activeActionGroupIndex = -1;
		$("#obj93391").trigger("obj93391_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93391) {
				console.warn("de-queueing event obj93391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93391_onTap_activeActionGroupIndex = 1;
	





















};
obj93393_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93393_onTap_activeActionGroupIndex = -1;
		$("#obj93393").trigger("obj93393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93393) {
				console.warn("de-queueing event obj93393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93393_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93415();
function goToPage_93415() {
	window.obj93393_onTap_runningActionsCount = obj93393_onTap_runningActionsCount + 1;
	$("#anchor33")[0].click();
	window.obj93393_onTap_runningActionsCount = window.obj93393_onTap_runningActionsCount - 1;
if (window.obj93393_onTap_runningActionsCount < 0) {
	window.obj93393_onTap_runningActionsCount = 0;
} else if (window.obj93393_onTap_runningActionsCount == 0) {
	obj93393_onTap_actionGroup1();
}
}





















};
obj93393_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93393_onTap_activeActionGroupIndex = -1;
		$("#obj93393").trigger("obj93393_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93393) {
				console.warn("de-queueing event obj93393." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93393").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93393_onTap_activeActionGroupIndex = 1;
	





















};
obj93395_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93395_onTap_activeActionGroupIndex = -1;
		$("#obj93395").trigger("obj93395_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93395) {
				console.warn("de-queueing event obj93395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93395_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93416();
function goToPage_93416() {
	window.obj93395_onTap_runningActionsCount = obj93395_onTap_runningActionsCount + 1;
	$("#anchor34")[0].click();
	window.obj93395_onTap_runningActionsCount = window.obj93395_onTap_runningActionsCount - 1;
if (window.obj93395_onTap_runningActionsCount < 0) {
	window.obj93395_onTap_runningActionsCount = 0;
} else if (window.obj93395_onTap_runningActionsCount == 0) {
	obj93395_onTap_actionGroup1();
}
}





















};
obj93395_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93395_onTap_activeActionGroupIndex = -1;
		$("#obj93395").trigger("obj93395_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93395) {
				console.warn("de-queueing event obj93395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93395_onTap_activeActionGroupIndex = 1;
	





















};
obj93397_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93397_onTap_activeActionGroupIndex = -1;
		$("#obj93397").trigger("obj93397_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93397) {
				console.warn("de-queueing event obj93397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93397_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93417();
function goToPage_93417() {
	window.obj93397_onTap_runningActionsCount = obj93397_onTap_runningActionsCount + 1;
	$("#anchor35")[0].click();
	window.obj93397_onTap_runningActionsCount = window.obj93397_onTap_runningActionsCount - 1;
if (window.obj93397_onTap_runningActionsCount < 0) {
	window.obj93397_onTap_runningActionsCount = 0;
} else if (window.obj93397_onTap_runningActionsCount == 0) {
	obj93397_onTap_actionGroup1();
}
}





















};
obj93397_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93397_onTap_activeActionGroupIndex = -1;
		$("#obj93397").trigger("obj93397_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93397) {
				console.warn("de-queueing event obj93397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93397_onTap_activeActionGroupIndex = 1;
	





















};
obj93399_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93399_onTap_activeActionGroupIndex = -1;
		$("#obj93399").trigger("obj93399_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93399) {
				console.warn("de-queueing event obj93399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93399_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93418();
function goToPage_93418() {
	window.obj93399_onTap_runningActionsCount = obj93399_onTap_runningActionsCount + 1;
	$("#anchor36")[0].click();
	window.obj93399_onTap_runningActionsCount = window.obj93399_onTap_runningActionsCount - 1;
if (window.obj93399_onTap_runningActionsCount < 0) {
	window.obj93399_onTap_runningActionsCount = 0;
} else if (window.obj93399_onTap_runningActionsCount == 0) {
	obj93399_onTap_actionGroup1();
}
}





















};
obj93399_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93399_onTap_activeActionGroupIndex = -1;
		$("#obj93399").trigger("obj93399_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93399) {
				console.warn("de-queueing event obj93399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93399_onTap_activeActionGroupIndex = 1;
	





















};
obj93401_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93401_onTap_activeActionGroupIndex = -1;
		$("#obj93401").trigger("obj93401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93401) {
				console.warn("de-queueing event obj93401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93401_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93419();
function goToPage_93419() {
	window.obj93401_onTap_runningActionsCount = obj93401_onTap_runningActionsCount + 1;
	$("#anchor37")[0].click();
	window.obj93401_onTap_runningActionsCount = window.obj93401_onTap_runningActionsCount - 1;
if (window.obj93401_onTap_runningActionsCount < 0) {
	window.obj93401_onTap_runningActionsCount = 0;
} else if (window.obj93401_onTap_runningActionsCount == 0) {
	obj93401_onTap_actionGroup1();
}
}





















};
obj93401_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93401_onTap_activeActionGroupIndex = -1;
		$("#obj93401").trigger("obj93401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93401) {
				console.warn("de-queueing event obj93401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93401_onTap_activeActionGroupIndex = 1;
	





















};
obj93403_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj93403_onTap_activeActionGroupIndex = -1;
		$("#obj93403").trigger("obj93403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93403) {
				console.warn("de-queueing event obj93403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93403_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_93420();
function goToPage_93420() {
	window.obj93403_onTap_runningActionsCount = obj93403_onTap_runningActionsCount + 1;
	$("#anchor38")[0].click();
	window.obj93403_onTap_runningActionsCount = window.obj93403_onTap_runningActionsCount - 1;
if (window.obj93403_onTap_runningActionsCount < 0) {
	window.obj93403_onTap_runningActionsCount = 0;
} else if (window.obj93403_onTap_runningActionsCount == 0) {
	obj93403_onTap_actionGroup1();
}
}





















};
obj93403_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj93403_onTap_activeActionGroupIndex = -1;
		$("#obj93403").trigger("obj93403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 93403) {
				console.warn("de-queueing event obj93403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj93403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj93403_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		























/*
 *
 *   obj93324: Event Touch Down
 *
 */
$("#obj93324").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93324_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93324_onTap is still running");
	return;
}
var obj93324_onTap_runningActionsCount = 0;
var obj93324_onTap_loopCount = 0;
obj93324_onTap_actionGroup0();
});










/*
 *
 *   obj93330: Event Touch Down
 *
 */
$("#obj93330").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93330_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93330_onTap is still running");
	return;
}
var obj93330_onTap_runningActionsCount = 0;
var obj93330_onTap_loopCount = 0;
obj93330_onTap_actionGroup0();
});










/*
 *
 *   obj93336: Event Touch Down
 *
 */
$("#obj93336").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93336_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93336_onTap is still running");
	return;
}
var obj93336_onTap_runningActionsCount = 0;
var obj93336_onTap_loopCount = 0;
obj93336_onTap_actionGroup0();
});










/*
 *
 *   obj93342: Event Touch Down
 *
 */
$("#obj93342").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93342_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93342_onTap is still running");
	return;
}
var obj93342_onTap_runningActionsCount = 0;
var obj93342_onTap_loopCount = 0;
obj93342_onTap_actionGroup0();
});










/*
 *
 *   obj93351: Event Touch Down
 *
 */
$("#obj93351").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93351_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93351_onTap is still running");
	return;
}
var obj93351_onTap_runningActionsCount = 0;
var obj93351_onTap_loopCount = 0;
obj93351_onTap_actionGroup0();
});










/*
 *
 *   obj93354: Event Touch Down
 *
 */
$("#obj93354").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93354_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93354_onTap is still running");
	return;
}
var obj93354_onTap_runningActionsCount = 0;
var obj93354_onTap_loopCount = 0;
obj93354_onTap_actionGroup0();
});


































































































































/*
 *
 *   obj93385: Event Touch Down
 *
 */
$("#obj93385").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93385_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93385_onTap is still running");
	return;
}
var obj93385_onTap_runningActionsCount = 0;
var obj93385_onTap_loopCount = 0;
obj93385_onTap_actionGroup0();
});










/*
 *
 *   obj93387: Event Touch Down
 *
 */
$("#obj93387").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93387_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93387_onTap is still running");
	return;
}
var obj93387_onTap_runningActionsCount = 0;
var obj93387_onTap_loopCount = 0;
obj93387_onTap_actionGroup0();
});










/*
 *
 *   obj93389: Event Touch Down
 *
 */
$("#obj93389").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93389_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93389_onTap is still running");
	return;
}
var obj93389_onTap_runningActionsCount = 0;
var obj93389_onTap_loopCount = 0;
obj93389_onTap_actionGroup0();
});










/*
 *
 *   obj93391: Event Touch Down
 *
 */
$("#obj93391").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93391_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93391_onTap is still running");
	return;
}
var obj93391_onTap_runningActionsCount = 0;
var obj93391_onTap_loopCount = 0;
obj93391_onTap_actionGroup0();
});










/*
 *
 *   obj93393: Event Touch Down
 *
 */
$("#obj93393").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93393_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93393_onTap is still running");
	return;
}
var obj93393_onTap_runningActionsCount = 0;
var obj93393_onTap_loopCount = 0;
obj93393_onTap_actionGroup0();
});










/*
 *
 *   obj93395: Event Touch Down
 *
 */
$("#obj93395").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93395_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93395_onTap is still running");
	return;
}
var obj93395_onTap_runningActionsCount = 0;
var obj93395_onTap_loopCount = 0;
obj93395_onTap_actionGroup0();
});










/*
 *
 *   obj93397: Event Touch Down
 *
 */
$("#obj93397").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93397_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93397_onTap is still running");
	return;
}
var obj93397_onTap_runningActionsCount = 0;
var obj93397_onTap_loopCount = 0;
obj93397_onTap_actionGroup0();
});










/*
 *
 *   obj93399: Event Touch Down
 *
 */
$("#obj93399").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93399_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93399_onTap is still running");
	return;
}
var obj93399_onTap_runningActionsCount = 0;
var obj93399_onTap_loopCount = 0;
obj93399_onTap_actionGroup0();
});










/*
 *
 *   obj93401: Event Touch Down
 *
 */
$("#obj93401").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93401_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93401_onTap is still running");
	return;
}
var obj93401_onTap_runningActionsCount = 0;
var obj93401_onTap_loopCount = 0;
obj93401_onTap_actionGroup0();
});










/*
 *
 *   obj93403: Event Touch Down
 *
 */
$("#obj93403").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj93403_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj93403_onTap is still running");
	return;
}
var obj93403_onTap_runningActionsCount = 0;
var obj93403_onTap_loopCount = 0;
obj93403_onTap_actionGroup0();
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
	
$("#obj93320").trigger('SCEventShow');
$("#obj93322").trigger('SCEventShow');
$("#obj93324").trigger('SCEventShow');
$("#obj93330").trigger('SCEventShow');
$("#obj93336").trigger('SCEventShow');
$("#obj93342").trigger('SCEventShow');
$("#obj93351").trigger('SCEventShow');
$("#obj93354").trigger('SCEventShow');
$("#obj93357").trigger('SCEventShow');
$("#obj93359").trigger('SCEventShow');
$("#obj93361").trigger('SCEventShow');
$("#obj93367").trigger('SCEventShow');
$("#obj93369").trigger('SCEventShow');
$("#obj93371").trigger('SCEventShow');
$("#obj93373").trigger('SCEventShow');
$("#obj93375").trigger('SCEventShow');
$("#obj93377").trigger('SCEventShow');
$("#obj93379").trigger('SCEventShow');
$("#obj93381").trigger('SCEventShow');
$("#obj93383").trigger('SCEventShow');
$("#obj93385").trigger('SCEventShow');
$("#obj93387").trigger('SCEventShow');
$("#obj93389").trigger('SCEventShow');
$("#obj93391").trigger('SCEventShow');
$("#obj93393").trigger('SCEventShow');
$("#obj93395").trigger('SCEventShow');
$("#obj93397").trigger('SCEventShow');
$("#obj93399").trigger('SCEventShow');
$("#obj93401").trigger('SCEventShow');
$("#obj93403").trigger('SCEventShow');
$("#obj93408").trigger('SCEventShow');
$("#obj94637").trigger('SCEventShow');
$("#obj93406").trigger('SCEventShow');
	
});