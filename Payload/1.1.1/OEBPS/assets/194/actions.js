pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 53973;
pubcoder.page.title = pubcoder.page.title || "194";
pubcoder.page.number = pubcoder.page.number || 194;
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
var obj53997_onTap_activeActionGroupIndex = -1;
var obj53997_onTap_runningActionsCount = 0;
var obj53997_onTap_loopCount = 0;
var obj53994_onTap_activeActionGroupIndex = -1;
var obj53994_onTap_runningActionsCount = 0;
var obj53994_onTap_loopCount = 0;
var obj53980_onTap_activeActionGroupIndex = -1;
var obj53980_onTap_runningActionsCount = 0;
var obj53980_onTap_loopCount = 0;
var obj53978_onTap_activeActionGroupIndex = -1;
var obj53978_onTap_runningActionsCount = 0;
var obj53978_onTap_loopCount = 0;
var obj53976_onTap_activeActionGroupIndex = -1;
var obj53976_onTap_runningActionsCount = 0;
var obj53976_onTap_loopCount = 0;
var obj53974_onTap_activeActionGroupIndex = -1;
var obj53974_onTap_runningActionsCount = 0;
var obj53974_onTap_loopCount = 0;
var obj68126_onTap_activeActionGroupIndex = -1;
var obj68126_onTap_runningActionsCount = 0;
var obj68126_onTap_loopCount = 0;
var obj68118_onTap_activeActionGroupIndex = -1;
var obj68118_onTap_runningActionsCount = 0;
var obj68118_onTap_loopCount = 0;
var obj89209_onTap_activeActionGroupIndex = -1;
var obj89209_onTap_runningActionsCount = 0;
var obj89209_onTap_loopCount = 0;
var obj89204_onTap_activeActionGroupIndex = -1;
var obj89204_onTap_runningActionsCount = 0;
var obj89204_onTap_loopCount = 0;
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
		
obj53997_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53997_onTap_activeActionGroupIndex = -1;
		$("#obj53997").trigger("obj53997_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53997) {
				console.warn("de-queueing event obj53997." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53997").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53997_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53999();
function goToPage_53999() {
	window.obj53997_onTap_runningActionsCount = obj53997_onTap_runningActionsCount + 1;
	$("#anchor1137")[0].click();
	window.obj53997_onTap_runningActionsCount = window.obj53997_onTap_runningActionsCount - 1;
if (window.obj53997_onTap_runningActionsCount < 0) {
	window.obj53997_onTap_runningActionsCount = 0;
} else if (window.obj53997_onTap_runningActionsCount == 0) {
	obj53997_onTap_actionGroup1();
}
}





















};
obj53997_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53997_onTap_activeActionGroupIndex = -1;
		$("#obj53997").trigger("obj53997_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53997) {
				console.warn("de-queueing event obj53997." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53997").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53997_onTap_activeActionGroupIndex = 1;
	





















};
obj53994_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53994_onTap_activeActionGroupIndex = -1;
		$("#obj53994").trigger("obj53994_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53994) {
				console.warn("de-queueing event obj53994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53994_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86789();
function goToPage_86789() {
	window.obj53994_onTap_runningActionsCount = obj53994_onTap_runningActionsCount + 1;
	$("#anchor1138")[0].click();
	window.obj53994_onTap_runningActionsCount = window.obj53994_onTap_runningActionsCount - 1;
if (window.obj53994_onTap_runningActionsCount < 0) {
	window.obj53994_onTap_runningActionsCount = 0;
} else if (window.obj53994_onTap_runningActionsCount == 0) {
	obj53994_onTap_actionGroup1();
}
}





















};
obj53994_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53994_onTap_activeActionGroupIndex = -1;
		$("#obj53994").trigger("obj53994_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53994) {
				console.warn("de-queueing event obj53994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53994_onTap_activeActionGroupIndex = 1;
	





















};
obj53980_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53980_onTap_activeActionGroupIndex = -1;
		$("#obj53980").trigger("obj53980_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53980) {
				console.warn("de-queueing event obj53980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53980_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53982();
function runjs_53982() {
	window.obj53980_onTap_runningActionsCount = obj53980_onTap_runningActionsCount + 1;

	$("#obj53980").css("border-color", "#058E3F"); $("#obj53980").css("border-width", "2px"); $("#obj53980").css("border-style", "solid"); $("#obj53980").css("border-radius", "25px"); $("#obj53980").css("-webkit-border-radius", "25px"); $("#obj53980").css("-moz-border-radius", "25px"); $("#obj53980_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj53980_onTap_runningActionsCount = window.obj53980_onTap_runningActionsCount - 1;
if (window.obj53980_onTap_runningActionsCount < 0) {
	window.obj53980_onTap_runningActionsCount = 0;
} else if (window.obj53980_onTap_runningActionsCount == 0) {
	obj53980_onTap_actionGroup1();
}
	}, 1);
}







};
obj53980_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53980_onTap_activeActionGroupIndex = -1;
		$("#obj53980").trigger("obj53980_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53980) {
				console.warn("de-queueing event obj53980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53980_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_53983();
function goToPage_53983() {
	window.obj53980_onTap_runningActionsCount = obj53980_onTap_runningActionsCount + 1;
	$("#anchor1139")[0].click();
	window.obj53980_onTap_runningActionsCount = window.obj53980_onTap_runningActionsCount - 1;
if (window.obj53980_onTap_runningActionsCount < 0) {
	window.obj53980_onTap_runningActionsCount = 0;
} else if (window.obj53980_onTap_runningActionsCount == 0) {
	obj53980_onTap_actionGroup2();
}
}





















};
obj53980_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53980_onTap_activeActionGroupIndex = -1;
		$("#obj53980").trigger("obj53980_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53980) {
				console.warn("de-queueing event obj53980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53980_onTap_activeActionGroupIndex = 2;
	





















};
obj53978_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53978_onTap_activeActionGroupIndex = -1;
		$("#obj53978").trigger("obj53978_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53978) {
				console.warn("de-queueing event obj53978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53978_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86781();
function runjs_86781() {
	window.obj53978_onTap_runningActionsCount = obj53978_onTap_runningActionsCount + 1;

	$("#obj53978").css("border-color", "#058E3F"); $("#obj53978").css("border-width", "2px"); $("#obj53978").css("border-style", "solid"); $("#obj53978").css("border-radius", "25px"); $("#obj53978").css("-webkit-border-radius", "25px"); $("#obj53978").css("-moz-border-radius", "25px"); $("#obj53978_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj53978_onTap_runningActionsCount = window.obj53978_onTap_runningActionsCount - 1;
if (window.obj53978_onTap_runningActionsCount < 0) {
	window.obj53978_onTap_runningActionsCount = 0;
} else if (window.obj53978_onTap_runningActionsCount == 0) {
	obj53978_onTap_actionGroup1();
}
	}, 1);
}







};
obj53978_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53978_onTap_activeActionGroupIndex = -1;
		$("#obj53978").trigger("obj53978_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53978) {
				console.warn("de-queueing event obj53978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53978_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_86783();
function goToPage_86783() {
	window.obj53978_onTap_runningActionsCount = obj53978_onTap_runningActionsCount + 1;
	$("#anchor1140")[0].click();
	window.obj53978_onTap_runningActionsCount = window.obj53978_onTap_runningActionsCount - 1;
if (window.obj53978_onTap_runningActionsCount < 0) {
	window.obj53978_onTap_runningActionsCount = 0;
} else if (window.obj53978_onTap_runningActionsCount == 0) {
	obj53978_onTap_actionGroup2();
}
}





















};
obj53978_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53978_onTap_activeActionGroupIndex = -1;
		$("#obj53978").trigger("obj53978_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53978) {
				console.warn("de-queueing event obj53978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53978_onTap_activeActionGroupIndex = 2;
	





















};
obj53976_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53976_onTap_activeActionGroupIndex = -1;
		$("#obj53976").trigger("obj53976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53976) {
				console.warn("de-queueing event obj53976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53976_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_58829();
function goToPage_58829() {
	window.obj53976_onTap_runningActionsCount = obj53976_onTap_runningActionsCount + 1;
	$("#anchor1141")[0].click();
	window.obj53976_onTap_runningActionsCount = window.obj53976_onTap_runningActionsCount - 1;
if (window.obj53976_onTap_runningActionsCount < 0) {
	window.obj53976_onTap_runningActionsCount = 0;
} else if (window.obj53976_onTap_runningActionsCount == 0) {
	obj53976_onTap_actionGroup1();
}
}





















};
obj53976_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53976_onTap_activeActionGroupIndex = -1;
		$("#obj53976").trigger("obj53976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53976) {
				console.warn("de-queueing event obj53976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53976_onTap_activeActionGroupIndex = 1;
	





















};
obj53974_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53974_onTap_activeActionGroupIndex = -1;
		$("#obj53974").trigger("obj53974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53974) {
				console.warn("de-queueing event obj53974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53974_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86784();
function goToPage_86784() {
	window.obj53974_onTap_runningActionsCount = obj53974_onTap_runningActionsCount + 1;
	$("#anchor1142")[0].click();
	window.obj53974_onTap_runningActionsCount = window.obj53974_onTap_runningActionsCount - 1;
if (window.obj53974_onTap_runningActionsCount < 0) {
	window.obj53974_onTap_runningActionsCount = 0;
} else if (window.obj53974_onTap_runningActionsCount == 0) {
	obj53974_onTap_actionGroup1();
}
}





















};
obj53974_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53974_onTap_activeActionGroupIndex = -1;
		$("#obj53974").trigger("obj53974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53974) {
				console.warn("de-queueing event obj53974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53974_onTap_activeActionGroupIndex = 1;
	





















};
obj68126_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68126_onTap_activeActionGroupIndex = -1;
		$("#obj68126").trigger("obj68126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68126) {
				console.warn("de-queueing event obj68126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68126_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68126 
hide_68129();
function hide_68129() {
	var selector = "#obj68126";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68126_onTap_runningActionsCount = obj68126_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68126_onTap_runningActionsCount = window.obj68126_onTap_runningActionsCount - 1;
if (window.obj68126_onTap_runningActionsCount < 0) {
	window.obj68126_onTap_runningActionsCount = 0;
} else if (window.obj68126_onTap_runningActionsCount == 0) {
	obj68126_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68129(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68126_onTap_runningActionsCount = window.obj68126_onTap_runningActionsCount - 1;
if (window.obj68126_onTap_runningActionsCount < 0) {
	window.obj68126_onTap_runningActionsCount = 0;
} else if (window.obj68126_onTap_runningActionsCount == 0) {
	obj68126_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68132 
stopMovie_68128();
function stopMovie_68128() {
	window.obj68126_onTap_runningActionsCount = obj68126_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68132")[0];
	myVideo.pause();
	window.obj68126_onTap_runningActionsCount = window.obj68126_onTap_runningActionsCount - 1;
if (window.obj68126_onTap_runningActionsCount < 0) {
	window.obj68126_onTap_runningActionsCount = 0;
} else if (window.obj68126_onTap_runningActionsCount == 0) {
	obj68126_onTap_actionGroup1();
}
}
















};
obj68126_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68126_onTap_activeActionGroupIndex = -1;
		$("#obj68126").trigger("obj68126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68126) {
				console.warn("de-queueing event obj68126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68126_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68118
(function(){
	window.obj68126_onTap_runningActionsCount = obj68126_onTap_runningActionsCount + 1;

	var selector = "#obj68118";
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
					window.obj68126_onTap_runningActionsCount = window.obj68126_onTap_runningActionsCount - 1;
if (window.obj68126_onTap_runningActionsCount < 0) {
	window.obj68126_onTap_runningActionsCount = 0;
} else if (window.obj68126_onTap_runningActionsCount == 0) {
	obj68126_onTap_actionGroup2();
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
				window.obj68126_onTap_runningActionsCount = window.obj68126_onTap_runningActionsCount - 1;
if (window.obj68126_onTap_runningActionsCount < 0) {
	window.obj68126_onTap_runningActionsCount = 0;
} else if (window.obj68126_onTap_runningActionsCount == 0) {
	obj68126_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68126_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68126_onTap_activeActionGroupIndex = -1;
		$("#obj68126").trigger("obj68126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68126) {
				console.warn("de-queueing event obj68126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68126_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68132 
move_68131();
function move_68131() {
	window.obj68126_onTap_runningActionsCount = obj68126_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68132");
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
			window.obj68126_onTap_runningActionsCount = window.obj68126_onTap_runningActionsCount - 1;
if (window.obj68126_onTap_runningActionsCount < 0) {
	window.obj68126_onTap_runningActionsCount = 0;
} else if (window.obj68126_onTap_runningActionsCount == 0) {
	obj68126_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68126_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68126_onTap_activeActionGroupIndex = -1;
		$("#obj68126").trigger("obj68126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68126) {
				console.warn("de-queueing event obj68126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68126_onTap_activeActionGroupIndex = 3;
	





















};
obj68118_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68118_onTap_activeActionGroupIndex = -1;
		$("#obj68118").trigger("obj68118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68118) {
				console.warn("de-queueing event obj68118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68118_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68118 
hide_68121();
function hide_68121() {
	var selector = "#obj68118";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68118_onTap_runningActionsCount = obj68118_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68118_onTap_runningActionsCount = window.obj68118_onTap_runningActionsCount - 1;
if (window.obj68118_onTap_runningActionsCount < 0) {
	window.obj68118_onTap_runningActionsCount = 0;
} else if (window.obj68118_onTap_runningActionsCount == 0) {
	obj68118_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68121(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68118_onTap_runningActionsCount = window.obj68118_onTap_runningActionsCount - 1;
if (window.obj68118_onTap_runningActionsCount < 0) {
	window.obj68118_onTap_runningActionsCount = 0;
} else if (window.obj68118_onTap_runningActionsCount == 0) {
	obj68118_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68132 
playPauseMovie_68120();
function playPauseMovie_68120() {
	window.obj68118_onTap_runningActionsCount = obj68118_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68132")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68118_onTap_runningActionsCount = window.obj68118_onTap_runningActionsCount - 1;
if (window.obj68118_onTap_runningActionsCount < 0) {
	window.obj68118_onTap_runningActionsCount = 0;
} else if (window.obj68118_onTap_runningActionsCount == 0) {
	obj68118_onTap_actionGroup1();
}
}

















};
obj68118_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68118_onTap_activeActionGroupIndex = -1;
		$("#obj68118").trigger("obj68118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68118) {
				console.warn("de-queueing event obj68118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68118_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68126
(function(){
	window.obj68118_onTap_runningActionsCount = obj68118_onTap_runningActionsCount + 1;

	var selector = "#obj68126";
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
					window.obj68118_onTap_runningActionsCount = window.obj68118_onTap_runningActionsCount - 1;
if (window.obj68118_onTap_runningActionsCount < 0) {
	window.obj68118_onTap_runningActionsCount = 0;
} else if (window.obj68118_onTap_runningActionsCount == 0) {
	obj68118_onTap_actionGroup2();
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
				window.obj68118_onTap_runningActionsCount = window.obj68118_onTap_runningActionsCount - 1;
if (window.obj68118_onTap_runningActionsCount < 0) {
	window.obj68118_onTap_runningActionsCount = 0;
} else if (window.obj68118_onTap_runningActionsCount == 0) {
	obj68118_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68118_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68118_onTap_activeActionGroupIndex = -1;
		$("#obj68118").trigger("obj68118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68118) {
				console.warn("de-queueing event obj68118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68118_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68132 
move_68123();
function move_68123() {
	window.obj68118_onTap_runningActionsCount = obj68118_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68132");
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
			window.obj68118_onTap_runningActionsCount = window.obj68118_onTap_runningActionsCount - 1;
if (window.obj68118_onTap_runningActionsCount < 0) {
	window.obj68118_onTap_runningActionsCount = 0;
} else if (window.obj68118_onTap_runningActionsCount == 0) {
	obj68118_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68118_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68118_onTap_activeActionGroupIndex = -1;
		$("#obj68118").trigger("obj68118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68118) {
				console.warn("de-queueing event obj68118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68118_onTap_activeActionGroupIndex = 3;
	





















};
obj89209_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89209_onTap_activeActionGroupIndex = -1;
		$("#obj89209").trigger("obj89209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89209) {
				console.warn("de-queueing event obj89209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89209_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89214 
stopAudio_89211();
function stopAudio_89211() {
	window.obj89209_onTap_runningActionsCount = obj89209_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89214")[0];
	myAudio.pause();
	window.obj89209_onTap_runningActionsCount = window.obj89209_onTap_runningActionsCount - 1;
if (window.obj89209_onTap_runningActionsCount < 0) {
	window.obj89209_onTap_runningActionsCount = 0;
} else if (window.obj89209_onTap_runningActionsCount == 0) {
	obj89209_onTap_actionGroup1();
}
}








};
obj89209_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89209_onTap_activeActionGroupIndex = -1;
		$("#obj89209").trigger("obj89209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89209) {
				console.warn("de-queueing event obj89209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89209_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89209 
hide_89212();
function hide_89212() {
	var selector = "#obj89209";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89209_onTap_runningActionsCount = obj89209_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89209_onTap_runningActionsCount = window.obj89209_onTap_runningActionsCount - 1;
if (window.obj89209_onTap_runningActionsCount < 0) {
	window.obj89209_onTap_runningActionsCount = 0;
} else if (window.obj89209_onTap_runningActionsCount == 0) {
	obj89209_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89212(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89209_onTap_runningActionsCount = window.obj89209_onTap_runningActionsCount - 1;
if (window.obj89209_onTap_runningActionsCount < 0) {
	window.obj89209_onTap_runningActionsCount = 0;
} else if (window.obj89209_onTap_runningActionsCount == 0) {
	obj89209_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89209_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89209_onTap_activeActionGroupIndex = -1;
		$("#obj89209").trigger("obj89209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89209) {
				console.warn("de-queueing event obj89209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89209_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89204
(function(){
	window.obj89209_onTap_runningActionsCount = obj89209_onTap_runningActionsCount + 1;

	var selector = "#obj89204";
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
					window.obj89209_onTap_runningActionsCount = window.obj89209_onTap_runningActionsCount - 1;
if (window.obj89209_onTap_runningActionsCount < 0) {
	window.obj89209_onTap_runningActionsCount = 0;
} else if (window.obj89209_onTap_runningActionsCount == 0) {
	obj89209_onTap_actionGroup3();
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
				window.obj89209_onTap_runningActionsCount = window.obj89209_onTap_runningActionsCount - 1;
if (window.obj89209_onTap_runningActionsCount < 0) {
	window.obj89209_onTap_runningActionsCount = 0;
} else if (window.obj89209_onTap_runningActionsCount == 0) {
	obj89209_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89209_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89209_onTap_activeActionGroupIndex = -1;
		$("#obj89209").trigger("obj89209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89209) {
				console.warn("de-queueing event obj89209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89209_onTap_activeActionGroupIndex = 3;
	





















};
obj89204_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89204_onTap_activeActionGroupIndex = -1;
		$("#obj89204").trigger("obj89204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89204) {
				console.warn("de-queueing event obj89204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89204_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89204 
hide_89206();
function hide_89206() {
	var selector = "#obj89204";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89204_onTap_runningActionsCount = obj89204_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89204_onTap_runningActionsCount = window.obj89204_onTap_runningActionsCount - 1;
if (window.obj89204_onTap_runningActionsCount < 0) {
	window.obj89204_onTap_runningActionsCount = 0;
} else if (window.obj89204_onTap_runningActionsCount == 0) {
	obj89204_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89206(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89204_onTap_runningActionsCount = window.obj89204_onTap_runningActionsCount - 1;
if (window.obj89204_onTap_runningActionsCount < 0) {
	window.obj89204_onTap_runningActionsCount = 0;
} else if (window.obj89204_onTap_runningActionsCount == 0) {
	obj89204_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89204_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89204_onTap_activeActionGroupIndex = -1;
		$("#obj89204").trigger("obj89204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89204) {
				console.warn("de-queueing event obj89204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89204_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89209
(function(){
	window.obj89204_onTap_runningActionsCount = obj89204_onTap_runningActionsCount + 1;

	var selector = "#obj89209";
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
					window.obj89204_onTap_runningActionsCount = window.obj89204_onTap_runningActionsCount - 1;
if (window.obj89204_onTap_runningActionsCount < 0) {
	window.obj89204_onTap_runningActionsCount = 0;
} else if (window.obj89204_onTap_runningActionsCount == 0) {
	obj89204_onTap_actionGroup2();
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
				window.obj89204_onTap_runningActionsCount = window.obj89204_onTap_runningActionsCount - 1;
if (window.obj89204_onTap_runningActionsCount < 0) {
	window.obj89204_onTap_runningActionsCount = 0;
} else if (window.obj89204_onTap_runningActionsCount == 0) {
	obj89204_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89204_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89204_onTap_activeActionGroupIndex = -1;
		$("#obj89204").trigger("obj89204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89204) {
				console.warn("de-queueing event obj89204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89204_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89214 
playAudio_89208();
function playAudio_89208() {
	window.obj89204_onTap_runningActionsCount = obj89204_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89214")[0];
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
		    window.obj89204_onTap_runningActionsCount = window.obj89204_onTap_runningActionsCount - 1;
if (window.obj89204_onTap_runningActionsCount < 0) {
	window.obj89204_onTap_runningActionsCount = 0;
} else if (window.obj89204_onTap_runningActionsCount == 0) {
	obj89204_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89204_onTap_runningActionsCount = window.obj89204_onTap_runningActionsCount - 1;
if (window.obj89204_onTap_runningActionsCount < 0) {
	window.obj89204_onTap_runningActionsCount = 0;
} else if (window.obj89204_onTap_runningActionsCount == 0) {
	obj89204_onTap_actionGroup3();
}
	}
}









};
obj89204_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89204_onTap_activeActionGroupIndex = -1;
		$("#obj89204").trigger("obj89204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89204) {
				console.warn("de-queueing event obj89204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89204_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj53997: Event Touch Down
 *
 */
$("#obj53997").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53997_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53997_onTap is still running");
	return;
}
var obj53997_onTap_runningActionsCount = 0;
var obj53997_onTap_loopCount = 0;
obj53997_onTap_actionGroup0();
});










/*
 *
 *   obj53994: Event Touch Down
 *
 */
$("#obj53994").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53994_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53994_onTap is still running");
	return;
}
var obj53994_onTap_runningActionsCount = 0;
var obj53994_onTap_loopCount = 0;
obj53994_onTap_actionGroup0();
});




























































/*
 *
 *   obj53980: Event Touch Down
 *
 */
$("#obj53980").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53980_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53980_onTap is still running");
	return;
}
var obj53980_onTap_runningActionsCount = 0;
var obj53980_onTap_loopCount = 0;
obj53980_onTap_actionGroup0();
});










/*
 *
 *   obj53978: Event Touch Down
 *
 */
$("#obj53978").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53978_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53978_onTap is still running");
	return;
}
var obj53978_onTap_runningActionsCount = 0;
var obj53978_onTap_loopCount = 0;
obj53978_onTap_actionGroup0();
});










/*
 *
 *   obj53976: Event Touch Down
 *
 */
$("#obj53976").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53976_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53976_onTap is still running");
	return;
}
var obj53976_onTap_runningActionsCount = 0;
var obj53976_onTap_loopCount = 0;
obj53976_onTap_actionGroup0();
});










/*
 *
 *   obj53974: Event Touch Down
 *
 */
$("#obj53974").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53974_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53974_onTap is still running");
	return;
}
var obj53974_onTap_runningActionsCount = 0;
var obj53974_onTap_loopCount = 0;
obj53974_onTap_actionGroup0();
});










/*
 *
 *   obj68126: Event Touch Down
 *
 */
$("#obj68126").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68126_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68126_onTap is still running");
	return;
}
var obj68126_onTap_runningActionsCount = 0;
var obj68126_onTap_loopCount = 0;
obj68126_onTap_actionGroup0();
});










/*
 *
 *   obj68118: Event Touch Down
 *
 */
$("#obj68118").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68118_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68118_onTap is still running");
	return;
}
var obj68118_onTap_runningActionsCount = 0;
var obj68118_onTap_loopCount = 0;
obj68118_onTap_actionGroup0();
});










/*
 *
 *   obj89209: Event Touch Down
 *
 */
$("#obj89209").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89209_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89209_onTap is still running");
	return;
}
var obj89209_onTap_runningActionsCount = 0;
var obj89209_onTap_loopCount = 0;
obj89209_onTap_actionGroup0();
});










/*
 *
 *   obj89204: Event Touch Down
 *
 */
$("#obj89204").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89204_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89204_onTap is still running");
	return;
}
var obj89204_onTap_runningActionsCount = 0;
var obj89204_onTap_loopCount = 0;
obj89204_onTap_actionGroup0();
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
	
$("#obj54013").trigger('SCEventShow');
$("#obj53997").trigger('SCEventShow');
$("#obj53994").trigger('SCEventShow');
$("#obj53992").trigger('SCEventShow');
$("#obj53990").trigger('SCEventShow');
$("#obj53988").trigger('SCEventShow');
$("#obj53986").trigger('SCEventShow');
$("#obj53984").trigger('SCEventShow');
$("#obj53980").trigger('SCEventShow');
$("#obj53978").trigger('SCEventShow');
$("#obj53976").trigger('SCEventShow');
$("#obj53974").trigger('SCEventShow');
$("#obj68126").trigger('SCEventShow');
$("#obj68118").trigger('SCEventShow');
$("#obj89209").trigger('SCEventShow');
$("#obj89204").trigger('SCEventShow');
$("#obj89214").trigger('SCEventShow');
$("#obj95017").trigger('SCEventShow');
$("#obj68132").trigger('SCEventShow');
	
});