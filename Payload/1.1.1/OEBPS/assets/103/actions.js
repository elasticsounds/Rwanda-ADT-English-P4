pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 25930;
pubcoder.page.title = pubcoder.page.title || "103";
pubcoder.page.number = pubcoder.page.number || 103;
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
var obj81635_onTap_activeActionGroupIndex = -1;
var obj81635_onTap_runningActionsCount = 0;
var obj81635_onTap_loopCount = 0;
var obj81632_onTap_activeActionGroupIndex = -1;
var obj81632_onTap_runningActionsCount = 0;
var obj81632_onTap_loopCount = 0;
var obj81618_onTap_activeActionGroupIndex = -1;
var obj81618_onTap_runningActionsCount = 0;
var obj81618_onTap_loopCount = 0;
var obj81616_onTap_activeActionGroupIndex = -1;
var obj81616_onTap_runningActionsCount = 0;
var obj81616_onTap_loopCount = 0;
var obj81613_onTap_activeActionGroupIndex = -1;
var obj81613_onTap_runningActionsCount = 0;
var obj81613_onTap_loopCount = 0;
var obj81611_onTap_activeActionGroupIndex = -1;
var obj81611_onTap_runningActionsCount = 0;
var obj81611_onTap_loopCount = 0;
var obj81593_onTap_activeActionGroupIndex = -1;
var obj81593_onTap_runningActionsCount = 0;
var obj81593_onTap_loopCount = 0;
var obj81585_onTap_activeActionGroupIndex = -1;
var obj81585_onTap_runningActionsCount = 0;
var obj81585_onTap_loopCount = 0;
var obj88105_onTap_activeActionGroupIndex = -1;
var obj88105_onTap_runningActionsCount = 0;
var obj88105_onTap_loopCount = 0;
var obj88100_onTap_activeActionGroupIndex = -1;
var obj88100_onTap_runningActionsCount = 0;
var obj88100_onTap_loopCount = 0;
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
		
obj81635_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81635_onTap_activeActionGroupIndex = -1;
		$("#obj81635").trigger("obj81635_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81635) {
				console.warn("de-queueing event obj81635." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81635").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81635_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81637();
function goToPage_81637() {
	window.obj81635_onTap_runningActionsCount = obj81635_onTap_runningActionsCount + 1;
	$("#anchor613")[0].click();
	window.obj81635_onTap_runningActionsCount = window.obj81635_onTap_runningActionsCount - 1;
if (window.obj81635_onTap_runningActionsCount < 0) {
	window.obj81635_onTap_runningActionsCount = 0;
} else if (window.obj81635_onTap_runningActionsCount == 0) {
	obj81635_onTap_actionGroup1();
}
}





















};
obj81635_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81635_onTap_activeActionGroupIndex = -1;
		$("#obj81635").trigger("obj81635_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81635) {
				console.warn("de-queueing event obj81635." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81635").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81635_onTap_activeActionGroupIndex = 1;
	





















};
obj81632_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81632_onTap_activeActionGroupIndex = -1;
		$("#obj81632").trigger("obj81632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81632) {
				console.warn("de-queueing event obj81632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81632_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86795();
function goToPage_86795() {
	window.obj81632_onTap_runningActionsCount = obj81632_onTap_runningActionsCount + 1;
	$("#anchor614")[0].click();
	window.obj81632_onTap_runningActionsCount = window.obj81632_onTap_runningActionsCount - 1;
if (window.obj81632_onTap_runningActionsCount < 0) {
	window.obj81632_onTap_runningActionsCount = 0;
} else if (window.obj81632_onTap_runningActionsCount == 0) {
	obj81632_onTap_actionGroup1();
}
}





















};
obj81632_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81632_onTap_activeActionGroupIndex = -1;
		$("#obj81632").trigger("obj81632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81632) {
				console.warn("de-queueing event obj81632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81632_onTap_activeActionGroupIndex = 1;
	





















};
obj81618_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81618_onTap_activeActionGroupIndex = -1;
		$("#obj81618").trigger("obj81618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81618) {
				console.warn("de-queueing event obj81618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81618_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81620();
function runjs_81620() {
	window.obj81618_onTap_runningActionsCount = obj81618_onTap_runningActionsCount + 1;

	$("#obj81618").css("border-color", "#058E3F"); $("#obj81618").css("border-width", "2px"); $("#obj81618").css("border-style", "solid"); $("#obj81618").css("border-radius", "25px"); $("#obj81618").css("-webkit-border-radius", "25px"); $("#obj81618").css("-moz-border-radius", "25px"); $("#obj81618_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj81618_onTap_runningActionsCount = window.obj81618_onTap_runningActionsCount - 1;
if (window.obj81618_onTap_runningActionsCount < 0) {
	window.obj81618_onTap_runningActionsCount = 0;
} else if (window.obj81618_onTap_runningActionsCount == 0) {
	obj81618_onTap_actionGroup1();
}
	}, 1);
}







};
obj81618_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81618_onTap_activeActionGroupIndex = -1;
		$("#obj81618").trigger("obj81618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81618) {
				console.warn("de-queueing event obj81618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81618_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_81621();
function goToPage_81621() {
	window.obj81618_onTap_runningActionsCount = obj81618_onTap_runningActionsCount + 1;
	$("#anchor615")[0].click();
	window.obj81618_onTap_runningActionsCount = window.obj81618_onTap_runningActionsCount - 1;
if (window.obj81618_onTap_runningActionsCount < 0) {
	window.obj81618_onTap_runningActionsCount = 0;
} else if (window.obj81618_onTap_runningActionsCount == 0) {
	obj81618_onTap_actionGroup2();
}
}





















};
obj81618_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81618_onTap_activeActionGroupIndex = -1;
		$("#obj81618").trigger("obj81618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81618) {
				console.warn("de-queueing event obj81618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81618_onTap_activeActionGroupIndex = 2;
	





















};
obj81616_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81616_onTap_activeActionGroupIndex = -1;
		$("#obj81616").trigger("obj81616_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81616) {
				console.warn("de-queueing event obj81616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81616_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83634();
function runjs_83634() {
	window.obj81616_onTap_runningActionsCount = obj81616_onTap_runningActionsCount + 1;

	$("#obj81616").css("border-color", "#058E3F"); $("#obj81616").css("border-width", "2px"); $("#obj81616").css("border-style", "solid"); $("#obj81616").css("border-radius", "25px"); $("#obj81616").css("-webkit-border-radius", "25px"); $("#obj81616").css("-moz-border-radius", "25px"); $("#obj81616_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj81616_onTap_runningActionsCount = window.obj81616_onTap_runningActionsCount - 1;
if (window.obj81616_onTap_runningActionsCount < 0) {
	window.obj81616_onTap_runningActionsCount = 0;
} else if (window.obj81616_onTap_runningActionsCount == 0) {
	obj81616_onTap_actionGroup1();
}
	}, 1);
}







};
obj81616_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81616_onTap_activeActionGroupIndex = -1;
		$("#obj81616").trigger("obj81616_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81616) {
				console.warn("de-queueing event obj81616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81616_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_83636();
function goToPage_83636() {
	window.obj81616_onTap_runningActionsCount = obj81616_onTap_runningActionsCount + 1;
	$("#anchor616")[0].click();
	window.obj81616_onTap_runningActionsCount = window.obj81616_onTap_runningActionsCount - 1;
if (window.obj81616_onTap_runningActionsCount < 0) {
	window.obj81616_onTap_runningActionsCount = 0;
} else if (window.obj81616_onTap_runningActionsCount == 0) {
	obj81616_onTap_actionGroup2();
}
}





















};
obj81616_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81616_onTap_activeActionGroupIndex = -1;
		$("#obj81616").trigger("obj81616_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81616) {
				console.warn("de-queueing event obj81616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81616_onTap_activeActionGroupIndex = 2;
	





















};
obj81613_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81613_onTap_activeActionGroupIndex = -1;
		$("#obj81613").trigger("obj81613_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81613) {
				console.warn("de-queueing event obj81613." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81613").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81613_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81615();
function goToPage_81615() {
	window.obj81613_onTap_runningActionsCount = obj81613_onTap_runningActionsCount + 1;
	$("#anchor617")[0].click();
	window.obj81613_onTap_runningActionsCount = window.obj81613_onTap_runningActionsCount - 1;
if (window.obj81613_onTap_runningActionsCount < 0) {
	window.obj81613_onTap_runningActionsCount = 0;
} else if (window.obj81613_onTap_runningActionsCount == 0) {
	obj81613_onTap_actionGroup1();
}
}





















};
obj81613_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81613_onTap_activeActionGroupIndex = -1;
		$("#obj81613").trigger("obj81613_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81613) {
				console.warn("de-queueing event obj81613." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81613").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81613_onTap_activeActionGroupIndex = 1;
	





















};
obj81611_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81611_onTap_activeActionGroupIndex = -1;
		$("#obj81611").trigger("obj81611_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81611) {
				console.warn("de-queueing event obj81611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81611_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_83637();
function goToPage_83637() {
	window.obj81611_onTap_runningActionsCount = obj81611_onTap_runningActionsCount + 1;
	$("#anchor618")[0].click();
	window.obj81611_onTap_runningActionsCount = window.obj81611_onTap_runningActionsCount - 1;
if (window.obj81611_onTap_runningActionsCount < 0) {
	window.obj81611_onTap_runningActionsCount = 0;
} else if (window.obj81611_onTap_runningActionsCount == 0) {
	obj81611_onTap_actionGroup1();
}
}





















};
obj81611_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81611_onTap_activeActionGroupIndex = -1;
		$("#obj81611").trigger("obj81611_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81611) {
				console.warn("de-queueing event obj81611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81611_onTap_activeActionGroupIndex = 1;
	





















};
obj81593_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81593_onTap_activeActionGroupIndex = -1;
		$("#obj81593").trigger("obj81593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81593) {
				console.warn("de-queueing event obj81593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81593_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj81593 
hide_81596();
function hide_81596() {
	var selector = "#obj81593";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81593_onTap_runningActionsCount = obj81593_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81593_onTap_runningActionsCount = window.obj81593_onTap_runningActionsCount - 1;
if (window.obj81593_onTap_runningActionsCount < 0) {
	window.obj81593_onTap_runningActionsCount = 0;
} else if (window.obj81593_onTap_runningActionsCount == 0) {
	obj81593_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81596(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81593_onTap_runningActionsCount = window.obj81593_onTap_runningActionsCount - 1;
if (window.obj81593_onTap_runningActionsCount < 0) {
	window.obj81593_onTap_runningActionsCount = 0;
} else if (window.obj81593_onTap_runningActionsCount == 0) {
	obj81593_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj81583 
stopMovie_81595();
function stopMovie_81595() {
	window.obj81593_onTap_runningActionsCount = obj81593_onTap_runningActionsCount + 1;
	var myVideo = $("#obj81583")[0];
	myVideo.pause();
	window.obj81593_onTap_runningActionsCount = window.obj81593_onTap_runningActionsCount - 1;
if (window.obj81593_onTap_runningActionsCount < 0) {
	window.obj81593_onTap_runningActionsCount = 0;
} else if (window.obj81593_onTap_runningActionsCount == 0) {
	obj81593_onTap_actionGroup1();
}
}
















};
obj81593_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81593_onTap_activeActionGroupIndex = -1;
		$("#obj81593").trigger("obj81593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81593) {
				console.warn("de-queueing event obj81593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81593_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj81585
(function(){
	window.obj81593_onTap_runningActionsCount = obj81593_onTap_runningActionsCount + 1;

	var selector = "#obj81585";
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
					window.obj81593_onTap_runningActionsCount = window.obj81593_onTap_runningActionsCount - 1;
if (window.obj81593_onTap_runningActionsCount < 0) {
	window.obj81593_onTap_runningActionsCount = 0;
} else if (window.obj81593_onTap_runningActionsCount == 0) {
	obj81593_onTap_actionGroup2();
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
				window.obj81593_onTap_runningActionsCount = window.obj81593_onTap_runningActionsCount - 1;
if (window.obj81593_onTap_runningActionsCount < 0) {
	window.obj81593_onTap_runningActionsCount = 0;
} else if (window.obj81593_onTap_runningActionsCount == 0) {
	obj81593_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81593_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81593_onTap_activeActionGroupIndex = -1;
		$("#obj81593").trigger("obj81593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81593) {
				console.warn("de-queueing event obj81593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81593_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj81583 
move_81598();
function move_81598() {
	window.obj81593_onTap_runningActionsCount = obj81593_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj81583");
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
			window.obj81593_onTap_runningActionsCount = window.obj81593_onTap_runningActionsCount - 1;
if (window.obj81593_onTap_runningActionsCount < 0) {
	window.obj81593_onTap_runningActionsCount = 0;
} else if (window.obj81593_onTap_runningActionsCount == 0) {
	obj81593_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj81593_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81593_onTap_activeActionGroupIndex = -1;
		$("#obj81593").trigger("obj81593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81593) {
				console.warn("de-queueing event obj81593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81593_onTap_activeActionGroupIndex = 3;
	





















};
obj81585_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81585_onTap_activeActionGroupIndex = -1;
		$("#obj81585").trigger("obj81585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81585) {
				console.warn("de-queueing event obj81585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81585_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj81585 
hide_81588();
function hide_81588() {
	var selector = "#obj81585";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81585_onTap_runningActionsCount = obj81585_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81585_onTap_runningActionsCount = window.obj81585_onTap_runningActionsCount - 1;
if (window.obj81585_onTap_runningActionsCount < 0) {
	window.obj81585_onTap_runningActionsCount = 0;
} else if (window.obj81585_onTap_runningActionsCount == 0) {
	obj81585_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81588(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81585_onTap_runningActionsCount = window.obj81585_onTap_runningActionsCount - 1;
if (window.obj81585_onTap_runningActionsCount < 0) {
	window.obj81585_onTap_runningActionsCount = 0;
} else if (window.obj81585_onTap_runningActionsCount == 0) {
	obj81585_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj81583 
playPauseMovie_81587();
function playPauseMovie_81587() {
	window.obj81585_onTap_runningActionsCount = obj81585_onTap_runningActionsCount + 1;
	var myVideo = $("#obj81583")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj81585_onTap_runningActionsCount = window.obj81585_onTap_runningActionsCount - 1;
if (window.obj81585_onTap_runningActionsCount < 0) {
	window.obj81585_onTap_runningActionsCount = 0;
} else if (window.obj81585_onTap_runningActionsCount == 0) {
	obj81585_onTap_actionGroup1();
}
}

















};
obj81585_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81585_onTap_activeActionGroupIndex = -1;
		$("#obj81585").trigger("obj81585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81585) {
				console.warn("de-queueing event obj81585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81585_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj81593
(function(){
	window.obj81585_onTap_runningActionsCount = obj81585_onTap_runningActionsCount + 1;

	var selector = "#obj81593";
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
					window.obj81585_onTap_runningActionsCount = window.obj81585_onTap_runningActionsCount - 1;
if (window.obj81585_onTap_runningActionsCount < 0) {
	window.obj81585_onTap_runningActionsCount = 0;
} else if (window.obj81585_onTap_runningActionsCount == 0) {
	obj81585_onTap_actionGroup2();
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
				window.obj81585_onTap_runningActionsCount = window.obj81585_onTap_runningActionsCount - 1;
if (window.obj81585_onTap_runningActionsCount < 0) {
	window.obj81585_onTap_runningActionsCount = 0;
} else if (window.obj81585_onTap_runningActionsCount == 0) {
	obj81585_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81585_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81585_onTap_activeActionGroupIndex = -1;
		$("#obj81585").trigger("obj81585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81585) {
				console.warn("de-queueing event obj81585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81585_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj81583 
move_81590();
function move_81590() {
	window.obj81585_onTap_runningActionsCount = obj81585_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj81583");
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
			window.obj81585_onTap_runningActionsCount = window.obj81585_onTap_runningActionsCount - 1;
if (window.obj81585_onTap_runningActionsCount < 0) {
	window.obj81585_onTap_runningActionsCount = 0;
} else if (window.obj81585_onTap_runningActionsCount == 0) {
	obj81585_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj81585_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81585_onTap_activeActionGroupIndex = -1;
		$("#obj81585").trigger("obj81585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81585) {
				console.warn("de-queueing event obj81585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81585_onTap_activeActionGroupIndex = 3;
	





















};
obj88105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88105_onTap_activeActionGroupIndex = -1;
		$("#obj88105").trigger("obj88105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88105) {
				console.warn("de-queueing event obj88105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88105_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88110 
stopAudio_88107();
function stopAudio_88107() {
	window.obj88105_onTap_runningActionsCount = obj88105_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88110")[0];
	myAudio.pause();
	window.obj88105_onTap_runningActionsCount = window.obj88105_onTap_runningActionsCount - 1;
if (window.obj88105_onTap_runningActionsCount < 0) {
	window.obj88105_onTap_runningActionsCount = 0;
} else if (window.obj88105_onTap_runningActionsCount == 0) {
	obj88105_onTap_actionGroup1();
}
}








};
obj88105_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88105_onTap_activeActionGroupIndex = -1;
		$("#obj88105").trigger("obj88105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88105) {
				console.warn("de-queueing event obj88105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88105_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88105 
hide_88108();
function hide_88108() {
	var selector = "#obj88105";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88105_onTap_runningActionsCount = obj88105_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88105_onTap_runningActionsCount = window.obj88105_onTap_runningActionsCount - 1;
if (window.obj88105_onTap_runningActionsCount < 0) {
	window.obj88105_onTap_runningActionsCount = 0;
} else if (window.obj88105_onTap_runningActionsCount == 0) {
	obj88105_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88108(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88105_onTap_runningActionsCount = window.obj88105_onTap_runningActionsCount - 1;
if (window.obj88105_onTap_runningActionsCount < 0) {
	window.obj88105_onTap_runningActionsCount = 0;
} else if (window.obj88105_onTap_runningActionsCount == 0) {
	obj88105_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88105_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88105_onTap_activeActionGroupIndex = -1;
		$("#obj88105").trigger("obj88105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88105) {
				console.warn("de-queueing event obj88105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88105_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88100
(function(){
	window.obj88105_onTap_runningActionsCount = obj88105_onTap_runningActionsCount + 1;

	var selector = "#obj88100";
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
					window.obj88105_onTap_runningActionsCount = window.obj88105_onTap_runningActionsCount - 1;
if (window.obj88105_onTap_runningActionsCount < 0) {
	window.obj88105_onTap_runningActionsCount = 0;
} else if (window.obj88105_onTap_runningActionsCount == 0) {
	obj88105_onTap_actionGroup3();
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
				window.obj88105_onTap_runningActionsCount = window.obj88105_onTap_runningActionsCount - 1;
if (window.obj88105_onTap_runningActionsCount < 0) {
	window.obj88105_onTap_runningActionsCount = 0;
} else if (window.obj88105_onTap_runningActionsCount == 0) {
	obj88105_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88105_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88105_onTap_activeActionGroupIndex = -1;
		$("#obj88105").trigger("obj88105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88105) {
				console.warn("de-queueing event obj88105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88105_onTap_activeActionGroupIndex = 3;
	





















};
obj88100_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88100_onTap_activeActionGroupIndex = -1;
		$("#obj88100").trigger("obj88100_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88100) {
				console.warn("de-queueing event obj88100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88100_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88100 
hide_88102();
function hide_88102() {
	var selector = "#obj88100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88100_onTap_runningActionsCount = obj88100_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88100_onTap_runningActionsCount = window.obj88100_onTap_runningActionsCount - 1;
if (window.obj88100_onTap_runningActionsCount < 0) {
	window.obj88100_onTap_runningActionsCount = 0;
} else if (window.obj88100_onTap_runningActionsCount == 0) {
	obj88100_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88102(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88100_onTap_runningActionsCount = window.obj88100_onTap_runningActionsCount - 1;
if (window.obj88100_onTap_runningActionsCount < 0) {
	window.obj88100_onTap_runningActionsCount = 0;
} else if (window.obj88100_onTap_runningActionsCount == 0) {
	obj88100_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88100_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88100_onTap_activeActionGroupIndex = -1;
		$("#obj88100").trigger("obj88100_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88100) {
				console.warn("de-queueing event obj88100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88100_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88105
(function(){
	window.obj88100_onTap_runningActionsCount = obj88100_onTap_runningActionsCount + 1;

	var selector = "#obj88105";
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
					window.obj88100_onTap_runningActionsCount = window.obj88100_onTap_runningActionsCount - 1;
if (window.obj88100_onTap_runningActionsCount < 0) {
	window.obj88100_onTap_runningActionsCount = 0;
} else if (window.obj88100_onTap_runningActionsCount == 0) {
	obj88100_onTap_actionGroup2();
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
				window.obj88100_onTap_runningActionsCount = window.obj88100_onTap_runningActionsCount - 1;
if (window.obj88100_onTap_runningActionsCount < 0) {
	window.obj88100_onTap_runningActionsCount = 0;
} else if (window.obj88100_onTap_runningActionsCount == 0) {
	obj88100_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88100_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88100_onTap_activeActionGroupIndex = -1;
		$("#obj88100").trigger("obj88100_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88100) {
				console.warn("de-queueing event obj88100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88100_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88110 
playAudio_88104();
function playAudio_88104() {
	window.obj88100_onTap_runningActionsCount = obj88100_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88110")[0];
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
		    window.obj88100_onTap_runningActionsCount = window.obj88100_onTap_runningActionsCount - 1;
if (window.obj88100_onTap_runningActionsCount < 0) {
	window.obj88100_onTap_runningActionsCount = 0;
} else if (window.obj88100_onTap_runningActionsCount == 0) {
	obj88100_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88100_onTap_runningActionsCount = window.obj88100_onTap_runningActionsCount - 1;
if (window.obj88100_onTap_runningActionsCount < 0) {
	window.obj88100_onTap_runningActionsCount = 0;
} else if (window.obj88100_onTap_runningActionsCount == 0) {
	obj88100_onTap_actionGroup3();
}
	}
}









};
obj88100_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88100_onTap_activeActionGroupIndex = -1;
		$("#obj88100").trigger("obj88100_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88100) {
				console.warn("de-queueing event obj88100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88100_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj81635: Event Touch Down
 *
 */
$("#obj81635").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81635_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81635_onTap is still running");
	return;
}
var obj81635_onTap_runningActionsCount = 0;
var obj81635_onTap_loopCount = 0;
obj81635_onTap_actionGroup0();
});










/*
 *
 *   obj81632: Event Touch Down
 *
 */
$("#obj81632").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81632_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81632_onTap is still running");
	return;
}
var obj81632_onTap_runningActionsCount = 0;
var obj81632_onTap_loopCount = 0;
obj81632_onTap_actionGroup0();
});




























































/*
 *
 *   obj81618: Event Touch Down
 *
 */
$("#obj81618").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81618_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81618_onTap is still running");
	return;
}
var obj81618_onTap_runningActionsCount = 0;
var obj81618_onTap_loopCount = 0;
obj81618_onTap_actionGroup0();
});










/*
 *
 *   obj81616: Event Touch Down
 *
 */
$("#obj81616").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81616_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81616_onTap is still running");
	return;
}
var obj81616_onTap_runningActionsCount = 0;
var obj81616_onTap_loopCount = 0;
obj81616_onTap_actionGroup0();
});










/*
 *
 *   obj81613: Event Touch Down
 *
 */
$("#obj81613").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81613_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81613_onTap is still running");
	return;
}
var obj81613_onTap_runningActionsCount = 0;
var obj81613_onTap_loopCount = 0;
obj81613_onTap_actionGroup0();
});










/*
 *
 *   obj81611: Event Touch Down
 *
 */
$("#obj81611").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81611_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81611_onTap is still running");
	return;
}
var obj81611_onTap_runningActionsCount = 0;
var obj81611_onTap_loopCount = 0;
obj81611_onTap_actionGroup0();
});










/*
 *
 *   obj81593: Event Touch Down
 *
 */
$("#obj81593").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81593_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81593_onTap is still running");
	return;
}
var obj81593_onTap_runningActionsCount = 0;
var obj81593_onTap_loopCount = 0;
obj81593_onTap_actionGroup0();
});










/*
 *
 *   obj81585: Event Touch Down
 *
 */
$("#obj81585").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81585_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81585_onTap is still running");
	return;
}
var obj81585_onTap_runningActionsCount = 0;
var obj81585_onTap_loopCount = 0;
obj81585_onTap_actionGroup0();
});










/*
 *
 *   obj88105: Event Touch Down
 *
 */
$("#obj88105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88105_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88105_onTap is still running");
	return;
}
var obj88105_onTap_runningActionsCount = 0;
var obj88105_onTap_loopCount = 0;
obj88105_onTap_actionGroup0();
});










/*
 *
 *   obj88100: Event Touch Down
 *
 */
$("#obj88100").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88100_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88100_onTap is still running");
	return;
}
var obj88100_onTap_runningActionsCount = 0;
var obj88100_onTap_loopCount = 0;
obj88100_onTap_actionGroup0();
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
	
$("#obj81638").trigger('SCEventShow');
$("#obj81635").trigger('SCEventShow');
$("#obj81632").trigger('SCEventShow');
$("#obj81630").trigger('SCEventShow');
$("#obj81628").trigger('SCEventShow');
$("#obj81626").trigger('SCEventShow');
$("#obj81624").trigger('SCEventShow');
$("#obj81622").trigger('SCEventShow');
$("#obj81618").trigger('SCEventShow');
$("#obj81616").trigger('SCEventShow');
$("#obj81613").trigger('SCEventShow');
$("#obj81611").trigger('SCEventShow');
$("#obj81593").trigger('SCEventShow');
$("#obj81585").trigger('SCEventShow');
$("#obj88105").trigger('SCEventShow');
$("#obj88100").trigger('SCEventShow');
$("#obj88110").trigger('SCEventShow');
$("#obj94835").trigger('SCEventShow');
$("#obj81583").trigger('SCEventShow');
	
});