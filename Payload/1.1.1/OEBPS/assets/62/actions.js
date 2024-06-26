pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 15341;
pubcoder.page.title = pubcoder.page.title || "62";
pubcoder.page.number = pubcoder.page.number || 62;
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
var obj74240_onTap_activeActionGroupIndex = -1;
var obj74240_onTap_runningActionsCount = 0;
var obj74240_onTap_loopCount = 0;
var obj74237_onTap_activeActionGroupIndex = -1;
var obj74237_onTap_runningActionsCount = 0;
var obj74237_onTap_loopCount = 0;
var obj74223_onTap_activeActionGroupIndex = -1;
var obj74223_onTap_runningActionsCount = 0;
var obj74223_onTap_loopCount = 0;
var obj74221_onTap_activeActionGroupIndex = -1;
var obj74221_onTap_runningActionsCount = 0;
var obj74221_onTap_loopCount = 0;
var obj74218_onTap_activeActionGroupIndex = -1;
var obj74218_onTap_runningActionsCount = 0;
var obj74218_onTap_loopCount = 0;
var obj74216_onTap_activeActionGroupIndex = -1;
var obj74216_onTap_runningActionsCount = 0;
var obj74216_onTap_loopCount = 0;
var obj74198_onTap_activeActionGroupIndex = -1;
var obj74198_onTap_runningActionsCount = 0;
var obj74198_onTap_loopCount = 0;
var obj74190_onTap_activeActionGroupIndex = -1;
var obj74190_onTap_runningActionsCount = 0;
var obj74190_onTap_loopCount = 0;
var obj87471_onTap_activeActionGroupIndex = -1;
var obj87471_onTap_runningActionsCount = 0;
var obj87471_onTap_loopCount = 0;
var obj87466_onTap_activeActionGroupIndex = -1;
var obj87466_onTap_runningActionsCount = 0;
var obj87466_onTap_loopCount = 0;
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
		
obj74240_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74240_onTap_activeActionGroupIndex = -1;
		$("#obj74240").trigger("obj74240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74240) {
				console.warn("de-queueing event obj74240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74240_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74242();
function goToPage_74242() {
	window.obj74240_onTap_runningActionsCount = obj74240_onTap_runningActionsCount + 1;
	$("#anchor365")[0].click();
	window.obj74240_onTap_runningActionsCount = window.obj74240_onTap_runningActionsCount - 1;
if (window.obj74240_onTap_runningActionsCount < 0) {
	window.obj74240_onTap_runningActionsCount = 0;
} else if (window.obj74240_onTap_runningActionsCount == 0) {
	obj74240_onTap_actionGroup1();
}
}





















};
obj74240_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74240_onTap_activeActionGroupIndex = -1;
		$("#obj74240").trigger("obj74240_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74240) {
				console.warn("de-queueing event obj74240." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74240").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74240_onTap_activeActionGroupIndex = 1;
	





















};
obj74237_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74237_onTap_activeActionGroupIndex = -1;
		$("#obj74237").trigger("obj74237_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74237) {
				console.warn("de-queueing event obj74237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74237_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74875();
function goToPage_74875() {
	window.obj74237_onTap_runningActionsCount = obj74237_onTap_runningActionsCount + 1;
	$("#anchor366")[0].click();
	window.obj74237_onTap_runningActionsCount = window.obj74237_onTap_runningActionsCount - 1;
if (window.obj74237_onTap_runningActionsCount < 0) {
	window.obj74237_onTap_runningActionsCount = 0;
} else if (window.obj74237_onTap_runningActionsCount == 0) {
	obj74237_onTap_actionGroup1();
}
}





















};
obj74237_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74237_onTap_activeActionGroupIndex = -1;
		$("#obj74237").trigger("obj74237_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74237) {
				console.warn("de-queueing event obj74237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74237_onTap_activeActionGroupIndex = 1;
	





















};
obj74223_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74223_onTap_activeActionGroupIndex = -1;
		$("#obj74223").trigger("obj74223_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74223) {
				console.warn("de-queueing event obj74223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74223_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74225();
function runjs_74225() {
	window.obj74223_onTap_runningActionsCount = obj74223_onTap_runningActionsCount + 1;

	$("#obj74223").css("border-color", "#058E3F"); $("#obj74223").css("border-width", "2px"); $("#obj74223").css("border-style", "solid"); $("#obj74223").css("border-radius", "25px"); $("#obj74223").css("-webkit-border-radius", "25px"); $("#obj74223").css("-moz-border-radius", "25px"); $("#obj74223_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj74223_onTap_runningActionsCount = window.obj74223_onTap_runningActionsCount - 1;
if (window.obj74223_onTap_runningActionsCount < 0) {
	window.obj74223_onTap_runningActionsCount = 0;
} else if (window.obj74223_onTap_runningActionsCount == 0) {
	obj74223_onTap_actionGroup1();
}
	}, 1);
}







};
obj74223_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74223_onTap_activeActionGroupIndex = -1;
		$("#obj74223").trigger("obj74223_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74223) {
				console.warn("de-queueing event obj74223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74223_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_74226();
function goToPage_74226() {
	window.obj74223_onTap_runningActionsCount = obj74223_onTap_runningActionsCount + 1;
	$("#anchor367")[0].click();
	window.obj74223_onTap_runningActionsCount = window.obj74223_onTap_runningActionsCount - 1;
if (window.obj74223_onTap_runningActionsCount < 0) {
	window.obj74223_onTap_runningActionsCount = 0;
} else if (window.obj74223_onTap_runningActionsCount == 0) {
	obj74223_onTap_actionGroup2();
}
}





















};
obj74223_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74223_onTap_activeActionGroupIndex = -1;
		$("#obj74223").trigger("obj74223_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74223) {
				console.warn("de-queueing event obj74223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74223_onTap_activeActionGroupIndex = 2;
	





















};
obj74221_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74221_onTap_activeActionGroupIndex = -1;
		$("#obj74221").trigger("obj74221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74221) {
				console.warn("de-queueing event obj74221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74221_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74245();
function runjs_74245() {
	window.obj74221_onTap_runningActionsCount = obj74221_onTap_runningActionsCount + 1;

	$("#obj74221").css("border-color", "#058E3F"); $("#obj74221").css("border-width", "2px"); $("#obj74221").css("border-style", "solid"); $("#obj74221").css("border-radius", "25px"); $("#obj74221").css("-webkit-border-radius", "25px"); $("#obj74221").css("-moz-border-radius", "25px"); $("#obj74221_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj74221_onTap_runningActionsCount = window.obj74221_onTap_runningActionsCount - 1;
if (window.obj74221_onTap_runningActionsCount < 0) {
	window.obj74221_onTap_runningActionsCount = 0;
} else if (window.obj74221_onTap_runningActionsCount == 0) {
	obj74221_onTap_actionGroup1();
}
	}, 1);
}







};
obj74221_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74221_onTap_activeActionGroupIndex = -1;
		$("#obj74221").trigger("obj74221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74221) {
				console.warn("de-queueing event obj74221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74221_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_74873();
function goToPage_74873() {
	window.obj74221_onTap_runningActionsCount = obj74221_onTap_runningActionsCount + 1;
	$("#anchor368")[0].click();
	window.obj74221_onTap_runningActionsCount = window.obj74221_onTap_runningActionsCount - 1;
if (window.obj74221_onTap_runningActionsCount < 0) {
	window.obj74221_onTap_runningActionsCount = 0;
} else if (window.obj74221_onTap_runningActionsCount == 0) {
	obj74221_onTap_actionGroup2();
}
}





















};
obj74221_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74221_onTap_activeActionGroupIndex = -1;
		$("#obj74221").trigger("obj74221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74221) {
				console.warn("de-queueing event obj74221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74221_onTap_activeActionGroupIndex = 2;
	





















};
obj74218_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74218_onTap_activeActionGroupIndex = -1;
		$("#obj74218").trigger("obj74218_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74218) {
				console.warn("de-queueing event obj74218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74218_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74220();
function goToPage_74220() {
	window.obj74218_onTap_runningActionsCount = obj74218_onTap_runningActionsCount + 1;
	$("#anchor369")[0].click();
	window.obj74218_onTap_runningActionsCount = window.obj74218_onTap_runningActionsCount - 1;
if (window.obj74218_onTap_runningActionsCount < 0) {
	window.obj74218_onTap_runningActionsCount = 0;
} else if (window.obj74218_onTap_runningActionsCount == 0) {
	obj74218_onTap_actionGroup1();
}
}





















};
obj74218_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74218_onTap_activeActionGroupIndex = -1;
		$("#obj74218").trigger("obj74218_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74218) {
				console.warn("de-queueing event obj74218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74218_onTap_activeActionGroupIndex = 1;
	





















};
obj74216_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74216_onTap_activeActionGroupIndex = -1;
		$("#obj74216").trigger("obj74216_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74216) {
				console.warn("de-queueing event obj74216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74216_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74874();
function goToPage_74874() {
	window.obj74216_onTap_runningActionsCount = obj74216_onTap_runningActionsCount + 1;
	$("#anchor370")[0].click();
	window.obj74216_onTap_runningActionsCount = window.obj74216_onTap_runningActionsCount - 1;
if (window.obj74216_onTap_runningActionsCount < 0) {
	window.obj74216_onTap_runningActionsCount = 0;
} else if (window.obj74216_onTap_runningActionsCount == 0) {
	obj74216_onTap_actionGroup1();
}
}





















};
obj74216_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74216_onTap_activeActionGroupIndex = -1;
		$("#obj74216").trigger("obj74216_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74216) {
				console.warn("de-queueing event obj74216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74216_onTap_activeActionGroupIndex = 1;
	





















};
obj74198_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74198_onTap_activeActionGroupIndex = -1;
		$("#obj74198").trigger("obj74198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74198) {
				console.warn("de-queueing event obj74198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74198_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74198 
hide_74201();
function hide_74201() {
	var selector = "#obj74198";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74198_onTap_runningActionsCount = obj74198_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74198_onTap_runningActionsCount = window.obj74198_onTap_runningActionsCount - 1;
if (window.obj74198_onTap_runningActionsCount < 0) {
	window.obj74198_onTap_runningActionsCount = 0;
} else if (window.obj74198_onTap_runningActionsCount == 0) {
	obj74198_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74201(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74198_onTap_runningActionsCount = window.obj74198_onTap_runningActionsCount - 1;
if (window.obj74198_onTap_runningActionsCount < 0) {
	window.obj74198_onTap_runningActionsCount = 0;
} else if (window.obj74198_onTap_runningActionsCount == 0) {
	obj74198_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj74188 
stopMovie_74200();
function stopMovie_74200() {
	window.obj74198_onTap_runningActionsCount = obj74198_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74188")[0];
	myVideo.pause();
	window.obj74198_onTap_runningActionsCount = window.obj74198_onTap_runningActionsCount - 1;
if (window.obj74198_onTap_runningActionsCount < 0) {
	window.obj74198_onTap_runningActionsCount = 0;
} else if (window.obj74198_onTap_runningActionsCount == 0) {
	obj74198_onTap_actionGroup1();
}
}
















};
obj74198_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74198_onTap_activeActionGroupIndex = -1;
		$("#obj74198").trigger("obj74198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74198) {
				console.warn("de-queueing event obj74198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74198_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74190
(function(){
	window.obj74198_onTap_runningActionsCount = obj74198_onTap_runningActionsCount + 1;

	var selector = "#obj74190";
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
					window.obj74198_onTap_runningActionsCount = window.obj74198_onTap_runningActionsCount - 1;
if (window.obj74198_onTap_runningActionsCount < 0) {
	window.obj74198_onTap_runningActionsCount = 0;
} else if (window.obj74198_onTap_runningActionsCount == 0) {
	obj74198_onTap_actionGroup2();
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
				window.obj74198_onTap_runningActionsCount = window.obj74198_onTap_runningActionsCount - 1;
if (window.obj74198_onTap_runningActionsCount < 0) {
	window.obj74198_onTap_runningActionsCount = 0;
} else if (window.obj74198_onTap_runningActionsCount == 0) {
	obj74198_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74198_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74198_onTap_activeActionGroupIndex = -1;
		$("#obj74198").trigger("obj74198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74198) {
				console.warn("de-queueing event obj74198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74198_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74188 
move_74203();
function move_74203() {
	window.obj74198_onTap_runningActionsCount = obj74198_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74188");
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
			window.obj74198_onTap_runningActionsCount = window.obj74198_onTap_runningActionsCount - 1;
if (window.obj74198_onTap_runningActionsCount < 0) {
	window.obj74198_onTap_runningActionsCount = 0;
} else if (window.obj74198_onTap_runningActionsCount == 0) {
	obj74198_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74198_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74198_onTap_activeActionGroupIndex = -1;
		$("#obj74198").trigger("obj74198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74198) {
				console.warn("de-queueing event obj74198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74198_onTap_activeActionGroupIndex = 3;
	





















};
obj74190_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74190_onTap_activeActionGroupIndex = -1;
		$("#obj74190").trigger("obj74190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74190) {
				console.warn("de-queueing event obj74190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74190_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74190 
hide_74193();
function hide_74193() {
	var selector = "#obj74190";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74190_onTap_runningActionsCount = obj74190_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74190_onTap_runningActionsCount = window.obj74190_onTap_runningActionsCount - 1;
if (window.obj74190_onTap_runningActionsCount < 0) {
	window.obj74190_onTap_runningActionsCount = 0;
} else if (window.obj74190_onTap_runningActionsCount == 0) {
	obj74190_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74193(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74190_onTap_runningActionsCount = window.obj74190_onTap_runningActionsCount - 1;
if (window.obj74190_onTap_runningActionsCount < 0) {
	window.obj74190_onTap_runningActionsCount = 0;
} else if (window.obj74190_onTap_runningActionsCount == 0) {
	obj74190_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj74188 
playPauseMovie_74192();
function playPauseMovie_74192() {
	window.obj74190_onTap_runningActionsCount = obj74190_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74188")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj74190_onTap_runningActionsCount = window.obj74190_onTap_runningActionsCount - 1;
if (window.obj74190_onTap_runningActionsCount < 0) {
	window.obj74190_onTap_runningActionsCount = 0;
} else if (window.obj74190_onTap_runningActionsCount == 0) {
	obj74190_onTap_actionGroup1();
}
}

















};
obj74190_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74190_onTap_activeActionGroupIndex = -1;
		$("#obj74190").trigger("obj74190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74190) {
				console.warn("de-queueing event obj74190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74190_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74198
(function(){
	window.obj74190_onTap_runningActionsCount = obj74190_onTap_runningActionsCount + 1;

	var selector = "#obj74198";
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
					window.obj74190_onTap_runningActionsCount = window.obj74190_onTap_runningActionsCount - 1;
if (window.obj74190_onTap_runningActionsCount < 0) {
	window.obj74190_onTap_runningActionsCount = 0;
} else if (window.obj74190_onTap_runningActionsCount == 0) {
	obj74190_onTap_actionGroup2();
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
				window.obj74190_onTap_runningActionsCount = window.obj74190_onTap_runningActionsCount - 1;
if (window.obj74190_onTap_runningActionsCount < 0) {
	window.obj74190_onTap_runningActionsCount = 0;
} else if (window.obj74190_onTap_runningActionsCount == 0) {
	obj74190_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74190_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74190_onTap_activeActionGroupIndex = -1;
		$("#obj74190").trigger("obj74190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74190) {
				console.warn("de-queueing event obj74190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74190_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74188 
move_74195();
function move_74195() {
	window.obj74190_onTap_runningActionsCount = obj74190_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74188");
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
			window.obj74190_onTap_runningActionsCount = window.obj74190_onTap_runningActionsCount - 1;
if (window.obj74190_onTap_runningActionsCount < 0) {
	window.obj74190_onTap_runningActionsCount = 0;
} else if (window.obj74190_onTap_runningActionsCount == 0) {
	obj74190_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74190_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74190_onTap_activeActionGroupIndex = -1;
		$("#obj74190").trigger("obj74190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74190) {
				console.warn("de-queueing event obj74190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74190_onTap_activeActionGroupIndex = 3;
	





















};
obj87471_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87471_onTap_activeActionGroupIndex = -1;
		$("#obj87471").trigger("obj87471_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87471) {
				console.warn("de-queueing event obj87471." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87471").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87471_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87476 
stopAudio_87473();
function stopAudio_87473() {
	window.obj87471_onTap_runningActionsCount = obj87471_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87476")[0];
	myAudio.pause();
	window.obj87471_onTap_runningActionsCount = window.obj87471_onTap_runningActionsCount - 1;
if (window.obj87471_onTap_runningActionsCount < 0) {
	window.obj87471_onTap_runningActionsCount = 0;
} else if (window.obj87471_onTap_runningActionsCount == 0) {
	obj87471_onTap_actionGroup1();
}
}








};
obj87471_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87471_onTap_activeActionGroupIndex = -1;
		$("#obj87471").trigger("obj87471_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87471) {
				console.warn("de-queueing event obj87471." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87471").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87471_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87471 
hide_87474();
function hide_87474() {
	var selector = "#obj87471";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87471_onTap_runningActionsCount = obj87471_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87471_onTap_runningActionsCount = window.obj87471_onTap_runningActionsCount - 1;
if (window.obj87471_onTap_runningActionsCount < 0) {
	window.obj87471_onTap_runningActionsCount = 0;
} else if (window.obj87471_onTap_runningActionsCount == 0) {
	obj87471_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87474(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87471_onTap_runningActionsCount = window.obj87471_onTap_runningActionsCount - 1;
if (window.obj87471_onTap_runningActionsCount < 0) {
	window.obj87471_onTap_runningActionsCount = 0;
} else if (window.obj87471_onTap_runningActionsCount == 0) {
	obj87471_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87471_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87471_onTap_activeActionGroupIndex = -1;
		$("#obj87471").trigger("obj87471_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87471) {
				console.warn("de-queueing event obj87471." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87471").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87471_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87466
(function(){
	window.obj87471_onTap_runningActionsCount = obj87471_onTap_runningActionsCount + 1;

	var selector = "#obj87466";
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
					window.obj87471_onTap_runningActionsCount = window.obj87471_onTap_runningActionsCount - 1;
if (window.obj87471_onTap_runningActionsCount < 0) {
	window.obj87471_onTap_runningActionsCount = 0;
} else if (window.obj87471_onTap_runningActionsCount == 0) {
	obj87471_onTap_actionGroup3();
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
				window.obj87471_onTap_runningActionsCount = window.obj87471_onTap_runningActionsCount - 1;
if (window.obj87471_onTap_runningActionsCount < 0) {
	window.obj87471_onTap_runningActionsCount = 0;
} else if (window.obj87471_onTap_runningActionsCount == 0) {
	obj87471_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87471_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87471_onTap_activeActionGroupIndex = -1;
		$("#obj87471").trigger("obj87471_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87471) {
				console.warn("de-queueing event obj87471." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87471").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87471_onTap_activeActionGroupIndex = 3;
	





















};
obj87466_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87466_onTap_activeActionGroupIndex = -1;
		$("#obj87466").trigger("obj87466_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87466) {
				console.warn("de-queueing event obj87466." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87466").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87466_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87466 
hide_87468();
function hide_87468() {
	var selector = "#obj87466";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87466_onTap_runningActionsCount = obj87466_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87466_onTap_runningActionsCount = window.obj87466_onTap_runningActionsCount - 1;
if (window.obj87466_onTap_runningActionsCount < 0) {
	window.obj87466_onTap_runningActionsCount = 0;
} else if (window.obj87466_onTap_runningActionsCount == 0) {
	obj87466_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87468(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87466_onTap_runningActionsCount = window.obj87466_onTap_runningActionsCount - 1;
if (window.obj87466_onTap_runningActionsCount < 0) {
	window.obj87466_onTap_runningActionsCount = 0;
} else if (window.obj87466_onTap_runningActionsCount == 0) {
	obj87466_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87466_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87466_onTap_activeActionGroupIndex = -1;
		$("#obj87466").trigger("obj87466_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87466) {
				console.warn("de-queueing event obj87466." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87466").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87466_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87471
(function(){
	window.obj87466_onTap_runningActionsCount = obj87466_onTap_runningActionsCount + 1;

	var selector = "#obj87471";
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
					window.obj87466_onTap_runningActionsCount = window.obj87466_onTap_runningActionsCount - 1;
if (window.obj87466_onTap_runningActionsCount < 0) {
	window.obj87466_onTap_runningActionsCount = 0;
} else if (window.obj87466_onTap_runningActionsCount == 0) {
	obj87466_onTap_actionGroup2();
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
				window.obj87466_onTap_runningActionsCount = window.obj87466_onTap_runningActionsCount - 1;
if (window.obj87466_onTap_runningActionsCount < 0) {
	window.obj87466_onTap_runningActionsCount = 0;
} else if (window.obj87466_onTap_runningActionsCount == 0) {
	obj87466_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87466_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87466_onTap_activeActionGroupIndex = -1;
		$("#obj87466").trigger("obj87466_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87466) {
				console.warn("de-queueing event obj87466." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87466").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87466_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87476 
playAudio_87470();
function playAudio_87470() {
	window.obj87466_onTap_runningActionsCount = obj87466_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87476")[0];
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
		    window.obj87466_onTap_runningActionsCount = window.obj87466_onTap_runningActionsCount - 1;
if (window.obj87466_onTap_runningActionsCount < 0) {
	window.obj87466_onTap_runningActionsCount = 0;
} else if (window.obj87466_onTap_runningActionsCount == 0) {
	obj87466_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87466_onTap_runningActionsCount = window.obj87466_onTap_runningActionsCount - 1;
if (window.obj87466_onTap_runningActionsCount < 0) {
	window.obj87466_onTap_runningActionsCount = 0;
} else if (window.obj87466_onTap_runningActionsCount == 0) {
	obj87466_onTap_actionGroup3();
}
	}
}









};
obj87466_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87466_onTap_activeActionGroupIndex = -1;
		$("#obj87466").trigger("obj87466_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87466) {
				console.warn("de-queueing event obj87466." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87466").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87466_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj74240: Event Touch Down
 *
 */
$("#obj74240").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74240_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74240_onTap is still running");
	return;
}
var obj74240_onTap_runningActionsCount = 0;
var obj74240_onTap_loopCount = 0;
obj74240_onTap_actionGroup0();
});










/*
 *
 *   obj74237: Event Touch Down
 *
 */
$("#obj74237").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74237_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74237_onTap is still running");
	return;
}
var obj74237_onTap_runningActionsCount = 0;
var obj74237_onTap_loopCount = 0;
obj74237_onTap_actionGroup0();
});




























































/*
 *
 *   obj74223: Event Touch Down
 *
 */
$("#obj74223").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74223_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74223_onTap is still running");
	return;
}
var obj74223_onTap_runningActionsCount = 0;
var obj74223_onTap_loopCount = 0;
obj74223_onTap_actionGroup0();
});










/*
 *
 *   obj74221: Event Touch Down
 *
 */
$("#obj74221").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74221_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74221_onTap is still running");
	return;
}
var obj74221_onTap_runningActionsCount = 0;
var obj74221_onTap_loopCount = 0;
obj74221_onTap_actionGroup0();
});










/*
 *
 *   obj74218: Event Touch Down
 *
 */
$("#obj74218").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74218_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74218_onTap is still running");
	return;
}
var obj74218_onTap_runningActionsCount = 0;
var obj74218_onTap_loopCount = 0;
obj74218_onTap_actionGroup0();
});










/*
 *
 *   obj74216: Event Touch Down
 *
 */
$("#obj74216").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74216_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74216_onTap is still running");
	return;
}
var obj74216_onTap_runningActionsCount = 0;
var obj74216_onTap_loopCount = 0;
obj74216_onTap_actionGroup0();
});










/*
 *
 *   obj74198: Event Touch Down
 *
 */
$("#obj74198").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74198_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74198_onTap is still running");
	return;
}
var obj74198_onTap_runningActionsCount = 0;
var obj74198_onTap_loopCount = 0;
obj74198_onTap_actionGroup0();
});










/*
 *
 *   obj74190: Event Touch Down
 *
 */
$("#obj74190").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74190_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74190_onTap is still running");
	return;
}
var obj74190_onTap_runningActionsCount = 0;
var obj74190_onTap_loopCount = 0;
obj74190_onTap_actionGroup0();
});










/*
 *
 *   obj87471: Event Touch Down
 *
 */
$("#obj87471").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87471_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87471_onTap is still running");
	return;
}
var obj87471_onTap_runningActionsCount = 0;
var obj87471_onTap_loopCount = 0;
obj87471_onTap_actionGroup0();
});










/*
 *
 *   obj87466: Event Touch Down
 *
 */
$("#obj87466").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87466_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87466_onTap is still running");
	return;
}
var obj87466_onTap_runningActionsCount = 0;
var obj87466_onTap_loopCount = 0;
obj87466_onTap_actionGroup0();
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
	
$("#obj74243").trigger('SCEventShow');
$("#obj74240").trigger('SCEventShow');
$("#obj74237").trigger('SCEventShow');
$("#obj74235").trigger('SCEventShow');
$("#obj74233").trigger('SCEventShow');
$("#obj74231").trigger('SCEventShow');
$("#obj74229").trigger('SCEventShow');
$("#obj74227").trigger('SCEventShow');
$("#obj74223").trigger('SCEventShow');
$("#obj74221").trigger('SCEventShow');
$("#obj74218").trigger('SCEventShow');
$("#obj74216").trigger('SCEventShow');
$("#obj74198").trigger('SCEventShow');
$("#obj74190").trigger('SCEventShow');
$("#obj87471").trigger('SCEventShow');
$("#obj87466").trigger('SCEventShow');
$("#obj87476").trigger('SCEventShow');
$("#obj94753").trigger('SCEventShow');
$("#obj74188").trigger('SCEventShow');
	
});