pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 33101;
pubcoder.page.title = pubcoder.page.title || "114";
pubcoder.page.number = pubcoder.page.number || 114;
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
var obj85239_onTap_activeActionGroupIndex = -1;
var obj85239_onTap_runningActionsCount = 0;
var obj85239_onTap_loopCount = 0;
var obj85236_onTap_activeActionGroupIndex = -1;
var obj85236_onTap_runningActionsCount = 0;
var obj85236_onTap_loopCount = 0;
var obj85220_onTap_activeActionGroupIndex = -1;
var obj85220_onTap_runningActionsCount = 0;
var obj85220_onTap_loopCount = 0;
var obj85194_onTap_activeActionGroupIndex = -1;
var obj85194_onTap_runningActionsCount = 0;
var obj85194_onTap_loopCount = 0;
var obj85186_onTap_activeActionGroupIndex = -1;
var obj85186_onTap_runningActionsCount = 0;
var obj85186_onTap_loopCount = 0;
var obj88237_onTap_activeActionGroupIndex = -1;
var obj88237_onTap_runningActionsCount = 0;
var obj88237_onTap_loopCount = 0;
var obj88232_onTap_activeActionGroupIndex = -1;
var obj88232_onTap_runningActionsCount = 0;
var obj88232_onTap_loopCount = 0;
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
		
obj85239_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85239_onTap_activeActionGroupIndex = -1;
		$("#obj85239").trigger("obj85239_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85239) {
				console.warn("de-queueing event obj85239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85239_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_85241();
function goToPage_85241() {
	window.obj85239_onTap_runningActionsCount = obj85239_onTap_runningActionsCount + 1;
	$("#anchor684")[0].click();
	window.obj85239_onTap_runningActionsCount = window.obj85239_onTap_runningActionsCount - 1;
if (window.obj85239_onTap_runningActionsCount < 0) {
	window.obj85239_onTap_runningActionsCount = 0;
} else if (window.obj85239_onTap_runningActionsCount == 0) {
	obj85239_onTap_actionGroup1();
}
}





















};
obj85239_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85239_onTap_activeActionGroupIndex = -1;
		$("#obj85239").trigger("obj85239_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85239) {
				console.warn("de-queueing event obj85239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85239_onTap_activeActionGroupIndex = 1;
	





















};
obj85236_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85236_onTap_activeActionGroupIndex = -1;
		$("#obj85236").trigger("obj85236_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85236) {
				console.warn("de-queueing event obj85236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85236_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_85238();
function goToPage_85238() {
	window.obj85236_onTap_runningActionsCount = obj85236_onTap_runningActionsCount + 1;
	$("#anchor685")[0].click();
	window.obj85236_onTap_runningActionsCount = window.obj85236_onTap_runningActionsCount - 1;
if (window.obj85236_onTap_runningActionsCount < 0) {
	window.obj85236_onTap_runningActionsCount = 0;
} else if (window.obj85236_onTap_runningActionsCount == 0) {
	obj85236_onTap_actionGroup1();
}
}





















};
obj85236_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85236_onTap_activeActionGroupIndex = -1;
		$("#obj85236").trigger("obj85236_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85236) {
				console.warn("de-queueing event obj85236." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85236").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85236_onTap_activeActionGroupIndex = 1;
	





















};
obj85220_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85220_onTap_activeActionGroupIndex = -1;
		$("#obj85220").trigger("obj85220_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85220) {
				console.warn("de-queueing event obj85220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85220_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85222();
function runjs_85222() {
	window.obj85220_onTap_runningActionsCount = obj85220_onTap_runningActionsCount + 1;

	$("#obj85220").css("border-color", "#058E3F"); $("#obj85220").css("border-width", "2px"); $("#obj85220").css("border-style", "solid"); $("#obj85220").css("border-radius", "10px"); $("#obj85220").css("-webkit-border-radius", "10px"); $("#obj85220").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85220_onTap_runningActionsCount = window.obj85220_onTap_runningActionsCount - 1;
if (window.obj85220_onTap_runningActionsCount < 0) {
	window.obj85220_onTap_runningActionsCount = 0;
} else if (window.obj85220_onTap_runningActionsCount == 0) {
	obj85220_onTap_actionGroup1();
}
	}, 1);
}







};
obj85220_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85220_onTap_activeActionGroupIndex = -1;
		$("#obj85220").trigger("obj85220_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85220) {
				console.warn("de-queueing event obj85220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85220_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_85223();
function goToPage_85223() {
	window.obj85220_onTap_runningActionsCount = obj85220_onTap_runningActionsCount + 1;
	$("#anchor686")[0].click();
	window.obj85220_onTap_runningActionsCount = window.obj85220_onTap_runningActionsCount - 1;
if (window.obj85220_onTap_runningActionsCount < 0) {
	window.obj85220_onTap_runningActionsCount = 0;
} else if (window.obj85220_onTap_runningActionsCount == 0) {
	obj85220_onTap_actionGroup2();
}
}





















};
obj85220_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85220_onTap_activeActionGroupIndex = -1;
		$("#obj85220").trigger("obj85220_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85220) {
				console.warn("de-queueing event obj85220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85220_onTap_activeActionGroupIndex = 2;
	





















};
obj85194_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85194_onTap_activeActionGroupIndex = -1;
		$("#obj85194").trigger("obj85194_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85194) {
				console.warn("de-queueing event obj85194." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85194").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85194_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj85194 
hide_85197();
function hide_85197() {
	var selector = "#obj85194";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85194_onTap_runningActionsCount = obj85194_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85194_onTap_runningActionsCount = window.obj85194_onTap_runningActionsCount - 1;
if (window.obj85194_onTap_runningActionsCount < 0) {
	window.obj85194_onTap_runningActionsCount = 0;
} else if (window.obj85194_onTap_runningActionsCount == 0) {
	obj85194_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85197(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85194_onTap_runningActionsCount = window.obj85194_onTap_runningActionsCount - 1;
if (window.obj85194_onTap_runningActionsCount < 0) {
	window.obj85194_onTap_runningActionsCount = 0;
} else if (window.obj85194_onTap_runningActionsCount == 0) {
	obj85194_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj85184 
stopMovie_85196();
function stopMovie_85196() {
	window.obj85194_onTap_runningActionsCount = obj85194_onTap_runningActionsCount + 1;
	var myVideo = $("#obj85184")[0];
	myVideo.pause();
	window.obj85194_onTap_runningActionsCount = window.obj85194_onTap_runningActionsCount - 1;
if (window.obj85194_onTap_runningActionsCount < 0) {
	window.obj85194_onTap_runningActionsCount = 0;
} else if (window.obj85194_onTap_runningActionsCount == 0) {
	obj85194_onTap_actionGroup1();
}
}
















};
obj85194_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85194_onTap_activeActionGroupIndex = -1;
		$("#obj85194").trigger("obj85194_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85194) {
				console.warn("de-queueing event obj85194." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85194").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85194_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj85186
(function(){
	window.obj85194_onTap_runningActionsCount = obj85194_onTap_runningActionsCount + 1;

	var selector = "#obj85186";
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
					window.obj85194_onTap_runningActionsCount = window.obj85194_onTap_runningActionsCount - 1;
if (window.obj85194_onTap_runningActionsCount < 0) {
	window.obj85194_onTap_runningActionsCount = 0;
} else if (window.obj85194_onTap_runningActionsCount == 0) {
	obj85194_onTap_actionGroup2();
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
				window.obj85194_onTap_runningActionsCount = window.obj85194_onTap_runningActionsCount - 1;
if (window.obj85194_onTap_runningActionsCount < 0) {
	window.obj85194_onTap_runningActionsCount = 0;
} else if (window.obj85194_onTap_runningActionsCount == 0) {
	obj85194_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85194_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85194_onTap_activeActionGroupIndex = -1;
		$("#obj85194").trigger("obj85194_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85194) {
				console.warn("de-queueing event obj85194." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85194").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85194_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj85184 
move_85199();
function move_85199() {
	window.obj85194_onTap_runningActionsCount = obj85194_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj85184");
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
			window.obj85194_onTap_runningActionsCount = window.obj85194_onTap_runningActionsCount - 1;
if (window.obj85194_onTap_runningActionsCount < 0) {
	window.obj85194_onTap_runningActionsCount = 0;
} else if (window.obj85194_onTap_runningActionsCount == 0) {
	obj85194_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj85194_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85194_onTap_activeActionGroupIndex = -1;
		$("#obj85194").trigger("obj85194_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85194) {
				console.warn("de-queueing event obj85194." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85194").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85194_onTap_activeActionGroupIndex = 3;
	





















};
obj85186_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85186_onTap_activeActionGroupIndex = -1;
		$("#obj85186").trigger("obj85186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85186) {
				console.warn("de-queueing event obj85186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85186_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj85186 
hide_85189();
function hide_85189() {
	var selector = "#obj85186";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85186_onTap_runningActionsCount = obj85186_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85186_onTap_runningActionsCount = window.obj85186_onTap_runningActionsCount - 1;
if (window.obj85186_onTap_runningActionsCount < 0) {
	window.obj85186_onTap_runningActionsCount = 0;
} else if (window.obj85186_onTap_runningActionsCount == 0) {
	obj85186_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85189(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85186_onTap_runningActionsCount = window.obj85186_onTap_runningActionsCount - 1;
if (window.obj85186_onTap_runningActionsCount < 0) {
	window.obj85186_onTap_runningActionsCount = 0;
} else if (window.obj85186_onTap_runningActionsCount == 0) {
	obj85186_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj85184 
playPauseMovie_85188();
function playPauseMovie_85188() {
	window.obj85186_onTap_runningActionsCount = obj85186_onTap_runningActionsCount + 1;
	var myVideo = $("#obj85184")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj85186_onTap_runningActionsCount = window.obj85186_onTap_runningActionsCount - 1;
if (window.obj85186_onTap_runningActionsCount < 0) {
	window.obj85186_onTap_runningActionsCount = 0;
} else if (window.obj85186_onTap_runningActionsCount == 0) {
	obj85186_onTap_actionGroup1();
}
}

















};
obj85186_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85186_onTap_activeActionGroupIndex = -1;
		$("#obj85186").trigger("obj85186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85186) {
				console.warn("de-queueing event obj85186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85186_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj85194
(function(){
	window.obj85186_onTap_runningActionsCount = obj85186_onTap_runningActionsCount + 1;

	var selector = "#obj85194";
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
					window.obj85186_onTap_runningActionsCount = window.obj85186_onTap_runningActionsCount - 1;
if (window.obj85186_onTap_runningActionsCount < 0) {
	window.obj85186_onTap_runningActionsCount = 0;
} else if (window.obj85186_onTap_runningActionsCount == 0) {
	obj85186_onTap_actionGroup2();
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
				window.obj85186_onTap_runningActionsCount = window.obj85186_onTap_runningActionsCount - 1;
if (window.obj85186_onTap_runningActionsCount < 0) {
	window.obj85186_onTap_runningActionsCount = 0;
} else if (window.obj85186_onTap_runningActionsCount == 0) {
	obj85186_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85186_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85186_onTap_activeActionGroupIndex = -1;
		$("#obj85186").trigger("obj85186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85186) {
				console.warn("de-queueing event obj85186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85186_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj85184 
move_85191();
function move_85191() {
	window.obj85186_onTap_runningActionsCount = obj85186_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj85184");
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
			window.obj85186_onTap_runningActionsCount = window.obj85186_onTap_runningActionsCount - 1;
if (window.obj85186_onTap_runningActionsCount < 0) {
	window.obj85186_onTap_runningActionsCount = 0;
} else if (window.obj85186_onTap_runningActionsCount == 0) {
	obj85186_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj85186_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85186_onTap_activeActionGroupIndex = -1;
		$("#obj85186").trigger("obj85186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85186) {
				console.warn("de-queueing event obj85186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85186_onTap_activeActionGroupIndex = 3;
	





















};
obj88237_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88237_onTap_activeActionGroupIndex = -1;
		$("#obj88237").trigger("obj88237_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88237) {
				console.warn("de-queueing event obj88237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88237_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88242 
stopAudio_88239();
function stopAudio_88239() {
	window.obj88237_onTap_runningActionsCount = obj88237_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88242")[0];
	myAudio.pause();
	window.obj88237_onTap_runningActionsCount = window.obj88237_onTap_runningActionsCount - 1;
if (window.obj88237_onTap_runningActionsCount < 0) {
	window.obj88237_onTap_runningActionsCount = 0;
} else if (window.obj88237_onTap_runningActionsCount == 0) {
	obj88237_onTap_actionGroup1();
}
}








};
obj88237_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88237_onTap_activeActionGroupIndex = -1;
		$("#obj88237").trigger("obj88237_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88237) {
				console.warn("de-queueing event obj88237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88237_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88237 
hide_88240();
function hide_88240() {
	var selector = "#obj88237";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88237_onTap_runningActionsCount = obj88237_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88237_onTap_runningActionsCount = window.obj88237_onTap_runningActionsCount - 1;
if (window.obj88237_onTap_runningActionsCount < 0) {
	window.obj88237_onTap_runningActionsCount = 0;
} else if (window.obj88237_onTap_runningActionsCount == 0) {
	obj88237_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88240(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88237_onTap_runningActionsCount = window.obj88237_onTap_runningActionsCount - 1;
if (window.obj88237_onTap_runningActionsCount < 0) {
	window.obj88237_onTap_runningActionsCount = 0;
} else if (window.obj88237_onTap_runningActionsCount == 0) {
	obj88237_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88237_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88237_onTap_activeActionGroupIndex = -1;
		$("#obj88237").trigger("obj88237_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88237) {
				console.warn("de-queueing event obj88237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88237_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88232
(function(){
	window.obj88237_onTap_runningActionsCount = obj88237_onTap_runningActionsCount + 1;

	var selector = "#obj88232";
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
					window.obj88237_onTap_runningActionsCount = window.obj88237_onTap_runningActionsCount - 1;
if (window.obj88237_onTap_runningActionsCount < 0) {
	window.obj88237_onTap_runningActionsCount = 0;
} else if (window.obj88237_onTap_runningActionsCount == 0) {
	obj88237_onTap_actionGroup3();
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
				window.obj88237_onTap_runningActionsCount = window.obj88237_onTap_runningActionsCount - 1;
if (window.obj88237_onTap_runningActionsCount < 0) {
	window.obj88237_onTap_runningActionsCount = 0;
} else if (window.obj88237_onTap_runningActionsCount == 0) {
	obj88237_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88237_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88237_onTap_activeActionGroupIndex = -1;
		$("#obj88237").trigger("obj88237_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88237) {
				console.warn("de-queueing event obj88237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88237_onTap_activeActionGroupIndex = 3;
	





















};
obj88232_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88232_onTap_activeActionGroupIndex = -1;
		$("#obj88232").trigger("obj88232_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88232) {
				console.warn("de-queueing event obj88232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88232_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88232 
hide_88234();
function hide_88234() {
	var selector = "#obj88232";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88232_onTap_runningActionsCount = obj88232_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88232_onTap_runningActionsCount = window.obj88232_onTap_runningActionsCount - 1;
if (window.obj88232_onTap_runningActionsCount < 0) {
	window.obj88232_onTap_runningActionsCount = 0;
} else if (window.obj88232_onTap_runningActionsCount == 0) {
	obj88232_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88234(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88232_onTap_runningActionsCount = window.obj88232_onTap_runningActionsCount - 1;
if (window.obj88232_onTap_runningActionsCount < 0) {
	window.obj88232_onTap_runningActionsCount = 0;
} else if (window.obj88232_onTap_runningActionsCount == 0) {
	obj88232_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88232_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88232_onTap_activeActionGroupIndex = -1;
		$("#obj88232").trigger("obj88232_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88232) {
				console.warn("de-queueing event obj88232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88232_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88237
(function(){
	window.obj88232_onTap_runningActionsCount = obj88232_onTap_runningActionsCount + 1;

	var selector = "#obj88237";
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
					window.obj88232_onTap_runningActionsCount = window.obj88232_onTap_runningActionsCount - 1;
if (window.obj88232_onTap_runningActionsCount < 0) {
	window.obj88232_onTap_runningActionsCount = 0;
} else if (window.obj88232_onTap_runningActionsCount == 0) {
	obj88232_onTap_actionGroup2();
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
				window.obj88232_onTap_runningActionsCount = window.obj88232_onTap_runningActionsCount - 1;
if (window.obj88232_onTap_runningActionsCount < 0) {
	window.obj88232_onTap_runningActionsCount = 0;
} else if (window.obj88232_onTap_runningActionsCount == 0) {
	obj88232_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88232_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88232_onTap_activeActionGroupIndex = -1;
		$("#obj88232").trigger("obj88232_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88232) {
				console.warn("de-queueing event obj88232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88232_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88242 
playAudio_88236();
function playAudio_88236() {
	window.obj88232_onTap_runningActionsCount = obj88232_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88242")[0];
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
		    window.obj88232_onTap_runningActionsCount = window.obj88232_onTap_runningActionsCount - 1;
if (window.obj88232_onTap_runningActionsCount < 0) {
	window.obj88232_onTap_runningActionsCount = 0;
} else if (window.obj88232_onTap_runningActionsCount == 0) {
	obj88232_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88232_onTap_runningActionsCount = window.obj88232_onTap_runningActionsCount - 1;
if (window.obj88232_onTap_runningActionsCount < 0) {
	window.obj88232_onTap_runningActionsCount = 0;
} else if (window.obj88232_onTap_runningActionsCount == 0) {
	obj88232_onTap_actionGroup3();
}
	}
}









};
obj88232_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88232_onTap_activeActionGroupIndex = -1;
		$("#obj88232").trigger("obj88232_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88232) {
				console.warn("de-queueing event obj88232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88232_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj85239: Event Touch Down
 *
 */
$("#obj85239").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85239_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85239_onTap is still running");
	return;
}
var obj85239_onTap_runningActionsCount = 0;
var obj85239_onTap_loopCount = 0;
obj85239_onTap_actionGroup0();
});










/*
 *
 *   obj85236: Event Touch Down
 *
 */
$("#obj85236").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85236_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85236_onTap is still running");
	return;
}
var obj85236_onTap_runningActionsCount = 0;
var obj85236_onTap_loopCount = 0;
obj85236_onTap_actionGroup0();
});






































































/*
 *
 *   obj85220: Event Touch Down
 *
 */
$("#obj85220").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85220_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85220_onTap is still running");
	return;
}
var obj85220_onTap_runningActionsCount = 0;
var obj85220_onTap_loopCount = 0;
obj85220_onTap_actionGroup0();
});


















































/*
 *
 *   obj85194: Event Touch Down
 *
 */
$("#obj85194").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85194_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85194_onTap is still running");
	return;
}
var obj85194_onTap_runningActionsCount = 0;
var obj85194_onTap_loopCount = 0;
obj85194_onTap_actionGroup0();
});










/*
 *
 *   obj85186: Event Touch Down
 *
 */
$("#obj85186").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85186_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85186_onTap is still running");
	return;
}
var obj85186_onTap_runningActionsCount = 0;
var obj85186_onTap_loopCount = 0;
obj85186_onTap_actionGroup0();
});










/*
 *
 *   obj88237: Event Touch Down
 *
 */
$("#obj88237").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88237_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88237_onTap is still running");
	return;
}
var obj88237_onTap_runningActionsCount = 0;
var obj88237_onTap_loopCount = 0;
obj88237_onTap_actionGroup0();
});










/*
 *
 *   obj88232: Event Touch Down
 *
 */
$("#obj88232").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88232_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88232_onTap is still running");
	return;
}
var obj88232_onTap_runningActionsCount = 0;
var obj88232_onTap_loopCount = 0;
obj88232_onTap_actionGroup0();
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
	
$("#obj85242").trigger('SCEventShow');
$("#obj85239").trigger('SCEventShow');
$("#obj85236").trigger('SCEventShow');
$("#obj85234").trigger('SCEventShow');
$("#obj85232").trigger('SCEventShow');
$("#obj85230").trigger('SCEventShow');
$("#obj85228").trigger('SCEventShow');
$("#obj85226").trigger('SCEventShow');
$("#obj85224").trigger('SCEventShow');
$("#obj85220").trigger('SCEventShow');
$("#obj85218").trigger('SCEventShow');
$("#obj85216").trigger('SCEventShow');
$("#obj85214").trigger('SCEventShow');
$("#obj85212").trigger('SCEventShow');
$("#obj85194").trigger('SCEventShow');
$("#obj85186").trigger('SCEventShow');
$("#obj88237").trigger('SCEventShow');
$("#obj88232").trigger('SCEventShow');
$("#obj88242").trigger('SCEventShow');
$("#obj94857").trigger('SCEventShow');
$("#obj85184").trigger('SCEventShow');
	
});