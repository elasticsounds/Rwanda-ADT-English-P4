pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 5813;
pubcoder.page.title = pubcoder.page.title || "31";
pubcoder.page.number = pubcoder.page.number || 31;
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
var obj6023_onTap_activeActionGroupIndex = -1;
var obj6023_onTap_runningActionsCount = 0;
var obj6023_onTap_loopCount = 0;
var obj6020_onTap_activeActionGroupIndex = -1;
var obj6020_onTap_runningActionsCount = 0;
var obj6020_onTap_loopCount = 0;
var obj6060_onTap_activeActionGroupIndex = -1;
var obj6060_onTap_runningActionsCount = 0;
var obj6060_onTap_loopCount = 0;
var obj6062_onTap_activeActionGroupIndex = -1;
var obj6062_onTap_runningActionsCount = 0;
var obj6062_onTap_loopCount = 0;
var obj6064_onTap_activeActionGroupIndex = -1;
var obj6064_onTap_runningActionsCount = 0;
var obj6064_onTap_loopCount = 0;
var obj6066_onTap_activeActionGroupIndex = -1;
var obj6066_onTap_runningActionsCount = 0;
var obj6066_onTap_loopCount = 0;
var obj65454_onTap_activeActionGroupIndex = -1;
var obj65454_onTap_runningActionsCount = 0;
var obj65454_onTap_loopCount = 0;
var obj65446_onTap_activeActionGroupIndex = -1;
var obj65446_onTap_runningActionsCount = 0;
var obj65446_onTap_loopCount = 0;
var obj89847_onTap_activeActionGroupIndex = -1;
var obj89847_onTap_runningActionsCount = 0;
var obj89847_onTap_loopCount = 0;
var obj89842_onTap_activeActionGroupIndex = -1;
var obj89842_onTap_runningActionsCount = 0;
var obj89842_onTap_loopCount = 0;
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
		
obj6023_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6023_onTap_activeActionGroupIndex = -1;
		$("#obj6023").trigger("obj6023_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6023) {
				console.warn("de-queueing event obj6023." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6023").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6023_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_6025();
function goToPage_6025() {
	window.obj6023_onTap_runningActionsCount = obj6023_onTap_runningActionsCount + 1;
	$("#anchor186")[0].click();
	window.obj6023_onTap_runningActionsCount = window.obj6023_onTap_runningActionsCount - 1;
if (window.obj6023_onTap_runningActionsCount < 0) {
	window.obj6023_onTap_runningActionsCount = 0;
} else if (window.obj6023_onTap_runningActionsCount == 0) {
	obj6023_onTap_actionGroup1();
}
}





















};
obj6023_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6023_onTap_activeActionGroupIndex = -1;
		$("#obj6023").trigger("obj6023_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6023) {
				console.warn("de-queueing event obj6023." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6023").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6023_onTap_activeActionGroupIndex = 1;
	





















};
obj6020_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6020_onTap_activeActionGroupIndex = -1;
		$("#obj6020").trigger("obj6020_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6020) {
				console.warn("de-queueing event obj6020." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6020").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6020_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86796();
function goToPage_86796() {
	window.obj6020_onTap_runningActionsCount = obj6020_onTap_runningActionsCount + 1;
	$("#anchor187")[0].click();
	window.obj6020_onTap_runningActionsCount = window.obj6020_onTap_runningActionsCount - 1;
if (window.obj6020_onTap_runningActionsCount < 0) {
	window.obj6020_onTap_runningActionsCount = 0;
} else if (window.obj6020_onTap_runningActionsCount == 0) {
	obj6020_onTap_actionGroup1();
}
}





















};
obj6020_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6020_onTap_activeActionGroupIndex = -1;
		$("#obj6020").trigger("obj6020_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6020) {
				console.warn("de-queueing event obj6020." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6020").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6020_onTap_activeActionGroupIndex = 1;
	





















};
obj6060_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6060_onTap_activeActionGroupIndex = -1;
		$("#obj6060").trigger("obj6060_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6060) {
				console.warn("de-queueing event obj6060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6060_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6068();
function runjs_6068() {
	window.obj6060_onTap_runningActionsCount = obj6060_onTap_runningActionsCount + 1;

	$("#obj6060").css("border-color", "#058E3F"); $("#obj6060").css("border-width", "2px"); $("#obj6060").css("border-style", "solid"); $("#obj6060").css("border-radius", "25px"); $("#obj6060").css("-webkit-border-radius", "25px"); $("#obj6060").css("-moz-border-radius", "25px"); $("#obj6060_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj6060_onTap_runningActionsCount = window.obj6060_onTap_runningActionsCount - 1;
if (window.obj6060_onTap_runningActionsCount < 0) {
	window.obj6060_onTap_runningActionsCount = 0;
} else if (window.obj6060_onTap_runningActionsCount == 0) {
	obj6060_onTap_actionGroup1();
}
	}, 1);
}







};
obj6060_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6060_onTap_activeActionGroupIndex = -1;
		$("#obj6060").trigger("obj6060_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6060) {
				console.warn("de-queueing event obj6060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6060_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_6070();
function goToPage_6070() {
	window.obj6060_onTap_runningActionsCount = obj6060_onTap_runningActionsCount + 1;
	$("#anchor188")[0].click();
	window.obj6060_onTap_runningActionsCount = window.obj6060_onTap_runningActionsCount - 1;
if (window.obj6060_onTap_runningActionsCount < 0) {
	window.obj6060_onTap_runningActionsCount = 0;
} else if (window.obj6060_onTap_runningActionsCount == 0) {
	obj6060_onTap_actionGroup2();
}
}





















};
obj6060_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6060_onTap_activeActionGroupIndex = -1;
		$("#obj6060").trigger("obj6060_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6060) {
				console.warn("de-queueing event obj6060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6060_onTap_activeActionGroupIndex = 2;
	





















};
obj6062_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6062_onTap_activeActionGroupIndex = -1;
		$("#obj6062").trigger("obj6062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6062) {
				console.warn("de-queueing event obj6062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6062_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68374();
function runjs_68374() {
	window.obj6062_onTap_runningActionsCount = obj6062_onTap_runningActionsCount + 1;

	$("#obj6062").css("border-color", "#058E3F"); $("#obj6062").css("border-width", "2px"); $("#obj6062").css("border-style", "solid"); $("#obj6062").css("border-radius", "25px"); $("#obj6062").css("-webkit-border-radius", "25px"); $("#obj6062").css("-moz-border-radius", "25px"); $("#obj6062_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj6062_onTap_runningActionsCount = window.obj6062_onTap_runningActionsCount - 1;
if (window.obj6062_onTap_runningActionsCount < 0) {
	window.obj6062_onTap_runningActionsCount = 0;
} else if (window.obj6062_onTap_runningActionsCount == 0) {
	obj6062_onTap_actionGroup1();
}
	}, 1);
}







};
obj6062_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6062_onTap_activeActionGroupIndex = -1;
		$("#obj6062").trigger("obj6062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6062) {
				console.warn("de-queueing event obj6062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6062_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_68577();
function goToPage_68577() {
	window.obj6062_onTap_runningActionsCount = obj6062_onTap_runningActionsCount + 1;
	$("#anchor189")[0].click();
	window.obj6062_onTap_runningActionsCount = window.obj6062_onTap_runningActionsCount - 1;
if (window.obj6062_onTap_runningActionsCount < 0) {
	window.obj6062_onTap_runningActionsCount = 0;
} else if (window.obj6062_onTap_runningActionsCount == 0) {
	obj6062_onTap_actionGroup2();
}
}





















};
obj6062_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6062_onTap_activeActionGroupIndex = -1;
		$("#obj6062").trigger("obj6062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6062) {
				console.warn("de-queueing event obj6062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6062_onTap_activeActionGroupIndex = 2;
	





















};
obj6064_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6064_onTap_activeActionGroupIndex = -1;
		$("#obj6064").trigger("obj6064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6064) {
				console.warn("de-queueing event obj6064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6064_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_58368();
function goToPage_58368() {
	window.obj6064_onTap_runningActionsCount = obj6064_onTap_runningActionsCount + 1;
	$("#anchor190")[0].click();
	window.obj6064_onTap_runningActionsCount = window.obj6064_onTap_runningActionsCount - 1;
if (window.obj6064_onTap_runningActionsCount < 0) {
	window.obj6064_onTap_runningActionsCount = 0;
} else if (window.obj6064_onTap_runningActionsCount == 0) {
	obj6064_onTap_actionGroup1();
}
}





















};
obj6064_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6064_onTap_activeActionGroupIndex = -1;
		$("#obj6064").trigger("obj6064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6064) {
				console.warn("de-queueing event obj6064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6064_onTap_activeActionGroupIndex = 1;
	





















};
obj6066_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6066_onTap_activeActionGroupIndex = -1;
		$("#obj6066").trigger("obj6066_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6066) {
				console.warn("de-queueing event obj6066." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6066").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6066_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68578();
function goToPage_68578() {
	window.obj6066_onTap_runningActionsCount = obj6066_onTap_runningActionsCount + 1;
	$("#anchor191")[0].click();
	window.obj6066_onTap_runningActionsCount = window.obj6066_onTap_runningActionsCount - 1;
if (window.obj6066_onTap_runningActionsCount < 0) {
	window.obj6066_onTap_runningActionsCount = 0;
} else if (window.obj6066_onTap_runningActionsCount == 0) {
	obj6066_onTap_actionGroup1();
}
}





















};
obj6066_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6066_onTap_activeActionGroupIndex = -1;
		$("#obj6066").trigger("obj6066_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6066) {
				console.warn("de-queueing event obj6066." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6066").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6066_onTap_activeActionGroupIndex = 1;
	





















};
obj65454_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65454_onTap_activeActionGroupIndex = -1;
		$("#obj65454").trigger("obj65454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65454) {
				console.warn("de-queueing event obj65454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65454_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65454 
hide_65457();
function hide_65457() {
	var selector = "#obj65454";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65454_onTap_runningActionsCount = obj65454_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65454_onTap_runningActionsCount = window.obj65454_onTap_runningActionsCount - 1;
if (window.obj65454_onTap_runningActionsCount < 0) {
	window.obj65454_onTap_runningActionsCount = 0;
} else if (window.obj65454_onTap_runningActionsCount == 0) {
	obj65454_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65457(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65454_onTap_runningActionsCount = window.obj65454_onTap_runningActionsCount - 1;
if (window.obj65454_onTap_runningActionsCount < 0) {
	window.obj65454_onTap_runningActionsCount = 0;
} else if (window.obj65454_onTap_runningActionsCount == 0) {
	obj65454_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65460 
stopMovie_65456();
function stopMovie_65456() {
	window.obj65454_onTap_runningActionsCount = obj65454_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65460")[0];
	myVideo.pause();
	window.obj65454_onTap_runningActionsCount = window.obj65454_onTap_runningActionsCount - 1;
if (window.obj65454_onTap_runningActionsCount < 0) {
	window.obj65454_onTap_runningActionsCount = 0;
} else if (window.obj65454_onTap_runningActionsCount == 0) {
	obj65454_onTap_actionGroup1();
}
}
















};
obj65454_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65454_onTap_activeActionGroupIndex = -1;
		$("#obj65454").trigger("obj65454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65454) {
				console.warn("de-queueing event obj65454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65454_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65446
(function(){
	window.obj65454_onTap_runningActionsCount = obj65454_onTap_runningActionsCount + 1;

	var selector = "#obj65446";
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
					window.obj65454_onTap_runningActionsCount = window.obj65454_onTap_runningActionsCount - 1;
if (window.obj65454_onTap_runningActionsCount < 0) {
	window.obj65454_onTap_runningActionsCount = 0;
} else if (window.obj65454_onTap_runningActionsCount == 0) {
	obj65454_onTap_actionGroup2();
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
				window.obj65454_onTap_runningActionsCount = window.obj65454_onTap_runningActionsCount - 1;
if (window.obj65454_onTap_runningActionsCount < 0) {
	window.obj65454_onTap_runningActionsCount = 0;
} else if (window.obj65454_onTap_runningActionsCount == 0) {
	obj65454_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65454_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65454_onTap_activeActionGroupIndex = -1;
		$("#obj65454").trigger("obj65454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65454) {
				console.warn("de-queueing event obj65454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65454_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65460 
move_65459();
function move_65459() {
	window.obj65454_onTap_runningActionsCount = obj65454_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65460");
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
			window.obj65454_onTap_runningActionsCount = window.obj65454_onTap_runningActionsCount - 1;
if (window.obj65454_onTap_runningActionsCount < 0) {
	window.obj65454_onTap_runningActionsCount = 0;
} else if (window.obj65454_onTap_runningActionsCount == 0) {
	obj65454_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65454_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65454_onTap_activeActionGroupIndex = -1;
		$("#obj65454").trigger("obj65454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65454) {
				console.warn("de-queueing event obj65454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65454_onTap_activeActionGroupIndex = 3;
	





















};
obj65446_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65446_onTap_activeActionGroupIndex = -1;
		$("#obj65446").trigger("obj65446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65446) {
				console.warn("de-queueing event obj65446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65446_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65446 
hide_65449();
function hide_65449() {
	var selector = "#obj65446";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65446_onTap_runningActionsCount = obj65446_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65446_onTap_runningActionsCount = window.obj65446_onTap_runningActionsCount - 1;
if (window.obj65446_onTap_runningActionsCount < 0) {
	window.obj65446_onTap_runningActionsCount = 0;
} else if (window.obj65446_onTap_runningActionsCount == 0) {
	obj65446_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65449(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65446_onTap_runningActionsCount = window.obj65446_onTap_runningActionsCount - 1;
if (window.obj65446_onTap_runningActionsCount < 0) {
	window.obj65446_onTap_runningActionsCount = 0;
} else if (window.obj65446_onTap_runningActionsCount == 0) {
	obj65446_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65460 
playPauseMovie_65448();
function playPauseMovie_65448() {
	window.obj65446_onTap_runningActionsCount = obj65446_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65460")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65446_onTap_runningActionsCount = window.obj65446_onTap_runningActionsCount - 1;
if (window.obj65446_onTap_runningActionsCount < 0) {
	window.obj65446_onTap_runningActionsCount = 0;
} else if (window.obj65446_onTap_runningActionsCount == 0) {
	obj65446_onTap_actionGroup1();
}
}

















};
obj65446_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65446_onTap_activeActionGroupIndex = -1;
		$("#obj65446").trigger("obj65446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65446) {
				console.warn("de-queueing event obj65446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65446_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65454
(function(){
	window.obj65446_onTap_runningActionsCount = obj65446_onTap_runningActionsCount + 1;

	var selector = "#obj65454";
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
					window.obj65446_onTap_runningActionsCount = window.obj65446_onTap_runningActionsCount - 1;
if (window.obj65446_onTap_runningActionsCount < 0) {
	window.obj65446_onTap_runningActionsCount = 0;
} else if (window.obj65446_onTap_runningActionsCount == 0) {
	obj65446_onTap_actionGroup2();
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
				window.obj65446_onTap_runningActionsCount = window.obj65446_onTap_runningActionsCount - 1;
if (window.obj65446_onTap_runningActionsCount < 0) {
	window.obj65446_onTap_runningActionsCount = 0;
} else if (window.obj65446_onTap_runningActionsCount == 0) {
	obj65446_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65446_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65446_onTap_activeActionGroupIndex = -1;
		$("#obj65446").trigger("obj65446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65446) {
				console.warn("de-queueing event obj65446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65446_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65460 
move_65451();
function move_65451() {
	window.obj65446_onTap_runningActionsCount = obj65446_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65460");
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
			window.obj65446_onTap_runningActionsCount = window.obj65446_onTap_runningActionsCount - 1;
if (window.obj65446_onTap_runningActionsCount < 0) {
	window.obj65446_onTap_runningActionsCount = 0;
} else if (window.obj65446_onTap_runningActionsCount == 0) {
	obj65446_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65446_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65446_onTap_activeActionGroupIndex = -1;
		$("#obj65446").trigger("obj65446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65446) {
				console.warn("de-queueing event obj65446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65446_onTap_activeActionGroupIndex = 3;
	





















};
obj89847_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89847_onTap_activeActionGroupIndex = -1;
		$("#obj89847").trigger("obj89847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89847) {
				console.warn("de-queueing event obj89847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89847_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89852 
stopAudio_89849();
function stopAudio_89849() {
	window.obj89847_onTap_runningActionsCount = obj89847_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89852")[0];
	myAudio.pause();
	window.obj89847_onTap_runningActionsCount = window.obj89847_onTap_runningActionsCount - 1;
if (window.obj89847_onTap_runningActionsCount < 0) {
	window.obj89847_onTap_runningActionsCount = 0;
} else if (window.obj89847_onTap_runningActionsCount == 0) {
	obj89847_onTap_actionGroup1();
}
}








};
obj89847_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89847_onTap_activeActionGroupIndex = -1;
		$("#obj89847").trigger("obj89847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89847) {
				console.warn("de-queueing event obj89847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89847_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89847 
hide_89850();
function hide_89850() {
	var selector = "#obj89847";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89847_onTap_runningActionsCount = obj89847_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89847_onTap_runningActionsCount = window.obj89847_onTap_runningActionsCount - 1;
if (window.obj89847_onTap_runningActionsCount < 0) {
	window.obj89847_onTap_runningActionsCount = 0;
} else if (window.obj89847_onTap_runningActionsCount == 0) {
	obj89847_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89850(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89847_onTap_runningActionsCount = window.obj89847_onTap_runningActionsCount - 1;
if (window.obj89847_onTap_runningActionsCount < 0) {
	window.obj89847_onTap_runningActionsCount = 0;
} else if (window.obj89847_onTap_runningActionsCount == 0) {
	obj89847_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89847_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89847_onTap_activeActionGroupIndex = -1;
		$("#obj89847").trigger("obj89847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89847) {
				console.warn("de-queueing event obj89847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89847_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89842
(function(){
	window.obj89847_onTap_runningActionsCount = obj89847_onTap_runningActionsCount + 1;

	var selector = "#obj89842";
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
					window.obj89847_onTap_runningActionsCount = window.obj89847_onTap_runningActionsCount - 1;
if (window.obj89847_onTap_runningActionsCount < 0) {
	window.obj89847_onTap_runningActionsCount = 0;
} else if (window.obj89847_onTap_runningActionsCount == 0) {
	obj89847_onTap_actionGroup3();
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
				window.obj89847_onTap_runningActionsCount = window.obj89847_onTap_runningActionsCount - 1;
if (window.obj89847_onTap_runningActionsCount < 0) {
	window.obj89847_onTap_runningActionsCount = 0;
} else if (window.obj89847_onTap_runningActionsCount == 0) {
	obj89847_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89847_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89847_onTap_activeActionGroupIndex = -1;
		$("#obj89847").trigger("obj89847_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89847) {
				console.warn("de-queueing event obj89847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89847_onTap_activeActionGroupIndex = 3;
	





















};
obj89842_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89842_onTap_activeActionGroupIndex = -1;
		$("#obj89842").trigger("obj89842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89842) {
				console.warn("de-queueing event obj89842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89842_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89842 
hide_89844();
function hide_89844() {
	var selector = "#obj89842";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89842_onTap_runningActionsCount = obj89842_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89842_onTap_runningActionsCount = window.obj89842_onTap_runningActionsCount - 1;
if (window.obj89842_onTap_runningActionsCount < 0) {
	window.obj89842_onTap_runningActionsCount = 0;
} else if (window.obj89842_onTap_runningActionsCount == 0) {
	obj89842_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89844(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89842_onTap_runningActionsCount = window.obj89842_onTap_runningActionsCount - 1;
if (window.obj89842_onTap_runningActionsCount < 0) {
	window.obj89842_onTap_runningActionsCount = 0;
} else if (window.obj89842_onTap_runningActionsCount == 0) {
	obj89842_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89842_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89842_onTap_activeActionGroupIndex = -1;
		$("#obj89842").trigger("obj89842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89842) {
				console.warn("de-queueing event obj89842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89842_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89847
(function(){
	window.obj89842_onTap_runningActionsCount = obj89842_onTap_runningActionsCount + 1;

	var selector = "#obj89847";
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
					window.obj89842_onTap_runningActionsCount = window.obj89842_onTap_runningActionsCount - 1;
if (window.obj89842_onTap_runningActionsCount < 0) {
	window.obj89842_onTap_runningActionsCount = 0;
} else if (window.obj89842_onTap_runningActionsCount == 0) {
	obj89842_onTap_actionGroup2();
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
				window.obj89842_onTap_runningActionsCount = window.obj89842_onTap_runningActionsCount - 1;
if (window.obj89842_onTap_runningActionsCount < 0) {
	window.obj89842_onTap_runningActionsCount = 0;
} else if (window.obj89842_onTap_runningActionsCount == 0) {
	obj89842_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89842_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89842_onTap_activeActionGroupIndex = -1;
		$("#obj89842").trigger("obj89842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89842) {
				console.warn("de-queueing event obj89842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89842_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89852 
playAudio_89846();
function playAudio_89846() {
	window.obj89842_onTap_runningActionsCount = obj89842_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89852")[0];
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
		    window.obj89842_onTap_runningActionsCount = window.obj89842_onTap_runningActionsCount - 1;
if (window.obj89842_onTap_runningActionsCount < 0) {
	window.obj89842_onTap_runningActionsCount = 0;
} else if (window.obj89842_onTap_runningActionsCount == 0) {
	obj89842_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89842_onTap_runningActionsCount = window.obj89842_onTap_runningActionsCount - 1;
if (window.obj89842_onTap_runningActionsCount < 0) {
	window.obj89842_onTap_runningActionsCount = 0;
} else if (window.obj89842_onTap_runningActionsCount == 0) {
	obj89842_onTap_actionGroup3();
}
	}
}









};
obj89842_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89842_onTap_activeActionGroupIndex = -1;
		$("#obj89842").trigger("obj89842_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89842) {
				console.warn("de-queueing event obj89842." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89842").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89842_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj6023: Event Touch Down
 *
 */
$("#obj6023").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6023_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6023_onTap is still running");
	return;
}
var obj6023_onTap_runningActionsCount = 0;
var obj6023_onTap_loopCount = 0;
obj6023_onTap_actionGroup0();
});










/*
 *
 *   obj6020: Event Touch Down
 *
 */
$("#obj6020").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6020_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6020_onTap is still running");
	return;
}
var obj6020_onTap_runningActionsCount = 0;
var obj6020_onTap_loopCount = 0;
obj6020_onTap_actionGroup0();
});




























































/*
 *
 *   obj6060: Event Touch Down
 *
 */
$("#obj6060").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6060_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6060_onTap is still running");
	return;
}
var obj6060_onTap_runningActionsCount = 0;
var obj6060_onTap_loopCount = 0;
obj6060_onTap_actionGroup0();
});










/*
 *
 *   obj6062: Event Touch Down
 *
 */
$("#obj6062").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6062_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6062_onTap is still running");
	return;
}
var obj6062_onTap_runningActionsCount = 0;
var obj6062_onTap_loopCount = 0;
obj6062_onTap_actionGroup0();
});










/*
 *
 *   obj6064: Event Touch Down
 *
 */
$("#obj6064").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6064_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6064_onTap is still running");
	return;
}
var obj6064_onTap_runningActionsCount = 0;
var obj6064_onTap_loopCount = 0;
obj6064_onTap_actionGroup0();
});










/*
 *
 *   obj6066: Event Touch Down
 *
 */
$("#obj6066").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6066_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6066_onTap is still running");
	return;
}
var obj6066_onTap_runningActionsCount = 0;
var obj6066_onTap_loopCount = 0;
obj6066_onTap_actionGroup0();
});










/*
 *
 *   obj65454: Event Touch Down
 *
 */
$("#obj65454").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65454_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65454_onTap is still running");
	return;
}
var obj65454_onTap_runningActionsCount = 0;
var obj65454_onTap_loopCount = 0;
obj65454_onTap_actionGroup0();
});










/*
 *
 *   obj65446: Event Touch Down
 *
 */
$("#obj65446").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65446_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65446_onTap is still running");
	return;
}
var obj65446_onTap_runningActionsCount = 0;
var obj65446_onTap_loopCount = 0;
obj65446_onTap_actionGroup0();
});










/*
 *
 *   obj89847: Event Touch Down
 *
 */
$("#obj89847").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89847_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89847_onTap is still running");
	return;
}
var obj89847_onTap_runningActionsCount = 0;
var obj89847_onTap_loopCount = 0;
obj89847_onTap_actionGroup0();
});










/*
 *
 *   obj89842: Event Touch Down
 *
 */
$("#obj89842").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89842_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89842_onTap is still running");
	return;
}
var obj89842_onTap_runningActionsCount = 0;
var obj89842_onTap_loopCount = 0;
obj89842_onTap_actionGroup0();
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
	
$("#obj6018").trigger('SCEventShow');
$("#obj6023").trigger('SCEventShow');
$("#obj6020").trigger('SCEventShow');
$("#obj6039").trigger('SCEventShow');
$("#obj6045").trigger('SCEventShow');
$("#obj6047").trigger('SCEventShow');
$("#obj6049").trigger('SCEventShow');
$("#obj6051").trigger('SCEventShow');
$("#obj6060").trigger('SCEventShow');
$("#obj6062").trigger('SCEventShow');
$("#obj6064").trigger('SCEventShow');
$("#obj6066").trigger('SCEventShow');
$("#obj65454").trigger('SCEventShow');
$("#obj65446").trigger('SCEventShow');
$("#obj89847").trigger('SCEventShow');
$("#obj89842").trigger('SCEventShow');
$("#obj89852").trigger('SCEventShow');
$("#obj94691").trigger('SCEventShow');
$("#obj65460").trigger('SCEventShow');
	
});