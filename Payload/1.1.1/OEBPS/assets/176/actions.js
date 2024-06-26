pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 49109;
pubcoder.page.title = pubcoder.page.title || "176";
pubcoder.page.number = pubcoder.page.number || 176;
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
var obj49133_onTap_activeActionGroupIndex = -1;
var obj49133_onTap_runningActionsCount = 0;
var obj49133_onTap_loopCount = 0;
var obj49130_onTap_activeActionGroupIndex = -1;
var obj49130_onTap_runningActionsCount = 0;
var obj49130_onTap_loopCount = 0;
var obj49116_onTap_activeActionGroupIndex = -1;
var obj49116_onTap_runningActionsCount = 0;
var obj49116_onTap_loopCount = 0;
var obj49114_onTap_activeActionGroupIndex = -1;
var obj49114_onTap_runningActionsCount = 0;
var obj49114_onTap_loopCount = 0;
var obj49112_onTap_activeActionGroupIndex = -1;
var obj49112_onTap_runningActionsCount = 0;
var obj49112_onTap_loopCount = 0;
var obj49110_onTap_activeActionGroupIndex = -1;
var obj49110_onTap_runningActionsCount = 0;
var obj49110_onTap_loopCount = 0;
var obj67822_onTap_activeActionGroupIndex = -1;
var obj67822_onTap_runningActionsCount = 0;
var obj67822_onTap_loopCount = 0;
var obj67814_onTap_activeActionGroupIndex = -1;
var obj67814_onTap_runningActionsCount = 0;
var obj67814_onTap_loopCount = 0;
var obj88993_onTap_activeActionGroupIndex = -1;
var obj88993_onTap_runningActionsCount = 0;
var obj88993_onTap_loopCount = 0;
var obj88988_onTap_activeActionGroupIndex = -1;
var obj88988_onTap_runningActionsCount = 0;
var obj88988_onTap_loopCount = 0;
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
		
obj49133_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49133_onTap_activeActionGroupIndex = -1;
		$("#obj49133").trigger("obj49133_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49133) {
				console.warn("de-queueing event obj49133." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49133").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49133_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49135();
function goToPage_49135() {
	window.obj49133_onTap_runningActionsCount = obj49133_onTap_runningActionsCount + 1;
	$("#anchor1035")[0].click();
	window.obj49133_onTap_runningActionsCount = window.obj49133_onTap_runningActionsCount - 1;
if (window.obj49133_onTap_runningActionsCount < 0) {
	window.obj49133_onTap_runningActionsCount = 0;
} else if (window.obj49133_onTap_runningActionsCount == 0) {
	obj49133_onTap_actionGroup1();
}
}





















};
obj49133_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49133_onTap_activeActionGroupIndex = -1;
		$("#obj49133").trigger("obj49133_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49133) {
				console.warn("de-queueing event obj49133." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49133").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49133_onTap_activeActionGroupIndex = 1;
	





















};
obj49130_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49130_onTap_activeActionGroupIndex = -1;
		$("#obj49130").trigger("obj49130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49130) {
				console.warn("de-queueing event obj49130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49130_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86792();
function goToPage_86792() {
	window.obj49130_onTap_runningActionsCount = obj49130_onTap_runningActionsCount + 1;
	$("#anchor1036")[0].click();
	window.obj49130_onTap_runningActionsCount = window.obj49130_onTap_runningActionsCount - 1;
if (window.obj49130_onTap_runningActionsCount < 0) {
	window.obj49130_onTap_runningActionsCount = 0;
} else if (window.obj49130_onTap_runningActionsCount == 0) {
	obj49130_onTap_actionGroup1();
}
}





















};
obj49130_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49130_onTap_activeActionGroupIndex = -1;
		$("#obj49130").trigger("obj49130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49130) {
				console.warn("de-queueing event obj49130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49130_onTap_activeActionGroupIndex = 1;
	





















};
obj49116_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49116_onTap_activeActionGroupIndex = -1;
		$("#obj49116").trigger("obj49116_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49116) {
				console.warn("de-queueing event obj49116." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49116").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49116_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49118();
function runjs_49118() {
	window.obj49116_onTap_runningActionsCount = obj49116_onTap_runningActionsCount + 1;

	$("#obj49116").css("border-color", "#058E3F"); $("#obj49116").css("border-width", "2px"); $("#obj49116").css("border-style", "solid"); $("#obj49116").css("border-radius", "25px"); $("#obj49116").css("-webkit-border-radius", "25px"); $("#obj49116").css("-moz-border-radius", "25px"); $("#obj49116_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj49116_onTap_runningActionsCount = window.obj49116_onTap_runningActionsCount - 1;
if (window.obj49116_onTap_runningActionsCount < 0) {
	window.obj49116_onTap_runningActionsCount = 0;
} else if (window.obj49116_onTap_runningActionsCount == 0) {
	obj49116_onTap_actionGroup1();
}
	}, 1);
}







};
obj49116_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49116_onTap_activeActionGroupIndex = -1;
		$("#obj49116").trigger("obj49116_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49116) {
				console.warn("de-queueing event obj49116." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49116").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49116_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_49119();
function goToPage_49119() {
	window.obj49116_onTap_runningActionsCount = obj49116_onTap_runningActionsCount + 1;
	$("#anchor1037")[0].click();
	window.obj49116_onTap_runningActionsCount = window.obj49116_onTap_runningActionsCount - 1;
if (window.obj49116_onTap_runningActionsCount < 0) {
	window.obj49116_onTap_runningActionsCount = 0;
} else if (window.obj49116_onTap_runningActionsCount == 0) {
	obj49116_onTap_actionGroup2();
}
}





















};
obj49116_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49116_onTap_activeActionGroupIndex = -1;
		$("#obj49116").trigger("obj49116_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49116) {
				console.warn("de-queueing event obj49116." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49116").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49116_onTap_activeActionGroupIndex = 2;
	





















};
obj49114_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49114_onTap_activeActionGroupIndex = -1;
		$("#obj49114").trigger("obj49114_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49114) {
				console.warn("de-queueing event obj49114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49114_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86679();
function runjs_86679() {
	window.obj49114_onTap_runningActionsCount = obj49114_onTap_runningActionsCount + 1;

	$("#obj49114").css("border-color", "#058E3F"); $("#obj49114").css("border-width", "2px"); $("#obj49114").css("border-style", "solid"); $("#obj49114").css("border-radius", "25px"); $("#obj49114").css("-webkit-border-radius", "25px"); $("#obj49114").css("-moz-border-radius", "25px"); $("#obj49114_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj49114_onTap_runningActionsCount = window.obj49114_onTap_runningActionsCount - 1;
if (window.obj49114_onTap_runningActionsCount < 0) {
	window.obj49114_onTap_runningActionsCount = 0;
} else if (window.obj49114_onTap_runningActionsCount == 0) {
	obj49114_onTap_actionGroup1();
}
	}, 1);
}







};
obj49114_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49114_onTap_activeActionGroupIndex = -1;
		$("#obj49114").trigger("obj49114_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49114) {
				console.warn("de-queueing event obj49114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49114_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_86681();
function goToPage_86681() {
	window.obj49114_onTap_runningActionsCount = obj49114_onTap_runningActionsCount + 1;
	$("#anchor1038")[0].click();
	window.obj49114_onTap_runningActionsCount = window.obj49114_onTap_runningActionsCount - 1;
if (window.obj49114_onTap_runningActionsCount < 0) {
	window.obj49114_onTap_runningActionsCount = 0;
} else if (window.obj49114_onTap_runningActionsCount == 0) {
	obj49114_onTap_actionGroup2();
}
}





















};
obj49114_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49114_onTap_activeActionGroupIndex = -1;
		$("#obj49114").trigger("obj49114_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49114) {
				console.warn("de-queueing event obj49114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49114_onTap_activeActionGroupIndex = 2;
	





















};
obj49112_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49112_onTap_activeActionGroupIndex = -1;
		$("#obj49112").trigger("obj49112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49112) {
				console.warn("de-queueing event obj49112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49112_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_58796();
function goToPage_58796() {
	window.obj49112_onTap_runningActionsCount = obj49112_onTap_runningActionsCount + 1;
	$("#anchor1039")[0].click();
	window.obj49112_onTap_runningActionsCount = window.obj49112_onTap_runningActionsCount - 1;
if (window.obj49112_onTap_runningActionsCount < 0) {
	window.obj49112_onTap_runningActionsCount = 0;
} else if (window.obj49112_onTap_runningActionsCount == 0) {
	obj49112_onTap_actionGroup1();
}
}





















};
obj49112_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49112_onTap_activeActionGroupIndex = -1;
		$("#obj49112").trigger("obj49112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49112) {
				console.warn("de-queueing event obj49112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49112_onTap_activeActionGroupIndex = 1;
	





















};
obj49110_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49110_onTap_activeActionGroupIndex = -1;
		$("#obj49110").trigger("obj49110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49110) {
				console.warn("de-queueing event obj49110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49110_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86682();
function goToPage_86682() {
	window.obj49110_onTap_runningActionsCount = obj49110_onTap_runningActionsCount + 1;
	$("#anchor1040")[0].click();
	window.obj49110_onTap_runningActionsCount = window.obj49110_onTap_runningActionsCount - 1;
if (window.obj49110_onTap_runningActionsCount < 0) {
	window.obj49110_onTap_runningActionsCount = 0;
} else if (window.obj49110_onTap_runningActionsCount == 0) {
	obj49110_onTap_actionGroup1();
}
}





















};
obj49110_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49110_onTap_activeActionGroupIndex = -1;
		$("#obj49110").trigger("obj49110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49110) {
				console.warn("de-queueing event obj49110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49110_onTap_activeActionGroupIndex = 1;
	





















};
obj67822_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67822_onTap_activeActionGroupIndex = -1;
		$("#obj67822").trigger("obj67822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67822) {
				console.warn("de-queueing event obj67822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67822_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67822 
hide_67825();
function hide_67825() {
	var selector = "#obj67822";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67822_onTap_runningActionsCount = obj67822_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67822_onTap_runningActionsCount = window.obj67822_onTap_runningActionsCount - 1;
if (window.obj67822_onTap_runningActionsCount < 0) {
	window.obj67822_onTap_runningActionsCount = 0;
} else if (window.obj67822_onTap_runningActionsCount == 0) {
	obj67822_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67825(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67822_onTap_runningActionsCount = window.obj67822_onTap_runningActionsCount - 1;
if (window.obj67822_onTap_runningActionsCount < 0) {
	window.obj67822_onTap_runningActionsCount = 0;
} else if (window.obj67822_onTap_runningActionsCount == 0) {
	obj67822_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67828 
stopMovie_67824();
function stopMovie_67824() {
	window.obj67822_onTap_runningActionsCount = obj67822_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67828")[0];
	myVideo.pause();
	window.obj67822_onTap_runningActionsCount = window.obj67822_onTap_runningActionsCount - 1;
if (window.obj67822_onTap_runningActionsCount < 0) {
	window.obj67822_onTap_runningActionsCount = 0;
} else if (window.obj67822_onTap_runningActionsCount == 0) {
	obj67822_onTap_actionGroup1();
}
}
















};
obj67822_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67822_onTap_activeActionGroupIndex = -1;
		$("#obj67822").trigger("obj67822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67822) {
				console.warn("de-queueing event obj67822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67822_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67814
(function(){
	window.obj67822_onTap_runningActionsCount = obj67822_onTap_runningActionsCount + 1;

	var selector = "#obj67814";
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
					window.obj67822_onTap_runningActionsCount = window.obj67822_onTap_runningActionsCount - 1;
if (window.obj67822_onTap_runningActionsCount < 0) {
	window.obj67822_onTap_runningActionsCount = 0;
} else if (window.obj67822_onTap_runningActionsCount == 0) {
	obj67822_onTap_actionGroup2();
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
				window.obj67822_onTap_runningActionsCount = window.obj67822_onTap_runningActionsCount - 1;
if (window.obj67822_onTap_runningActionsCount < 0) {
	window.obj67822_onTap_runningActionsCount = 0;
} else if (window.obj67822_onTap_runningActionsCount == 0) {
	obj67822_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67822_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67822_onTap_activeActionGroupIndex = -1;
		$("#obj67822").trigger("obj67822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67822) {
				console.warn("de-queueing event obj67822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67822_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67828 
move_67827();
function move_67827() {
	window.obj67822_onTap_runningActionsCount = obj67822_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67828");
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
			window.obj67822_onTap_runningActionsCount = window.obj67822_onTap_runningActionsCount - 1;
if (window.obj67822_onTap_runningActionsCount < 0) {
	window.obj67822_onTap_runningActionsCount = 0;
} else if (window.obj67822_onTap_runningActionsCount == 0) {
	obj67822_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67822_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67822_onTap_activeActionGroupIndex = -1;
		$("#obj67822").trigger("obj67822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67822) {
				console.warn("de-queueing event obj67822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67822_onTap_activeActionGroupIndex = 3;
	





















};
obj67814_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67814_onTap_activeActionGroupIndex = -1;
		$("#obj67814").trigger("obj67814_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67814) {
				console.warn("de-queueing event obj67814." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67814").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67814_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67814 
hide_67817();
function hide_67817() {
	var selector = "#obj67814";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67814_onTap_runningActionsCount = obj67814_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67814_onTap_runningActionsCount = window.obj67814_onTap_runningActionsCount - 1;
if (window.obj67814_onTap_runningActionsCount < 0) {
	window.obj67814_onTap_runningActionsCount = 0;
} else if (window.obj67814_onTap_runningActionsCount == 0) {
	obj67814_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67817(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67814_onTap_runningActionsCount = window.obj67814_onTap_runningActionsCount - 1;
if (window.obj67814_onTap_runningActionsCount < 0) {
	window.obj67814_onTap_runningActionsCount = 0;
} else if (window.obj67814_onTap_runningActionsCount == 0) {
	obj67814_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67828 
playPauseMovie_67816();
function playPauseMovie_67816() {
	window.obj67814_onTap_runningActionsCount = obj67814_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67828")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67814_onTap_runningActionsCount = window.obj67814_onTap_runningActionsCount - 1;
if (window.obj67814_onTap_runningActionsCount < 0) {
	window.obj67814_onTap_runningActionsCount = 0;
} else if (window.obj67814_onTap_runningActionsCount == 0) {
	obj67814_onTap_actionGroup1();
}
}

















};
obj67814_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67814_onTap_activeActionGroupIndex = -1;
		$("#obj67814").trigger("obj67814_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67814) {
				console.warn("de-queueing event obj67814." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67814").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67814_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67822
(function(){
	window.obj67814_onTap_runningActionsCount = obj67814_onTap_runningActionsCount + 1;

	var selector = "#obj67822";
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
					window.obj67814_onTap_runningActionsCount = window.obj67814_onTap_runningActionsCount - 1;
if (window.obj67814_onTap_runningActionsCount < 0) {
	window.obj67814_onTap_runningActionsCount = 0;
} else if (window.obj67814_onTap_runningActionsCount == 0) {
	obj67814_onTap_actionGroup2();
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
				window.obj67814_onTap_runningActionsCount = window.obj67814_onTap_runningActionsCount - 1;
if (window.obj67814_onTap_runningActionsCount < 0) {
	window.obj67814_onTap_runningActionsCount = 0;
} else if (window.obj67814_onTap_runningActionsCount == 0) {
	obj67814_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67814_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67814_onTap_activeActionGroupIndex = -1;
		$("#obj67814").trigger("obj67814_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67814) {
				console.warn("de-queueing event obj67814." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67814").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67814_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67828 
move_67819();
function move_67819() {
	window.obj67814_onTap_runningActionsCount = obj67814_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67828");
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
			window.obj67814_onTap_runningActionsCount = window.obj67814_onTap_runningActionsCount - 1;
if (window.obj67814_onTap_runningActionsCount < 0) {
	window.obj67814_onTap_runningActionsCount = 0;
} else if (window.obj67814_onTap_runningActionsCount == 0) {
	obj67814_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67814_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67814_onTap_activeActionGroupIndex = -1;
		$("#obj67814").trigger("obj67814_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67814) {
				console.warn("de-queueing event obj67814." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67814").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67814_onTap_activeActionGroupIndex = 3;
	





















};
obj88993_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88993_onTap_activeActionGroupIndex = -1;
		$("#obj88993").trigger("obj88993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88993) {
				console.warn("de-queueing event obj88993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88993_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88998 
stopAudio_88995();
function stopAudio_88995() {
	window.obj88993_onTap_runningActionsCount = obj88993_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88998")[0];
	myAudio.pause();
	window.obj88993_onTap_runningActionsCount = window.obj88993_onTap_runningActionsCount - 1;
if (window.obj88993_onTap_runningActionsCount < 0) {
	window.obj88993_onTap_runningActionsCount = 0;
} else if (window.obj88993_onTap_runningActionsCount == 0) {
	obj88993_onTap_actionGroup1();
}
}








};
obj88993_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88993_onTap_activeActionGroupIndex = -1;
		$("#obj88993").trigger("obj88993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88993) {
				console.warn("de-queueing event obj88993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88993_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88993 
hide_88996();
function hide_88996() {
	var selector = "#obj88993";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88993_onTap_runningActionsCount = obj88993_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88993_onTap_runningActionsCount = window.obj88993_onTap_runningActionsCount - 1;
if (window.obj88993_onTap_runningActionsCount < 0) {
	window.obj88993_onTap_runningActionsCount = 0;
} else if (window.obj88993_onTap_runningActionsCount == 0) {
	obj88993_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88996(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88993_onTap_runningActionsCount = window.obj88993_onTap_runningActionsCount - 1;
if (window.obj88993_onTap_runningActionsCount < 0) {
	window.obj88993_onTap_runningActionsCount = 0;
} else if (window.obj88993_onTap_runningActionsCount == 0) {
	obj88993_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88993_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88993_onTap_activeActionGroupIndex = -1;
		$("#obj88993").trigger("obj88993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88993) {
				console.warn("de-queueing event obj88993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88993_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88988
(function(){
	window.obj88993_onTap_runningActionsCount = obj88993_onTap_runningActionsCount + 1;

	var selector = "#obj88988";
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
					window.obj88993_onTap_runningActionsCount = window.obj88993_onTap_runningActionsCount - 1;
if (window.obj88993_onTap_runningActionsCount < 0) {
	window.obj88993_onTap_runningActionsCount = 0;
} else if (window.obj88993_onTap_runningActionsCount == 0) {
	obj88993_onTap_actionGroup3();
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
				window.obj88993_onTap_runningActionsCount = window.obj88993_onTap_runningActionsCount - 1;
if (window.obj88993_onTap_runningActionsCount < 0) {
	window.obj88993_onTap_runningActionsCount = 0;
} else if (window.obj88993_onTap_runningActionsCount == 0) {
	obj88993_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88993_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88993_onTap_activeActionGroupIndex = -1;
		$("#obj88993").trigger("obj88993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88993) {
				console.warn("de-queueing event obj88993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88993_onTap_activeActionGroupIndex = 3;
	





















};
obj88988_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88988_onTap_activeActionGroupIndex = -1;
		$("#obj88988").trigger("obj88988_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88988) {
				console.warn("de-queueing event obj88988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88988_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88988 
hide_88990();
function hide_88990() {
	var selector = "#obj88988";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88988_onTap_runningActionsCount = obj88988_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88988_onTap_runningActionsCount = window.obj88988_onTap_runningActionsCount - 1;
if (window.obj88988_onTap_runningActionsCount < 0) {
	window.obj88988_onTap_runningActionsCount = 0;
} else if (window.obj88988_onTap_runningActionsCount == 0) {
	obj88988_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88990(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88988_onTap_runningActionsCount = window.obj88988_onTap_runningActionsCount - 1;
if (window.obj88988_onTap_runningActionsCount < 0) {
	window.obj88988_onTap_runningActionsCount = 0;
} else if (window.obj88988_onTap_runningActionsCount == 0) {
	obj88988_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88988_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88988_onTap_activeActionGroupIndex = -1;
		$("#obj88988").trigger("obj88988_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88988) {
				console.warn("de-queueing event obj88988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88988_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88993
(function(){
	window.obj88988_onTap_runningActionsCount = obj88988_onTap_runningActionsCount + 1;

	var selector = "#obj88993";
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
					window.obj88988_onTap_runningActionsCount = window.obj88988_onTap_runningActionsCount - 1;
if (window.obj88988_onTap_runningActionsCount < 0) {
	window.obj88988_onTap_runningActionsCount = 0;
} else if (window.obj88988_onTap_runningActionsCount == 0) {
	obj88988_onTap_actionGroup2();
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
				window.obj88988_onTap_runningActionsCount = window.obj88988_onTap_runningActionsCount - 1;
if (window.obj88988_onTap_runningActionsCount < 0) {
	window.obj88988_onTap_runningActionsCount = 0;
} else if (window.obj88988_onTap_runningActionsCount == 0) {
	obj88988_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88988_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88988_onTap_activeActionGroupIndex = -1;
		$("#obj88988").trigger("obj88988_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88988) {
				console.warn("de-queueing event obj88988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88988_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88998 
playAudio_88992();
function playAudio_88992() {
	window.obj88988_onTap_runningActionsCount = obj88988_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88998")[0];
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
		    window.obj88988_onTap_runningActionsCount = window.obj88988_onTap_runningActionsCount - 1;
if (window.obj88988_onTap_runningActionsCount < 0) {
	window.obj88988_onTap_runningActionsCount = 0;
} else if (window.obj88988_onTap_runningActionsCount == 0) {
	obj88988_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88988_onTap_runningActionsCount = window.obj88988_onTap_runningActionsCount - 1;
if (window.obj88988_onTap_runningActionsCount < 0) {
	window.obj88988_onTap_runningActionsCount = 0;
} else if (window.obj88988_onTap_runningActionsCount == 0) {
	obj88988_onTap_actionGroup3();
}
	}
}









};
obj88988_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88988_onTap_activeActionGroupIndex = -1;
		$("#obj88988").trigger("obj88988_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88988) {
				console.warn("de-queueing event obj88988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88988_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj49133: Event Touch Down
 *
 */
$("#obj49133").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49133_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49133_onTap is still running");
	return;
}
var obj49133_onTap_runningActionsCount = 0;
var obj49133_onTap_loopCount = 0;
obj49133_onTap_actionGroup0();
});










/*
 *
 *   obj49130: Event Touch Down
 *
 */
$("#obj49130").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49130_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49130_onTap is still running");
	return;
}
var obj49130_onTap_runningActionsCount = 0;
var obj49130_onTap_loopCount = 0;
obj49130_onTap_actionGroup0();
});




























































/*
 *
 *   obj49116: Event Touch Down
 *
 */
$("#obj49116").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49116_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49116_onTap is still running");
	return;
}
var obj49116_onTap_runningActionsCount = 0;
var obj49116_onTap_loopCount = 0;
obj49116_onTap_actionGroup0();
});










/*
 *
 *   obj49114: Event Touch Down
 *
 */
$("#obj49114").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49114_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49114_onTap is still running");
	return;
}
var obj49114_onTap_runningActionsCount = 0;
var obj49114_onTap_loopCount = 0;
obj49114_onTap_actionGroup0();
});










/*
 *
 *   obj49112: Event Touch Down
 *
 */
$("#obj49112").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49112_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49112_onTap is still running");
	return;
}
var obj49112_onTap_runningActionsCount = 0;
var obj49112_onTap_loopCount = 0;
obj49112_onTap_actionGroup0();
});










/*
 *
 *   obj49110: Event Touch Down
 *
 */
$("#obj49110").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49110_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49110_onTap is still running");
	return;
}
var obj49110_onTap_runningActionsCount = 0;
var obj49110_onTap_loopCount = 0;
obj49110_onTap_actionGroup0();
});










/*
 *
 *   obj67822: Event Touch Down
 *
 */
$("#obj67822").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67822_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67822_onTap is still running");
	return;
}
var obj67822_onTap_runningActionsCount = 0;
var obj67822_onTap_loopCount = 0;
obj67822_onTap_actionGroup0();
});










/*
 *
 *   obj67814: Event Touch Down
 *
 */
$("#obj67814").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67814_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67814_onTap is still running");
	return;
}
var obj67814_onTap_runningActionsCount = 0;
var obj67814_onTap_loopCount = 0;
obj67814_onTap_actionGroup0();
});










/*
 *
 *   obj88993: Event Touch Down
 *
 */
$("#obj88993").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88993_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88993_onTap is still running");
	return;
}
var obj88993_onTap_runningActionsCount = 0;
var obj88993_onTap_loopCount = 0;
obj88993_onTap_actionGroup0();
});










/*
 *
 *   obj88988: Event Touch Down
 *
 */
$("#obj88988").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88988_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88988_onTap is still running");
	return;
}
var obj88988_onTap_runningActionsCount = 0;
var obj88988_onTap_loopCount = 0;
obj88988_onTap_actionGroup0();
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
	
$("#obj49149").trigger('SCEventShow');
$("#obj49133").trigger('SCEventShow');
$("#obj49130").trigger('SCEventShow');
$("#obj49128").trigger('SCEventShow');
$("#obj49126").trigger('SCEventShow');
$("#obj49124").trigger('SCEventShow');
$("#obj49122").trigger('SCEventShow');
$("#obj49120").trigger('SCEventShow');
$("#obj49116").trigger('SCEventShow');
$("#obj49114").trigger('SCEventShow');
$("#obj49112").trigger('SCEventShow');
$("#obj49110").trigger('SCEventShow');
$("#obj67822").trigger('SCEventShow');
$("#obj67814").trigger('SCEventShow');
$("#obj88993").trigger('SCEventShow');
$("#obj88988").trigger('SCEventShow');
$("#obj88998").trigger('SCEventShow');
$("#obj94981").trigger('SCEventShow');
$("#obj67828").trigger('SCEventShow');
	
});