pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 39675;
pubcoder.page.title = pubcoder.page.title || "134";
pubcoder.page.number = pubcoder.page.number || 134;
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
var obj39689_onTap_activeActionGroupIndex = -1;
var obj39689_onTap_runningActionsCount = 0;
var obj39689_onTap_loopCount = 0;
var obj39686_onTap_activeActionGroupIndex = -1;
var obj39686_onTap_runningActionsCount = 0;
var obj39686_onTap_loopCount = 0;
var obj67150_onTap_activeActionGroupIndex = -1;
var obj67150_onTap_runningActionsCount = 0;
var obj67150_onTap_loopCount = 0;
var obj67142_onTap_activeActionGroupIndex = -1;
var obj67142_onTap_runningActionsCount = 0;
var obj67142_onTap_loopCount = 0;
var obj88477_onTap_activeActionGroupIndex = -1;
var obj88477_onTap_runningActionsCount = 0;
var obj88477_onTap_loopCount = 0;
var obj88472_onTap_activeActionGroupIndex = -1;
var obj88472_onTap_runningActionsCount = 0;
var obj88472_onTap_loopCount = 0;
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
		
obj39689_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39689_onTap_activeActionGroupIndex = -1;
		$("#obj39689").trigger("obj39689_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39689) {
				console.warn("de-queueing event obj39689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39689_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_39691();
function goToPage_39691() {
	window.obj39689_onTap_runningActionsCount = obj39689_onTap_runningActionsCount + 1;
	$("#anchor801")[0].click();
	window.obj39689_onTap_runningActionsCount = window.obj39689_onTap_runningActionsCount - 1;
if (window.obj39689_onTap_runningActionsCount < 0) {
	window.obj39689_onTap_runningActionsCount = 0;
} else if (window.obj39689_onTap_runningActionsCount == 0) {
	obj39689_onTap_actionGroup1();
}
}





















};
obj39689_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39689_onTap_activeActionGroupIndex = -1;
		$("#obj39689").trigger("obj39689_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39689) {
				console.warn("de-queueing event obj39689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39689_onTap_activeActionGroupIndex = 1;
	





















};
obj39686_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39686_onTap_activeActionGroupIndex = -1;
		$("#obj39686").trigger("obj39686_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39686) {
				console.warn("de-queueing event obj39686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39686_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_39688();
function goToPage_39688() {
	window.obj39686_onTap_runningActionsCount = obj39686_onTap_runningActionsCount + 1;
	$("#anchor802")[0].click();
	window.obj39686_onTap_runningActionsCount = window.obj39686_onTap_runningActionsCount - 1;
if (window.obj39686_onTap_runningActionsCount < 0) {
	window.obj39686_onTap_runningActionsCount = 0;
} else if (window.obj39686_onTap_runningActionsCount == 0) {
	obj39686_onTap_actionGroup1();
}
}





















};
obj39686_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39686_onTap_activeActionGroupIndex = -1;
		$("#obj39686").trigger("obj39686_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39686) {
				console.warn("de-queueing event obj39686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39686_onTap_activeActionGroupIndex = 1;
	





















};
obj67150_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67150_onTap_activeActionGroupIndex = -1;
		$("#obj67150").trigger("obj67150_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67150) {
				console.warn("de-queueing event obj67150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67150_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67150 
hide_67153();
function hide_67153() {
	var selector = "#obj67150";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67150_onTap_runningActionsCount = obj67150_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67150_onTap_runningActionsCount = window.obj67150_onTap_runningActionsCount - 1;
if (window.obj67150_onTap_runningActionsCount < 0) {
	window.obj67150_onTap_runningActionsCount = 0;
} else if (window.obj67150_onTap_runningActionsCount == 0) {
	obj67150_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67153(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67150_onTap_runningActionsCount = window.obj67150_onTap_runningActionsCount - 1;
if (window.obj67150_onTap_runningActionsCount < 0) {
	window.obj67150_onTap_runningActionsCount = 0;
} else if (window.obj67150_onTap_runningActionsCount == 0) {
	obj67150_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67156 
stopMovie_67152();
function stopMovie_67152() {
	window.obj67150_onTap_runningActionsCount = obj67150_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67156")[0];
	myVideo.pause();
	window.obj67150_onTap_runningActionsCount = window.obj67150_onTap_runningActionsCount - 1;
if (window.obj67150_onTap_runningActionsCount < 0) {
	window.obj67150_onTap_runningActionsCount = 0;
} else if (window.obj67150_onTap_runningActionsCount == 0) {
	obj67150_onTap_actionGroup1();
}
}
















};
obj67150_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67150_onTap_activeActionGroupIndex = -1;
		$("#obj67150").trigger("obj67150_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67150) {
				console.warn("de-queueing event obj67150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67150_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67142
(function(){
	window.obj67150_onTap_runningActionsCount = obj67150_onTap_runningActionsCount + 1;

	var selector = "#obj67142";
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
					window.obj67150_onTap_runningActionsCount = window.obj67150_onTap_runningActionsCount - 1;
if (window.obj67150_onTap_runningActionsCount < 0) {
	window.obj67150_onTap_runningActionsCount = 0;
} else if (window.obj67150_onTap_runningActionsCount == 0) {
	obj67150_onTap_actionGroup2();
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
				window.obj67150_onTap_runningActionsCount = window.obj67150_onTap_runningActionsCount - 1;
if (window.obj67150_onTap_runningActionsCount < 0) {
	window.obj67150_onTap_runningActionsCount = 0;
} else if (window.obj67150_onTap_runningActionsCount == 0) {
	obj67150_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67150_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67150_onTap_activeActionGroupIndex = -1;
		$("#obj67150").trigger("obj67150_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67150) {
				console.warn("de-queueing event obj67150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67150_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67156 
move_67155();
function move_67155() {
	window.obj67150_onTap_runningActionsCount = obj67150_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67156");
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
			window.obj67150_onTap_runningActionsCount = window.obj67150_onTap_runningActionsCount - 1;
if (window.obj67150_onTap_runningActionsCount < 0) {
	window.obj67150_onTap_runningActionsCount = 0;
} else if (window.obj67150_onTap_runningActionsCount == 0) {
	obj67150_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67150_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67150_onTap_activeActionGroupIndex = -1;
		$("#obj67150").trigger("obj67150_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67150) {
				console.warn("de-queueing event obj67150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67150_onTap_activeActionGroupIndex = 3;
	





















};
obj67142_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67142_onTap_activeActionGroupIndex = -1;
		$("#obj67142").trigger("obj67142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67142) {
				console.warn("de-queueing event obj67142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67142_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67142 
hide_67145();
function hide_67145() {
	var selector = "#obj67142";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67142_onTap_runningActionsCount = obj67142_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67142_onTap_runningActionsCount = window.obj67142_onTap_runningActionsCount - 1;
if (window.obj67142_onTap_runningActionsCount < 0) {
	window.obj67142_onTap_runningActionsCount = 0;
} else if (window.obj67142_onTap_runningActionsCount == 0) {
	obj67142_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67145(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67142_onTap_runningActionsCount = window.obj67142_onTap_runningActionsCount - 1;
if (window.obj67142_onTap_runningActionsCount < 0) {
	window.obj67142_onTap_runningActionsCount = 0;
} else if (window.obj67142_onTap_runningActionsCount == 0) {
	obj67142_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67156 
playPauseMovie_67144();
function playPauseMovie_67144() {
	window.obj67142_onTap_runningActionsCount = obj67142_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67156")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67142_onTap_runningActionsCount = window.obj67142_onTap_runningActionsCount - 1;
if (window.obj67142_onTap_runningActionsCount < 0) {
	window.obj67142_onTap_runningActionsCount = 0;
} else if (window.obj67142_onTap_runningActionsCount == 0) {
	obj67142_onTap_actionGroup1();
}
}

















};
obj67142_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67142_onTap_activeActionGroupIndex = -1;
		$("#obj67142").trigger("obj67142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67142) {
				console.warn("de-queueing event obj67142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67142_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67150
(function(){
	window.obj67142_onTap_runningActionsCount = obj67142_onTap_runningActionsCount + 1;

	var selector = "#obj67150";
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
					window.obj67142_onTap_runningActionsCount = window.obj67142_onTap_runningActionsCount - 1;
if (window.obj67142_onTap_runningActionsCount < 0) {
	window.obj67142_onTap_runningActionsCount = 0;
} else if (window.obj67142_onTap_runningActionsCount == 0) {
	obj67142_onTap_actionGroup2();
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
				window.obj67142_onTap_runningActionsCount = window.obj67142_onTap_runningActionsCount - 1;
if (window.obj67142_onTap_runningActionsCount < 0) {
	window.obj67142_onTap_runningActionsCount = 0;
} else if (window.obj67142_onTap_runningActionsCount == 0) {
	obj67142_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67142_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67142_onTap_activeActionGroupIndex = -1;
		$("#obj67142").trigger("obj67142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67142) {
				console.warn("de-queueing event obj67142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67142_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67156 
move_67147();
function move_67147() {
	window.obj67142_onTap_runningActionsCount = obj67142_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67156");
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
			window.obj67142_onTap_runningActionsCount = window.obj67142_onTap_runningActionsCount - 1;
if (window.obj67142_onTap_runningActionsCount < 0) {
	window.obj67142_onTap_runningActionsCount = 0;
} else if (window.obj67142_onTap_runningActionsCount == 0) {
	obj67142_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67142_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67142_onTap_activeActionGroupIndex = -1;
		$("#obj67142").trigger("obj67142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67142) {
				console.warn("de-queueing event obj67142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67142_onTap_activeActionGroupIndex = 3;
	





















};
obj88477_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88477_onTap_activeActionGroupIndex = -1;
		$("#obj88477").trigger("obj88477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88477) {
				console.warn("de-queueing event obj88477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88477_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88482 
stopAudio_88479();
function stopAudio_88479() {
	window.obj88477_onTap_runningActionsCount = obj88477_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88482")[0];
	myAudio.pause();
	window.obj88477_onTap_runningActionsCount = window.obj88477_onTap_runningActionsCount - 1;
if (window.obj88477_onTap_runningActionsCount < 0) {
	window.obj88477_onTap_runningActionsCount = 0;
} else if (window.obj88477_onTap_runningActionsCount == 0) {
	obj88477_onTap_actionGroup1();
}
}








};
obj88477_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88477_onTap_activeActionGroupIndex = -1;
		$("#obj88477").trigger("obj88477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88477) {
				console.warn("de-queueing event obj88477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88477_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88477 
hide_88480();
function hide_88480() {
	var selector = "#obj88477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88477_onTap_runningActionsCount = obj88477_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88477_onTap_runningActionsCount = window.obj88477_onTap_runningActionsCount - 1;
if (window.obj88477_onTap_runningActionsCount < 0) {
	window.obj88477_onTap_runningActionsCount = 0;
} else if (window.obj88477_onTap_runningActionsCount == 0) {
	obj88477_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88480(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88477_onTap_runningActionsCount = window.obj88477_onTap_runningActionsCount - 1;
if (window.obj88477_onTap_runningActionsCount < 0) {
	window.obj88477_onTap_runningActionsCount = 0;
} else if (window.obj88477_onTap_runningActionsCount == 0) {
	obj88477_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88477_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88477_onTap_activeActionGroupIndex = -1;
		$("#obj88477").trigger("obj88477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88477) {
				console.warn("de-queueing event obj88477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88477_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88472
(function(){
	window.obj88477_onTap_runningActionsCount = obj88477_onTap_runningActionsCount + 1;

	var selector = "#obj88472";
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
					window.obj88477_onTap_runningActionsCount = window.obj88477_onTap_runningActionsCount - 1;
if (window.obj88477_onTap_runningActionsCount < 0) {
	window.obj88477_onTap_runningActionsCount = 0;
} else if (window.obj88477_onTap_runningActionsCount == 0) {
	obj88477_onTap_actionGroup3();
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
				window.obj88477_onTap_runningActionsCount = window.obj88477_onTap_runningActionsCount - 1;
if (window.obj88477_onTap_runningActionsCount < 0) {
	window.obj88477_onTap_runningActionsCount = 0;
} else if (window.obj88477_onTap_runningActionsCount == 0) {
	obj88477_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88477_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88477_onTap_activeActionGroupIndex = -1;
		$("#obj88477").trigger("obj88477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88477) {
				console.warn("de-queueing event obj88477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88477_onTap_activeActionGroupIndex = 3;
	





















};
obj88472_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88472_onTap_activeActionGroupIndex = -1;
		$("#obj88472").trigger("obj88472_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88472) {
				console.warn("de-queueing event obj88472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88472_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88472 
hide_88474();
function hide_88474() {
	var selector = "#obj88472";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88472_onTap_runningActionsCount = obj88472_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88472_onTap_runningActionsCount = window.obj88472_onTap_runningActionsCount - 1;
if (window.obj88472_onTap_runningActionsCount < 0) {
	window.obj88472_onTap_runningActionsCount = 0;
} else if (window.obj88472_onTap_runningActionsCount == 0) {
	obj88472_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88474(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88472_onTap_runningActionsCount = window.obj88472_onTap_runningActionsCount - 1;
if (window.obj88472_onTap_runningActionsCount < 0) {
	window.obj88472_onTap_runningActionsCount = 0;
} else if (window.obj88472_onTap_runningActionsCount == 0) {
	obj88472_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88472_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88472_onTap_activeActionGroupIndex = -1;
		$("#obj88472").trigger("obj88472_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88472) {
				console.warn("de-queueing event obj88472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88472_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88477
(function(){
	window.obj88472_onTap_runningActionsCount = obj88472_onTap_runningActionsCount + 1;

	var selector = "#obj88477";
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
					window.obj88472_onTap_runningActionsCount = window.obj88472_onTap_runningActionsCount - 1;
if (window.obj88472_onTap_runningActionsCount < 0) {
	window.obj88472_onTap_runningActionsCount = 0;
} else if (window.obj88472_onTap_runningActionsCount == 0) {
	obj88472_onTap_actionGroup2();
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
				window.obj88472_onTap_runningActionsCount = window.obj88472_onTap_runningActionsCount - 1;
if (window.obj88472_onTap_runningActionsCount < 0) {
	window.obj88472_onTap_runningActionsCount = 0;
} else if (window.obj88472_onTap_runningActionsCount == 0) {
	obj88472_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88472_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88472_onTap_activeActionGroupIndex = -1;
		$("#obj88472").trigger("obj88472_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88472) {
				console.warn("de-queueing event obj88472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88472_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88482 
playAudio_88476();
function playAudio_88476() {
	window.obj88472_onTap_runningActionsCount = obj88472_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88482")[0];
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
		    window.obj88472_onTap_runningActionsCount = window.obj88472_onTap_runningActionsCount - 1;
if (window.obj88472_onTap_runningActionsCount < 0) {
	window.obj88472_onTap_runningActionsCount = 0;
} else if (window.obj88472_onTap_runningActionsCount == 0) {
	obj88472_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88472_onTap_runningActionsCount = window.obj88472_onTap_runningActionsCount - 1;
if (window.obj88472_onTap_runningActionsCount < 0) {
	window.obj88472_onTap_runningActionsCount = 0;
} else if (window.obj88472_onTap_runningActionsCount == 0) {
	obj88472_onTap_actionGroup3();
}
	}
}









};
obj88472_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88472_onTap_activeActionGroupIndex = -1;
		$("#obj88472").trigger("obj88472_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88472) {
				console.warn("de-queueing event obj88472." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88472").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88472_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj39689: Event Touch Down
 *
 */
$("#obj39689").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj39689_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39689_onTap is still running");
	return;
}
var obj39689_onTap_runningActionsCount = 0;
var obj39689_onTap_loopCount = 0;
obj39689_onTap_actionGroup0();
});










/*
 *
 *   obj39686: Event Touch Down
 *
 */
$("#obj39686").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj39686_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39686_onTap is still running");
	return;
}
var obj39686_onTap_runningActionsCount = 0;
var obj39686_onTap_loopCount = 0;
obj39686_onTap_actionGroup0();
});






























/*
 *
 *   obj67150: Event Touch Down
 *
 */
$("#obj67150").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67150_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67150_onTap is still running");
	return;
}
var obj67150_onTap_runningActionsCount = 0;
var obj67150_onTap_loopCount = 0;
obj67150_onTap_actionGroup0();
});










/*
 *
 *   obj67142: Event Touch Down
 *
 */
$("#obj67142").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67142_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67142_onTap is still running");
	return;
}
var obj67142_onTap_runningActionsCount = 0;
var obj67142_onTap_loopCount = 0;
obj67142_onTap_actionGroup0();
});










/*
 *
 *   obj88477: Event Touch Down
 *
 */
$("#obj88477").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88477_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88477_onTap is still running");
	return;
}
var obj88477_onTap_runningActionsCount = 0;
var obj88477_onTap_loopCount = 0;
obj88477_onTap_actionGroup0();
});










/*
 *
 *   obj88472: Event Touch Down
 *
 */
$("#obj88472").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88472_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88472_onTap is still running");
	return;
}
var obj88472_onTap_runningActionsCount = 0;
var obj88472_onTap_loopCount = 0;
obj88472_onTap_actionGroup0();
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
	
$("#obj39705").trigger('SCEventShow');
$("#obj39689").trigger('SCEventShow');
$("#obj39686").trigger('SCEventShow');
$("#obj39684").trigger('SCEventShow');
$("#obj39707").trigger('SCEventShow');
$("#obj67150").trigger('SCEventShow');
$("#obj67142").trigger('SCEventShow');
$("#obj88477").trigger('SCEventShow');
$("#obj88472").trigger('SCEventShow');
$("#obj88482").trigger('SCEventShow');
$("#obj94897").trigger('SCEventShow');
$("#obj67156").trigger('SCEventShow');
	
});